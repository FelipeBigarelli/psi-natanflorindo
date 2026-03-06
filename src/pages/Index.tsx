import { useState, useEffect, useCallback } from "react";
import { LayoutGroup } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ConsultasSection from "@/components/ConsultasSection";
import FormacaoSection from "@/components/FormacaoSection";
import ValoresSection from "@/components/ValoresSection";
import ManifestoSection from "@/components/ManifestoSection";
import MissaoSection from "@/components/MissaoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ContactModal from "@/components/ContactModal";

const SECTIONS = ["home", "sobre", "formacao", "consultas", "valores", "manifesto", "missao", "contato"];

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [modalOpen, setModalOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  const handleNavigate = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      const headerHeight = 64;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const updateActive = useCallback(() => {
    const scrollY = window.scrollY + window.innerHeight / 3;
    let current = SECTIONS[0];

    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    }

    // If near bottom of page, force "contato"
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
      current = "contato";
    }

    setActiveSection(current);

    // Float the CTA when scrolled past the hero section
    const heroEl = document.getElementById("home");
    if (heroEl) {
      const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
      setIsFloating(window.scrollY > heroBottom - 200);
    }
  }, []);

  useEffect(() => {
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  return (
    <LayoutGroup>
      <div className="min-h-screen">
        <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
        {isFloating && <FloatingCTA onOpen={() => setModalOpen(true)} />}
        <Header activeSection={activeSection} onNavigate={handleNavigate} />
        <HeroSection isFloating={isFloating} onCtaClick={() => setModalOpen(true)} />
        <AboutSection />
        <FormacaoSection />
        <ConsultasSection />
        <ValoresSection />
        <ManifestoSection />
        <MissaoSection />
        <ContactSection />
        <Footer />
      </div>
    </LayoutGroup>
  );
};

export default Index;
