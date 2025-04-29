
import { useIsMobile } from "@/hooks/use-mobile";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Alex Richardson",
    position: "Product Manager, CryptoVault",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Triangle's expertise in blockchain technology helped us build a secure and scalable wallet solution for our cryptocurrency platform.",
    rating: 5
  },
  {
    name: "Emily Zhang",
    position: "Lead Developer, BlockChain Labs",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "The smart contract audit conducted by Triangle saved us from potential security vulnerabilities. Their attention to detail is impressive.",
    rating: 5
  },
  {
    name: "David Wilson",
    position: "Founder, NFT Marketplace",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Triangle helped us turn our NFT marketplace vision into reality. Their understanding of both blockchain and user experience was crucial.",
    rating: 5
  }
];

const videoTestimonials = [
  {
    name: "Emily Johnson",
    position: "Chief Technology Officer, TechFusion LLC",
    image: "https://images.unsplash.com/photo-1619470232526-20694135bf97?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Triangle's blockchain solutions transformed our financial services platform. Their expertise and dedication to excellence have been instrumental in our success.",
    videoThumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Michael Chen",
    position: "Product Director, InnovateTech Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sarah Williams",
    position: "CEO, NextGen Finance",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const TestimonialsSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-crypto-dark/50">
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-crypto-purple/10 text-crypto-purple-light border border-crypto-purple/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-crypto-purple mr-2 animate-pulse"></span>
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hear From Our <span className="text-gradient">Clients</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-crypto mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Text Testimonials Carousel */}
        <div className="max-w-4xl mx-auto mb-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="crypto-card p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-crypto-purple/30">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-gray-300 italic mb-4 text-lg">"{testimonial.quote}"</p>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-crypto-purple-light">{testimonial.position}</p>
                        <div className="flex gap-1 mt-2 justify-center md:justify-start">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-10 h-10 -left-5 md:left-2 bg-crypto-purple/10 border-crypto-purple/30 text-white hover:bg-crypto-purple/20" />
            <CarouselNext className="w-10 h-10 -right-5 md:right-2 bg-crypto-purple/10 border-crypto-purple/30 text-white hover:bg-crypto-purple/20" />
          </Carousel>
        </div>

        {/* Video Testimonials */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-4">Video Testimonials</h3>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {videoTestimonials.map((testimonial, index) => (
                <CarouselItem key={index} className={`${isMobile ? 'basis-full sm:basis-1/2' : 'md:basis-1/2 lg:basis-1/3'}`}>
                  <div className="crypto-card overflow-hidden group transition-all duration-300 hover:-translate-y-2 p-2 h-full">
                    <div className="relative">
                      <div className="aspect-video md:aspect-[9/16] relative">
                        <img 
                          src={testimonial.videoThumbnail}
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-crypto-darker via-transparent to-transparent">
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="w-14 h-14 rounded-full bg-crypto-purple/90 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                              <Play size={24} className="ml-1" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-crypto-purple">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="text-left">
                              <h4 className="font-semibold text-sm text-white">{testimonial.name}</h4>
                              <p className="text-xs text-gray-300">{testimonial.position}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-10 h-10 -left-5 md:left-2 bg-crypto-purple/10 border-crypto-purple/30 text-white hover:bg-crypto-purple/20" />
            <CarouselNext className="w-10 h-10 -right-5 md:right-2 bg-crypto-purple/10 border-crypto-purple/30 text-white hover:bg-crypto-purple/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
