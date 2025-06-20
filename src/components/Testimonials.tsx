import { ChartBar } from "lucide-react";
import SectionTitle from "./SectionTitle";
import testimonials from "../data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const impactStats = [
    { number: "9.000+", label: "Pessoas atingidas no Arquipélago Marajoara" },
    { number: "7.000+", label: "Profissionais formados" },
    { number: "20+", label: "Escolas parceiras" },
    { number: "14+", label: "Anos de atuação" },
    { number: "1.200+", label: "Cestas básicas doadas" },
    { number: "180+", label: "Atendimentos psicológicos" },
    {
      number: "970+",
      label: "Crianças atendidas com o projeto PROJETANDO O AMANHÃ",
    },
  ];

  return (
    <>
      <section id="testimonials" className="mt-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionTitle
              title="Depoimentos e Impacto"
              subtitle="Conheça as histórias de transformação e os resultados do nosso trabalho na vida das pessoas."
              centered
            />
          </div>

          <div className="relative container mx-auto mb-20">
            <div className="max-w-lg lg:max-w-7xl mx-auto">
              <div className="flex flex-wrap -mx-4 ">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                  <div className="lg:max-w-md xl:max-w-lg ml-auto relative">
                    <div
                      data-aos="zoom-out-left"
                      data-aos-duration="1000"
                      className="absolute bg-[#f687017a] w-full h-full -top-[21px] -left-[18px] rounded-lg"
                    ></div>
                    <img
                      width={512}
                      data-aos="zoom-out-left"
                      data-aos-delay="600"
                      data-aos-duration="1000"
                      className="block w-full lg:h-96 object-cover rounded-lg object-top"
                      loading="lazy"
                      src={testimonials[0].image}
                      alt={testimonials[0].author}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div
                    data-aos="zoom-out-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="max-w-lg"
                  >
                    <div
                      className="text-dark italic text-pretty space-y-2 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: testimonials[0].quote,
                      }}
                    ></div>
                    <span className="block text-gray-900 font-semibold mb-1">
                      — {testimonials[0].author}
                    </span>
                    <span className="block text-gray-500">
                      {testimonials[0].role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative container mx-auto mb-10">
            <div className="max-w-lg lg:max-w-7xl mx-auto">
              <div className="flex flex-wrap-reverse -mx-4 ">
                <div className="w-full lg:w-1/2 px-4">
                  <div
                    data-aos="zoom-out-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="max-w-lg ml-auto"
                  >
                    <div
                      className="text-dark italic text-pretty space-y-2 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: testimonials[1].quote,
                      }}
                    ></div>
                    <span className="block text-gray-900 font-semibold mb-1">
                      — {testimonials[1].author}
                    </span>
                    <span className="block text-gray-500">
                      {testimonials[1].role}
                    </span>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                  <div className="lg:max-w-md xl:max-w-lg mr-auto relative">
                    <div
                      data-aos="zoom-out-left"
                      data-aos-duration="1000"
                      className="absolute bg-[#f687017a] w-full h-full -top-[21px] left-[18px] rounded-lg"
                    ></div>
                    <img
                      width={512}
                      data-aos="zoom-out-left"
                      data-aos-delay="600"
                      data-aos-duration="1000"
                      className="block w-full lg:h-96 object-cover rounded-lg object-top"
                      loading="lazy"
                      src={testimonials[1].image}
                      alt={testimonials[1].author}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Carousel
            className="mb-10"
            opts={{
              align: "center",
            }}
            plugins={[
              Autoplay({
                stopOnInteraction: true,
                stopOnFocusIn: true,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent className="p-4 w-full">
              {testimonials
                .filter((_, index) => index >= 2)
                .map((testimonial, index) => (
                  <CarouselItem
                    data-aos="zoom-in"
                    data-aos-delay={index * 500 + 100}
                    key={testimonial.author}
                    className="md:basis-1/3"
                  >
                    <div
                      key={index}
                      className={`group bg-earth/5 h-full rounded-xl p-6 relative hover:bg-earth/10 transition-colors duration-300`}
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
                          className="text-dark/90 mb-6 italic text-balance space-y-2 flex-1"
                          dangerouslySetInnerHTML={{
                            __html: testimonial.quote,
                          }}
                        />

                        <div className="flex items-center">
                          <img
                            loading="lazy"
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="flex-grow-0 flex-shrink-0 w-12 md:w-20 h-12 md:h-20 rounded-full object-cover mr-4 group-hover:shadow-primary/60 group-hover:shadow-lg transition-shadow duration-300"
                          />
                          <div>
                            <h4 className="font-bold text-earth">
                              {testimonial.author}
                            </h4>
                            <p className="text-dark/60 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselDots />
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="bg-gradient-to-b from-earth to-dark text-white p-4 lg:p-8 md:p-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10 max-w-screen-xl mx-auto">
            <div className="md:w-1/3 rounded-r-md">
              <h3 className="text-3xl font-bold mb-4">Nosso Impacto</h3>
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
            <div className="md:w-2/3 grid md:grid-cols-2 gap-6">
              {impactStats.map((stat, index) => (
                <div
                  key={index}
                  className={`border-primary/20 bg-gradient-to-t from-earth/40 to-white/5 border-2 rounded-lg p-6 text-center flex flex-col justify-center items-center ${index === 0 ? "md:col-span-2" : ""}`}
                >
                  <p className="text-3xl font-bold text-secondary shiny-sec">
                    {stat.number}
                  </p>
                  <div className="text-white/90 text-balance shiny-sec">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
