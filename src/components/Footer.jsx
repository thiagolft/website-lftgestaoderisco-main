import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-blue-dark text-white py-8">
      <div className="container-custom section-padding">
        <div className="text-center">
          <img 
            src="https://i.imgur.com/JgSqFnl.png" 
            alt="LFT Gestão de Risco Logo" 
            className="h-12 w-auto mx-auto mb-4"
          />
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} LFT Gestão de Risco. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;