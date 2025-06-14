
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import CompetenciesSection from "@/components/CompetenciesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <QuoteSection />
        <CompetenciesSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
