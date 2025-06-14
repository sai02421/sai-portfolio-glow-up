
import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const handleEmailClick = () => {
    navigator.clipboard.writeText("iyersai24@gmail.com");
    window.location.href = "mailto:iyersai24@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/", "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Navigation Links */}
          <div className="flex gap-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/writing" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Blogs
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Projects
            </Link>
          </div>
          
          {/* Contact Icons */}
          <div className="flex gap-4">
            <button 
              onClick={handleEmailClick}
              className="p-3 rounded-full bg-purple-100 hover:bg-purple-200 transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} className="text-purple-600" />
            </button>
            <button 
              onClick={handleLinkedInClick}
              className="p-3 rounded-full bg-purple-100 hover:bg-purple-200 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} className="text-purple-600" />
            </button>
            <a 
              href="https://drive.google.com/uc?export=download&id=1O3mHrKLfLrvw7jFCvF4_JtXORwY7Ebf_" 
              download
              className="p-3 rounded-full bg-green-100 hover:bg-green-200 transition-all duration-300 hover:scale-105"
            >
              <Download size={20} className="text-green-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
