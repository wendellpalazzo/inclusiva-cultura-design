import { useSmoothScroll } from "@/lib/hashScroll";
import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const goTo = useSmoothScroll();
  const lenis = useLenis();
  const scrollToTop = () => {
    location.hash = "";
    lenis.scrollTo(0);
  };

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-6">
              <a href="/" className="block">
                <img
                  loading="lazy"
                  src="/assets/images/logo-instituto-maos-de-ouro.webp"
                  alt="Logo Instituto Mãos de Ouro"
                  className="h-20 w-auto"
                  width={80}
                  height={80}
                />
              </a>
            </div>
            <p className="text-white/70 mb-6">
              Instituto Mãos De Ouro
              <br />- As Mãos Que Transformam Vidas -
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100008441749488"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors pulse-beat h-7"
                aria-label="Facebook do Instituto Mãos de Ouro"
                title="Facebook do Instituto Mãos de Ouro"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/instituto_maos_de_ouro?igsh=Z2NrcDBmNWN4eDIy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors pulse-beat h-7"
                aria-label="Instagram do Instituto Mãos de Ouro"
                title="Instagram do Instituto Mãos de Ouro"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtube.com/channel/UCLSls60vMfBReAUIsC-H6Tw?si=JW7BXIXYuqohpnyF"
                className="text-white hover:text-primary transition-colors pulse-beat h-7"
                aria-label="YouTube do Instituto Mãos de Ouro"
                title="YouTube do Instituto Mãos de Ouro"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://t.me/+55${import.meta.env.VITE_CONTACT_ZAP}`}
                className="text-white hover:text-primary transition-colors pulse-beat h-7"
                aria-label="Telegram do Instituto Mãos de Ouro"
                title="Telegram do Instituto Mãos de Ouro"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.997 12c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Zm-9.642-2.618q-1.458.607-5.831 2.512-.711.283-.744.553c-.039.304.343.424.862.587l.218.07c.51.166 1.198.36 1.555.368q.486.01 1.084-.4 4.086-2.76 4.218-2.789c.063-.014.149-.032.207.02.059.052.053.15.047.177-.038.161-1.534 1.552-2.308 2.271-.241.225-.413.384-.448.42a9 9 0 0 1-.235.233c-.474.457-.83.8.02 1.36.408.27.735.492 1.061.714.356.242.711.484 1.17.785q.177.116.338.234c.415.296.787.56 1.247.518.267-.024.543-.275.683-1.025.332-1.77.983-5.608 1.133-7.19a1.8 1.8 0 0 0-.017-.393.42.42 0 0 0-.142-.27c-.12-.098-.305-.118-.387-.117-.376.007-.954.207-3.73 1.362Z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#quem-somos"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo("quem-somos");
                  }}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Quem Somos
                </a>
              </li>
              <li>
                <a
                  href="#nossa-historia"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo("nossa-historia");
                  }}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Nossa História
                </a>
              </li>
              <li>
                <a
                  href="#nossos-projetos"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo("nossos-projetos");
                  }}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Nossos Projetos
                </a>
              </li>
              <li>
                <a
                  href="/como-ajudar"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Como Ajudar
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo("contato");
                  }}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  target="_blank"
                  href="https://clubedelibras.ufc.br/pt/recursos/materiais/"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Materiais Educativos
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.ines.gov.br/dicionario-de-libras/"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Dicionário de Libras
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.cnmp.mp.br/portal/images/lei_brasileira_inclusao__pessoa__deficiencia.pdf"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Legislação Inclusiva
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo("blog");
                  }}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Blog e Artigos
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://youtube.com/channel/UCLSls60vMfBReAUIsC-H6Tw?si=JW7BXIXYuqohpnyF"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Galeria de Vídeos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Instituto Mãos de Ouro. Todos os
            direitos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-white/70 text-sm">
              Feito com muito ♥️
              <br />
              <a target="_blank" className="text-primary hover:text-transparent bg-clip-text hover:bg-gradient-to-b duration-700 hover:from-primary hover:via-amber-400 hover:to-slate-200" href="https://devwendell.com.br">Wendell Palazzo - Desenvolvimento Web</a>
            </span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              aria-label="Voltar ao topo da página Instituto Mãos de Ouro"
            >
              <ArrowUp size={20} className="text-primary" />
            </button>
          </div>
        </div>
      </div>
      <div className="h-4 w-full mt-4 relative bg-primary">
        <div
          style={{
            backgroundImage: "url('/assets/images/gregas.webp')",
            backgroundSize: "280px",
            backgroundRepeat: "repeat-x",
            backgroundPositionY: "-233px",
          }}
          className="h-4 w-full mt-4"
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
