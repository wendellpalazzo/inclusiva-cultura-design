import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
const Doe = lazy(() => import("./pages/Doe"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const Partnership = lazy(() => import("./pages/Partnership"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const HowToHelp = lazy(() => import("./pages/HowToHelp"));

import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { lenis } from "./lib/lenis";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Loader2 } from "lucide-react";


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
              <Header />
              <Suspense fallback={<div className="min-h-dvh flex items-center justify-center bg-gray-100">
                <div className="text-center p-8">
                  <Loader2 className="animate-spin size-20 stroke-primary ease-in-out" />
                </div>
              </div>}>
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
              </Suspense>
              <Footer />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ReactLenis>
    </HelmetProvider>
  );
};

export default App;
