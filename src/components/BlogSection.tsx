
import { ExternalLink } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Same UPI. Different UX.",
      description: "Why GPay feels effortless for P2P and PhonePe dominates for P2M. A UX breakdown of intent vs interface.",
      link: "https://www.linkedin.com/posts/sai-iyer-gpay-vs-phonepe-post-link"
    },
    {
      title: "Lean-back vs Lean-in.",
      description: "Netflix plays to emotion, Prime plays to control. A UX teardown on how small decisions create binge-worthy experiences.",
      link: "https://www.linkedin.com/posts/sai-iyer-netflix-vs-prime-video-post-link"
    },
    {
      title: "Still going after 384 days.",
      description: "How Duolingo designs for forgiveness, progress, and behavior — not pressure. A breakdown of habit-safe UX.",
      link: "https://www.linkedin.com/posts/sai-iyer-duolingo-ux-post-link"
    }
  ];

  return (
    <section id="blog" className="section-container bg-soft-black animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="section-title">⚙️ UX Breakdowns & Everyday Product Thinking</h2>
        <p className="max-w-2xl mx-auto text-lg" style={{ color: '#9E9E9E' }}>
          Real-world UX, written like a PM. I break down how the products we use daily are designed — and what they get right (or don't). View more on my{" "}
          <a 
            href="https://linkedin.com/in/sai-iyer-9b4b8b1b5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline transition-colors"
            style={{ color: '#BFA181' }}
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="gradient-card p-6 hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#D4C5B0' }}>
              {post.title}
            </h3>
            <p className="mb-4 leading-relaxed" style={{ color: '#9E9E9E' }}>
              {post.description}
            </p>
            <a 
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors font-medium"
              style={{ color: '#BFA181' }}
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
