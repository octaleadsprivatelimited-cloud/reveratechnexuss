import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  forTalent: [
    { name: "Find a Job", href: "/careers" },
    { name: "Submit Resume", href: "/job-seekers" },
    { name: "Career Resources", href: "/blog" },
  ],
  forEmployers: [
    { name: "Staffing Solutions", href: "/services" },
    { name: "Permanent Hiring", href: "/services#corporate" },
    { name: "Executive Search", href: "/services#executive" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
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
    <footer className="bg-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <svg className="h-8 w-8 text-secondary" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 4l8 4-8 4-8-4 8-4zm-8 8l8 4 8-4v8l-8 4-8-4v-8z"/>
              </svg>
              <span className="text-xl font-semibold text-secondary">talentsphere</span>
            </Link>
            <p className="text-sm text-white/60 mb-6">
              Your trusted recruitment partner in Bangalore, connecting exceptional talent with industry-leading organizations.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* For Talent */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">For Talent</h3>
            <ul className="space-y-2">
              {footerLinks.forTalent.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">For Employers</h3>
            <ul className="space-y-2">
              {footerLinks.forEmployers.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919900949512" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                  +91 99009 49512
                </a>
              </li>
              <li>
                <a href="mailto:info@talentsphere.in" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                  info@talentsphere.in
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} TalentSphere. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} to={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
