import { ChartBar } from "lucide-react";
import SectionTitle from "./SectionTitle";
import testimonials from "../data/testimonials";

const Testimonials = () => {
  const impactStats = [
    { number: "5,000+", label: "Pessoas beneficiadas" },
    { number: "200+", label: "Profissionais formados" },
    { number: "50+", label: "Escolas parceiras" },
    { number: "11+", label: "Anos de atuação" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle
            title="Depoimentos e Impacto"
            subtitle="Conheça as histórias de transformação e os resultados do nosso trabalho na vida das pessoas."
            centered
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-earth/5 rounded-xl p-6 relative hover:bg-earth/10 transition-colors duration-300"
            >
              <div className="relative z-10 flex flex-col flex-1 h-full pointer-events-none">
                <svg
                  className="w-10 h-10 text-primary/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <div
                  className="text-dark/80 mb-6 italic text-balance flex-1"
                  dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                />

                <div className="flex items-center">
                  <img
                    loading="lazy"
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full object-cover mr-4 group-hover:border-primary group-hover:border-2 transition-transform group-hover:duration-500 group-hover:scale-105"
                  />
                  <div>
                    <h4 className="font-bold text-earth">
                      {testimonial.author}
                    </h4>
                    <p className="text-dark/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-earth text-white rounded-xl p-4 lg:p-8 md:p-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold mb-4">Nosso Impacto</h3>
              <p className="text-white/80 mb-6">
                Ao longo dos anos, nosso trabalho tem gerado resultados
                significativos na inclusão e no desenvolvimento da comunidade
                surda.
              </p>
              <div className="flex items-center gap-3">
                <ChartBar size={30} className="text-secondary" />
                <span className="font-bold">Números que transformam vidas</span>
              </div>
            </div>

            <div className="md:w-2/3 grid grid-cols-2 gap-6">
              {impactStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-6 text-center"
                >
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="absolute w-28 h-96 top-0 -right-6 opacity-20 rotate-12"
            style={{
              backgroundImage: "url('/assets/images/gregas.png')",
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "-40px",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
