import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'equipe', 'faq', 'contato'];
      const scrollPosition = window.scrollY + 100;

      setIsScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'equipe', label: 'Nossa Equipe' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contato', label: 'Contato' }
  ];

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isMenuOpen ? 'bg-navy-blue-dark shadow-lg' : 'bg-white shadow-lg') : 'bg-transparent'}`}>
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/JgSqFnl.png" 
              alt="LFT Gestão de Risco Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-brand-blue-primary'
                      : isScrolled ? 'text-gray-700 hover:text-brand-blue-primary' : 'text-white hover:text-blue-300'
                  } ${activeSection === item.id && isScrolled && !isMenuOpen ? 'bg-blue-100' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? (isMenuOpen ? 'text-white' : 'text-brand-blue-primary') : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden ${isScrolled ? 'bg-navy-blue-dark' : 'bg-navy-blue-dark bg-opacity-90 backdrop-blur-sm'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-brand-blue-primary bg-navy-blue-light'
                    : 'text-white hover:text-blue-300 hover:bg-navy-blue-light'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;