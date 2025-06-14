
import { ExternalLink } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Same UPI. Different UX.",
      description: "Why GPay feels effortless for P2P and PhonePe dominates for P2M. A UX breakdown of intent vs interface.",
      link: "https://www.linkedin.com/posts/-sai-iyer_ux-productdesign-googlepay-activity-7337418119709134849-mWuZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADC7KwUBouwQyjYAsrgN3f3uuON5slQe0w4"
    },
    {
      title: "Lean-back vs Lean-in.",
      description: "Netflix plays to emotion, Prime plays to control. A UX teardown on how small decisions create binge-worthy experiences.",
      link: "https://www.linkedin.com/posts/-sai-iyer_ux-usercentricdesign-netflix-activity-7338048523793248257-RRB1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADC7KwUBouwQyjYAsrgN3f3uuON5slQe0w4"
    },
    {
      title: "Still going after 384 days.",
      description: "How Duolingo designs for forgiveness, progress, and behavior — not pressure. A breakdown of habit-safe UX.",
      link: "https://www.linkedin.com/posts/-sai-iyer_productdesign-ux-behavioraldesign-activity-7338769550655533056-xW0t?utm_source=share&utm_medium=member_desktop&rcm=ACoAADC7KwUBouwQyjYAsrgN3f3uuON5slQe0w4"
    }
  ];

  return (
    <section id="blog" className="section-container animate-fade-in" style={{ backgroundColor: '#1C2533' }}>
      <div className="text-center mb-12">
        <h2 className="section-title" style={{ color: '#E2E8F0' }}>⚙️ UX Breakdowns & Everyday Product Thinking</h2>
        <p className="max-w-2xl mx-auto text-lg" style={{ color: '#94A3B8' }}>
          Real-world UX, written like a PM. I break down how the products we use daily are designed — and what they get right (or don't). View more on my{" "}
          <a 
            href="https://linkedin.com/in/sai-iyer-9b4b8b1b5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline transition-colors"
            style={{ color: '#60A5FA' }}
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-card p-6 hover:scale-105 transition-transform duration-200 cursor-pointer block"
            style={{ backgroundColor: '#273447' }}
          >
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#E2E8F0' }}>
              {post.title}
            </h3>
            <p className="mb-4 leading-relaxed" style={{ color: '#94A3B8' }}>
              {post.description}
            </p>
            <div className="inline-flex items-center gap-2 transition-colors font-medium" style={{ color: '#60A5FA' }}>
              Read on LinkedIn
              <ExternalLink size={16} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
