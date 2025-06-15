
import ModernHeader from "@/components/ModernHeader";
import ModernFooter from "@/components/ModernFooter";

const About = () => {
  const skills = [
    { category: "Product Management", tools: ["Jira", "Trello", "Notion", "Confluence", "PRDs", "Roadmapping"] },
    { category: "Analytics", tools: ["Mixpanel", "Google Analytics", "Power BI", "Tableau", "A/B Testing"] },
    { category: "Technical", tools: ["SQL", "Python", "API Design", "Data Architecture"] },
    { category: "Design & Collaboration", tools: ["Figma", "Miro", "User Stories", "User Journeys", "Wireframing"] }
  ];

  return (
    <div className="min-h-screen bg-earthen-luxe page-transition">
      <ModernHeader />
      <main className="pt-20">
        <section className="py-20">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Image */}
              <div className="flex justify-center">
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
              <div className="space-y-8">
                <div>
                  <h1 className="font-fredoka text-navy-blue mb-6">
                    My Journey & About Me
                  </h1>
                  <div className="space-y-6 text-dark-green font-source-sans">
                    <p>
                      I'm a Product Manager passionate about building products that make a real difference. 
                      My journey started with a curiosity about how technology can solve everyday problems, 
                      and it's evolved into a career focused on turning ideas into high-impact products.
                    </p>
                    <p>
                      From launching AI-powered chatbots that boost user retention by 15% to redesigning 
                      e-commerce experiences that increase conversion by 10%, I specialize in finding the 
                      intersection of user needs, business goals, and technical possibilities.
                    </p>
                    <p>
                      I believe the best products are built with empathy, validated with data, and launched 
                      for impact. Every project I work on is an opportunity to learn, grow, and create 
                      something meaningful for users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Toolkit Section */}
        <section className="py-20 bg-dark-green">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="font-fredoka text-light-gray mb-4">
                Skills & Toolkit
              </h2>
              <p className="text-light-gray/80 font-source-sans max-w-2xl mx-auto">
                The tools and methodologies I use to build great products.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-navy-blue rounded-2xl p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-fredoka text-digital-lavender mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex} 
                        className="px-3 py-1 rounded-full border border-light-gray/30 text-light-gray font-source-sans text-sm hover:bg-light-gray/10 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ModernFooter />
    </div>
  );
};

export default About;
