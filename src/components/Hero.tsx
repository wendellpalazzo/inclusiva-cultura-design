
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight animate-fadeIn">
            Transformando Vidas com as Mãos que Inspiram
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 font-opensans animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Mãos de Ouro – Em favor das comunidades surdas do Arquipélago Marajoara - PA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <a href="#donate" className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
              Doe Agora
              <ArrowRight size={20} />
            </a>
            <a href="#about" className="btn-secondary w-full sm:w-auto">
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
