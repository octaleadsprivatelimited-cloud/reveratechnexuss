import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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
  {
    name: "find a job",
    href: "/careers",
  },
  {
    name: "services",
    href: "/services",
    children: [
      { name: "Contract Staffing", href: "/services#contract", description: "Flexible workforce solutions" },
      { name: "Permanent Staffing", href: "/services#permanent", description: "Find the right permanent talent" },
      { name: "Executive Search", href: "/services#executive", description: "C-suite and leadership hiring" },
      { name: "Payroll Services", href: "/services#payroll", description: "End-to-end payroll management" },
      { name: "HR Consulting", href: "/services#consulting", description: "Strategic HR advisory services" },
    ],
  },
  {
    name: "industries",
    href: "/industries",
    children: [
      { name: "Information Technology", href: "/industries#it", description: "Tech talent solutions" },
      { name: "Healthcare", href: "/industries#healthcare", description: "Medical & healthcare staffing" },
      { name: "Hospitality", href: "/industries#hospitality", description: "Hotel & restaurant staffing" },
      { name: "Corporate", href: "/industries#corporate", description: "Office & admin professionals" },
      { name: "Manufacturing", href: "/industries#manufacturing", description: "Industrial workforce solutions" },
    ],
  },
  {
    name: "for talent",
    href: "/job-seekers",
  },
  {
    name: "for employer",
    href: "/employers",
  },
  {
    name: "about us",
    href: "/about",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="container-custom flex h-10 items-center justify-end gap-4 text-sm">
          <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            contact us
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-secondary" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 4l8 4-8 4-8-4 8-4zm-8 8l8 4 8-4v8l-8 4-8-4v-8z"/>
            </svg>
            <span className="ml-2 text-xl font-semibold text-secondary">talentsphere</span>
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
                        "text-sm font-medium lowercase",
                        isActive(item.href) && "text-secondary"
                      )}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[350px] gap-2 p-4 bg-background border border-border rounded-md shadow-lg z-50">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={child.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                              >
                                <div className="text-sm font-medium">{child.name}</div>
                                <p className="mt-1 text-sm text-muted-foreground">
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
                        "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium lowercase transition-colors hover:bg-accent",
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

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium lowercase",
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
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
