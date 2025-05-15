
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import CompetenciesSection from "@/components/CompetenciesSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy text-foreground font-inter">
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <CompetenciesSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
