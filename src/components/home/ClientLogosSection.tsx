import kiaLogo from "@/assets/client-kia.jpg";
import mfarLogo from "@/assets/client-mfar.png";
import uknLogo from "@/assets/client-ukn.jpg";
import valmisLogo from "@/assets/client-valmis.jpeg";

export function ClientLogosSection() {
  const clients = [
    { name: "Kia", logo: kiaLogo },
    { name: "MFAR Constructions", logo: mfarLogo },
    { name: "UKN Properties", logo: uknLogo },
    { name: "Valmis Foods", logo: valmisLogo },
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border/50 overflow-hidden">
      <div className="container-custom">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by leading organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-28 h-16 md:w-36 md:h-20 bg-background border border-border/50 rounded-lg flex items-center justify-center p-3 hover:scale-105 hover:shadow-md transition-all duration-200"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="max-w-full max-h-full object-contain"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
