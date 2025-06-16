
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Management",
      skills: ["Jira", "Notion", "Trello", "Confluence", "PRDs", "Roadmapping", "OKRs"],
      emoji: "🧠"
    },
    {
      title: "Analytics",
      skills: ["Mixpanel", "Google Analytics", "Tableau", "Power BI", "A/B Testing", "Cohort Retention", "Funnel Analysis"],
      emoji: "📊"
    },
    {
      title: "Technical Skills",
      skills: ["SQL", "Python", "Postman", "API Integration", "No-code Tools", "Moodle", "Webhooks"],
      emoji: "💻"
    },
    {
      title: "Design & Collaboration",
      skills: ["Figma", "Miro", "Wireframing", "User Flows", "Design Systems", "Journey Mapping"],
      emoji: "🎨"
    }
  ];

  const skillColors = [
    "bg-[#FFEBE0] text-[#4B3F3F]", // Peach
    "bg-[#D8E2DC] text-[#2F3E46]", // Mint
    "bg-[#E2F0CB] text-[#2F3E46]", // Pastel Green
    "bg-[#FCD5CE] text-[#4B3F3F]"  // Blush Pink
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#F5EFFF]">
      <div className="container-max">
        <h2 className="text-3xl font-display text-[#2F3E46] text-center mb-12 sm:mb-16">Skills & Toolkit</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-display mb-4 text-[#2F3E46] flex items-center gap-2">
                <span className="text-2xl">{category.emoji}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className={`text-sm px-3 py-1 rounded-full inline-block mr-2 mb-2 ${skillColors[skillIndex % skillColors.length]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
