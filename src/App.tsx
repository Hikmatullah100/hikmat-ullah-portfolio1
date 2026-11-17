import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Process } from './components/sections/Process';
import { TestimonialsAndStats } from './components/sections/TestimonialsAndStats';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { CvDownloadModal } from './components/modals/CvDownloadModal';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030B1B] text-[#F5F8FF] font-sans relative selection:bg-[#12DDF5]/20 selection:text-[#12DDF5]">
      {/* Top Navbar */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onScrollToProjects={() => scrollToSection('projects')}
          onScrollToContact={() => scrollToSection('contact')}
        />

        <About />

        <Skills />

        <Projects />

        <Process />

        <TestimonialsAndStats />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Download / Request Modal */}
      <CvDownloadModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
