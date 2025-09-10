import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Code2, Search, Shield } from "lucide-react";

const tools = [
  {
    id: "email-automation",
    name: "Email Automation",
    icon: <Bot className="h-12 w-12 text-green-500" />,
    href: "/services/tools/email-automation",
    description: "Streamline your email marketing workflow with our powerful automation tools.",
    actionText: "Explore Email Automation",
    bgColor: "bg-gray-900/50"
  },
  {
    id: "website-design",
    name: "Website Design",
    icon: <Code2 className="h-12 w-12 text-green-500" />,
    href: "/services/tools/website-design",
    description: "Custom web solutions designed to elevate your online presence.",
    actionText: "Explore Website Design",
    bgColor: "bg-gray-900/50"
  },
  {
    id: "seo",
    name: "SEO",
    icon: <Search className="h-12 w-12 text-green-500" />,
    href: "/services/tools/seo",
    description: "Boost your visibility and rankings with our professional SEO services.",
    actionText: "Explore SEO",
    bgColor: "bg-gray-900/50"
  },
  {
    id: "knowledge-panel",
    name: "Knowledge Panel",
    icon: <Shield className="h-12 w-12 text-green-500" />,
    href: "/services/tools/knowledge-panel",
    description: "Establish your authority with a Google Knowledge Panel.",
    actionText: "Explore Knowledge Panel",
    bgColor: "bg-gray-900/50"
  }
];

export default async function ToolsServicesPage() {

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-500/5 rounded-full blur-xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
      </div>
      
      <Header />
      
      {/* Header Section */}
      <div className="relative bg-gray-950/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Digital Marketing Tools</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive suite of digital marketing tools designed to help you grow your online presence, engage with your audience, and drive measurable results.
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <Card key={tool.id} className="group relative bg-gray-900/50 border border-gray-800 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 p-8 overflow-hidden">
              {/* Card background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <CardTitle className="text-2xl text-white mb-4 group-hover:text-green-400 transition-colors duration-300">{tool.name}</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 relative z-10">
                <Button 
                  className="green-gradient-bg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 px-6"
                  asChild
                >
                  <a href={tool.href}>
                    {tool.actionText} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Solutions Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="relative bg-gray-900/50 border border-gray-800 hover:border-green-500/30 transition-all duration-300 p-8 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/[0.01] via-transparent to-blue-500/[0.01]"></div>
            <div className="absolute top-4 right-4 w-20 h-20 bg-green-500/[0.03] rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-500/[0.03] rounded-full blur-xl"></div>
            
            <CardContent className="text-center relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
                Don&apos;t see what you&apos;re looking for? We offer custom solutions tailored to your specific needs. Our team of experts will work with you to create a personalized strategy that delivers results.
              </p>
              <Button className="green-gradient-bg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 text-lg px-8 py-3" asChild>
                <a href="/contact">
                  Contact Us
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}