import React, { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Toaster } from '@/components/ui/toaster';
    import { useToast } from '@/components/ui/use-toast';
    import { ShieldCheck, Users, Briefcase, Mail, Phone, MapPin, Building, Instagram, FileText, Home, Info, Briefcase as BriefcaseBusiness, KeyRound as UsersRound, Contact, Menu, X } from 'lucide-react';

    const App = () => {
      const { toast } = useToast();
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);

      const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      };

      const teamMembers = [
        { name: 'Lucas Teixeira', imgSrc: 'https://agenda-com-cliente.vercel.app/assets/img/lucas-img.png', alt: 'Lucas Teixeira, especialista em gestão de risco' },
        { name: 'Vanessa Fernades', imgSrc: 'https://agenda-com-cliente.vercel.app/assets/img/vanessa-img.png', alt: 'Vanessa Fernades, especialista em planejamento financeiro' },
        { name: 'Eduardo Venâncio', imgSrc: 'https://agenda-com-cliente.vercel.app/assets/img/dudu-img.png', alt: 'Eduardo Venâncio, consultor financeiro' },
      ];

      const services = [
        { icon: <ShieldCheck className="w-12 h-12 text-blue-400 mb-4" />, title: 'Planejamento de Proteção Familiar', description: 'Desenvolvemos estratégias para maximizar a proteção da sua família, alinhando planejamento financeiro e seguro de vida resgatável para garantir a tranquilidade no futuro.' },
        { icon: <Briefcase className="w-12 h-12 text-blue-400 mb-4" />, title: 'Consultoria em Seguro de Vida', description: 'Oferecemos consultoria especializada para ajudar você a escolher o melhor seguro de vida, garantindo proteção e crescimento para a sua família.' },
        { icon: <Users className="w-12 h-12 text-blue-400 mb-4" />, title: 'Consultoria em Proteção Familiar', description: 'Criamos soluções financeiras personalizadas para proteger o futuro da sua família, com foco em seguros que oferecem segurança e retorno para os seus entes queridos.' },
        { icon: <FileText className="w-12 h-12 text-blue-400 mb-4" />, title: 'Gestão de Planejamento Financeiro Familiar', description: 'Apoiamos no desenvolvimento de um planejamento financeiro sólido, garantindo que sua família esteja protegida e que seus bens e interesses estejam seguros a longo prazo.' },
        { icon: <ShieldCheck className="w-12 h-12 text-blue-400 mb-4" />, title: 'Seguro de Vida Resgatável', description: 'Oferecemos o seguro de vida resgatável como uma estratégia de crescimento, garantindo que você tenha não só proteção, mas também a possibilidade de resgatar o valor investido ao longo do tempo.' },
        { icon: <BriefcaseBusiness className="w-12 h-12 text-blue-400 mb-4" />, title: 'Gestão de Risco Familiar', description: 'Monitoramos os riscos financeiros da sua família, garantindo a proteção contra imprevistos e a tranquilidade no dia a dia com o melhor seguro de vida resgatável do mercado.' },
      ];

      const contactInfo = [
        { icon: <FileText className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />, label: 'CNPJ', value: '30.754.505/0001-02' },
        { icon: <Building className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />, label: 'Razão Social', value: 'LFT ADMIN CORRET SEGUROS DE VIDA LTDA' },
        { icon: <Mail className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />, label: 'Email', value: 'grupolft@hotmail.com', href: 'mailto:grupolft@hotmail.com' },
        { icon: <Phone className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />, label: 'Telefone', value: '+55 32 9821-1234', href: 'tel:+553298211234' },
        { icon: <Instagram className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />, label: 'Instagram', value: '@lftgestaoderisco', href: 'https://instagram.com/lftgestaoderisco' },
        { icon: <MapPin className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />, label: 'Localização', value: 'R. Vig. Varela, 1012 - Nova Rio Branco, Visc. do Rio Branco - MG, 36520-000' },
      ];

      const navLinks = [
        { id: 'inicio', label: 'Início', icon: <Home className="w-5 h-5 mr-2" /> },
        { id: 'sobre', label: 'Sobre', icon: <Info className="w-5 h-5 mr-2" /> },
        { id: 'servicos', label: 'Serviços', icon: <BriefcaseBusiness className="w-5 h-5 mr-2" /> },
        { id: 'equipe', label: 'Equipe', icon: <UsersRound className="w-5 h-5 mr-2" /> },
        { id: 'contato', label: 'Contato', icon: <Contact className="w-5 h-5 mr-2" /> },
      ];

      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white flex flex-col font-poppins">
          <Toaster />
          <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white bg-opacity-10 backdrop-blur-lg shadow-xl md:bg-opacity-10 md:backdrop-blur-lg' : 'bg-transparent'} ${isMobileMenuOpen ? 'md:bg-white md:bg-opacity-10 md:backdrop-blur-lg bg-blue-900' : ''}`}>
            <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
              <motion.div
                initial={{ opacity:0, x: -20 }}
                animate={{ opacity:1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src="https://i.imgur.com/8L91v1L.png" alt="LFT Gestão de Risco Logo" className="h-10 sm:h-12" />
              </motion.div>
              
              <div className="hidden md:flex space-x-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out group ${isScrolled ? 'text-gray-700 hover:bg-blue-500 hover:text-white' : 'text-white hover:bg-white hover:bg-opacity-20'}`}
                    initial={{ opacity:0, y: -20 }}
                    animate={{ opacity:1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {link.icon}
                    {link.label}
                     <span className={`absolute bottom-0 left-0 w-full h-0.5 ${isScrolled ? 'bg-blue-500' : 'bg-white'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out`}></span>
                  </motion.button>
                ))}
              </div>

              <div className="md:hidden">
                <motion.button
                  onClick={toggleMobileMenu}
                  className={`p-2 rounded-md transition-colors duration-300 ${isScrolled && !isMobileMenuOpen ? 'text-gray-700 hover:bg-gray-200' : 'text-white hover:bg-white hover:bg-opacity-20'}`}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMobileMenuOpen ? <X className="w-7 h-7 text-white" /> : <Menu className={`w-7 h-7 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />}
                </motion.button>
              </div>
            </nav>
            
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="md:hidden bg-blue-900 absolute w-full left-0 top-full shadow-xl"
                >
                  <div className="flex flex-col items-center py-4 space-y-2">
                    {navLinks.map(link => (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="flex items-center w-full justify-center px-4 py-3 text-lg font-medium text-white hover:bg-blue-700 transition-colors duration-300"
                      >
                        {link.icon}
                        {link.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          <main className="flex-grow pt-16 sm:pt-20">
            <section id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 bg-cover bg-center relative" >
              <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
              <img  className="absolute inset-0 w-full h-full object-cover z-[-1]" alt="Fundo abstrato com gráficos financeiros e tecnologia" src="https://images.unsplash.com/photo-1651129521731-6f6ea5ea0caa" />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                <motion.img 
                  src="https://i.imgur.com/8L91v1L.png" 
                  alt="LFT Gestão de Risco Logo Grande" 
                  className="h-28 sm:h-36 md:h-48 mx-auto mb-6 sm:mb-8"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 120, duration: 0.8, delay: 0.4 }}
                />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-shadow-lg">
                  <span className="font-bold">LFT Gestão de Risco e Planejamento Financeiro</span>
                </h1>
                <p className="text-md sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-3xl mx-auto mb-8 sm:mb-10 text-gray-200 text-shadow">
                  Proteja, planeje e conquiste – aqui, sua segurança financeira ganha força e suas escolhas garantem um amanhã mais tranquilo!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => {
                      window.open('https://agenda-com-cliente.vercel.app/', '_blank');
                      toast({ title: "Redirecionando...", description: "Você será levado para a página de agendamento." });
                    }}
                  >
                    Agende uma consulta
                  </Button>
                </motion.div>
              </motion.div>
            </section>

            <section id="sobre" className="py-16 sm:py-20 px-4 sm:px-6 bg-blue-800 bg-opacity-80">
              <div className="container mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-300">Protegendo vidas com excelência</h2>
                  <p className="text-md sm:text-lg mb-4 text-gray-200">
                    A LFT é referência em segurança financeira, garantindo proteção para milhares de famílias. Nossa missão é oferecer soluções que asseguram estabilidade e tranquilidade.
                  </p>
                  <p className="text-md sm:text-lg mb-4 text-gray-200">
                    Em 2023/24, protegemos o maior número de CPFs do Brasil e, em junho, fomos reconhecidos mundialmente, aparecendo no topo da Times Square.
                  </p>
                  <p className="text-md sm:text-lg text-gray-200">
                    Nosso compromisso e excelência nos levaram a conquistar diversas premiações ao redor do mundo, consolidando a LFT como líder no setor de planejamento financeiro e seguro de vida.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="rounded-xl overflow-hidden shadow-2xl"
                >
                  <img src="https://i.imgur.com/wX7lPmG.jpeg" alt="Equipe LFT em evento na Times Square, Nova York" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </div>
            </section>

            <section id="servicos" className="py-16 sm:py-20 px-4 sm:px-6 bg-blue-900">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-300">Nossos Serviços</h2>
                <p className="text-lg sm:text-xl mb-10 sm:mb-12 max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-gray-300">
                  Proteção para quem quer crescer. Na LFT, somos especialistas em garantir segurança financeira e tranquilidade. Oferecemos soluções estratégicas que protegem o seu futuro.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                      className="bg-white bg-opacity-5 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-blue-400/30 transition-all duration-300 flex flex-col items-center transform hover:-translate-y-2 hover:bg-opacity-10"
                    >
                      <motion.div whileHover={{ rotate: 15, scale: 1.1}} transition={{ type: "spring", stiffness: 300 }}>
                        {service.icon}
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-300">{service.title}</h3>
                      <p className="text-gray-300 text-sm text-center">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section id="equipe" className="py-16 sm:py-20 px-4 sm:px-6 bg-blue-800 bg-opacity-80">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-300">Nossa Equipe</h2>
                <p className="text-lg sm:text-xl mb-10 sm:mb-12 max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-gray-200">
                  Nossa equipe é formada por especialistas dedicados e experientes, comprometidos em oferecer a melhor proteção para sua família.
                </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(66, 153, 225, 0.15), 0 10px 10px -5px rgba(66, 153, 225, 0.1)" }}
                      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                      className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-xl shadow-lg flex flex-col items-center hover:bg-opacity-10 transition-all duration-300"
                    >
                      <img src={member.imgSrc} alt={member.alt} className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mb-4 object-cover border-4 border-blue-400 shadow-md" />
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">{member.name}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section id="contato" className="py-16 sm:py-20 px-4 sm:px-6 bg-blue-900">
              <div className="container mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center text-blue-300">Entre em Contato</h2>
                <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-blue-800 p-6 sm:p-8 rounded-xl shadow-xl space-y-5 sm:space-y-6"
                  >
                    {contactInfo.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex-shrink-0 pt-1">{item.icon}</div>
                        <div className="ml-3 sm:ml-4">
                          <p className="font-semibold text-blue-300 text-md sm:text-lg">{item.label}:</p>
                          {item.href ? (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base break-words">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-gray-300 text-sm sm:text-base break-words">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="rounded-xl overflow-hidden shadow-2xl h-80 sm:h-96 md:h-[500px]"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.900980680898!2d-42.8467266!3d-21.0182146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa33dc279f9b6f3%3A0xe20c2ecccb442921!2sLFT%20Gest%C3%A3o%20de%20Risco%20e%20Planejamento%20Financeiro!5e0!3m2!1spt-BR!2sbr!4v1678886543210!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border:0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização da LFT Gestão de Risco e Planejamento Financeiro"
                    ></iframe>
                  </motion.div>
                </div>
              </div>
            </section>
          </main>

          <footer className="bg-blue-950 text-center py-6 sm:py-8">
            <div className="container mx-auto">
              <p className="text-xs sm:text-sm text-gray-400">
                &copy; {new Date().getFullYear()} LFT Gestão de Risco | Planejamento Financeiro. Todos os direitos reservados.
              </p>
            </div>
          </footer>
        </div>
      );
    };

    export default App;