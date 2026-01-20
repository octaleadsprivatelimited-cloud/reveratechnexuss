import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator, CheckCircle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import servicePayroll from "@/assets/service-payroll.jpg";

const PayrollServices = () => {
  return (
    <Layout>
      <PageHero
        badge="Payroll Services"
        title="Hassle-Free"
        titleHighlight="Payroll Management"
        description="End-to-end payroll management with complete statutory compliance, timely processing, and 100% accuracy guarantee."
        primaryCta={{ text: "Get a Quote", href: "/contact" }}
        secondaryCta={{ text: "View All Services", href: "/services" }}
        image={servicePayroll}
        imageAlt="Payroll Services"
      />

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Hassle-Free Payroll Management
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Managing payroll can be complex and time-consuming. Our comprehensive payroll services 
                take the burden off your shoulders, ensuring accurate and timely salary processing while 
                maintaining full statutory compliance.
              </p>
              <p className="mt-4 text-muted-foreground">
                From salary calculations to tax filings, we handle every aspect of payroll administration, 
                allowing you to focus on your core business operations.
              </p>

              <div className="mt-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Services Included</h3>
                <ul className="space-y-3">
                  {[
                    "Monthly salary processing and disbursement",
                    "PF, ESI, and PT compliance",
                    "TDS calculation and filing",
                    "Leave and attendance management",
                    "Full and final settlement processing",
                    "Employee self-service portal",
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
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Compliance We Handle</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["PF Registration", "ESI Compliance", "Professional Tax", "Labour Laws", "TDS Returns", "Form 16 Generation"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">100% accuracy guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">On-time salary disbursement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Dedicated payroll specialist</span>
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
              Simplify Your Payroll Management
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a customized payroll solution tailored to your organization's needs.
            </p>
            <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-8">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PayrollServices;
