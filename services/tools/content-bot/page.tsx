import ServicePlatformPage from "@/components/ServicePlatformPage";

export default function ContentBotServicesPage() {
  return (
    <ServicePlatformPage
      platform="automation"
      platformName="Content Bot"
      platformIcon="🤖"
      platformGradient="bg-gradient-to-r from-cyan-400 to-purple-500"
      platformDescription="Automated content creation and social media management bots"
    />
  );
}