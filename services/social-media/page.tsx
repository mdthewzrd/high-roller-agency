import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Verified } from "lucide-react";

const platformButtons = [
  { 
    name: "Instagram", 
    href: "/services/social-media/instagram",
    className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
  },
  { 
    name: "YouTube", 
    href: "/services/social-media/youtube",
    className: "bg-red-500 text-white",
  },
  { 
    name: "TikTok", 
    href: "/services/social-media/tiktok",
    className: "bg-black text-white border border-gray-700",
  },
  { 
    name: "Twitter/X", 
    href: "/services/social-media/twitter",
    className: "bg-blue-500 text-white",
  },
  { 
    name: "Spotify", 
    href: "/services/social-media/spotify",
    className: "bg-green-500 text-white",
  },
  { 
    name: "LinkedIn", 
    href: "/services/social-media/linkedin",
    className: "bg-blue-600 text-white",
  },
];

const featuredPlatforms = [
  {
    name: "Instagram",
    href: "/services/social-media/instagram",
    description: "Boost your Instagram presence with likes, followers, views, and more. Perfect for influencers and brands.",
    borderColor: "border-pink-500",
    linkText: "Explore →"
  },
  {
    name: "TikTok", 
    href: "/services/social-media/tiktok",
    description: "Grow your TikTok following with real, engaged followers. Ideal for viral content creators.",
    borderColor: "border-gray-700",
    linkText: "Explore →"
  },
  {
    name: "YouTube",
    href: "/services/social-media/youtube", 
    description: "Increase your YouTube channel's visibility with subscribers, views, likes, and comments.",
    borderColor: "border-red-500",
    linkText: "Explore →"
  }
];

const featuredServices = [
  {
    title: "Monthly Growth Packages",
    description: "Consistent growth for your social media accounts with our monthly packages. Available for all platforms.",
    icon: <TrendingUp className="h-6 w-6 text-green-500" />,
    linkText: "View Packages →"
  },
  {
    title: "Account Verification", 
    description: "Get the verified badge for your social media profiles. Enhance credibility and visibility.",
    icon: <Verified className="h-6 w-6 text-green-500" />,
    linkText: "Learn More →"
  }
];

export default function SocialMediaServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Social Media Services
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl">
            Boost your social media presence with our comprehensive range of services. Select a platform below to explore platform-specific services or browse our featured offerings.
          </p>
        </div>
      </div>

      {/* Platform Selection */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-white">Select a Platform</h2>
        <div className="flex flex-wrap gap-4 mb-12">
          {platformButtons.map((platform) => (
            <Link key={platform.name} href={platform.href}>
              <Button 
                className={`${platform.className} px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity`}
              >
                {platform.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Platforms */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-white">Featured Platforms</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredPlatforms.map((platform) => (
            <Card key={platform.name} className={`bg-gray-900 border-2 ${platform.borderColor} hover:shadow-xl transition-all`}>
              <CardHeader>
                <CardTitle className="text-xl text-white mb-2">{platform.name}</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {platform.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={platform.href} className="text-green-400 hover:text-green-300 font-medium">
                  {platform.linkText}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Services */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-white">Featured Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredServices.map((service) => (
            <Card key={service.title} className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-green-400 hover:text-green-300 font-medium cursor-pointer">
                  {service.linkText}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}