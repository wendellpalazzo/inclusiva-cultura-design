import { Send, Users } from "lucide-react";
import { Button } from "./ui/button";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-my-10">
      <div className="container mx-auto px-4">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">
            Quem Somos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Somos uma entidade não governamental apartidária e não religiosa que
            historicamente luta em favor das comunidades surdas do Arquipélago
            Marajoara - PA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-earth/5 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold text-earth mb-3">
                Nossa Missão
              </h3>
              <p className="text-dark/80">
                Promover a inclusão social das pessoas surdas através da difusão
                da Língua Brasileira de Sinais (Libras) e da cultura surda,
                criando oportunidades de desenvolvimento pessoal e profissional.
              </p>
            </div>

             <div className="bg-earth/5 p-6 rounded-lg border-l-4 border-secondary">
              <h3 className="text-xl font-bold text-earth mb-3">Nossa Visão</h3>
              <p className="text-dark/80">
                Ser referência nacional na promoção da acessibilidade e inclusão
                das pessoas surdas, contribuindo para uma sociedade mais justa e
                igualitária.
              </p>
            </div>

            <div className="bg-earth/5 p-6 rounded-lg border-l-4 border-earth">
              <h3 className="text-xl font-bold text-earth mb-3">
                Nossos Valores
              </h3>
              <p className="text-dark/80">
                Inclusão, respeito à diversidade, excelência, inovação,
                cooperação e compromisso social.
              </p>
            </div> 
          </div>

           <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Equipe Mãos de Ouro"
                className="w-full h-auto"
              />
               <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <Users size={60} className="text-white" />
              </div>
            </div>

           
          </div> 
        </div>

        <div className="my-20">
          <h3 className="text-2xl font-bold text-earth text-center mb-10">
            Nossa Equipe
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Ana Silva",
                role: "Diretora Executiva",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Carlos Mendes",
                role: "Coordenador Pedagógico",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Mariana Santos",
                role: "Especialista em Libras",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Pedro Oliveira",
                role: "Gestor de Projetos",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-earth">
                    {member.name}
                  </h4>
                  <p className="text-dark/70">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-earth text-white rounded-xl p-8 md:p-10">
          <div className="flex flex-col items-center gap-3">
            <p className="text-white/80 text-3xl">
              Precisando de um serviço de tradução ou interpretação?
            </p>
            <div>
              <Button className="p-10 text-2xl">
                <Send size={48} />
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
