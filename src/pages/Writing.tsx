
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
        <div className="text-center mb-16">
          <h2 className="font-fredoka text-navy-blue mb-4">
            Blogs & Teardowns
          </h2>
          <p className="text-dark-green font-source-sans max-w-2xl mx-auto">
            Deep dives into product strategy, UX analysis, and what makes great products tick.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="font-fredoka text-navy-blue mb-3">
                {item.title}
              </h3>
              <p className="text-dark-green font-source-sans mb-4 leading-relaxed">
                {item.description}
              </p>
              <a 
                href={item.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-digital-lavender font-source-sans font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform"
              >
                Read Teardown →
              </a>
            </div>
          ))}
        </div>
      </div>
      <ModernFooter />
    </div>
  );
};

export default Writing;
