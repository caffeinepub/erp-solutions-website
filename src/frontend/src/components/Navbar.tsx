import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home", ocid: "nav.home_link" },
  { label: "About", href: "#about", ocid: "nav.about_link" },
  { label: "Services", href: "#services", ocid: "nav.services_link" },
  { label: "Industries", href: "#industries", ocid: "nav.industries_link" },
  { label: "Why Us", href: "#why-us", ocid: "nav.whyus_link" },
  {
    label: "Testimonials",
    href: "#testimonials",
    ocid: "nav.testimonials_link",
  },
  { label: "Contact", href: "#contact", ocid: "nav.contact_link" },
];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2 group"
          aria-label="Tria E Praxis Home"
        >
          <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center shadow-navy-sm group-hover:shadow-navy-md transition-shadow">
            <Zap className="w-4 h-4 text-gold" strokeWidth={2.5} />
          </div>
          <span
            className={`font-display font-bold text-xl tracking-tight transition-colors ${
              scrolled ? "text-navy-deep" : "text-white"
            }`}
          >
            Tria E <span className="text-gold">Praxis</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                data-ocid={link.ocid}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-foreground hover:text-navy hover:bg-section-alt"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Button
            type="button"
            data-ocid="nav.cta_button"
            onClick={() => handleNavClick("#contact")}
            className="bg-gold hover:bg-gold-light text-accent-foreground font-semibold shadow-navy-sm hover:shadow-navy-md transition-all duration-200 border-0"
          >
            Get a Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled
              ? "text-navy hover:bg-section-alt"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-border shadow-card-hover"
          >
            <ul className="container mx-auto py-3 px-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    data-ocid={link.ocid}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-foreground hover:text-navy hover:bg-section-alt transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  type="button"
                  data-ocid="nav.cta_button"
                  onClick={() => handleNavClick("#contact")}
                  className="w-full bg-gold hover:bg-gold-light text-accent-foreground font-semibold border-0"
                >
                  Get a Demo
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
