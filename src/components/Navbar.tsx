
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Writing", href: "/writing" },
    { name: "Downloads", href: "/downloads" },
    { name: "Newsletter", href: "/newsletter" }
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
        <div className="floating-nav px-6 py-3 flex items-center space-x-1">
          {/* Logo in center */}
          <div className="flex items-center justify-center flex-1">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 absolute left-6">
            {navLinks.slice(0, 3).map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                className={`nav-link ${location.pathname === link.href ? 'bg-blue-100 text-blue-600' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-2 absolute right-6">
            {navLinks.slice(3).map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                className={`nav-link ${location.pathname === link.href ? 'bg-blue-100 text-blue-600' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden absolute right-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 floating-nav p-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  className={`nav-link ${location.pathname === link.href ? 'bg-blue-100 text-blue-600' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
