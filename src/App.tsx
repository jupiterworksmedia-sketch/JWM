import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import WorksSection from "./components/WorksSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="creative-agency-app" className="bg-studio-bg min-h-screen text-studio-text overflow-x-hidden selection:bg-brand selection:text-studio-text font-sans">
      {/* 
        Sticky header navigation
      */}
      <Navbar />

      {/* 
        Landing Area / Introduction Curation Area 
      */}
      <Hero />

      {/* 
        Four Primary Brand Services (Brand Impact, Brand Engagement, Brand Influence, Brand Consulting)
      */}
      <ServicesSection />

      {/* 
        Agency Portfolio Showcase with dynamic modal drawers for results
      */}
      <WorksSection />

      {/* 
        Who we are / Manifesto and credentials statisticians bento grid
      */}
      <AboutSection />

      {/* 
        Custom client testimonials section
      */}
      <TestimonialsSection />

      {/* 
        Contact inquiry form with checklist and custom success cards
      */}
      <ContactSection />

      {/* 
        Bottom footer block with terms
      */}
      <Footer />
    </div>
  );
}

