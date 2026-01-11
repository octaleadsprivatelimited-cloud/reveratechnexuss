import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeartPulse, CheckCircle, ArrowRight } from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import industryHealthcare from "@/assets/industry-healthcare.jpg";

const Healthcare = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={industryHealthcare}
            alt="Healthcare & Medical"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(210,11%,15%)]/85" />
        </div>
        <HeroBackground />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <HeartPulse className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Healthcare & Medical
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Caring for those who care – connecting healthcare organizations with compassionate professionals.
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
                Healthcare Staffing Excellence
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Healthcare demands professionals with not just skills, but compassion and dedication. 
                We understand the critical nature of healthcare hiring and the impact it has on patient care.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our specialized healthcare recruitment team connects hospitals, clinics, and healthcare 
                organizations with qualified medical professionals who make a real difference.
              </p>

              <div className="mt-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Roles We Fill</h3>
                <ul className="space-y-3">
                  {[
                    "Physicians & Medical Specialists",
                    "Registered Nurses & Nursing Staff",
                    "Lab Technicians & Radiologists",
                    "Pharmacists & Pharmacy Techs",
                    "Hospital Administrators",
                    "Medical Coders & Billing Specialists",
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
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Facilities We Serve</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Hospitals", "Clinics", "Diagnostic Centers", "Pharma Companies", "Nursing Homes", "Research Labs"].map((facility) => (
                    <div key={facility} className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      {facility}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Commitment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Verified credentials and certifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Background and reference checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Understanding of healthcare compliance</span>
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
            need healthcare professionals?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Partner with us to find dedicated healthcare talent for your organization.
          </p>
          <Button asChild size="lg" className="gradient-blue text-white">
            <Link to="/contact">discuss your needs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Healthcare;
