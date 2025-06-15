
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import LatestWritingSection from "@/components/LatestWritingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-earthen-luxe">
      <Header />
      <main>
        <HeroSection />
        <div className="container-max py-20">
          <WhatIDoSection />
          <LatestWritingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
