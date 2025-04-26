import { listContent } from "@/lib/contentLoader";
import { BlogContent } from "@/pages/BlogDetails";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const Blog = () => {
  const blogPosts = listContent<BlogContent>("blog");

  return (
    <section id="blog" className="py-20 bg-earth/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle
            title="Blog e Notícias"
            subtitle="Fique por dentro das novidades, artigos e informações relevantes sobre inclusão e cultura surda."
            centered
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              data-aos="zoom-in"
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  loading="lazy"
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
                <p className="text-dark/80 mb-6">{post.description}</p>
                <div className="bottom-4 absolute">
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
                </div>
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
