
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import LatestWritingSection from "@/components/LatestWritingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-navy">
      <Header />
      <main>
        <HeroSection />
        <div id="featured-projects">
          <FeaturedProjectsSection />
        </div>
        <ExperienceSection />
        <SkillsSection />
        <LatestWritingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
