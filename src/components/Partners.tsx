import { MousePointerClickIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

export const Partners = () => {
  return (
    <div className="px-4 mx-auto pt-20">
      <div className="text-center mb-5">
        <SectionTitle
          title="Empresas Que Nos Apoiam"
          subtitle="Apoie o nosso projeto e faça parte dessa transformação!"
          light
          centered
        />
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          AutoScroll({
            stopOnInteraction: false,
            startDelay: 300,
          }),
        ]}
      >
        <CarouselContent className="p-4">
          <CarouselItem className="flex justify-center md:basis-1/3 lg:basis-1/4 ">
            <div className="bg-sky-600 text-lg text-center p-4 text-white rounded-xl size-48 font-bold flex justify-center items-center flex-col">
              Wendell Palazzo
              <span className="text-sm">Desenvolvimento Web</span>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center md:basis-1/3 lg:basis-1/4">
            <Link to="/parcerias/">
              <div className="relative text-lg hover:bg-slate-600 hover:text-slate-300 text-center p-4 text-slate-600 bg-slate-300 size-48 rounded-xl font-bold flex justify-center items-center flex-col">
                <span className="text-sm my-4">
                  Sua empresa pode aparecer aqui!
                </span>
                Clique e Saiba Mais!
                <MousePointerClickIcon className="size-10 stroke-primary/70" />
              </div>
            </Link>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
