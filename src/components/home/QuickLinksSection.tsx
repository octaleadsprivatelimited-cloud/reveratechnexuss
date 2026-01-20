import { Link } from "react-router-dom";
import { ArrowRight, FileText, Users, Briefcase, MessageCircle } from "lucide-react";

const quickLinks = [
  { 
    title: "submit your resume", 
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdKWVKmgUUzr2T7qtdA1kx9cRvczavZ1DDAu4CNquTwHooq7A/viewform?usp=publish-editor", 
    external: true,
    icon: FileText,
    color: "from-teal-500 to-cyan-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    hoverBg: "hover:bg-teal-500",
  },
  { 
    title: "refer a friend", 
    href: "/job-seekers#refer", 
    external: false,
    icon: Users,
    color: "from-violet-500 to-purple-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    hoverBg: "hover:bg-violet-500",
  },
  { 
    title: "explore our services", 
    href: "/services", 
    external: false,
    icon: Briefcase,
    color: "from-orange-500 to-amber-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    hoverBg: "hover:bg-orange-500",
  },
  { 
    title: "contact us today", 
    href: "/contact", 
    external: false,
    icon: MessageCircle,
    color: "from-rose-500 to-pink-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
    hoverBg: "hover:bg-rose-500",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
          {/* Left side heading */}
          <div className="lg:col-span-1">
            <h2 className="text-xl md:text-2xl font-medium text-white/90 lowercase leading-relaxed">
              are you a job seeker? choose the appropriate option based on your needs.
            </h2>
          </div>

          {/* Right side colorful cards */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              const cardContent = (
                <>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} shadow-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-white lowercase">
                      {link.title}
                    </span>
                  </div>
                  <div className={`p-2 rounded-full ${link.bgColor} group-hover:bg-white/20 transition-colors`}>
                    <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </>
              );

              const cardClass = `group flex items-center justify-between p-5 rounded-2xl ${link.bgColor} border ${link.borderColor} backdrop-blur-sm hover:scale-[1.02] hover:shadow-xl hover:shadow-${link.color.split('-')[1]}-500/20 transition-all duration-300`;

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
      </div>
    </section>
  );
}
