import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, Users, Building2, Search, FileText, Calculator, Briefcase, Laptop, Heart, Hotel, Building, Factory, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import heroConsulting from "@/assets/hero-consulting.webp";
import industryIT from "@/assets/industry-it.webp";
import logo from "@/assets/logo.webp";

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpandedItems([]);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
        when: "afterChildren" as const
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
        when: "beforeChildren" as const,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -16 },
    open: { opacity: 1, x: 0 }
  };

  const subMenuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2 }
    },
    open: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.2,
        staggerChildren: 0.03
      }
    }
  };

  const subItemVariants = {
    closed: { opacity: 0, x: -8 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top bar - hidden on mobile */}
      <div className="hidden sm:block bg-[hsl(210,11%,15%)]">
        <div className="container-custom flex h-9 items-center justify-between text-xs">
          <a href="mailto:jyothi.m@reveratechnexus.com" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
            <Mail className="h-3 w-3" />
            <span className="hidden md:inline">jyothi.m@reveratechnexus.com</span>
            <span className="md:hidden">Email Us</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="tel:+919900949512" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
              <Phone className="h-3 w-3" />
              <span className="hidden md:inline">+91 99009 49512</span>
              <span className="md:hidden">Call</span>
            </a>
            <span className="text-gray-600">|</span>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-custom flex h-14 sm:h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Revera Tech Nexus" 
            className="h-10 sm:h-12 w-auto object-contain"
          />
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
        <motion.button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-[hsl(210,11%,15%)] hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile menu with animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-x-0 top-[56px] sm:top-[100px] bottom-0 bg-white z-40 overflow-y-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-4 pb-6 pt-4">
              <div className="space-y-1">
                {navigation.map((item, index) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    {item.hasDropdown ? (
                      <>
                        <motion.button
                          onClick={() => toggleMobileExpand(item.name)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium capitalize touch-manipulation active:bg-gray-100 transition-colors",
                            isActive(item.href)
                              ? "bg-[hsl(174,100%,29%)]/10 text-[hsl(174,100%,29%)]"
                              : "text-[hsl(210,11%,15%)] hover:bg-gray-50"
                          )}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="flex items-center gap-3">
                            {item.name === "services" ? (
                              <Users className="h-5 w-5 text-[hsl(174,100%,29%)]" />
                            ) : (
                              <Building2 className="h-5 w-5 text-[hsl(174,100%,29%)]" />
                            )}
                            {item.name}
                          </span>
                          <motion.div
                            animate={{ rotate: mobileExpandedItems.includes(item.name) ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          </motion.div>
                        </motion.button>
                        
                        <AnimatePresence>
                          {mobileExpandedItems.includes(item.name) && (
                            <motion.div
                              className="ml-4 mt-1 space-y-0.5 border-l-2 border-[hsl(174,100%,29%)]/30 pl-4 overflow-hidden"
                              initial="closed"
                              animate="open"
                              exit="closed"
                              variants={subMenuVariants}
                            >
                              {(item.name === "services" ? services : industries).map((subItem) => (
                                <motion.div key={subItem.name} variants={subItemVariants}>
                                  <Link
                                    to={subItem.href}
                                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 active:bg-gray-100 touch-manipulation transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(174,100%,29%)]/10">
                                      <subItem.icon className="h-4 w-4 text-[hsl(174,100%,29%)]" />
                                    </div>
                                    <span>{subItem.name}</span>
                                  </Link>
                                </motion.div>
                              ))}
                              <motion.div variants={subItemVariants}>
                                <Link
                                  to={item.href}
                                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-[hsl(174,100%,29%)] hover:bg-[hsl(174,100%,29%)]/5 active:bg-[hsl(174,100%,29%)]/10 touch-manipulation transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  View all {item.name}
                                  <ArrowRight className="h-4 w-4" />
                                </Link>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium capitalize touch-manipulation active:bg-gray-100 transition-colors",
                          isActive(item.href)
                            ? "bg-[hsl(174,100%,29%)]/10 text-[hsl(174,100%,29%)]"
                            : "text-[hsl(210,11%,15%)] hover:bg-gray-50"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name === "for talent" && <Users className="h-5 w-5 text-[hsl(174,100%,29%)]" />}
                        {item.name === "for employer" && <Briefcase className="h-5 w-5 text-[hsl(174,100%,29%)]" />}
                        {item.name === "about us" && <Building2 className="h-5 w-5 text-[hsl(174,100%,29%)]" />}
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div 
                className="mt-6 pt-6 border-t border-gray-100"
                variants={itemVariants}
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-[hsl(174,100%,29%)] px-6 py-4 text-base font-medium text-white active:bg-[hsl(174,100%,24%)] touch-manipulation transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>

              {/* Mobile contact info */}
              <motion.div 
                className="mt-6 space-y-3"
                variants={itemVariants}
              >
                <a 
                  href="tel:+919900949512" 
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 touch-manipulation transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(174,100%,29%)]/10">
                    <Phone className="h-5 w-5 text-[hsl(174,100%,29%)]" />
                  </div>
                  <div>
                    <div className="font-medium text-[hsl(210,11%,15%)]">Call Us</div>
                    <div className="text-xs text-gray-500">+91 99009 49512</div>
                  </div>
                </a>
                <a 
                  href="mailto:jyothi.m@reveratechnexus.com" 
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 touch-manipulation transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(174,100%,29%)]/10">
                    <Mail className="h-5 w-5 text-[hsl(174,100%,29%)]" />
                  </div>
                  <div>
                    <div className="font-medium text-[hsl(210,11%,15%)]">Email Us</div>
                    <div className="text-xs text-gray-500">jyothi.m@reveratechnexus.com</div>
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
