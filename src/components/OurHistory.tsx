import { Calendar, Check } from "lucide-react";

const OurHistory = () => {
  const timelineEvents = [
    {
      year: "2011",
      title: "Fundação do Instituto",
      description:
        "O Instituto Mãos de Ouro é fundado por Fabrício Martins Balieiro, com a missão de promover a inclusão e acessibilidade da comunidade surda. Desde o início, o Instituto se comprometeu a oferecer oportunidades de aprendizado, capacitação e desenvolvimento social por meio do ensino de LIBRAS e da luta pelos direitos das pessoas surdas em Breves/PA na ilha do Marajó",
    },
    {
      year: "2014",
      title: "Expansão das Atividades",
      description: `
        Inclusão de crianças e adolescentes surdos e ouvintes em situação de vulnerabilidade. 
        Ensino de Libras como primeira língua para surdos e segunda língua para ouvintes.
        Início das ações sociais, incluindo doações de cestas básicas, medicamentos e reformas de casas.
        `,
    },
    {
      year: "2015",
      title: "Crescimento Regional",
      description:
        "Expansão para cinco cidades vizinhas (Portel, Curralinho, São Sebastião da Boa Vista, Anajás e Bagre). Cada cidade com sua própria diretoria local.",
    },
    {
      year: "2017",
      title: "Ensino de Espanhol",
      description:
        "Início do curso de Língua Espanhola para jovens e adultos, com o professor voluntário Emanuel Nazareno. O curso durou quatro anos consecutivos.",
    },
    {
      year: "2018",
      title: "Educação Formal",
      description:
        "Criação de turmas regulares para crianças de 6 a 12 anos, com aulas no contraturno escolar. Disciplinas oferecidas: Português, Matemática, Libras, Artes Plásticas, Geografia e outras.",
    },
    {
      year: "2019",
      title: "Projeto - Mente Saudável",
      description:
        "Criação de atendimento psicológico gratuito para jovens, devido ao aumento de casos de depressão e suicídio. Encaminhamento de casos graves para psiquiatras e outros profissionais.",
    },
    {
      year: "2020",
      title: "Pandemia e Novos Projetos",
      description:
        "Suspensão das atividades presenciais devido à COVID-19. Com isso, novos projetos surgiram: Serviço de Tradução e Interpretação de Libras para informações de saúde. Ouvidoria online para surdos. Sopão de Ouro (doação de comida em bairros periféricos). Pegue e Leve (distribuição gratuita de alimentos). Atendimento Psicológico (com mais de 180 atendimentos remotos e 38 presenciais). Parceria com a UFPA e ASTILP para oferecer o 1º Curso de Extensão de Formação em Tradução e Interpretação de Libras, formando 28 profissionais.",
    },
    {
      year: "2021",
      title: "Projeto - Quarta com Surdos",
      description:
        "Criação do projeto para debater temas importantes com a comunidade surda, como: HIV, ISTs, Puberdade, Dependência Química, Gravidez Precoce, entre outros.",
    },
    {
      year: "2022",
      title: "Registro Oficial como ONG",
      description:
        "Instituto Mãos de Ouro recebe seu CNPJ em 17 de fevereiro de 2022. Retorno das atividades com crianças e adolescentes, com mais de 200 alunos matriculados.",
    },
  ];

  return (
    <section id="history" className="py-20 bg-earth/5 scroll-my-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">
            Nossa História
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Uma jornada de dedicação, superação e transformação social através
            da inclusão e valorização da cultura surda.
          </p>
        </div>

        <div className="relative">
          {/* Timeline events */}
          <div
            className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px 
          md:before:mx-auto md:before:translate-x-0
           before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/80 before:to-transparent"
          >
            {timelineEvents.map((event, index) => (
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-amber-600 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Calendar className="size-5" />
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-amber-900">
                      {event.title}
                    </div>
                    <time className="font-caveat font-medium text-amber-500">
                      {event.year}
                    </time>
                  </div>
                  <div className="text-slate-500">{event.description}</div>
                </div>
              </div>
            ))}

            
          </div>
        </div>

        <div className="mt-16 text-center p-6 bg-primary/80 rounded-lg relative overflow-hidden flex justify-center items-center">
          <img
            className="-rotate-12 -scale-x-100 top-3 drop-shadow-md left-0 absolute opacity-80 size-16 md:size-auto"
            src="https://cdn-icons-png.flaticon.com/128/3776/3776585.png"
          />
          <div className="inline-flex items-center gap-2 text-white px-6 py-3">
            
            <span className="font-semibold text-2xl">
              Mais de uma década transformando vidas
            </span>
          </div>
          <img
            className="rotate-12 drop-shadow-md top-3 right-0 absolute opacity-80 size-16 md:size-auto"
            src="https://cdn-icons-png.flaticon.com/128/3776/3776585.png"
          />
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
