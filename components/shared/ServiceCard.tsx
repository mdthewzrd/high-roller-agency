import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Package {
  name: string;
  price: number;
  tier: string;
}

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  platform?: string;
  packages: Package[];
  featured?: boolean;
}

const tierColors: { [key: string]: string } = {
  Bronze: "bg-orange-900/20 text-orange-400 border-orange-900",
  Silver: "bg-gray-700/20 text-gray-300 border-gray-700",
  Gold: "bg-yellow-900/20 text-yellow-400 border-yellow-900",
  Emerald: "bg-green-900/20 text-green-400 border-green-900",
  Platinum: "bg-blue-900/20 text-blue-400 border-blue-900",
  Diamond: "bg-purple-900/20 text-purple-400 border-purple-900",
};

export default function ServiceCard({ 
  id, 
  name, 
  description, 
  category, 
  platform, 
  packages, 
  featured = false 
}: ServiceCardProps) {
  const lowestPrice = Math.min(...packages.map(p => p.price));
  const highestPrice = Math.max(...packages.map(p => p.price));
  
  return (
    <Card className={`bg-gray-900 border-gray-800 hover:border-green-900 transition-all ${
      featured ? "ring-2 ring-green-500 ring-offset-2 ring-offset-gray-950" : ""
    }`}>
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {platform || category}
          </Badge>
          {featured && (
            <Badge className="bg-green-500 text-white">
              Popular
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Price Range</span>
            <span className="text-lg font-semibold text-green-400">
              ${lowestPrice} - ${highestPrice}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {packages.map((pkg) => (
              <Badge 
                key={pkg.tier} 
                variant="outline"
                className={tierColors[pkg.tier] || ""}
              >
                {pkg.tier}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/services/${category.toLowerCase()}/${id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}