import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { listContent } from "../lib/contentLoader";
import SectionTitle from "./SectionTitle";
import { Project } from "@/lib/types/project";

const OurProjects = () => {
  const projects = listContent<Project>("projetos");

  return (
    <section
      id="nossos-projetos"
      className="py-20 bg-gradient-to-b from-white to-gray-50 scroll-my-10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle
            title="Nossos Projetos"
            subtitle="Conheça nossas iniciativas que transformam vidas através da
            educação, cultura e inclusão da comunidade surda."
            centered
          />
        </div>

        {/* Featured Project */}

        {/* Project Grid */}
        <Carousel
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
            {projects.map((project, idx) => (
              <CarouselItem
                data-aos="zoom-in"
                data-aos-delay={idx * 500 + 100}
                key={project.slug}
                className="md:basis-1/3"
              >
                <div
                  key={project.slug}
                  className="group flex flex-col h-full border rounded-xl overflow-hidden shadow-lg relative"
                >
                  <Link
                    to={`/projetos/${project.slug}`}
                    className="flex flex-col h-full"
                  >
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10"></div>
                      <img
                        loading="lazy"
                        src={`${project.image}`}
                        alt={project.title}
                        className="w-full"
                      />
                    </div>

                    <div className="flex flex-col flex-1 p-4 border-t-4 border-primary">
                      <h2 className="text-xl font-bold mb-2 text-earth group-hover:text-primary transition-colors pointer-events-none">
                        {project.title}
                      </h2>
                      <p className="text-dark/70 text-sm mb-4 pointer-events-none flex-1">
                        {project.description}
                      </p>
                      <div className="mt-0 inline-flex items-center text-sm text-primary font-semibold">
                        Ler mais{" "}
                        <ArrowRight
                          size={16}
                          className="ml-1 group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </Link>
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
