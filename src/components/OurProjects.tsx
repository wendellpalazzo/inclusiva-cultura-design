
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OurProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Libras nas Escolas",
      description: "Programa de ensino de Libras para crianças e adolescentes em escolas públicas, promovendo a inclusão desde cedo.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "bg-primary"
    },
    {
      id: 2,
      title: "Capacitação Profissional",
      description: "Cursos de formação profissional para pessoas surdas, visando sua inserção no mercado de trabalho.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "bg-secondary"
    },
    {
      id: 3,
      title: "Arte e Cultura Surda",
      description: "Festivais e exposições que valorizam e promovem as expressões artísticas e culturais da comunidade surda.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "bg-earth"
    }
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

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 opacity-70 ${project.color}`}></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 className="text-2xl font-bold text-white text-center">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-dark/80 mb-4">
                  {project.description}
                </p>
                <Link 
                  to={`/projetos/${project.id}`}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Saiba mais <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
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
