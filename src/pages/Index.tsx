
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import OurHistory from "@/components/OurHistory";
import OurProjects from "@/components/OurProjects";
import LearningSteps from "@/components/LearningSteps";
import HowToHelp from "@/components/HowToHelp";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Accessibility from "@/components/Accessibility";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <OurHistory />
      <OurProjects />
      {/* <LearningSteps /> */}
      <HowToHelp />
      <Testimonials />
      <Blog />
      <Contact />
      {/* <Accessibility /> */}
      <Footer />
    </div>
  );
};

export default Index;
