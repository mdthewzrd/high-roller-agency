import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const seedDatabase = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if data already exists
    const existingServices = await ctx.db.query("services").collect();
    if (existingServices.length > 0) {
      return { message: "Database already seeded" };
    }

    const now = Date.now();
    const servicesData = [
      // Instagram Services
      {
        name: "Instagram Monthly Campaign",
        description: "Monthly follower growth and engagement campaign. Starts within 24h.",
        category: "socialMedia" as const,
        platform: "instagram",
        type: "monthly",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Instagram Post Campaign",
        description: "Single post engagement boost with likes, views, saves, and shares.",
        category: "socialMedia" as const,
        platform: "instagram",
        type: "post",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Instagram Comment Campaign",
        description: "Targeted comment campaigns for increased engagement.",
        category: "socialMedia" as const,
        platform: "instagram",
        type: "comments",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Instagram Account Services",
        description: "Specialized account services including unbanning and username claims.",
        category: "socialMedia" as const,
        platform: "instagram",
        type: "account",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      
      // YouTube Services
      {
        name: "YouTube Long-Form Post Campaign",
        description: "Views and engagement for long-form YouTube videos.",
        category: "socialMedia" as const,
        platform: "youtube",
        type: "longform",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "YouTube Subscribers",
        description: "High-quality YouTube subscriber growth packages.",
        category: "socialMedia" as const,
        platform: "youtube",
        type: "subscribers",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "YouTube Shorts",
        description: "Views and likes for YouTube Shorts content.",
        category: "socialMedia" as const,
        platform: "youtube",
        type: "shorts",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      
      // TikTok Services
      {
        name: "TikTok Followers",
        description: "Organic TikTok follower growth packages.",
        category: "socialMedia" as const,
        platform: "tiktok",
        type: "followers",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "TikTok Post Campaign",
        description: "Views and engagement for TikTok videos.",
        category: "socialMedia" as const,
        platform: "tiktok",
        type: "post",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      
      // Twitter Services
      {
        name: "Twitter/X Growth Campaign",
        description: "Followers, likes, and retweets for Twitter/X.",
        category: "socialMedia" as const,
        platform: "twitter",
        type: "growth",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      
      // Spotify Services
      {
        name: "Spotify Song Campaign",
        description: "14-30 day streaming campaigns with algorithm boost.",
        category: "socialMedia" as const,
        platform: "spotify",
        type: "song",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Spotify Playlist Marketing",
        description: "For playlist owners - daily stream growth.",
        category: "socialMedia" as const,
        platform: "spotify",
        type: "playlist",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Spotify Premium Marketing",
        description: "Tier-1 focused streaming with geo-targeting.",
        category: "socialMedia" as const,
        platform: "spotify",
        type: "premium",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      
      // LinkedIn Services
      {
        name: "LinkedIn Professional Growth",
        description: "Professional network growth and engagement.",
        category: "socialMedia" as const,
        platform: "linkedin",
        type: "growth",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      
      // Tools
      {
        name: "Website Design",
        description: "Professional website design and development.",
        category: "tool" as const,
        platform: undefined,
        type: "website",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "SEO Optimization",
        description: "Search engine optimization services.",
        category: "tool" as const,
        platform: undefined,
        type: "seo",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Google Knowledge Panel",
        description: "Google Knowledge Panel creation and management.",
        category: "tool" as const,
        platform: undefined,
        type: "knowledge-panel",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Email Automation",
        description: "Email marketing automation setup.",
        category: "tool" as const,
        platform: undefined,
        type: "email",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Short-Form Content Bot",
        description: "Automated short-form content creation.",
        category: "tool" as const,
        platform: undefined,
        type: "content-bot",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "App Building",
        description: "Mobile and web application development.",
        category: "tool" as const,
        platform: undefined,
        type: "app",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
    ];

    // Insert services and collect IDs
    const serviceIds: Record<string, any> = {};
    
    for (const service of servicesData) {
      const id = await ctx.db.insert("services", service);
      serviceIds[service.name] = id;
    }

    // Create packages for services
    const packagesData = [
      // Instagram Monthly Campaign Packages
      {
        serviceId: serviceIds["Instagram Monthly Campaign"],
        name: "Bronze Monthly",
        tier: "Bronze" as const,
        price: 169,
        deliverables: [
          "300-400+ likes per post",
          "3k-4k views per post",
          "30-50+ saves",
          "10-20+ shares",
          "10 comments × 15 posts",
          "+500 followers"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        serviceId: serviceIds["Instagram Monthly Campaign"],
        name: "Silver Monthly",
        tier: "Silver" as const,
        price: 249,
        deliverables: [
          "700-1k+ likes per post",
          "5k-10k views per post",
          "50-100 saves",
          "25-50 shares",
          "+1k followers"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        serviceId: serviceIds["Instagram Monthly Campaign"],
        name: "Gold Monthly",
        tier: "Gold" as const,
        price: 369,
        deliverables: [
          "1.5k-3k likes per post",
          "7.5k-15k views per post",
          "100-200 saves",
          "50-100 shares",
          "+2k followers"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        serviceId: serviceIds["Instagram Monthly Campaign"],
        name: "Emerald Monthly",
        tier: "Emerald" as const,
        price: 499,
        deliverables: [
          "3k-4k likes per post",
          "10k-25k views per post",
          "200-400 saves",
          "100-200 shares",
          "+4k followers"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        serviceId: serviceIds["Instagram Monthly Campaign"],
        name: "Platinum Monthly",
        tier: "Platinum" as const,
        price: 749,
        deliverables: [
          "5k-8k likes per post",
          "25k-50k views per post",
          "400-600 saves",
          "200-400 shares",
          "+10k international followers"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        serviceId: serviceIds["Instagram Monthly Campaign"],
        name: "Diamond Monthly",
        tier: "Diamond" as const,
        price: 999,
        deliverables: [
          "8k-12k likes per post",
          "50k-100k views per post",
          "600-1k saves",
          "300-500 shares",
          "+20k international followers"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      
      // Instagram Post Campaign Packages
      {
        serviceId: serviceIds["Instagram Post Campaign"],
        name: "Bronze Post",
        tier: "Bronze" as const,
        price: 24.99,
        deliverables: [
          "300-400 likes",
          "3k-4k views",
          "30-50 saves",
          "10-20 shares",
          "10 comments"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        serviceId: serviceIds["Instagram Post Campaign"],
        name: "Silver Post",
        tier: "Silver" as const,
        price: 39.99,
        deliverables: [
          "700-1k likes",
          "5k-10k views",
          "50-100 saves",
          "25-50 shares"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        serviceId: serviceIds["Instagram Post Campaign"],
        name: "Gold Post",
        tier: "Gold" as const,
        price: 74.99,
        deliverables: [
          "1.5k-3k likes",
          "7.5k-15k views",
          "100-200 saves",
          "50-100 shares"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      
      // YouTube Long-Form Packages
      {
        serviceId: serviceIds["YouTube Long-Form Post Campaign"],
        name: "Bronze Video",
        tier: "Bronze" as const,
        price: 39.99,
        deliverables: [
          "2.5k views",
          "200-300 likes",
          "20-30 shares",
          "5-10 comments"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        serviceId: serviceIds["YouTube Long-Form Post Campaign"],
        name: "Silver Video",
        tier: "Silver" as const,
        price: 69.99,
        deliverables: [
          "5k views",
          "400-500 likes",
          "50-60 shares",
          "10-15 comments"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        serviceId: serviceIds["YouTube Long-Form Post Campaign"],
        name: "Gold Video",
        tier: "Gold" as const,
        price: 109.99,
        deliverables: [
          "10k views",
          "700-800 likes",
          "100-150 shares",
          "20-30 comments"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      
      // TikTok Post Campaign Packages
      {
        serviceId: serviceIds["TikTok Post Campaign"],
        name: "Bronze TikTok",
        tier: "Bronze" as const,
        price: 24.99,
        deliverables: [
          "25k views",
          "200 likes",
          "10-20 comments",
          "10 saves"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        serviceId: serviceIds["TikTok Post Campaign"],
        name: "Silver TikTok",
        tier: "Silver" as const,
        price: 39.99,
        deliverables: [
          "50k views",
          "400 likes",
          "30 comments",
          "40 saves"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        serviceId: serviceIds["TikTok Post Campaign"],
        name: "Gold TikTok",
        tier: "Gold" as const,
        price: 69.99,
        deliverables: [
          "100k views",
          "1k likes",
          "50+ comments",
          "100+ saves"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      
      // Spotify Song Campaign Packages
      {
        serviceId: serviceIds["Spotify Song Campaign"],
        name: "Gold Streaming",
        tier: "Gold" as const,
        price: 89.99,
        deliverables: [
          "15k streams",
          "14-30 day campaign",
          "Organic growth"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        serviceId: serviceIds["Spotify Song Campaign"],
        name: "Platinum Streaming",
        tier: "Platinum" as const,
        price: 299.99,
        deliverables: [
          "50k streams",
          "10k from algorithm",
          "14-30 day campaign",
          "Premium listeners"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        serviceId: serviceIds["Spotify Song Campaign"],
        name: "Diamond Streaming",
        tier: "Diamond" as const,
        price: 499.99,
        deliverables: [
          "100k streams",
          "30k from algorithm",
          "14-30 day campaign",
          "Premium listeners",
          "Playlist placements"
        ],
        active: true,
        createdAt: now,
        updatedAt: now,
      },
    ];

    // Insert packages
    for (const pkg of packagesData) {
      await ctx.db.insert("packages", pkg);
    }

    // Insert sample publications
    const publicationsData = [
      {
        name: "Forbes",
        category: "online" as const,
        audienceTier: "Premium",
        price: 5000,
        turnaround: "7-14 days",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Business Insider",
        category: "online" as const,
        audienceTier: "Premium",
        price: 3500,
        turnaround: "5-10 days",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "TechCrunch",
        category: "online" as const,
        audienceTier: "Tech",
        price: 4000,
        turnaround: "7-10 days",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Wall Street Journal",
        category: "print" as const,
        audienceTier: "Business",
        price: 8000,
        turnaround: "14-21 days",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "CNN",
        category: "broadcast" as const,
        audienceTier: "National",
        price: 10000,
        turnaround: "14-30 days",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Bloomberg TV",
        category: "digital" as const,
        audienceTier: "Business",
        price: 7500,
        turnaround: "10-20 days",
        active: true,
        createdAt: now,
        updatedAt: now,
      },
    ];

    for (const publication of publicationsData) {
      await ctx.db.insert("publications", publication);
    }

    return {
      message: "Database seeded successfully",
      stats: {
        services: servicesData.length,
        packages: packagesData.length,
        publications: publicationsData.length,
      },
    };
  },
});