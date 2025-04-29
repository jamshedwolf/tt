import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LayoutGrid, LayoutList, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "DeFi Exchange Platform",
    category: "Blockchain",
    services: ["Smart Contracts", "DeFi", "Web3"],
    image: "https://images.unsplash.com/photo-1639322537231-2f206e06af84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A decentralized exchange platform with automated market making and liquidity pools."
  },
  {
    title: "NFT Marketplace",
    category: "Web3",
    services: ["NFT", "Marketplace", "Web3"],
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "An NFT marketplace for digital artists to mint, showcase and sell their artwork."
  },
  {
    title: "Blockchain Wallet",
    category: "Cryptocurrency",
    services: ["Wallet", "Security", "Cryptocurrency"],
    image: "https://images.unsplash.com/photo-1638913974023-cef988e81629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A secure digital wallet for managing multiple cryptocurrencies and tokens."
  },
  {
    title: "Smart Contract Audit",
    category: "Security",
    services: ["Smart Contracts", "Security", "Audit"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive security audit of smart contracts for a major DeFi protocol."
  },
  {
    title: "DAO Governance Platform",
    category: "Blockchain",
    services: ["DAO", "Governance", "Smart Contracts"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A decentralized autonomous organization platform with voting and proposal systems."
  },
  {
    title: "Crypto Trading Bot",
    category: "AI",
    services: ["AI", "Trading", "Cryptocurrency"],
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "An AI-powered trading bot for cryptocurrency markets with advanced analytics."
  }
];

const allServices = [...new Set(projects.flatMap(project => project.services))];

const WorksSection = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [filter, setFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");
  
  const filteredProjects = projects.filter(project => {
    if (filter !== "All" && project.category !== filter) return false;
    if (serviceFilter !== "All" && !project.services.includes(serviceFilter)) return false;
    return true;
  });

  const categories = ["All", "Blockchain", "Web3", "Cryptocurrency", "Security", "AI"];
  
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden bg-crypto-dark/50">
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-crypto-purple/10 text-crypto-purple-light border border-crypto-purple/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-crypto-purple mr-2 animate-pulse"></span>
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Recent <span className="text-gradient">Works</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-crypto mx-auto mb-6 rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
            <p className="w-full text-center text-sm text-gray-400 mb-2">Filter by Category:</p>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === category
                    ? "bg-crypto-purple text-white"
                    : "bg-crypto-dark border border-crypto-purple/30 text-gray-300 hover:bg-crypto-purple/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
            <p className="w-full text-center text-sm text-gray-400 mb-2">Filter by Service:</p>
            <button
              onClick={() => setServiceFilter("All")}
              className={`px-3 py-1 rounded-full text-xs transition-all ${
                serviceFilter === "All"
                  ? "bg-crypto-purple text-white"
                  : "bg-crypto-dark border border-crypto-purple/30 text-gray-300 hover:bg-crypto-purple/10"
              }`}
            >
              All
            </button>
            {allServices.map((service) => (
              <button
                key={service}
                onClick={() => setServiceFilter(service)}
                className={`px-3 py-1 rounded-full text-xs transition-all ${
                  serviceFilter === service
                    ? "bg-crypto-purple text-white"
                    : "bg-crypto-dark border border-crypto-purple/30 text-gray-300 hover:bg-crypto-purple/10"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
          
          <div className="flex bg-crypto-dark border border-crypto-purple/30 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${
                viewMode === "grid" ? "bg-crypto-purple/20 text-white" : "text-gray-400"
              }`}
            >
              <LayoutGrid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${
                viewMode === "list" ? "bg-crypto-purple/20 text-white" : "text-gray-400"
              }`}
            >
              <LayoutList size={20} />
            </button>
          </div>
        </div>
        
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredProjects.map((project, idx) => (
              <div 
                key={idx} 
                className="crypto-card overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.3)]"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-crypto-dark via-crypto-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, serviceIdx) => (
                          <span key={serviceIdx} className="px-2 py-1 text-xs rounded bg-crypto-purple/20 text-crypto-purple-light border border-crypto-purple/30">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-crypto-purple-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-crypto-purple hover:text-crypto-purple-light font-medium transition-colors"
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col space-y-4 mb-10">
            {filteredProjects.map((project, idx) => (
              <div 
                key={idx} 
                className="crypto-card p-4 flex flex-col md:flex-row gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.3)]"
              >
                <div className="md:w-1/4 h-48 md:h-auto overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/4">
                  <div className="flex flex-wrap items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold hover:text-crypto-purple-light transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 text-xs rounded bg-crypto-purple/20 text-crypto-purple-light border border-crypto-purple/30">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-crypto-purple hover:text-crypto-purple-light font-medium transition-colors"
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center">
          <Button className="bg-gradient-purple hover:opacity-90 transition-opacity">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
