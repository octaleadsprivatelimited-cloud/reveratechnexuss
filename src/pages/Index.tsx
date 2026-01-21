import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientLogosSection } from "@/components/home/ClientLogosSection";
import { QuickLinksSection } from "@/components/home/QuickLinksSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FounderSection } from "@/components/home/FounderSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Revera Tech Nexus",
    "url": "https://reveratechnexus.com",
    "logo": "https://reveratechnexus.com/full-logo-transparent.webp",
    "description": "Revera Tech Nexus is Bangalore's trusted recruitment agency offering IT, Healthcare, Real Estate & Corporate staffing solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-99009-49512",
      "contactType": "Customer Service",
      "email": "jyothi.m@reveratechnexus.com",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/reveratechnexus",
      "https://twitter.com/reveratechnexus",
      "https://www.facebook.com/reveratechnexus"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <Layout>
      <SEO
        title="Revera Tech Nexus - Hiring & Recruitment Solutions | Bangalore"
        description="Revera Tech Nexus is Bangalore's trusted recruitment agency offering IT, Healthcare, Real Estate & Corporate staffing solutions. Connect with top employers and exceptional talent today."
        keywords="recruitment agency Bangalore, IT recruitment, healthcare staffing, real estate hiring, corporate recruitment, permanent staffing, contract staffing, executive search, HR consulting, payroll services, job placement Bangalore, talent acquisition, staffing solutions India"
        ogImage="/hero-image.webp"
        structuredData={structuredData}
      />
      <HeroSection />
      <ClientLogosSection />
      <QuickLinksSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUs />
      <FounderSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
