import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { motion } from "motion/react";
import {
  sectionVariantsSlow as containerVariants,
  fadeUpHero as itemVariants,
} from "./animations";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const STATS = [
  { value: "200+", label: "Implementations" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Retention" },
  { value: "3", label: "Industry Verticals" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-bg hero-pattern min-h-screen flex flex-col justify-center"
      aria-label="Hero"
    >
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Enterprise ERP &amp; Change Management
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            Transform Your Operations with{" "}
            <span className="text-gold">Purpose-Built ERP</span> Solutions
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            We implement, host, and support enterprise-grade ERP systems for
            Manufacturing, Education, and Service Industries — powered by expert
            Change Management.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              data-ocid="hero.primary_button"
              size="lg"
              onClick={() => scrollTo("#contact")}
              className="bg-gold hover:bg-gold-light text-accent-foreground font-semibold px-8 py-6 text-base shadow-navy-lg hover:shadow-navy-lg transition-all duration-200 border-0 group"
            >
              Schedule a Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              data-ocid="hero.secondary_button"
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#services")}
              className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-8 py-6 text-base transition-all duration-200 group"
            >
              <Play className="mr-2 w-4 h-4" />
              Explore Our Services
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-4 text-center"
              >
                <div className="font-display text-3xl font-bold text-white mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center pb-8"
      >
        <button
          type="button"
          onClick={() => scrollTo("#about")}
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest font-medium">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
