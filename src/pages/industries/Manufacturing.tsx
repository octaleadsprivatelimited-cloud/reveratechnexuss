import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Factory, CheckCircle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import industryManufacturing from "@/assets/industry-manufacturing.jpg";

const Manufacturing = () => {
  return (
    <Layout>
      <PageHero
        badge="Manufacturing Industry"
        title="Manufacturing &"
        titleHighlight="Industrial"
        description="Industrial workforce solutions for manufacturing excellence. We deliver candidates who meet your quality and safety standards."
        primaryCta={{ text: "Contact Us", href: "/contact" }}
        secondaryCta={{ text: "View All Industries", href: "/industries" }}
        image={industryManufacturing}
        imageAlt="Manufacturing & Industrial"
      />

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
              Power Your Production
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find skilled manufacturing professionals for your operations.
            </p>
            <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Manufacturing;
