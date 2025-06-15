
import { useState } from "react";

const FeaturedProjectsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      title: "Vedix E-commerce Redesign",
      description: "Led an end-to-end platform redesign that improved conversion by 10% and AOV by 12%.",
      image: "/lovable-uploads/3c0701ae-6cbd-43ae-b8d3-a7eb591aea64.png",
      size: "large" // This will be the featured 2x1 project
    },
    {
      title: "AI Onboarding Chatbot",
      description: "Built a '0 to 1' AI chatbot that personalized user onboarding and increased retention by 15%.",
      image: "/placeholder.svg",
      size: "small"
    },
    {
      title: "Gamified Loyalty Program",
      description: "Launched the 'Nector Coins' program, driving a 35% increase in web conversions.",
      image: "/placeholder.svg",
      size: "small"
    },
    {
      title: "B2B/B2C LMS Platform",
      description: "Spearheaded the development of a new LMS, resulting in a 135% increase in course completion.",
      image: "/placeholder.svg",
      size: "small"
    }
  ];

  return (
    <section id="featured-projects" className="py-20 bg-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-fredoka text-dark-green mb-6">Featured Projects</h2>
          <p className="text-lg text-dark-green/80 max-w-3xl mx-auto font-source-sans">
            A curated selection of my best work, showcasing the impact of user-centered design and data-driven decision making.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card group ${
                project.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-64 md:h-80 bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="project-overlay">
                  <button className="bg-light-gray text-dark-green px-6 py-3 rounded-lg font-semibold hover:bg-digital-lavender hover:text-white transition-all duration-300">
                    View Case Study
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-fredoka text-dark-green mb-3">
                  {project.title}
                </h3>
                <p className="text-dark-green/80 font-source-sans leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
