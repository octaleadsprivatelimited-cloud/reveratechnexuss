import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator, CheckCircle, ArrowRight } from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import servicePayroll from "@/assets/service-payroll.jpg";

const PayrollServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={servicePayroll}
            alt="Payroll Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(210,11%,15%)]/85" />
        </div>
        <HeroBackground />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Payroll Services
            </h1>
            <p className="mt-6 text-lg text-white/80">
              End-to-end payroll management with complete statutory compliance and timely processing.
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
      <section className="bg-beige py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-light text-foreground mb-4 lowercase">
            simplify your payroll management
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a customized payroll solution tailored to your organization's needs.
          </p>
          <Button asChild size="lg" className="gradient-blue text-white">
            <Link to="/contact">get a quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PayrollServices;
