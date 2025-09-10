import ServicePlatformPage from "@/components/ServicePlatformPage";

export default function AppBuildingServicesPage() {
  return (
    <ServicePlatformPage
      platform="mobile"
      platformName="App Building"
      platformIcon="📱"
      platformGradient="bg-gradient-to-r from-pink-500 to-rose-500"
      platformDescription="Professional mobile app development and deployment services"
    />
  );
}