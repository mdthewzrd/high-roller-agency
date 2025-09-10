"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Star } from "lucide-react";

interface ServicePackage {
  name: string;
  price: number;
  deliverables: string[];
  highlight?: boolean;
}

interface Service {
  id: string;
  service: string;
  description: string;
  notes?: string;
  packages: ServicePackage[];
}

interface Props {
  services: Service[];
}

export default function YouTubeServiceSelector({ services }: Props) {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Service List */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-white">Select Service</h3>
          <div className="space-y-2">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all ${
                  selectedService.id === service.id 
                    ? "border-red-500 bg-red-500/5" 
                    : "bg-gray-900/50 border-red-500/20 hover:border-red-500/50"
                }`}
                onClick={() => setSelectedService(service)}
              >
                <CardHeader className="p-4">
                  <CardTitle className="text-base text-white">{service.service}</CardTitle>
                  <CardDescription className="text-sm text-gray-400">
                    {service.packages.length} packages • From ${Math.min(...service.packages.map(p => p.price))}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Details */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-white">{selectedService.service}</h2>
            <p className="text-gray-400">{selectedService.description}</p>
            {selectedService.notes && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-gray-300">ℹ️ {selectedService.notes}</p>
              </div>
            )}
          </div>

          {/* Packages */}
          <div className="grid md:grid-cols-2 gap-4">
            {selectedService.packages.map((pkg) => (
              <Card 
                key={pkg.name} 
                className={`relative bg-gray-900/50 border-red-500/20 ${pkg.highlight ? "border-red-500 shadow-lg shadow-red-500/20" : ""}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-500 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-white">{pkg.name}</CardTitle>
                      <p className="text-3xl font-bold mt-2 text-red-400">
                        ${pkg.price < 100 ? pkg.price.toFixed(2) : pkg.price}
                      </p>
                    </div>
                    <Badge variant="outline"
                            className={`border text-white font-medium ${
                              pkg.name === "Bronze" ? "bg-orange-600 border-orange-500" :
                              pkg.name === "Silver" ? "bg-gray-400 border-gray-300 text-gray-900" :
                              pkg.name === "Gold" ? "bg-yellow-500 border-yellow-400 text-gray-900" :
                              pkg.name === "Emerald" ? "bg-emerald-500 border-emerald-400" :
                              pkg.name === "Platinum" ? "bg-slate-300 border-slate-200 text-gray-900" :
                              pkg.name === "Diamond" ? "bg-blue-400 border-blue-300" :
                              "bg-gray-600 border-gray-500"
                            }`}>
                      {pkg.name}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white">
                    Select Package
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}