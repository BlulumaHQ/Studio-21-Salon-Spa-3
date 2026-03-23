import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-spa-dark text-background/80">
      {/* Main Footer */}
      <div className="container-spa section-padding">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
          {/* Column 1: Logo + description */}
          <div className="md:col-span-1">
            <span className="font-heading text-2xl font-bold text-background block mb-4">
              Studio 21
            </span>
            <p className="font-body text-sm leading-relaxed text-background/60">
              Award-winning hydro spa and salon located in the historic downtown
              Ashland area. Serving our community with world-class treatments
              since 1996.
            </p>
          </div>

          {/* Column 2: Empty spacer */}
          <div className="hidden md:block" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-heading text-base font-semibold text-background mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Shop", to: "/shop" },
                { label: "Contact Us", to: "/contact-us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="font-heading text-base font-semibold text-background mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {["Massage", "Facials", "Manicures", "Pedicures", "Salt Scrubs", "Microblading"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="font-body text-sm text-background/60 hover:text-primary transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold text-background mb-4">
              Visit Us
            </h4>
            <div className="font-body text-sm text-background/60 space-y-2.5">
              <p>Historic Downtown Ashland</p>
              <p>Ashland, Kentucky</p>
              <Link
                to="/contact-us"
                className="inline-block mt-3 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Get Directions →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-background/10">
        <div className="container-spa py-5 text-center">
          <p className="font-body text-xs text-background/40">
            © 2026 Studio 21 Salon and Spa. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background/60 transition-colors"
            >
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a
              href="https://swiftlift.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background/60 transition-colors"
            >
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
