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
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[hsl(174,100%,29%)]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-[hsl(174,100%,29%)]/10 border border-[hsl(174,100%,29%)]/20 px-4 py-1.5 text-sm font-medium text-[hsl(174,100%,29%)] mb-6">
              {badge}
            </span>
            <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl leading-tight">
              {title}
              {titleHighlight && (
                <>
                  {" "}
                  <span className="text-[hsl(174,100%,29%)]">{titleHighlight}</span>
                </>
              )}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              {description}
            </p>
            
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {primaryCta && (
                  primaryCta.external ? (
                    <Button asChild size="lg" className="bg-[hsl(174,100%,29%)] hover:bg-[hsl(174,100%,24%)] text-white rounded-full px-8">
                      <a href={primaryCta.href} target="_blank" rel="noopener noreferrer">
                        {primaryCta.text}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  ) : (
                    <Button asChild size="lg" className="bg-[hsl(174,100%,29%)] hover:bg-[hsl(174,100%,24%)] text-white rounded-full px-8">
                      <Link to={primaryCta.href}>
                        {primaryCta.text}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  )
                )}
                {secondaryCta && (
                  secondaryCta.external ? (
                    <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-border hover:bg-muted">
                      <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">
                        {secondaryCta.text}
                      </a>
                    </Button>
                  ) : (
                    <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-border hover:bg-muted">
                      <Link to={secondaryCta.href}>
                        {secondaryCta.text}
                      </Link>
                    </Button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Image Side */}
          {image && (
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Decorative elements behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(174,100%,29%)]/10 to-purple-500/10 rounded-3xl blur-2xl" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[hsl(174,100%,29%)]/20 rounded-full blur-xl" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
                
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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