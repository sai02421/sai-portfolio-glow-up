
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
    <div className="section-card p-6">
      <div className="flex flex-col items-start">
        <div className="mb-4 p-3 rounded-full bg-blue-50">
          <Icon size={24} className="text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

const CompetenciesSection = () => {
  const competencies = [
    {
      title: "Product Management",
      description: "I combine business, tech, and design in order to discover products that are valuable, feasible, and usable.",
      icon: Code
    },
    {
      title: "No Code",
      description: "I specialise in creating digital products and businesses without code in a fraction of the time and cost compared to traditional methods.",
      icon: User
    },
    {
      title: "Product Strategy",
      description: "I help teams and founders create and maintain a clear and defined product and go to market strategy.",
      icon: Calendar
    },
    {
      title: "MVPs",
      description: "I create lean, highly effective MVP experiments. Testing with real people against actual problems.",
      icon: Database
    },
    {
      title: "Customer Development",
      description: "I help identify the right problems to solve so that you build something that your customers will love.",
      icon: Users
    },
    {
      title: "Website Design",
      description: "I create stunning websites using Webflow. Using my background in UX to create a user centric site that converts.",
      icon: Tag
    }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          I advise and help early stage founders and entrepreneurs ideate, validate, test, build and launch digital products.
        </p>
      </div>
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
