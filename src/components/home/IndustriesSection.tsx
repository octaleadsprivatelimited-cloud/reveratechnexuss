import { Link } from "react-router-dom";
import { ArrowRight, Monitor, HeartPulse, Hotel, Briefcase } from "lucide-react";
import industryIT from "@/assets/industry-it.jpg";
import industryHealthcare from "@/assets/industry-healthcare.jpg";
import industryHospitality from "@/assets/industry-hospitality.jpg";
import industryCorporate from "@/assets/industry-corporate.jpg";

const industries = [
  {
    title: "IT & Technology",
    description: "Software developers, data scientists, cloud architects, and tech leaders for the digital age.",
    image: industryIT,
    icon: Monitor,
    href: "/industries#it",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    title: "Healthcare",
    description: "Doctors, nurses, medical technicians, and healthcare administrators for hospitals and clinics.",
    image: industryHealthcare,
    icon: HeartPulse,
    href: "/industries#healthcare",
    color: "from-emerald-500/20 to-emerald-600/20",
  },
  {
    title: "Hospitality",
    description: "Hotel managers, chefs, front desk professionals, and service staff for luxury hospitality.",
    image: industryHospitality,
    icon: Hotel,
    href: "/industries#hospitality",
    color: "from-amber-500/20 to-amber-600/20",
  },
  {
    title: "Corporate",
    description: "Finance, HR, marketing, and management professionals for corporate enterprises.",
    image: industryCorporate,
    icon: Briefcase,
    href: "/industries#corporate",
    color: "from-slate-500/20 to-slate-600/20",
  },
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block rounded-full bg-coral-50 px-4 py-1.5 text-sm font-medium text-secondary mb-4">
            Industries We Serve
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Specialized Recruitment Across Key Sectors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Deep expertise in finding exceptional talent for diverse industry verticals
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Link
              key={industry.title}
              to={industry.href}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} to-transparent`} />
                <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-card/90 backdrop-blur-sm shadow-md">
                  <industry.icon className="h-6 w-6 text-secondary" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-secondary transition-colors">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {industry.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-secondary">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/industries"
            className="inline-flex items-center font-medium text-primary hover:text-secondary transition-colors"
          >
            View All Industries
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
