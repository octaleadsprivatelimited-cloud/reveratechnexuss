import { Link } from "react-router-dom";
import { Users, Building2, Briefcase, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import heroConsulting from "@/assets/hero-consulting.jpg";

export function HeroSection() {

  const quickActions = [
    { label: "Employers", href: "/employers", color: "bg-amber-500 hover:bg-amber-600", icon: Building2 },
    { label: "Job Seekers", href: "/job-seekers", color: "bg-purple-600 hover:bg-purple-700", icon: UserCheck },
    { label: "Services", href: "/services", color: "bg-green-500 hover:bg-green-600", icon: Briefcase },
    { label: "Contact", href: "/contact", color: "bg-teal-500 hover:bg-teal-600", icon: Users },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="relative w-full py-8 lg:py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Decorative circles */}
      <motion.div 
        className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left - Image with accent bar */}
          <motion.div 
            className="relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative">
              <img
                src={heroConsulting}
                alt="Professional HR consultant"
                className="w-full h-[350px] lg:h-[450px] object-cover rounded-lg"
              />
              {/* Vertical accent bar */}
              <motion.div 
                className="absolute right-0 top-1/4 bottom-1/4 w-2 bg-primary rounded-full"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>


          {/* Right - Quick actions */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="mb-6" variants={itemVariants}>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                {"What can we do for".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.03,
                      delay: 0.3 + index * 0.03,
                      ease: "easeOut"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h2>
              <div className="flex items-center gap-2">
                <motion.span 
                  className="w-8 h-1 bg-primary rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                />
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {"you today?".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.03,
                        delay: 0.9 + index * 0.03,
                        ease: "easeOut"
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={index}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Link
                      to={action.href}
                      className={`${action.color} text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors flex items-center justify-center gap-2 w-full h-full`}
                    >
                      <Icon className="w-5 h-5" />
                      {action.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg"
              variants={itemVariants}
            >
              <Users className="w-10 h-10 text-muted-foreground" />
              <div>
                <p className="font-medium text-foreground">Need guidance?</p>
                <Link to="/contact" className="text-primary hover:underline font-medium">
                  Get free Consultation
                </Link>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
