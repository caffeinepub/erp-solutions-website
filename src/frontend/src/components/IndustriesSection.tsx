import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Factory, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, sectionVariants } from "./animations";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const INDUSTRIES = [
  {
    icon: Factory,
    title: "Manufacturing",
    subtitle: "Production & Supply Chain Excellence",
    description:
      "Optimise your production, reduce waste, and gain real-time visibility across your supply chain. Our manufacturing ERP solutions integrate MRP, shop floor control, quality management, and supplier collaboration into a single platform built for the modern factory floor.",
    capabilities: [
      "Material Requirements Planning (MRP)",
      "Production Scheduling & Shop Floor Control",
      "Inventory & Warehouse Management",
      "Quality Control & Compliance",
      "Supplier & Procurement Management",
      "Real-Time Production Analytics",
    ],
    ocid: "industries.manufacturing_button",
    stat: "45% avg. reduction in inventory carrying costs",
  },
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "Institutional Efficiency & Student Success",
    description:
      "Streamline administration, enhance student outcomes, and maintain compliance with purpose-built ERP for higher education and training institutions. From student lifecycle management to finance and HR, we help institutions run more efficiently so educators can focus on teaching.",
    capabilities: [
      "Student Information & Lifecycle Management",
      "Financial Management & Reporting",
      "HR, Payroll & Leave Management",
      "Procurement & Asset Management",
      "Regulatory Compliance & Accreditation",
      "Academic Scheduling & Resources",
    ],
    ocid: "industries.education_button",
    stat: "30% reduction in administrative overhead",
  },
  {
    icon: Briefcase,
    title: "Service Industry",
    subtitle: "Operational Agility & Revenue Growth",
    description:
      "Deliver exceptional service, manage your workforce efficiently, and grow revenue with integrated ERP built for service-oriented organisations. Whether you're in professional services, facilities management, or field operations, SynergERP helps you scale with confidence.",
    capabilities: [
      "Field Service Management & Dispatch",
      "CRM & Customer Lifecycle Integration",
      "Billing, Invoicing & Revenue Management",
      "Workforce Scheduling & Attendance",
      "Contract & SLA Management",
      "Service Performance Analytics",
    ],
    ocid: "industries.service_button",
    stat: "40% faster billing cycle time",
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-white">
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
              Industries We Serve
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep leading-tight mb-4"
          >
            Deep Domain Knowledge, Built Over Decades
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            We don't apply generic ERP implementations. We bring proven,
            industry-specific expertise to every engagement.
          </motion.p>
        </motion.div>

        {/* Industry Cards */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-8"
        >
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            const isReversed = i % 2 !== 0;
            return (
              <motion.div
                key={industry.title}
                variants={fadeUp}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0 rounded-2xl overflow-hidden card-shadow border border-border`}
              >
                {/* Icon Panel */}
                <div className="lg:w-72 bg-navy flex flex-col justify-between p-10 shrink-0">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-white/60 font-medium">
                      {industry.subtitle}
                    </p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/15">
                    <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-1">
                      Client Result
                    </p>
                    <p className="text-sm text-white/80 font-medium italic">
                      "{industry.stat}"
                    </p>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="flex-1 bg-white p-10">
                  <p className="text-base text-foreground/75 leading-relaxed mb-8 max-w-xl">
                    {industry.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {industry.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy shrink-0" />
                        <span className="text-sm text-foreground/70">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    data-ocid={industry.ocid}
                    onClick={() => scrollTo("#contact")}
                    className="bg-navy hover:bg-navy-mid text-white border-0 font-semibold group transition-all duration-200"
                  >
                    Learn More About {industry.title} ERP
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
