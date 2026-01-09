import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(174,100%,29%)] via-[hsl(174,100%,25%)] to-[hsl(174,100%,22%)]" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Wave pattern */}
        <svg className="absolute bottom-0 left-0 w-full h-24 text-white/5" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z" fill="currentColor" />
        </svg>
        
        {/* Floating circles */}
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute top-1/2 right-20 w-48 h-48 border border-white/5 rounded-full" />
        <div className="absolute bottom-10 left-1/3 w-24 h-24 border border-white/10 rounded-full" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        
        {/* Dots pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 lowercase">
              ready to find your next opportunity?
            </h2>
            <p className="text-lg text-white/80">
              Whether you're looking to hire top talent or find your dream job, we're here to help.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-[hsl(174,100%,29%)] hover:bg-gray-100 font-medium">
              <Link to="/employers">
                for employers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
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
