
import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hello, I'm{" "}
              <span className="block text-purple-600">Sai Iyer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Product Manager building products with empathy and impact. Based in Gujarat, India.
            </p>
            
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 mb-12">
              About Me
            </Button>

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
              <img 
                src="/placeholder.svg" 
                alt="Sai Iyer Illustration"
                className="w-full h-full object-cover rounded-3xl border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
