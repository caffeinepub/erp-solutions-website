import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";
import { fadeUp, sectionVariants } from "./animations";

interface FormState {
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  industry: "",
  message: "",
};

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Head Office",
    value: "14 Commerce Park Drive, Suite 300\nLagos, Nigeria",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 (0) 800 SYNGERP\n+234 (0) 1 234 5678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@synergerp.com\nsupport@synergerp.com",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Friday: 8am – 6pm WAT\nSaturday: 9am – 1pm WAT",
  },
];

export function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.company ||
      !form.industry ||
      !form.message
    )
      return;

    setStatus("loading");
    setErrorMessage("");

    try {
      if (!actor)
        throw new Error("Backend not available yet. Please try again.");
      await actor.submitContactForm(
        form.name,
        form.email,
        form.company,
        form.industry,
        form.message,
      );
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email us directly.",
      );
    }
  };

  const isLoading = status === "loading";

  return (
    <section id="contact" className="py-24 bg-white">
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
              Get In Touch
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep leading-tight mb-4"
          >
            Ready to Transform Your Operations?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Tell us about your organisation and we'll arrange a free
            consultation with one of our industry specialists — no commitment
            required.
          </motion.p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto"
        >
          {/* Left: Contact Info */}
          <motion.div variants={fadeUp} className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-navy-deep mb-2">
                Let's Start a Conversation
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you're exploring your options or ready to kick off a
                project, our team is here to help you find the right path
                forward.
              </p>
            </div>

            <div className="space-y-6">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-section-alt border border-border flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-navy" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy uppercase tracking-wider mb-1">
                        {info.label}
                      </div>
                      <div className="text-sm text-foreground/70 whitespace-pre-line leading-relaxed">
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick value prop */}
            <div className="bg-navy rounded-2xl p-6 card-shadow">
              <h4 className="font-display text-base font-bold text-white mb-2">
                What happens next?
              </h4>
              <ol className="space-y-2">
                {[
                  "We review your message within one business day",
                  "A specialist arranges a discovery call",
                  "We deliver a tailored proposal at no cost",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-gold text-accent-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-xs text-white/70 leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-border card-shadow p-8 md:p-10">
              {status === "success" ? (
                <motion.div
                  data-ocid="contact.success_state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-deep mb-2">
                    Message Received!
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
                    Thank you for reaching out. One of our consultants will be
                    in touch within one business day.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setStatus("idle")}
                    className="border-navy text-navy hover:bg-section-alt"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-name"
                        className="text-sm font-semibold text-navy-deep"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-name"
                        data-ocid="contact.name_input"
                        placeholder="James Okafor"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        required
                        disabled={isLoading}
                        className="border-border focus:border-navy focus:ring-navy/20 h-11"
                        autoComplete="name"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-email"
                        className="text-sm font-semibold text-navy-deep"
                      >
                        Work Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        data-ocid="contact.email_input"
                        placeholder="james@yourcompany.com"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        required
                        disabled={isLoading}
                        className="border-border focus:border-navy focus:ring-navy/20 h-11"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-company"
                        className="text-sm font-semibold text-navy-deep"
                      >
                        Company <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-company"
                        data-ocid="contact.company_input"
                        placeholder="PrecisionMfg Ltd"
                        value={form.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        required
                        disabled={isLoading}
                        className="border-border focus:border-navy focus:ring-navy/20 h-11"
                        autoComplete="organization"
                      />
                    </div>

                    {/* Industry */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-navy-deep">
                        Industry <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={form.industry}
                        onValueChange={(v) => updateField("industry", v)}
                        disabled={isLoading}
                        required
                      >
                        <SelectTrigger
                          data-ocid="contact.industry_select"
                          className="border-border focus:border-navy focus:ring-navy/20 h-11"
                        >
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Manufacturing">
                            Manufacturing
                          </SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="Service Industry">
                            Service Industry
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-message"
                      className="text-sm font-semibold text-navy-deep"
                    >
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      data-ocid="contact.message_textarea"
                      placeholder="Tell us about your organisation, current systems, and what you're hoping to achieve with ERP…"
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      required
                      disabled={isLoading}
                      rows={5}
                      className="border-border focus:border-navy focus:ring-navy/20 resize-none"
                    />
                  </div>

                  {/* Error State */}
                  {status === "error" && (
                    <motion.div
                      data-ocid="contact.error_state"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-red-700 mb-0.5">
                          Submission Failed
                        </p>
                        <p className="text-xs text-red-600">{errorMessage}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={
                      isLoading ||
                      !form.name ||
                      !form.email ||
                      !form.company ||
                      !form.industry ||
                      !form.message
                    }
                    className="w-full h-12 bg-navy hover:bg-navy-mid text-white font-semibold border-0 transition-all duration-200 shadow-navy-sm hover:shadow-navy-md"
                  >
                    {isLoading ? (
                      <>
                        <Loader2
                          data-ocid="contact.loading_state"
                          className="mr-2 h-4 w-4 animate-spin"
                        />
                        Sending Message…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Your information is never shared
                    with third parties.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
