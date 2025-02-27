
import { BookOpen } from "lucide-react";

const LearningSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Introdução à Libras",
      description: "Primeiros passos na Língua Brasileira de Sinais, com foco em vocabulário básico e expressões cotidianas.",
      color: "bg-primary"
    },
    {
      number: "02",
      title: "Gramática e Estrutura",
      description: "Aprofundamento nos aspectos gramaticais e estruturais da Libras, com prática de diálogos e narrativas.",
      color: "bg-secondary"
    },
    {
      number: "03",
      title: "Cultura Surda",
      description: "Imersão na história, arte e manifestações culturais da comunidade surda brasileira e mundial.",
      color: "bg-earth"
    },
    {
      number: "04",
      title: "Prática Avançada",
      description: "Desenvolvimento de fluência através de conversação, interpretação e produção de conteúdo em Libras.",
      color: "bg-dark"
    }
  ];

  return (
    <section id="learning" className="py-20 bg-earth/5 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">Etapas de Aprendizagem</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Nossa metodologia foi desenvolvida para proporcionar um aprendizado progressivo e eficaz da Língua Brasileira de Sinais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2"
            >
              <div className={`h-4 ${step.color}`}></div>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${step.color} mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-earth mb-3">{step.title}</h3>
                <p className="text-dark/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center">
                <BookOpen size={40} className="text-primary" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-earth mb-3">Metodologia Inovadora</h3>
              <p className="text-dark/80 mb-4">
                Nossa abordagem combina teoria e prática, utilizando recursos visuais, jogos interativos e 
                situações reais para um aprendizado imersivo e significativo.
              </p>
              <a href="#" className="btn-secondary inline-block">
                Conheça Nossos Cursos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSteps;
