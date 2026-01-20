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
        {/* Rounded container card like Microsoft/Google style */}
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50 rounded-3xl overflow-hidden border border-border/30">
          {/* Subtle background accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-blue-500/5 to-transparent" />
            <div className="absolute top-0 right-0 w-1/4 h-1/3 bg-gradient-to-bl from-red-500/5 to-transparent" />
            <div className="absolute bottom-0 left-1/4 w-1/3 h-1/2 bg-gradient-to-tr from-green-500/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-gradient-to-tl from-yellow-500/5 to-transparent" />
          </div>

          <div className="relative px-8 md:px-12 lg:px-16 py-12 md:py-16">
            {/* Header */}
            <div className="max-w-2xl mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
                Why partner with us
                <span className="text-muted-foreground"> – the difference</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                Experience the difference of working with a recruitment agency that truly understands your needs.
              </p>
            </div>

            {/* Feature cards with Google-style colors */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-background/80 backdrop-blur-sm border border-border/50 p-5 rounded-2xl hover:shadow-lg hover:border-border transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${feature.lightBg} flex-shrink-0`}>
                      <feature.icon className={`h-5 w-5 ${feature.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
