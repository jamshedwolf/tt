
import { Shield, Laptop, Award, Zap, ArrowRight } from "lucide-react";

const SolutionCard = ({ icon: Icon, title, description, link = "#" }) => (
  <div className="crypto-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.3)] group">
    <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-crypto-purple/10 text-crypto-purple group-hover:bg-crypto-purple/20 transition-colors">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-3 group-hover:text-crypto-purple-light transition-colors">{title}</h3>
    <p className="text-gray-400 mb-5">{description}</p>
    <a 
      href={link} 
      className="inline-flex items-center text-crypto-purple hover:text-crypto-purple-light font-medium transition-colors"
    >
      Learn More <ArrowRight className="ml-1 h-4 w-4" />
    </a>
  </div>
);

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 relative overflow-hidden bg-crypto-dark/50">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-crypto-purple/10 text-crypto-purple-light border border-crypto-purple/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-crypto-purple mr-2 animate-pulse"></span>
            Our Offerings
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="text-gradient">Digital Solutions</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-crypto mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge blockchain technology and digital transformation services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SolutionCard 
            icon={Shield}
            title="Blockchain Security"
            description="Advanced cryptographic solutions ensuring maximum security for your blockchain applications and smart contracts."
          />
          
          <SolutionCard 
            icon={Laptop}
            title="Custom Development"
            description="Tailored blockchain development services designed to meet your specific business requirements and objectives."
          />
          
          <SolutionCard 
            icon={Award}
            title="Quality Assurance"
            description="Comprehensive testing and quality assurance for all blockchain applications and smart contracts."
          />
          
          <SolutionCard 
            icon={Zap}
            title="Rapid Deployment"
            description="Quick and efficient deployment of blockchain solutions with minimal disruption to your operations."
          />
          
          <SolutionCard 
            icon={Shield}
            title="Data Protection"
            description="Robust data protection mechanisms ensuring compliance with regulations and industry standards."
          />
          
          <SolutionCard 
            icon={Laptop}
            title="System Integration"
            description="Seamless integration of blockchain solutions with your existing systems and infrastructure."
          />
          
          <SolutionCard 
            icon={Award}
            title="Expert Consultation"
            description="Strategic guidance and expertise from our team of blockchain specialists and technology consultants."
          />
          
          <SolutionCard 
            icon={Zap}
            title="24/7 Support"
            description="Round-the-clock technical support and maintenance for all your blockchain applications and systems."
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
