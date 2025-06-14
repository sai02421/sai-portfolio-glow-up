
import { ExternalLink } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Empathy in Product Leadership",
      description: "How listening better leads to better shipping. Insights from real PM challenges.",
      link: "https://linkedin.com/in/sai-iyer-9b4b8b1b5"
    },
    {
      title: "Data Doesn't Decide — You Do",
      description: "Using analytics wisely while still leading with conviction. My take on PM intuition vs. data.",
      link: "https://linkedin.com/in/sai-iyer-9b4b8b1b5"
    },
    {
      title: "The Roadmap Isn't a Wish List",
      description: "How I align stakeholders and prioritize ruthlessly. Real frameworks I use.",
      link: "https://linkedin.com/in/sai-iyer-9b4b8b1b5"
    }
  ];

  return (
    <section id="blog" className="section-container bg-navy-dark animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="section-title">🧠 From My Desk</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          A few thoughts I've shared on product, strategy, and empathetic building. View more on my{" "}
          <a 
            href="https://linkedin.com/in/sai-iyer-9b4b8b1b5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-light hover:text-blue underline transition-colors"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="gradient-card p-6 hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-semibold mb-3 text-white">{post.title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{post.description}</p>
            <a 
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-light hover:text-blue transition-colors font-medium"
            >
              Read on LinkedIn
              <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
