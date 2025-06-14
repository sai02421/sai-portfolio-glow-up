
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Competencies", href: "#competencies" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
      style={{ backgroundColor: isScrolled ? 'rgba(28, 37, 51, 0.9)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold" style={{ color: '#E2E8F0' }}>Sai Iyer</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="transition-colors"
              style={{ color: '#94A3B8' }}
              onMouseEnter={(e) => e.target.style.color = '#60A5FA'}
              onMouseLeave={(e) => e.target.style.color = '#94A3B8'}
            >
              {link.name}
            </a>
          ))}
          
          <Button 
            className="transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#3B82F6', color: '#F1F5F9' }}
          >
            <a href="/sai-iyer-cv.pdf" download>Download CV</a>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          style={{ color: '#E2E8F0' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-md border-b" style={{ backgroundColor: 'rgba(28, 37, 51, 0.95)', borderColor: '#334155' }}>
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="block transition-colors"
                style={{ color: '#94A3B8' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <Button 
              className="w-full transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#3B82F6', color: '#F1F5F9' }}
            >
              <a href="/sai-iyer-cv.pdf" download>Download CV</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
