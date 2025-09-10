"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Clock, CheckCircle, XCircle, LoaderIcon } from "lucide-react";

interface Order {
  id: string;
  userId: string;
  serviceId: string;
  serviceName: string;
  packageName: string;
  price: number;
  inputData: {
    url: string;
    notes?: string;
  };
  status: string;
  createdAt: string;
}

const statusConfig = {
  completed: {
    color: "bg-green-500",
    icon: CheckCircle,
    text: "Completed"
  },
  inProgress: {
    color: "bg-blue-500", 
    icon: Clock,
    text: "In Progress"
  },
  pending: {
    color: "bg-yellow-500",
    icon: Clock,
    text: "Pending"
  },
  canceled: {
    color: "bg-red-500",
    icon: XCircle,
    text: "Canceled"
  }
};

export default function OrdersClient() {
  const { user, isLoaded: isUserLoaded } = useUser();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load orders from localStorage
  useEffect(() => {
    if (user) {
      try {
        const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
        const userOrders = storedOrders.filter((order: Order) => order.userId === user.id);
        setOrders(userOrders);
      } catch (error) {
        console.error("Error loading orders:", error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [user]);

  // Calculate stats
  const stats = {
    total: orders.length,
    completed: orders.filter(o => o.status === "completed").length,
    inProgress: orders.filter(o => o.status === "inProgress").length,
    pending: orders.filter(o => o.status === "pending").length,
  };

  if (!isUserLoaded || isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-3">
            <LoaderIcon className="h-6 w-6 animate-spin text-green-500" />
            <span className="text-gray-400">Loading your orders...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Package className="h-8 w-8 text-green-500" />
            <h1 className="text-3xl font-bold text-white">My Orders</h1>
          </div>
          <Button className="green-gradient-bg" asChild>
            <Link href="/services">Browse Services</Link>
          </Button>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-white">{stats.total}</h3>
              <p className="text-gray-400">Total Orders</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-green-500">{stats.completed}</h3>
              <p className="text-gray-400">Completed</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-500">{stats.inProgress}</h3>
              <p className="text-gray-400">In Progress</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-yellow-500">{stats.pending}</h3>
              <p className="text-gray-400">Pending</p>
            </CardContent>
          </Card>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => {
            const StatusIcon = statusConfig[order.status as keyof typeof statusConfig]?.icon || Clock;
            const statusInfo = statusConfig[order.status as keyof typeof statusConfig] || statusConfig.pending;
            
            return (
              <Card key={order.id} className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <StatusIcon className="h-5 w-5 text-white" />
                        <Badge className={statusInfo.color}>
                          {statusInfo.text}
                        </Badge>
                      </div>
                      <div>
                        <CardTitle className="text-white">{order.serviceName}</CardTitle>
                        <p className="text-gray-400 text-sm">Order #{order.id.slice(-8)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-white">${order.price}</p>
                      <p className="text-gray-400 text-sm">{order.packageName} Package</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {order.inputData.url && (
                        <p className="text-gray-300 mb-2 break-all">
                          <strong>Target URL:</strong> {order.inputData.url}
                        </p>
                      )}
                      {order.inputData.notes && (
                        <p className="text-gray-300 mb-2">
                          <strong>Notes:</strong> {order.inputData.notes}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>Ordered: {new Date(order.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-gray-600 text-gray-300"
                        onClick={() => {
                          // TODO: Implement view details modal
                          alert("Order details feature coming soon!");
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Empty State */}
        {orders.length === 0 && (
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-12 text-center">
              <Package className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Orders Yet</h3>
              <p className="text-gray-400 mb-6">
                Start growing your online presence with our services
              </p>
              <Button className="green-gradient-bg" asChild>
                <Link href="/services">Browse Services</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}