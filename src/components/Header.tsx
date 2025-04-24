import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSmoothScroll } from "@/lib/hashScroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const goTo = useSmoothScroll();

  // Abre e fecha o menu
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Quem Somos", href: "quem-somos" },
    { name: "Nossa História", href: "nossa-historia" },
    { name: "Nossos Projetos", href: "nossos-projetos" },
    { name: "Como Ajudar", href: "/como-ajudar" },
    { name: "Blog", href: "blog" },
    { name: "Contato", href: "contato" },
  ];

  const checkForAnimation =
    /^\/(projetos|doe|voluntarie-se|parcerias|projetos|como-ajudar)/.test(
      location.pathname,
    );

  return (
    <header
      data-aos={!checkForAnimation && "fade-down"}
      data-aos-delay="1000"
      data-aos-duration="2800"
      className="fixed top-0 left-0 right-0 z-50 bg-secondary-foreground/80 backdrop-blur-lg border-b border-secondary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href={`/`}
              onClick={(e) => {
                e.preventDefault();
                goTo("hero");
              }}
              className="flex items-center"
            >
              <img
                src="/assets/images/logo-instituto-maos-de-ouro.png"
                alt="Instituto Mãos de Ouro"
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, idx) => (
              <a
                data-aos={!checkForAnimation && "fade-down"}
                data-aos-delay={1000 + idx * 200}
                data-aos-duration="1800"
                key={item.name}
                href={
                  item.href.includes("/") ? `${item.href}` : `/#${item.href}`
                }
                onClick={(e) => {
                  if (!item.href.includes("/")) {
                    e.preventDefault();
                    goTo(item.href);
                  }
                }}
                className="nav-link cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-earth"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-0 pt-2 pb-3 space-y-1 slide-up">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={
                    item.href.includes("/") ? `${item.href}` : `/#${item.href}`
                  }
                  onClick={(e) => {
                    if (!item.href.includes("/")) {
                      e.preventDefault();
                      goTo(item.href);
                      setIsOpen(false);
                    }
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary hover:bg-gray-50/10"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
