import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  Factory,
  GraduationCap,
  Server,
  Settings2,
  Users2,
} from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, sectionVariants } from "./animations";

const MAIN_SERVICES = [
  {
    icon: Settings2,
    title: "ERP Implementation",
    description:
      "Full-cycle ERP implementation designed for your industry. We guide you from initial needs assessment through system selection, configuration, data migration, end-user training, and go-live support.",
    highlights: [
      "Needs Assessment & Gap Analysis",
      "System Selection Advisory",
      "Data Migration & Integration",
      "End-User Training Programs",
      "Go-Live & Hypercare Support",
    ],
    tags: ["Manufacturing", "Education", "Service Industry"],
    accentColor: "bg-navy text-white",
    tagColor: "bg-white/15 text-white/90 border-white/20",
  },
  {
    icon: Server,
    title: "ERP Hosting & Managed Services",
    description:
      "Secure, scalable cloud infrastructure purpose-built for ERP workloads. We provide 99.9% uptime SLAs, automated backups, proactive monitoring, rolling updates, and a dedicated support team.",
    highlights: [
      "99.9% Uptime SLA",
      "Automated Daily Backups",
      "24/7 System Monitoring",
      "Security Patching & Updates",
      "Dedicated Infrastructure Team",
    ],
    tags: ["Cloud Hosting", "Managed Services", "SLA-Backed"],
    accentColor: "bg-section-alt text-navy-deep border border-border",
    tagColor: "bg-navy/10 text-navy border-navy/20",
  },
  {
    icon: Users2,
    title: "Change Management Consulting",
    description:
      "Technology alone doesn't transform organisations — people do. Our certified change management practitioners embed alongside your teams to drive readiness, engagement, and lasting adoption.",
    highlights: [
      "Organisational Readiness Assessment",
      "Stakeholder Engagement Planning",
      "Communication Strategy",
      "Role-Based Training Design",
      "Adoption Measurement & KPIs",
    ],
    tags: ["Readiness", "Adoption", "Sustainability"],
    accentColor: "bg-section-alt text-navy-deep border border-border",
    tagColor: "bg-navy/10 text-navy border-navy/20",
  },
];

const VERTICALS = [
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Production planning, MRP, inventory management, shop floor control, and quality assurance — all integrated in a single ERP platform.",
    features: [
      "Production Planning",
      "Inventory & MRP",
      "Shop Floor Control",
      "Quality Management",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Student information systems, HR, finance, procurement, and compliance modules purpose-configured for higher education and training institutions.",
    features: [
      "Student Information System",
      "Finance & Procurement",
      "HR & Payroll",
      "Regulatory Compliance",
    ],
  },
  {
    icon: Briefcase,
    title: "Service Industry",
    description:
      "Field service management, CRM integration, billing automation, and workforce scheduling built for service-oriented organisations.",
    features: [
      "Field Service Management",
      "CRM Integration",
      "Billing & Invoicing",
      "Workforce Scheduling",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-section-alt">
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
              Our Services
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep leading-tight mb-4"
          >
            Comprehensive ERP & Consulting Solutions
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            From strategy through deployment and ongoing support, we cover the
            full ERP lifecycle so you can focus on running your organisation.
          </motion.p>
        </motion.div>

        {/* Main Service Cards */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {MAIN_SERVICES.map((service, i) => {
            const Icon = service.icon;
            const isNavy = i === 0;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <Card
                  className={`h-full border-0 rounded-2xl card-shadow overflow-hidden ${
                    isNavy ? "bg-navy" : "bg-white"
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        isNavy ? "bg-white/15" : "bg-section-alt"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${isNavy ? "text-gold" : "text-navy"}`}
                        strokeWidth={1.75}
                      />
                    </div>
                    <CardTitle
                      className={`font-display text-xl font-bold ${
                        isNavy ? "text-white" : "text-navy-deep"
                      }`}
                    >
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p
                      className={`text-sm leading-relaxed ${isNavy ? "text-white/70" : "text-muted-foreground"}`}
                    >
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${isNavy ? "bg-gold" : "bg-navy"}`}
                          />
                          <span
                            className={`text-xs font-medium ${isNavy ? "text-white/80" : "text-foreground/70"}`}
                          >
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                            isNavy
                              ? "bg-white/10 text-white/80 border-white/20"
                              : "bg-navy/8 text-navy border-navy/15"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Vertical Expertise Sub-Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-deep mb-2">
              Vertical Expertise
            </h3>
            <p className="text-muted-foreground">
              Industry-specific ERP knowledge built over 15+ years
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {VERTICALS.map((vertical) => {
              const Icon = vertical.icon;
              return (
                <motion.div
                  key={vertical.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  <Card className="h-full bg-white border-0 rounded-2xl card-shadow overflow-hidden group">
                    <div className="h-1.5 bg-navy w-full" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-10 h-10 rounded-lg bg-section-alt flex items-center justify-center">
                          <Icon
                            className="w-5 h-5 text-navy"
                            strokeWidth={1.75}
                          />
                        </div>
                        <CardTitle className="font-display text-lg font-bold text-navy-deep">
                          {vertical.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {vertical.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {vertical.features.map((feature) => (
                          <Badge
                            key={feature}
                            variant="secondary"
                            className="text-xs bg-section-alt text-navy/80 border-0 rounded-md"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
