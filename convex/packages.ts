import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getByServiceId = query({
  args: { serviceId: v.id("services") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("packages")
      .withIndex("by_service_id", (q) => q.eq("serviceId", args.serviceId))
      .filter((q) => q.eq(q.field("active"), true))
      .collect();
  },
});

export const getById = query({
  args: { packageId: v.id("packages") },
  handler: async (ctx, args) => {
    const pkg = await ctx.db.get(args.packageId);
    if (!pkg || !pkg.active) return null;

    const service = await ctx.db.get(pkg.serviceId);
    return { ...pkg, service };
  },
});

export const createPackage = mutation({
  args: {
    serviceId: v.id("services"),
    name: v.string(),
    tier: v.union(
      v.literal("Bronze"),
      v.literal("Silver"),
      v.literal("Gold"),
      v.literal("Emerald"),
      v.literal("Platinum"),
      v.literal("Diamond")
    ),
    price: v.number(),
    deliverables: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const packageId = await ctx.db.insert("packages", {
      ...args,
      active: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return packageId;
  },
});

export const updatePackage = mutation({
  args: {
    packageId: v.id("packages"),
    name: v.optional(v.string()),
    tier: v.optional(v.union(
      v.literal("Bronze"),
      v.literal("Silver"),
      v.literal("Gold"),
      v.literal("Emerald"),
      v.literal("Platinum"),
      v.literal("Diamond")
    )),
    price: v.optional(v.number()),
    deliverables: v.optional(v.array(v.string())),
    active: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { packageId, ...updates } = args;
    await ctx.db.patch(packageId, {
      ...updates,
      updatedAt: Date.now(),
    });
  },
});

export const deletePackage = mutation({
  args: { packageId: v.id("packages") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.packageId, {
      active: false,
      updatedAt: Date.now(),
    });
  },
});

// Admin-specific package queries
export const adminGetPackagesByServiceId = query({
  args: { serviceId: v.id("services") },
  handler: async (ctx, args) => {
    // TODO: Add admin role check when auth is connected
    return await ctx.db
      .query("packages")
      .withIndex("by_service_id", (q) => q.eq("serviceId", args.serviceId))
      .collect();
  },
});