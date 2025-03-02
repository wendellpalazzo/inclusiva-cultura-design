
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OurProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Libras nas Escolas",
      description: "Programa de ensino de Libras para crianças e adolescentes em escolas públicas, promovendo a inclusão desde cedo.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Capacitação Profissional",
      description: "Cursos de formação profissional para pessoas surdas, visando sua inserção no mercado de trabalho.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Arte e Cultura Surda",
      description: "Festivais e exposições que valorizam e promovem as expressões artísticas e culturais da comunidade surda.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Recursos para Educação",
      description: "Desenvolvimento de materiais didáticos e recursos adaptados para o ensino de pessoas surdas.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">Nossos Projetos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Conheça nossas iniciativas que transformam vidas através da educação, 
            cultura e inclusão da comunidade surda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden border-4 border-primary">
              {/* Project image with overlay */}
              <div className="relative h-[500px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
                <h3 className="text-2xl font-bold text-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-dark/80 mb-0">
                  {project.description}
                </p>
                <Link 
                  to={`/projetos/${project.id}`}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors mt-3"
                >
                  Saiba mais <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              
              {/* Yellow separator - visible at the bottom of odd-indexed items */}
              {index % 2 === 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
              )}
              
              {/* Yellow separator - visible at the right of even-indexed items in the first row */}
              {index % 2 === 0 && (
                <div className="absolute top-0 bottom-0 right-0 w-1 bg-primary"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projetos/1" className="btn-primary inline-flex items-center">
            Ver Todos os Projetos
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
