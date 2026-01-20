import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, HeartPulse, Hotel, Briefcase, FileSearch, Users, ArrowRight } from "lucide-react";
import heroServices from "@/assets/hero-services.webp";
import { PageHero } from "@/components/PageHero";

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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Recruitment and Staffing Services",
    "provider": {
      "@type": "Organization",
      "name": "Revera Tech Nexus",
      "url": "https://reveratechnexus.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Recruitment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Contract Staffing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Permanent Staffing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Executive Search"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Payroll Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HR Consulting"
          }
        }
      ]
    }
  };

  return (
    <Layout>
      <SEO
        title="Recruitment Services - Contract, Permanent & Executive Staffing | Revera Tech Nexus"
        description="Comprehensive recruitment services including contract staffing, permanent hiring, executive search, payroll services, and HR consulting. Trusted by leading companies in Bangalore."
        keywords="recruitment services, contract staffing, permanent staffing, executive search, payroll services, HR consulting, staffing solutions Bangalore, talent acquisition services, recruitment agency services"
        ogImage="/hero-services.webp"
        structuredData={structuredData}
      />
      <PageHero
        badge="Our Services"
        title="Comprehensive"
        titleHighlight="Recruitment Solutions"
        description="From contract staffing to executive search, we offer end-to-end recruitment services tailored to your specific industry and organizational needs."
        primaryCta={{ text: "Contact Us", href: "/contact" }}
        secondaryCta={{ text: "View Industries", href: "/industries" }}
        image={heroServices}
        imageAlt="Our Services"
      />

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group p-6 border border-border rounded-lg hover:border-[hsl(174,100%,29%)] hover:shadow-md transition-all scroll-mt-24"
              >
                <div className="w-12 h-12 rounded-full bg-[hsl(174,100%,29%)]/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(174,100%,29%)] transition-colors">
                  <service.icon className="h-6 w-6 text-[hsl(174,100%,29%)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="mr-2 h-4 w-4 text-[hsl(174,100%,29%)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full hover:bg-[hsl(174,100%,29%)] hover:text-white hover:border-[hsl(174,100%,29%)]">
                  <Link to="/contact">enquire now</Link>
                </Button>
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
          <h2 className="text-3xl font-light text-white mb-4 lowercase">
            need a custom solution?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            We tailor our services to match your unique recruitment requirements.
          </p>
          <Button asChild size="lg" className="bg-white text-[hsl(174,100%,29%)] hover:bg-gray-100">
            <Link to="/contact">talk to our experts</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;