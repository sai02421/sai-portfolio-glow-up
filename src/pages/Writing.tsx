
import Navbar from "@/components/Navbar";
import { ExternalLink } from "lucide-react";

const Writing = () => {
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
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">⚙️ UX Breakdowns & Everyday Product Thinking</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world UX, written like a PM. I break down how the products we use daily are designed — and what they get right (or don't). View more on my{" "}
            <a 
              href="https://linkedin.com/in/sai-iyer-9b4b8b1b5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
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
              className="section-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer block"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {post.title}
              </h3>
              <p className="mb-4 leading-relaxed text-gray-600">
                {post.description}
              </p>
              <div className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700">
                Read on LinkedIn
                <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Writing;
