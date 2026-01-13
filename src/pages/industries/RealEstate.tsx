import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Building2, Users, TrendingUp, Shield } from "lucide-react";
import { PageTransition, FadeIn, StaggerContainer, StaggerItem, ScaleIn, HoverScale } from "@/components/ui/page-transition";
import heroImage from "@/assets/industry-realestate.jpg";

const RealEstate = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Real Estate Industry" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,11%,15%)]/90 via-[hsl(210,11%,15%)]/70 to-transparent" />
          </div>
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-2xl">
              <FadeIn delay={0.1}>
                <span className="inline-block rounded-full bg-[hsl(174,100%,29%)]/20 border border-[hsl(174,100%,29%)]/30 px-4 py-1.5 text-sm font-medium text-[hsl(174,100%,45%)] mb-6">
                  Real Estate Industry
                </span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                  Real Estate & Property
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-gray-300 mb-8">
                  Connecting property businesses with top-tier talent to drive growth in residential, commercial, and industrial real estate sectors.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <HoverScale>
                  <Button asChild size="lg" className="bg-[hsl(174,100%,29%)] hover:bg-[hsl(174,100%,24%)]">
                    <Link to="/contact">
                      Start Hiring
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </HoverScale>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <div>
                <FadeIn>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Real Estate Talent Solutions
                  </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="text-lg text-muted-foreground mb-8">
                    The real estate industry demands professionals who combine market expertise with exceptional client relationship skills. We specialize in recruiting talent across all segments of the property sector, from residential sales to commercial development.
                  </p>
                </FadeIn>

                <StaggerContainer className="space-y-6" staggerDelay={0.15}>
                  <StaggerItem>
                    <HoverScale className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[hsl(174,100%,29%)]/10 flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-[hsl(174,100%,29%)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Property Expertise</h3>
                        <p className="text-muted-foreground text-sm">Deep understanding of local and international property markets and their unique staffing needs.</p>
                      </div>
                    </HoverScale>
                  </StaggerItem>
                  <StaggerItem>
                    <HoverScale className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[hsl(174,100%,29%)]/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-[hsl(174,100%,29%)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Sales-Driven Talent</h3>
                        <p className="text-muted-foreground text-sm">Access to high-performing sales professionals with proven track records in property transactions.</p>
                      </div>
                    </HoverScale>
                  </StaggerItem>
                  <StaggerItem>
                    <HoverScale className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[hsl(174,100%,29%)]/10 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-[hsl(174,100%,29%)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Growth Focus</h3>
                        <p className="text-muted-foreground text-sm">Candidates who drive revenue and expand market presence for your organization.</p>
                      </div>
                    </HoverScale>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <ScaleIn delay={0.2}>
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Roles We Cover</h3>
                    <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.05}>
                      {[
                        "Real Estate Agents",
                        "Property Managers",
                        "Leasing Consultants",
                        "Commercial Brokers",
                        "Real Estate Analysts",
                        "Development Managers",
                        "Valuers & Appraisers",
                        "Investment Advisors",
                        "Facility Managers",
                        "Marketing Specialists",
                      ].map((role) => (
                        <StaggerItem key={role}>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-[hsl(174,100%,29%)] flex-shrink-0" />
                            {role}
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </ScaleIn>

                <ScaleIn delay={0.3}>
                  <div className="bg-[hsl(174,100%,29%)]/5 border border-[hsl(174,100%,29%)]/20 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="h-8 w-8 text-[hsl(174,100%,29%)] flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Why Partner With Us?</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Extensive network of real estate professionals</li>
                          <li>• Understanding of RERA and compliance requirements</li>
                          <li>• Quick turnaround for urgent hiring needs</li>
                          <li>• Industry-specific assessment methodologies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-[hsl(174,100%,29%)] py-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl" />
          </div>
          <div className="container-custom relative z-10 text-center">
            <FadeIn>
              <h2 className="font-heading text-3xl font-bold text-white lowercase">
                build your real estate team
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 text-lg text-white/80">
                Find top property professionals who drive results and close deals.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <HoverScale>
                <Button asChild size="lg" className="mt-8 bg-white text-[hsl(174,100%,29%)] hover:bg-gray-100">
                  <Link to="/contact">Start Hiring Today</Link>
                </Button>
              </HoverScale>
            </FadeIn>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default RealEstate;
