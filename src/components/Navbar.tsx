
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Mail, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "About", href: "/" },
    { name: "Blogs", href: "/writing" },
    { name: "Projects", href: "/projects" },
  ];

  const handleEmailClick = () => {
    navigator.clipboard.writeText("iyersai24@gmail.com");
    window.location.href = "mailto:iyersai24@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/", "_blank", "noopener,noreferrer");
  };
  
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
              <span className="text-pink-500 font-bold text-lg">SI</span>
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
            
            {/* Contact Hover Card */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <button className="nav-link">
                  Contact
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto p-3 bg-white border border-gray-200 shadow-lg rounded-xl">
                <div className="flex gap-3">
                  <button
                    onClick={handleEmailClick}
                    className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    title="Email"
                  >
                    <Mail size={18} className="text-gray-700" />
                  </button>
                  <button
                    onClick={handleLinkedInClick}
                    className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} className="text-blue-600" />
                  </button>
                </div>
              </HoverCardContent>
            </HoverCard>
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
              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={handleEmailClick}
                  className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Mail size={18} className="text-gray-700" />
                </button>
                <button
                  onClick={handleLinkedInClick}
                  className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Linkedin size={18} className="text-blue-600" />
                </button>
              </div>
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
