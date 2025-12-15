import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const services = [
  { name: "Water Quality Testing", href: "/services#water" },
  { name: "Food & Beverage Testing", href: "/services#food" },
  { name: "Industrial & Process Testing", href: "/services#industrial" },
  { name: "Legionella Testing", href: "/services#legionella" },
  { name: "System Installation & Servicing", href: "/services#systems" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary transition-transform group-hover:scale-105">
            <Droplets className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold text-foreground">
              Adka Laboratories
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              Protecting Paradise Through Precision Science
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
              isActive("/")
                ? "text-accent bg-accent/10"
                : "text-foreground hover:text-accent hover:bg-accent/5"
            )}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive("/services")
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-accent/5"
                )}
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 bg-card border-border">
              {services.map((service) => (
                <DropdownMenuItem key={service.name} asChild>
                  <Link
                    to={service.href}
                    className="cursor-pointer hover:bg-accent/10 hover:text-accent"
                  >
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link
                  to="/services"
                  className="cursor-pointer font-medium text-accent hover:bg-accent/10"
                >
                  View All Services →
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/data-center"
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
              isActive("/data-center")
                ? "text-accent bg-accent/10"
                : "text-foreground hover:text-accent hover:bg-accent/5"
            )}
          >
            Data Center Solutions
          </Link>

          <Link
            to="/about"
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
              isActive("/about")
                ? "text-accent bg-accent/10"
                : "text-foreground hover:text-accent hover:bg-accent/5"
            )}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
              isActive("/contact")
                ? "text-accent bg-accent/10"
                : "text-foreground hover:text-accent hover:bg-accent/5"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/contact">Request Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "px-4 py-3 rounded-md transition-colors",
                isActive("/") ? "bg-accent/10 text-accent" : "hover:bg-muted"
              )}
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "px-4 py-3 rounded-md transition-colors",
                isActive("/services") ? "bg-accent/10 text-accent" : "hover:bg-muted"
              )}
            >
              Services
            </Link>
            <Link
              to="/data-center"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "px-4 py-3 rounded-md transition-colors",
                isActive("/data-center") ? "bg-accent/10 text-accent" : "hover:bg-muted"
              )}
            >
              Data Center Solutions
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "px-4 py-3 rounded-md transition-colors",
                isActive("/about") ? "bg-accent/10 text-accent" : "hover:bg-muted"
              )}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "px-4 py-3 rounded-md transition-colors",
                isActive("/contact") ? "bg-accent/10 text-accent" : "hover:bg-muted"
              )}
            >
              Contact
            </Link>
            <Button asChild className="mt-2 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Request Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
