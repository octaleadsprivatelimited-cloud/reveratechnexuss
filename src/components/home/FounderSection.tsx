import { CheckCircle, Award, TrendingDown, Clock, Cog } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function FounderSection() {
  const achievements = [
    { icon: TrendingDown, text: "Reduced attrition by 2%" },
    { icon: Clock, text: "Cut time-to-hire by 10%" },
    { icon: Cog, text: "Automated HR processes saving 40% effort" },
  ];

  return (
    <section className="relative section-padding bg-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[hsl(174,100%,29%)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[hsl(174,100%,29%)]/3 rounded-full blur-3xl" />
        
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(210 11% 15%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 11% 15%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-[hsl(174,100%,29%)]/20 rounded-2xl" />
              <div className="absolute -inset-8 border border-[hsl(174,100%,29%)]/10 rounded-3xl" />
              
              {/* Avatar placeholder with gradient */}
              <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-[hsl(174,100%,29%)]/20 via-[hsl(210,11%,15%)]/10 to-[hsl(174,100%,29%)]/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[hsl(210,11%,15%)]/5" />
                <div className="relative text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-[hsl(174,100%,29%)]/20 border-4 border-[hsl(174,100%,29%)]/30 flex items-center justify-center mb-6">
                    <span className="text-5xl font-bold text-[hsl(174,100%,29%)]">JM</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Jyothi M</h3>
                  <p className="text-[hsl(174,100%,29%)] font-medium mt-1">Co-Founder</p>
                  <p className="text-muted-foreground text-sm mt-1">Revera Tech Nexus</p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-[hsl(174,100%,29%)] text-white px-6 py-3 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-xs uppercase tracking-wide opacity-90">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block rounded-full bg-[hsl(174,100%,29%)]/10 border border-[hsl(174,100%,29%)]/20 px-4 py-1.5 text-sm font-medium text-[hsl(174,100%,29%)] mb-4">
              Meet Our Founder
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Practitioner, Not Just Consultant
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Former Head of HR with 20+ years' experience building and leading HR for large organizations 
              (970–3,000+ employees). Now co-founding Revera Tech Nexus to offer trusted, high-impact talent 
              solutions rooted in real-world leadership experience.
            </p>

            {/* Key differentiator */}
            <div className="bg-card rounded-xl p-6 border border-border mb-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[hsl(174,100%,29%)]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[hsl(174,100%,29%)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Peer-Level Evaluation</h4>
                  <p className="text-sm text-muted-foreground">
                    I assess candidates through the lens of a former Head of HR—ensuring cultural fit and operational readiness.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[hsl(174,100%,29%)]/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-[hsl(174,100%,29%)]" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-[hsl(174,100%,29%)] font-medium hover:underline group"
            >
              Learn more about our story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
