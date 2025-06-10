
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqItem = ({ question, answer, isLongQuestion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayQuestion = isLongQuestion && windowWidth < 768 
    ? `${question.substring(0, 25)}...` 
    : question;

  return (
    <motion.div 
      layout 
      className="border-b border-navy-blue-accent py-6"
      initial={{ borderRadius: 8 }}
    >
      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left text-lg font-medium text-white hover:text-brand-blue-primary transition-colors"
      >
        <span className="pr-2">{displayQuestion}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-brand-blue-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-gray-300 leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqSection = () => {
  const faqData = [
    {
      question: "Por que ter um seguro de vida?",
      answer: (
        <>
          <p>Não podemos impedir que imprevistos ocorram, mas, com o seguro de vida, podemos fazer com que eles tenham impactos menores na sua vida e na de quem você ama.</p>
          <p className="mt-2">A solução personalizada da Prudential do Brasil é diferente de outros recursos de proteção financeira. Nós fazemos uma análise detalhada das suas necessidades e da sua família. Antes de indicar o melhor seguro, buscamos entender qual é o seu estilo de vida, como você se planeja e quem são as pessoas mais importantes para você.</p>
          <p className="mt-2">Com um seguro de vida baseado nas reais necessidades da família, você consegue suprir a perda financeira diante de qualquer imprevisto. Além das coberturas para uma ausência inesperada, oferecemos opções para serem utilizadas em vida.</p>
        </>
      ),
      isLongQuestion: false
    },
    {
      question: "Por que comprar um seguro com a LFT?",
      answer: "Na LFT, oferecemos um atendimento personalizado com corretores especializados que criam planos de seguro sob medida para suas necessidades. Nosso compromisso é com a sua tranquilidade financeira, garantindo acompanhamento permanente e as melhores soluções do mercado.",
      isLongQuestion: false
    },
    {
      question: "Contratei o meu seguro de vida. E agora?",
      answer: "Parabéns pela sua decisão! Agora, você pode ficar tranquilo sabendo que sua família está protegida. Guarde sua apólice em local seguro e revise-a periodicamente. Nossa equipe estará sempre à disposição para qualquer dúvida ou ajuste necessário no seu plano.",
      isLongQuestion: false
    },
    {
      question: "Como funciona o Fully?",
      answer: "Fully da Prudential é uma plataforma de bem-estar que recompensa a atividade física e incentiva o cuidado com a saúde física, mental e financeira. É uma iniciativa da Prudential que visa estimular um estilo de vida mais saudável, oferecendo benefícios e recompensas para quem cumpre metas semanais de atividade física e cuida do bem-estar. ",
      isLongQuestion: false
    },
    {
      question: "O que é o Teladoc Health?",
      answer: "Teladoc Health é um benefício adicional que oferece acesso a serviços de telemedicina, permitindo consultas médicas online com especialistas de diversas áreas. É uma forma conveniente e moderna de cuidar da sua saúde e bem-estar, sem sair de casa.",
      isLongQuestion: false
    },
    {
      question: "Os valores das assistências financeiras solicitadas são passíveis de tributação pelo Imposto de Renda?",
      answer: "Em geral, os valores recebidos a título de indenização de seguro de vida não são tributáveis pelo Imposto de Renda. No entanto, recomendamos sempre consultar um profissional de contabilidade para analisar seu caso específico, pois a legislação pode variar.",
      isLongQuestion: true
    },
    {
      question: "Sobre os valores recebidos a título de benefício por morte, há incidência de Imposto de Renda?",
      answer: "Não, os valores recebidos pelos beneficiários em caso de falecimento do segurado (benefício por morte) são isentos de Imposto de Renda, conforme a legislação vigente. Também não entram em inventário e não estão sujeitos ao ITCMD (Imposto sobre Transmissão Causa Mortis e Doação).",
      isLongQuestion: true
    },
    {
      question: "O que acontece em casos de mudanças na legislação tributária que resultem em alteração dos encargos incidentes?",
      answer: "A LFT e seus parceiros acompanham de perto todas as mudanças na legislação tributária. Caso ocorram alterações que impactem os encargos incidentes sobre os seguros, nossos clientes serão devidamente informados e orientados sobre as implicações e possíveis ajustes.",
      isLongQuestion: true
    }
  ];

  return (
    <section id="faq" className="py-20 bg-navy-blue-light">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-300">
            Tire suas dúvidas sobre nossos seguros e serviços.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto bg-navy-blue-accent p-4 sm:p-8 rounded-xl shadow-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} isLongQuestion={item.isLongQuestion} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
