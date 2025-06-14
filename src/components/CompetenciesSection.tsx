import { 
  User, Code, Database, Calendar, Users, Tag
} from "lucide-react";

const CompetencyCard = ({ 
  title, 
  description, 
  icon: Icon 
}: { 
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <div className="gradient-card p-6 transition-all duration-300 hover:glow">
      <div className="flex flex-col items-center md:items-start">
        <div 
          className="mb-4 p-3 rounded-full"
          style={{ 
            backgroundColor: 'rgba(34, 211, 238, 0.1)',
            color: '#22D3EE'
          }}
        >
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center md:text-left" style={{ color: '#E2E8F0' }}>
          {title}
        </h3>
        <p className="text-center md:text-left" style={{ color: '#94A3B8' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

const CompetenciesSection = () => {
  const competencies = [
    {
      title: "AI Product Strategy",
      description: "Defining vision and roadmaps for AI/ML products, leveraging data for market fit.",
      icon: Code
    },
    {
      title: "User Research & Validation",
      description: "Conducting deep user research and usability testing to ensure products solve real problems.",
      icon: User
    },
    {
      title: "Data-Driven Decision Making",
      description: "Using analytics and A/B tests to prioritize features that drive measurable outcomes.",
      icon: Database
    },
    {
      title: "Agile Product Development",
      description: "Leading cross-functional teams with Scrum for rapid prototyping and iterative delivery.",
      icon: Calendar
    },
    {
      title: "Stakeholder Collaboration",
      description: "Communicating vision and trade-offs effectively across technical and business teams.",
      icon: Users
    },
    {
      title: "Go-To-Market Strategy",
      description: "Developing launch plans, KPIs and iterating on market feedback for growth.",
      icon: Tag
    }
  ];

  return (
    <section id="competencies" className="section-container animate-fade-in">
      <h2 className="section-title text-center">Core Competencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competencies.map((competency, index) => (
          <CompetencyCard
            key={index}
            title={competency.title}
            description={competency.description}
            icon={competency.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default CompetenciesSection;
