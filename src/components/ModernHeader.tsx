
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ModernHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/writing" },
    { name: "About", href: "/about" },
  ];

  const handleEmailClick = () => {
    navigator.clipboard.writeText("iyersai24@gmail.com");
    alert("Email copied to clipboard!");
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/", "_blank", "noopener,noreferrer");
  };
  
  return (
    <>
      <header className="header-sticky">
        <div className="container-max h-full flex items-center justify-between">
          {/* Logo/Name */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-[#CDB4DB]">
              Sai Iyer
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                className={`text-light-gray hover:text-[#CDB4DB] transition-colors duration-300 font-semibold ${
                  location.pathname === link.href ? 'text-[#CDB4DB]' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#FFDEB4] hover:bg-[#FFD199] text-[#3E2C1C] rounded-lg px-4 py-2 font-medium shadow-sm transition">
                  Contact
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-navy-blue border-digital-lavender max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-light-gray text-center text-2xl font-display">
                    Get in Touch
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <button 
                    onClick={handleEmailClick}
                    className="w-full p-6 bg-transparent border-2 border-light-gray text-light-gray rounded-lg hover:bg-light-gray hover:text-navy-blue transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <Mail size={24} />
                    <span className="font-semibold">Copy Email Address</span>
                  </button>
                  <button 
                    onClick={handleLinkedInClick}
                    className="w-full p-6 bg-transparent border-2 border-light-gray text-light-gray rounded-lg hover:bg-light-gray hover:text-navy-blue transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <Linkedin size={24} />
                    <span className="font-semibold">Open LinkedIn</span>
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-light-gray hover:text-[#CDB4DB] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-navy-blue border-t border-light-gray/20">
            <div className="container-max py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.href}
                    className={`text-light-gray hover:text-[#CDB4DB] transition-colors duration-300 font-semibold py-2 ${
                      location.pathname === link.href ? 'text-[#CDB4DB]' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-light-gray/20 space-y-3">
                  <button 
                    onClick={handleEmailClick}
                    className="w-full flex items-center space-x-3 text-light-gray hover:text-[#CDB4DB] transition-colors py-2"
                  >
                    <Mail size={20} />
                    <span>Copy Email</span>
                  </button>
                  <button 
                    onClick={handleLinkedInClick}
                    className="w-full flex items-center space-x-3 text-light-gray hover:text-[#CDB4DB] transition-colors py-2"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default ModernHeader;
