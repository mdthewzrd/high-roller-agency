import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { ArrowRight, Users, Shield, BarChart3, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/[0.02] via-blue-500/[0.02] to-purple-500/[0.02] animate-pulse"></div>
        </div>
        
        {/* Floating Social Media Icons - High quality professional icons */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Instagram - positioned better */}
          <div className="absolute top-1/4 left-1/6 p-3 rounded-2xl bg-gradient-to-r from-purple-500/15 to-pink-500/15 backdrop-blur-sm border border-white/5 animate-float shadow-xl shadow-purple-500/5">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl p-2.5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </div>
          
          {/* YouTube */}
          <div className="absolute top-1/6 right-1/5 p-3 rounded-2xl bg-red-500/15 backdrop-blur-sm border border-white/5 animate-float animation-delay-300 shadow-xl shadow-red-500/5">
            <div className="w-12 h-12 bg-red-600 rounded-xl p-2.5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
          </div>
          
          {/* TikTok */}
          <div className="absolute bottom-1/4 left-1/4 p-3 rounded-2xl bg-gradient-to-r from-cyan-500/15 to-pink-500/15 backdrop-blur-sm border border-white/5 animate-float animation-delay-600 shadow-xl shadow-cyan-500/5">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-xl p-2.5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
          </div>
          
          {/* Twitter/X - repositioned */}
          <div className="absolute top-2/3 right-1/4 p-3 rounded-2xl bg-blue-500/15 backdrop-blur-sm border border-white/5 animate-float animation-delay-1000 shadow-xl shadow-blue-500/5">
            <div className="w-12 h-12 bg-blue-500 rounded-xl p-2.5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
          </div>
          
          {/* Spotify */}
          <div className="absolute bottom-1/3 right-1/6 p-3 rounded-2xl bg-green-500/15 backdrop-blur-sm border border-white/5 animate-float animation-delay-700 shadow-xl shadow-green-500/5">
            <div className="w-12 h-12 bg-green-500 rounded-xl p-2.5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div>
          </div>
          
        </div>
        
        <div className="container relative mx-auto px-4 text-center">
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
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                inflnce.io
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Your one-stop platform for social media growth, publications, and digital marketing tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="green-gradient-bg h-12 px-8" asChild>
                <Link href="/sign-up">
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
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-green-400 border border-green-400/30 bg-green-400/10 mb-6">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Comprehensive Services</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Everything you need to grow your online presence and reach your target audience effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">Social Media Growth</CardTitle>
                <CardDescription className="text-gray-400">
                  Expand your reach across all major platforms including Instagram, TikTok, YouTube, Twitter, LinkedIn, and Spotify.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-300">Follower growth campaigns</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-300">Engagement optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-300">Content promotion</span>
                </div>
                <Link href="/services/social-media" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium mt-6">
                  Explore Social Media
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 border-2 border-green-500 rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-white mb-2">Publication Features</CardTitle>
                <CardDescription className="text-gray-400">
                  Get featured in reputable publications to boost your credibility and reach new audiences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-300">Press release distribution</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-300">Featured articles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-300">Industry-specific publications</span>
                </div>
                <Link href="/services/publications" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium mt-6">
                  Explore Publications
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <div className="relative">
                    <div className="w-6 h-6 border-2 border-green-500 rounded" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-white mb-2">Digital Marketing Tools</CardTitle>
                <CardDescription className="text-gray-400">
                  Access powerful tools to enhance your online marketing strategy and drive results.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-300">SEO optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-300">Web development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-300">Knowledge panel creation</span>
                </div>
                <Link href="/services/tools" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium mt-6">
                  Explore Tools
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-green-400 border border-green-400/30 bg-green-400/10 mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Choose inflnce</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We provide comprehensive solutions to help businesses and individuals establish a strong online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-7 w-7 text-green-500" />
                </div>
                <CardTitle className="text-xl text-white mb-4">Global Reach</CardTitle>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Connect with audiences worldwide through our extensive network of platforms and publications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-7 w-7 text-green-500" />
                </div>
                <CardTitle className="text-xl text-white mb-4">Trusted Results</CardTitle>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our proven strategies deliver measurable outcomes and sustainable growth for your brand.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <div className="w-7 h-7 border-2 border-green-500 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500" />
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
                <div className="h-14 w-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-7 w-7 text-green-500" />
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
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-green-400 border border-green-400/30 bg-green-400/10 mb-6">
              Get Started Today
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Elevate Your Online Presence?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
              Join thousands of businesses and individuals who have transformed their digital footprint with inflnce.io.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="green-gradient-bg h-12 px-8" asChild>
                <Link href="/sign-up">
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