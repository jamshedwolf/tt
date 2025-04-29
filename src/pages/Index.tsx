
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import InnovationSection from "@/components/sections/InnovationSection";
import WorksSection from "@/components/sections/WorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FoundersSection from "@/components/sections/FoundersSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import VideoSection from "@/components/sections/VideoSection";

const Index = () => {
  useEffect(() => {
    const initParticles = async () => {
      try {
        const particles = document.getElementById('particles-js');
        if (particles && window.particlesJS) {
          window.particlesJS('particles-js', {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: "#8B5CF6" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
              },
              opacity: {
                value: 0.3,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#6366F1",
                opacity: 0.2,
                width: 1
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
              },
              modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
              }
            },
            retina_detect: true
          });
        }
      } catch (error) {
        console.error("Failed to initialize particles:", error);
      }
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = initParticles;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-crypto-darker overflow-x-hidden">
      <div id="particles-js" className="fixed inset-0 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <VideoSection />
          <ServicesSection />
          <InnovationSection />
          <WorksSection />
       
          <TestimonialsSection />
          <FoundersSection />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

