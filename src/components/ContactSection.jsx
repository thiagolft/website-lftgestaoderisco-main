import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Building, FileText, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactItems = [
    {
      icon: <Building className="w-6 h-6 text-brand-blue-primary" />,
      title: "CNPJ",
      content: "30.754.505/0001-02"
    },
    {
      icon: <FileText className="w-6 h-6 text-brand-blue-primary" />,
      title: "Razão Social",
      content: "LFT ADMIN CORRET SEGUROS DE VIDA LTDA"
    },
    {
      icon: <Mail className="w-6 h-6 text-brand-blue-primary" />,
      title: "Email",
      content: "grupolft@hotmail.com"
    },
    {
      icon: <Instagram className="w-6 h-6 text-brand-blue-primary" />,
      title: "Instagram",
      content: "@lftgestaoderisco"
    },
    {
      icon: <Phone className="w-6 h-6 text-brand-blue-primary" />,
      title: "Telefone",
      content: "+55 32 9821-1234"
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-blue-primary" />,
      title: "Endereço",
      content: "R. Vig. Varela, 1012 - Nova Rio Branco - VRB (MG)"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-navy-blue-dark">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contato
          </h2>
          <p className="text-lg text-gray-300">
            Entre em contato conosco para mais informações
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactItems.map((contact, index) => (
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
                  {contact.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-300 text-sm break-words">
                {contact.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Nossa Localização
          </h3>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl border-4 border-navy-blue-accent">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.609806070197!2d-43.14693768809994!3d-21.87330097990992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9f50e0f0a0b0c1%3A0x0!2sX5J3%2BP8%20Visc.%20do%20Rio%20Branco%2C%20Minas%20Gerais!5e0!3m2!1spt-BR!2sbr!4v1717980000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border:0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da LFT Gestão de Risco"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;