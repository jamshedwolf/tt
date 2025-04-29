
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-crypto-dark border-t border-crypto-purple/20 pt-16 pb-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-crypto-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-crypto-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 bg-gradient-crypto rounded-lg opacity-80"></div>
                <div className="absolute inset-0.5 bg-crypto-dark rounded-lg flex items-center justify-center">
                  <span className="font-bold text-lg">T</span>
                </div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-purple">Triangle</span>
            </a>
            <p className="text-gray-400 mb-4">
              Transforming ideas into digital reality with innovative blockchain solutions.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="h-8 w-8 rounded-full bg-crypto-dark hover:bg-crypto-purple/20 border border-crypto-purple/30 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-crypto-dark hover:bg-crypto-purple/20 border border-crypto-purple/30 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-crypto-dark hover:bg-crypto-purple/20 border border-crypto-purple/30 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-crypto-dark hover:bg-crypto-purple/20 border border-crypto-purple/30 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-crypto-dark hover:bg-crypto-purple/20 border border-crypto-purple/30 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                <Github size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors hover:pl-1 duration-200 block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Blockchain Development', 'Smart Contract', 'Cryptocurrency', 'Web Development', 'App Development', 'UI/UX Design', 'AI Solutions'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors hover:pl-1 duration-200 block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="text-crypto-purple mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">123 Blockchain Avenue, Digital City, 10010</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-crypto-purple flex-shrink-0" size={18} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">+123 456 7890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-crypto-purple flex-shrink-0" size={18} />
                <a href="mailto:info@triangle.com" className="text-gray-400 hover:text-white transition-colors">info@triangle.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-crypto-purple/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Triangle Software Technologies. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
