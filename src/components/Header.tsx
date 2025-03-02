import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()
  
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Quem Somos", href: "#about" },
    { name: "Nossa História", href: "#history" },
    { name: "Nossos Projetos", href: "#projects" },
    { name: "Como Ajudar", href: "#help" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary-foreground/80 backdrop-blur-lg border-b border-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="/lovable-uploads/8d5c290e-2ff1-471d-a53e-ddc865200ee5.png"
                alt="Instituto Mãos de Ouro"
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${
                  item.href === location.hash ||
                  (location.hash === "" && item.href === "#")
                    ? "!text-primary active-nav"
                    : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 rounded-lg text-earth hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 slide-up">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    item.href === window.location.hash
                      ? "text-primary bg-gray-50"
                      : "text-earth hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
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
