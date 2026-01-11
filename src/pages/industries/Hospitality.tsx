import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Hotel, CheckCircle, ArrowRight } from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import industryHospitality from "@/assets/industry-hospitality.jpg";

const Hospitality = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={industryHospitality}
            alt="Hospitality & Tourism"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(210,11%,15%)]/85" />
        </div>
        <HeroBackground />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <Hotel className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Hospitality & Tourism
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Excellence in guest experience – staffing solutions for the hospitality industry.
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
                Hospitality Staffing Solutions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The hospitality industry thrives on service excellence. We recruit professionals 
                who embody warmth, efficiency, and a genuine passion for creating memorable 
                guest experiences.
              </p>
              <p className="mt-4 text-muted-foreground">
                From luxury hotels to boutique restaurants, we understand the unique staffing 
                needs of the hospitality sector and deliver candidates who elevate your service standards.
              </p>

              <div className="mt-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Roles We Fill</h3>
                <ul className="space-y-3">
                  {[
                    "Hotel General Managers & Directors",
                    "F&B Managers & Executive Chefs",
                    "Front Office & Guest Relations",
                    "Housekeeping Supervisors & Staff",
                    "Event & Banquet Coordinators",
                    "Spa & Wellness Managers",
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
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Segments We Serve</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Luxury Hotels", "Business Hotels", "Resorts", "Restaurants", "Cruise Lines", "Event Venues"].map((segment) => (
                    <div key={segment} className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      {segment}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Understanding of hospitality service standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Network across hotel chains and groups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Seasonal and permanent staffing options</span>
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
            elevate your guest experience
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Find hospitality professionals who deliver exceptional service.
          </p>
          <Button asChild size="lg" className="gradient-blue text-white">
            <Link to="/contact">get in touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Hospitality;
