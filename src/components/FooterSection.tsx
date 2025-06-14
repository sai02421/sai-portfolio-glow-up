
import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 animate-fade-in" style={{ backgroundColor: '#1C2533' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#E2E8F0' }}>
              Sai Iyer
            </h2>
            <p style={{ color: '#94A3B8' }}>Product Manager</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              className="gap-2 border-2"
              style={{ 
                borderColor: '#60A5FA', 
                color: '#60A5FA',
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
                borderColor: '#60A5FA', 
                color: '#60A5FA',
                backgroundColor: 'transparent'
              }}
            >
              <Linkedin size={18} />
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            <Button 
              className="gap-2 hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: '#3B82F6', 
                color: '#F1F5F9' 
              }}
            >
              <Download size={18} />
              <a href="/sai-iyer-cv.pdf" download>Download CV</a>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: '#334155' }}>
          <p style={{ color: '#94A3B8' }}>
            © {new Date().getFullYear()} Sai Iyer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
