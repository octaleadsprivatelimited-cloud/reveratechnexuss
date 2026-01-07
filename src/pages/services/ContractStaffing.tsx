import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileSearch, CheckCircle, ArrowRight } from "lucide-react";

const ContractStaffing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <FileSearch className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Contract Staffing
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Flexible workforce solutions for project-based needs, seasonal demands, and temporary requirements.
            </p>
          </div>
        </div>
      </section>

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
      <section className="bg-beige py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-light text-foreground mb-4 lowercase">
            need contract staffing solutions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch to discuss your requirements and get a customized proposal.
          </p>
          <Button asChild size="lg" className="gradient-blue text-white">
            <Link to="/contact">request a consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ContractStaffing;
