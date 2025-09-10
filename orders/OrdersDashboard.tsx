"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  Package, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Download, 
  Search,
  Filter,
  DollarSign 
} from "lucide-react";

// Sample order data - in a real app this would come from a database
const sampleOrders = [
  {
    id: "ORD-2024-001",
    service: "Instagram Post Boost",
    platform: "Instagram",
    status: "completed",
    orderDate: "2024-01-15",
    completedDate: "2024-01-17",
    amount: 49.00,
    description: "1,000-2,000+ likes, 100-200+ comments",
    deliverables: [
      "2,150 likes delivered",
      "186 comments added", 
      "89 saves generated",
      "1,245 profile visits"
    ]
  },
  {
    id: "ORD-2024-002", 
    service: "YouTube Video Promotion",
    platform: "YouTube",
    status: "in_progress",
    orderDate: "2024-01-20",
    amount: 79.00,
    description: "10,000-20,000+ views, 1,000-2,000+ likes",
    estimatedCompletion: "2024-01-23",
    progress: 65
  },
  {
    id: "ORD-2024-003",
    service: "Hood Critic Publication",
    platform: "Publication", 
    status: "pending",
    orderDate: "2024-01-22",
    amount: 150.00,
    description: "Music publication feature article",
    estimatedCompletion: "2024-01-25"
  },
  {
    id: "ORD-2024-004",
    service: "SEO Optimization Package", 
    platform: "Tools",
    status: "in_progress",
    orderDate: "2024-01-18",
    amount: 299.00,
    description: "Complete SEO audit and optimization",
    estimatedCompletion: "2024-02-15",
    progress: 30
  },
  {
    id: "ORD-2024-005",
    service: "TikTok Video Boost", 
    platform: "TikTok",
    status: "completed",
    orderDate: "2024-01-12",
    completedDate: "2024-01-14",
    amount: 35.00,
    description: "50,000-100,000+ views, 5,000+ likes",
    deliverables: [
      "87,500 views delivered",
      "6,200 likes added",
      "890 shares generated",
      "2,100 profile visits"
    ]
  },
  {
    id: "ORD-2024-006",
    service: "LinkedIn Article Feature",
    platform: "Publication",
    status: "completed", 
    orderDate: "2024-01-10",
    completedDate: "2024-01-13",
    amount: 200.00,
    description: "Professional business publication",
    deliverables: [
      "Article published on 3 major publications",
      "15,000+ article views",
      "500+ LinkedIn profile visits",
      "45 connection requests"
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "in_progress": 
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "pending":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="h-4 w-4" />;
    case "in_progress":
      return <Clock className="h-4 w-4" />;
    case "pending":
      return <AlertCircle className="h-4 w-4" />;
    default:
      return <Package className="h-4 w-4" />;
  }
};

const getPlatformColor = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "instagram":
      return "border-l-pink-500";
    case "youtube":
      return "border-l-red-500";
    case "tiktok":
      return "border-l-gray-500";
    case "publication":
      return "border-l-purple-500";
    case "tools":
      return "border-l-green-500";
    default:
      return "border-l-gray-500";
  }
};

export default function OrdersDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date_desc");

  const filteredAndSortedOrders = useMemo(() => {
    const filtered = sampleOrders.filter(order => {
      const matchesSearch = 
        order.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === "all" || order.status === statusFilter;
      const matchesPlatform = platformFilter === "all" || order.platform.toLowerCase() === platformFilter.toLowerCase();

      return matchesSearch && matchesStatus && matchesPlatform;
    });

    // Sort orders
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date_desc":
          return new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime();
        case "date_asc":
          return new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime();
        case "amount_desc":
          return b.amount - a.amount;
        case "amount_asc":
          return a.amount - b.amount;
        case "status":
          return a.status.localeCompare(b.status);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, statusFilter, platformFilter, sortBy]);

  const completedOrders = sampleOrders.filter(order => order.status === "completed").length;
  const inProgressOrders = sampleOrders.filter(order => order.status === "in_progress").length;
  const totalSpent = sampleOrders.reduce((sum, order) => sum + order.amount, 0);
  const platforms = Array.from(new Set(sampleOrders.map(order => order.platform)));

  return (
    <>
      {/* Header Section */}
      <div className="bg-gray-950/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">My Orders</h1>
          <p className="text-xl text-muted-foreground">Track your service orders and view delivery status</p>
        </div>
      </div>

      {/* Enhanced Stats Overview */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Package className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{sampleOrders.length}</p>
                  <p className="text-sm text-gray-400">Total Orders</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{completedOrders}</p>
                  <p className="text-sm text-gray-400">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Clock className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{inProgressOrders}</p>
                  <p className="text-sm text-gray-400">In Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">${totalSpent.toFixed(2)}</p>
                  <p className="text-sm text-gray-400">Total Spent</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-gray-900/50 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Filter className="h-5 w-5" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={platformFilter} onValueChange={setPlatformFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  {platforms.map((platform) => (
                    <SelectItem key={platform} value={platform.toLowerCase()}>
                      {platform}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date_desc">Newest First</SelectItem>
                  <SelectItem value="date_asc">Oldest First</SelectItem>
                  <SelectItem value="amount_desc">Highest Amount</SelectItem>
                  <SelectItem value="amount_asc">Lowest Amount</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredAndSortedOrders.length} of {sampleOrders.length} orders
          </p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredAndSortedOrders.map((order) => (
            <Card key={order.id} className={`bg-gray-900/50 border-gray-800 border-l-4 ${getPlatformColor(order.platform)} hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl text-white">{order.service}</CardTitle>
                      <Badge className={`${getStatusColor(order.status)} border`}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(order.status)}
                          <span className="capitalize">{order.status.replace('_', ' ')}</span>
                        </div>
                      </Badge>
                    </div>
                    <p className="text-gray-400 mb-2">{order.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Ordered: {new Date(order.orderDate).toLocaleDateString()}</span>
                      </div>
                      {order.completedDate && (
                        <div className="flex items-center gap-1">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Completed: {new Date(order.completedDate).toLocaleDateString()}</span>
                        </div>
                      )}
                      {order.estimatedCompletion && !order.completedDate && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Est. completion: {new Date(order.estimatedCompletion).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">${order.amount.toFixed(2)}</p>
                    <p className="text-sm text-gray-400">Order #{order.id}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {order.status === "in_progress" && order.progress && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm text-white">{order.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${order.progress}%` }}
                      />
                    </div>
                  </div>
                )}
                
                {order.status === "completed" && order.deliverables && (
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-3">Deliverables:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {order.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  {order.status === "completed" && (
                    <Button size="sm" variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    View Details
                  </Button>
                  {order.status === "completed" && (
                    <Button size="sm" className="green-gradient-bg">
                      Reorder
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredAndSortedOrders.length === 0 && (
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-12 text-center">
              <Package className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {sampleOrders.length === 0 ? "No Orders Yet" : "No Orders Match Your Filters"}
              </h3>
              <p className="text-gray-400 mb-6">
                {sampleOrders.length === 0 
                  ? "Start growing your online presence with our services"
                  : "Try adjusting your filters to see more results"
                }
              </p>
              {sampleOrders.length === 0 && (
                <Button className="green-gradient-bg" asChild>
                  <Link href="/services">Browse Services</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}