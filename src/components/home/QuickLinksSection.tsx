import { Link } from "react-router-dom";
import { ArrowRight, FileText, Users, Briefcase, MessageCircle } from "lucide-react";

const quickLinks = [
  { 
    title: "submit your resume", 
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdKWVKmgUUzr2T7qtdA1kx9cRvczavZ1DDAu4CNquTwHooq7A/viewform?usp=publish-editor", 
    external: true,
    icon: FileText,
  },
  { 
    title: "refer a friend", 
    href: "/job-seekers#refer", 
    external: false,
    icon: Users,
  },
  { 
    title: "explore our services", 
    href: "/services", 
    external: false,
    icon: Briefcase,
  },
  { 
    title: "contact us today", 
    href: "/contact", 
    external: false,
    icon: MessageCircle,
  },
];

export function QuickLinksSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container-custom">
        {/* Rounded container card like Windows 11 banner */}
        <div className="relative bg-gradient-to-br from-slate-100 via-slate-50 to-gray-100 rounded-3xl overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-200/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />
          </div>

          <div className="relative px-8 md:px-12 lg:px-16 py-12 md:py-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left side - Heading and description */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4">
                  Are you a job seeker?
                  <br />
                  <span className="text-muted-foreground">– find your path</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-md mb-6">
                  Choose the appropriate option based on your needs. We're here to help you take the next step in your career journey.
                </p>
                <Link 
                  to="/job-seekers"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Right side - Quick action links */}
              <div className="grid sm:grid-cols-2 gap-3">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  const cardContent = (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm md:text-base font-medium text-foreground lowercase">
                          {link.title}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </>
                  );

                  const cardClass = "group flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-200";

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
        </div>
      </div>
    </section>
  );
}
