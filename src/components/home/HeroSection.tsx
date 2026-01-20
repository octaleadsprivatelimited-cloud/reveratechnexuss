import { Link } from "react-router-dom";
import { Users, Building2, Briefcase, UserCheck } from "lucide-react";
import heroConsulting from "@/assets/hero-consulting.jpg";

export function HeroSection() {

  const quickActions = [
    { label: "Employers", href: "/employers", color: "bg-amber-500 hover:bg-amber-600", icon: Building2 },
    { label: "Job Seekers", href: "/job-seekers", color: "bg-purple-600 hover:bg-purple-700", icon: UserCheck },
    { label: "Services", href: "/services", color: "bg-green-500 hover:bg-green-600", icon: Briefcase },
    { label: "Contact", href: "/contact", color: "bg-teal-500 hover:bg-teal-600", icon: Users },
  ];

  return (
    <section className="relative w-full py-8 lg:py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left - Image with accent bar */}
          <div className="relative">
            <div className="relative">
              <img
                src={heroConsulting}
                alt="Professional HR consultant"
                className="w-full h-[350px] lg:h-[450px] object-cover rounded-lg"
              />
              {/* Vertical accent bar */}
              <div className="absolute right-0 top-1/4 bottom-1/4 w-2 bg-primary rounded-full" />
            </div>
          </div>


          {/* Right - Quick actions */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                What can we do for
              </h2>
              <div className="flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded" />
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  you today?
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={index}
                    to={action.href}
                    className={`${action.color} text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors flex items-center justify-center gap-2`}
                  >
                    <Icon className="w-5 h-5" />
                    {action.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Users className="w-10 h-10 text-muted-foreground" />
              <div>
                <p className="font-medium text-foreground">Need guidance?</p>
                <Link to="/contact" className="text-primary hover:underline font-medium">
                  Get free Consultation
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
