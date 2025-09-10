"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { Id } from "@/convex/_generated/dataModel";

export default function AdminOrdersPage() {
  const orders = useQuery(api.orders.adminGetAllOrders);
  const updateOrderStatus = useMutation(api.orders.updateOrderStatus);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  // Filter orders based on search and status
  const filteredOrders = orders?.filter(order => {
    const matchesSearch = searchQuery === "" || 
      order._id.includes(searchQuery) ||
      order.inputData?.url?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  const handleStatusUpdate = async (
    orderId: Id<"orders">, 
    newStatus: "pending" | "inProgress" | "complete" | "canceled"
  ) => {
    try {
      await updateOrderStatus({ orderId, status: newStatus });
      toast.success(`Order status updated to ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update order status");
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return "bg-green-500/20 text-green-500 border-green-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
      case "inProgress":
        return "bg-blue-500/20 text-blue-500 border-blue-500/30";
      case "canceled":
        return "bg-red-500/20 text-red-500 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-500 border-gray-500/30";
    }
  };
  
  // Calculate statistics
  const stats = {
    total: orders?.length || 0,
    pending: orders?.filter(o => o.status === "pending").length || 0,
    inProgress: orders?.filter(o => o.status === "inProgress").length || 0,
    complete: orders?.filter(o => o.status === "complete").length || 0,
    totalRevenue: orders?.reduce((sum, o) => sum + o.totalPrice, 0) || 0,
  };
  
  return (
    <div className="p-8">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Orders Management</h1>
          <p className="text-muted-foreground mt-2">Track and manage all platform orders</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Orders
        </Button>
      </div>
      
      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-5 mb-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Total Orders</p>
          <p className="text-2xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Pending</p>
          <p className="text-2xl font-bold text-yellow-500">{stats.pending}</p>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <p className="text-sm text-muted-foreground">In Progress</p>
          <p className="text-2xl font-bold text-blue-500">{stats.inProgress}</p>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Completed</p>
          <p className="text-2xl font-bold text-green-500">{stats.complete}</p>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Total Revenue</p>
          <p className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by order ID or URL..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="inProgress">In Progress</SelectItem>
            <SelectItem value="complete">Complete</SelectItem>
            <SelectItem value="canceled">Canceled</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          More Filters
        </Button>
      </div>
      
      {/* Orders Table */}
      <div className="rounded-lg border bg-gray-900/50">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders?.map((order) => (
              <TableRow key={order._id}>
                <TableCell className="font-mono text-sm">
                  #{order._id.slice(-8)}
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">User #{order.userId.slice(-6)}</p>
                    {order.inputData?.url && (
                      <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                        {order.inputData.url}
                      </p>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-sm">Package #{order.packageId.slice(-6)}</p>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">
                  ${order.totalPrice.toLocaleString()}
                </TableCell>
                <TableCell>
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => handleStatusUpdate(order._id, "pending")}
                        disabled={order.status === "pending"}
                      >
                        Mark as Pending
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleStatusUpdate(order._id, "inProgress")}
                        disabled={order.status === "inProgress"}
                      >
                        Mark as In Progress
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleStatusUpdate(order._id, "complete")}
                        disabled={order.status === "complete"}
                      >
                        Mark as Complete
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleStatusUpdate(order._id, "canceled")}
                        disabled={order.status === "canceled"}
                        className="text-red-500"
                      >
                        Cancel Order
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Contact Customer</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {(!filteredOrders || filteredOrders.length === 0) && (
          <div className="text-center py-8 text-muted-foreground">
            No orders found
          </div>
        )}
      </div>
    </div>
  );
}