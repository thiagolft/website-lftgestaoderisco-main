import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Shield, Heart, Star } from 'lucide-react';

const AboutSection = () => {
  const whyLftItems = [
    {
      icon: <Users className="w-8 h-8 text-brand-blue-primary" />,
      title: "Atendimento personalizado",
      description: "Corretores especializados em planos personalizados de seguro e acompanhamento permanente."
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-blue-primary" />,
      title: "Pagamento nivelado",
      description: "O pagamento não aumenta com a idade durante o período de vigência."
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-blue-primary" />,
      title: "Seguros sob medida",
      description: "Para cada cliente, uma solução de proteção baseada em suas necessidades."
    },
    {
      icon: <Star className="w-8 h-8 text-brand-blue-primary" />,
      title: "Maior suporte ao cliente",
      description: "Temos uma equipe altamente qualificada para te atender e tirar todas as suas dúvidas."
    }
  ];

  const benefits = [
    "Oferece segurança financeira e qualidade de vida aos beneficiários, protegendo-os contra imprevistos em situações de ausência, doenças graves, acidentes e invalidez;",
    "As coberturas customizáveis resultam no melhor seguro de vida para cada pessoa;",
    "Mediante avaliação técnica e atenção às normas legais, a seleção de beneficiários permite incluir pessoas externas à família, bem como alterar essa disposição no contrato de serviço;",
    "Por não ser considerado como Herança, a liberação do seguro de vida ocorre de maneira muito mais rápida e não requer pagamento do Imposto sobre Transmissão Causa Mortis (ITCMD)."
  ];

  const insuranceTypes = [
    "Seguro de vida individual",
    "Seguro de vida em grupos",
    "Proteção em vida",
    "Fully",
    "Seguro de vida empresarial",
    "Teladoc Health"
  ];

  return (
    <section id="sobre" className="py-20 bg-navy-blue-light">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sobre a LFT
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              A LFT é referência em segurança financeira, garantindo proteção para milhares de famílias. 
              Nossa missão é oferecer soluções que asseguram estabilidade e tranquilidade. Nosso compromisso 
              e excelência nos levaram a conquistar diversas premiações ao redor do mundo, consolidando a LFT 
              como líder no setor de planejamento financeiro e seguro de vida.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img 
              src="https://i.imgur.com/wX7lPmG.jpeg" 
              alt="Família protegida com seguro de vida LFT"
              className="rounded-2xl shadow-2xl max-w-full h-auto border-4 border-navy-blue-accent"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Por quê a LFT?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyLftItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy-blue-accent p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-navy-blue-dark rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Depoimentos de Clientes
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="youtube-container shadow-2xl border-4 border-navy-blue-accent">
              <iframe
                src="https://www.youtube.com/embed/nlZn2pYB8w4"
                title="Depoimentos de Clientes LFT"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Quais são os benefícios de ter um seguro de vida?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-navy-blue-accent rounded-lg shadow-lg"
              >
                <CheckCircle className="w-6 h-6 text-brand-blue-primary flex-shrink-0 mt-1" />
                <p className="text-gray-300 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Nossos Seguros
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {insuranceTypes.map((insurance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy-blue-accent p-4 rounded-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-medium text-sm">{insurance}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;