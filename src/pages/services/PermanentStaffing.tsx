import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, CheckCircle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import servicePermanent from "@/assets/service-permanent-new.jpg";

const PermanentStaffing = () => {
  return (
    <Layout>
      <SEO
        title="Permanent Staffing Services - Long-term Recruitment Solutions | Revera Tech Nexus"
        description="Find the right permanent talent to build your core team. Revera Tech Nexus offers comprehensive permanent staffing solutions for IT, Healthcare, Real Estate, and Corporate sectors in Bangalore."
        keywords="permanent staffing, permanent recruitment, permanent hiring services, long-term staffing solutions, permanent placement services Bangalore, permanent job placement"
        ogImage="/service-permanent-new.jpg"
      />
      <PageHero
        badge="Permanent Staffing"
        title="Building Teams"
        titleHighlight="That Last"
        description="Find the right permanent talent to build your core team with long-term commitment and cultural fit."
        primaryCta={{ text: "Get Started", href: "/contact" }}
        secondaryCta={{ text: "View All Services", href: "/services" }}
        image={servicePermanent}
        imageAlt="Permanent Staffing"
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
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  </span>
                  Our Process
                </h3>
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

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-500" />
                  </span>
                  Roles We Fill
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Entry Level", "Mid-Level", "Senior Roles", "Team Leads", "Managers", "Specialists"].map((role) => (
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
                  Our Guarantee
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 bg-slate-50/50 rounded-lg p-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">90-day replacement guarantee on all placements</span>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-50/50 rounded-lg p-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Thorough background and reference checks</span>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-50/50 rounded-lg p-3">
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
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you find the perfect permanent hires.
            </p>
            <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-8">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PermanentStaffing;
