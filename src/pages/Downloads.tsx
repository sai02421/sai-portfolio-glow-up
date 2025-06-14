
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Download, FileText, Presentation } from "lucide-react";

const Downloads = () => {
  const downloads = [
    {
      title: "Resume / CV",
      description: "Latest version of my professional resume",
      icon: FileText,
      link: "/sai-iyer-cv.pdf",
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
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Downloads</h1>
          <p className="text-xl text-gray-600">Get access to my resume, portfolio, and other resources</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloads.map((item, index) => (
            <div key={index} className="section-card p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              
              <Button className="cta-button">
                <Download size={18} className="mr-2" />
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
