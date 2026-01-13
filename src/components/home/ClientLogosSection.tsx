import { motion } from "framer-motion";

export function ClientLogosSection() {
  // Placeholder logos - replace with actual client logos
  const clients = [
    { name: "Client 1", placeholder: true },
    { name: "Client 2", placeholder: true },
    { name: "Client 3", placeholder: true },
    { name: "Client 4", placeholder: true },
    { name: "Client 5", placeholder: true },
    { name: "Client 6", placeholder: true },
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border/50 overflow-hidden">
      <div className="container-custom">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8"
        >
          Trusted by leading organizations
        </motion.p>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 }
              }}
              className="w-24 h-12 md:w-32 md:h-14 bg-background border border-border/50 rounded-md flex items-center justify-center text-muted-foreground/50 text-xs font-medium cursor-pointer"
            >
              Logo {index + 1}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
