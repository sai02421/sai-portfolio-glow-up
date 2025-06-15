
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:iyersai24@gmail.com";
  };
  
  return (
    <header className="header-sticky">
      <div className="container-max h-full flex items-center justify-between">
        {/* Logo/Name */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-poppins font-bold text-navy-blue">
            Sai Iyer
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.href}
              className={`text-dark-green hover:text-digital-lavender transition-colors duration-300 font-medium ${
                location.pathname === link.href ? 'text-digital-lavender' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Button 
            onClick={handleContactClick}
            className="btn-primary"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-navy-blue hover:text-digital-lavender transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-earthen-luxe border-t border-dark-green/10 shadow-lg">
          <div className="container-max py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  className={`text-dark-green hover:text-digital-lavender transition-colors duration-300 font-medium py-2 ${
                    location.pathname === link.href ? 'text-digital-lavender' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                onClick={handleContactClick}
                className="btn-primary w-full mt-4"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
