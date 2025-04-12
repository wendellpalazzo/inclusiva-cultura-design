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
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLayoutEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
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
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/doe" element={<Doe />} />
                <Route path="/voluntarie-se" element={<Volunteer />} />
                <Route path="/parcerias" element={<Partnership />} />
                <Route path="/projetos/:slug" element={<ProjectDetails />} />
                <Route path="/blog/:slug" element={<BlogDetails />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ReactLenis>
    </HelmetProvider>
  );
};

export default App;
