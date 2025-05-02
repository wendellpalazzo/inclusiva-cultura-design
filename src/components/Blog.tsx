import { listContent } from "@/lib/contentLoader";
import { BlogContent } from "@/pages/BlogDetails";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Blog = () => {
  const blogPosts = listContent<BlogContent>("blog");

  return (
    <section id="blog" className="py-20 bg-earth/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle
            title="Blog e Notícias"
            subtitle="Fique por dentro das novidades, artigos e informações relevantes sobre inclusão e cultura surda."
            centered
          />
        </div>


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
            {blogPosts.map((project, idx) => (
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
                  <div className="relative overflow-hidden h-48">
                    {/* Colored overlay */}
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10"></div>

                    <img
                      loading="lazy"
                      src={`${project.image}`}
                      alt={project.title}
                      className="object-top transform-gpu transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 border-t-4 border-primary">
                    <h3 className="text-xl font-bold text-earth mb-2 group-hover:text-primary transition-colors pointer-events-none">
                      {project.title}
                    </h3>
                    <p className="text-dark/70 text-sm mb-4 line-clamp-2 pointer-events-none min-h-10">
                      {project.description}
                    </p>
                    <Link
                      to={`/blog/${project.slug}`}
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
        </div>

        {/* <div className="text-center mt-12">
          <a href="#" className="btn-primary inline-flex items-center">
            Ver Todas as Publicações
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div> */}

    </section>
  );
};

export default Blog;
