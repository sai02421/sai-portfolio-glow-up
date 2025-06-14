
import { ExternalLink } from "lucide-react";

const LatestWritingSection = () => {
  const articles = [
    {
      title: "Empathy in Product Leadership",
      description: "How understanding user emotions and team dynamics creates products that truly resonate and teams that thrive.",
      link: "#"
    },
    {
      title: "Data Doesn't Decide — You Do",
      description: "Why successful product managers use data to inform decisions, not make them. The art of balancing metrics with intuition.",
      link: "#"
    },
    {
      title: "The Roadmap Isn't a Wish List",
      description: "Building realistic, outcome-focused roadmaps that align stakeholders and deliver real business value.",
      link: "#"
    }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">From My Desk</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A few thoughts I've shared on product, strategy, and empathetic building.{" "}
          <a 
            href="https://linkedin.com/in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-700 underline"
          >
            View more on my LinkedIn
          </a>
          .
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="section-card p-8 hover:scale-105 transition-all duration-300 cursor-pointer block group"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
              {article.title}
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              {article.description}
            </p>
            <div className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors">
              Read on LinkedIn
              <ExternalLink size={16} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LatestWritingSection;
