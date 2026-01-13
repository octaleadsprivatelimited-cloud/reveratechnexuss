import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export function ServicesSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Teal accent shapes */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-10 w-64 h-64 bg-[hsl(174,100%,29%)]/5 rounded-full blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-20 left-10 w-48 h-48 bg-[hsl(174,100%,29%)]/3 rounded-full blur-2xl" 
        />
        
        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            hsl(210 11% 15%) 20px,
            hsl(210 11% 15%) 21px
          )`
        }} />
        
        {/* Corner accents */}
        <svg className="absolute top-0 left-0 w-32 h-32 text-[hsl(174,100%,29%)]/10" viewBox="0 0 100 100">
          <path d="M0,0 L100,0 L0,100 Z" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-32 h-32 text-[hsl(210,11%,15%)]/5" viewBox="0 0 100 100">
          <path d="M100,100 L0,100 L100,0 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-light text-foreground mb-12 lowercase"
        >
          discover how we deliver tailored talent solutions.
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link
                to={service.href}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 block h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,11%,15%)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-foreground lowercase mb-3 group-hover:text-[hsl(174,100%,29%)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-[hsl(174,100%,29%)]">
                    learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
