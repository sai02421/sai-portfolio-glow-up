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
    <section id="skills" className="section-container animate-fade-in" style={{ backgroundColor: '#1C2533' }}>
      <h2 className="section-title text-center" style={{ color: '#E2E8F0' }}>Skills & Tools</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="gradient-card p-6" style={{ backgroundColor: '#273447' }}>
            <h3 
              className="text-xl font-semibold mb-4" 
              style={{ color: '#60A5FA' }}
            >
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="px-3 py-1 rounded-full border transition-colors"
                  style={{
                    backgroundColor: '#273447',
                    color: '#F1F5F9',
                    borderColor: '#60A5FA'
                  }}
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
