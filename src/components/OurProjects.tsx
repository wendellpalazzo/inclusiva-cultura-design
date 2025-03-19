import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
const OurProjects = () => {
  const [activeProject, setActiveProject] = useState(1);
  const projects = [
    {
      id: 1,
      title: "Libras nas Escolas",
      description:
        "Programa de ensino de Libras para crianças e adolescentes em escolas públicas, promovendo a inclusão desde cedo.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Capacitação Profissional",
      description:
        "Cursos de formação profissional para pessoas surdas, visando sua inserção no mercado de trabalho.",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Arte e Cultura Surda",
      description:
        "Festivais e exposições que valorizam e promovem as expressões artísticas e culturais da comunidade surda.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Recursos para Educação",
      description:
        "Desenvolvimento de materiais didáticos e recursos adaptados para o ensino de pessoas surdas.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];
  return (
    <section
      id="nossos-projetos"
      className="py-20 bg-gradient-to-b from-white to-gray-50 scroll-my-10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">
            Nossos Projetos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Conheça nossas iniciativas que transformam vidas através da
            educação, cultura e inclusão da comunidade surda.
          </p>
        </div>

        {/* Featured Project */}

        {/* Project Grid */}
        <Carousel
          opts={{
            align: "start",
            
          }}
          plugins={[
            Autoplay({
              delay: 10000,
            }),
          ]}
        >
          <CarouselContent className="p-4 w-full">
            {projects.map((project) => (
              <CarouselItem className="md:basis-1/3">
                <div
                  key={project.id}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-[220px] overflow-hidden">
                    {/* Colored overlay */}
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10"></div>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Project number badge */}
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold z-20">
                      {project.id}
                    </div>
                  </div>

                  <div className="p-6 border-t-4 border-primary">
                    <h3 className="text-xl font-bold text-earth mb-2 group-hover:text-primary transition-colors pointer-events-none">
                      {project.title}
                    </h3>
                    <p className="text-dark/70 text-sm mb-4 line-clamp-2 pointer-events-none">
                      {project.description}
                    </p>
                    <Link
                      to={`/projetos/${project.id}`}
                      className="inline-flex items-center text-sm text-primary font-semibold hover:text-primary/80 transition-colors group"
                    >
                      Ver projeto
                      <ArrowRight
                        size={16}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots />
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* <div className="text-center mt-16">
          <Link to="/projetos/1" className="btn-primary inline-flex items-center group">
            Ver Todos os Projetos
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};
export default OurProjects;
