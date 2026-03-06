import { Zap } from "lucide-react";
import { SiFacebook, SiLinkedin, SiX } from "react-icons/si";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
  ],
  services: [
    { label: "ERP Implementation", href: "#services" },
    { label: "ERP Hosting & Managed Services", href: "#services" },
    { label: "Change Management Consulting", href: "#services" },
  ],
  industries: [
    { label: "Manufacturing", href: "#industries" },
    { label: "Education", href: "#industries" },
    { label: "Service Industry", href: "#industries" },
  ],
};

const CONTACT_INFO = [
  "14 Commerce Park Drive, Suite 300",
  "Lagos, Nigeria",
  "hello@synergerp.com",
  "+234 (0) 800 SYNGERP",
];

const currentYear = new Date().getFullYear();

export function Footer() {
  const hostname = encodeURIComponent(window.location.hostname);
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`;

  return (
    <footer className="bg-navy-deep text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <button
              type="button"
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2 mb-4 group"
              aria-label="SynergERP Home"
            >
              <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center">
                <Zap className="w-4 h-4 text-gold" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Synerg<span className="text-gold">ERP</span>
              </span>
            </button>
            <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-xs">
              Purpose-built ERP implementation, hosting, and change management
              consulting for Manufacturing, Education, and Service Industries —
              across Africa and beyond.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-colors"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-colors"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-colors"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/55 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mt-8 mb-4">
              Industries
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.industries.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              {CONTACT_INFO.map((info) => (
                <li key={info} className="text-sm text-white/55 leading-snug">
                  {info}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 bg-gold text-accent-foreground text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gold-light transition-colors"
              >
                Get a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {currentYear}. Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 hover:text-white transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              data-ocid="footer.privacy_link"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              data-ocid="footer.terms_link"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
