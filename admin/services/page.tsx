"use client";

import React, { useState, useMemo } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { toast } from "sonner";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Package,
  Eye,
  EyeOff,
  MoreHorizontal,
  AlertCircle,
} from "lucide-react";

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
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// Types
type Service = {
  _id: Id<"services">;
  name: string;
  description: string;
  category: "socialMedia" | "publication" | "tool";
  platform?: string;
  type?: string;
  active: boolean;
  createdAt: number;
  updatedAt: number;
  packages: Package[];
};

type Package = {
  _id: Id<"packages">;
  serviceId: Id<"services">;
  name: string;
  tier: "Bronze" | "Silver" | "Gold" | "Emerald" | "Platinum" | "Diamond";
  price: number;
  deliverables: string[];
  active: boolean;
  createdAt: number;
  updatedAt: number;
};

type ServiceFormData = {
  name: string;
  description: string;
  category: "socialMedia" | "publication" | "tool";
  platform: string;
  type: string;
};

type PackageFormData = {
  name: string;
  tier: "Bronze" | "Silver" | "Gold" | "Emerald" | "Platinum" | "Diamond";
  price: number;
  deliverables: string[];
};

const TIER_COLORS = {
  Bronze: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  Silver: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
  Gold: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Emerald: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
  Platinum: "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  Diamond: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
};

const CATEGORY_LABELS = {
  socialMedia: "Social Media",
  publication: "Publication",
  tool: "Tool",
};

export default function AdminServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isPackageDialogOpen, setIsPackageDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formData, setFormData] = useState<ServiceFormData>({
    name: "",
    description: "",
    category: "socialMedia",
    platform: "",
    type: "",
  });
  const [packageFormData, setPackageFormData] = useState<PackageFormData>({
    name: "",
    tier: "Bronze",
    price: 0,
    deliverables: [""],
  });

  // Convex queries and mutations
  const services = useQuery(api.services.adminListAllServices) || [];
  const createService = useMutation(api.services.createService);
  const updateService = useMutation(api.services.updateService);
  const toggleServiceStatus = useMutation(api.services.adminToggleServiceStatus);
  const createPackage = useMutation(api.packages.createPackage);
  const updatePackage = useMutation(api.packages.updatePackage);
  const deletePackage = useMutation(api.packages.deletePackage);

  // Filter services based on search and filters
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.platform?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = categoryFilter === "all" || service.category === categoryFilter;
      const matchesStatus = statusFilter === "all" || 
        (statusFilter === "active" && service.active) ||
        (statusFilter === "inactive" && !service.active);

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [services, searchQuery, categoryFilter, statusFilter]);

  // Handle form submissions
  const handleCreateService = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createService({
        name: formData.name,
        description: formData.description,
        category: formData.category,
        platform: formData.platform || undefined,
        type: formData.type || undefined,
      });
      toast.success("Service created successfully");
      setIsCreateDialogOpen(false);
      resetForm();
    } catch (error) {
      toast.error("Failed to create service");
      console.error(error);
    }
  };

  const handleUpdateService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;
    
    try {
      await updateService({
        serviceId: selectedService._id,
        name: formData.name,
        description: formData.description,
        category: formData.category,
        platform: formData.platform || undefined,
        type: formData.type || undefined,
      });
      toast.success("Service updated successfully");
      setIsEditDialogOpen(false);
      resetForm();
      setSelectedService(null);
    } catch (error) {
      toast.error("Failed to update service");
      console.error(error);
    }
  };

  const handleToggleStatus = async (serviceId: Id<"services">) => {
    try {
      await toggleServiceStatus({ serviceId });
      toast.success("Service status updated successfully");
    } catch (error) {
      toast.error("Failed to update service status");
      console.error(error);
    }
  };

  const handleCreatePackage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;

    try {
      await createPackage({
        serviceId: selectedService._id,
        name: packageFormData.name,
        tier: packageFormData.tier,
        price: packageFormData.price,
        deliverables: packageFormData.deliverables.filter(d => d.trim() !== ""),
      });
      toast.success("Package created successfully");
      setIsPackageDialogOpen(false);
      resetPackageForm();
    } catch (error) {
      toast.error("Failed to create package");
      console.error(error);
    }
  };

  const handleDeletePackage = async (packageId: Id<"packages">) => {
    try {
      await deletePackage({ packageId });
      toast.success("Package deleted successfully");
    } catch (error) {
      toast.error("Failed to delete package");
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      category: "socialMedia",
      platform: "",
      type: "",
    });
  };

  const resetPackageForm = () => {
    setPackageFormData({
      name: "",
      tier: "Bronze",
      price: 0,
      deliverables: [""],
    });
  };

  const openEditDialog = (service: Service) => {
    setSelectedService(service);
    setFormData({
      name: service.name,
      description: service.description,
      category: service.category,
      platform: service.platform || "",
      type: service.type || "",
    });
    setIsEditDialogOpen(true);
  };

  const openPackageDialog = (service: Service) => {
    setSelectedService(service);
    resetPackageForm();
    setIsPackageDialogOpen(true);
  };

  const updateDeliverable = (index: number, value: string) => {
    const newDeliverables = [...packageFormData.deliverables];
    newDeliverables[index] = value;
    setPackageFormData(prev => ({ ...prev, deliverables: newDeliverables }));
  };

  const addDeliverable = () => {
    setPackageFormData(prev => ({
      ...prev,
      deliverables: [...prev.deliverables, ""]
    }));
  };

  const removeDeliverable = (index: number) => {
    if (packageFormData.deliverables.length > 1) {
      const newDeliverables = packageFormData.deliverables.filter((_, i) => i !== index);
      setPackageFormData(prev => ({ ...prev, deliverables: newDeliverables }));
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Services Management</h1>
          <p className="text-muted-foreground">
            Manage all services, packages, and their availability
          </p>
        </div>
        <Button
          onClick={() => {
            resetForm();
            setIsCreateDialogOpen(true);
          }}
          className="bg-green-600 hover:bg-green-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{services.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {services.filter(s => s.active).length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Packages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {services.reduce((acc, service) => acc + service.packages.length, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(services.map(s => s.category)).size}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="socialMedia">Social Media</SelectItem>
                <SelectItem value="publication">Publication</SelectItem>
                <SelectItem value="tool">Tool</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Services Table */}
      <Card>
        <CardHeader>
          <CardTitle>Services ({filteredServices.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Packages</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredServices.map((service) => (
                <TableRow key={service._id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-muted-foreground line-clamp-2">
                        {service.description}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">
                      {CATEGORY_LABELS[service.category as keyof typeof CATEGORY_LABELS]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {service.platform && (
                      <Badge variant="outline">{service.platform}</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {service.packages.map((pkg: Package) => (
                        <Badge
                          key={pkg._id}
                          className={`text-xs ${TIER_COLORS[pkg.tier as keyof typeof TIER_COLORS]}`}
                        >
                          {pkg.tier} (${pkg.price})
                        </Badge>
                      ))}
                      {service.packages.length === 0 && (
                        <span className="text-sm text-muted-foreground">No packages</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={service.active ? "default" : "secondary"}
                      className={service.active ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : ""}
                    >
                      {service.active ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(service.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => openEditDialog(service)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Service
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => openPackageDialog(service)}>
                          <Package className="h-4 w-4 mr-2" />
                          Add Package
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => handleToggleStatus(service._id)}
                        >
                          {service.active ? (
                            <>
                              <EyeOff className="h-4 w-4 mr-2" />
                              Deactivate
                            </>
                          ) : (
                            <>
                              <Eye className="h-4 w-4 mr-2" />
                              Activate
                            </>
                          )}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filteredServices.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <div className="flex flex-col items-center gap-2">
                      <AlertCircle className="h-8 w-8 text-muted-foreground" />
                      <p className="text-muted-foreground">No services found</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create Service Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Service</DialogTitle>
            <DialogDescription>
              Add a new service to your platform
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreateService} className="space-y-4">
            <FormField name="name">
              <FormItem>
                <FormLabel>Service Name *</FormLabel>
                <FormControl>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter service name"
                    required
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <FormField name="description">
              <FormItem>
                <FormLabel>Description *</FormLabel>
                <FormControl>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe the service"
                    required
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <FormField name="category">
              <FormItem>
                <FormLabel>Category *</FormLabel>
                <FormControl>
                  <Select
                    value={formData.category}
                    onValueChange={(value: "socialMedia" | "publication" | "tool") =>
                      setFormData(prev => ({ ...prev, category: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="socialMedia">Social Media</SelectItem>
                      <SelectItem value="publication">Publication</SelectItem>
                      <SelectItem value="tool">Tool</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            </FormField>

            <FormField name="platform">
              <FormItem>
                <FormLabel>Platform</FormLabel>
                <FormControl>
                  <Input
                    value={formData.platform}
                    onChange={(e) => setFormData(prev => ({ ...prev, platform: e.target.value }))}
                    placeholder="e.g., Instagram, LinkedIn"
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <FormField name="type">
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Input
                    value={formData.type}
                    onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                    placeholder="e.g., Posts, Stories, Reels"
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsCreateDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Create Service
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Service Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Service</DialogTitle>
            <DialogDescription>
              Update service information
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUpdateService} className="space-y-4">
            <FormField name="name">
              <FormItem>
                <FormLabel>Service Name *</FormLabel>
                <FormControl>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter service name"
                    required
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <FormField name="description">
              <FormItem>
                <FormLabel>Description *</FormLabel>
                <FormControl>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe the service"
                    required
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <FormField name="category">
              <FormItem>
                <FormLabel>Category *</FormLabel>
                <FormControl>
                  <Select
                    value={formData.category}
                    onValueChange={(value: "socialMedia" | "publication" | "tool") =>
                      setFormData(prev => ({ ...prev, category: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="socialMedia">Social Media</SelectItem>
                      <SelectItem value="publication">Publication</SelectItem>
                      <SelectItem value="tool">Tool</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            </FormField>

            <FormField name="platform">
              <FormItem>
                <FormLabel>Platform</FormLabel>
                <FormControl>
                  <Input
                    value={formData.platform}
                    onChange={(e) => setFormData(prev => ({ ...prev, platform: e.target.value }))}
                    placeholder="e.g., Instagram, LinkedIn"
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <FormField name="type">
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Input
                    value={formData.type}
                    onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                    placeholder="e.g., Posts, Stories, Reels"
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Update Service
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Add Package Dialog */}
      <Dialog open={isPackageDialogOpen} onOpenChange={setIsPackageDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Add Package</DialogTitle>
            <DialogDescription>
              Add a new package to {selectedService?.name}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreatePackage} className="space-y-4">
            <FormField name="name">
              <FormItem>
                <FormLabel>Package Name *</FormLabel>
                <FormControl>
                  <Input
                    value={packageFormData.name}
                    onChange={(e) => setPackageFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter package name"
                    required
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <div className="grid grid-cols-2 gap-4">
              <FormField name="tier">
                <FormItem>
                  <FormLabel>Tier *</FormLabel>
                  <FormControl>
                    <Select
                      value={packageFormData.tier}
                      onValueChange={(value: typeof packageFormData.tier) =>
                        setPackageFormData(prev => ({ ...prev, tier: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Bronze">Bronze</SelectItem>
                        <SelectItem value="Silver">Silver</SelectItem>
                        <SelectItem value="Gold">Gold</SelectItem>
                        <SelectItem value="Emerald">Emerald</SelectItem>
                        <SelectItem value="Platinum">Platinum</SelectItem>
                        <SelectItem value="Diamond">Diamond</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              </FormField>

              <FormField name="price">
                <FormItem>
                  <FormLabel>Price *</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={packageFormData.price}
                      onChange={(e) => setPackageFormData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                      placeholder="0.00"
                      required
                    />
                  </FormControl>
                </FormItem>
              </FormField>
            </div>

            <FormField name="deliverables">
              <FormItem>
                <FormLabel>Deliverables *</FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    {packageFormData.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={deliverable}
                          onChange={(e) => updateDeliverable(index, e.target.value)}
                          placeholder={`Deliverable ${index + 1}`}
                          required
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeDeliverable(index)}
                          disabled={packageFormData.deliverables.length === 1}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addDeliverable}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Deliverable
                    </Button>
                  </div>
                </FormControl>
              </FormItem>
            </FormField>

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsPackageDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Add Package
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}