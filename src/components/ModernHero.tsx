
import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";

const ModernHero = () => {
  const scrollToNextSection = () => {
    const element = document.getElementById('experience-journey');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    window.location.href = "mailto:iyersai24@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="min-h-screen flex items-center bg-earthen-luxe relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#CDB4DB]/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-[#A3C4F3]/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-32 w-40 h-40 bg-navy-blue/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#D8E2DC]/10 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-max w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-dark-green/10">
                <span className="text-xl lg:text-2xl">👋</span>
                <span className="text-sm lg:text-base font-medium text-dark-green font-body">Product Manager & Builder</span>
              </div>
              
              <div className="space-y-2 lg:space-y-4">
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-display text-navy-blue leading-tight">
                  Hello, I'm
                </h1>
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-display text-[#CDB4DB] leading-tight">
                  Sai Iyer
                </h1>
              </div>
              
              <p className="text-lg lg:text-xl text-dark-green font-medium max-w-xl mx-auto lg:mx-0 font-body">
                Product Manager building products with{" "}
                <span className="text-[#A3C4F3] font-bold">empathy</span> and{" "}
                <span className="text-navy-blue font-bold">impact</span>.
              </p>
              
              <p className="text-dark-green/80 max-w-xl mx-auto lg:mx-0 font-body leading-relaxed">
                Blending curiosity, data, and AI to build products users love. 
                I help teams discover, validate, and launch digital experiences that make a difference.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-[#FCD5CE] hover:bg-[#F8AFA6] text-[#4B3F3F] rounded-lg px-4 py-2 font-medium shadow-sm transition group"
                onClick={scrollToNextSection}
              >
                View My Work
              </Button>
              
              <Button 
                className="bg-[#D8E2DC] hover:bg-[#BFD8CC] text-[#2F3E46] rounded-lg px-4 py-2 font-medium shadow-sm transition"
                onClick={handleContactClick}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              <button 
                onClick={handleContactClick}
                className="text-dark-green hover:text-[#A3C4F3] transition-colors duration-300"
                title="Email"
              >
                <Mail size={20} />
              </button>
              <button 
                onClick={handleLinkedInClick}
                className="text-dark-green hover:text-[#A3C4F3] transition-colors duration-300"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </button>
              <a 
                href="https://drive.google.com/uc?export=download&id=1O3mHrKLfLrvw7jFCvF4_JtXORwY7Ebf_" 
                download
                className="text-dark-green hover:text-[#A3C4F3] transition-colors duration-300"
                title="Download CV"
              >
                <Download size={20} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative max-w-sm w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#CDB4DB]/20 to-navy-blue/20 rounded-2xl transform rotate-6 opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/20 to-[#A3C4F3]/20 rounded-2xl transform -rotate-3 opacity-60"></div>
              <img 
                src="/lovable-uploads/346bc2eb-ef46-44d5-af38-97b8fc9f1f02.png" 
                alt="Sai Iyer - Product Manager"
                className="relative w-full h-auto object-contain img-rounded border-4 border-white shadow-xl hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
