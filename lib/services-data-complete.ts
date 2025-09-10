// Complete service data from PRD with all platforms and packages

export interface ServicePackage {
  name: string;
  price: number;
  deliverables: string[];
  highlight?: boolean;
}

export interface Service {
  id: string;
  category: "socialMedia" | "publication" | "tool";
  platform: string;
  service: string;
  description: string;
  packages: ServicePackage[];
  notes?: string;
  icon?: string;
  gradient?: string;
}

export const completeServicesData: Service[] = [
  // ============ INSTAGRAM SERVICES ============
  {
    id: "instagram-monthly",
    category: "socialMedia",
    platform: "instagram",
    service: "Instagram Monthly Campaigns",
    description: "Complete monthly growth and engagement packages for Instagram",
    notes: "Starts within 24h. Includes monthly follower growth on all tiers.",
    icon: "instagram",
    gradient: "instagram-gradient",
    packages: [
      {
        name: "Bronze",
        price: 169,
        deliverables: [
          "300-400+ likes per post",
          "3k-4k views per post",
          "30-50+ saves",
          "10-20+ shares",
          "10 comments × 15 posts",
          "+500 followers monthly"
        ]
      },
      {
        name: "Silver",
        price: 249,
        deliverables: [
          "700-1k+ likes per post",
          "5k-10k views per post",
          "50-100 saves",
          "25-50 shares",
          "15 comments × 20 posts",
          "+1k followers monthly"
        ]
      },
      {
        name: "Gold",
        price: 369,
        deliverables: [
          "1.5k-3k likes per post",
          "7.5k-15k views per post",
          "100-200 saves",
          "50-100 shares",
          "20 comments × 25 posts",
          "+2k followers monthly"
        ],
        highlight: true
      },
      {
        name: "Emerald",
        price: 499,
        deliverables: [
          "3k-4k likes per post",
          "10k-25k views per post",
          "200-400 saves",
          "100-200 shares",
          "30 comments × 30 posts",
          "+4k followers monthly"
        ]
      },
      {
        name: "Platinum",
        price: 749,
        deliverables: [
          "5k-8k likes per post",
          "25k-50k views per post",
          "400-600 saves",
          "200-400 shares",
          "40 comments × 30 posts",
          "+10k international followers monthly"
        ]
      },
      {
        name: "Diamond",
        price: 1499,
        deliverables: [
          "8k-12k likes per post",
          "50k-100k views per post",
          "600-1k saves",
          "300-500 shares",
          "50 comments × 30 posts",
          "+20k international followers monthly"
        ]
      }
    ]
  },
  {
    id: "instagram-post",
    category: "socialMedia",
    platform: "instagram",
    service: "Instagram Post Campaigns",
    description: "Single post engagement packages",
    notes: "Delivery within 24-48 hours",
    icon: "instagram",
    gradient: "instagram-gradient",
    packages: [
      {
        name: "Bronze",
        price: 24.99,
        deliverables: [
          "300-400 likes",
          "3k-4k views",
          "30-50 saves",
          "10-20 shares",
          "10 comments"
        ]
      },
      {
        name: "Silver",
        price: 39.99,
        deliverables: [
          "700-1k likes",
          "5k-10k views",
          "50-100 saves",
          "25-50 shares",
          "15 comments"
        ]
      },
      {
        name: "Gold",
        price: 74.99,
        deliverables: [
          "1.5k-3k likes",
          "7.5k-15k views",
          "100-200 saves",
          "50-100 shares",
          "20 comments"
        ],
        highlight: true
      },
      {
        name: "Emerald",
        price: 119.99,
        deliverables: [
          "3k-4k likes",
          "10k-25k views",
          "200-400 saves",
          "100-200 shares",
          "30 comments"
        ]
      },
      {
        name: "Platinum",
        price: 199.99,
        deliverables: [
          "5k-8k likes",
          "25k-50k views",
          "400-600 saves",
          "200-400 shares",
          "40 comments"
        ]
      },
      {
        name: "Diamond",
        price: 299.99,
        deliverables: [
          "8k-12k likes",
          "50k-100k views",
          "600-1k saves",
          "300-500 shares",
          "50 comments"
        ]
      }
    ]
  },
  {
    id: "instagram-comments",
    category: "socialMedia",
    platform: "instagram",
    service: "Instagram Comment Campaigns",
    description: "Authentic comment packages for posts",
    notes: "High-quality, relevant comments",
    icon: "instagram",
    gradient: "instagram-gradient",
    packages: [
      {
        name: "Gold",
        price: 29,
        deliverables: ["20-30 high-quality comments", "Relevant to content", "Natural delivery speed"]
      },
      {
        name: "Platinum",
        price: 49,
        deliverables: ["40-60 high-quality comments", "Relevant to content", "Natural delivery speed"],
        highlight: true
      },
      {
        name: "Diamond",
        price: 79,
        deliverables: ["70-100 high-quality comments", "Relevant to content", "Natural delivery speed"]
      }
    ]
  },
  {
    id: "instagram-account",
    category: "socialMedia",
    platform: "instagram",
    service: "Instagram Account Services",
    description: "Specialized account recovery and username services",
    notes: "Professional account management services",
    icon: "instagram",
    gradient: "instagram-gradient",
    packages: [
      {
        name: "Account Unbanning",
        price: 1000,
        deliverables: [
          "Professional unbanning service",
          "Success rate: 95%+",
          "7-14 day turnaround",
          "Full support throughout process"
        ],
        highlight: true
      },
      {
        name: "Username Claim",
        price: 2500,
        deliverables: [
          "Inactive username acquisition",
          "Professional negotiation",
          "Legal compliance",
          "30-60 day process"
        ]
      }
    ]
  },

  // ============ YOUTUBE SERVICES ============
  {
    id: "youtube-longform",
    category: "socialMedia",
    platform: "youtube",
    service: "YouTube Long-Form Video Campaigns",
    description: "Complete engagement packages for YouTube videos",
    notes: "Organic growth pattern delivery",
    icon: "youtube",
    gradient: "youtube-gradient",
    packages: [
      {
        name: "Bronze",
        price: 39.99,
        deliverables: ["2.5k views", "200-300 likes", "20-30 shares", "5-10 comments"]
      },
      {
        name: "Silver",
        price: 69.99,
        deliverables: ["5k views", "400-500 likes", "50-60 shares", "10-15 comments"]
      },
      {
        name: "Gold",
        price: 109.99,
        deliverables: ["10k views", "700-800 likes", "100-150 shares", "20-30 comments"],
        highlight: true
      },
      {
        name: "Emerald",
        price: 199.99,
        deliverables: ["25k views", "1k-1.5k likes", "300-400 shares", "40-50 comments"]
      },
      {
        name: "Platinum",
        price: 349.99,
        deliverables: ["50k views", "2k-3k likes", "800-1k shares", "80-100 comments"]
      },
      {
        name: "Diamond",
        price: 499.99,
        deliverables: ["100k views", "4k-5k likes", "1.5k-2k shares", "140-160 comments"]
      }
    ]
  },
  {
    id: "youtube-subscribers",
    category: "socialMedia",
    platform: "youtube",
    service: "YouTube Subscribers",
    description: "High-quality subscriber growth packages",
    notes: "Gradual delivery for safety",
    icon: "youtube",
    gradient: "youtube-gradient",
    packages: [
      {
        name: "250 Subscribers",
        price: 25,
        deliverables: ["250 high-quality subscribers", "7-14 day delivery", "Retention guarantee"]
      },
      {
        name: "500 Subscribers",
        price: 45,
        deliverables: ["500 high-quality subscribers", "14-21 day delivery", "Retention guarantee"]
      },
      {
        name: "1,000 Subscribers",
        price: 75,
        deliverables: ["1,000 high-quality subscribers", "21-30 day delivery", "Retention guarantee"],
        highlight: true
      },
      {
        name: "2,500 Subscribers",
        price: 150,
        deliverables: ["2,500 high-quality subscribers", "30-45 day delivery", "Retention guarantee"]
      },
      {
        name: "5,000 Subscribers",
        price: 250,
        deliverables: ["5,000 high-quality subscribers", "45-60 day delivery", "Retention guarantee"]
      },
      {
        name: "10,000 Subscribers",
        price: 450,
        deliverables: ["10,000 high-quality subscribers", "60-90 day delivery", "Retention guarantee"]
      }
    ]
  },
  {
    id: "youtube-shorts",
    category: "socialMedia",
    platform: "youtube",
    service: "YouTube Shorts Engagement",
    description: "Boost your YouTube Shorts performance",
    notes: "Perfect for viral content",
    icon: "youtube",
    gradient: "youtube-gradient",
    packages: [
      {
        name: "500 Views",
        price: 2.50,
        deliverables: ["500 Shorts views", "Natural delivery pattern", "24-48 hour delivery"]
      },
      {
        name: "50 Likes",
        price: 0.95,
        deliverables: ["50 Shorts likes", "High-quality engagement", "24 hour delivery"]
      },
      {
        name: "Combo Package",
        price: 9.99,
        deliverables: ["2,500 views", "250 likes", "Natural delivery", "48-72 hour delivery"],
        highlight: true
      }
    ]
  },

  // ============ TIKTOK SERVICES ============
  {
    id: "tiktok-followers",
    category: "socialMedia",
    platform: "tiktok",
    service: "TikTok Followers",
    description: "Grow your TikTok following organically",
    notes: "High-quality, active followers",
    icon: "tiktok",
    gradient: "tiktok-gradient",
    packages: [
      {
        name: "1k Followers",
        price: 29,
        deliverables: ["1,000 followers", "7-14 day delivery", "Real profiles"]
      },
      {
        name: "2.5k Followers",
        price: 59,
        deliverables: ["2,500 followers", "14-21 day delivery", "Real profiles"]
      },
      {
        name: "5k Followers",
        price: 99,
        deliverables: ["5,000 followers", "21-30 day delivery", "Real profiles"],
        highlight: true
      },
      {
        name: "10k Followers",
        price: 199,
        deliverables: ["10,000 followers", "30-45 day delivery", "Real profiles"]
      },
      {
        name: "25k Followers",
        price: 349,
        deliverables: ["25,000 followers", "45-60 day delivery", "Real profiles"]
      },
      {
        name: "50k Followers",
        price: 599,
        deliverables: ["50,000 followers", "60-90 day delivery", "Real profiles"]
      },
      {
        name: "100k Followers",
        price: 999,
        deliverables: ["100,000 followers", "90-120 day delivery", "Real profiles"]
      }
    ]
  },
  {
    id: "tiktok-engagement",
    category: "socialMedia",
    platform: "tiktok",
    service: "TikTok Likes & Views",
    description: "Boost individual TikTok videos",
    notes: "Fast delivery for viral potential",
    icon: "tiktok",
    gradient: "tiktok-gradient",
    packages: [
      {
        name: "500 Likes",
        price: 0.98,
        deliverables: ["500 likes", "Instant delivery", "High retention"]
      },
      {
        name: "1k Views",
        price: 0.78,
        deliverables: ["1,000 views", "Instant delivery", "100% safe"]
      },
      {
        name: "Viral Starter",
        price: 19.99,
        deliverables: ["10k views", "1k likes", "100 shares", "Natural pattern"],
        highlight: true
      }
    ]
  },
  {
    id: "tiktok-post",
    category: "socialMedia",
    platform: "tiktok",
    service: "TikTok Post Campaigns",
    description: "Complete engagement packages for TikTok videos",
    notes: "Designed for maximum viral potential",
    icon: "tiktok",
    gradient: "tiktok-gradient",
    packages: [
      {
        name: "Bronze",
        price: 24.99,
        deliverables: ["25k views", "200 likes", "10-20 comments", "10 saves"]
      },
      {
        name: "Silver",
        price: 39.99,
        deliverables: ["50k views", "400 likes", "30 comments", "40 saves"]
      },
      {
        name: "Gold",
        price: 69.99,
        deliverables: ["100k views", "1k likes", "50+ comments", "100+ saves"],
        highlight: true
      },
      {
        name: "Platinum",
        price: 99.99,
        deliverables: ["250k views", "2.5k likes", "100+ comments", "200+ saves"]
      },
      {
        name: "Emerald",
        price: 149.99,
        deliverables: ["500k views", "5k likes", "200+ comments", "500+ saves"]
      }
    ]
  },

  // ============ TWITTER/X SERVICES ============
  {
    id: "twitter-followers",
    category: "socialMedia",
    platform: "twitter",
    service: "Twitter/X Followers",
    description: "Build your Twitter/X presence with quality followers",
    notes: "Active, engaging followers",
    icon: "twitter",
    gradient: "twitter-gradient",
    packages: [
      {
        name: "1k Followers",
        price: 39,
        deliverables: ["1,000 followers", "7-14 day delivery", "Active profiles"]
      },
      {
        name: "5k Followers",
        price: 149,
        deliverables: ["5,000 followers", "21-30 day delivery", "Active profiles"],
        highlight: true
      },
      {
        name: "10k Followers",
        price: 249,
        deliverables: ["10,000 followers", "30-45 day delivery", "Active profiles"]
      }
    ]
  },
  {
    id: "twitter-engagement",
    category: "socialMedia",
    platform: "twitter",
    service: "Twitter/X Engagement",
    description: "Boost your tweets with likes and retweets",
    notes: "Organic engagement patterns",
    icon: "twitter",
    gradient: "twitter-gradient",
    packages: [
      {
        name: "100 Likes",
        price: 4.99,
        deliverables: ["100 likes", "Instant delivery", "Real accounts"]
      },
      {
        name: "100 Retweets",
        price: 5.99,
        deliverables: ["100 retweets", "Instant delivery", "Real accounts"]
      },
      {
        name: "Engagement Bundle",
        price: 29.99,
        deliverables: ["500 likes", "250 retweets", "50 comments", "Natural delivery"],
        highlight: true
      }
    ]
  },

  // ============ SPOTIFY SERVICES ============
  {
    id: "spotify-song",
    category: "socialMedia",
    platform: "spotify",
    service: "Spotify Song Campaigns",
    description: "Boost your music with real Spotify streams",
    notes: "14-30 day campaigns with algorithmic boost",
    icon: "spotify",
    gradient: "spotify-gradient",
    packages: [
      {
        name: "Gold",
        price: 89.99,
        deliverables: ["15k streams", "14-day campaign", "Playlist placement", "Natural growth pattern"]
      },
      {
        name: "Platinum",
        price: 299.99,
        deliverables: ["50k streams", "30-day campaign", "10k algorithmic streams", "Multiple playlist placements"],
        highlight: true
      },
      {
        name: "Diamond",
        price: 499.99,
        deliverables: ["100k streams", "30-day campaign", "30k algorithmic streams", "Premium playlist placements"]
      }
    ]
  },
  {
    id: "spotify-playlist",
    category: "socialMedia",
    platform: "spotify",
    service: "Spotify Playlist Marketing",
    description: "For playlist owners - grow your playlist followers",
    notes: "Daily follower growth campaigns",
    icon: "spotify",
    gradient: "spotify-gradient",
    packages: [
      {
        name: "Gold",
        price: 199.99,
        deliverables: ["1k followers/day", "30-day campaign", "30k total followers", "Organic growth"]
      },
      {
        name: "Platinum",
        price: 299.99,
        deliverables: ["3k followers/day", "30-day campaign", "90k total followers", "Organic growth"],
        highlight: true
      },
      {
        name: "Diamond",
        price: 549.99,
        deliverables: ["6k followers/day", "30-day campaign", "180k total followers", "Organic growth"]
      }
    ]
  },
  {
    id: "spotify-premium",
    category: "socialMedia",
    platform: "spotify",
    service: "Spotify Premium Marketing",
    description: "Tier-1 country focused streaming campaigns",
    notes: "USA, UK, Canada, Australia focused",
    icon: "spotify",
    gradient: "spotify-gradient",
    packages: [
      {
        name: "25k Streams",
        price: 199.99,
        deliverables: ["25k premium streams", "Tier-1 countries", "Playlist + algorithmic", "30-day delivery"]
      },
      {
        name: "50k Streams",
        price: 399.99,
        deliverables: ["50k premium streams", "Tier-1 countries", "Playlist + algorithmic", "45-day delivery"],
        highlight: true
      },
      {
        name: "100k Streams",
        price: 599.99,
        deliverables: ["100k premium streams", "Tier-1 countries", "Playlist + algorithmic", "60-day delivery"]
      }
    ]
  },

  // ============ LINKEDIN SERVICES ============
  {
    id: "linkedin-followers",
    category: "socialMedia",
    platform: "linkedin",
    service: "LinkedIn Followers & Connections",
    description: "Professional network growth for LinkedIn",
    notes: "Business-focused growth",
    icon: "linkedin",
    gradient: "linkedin-gradient",
    packages: [
      {
        name: "500 Followers",
        price: 49,
        deliverables: ["500 company followers", "Professional profiles", "14-day delivery"]
      },
      {
        name: "1k Followers",
        price: 89,
        deliverables: ["1,000 company followers", "Professional profiles", "21-day delivery"],
        highlight: true
      },
      {
        name: "500 Connections",
        price: 79,
        deliverables: ["500 profile connections", "Relevant industry", "30-day delivery"]
      }
    ]
  },
  {
    id: "linkedin-engagement",
    category: "socialMedia",
    platform: "linkedin",
    service: "LinkedIn Post Engagement",
    description: "Boost your LinkedIn content visibility",
    notes: "Professional engagement only",
    icon: "linkedin",
    gradient: "linkedin-gradient",
    packages: [
      {
        name: "100 Likes",
        price: 19.99,
        deliverables: ["100 post likes", "Professional accounts", "24-hour delivery"]
      },
      {
        name: "50 Comments",
        price: 49.99,
        deliverables: ["50 relevant comments", "Industry-specific", "48-hour delivery"]
      },
      {
        name: "Professional Bundle",
        price: 99.99,
        deliverables: ["250 likes", "25 comments", "50 shares", "Professional accounts"],
        highlight: true
      }
    ]
  },

  // ============ PUBLICATION SERVICES ============
  {
    id: "publications-online",
    category: "publication",
    platform: "online",
    service: "Online Publications",
    description: "Featured articles in major online publications",
    notes: "Includes article writing and placement",
    icon: "newspaper",
    gradient: "brand-gradient",
    packages: [
      {
        name: "Tier 3 Publication",
        price: 500,
        deliverables: ["Industry blog placement", "500-750 word article", "1 backlink", "7-day turnaround"]
      },
      {
        name: "Tier 2 Publication",
        price: 1500,
        deliverables: ["Regional news site", "750-1000 word article", "2 backlinks", "14-day turnaround"],
        highlight: true
      },
      {
        name: "Tier 1 Publication",
        price: 5000,
        deliverables: ["Major news outlet", "1000+ word feature", "3 backlinks", "Author bio", "30-day turnaround"]
      }
    ]
  },
  {
    id: "publications-broadcast",
    category: "publication",
    platform: "broadcast",
    service: "Broadcast Television",
    description: "TV appearances and segment placements",
    notes: "Regional and national coverage available",
    icon: "tv",
    gradient: "brand-gradient",
    packages: [
      {
        name: "Local TV",
        price: 2500,
        deliverables: ["Local news segment", "3-5 minute feature", "Interview prep", "Recording provided"]
      },
      {
        name: "Regional TV",
        price: 7500,
        deliverables: ["Regional network", "5-7 minute segment", "Full production", "Multi-market exposure"],
        highlight: true
      },
      {
        name: "National TV",
        price: 25000,
        deliverables: ["National network", "Prime placement", "Full PR support", "Media kit included"]
      }
    ]
  },
  {
    id: "publications-podcast",
    category: "publication",
    platform: "podcast",
    service: "Podcast Placements",
    description: "Guest appearances on popular podcasts",
    notes: "Includes prep and promotion",
    icon: "mic",
    gradient: "brand-gradient",
    packages: [
      {
        name: "Niche Podcast",
        price: 500,
        deliverables: ["1k-10k listeners", "30-45 min interview", "Show notes mention", "Social promotion"]
      },
      {
        name: "Popular Podcast",
        price: 2000,
        deliverables: ["10k-100k listeners", "45-60 min feature", "Dedicated episode", "Full promotion"],
        highlight: true
      },
      {
        name: "Top Podcast",
        price: 10000,
        deliverables: ["100k+ listeners", "Featured guest", "Multi-platform promotion", "Ongoing relationship"]
      }
    ]
  },

  // ============ TOOLS & SERVICES ============
  {
    id: "tools-website",
    category: "tool",
    platform: "website-design",
    service: "Website Design & Development",
    description: "Professional website creation and optimization",
    notes: "Includes hosting for 1 year",
    icon: "globe",
    gradient: "brand-gradient",
    packages: [
      {
        name: "Landing Page",
        price: 999,
        deliverables: ["Single page design", "Mobile responsive", "Contact form", "SEO optimized", "1 year hosting"]
      },
      {
        name: "Business Site",
        price: 2999,
        deliverables: ["5-10 pages", "CMS integration", "E-commerce ready", "SEO package", "1 year hosting"],
        highlight: true
      },
      {
        name: "Enterprise",
        price: 9999,
        deliverables: ["Unlimited pages", "Custom features", "API integrations", "Advanced SEO", "Priority support"]
      }
    ]
  },
  {
    id: "tools-seo",
    category: "tool",
    platform: "seo",
    service: "SEO Services",
    description: "Comprehensive search engine optimization",
    notes: "Monthly retainer packages",
    icon: "search",
    gradient: "brand-gradient",
    packages: [
      {
        name: "Starter SEO",
        price: 500,
        deliverables: ["Keyword research", "On-page optimization", "Monthly report", "5 target keywords"]
      },
      {
        name: "Growth SEO",
        price: 1500,
        deliverables: ["Advanced optimization", "Link building", "Content strategy", "15 target keywords"],
        highlight: true
      },
      {
        name: "Enterprise SEO",
        price: 5000,
        deliverables: ["Full SEO management", "50+ keywords", "Technical SEO", "Dedicated account manager"]
      }
    ]
  },
  {
    id: "tools-knowledge-panel",
    category: "tool",
    platform: "knowledge-panel",
    service: "Google Knowledge Panel",
    description: "Establish your Google Knowledge Panel presence",
    notes: "90% success rate",
    icon: "info",
    gradient: "brand-gradient",
    packages: [
      {
        name: "Personal Panel",
        price: 2500,
        deliverables: ["Personal knowledge panel", "Wikipedia integration", "Verified information", "60-90 day process"]
      },
      {
        name: "Business Panel",
        price: 5000,
        deliverables: ["Business knowledge panel", "Full verification", "Rich snippets", "Ongoing management"],
        highlight: true
      }
    ]
  },
  {
    id: "tools-email",
    category: "tool",
    platform: "email-automation",
    service: "Email Marketing Automation",
    description: "Complete email marketing setup and management",
    notes: "Includes template design",
    icon: "mail",
    gradient: "brand-gradient",
    packages: [
      {
        name: "Starter",
        price: 299,
        deliverables: ["Email platform setup", "5 email templates", "Basic automation", "List segmentation"]
      },
      {
        name: "Professional",
        price: 999,
        deliverables: ["Advanced automation", "15 templates", "A/B testing", "Monthly optimization"],
        highlight: true
      },
      {
        name: "Enterprise",
        price: 2999,
        deliverables: ["Full funnel automation", "Unlimited templates", "API integration", "Dedicated support"]
      }
    ]
  },
  {
    id: "tools-content-bot",
    category: "tool",
    platform: "content-bot",
    service: "AI Content Creation Bot",
    description: "Automated content generation for social media",
    notes: "Custom trained on your brand",
    icon: "bot",
    gradient: "brand-gradient",
    packages: [
      {
        name: "Basic Bot",
        price: 499,
        deliverables: ["30 posts/month", "3 platforms", "Basic customization", "Monthly reports"]
      },
      {
        name: "Pro Bot",
        price: 1499,
        deliverables: ["100 posts/month", "All platforms", "Advanced AI training", "Analytics dashboard"],
        highlight: true
      },
      {
        name: "Enterprise Bot",
        price: 4999,
        deliverables: ["Unlimited posts", "Custom features", "API access", "White-label option"]
      }
    ]
  },
  {
    id: "tools-app",
    category: "tool",
    platform: "app-building",
    service: "Mobile App Development",
    description: "Custom mobile applications for iOS and Android",
    notes: "Includes 6 months support",
    icon: "smartphone",
    gradient: "brand-gradient",
    packages: [
      {
        name: "Simple App",
        price: 4999,
        deliverables: ["Basic functionality", "5-10 screens", "iOS + Android", "App store submission"]
      },
      {
        name: "Business App",
        price: 14999,
        deliverables: ["Custom features", "Backend integration", "Push notifications", "Analytics"],
        highlight: true
      },
      {
        name: "Enterprise App",
        price: 49999,
        deliverables: ["Complex functionality", "Scalable architecture", "Ongoing updates", "Dedicated team"]
      }
    ]
  }
];

// Helper functions
export function getServicesByCategory(category: string): Service[] {
  return completeServicesData.filter(service => service.category === category);
}

export function getServicesByPlatform(platform: string): Service[] {
  return completeServicesData.filter(service => service.platform === platform);
}

export function getServiceById(id: string): Service | undefined {
  return completeServicesData.find(service => service.id === id);
}

// Platform configurations for UI
export const platformConfigs = {
  instagram: {
    name: "Instagram",
    icon: "📷",
    gradient: "instagram-gradient",
    description: "Grow your Instagram presence with our comprehensive suite of engagement services"
  },
  youtube: {
    name: "YouTube",
    icon: "📺",
    gradient: "youtube-gradient",
    description: "Boost your YouTube channel with views, subscribers, and engagement"
  },
  tiktok: {
    name: "TikTok",
    icon: "🎵",
    gradient: "tiktok-gradient",
    description: "Go viral on TikTok with our growth and engagement packages"
  },
  twitter: {
    name: "Twitter/X",
    icon: "🐦",
    gradient: "twitter-gradient",
    description: "Build your Twitter/X influence with followers and engagement"
  },
  spotify: {
    name: "Spotify",
    icon: "🎧",
    gradient: "spotify-gradient",
    description: "Promote your music with real Spotify streams and playlist placements"
  },
  linkedin: {
    name: "LinkedIn",
    icon: "💼",
    gradient: "linkedin-gradient",
    description: "Enhance your professional presence on LinkedIn"
  },
  online: {
    name: "Online Publications",
    icon: "📰",
    gradient: "brand-gradient",
    description: "Get featured in top online publications"
  },
  broadcast: {
    name: "Broadcast TV",
    icon: "📺",
    gradient: "brand-gradient",
    description: "Television appearances and media coverage"
  },
  podcast: {
    name: "Podcasts",
    icon: "🎙️",
    gradient: "brand-gradient",
    description: "Guest appearances on popular podcasts"
  },
  "website-design": {
    name: "Website Design",
    icon: "🌐",
    gradient: "brand-gradient",
    description: "Professional website design and development"
  },
  seo: {
    name: "SEO Services",
    icon: "🔍",
    gradient: "brand-gradient",
    description: "Improve your search engine rankings"
  },
  "knowledge-panel": {
    name: "Google Knowledge Panel",
    icon: "ℹ️",
    gradient: "brand-gradient",
    description: "Establish your Google Knowledge Panel"
  },
  "email-automation": {
    name: "Email Marketing",
    icon: "📧",
    gradient: "brand-gradient",
    description: "Automated email marketing campaigns"
  },
  "content-bot": {
    name: "Content Bot",
    icon: "🤖",
    gradient: "brand-gradient",
    description: "AI-powered content creation"
  },
  "app-building": {
    name: "App Development",
    icon: "📱",
    gradient: "brand-gradient",
    description: "Custom mobile app development"
  }
};