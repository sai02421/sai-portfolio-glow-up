
import Navbar from "@/components/Navbar";
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
  approach: string;
  result: string;
  image: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="section-card overflow-hidden cursor-pointer p-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">{project.emoji}</span>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {project.shortDescription}
              </p>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full bg-white/80 hover:bg-gray-50"
          >
            View Case Study
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3 text-gray-900">
            <span className="text-3xl">{project.emoji}</span>
            {project.title}
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-blue-600">
                Challenge
              </h4>
              <p className="text-gray-700">{project.challenge}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-blue-600">
                Approach
              </h4>
              <p className="text-gray-700">{project.approach}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-blue-600">
                Results
              </h4>
              <p className="text-gray-700">{project.result}</p>
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
      title: "AI Chatbot for Onboarding (\"Doctor\")",
      emoji: "🧠",
      shortDescription: "AI assistant reduced support load & increased retention by 15%",
      challenge: "New users were struggling with onboarding, leading to high drop-off rates and increased support tickets.",
      approach: "Led cross-functional team to design and implement an AI-powered chatbot that could answer questions and guide users through the onboarding process.",
      result: "15% higher user retention and significantly fewer support tickets. The chatbot handled over 80% of common onboarding questions.",
      image: "/placeholder.svg"
    },
    {
      title: "LMS Platform (0 to 1)",
      emoji: "📚",
      shortDescription: "Gamified learning system led to 135% higher course completions",
      challenge: "The existing learning platform had low completion rates and poor user engagement.",
      approach: "Redesigned the learning experience with gamification elements, progress tracking, and personalized learning paths based on user data.",
      result: "+135% course completion through user-centric flows and dashboards. Student satisfaction scores increased by 42%.",
      image: "/placeholder.svg"
    },
    {
      title: "Gamified Loyalty Program",
      emoji: "🎯",
      shortDescription: "Points + rewards boosted repeat engagement & order value",
      challenge: "Customer retention was below industry average, with users not seeing enough value to return regularly.",
      approach: "Implemented a comprehensive loyalty program with points, levels, and rewards to incentivize repeat purchases and engagement.",
      result: "35% uplift in conversions and repeat engagement. Average order value increased by 22% as users spent more to earn rewards.",
      image: "/placeholder.svg"
    },
    {
      title: "Website & App Redesign",
      emoji: "📱",
      shortDescription: "Mobile-first redesign cut cart abandonment by 25%",
      challenge: "The existing website had poor conversion rates, especially on mobile, with a high bounce rate and cart abandonment.",
      approach: "Conducted extensive user research to identify pain points, then redesigned the entire user journey with a focus on mobile-first experience and simplified checkout.",
      result: "10% higher conversion rate and better mobile UX. Cart abandonment reduced by 25% and mobile sessions increased by 40%.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects & Case Studies</h1>
          <p className="text-xl text-gray-600">Real-world product management work and outcomes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
