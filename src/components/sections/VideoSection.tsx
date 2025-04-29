
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

const VideoSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative py-20 overflow-hidden bg-crypto-dark/50">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-crypto-purple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-crypto-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-crypto-purple/10 text-crypto-purple-light border border-crypto-purple/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-crypto-purple mr-2 animate-pulse"></span>
            WHAT WE DO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do?</h2>
          <div className="w-16 h-1 bg-gradient-crypto mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            At Triangle Software Technologies, we specialize in creating innovative digital solutions that help businesses thrive in the digital world.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative group rounded-2xl overflow-hidden crypto-card border-2 border-crypto-purple/20">
            <AspectRatio ratio={16/9}>
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Triangle Software Technologies Demo"
              />
            </AspectRatio>
            
            <div className="absolute inset-0 bg-gradient-to-t from-crypto-darker via-transparent to-transparent">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-16 h-16 rounded-full bg-crypto-purple/90 flex items-center justify-center text-white transform hover:scale-110 transition-transform">
                  <Play size={24} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
