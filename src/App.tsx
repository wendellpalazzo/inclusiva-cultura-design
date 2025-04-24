import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Doe from "./pages/Doe";
import Volunteer from "./pages/Volunteer";
import Partnership from "./pages/Partnership";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { ReactLenis } from "lenis/react";
import BlogDetails from "./pages/BlogDetails";
import HowToHelp from "./pages/HowToHelp";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useLayoutEffect } from "react";
import { lenis } from "./lib/lenis";
import Header from "./components/Header";
import Footer from "./components/Footer";


const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  useLayoutEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <HelmetProvider>
      <ReactLenis root>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner richColors={true} expand={true} />
            <BrowserRouter>
              <ScrollToTop />
              <Header/>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/como-ajudar" element={<HowToHelp />} />
                <Route path="/como-ajudar/doe" element={<Doe />} />
                <Route path="/como-ajudar/voluntarie-se" element={<Volunteer />} />
                <Route path="/como-ajudar/parcerias" element={<Partnership />} />
                <Route path="/projetos/:slug" element={<ProjectDetails />} />
                <Route path="/blog/:slug" element={<BlogDetails />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer/>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ReactLenis>
    </HelmetProvider>
  );
};

export default App;
