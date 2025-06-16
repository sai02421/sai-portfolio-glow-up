
import ModernHeader from "@/components/ModernHeader";
import ModernFooter from "@/components/ModernFooter";

const About = () => {
  return (
    <div className="min-h-screen bg-earthen-luxe page-transition">
      <ModernHeader />
      <div className="container-max pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative max-w-sm w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-digital-lavender/20 to-navy-blue/20 rounded-2xl transform rotate-6 opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/20 to-digital-lavender/20 rounded-2xl transform -rotate-3 opacity-60"></div>
              <img 
                src="/lovable-uploads/346bc2eb-ef46-44d5-af38-97b8fc9f1f02.png" 
                alt="Sai Iyer - Product Manager"
                className="relative w-full h-auto object-contain img-rounded border-4 border-white shadow-xl"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h1 className="font-fredoka text-navy-blue mb-4 sm:mb-6 text-center lg:text-left">About Me</h1>
              <div className="space-y-4 sm:space-y-6 text-dark-green font-source-sans">
                <p className="text-base sm:text-lg leading-relaxed">
                  I'm a Product Manager with a passion for building products that solve real problems and create meaningful impact. My journey started with curiosity about how technology can improve people's lives, and that curiosity continues to drive everything I do.
                </p>
                
                <p className="text-base sm:text-lg leading-relaxed">
                  Over the past few years, I've had the privilege of working with amazing teams to launch products that users love. From AI-powered chatbots that boost retention to e-commerce platforms that drive growth, I focus on combining data-driven insights with user empathy to create solutions that matter.
                </p>
                
                <p className="text-base sm:text-lg leading-relaxed">
                  When I'm not diving deep into user research or analyzing product metrics, you'll find me exploring the latest in AI and technology, always looking for new ways to enhance the user experience. I believe that great products are born from understanding both the problem and the people you're solving it for.
                </p>
                
                <p className="text-base sm:text-lg leading-relaxed">
                  I'm always excited to connect with fellow product enthusiasts, entrepreneurs, and anyone who shares a passion for building something meaningful. Let's create products that make a difference together.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="pt-6 lg:pt-8 border-t border-dark-green/20">
              <h3 className="font-fredoka text-navy-blue mb-4 sm:mb-6">Skills & Toolkit</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  "Product Strategy", "User Research", "Data Analysis", 
                  "A/B Testing", "Figma", "Jira", 
                  "Mixpanel", "SQL", "AI/ML Product Development"
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-dark-green font-source-sans font-semibold text-sm sm:text-base">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModernFooter />
    </div>
  );
};

export default About;
