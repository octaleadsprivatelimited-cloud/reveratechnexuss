import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, CheckCircle, ArrowRight, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import serviceHRConsulting from "@/assets/service-hr-consulting.webp";

const HRConsulting = () => {
  return (
    <Layout>
      <PageHero
        badge="HR Consulting"
        title="Strategic HR"
        titleHighlight="Partnership"
        description="Strategic HR advisory services to optimize your people practices and drive organizational excellence."
        primaryCta={{ text: "Book Consultation", href: "/contact" }}
        secondaryCta={{ text: "View All Services", href: "/services" }}
        image={serviceHRConsulting}
        imageAlt="HR Consulting"
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
                  Strategic HR Partnership
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our HR consulting services help organizations build robust people practices that align 
                  with business objectives. From policy development to organizational design, we provide 
                  expert guidance every step of the way.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Whether you're a startup building your HR foundation or an established company looking 
                  to optimize, our consultants bring deep expertise and practical solutions.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  </span>
                  Consulting Areas
                </h3>
                <ul className="space-y-3">
                  {[
                    "HR policy development and documentation",
                    "Compensation and benefits benchmarking",
                    "Performance management systems",
                    "Organizational structure design",
                    "Employee engagement programs",
                    "HR technology implementation",
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
                  Who We Help
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Startups", "SMEs", "Large Enterprises", "Family Businesses", "MNCs", "Non-profits"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-muted-foreground bg-white/80 rounded-lg px-3 py-2 border border-slate-100">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-green-500" />
                  </span>
                  Our Methodology
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 bg-slate-50/50 rounded-lg p-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Diagnostic assessment of current state</span>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-50/50 rounded-lg p-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Customized roadmap development</span>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-50/50 rounded-lg p-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Hands-on implementation support</span>
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
              Need HR Expertise?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss your HR challenges and opportunities.
            </p>
            <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-8">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HRConsulting;
