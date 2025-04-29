
import { ArrowRight, Code, Database, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  // Service tags that will display around the rotating shapes
  const serviceTags = [
    { name: "Web UX/UI Design", position: "top-10 left-1/4", delay: "-1s" },
    { name: "App UX/UI Design", position: "top-1/3 right-1/4", delay: "-2s" },
    { name: "3D Design", position: "bottom-1/3 left-1/4", delay: "-3s" },
    { name: "App Development", position: "bottom-1/4 right-1/3", delay: "-4s" },
    { name: "Web Development", position: "top-1/2 right-1/5", delay: "-5s" },
    { name: "Smart Contracts", position: "bottom-1/3 left-1/3", delay: "-3s" },
    { name: "NFT", position: "bottom-1/4 right-1/3", delay: "-4s" },
    { name: "Web3", position: "top-1/4 left-1/4", delay: "-1s" },
    { name: "DeFi", position: "top-1/3 right-1/4", delay: "-2s" },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-crypto-purple/20 rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-crypto-blue/20 rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 pt-8 lg:pt-0">
            <div className="mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-crypto-purple/20 text-crypto-purple-light border border-crypto-purple/30 inline-flex items-center">
                <span className="  rounded-full bg-crypto-purple mr-2 animate-pulse"></span>
                Triangle Software Technologies
              </span>
            </div>
            
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-4">
              Transforming Ideas Into
              <span className="bg-clip-text text-transparent bg-gradient-crypto block mt-1">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              At Triangle Software Technologies, we bring innovation to life through cutting-edge Web & App Development, UX/UI Design, Blockchain Solutions, and more. Let's build something extraordinary together!
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button className="bg-gradient-crypto hover:opacity-90 transition-opacity">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-crypto-purple/50 hover:bg-crypto-purple/10">
                Explore Services
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { icon: Code, label: "Projects Completed", value: "1000+" },
                { icon: Shield, label: "Global Clients", value: "500+" },
                { icon: BarChart3, label: "Client Satisfaction", value: "98%" },
              ].map((stat, index) => (
                <div key={index} className="p-3 rounded-xl bg-crypto-dark/80 border border-crypto-purple/20 backdrop-blur-sm">
                  <div className="mb-2">
                    <stat.icon className="text-crypto-purple h-5 w-5" />
                  </div>
                  <p className="font-bold text-xl">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
              {/* 3D Blockchain Visualization Element */}
              <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] relative animate-float">
                {/* Core hexagon */}
                <div className="hexagon absolute inset-1/4 bg-gradient-crypto opacity-90 shadow-[0_0_30px_rgba(139,92,246,0.6)] z-20"></div>
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-rotate-slow">
                  <div className="hexagon w-16 h-16 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-crypto-blue shadow-[0_0_15px_rgba(14,165,233,0.6)]"></div>
                </div>
                
                <div className="absolute inset-0 animate-rotate-slow" style={{ animationDelay: '-3s' }}>
                  <div className="hexagon w-16 h-16 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-crypto-teal shadow-[0_0_15px_rgba(20,184,166,0.6)]"></div>
                </div>
                
                <div className="absolute inset-0 animate-rotate-slow" style={{ animationDelay: '-6s' }}>
                  <div className="hexagon w-16 h-16 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-crypto-pink shadow-[0_0_15px_rgba(236,72,153,0.6)]"></div>
                </div>
                
                <div className="absolute inset-0 animate-rotate-slow" style={{ animationDelay: '-9s' }}>
                  <div className="hexagon w-16 h-16 absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-crypto-indigo shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>
                </div>
                
                {/* Connection lines (pseudo-elements via custom CSS) */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-50">
                  <div className="border-t border-r border-crypto-purple/30"></div>
                  <div className="border-t border-l border-crypto-purple/30"></div>
                  <div className="border-b border-r border-crypto-purple/30"></div>
                  <div className="border-b border-l border-crypto-purple/30"></div>
                </div>
              </div>
              
              {/* Service Tags around the rotating shapes */}
              {serviceTags.map((service, index) => (
                <div 
                  key={index} 
                  className={`absolute ${service.position} px-3 py-1 rounded-full text-xs bg-crypto-dark border border-crypto-purple/50 text-crypto-purple-light animate-float z-10`} 
                  style={{ 
                    animationDelay: service.delay,
                    transform: `translateZ(${index * 5}px)`,
                    pointerEvents: 'none'
                  }}
                >
                  {service.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
