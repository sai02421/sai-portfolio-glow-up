
const BlogsTeardowns = () => {
  const teardowns = [
    {
      logo: "🎵",
      title: "Spotify's Onboarding Flow: A Deep Dive",
      summary: "Analyzing how Spotify's music preference algorithm creates personalized experiences from day one, driving 40% higher engagement.",
      link: "#"
    },
    {
      logo: "🦉",
      title: "Duolingo's Gamification Strategy",
      summary: "Breaking down the psychology behind streaks, XP systems, and how Duolingo maintains 90-day retention rates above 25%.",
      link: "#"
    },
    {
      logo: "📱",
      title: "Instagram Stories: UX Teardown",
      summary: "Exploring how Instagram's Stories feature revolutionized social sharing and increased daily active users by 300M+.",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-earthen-luxe">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-fredoka text-navy-blue mb-4">
            Blogs & Teardowns
          </h2>
          <p className="text-dark-green font-source-sans max-w-2xl mx-auto">
            Deep dives into product strategy, UX analysis, and what makes great products tick.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teardowns.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{item.logo}</div>
              <h3 className="font-fredoka text-navy-blue mb-3">
                {item.title}
              </h3>
              <p className="text-dark-green font-source-sans mb-4 leading-relaxed">
                {item.summary}
              </p>
              <a 
                href={item.link} 
                className="text-link text-digital-lavender font-source-sans font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform"
              >
                Read Teardown →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsTeardowns;
