import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import industryCorporate from "@/assets/industry-corporate.jpg";

const Corporate = () => {
  return (
    <Layout>
      <PageHero
        badge="Corporate Industry"
        title="Corporate &"
        titleHighlight="Business"
        description="Powering business excellence with white-collar professional recruitment across finance, marketing, HR, and operations."
        primaryCta={{ text: "Start Hiring", href: "/contact" }}
        secondaryCta={{ text: "View All Industries", href: "/industries" }}
        image={industryCorporate}
        imageAlt="Corporate & Business"
      />

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Corporate Talent Solutions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From finance to marketing, HR to operations, we help organizations build 
                high-performing corporate teams that drive business success.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our deep understanding of corporate functions and company cultures enables 
                us to match the right professionals with the right opportunities.
              </p>

              <div className="mt-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Functions We Cover</h3>
                <ul className="space-y-3">
                  {[
                    "Finance & Accounting",
                    "Marketing & Communications",
                    "Human Resources",
                    "Sales & Business Development",
                    "Operations & Administration",
                    "Legal & Compliance",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-muted p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["FMCG", "BFSI", "Retail", "Manufacturing", "Consulting", "Real Estate"].map((industry) => (
                    <div key={industry} className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      {industry}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Why Partner With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Extensive corporate talent network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Function-specific expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Quick turnaround times</span>
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
              Build Your Corporate Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's find the professionals who will drive your business forward.
            </p>
            <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-8">
              <Link to="/contact">Start Hiring</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Corporate;
