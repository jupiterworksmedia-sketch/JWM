import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS_DATA, TestimonialItem } from "../types";
import { MessageSquare, Quote, ChevronLeft, ChevronRight, Check } from "lucide-react";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section
      id="testimonials"
      className="bg-studio-bg text-studio-text py-24 sm:py-32 relative overflow-hidden border-t border-black/10"
    >
      {/* Structural visual rhythm shapes */}
      <div className="absolute left-0 top-1/3 w-64 h-64 bg-brand/[0.01] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-12 bottom-12 w-96 h-96 bg-neutral-200/[0.1] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1.5px] bg-brand" />
              <span className="text-[10px] sm:text-[11px] font-display uppercase tracking-[0.4em] font-bold text-brand">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tighter text-studio-text leading-none uppercase">
              MUTUAL <span className="text-brand font-light italic font-serif lowercase">gravity.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-neutral-500 font-sans font-light text-xs sm:text-sm max-w-sm leading-relaxed">
            We operate at the highest levels of design execution. Here is the verified feedback from founders and visual curators who trust us with their corporate voice.
          </p>
        </div>

        {/* Split Interactive Testimonial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Interactive Carousel Main Highlight Case with high contrast */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-white border border-black/10 p-8 sm:p-12 rounded-none shadow-sm relative min-h-[420px] transition-all duration-300 hover:border-brand">
            
            {/* Background absolute quote symbol */}
            <div className="absolute top-8 right-12 select-none pointer-events-none opacity-[0.04] text-brand">
              <Quote className="w-36 h-36 stroke-[1.5]" />
            </div>

            <div className="flex flex-col gap-6">
              {/* Badge identifying category of partnership */}
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                <span className="text-[10px] text-brand font-display font-bold uppercase tracking-wider">
                  PROJECT CATEGORY: BRAND {current.divisionRef}
                </span>
              </div>

              {/* Animate quote text transitions */}
              <div className="min-h-[160px] flex items-center justify-start">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-lg sm:text-2xl font-serif text-studio-text italic font-light leading-relaxed select-none"
                  >
                    &ldquo;{current.quote}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Author details block with simple controls row */}
            <div className="mt-8 pt-8 border-t border-black/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col"
                >
                  <span className="text-sm font-sans font-bold text-studio-text">
                    {current.author}
                  </span>
                  <span className="text-xs text-neutral-400 font-display font-bold uppercase tracking-widest mt-1">
                    {current.role} at <span className="text-brand font-semibold">{current.company}</span>
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Slider Toggles */}
              <div className="flex items-center gap-2">
                <button
                  id="testimonial-prev-btn"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 border border-black/10 hover:border-brand hover:text-brand text-neutral-400 rounded-none flex items-center justify-center bg-studio-bg hover:bg-white transition-all active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {/* Index Count Indicator */}
                <div className="px-3 font-mono text-xs text-neutral-400 font-bold">
                  {activeIndex + 1} / {TESTIMONIALS_DATA.length}
                </div>

                <button
                  id="testimonial-next-btn"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-10 h-10 border border-black/10 hover:border-brand hover:text-brand text-neutral-400 rounded-none flex items-center justify-center bg-studio-bg hover:bg-white transition-all active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Mini Interactive Grid / Selection Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] text-neutral-400 font-display font-bold tracking-[0.25em] uppercase px-1">
              Select Curated Partner
            </span>
            
            <div className="flex flex-col gap-3.5 h-full justify-between">
              {TESTIMONIALS_DATA.map((t, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    id={`testimonial-picker-row-${t.id}`}
                    key={t.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full p-5 text-left border rounded-none transition-all duration-300 flex items-center gap-4 group ${
                      isActive
                        ? "bg-brand text-studio-text border-brand shadow-sm"
                        : "bg-white text-studio-text border-black/10 hover:border-brand hover:bg-studio-bg/40"
                    }`}
                  >
                    {/* Visual Check / Index indicator */}
                    <div
                      className={`w-7 h-7 rounded-none border flex items-center justify-center text-xs shrink-0 transition-all ${
                        isActive
                          ? "bg-studio-text text-brand border-studio-text"
                          : "bg-studio-bg text-neutral-400 border-black/10 group-hover:border-brand group-hover:text-brand"
                      }`}
                    >
                      {isActive ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : `0${idx + 1}`}
                    </div>

                    <div className="overflow-hidden">
                      <h4 className="font-sans font-bold text-xs sm:text-sm truncate">
                        {t.author}
                      </h4>
                      <p
                        className={`text-[10px] font-display uppercase tracking-wider truncate mt-0.5 ${
                          isActive ? "text-studio-text/80" : "text-neutral-400 font-bold group-hover:text-brand"
                        }`}
                      >
                        {t.company}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Dynamic Partner Logo grid accent to complement with clean aesthetic */}
        <div className="mt-20 pt-12 border-t border-black/10">
          <span className="text-[9px] text-neutral-400 font-display uppercase tracking-[0.3em] font-bold block text-center mb-8">
            RECOGNIZED COLLABORATIONS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center opacity-45 grayscale hover:opacity-75 transition-all duration-500">
            <span className="font-display font-black text-xs sm:text-sm tracking-[0.25em] uppercase text-studio-text">
              AURA PARIS
            </span>
            <span className="font-serif italic font-light text-sm sm:text-base text-studio-text">
              lumen art.
            </span>
            <span className="font-mono text-xs font-bold leading-none tracking-widest text-studio-text">
              [ NORDIC ARCH ]
            </span>
            <span className="font-display font-medium text-xs sm:text-sm tracking-[0.1em] uppercase text-studio-text">
              THE CIRCLE GUILD
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
