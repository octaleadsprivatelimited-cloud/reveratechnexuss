import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, CheckCircle, ArrowRight } from "lucide-react";

const InformationTechnology = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <Monitor className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Information Technology
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Building tomorrow's digital workforce with specialized tech talent solutions.
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
      <section className="bg-beige py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-light text-foreground mb-4 lowercase">
            looking for tech talent?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your IT hiring requirements and find the perfect fit.
          </p>
          <Button asChild size="lg" className="gradient-blue text-white">
            <Link to="/contact">start hiring</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default InformationTechnology;
