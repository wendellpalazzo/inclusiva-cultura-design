
import { ChartBar } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Os cursos de Libras transformaram a comunicação na minha família. Agora posso conversar com meu filho surdo sem barreiras.",
      author: "Mariana Alves",
      role: "Mãe de aluno",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "Graças ao programa de capacitação profissional, consegui me inserir no mercado de trabalho e conquistar minha independência financeira.",
      author: "Lucas Mendonça",
      role: "Aluno formado",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "O festival de cultura surda ampliou minha visão sobre as possibilidades artísticas e expressivas das pessoas surdas.",
      author: "Fernanda Costa",
      role: "Participante",
      image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const impactStats = [
    { number: "5,000+", label: "Pessoas beneficiadas" },
    { number: "200+", label: "Profissionais formados" },
    { number: "50+", label: "Escolas parceiras" },
    { number: "11+", label: "Anos de atuação" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">Depoimentos e Impacto</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Conheça as histórias de transformação e os resultados do nosso trabalho na vida das pessoas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-earth/5 rounded-xl p-6 relative">
              <div className="absolute top-0 right-0 h-20 w-20 bg-primary/10 rounded-bl-xl"></div>
              <div className="absolute bottom-0 left-0 h-20 w-20 bg-secondary/10 rounded-tr-xl"></div>
              
              <div className="relative z-10">
                <svg className="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <p className="text-dark/80 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-earth">{testimonial.author}</h4>
                    <p className="text-dark/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-earth text-white rounded-xl p-4 lg:p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold mb-4">Nosso Impacto</h3>
              <p className="text-white/80 mb-6">
                Ao longo dos anos, nosso trabalho tem gerado resultados significativos 
                na inclusão e no desenvolvimento da comunidade surda.
              </p>
              <div className="flex items-center gap-3">
                <ChartBar size={30} className="text-secondary" />
                <span className="font-bold">Números que transformam vidas</span>
              </div>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-2 gap-6">
              {impactStats.map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">{stat.number}</div>
                  <div className="text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
