import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryCta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  image?: string;
  imageAlt?: string;
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "Hero image",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[hsl(174,100%,29%)]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-10 md:-left-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 md:-bottom-20 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px md:80px md:80px'
        }} />
      </div>
      
      <div className="container-custom relative z-10 py-12 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="inline-block rounded-full bg-[hsl(174,100%,29%)]/10 border border-[hsl(174,100%,29%)]/20 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium text-[hsl(174,100%,29%)] mb-4 md:mb-6">
              {badge}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {title}
              {titleHighlight && (
                <>
                  {" "}
                  <span className="text-[hsl(174,100%,29%)]">{titleHighlight}</span>
                </>
              )}
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
              {description}
            </p>
            
            {(primaryCta || secondaryCta) && (
              <div className="mt-6 md:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                {primaryCta && (
                  primaryCta.external ? (
                    <Button asChild size="lg" className="bg-[hsl(174,100%,29%)] hover:bg-[hsl(174,100%,24%)] text-white rounded-full px-6 md:px-8 w-full sm:w-auto">
                      <a href={primaryCta.href} target="_blank" rel="noopener noreferrer">
                        {primaryCta.text}
                        <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </a>
                    </Button>
                  ) : (
                    <Button asChild size="lg" className="bg-[hsl(174,100%,29%)] hover:bg-[hsl(174,100%,24%)] text-white rounded-full px-6 md:px-8 w-full sm:w-auto">
                      <Link to={primaryCta.href}>
                        {primaryCta.text}
                        <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </Link>
                    </Button>
                  )
                )}
                {secondaryCta && (
                  secondaryCta.external ? (
                    <Button asChild size="lg" variant="outline" className="rounded-full px-6 md:px-8 border-border hover:bg-muted w-full sm:w-auto">
                      <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">
                        {secondaryCta.text}
                      </a>
                    </Button>
                  ) : (
                    <Button asChild size="lg" variant="outline" className="rounded-full px-6 md:px-8 border-border hover:bg-muted w-full sm:w-auto">
                      <Link to={secondaryCta.href}>
                        {secondaryCta.text}
                      </Link>
                    </Button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Image Side - visible on tablet and up */}
          {image && (
            <div className="relative hidden md:block">
              <div className="relative">
                {/* Decorative elements behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(174,100%,29%)]/10 to-purple-500/10 rounded-3xl blur-2xl" />
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 md:w-32 h-20 md:h-32 bg-[hsl(174,100%,29%)]/20 rounded-full blur-xl" />
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 md:w-24 h-16 md:h-24 bg-blue-500/20 rounded-full blur-xl" />
                
                {/* Main image */}
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-auto object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}