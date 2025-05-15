
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
  shortDescription: string;
  challenge: string;
  approach: string;
  result: string;
  image: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="gradient-card overflow-hidden transition-all duration-300 hover:glow">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.shortDescription}</p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="border-blue hover:bg-blue/10">
              View Case Study
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl bg-navy-light border-blue/20">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
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
                  <h4 className="text-lg font-semibold text-blue-light mb-2">Challenge</h4>
                  <p className="text-gray-300">{project.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-blue-light mb-2">Approach</h4>
                  <p className="text-gray-300">{project.approach}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-light mb-2">Results</h4>
                  <p className="text-gray-300">{project.result}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "AI Onboarding Chatbot (\"Doctor\")",
      shortDescription: "Built and launched an AI chat agent to guide new users.",
      challenge: "New users were struggling with onboarding, leading to high drop-off rates and increased support tickets.",
      approach: "Led cross-functional team to design and implement an AI-powered chatbot that could answer questions and guide users through the onboarding process.",
      result: "15% higher user retention and significantly fewer support tickets. The chatbot handled over 80% of common onboarding questions.",
      image: "/placeholder.svg"
    },
    {
      title: "LMS Platform (EdTech)",
      shortDescription: "Developed a learning-management system for Rise WPU.",
      challenge: "The existing learning platform had low completion rates and poor user engagement.",
      approach: "Redesigned the learning experience with gamification elements, progress tracking, and personalized learning paths based on user data.",
      result: "+135% course completion through user-centric flows and dashboards. Student satisfaction scores increased by 42%.",
      image: "/placeholder.svg"
    },
    {
      title: "Gamified Loyalty (Nector Coins)",
      shortDescription: "Designed a gamification layer for Vedix.",
      challenge: "Customer retention was below industry average, with users not seeing enough value to return regularly.",
      approach: "Implemented a comprehensive loyalty program with points, levels, and rewards to incentivize repeat purchases and engagement.",
      result: "35% uplift in conversions and repeat engagement. Average order value increased by 22% as users spent more to earn rewards.",
      image: "/placeholder.svg"
    },
    {
      title: "Website & App Redesign",
      shortDescription: "Led the end-to-end UX revamp of Vedix's e-commerce site.",
      challenge: "The existing website had poor conversion rates, especially on mobile, with a high bounce rate and cart abandonment.",
      approach: "Conducted extensive user research to identify pain points, then redesigned the entire user journey with a focus on mobile-first experience and simplified checkout.",
      result: "10% higher conversion rate and better mobile UX. Cart abandonment reduced by 25% and mobile sessions increased by 40%.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="section-container animate-fade-in">
      <h2 className="section-title text-center">Projects & Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
