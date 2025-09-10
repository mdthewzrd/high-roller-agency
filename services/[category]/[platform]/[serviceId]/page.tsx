import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceById, platformConfigs, Service } from "@/lib/services-data-complete";

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ category: string; platform: string; serviceId: string }>;
}) {
  const { category, platform, serviceId } = await params;
  const service = getServiceById(serviceId);
  const platformConfig = platformConfigs[platform as keyof typeof platformConfigs];
  
  if (!service || !platformConfig) {
    notFound();
  }
  
  return <ServiceDetailPage service={service} platformConfig={platformConfig} />;
}

// Generate static params for all services
export async function generateStaticParams() {
  const { completeServicesData } = await import("@/lib/services-data-complete");
  
  return completeServicesData.map((service: Service) => {
    const categoryMap: Record<string, string> = {
      socialMedia: "social-media",
      publication: "publications",
      tool: "tools"
    };
    
    return {
      category: categoryMap[service.category],
      platform: service.platform,
      serviceId: service.id
    };
  });
}