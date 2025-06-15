
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Vedix E-commerce Redesign",
      description: "Led an end-to-end platform redesign that improved conversion by 10% and AOV by 12%.",
      image: "/placeholder.svg",
      featured: true,
      link: "/projects"
    },
    {
      id: 2,
      title: "AI Onboarding Chatbot",
      description: "Built a '0 to 1' AI chatbot that personalized user onboarding and increased retention by 15%.",
      image: "/placeholder.svg",
      featured: false,
      link: "/projects"
    },
    {
      id: 3,
      title: "Gamified Loyalty Program",
      description: "Launched the 'Nector Coins' program, driving a 35% increase in web conversions.",
      image: "/placeholder.svg",
      featured: false,
      link: "/projects"
    },
    {
      id: 4,
      title: "B2B/B2C LMS Platform",
      description: "Spearheaded the development of a new LMS, resulting in a 135% increase in course completion.",
      image: "/placeholder.svg",
      featured: false,
      link: "/projects"
    }
  ];

  return (
    <section className="py-20 bg-dark-navy">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-light-gray mb-6">Featured Projects</h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto font-source-sans">
            Discover how I've turned complex challenges into measurable business impact through strategic product management and user-centric design.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={project.link}
              className={`project-card group ${project.featured ? 'lg:col-span-2' : ''} animate-stagger-${index + 1}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-blue/0 group-hover:bg-slate-blue/20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="btn-primary">
                    View Case Study
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-light-gray mb-3 group-hover:text-muted-teal transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-cool-gray font-source-sans leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button className="btn-secondary">
              View All Projects
              <ExternalLink size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
