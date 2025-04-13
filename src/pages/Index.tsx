import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { lazy, useEffect } from "react";

const AboutUs = lazy(() => import("@/components/AboutUs"));
const OurHistory = lazy(() => import("@/components/OurHistory"));
const OurProjects = lazy(() => import("@/components/OurProjects"));
const HowToHelp = lazy(() => import("@/components/HowToHelp"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Blog = lazy(() => import("@/components/Blog"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
import Seo from "@/lib/seo";
import { FrequentQuestions } from "@/components/FrequentQuestions";

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
        image="/assets/images/logo-instituto-maos-de-ouro.png"
      />
      <div className="min-h-dvh">
        <Header />
        <Hero />
        <AboutUs />
        <OurHistory />
        <OurProjects />
        <HowToHelp />
        <Testimonials />
        <Blog />
        <FrequentQuestions />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
