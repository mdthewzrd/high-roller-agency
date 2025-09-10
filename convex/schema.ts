import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    status: v.union(v.literal("pending"), v.literal("active"), v.literal("suspended")),
    role: v.union(v.literal("user"), v.literal("admin")),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_clerk_id", ["clerkId"])
    .index("by_email", ["email"])
    .index("by_status", ["status"]),

  services: defineTable({
    name: v.string(),
    description: v.string(),
    category: v.union(v.literal("socialMedia"), v.literal("publication"), v.literal("tool")),
    platform: v.optional(v.string()),
    type: v.optional(v.string()),
    active: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_category", ["category"])
    .index("by_platform", ["platform"])
    .index("by_active", ["active"]),

  packages: defineTable({
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
    active: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_service_id", ["serviceId"])
    .index("by_tier", ["tier"])
    .index("by_active", ["active"]),

  orders: defineTable({
    userId: v.id("users"),
    packageId: v.id("packages"),
    status: v.union(
      v.literal("pending"),
      v.literal("inProgress"),
      v.literal("complete"),
      v.literal("canceled")
    ),
    inputData: v.object({
      url: v.optional(v.string()),
      notes: v.optional(v.string()),
    }),
    totalPrice: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
    completedAt: v.optional(v.number()),
  })
    .index("by_user_id", ["userId"])
    .index("by_status", ["status"])
    .index("by_created_at", ["createdAt"]),

  publications: defineTable({
    name: v.string(),
    category: v.union(
      v.literal("online"),
      v.literal("print"),
      v.literal("broadcast"),
      v.literal("digital")
    ),
    audienceTier: v.string(),
    price: v.number(),
    turnaround: v.string(),
    active: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_category", ["category"])
    .index("by_active", ["active"]),
});