import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
const OurProjects = () => {
  const [activeProject, setActiveProject] = useState(1);
  const projects = [{
    id: 1,
    title: "Libras nas Escolas",
    description: "Programa de ensino de Libras para crianças e adolescentes em escolas públicas, promovendo a inclusão desde cedo.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }, {
    id: 2,
    title: "Capacitação Profissional",
    description: "Cursos de formação profissional para pessoas surdas, visando sua inserção no mercado de trabalho.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }, {
    id: 3,
    title: "Arte e Cultura Surda",
    description: "Festivais e exposições que valorizam e promovem as expressões artísticas e culturais da comunidade surda.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }, {
    id: 4,
    title: "Recursos para Educação",
    description: "Desenvolvimento de materiais didáticos e recursos adaptados para o ensino de pessoas surdas.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }];
  return <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">Nossos Projetos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Conheça nossas iniciativas que transformam vidas através da educação, 
            cultura e inclusão da comunidade surda.
          </p>
        </div>

        {/* Featured Project */}
        <div className="relative mb-20 overflow-hidden rounded-xl shadow-2xl bg-white">
          <div className="flex flex-col lg:flex-row">
            {/* Large Image */}
            <div className="lg:w-3/5 relative overflow-hidden h-[400px] lg:h-auto">
              <div className="absolute inset-0 bg-primary opacity-20"></div>
              <img src={projects[activeProject - 1].image} alt={projects[activeProject - 1].title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-dark/50 to-transparent"></div>
              
              {/* Floating project number */}
              <div className="absolute top-10 left-10">
                <span className="text-9xl font-bold text-white opacity-30 font-playfair">
                  {activeProject}
                </span>
              </div>
            </div>
            
            {/* Project Details */}
            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-earth mb-4 font-playfair">
                {projects[activeProject - 1].title}
              </h3>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-dark/80 text-lg mb-8">
                {projects[activeProject - 1].description}
              </p>
              <Link to={`/projetos/${projects[activeProject - 1].id}`} className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group">
                Saiba mais 
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Project selector */}
          <div className="absolute bottom-0 left-0 right-0 flex bg-amber-600">
            {projects.map(project => <button key={project.id} onClick={() => setActiveProject(project.id)} className={`flex-1 py-3 text-center uppercase text-xs tracking-wider font-semibold transition-colors ${activeProject === project.id ? "bg-primary text-white" : "bg-white/80 text-dark/60 hover:bg-gray-100"}`}>
                Projeto {project.id}
              </button>)}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map(project => <div key={project.id} className="group relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-[220px] overflow-hidden">
                {/* Colored overlay */}
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10"></div>
                
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
                {/* Project number badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold z-20">
                  {project.id}
                </div>
              </div>
              
              <div className="p-6 border-t-4 border-primary">
                <h3 className="text-xl font-bold text-earth mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <Link to={`/projetos/${project.id}`} className="inline-flex items-center text-sm text-primary font-semibold hover:text-primary/80 transition-colors group">
                  Ver projeto 
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-16">
          <Link to="/projetos/1" className="btn-primary inline-flex items-center group">
            Ver Todos os Projetos
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>;
};
export default OurProjects;