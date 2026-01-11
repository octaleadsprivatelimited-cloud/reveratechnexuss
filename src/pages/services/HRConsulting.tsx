import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import heroConsulting from "@/assets/hero-consulting.jpg";

const HRConsulting = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroConsulting}
            alt="HR Consulting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(210,11%,15%)]/85" />
        </div>
        <HeroBackground />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              HR Consulting
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Strategic HR advisory services to optimize your people practices and drive organizational excellence.
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

              <div className="mt-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Consulting Areas</h3>
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

            <div className="space-y-6">
              <div className="rounded-2xl bg-muted p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Who We Help</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Startups", "SMEs", "Large Enterprises", "Family Businesses", "MNCs", "Non-profits"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Methodology</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Diagnostic assessment of current state</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Customized roadmap development</span>
                  </li>
                  <li className="flex items-start gap-3">
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
      <section className="bg-beige py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-light text-foreground mb-4 lowercase">
            need hr expertise?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a consultation to discuss your HR challenges and opportunities.
          </p>
          <Button asChild size="lg" className="gradient-blue text-white">
            <Link to="/contact">book a consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HRConsulting;
