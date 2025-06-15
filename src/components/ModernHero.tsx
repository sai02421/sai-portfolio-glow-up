
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const ModernHero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "I'm Sai Iyer, a Product Manager who turns ideas into high-impact products. From AI chatbots that boost retention by 15% to e-commerce redesigns that lift conversion by 10%, I specialize in building solutions that drive growth.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToNextSection = () => {
    const element = document.getElementById('trusted-by');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-earthen-luxe relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-digital-lavender/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-dark-green/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-32 w-40 h-40 bg-navy-blue/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-digital-lavender/10 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-max w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Typewriter Text */}
          <div className="min-h-[200px] flex items-center justify-center">
            <h1 className="font-fredoka text-navy-blue leading-tight">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>
          </div>
          
          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '4s', animationFillMode: 'both' }}>
            <Button 
              onClick={scrollToNextSection}
              className="btn-primary group text-lg px-8 py-4"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
