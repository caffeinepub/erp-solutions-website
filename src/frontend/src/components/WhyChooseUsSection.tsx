import {
  BadgeDollarSign,
  Headphones,
  HeartHandshake,
  Layers,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, sectionVariantsFast as sectionVariants } from "./animations";

const DIFFERENTIATORS = [
  {
    icon: Lightbulb,
    title: "Deep Domain Expertise",
    description:
      "We are specialists in your industry — not generalists who adapt generic software. Our consultants have lived and breathed Manufacturing, Education, and Service operations for over 15 years.",
  },
  {
    icon: Layers,
    title: "End-to-End Delivery",
    description:
      "From initial scoping and business case development through go-live, hypercare, and long-term managed services — we are your single partner across the entire ERP lifecycle.",
  },
  {
    icon: ShieldCheck,
    title: "Proven Methodology",
    description:
      "Our ISO-aligned implementation framework has been refined across 200+ projects. It reduces risk, accelerates timelines, and delivers predictable outcomes for every client.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support Teams",
    description:
      "You get a named account manager, a certified support team, and a 24/7 helpdesk — not a ticket queue. We know your system and your organisation intimately.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no scope creep surprises. Our fixed-price engagements and clear SLAs mean you always know exactly what you are paying for and what you will receive.",
  },
  {
    icon: HeartHandshake,
    title: "Change Management Built-In",
    description:
      "Technology fails when people don't adopt it. Every SynergERP engagement includes structured change management to ensure your teams embrace — not resist — the new system.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-navy relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 100%, oklch(0.38 0.12 245 / 0.18) 0%, transparent 50%), radial-gradient(circle at 100% 0%, oklch(0.72 0.16 70 / 0.07) 0%, transparent 40%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold bg-white/8 border border-white/15 px-3 py-1 rounded-full mb-4">
              Why Choose SynergERP
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            What Sets Us Apart
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/65 text-lg leading-relaxed"
          >
            SynergERP brings the rare combination of technical capability,
            industry depth, and human-centred delivery that makes ERP projects
            succeed.
          </motion.p>
        </motion.div>

        {/* Differentiator Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {DIFFERENTIATORS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  backgroundColor: "oklch(0.30 0.10 255 / 1)",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="bg-white/8 border border-white/12 rounded-2xl p-8 backdrop-blur-sm cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
