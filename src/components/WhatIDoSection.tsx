
import { 
  Brain, Users, BarChart3, Rocket, MessageSquare, Target
} from "lucide-react";

const CompetencyCard = ({ 
  title, 
  description, 
  icon: Icon,
  color
}: { 
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}) => {
  return (
    <div className="section-card p-6 group hover:scale-105 transition-all duration-300">
      <div className="flex flex-col items-start">
        <div className={`mb-4 p-3 rounded-full ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const WhatIDoSection = () => {
  const competencies = [
    {
      title: "AI Product Strategy",
      description: "Designing AI-powered features that solve real user problems and drive business value through intelligent automation.",
      icon: Brain,
      color: "bg-purple-500"
    },
    {
      title: "User Research & Validation",
      description: "Understanding user needs through research, interviews, and testing to validate product decisions with real data.",
      icon: Users,
      color: "bg-pink-500"
    },
    {
      title: "Data-Driven Decision Making",
      description: "Using analytics, metrics, and A/B testing to make informed product decisions and measure success.",
      icon: BarChart3,
      color: "bg-blue-500"
    },
    {
      title: "Agile Product Development",
      description: "Leading cross-functional teams through agile methodologies to deliver features quickly and efficiently.",
      icon: Rocket,
      color: "bg-green-500"
    },
    {
      title: "Stakeholder Collaboration",
      description: "Aligning diverse teams and stakeholders around product vision, priorities, and roadmap execution.",
      icon: MessageSquare,
      color: "bg-orange-500"
    },
    {
      title: "Go-To-Market Strategy",
      description: "Developing launch strategies, positioning, and growth tactics to successfully bring products to market.",
      icon: Target,
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Do</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          I help build with empathy, validate with data, and launch for impact.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {competencies.map((competency, index) => (
          <CompetencyCard
            key={index}
            title={competency.title}
            description={competency.description}
            icon={competency.icon}
            color={competency.color}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatIDoSection;
