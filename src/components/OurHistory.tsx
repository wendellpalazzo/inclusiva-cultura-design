
import { Calendar } from "lucide-react";

const OurHistory = () => {
  const timelineEvents = [
    {
      year: "2010",
      title: "Fundação",
      description: "Início das atividades com um pequeno grupo de voluntários dedicados à promoção da língua de sinais."
    },
    {
      year: "2013",
      title: "Primeiro Projeto",
      description: "Lançamento do primeiro projeto educacional voltado para crianças surdas em escolas públicas."
    },
    {
      year: "2016",
      title: "Expansão",
      description: "Ampliação das atividades para três estados brasileiros, alcançando mais de 500 beneficiários."
    },
    {
      year: "2019",
      title: "Reconhecimento",
      description: "Premiação nacional por contribuições significativas à inclusão e acessibilidade."
    },
    {
      year: "2022",
      title: "Atualidade",
      description: "Consolidação como referência na promoção da cultura surda, com projetos em diversas áreas."
    }
  ];

  return (
    <section id="history" className="py-20 bg-earth/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">Nossa História</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Uma jornada de dedicação, superação e transformação social através da inclusão e valorização da cultura surda.
          </p>
        </div>

        <div className="relative">
          {/* Timeline central line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
          
          {/* Timeline events */}
          <div className="space-y-12 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Year marker */}
                <div className="md:w-1/2 flex items-center">
                  <div className={`py-4 px-6 ${index % 2 === 0 ? 'md:ml-auto md:text-right' : 'md:mr-auto'} relative`}>
                    <span className="absolute top-1/2 transform -translate-y-1/2 hidden md:block h-3 w-3 rounded-full bg-primary z-10
                      border-4 border-white shadow-lg
                      ${index % 2 === 0 ? 'left-full -translate-x-1/2' : 'right-full translate-x-1/2'}">
                    </span>
                    <div className="bg-secondary text-dark inline-block py-2 px-4 rounded-lg font-bold text-2xl mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-earth">{event.title}</h3>
                  </div>
                </div>
                
                {/* Event info */}
                <div className="md:w-1/2">
                  <div className={`bg-white p-6 rounded-lg shadow-lg relative 
                    ${index % 2 === 0 ? 'md:mr-auto md:ml-6' : 'md:ml-auto md:mr-6'}`}>
                    <p className="text-dark/80">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg">
            <Calendar size={24} />
            <span className="font-semibold">Mais de uma década transformando vidas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
