
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
    <section className="min-h-screen flex items-center bg-dark-navy relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-muted-teal/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-muted-teal/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-max w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-slate-blue/80 px-4 py-2 rounded-full border border-muted-teal/20">
                <span className="text-2xl">👋</span>
                <span className="caption font-medium text-muted-teal">Product Manager & Builder</span>
              </div>
              
              <h1 className="text-light-gray">
                I'm{" "}
                <span className="block text-muted-teal">Sai Iyer</span>
              </h1>
              
              <p className="text-xl text-light-gray font-semibold max-w-xl">
                A Product Manager who turns ideas into{" "}
                <span className="text-muted-teal font-bold">high-impact products</span>.
              </p>
              
              <p className="text-cool-gray max-w-xl font-source-sans">
                From AI chatbots that boost retention by 15% to e-commerce redesigns that lift conversion by 10%, 
                I specialize in building solutions that drive growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-primary group"
                onClick={() => scrollToSection('featured-projects')}
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
                className="text-cool-gray hover:text-muted-teal transition-colors duration-300"
                title="Email"
              >
                <Mail size={20} />
              </button>
              <button 
                onClick={handleLinkedInClick}
                className="text-cool-gray hover:text-muted-teal transition-colors duration-300"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </button>
              <a 
                href="https://drive.google.com/uc?export=download&id=1O3mHrKLfLrvw7jFCvF4_JtXORwY7Ebf_" 
                download
                className="text-cool-gray hover:text-muted-teal transition-colors duration-300"
                title="Download CV"
              >
                <Download size={20} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end animate-stagger-2">
            <div className="relative max-w-sm w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-muted-teal/20 to-slate-blue/20 rounded-2xl transform rotate-6 opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-blue/20 to-muted-teal/20 rounded-2xl transform -rotate-3 opacity-60"></div>
              <img 
                src="/lovable-uploads/346bc2eb-ef46-44d5-af38-97b8fc9f1f02.png" 
                alt="Sai Iyer - Product Manager"
                className="relative w-full h-auto object-contain img-rounded border-4 border-muted-teal/30 shadow-xl hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
