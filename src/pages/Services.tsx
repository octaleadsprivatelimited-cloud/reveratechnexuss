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
      <section className="gradient-navy py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 lowercase">
              our services.
            </h1>
            <p className="text-lg text-white/70">
              From contract staffing to executive search, we offer end-to-end recruitment services 
              tailored to your specific industry and organizational needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group p-6 border border-border rounded-lg hover:border-secondary hover:shadow-md transition-all scroll-mt-24"
              >
                <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="mr-2 h-4 w-4 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/contact">enquire now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-beige py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-light text-foreground mb-4 lowercase">
            need a custom solution?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We tailor our services to match your unique recruitment requirements.
          </p>
          <Button asChild size="lg" className="gradient-blue text-white">
            <Link to="/contact">talk to our experts</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
