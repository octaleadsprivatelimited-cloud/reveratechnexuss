import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden gradient-primary py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
            Ready to Build Your{" "}
            <span className="text-gradient">Dream Team?</span>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80">
            Whether you're looking to hire exceptional talent or find your next career opportunity, 
            we're here to help. Get in touch with our recruitment experts today.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/employers">
                Start Hiring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="tel:+919900949512">
                <Phone className="mr-2 h-5 w-5" />
                +91 99009 49512
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/60">
            Trusted by 200+ companies across Bangalore • Average placement time: 2 weeks
          </p>
        </div>
      </div>
    </section>
  );
}
