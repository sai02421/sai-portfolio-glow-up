
import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center section-container animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">
            Sai Iyer
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-light">
            Product Manager
          </h2>
          <p className="text-lg md:text-xl mb-4 text-gray-300">
            Building Products with Empathy and Impact
          </p>
          <p className="text-base md:text-lg mb-6 text-gray-400">
            Based in Gujarat, India
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="outline" className="gap-2 border-blue hover:bg-blue/10">
              <Mail size={18} />
              <a href="mailto:iyersai24@gmail.com">Email</a>
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
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue glow">
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
