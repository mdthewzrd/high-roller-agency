import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Query to get orders for a specific user
export const getUserOrders = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const orders = await ctx.db
      .query("orders")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();

    // Fetch package and service details for each order
    const ordersWithDetails = await Promise.all(
      orders.map(async (order) => {
        const pkg = await ctx.db.get(order.packageId);
        if (!pkg) return { ...order, package: null, service: null };

        const service = await ctx.db.get(pkg.serviceId);
        return { ...order, package: pkg, service };
      })
    );

    return ordersWithDetails;
  },
});

// Query to get a specific order by ID
export const getOrderById = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, args) => {
    const order = await ctx.db.get(args.orderId);
    if (!order) return null;

    const pkg = await ctx.db.get(order.packageId);
    if (!pkg) return { ...order, package: null, service: null };

    const service = await ctx.db.get(pkg.serviceId);
    return { ...order, package: pkg, service };
  },
});

// Mutation to create a new order
export const createOrder = mutation({
  args: {
    userId: v.id("users"),
    packageId: v.id("packages"),
    inputData: v.object({
      url: v.optional(v.string()),
      notes: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    // Verify user exists and is active
    const user = await ctx.db.get(args.userId);
    if (!user || user.status !== "active") {
      throw new Error("User not found or not active");
    }

    // Verify package exists and is active
    const pkg = await ctx.db.get(args.packageId);
    if (!pkg || !pkg.active) {
      throw new Error("Package not found or not available");
    }

    // Verify service exists and is active
    const service = await ctx.db.get(pkg.serviceId);
    if (!service || !service.active) {
      throw new Error("Service not found or not available");
    }

    // Create the order
    const orderId = await ctx.db.insert("orders", {
      userId: args.userId,
      packageId: args.packageId,
      status: "pending",
      inputData: args.inputData,
      totalPrice: pkg.price,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return orderId;
  },
});

// Mutation to update order status
export const updateOrderStatus = mutation({
  args: {
    orderId: v.id("orders"),
    status: v.union(
      v.literal("pending"),
      v.literal("inProgress"),
      v.literal("complete"),
      v.literal("canceled")
    ),
  },
  handler: async (ctx, args) => {
    const order = await ctx.db.get(args.orderId);
    if (!order) {
      throw new Error("Order not found");
    }

    const updates: any = {
      status: args.status,
      updatedAt: Date.now(),
    };

    // Set completedAt timestamp when order is completed
    if (args.status === "complete") {
      updates.completedAt = Date.now();
    }

    await ctx.db.patch(args.orderId, updates);
  },
});

// Admin query to get all orders
export const adminGetAllOrders = query({
  args: {},
  handler: async (ctx, args) => {
    // TODO: Add admin role check when auth is properly connected
    const orders = await ctx.db
      .query("orders")
      .withIndex("by_created_at")
      .order("desc")
      .collect();

    // Fetch user, package, and service details for each order
    const ordersWithDetails = await Promise.all(
      orders.map(async (order) => {
        const user = await ctx.db.get(order.userId);
        const pkg = await ctx.db.get(order.packageId);
        
        let service = null;
        if (pkg) {
          service = await ctx.db.get(pkg.serviceId);
        }

        return { 
          ...order, 
          user: user ? { id: user._id, name: user.name, email: user.email } : null,
          package: pkg,
          service
        };
      })
    );

    return ordersWithDetails;
  },
});

// Query to get orders by status
export const getOrdersByStatus = query({
  args: { 
    status: v.union(
      v.literal("pending"),
      v.literal("inProgress"),
      v.literal("complete"),
      v.literal("canceled")
    )
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_status", (q) => q.eq("status", args.status))
      .order("desc")
      .collect();
  },
});