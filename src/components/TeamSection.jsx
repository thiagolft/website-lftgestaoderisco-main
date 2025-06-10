import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Lucas Teixeira",
      role: "Área comercial",
      image: "https://i.imgur.com/PyQ4HJV.png"
    },
    {
      name: "Eduardo Venâncio",
      role: "Área comercial",
      image: "https://i.imgur.com/cmKafzo.png"
    },
    {
      name: "Vanessa Fernandes",
      role: "Área comercial",
      image: "https://i.imgur.com/vlrRYUF.png"
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-navy-blue-dark">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossa Equipe
          </h2>
          <p className="text-lg text-gray-300">
            Profissionais especializados em planejamento financeiro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-brand-blue-primary p-1 bg-navy-blue-light">
                  <img
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="bg-navy-blue-accent p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;