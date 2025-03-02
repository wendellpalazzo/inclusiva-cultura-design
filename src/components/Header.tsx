
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Quem Somos", href: "#about" },
    { name: "Nossa História", href: "#history" },
    { name: "Nossos Projetos", href: "#projects" },
    { name: "Como Ajudar", href: "#help" },
    { name: "Contato", href: "#contact" },
  ];

  // Function to check which section is currently in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => item.href.substring(1))
        .filter((id) => id !== "");

      // Get current scroll position
      const scrollY = window.scrollY;
      
      // Find the appropriate section
      let currentSection = "";
      
      // Special case for home section (top of page)
      if (scrollY < 200) {
        currentSection = "";
      } else {
        // Check other sections
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If the section's top is near the viewport top or above it
            // and the bottom is still visible
            if (rect.top <= 150 && rect.bottom > 0) {
              currentSection = section;
              break;
            }
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Call once on mount to set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  // Function to determine if a nav item is active
  const isActive = (href: string) => {
    if (href === "#" && activeSection === "") return true;
    return href === `#${activeSection}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
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
                className={`nav-link ${isActive(item.href) ? 'text-primary active-nav' : ''}`}
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
                    isActive(item.href) 
                      ? 'text-primary bg-gray-50' 
                      : 'text-earth hover:text-primary hover:bg-gray-50'
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
