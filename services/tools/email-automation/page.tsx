import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EmailAutomationServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
              <Link href="/services/tools">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Tools
              </Link>
            </Button>
          </div>
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Bot className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-white">Email Automation</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Automate your email marketing with professional campaigns and sequences
            </p>
          </div>

          {/* Content */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-400 mb-6">
                Our email automation tools are currently in development. Contact us for custom email marketing solutions.
              </p>
              <Button className="green-gradient-bg" asChild>
                <Link href="/contact">Contact Us for Custom Solutions</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}