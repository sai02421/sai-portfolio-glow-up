
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import CompetenciesSection from "@/components/CompetenciesSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground font-inter" style={{ backgroundColor: '#1C2533', color: '#F1F5F9' }}>
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <CompetenciesSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};

export default Index;
