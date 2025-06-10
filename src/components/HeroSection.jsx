import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = ({ handleSaibaMais }) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-navy-blue-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-blue-dark via-navy-blue-light to-brand-blue-primary opacity-80"></div>
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        opacity: 0.7
      }}></div>
      
      <div className="relative z-10 text-center text-white section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-custom"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
            LFT Gestão de Risco e Planejamento Financeiro
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 mb-2">
            💙 Planeje seu futuro, proteja seu presente
          </p>
          <div className="mt-6 space-y-2 text-lg md:text-xl text-gray-200">
            <p>👨‍👩‍👧‍👦 +1.300 clientes ativos</p>
            <p>🏆 Membro COT M.D.R.T | 6x PTC 🇧🇷 | 1x PIIC 🌎</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10"
          >
            <Button
              onClick={handleSaibaMais}
              className="bg-brand-blue-primary hover:bg-brand-blue-hover text-white px-10 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Saiba mais
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;