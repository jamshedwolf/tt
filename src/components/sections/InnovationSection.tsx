
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const InnovationSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-crypto-purple/10 to-transparent rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-crypto-blue/10 to-transparent rounded-full filter blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 border-t-2 border-l-2 border-crypto-purple opacity-30"></div>
              
              <p className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-crypto-purple/10 text-crypto-purple-light border border-crypto-purple/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-crypto-purple mr-2 animate-pulse"></span>
                About Us
              </p>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Leading Tech Innovation From{" "}
                <span className="relative">
                  <span className="text-gradient">Digital Frontiers</span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-crypto opacity-30"></div>
                </span>
              </h2>
              
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                At Triangle, we're at the forefront of blockchain innovation, creating solutions that define the future of digital technology. With our expert team and cutting-edge approach, we deliver transformative results for businesses across industries.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  "Blockchain Experts",
                  "Smart Contract Development",
                  "DeFi Solutions",
                  "Web3 Integration",
                  "Enterprise Solutions",
                  "NFT Platforms",
                  "Cryptocurrency Development",
                  "Security Audits"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-crypto-purple/20 flex items-center justify-center group-hover:bg-crypto-purple/30 transition-colors">
                      <Check className="h-3.5 w-3.5 text-crypto-purple" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-crypto hover:opacity-90 transition-opacity text-lg px-8">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-crypto-purple/50 hover:bg-crypto-purple/10 text-lg px-8">
                  Our Process
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main image with enhanced glass effect */}
              <div className="relative rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <div className="aspect-[4/3] bg-crypto-dark p-3 rounded-2xl border border-crypto-purple/30 shadow-[0_0_50px_rgba(139,92,246,0.2)]">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                      alt="Blockchain Technology Innovation" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-crypto-dark/90"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements with animation */}
              <div className="absolute top-6 left-6 glass-effect px-4 py-2 text-sm animate-float">
                <span className="text-crypto-purple font-medium">Blockchain</span> Development
              </div>
              
              <div className="absolute bottom-6 left-6 glass-effect px-4 py-2 text-sm animate-float" style={{ animationDelay: "0.2s" }}>
                <span className="text-crypto-teal font-medium">395+</span> Projects
              </div>
              
              <div className="absolute top-6 right-6 glass-effect px-4 py-2 text-sm animate-float" style={{ animationDelay: "0.4s" }}>
                <span className="w-2 h-2 rounded-full bg-crypto-neon mr-2 animate-pulse inline-block"></span>
                Live Demo
              </div>
              
              <div className="absolute bottom-6 right-6 glass-effect px-4 py-2 text-sm animate-float" style={{ animationDelay: "0.6s" }}>
                <span className="text-crypto-blue font-medium">100%</span> Secure
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
