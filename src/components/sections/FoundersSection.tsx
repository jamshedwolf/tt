
import { Github, Twitter, Linkedin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const founders = [
  {
    name: "Babar Raza",
    position: "Founder & Managing Director",
    image: "/lovable-uploads/2ac344ca-869b-47a4-be1c-ef583bbb367c.png",
    bio: "Babar is a seasoned Full Stack Developer and Blockchain Expert who has built a trusted name in the tech industry. With a portfolio of over 500 global clients and more than 1,000 successfully completed projects, his passion lies in delivering scalable, secure, and smart digital solutions.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Karim Baig",
    position: "Founder & Chief Executive Officer",
    image: "/lovable-uploads/a8993f6c-ffee-4aea-85a9-bb5e21174b46.png",
    bio: "Karim is a Google-Certified UX/UI Designer known for his eye for detail and ability to translate ideas into intuitive digital experiences. With a strong track record of 1,000+ design projects, he specializes in creating interfaces that not only look stunning but also drive user engagement.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  }
];

const FoundersSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-crypto-purple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-crypto-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-crypto-purple/10 text-crypto-purple-light border border-crypto-purple/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-crypto-purple mr-2 animate-pulse"></span>
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient">Founders</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-crypto mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The visionaries behind Triangle Software Technologies.
          </p>
        </div>
        
        {isMobile ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {founders.map((founder, index) => (
                <CarouselItem key={index} className="basis-full">
                  <FounderCard founder={founder} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-10 h-10 -left-5 bg-crypto-purple/10 border-crypto-purple/30 text-white hover:bg-crypto-purple/20" />
            <CarouselNext className="w-10 h-10 -right-5 bg-crypto-purple/10 border-crypto-purple/30 text-white hover:bg-crypto-purple/20" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <FounderCard key={index} founder={founder} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Extracted component for founder card to maintain DRY principle
const FounderCard = ({ founder }: { founder: typeof founders[0] }) => {
  return (
    <div className="crypto-card group perspective-1000 h-[550px] relative transform-gpu transition-all duration-1000 hover:shadow-[0_20px_50px_-10px_rgba(139,92,246,0.4)]">
      <div className="preserve-3d relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180">
        {/* Front of the card */}
        <div className="backface-hidden absolute inset-0 p-0 overflow-hidden bg-gradient-to-br from-crypto-dark/90 via-crypto-purple/10 to-crypto-blue/30">
          <div className="relative h-[60%] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-crypto-dark/90 z-10"></div>
            <img 
              src={founder.image} 
              alt={founder.name}
              className="w-full h-full object-cover object-center lg:object-top transform transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-crypto opacity-20 mix-blend-overlay"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-white/10 opacity-50"></div>
            <div className="absolute bottom-[-50px] left-[-30px] w-40 h-40 rounded-full border border-crypto-purple/20"></div>
            <div className="absolute top-[-30px] right-[-20px] w-32 h-32 blur-3xl bg-crypto-purple/10 rounded-full"></div>
          </div>
          
          <div className="p-8 relative z-10">
            <div className="absolute top-[-2rem] left-8 right-8 h-1 bg-gradient-crypto rounded-full shadow-[0_0_10px_rgba(139,92,246,0.6)]"></div>
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white via-crypto-purple-light to-crypto-blue bg-clip-text text-transparent">
              {founder.name}
            </h3>
            <p className="text-crypto-purple-light mb-4 tracking-wider">{founder.position}</p>
            <p className="text-gray-300 line-clamp-3">{founder.bio}</p>
            
            <div className="absolute bottom-8 right-8">
              <div className="flex gap-3 items-center">
              
                {/* <div className="w-10 h-10 rounded-full bg-crypto-purple/20 border border-crypto-purple/40 flex items-center justify-center text-white animate-pulse">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Back of the card */}
        <div className="backface-hidden rotate-y-180 absolute inset-0 bg-gradient-to-br from-crypto-dark via-crypto-purple/30 to-crypto-dark border-2 border-crypto-purple/20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.2)_0%,transparent_70%)]"></div>
          <div className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-crypto-purple/50">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                    {founder.name}
                  </h3>
                  <p className="text-crypto-purple-light">{founder.position}</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">{founder.bio}</p>
              
              {/* Skills or expertise */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3 text-white">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {founder.name === "Babar Raza" ? (
                    <>
                      <span className="px-3 py-1 rounded-full bg-crypto-purple/20 text-xs border border-crypto-purple/40">Full Stack Development</span>
                      <span className="px-3 py-1 rounded-full bg-crypto-blue/20 text-xs border border-crypto-blue/40">Blockchain</span>
                      <span className="px-3 py-1 rounded-full bg-crypto-teal/20 text-xs border border-crypto-teal/40">Smart Contracts</span>
                      <span className="px-3 py-1 rounded-full bg-crypto-pink/20 text-xs border border-crypto-pink/40">Web3</span>
                    </>
                  ) : (
                    <>
                      <span className="px-3 py-1 rounded-full bg-crypto-purple/20 text-xs border border-crypto-purple/40">UX/UI Design</span>
                      <span className="px-3 py-1 rounded-full bg-crypto-blue/20 text-xs border border-crypto-blue/40">Product Design</span>
                      <span className="px-3 py-1 rounded-full bg-crypto-teal/20 text-xs border border-crypto-teal/40">Branding</span>
                      <span className="px-3 py-1 rounded-full bg-crypto-pink/20 text-xs border border-crypto-pink/40">User Research</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            {/* Social links */}
            <div className="mt-auto pt-6 border-t border-crypto-purple/20">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <a 
                    href={founder.social.twitter}
                    className="w-10 h-10 rounded-full bg-crypto-purple/10 border border-crypto-purple/30 flex items-center justify-center text-crypto-purple-light hover:bg-crypto-purple/20 transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href={founder.social.linkedin}
                    className="w-10 h-10 rounded-full bg-crypto-purple/10 border border-crypto-purple/30 flex items-center justify-center text-crypto-purple-light hover:bg-crypto-purple/20 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href={founder.social.github}
                    className="w-10 h-10 rounded-full bg-crypto-purple/10 border border-crypto-purple/30 flex items-center justify-center text-crypto-purple-light hover:bg-crypto-purple/20 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
                
                <button className="text-sm text-crypto-purple-light hover:text-white transition-colors flex items-center gap-1">
                  <span>Contact</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;
