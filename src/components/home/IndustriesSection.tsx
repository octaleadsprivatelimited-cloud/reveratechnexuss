import { Link } from "react-router-dom";
import { ArrowRight, Monitor, HeartPulse, Briefcase } from "lucide-react";

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
    title: "Corporate",
    description: "Finance, HR, marketing, and management professionals.",
    icon: Briefcase,
    href: "/industries#corporate",
  },
];

export function IndustriesSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Hexagon pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 17.32v34.64L30 60 0 51.96V17.32L30 0z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Large gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[hsl(174,100%,29%)]/3 via-transparent to-[hsl(210,11%,15%)]/3 rounded-full blur-3xl" />
        
        {/* Accent lines */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-[hsl(174,100%,29%)]/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-[hsl(174,100%,29%)]/10 to-transparent" />
      </div>

      <div className="relative container-custom">
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
            className="inline-flex items-center text-[hsl(174,100%,29%)] font-medium mt-4 md:mt-0 hover:underline"
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
              className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-[hsl(174,100%,29%)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[hsl(174,100%,29%)]/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(174,100%,29%)] transition-colors">
                <industry.icon className="h-6 w-6 text-[hsl(174,100%,29%)] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-[hsl(174,100%,29%)] transition-colors">
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
