
import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center section-container animate-fade-in" style={{ backgroundColor: '#1C2533' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-3" style={{ color: '#E2E8F0' }}>
            Sai Iyer
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#94A3B8' }}>
            Product Manager
          </h2>
          <p className="text-lg md:text-xl mb-4" style={{ color: '#94A3B8' }}>
            Building Products with Empathy and Impact
          </p>
          <p className="text-base md:text-lg mb-6" style={{ color: '#94A3B8' }}>
            Based in Gujarat, India
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
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
              <a href="mailto:iyersai24@gmail.com">Email</a>
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
        
        <div className="order-1 md:order-2 flex justify-center">
          <div 
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 glow"
            style={{ borderColor: '#60A5FA' }}
          >
            <img 
              src="/placeholder.svg" 
              alt="Sai Iyer"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
