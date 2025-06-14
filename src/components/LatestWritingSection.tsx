
import { ExternalLink, Clock, Users } from "lucide-react";

const LatestWritingSection = () => {
  const articles = [
    {
      title: "Same UPI. Different UX.",
      description: "Why GPay feels effortless for P2P and PhonePe dominates for P2M. A UX breakdown of intent vs interface.",
      readTime: "5 min read",
      engagement: "127 likes",
      link: "https://www.linkedin.com/posts/sai-iyer-gpay-vs-phonepe-post-link",
      tags: ["UX Analysis", "FinTech"]
    },
    {
      title: "Lean-back vs Lean-in.",
      description: "Netflix plays to emotion, Prime plays to control. A UX teardown on how small decisions create binge-worthy experiences.",
      readTime: "7 min read",
      engagement: "89 likes",
      link: "https://www.linkedin.com/posts/sai-iyer-netflix-vs-prime-video-post-link",
      tags: ["UX Design", "Streaming"]
    },
    {
      title: "Still going after 384 days.",
      description: "How Duolingo designs for forgiveness, progress, and behavior — not pressure. A breakdown of habit-safe UX.",
      readTime: "6 min read",
      engagement: "156 likes",
      link: "https://www.linkedin.com/posts/sai-iyer-duolingo-ux-post-link",
      tags: ["UX Psychology", "EdTech"]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">⚙️ UX Breakdowns & Everyday Product Thinking</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world UX, written like a PM. I break down how the products we use daily are designed — and what they get right (or don't). View more on my{" "}
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 underline font-medium"
            >
              LinkedIn →
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
      </div>
    </section>
  );
};

export default LatestWritingSection;
