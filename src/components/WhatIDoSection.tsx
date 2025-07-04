
import { 
  Brain, Users, BarChart3, Rocket, MessageSquare, Target
} from "lucide-react";

const CompetencyCard = ({ 
  title, 
  description, 
  icon: Icon,
  color,
  outcomes
}: { 
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  outcomes: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group">
      <div className="flex flex-col items-start">
        <div className={`mb-4 p-3 rounded-full ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-display text-[#2F3E46] mb-3">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[#4B3F3F] font-body leading-relaxed mb-4">
          {description}
        </p>
        <div className="text-xs sm:text-sm text-[#D5AAFF] font-semibold font-body">
          {outcomes}
        </div>
      </div>
    </div>
  );
};

const WhatIDoSection = () => {
  const competencies = [
    {
      title: "AI Product Strategy",
      description: "I design AI-powered features that solve real user problems, not just implement tech for tech's sake.",
      outcomes: "→ 40% faster product discovery",
      icon: Brain,
      color: "bg-[#FCD5CE]"
    },
    {
      title: "User Research & Validation",
      description: "I help founders validate ideas with real users before building, using lean methodologies that save time and money.",
      outcomes: "→ 3x higher product-market fit rate",
      icon: Users,
      color: "bg-[#D8E2DC]"
    },
    {
      title: "Data-Driven Decision Making",
      description: "I create measurement frameworks that tell you what's working and what's not, so you build the right features.",
      outcomes: "→ 60% reduction in failed features",
      icon: BarChart3,
      color: "bg-[#A3C4F3]"
    },
    {
      title: "Rapid MVP Development",
      description: "I help teams build and launch MVPs in weeks, not months, using no-code tools and lean development practices.",
      outcomes: "→ 75% faster time-to-market",
      icon: Rocket,
      color: "bg-[#E2F0CB]"
    },
    {
      title: "Stakeholder Alignment",
      description: "I bridge the gap between technical teams, business stakeholders, and users to ensure everyone is building toward the same goal.",
      outcomes: "→ 90% stakeholder satisfaction",
      icon: MessageSquare,
      color: "bg-[#FFEBE0]"
    },
    {
      title: "Go-To-Market Strategy",
      description: "I develop launch strategies that actually work, focusing on finding your first 100 customers who love what you've built.",
      outcomes: "→ 2x higher launch success rate",
      icon: Target,
      color: "bg-[#FFDEB4]"
    }
  ];

  return (
    <section id="what-i-do" className="py-16 sm:py-20 bg-white">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-display text-[#2F3E46] mb-4 sm:mb-6">What I Do</h2>
          <p className="text-lg sm:text-xl text-[#4B3F3F] max-w-3xl mx-auto font-body px-4 sm:px-0">
            I help founders and teams build products that users actually want. Here's how we work together to turn your idea into a thriving product.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {competencies.map((competency, index) => (
            <CompetencyCard
              key={index}
              title={competency.title}
              description={competency.description}
              icon={competency.icon}
              color={competency.color}
              outcomes={competency.outcomes}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
