import { listContent } from "@/lib/contentLoader";
import { BlogContent } from "@/pages/BlogDetails";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const Blog = () => {
  const blogPosts = listContent<BlogContent>("blog");

  // const blogPosts = [
  //   {
  //     title: "A Importância da Libras na Educação Inclusiva",
  //     excerpt: "Como a Língua Brasileira de Sinais tem transformado o ambiente educacional para alunos surdos e ouvintes.",
  //     date: "10 Jun 2023",
  //     category: "Educação",
  //     image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  //   },
  //   {
  //     title: "Tecnologias Assistivas para a Comunidade Surda",
  //     excerpt: "Conheça as inovações tecnológicas que estão facilitando a comunicação e o acesso à informação para pessoas surdas.",
  //     date: "25 Mai 2023",
  //     category: "Tecnologia",
  //     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  //   },
  //   {
  //     title: "Festival de Cultura Surda: Um Sucesso de Público",
  //     excerpt: "Mais de mil pessoas participaram do evento que celebrou as expressões artísticas e culturais da comunidade surda.",
  //     date: "03 Mai 2023",
  //     category: "Eventos",
  //     image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  //   }
  // ];

  return (
    <section id="blog" className="py-20 bg-earth/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">
            Blog e Notícias
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Fique por dentro das novidades, artigos e informações relevantes
            sobre inclusão e cultura surda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-primary font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-dark/60">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-earth mb-3">
                  {post.title}
                </h3>
                <p className="text-dark/80 mb-4">{post.description}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm text-primary font-semibold hover:text-primary/80 transition-colors group"
                >
                  Ler mais
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                {/* <a
                  href="#"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Ler mais <ArrowRight size={16} className="ml-2" />
                </a> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a href="#" className="btn-primary inline-flex items-center">
            Ver Todas as Publicações
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Blog;
