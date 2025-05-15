
import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-navy-dark py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">Sai Iyer</h2>
            <p className="text-gray-400">Product Manager</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="gap-2 border-blue hover:bg-blue/10">
              <Mail size={18} />
              <a href="mailto:iyersai24@gmail.com">iyersai24@gmail.com</a>
            </Button>
            <Button variant="outline" className="gap-2 border-blue hover:bg-blue/10">
              <Linkedin size={18} />
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            <Button className="highlight-gradient gap-2 hover:opacity-90 transition-opacity">
              <Download size={18} />
              <a href="/sai-iyer-cv.pdf" download>Download CV</a>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue/10 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Sai Iyer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
