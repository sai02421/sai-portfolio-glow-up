
import { Mail, Linkedin, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleEmailClick = () => {
    navigator.clipboard.writeText("iyersai24@gmail.com");
    window.location.href = "mailto:iyersai24@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/", "_blank", "noopener,noreferrer");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-dark py-16">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-fredoka font-bold text-light-gray">
              Sai Iyer
            </h3>
            <p className="text-cool-gray max-w-sm">
              Product Manager building products with empathy and impact. 
              Blending curiosity, data, and AI to build products users love.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-fredoka font-semibold text-light-gray">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/projects" 
                className="text-cool-gray hover:text-muted-teal transition-colors duration-300 text-link"
              >
                Projects
              </Link>
              <Link 
                to="/about" 
                className="text-cool-gray hover:text-muted-teal transition-colors duration-300 text-link"
              >
                About
              </Link>
              <Link 
                to="/writing" 
                className="text-cool-gray hover:text-muted-teal transition-colors duration-300 text-link"
              >
                Writing
              </Link>
              <Link 
                to="/contact" 
                className="text-cool-gray hover:text-muted-teal transition-colors duration-300 text-link"
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-fredoka font-semibold text-light-gray">
              Connect
            </h4>
            <div className="space-y-3">
              <button 
                onClick={handleEmailClick}
                className="flex items-center space-x-2 text-cool-gray hover:text-muted-teal transition-colors duration-300"
              >
                <Mail size={16} />
                <span>iyersai24@gmail.com</span>
              </button>
              <button 
                onClick={handleLinkedInClick}
                className="flex items-center space-x-2 text-cool-gray hover:text-muted-teal transition-colors duration-300"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </button>
              <a 
                href="https://drive.google.com/uc?export=download&id=1O3mHrKLfLrvw7jFCvF4_JtXORwY7Ebf_" 
                download
                className="flex items-center space-x-2 text-cool-gray hover:text-muted-teal transition-colors duration-300"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-blue/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cool-gray caption">
              © {currentYear} Sai Iyer. All rights reserved.
            </p>
            <p className="text-cool-gray caption">
              Built with care and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
