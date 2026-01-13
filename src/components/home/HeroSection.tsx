import { motion } from "framer-motion";
import heroConsulting from "@/assets/hero-consulting.jpg";

export function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroConsulting}
          alt="Professional consulting team collaborating in modern office"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-0 bg-navy/30" 
      />
    </section>
  );
}
