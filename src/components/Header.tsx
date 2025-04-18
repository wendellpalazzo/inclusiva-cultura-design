import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

function elementoNaMetade(elemento) {
  if (!elemento) return false;
  const rect = elemento.getBoundingClientRect();
  const viewportAltura = window.innerHeight;

  return (
    rect.top <= viewportAltura / 2.5 && rect.bottom >= viewportAltura / 2.5
  );
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#");

  // Abre e fecha o menu
  const handleToggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();
  const lenis = useLenis();

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Nossa História", href: "#nossa-historia" },
    { name: "Nossos Projetos", href: "#nossos-projetos" },
    { name: "Blog", href: "#blog" },
    { name: "Como Ajudar", href: "#como-ajudar" },
    { name: "Contato", href: "#contato" },
  ];

  // useLenis((lenis) => {
  //   navItems.forEach((elemento) => {
  //     if (elemento.href === "#") return setActive("#");

  //     if (elementoNaMetade(document.querySelector(elemento.href)))
  //       setActive(elemento.href);
  //   });
  // }, []);

  const checkForAnimation = ["/doe", "/voluntarie-se", "/parcerias"].includes(
    location.pathname,
  );

  const onClickHandler = (e, item) => {
    if (checkForAnimation) return true;

    e.preventDefault();
    lenis.scrollTo(item.href !== "#" ? item.href : 0, {
      offset: -50,
      onStart: () => {
        window.location.hash = item.href;
        // setActive(item.href);
      },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      if (!lenis.isScrolling && location.hash !== "") {
        lenis.scrollTo(location.hash !== "#" ? location.hash : 0, {
          offset: -50,
          immediate: true,
          onComplete: () => {
            setActive(location.hash);
          },
        });
      }
    }, 800);
  }, []);

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
            <Link to="/" className="flex items-center">
              <img
                src="/assets/images/logo-instituto-maos-de-ouro.png"
                alt="Instituto Mãos de Ouro"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, idx) => (
              <Link
                data-aos={!checkForAnimation && "fade-down"}
                data-aos-delay={1000 + idx * 200}
                data-aos-duration="1800"
                onClick={(e) => {
                  onClickHandler(e, item);
                }}
                key={item.name}
                to={{
                  pathname: "/",
                  hash: `${item.href}`,
                }}
                viewTransition
                className={`nav-link`}
              >
                {item.name}
              </Link>
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
                <Link
                  key={item.name}
                  to={{
                    pathname: "/",
                    hash: `${item.href}`,
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    item.href === window.location.hash
                      ? "text-primary bg-gray-50"
                      : "text-white hover:text-primary hover:bg-gray-50/10"
                  }`}
                  onClick={(e) => {
                    onClickHandler(e, item);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
