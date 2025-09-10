"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Star, ShoppingCart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Service, ServicePackage } from "@/lib/services-data-complete";

interface ServiceDetailPageProps {
  service: Service;
  platformConfig: {
    name: string;
    icon: string;
    gradient: string;
    description: string;
  };
}

export default function ServiceDetailPage({ service, platformConfig }: ServiceDetailPageProps) {
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage>(
    service.packages.find(p => p.highlight) || service.packages[0]
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Platform Gradient */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 ${platformConfig.gradient} opacity-10`} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        
        <div className="container relative mx-auto px-4 py-16">
          <Link href={`/services/${service.category === "socialMedia" ? "social-media" : service.category === "publication" ? "publications" : "tools"}/${service.platform}`}>
            <Button variant="ghost" size="sm" className="mb-6 hover-scale-sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {platformConfig.name}
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl float-animation">{platformConfig.icon}</span>
              <Badge className={`${platformConfig.gradient} text-white border-0`}>
                {platformConfig.name}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in">
              {service.service}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 fade-in animation-delay-200">
              {service.description}
            </p>
            
            {service.notes && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground fade-in animation-delay-300">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>{service.notes}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Packages Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Package</h2>
          
          {/* Package Tabs for Desktop */}
          <div className="hidden md:block mb-8">
            <Tabs defaultValue={selectedPackage.name} onValueChange={(value) => {
              const pkg = service.packages.find(p => p.name === value);
              if (pkg) setSelectedPackage(pkg);
            }}>
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full">
                {service.packages.map((pkg) => (
                  <TabsTrigger 
                    key={pkg.name} 
                    value={pkg.name}
                    className="relative"
                  >
                    {pkg.highlight && (
                      <Star className="absolute -top-2 -right-2 h-4 w-4 text-yellow-500 fill-yellow-500" />
                    )}
                    {pkg.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value={selectedPackage.name} className="mt-6">
                <Card className="service-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl">{selectedPackage.name} Package</CardTitle>
                        <CardDescription className="mt-2">
                          {service.description}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">
                          ${selectedPackage.price.toLocaleString()}
                        </div>
                        {selectedPackage.highlight && (
                          <Badge variant="secondary" className="mt-2 bg-green-500/10 text-green-500">
                            Most Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {selectedPackage.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 fade-in-up" style={{animationDelay: `${idx * 50}ms`}}>
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full brand-gradient text-white border-0 hover-lift" 
                      size="lg"
                      asChild
                    >
                      <Link href={`/checkout?serviceId=${service.id}&packageId=${service.id}-${selectedPackage.name.toLowerCase()}`}>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart - ${selectedPackage.price}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Package Cards for Mobile */}
          <div className="md:hidden space-y-4">
            {service.packages.map((pkg, idx) => (
              <Card 
                key={pkg.name} 
                className={`service-card fade-in-up ${selectedPackage.name === pkg.name ? 'ring-2 ring-primary' : ''}`}
                style={{animationDelay: `${idx * 100}ms`}}
                onClick={() => setSelectedPackage(pkg)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">
                      {pkg.name}
                      {pkg.highlight && (
                        <Badge variant="secondary" className="ml-2 bg-green-500/10 text-green-500">
                          Popular
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="text-2xl font-bold text-primary">
                      ${pkg.price.toLocaleString()}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {pkg.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{item}</span>
                      </div>
                    ))}
                    {pkg.deliverables.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{pkg.deliverables.length - 3} more features
                      </span>
                    )}
                  </div>
                  
                  <Button className="w-full brand-gradient text-white border-0" size="sm" asChild>
                    <Link href={`/checkout?serviceId=${service.id}&packageId=${service.id}-${pkg.name.toLowerCase()}`}>
                      Select Package
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of satisfied customers who trust {platformConfig.name} services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="brand-gradient text-white border-0 hover-lift" asChild>
              <Link href={`/checkout?serviceId=${service.id}&packageId=${service.id}-${selectedPackage.name.toLowerCase()}`}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-scale-sm">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}