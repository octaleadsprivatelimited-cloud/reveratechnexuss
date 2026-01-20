import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
import footerBg from "@/assets/footer-bg.webp";

const footerLinks = {
  forTalent: [
    { name: "Submit Resume", href: "https://docs.google.com/forms/d/e/1FAIpQLSdKWVKmgUUzr2T7qtdA1kx9cRvczavZ1DDAu4CNquTwHooq7A/viewform?usp=publish-editor", external: true },
    { name: "Career Resources", href: "/blog" },
  ],
  forEmployers: [
    { name: "Staffing Solutions", href: "/services" },
    { name: "Permanent Hiring", href: "/services/permanent-staffing" },
    { name: "Executive Search", href: "/services/executive-search" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Compliance", href: "/compliance" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Image with Dark Fade */}
      <div className="absolute inset-0">
        <img 
          src={footerBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210,11%,10%)]/65 via-[hsl(210,11%,10%)]/55 to-[hsl(210,11%,10%)]/60" />
        <div className="absolute inset-0 bg-[hsl(210,11%,10%)]/45" />
      </div>

      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="container-custom py-8 md:py-12">
          <div className="flex flex-col items-center text-center md:text-left md:flex-row md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Ready to find your next opportunity?</h3>
              <p className="text-gray-400 mt-1 text-sm md:text-base">Let us help you connect with the right talent or find your dream job.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(174,100%,29%)] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[hsl(174,100%,24%)] hover:shadow-lg hover:shadow-[hsl(174,100%,29%)]/20"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/job-seekers"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative container-custom py-10 md:py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <svg className="h-7 w-7 md:h-8 md:w-8 text-[hsl(174,100%,29%)]" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 4l8 4-8 4-8-4 8-4zm-8 8l8 4 8-4v8l-8 4-8-4v-8z"/>
              </svg>
              <span className="text-lg md:text-xl font-bold text-white">Revera Tech Nexus</span>
            </Link>
            <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6">
              Your trusted recruitment partner in Bangalore, connecting exceptional talent with industry-leading organizations.
            </p>
            <div className="flex gap-2 md:gap-3">
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(174,100%,29%)] transition-colors">
                <Linkedin className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </a>
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(174,100%,29%)] transition-colors">
                <Twitter className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </a>
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(174,100%,29%)] transition-colors">
                <Facebook className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </a>
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(174,100%,29%)] transition-colors">
                <Instagram className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </a>
            </div>
          </div>

          {/* For Talent */}
          <div>
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[hsl(174,100%,29%)] mb-3 md:mb-4">For Talent</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.forTalent.map((link) => (
                <li key={link.name}>
                  {'external' in link && link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[hsl(174,100%,29%)] mb-3 md:mb-4">For Employers</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.forEmployers.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[hsl(174,100%,29%)] mb-3 md:mb-4">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[hsl(174,100%,29%)] mb-3 md:mb-4">Contact</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="tel:+919900949512" className="flex items-center gap-2 text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 text-[hsl(174,100%,29%)]" />
                  +91 99009 49512
                </a>
              </li>
              <li>
                <a href="mailto:jyothi@reveratechnexus.com" className="flex items-center gap-2 text-xs md:text-sm text-gray-400 hover:text-white transition-colors break-all">
                  <Mail className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0 text-[hsl(174,100%,29%)]" />
                  <span className="hidden sm:inline">jyothi@reveratechnexus.com</span>
                  <span className="sm:hidden">Email Us</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs md:text-sm text-gray-400">
                <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 mt-0.5 shrink-0 text-[hsl(174,100%,29%)]" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container-custom py-4 md:py-6 flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-4">
          <p className="text-xs md:text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Revera Tech Nexus. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} to={link.href} className="text-xs md:text-sm text-gray-500 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
