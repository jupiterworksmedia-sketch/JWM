import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES_DATA, ServiceItem } from "../types";
import { Megaphone, Sparkles, Compass, Layers, ArrowRight, ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("advertising");

  // Map icon strings to Lucide components
  const getIconComponent = (id: string) => {
    switch (id) {
      case "advertising":
        return <Megaphone className="w-5 h-5" />;
      case "experience":
        return <Sparkles className="w-5 h-5" />;
      case "pr":
        return <Compass className="w-5 h-5" />;
      case "consulting":
        default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const handleScrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="services"
      className="relative bg-studio-bg text-studio-text py-24 sm:py-32 overflow-hidden border-t border-black/10"
    >
      {/* Background elegant architectural line alignments */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-12 bottom-12 w-80 h-80 bg-neutral-200/[0.15] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20">
          
          {/* Left Block: Description, sticky layout */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:sticky lg:top-32 lg:h-[calc(80vh-160px)]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1.5px] bg-brand" />
                <span className="text-[10px] sm:text-[11px] font-display uppercase tracking-[0.4em] font-bold text-brand">
                  OUR CAPABILITIES
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black leading-[1.05] text-studio-text uppercase tracking-tighter">
                WE REFUSE TO <br />
                <span className="text-brand font-light italic font-serif lowercase">be ignored.</span>
              </h2>
              <p className="mt-6 text-neutral-600 font-sans font-light text-base leading-relaxed max-w-sm">
                Each service block works stand-alone or aggregates into an omni-scale brand engine. We design systems that build high market share and culture connections.
              </p>
            </div>

            <div className="mt-12 lg:mt-0 pt-8 border-t border-black/10">
              <span className="text-xs text-neutral-400 font-display uppercase tracking-widest font-bold block mb-4">
                Have a vision to build?
              </span>
              <button
                id="services-consult-btn"
                onClick={handleScrollToContact}
                className="group inline-flex items-center gap-3 text-studio-text font-display text-xs font-bold tracking-widest uppercase hover:text-brand transition-colors duration-200"
              >
                Inquire for strategic review
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-brand" />
              </button>
            </div>
          </div>

          {/* Right Block: Interactive tactile accordion rows matching Artistic Flair mock layouts */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {SERVICES_DATA.map((service: ServiceItem, index: number) => {
              const isOpen = activeTab === service.id;
              
              return (
                <div
                  id={`service-row-${service.id}`}
                  key={service.id}
                  className={`group relative rounded-none border transition-all duration-500 ease-in-out cursor-pointer overflow-hidden ${
                    isOpen
                      ? "bg-white border-brand shadow-md"
                      : "bg-white/40 border-black/10 hover:border-black/20 hover:bg-white"
                  }`}
                  onClick={() => setActiveTab(service.id)}
                >
                  {/* Subtle index tag top-right */}
                  <span className="absolute top-6 right-8 font-mono text-xs text-neutral-400 font-bold group-hover:text-brand transition-colors duration-300">
                    0{index + 1}
                  </span>

                  <div className="p-8 sm:p-10">
                    {/* Header line of row */}
                    <div className="flex items-center gap-5">
                      <div
                        className={`w-10 h-10 rounded-none border flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-brand text-white border-brand"
                            : "bg-black/5 text-[#1A1A1A] border-black/5 group-hover:bg-brand/10 group-hover:text-brand"
                        }`}
                      >
                        {getIconComponent(service.id)}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-black text-studio-text uppercase tracking-tight group-hover:text-brand transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    {/* Expandable subcontent */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`service-content-expand-${service.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="mt-8 pt-8 border-t border-black/10">
                            {/* Subtitle tag with brand theme coloring */}
                            <p className="text-brand text-sm sm:text-base font-sans font-semibold mb-4 leading-relaxed">
                              {service.subtitle}
                            </p>
                            
                            {/* Rich description paragraph */}
                            <p className="text-neutral-600 text-xs sm:text-sm font-sans font-light mb-8 leading-relaxed">
                              {service.description}
                            </p>

                            {/* Bullet highlights with bento structure */}
                            <div className="mt-6">
                              <span className="text-[10px] text-neutral-400 font-display uppercase tracking-widest font-bold block mb-4">
                                Strategic Focus Areas
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                {service.highlights.map((highlight: string, hIdx: number) => (
                                  <div
                                    id={`service-${service.id}-highlight-${hIdx}`}
                                    key={highlight}
                                    className="flex items-center gap-3 bg-studio-bg/60 py-2.5 px-4 rounded-none border border-black/5 hover:border-brand/20 hover:bg-white transition-all duration-300"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                                    <span className="text-xs text-neutral-700 tracking-wide font-bold">
                                      {highlight}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Row explicit action link */}
                            <div className="mt-8 pt-6 border-t border-black/5 flex justify-end">
                              <button
                                id={`service-btn-contact-${service.id}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleScrollToContact();
                                }}
                                className="inline-flex items-center gap-2 text-[11px] font-display tracking-widest font-bold uppercase text-neutral-500 hover:text-brand transition-colors duration-200"
                              >
                                Brief us on this service
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
