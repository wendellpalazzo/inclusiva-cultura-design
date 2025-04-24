import SectionTitle from "./SectionTitle";

const FrequentQuestions = () => {
  return (
    <section id="nossos-projetos" className="py-20 scroll-my-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle
            title="Perguntas Frequentes"
            subtitle="Tire suas principais dúvidas sobre o Instituto Mãos de Ouro e nossos
            projetos. Se você não encontrar a resposta que procura, entre em
            contato conosco!"
            centered
          />
        </div>

        <ul className="space-y-6">
          {[
            {
              question: "O que é o Instituto Mãos de Ouro?",
              answer:
                "O Instituto Mãos de Ouro é uma instituição dedicada à promoção da cultura surda e inclusão social.",
            },
            {
              question: "Quais são os principais projetos do instituto?",
              answer:
                "Os principais projetos incluem cursos, eventos e iniciativas voltadas para a comunidade surda.",
            },
            {
              question: "Como posso ajudar o instituto?",
              answer:
                "Você pode ajudar através de doações, voluntariado ou participando de nossos eventos. Veja mais detalhes na seção - <a class='underline text-primary' href='/como-ajudar'>Como Ajudar</a>.",
            },
            {
              question: "O instituto oferece cursos para ouvintes?",
              answer:
                "Sim, oferecemos cursos voltados para ouvintes interessados em aprender Libras e inclusão.",
            },
            {
              question: "Onde o instituto está localizado?",
              answer:
                "Estamos localizados em - <a href='https://www.google.com/maps/dir//M%C3%A3os+de+Ouro+%2F+SEDE+272,+R.+Duque+de+Caxias,+184+Breves+-+PA,+68800-000/@-1.6866321,-50.4820835,8767m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x929839ad6446f7ab:0xa90502c5cedd0365!2m2!1d-50.4820835!2d-1.6866321?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D' class='underline text-primary' target='_blank'>Clique para abrir no Google Maps</a>.",
            },
            {
              question: "Como posso entrar em contato com o instituto?",
              answer: `Você pode entrar em contato através da nossa página de Contato, E-mail ou Telefone / WhatsApp. Acesse o menu - <a class='underline text-primary' href='/#contato'>Contato</a> - para mais informações.`,
            },
            {
              question: "O instituto realiza eventos presenciais?",
              answer:
                "Sim, realizamos eventos presenciais e online. Entre em contato conosco para saber mais informações.",
            },
            {
              question: "O instituto aceita doações?",
              answer:
                "Sim, aceitamos doações financeiras e de materiais. Acesse o menu - <a class='underline text-primary' href='/como-ajudar'>Como Ajudar</a> - para saber mais.",
            },
            {
              question: "Como posso me voluntariar?",
              answer:
                "Você pode se inscrever como voluntário através do formulário disponível em nosso site no menu - <a class='underline text-primary' href='/como-ajudar'>Como Ajudar</a> -. Lembrando que este formulário é apenas uma pré-inscrição e em um segundo momento poderá ser feita uma entrevista com o intúito de lhe conhecer melhor.",
            },
          ].map((faq, index) => (
            <li
              key={index}
              className="border-b border-gray-300 pb-4"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="700"
              data-aos-anchor-placement="center-bottom"
            >
              <details className="group">
                <summary className="text-lg font-semibold text-gray-700 cursor-pointer">
                  {faq.question}
                </summary>
                <p
                  className="text-gray-600 mt-2"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                ></p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FrequentQuestions;
