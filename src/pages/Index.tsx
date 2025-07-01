import { Suspense, lazy } from "react";
import Seo from "@/lib/seo";


const Hero = lazy(() => import("@/components/Hero"))
const AboutUs = lazy(() => import("@/components/AboutUs"));
const OurHistory = lazy(() => import("@/components/OurHistory"));
const OurProjects = lazy(() => import("@/components/OurProjects"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Blog = lazy(() => import("@/components/Blog"));
const Contact = lazy(() => import("@/components/Contact"));

const FrequentQuestions = lazy(() => import("@/components/FrequentQuestions"));

const Index = () => {
  return (
    <>
      <Seo
        title=""
        description="Conheça o Instituto Mãos de Ouro: uma instituição dedicada à promoção da cultura surda e inclusão social, oferecendo cursos, eventos e projetos que transformam vidas."
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Instituto Mãos de Ouro - Transformando Vidas",
          url: "https://institutomaosdeouro.org.br/",
        }}
        image="/assets/images/logo-instituto-maos-de-ouro.webp"
      />
      <div className="min-h-dvh">
        <Hero />
        <Suspense fallback={null}>
          <AboutUs />
        </Suspense>
        <Suspense fallback={null}>
          <OurHistory />
        </Suspense>
        <Suspense fallback={null}>
          <OurProjects />
        </Suspense>
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={null}>
          <Blog />
        </Suspense>
        <Suspense fallback={null}>
          <FrequentQuestions />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
