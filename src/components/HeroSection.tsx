
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
    <section className="min-h-screen flex items-center px-6 relative z-10">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                👋 Product Manager & Builder
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Hello, I'm{" "}
              <span className="block text-pink-600">Sai Iyer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed font-semibold">
              Product Manager building products with <span className="text-pink-600 font-bold">empathy</span> and <span className="text-green-600 font-bold">impact</span>. 
            </p>
            
            <p className="text-lg text-gray-800 mb-8 font-semibold">
              Based in Gujarat, India • Helping founders validate ideas and launch MVPs with data-driven strategies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 group"
                onClick={() => scrollToSection('what-i-do')}
              >
                Learn My Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="text-lg px-8 py-4 rounded-full bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                className="gap-2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                <Mail size={18} />
                <a href="mailto:iyersai24@gmail.com">Email</a>
              </Button>
              <Button 
                variant="outline" 
                className="gap-2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
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

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl transform -rotate-3"></div>
              <img 
                src="/lovable-uploads/3c0701ae-6cbd-43ae-b8d3-a7eb591aea64.png" 
                alt="Sai Iyer - Product Manager"
                className="relative w-full h-full object-cover object-center rounded-3xl border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
