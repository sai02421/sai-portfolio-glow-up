
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Download, FileText, Presentation } from "lucide-react";

const Downloads = () => {
  const downloads = [
    {
      title: "Resume / CV",
      description: "Latest version of my professional resume",
      icon: FileText,
      link: "https://drive.google.com/uc?export=download&id=1O3mHrKLfLrvw7jFCvF4_JtXORwY7Ebf_",
      type: "PDF"
    },
    {
      title: "Portfolio Presentation",
      description: "Detailed case studies and project outcomes",
      icon: Presentation,
      link: "#",
      type: "PPT"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Downloads</h1>
          <p className="text-lg sm:text-xl text-gray-600 px-4 sm:px-0">Get access to my resume, portfolio, and other resources</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloads.map((item, index) => (
            <div key={index} className="section-card p-6 sm:p-8 text-center">
              <div className="mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon size={24} className="sm:hidden text-blue-600" />
                  <item.icon size={32} className="hidden sm:block text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </div>
              
              <Button className="cta-button w-full sm:w-auto">
                <Download size={16} className="sm:hidden mr-2" />
                <Download size={18} className="hidden sm:block mr-2" />
                <a href={item.link} download>Download {item.type}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
