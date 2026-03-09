import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, sectionVariants } from "./animations";

const STATS = [
  { value: "200+", label: "Projects Delivered", color: "text-navy" },
  { value: "15+", label: "Years of Experience", color: "text-navy" },
  { value: "98%", label: "Client Retention Rate", color: "text-navy" },
  { value: "3", label: "Industry Verticals", color: "text-navy" },
];

const EXPERTISE_POINTS = [
  "Deep domain knowledge in Manufacturing, Education, and Service sectors",
  "ISO-aligned ERP implementation methodology",
  "Certified change management practitioners on every project",
  "Ongoing managed hosting with enterprise-grade SLAs",
  "End-to-end delivery: from scoping through go-live and beyond",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text Content */}
          <div>
            <motion.div variants={fadeUp}>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-4">
                About Tria E Praxis
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep leading-tight mb-6"
            >
              Empowering Organisations Through{" "}
              <span className="text-navy">Intelligent ERP</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed mb-6 italic border-l-4 border-gold pl-5"
            >
              "We believe that the right ERP system, implemented the right way,
              transforms how organisations operate, scale, and compete."
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base text-foreground/80 leading-relaxed mb-8"
            >
              Founded over 15 years ago, Tria E Praxis has built a reputation as
              a trusted partner for organisations that need more than just
              software — they need expertise, continuity, and a team invested in
              their long-term success. With more than 200 successful
              implementations across Manufacturing, Education, and Service
              Industries, we bring deep domain knowledge to every engagement.
            </motion.p>

            <motion.ul variants={sectionVariants} className="space-y-3">
              {EXPERTISE_POINTS.map((point) => (
                <motion.li
                  key={point}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-navy mt-0.5 shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-sm text-foreground/75">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right: Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 32px oklch(0.22 0.08 255 / 0.14)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="bg-section-alt border border-border rounded-2xl p-8 text-center cursor-default card-shadow"
              >
                <div className="font-display text-5xl font-bold text-navy mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}

            {/* Mission card spans full width */}
            <motion.div
              variants={fadeUp}
              className="col-span-2 bg-navy rounded-2xl p-8 card-shadow"
            >
              <div className="font-display text-lg font-bold text-white mb-2">
                Our Mission
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                To deliver transformative ERP solutions that are right-fit,
                well-adopted, and built for long-term operational excellence —
                across Africa and beyond.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
