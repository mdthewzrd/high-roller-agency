import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getServicesByPlatform } from "@/lib/services-data";
import { Check, Star, Zap, TrendingUp } from "lucide-react";
import TwitterServiceSelector from "./TwitterServiceSelector";

export default async function TwitterServicesPage() {
  const twitterServices = getServicesByPlatform("twitter");

  const platformButtons = [
    { name: "Instagram", href: "/services/social-media/instagram", className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white" },
    { name: "YouTube", href: "/services/social-media/youtube", className: "bg-red-500 text-white" },
    { name: "TikTok", href: "/services/social-media/tiktok", className: "bg-gradient-to-r from-cyan-400 to-pink-500 text-white" },
    { name: "Twitter/X", href: "/services/social-media/twitter", className: "bg-blue-500 text-white", active: true },
    { name: "Spotify", href: "/services/social-media/spotify", className: "bg-green-500 text-white" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Platform Navigation */}
      <div className="bg-gray-950/50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <h3 className="text-lg font-semibold mb-3 text-white">Select a Platform</h3>
          <div className="flex flex-wrap gap-3">
            {platformButtons.map((platform) => (
              <Link key={platform.name} href={platform.href}>
                <Button
                  className={`${platform.className} px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity ${
                    platform.active ? 'ring-2 ring-white/20' : ''
                  }`}
                >
                  {platform.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-950/50">
        <div className="container relative mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-20 w-20 rounded-2xl bg-blue-500 flex items-center justify-center">
                <div className="text-white font-bold text-2xl">X</div>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2 text-white">
                  Twitter/X Services
                </h1>
                <p className="text-xl text-muted-foreground">
                  Amplify your reach with followers, likes, and retweets
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-blue-500/20 border border-blue-500/30 p-4 rounded-lg text-center">
                <Zap className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-white">24h Start</p>
              </div>
              <div className="bg-blue-500/20 border border-blue-500/30 p-4 rounded-lg text-center">
                <TrendingUp className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-white">Real Engagement</p>
              </div>
              <div className="bg-blue-500/20 border border-blue-500/30 p-4 rounded-lg text-center">
                <Star className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-white">High Quality</p>
              </div>
              <div className="bg-blue-500/20 border border-blue-500/30 p-4 rounded-lg text-center">
                <Check className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-white">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Selection - Client Component */}
      <TwitterServiceSelector services={twitterServices} />

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">How quickly will my Twitter/X campaign start?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All Twitter/X campaigns start within 24 hours of order placement. You&apos;ll receive a confirmation email once your campaign begins.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Are the followers and interactions real?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Yes, we use premium quality accounts that look and behave like real users. This ensures your account maintains credibility and avoids detection.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Is this safe for my Twitter/X account?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Absolutely. We use gradual delivery methods that comply with Twitter/X&apos;s daily limits. Our services have a 99.9% safety record.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}