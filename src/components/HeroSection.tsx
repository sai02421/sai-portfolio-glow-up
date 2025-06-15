import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 relative z-10">
      <div className="floating-dots">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
        <div className="dot dot-5"></div>
        <div className="dot dot-6"></div>
        <div className="dot dot-7"></div>
        <div className="dot dot-8"></div>
        <div className="dot dot-9"></div>
        <div className="dot dot-10"></div>
        <div className="dot dot-11"></div>
        <div className="dot dot-12"></div>
      </div>
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-4">
              <span className="px-3 py-2 sm:px-4 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium">
                👋 Product Manager & Builder
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
              Hello, I'm{" "}
              <span className="block text-pink-500">Sai Iyer</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-4 sm:mb-6 leading-relaxed font-semibold px-2 lg:px-0">
              Product Manager building products with <span className="text-pink-600 font-bold">empathy</span> and <span className="text-green-600 font-bold">impact</span>. 
            </p>
            
            <p className="text-base sm:text-lg text-gray-800 mb-6 sm:mb-8 font-semibold px-2 lg:px-0">
              Blending curiosity, data, and AI to build products users love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 px-2 lg:px-0">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
                onClick={() => scrollToSection('what-i-do')}
              >
                Learn My Story
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start px-2 lg:px-0">
              <Button 
                variant="outline" 
                className="gap-2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3"
              >
                <Mail size={16} className="sm:hidden" />
                <Mail size={18} className="hidden sm:block" />
                <a href="mailto:iyersai24@gmail.com" className="hidden sm:inline">Email</a>
                <a href="mailto:iyersai24@gmail.com" className="sm:hidden">Mail</a>
              </Button>
              <Button 
                variant="outline" 
                className="gap-2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3"
              >
                <Linkedin size={16} className="sm:hidden" />
                <Linkedin size={18} className="hidden sm:block" />
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </Button>
              <Button 
                className="gap-2 bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3"
              >
                <Download size={16} className="sm:hidden" />
                <Download size={18} className="hidden sm:block" />
                <a href="https://drive.google.com/uc?export=download&id=1O3mHrKLfLrvw7jFCvF4_JtXORwY7Ebf_" download className="hidden sm:inline">Download CV</a>
                <a href="https://drive.google.com/uc?export=download&id=1O3mHrKLfLrvw7jFCvF4_JtXORwY7Ebf_" download className="sm:hidden">CV</a>
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 order-first lg:order-last">
            <div className="relative max-w-xs sm:max-w-sm w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl transform -rotate-3"></div>
              <img 
                src="/lovable-uploads/346bc2eb-ef46-44d5-af38-97b8fc9f1f02.png" 
                alt="Sai Iyer - Product Manager"
                className="relative w-full h-auto object-contain rounded-3xl border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
