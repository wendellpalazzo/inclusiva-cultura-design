import { listContent } from "@/lib/contentLoader";
import { BlogContent } from "@/pages/BlogDetails";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
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
            {blogPosts.map((blogPost, idx) => (
              <CarouselItem
                data-aos="zoom-in"
                data-aos-delay={idx * 500 + 100}
                key={blogPost.slug}
                className="md:basis-1/3"
              >
                <div
                  key={blogPost.slug}
                  className="group flex flex-col h-full border rounded-xl overflow-hidden shadow-lg relative"
                >
                  <Link to={`/blog/${blogPost.slug}`}>
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10"></div>
                      <img
                        loading="lazy"
                        src={`${blogPost.image}`}
                        alt={blogPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col flex-1 p-4 border-t-4 border-primary">
                      <h2 className="text-xl font-bold mb-2 text-earth group-hover:text-primary transition-colors pointer-events-none">
                        {blogPost.title}
                      </h2>
                      <p className="text-dark/70 text-sm mb-4 pointer-events-none flex-1">
                        {blogPost.description}
                      </p>

                      <div className="mt-4 inline-flex items-center text-sm text-primary font-semibold">
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
