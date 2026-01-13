import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Users, Building2, Search, FileText, Calculator, Briefcase, Laptop, Heart, Hotel, Building, Factory, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import heroConsulting from "@/assets/hero-consulting.jpg";
import industryIT from "@/assets/industry-it.jpg";

const services = [
  { name: "Contract Staffing", href: "/services/contract-staffing", description: "Flexible workforce solutions for project-based needs", icon: Users },
  { name: "Permanent Staffing", href: "/services/permanent-staffing", description: "Find the right permanent talent for your organization", icon: Briefcase },
  { name: "Executive Search", href: "/services/executive-search", description: "C-suite and leadership hiring solutions", icon: Search },
  { name: "Payroll Services", href: "/services/payroll-services", description: "End-to-end payroll management and compliance", icon: Calculator },
  { name: "HR Consulting", href: "/services/hr-consulting", description: "Strategic HR advisory and transformation services", icon: FileText },
];

const industries = [
  { name: "Information Technology", href: "/industries/information-technology", description: "Tech talent for digital transformation", icon: Laptop },
  { name: "Healthcare", href: "/industries/healthcare", description: "Medical & healthcare staffing solutions", icon: Heart },
  { name: "Real Estate", href: "/industries/real-estate", description: "Property & real estate professionals", icon: Building },
  { name: "Corporate", href: "/industries/corporate", description: "Office & administrative professionals", icon: Building },
  { name: "Manufacturing", href: "/industries/manufacturing", description: "Industrial workforce solutions", icon: Factory },
];

const navigation = [
  { name: "find a job", href: "/careers" },
  { name: "services", href: "/services", hasDropdown: true },
  { name: "industries", href: "/industries", hasDropdown: true },
  { name: "for talent", href: "/job-seekers" },
  { name: "for employer", href: "/employers" },
  { name: "about us", href: "/about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + "/");

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileExpand = (name: string) => {
    setMobileExpandedItems(prev => 
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-[hsl(210,11%,15%)]">
        <div className="container-custom flex h-9 items-center justify-end gap-4 text-xs">
          <a href="tel:+919900949512" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
            <Phone className="h-3 w-3" />
            +91 99009 49512
          </a>
          <span className="text-gray-600">|</span>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-[hsl(174,100%,29%)]" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 4l8 4-8 4-8-4 8-4zm-8 8l8 4 8-4v8l-8 4-8-4v-8z"/>
            </svg>
            <span className="ml-2 text-xl font-bold text-[hsl(210,11%,15%)]">talentsphere</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.hasDropdown ? (
                <button
                  className={cn(
                    "inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-medium capitalize transition-colors hover:text-[hsl(174,100%,29%)]",
                    isActive(item.href) ? "text-[hsl(174,100%,29%)]" : "text-[hsl(210,11%,15%)]",
                    activeDropdown === item.name && "text-[hsl(174,100%,29%)]"
                  )}
                >
                  {item.name}
                  <ChevronDown
                    className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-200",
                      activeDropdown === item.name && "rotate-180"
                    )}
                  />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    "inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-medium capitalize transition-colors hover:text-[hsl(174,100%,29%)]",
                    isActive(item.href) ? "text-[hsl(174,100%,29%)]" : "text-[hsl(210,11%,15%)]"
                  )}
                >
                  {item.name}
                </Link>
              )}

              {/* Mega Menu Dropdown */}
              {item.hasDropdown && activeDropdown === item.name && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                  <div className="w-[750px] rounded-xl border border-gray-100 bg-white shadow-2xl overflow-hidden animate-fade-in">
                    <div className="flex">
                      {/* Left side - Image */}
                      <div className="w-[280px] relative overflow-hidden">
                        <img 
                          src={item.name === "services" ? heroConsulting : industryIT} 
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,11%,15%)] via-[hsl(210,11%,15%)]/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-bold text-white capitalize mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-300 mb-4">
                            {item.name === "services" 
                              ? "Comprehensive staffing and HR solutions for your business" 
                              : "Industry-specific talent expertise across sectors"
                            }
                          </p>
                          <Link
                            to={item.href}
                            className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(174,100%,45%)] hover:text-white transition-colors"
                          >
                            Explore all {item.name}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>

                      {/* Right side - Menu Items */}
                      <div className="flex-1 p-5">
                        <div className="grid grid-cols-2 gap-1">
                          {(item.name === "services" ? services : industries).map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="group flex items-start gap-3 rounded-lg p-3 transition-all hover:bg-gray-50"
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[hsl(174,100%,29%)]/10 text-[hsl(174,100%,29%)] group-hover:bg-[hsl(174,100%,29%)] group-hover:text-white transition-colors">
                                <subItem.icon className="h-4 w-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-[hsl(210,11%,15%)] group-hover:text-[hsl(174,100%,29%)] transition-colors">
                                  {subItem.name}
                                </div>
                                <p className="mt-0.5 text-xs text-gray-500 line-clamp-1">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Footer CTA */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                              {item.name === "services" 
                                ? "Need a custom solution?" 
                                : "Don't see your industry?"
                              }
                            </p>
                            <Link
                              to="/contact"
                              className="text-sm font-medium text-[hsl(174,100%,29%)] hover:underline flex items-center gap-1"
                            >
                              Contact us
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <Link
            to="/contact"
            className="ml-4 inline-flex h-10 items-center justify-center rounded-full bg-[hsl(174,100%,29%)] px-6 text-sm font-medium text-white transition-all hover:bg-[hsl(174,100%,24%)] hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[hsl(210,11%,15%)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileExpand(item.name)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium capitalize",
                        isActive(item.href)
                          ? "bg-gray-50 text-[hsl(174,100%,29%)]"
                          : "text-[hsl(210,11%,15%)] hover:bg-gray-50"
                      )}
                    >
                      {item.name}
                      <ChevronDown 
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileExpandedItems.includes(item.name) && "rotate-180"
                        )} 
                      />
                    </button>
                    {mobileExpandedItems.includes(item.name) && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-[hsl(174,100%,29%)]/30 pl-4">
                        {(item.name === "services" ? services : industries).map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[hsl(210,11%,15%)]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <subItem.icon className="h-4 w-4 text-[hsl(174,100%,29%)]" />
                            {subItem.name}
                          </Link>
                        ))}
                        <Link
                          to={item.href}
                          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[hsl(174,100%,29%)]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View all {item.name}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-base font-medium capitalize",
                      isActive(item.href)
                        ? "bg-gray-50 text-[hsl(174,100%,29%)]"
                        : "text-[hsl(210,11%,15%)] hover:bg-gray-50"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
