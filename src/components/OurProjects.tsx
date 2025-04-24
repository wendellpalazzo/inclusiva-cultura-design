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
import { Project } from "@/pages/ProjectDetails";
import SectionTitle from "./SectionTitle";

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
              stopOnMouseEnter: true
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
                  className="group relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    {/* Colored overlay */}
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10"></div>

                    <img
                      loading="lazy"
                      src={`${project.image}`}
                      alt={project.title}
                      className="w-full h-auto transform-gpu transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 border-t-4 border-primary">
                    <h3 className="text-xl font-bold text-earth mb-2 group-hover:text-primary transition-colors pointer-events-none">
                      {project.title}
                    </h3>
                    <p className="text-dark/70 text-sm mb-4 line-clamp-2 pointer-events-none">
                      {project.description}
                    </p>
                    <Link
                      to={`/projetos/${project.slug}`}
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
