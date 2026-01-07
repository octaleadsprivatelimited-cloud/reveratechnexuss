import { Link } from "react-router-dom";
import { ArrowRight, Monitor, HeartPulse, Hotel, Briefcase } from "lucide-react";

const industries = [
  {
    title: "IT & Technology",
    description: "Software developers, data scientists, cloud architects, and tech leaders.",
    icon: Monitor,
    href: "/industries#it",
  },
  {
    title: "Healthcare",
    description: "Doctors, nurses, medical technicians, and healthcare administrators.",
    icon: HeartPulse,
    href: "/industries#healthcare",
  },
  {
    title: "Hospitality",
    description: "Hotel managers, chefs, front desk professionals, and service staff.",
    icon: Hotel,
    href: "/industries#hospitality",
  },
  {
    title: "Corporate",
    description: "Finance, HR, marketing, and management professionals.",
    icon: Briefcase,
    href: "/industries#corporate",
  },
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 lowercase">
              industries we serve.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Deep expertise in finding exceptional talent across diverse industry verticals.
            </p>
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center text-secondary font-medium mt-4 md:mt-0 hover:underline"
          >
            view all industries
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              to={industry.href}
              className="group p-6 border border-border rounded-lg hover:border-secondary hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                <industry.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-secondary transition-colors">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
