import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";

export default async function CheckoutPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-8 w-8 text-green-500" />
                <CardTitle className="text-2xl text-white">Checkout</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center py-12">
              <p className="text-gray-400 mb-6">
                Select a service package from our catalog to proceed with checkout.
              </p>
              <Button className="green-gradient-bg" asChild>
                <Link href="/services">Browse Services</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}