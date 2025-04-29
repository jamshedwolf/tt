
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-crypto-darker/90 backdrop-blur-lg border-b border-crypto-purple/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 bg-gradient-crypto rounded-lg opacity-80 animate-pulse"></div>
              <div className="absolute inset-0.5 bg-crypto-dark rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">T</span>
              </div>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-purple">
              Triangle
            </span>
          </a>

          <nav className="hidden lg:flex items-center space-x-1">
            {["Home", "Services", "About", "Portfolio", "Testimonials", "Team", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-crypto-purple group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-crypto-purple/20"
            >
              Login
            </Button>
            <Button className="bg-gradient-purple hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-crypto-dark/95 backdrop-blur-lg border-b border-crypto-purple/20 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {["Home", "Services", "About", "Portfolio", "Testimonials", "Team", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors border-l-2 border-crypto-purple/30 hover:border-crypto-purple"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <div className="flex flex-col space-y-2 pt-2 border-t border-crypto-purple/20 mt-2">
              <Button
                variant="ghost"
                className="justify-start text-gray-300 hover:text-white hover:bg-crypto-purple/20"
              >
                Login
              </Button>
              <Button className="bg-gradient-purple hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
