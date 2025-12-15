import { Link } from "react-router-dom";
import { Droplets, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Droplets className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="font-display text-lg font-bold">
                Adka Laboratories
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Protecting Paradise Through Precision Science. Over 30 years of excellence in environmental and water quality testing throughout The Bahamas.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium">
                Bahamian-Owned
              </span>
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium">
                Est. 1990+
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/services#water" className="hover:text-accent transition-colors">
                  Water Quality Testing
                </Link>
              </li>
              <li>
                <Link to="/services#food" className="hover:text-accent transition-colors">
                  Food & Beverage Testing
                </Link>
              </li>
              <li>
                <Link to="/services#industrial" className="hover:text-accent transition-colors">
                  Industrial & Process Testing
                </Link>
              </li>
              <li>
                <Link to="/services#legionella" className="hover:text-accent transition-colors">
                  Legionella Testing
                </Link>
              </li>
              <li>
                <Link to="/services#systems" className="hover:text-accent transition-colors">
                  System Installation
                </Link>
              </li>
              <li>
                <Link to="/data-center" className="hover:text-accent transition-colors font-medium">
                  Data Center Solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#certifications" className="hover:text-accent transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/about#service-areas" className="hover:text-accent transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <span>Nassau, The Bahamas<br />Serving all Family Islands</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+12423231234" className="hover:text-accent transition-colors">
                  (242) 323-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@adkalabs.com" className="hover:text-accent transition-colors">
                  info@adkalabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Adka Laboratories. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
