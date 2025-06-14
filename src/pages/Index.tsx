
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import LatestWritingSection from "@/components/LatestWritingSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <WhatIDoSection />
        <LatestWritingSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
