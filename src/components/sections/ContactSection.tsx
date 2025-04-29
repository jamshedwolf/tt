
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    // Reset submission state after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-crypto-purple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-crypto-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-crypto-purple/10 text-crypto-purple-light border border-crypto-purple/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-crypto-purple mr-2 animate-pulse"></span>
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-crypto mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our blockchain solutions or want to discuss a project?
            Reach out to us, and we'll be happy to assist you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact information */}
          <div className="flex flex-col h-full">
            <div className="crypto-card p-6 md:p-8 mb-6 flex-grow">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  
                  
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-crypto-blue/20 text-crypto-blue flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Whatsapp Number</h4>
                    <p className="text-gray-400">+923554315708</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-crypto-teal/20 text-crypto-teal flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Address</h4>
                    <p className="text-gray-400">sales@0xtriangle.io</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-crypto-pink/20 text-crypto-pink flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Live Chat</h4>
                    <p className="text-gray-400">Available 24/7 for urgent inquiries</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="crypto-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Monday:</span>
                  <span>24/7</span>
                </div>
                
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-crypto-dark border border-crypto-purple/30 text-white focus:border-crypto-purple focus:ring-1 focus:ring-crypto-purple/50 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-crypto-dark border border-crypto-purple/30 text-white focus:border-crypto-purple focus:ring-1 focus:ring-crypto-purple/50 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-crypto-dark border border-crypto-purple/30 text-white focus:border-crypto-purple focus:ring-1 focus:ring-crypto-purple/50 focus:outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-crypto-dark border border-crypto-purple/30 text-white focus:border-crypto-purple focus:ring-1 focus:ring-crypto-purple/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-crypto hover:opacity-90 transition-opacity flex items-center justify-center gap-2 py-6"
              >
                Send Message <Send size={16} />
              </Button>
              
              {formSubmitted && (
                <div className="mt-4 p-3 rounded-lg bg-green-900/20 text-green-400 border border-green-500/30 text-center">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
