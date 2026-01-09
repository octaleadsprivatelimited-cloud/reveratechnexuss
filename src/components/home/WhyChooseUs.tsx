import { Shield, Clock, Users, Award, Target, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Ethical Hiring",
    description: "Transparent processes and fair practices that protect both employers and candidates.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick shortlisting and placement with our extensive talent database.",
  },
  {
    icon: Users,
    title: "Quality Candidates",
    description: "Pre-screened, verified professionals with proven track records.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Specialized recruiters with deep knowledge of IT, Healthcare, Hospitality & Corporate sectors.",
  },
  {
    icon: Target,
    title: "Custom Solutions",
    description: "Tailored recruitment strategies aligned with your business goals.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account managers providing guidance throughout the journey.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,11%,15%)] via-[hsl(210,11%,18%)] to-[hsl(210,11%,12%)]" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(174,100%,29%)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[hsl(174,100%,29%)]/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-[hsl(174,100%,29%)]/30 rotate-45" />
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-[hsl(174,100%,29%)]/20 rounded-full" />
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/10 rounded-full" />
      </div>

      <div className="relative container-custom">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 lowercase">
            why partner with us.
          </h2>
          <p className="text-lg text-gray-400">
            Experience the difference of working with a recruitment agency that truly understands your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 hover:border-[hsl(174,100%,29%)]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[hsl(174,100%,29%)]/20 flex items-center justify-center mb-4 group-hover:bg-[hsl(174,100%,29%)]/30 transition-colors">
                <feature.icon className="h-6 w-6 text-[hsl(174,100%,29%)]" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
