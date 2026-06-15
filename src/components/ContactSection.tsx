import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { CONTACT_CHANNELS } from "../types";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "Medium ($15K - $50K)",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const budgetOptions = [
    "Under $15K",
    "Medium ($15K - $50K)",
    "Significant ($50K - $150K)",
    "Enterprise ($150K+)",
  ];

  const toggleServiceSelection = (serviceTitle: string) => {
    if (selectedServices.includes(serviceTitle)) {
      setSelectedServices(selectedServices.filter((s) => s !== serviceTitle));
    } else {
      setSelectedServices([...selectedServices, serviceTitle]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    // Simulate high-contrast transaction transmitting
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      budget: "Medium ($15K - $50K)",
    });
    setSelectedServices([]);
    setIsSuccess(false);
  };

  return (
    <section
      id="contact"
      className="bg-studio-bg text-studio-text py-24 sm:py-32 relative overflow-hidden border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Main interactive box layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Block: Contact coordinates, socials, active partner notice */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1.5px] bg-brand" />
                <span className="text-[10px] sm:text-[11px] font-display uppercase tracking-[0.4em] font-bold text-brand">
                  CONNECT WITH US
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tighter text-studio-text mb-6 uppercase">
                START A <br />
                <span className="text-brand font-light italic font-serif lowercase">conversation.</span>
              </h2>

              <p className="text-neutral-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-12 max-w-sm">
                Have a brand strategy, media rollout, or spatial design in mind? Drop us a line. We reply to curated inquiries within 24 hours.
              </p>

              {/* Coordinates block */}
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-black/5 border border-black/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-brand" />
                  </div>
                  <div>
                    <span className="font-display text-[9px] uppercase tracking-widest font-bold text-neutral-400 block mb-1">
                      BERLIN STUDIO
                    </span>
                    <p className="text-neutral-600 text-xs sm:text-sm font-sans font-light leading-relaxed">
                      {CONTACT_CHANNELS.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-black/5 border border-black/5 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-brand" />
                  </div>
                  <div>
                    <span className="font-display text-[9px] uppercase tracking-widest font-bold text-neutral-400 block mb-1">
                      EMAIL INQUIRIES
                    </span>
                    <a
                      id="contact-email-link"
                      href={`mailto:${CONTACT_CHANNELS.email}`}
                      className="text-neutral-700 text-xs sm:text-sm font-sans font-bold hover:text-brand transition-colors"
                    >
                      {CONTACT_CHANNELS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-black/5 border border-black/5 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-brand" />
                  </div>
                  <div>
                    <span className="font-display text-[9px] uppercase tracking-widest font-bold text-neutral-400 block mb-1">
                      DIRECT WIRE
                    </span>
                    <a
                      id="contact-phone-link"
                      href={`tel:${CONTACT_CHANNELS.phone}`}
                      className="text-neutral-700 text-xs sm:text-sm font-sans font-bold hover:text-brand transition-colors"
                    >
                      {CONTACT_CHANNELS.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels & Partnership Notice */}
            <div className="mt-16 pt-8 border-t border-black/10">
              <div className="bg-white border border-black/10 rounded-none p-4 mb-6 flex items-start gap-3 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand mt-1.5 animate-pulse shrink-0" />
                <p className="text-[11px] text-neutral-600 font-sans font-semibold leading-relaxed">
                  We are actively curating brand partners for late 2026. Only 3 project slots remain.
                </p>
              </div>

              <div>
                <span className="text-[9px] text-neutral-400 font-display uppercase tracking-widest font-bold block mb-3">
                  DIGITAL FOOTPRINTS
                </span>
                <div className="flex flex-wrap gap-4">
                  {CONTACT_CHANNELS.socials.map((social) => (
                    <a
                      id={`social-link-${social.name.toLowerCase()}`}
                      key={social.name}
                      href={social.url}
                      className="text-xs text-neutral-500 hover:text-brand font-display font-bold uppercase tracking-wider transition-colors duration-200"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Block: Interactive form / confirmation screen styled as an Artistic Flair canvas sheet */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  id="contact-form-element"
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-black/10 rounded-none p-8 sm:p-12 shadow-sm flex flex-col gap-8"
                >
                  {/* Category tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-neutral-400 font-display tracking-widest font-bold uppercase">
                      REQUEST SECURE PROPOSAL
                    </span>
                    <span className="text-[9px] text-neutral-400 font-mono font-bold">[ DIRECT CODES ]</span>
                  </div>

                  <div className="h-[1px] bg-black/10" />

                  {/* Basic Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] text-neutral-400 font-display uppercase tracking-wider font-bold">
                        Your Name *
                      </label>
                      <input
                        id="form-name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Alexander Sterling"
                        className="bg-studio-bg border border-black/10 hover:border-black/20 focus:border-brand focus:bg-white text-studio-text rounded-none px-4 py-3 text-sm focus:outline-none transition-all font-sans font-bold"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] text-neutral-400 font-display uppercase tracking-wider font-bold">
                        Business Email *
                      </label>
                      <input
                        id="form-email-input"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g., alex@company.com"
                        className="bg-studio-bg border border-black/10 hover:border-black/20 focus:border-brand focus:bg-white text-studio-text rounded-none px-4 py-3 text-sm focus:outline-none transition-all font-sans font-bold"
                      />
                    </div>
                  </div>

                  {/* Corporate Client */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] text-neutral-400 font-display uppercase tracking-wider font-bold">
                      Company / Organization
                    </label>
                    <input
                      id="form-company-input"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g., Sterling Capital Corp"
                      className="bg-studio-bg border border-black/10 hover:border-black/20 focus:border-brand focus:bg-white text-studio-text rounded-none px-4 py-3 text-sm focus:outline-none transition-all font-sans font-bold"
                    />
                  </div>

                  {/* Service selection capsules */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] text-neutral-400 font-display uppercase tracking-wider font-bold block">
                      Target Disciplines Of Curation
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {["Advertising", "Experience", "Public Relations", "Brand Consulting", "Full Omni-Channel"].map(
                        (serv) => {
                          const isSel = selectedServices.includes(serv);
                          return (
                            <button
                              id={`form-service-capsule-${serv.toLowerCase().replace(/[^a-z]/g, "")}`}
                              key={serv}
                              type="button"
                              onClick={() => toggleServiceSelection(serv)}
                              className={`px-4.5 py-2.5 rounded-none font-display text-[10px] tracking-wider uppercase border transition-all duration-300 select-none flex items-center gap-2 ${
                                isSel
                                  ? "bg-brand text-studio-text border-brand font-bold"
                                  : "bg-studio-bg text-neutral-550 border-black/10 hover:text-brand hover:border-brand font-bold"
                              }`}
                            >
                              {serv}
                              {isSel && <CheckCircle className="w-3.5 h-3.5 text-studio-text" />}
                            </button>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Estimated Project Budget */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] text-neutral-400 font-display uppercase tracking-wider font-bold">
                      Project Investment Scale
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          id={`form-budget-opt-${opt.toLowerCase().replace(/[^a-z0-9]/g, "")}`}
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: opt })}
                          className={`p-3 rounded-none border text-[9px] font-display uppercase tracking-wider text-center transition-all duration-300 ${
                            formData.budget === opt
                              ? "bg-brand text-studio-text border-brand font-bold"
                              : "bg-studio-bg text-neutral-500 border-black/10 hover:text-brand"
                          }`}
                        >
                          {opt.split("(")[0]?.trim()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message brief */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] text-neutral-400 font-display uppercase tracking-wider font-bold">
                      Narrative Outline / Brief Synopsis
                    </label>
                    <textarea
                      id="form-message-input"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your primary creative problems, goals, or time constraints."
                      className="bg-studio-bg border border-black/10 hover:border-black/20 focus:border-brand focus:bg-white text-studio-text rounded-none p-4 text-sm focus:outline-none transition-all font-sans font-bold resize-none"
                    />
                  </div>

                  {/* Submit Trigger */}
                  <button
                    id="form-submit-trigger"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 py-4 rounded-none bg-brand text-studio-text font-display font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 hover:bg-brand-hover disabled:bg-neutral-200 disabled:text-neutral-450 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-studio-text border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Transmit Project Brief
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Sleek confirmation card receipt showing their submission values */
                <motion.div
                  id="contact-success-receipt"
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="border border-black/10 rounded-none p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[500px] bg-white shadow-sm relative animate-fade-in"
                >
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />
                    <span className="text-[10px] text-neutral-400 font-display font-bold uppercase tracking-widest">
                      Transmission Confirmed
                    </span>
                  </div>

                  <div className="w-16 h-16 rounded-none bg-brand/5 border border-brand/20 flex items-center justify-center text-brand mb-8">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-display font-black text-studio-text tracking-tighter mb-4 uppercase">
                    BRIEF SECURED SUCCESSFULLY
                  </h3>

                  <p className="text-neutral-600 max-w-md font-sans font-light text-sm sm:text-base leading-relaxed mb-10">
                    Thank you, <span className="font-bold text-studio-text">{formData.name}</span>. Your requirements have been logged under ticket <span className="font-mono font-bold text-studio-text bg-studio-bg border border-black/5 px-2 py-0.5">#VTX-{Math.floor(1000 + Math.random() * 9000).toString()}</span>. Our design committee is analyzing your profile.
                  </p>

                  {/* Summary of what they asked */}
                  <div className="w-full max-w-md bg-studio-bg p-6 rounded-none border border-black/10 text-left flex flex-col gap-3 mb-10">
                    <span className="text-[9px] text-neutral-400 font-display tracking-widest font-bold uppercase block mb-1">
                      Submitted Coordinates
                    </span>
                    
                    <div className="flex justify-between text-xs font-sans">
                      <span className="text-neutral-400 font-bold">Representative:</span>
                      <span className="text-studio-text font-bold">{formData.name}</span>
                    </div>

                    <div className="flex justify-between text-xs font-sans">
                      <span className="text-neutral-400 font-bold">Corporate:</span>
                      <span className="text-studio-text font-bold">{formData.company || "N/A"}</span>
                    </div>

                    <div className="flex justify-between text-xs font-sans">
                      <span className="text-neutral-400 font-bold">Investment:</span>
                      <span className="text-studio-text font-bold">{formData.budget}</span>
                    </div>

                    {selectedServices.length > 0 && (
                      <div className="flex justify-between text-xs font-sans">
                        <span className="text-neutral-400 font-bold">Disciplines:</span>
                        <span className="text-brand font-bold text-right max-w-[200px] truncate">
                          {selectedServices.join(", ")}
                        </span>
                      </div>
                    )}
                  </div>

                  <button
                    id="contact-success-reset-btn"
                    onClick={handleReset}
                    className="group inline-flex items-center gap-2.5 text-xs text-neutral-400 hover:text-brand font-display font-bold uppercase tracking-widest transition-colors"
                  >
                    Submit another requirement
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brand" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
