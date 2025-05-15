
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Management",
      skills: ["Jira", "Trello", "Notion", "Confluence", "PRDs", "Roadmapping"]
    },
    {
      title: "Analytics",
      skills: ["Mixpanel", "Google Analytics", "Power BI", "Tableau", "A/B Testing"]
    },
    {
      title: "Technical",
      skills: ["SQL", "Python", "API Design", "Data Architecture"]
    },
    {
      title: "Collaboration & Prototyping",
      skills: ["Miro", "Figma", "User Stories", "User Journeys", "Wireframing"]
    }
  ];

  return (
    <section id="skills" className="section-container bg-navy-dark animate-fade-in">
      <h2 className="section-title text-center">Skills & Tools</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="gradient-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-light">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="px-3 py-1 rounded-full bg-navy text-gray-300 border border-blue/20 hover:border-blue/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
