import React from "react";
import { ArrowUp, Globe } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer-element"
      className="bg-studio-bg text-studio-text pt-20 pb-12 border-t border-black/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 flex flex-col gap-16">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16">
          
          {/* Logo brand descriptive column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <a
              id="footer-brand-logo"
              href="#"
              onClick={handleScrollToTop}
              className="flex items-center gap-2 group cursor-pointer w-fit"
            >
              <div className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center group-hover:border-brand transition-all duration-300">
                <Globe className="w-4 h-4 text-neutral-500 group-hover:text-brand" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-sm tracking-[0.25em] text-studio-text uppercase">
                  VERTICES<span className="text-brand">.</span>
                </span>
                <span className="text-[9px] text-neutral-400 font-bold tracking-[0.4em] uppercase">
                  Creative Force
                </span>
              </div>
            </a>
            
            <p className="text-xs sm:text-sm text-neutral-500 font-sans font-light leading-relaxed max-w-xs">
              At Vertices, we forge cinematic visual impact, architectural encounters, and narrative influence to configure unfair corporate gravity.
            </p>
          </div>

          {/* Quick links division */}
          <div className="md:col-span-3">
            <span className="text-[10px] text-neutral-400 font-display font-bold tracking-[0.2em] uppercase block mb-6">
              Core Disciplines
            </span>
            <ul className="flex flex-col gap-3 font-display uppercase tracking-widest text-[9px] font-bold text-neutral-500">
              <li>
                <a href="#services" className="hover:text-brand transition-colors">
                  Brand Impact &mdash; Advertising
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand transition-colors">
                  Brand Engagement &mdash; Experience
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand transition-colors">
                  Brand Influence &mdash; PR
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand transition-colors">
                  Brand Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Location division */}
          <div className="md:col-span-3">
            <span className="text-[10px] text-neutral-400 font-display font-bold tracking-[0.2em] uppercase block mb-6">
              Studio Location
            </span>
            <p className="text-xs text-neutral-600 font-sans font-medium leading-relaxed mb-1">
              Tiergartenstraße 17
            </p>
            <p className="text-xs text-neutral-600 font-sans font-medium leading-relaxed">
              10785 Berlin, Germany
            </p>
            <p className="text-xs text-neutral-400 font-display font-bold uppercase tracking-widest leading-relaxed mt-2">
              UTC +1 / Berlin, Global
            </p>
          </div>

          {/* Top arrow column */}
          <div className="md:col-span-1 flex justify-start md:justify-end items-start">
            <button
              id="footer-back-to-top"
              onClick={handleScrollToTop}
              className="p-3 border border-black/15 hover:border-brand text-neutral-400 hover:text-white hover:bg-brand rounded-none transition-all duration-300 md:-mt-2 hover:-translate-y-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Lower footer grid */}
        <div className="pt-12 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-xs text-neutral-450 font-bold font-sans">
            &copy; {new Date().getFullYear()} Vertices Creative Force AG. All rights reserved.
          </span>
          
          <div className="flex gap-6 font-display text-[9px] tracking-widest text-neutral-400 uppercase font-bold">
            <a href="#" className="hover:text-brand transition-colors">
              Terms &amp; Conditions
            </a>
            <span className="text-black/10">/</span>
            <a href="#" className="hover:text-brand transition-colors">
              Privacy Standard
            </a>
            <span className="text-black/10">/</span>
            <a href="#" className="hover:text-brand transition-colors">
              Legal Curation
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
