import { Send, Users } from "lucide-react";
import { Button } from "./ui/button";
import { ZapButton } from "./ZapButton";

const equipe = [
  {
    name: "Fabrício Martins Balieiro",
    role: "Presidente",
    image: "/assets/images/fabricio-martins-balieiro.jpeg",
  },
  {
    name: "Bernarda Santana Dias",
    role: "Vice-Presidente",
    image: "/assets/images/bernarda-santana-dias.jpeg",
  },
  {
    name: "Luiz Antônio Amaral Balieiro",
    role: "1 Tesoureiro",
    image: "/assets/images/luiz-antonio-amaral-balieiro.jpeg",
  },
  {
    name: "Ranna Bitencoute",
    role: "2 Tesoureira",
    image: "/assets/images/ranna-bitencoute.jpeg",
  },
  {
    name: "Claudete Pacheco",
    role: "Conselho Fiscal",
    image: "/assets/images/claudete-pacheco.jpeg",
  },
  {
    name: "Neucilene Fonseca",
    role: "Conselho Fiscal",
    image: "/assets/images/neucilene-fonseca.jpeg",
  },
  {
    name: "Railene Martins",
    role: "2 Secretária",
    image: "/assets/images/railene-martins.jpeg",
  },
  {
    name: "Jenny Rodrigues",
    role: "Conselheira Fiscal/Suplente",
    image: "/assets/images/jenny-rodrigues.jpeg",
  },
];

const AboutUs = () => {
  return (
    <section id="quem-somos" className="pt-20 bg-white scroll-my-10">
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
            <div className="bg-earth/5 p-6 rounded-lg border-l-4 border border-primary">
              <h3 className="text-xl font-bold text-earth mb-3">
                Nossa Missão
              </h3>
              <p className="text-dark/80">
                Promover e articular na mesorregiao marajoara ações de defesa de
                direitos, prevenção, orientações, prestação de serviços, apoio à
                pessoas surdas, com deficiência auditiva, surdas-cegas ou com
                outras deficiências direcionadas à melhoria da qualidade de vida
                e à construção de uma sociedade justa e solidária. Bem como,
                também atingir pessoas sem deficiência em situação de
                vulnerabilidade social.
              </p>
            </div>

            <div className="bg-earth/5 p-6 rounded-lg border-l-4 border border-secondary">
              <h3 className="text-xl font-bold text-earth mb-3">Nossa Visão</h3>
              <p className="text-dark/80">
                Ser referência nacional na promoção da acessibilidade e inclusão
                das pessoas surdas, contribuindo para uma sociedade mais justa e
                igualitária.
              </p>
            </div>

            <div className="bg-earth/5 p-6 rounded-lg border-l-4 border border-earth">
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
                loading="lazy"
                src="/assets/images/instituto-maos-de-ouro-quem-somos-visao-missao-valor.png"
                alt="Equipe Mãos de Ouro"
                className="object-contain w-full"
              />
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                &nbsp;
              </div>
            </div>
          </div>
        </div>

        <div className="my-20">
          <h3 className="text-2xl font-bold text-earth text-center mb-10">
            Nossa Equipe
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipe.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <img
                  loading="lazy"
                  src={member.image}
                  alt={member.name}
                  className="w-full p-4"
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
      </div>
      <div className="bg-earth text-white p-5 lg:p-20 flex lg:flex-row justify-evenly items-center flex-col space-y-10 lg:space-y-0">
        <div className="space-y-3 lg:w-1/2">
          <h2 className="text-white text-3xl font-opensans">
            Precisando de um serviço de tradução ou interpretação?
          </h2>
          <p className="text-white/80">
            Contamos com uma equipe altamente preparada e profissional para lhe
            atender.
          </p>
        </div>

        <ZapButton
          iconClass="!size-8"
          showText="Fale Conosco"
          text="Olá! Gostaria de mais informações sobre o serviço de tradução e/ou interpretação oferecido pelo Instituto Mãos de Ouro, poderia me ajudar?"
          phone={import.meta.env.VITE_CONTACT_ZAP}
          className="hover:bg-primary/65 rounded-xl text-white w-full md:w-1/4 text-center p-4 bg-primary/60 text-sm mt-2 inline-block"
        />
      </div>
    </section>
  );
};

export default AboutUs;
