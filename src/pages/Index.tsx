
import ModernHeader from "@/components/ModernHeader";
import ModernHero from "@/components/ModernHero";
import TrustedBySection from "@/components/TrustedBySection";
import ExperienceJourney from "@/components/ExperienceJourney";
import BlogsTeardowns from "@/components/BlogsTeardowns";
import ModernFooter from "@/components/ModernFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-earthen-luxe page-transition">
      <ModernHeader />
      <main>
        <ModernHero />
        <TrustedBySection />
        <ExperienceJourney />
        <BlogsTeardowns />
      </main>
      <ModernFooter />
    </div>
  );
};

export default Index;
