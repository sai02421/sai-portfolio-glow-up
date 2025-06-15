
import { 
  Target, BarChart3, Users, Zap, Settings, MessageSquare 
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    "Product Lifecycle Management",
    "0→1 Product Development", 
    "Data-Informed Strategy",
    "A/B Testing",
    "Agile (Scrum, Kanban)",
    "Cross-Functional Team Leadership"
  ];

  const tools = [
    { name: "Figma", logo: "🎨" },
    { name: "Jira", logo: "📋" },
    { name: "Mixpanel", logo: "📊" },
    { name: "Google Analytics", logo: "📈" },
    { name: "Power BI", logo: "💻" },
    { name: "Tableau", logo: "📊" },
    { name: "Python", logo: "🐍" },
    { name: "SQL", logo: "🗄️" },
    { name: "ChatGPT API", logo: "🤖" }
  ];

  return (
    <section className="py-20 bg-dark-navy">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-light-gray mb-6">Skills & Toolkit</h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto font-source-sans">
            The competencies and tools that drive my product management approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Core Competencies */}
          <div className="animate-stagger-1">
            <h3 className="text-light-gray mb-8">Core Competencies</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className={`flex items-center space-x-3 p-4 bg-slate-blue rounded-lg hover:bg-slate-blue/80 transition-colors duration-300 animate-stagger-${index + 1}`}
                >
                  <div className="w-2 h-2 bg-muted-teal rounded-full"></div>
                  <span className="text-light-gray font-source-sans font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Toolkit */}
          <div className="animate-stagger-2">
            <h3 className="text-light-gray mb-8">Technical Toolkit</h3>
            <div className="grid grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={tool.name}
                  className={`flex flex-col items-center p-4 bg-slate-blue rounded-lg hover:bg-slate-blue/80 transition-all duration-300 hover-lift animate-stagger-${index + 1}`}
                >
                  <span className="text-2xl mb-2">{tool.logo}</span>
                  <span className="text-light-gray font-source-sans text-sm font-semibold text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
