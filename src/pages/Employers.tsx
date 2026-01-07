import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, Shield, Users, Clock, CheckCircle, 
  ArrowRight, Building2, Handshake, FileCheck 
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Targeted Talent Search",
    description: "We use advanced sourcing strategies to find candidates who match your specific requirements.",
  },
  {
    icon: Shield,
    title: "Rigorous Screening",
    description: "Comprehensive background checks, skills assessments, and reference verification.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick shortlisting without compromising on quality. Average time-to-hire: 2 weeks.",
  },
  {
    icon: Users,
    title: "Cultural Fit",
    description: "We assess candidates for both skills and alignment with your company culture.",
  },
];

const models = [
  {
    title: "Permanent Staffing",
    description: "Full-time hires for building your core team with long-term commitment.",
    features: ["End-to-end recruitment", "Replacement guarantee", "Onboarding support"],
  },
  {
    title: "Contract Staffing",
    description: "Flexible workforce for project-based or seasonal requirements.",
    features: ["Payroll management", "Compliance handled", "Quick deployment"],
  },
  {
    title: "Executive Search",
    description: "Confidential search for C-suite and senior leadership positions.",
    features: ["Discreet approach", "Market mapping", "Assessment centers"],
  },
  {
    title: "RPO Solutions",
    description: "Recruitment Process Outsourcing for high-volume hiring needs.",
    features: ["Dedicated team", "Process optimization", "Cost efficiency"],
  },
];

const Employers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
              For Employers
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Build Your{" "}
              <span className="bg-gradient-to-r from-secondary to-coral-400 bg-clip-text text-transparent">
                Dream Team
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Partner with TalentSphere for efficient, quality-driven recruitment that 
              saves you time and connects you with exceptional talent.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href="tel:+919900949512">Call +91 99009 49512</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Why Partner With TalentSphere?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We go beyond traditional recruitment to deliver lasting value
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl bg-card p-6 shadow-soft card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <benefit.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Models */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Flexible Hiring Models
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the engagement model that fits your needs
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {models.map((model) => (
              <div key={model.title} className="rounded-2xl bg-card p-8 shadow-soft card-hover">
                <h3 className="font-heading text-xl font-bold text-foreground">{model.title}</h3>
                <p className="mt-2 text-muted-foreground">{model.description}</p>
                <ul className="mt-4 space-y-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="mr-2 h-4 w-4 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Our Hiring Process
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Handshake, title: "Consultation", desc: "Understanding your requirements" },
              { icon: FileCheck, title: "Sourcing", desc: "Finding the best candidates" },
              { icon: Users, title: "Screening", desc: "Rigorous assessment & checks" },
              { icon: Building2, title: "Placement", desc: "Seamless onboarding support" },
            ].map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary to-navy-700">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="mt-4">
                  <span className="text-sm font-medium text-secondary">Step {index + 1}</span>
                  <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-navy-700 py-16">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Ready to Start Hiring?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Get in touch with our team for a free consultation.
          </p>
          <Button asChild variant="hero" size="lg" className="mt-8">
            <Link to="/contact">Request a Call Back</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Employers;
