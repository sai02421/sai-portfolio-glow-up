
import ModernHeader from "@/components/ModernHeader";
import ModernFooter from "@/components/ModernFooter";
import SkillsSection from "@/components/SkillsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-earthen-luxe page-transition">
      <ModernHeader />
      <div className="container-max pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="text-center mb-16">
          <h2 className="font-fredoka text-navy-blue mb-4">
            About Me
          </h2>
          <p className="text-dark-green font-source-sans max-w-2xl mx-auto">
            A Product Manager with a builder's mindset and a user-first approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative max-w-sm w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#CDB4DB]/20 to-navy-blue/20 rounded-2xl transform rotate-6 opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/20 to-[#A3C4F3]/20 rounded-2xl transform -rotate-3 opacity-60"></div>
              <img 
                src="/lovable-uploads/346bc2eb-ef46-44d5-af38-97b8fc9f1f02.png" 
                alt="Sai Iyer - Product Manager"
                className="relative w-full h-auto object-contain img-rounded border-4 border-white shadow-xl"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 sm:space-y-6 text-dark-green font-body">
              <p className="text-base sm:text-lg leading-relaxed">
                Hey, I'm <span className="text-[#CDB4DB] font-bold">Sai</span> — a Product Manager with a builder's mindset and a user-first approach.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                My career started on the race track — literally — as part of a Formula Student team in college. But soon, I found myself more fascinated by user journeys than vehicle aerodynamics. That curiosity drove me into the world of digital products.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                Since then, I've built and launched products in ed-tech and D2C e-commerce, working across AI chatbots, retention systems, onboarding flows, and partner-facing dashboards. I enjoy the messy middle of product building — where insights, design, and strategy collide to create experiences that stick.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                I love collaborating with cross-functional teams, diving into metrics, and iterating fast. Whether it's 0→1 MVPs or optimization experiments, I thrive when I'm solving real user problems that impact growth.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                Outside of work, I enjoy playing pickleball, geeking out on mythology, and helping founders validate ideas and launch with speed.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed font-semibold">
                Let's build something meaningful 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <SkillsSection />
      
      <ModernFooter />
    </div>
  );
};

export default About;
