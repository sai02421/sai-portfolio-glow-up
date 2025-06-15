
import { ExternalLink } from "lucide-react";

const LatestWritingSection = () => {
  const articles = [
    {
      title: "Same UPI. Different UX.",
      description: "Why GPay feels effortless for P2P and PhonePe dominates for P2M. A UX breakdown of intent vs interface.",
      link: "https://www.linkedin.com/posts/sai-iyer-gpay-vs-phonepe-post-link",
      tags: ["UX Analysis", "FinTech"],
      emoji: "💳"
    },
    {
      title: "Lean-back vs Lean-in.",
      description: "Netflix plays to emotion, Prime plays to control. A UX teardown on how small decisions create binge-worthy experiences.",
      link: "https://www.linkedin.com/posts/sai-iyer-netflix-vs-prime-video-post-link",
      tags: ["UX Design", "Streaming"],
      emoji: "📺"
    },
    {
      title: "Still going after 384 days.",
      description: "How Duolingo designs for forgiveness, progress, and behavior — not pressure. A breakdown of habit-safe UX.",
      link: "https://www.linkedin.com/posts/sai-iyer-duolingo-ux-post-link",
      tags: ["UX Psychology", "EdTech"],
      emoji: "🦉"
    }
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">⚙️ UX Breakdowns & Everyday Product Thinking</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="section-card p-6 sm:p-8 hover:scale-105 transition-all duration-300 cursor-pointer block group relative"
            >
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-xl sm:text-2xl">
                {article.emoji}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {article.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 group-hover:text-purple-600 transition-colors pr-8">
                {article.title}
              </h3>
              
              <p className="mb-4 sm:mb-6 leading-relaxed text-gray-600 text-sm sm:text-base">
                {article.description}
              </p>
              
              <div className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors text-sm sm:text-base">
                <ExternalLink size={14} className="sm:hidden" />
                <ExternalLink size={16} className="hidden sm:block" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWritingSection;
