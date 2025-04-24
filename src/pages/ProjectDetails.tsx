import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Link as LinkIcon,
  Loader2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getContent } from "@/lib/contentLoader";
import Seo from "@/lib/seo";
import { SocialShare } from "@/components/SocialShare";

import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

// Define the project type
export interface Project {
  id: number;
  slug: string;
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

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true); // novo estado

  useEffect(() => {
    // Find the project by id
    if (slug) {
      setLoading(true);
      getContent<Project>("projetos", slug)
        .then((data) => {
          setProject(data);
          window.scrollTo(0, 0);
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <Loader2 className="animate-spin size-20 stroke-primary ease-in-out" />
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-earth mb-4">
            Projeto não encontrado
          </h2>
          <p className="mb-6 text-dark/80">
            O projeto que você está procurando não existe ou foi removido.
          </p>
          <Link to="/#nossos-projetos" className="btn-primary">
            Voltar para Projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`${project.title}`}
        description={`${project.description}`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Article",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://institutomaosdeouro.org.br/projetos/${project.slug}`,
          },
          headline: project.title,
          description: project.description,
          image: project.image,
          name: "Instituto Mãos de Ouro",
          url: `https://institutomaosdeouro.org.br/projetos/${project.slug}`,
          author: {
            "@type": "Organization",
            name: "Instituto Mãos de Ouro",
            url: "https://institutomaosdeouro.org.br",
          },
          publisher: {
            "@type": "Organization",
            name: "Instituto Mãos de Ouro",
            logo: {
              "@type": "ImageObject",
              url: "/assets/images/logo-instituto-maos-de-ouro.png",
            },
          },
        }}
        image="/assets/images/logo-instituto-maos-de-ouro.png"
      />
      <div className="min-h-dvh flex flex-col">
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section
            className={`py-20 relative overflow-hidden text-white ${project.color}`}
          >
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="container mx-auto px-4 relative z-10">
              <Link
                to="/#nossos-projetos"
                className="inline-flex items-center text-white hover:text-white/80 font-semibold mb-8 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" /> Voltar para Projetos
              </Link>

              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {project.title}
                </h1>
                <div className="w-20 h-1 bg-white mb-8"></div>
                <p className="text-xl mb-8">{project.description}</p>

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
                <SocialShare
                  title="Compartilhe este projeto"
                  url={`https://institutomaosdeouro.org.br/projetos/${project.slug}`}
                  titleColor="white"
                />
              </div>
            </div>
          </section>

          {/* Project Details */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Full Description */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-earth mb-6">
                    Sobre o Projeto
                  </h2>
                  <p className="text-lg text-dark/80 leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Objectives */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-earth mb-6">
                    Objetivos
                  </h2>
                  <ul className="space-y-4 text-dark/80">
                    {project.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <span
                          className={`flex-shrink-0 ${project.color} text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1`}
                        >
                          {index + 1}
                        </span>
                        <span className="text-lg">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Gallery */}
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                  {/* <h2 className="text-3xl font-bold text-earth mb-6">
                    Galeria
                  </h2> */}
                  <MasonryPhotoAlbum
                    render={{
                      extras: (_, { photo: { label } }) => {
                        return label ? (
                          <div
                            className="absolute w-full bg-slate-900/80 text-white bottom-1 p-2 text-xs"
                            dangerouslySetInnerHTML={{ __html: label }}
                          ></div>
                        ) : null;
                      },
                      // <FavoriteIcon photo={photo} index={index} />

                      image: (props) => (
                        <img
                          {...props}
                          className="border-b-4 border-primary"
                          src={props.src}
                        />
                      ),
                      wrapper: (props) => (
                        <div
                          {...props}
                          className="transform-gpu hover:saturate-100 saturate-[0.65] hover:shadow-xl hover:shadow-black/60 transition-all duration-300 cursor-pointer ease-in-out hover:scale-105 hover:z-50"
                        />
                      ),
                      // button: (props) => <button {...props}>OI</button>
                      // extras: (_, { photo, index }) => (
                      //   <FavoriteIcon photo={photo} index={index} />
                      // ),
                    }}
                    columns={(containerWidth) => {
                      if (containerWidth < 400) return 1;
                      if (containerWidth < 800) return 3;
                      return 3;
                    }}
                    spacing={(containerWidth) => {
                      if (containerWidth >= 1200) return 10;
                      if (containerWidth >= 600 && containerWidth < 1200)
                        return 10;
                      if (containerWidth >= 300 && containerWidth < 600)
                        return 5;
                      if (containerWidth < 300) return 5;
                    }}
                    photos={project.gallery.map((i) => ({
                      title: `Instituto Mãos de Ouro - ${i?.[1]?.replace(/<br\/>/g, "")}`,
                      alt: `Instituto Mãos de Ouro - ${i?.[1]?.replace(/<br\/>/g, "")}`,
                      label: i?.[1],
                      width: 100,
                      height: 0,
                      src: i[0],
                    }))}
                  />
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Impact */}
                <div className="mb-12 p-8 rounded-xl bg-gray-50 border border-gray-100">
                  <h2 className="text-3xl font-bold text-earth mb-6">
                    Impacto
                  </h2>
                  <p className="text-lg text-dark/80 leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12 p-8 rounded-xl bg-primary/10">
                  <h2 className="text-3xl font-bold text-earth mb-4">
                    Apoie Este Projeto
                  </h2>
                  <p className="text-lg text-dark/80 mb-8 max-w-2xl mx-auto">
                    Sua contribuição é fundamental para continuarmos
                    transformando vidas através da educação e da cultura surda.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/doe" className="btn-primary">
                      Doe Agora
                    </Link>
                  </div>
                </div>
                <div className="mt-12 flex justify-center">
                  <SocialShare
                    title="Compartilhe este projeto"
                    url={`https://institutomaosdeouro.org.br/projetos/${project.slug}`}
                    titleColor="#282118"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProjectDetails;
