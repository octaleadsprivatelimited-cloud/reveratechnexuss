import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, HeartPulse, Hotel, Briefcase, FileSearch, Users, ArrowRight } from "lucide-react";

const services = [
  {
    id: "it",
    icon: Monitor,
    title: "IT Recruitment",
    description: "Specialized technology talent acquisition for software development, data science, cloud computing, cybersecurity, and emerging technologies.",
    features: [
      "Full-stack developers & engineers",
      "Data scientists & AI specialists",
      "Cloud architects & DevOps",
      "IT managers & CTOs",
    ],
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare Staffing",
    description: "Dedicated healthcare recruitment for hospitals, clinics, diagnostic centers, and pharmaceutical companies.",
    features: [
      "Doctors & specialists",
      "Nursing professionals",
      "Medical technicians",
      "Healthcare administrators",
    ],
  },
  {
    id: "hospitality",
    icon: Hotel,
    title: "Hospitality Hiring",
    description: "Premium staffing solutions for hotels, restaurants, resorts, and the broader hospitality industry.",
    features: [
      "Hotel managers & directors",
      "Executive chefs & kitchen staff",
      "Front desk & concierge",
      "Event management professionals",
    ],
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate Recruitment",
    description: "White-collar professional recruitment for finance, marketing, HR, operations, and general management roles.",
    features: [
      "Finance & accounting",
      "Marketing & sales",
      "Human resources",
      "Operations & supply chain",
    ],
  },
  {
    id: "contract",
    icon: FileSearch,
    title: "Contract Staffing",
    description: "Flexible workforce solutions for project-based needs, seasonal demands, and temporary requirements.",
    features: [
      "Project-based hiring",
      "Seasonal staffing",
      "Temporary-to-permanent",
      "Payroll management",
    ],
  },
  {
    id: "executive",
    icon: Users,
    title: "Executive Search",
    description: "Confidential search for C-suite executives, board members, and senior leadership positions.",
    features: [
      "CEO & C-suite search",
      "Board advisory",
      "Leadership assessment",
      "Succession planning",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-primary py-20 md:py-28">
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
              Our Services
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-secondary to-coral-400 bg-clip-text text-transparent">
                Recruitment Solutions
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/80">
              From contract staffing to executive search, we offer end-to-end recruitment services 
              tailored to your specific industry and organizational needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group rounded-2xl bg-card p-8 shadow-soft card-hover scroll-mt-24"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent group-hover:bg-secondary transition-colors">
                  <service.icon className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="mr-2 h-4 w-4 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-6 w-full">
                  <Link to="/contact">Enquire Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-navy-700 py-16">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Need a Custom Solution?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            We tailor our services to match your unique recruitment requirements.
          </p>
          <Button asChild variant="hero" size="lg" className="mt-8">
            <Link to="/contact">Talk to Our Experts</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
