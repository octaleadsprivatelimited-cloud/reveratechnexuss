import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Building2, Shield } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import heroImage from "@/assets/industry-realestate.jpg";

const RealEstate = () => {
  return (
    <Layout>
      <PageHero
        badge="Real Estate Industry"
        title="Real Estate &"
        titleHighlight="Property"
        description="Connecting property businesses with top-tier talent to drive growth in residential, commercial, and industrial real estate sectors."
        primaryCta={{ text: "Start Hiring", href: "/contact" }}
        secondaryCta={{ text: "View All Industries", href: "/industries" }}
        image={heroImage}
        imageAlt="Real Estate Industry"
      />

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Real Estate Talent Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The real estate industry demands professionals who combine market expertise with exceptional client relationship skills. We specialize in recruiting talent across all segments of the property sector, from residential sales to commercial development.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[hsl(174,100%,29%)]/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-[hsl(174,100%,29%)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Property Expertise</h3>
                    <p className="text-muted-foreground text-sm">Deep understanding of local and international property markets and their unique staffing needs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Roles We Cover</h3>
                <div className="grid grid-cols-2 gap-3">
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
                    <div key={role} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-[hsl(174,100%,29%)] flex-shrink-0" />
                      {role}
                    </div>
                  ))}
                </div>
              </div>

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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-100">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              Get Started Today
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Build Your Real Estate Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find top property professionals who drive results and close deals.
            </p>
            <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-8">
              <Link to="/contact">Start Hiring Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RealEstate;