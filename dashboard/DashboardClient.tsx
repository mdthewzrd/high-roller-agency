"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  DollarSign, 
  Clock, 
  ShoppingBag,
  Activity,
  ArrowUpRight,
  Target,
  Zap
} from "lucide-react";

export default function DashboardClient() {
  const { user } = useUser();
  const [timeRange, setTimeRange] = useState("7d");
  
  // Fetch user data from Convex
  // Note: For now using sample data until Convex user sync is complete
  interface Order {
    _id: string;
    status: "pending" | "inProgress" | "complete" | "canceled";
    totalPrice: number;
    createdAt: number;
  }
  const userOrders: Order[] = []; // TODO: Connect to actual Convex query
  
  // Calculate statistics
  const stats = {
    totalOrders: userOrders?.length || 0,
    activeOrders: userOrders?.filter(o => o.status === "inProgress").length || 0,
    completedOrders: userOrders?.filter(o => o.status === "complete").length || 0,
    pendingOrders: userOrders?.filter(o => o.status === "pending").length || 0,
    totalSpent: userOrders?.reduce((sum, o) => sum + o.totalPrice, 0) || 0,
    avgOrderValue: userOrders && userOrders.length > 0 
      ? (userOrders.reduce((sum, o) => sum + o.totalPrice, 0) / userOrders.length)
      : 0,
  };
  
  // Calculate growth metrics (simulated for now)
  const growthMetrics = {
    ordersGrowth: 23.5,
    spendingGrowth: 45.2,
    completionRate: stats.totalOrders > 0 
      ? ((stats.completedOrders / stats.totalOrders) * 100).toFixed(1)
      : 0,
    avgDeliveryTime: "24h",
  };
  
  // Get recent activity
  const recentOrders = userOrders?.slice(0, 5) || [];
  
  // Platform distribution (simulated)
  const platformStats = [
    { name: "Instagram", value: 35, color: "bg-pink-500" },
    { name: "YouTube", value: 28, color: "bg-red-500" },
    { name: "TikTok", value: 22, color: "bg-gray-500" },
    { name: "Twitter", value: 10, color: "bg-blue-500" },
    { name: "Others", value: 5, color: "bg-purple-500" },
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, {user?.firstName || "Reseller"}!
          </h1>
          <p className="text-gray-400">
            Here&apos;s an overview of your wholesale platform performance
          </p>
        </div>
        
        {/* Time Range Selector */}
        <div className="flex gap-2 mb-8">
          {["24h", "7d", "30d", "90d"].map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeRange(range)}
              className={timeRange === range ? "green-gradient-bg" : ""}
            >
              {range === "24h" ? "24 Hours" : 
               range === "7d" ? "7 Days" : 
               range === "30d" ? "30 Days" : "90 Days"}
            </Button>
          ))}
        </div>
        
        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <ShoppingBag className="h-6 w-6 text-green-500" />
                </div>
                <Badge className="bg-green-500/20 text-green-500 border-0">
                  +{growthMetrics.ordersGrowth}%
                </Badge>
              </div>
              <h3 className="text-3xl font-bold text-white">{stats.totalOrders}</h3>
              <p className="text-gray-400 text-sm mt-1">Total Orders</p>
              <div className="mt-3 flex items-center text-xs text-gray-500">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                {stats.activeOrders} active
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <DollarSign className="h-6 w-6 text-blue-500" />
                </div>
                <Badge className="bg-blue-500/20 text-blue-500 border-0">
                  +{growthMetrics.spendingGrowth}%
                </Badge>
              </div>
              <h3 className="text-3xl font-bold text-white">
                ${stats.totalSpent.toLocaleString()}
              </h3>
              <p className="text-gray-400 text-sm mt-1">Total Spent</p>
              <div className="mt-3 flex items-center text-xs text-gray-500">
                <Activity className="h-3 w-3 text-blue-500 mr-1" />
                ${stats.avgOrderValue.toFixed(0)} avg
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Target className="h-6 w-6 text-purple-500" />
                </div>
                <Badge className="bg-purple-500/20 text-purple-500 border-0">
                  {growthMetrics.completionRate}%
                </Badge>
              </div>
              <h3 className="text-3xl font-bold text-white">
                {stats.completedOrders}
              </h3>
              <p className="text-gray-400 text-sm mt-1">Completed</p>
              <div className="mt-3 flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 text-purple-500 mr-1" />
                {stats.pendingOrders} pending
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-yellow-500/10 rounded-lg">
                  <Zap className="h-6 w-6 text-yellow-500" />
                </div>
                <Badge className="bg-yellow-500/20 text-yellow-500 border-0">
                  Fast
                </Badge>
              </div>
              <h3 className="text-3xl font-bold text-white">
                {growthMetrics.avgDeliveryTime}
              </h3>
              <p className="text-gray-400 text-sm mt-1">Avg. Delivery</p>
              <div className="mt-3 flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 text-yellow-500 mr-1" />
                Within 24-48h
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Platform Distribution */}
          <Card className="bg-gray-900/50 border-gray-800 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white">Platform Distribution</CardTitle>
              <CardDescription>Your service usage across platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {platformStats.map((platform) => (
                  <div key={platform.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">{platform.name}</span>
                      <span className="text-sm font-medium text-white">{platform.value}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className={`${platform.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${platform.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Quick Actions */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
              <CardDescription>Frequently used services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link href="/services/social-media/instagram">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                  Instagram Growth
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link href="/services/social-media/youtube">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                  YouTube Promotion
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link href="/services/social-media/tiktok">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3" />
                  TikTok Boost
                </Link>
              </Button>
              <Button className="w-full green-gradient-bg" asChild>
                <Link href="/services">
                  Browse All Services
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Orders */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white">Recent Orders</CardTitle>
                <CardDescription>Your latest service orders</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/orders">
                  View All
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {recentOrders.length > 0 ? (
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div 
                    key={order._id} 
                    className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${
                        order.status === "complete" ? "bg-green-500" :
                        order.status === "inProgress" ? "bg-blue-500" :
                        order.status === "pending" ? "bg-yellow-500" :
                        "bg-red-500"
                      }`} />
                      <div>
                        <p className="text-white font-medium">
                          Order #{order._id.slice(-6)}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">
                        ${order.totalPrice}
                      </p>
                      <Badge className={`text-xs ${
                        order.status === "complete" ? "bg-green-500/20 text-green-500" :
                        order.status === "inProgress" ? "bg-blue-500/20 text-blue-500" :
                        order.status === "pending" ? "bg-yellow-500/20 text-yellow-500" :
                        "bg-red-500/20 text-red-500"
                      } border-0`}>
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Package className="h-12 w-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400 mb-4">No orders yet</p>
                <Button className="green-gradient-bg" asChild>
                  <Link href="/services">Start Ordering</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}