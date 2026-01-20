import { Link } from "react-router-dom";
import { ArrowRight, Users, UserCheck, Search, Building2 } from "lucide-react";
import serviceStaffing from "@/assets/service-staffing.jpg";
import servicePermanent from "@/assets/service-permanent.jpg";
import serviceExecutive from "@/assets/service-executive.jpg";
import serviceOutsourcing from "@/assets/service-outsourcing.jpg";

const services = [
  {
    title: "staffing",
    description: "Find the right contingent talent quickly with our expertise in temporary and contract staffing solutions.",
    image: serviceStaffing,
    href: "/services#contract",
    icon: Users,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    accentColor: "border-blue-200",
  },
  {
    title: "permanent recruitment",
    description: "Build your team with top permanent talent. We help you find professionals who align with your culture.",
    image: servicePermanent,
    href: "/services#corporate",
    icon: UserCheck,
    color: "bg-green-50",
    iconColor: "text-green-600",
    accentColor: "border-green-200",
  },
  {
    title: "executive search",
    description: "Confidential search for C-suite and senior leadership positions that drive your organization forward.",
    image: serviceExecutive,
    href: "/services#executive",
    icon: Search,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    accentColor: "border-amber-200",
  },
  {
    title: "outsourcing",
    description: "Comprehensive HR and recruitment process outsourcing to optimize your talent acquisition strategy.",
    image: serviceOutsourcing,
    href: "/services",
    icon: Building2,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    accentColor: "border-purple-200",
  },
];

export function ServicesSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container-custom">
        {/* Rounded container card like Microsoft/Google style */}
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50 rounded-3xl overflow-hidden border border-border/30">
          {/* Subtle colorful background accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/4 h-1/3 bg-gradient-to-br from-blue-500/5 to-transparent" />
            <div className="absolute top-0 right-1/4 w-1/4 h-1/4 bg-gradient-to-bl from-green-500/5 to-transparent" />
            <div className="absolute bottom-0 left-1/3 w-1/4 h-1/3 bg-gradient-to-tr from-amber-500/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-gradient-to-tl from-purple-500/5 to-transparent" />
          </div>

          <div className="relative px-8 md:px-12 lg:px-16 py-12 md:py-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
                  Our Services
                  <span className="text-muted-foreground"> – tailored solutions</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg">
                  Discover how we deliver tailored talent solutions for your business needs.
                </p>
              </div>
              <Link 
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
              >
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Service cards with colorful accents */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.title}
                    to={service.href}
                    className={`group bg-background/80 backdrop-blur-sm border ${service.accentColor} rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300`}
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {/* Icon badge */}
                      <div className={`absolute top-3 left-3 p-2.5 rounded-xl ${service.color} shadow-sm`}>
                        <Icon className={`h-4 w-4 ${service.iconColor}`} />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-foreground lowercase mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-primary">
                        learn more
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
