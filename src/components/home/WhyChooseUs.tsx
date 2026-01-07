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
    <section className="section-padding bg-beige">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 lowercase">
            why partner with us.
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the difference of working with a recruitment agency that truly understands your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background p-6 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
