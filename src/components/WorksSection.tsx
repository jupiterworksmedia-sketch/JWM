import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WORKS_DATA, WorkItem } from "../types";
import { X, Calendar, User, Eye, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function WorksSection() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Works" },
    { key: "Brand Impact – Advertising", label: "Advertising" },
    { key: "Brand Engagement – Experience", label: "Experience" },
    { key: "Brand Influence – Public Relations", label: "Public Relations" },
    { key: "Brand Consulting", label: "Consulting" },
  ];

  const filteredWorks = activeFilter === "all"
    ? WORKS_DATA
    : WORKS_DATA.filter((w) => w.category === activeFilter);

  return (
    <section
      id="works"
      className="bg-studio-bg text-studio-text py-24 sm:py-32 relative overflow-hidden border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-15">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1.5px] bg-brand" />
              <span className="text-[10px] sm:text-[11px] font-display uppercase tracking-[0.4em] font-bold text-brand">
                PORTFOLIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tighter text-studio-text leading-none uppercase">
              OUR <span className="text-brand font-light italic font-serif lowercase">works.</span>
            </h2>
          </div>

          {/* Categories Navigation with filter tabs */}
          <div className="flex flex-wrap gap-2.5 max-w-xl">
            {categories.map((cat) => (
              <button
                id={`work-filter-btn-${cat.key.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-5 py-2.5 rounded-none font-display text-[10px] sm:text-xs tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === cat.key
                    ? "bg-brand text-studio-text font-bold"
                    : "bg-white text-neutral-600 border border-black/15 hover:text-brand hover:border-brand"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Visual Grid with blocky cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredWorks.map((work: WorkItem) => (
            <motion.div
              id={`work-card-${work.id}`}
              key={work.id}
              layoutId={`card-container-${work.id}`}
              onClick={() => setSelectedWork(work)}
              className="group cursor-pointer flex flex-col gap-5 border border-black/10 rounded-none p-4 bg-white/75 hover:bg-white hover:border-brand hover:shadow-md transition-all duration-500"
            >
              <div className="overflow-hidden rounded-none aspect-[4/3] relative bg-neutral-200">
                {/* Visual content */}
                <img
                  id={`work-image-${work.id}`}
                  src={work.imageUrl}
                  alt={work.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                />
                
                {/* Clean minimalist overlay */}
                <div className="absolute inset-0 bg-brand/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-brand text-studio-text rounded-none flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Corner Category Tag */}
                <span className="absolute top-4 left-4 bg-brand text-studio-text px-3.5 py-1.5 rounded-none font-display text-[9px] font-bold tracking-widest uppercase">
                  {work.category.split("–")[1]?.trim() || work.category}
                </span>
              </div>

              {/* Text Description Block */}
              <div className="px-2 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-neutral-400 font-display tracking-widest uppercase font-bold block mb-1">
                      {work.client} — {work.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-black text-studio-text uppercase tracking-tight group-hover:text-brand transition-colors">
                      {work.title}
                    </h3>
                  </div>
                  <div className="p-2 border border-black/10 rounded-none text-neutral-400 group-hover:bg-brand group-hover:text-studio-text group-hover:border-brand transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="mt-3 text-neutral-600 font-sans font-light text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {work.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional No items message */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-24 border border-dashed border-black/20 rounded-none bg-white/40">
            <p className="text-neutral-500 font-sans text-sm font-light">
              No matching showcases found for this creative division.
            </p>
          </div>
        )}
      </div>

      {/* Case Study Detail Dialog Modal overlay adjusted with Artistic Flair styling */}
      <AnimatePresence>
        {selectedWork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10">
            {/* Backdrop */}
            <motion.div
              id="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWork(null)}
              className="absolute inset-0 bg-[#1A1A1A] backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              id={`modal-content-${selectedWork.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-studio-bg border border-black/10 rounded-none overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* Sticky Top Bar */}
              <div className="flex items-center justify-between p-6 border-b border-black/10 bg-white sticky top-0 z-20">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-brand rounded-full animate-pulse" />
                  <span className="text-[10px] text-neutral-500 font-display font-bold tracking-widest uppercase">
                    Case Study Showcase
                  </span>
                </div>
                <button
                  id="close-modal-btn"
                  onClick={() => setSelectedWork(null)}
                  className="p-2 border border-black/10 hover:border-brand text-neutral-400 hover:text-brand rounded-none transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="overflow-y-auto flex-1 p-6 sm:p-10 select-none">
                {/* Horizontal split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  
                  {/* Left: Metadata Details & Visual */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="overflow-hidden rounded-none border border-black/10 bg-white">
                      <img
                        id="modal-case-image"
                        src={selectedWork.imageUrl}
                        alt={selectedWork.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    {/* Metadata Card Info */}
                    <div className="bg-white p-5 rounded-none border border-black/10 flex flex-col gap-4">
                      <div className="flex items-center gap-3.5 text-xs text-neutral-600">
                        <User className="w-4 h-4 text-brand" />
                        <span className="font-display tracking-[0.05em] font-bold text-neutral-400">Client:</span>
                        <span className="font-bold text-studio-text text-right flex-1">{selectedWork.client}</span>
                      </div>
                      
                      <div className="h-[1px] bg-black/10" />

                      <div className="flex items-center gap-3.5 text-xs text-neutral-600">
                        <Calendar className="w-4 h-4 text-brand" />
                        <span className="font-display tracking-[0.05em] font-bold text-neutral-400">Timeline:</span>
                        <span className="font-bold text-studio-text text-right flex-1">{selectedWork.year}</span>
                      </div>

                      <div className="h-[1px] bg-black/10" />

                      <div className="flex items-center gap-3.5 text-xs text-neutral-600">
                        <span className="w-4" />
                        <span className="font-display tracking-[0.05em] font-bold text-neutral-400">Division:</span>
                        <span className="font-bold text-brand text-right flex-1 text-[11px] uppercase tracking-wider">
                          {selectedWork.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Narrative / Deliverables */}
                  <div className="lg:col-span-7 flex flex-col gap-8">
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-display font-black text-studio-text tracking-tighter uppercase">
                        {selectedWork.title}
                      </h3>
                      <p className="text-brand text-sm italic font-serif font-light mt-1.5">
                        &ldquo;{selectedWork.subtitle}&rdquo;
                      </p>
                    </div>

                    <div className="h-[1px] bg-black/15" />

                    {/* Summary */}
                    <div>
                      <h4 className="text-[10px] text-neutral-400 font-display tracking-[0.25em] font-bold uppercase mb-3">
                        The Project Curation
                      </h4>
                      <p className="text-neutral-600 text-sm sm:text-base font-sans font-light leading-relaxed">
                        {selectedWork.summary}
                      </p>
                    </div>

                    {/* Challenge */}
                    <div>
                      <h4 className="text-[10px] text-neutral-400 font-display tracking-[0.25em] font-bold uppercase mb-3">
                        Creative Obstacle
                      </h4>
                      <p className="text-neutral-500 text-xs sm:text-sm font-sans font-light leading-relaxed">
                        {selectedWork.challenges}
                      </p>
                    </div>

                    {/* Key Results list */}
                    <div>
                      <h4 className="text-[10px] text-neutral-400 font-display tracking-[0.25em] font-bold uppercase mb-4">
                        Measurable Impact
                      </h4>
                      <div className="flex flex-col gap-3">
                        {selectedWork.results.map((res: string, idx: number) => (
                          <div
                            id={`case-result-item-${idx}`}
                            key={idx}
                            className="flex items-start gap-4 p-4 rounded-none bg-white border border-black/10 shadow-sm"
                          >
                            <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-neutral-700 font-bold leading-relaxed">
                              {res}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Sticky bottom CTA close */}
              <div className="p-6 bg-white border-t border-black/10 flex justify-end gap-4">
                <button
                  id="modal-footer-close"
                  onClick={() => setSelectedWork(null)}
                  className="px-6 py-2.5 rounded-none border border-black/20 hover:border-brand text-xs font-display font-bold tracking-widest uppercase text-neutral-500 hover:text-brand transition-colors"
                >
                  Close Showcase
                </button>
                <a
                  id="modal-footer-inquire"
                  href="#contact"
                  onClick={() => {
                    setSelectedWork(null);
                    const target = document.querySelector("#contact");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="px-6 py-2.5 rounded-none bg-brand text-studio-text hover:bg-brand-hover text-xs font-display font-bold tracking-widest uppercase transition-colors"
                >
                  Configure Partnership
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
