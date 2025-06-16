
import ModernHeader from "@/components/ModernHeader";
import ModernFooter from "@/components/ModernFooter";
import { ExternalLink } from "lucide-react";

const Writing = () => {
  const blogPosts = [
    {
      title: "Same UPI. Different UX.",
      description: "Why GPay feels effortless for P2P and PhonePe dominates for P2M. A UX breakdown of intent vs interface.",
      link: "https://www.linkedin.com/posts/-sai-iyer_ux-productdesign-googlepay-activity-7337418119709134849-mWuZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADC7KwUBouwQyjYAsrgN3f3uuON5slQe0w4",
      emoji: "💳"
    },
    {
      title: "Lean-back vs Lean-in.",
      description: "Netflix plays to emotion, Prime plays to control. A UX teardown on how small decisions create binge-worthy experiences.",
      link: "https://www.linkedin.com/posts/-sai-iyer_ux-usercentricdesign-netflix-activity-7338048523793248257-RRB1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADC7KwUBouwQyjYAsrgN3f3uuON5slQe0w4",
      emoji: "📺"
    },
    {
      title: "Still going after 384 days.",
      description: "How Duolingo designs for forgiveness, progress, and behavior — not pressure. A breakdown of habit-safe UX.",
      link: "https://www.linkedin.com/posts/-sai-iyer_productdesign-ux-behavioraldesign-activity-7338769550655533056-xW0t?utm_source=share&utm_medium=member_desktop&rcm=ACoAADC7KwUBouwQyjYAsrgN3f3uuON5slQe0w4",
      emoji: "🦉"
    }
  ];

  return (
    <div className="min-h-screen bg-earthen-luxe page-transition">
      <ModernHeader />
      <div className="container-max pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-navy-blue mb-4">⚙️ UX Breakdowns & Everyday Product Thinking</h1>
          <p className="text-lg sm:text-xl text-dark-green max-w-3xl mx-auto px-4 sm:px-0 font-body">
            Real-world UX, written like a PM. I break down how the products we use daily are designed — and what they get right (or don't). View more on my{" "}
            <a 
              href="https://linkedin.com/in/sai-iyer-9b4b8b1b5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#A3C4F3] hover:text-[#CDB4DB] underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer block group relative"
            >
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-xl sm:text-2xl">
                {post.emoji}
              </div>
              
              <h3 className="text-lg sm:text-xl font-display text-navy-blue mb-3 pr-8 group-hover:text-[#CDB4DB] transition-colors">
                {post.title}
              </h3>
              <p className="mb-4 leading-relaxed text-dark-green text-sm sm:text-base font-body">
                {post.description}
              </p>
              <div className="inline-flex items-center gap-2 text-[#A3C4F3] font-medium hover:text-[#CDB4DB] transition-colors">
                <ExternalLink size={14} className="sm:hidden" />
                <ExternalLink size={16} className="hidden sm:block" />
              </div>
            </a>
          ))}
        </div>
      </div>
      <ModernFooter />
    </div>
  );
};

export default Writing;
