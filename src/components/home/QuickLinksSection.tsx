import { Link } from "react-router-dom";
import { ArrowRight, FileText, Users, Briefcase, MessageCircle } from "lucide-react";

const quickLinks = [
  { 
    title: "submit your resume", 
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdKWVKmgUUzr2T7qtdA1kx9cRvczavZ1DDAu4CNquTwHooq7A/viewform?usp=publish-editor", 
    external: true,
    icon: FileText,
    color: "from-teal-500 to-cyan-400",
    bgColor: "bg-gradient-to-r from-teal-500/20 to-cyan-500/10",
    borderColor: "border-teal-400/40",
  },
  { 
    title: "refer a friend", 
    href: "/job-seekers#refer", 
    external: false,
    icon: Users,
    color: "from-violet-500 to-purple-400",
    bgColor: "bg-gradient-to-r from-violet-500/20 to-purple-500/10",
    borderColor: "border-violet-400/40",
  },
  { 
    title: "explore our services", 
    href: "/services", 
    external: false,
    icon: Briefcase,
    color: "from-orange-500 to-amber-400",
    bgColor: "bg-gradient-to-r from-orange-500/20 to-amber-500/10",
    borderColor: "border-orange-400/40",
  },
  { 
    title: "contact us today", 
    href: "/contact", 
    external: false,
    icon: MessageCircle,
    color: "from-rose-500 to-pink-400",
    bgColor: "bg-gradient-to-r from-rose-500/20 to-pink-500/10",
    borderColor: "border-rose-400/40",
  },
];

export function QuickLinksSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24 overflow-hidden">
      {/* Colorful Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-violet-500/20 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-orange-500/15 to-amber-500/10 rounded-full blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative container-custom">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-white/90 lowercase leading-relaxed max-w-2xl mx-auto">
            are you a job seeker? choose the appropriate option based on your needs.
          </h2>
        </div>

        {/* Full-width curved cards */}
        <div className="flex flex-col gap-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            const cardContent = (
              <>
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${link.color} shadow-lg shadow-black/20`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl md:text-2xl font-semibold text-white lowercase">
                    {link.title}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-white/60 hidden sm:block">Learn more</span>
                  <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </>
            );

            const cardClass = `group flex items-center justify-between p-6 md:p-8 rounded-3xl ${link.bgColor} border-2 ${link.borderColor} backdrop-blur-sm hover:scale-[1.01] hover:border-white/30 transition-all duration-300 cursor-pointer`;

            return link.external ? (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {cardContent}
              </a>
            ) : (
              <Link
                key={link.title}
                to={link.href}
                className={cardClass}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
