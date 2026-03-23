import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Shop", to: "/shop" },
  { label: "Contact Us", to: "/contact-us" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-spa flex items-center justify-between h-20 md:h-[85px]">
        {/* Logo */}
        <Link to="/" className="flex items-center" style={{ height: 75 }}>
          <span className="font-heading text-2xl md:text-[28px] font-bold tracking-tight text-foreground">
            Studio 21
          </span>
          <span className="hidden sm:inline font-body text-xs tracking-widest uppercase text-muted-foreground ml-3 mt-1">
            Salon & Spa
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm tracking-wide uppercase transition-colors duration-200 hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary font-semibold"
                  : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact-us" className="btn-primary text-sm">
            Book Online
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container-spa py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`font-body text-base tracking-wide py-2 transition-colors ${
                  location.pathname === link.to
                    ? "text-primary font-semibold"
                    : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Book Online
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
