
import ModernHeader from "@/components/ModernHeader";
import ModernHero from "@/components/ModernHero";
import WhatIDoSection from "@/components/WhatIDoSection";
import ExperienceJourney from "@/components/ExperienceJourney";
import SkillsSection from "@/components/SkillsSection";
import BlogsTeardowns from "@/components/BlogsTeardowns";
import ModernFooter from "@/components/ModernFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-earthen-luxe page-transition">
      <ModernHeader />
      <main>
        <ModernHero />
        <WhatIDoSection />
        <ExperienceJourney />
        <SkillsSection />
        <BlogsTeardowns />
      </main>
      <ModernFooter />
    </div>
  );
};

export default Index;
