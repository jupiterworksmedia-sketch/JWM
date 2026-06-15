import { motion } from "motion/react";
import { ABOUT_US_MANIFESTO, STATS, StatItem } from "../types";
import { Award, Compass, Shield } from "lucide-react";

export default function AboutSection() {
  const coreValues = [
    {
      title: "Tactile Perfection",
      desc: "Whether physical letterpress or modern sub-pixel animations, every element is curated down to a single millimeter.",
      icon: <Award className="w-5 h-5 text-brand group-hover:text-white" />
    },
    {
      title: "Subcultural Integrity",
      desc: "We look outward, tracking niche movements, raw materials, and typography movements before they hit the massive mainstream.",
      icon: <Compass className="w-5 h-5 text-brand group-hover:text-white" />
    },
    {
      title: "Radical Transparency",
      desc: "No fluff, no marketing jargon. We sit around the design table directly with founders to address structural commercial truths.",
      icon: <Shield className="w-5 h-5 text-brand group-hover:text-white" />
    }
  ];

  return (
    <section
      id="who-we-are"
      className="bg-studio-bg border-t border-black/10 text-studio-text py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header section split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1.5px] bg-brand" />
              <span className="text-[10px] sm:text-[11px] font-display uppercase tracking-[0.4em] font-bold text-brand">
                WHO WE ARE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black leading-[1.05] tracking-tighter uppercase">
              DESIGNERS, STRATEGISTS, <br />
              <span className="text-brand font-light italic font-serif lowercase">and purists.</span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xl sm:text-2xl font-serif italic text-brand leading-relaxed">
              &ldquo;{ABOUT_US_MANIFESTO.quote}&rdquo;
            </p>
            <p className="mt-6 text-neutral-600 font-sans font-light text-sm sm:text-base leading-relaxed">
              {ABOUT_US_MANIFESTO.lead}
            </p>
            <p className="mt-4 text-neutral-500 font-sans font-light text-sm sm:text-base leading-relaxed">
              {ABOUT_US_MANIFESTO.philosophy}
            </p>
          </div>
        </div>

        {/* Stats Grid with blocky sharp cards */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat: StatItem, idx: number) => (
            <div
              id={`stat-card-${idx}`}
              key={idx}
              className="bg-white p-8 rounded-none border border-black/10 flex flex-col justify-between aspect-square group hover:border-brand hover:shadow-sm transition-all duration-300"
            >
              <div>
                <span className="text-[10px] text-neutral-400 font-display font-bold uppercase tracking-widest block mb-1">
                  REF / #0{idx + 1}
                </span>
                <span className="text-[10px] text-brand font-display font-bold uppercase tracking-wider block">
                  {stat.label}
                </span>
              </div>
              <span className="text-4xl sm:text-5xl lg:text-5xl font-display font-black text-studio-text tracking-tight block mt-4 group-hover:text-brand group-hover:scale-[1.03] origin-left transition-all duration-500">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Division values / Brand Pillars */}
        <div className="mt-24 pt-16 border-t border-black/10 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {coreValues.map((value, idx) => (
            <div
              id={`value-box-${idx}`}
              key={idx}
              className="flex flex-col gap-4 p-6 sm:p-8 rounded-none bg-white/70 border border-black/10 hover:bg-white hover:border-brand hover:shadow-sm transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-none bg-black/5 flex items-center justify-center border border-black/5 group-hover:bg-brand group-hover:border-brand transition-all duration-500">
                {value.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-display font-black uppercase tracking-tight text-studio-text">
                {value.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans font-light leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
