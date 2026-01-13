import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientLogosSection } from "@/components/home/ClientLogosSection";
import { QuickLinksSection } from "@/components/home/QuickLinksSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FounderSection } from "@/components/home/FounderSection";
import { CTASection } from "@/components/home/CTASection";
import { PageTransition } from "@/components/ui/page-transition";

const Index = () => {
  return (
    <Layout>
      <PageTransition>
        <HeroSection />
        <ClientLogosSection />
        <QuickLinksSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <WhyChooseUs />
        <FounderSection />
        <CTASection />
      </PageTransition>
    </Layout>
  );
};

export default Index;
