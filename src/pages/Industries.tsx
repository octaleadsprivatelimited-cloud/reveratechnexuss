import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, HeartPulse, Briefcase, Building2, ArrowRight, CheckCircle } from "lucide-react";
import industryIT from "@/assets/industry-it.webp";
import industryHealthcare from "@/assets/industry-healthcare.webp";
import industryCorporate from "@/assets/industry-corporate.webp";
import industryRealEstate from "@/assets/industry-realestate.webp";
import heroIndustries from "@/assets/hero-industries.webp";
import { PageHero } from "@/components/PageHero";

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
    id: "realestate",
    icon: Building2,
    image: industryRealEstate,
    title: "Real Estate & Property",
    subtitle: "Building property success stories",
    description: "The real estate industry demands professionals who combine market expertise with exceptional client relationship skills. We specialize in recruiting talent across all segments of the property sector.",
    roles: [
      "Real Estate Agents",
      "Property Managers",
      "Commercial Brokers",
      "Leasing Consultants",
      "Development Managers",
      "Valuers & Appraisers",
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
      <PageHero
        badge="Industries We Serve"
        title="Specialized Expertise Across"
        titleHighlight="Key Sectors"
        description="Deep industry knowledge allows us to understand your unique challenges and find candidates who truly fit your organizational culture and requirements."
        primaryCta={{ text: "Get Started", href: "/contact" }}
        secondaryCta={{ text: "Our Services", href: "/services" }}
        image={heroIndustries}
        imageAlt="Industries We Serve"
      />

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