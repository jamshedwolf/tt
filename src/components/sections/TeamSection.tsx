
import { Twitter, Linkedin, Github } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ali from "./ali.jpg"
import ta from "./ta.jpg"
import buri from "./buri.jpg"
// import baji from "./baji.jpg"

const teamMembers = [
  {
    name: "Baber Raza",
    position: "Fullstack Developer and Blockchain Expert",
    image: "/lovable-uploads/c6cb3200-341c-4cf4-ac4e-f2c371d2c3bd.png",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Karim Baig",
    position: "Fullstack UI/UX Designer",
    image: "/lovable-uploads/700b0db6-97b3-411d-b05c-8cbf21c611bf.png",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  
  {
    name: "Imran",
    position: "Graphic Designer Lead",
    image: "/lovable-uploads/d48b2ad8-f423-4479-adca-314eec24ffc0.png",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Sultan",
    position: "NFT designer",
    image: "/lovable-uploads/aaf24a2e-00aa-441d-bc26-27b4079071b2.png",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Jamshed Ali",
    position: "Frontend Lead",
    image: ali,
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Hasan ",
    position: "UI/UX Lead",
    image: "/lovable-uploads/64533f45-2a13-4d3c-b4fb-e8d256765d16.png",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "M Irfan",
    position: "Wordpress Develper",
    image: "/lovable-uploads/6ebe4b17-1e55-4164-a18f-ad1885dc21f5.png",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Mehreen Abbas",
    position: "Medical billing specalist",
    image: "https://tse2.mm.bing.net/th?id=OIP.tAN_NLzettmRRm8hyiZfTgHaFj&pid=Api&P=0&h=220",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Burhan",
    position: "3D Designer",
    image: buri,
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Tariq",
    position: "Bookkeeper",
    image: ta,
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Anita ",
    position: "Medical Billing specalist",
    image: "https://tse4.mm.bing.net/th?id=OIP.g9TIr8cnveAsfyDVN0MWAgHaJB&pid=Api&P=0&h=220",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Daniel Martinez",
    position: "Product Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
];

const TeamSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="team" className="py-20 relative overflow-hidden bg-crypto-dark/50">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-crypto-purple/10 text-crypto-purple-light border border-crypto-purple/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-crypto-purple mr-2 animate-pulse"></span>
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-crypto mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our team consists of passionate experts who are dedicated to pushing the boundaries 
            of blockchain technology and delivering exceptional solutions.
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
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <TeamMemberCard member={member} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-10 h-10 -left-5 bg-crypto-purple/10 border-crypto-purple/30 text-white hover:bg-crypto-purple/20" />
            <CarouselNext className="w-10 h-10 -right-5 bg-crypto-purple/10 border-crypto-purple/30 text-white hover:bg-crypto-purple/20" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Extracted component for team member card to maintain DRY principle
const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => {
  return (
    <div 
      className="crypto-card overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.3)]"
    >
      <div className="relative overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-crypto-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 w-full p-4 flex justify-center">
            <div className="flex gap-3">
              <a 
                href={member.social.twitter} 
                className="w-8 h-8 rounded-full bg-crypto-dark/80 backdrop-blur-sm border border-crypto-purple/30 flex items-center justify-center text-gray-300 hover:bg-crypto-purple/20 hover:text-white transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a 
                href={member.social.linkedin} 
                className="w-8 h-8 rounded-full bg-crypto-dark/80 backdrop-blur-sm border border-crypto-purple/30 flex items-center justify-center text-gray-300 hover:bg-crypto-purple/20 hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href={member.social.github} 
                className="w-8 h-8 rounded-full bg-crypto-dark/80 backdrop-blur-sm border border-crypto-purple/30 flex items-center justify-center text-gray-300 hover:bg-crypto-purple/20 hover:text-white transition-colors"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg">{member.name}</h3>
        <p className="text-crypto-purple-light text-sm">{member.position}</p>
      </div>
    </div>
  );
};

export default TeamSection;
