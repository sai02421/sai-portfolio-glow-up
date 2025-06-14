
import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-soft-black py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#D4C5B0' }}>
              Sai Iyer
            </h2>
            <p style={{ color: '#9E9E9E' }}>Product Manager</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              className="gap-2 border-2"
              style={{ 
                borderColor: '#BFA181', 
                color: '#BFA181',
                backgroundColor: 'transparent'
              }}
            >
              <Mail size={18} />
              <a href="mailto:iyersai24@gmail.com">iyersai24@gmail.com</a>
            </Button>
            <Button 
              variant="outline" 
              className="gap-2 border-2"
              style={{ 
                borderColor: '#BFA181', 
                color: '#BFA181',
                backgroundColor: 'transparent'
              }}
            >
              <Linkedin size={18} />
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            <Button 
              className="gap-2 hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: '#BFA181', 
                color: '#1C1C1C' 
              }}
            >
              <Download size={18} />
              <a href="/sai-iyer-cv.pdf" download>Download CV</a>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-muted-gold/10 text-center">
          <p style={{ color: '#9E9E9E' }}>
            © {new Date().getFullYear()} Sai Iyer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
