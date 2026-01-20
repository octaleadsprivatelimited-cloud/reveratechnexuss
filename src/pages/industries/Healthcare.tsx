import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeartPulse, CheckCircle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import industryHealthcare from "@/assets/industry-healthcare.jpg";

const Healthcare = () => {
  return (
    <Layout>
      <PageHero
        badge="Healthcare Industry"
        title="Healthcare &"
        titleHighlight="Medical"
        description="Caring for those who care – connecting healthcare organizations with compassionate professionals who make a real difference."
        primaryCta={{ text: "Discuss Your Needs", href: "/contact" }}
        secondaryCta={{ text: "View All Industries", href: "/industries" }}
        image={industryHealthcare}
        imageAlt="Healthcare & Medical"
      />

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
              Need Healthcare Professionals?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with us to find dedicated healthcare talent for your organization.
            </p>
            <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-8">
              <Link to="/contact">Discuss Your Needs</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Healthcare;
