import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
import footerBg from "@/assets/footer-bg.jpeg";

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
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210,11%,10%)]/95 via-[hsl(210,11%,10%)]/85 to-[hsl(210,11%,10%)]/90" />
        <div className="absolute inset-0 bg-[hsl(210,11%,10%)]/70" />
      </div>

      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Ready to find your next opportunity?</h3>
              <p className="text-gray-400 mt-1">Let us help you connect with the right talent or find your dream job.</p>
            </div>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(174,100%,29%)] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[hsl(174,100%,24%)] hover:shadow-lg hover:shadow-[hsl(174,100%,29%)]/20"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <svg className="h-8 w-8 text-[hsl(174,100%,29%)]" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 4l8 4-8 4-8-4 8-4zm-8 8l8 4 8-4v8l-8 4-8-4v-8z"/>
              </svg>
              <span className="text-xl font-bold text-white">Revera Tech Nexus</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Your trusted recruitment partner in Bangalore, connecting exceptional talent with industry-leading organizations.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(174,100%,29%)] transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(174,100%,29%)] transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(174,100%,29%)] transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(174,100%,29%)] transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* For Talent */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(174,100%,29%)] mb-4">For Talent</h3>
            <ul className="space-y-3">
              {footerLinks.forTalent.map((link) => (
                <li key={link.name}>
                  {'external' in link && link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(174,100%,29%)] mb-4">For Employers</h3>
            <ul className="space-y-3">
              {footerLinks.forEmployers.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(174,100%,29%)] mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(174,100%,29%)] mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919900949512" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-[hsl(174,100%,29%)]" />
                  +91 99009 49512
                </a>
              </li>
              <li>
                <a href="mailto:jyothi@reveratechnexus.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-[hsl(174,100%,29%)]" />
                  jyothi@reveratechnexus.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[hsl(174,100%,29%)]" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Revera Tech Nexus. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} to={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
