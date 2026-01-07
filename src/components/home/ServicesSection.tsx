import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import industryIT from "@/assets/industry-it.jpg";
import industryHealthcare from "@/assets/industry-healthcare.jpg";
import industryHospitality from "@/assets/industry-hospitality.jpg";
import industryCorporate from "@/assets/industry-corporate.jpg";

const services = [
  {
    title: "staffing",
    description: "Find the right contingent talent quickly with our expertise in temporary and contract staffing solutions.",
    image: industryIT,
    href: "/services#contract",
  },
  {
    title: "permanent recruitment",
    description: "Build your team with top permanent talent. We help you find professionals who align with your culture.",
    image: industryHealthcare,
    href: "/services#corporate",
  },
  {
    title: "executive search",
    description: "Confidential search for C-suite and senior leadership positions that drive your organization forward.",
    image: industryHospitality,
    href: "/services#executive",
  },
  {
    title: "outsourcing",
    description: "Comprehensive HR and recruitment process outsourcing to optimize your talent acquisition strategy.",
    image: industryCorporate,
    href: "/services",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 lowercase">
          discover how we deliver tailored talent solutions.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-foreground lowercase mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-secondary">
                  learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
