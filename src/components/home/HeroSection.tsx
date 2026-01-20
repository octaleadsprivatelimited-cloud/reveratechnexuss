import { Link } from "react-router-dom";
import { Users, Building2, Briefcase, UserCheck } from "lucide-react";
import heroConsulting from "@/assets/hero-consulting.jpg";

export function HeroSection() {
  const services = [
    "Permanent Staffing",
    "Contract Staffing", 
    "Executive Search",
    "Payroll Services",
  ];

  const quickActions = [
    { label: "Employers", href: "/employers", color: "bg-amber-500 hover:bg-amber-600", icon: Building2 },
    { label: "Job Seekers", href: "/job-seekers", color: "bg-purple-600 hover:bg-purple-700", icon: UserCheck },
    { label: "Services", href: "/services", color: "bg-green-500 hover:bg-green-600", icon: Briefcase },
    { label: "Contact", href: "/contact", color: "bg-teal-500 hover:bg-teal-600", icon: Users },
  ];

  return (
    <section className="relative w-full bg-background py-8 lg:py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left - Image with accent bar */}
          <div className="lg:col-span-4 relative">
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

          {/* Center - Main content */}
          <div className="lg:col-span-4">
            <p className="text-muted-foreground text-lg mb-2">Your Partner in</p>
            <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Talent Solutions
            </h1>
            
            <ul className="space-y-3 mb-8">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {service}
                </li>
              ))}
            </ul>

            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded transition-colors"
            >
              Read more
            </Link>
          </div>

          {/* Right - Quick actions */}
          <div className="lg:col-span-4">
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
