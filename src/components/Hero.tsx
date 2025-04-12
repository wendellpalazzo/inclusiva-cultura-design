import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <section
        className="relative min-h-dvh flex items-center justify-center overflow-hidden"
        id="hero"
      >
        <div
          data-aos="zoom-out"
          data-aos-duration="3000"
          className="absolute inset-0 bg-[url('/assets/images/hero.webp')] bg-cover bg-center"
        >
          {!isMobile && (
            <video
              poster="/assets/images/hero.webp"
              preload="auto"
              className="w-full h-full object-cover object-center"
              style={
                {
                  // clipPath: "polygon(0 0, 80% 16%, 88% 100%, 0% 100%)"
                }
              }
              loop
              autoPlay
              controls={false}
              muted
            >
              <source
                src="/assets/videos/maos-de-ouro.webm"
                type="video/webm"
              />
              <source src="/assets/videos/maos-de-ouro.mp4" type="video/mp4" />
            </video>
          )}

          <div className="absolute inset-0 bg-dark/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-dark/30" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="space-y-8">
            <h1
              className="text-4xl md:text-6xl font-playfair font-bold leading-tight"
              data-aos="zoom-out-right"
              data-aos-delay="300"
              data-aos-duration="3000"
            >
              Instituto Mãos de Ouro
            </h1>

            <p
              // data-aos="zoom-out-left"
              // data-aos-delay="500"
              // data-aos-duration="3000"
              className="text-lg md:text-3xl opacity-90 text-white/80 font-opensans"
            >
              - As Mãos Que Transformam Vidas -
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                data-aos="zoom-out"
                data-aos-delay="900"
                data-aos-duration="3000"
                href="#como-ajudar"
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Doe Agora
                <ArrowRight size={20} />
              </a>
              <a
                data-aos="zoom-out"
                data-aos-delay="1000"
                data-aos-duration="3000"
                href="#quem-somos"
                className="btn-secondary w-full sm:w-auto"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>

        {/* mouse Scroll */}
        <div className="absolute bottom-2.5 md:bottom-10 flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Role para baixo</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1.5 h-2 bg-white/70 rounded-full animate-[bounce_1.5s_infinite]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
