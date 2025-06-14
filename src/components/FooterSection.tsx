
import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">
              Sai Iyer
            </h2>
            <p className="text-xl text-gray-600">Product Manager</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              className="gap-2 border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 hover:scale-105"
            >
              <Mail size={18} />
              <a href="mailto:iyersai24@gmail.com">Email</a>
            </Button>
            <Button 
              variant="outline" 
              className="gap-2 border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={18} />
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            <Button 
              className="gap-2 bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-105"
            >
              <Download size={18} />
              <a href="/sai-iyer-cv.pdf" download>Download CV</a>
            </Button>
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
