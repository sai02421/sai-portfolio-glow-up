
import { ExternalLink, Clock, Users } from "lucide-react";

const LatestWritingSection = () => {
  const articles = [
    {
      title: "Empathy in Product Leadership",
      description: "How understanding user emotions and team dynamics creates products that truly resonate and teams that thrive.",
      readTime: "5 min read",
      engagement: "127 likes",
      link: "#",
      tags: ["Leadership", "Product"]
    },
    {
      title: "Data Doesn't Decide — You Do",
      description: "Why successful product managers use data to inform decisions, not make them. The art of balancing metrics with intuition.",
      readTime: "7 min read",
      engagement: "89 likes",
      link: "#",
      tags: ["Strategy", "Analytics"]
    },
    {
      title: "The Roadmap Isn't a Wish List",
      description: "Building realistic, outcome-focused roadmaps that align stakeholders and deliver real business value.",
      readTime: "6 min read",
      engagement: "156 likes",
      link: "#",
      tags: ["Planning", "Strategy"]
    }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">From My Desk</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Practical insights from building products that matter. I share what I learn from working with founders, leading teams, and launching features.{" "}
          <a 
            href="https://linkedin.com/in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-700 underline font-medium"
          >
            Follow for more on LinkedIn →
          </a>
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
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
              {article.title}
            </h3>
            
            <p className="mb-6 leading-relaxed text-gray-600">
              {article.description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={14} />
                <span>{article.engagement}</span>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors">
              Read on LinkedIn
              <ExternalLink size={16} />
            </div>
          </a>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <div className="section-card p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Want to stay updated?</h3>
          <p className="text-gray-600 mb-6">
            Get weekly insights on product strategy, no-code tools, and startup validation directly in your inbox.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWritingSection;
