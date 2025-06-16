
import ModernHeader from "@/components/ModernHeader";
import ModernFooter from "@/components/ModernFooter";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Project = {
  title: string;
  emoji: string;
  shortDescription: string;
  challenge: string;
  myRole: string;
  approach: string;
  result: string;
  image: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white rounded-2xl overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
          <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
            <span className="text-4xl sm:text-6xl">{project.emoji}</span>
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-display text-navy-blue mb-3 group-hover:text-[#CDB4DB] transition-colors">
              {project.title}
            </h3>
            <p className="text-dark-green mb-4 leading-relaxed font-body text-sm sm:text-base">
              {project.shortDescription}
            </p>
            <Button 
              className="w-full bg-[#FCD5CE] hover:bg-[#F8AFA6] text-[#4B3F3F] px-4 py-2 rounded-md font-medium shadow-sm transition"
            >
              View Case Study
            </Button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-white border-gray-200 max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-display flex items-center gap-3 text-navy-blue mb-4">
            <span className="text-3xl sm:text-4xl">{project.emoji}</span>
            {project.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 sm:h-64 object-cover rounded-lg"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl font-display mb-3 text-[#CDB4DB]">
                  The Challenge
                </h4>
                <p className="text-dark-green leading-relaxed font-body">{project.challenge}</p>
              </div>
              
              <div>
                <h4 className="text-lg sm:text-xl font-display mb-3 text-[#CDB4DB]">
                  My Role
                </h4>
                <p className="text-dark-green leading-relaxed font-body">{project.myRole}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl font-display mb-3 text-[#CDB4DB]">
                  The Solution
                </h4>
                <p className="text-dark-green leading-relaxed font-body">{project.approach}</p>
              </div>
              
              <div>
                <h4 className="text-lg sm:text-xl font-display mb-3 text-[#CDB4DB]">
                  The Impact
                </h4>
                <p className="text-dark-green leading-relaxed font-body">{project.result}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "AI Onboarding Chatbot ('Doctor')",
      emoji: "🧠",
      shortDescription: "AI assistant that reduced support load and increased user retention by 15% through intelligent onboarding guidance.",
      challenge: "New users were struggling with onboarding, leading to high drop-off rates and increased support tickets. The existing help documentation was scattered and users couldn't find answers quickly.",
      myRole: "Led the product development from conception to launch, working with engineering, design, and customer success teams. Defined product requirements, user stories, and success metrics.",
      approach: "Designed and implemented an AI-powered chatbot that could answer questions contextually and guide users through the onboarding process. Integrated with existing help documentation and created a feedback loop for continuous improvement.",
      result: "15% higher user retention, 60% reduction in support tickets during onboarding, and 80% of common questions handled automatically. User satisfaction scores increased by 40%.",
      image: "/placeholder.svg"
    },
    {
      title: "LMS Platform (0 to 1)",
      emoji: "📚",
      shortDescription: "Built a gamified learning management system from scratch that achieved 135% higher course completion rates.",
      challenge: "The existing learning platform had extremely low completion rates (under 20%) and poor user engagement. Students were not motivated to continue courses.",
      myRole: "Product lead for the entire platform rebuild. Conducted user research, defined product strategy, and managed the development roadmap across multiple engineering teams.",
      approach: "Redesigned the learning experience with gamification elements, progress tracking, and personalized learning paths. Implemented achievements, leaderboards, and social learning features.",
      result: "135% increase in course completion rates, 42% improvement in student satisfaction scores, and 65% increase in daily active users. Platform became the top-rated learning tool in the company.",
      image: "/placeholder.svg"
    },
    {
      title: "Gamified Loyalty Program",
      emoji: "🎯",
      shortDescription: "Launched a points-based loyalty program that boosted repeat engagement and increased average order value by 22%.",
      challenge: "Customer retention was below industry average, with users not seeing enough value to return regularly. First-time buyers rarely became repeat customers.",
      myRole: "Product manager responsible for loyalty program strategy, implementation, and optimization. Collaborated with marketing, engineering, and data teams.",
      approach: "Implemented a comprehensive loyalty program with points, levels, and rewards to incentivize repeat purchases. Created personalized offers based on user behavior and purchase history.",
      result: "35% uplift in repeat customer engagement, 22% increase in average order value, and 50% improvement in customer lifetime value. Program reached 80% adoption rate within 6 months.",
      image: "/placeholder.svg"
    },
    {
      title: "Mobile-First E-commerce Redesign",
      emoji: "📱",
      shortDescription: "Complete website and app redesign that reduced cart abandonment by 25% and improved mobile conversion rates.",
      challenge: "The existing website had poor conversion rates, especially on mobile devices. High bounce rates and cart abandonment were major issues affecting revenue.",
      myRole: "Led the product redesign initiative, conducting user research to identify pain points and working with design and engineering teams on implementation.",
      approach: "Conducted extensive user research and redesigned the entire user journey with a mobile-first approach. Simplified checkout process and improved page load speeds.",
      result: "10% overall conversion rate improvement, 25% reduction in cart abandonment, 40% increase in mobile sessions, and 15% boost in mobile revenue.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-earthen-luxe page-transition">
      <ModernHeader />
      <div className="container-max pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl lg:text-4xl font-display text-navy-blue mb-4 sm:mb-6">My Projects</h1>
          <p className="text-lg sm:text-xl text-dark-green max-w-3xl mx-auto font-body">
            Real-world product management work with measurable outcomes and business impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <ModernFooter />
    </div>
  );
};

export default Projects;
