import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import OrdersDashboard from "./OrdersDashboard";

export default async function MyOrdersPage() {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <OrdersDashboard />
      <Footer />
    </div>
  );
}