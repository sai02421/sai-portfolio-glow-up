
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "About", href: "/" },
    { name: "Writing", href: "/writing" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#contact" }
  ];
  
  return (
    <>
      {/* Floating dots background */}
      <div className="floating-dots">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
        <div className="dot dot-5"></div>
      </div>

      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="floating-nav px-6 py-3 flex items-center justify-between min-w-[600px]">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center">
              <span className="text-white font-bold text-lg">SI</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                className={`nav-link ${location.pathname === link.href ? 'bg-purple-100 text-purple-600' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="hidden md:block">
            <Button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">
              <Download size={16} className="mr-2" />
              Download CV
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 floating-nav p-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  className={`nav-link ${location.pathname === link.href ? 'bg-purple-100 text-purple-600' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full">
                <Download size={16} className="mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
