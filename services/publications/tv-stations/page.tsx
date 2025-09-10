import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import TVStationsTable from "./TVStationsTable";

export default async function TVStationsPage() {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-950/50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/services" className="text-green-400 hover:text-green-300">Services</Link>
            <span className="text-gray-500">/</span>
            <Link href="/services/publications" className="text-green-400 hover:text-green-300">Publications</Link>
            <span className="text-gray-500">/</span>
            <span className="text-white">TV Stations</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gray-950/50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">
              TV Station Placements
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get featured on major television networks across the United States
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/services/publications">
                <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
                  ← Back to Publications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* TV Stations Table */}
      <div className="container mx-auto px-4 py-16">
        <TVStationsTable />
      </div>

      <Footer />
    </div>
  );
}