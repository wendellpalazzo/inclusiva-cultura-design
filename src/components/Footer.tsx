import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.location.hash = "";
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <a href="/" className="block">
                <img
                  src="lovable-uploads/8d5c290e-2ff1-471d-a53e-ddc865200ee5.png"
                  alt="Logo Instituto Mãos de Ouro"
                  className="h-20 w-auto"
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
                className="text-white hover:text-primary transition-colors"
                aria-label="Facebook do Instituto Mãos de Ouro"
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
                className="text-white hover:text-primary transition-colors"
                aria-label="Instagram do Instituto Mãos de Ouro"
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
                className="text-white hover:text-primary transition-colors"
                aria-label="YouTube do Instituto Mãos de Ouro"
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
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#quem-somos"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Quem Somos
                </a>
              </li>
              <li>
                <a
                  href="#nossa-historia"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Nossa História
                </a>
              </li>
              <li>
                <a
                  href="#nossos-projetos"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Nossos Projetos
                </a>
              </li>
              <li>
                <a
                  href="#como-ajudar"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Como Ajudar
                </a>
              </li>
              <li>
                <a
                  href="#contato"
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
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Materiais Educativos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Dicionário de Libras
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Legislação Inclusiva
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Blog e Artigos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Galeria de Vídeos
                </a>
              </li>
              <li>
                <a
                  href="#accessibility"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Acessibilidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Inscreva-se para receber novidades, artigos e informações sobre
              nossos projetos.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white 
                focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="w-full btn-primary">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Instituto Mãos de Ouro. Todos os
            direitos reservados.
          </p>
          <div className="flex items-center space-x-6">
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
    </footer>
  );
};

export default Footer;
