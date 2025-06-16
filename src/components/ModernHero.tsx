
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ModernHero = () => {
  const scrollToNextSection = () => {
    const element = document.getElementById('what-i-do');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-earthen-luxe relative overflow-hidden">
      <div className="container-max w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1 mb-16 sm:mb-0">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/80 px-6 py-3 rounded-full border border-dark-green/10">
                <span className="text-2xl lg:text-3xl">👋</span>
                <span className="text-lg lg:text-xl font-medium text-dark-green font-body">Hi, I'm Sai Iyer</span>
              </div>
              
              <div className="space-y-2 lg:space-y-4">
                <h1 className="text-2xl lg:text-4xl xl:text-5xl font-display text-dark-green leading-tight">
                  Product Manager, <span className="text-digital-lavender">Builder</span> & <span className="text-digital-lavender">Creative Problem Solver</span>
                </h1>
              </div>
              
              <p className="text-base lg:text-lg text-dark-green max-w-xl mx-auto lg:mx-0 font-body leading-relaxed">
                I design digital experiences that feel effortless and perform brilliantly — blending{" "}
                <span className="text-digital-lavender font-bold">empathy</span>, experimentation, and just a little bit of controlled chaos.
              </p>
              
              <p className="text-dark-green/80 max-w-xl mx-auto lg:mx-0 font-body leading-relaxed">
                From chatbots to checkouts, I've helped launch products that delight users and drive results. Let's turn insights into impact.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-[#FCD5CE] hover:bg-[#F8AFA6] text-[#4B3F3F] rounded-lg px-4 py-2 font-medium shadow-sm transition group"
                onClick={scrollToNextSection}
              >
                View My Work
              </Button>
              
              <a 
                href="https://drive.google.com/uc?export=download&id=1O3mHrKLfLrvw7jFCvF4_JtXORwY7Ebf_" 
                download
              >
                <Button 
                  className="bg-[#D8E2DC] hover:bg-[#BFD8CC] text-[#2F3E46] rounded-lg px-4 py-2 font-medium shadow-sm transition w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  My CV
                </Button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative max-w-xs sm:max-w-sm lg:max-w-md w-full">
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
