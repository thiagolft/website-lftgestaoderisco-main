import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FaqSection from '@/components/FaqSection';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSaibaMais = () => {
    window.open('https://agenda-com-cliente.vercel.app/', '_blank');
  };

  return (
    <div className="min-h-screen bg-navy-blue-dark text-gray-100">
      <Toaster />
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection handleSaibaMais={handleSaibaMais} />
      <AboutSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;