import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "IT Recruitment", href: "/services#it", description: "Tech talent acquisition" },
      { name: "Healthcare Staffing", href: "/services#healthcare", description: "Medical professionals" },
      { name: "Hospitality Hiring", href: "/services#hospitality", description: "Service industry experts" },
      { name: "Corporate Recruitment", href: "/services#corporate", description: "White-collar professionals" },
      { name: "Contract Staffing", href: "/services#contract", description: "Flexible workforce solutions" },
      { name: "Executive Search", href: "/services#executive", description: "C-suite & leadership" },
    ],
  },
  { name: "Industries", href: "/industries" },
  { name: "For Employers", href: "/employers" },
  { name: "For Job Seekers", href: "/job-seekers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <nav className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
            <span className="font-heading text-xl font-bold text-primary-foreground">TS</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-heading text-xl font-bold text-foreground">TalentSphere</span>
            <span className="block text-xs text-muted-foreground">Recruitment Solutions</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger
                      className={cn(
                        "font-medium",
                        isActive(item.href) && "text-secondary"
                      )}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={child.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{child.name}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {child.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                        isActive(item.href) && "text-secondary"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <a href="tel:+919900949512" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Phone className="h-4 w-4" />
            +91 99009 49512
          </a>
          <Button asChild variant="secondary" size="sm">
            <Link to="/employers">Hire Talent</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 border-t border-border px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-base font-medium",
                    isActive(item.href)
                      ? "bg-accent text-secondary"
                      : "text-foreground hover:bg-accent"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border">
              <a
                href="tel:+919900949512"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                +91 99009 49512
              </a>
              <div className="mt-2">
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/employers" onClick={() => setMobileMenuOpen(false)}>
                    Hire Talent
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
