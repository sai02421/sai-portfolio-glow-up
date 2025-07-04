
import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <section className="min-h-screen flex items-center bg-earthen-luxe">
      <div className="container-max w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-dark-green/10">
                <span className="text-2xl">👋</span>
                <span className="caption font-medium text-dark-green">Product Manager & Builder</span>
              </div>
              
              <h1 className="text-navy-blue">
                Hello, I'm{" "}
                <span className="block text-digital-lavender">Sai Iyer</span>
              </h1>
              
              <p className="text-xl text-dark-green font-medium max-w-xl">
                Product Manager building products with{" "}
                <span className="text-digital-lavender font-bold">empathy</span> and{" "}
                <span className="text-navy-blue font-bold">impact</span>.
              </p>
              
              <p className="text-dark-green/80 max-w-xl">
                Blending curiosity, data, and AI to build products users love. 
                I help teams discover, validate, and launch digital experiences that make a difference.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-primary group"
                onClick={() => scrollToSection('what-i-do')}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                className="btn-secondary"
                onClick={handleContactClick}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <button 
                onClick={handleContactClick}
                className="text-dark-green hover:text-digital-lavender transition-colors duration-300"
                title="Email"
              >
                <Mail size={20} />
              </button>
              <button 
                onClick={handleLinkedInClick}
                className="text-dark-green hover:text-digital-lavender transition-colors duration-300"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </button>
              <a 
                href="https://drive.google.com/uc?export=download&id=1O3mHrKLfLrvw7jFCvF4_JtXORwY7Ebf_" 
                download
                className="text-dark-green hover:text-digital-lavender transition-colors duration-300"
                title="Download CV"
              >
                <Download size={20} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative max-w-sm w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-digital-lavender/20 to-navy-blue/20 rounded-2xl transform rotate-6 opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/20 to-digital-lavender/20 rounded-2xl transform -rotate-3 opacity-60"></div>
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

export default HeroSection;
