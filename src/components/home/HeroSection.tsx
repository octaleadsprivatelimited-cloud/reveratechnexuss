import heroConsulting from "@/assets/hero-consulting.jpg";

export function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <img
        src={heroConsulting}
        alt="Professional consulting team collaborating in modern office"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/30" />
    </section>
  );
}
