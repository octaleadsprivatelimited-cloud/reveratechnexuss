import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, CheckCircle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import industryIT from "@/assets/industry-it.jpg";

const InformationTechnology = () => {
  return (
    <Layout>
      <PageHero
        badge="IT Industry"
        title="Information"
        titleHighlight="Technology"
        description="Building tomorrow's digital workforce with specialized tech talent solutions for startups to enterprises."
        primaryCta={{ text: "Start Hiring", href: "/contact" }}
        secondaryCta={{ text: "View All Industries", href: "/industries" }}
        image={industryIT}
        imageAlt="Information Technology"
      />

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Tech Talent That Drives Innovation
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The technology landscape is evolving rapidly, and finding the right tech talent is 
                more challenging than ever. Our IT recruitment specialists understand the nuances 
                of technical roles and can identify candidates who truly fit your requirements.
              </p>
              <p className="mt-4 text-muted-foreground">
                From startups to enterprise tech companies, we've helped organizations build 
                engineering teams that create cutting-edge products and solutions.
              </p>

              <div className="mt-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Roles We Specialize In</h3>
                <ul className="space-y-3">
                  {[
                    "Software Engineers & Full-Stack Developers",
                    "Data Scientists & ML Engineers",
                    "Cloud Architects & DevOps Engineers",
                    "Product Managers & Scrum Masters",
                    "UI/UX Designers & Researchers",
                    "Cybersecurity Specialists",
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
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Technologies We Cover</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["React/Angular/Vue", "Python/Java/Node", "AWS/Azure/GCP", "AI/ML", "Blockchain", "Mobile (iOS/Android)"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Why Choose Us for IT Hiring?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Technical screening by industry experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Access to passive tech talent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Quick turnaround for urgent roles</span>
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
              Looking for Tech Talent?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your IT hiring requirements and find the perfect fit.
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

export default InformationTechnology;
