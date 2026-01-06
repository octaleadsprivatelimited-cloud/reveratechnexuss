import { FileSearch, Users, CheckCircle, Handshake } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: FileSearch,
    title: "Requirement Analysis",
    description: "We understand your hiring needs, company culture, and ideal candidate profile.",
  },
  {
    step: "02",
    icon: Users,
    title: "Talent Sourcing",
    description: "Our experts source candidates from our database, networks, and targeted outreach.",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Screening & Shortlisting",
    description: "Rigorous screening including skills assessment, background checks, and interviews.",
  },
  {
    step: "04",
    icon: Handshake,
    title: "Placement & Onboarding",
    description: "We facilitate seamless onboarding and provide post-placement support.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block rounded-full bg-coral-50 px-4 py-1.5 text-sm font-medium text-secondary mb-4">
            Our Process
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            How We Find Your Perfect Match
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A streamlined hiring process designed for efficiency and quality
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-primary lg:block" />
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"
                  }`}
                >
                  <div
                    className={`rounded-2xl bg-card p-6 shadow-soft card-hover ${
                      index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    } max-w-md`}
                  >
                    <span className="text-4xl font-heading font-bold text-muted-foreground/30">
                      {step.step}
                    </span>
                    <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full gradient-primary shadow-lg">
                  <step.icon className="h-7 w-7 text-primary-foreground" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
