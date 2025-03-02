
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Link as LinkIcon } from "lucide-react";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

// Define the project type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  fullDescription: string;
  date: string;
  location: string;
  website?: string;
  gallery: string[];
  objectives: string[];
  impact: string;
}

// Projects data expanded with detailed information
const projectsData: Project[] = [
  {
    id: 1,
    title: "Libras nas Escolas",
    description: "Programa de ensino de Libras para crianças e adolescentes em escolas públicas, promovendo a inclusão desde cedo.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "bg-primary",
    fullDescription: "O projeto Libras nas Escolas é uma iniciativa pioneira que visa introduzir a Língua Brasileira de Sinais no currículo escolar regular de escolas públicas. Acreditamos que a inclusão começa com a comunicação, e ensinar Libras desde cedo cria uma geração mais consciente e preparada para a diversidade.",
    date: "Desde março de 2018",
    location: "São Paulo, SP",
    website: "https://librasnasescolas.org.br",
    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    ],
    objectives: [
      "Implementar aulas de Libras no currículo regular de escolas públicas",
      "Capacitar professores para o ensino básico de Libras",
      "Desenvolver material didático acessível e lúdico",
      "Promover a interação entre alunos surdos e ouvintes"
    ],
    impact: "Já alcançamos mais de 45 escolas e 15.000 alunos, formando uma nova geração que valoriza a comunicação inclusiva e respeita a diversidade linguística."
  },
  {
    id: 2,
    title: "Capacitação Profissional",
    description: "Cursos de formação profissional para pessoas surdas, visando sua inserção no mercado de trabalho.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "bg-secondary",
    fullDescription: "Nossa iniciativa de Capacitação Profissional oferece formação técnica e desenvolvimento de habilidades para pessoas surdas, preparando-as para oportunidades no mercado de trabalho. Os cursos são ministrados em Libras e incluem estágios em empresas parceiras, garantindo experiência prática e aumentando a empregabilidade.",
    date: "Desde junho de 2019",
    location: "Rio de Janeiro, RJ e Belo Horizonte, MG",
    website: "https://capacitacaoprofissional.maos-de-ouro.org",
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    ],
    objectives: [
      "Oferecer cursos profissionalizantes em áreas de alta demanda",
      "Desenvolver habilidades técnicas e comportamentais",
      "Criar parcerias com empresas para garantir oportunidades de trabalho",
      "Acompanhar a integração no ambiente corporativo"
    ],
    impact: "Mais de 350 profissionais formados, com taxa de empregabilidade de 78% após a conclusão do programa. Transformamos não apenas vidas individuais, mas também a cultura organizacional das empresas parceiras."
  },
  {
    id: 3,
    title: "Arte e Cultura Surda",
    description: "Festivais e exposições que valorizam e promovem as expressões artísticas e culturais da comunidade surda.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "bg-earth",
    fullDescription: "O projeto Arte e Cultura Surda celebra a rica expressão artística da comunidade surda através de festivais, exposições e oficinas. Valorizamos as manifestações culturais próprias da comunidade surda e criamos espaços onde artistas surdos podem compartilhar seu trabalho com o público geral, promovendo reconhecimento e apreciação.",
    date: "Desde outubro de 2020",
    location: "Nacional (múltiplas cidades)",
    gallery: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    ],
    objectives: [
      "Organizar festivais anuais de arte e cultura surda",
      "Criar plataformas para artistas surdos exibirem seu trabalho",
      "Documentar e preservar expressões culturais da comunidade surda",
      "Sensibilizar o público geral sobre a riqueza da cultura surda"
    ],
    impact: "Já realizamos 12 festivais em 8 cidades diferentes, alcançando um público de mais de 30.000 pessoas e dando visibilidade para mais de 200 artistas surdos em diversas modalidades artísticas."
  }
];

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    // Find the project by id
    if (id) {
      const projectId = parseInt(id, 10);
      const foundProject = projectsData.find(p => p.id === projectId);
      
      if (foundProject) {
        setProject(foundProject);
        // Scroll to top when project is found
        window.scrollTo(0, 0);
      }
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-earth mb-4">Projeto não encontrado</h2>
          <p className="mb-6 text-dark/80">O projeto que você está procurando não existe ou foi removido.</p>
          <Link to="/#projects" className="btn-primary">
            Voltar para Projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Same as Doe page */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/8d5c290e-2ff1-471d-a53e-ddc865200ee5.png" 
                  alt="Instituto Mãos de Ouro" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/#about" className="nav-link">Quem Somos</Link>
              <Link to="/#history" className="nav-link">Nossa História</Link>
              <Link to="/#projects" className="nav-link">Nossos Projetos</Link>
              <Link to="/#help" className="nav-link">Como Ajudar</Link>
              <Link to="/#contact" className="nav-link">Contato</Link>
            </nav>

            {/* Mobile Navigation Button and Menu would go here */}
          </div>
        </div>
      </header>
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className={`py-20 relative overflow-hidden text-white ${project.color}`}>
          <div className="absolute inset-0 bg-black/30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/#projects" className="inline-flex items-center text-white hover:text-white/80 font-semibold mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Voltar para Projetos
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              <div className="w-20 h-1 bg-white mb-8"></div>
              <p className="text-xl mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                  <Calendar size={18} className="mr-2" />
                  <span>{project.date}</span>
                </div>
                
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                  <MapPin size={18} className="mr-2" />
                  <span>{project.location}</span>
                </div>
                
                {project.website && (
                  <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <LinkIcon size={18} className="mr-2" />
                    <span>Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Full Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-earth mb-6">Sobre o Projeto</h2>
                <p className="text-lg text-dark/80 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
              
              {/* Objectives */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-earth mb-6">Objetivos</h2>
                <ul className="space-y-4 text-dark/80">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`flex-shrink-0 ${project.color} text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1`}>
                        {index + 1}
                      </span>
                      <span className="text-lg">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Gallery */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-earth mb-6">Galeria</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div 
                      key={index} 
                      className="rounded-lg overflow-hidden h-64 relative group"
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - Imagem ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Impact */}
              <div className="mb-12 p-8 rounded-xl bg-gray-50 border border-gray-100">
                <h2 className="text-3xl font-bold text-earth mb-6">Impacto</h2>
                <p className="text-lg text-dark/80 leading-relaxed">
                  {project.impact}
                </p>
              </div>
              
              {/* Call to Action */}
              <div className="text-center mt-12 p-8 rounded-xl bg-primary/10">
                <h2 className="text-3xl font-bold text-earth mb-4">Apoie Este Projeto</h2>
                <p className="text-lg text-dark/80 mb-8 max-w-2xl mx-auto">
                  Sua contribuição é fundamental para continuarmos transformando vidas através da educação e da cultura surda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/doe" className="btn-primary">
                    Doe Agora
                  </Link>
                  <a href="/#contact" className="btn-secondary">
                    Entre em Contato
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
