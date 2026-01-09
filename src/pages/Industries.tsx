import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, HeartPulse, Hotel, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import industryIT from "@/assets/industry-it.jpg";
import industryHealthcare from "@/assets/industry-healthcare.jpg";
import industryHospitality from "@/assets/industry-hospitality.jpg";
import industryCorporate from "@/assets/industry-corporate.jpg";

const industries = [
  {
    id: "it",
    icon: Monitor,
    image: industryIT,
    title: "IT & Technology",
    subtitle: "Building tomorrow's digital workforce",
    description: "We understand the fast-paced tech industry and its evolving talent needs. Our IT recruitment specialists have deep knowledge of technical roles, from junior developers to CTOs.",
    roles: [
      "Software Engineers & Developers",
      "Data Scientists & ML Engineers",
      "Cloud & DevOps Specialists",
      "Product Managers",
      "UI/UX Designers",
      "Cybersecurity Experts",
    ],
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    image: industryHealthcare,
    title: "Healthcare & Medical",
    subtitle: "Caring for those who care",
    description: "Healthcare demands professionals with not just skills, but compassion. We connect hospitals and clinics with qualified medical professionals who make a difference.",
    roles: [
      "Physicians & Specialists",
      "Registered Nurses",
      "Lab Technicians",
      "Pharmacists",
      "Hospital Administrators",
      "Medical Coders",
    ],
  },
  {
    id: "hospitality",
    icon: Hotel,
    image: industryHospitality,
    title: "Hospitality & Tourism",
    subtitle: "Excellence in guest experience",
    description: "The hospitality industry thrives on service excellence. We recruit professionals who embody warmth, efficiency, and a passion for creating memorable experiences.",
    roles: [
      "Hotel General Managers",
      "F&B Managers & Chefs",
      "Front Office Staff",
      "Housekeeping Supervisors",
      "Event Coordinators",
      "Resort Operations",
    ],
  },
  {
    id: "corporate",
    icon: Briefcase,
    image: industryCorporate,
    title: "Corporate & Manufacturing",
    subtitle: "Powering business excellence",
    description: "From startups to enterprises, we help organizations build high-performing teams across finance, marketing, HR, operations, and manufacturing.",
    roles: [
      "Finance & Accounting",
      "Marketing & Sales",
      "Human Resources",
      "Operations Management",
      "Supply Chain & Logistics",
      "Manufacturing Supervisors",
    ],
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[hsl(210,11%,15%)] py-20 md:py-28 overflow-hidden">
        <HeroBackground />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-[hsl(174,100%,29%)]/20 border border-[hsl(174,100%,29%)]/30 px-4 py-1.5 text-sm font-medium text-[hsl(174,100%,45%)] mb-6">
              Industries We Serve
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Specialized Expertise Across{" "}
              <span className="text-[hsl(174,100%,45%)]">
                Key Sectors
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Deep industry knowledge allows us to understand your unique challenges and 
              find candidates who truly fit your organizational culture and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                id={industry.id}
                className={`grid gap-12 items-center lg:grid-cols-2 scroll-mt-24 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="h-80 w-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm shadow-md">
                      <industry.icon className="h-7 w-7 text-[hsl(174,100%,29%)]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="text-sm font-medium text-[hsl(174,100%,29%)]">{industry.subtitle}</span>
                  <h2 className="mt-2 font-heading text-3xl font-bold text-foreground">
                    {industry.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">{industry.description}</p>
                  
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {industry.roles.map((role) => (
                      <div key={role} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="mr-2 h-4 w-4 text-[hsl(174,100%,29%)] flex-shrink-0" />
                        {role}
                      </div>
                    ))}
                  </div>

                  <Button asChild className="mt-8 bg-[hsl(174,100%,29%)] hover:bg-[hsl(174,100%,24%)]">
                    <Link to="/contact">
                      Discuss Your Hiring Needs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[hsl(174,100%,29%)] py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Don&apos;t See Your Industry?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            We serve many more sectors. Let&apos;s discuss your specific requirements.
          </p>
          <Button asChild size="lg" className="mt-8 bg-white text-[hsl(174,100%,29%)] hover:bg-gray-100">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
