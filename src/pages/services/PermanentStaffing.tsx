import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, CheckCircle, ArrowRight } from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import servicePermanent from "@/assets/service-permanent-new.jpg";

const PermanentStaffing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={servicePermanent}
            alt="Permanent Staffing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(210,11%,15%)]/85" />
        </div>
        <HeroBackground />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Permanent Staffing
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Find the right permanent talent to build your core team with long-term commitment and cultural fit.
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
                Building Teams That Last
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our permanent staffing services are designed to find candidates who not only have the right 
                skills but also align with your company culture and long-term vision.
              </p>
              <p className="mt-4 text-muted-foreground">
                We go beyond resume matching to understand the nuances of your organization, ensuring every 
                placement contributes to your team's success for years to come.
              </p>

              <div className="mt-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Process</h3>
                <ul className="space-y-3">
                  {[
                    "In-depth understanding of role requirements",
                    "Comprehensive candidate sourcing and screening",
                    "Skill assessments and background verification",
                    "Cultural fit evaluation",
                    "Replacement guarantee for peace of mind",
                    "Post-placement support and follow-up",
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
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Roles We Fill</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Entry Level", "Mid-Level", "Senior Roles", "Team Leads", "Managers", "Specialists"].map((role) => (
                    <div key={role} className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      {role}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Guarantee</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">90-day replacement guarantee on all placements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Thorough background and reference checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Dedicated account manager support</span>
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
            ready to build your dream team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help you find the perfect permanent hires.
          </p>
          <Button asChild size="lg" className="gradient-blue text-white">
            <Link to="/contact">get started</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PermanentStaffing;
