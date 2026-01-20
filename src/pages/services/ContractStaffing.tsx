import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileSearch, CheckCircle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import serviceContract from "@/assets/service-contract.jpg";

const ContractStaffing = () => {
  return (
    <Layout>
      <PageHero
        badge="Contract Staffing"
        title="Flexible"
        titleHighlight="Workforce Solutions"
        description="Flexible workforce solutions for project-based needs, seasonal demands, and temporary requirements with quick deployment."
        primaryCta={{ text: "Request Consultation", href: "/contact" }}
        secondaryCta={{ text: "View All Services", href: "/services" }}
        image={serviceContract}
        imageAlt="Contract Staffing"
      />

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Flexible Workforce, Maximum Impact
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our contract staffing solutions provide you with skilled professionals on a temporary basis, 
                giving you the flexibility to scale your workforce based on project demands without long-term 
                commitments.
              </p>
              <p className="mt-4 text-muted-foreground">
                Whether you need to fill a short-term gap, support a seasonal surge, or bring in specialized 
                skills for a specific project, our contract staffing services deliver the right talent when 
                you need it most.
              </p>

              <div className="mt-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  {[
                    "Project-based hiring for specific deliverables",
                    "Seasonal staffing for peak periods",
                    "Temporary-to-permanent conversion options",
                    "Complete payroll management",
                    "Compliance and statutory requirements handled",
                    "Quick deployment within 48-72 hours",
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
                  {["IT & Software", "Manufacturing", "Retail", "BFSI", "Healthcare", "Logistics"].map((industry) => (
                    <div key={industry} className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      {industry}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Pre-vetted talent pool ready for deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Reduced hiring risks and overhead costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Seamless onboarding and offboarding</span>
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
              Need Contract Staffing Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get in touch to discuss your requirements and get a customized proposal.
            </p>
            <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-8">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContractStaffing;
