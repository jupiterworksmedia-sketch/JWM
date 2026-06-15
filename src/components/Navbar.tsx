import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Our Works", href: "#works" },
    { name: "Who We Are", href: "#who-we-are" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact us", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      setIsMobileMenuOpen(false);
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        id="navbar-container"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-studio-bg/90 backdrop-blur-md border-b border-black/10 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-brand group-hover:scale-105 transition-all duration-300">
              <Globe className="w-4 h-4 text-studio-text group-hover:text-brand group-hover:rotate-45 transition-all duration-500" />
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

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                id={`nav-link-${link.name.toLowerCase().replace(" ", "-")}`}
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-neutral-500 hover:text-brand font-display text-xs font-bold tracking-widest uppercase transition-colors duration-300 group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand transition-all duration-350 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Call To Action button */}
          <div className="hidden md:block">
            <a
              id="navbar-cta"
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="px-6 py-2.5 rounded-none border border-black/20 hover:border-brand text-studio-text font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-brand hover:text-studio-text"
            >
              Inquire
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-brand transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-studio-bg z-40 md:hidden flex flex-col justify-between pt-24 pb-12 px-8"
          >
            {/* Background design accents */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.06),transparent_40%)] pointer-events-none" />

            <div className="flex flex-col gap-8 mt-12">
              <span className="text-[10px] text-neutral-400 font-bold tracking-[0.3em] uppercase">
                Navigation
              </span>
              <div className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    id={`mobile-nav-link-${link.name.toLowerCase().replace(" ", "-")}`}
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="text-2xl font-display font-medium text-neutral-600 hover:text-brand"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="h-[1px] bg-black/10" />
              <div className="flex justify-between items-center text-xs text-neutral-400 font-display uppercase tracking-widest">
                <span>Berlin / Global</span>
                <a
                  id="mobile-drawer-cta"
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="px-5 py-2 border border-black/20 rounded-none text-studio-text hover:bg-brand hover:text-studio-text hover:border-brand transition-all duration-300 font-bold"
                >
                  Start Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
