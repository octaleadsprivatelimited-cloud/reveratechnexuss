import { Link } from "react-router-dom";
import { ArrowRight, Monitor, HeartPulse, Building2, Briefcase } from "lucide-react";
import industryIT from "@/assets/industry-it-new.webp";
import industryHealthcare from "@/assets/industry-healthcare-new.webp";
import industryRealEstate from "@/assets/industry-realestate-new.webp";
import industryCorporate from "@/assets/industry-corporate-new.webp";

const industries = [
  {
    title: "IT & Technology",
    description: "Software developers, data scientists, cloud architects, and tech leaders.",
    icon: Monitor,
    image: industryIT,
    href: "/industries#it",
  },
  {
    title: "Healthcare",
    description: "Doctors, nurses, medical technicians, and healthcare administrators.",
    icon: HeartPulse,
    image: industryHealthcare,
    href: "/industries#healthcare",
  },
  {
    title: "Real Estate",
    description: "Property managers, real estate agents, brokers, and development managers.",
    icon: Building2,
    image: industryRealEstate,
    href: "/industries#realestate",
  },
  {
    title: "Corporate",
    description: "Finance, HR, marketing, and management professionals.",
    icon: Briefcase,
    image: industryCorporate,
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
          <div>
            <Link
              to="/industries"
              className="inline-flex items-center text-[hsl(174,100%,29%)] font-medium mt-4 md:mt-0 hover:underline"
            >
              view all industries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div key={industry.title}>
              <Link
                to={industry.href}
                className="group bg-white border border-gray-200 rounded-lg hover:border-[hsl(174,100%,29%)] hover:shadow-lg transition-all duration-300 block h-full overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,11%,15%)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 left-3">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <industry.icon className="h-5 w-5 text-[hsl(174,100%,29%)]" />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-[hsl(174,100%,29%)] transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}