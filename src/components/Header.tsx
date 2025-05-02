import { Menu, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSmoothScroll } from "@/lib/hashScroll";
import { buttonVariants } from "./ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const goTo = useSmoothScroll();
  const barRef = useRef(null);

  // Abre e fecha o menu
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Quem Somos", href: "quem-somos" },
    { name: "Nossa História", href: "nossa-historia" },
    { name: "Nossos Projetos", href: "nossos-projetos" },
    // { name: "Como Ajudar", href: "/como-ajudar" },
    { name: "Blog", href: "blog" },
    { name: "Contato", href: "contato" },
  ];

  const checkForAnimation =
    /^\/(projetos|doe|voluntarie-se|parcerias|projetos|como-ajudar|blog)/.test(
      location.pathname,
    );

  return (
    <header
      ref={barRef}
      data-aos={!checkForAnimation && "fade-down"}
      data-aos-delay="1000"
      data-aos-duration="2800"
      className={`will-change-all fixed top-0 left-0 right-0 z-50 shadow-xl backdrop-blur-lg bg-secondary-foreground/80`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              to="/"
              viewTransition
              className="flex items-center"
            >
              <img
                src="/assets/images/logo-instituto-maos-de-ouro.png"
                alt="Instituto Mãos de Ouro"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
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
            <a
              data-aos={!checkForAnimation && "fade-down"}
              data-aos-delay={2000 + navItems.length + 1 * 200}
              data-aos-duration="1800"
              key="como-ajudar"
              href="/como-ajudar"
              className={buttonVariants({ variant: "default" })}
            >
              Como Ajudar
            </a>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-earth"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden">
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
              <a
                key="como-ajudar"
                href="/como-ajudar"
                className={buttonVariants({ variant: "default" })}
              >
                Como Ajudar
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
