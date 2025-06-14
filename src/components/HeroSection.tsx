
import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto relative">
            <img 
              src="/placeholder.svg" 
              alt="Sai Iyer"
              className="w-full h-full object-cover rounded-3xl border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Main Text */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hello<span className="text-green-500">.</span>
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            I'm Sai<span className="text-green-500">.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-2">
            Product Manager & Maker
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            based in Gujarat, India
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-12">
          <Button className="cta-button text-lg px-8 py-4">
            Who Am I?
          </Button>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
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
            variant="outline" 
            className="gap-2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
          >
            <Download size={18} />
            <a href="/sai-iyer-cv.pdf" download>Download CV</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
