"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface Package {
  _id: string;
  name: string;
  tier: string;
  price: number;
  deliverables: string[];
}

interface PricingTableProps {
  packages: Package[];
  onSelectPackage: (packageId: string) => void;
}

const tierGradients: { [key: string]: string } = {
  Bronze: "from-orange-600 to-orange-800",
  Silver: "from-gray-500 to-gray-700",
  Gold: "from-yellow-500 to-yellow-700",
  Emerald: "from-green-500 to-green-700",
  Platinum: "from-blue-500 to-blue-700",
  Diamond: "from-purple-500 to-purple-700",
};

const tierOrder = ["Bronze", "Silver", "Gold", "Emerald", "Platinum", "Diamond"];

export default function PricingTable({ packages, onSelectPackage }: PricingTableProps) {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  
  const sortedPackages = [...packages].sort((a, b) => {
    return tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier);
  });
  
  const handleSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    onSelectPackage(packageId);
  };
  
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sortedPackages.map((pkg) => {
        const isPopular = pkg.tier === "Gold" || pkg.tier === "Platinum";
        const isSelected = selectedPackage === pkg._id;
        
        return (
          <Card 
            key={pkg._id}
            className={`relative bg-gray-900 border-gray-800 transition-all ${
              isSelected ? "ring-2 ring-green-500 ring-offset-2 ring-offset-gray-950" : ""
            } ${isPopular ? "scale-105" : ""}`}
          >
            {isPopular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white">
                Most Popular
              </Badge>
            )}
            
            <CardHeader>
              <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${
                tierGradients[pkg.tier] || "from-gray-600 to-gray-800"
              } mb-4`} />
              <CardTitle className="text-2xl">{pkg.tier}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold text-white">${pkg.price}</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-3">
                {pkg.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              <Button 
                className="w-full"
                variant={isSelected ? "default" : "outline"}
                onClick={() => handleSelect(pkg._id)}
              >
                {isSelected ? "Selected" : "Select Package"}
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}