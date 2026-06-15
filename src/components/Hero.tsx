import { motion } from "motion/react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { HERO_IMAGE_URL } from "../types";

export default function Hero() {
  const handleScrollToSection = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen bg-studio-bg flex items-center justify-center overflow-hidden pt-16 border-b border-black/10"
    >
      {/* Immersive background image with subtle zoom enter & brand mix-blend */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.25 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            id="hero-bg-image"
            src={HERO_IMAGE_URL}
            alt="Vertices Agency Abstract Sculpture Visual"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Artistic mix blend and light vignettes */}
        <div className="absolute inset-0 bg-brand/5 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-studio-bg/60 to-studio-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#F5F5F5_100%)] opacity-90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full pt-16 pb-12 sm:pb-20">
        <div className="max-w-4xl">
          {/* Subtle live pill tag */}
          <motion.div
            id="hero-pill-tag"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-white border border-black/10 shadow-sm mb-8 animate-fade-in"
          >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] font-display uppercase tracking-[0.3em] font-bold text-neutral-600">
              Modern Brand Curators
            </span>
          </motion.div>

          {/* Hero Main Heading with intense blue accents and sharp punctuation */}
          <motion.h1
            id="hero-main-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-7xl lg:text-8xl font-display font-black text-studio-text tracking-tighter leading-[0.95] uppercase"
          >
            BUILDING <br />
            <span className="text-brand">
              ENDURING
            </span> <br />
            CULTURAL GRAVITY<span className="text-brand">.</span>
          </motion.h1>

          {/* Hero Subtitle Description */}
          <motion.p
            id="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-neutral-600 text-lg sm:text-xl font-sans font-light max-w-xl leading-relaxed"
          >
            We align luxury design and advanced storytelling to secure unfair attention. Four disciplines, one unified obsession.
          </motion.p>

          {/* Action buttons with sharp corners as per the Artistic Flair theme */}
          <motion.div
            id="hero-buttons-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-5 items-center"
          >
            <button
              id="hero-btn-explore"
              onClick={() => handleScrollToSection("#services")}
              className="group px-8 py-4 rounded-none bg-brand text-studio-text font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-3 hover:bg-brand-hover hover:-translate-y-1 active:translate-y-0"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            <button
              id="hero-btn-works"
              onClick={() => handleScrollToSection("#works")}
              className="group px-8 py-4 rounded-none border border-black/20 hover:border-brand text-studio-text font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-3 hover:bg-black/5 hover:-translate-y-1 active:translate-y-0"
            >
              View Our Works
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic grid elements for spacing rhythm */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 border-l border-black/10 hidden lg:block pointer-events-none">
        <div className="h-full w-full flex flex-col justify-between p-12">
          <div className="flex justify-between text-neutral-400 text-xs font-mono font-bold">
            <span>[ COORDINATES: 52° 31&apos; N ]</span>
            <span>BERLIN STUDIO</span>
          </div>
          <div className="border-t border-black/10 pt-6">
            <span className="text-[10px] text-neutral-400 font-mono tracking-widest block font-bold mb-2">MANIFESTO REF #01</span>
            <p className="text-neutral-500 text-xs font-sans font-light leading-relaxed">
              &quot;In an age of dynamic attention spans, true visual craft acts as the anchor.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Micro Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer" onClick={() => handleScrollToSection("#services")}>
        <span className="text-[9px] text-neutral-400 font-bold tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1.5px] h-10 bg-neutral-300 relative rounded-full overflow-hidden">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 right-0 h-4 bg-brand rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
