import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, CheckCircle, ArrowRight } from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import heroImage from "@/assets/hero-image.jpg";

const ExecutiveSearch = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Executive Search"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(210,11%,15%)]/85" />
        </div>
        <HeroBackground />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Executive Search
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Confidential search for C-suite executives, board members, and senior leadership positions.
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
                Leadership That Transforms
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Finding the right leader can transform your organization. Our executive search practice 
                is dedicated to identifying and attracting exceptional talent for your most critical 
                leadership roles.
              </p>
              <p className="mt-4 text-muted-foreground">
                With discretion and precision, we conduct thorough searches across our extensive network, 
                ensuring you meet candidates who can drive your organization's vision forward.
              </p>

              <div className="mt-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Approach</h3>
                <ul className="space-y-3">
                  {[
                    "Confidential and discreet search process",
                    "Comprehensive market mapping and analysis",
                    "In-depth leadership assessment",
                    "Board-level presentation of candidates",
                    "Negotiation and offer management",
                    "Executive onboarding support",
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
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Positions We Fill</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["CEO", "CFO", "CTO", "COO", "CHRO", "Board Members", "VPs", "Directors"].map((role) => (
                    <div key={role} className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      {role}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Why Partner With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Deep network of senior executives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Proprietary assessment methodology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Industry-specific expertise</span>
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
            searching for leadership talent?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's have a confidential discussion about your executive hiring needs.
          </p>
          <Button asChild size="lg" className="gradient-blue text-white">
            <Link to="/contact">schedule a call</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ExecutiveSearch;
