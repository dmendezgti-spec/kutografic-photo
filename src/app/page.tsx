import ContactSection from "@/components/sections/ContactSection";
import GallerySection from "@/components/sections/GallerySection";
import HeroSection from "@/components/sections/HeroSection";
import MetricsSection from "@/components/sections/MetricsSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MetricsSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
