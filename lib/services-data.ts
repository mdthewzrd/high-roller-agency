// Comprehensive service data from PRD
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

export const servicesData: Service[] = [
  // Instagram Services
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
    description: "Boost individual posts with targeted engagement",
    notes: "Single post engagement. Starts within 24h.",
    icon: "instagram",
    gradient: "instagram-gradient",
    packages: [
      {
        name: "Bronze",
        price: 24.99,
        deliverables: ["300-400 likes", "3k-4k views", "30-50 saves", "10-20 shares", "10 comments"]
      },
      {
        name: "Silver",
        price: 39.99,
        deliverables: ["700-1k likes", "5k-10k views", "50-100 saves", "25-50 shares", "20 comments"]
      },
      {
        name: "Gold",
        price: 74.99,
        deliverables: ["1.5k-3k likes", "7.5k-15k views", "100-200 saves", "50-100 shares", "30 comments"],
        highlight: true
      },
      {
        name: "Emerald",
        price: 119.99,
        deliverables: ["3k-4k likes", "10k-25k views", "200-400 saves", "100-200 shares", "40 comments"]
      },
      {
        name: "Platinum",
        price: 199.99,
        deliverables: ["5k-8k likes", "25k-50k views", "400-600 saves", "200-400 shares", "50 comments"]
      },
      {
        name: "Diamond",
        price: 299.99,
        deliverables: ["8k-12k likes", "50k-100k views", "600-1k saves", "300-500 shares", "75 comments"]
      }
    ]
  },
  {
    id: "instagram-comments",
    category: "socialMedia",
    platform: "instagram",
    service: "Instagram Comment Campaigns",
    description: "Authentic-looking comments from real profiles",
    icon: "instagram",
    gradient: "instagram-gradient",
    packages: [
      {
        name: "Gold",
        price: 29,
        deliverables: ["20-30 high-quality comments", "Natural distribution", "Real profiles"]
      },
      {
        name: "Platinum",
        price: 49,
        deliverables: ["40-60 high-quality comments", "Natural distribution", "Real profiles"],
        highlight: true
      },
      {
        name: "Diamond",
        price: 79,
        deliverables: ["70-100 high-quality comments", "Natural distribution", "Real profiles"]
      }
    ]
  },
  {
    id: "instagram-account",
    category: "socialMedia",
    platform: "instagram",
    service: "Instagram Account Services",
    description: "Premium account management and recovery services",
    icon: "instagram",
    gradient: "instagram-gradient",
    packages: [
      {
        name: "Account Unbanning",
        price: 1000,
        deliverables: ["Professional appeal process", "Success rate: 85%+", "7-14 day turnaround"],
        highlight: true
      },
      {
        name: "Username Claim",
        price: 2500,
        deliverables: ["Inactive username acquisition", "Legal compliance", "30-45 day process"]
      },
      {
        name: "Custom Services",
        price: 0,
        deliverables: ["Contact for custom quote", "Verification assistance", "Account optimization"]
      }
    ]
  },

  // YouTube Services
  {
    id: "youtube-longform",
    category: "socialMedia",
    platform: "youtube",
    service: "YouTube Long-Form Video Campaigns",
    description: "Complete engagement packages for YouTube videos",
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
    description: "Grow your subscriber base with real accounts",
    icon: "youtube",
    gradient: "youtube-gradient",
    packages: [
      {
        name: "250 Subscribers",
        price: 25,
        deliverables: ["250 real subscribers", "30-day retention guarantee", "Natural delivery"]
      },
      {
        name: "500 Subscribers",
        price: 45,
        deliverables: ["500 real subscribers", "30-day retention guarantee", "Natural delivery"]
      },
      {
        name: "1,000 Subscribers",
        price: 75,
        deliverables: ["1,000 real subscribers", "30-day retention guarantee", "Natural delivery"],
        highlight: true
      },
      {
        name: "2,500 Subscribers",
        price: 150,
        deliverables: ["2,500 real subscribers", "30-day retention guarantee", "Natural delivery"]
      },
      {
        name: "5,000 Subscribers",
        price: 250,
        deliverables: ["5,000 real subscribers", "30-day retention guarantee", "Natural delivery"]
      },
      {
        name: "10,000 Subscribers",
        price: 450,
        deliverables: ["10,000 real subscribers", "30-day retention guarantee", "Natural delivery"]
      }
    ]
  },
  {
    id: "youtube-shorts",
    category: "socialMedia",
    platform: "youtube",
    service: "YouTube Shorts Engagement",
    description: "Boost your YouTube Shorts with views and likes",
    icon: "youtube",
    gradient: "youtube-gradient",
    packages: [
      {
        name: "500 Views",
        price: 2.50,
        deliverables: ["500 Shorts views", "Quick delivery", "High retention"]
      },
      {
        name: "50 Likes",
        price: 0.95,
        deliverables: ["50 Shorts likes", "Real engagement", "Natural distribution"]
      }
    ]
  },

  // TikTok Services
  {
    id: "tiktok-followers",
    category: "socialMedia",
    platform: "tiktok",
    service: "TikTok Followers",
    description: "Build your TikTok following with quality accounts",
    icon: "tiktok",
    gradient: "tiktok-gradient",
    packages: [
      {
        name: "1k Followers",
        price: 29,
        deliverables: ["1,000 followers", "High quality profiles", "7-day delivery"]
      },
      {
        name: "2.5k Followers",
        price: 59,
        deliverables: ["2,500 followers", "High quality profiles", "7-day delivery"]
      },
      {
        name: "5k Followers",
        price: 99,
        deliverables: ["5,000 followers", "High quality profiles", "10-day delivery"],
        highlight: true
      },
      {
        name: "10k Followers",
        price: 199,
        deliverables: ["10,000 followers", "High quality profiles", "14-day delivery"]
      },
      {
        name: "25k Followers",
        price: 349,
        deliverables: ["25,000 followers", "High quality profiles", "21-day delivery"]
      },
      {
        name: "50k Followers",
        price: 599,
        deliverables: ["50,000 followers", "High quality profiles", "30-day delivery"]
      },
      {
        name: "100k Followers",
        price: 999,
        deliverables: ["100,000 followers", "High quality profiles", "45-day delivery"]
      }
    ]
  },
  {
    id: "tiktok-engagement",
    category: "socialMedia",
    platform: "tiktok",
    service: "TikTok Likes & Views",
    description: "Individual engagement units for TikTok videos",
    icon: "tiktok",
    gradient: "tiktok-gradient",
    packages: [
      {
        name: "500 Likes",
        price: 0.98,
        deliverables: ["500 likes", "Instant delivery", "High quality"]
      },
      {
        name: "1k Views",
        price: 0.78,
        deliverables: ["1,000 views", "Instant delivery", "High retention"]
      }
    ]
  },
  {
    id: "tiktok-post",
    category: "socialMedia",
    platform: "tiktok",
    service: "TikTok Post Campaigns",
    description: "Complete engagement packages for TikTok videos",
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

  // Twitter/X Services
  {
    id: "twitter-followers",
    category: "socialMedia",
    platform: "twitter",
    service: "Twitter/X Followers",
    description: "Grow your Twitter/X presence with real followers",
    icon: "twitter",
    gradient: "twitter-gradient",
    packages: [
      {
        name: "1k Followers",
        price: 39,
        deliverables: ["1,000 followers", "Real profiles", "7-day delivery"]
      },
      {
        name: "5k Followers",
        price: 149,
        deliverables: ["5,000 followers", "Real profiles", "14-day delivery"],
        highlight: true
      },
      {
        name: "10k Followers",
        price: 249,
        deliverables: ["10,000 followers", "Real profiles", "21-day delivery"]
      }
    ]
  },

  // Spotify Services
  {
    id: "spotify-song",
    category: "socialMedia",
    platform: "spotify",
    service: "Spotify Song Campaigns",
    description: "14-30 day streaming campaigns for your tracks",
    notes: "Includes algorithm-driven streams on higher tiers",
    icon: "spotify",
    gradient: "spotify-gradient",
    packages: [
      {
        name: "Gold",
        price: 89.99,
        deliverables: ["15k streams", "14-day campaign", "Organic growth"]
      },
      {
        name: "Platinum",
        price: 299.99,
        deliverables: ["50k streams total", "10k from algorithm", "21-day campaign"],
        highlight: true
      },
      {
        name: "Diamond",
        price: 499.99,
        deliverables: ["100k streams total", "30k from algorithm", "30-day campaign"]
      }
    ]
  },
  {
    id: "spotify-playlist",
    category: "socialMedia",
    platform: "spotify",
    service: "Spotify Playlist Marketing",
    description: "For playlist owners - grow your playlist followers",
    icon: "spotify",
    gradient: "spotify-gradient",
    packages: [
      {
        name: "Gold",
        price: 199.99,
        deliverables: ["1k followers/day", "30-day campaign", "30k total followers"]
      },
      {
        name: "Platinum",
        price: 299.99,
        deliverables: ["3k followers/day", "30-day campaign", "90k total followers"],
        highlight: true
      },
      {
        name: "Diamond",
        price: 549.99,
        deliverables: ["6k followers/day", "30-day campaign", "180k total followers"]
      }
    ]
  },
  {
    id: "spotify-premium",
    category: "socialMedia",
    platform: "spotify",
    service: "Spotify Premium Marketing",
    description: "Tier-1 focused streaming with geo-targeting",
    icon: "spotify",
    gradient: "spotify-gradient",
    packages: [
      {
        name: "25k Streams",
        price: 199.99,
        deliverables: ["25k premium streams", "Tier-1 countries", "Playlist + Algorithm mix"]
      },
      {
        name: "50k Streams",
        price: 399.99,
        deliverables: ["50k premium streams", "Tier-1 countries", "Playlist + Algorithm mix"],
        highlight: true
      },
      {
        name: "100k Streams",
        price: 599.99,
        deliverables: ["100k premium streams", "Tier-1 countries", "Playlist + Algorithm mix"]
      }
    ]
  },

  // LinkedIn Services
  {
    id: "linkedin-connections",
    category: "socialMedia",
    platform: "linkedin",
    service: "LinkedIn Connections & Followers",
    description: "Professional network growth for LinkedIn",
    icon: "linkedin",
    gradient: "linkedin-gradient",
    packages: [
      {
        name: "500 Connections",
        price: 79,
        deliverables: ["500 connections", "Industry-relevant profiles", "14-day delivery"]
      },
      {
        name: "1k Followers",
        price: 129,
        deliverables: ["1,000 followers", "Business professionals", "14-day delivery"],
        highlight: true
      },
      {
        name: "2.5k Followers",
        price: 249,
        deliverables: ["2,500 followers", "Business professionals", "21-day delivery"]
      }
    ]
  },

  // Publications
  {
    id: "publications-online",
    category: "publication",
    platform: "various",
    service: "Online Publication Placements",
    description: "Get featured in major online publications",
    notes: "Turnaround time varies by outlet. Includes article writing.",
    packages: [
      {
        name: "Tier 3 Publications",
        price: 499,
        deliverables: ["Mid-tier online outlets", "500-word article", "7-14 day turnaround"]
      },
      {
        name: "Tier 2 Publications",
        price: 999,
        deliverables: ["Premium online outlets", "750-word article", "14-21 day turnaround"],
        highlight: true
      },
      {
        name: "Tier 1 Publications",
        price: 2499,
        deliverables: ["Top-tier outlets", "1000-word article", "21-30 day turnaround"]
      }
    ]
  },
  {
    id: "publications-broadcast",
    category: "publication",
    platform: "television",
    service: "Broadcast Television Features",
    description: "Television appearances and features",
    packages: [
      {
        name: "Local TV",
        price: 1999,
        deliverables: ["Local station feature", "3-5 minute segment", "Media training included"]
      },
      {
        name: "Regional TV",
        price: 4999,
        deliverables: ["Regional network feature", "5-10 minute segment", "Media training included"],
        highlight: true
      },
      {
        name: "National TV",
        price: 9999,
        deliverables: ["National network consideration", "Full segment", "Complete media prep"]
      }
    ]
  },

  // Tools
  {
    id: "website-design",
    category: "tool",
    platform: "web",
    service: "Website Design & Development",
    description: "Professional website creation and optimization",
    packages: [
      {
        name: "Basic Website",
        price: 999,
        deliverables: ["5-page website", "Mobile responsive", "Basic SEO", "30-day delivery"]
      },
      {
        name: "Professional Website",
        price: 2499,
        deliverables: ["10-page website", "Custom design", "Advanced SEO", "CMS integration", "45-day delivery"],
        highlight: true
      },
      {
        name: "Enterprise Website",
        price: 4999,
        deliverables: ["Unlimited pages", "Custom functionality", "E-commerce ready", "60-day delivery"]
      }
    ]
  },
  {
    id: "seo-services",
    category: "tool",
    platform: "search",
    service: "SEO Services",
    description: "Search engine optimization and ranking improvement",
    packages: [
      {
        name: "Basic SEO",
        price: 299,
        deliverables: ["On-page optimization", "Keyword research", "Monthly reports"]
      },
      {
        name: "Advanced SEO",
        price: 699,
        deliverables: ["Complete optimization", "Link building", "Content strategy", "Bi-weekly reports"],
        highlight: true
      },
      {
        name: "Enterprise SEO",
        price: 1499,
        deliverables: ["Full SEO management", "Dedicated strategist", "Weekly reports", "Guaranteed results"]
      }
    ]
  },
  {
    id: "knowledge-panel",
    category: "tool",
    platform: "google",
    service: "Google Knowledge Panel",
    description: "Establish your Google Knowledge Panel presence",
    packages: [
      {
        name: "Knowledge Panel Creation",
        price: 2999,
        deliverables: ["Panel creation", "Wikipedia integration", "60-90 day process", "Success rate: 75%+"],
        highlight: true
      }
    ]
  },
  {
    id: "email-automation",
    category: "tool",
    platform: "email",
    service: "Email Automation",
    description: "Professional email marketing automation setup",
    packages: [
      {
        name: "Starter",
        price: 499,
        deliverables: ["5 email sequences", "Basic automation", "Template design"]
      },
      {
        name: "Professional",
        price: 999,
        deliverables: ["15 email sequences", "Advanced automation", "A/B testing", "Analytics setup"],
        highlight: true
      },
      {
        name: "Enterprise",
        price: 1999,
        deliverables: ["Unlimited sequences", "Custom integration", "Full management", "Monthly optimization"]
      }
    ]
  },
  {
    id: "content-bot",
    category: "tool",
    platform: "automation",
    service: "Short-Form Content Bot",
    description: "Automated content creation for social media",
    packages: [
      {
        name: "Basic Bot",
        price: 799,
        deliverables: ["10 posts/day", "3 platforms", "Basic customization"]
      },
      {
        name: "Advanced Bot",
        price: 1499,
        deliverables: ["30 posts/day", "5 platforms", "AI-powered content", "Custom branding"],
        highlight: true
      },
      {
        name: "Enterprise Bot",
        price: 2999,
        deliverables: ["Unlimited posts", "All platforms", "Full customization", "Dedicated support"]
      }
    ]
  },
  {
    id: "app-building",
    category: "tool",
    platform: "mobile",
    service: "App Building",
    description: "Mobile app development for iOS and Android",
    packages: [
      {
        name: "Basic App",
        price: 4999,
        deliverables: ["Simple app", "5 screens", "Basic features", "60-day delivery"]
      },
      {
        name: "Professional App",
        price: 9999,
        deliverables: ["Complex app", "15 screens", "Advanced features", "Push notifications", "90-day delivery"],
        highlight: true
      },
      {
        name: "Enterprise App",
        price: 19999,
        deliverables: ["Full-featured app", "Unlimited screens", "Custom backend", "120-day delivery"]
      }
    ]
  }
];

// Helper functions
export function getServicesByCategory(category: string) {
  return servicesData.filter(service => service.category === category);
}

export function getServicesByPlatform(platform: string) {
  return servicesData.filter(service => service.platform === platform);
}

export function getServiceById(id: string) {
  return servicesData.find(service => service.id === id);
}

export function getPlatformIcon(platform: string) {
  const icons: Record<string, string> = {
    instagram: "📷",
    youtube: "📺",
    tiktok: "🎵",
    twitter: "🐦",
    spotify: "🎧",
    linkedin: "💼",
    various: "📰",
    television: "📺",
    web: "🌐",
    search: "🔍",
    google: "🔎",
    email: "📧",
    automation: "🤖",
    mobile: "📱"
  };
  return icons[platform] || "📦";
}