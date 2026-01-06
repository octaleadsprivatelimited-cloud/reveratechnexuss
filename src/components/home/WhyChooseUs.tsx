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
    description: "Quick shortlisting and placement with our extensive talent database and networks.",
  },
  {
    icon: Users,
    title: "Quality Candidates",
    description: "Pre-screened, verified professionals with proven track records in their fields.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Specialized recruiters with deep knowledge of IT, Healthcare, Hospitality & Corporate sectors.",
  },
  {
    icon: Target,
    title: "Custom Solutions",
    description: "Tailored recruitment strategies aligned with your business goals and culture.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account managers providing guidance throughout the hiring journey.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground mb-4">
            Why TalentSphere
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Your Trusted Recruitment Partner
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience the difference of working with a recruitment agency that truly understands your needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-card p-6 shadow-soft card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent group-hover:gradient-coral transition-all duration-300">
                <feature.icon className="h-7 w-7 text-accent-foreground group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
