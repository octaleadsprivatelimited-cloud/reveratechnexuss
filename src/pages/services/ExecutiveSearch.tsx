import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, CheckCircle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import serviceExecutive from "@/assets/service-executive-new.webp";

const ExecutiveSearch = () => {
  return (
    <Layout>
      <PageHero
        badge="Executive Search"
        title="Leadership That"
        titleHighlight="Transforms"
        description="Confidential search for C-suite executives, board members, and senior leadership positions with discretion and precision."
        primaryCta={{ text: "Schedule a Call", href: "/contact" }}
        secondaryCta={{ text: "View All Services", href: "/services" }}
        image={serviceExecutive}
        imageAlt="Executive Search"
      />

      {/* Content */}
      <section className="relative py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                  Our Services
                </span>
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Leadership That Transforms
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Finding the right leader can transform your organization. Our executive search practice 
                  is dedicated to identifying and attracting exceptional talent for your most critical 
                  leadership roles.
                </p>
                <p className="mt-4 text-muted-foreground">
                  With discretion and precision, we conduct thorough searches across our extensive network, 
                  ensuring you meet candidates who can drive your organization's vision forward.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  </span>
                  Our Approach
                </h3>
                <ul className="space-y-3">
                  {[
                    "Confidential and discreet search process",
                    "Comprehensive market mapping and analysis",
                    "In-depth leadership assessment",
                    "Board-level presentation of candidates",
                    "Negotiation and offer management",
                    "Executive onboarding support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Award className="h-4 w-4 text-blue-500" />
                  </span>
                  Positions We Fill
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["CEO", "CFO", "CTO", "COO", "CHRO", "Board Members", "VPs", "Directors"].map((role) => (
                    <div key={role} className="flex items-center gap-2 text-muted-foreground bg-white/80 rounded-lg px-3 py-2 border border-slate-100">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      {role}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </span>
                  Why Partner With Us?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 bg-slate-50/50 rounded-lg p-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Deep network of senior executives</span>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-50/50 rounded-lg p-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Proprietary assessment methodology</span>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-50/50 rounded-lg p-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Industry-specific expertise</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Searching for Leadership Talent?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's have a confidential discussion about your executive hiring needs.
            </p>
            <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-8">
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExecutiveSearch;
