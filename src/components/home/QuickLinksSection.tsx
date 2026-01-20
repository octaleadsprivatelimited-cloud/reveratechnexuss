import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const quickLinks = [
  { title: "submit your resume", href: "/job-seekers" },
  { title: "refer a friend", href: "/job-seekers#refer" },
  { title: "explore our services", href: "/services" },
  { title: "contact us today", href: "/contact" },
];

export function QuickLinksSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.4]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(174 100% 29% / 0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        
        {/* Gradient accents */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[hsl(174,100%,29%)]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[hsl(210,11%,15%)]/5 to-transparent" />
      </div>

      <div className="relative container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Left side heading */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-medium text-foreground lowercase">
              are you a job seeker? choose the appropriate option based on your needs.
            </h2>
          </div>

          {/* Right side links */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="group flex items-center justify-between py-4 border-b border-foreground/20 hover:border-[hsl(174,100%,29%)] transition-colors"
              >
                <span className="text-lg font-medium text-foreground lowercase">
                  {link.title}
                </span>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-[hsl(174,100%,29%)] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
