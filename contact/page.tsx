import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Clock } from "lucide-react";

export default async function ContactPage() {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-950/50">
        <div className="container relative mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with our team for custom solutions and support
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
              <CardDescription>
                Tell us about your project and we&apos;ll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="bg-gray-800/50 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-gray-800/50 border-gray-700 text-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="john@example.com" 
                  className="bg-gray-800/50 border-gray-700 text-white"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Subject
                </label>
                <Input 
                  placeholder="Custom solution inquiry" 
                  className="bg-gray-800/50 border-gray-700 text-white"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Message
                </label>
                <textarea 
                  placeholder="Tell us about your project requirements..."
                  rows={6}
                  className="flex min-h-[80px] w-full rounded-md border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm text-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              
              <Button className="w-full green-gradient-bg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Ready to take your digital presence to the next level? Our team of experts is here to help you achieve your goals with custom solutions tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-400">support@inflnce.io</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Response Time</h3>
                    <p className="text-gray-400">Within 24 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Global Reach</h3>
                    <p className="text-gray-400">Worldwide services available</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-green-500/10 to-transparent border-green-500/20 p-6">
              <h3 className="font-semibold text-white mb-2">Need immediate assistance?</h3>
              <p className="text-gray-400 mb-4">
                For urgent inquiries or existing client support, please check your client dashboard or contact your dedicated account manager.
              </p>
              <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                Access Dashboard
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}