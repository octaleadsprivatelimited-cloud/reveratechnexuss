import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Factory, CheckCircle, ArrowRight } from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import heroImage from "@/assets/hero-image.jpg";

const Manufacturing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Manufacturing & Industrial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(210,11%,15%)]/85" />
        </div>
        <HeroBackground />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <Factory className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Manufacturing & Industrial
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Industrial workforce solutions for manufacturing excellence.
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
                Manufacturing Talent Expertise
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The manufacturing sector requires a unique blend of technical skills and hands-on 
                expertise. We understand the specific requirements of manufacturing roles and 
                deliver candidates who meet your quality and safety standards.
              </p>
              <p className="mt-4 text-muted-foreground">
                From production supervisors to quality engineers, we help manufacturers build 
                efficient and skilled workforces.
              </p>

              <div className="mt-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Roles We Fill</h3>
                <ul className="space-y-3">
                  {[
                    "Plant Managers & Production Heads",
                    "Quality Engineers & Inspectors",
                    "Supply Chain & Logistics Managers",
                    "Maintenance Engineers",
                    "Production Supervisors",
                    "EHS Officers",
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
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Sectors We Cover</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Automotive", "Pharmaceutical", "Electronics", "Textiles", "Food Processing", "Heavy Engineering"].map((sector) => (
                    <div key={sector} className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      {sector}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Strengths</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Understanding of manufacturing processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Pan-India presence for plant hiring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Volume hiring capabilities</span>
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
            power your production
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Find skilled manufacturing professionals for your operations.
          </p>
          <Button asChild size="lg" className="gradient-blue text-white">
            <Link to="/contact">contact us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Manufacturing;
