import { Award, TrendingDown, Clock, Cog, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import founderImage from "@/assets/founder1.jpeg";

export function FounderSection() {
  const achievements = [
    { icon: TrendingDown, text: "Reduced attrition by 2%", color: "bg-green-50", iconColor: "text-green-600" },
    { icon: Clock, text: "Cut time-to-hire by 10%", color: "bg-blue-50", iconColor: "text-blue-600" },
    { icon: Cog, text: "Automated HR processes saving 40% effort", color: "bg-amber-50", iconColor: "text-amber-600" },
  ];

  return (
    <section className="py-8 md:py-12">
      <div className="container-custom">
        {/* Rounded container card like Microsoft/Google style */}
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50 rounded-3xl overflow-hidden border border-border/30">
          {/* Subtle colorful background accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-teal-500/5 to-transparent" />
            <div className="absolute top-0 right-0 w-1/4 h-1/3 bg-gradient-to-bl from-green-500/5 to-transparent" />
            <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-gradient-to-tr from-blue-500/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tl from-amber-500/5 to-transparent" />
          </div>

          <div className="relative px-8 md:px-12 lg:px-16 py-12 md:py-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Image Side */}
              <div className="relative">
                <div className="relative max-w-sm mx-auto lg:mx-0">
                  {/* Founder Photo Card */}
                  <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={founderImage} 
                        alt="Jyothi M - Founder of Revera Tech Nexus" 
                        className="h-full w-full object-cover object-top"
                        loading="eager"
                      />
                    </div>
                    <div className="p-5 border-t border-border/50">
                      <h3 className="text-xl font-bold text-foreground">Jyothi M</h3>
                      <p className="text-primary font-medium">Founder</p>
                      <p className="text-muted-foreground text-sm">Revera Tech Nexus</p>
                    </div>
                  </div>

                  {/* Experience badge */}
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-teal-500 to-cyan-500 text-white px-5 py-3 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-xs uppercase tracking-wide opacity-90">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div>
                <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                  Meet Our Founder
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                  Practitioner, Not Just Consultant
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
                  Former Head of HR with 20+ years' experience building and leading HR for large organizations 
                  (970–3,000+ employees). Now founder of Revera Tech Nexus to offer trusted, high-impact talent 
                  solutions rooted in real-world leadership experience.
                </p>

                {/* Key differentiator */}
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-5 border border-purple-200 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-purple-50">
                      <Award className="w-5 h-5 text-purple-600" />
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
                <div className="space-y-3 mb-6">
                  {achievements.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 p-2 rounded-lg ${item.color}`}>
                        <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 group"
                >
                  Learn more about our story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
