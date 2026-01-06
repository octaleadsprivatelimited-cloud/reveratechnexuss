import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const stats = [
  { label: "Placements", value: "5000+", icon: Users },
  { label: "Partner Companies", value: "200+", icon: Building2 },
  { label: "Years Experience", value: "10+", icon: Award },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="relative container-custom">
        <div className="grid min-h-[85vh] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
              </span>
              Bangalore&apos;s Trusted Recruitment Partner
            </div>
            
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find the Right{" "}
              <span className="bg-gradient-to-r from-secondary to-coral-400 bg-clip-text text-transparent">Talent</span>
              <br />
              Build Your Dream Team
            </h1>
            
            <p className="mt-6 max-w-xl text-lg text-white/80 lg:text-xl mx-auto lg:mx-0">
              Expert recruitment solutions for IT, Healthcare, Hospitality & Corporate sectors. 
              We connect exceptional professionals with industry-leading organizations.
            </p>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild variant="hero" size="xl">
                <Link to="/employers">
                  Hire Talent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/job-seekers">Apply for Jobs</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="font-heading text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Professional team meeting"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-semibold">A</div>
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">K</div>
                  <div className="h-10 w-10 rounded-full bg-coral-400 flex items-center justify-center text-white font-semibold">R</div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Join 500+ Companies</p>
                  <p className="text-sm text-muted-foreground">Hiring with us today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
