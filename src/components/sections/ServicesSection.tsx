
import { useRef } from "react";
import { Code, Terminal, Pen, Phone, Database, PenTool, Image, Video, Brush, Package, Stethoscope, BookOpen, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Crafting fast, responsive, and scalable websites tailored to your business needs.",
    color: "purple"
  },
  {
    icon: Phone,
    title: "App Development",
    description: "Building intuitive mobile and web applications for a seamless user experience.",
    color: "blue"
  },
  {
    icon: Pen,
    title: "Web UX/UI Design",
    description: "Designing user-friendly and visually appealing website interfaces that drive engagement.",
    color: "teal"
  },
  {
    icon: PenTool,
    title: "App UX/UI Design",
    description: "Creating stunning app interfaces for better user interaction and conversion.",
    color: "pink"
  },
  {
    icon: Database,
    title: "Blockchain Development",
    description: "Developing secure and decentralized blockchain-based platforms.",
    color: "indigo"
  },
  {
    icon: Terminal,
    title: "Blockchain UX/UI Design",
    description: "Designing intuitive blockchain interfaces for an enhanced digital experience.",
    color: "blue"
  },
  {
    icon: Image,
    title: "NFT Design",
    description: "Creating unique and high-quality NFT designs for the digital marketplace.",
    color: "purple"
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Delivering professional video editing solutions to enhance your brand storytelling.",
    color: "teal"
  },
  {
    icon: Brush,
    title: "Logo & Social Media Design",
    description: "Crafting impactful logos and social media graphics to establish your brand identity.",
    color: "pink"
  },
  {
    icon: Package,
    title: "Branding & Packaging",
    description: "Designing cohesive branding and packaging solutions to stand out in the market.",
    color: "purple"
  },
  {
    icon: Stethoscope,
    title: "Medical Billing",
    description: "Providing accurate, timely, and HIPAA-compliant medical billing services to healthcare providers.",
    color: "blue"
  },
  {
    icon: BookOpen,
    title: "Bookkeeping",
    description: "Offering professional bookkeeping services to help businesses manage finances and maintain compliance.",
    color: "teal"
  }
];

const ServicesSection = () => {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-crypto-purple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-crypto-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-crypto-purple/10 text-crypto-purple-light border border-crypto-purple/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-crypto-purple mr-2 animate-pulse"></span>
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Digital Solutions</h2>
          <div className="w-16 h-1 bg-gradient-crypto mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a wide range of services to help your business thrive in the digital world.
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
              {services.map((service, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div 
                    className="crypto-card p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.3)] group h-full"
                  >
                    <div className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-crypto-${service.color}/20 text-crypto-${service.color} group-hover:bg-crypto-${service.color}/30 transition-colors`}>
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-crypto-purple-light transition-colors">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-crypto-purple hover:text-crypto-purple-light font-medium transition-colors mt-4"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-10 h-10 -left-5 bg-crypto-purple/10 border-crypto-purple/30 text-white hover:bg-crypto-purple/20" />
            <CarouselNext className="w-10 h-10 -right-5 bg-crypto-purple/10 border-crypto-purple/30 text-white hover:bg-crypto-purple/20" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="crypto-card p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.3)] group"
              >
                <div className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-crypto-${service.color}/20 text-crypto-${service.color} group-hover:bg-crypto-${service.color}/30 transition-colors`}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-crypto-purple-light transition-colors">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-crypto-purple hover:text-crypto-purple-light font-medium transition-colors mt-4"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
