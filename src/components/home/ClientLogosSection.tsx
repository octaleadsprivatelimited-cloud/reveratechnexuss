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
    <section className="py-12 bg-muted/30 border-y border-border/50">
      <div className="container-custom">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by leading organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-24 h-12 md:w-32 md:h-14 bg-background border border-border/50 rounded-md flex items-center justify-center text-muted-foreground/50 text-xs font-medium"
            >
              Logo {index + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
