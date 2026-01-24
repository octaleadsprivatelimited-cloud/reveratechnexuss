import { Shield, Clock, Users, Award, Target, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Ethical Hiring",
    description: "Transparent processes and fair practices that protect both employers and candidates.",
    color: "bg-blue-500",
    lightBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick shortlisting and placement with our extensive talent database.",
    color: "bg-red-500",
    lightBg: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: Users,
    title: "Quality Candidates",
    description: "Pre-screened, verified professionals with proven track records.",
    color: "bg-yellow-500",
    lightBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Specialized recruiters with deep knowledge across multiple sectors.",
    color: "bg-green-500",
    lightBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Target,
    title: "Custom Solutions",
    description: "Tailored recruitment strategies aligned with your business goals.",
    color: "bg-purple-500",
    lightBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account managers providing guidance throughout the journey.",
    color: "bg-teal-500",
    lightBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-8 md:py-12">
      <div className="container-custom">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-10 md:px-10 md:py-14">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Why partner with us
              <span className="text-muted-foreground"> – the difference</span>
            </h2>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="h-1 w-6 rounded-full bg-[#18a999]" />
              <span className="h-1 w-4 rounded-full bg-[#1f9bcf]" />
              <span className="h-1 w-3 rounded-full bg-[#3d7dd8]" />
              <span className="h-1 w-2.5 rounded-full bg-[#6a5acd]" />
            </div>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Experience the difference of working with a recruitment agency that truly understands your needs.
            </p>
          </div>

          {/* Feature cards - illustration-style */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="relative pt-6">
                <div className="absolute left-0 top-0 h-14 w-14 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center">
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <div className="ml-6 rounded-xl border border-dashed border-slate-300 bg-white px-5 pb-5 pt-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
