import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const quickLinks = [
  { title: "submit your resume", href: "/job-seekers" },
  { title: "refer a friend", href: "/job-seekers#refer" },
  { title: "apply for trending jobs", href: "/careers" },
  { title: "view all current job openings", href: "/careers" },
];

export function QuickLinksSection() {
  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="container-custom">
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
                className="group flex items-center justify-between py-4 border-b border-foreground/20 hover:border-secondary transition-colors"
              >
                <span className="text-lg font-medium text-foreground lowercase">
                  {link.title}
                </span>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
