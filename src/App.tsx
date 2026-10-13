import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from '@studio-freight/lenis';

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
      normalizeWheel: true,
      autoResize: true,
      syncTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Stop Lenis during route transitions
    const stopLenis = () => lenis.stop();
    const startLenis = () => lenis.start();

    window.addEventListener('beforeunload', stopLenis);
    window.addEventListener('load', startLenis);

    return () => {
      lenis.destroy();
      window.removeEventListener('beforeunload', stopLenis);
      window.removeEventListener('load', startLenis);
    };
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {isLoading && <Loader onComplete={handleLoaderComplete} />}
        
        <BrowserRouter>
          <div className={`relative ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
            {/* Particle Background */}
            <div className="particles-bg" />
            
            {/* Custom Cursor - Desktop Only */}
            <CustomCursor />
            
            {/* Navigation */}
            <Navbar />
            
            {/* Main Content */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Work />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            {/* Footer */}
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
