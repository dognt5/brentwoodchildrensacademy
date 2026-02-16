import { useState } from "react";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "The Brentwood Difference", href: "#difference" },
  { label: "Programs", href: "#programs" },
  { label: "Tuition & Aid", href: "#tuition" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:713-466-9407" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" />
              <span>713-466-9407</span>
            </a>
            <a href="mailto:info@brentwoodchildrensacademy.com" className="hidden sm:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Mail className="w-3.5 h-3.5" />
              <span>info@brentwoodchildrensacademy.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 flex-wrap text-xs">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Houston, TX
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Deer Park, TX
            </span>
            <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-semibold text-xs">
              Se Habla Español
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">B</span>
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-foreground text-lg block">Brentwood</span>
              <span className="text-muted-foreground text-xs font-body tracking-wide">Children's Academy</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold font-body text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-bold font-body hover:opacity-90 transition-opacity shadow-md"
            >
              Schedule a Tour
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-card border-t border-border"
            >
              <div className="flex flex-col px-4 py-4 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-semibold font-body text-foreground py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-bold font-body text-center"
                >
                  Schedule a Tour
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
