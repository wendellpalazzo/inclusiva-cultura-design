import {
  HandHeartIcon,
  HeartHandshakeIcon,
  MousePointerClickIcon,
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { ReactNode } from "react";

const PartnersTitle = ({ children }: { children?: ReactNode }) =>
  children || (
    <SectionTitle
      title="Empresas Que Nos Apoiam"
      subtitle="Apoie o nosso projeto e faça parte dessa transformação!"
      light
      centered
    />
  );

export const Partners = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="px-4 mx-auto pt-20">
      <div className="text-center mb-5">
        <PartnersTitle>{children}</PartnersTitle>
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          // slidesToScroll: 4
        }}
        plugins={[
          AutoScroll({
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            startDelay: 300,
            speed: 1.5,
          }),
        ]}
      >
        <CarouselContent className="p-4">
          <CarouselItem className="flex items-center justify-center md:basis-1/3 xl:basis-1/5">
            <HeartHandshakeIcon className="size-20" strokeWidth={1} />
          </CarouselItem>
          <CarouselItem className="flex justify-center md:basis-1/3 xl:basis-1/5">
            <Link to="https://devwendell.com.br/" target="_blank">
              <div className="p-4 bg-[#101010] size-48 rounded-xl font-bold flex justify-center items-center flex-col">
                <img
                  src="/assets/partners/devwendell.webp"
                  loading="lazy"
                />
                <span className="text-sm mt-2 text-[#80d7ff] text-center">
                  Wendell Palazzo<br/>Desenvolvimento Web
                </span>
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="flex justify-center md:basis-1/3 xl:basis-1/5">
            <Link to="http://www.cepacbreves.com.br/" target="_blank">
              <div className="p-4 bg-white size-48 hover:bg-slate-200 rounded-xl font-bold flex justify-center items-center flex-col">
                <img
                  src="/assets/partners/centro-educacional-paulo-carvalho.jpg"
                  loading="lazy"
                  className="mix-blend-multiply"
                />
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="flex justify-center md:basis-1/3 xl:basis-1/5">
            <Link to="https://www.instagram.com/kenistonoficial/" target="_blank">
              <div className="p-4 bg-black size-48 rounded-xl font-bold flex justify-center items-center flex-col">
                <img
                  src="/assets/partners/dep-federal-keniston.jpg"
                  loading="lazy"
                />
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="flex justify-center md:basis-1/3 xl:basis-1/5">
            <Link to="/como-ajudar/part/">
              <div className="relative text-lg hover:bg-slate-600 hover:text-slate-300 text-center p-4 text-slate-600 bg-slate-300 size-48 rounded-xl font-bold flex justify-center items-center flex-col">
                <span className="text-sm my-4">
                  Sua empresa pode aparecer aqui!
                </span>
                Clique aqui e Saiba Mais!
                <MousePointerClickIcon className="size-10 stroke-primary/70" />
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center md:basis-1/3 xl:basis-1/5">
            <HandHeartIcon className="size-20" strokeWidth={1} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
