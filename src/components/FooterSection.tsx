
import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">
              Sai Iyer
            </h2>
            <p className="text-xl text-gray-600">Product Manager</p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex gap-8 mb-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/writing" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Writing
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Projects
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Contact
            </a>
          </div>
          
          {/* Contact Icons */}
          <div className="flex gap-4 mb-8">
            <a 
              href="mailto:iyersai24@gmail.com"
              className="p-3 rounded-full bg-purple-100 hover:bg-purple-200 transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} className="text-purple-600" />
            </a>
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-purple-100 hover:bg-purple-200 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} className="text-purple-600" />
            </a>
            <a 
              href="/sai-iyer-cv.pdf" 
              download
              className="p-3 rounded-full bg-green-100 hover:bg-green-200 transition-all duration-300 hover:scale-105"
            >
              <Download size={20} className="text-green-600" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Sai Iyer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
