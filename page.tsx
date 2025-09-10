import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ClientCarousel from "@/components/shared/ClientCarousel";
import { ArrowRight, Users, Shield, BarChart3, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background - green focused */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/[0.05] to-green-600/[0.03] animate-pulse"></div>
        </div>
        
        {/* Floating social media icons */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Instagram - top left */}
          <div className="absolute top-1/4 left-1/6 p-3 rounded-2xl bg-gradient-to-r from-purple-500/15 to-pink-500/15 backdrop-blur-sm border border-white/5 animate-float shadow-xl shadow-purple-500/5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-lg relative">
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* YouTube - top right */}
          <div className="absolute top-1/4 right-1/6 p-3 rounded-2xl bg-red-500/15 backdrop-blur-sm border border-white/5 animate-float shadow-xl shadow-red-500/5" style={{animationDelay: '0.5s'}}>
            <div className="w-8 h-8 rounded-xl bg-red-500 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[3px] border-l-white border-y-[2px] border-y-transparent ml-0.5"></div>
            </div>
          </div>

          {/* TikTok - bottom left */}
          <div className="absolute bottom-1/4 left-1/5 p-3 rounded-2xl bg-gradient-to-r from-cyan-400/15 to-pink-500/15 backdrop-blur-sm border border-white/5 animate-float shadow-xl shadow-cyan-500/5" style={{animationDelay: '1s'}}>
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center">
              <div className="text-white font-bold text-sm">♪</div>
            </div>
          </div>

          {/* Twitter/X - bottom right */}
          <div className="absolute bottom-1/4 right-1/5 p-3 rounded-2xl bg-blue-500/15 backdrop-blur-sm border border-white/5 animate-float shadow-xl shadow-blue-500/5" style={{animationDelay: '1.5s'}}>
            <div className="w-8 h-8 rounded-xl bg-blue-500 flex items-center justify-center">
              <div className="text-white font-bold text-sm">𝕏</div>
            </div>
          </div>

          {/* Spotify - middle left */}
          <div className="absolute top-1/2 left-1/12 p-3 rounded-2xl bg-green-500/15 backdrop-blur-sm border border-white/5 animate-float shadow-xl shadow-green-500/5" style={{animationDelay: '2s'}}>
            <div className="w-8 h-8 rounded-xl bg-green-500 flex items-center justify-center">
              <div className="text-white font-bold text-lg">♫</div>
            </div>
          </div>
        </div>
        
        <div className="container relative mx-auto px-4 text-center z-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-green-400 border border-green-400/30 bg-green-400/10 mb-6">
                Premium Social Media Marketing Platform
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Boost Your Online</span>
              <br />
              <span className="text-white">Presence with </span>
              <span className="text-white font-bold">
                High Roller Agency
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Your one-stop platform for social media growth, publications, and digital marketing tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="green-gradient-bg h-12 px-8" asChild>
                <Link href="/services">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
                <Link href="/services">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white border border-white/30 bg-white/10 mb-6">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Comprehensive Services</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Everything you need to grow your online presence and reach your target audience effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-white/50 transition-all">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">Social Media Growth</CardTitle>
                <CardDescription className="text-gray-400">
                  Expand your reach across all major platforms including Instagram, TikTok, YouTube, Twitter, LinkedIn, and Spotify.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-gray-300">Follower growth campaigns</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-gray-300">Engagement optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-gray-300">Content promotion</span>
                </div>
                <Link href="/services/social-media" className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-medium mt-6">
                  Explore Social Media
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-white/50 transition-all">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 border-2 border-white rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-white mb-2">Publication Features</CardTitle>
                <CardDescription className="text-gray-400">
                  Get featured in reputable publications to boost your credibility and reach new audiences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-gray-300">Press release distribution</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-gray-300">Featured articles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-gray-300">Industry-specific publications</span>
                </div>
                <Link href="/services/publications" className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-medium mt-6">
                  Explore Publications
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-white/50 transition-all">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <div className="relative">
                    <div className="w-6 h-6 border-2 border-white rounded" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-white mb-2">Digital Marketing Tools</CardTitle>
                <CardDescription className="text-gray-400">
                  Access powerful tools to enhance your online marketing strategy and drive results.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-gray-300">SEO optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-gray-300">Web development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-gray-300">Knowledge panel creation</span>
                </div>
                <Link href="/services/tools" className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-medium mt-6">
                  Explore Tools
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Carousel */}
      <ClientCarousel />

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white border border-white/30 bg-white/10 mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Choose High Roller Agency</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We provide comprehensive solutions to help businesses and individuals establish a strong online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-white mb-4">Global Reach</CardTitle>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Connect with audiences worldwide through our extensive network of platforms and publications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-white mb-4">Trusted Results</CardTitle>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our proven strategies deliver measurable outcomes and sustainable growth for your brand.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <div className="w-7 h-7 border-2 border-white rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-white mb-4">Premium Quality</CardTitle>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We maintain the highest standards across all our services to ensure exceptional results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-white mb-4">Data-Driven</CardTitle>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our strategies are backed by analytics and market insights to maximize your ROI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white border border-white/30 bg-white/10 mb-6">
              Get Started Today
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Elevate Your Online Presence?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
              Join thousands of businesses and individuals who have transformed their digital footprint with High Roller Agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="green-gradient-bg h-12 px-8" asChild>
                <Link href="/services">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
                <Link href="/services">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}