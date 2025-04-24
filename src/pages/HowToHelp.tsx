import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import SectionTitle from "@/components/SectionTitle";
import { Partners } from "@/components/Partners";

const HowToHelp = () => {
  const helpOptions = [
    {
      title: "Doe",
      description:
        "Sua contribuição financeira ajuda a manter e expandir nossos projetos de inclusão.",
      icon: <Heart size={40} className="text-primary" />,
      link: "/como-ajudar/doe",
    },
    {
      title: "Voluntarie-se",
      description:
        "Compartilhe seu tempo e habilidades como voluntário em nossas atividades e eventos.",
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      ),
      link: "/como-ajudar/voluntarie-se",
    },
    {
      title: "Parcerias",
      description:
        "Sua empresa pode apoiar nossa causa através de patrocínios e parcerias institucionais.",
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
        </svg>
      ),
      link: "/como-ajudar/parcerias",
    },
  ];

  const bgURL =
    // window.screen.width > 768
      // ?
       `url('/assets/images/bg-como-ajudar.jpg')`
      // : "";

  return (
    <section id="como-ajudar" className="pt-20">
      <div className="py-20 bg-dark text-white relative overflow-hidden">
        {/* Background pattern */}
        <div
          style={{
            backgroundImage: `${bgURL}`,
          }}
          className={`absolute inset-0 bg-cover bg-center opacity-20`}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <SectionTitle
              title="Como Ajudar"
              subtitle="Junte-se a nós nessa missão de transformar vidas através da
              inclusão e valorização da cultura surda."
              light
              centered
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {helpOptions.map((option, index) => (
              <div
                key={index}
                className="glass rounded-xl p-8 text-center transform transition-transform hover:-translate-y-2"
              >
                <div className="mb-6 flex justify-center">{option.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <p className="text-white/80 mb-6">{option.description}</p>
                {option.link.startsWith("#") ? (
                  <a
                    href={option.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    Saiba mais <ArrowRight size={16} className="ml-2" />
                  </a>
                ) : (
                  <Link
                    to={option.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    Saiba mais <ArrowRight size={16} className="ml-2" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div
            id="donate"
            className="mt-20 bg-white/10 rounded-xl p-8 md:p-10 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Faça uma Doação</h3>
                <p className="text-white/80 mb-6">
                  Sua contribuição é fundamental para mantermos nossos projetos
                  e alcançarmos mais pessoas. Toda doação, independente do
                  valor, faz diferença.
                </p>
                <div className="space-y-4">
                  <Link
                    to="/como-ajudar/doe"
                    className="btn-primary flex items-center justify-center w-full"
                  >
                    Doe Agora <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 bg-white/5 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-4">
                  Outras Formas de Ajudar
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white/90">
                      Compartilhe nosso trabalho nas redes sociais
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white/90">
                      Participe dos nossos eventos e atividades
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white/90">
                      Aprenda Libras e ajude a difundir essa língua
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white/90">
                      Indique nossos serviços para pessoas interessadas
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Partners />
      </div>
    </section>
  );
};

export default HowToHelp;
