import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "The Brentwood Difference", href: "/difference" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "All Programs", href: "/programs" },
      { label: "Infant & Toddler", href: "/programs/infant-toddler" },
      { label: "Preschool", href: "/programs/preschool" },
      { label: "Pre-Kindergarten", href: "/programs/pre-kindergarten" },
      { label: "School Age / Varsity Club", href: "/programs/school-age" },
      { label: "Summer Camp", href: "/programs/summer-camp" },
    ],
  },
  { label: "Tuition & Aid", href: "/tuition" },
  { label: "About Us", href: "/about" },
  {
    label: "Parent Resources",
    href: "/parent-resources",
    children: [
      { label: "All Resources", href: "/parent-resources" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Photo Gallery", href: "/gallery" },
      { label: "FAQs", href: "/parent-resources#faqs" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

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
            <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-semibold text-xs">
              Se Habla Español
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">B</span>
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-foreground text-lg block">Brentwood</span>
              <span className="text-muted-foreground text-xs font-body tracking-wide">Children's Academy</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`text-sm font-semibold font-body flex items-center gap-1 transition-colors ${
                      location.pathname.startsWith(link.href) ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 bg-card rounded-xl border border-border shadow-lg py-2 min-w-[220px] z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-4 py-2 text-sm font-body text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-semibold font-body transition-colors ${
                    location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/schedule-tour"
              className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-bold font-body hover:opacity-90 transition-opacity shadow-md"
            >
              Schedule a Tour
            </Link>
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
              <div className="flex flex-col px-4 py-4 gap-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      to={link.href}
                      onClick={() => !link.children && setMobileOpen(false)}
                      className="text-sm font-semibold font-body text-foreground py-2 block"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="pl-4 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-sm font-body text-muted-foreground py-1.5 block"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to="/schedule-tour"
                  onClick={() => setMobileOpen(false)}
                  className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-bold font-body text-center mt-2"
                >
                  Schedule a Tour
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
