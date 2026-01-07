import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="gradient-navy py-16 md:py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 lowercase">
              ready to find your next opportunity?
            </h2>
            <p className="text-lg text-white/70">
              Whether you're looking to hire top talent or find your dream job, we're here to help.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gradient-blue hover:opacity-90 text-white">
              <Link to="/employers">
                for employers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <a href="tel:+919900949512">
                <Phone className="mr-2 h-4 w-4" />
                +91 99009 49512
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
