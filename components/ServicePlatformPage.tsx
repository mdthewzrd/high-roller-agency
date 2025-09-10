"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getServicesByPlatform, Service } from "@/lib/services-data";
import { ArrowRight, Check, Star, Zap, TrendingUp, Shield } from "lucide-react";

interface ServicePlatformPageProps {
  platform: string;
  platformName: string;
  platformIcon: string;
  platformGradient: string;
  platformDescription: string;
}

export default function ServicePlatformPage({
  platform,
  platformName,
  platformIcon,
  platformGradient,
  platformDescription
}: ServicePlatformPageProps) {
  const services = getServicesByPlatform(platform);
  const [selectedService, setSelectedService] = useState<Service | null>(services[0] || null);

  if (!services.length) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">No services available yet</h1>
          <p className="text-muted-foreground mb-8">Check back soon for {platformName} services</p>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 ${platformGradient} opacity-5`} />
        <div className="container relative mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <span className="text-7xl inline-block mb-6 animate-float">{platformIcon}</span>
              <h1 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  {platformName}
                </span>
                <span className="text-foreground"> Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {platformDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-in-up animation-delay-200">
              <div className="group bg-card p-4 rounded-xl text-center hover:shadow-lg transition-all hover:border-green-500/50 border border-border">
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/20 transition-colors">
                  <Zap className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-sm font-medium">Fast Delivery</p>
              </div>
              <div className="group bg-card p-4 rounded-xl text-center hover:shadow-lg transition-all hover:border-green-500/50 border border-border">
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/20 transition-colors">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-sm font-medium">Real Growth</p>
              </div>
              <div className="group bg-card p-4 rounded-xl text-center hover:shadow-lg transition-all hover:border-green-500/50 border border-border">
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/20 transition-colors">
                  <Star className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-sm font-medium">Premium Quality</p>
              </div>
              <div className="group bg-card p-4 rounded-xl text-center hover:shadow-lg transition-all hover:border-green-500/50 border border-border">
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/20 transition-colors">
                  <Shield className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-sm font-medium">Safe & Secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Selection */}
      <div className="container mx-auto px-4 py-12">
        {services.length > 1 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service List */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Available Services</h3>
              <div className="space-y-2">
                {services.map((service) => (
                  <Card 
                    key={service.id}
                    className={`cursor-pointer transition-all hover:shadow-lg group ${
                      selectedService?.id === service.id 
                        ? "border-green-500 bg-green-500/5" 
                        : "hover:border-green-500/50"
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">{service.service}</CardTitle>
                      <CardDescription className="text-sm">
                        {service.packages.length} packages • From ${Math.min(...service.packages.map(p => p.price))}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Service Details */}
            {selectedService && (
              <div className="lg:col-span-2">
                <ServiceDetails service={selectedService} />
              </div>
            )}
          </div>
        ) : (
          <ServiceDetails service={services[0]} />
        )}
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center bg-card rounded-lg p-12 border border-border">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">
            Choose a package above or contact us for custom solutions
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/sign-up">
              <Button size="lg" className="green-gradient-bg">
                Apply for Access
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Browse All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ServiceDetails({ service }: { service: Service }) {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{service.service}</h2>
        <p className="text-muted-foreground">{service.description}</p>
        {service.notes && (
          <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-sm">ℹ️ {service.notes}</p>
          </div>
        )}
      </div>

      {/* Packages */}
      <div className="grid md:grid-cols-2 gap-4">
        {service.packages.map((pkg) => (
          <Card 
            key={pkg.name} 
            className={`relative ${pkg.highlight ? "border-green-500 shadow-lg" : ""}`}
          >
            {pkg.highlight && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-green-500 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{pkg.name}</CardTitle>
                  <p className="text-3xl font-bold mt-2">
                    ${pkg.price < 100 ? pkg.price.toFixed(2) : pkg.price.toFixed(0)}
                  </p>
                </div>
                <TierBadge tier={pkg.name} />
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {pkg.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6 green-gradient-bg">
                Select {pkg.name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

function TierBadge({ tier }: { tier: string }) {
  const colors = {
    Bronze: "bg-orange-600",
    Silver: "bg-gray-400",
    Gold: "bg-yellow-500",
    Emerald: "bg-emerald-500",
    Platinum: "bg-slate-300 text-gray-800",
    Diamond: "bg-blue-400"
  };
  
  if (tier in colors) {
    return (
      <Badge className={colors[tier as keyof typeof colors]}>
        {tier}
      </Badge>
    );
  }
  
  return null;
}