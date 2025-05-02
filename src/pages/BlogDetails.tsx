import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Link as LinkIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getContent } from "@/lib/contentLoader";
import Seo from "@/lib/seo";
import { SocialShare } from "@/components/SocialShare";

// Define the project type
export interface BlogContent {
  slug?: string;
  title?: string;
  description?: string;
  image?: string;
  color?: string;
  fullDescription?: string;
  date?: string;
  location?: string;
  website?: string;
  gallery?: string[];
  objectives?: string[];
  impact?: string;
  videos?: [[string, number]];
  category: "eventos";
}

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project by id
    if (slug) {
      setLoading(true);
      getContent<BlogContent>("blog", slug)
        .then((data) => {
          setPost(data);
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

  if (!post) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-earth mb-4">
            Post não encontrado
          </h2>
          <p className="mb-6 text-dark/80">
            O post que você está procurando não existe ou foi removido.
          </p>
          <Link to="/" className="btn-primary" viewTransition>
            Voltar para Home
          </Link>
        </div>
      </div>
    );
  }

  const firstVideo =
    post?.videos?.length > 0
      ? post.videos.find((video) => video[1] === 1)
      : null;
  const galleryVideos =
    post?.videos?.length > 0
      ? post.videos
          .filter((video) => video[1] !== 1)
          .sort((a, b) => a[1] - b[1])
      : [];

  return (
    <>
      <Seo
        title={`${post.title}`}
        description={`${post.description}`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Article",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://institutomaosdeouro.org.br/projetos/${post.slug}`,
          },
          headline: post.title,
          description: post.description,
          image: post.image,
          name: "Instituto Mãos de Ouro",
          url: `https://institutomaosdeouro.org.br/projetos/${post.slug}`,
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
            className={`py-20 relative overflow-hidden text-white bg-primary`}
          >
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="container mx-auto px-4 relative z-10">
              <Link
                to="/#blog"
                className="inline-flex items-center text-white hover:text-white/80 font-semibold mb-8 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" /> Voltar para Blog
              </Link>

              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {post.title}
                </h1>
                <div className="w-20 h-1 bg-white mb-8"></div>
                <p className="text-xl mb-8">{post.description}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                    <Calendar size={18} className="mr-2" />
                    <span>{post.date}</span>
                  </div>

                  <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                    <MapPin size={18} className="mr-2" />
                    <span>{post.location}</span>
                  </div>

                  {post.website && (
                    <a
                      href={post.website}
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
                  title="Compartilhe este conteúdo"
                  url={`https://institutomaosdeouro.org.br/blog/${post.slug}`}
                  titleColor="white"
                />
              </div>
            </div>
          </section>

          {/* BlogContent Details */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Full Description */}
                <div className="mb-12">
                  <p className="text-lg text-dark/80 leading-relaxed">
                    {post.fullDescription}
                  </p>
                </div>

                {/* Gallery */}
                <div className="mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {post.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden h-64 relative group  border-b-4 border-primary"
                      >
                        <img
                          loading="lazy"
                          src={image?.[0]}
                          alt={`${post.title} - Imagem ${index + 1}`}
                          data-aos="fade-in"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {image?.[1] && (
                          <div
                            className="absolute w-full bg-slate-900/80 text-white bottom-0 p-2 text-xs"
                            dangerouslySetInnerHTML={{ __html: image?.[1] }}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {firstVideo && (
                  <iframe
                  data-aos="fade-in"
                    key={firstVideo[1]}
                    width="560"
                    height="640"
                    src={firstVideo[0]}
                    title={post.title}
                    loading="lazy"
                    className="border-none w-full aspect-video mb-4"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}

                {galleryVideos.length > 0 && (
                  <div className="grid grid-cols-[repeat(auto-fit,33%)] gap-1 justify-center mb-12">
                    {galleryVideos.map((video, idx) => (
                        <iframe
                        loading="lazy"
                        data-aos="fade-in"
                        key={idx}
                        width="0"
                        height="0"
                        src={video[0]}
                        title={post.title}
                        className="border-none w-full h-auto"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ))}
                  </div>
                )}

                {/* Impact */}
                <div className="mb-12 p-8 rounded-xl bg-gray-50 border border-gray-100">
                  {/* <h2 className="text-3xl font-bold text-earth mb-6">Impacto</h2> */}
                  <p className="text-lg text-dark/80 leading-relaxed">
                    {post.impact}
                  </p>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12 p-8 rounded-xl bg-primary/10">
                  <h2 className="text-3xl font-bold text-earth mb-4">
                    Apoie nosso Instituto
                  </h2>
                  <p className="text-lg text-dark/80 mb-8 max-w-2xl mx-auto">
                    Sua contribuição é fundamental para continuarmos
                    transformando vidas através da educação e da cultura surda.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/como-ajudar/doe" className="btn-primary">
                      Doe Agora
                    </Link>
                  </div>
                </div>
                <div className="mt-12 flex justify-center">
                  <SocialShare
                    title="Compartilhe este conteúdo"
                    url={`https://institutomaosdeouro.org.br/blog/${post.slug}`}
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

export default BlogDetails;
