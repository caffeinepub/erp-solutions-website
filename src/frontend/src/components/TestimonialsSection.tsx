import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, sectionVariants } from "./animations";

const TESTIMONIALS = [
  {
    quote:
      "SynergERP transformed our entire production workflow. The implementation was seamless and the team was with us every step of the way. We saw measurable ROI within six months of go-live.",
    name: "James Okafor",
    title: "Chief Operating Officer",
    company: "PrecisionMfg Ltd",
    industry: "Manufacturing",
    initial: "JO",
  },
  {
    quote:
      "We went live on time and under budget — something we never thought possible. The change management support made all the difference for our staff adoption. Our team actually loves the new system.",
    name: "Dr. Amina Patel",
    title: "Director of Operations",
    company: "Horizon University",
    industry: "Education",
    initial: "AP",
  },
  {
    quote:
      "Finally, an ERP partner who truly understands the service industry. Our billing cycle time dropped by 40% in the first quarter alone. SynergERP didn't just implement software — they changed how we operate.",
    name: "Sarah Mensah",
    title: "Chief Financial Officer",
    company: "Apex Services Group",
    industry: "Service Industry",
    initial: "SM",
  },
];

const TRUST_BADGES = [
  "Meridian Steel Works",
  "Atlas University Consortium",
  "Pinnacle Facilities Group",
  "Nova Education Trust",
  "Summit Services Holdings",
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-4">
              Client Testimonials
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep leading-tight mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Real results, real organisations, real transformations — from
            clients who trusted SynergERP with their most critical systems.
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="bg-white rounded-2xl p-8 card-shadow border border-border flex flex-col"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-xl bg-navy/8 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-navy" strokeWidth={1.75} />
              </div>

              {/* Quote Text */}
              <blockquote className="flex-1 text-foreground/80 text-base leading-relaxed mb-8 italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">
                    {t.initial}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-navy-deep text-sm truncate">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {t.title} · {t.company}
                  </div>
                </div>
                <span className="ml-auto text-xs font-medium text-gold bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full shrink-0">
                  {t.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8"
          >
            Trusted by leading organisations across Africa and beyond
          </motion.p>
          <motion.div
            variants={sectionVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {TRUST_BADGES.map((badge) => (
              <motion.div
                key={badge}
                variants={fadeUp}
                whileHover={{ y: -2, borderColor: "oklch(var(--navy) / 0.30)" }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="bg-white border border-border rounded-xl px-6 py-3 card-shadow cursor-default"
              >
                <span className="text-sm font-semibold text-navy/70">
                  {badge}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
