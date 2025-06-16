
const ExperienceJourney = () => {
  const experiences = [
    {
      company: "Incnut Lifestyle",
      role: "Product Manager",
      period: "Nov 2023 – Nov 2024",
      category: "E-commerce | AI Chatbot | Gamification | Checkout Optimization",
      achievement: "🎯 Improved user retention by 15%, increased checkout conversion by 10%, and reduced drop-offs by building a gamified loyalty system and an AI chatbot using GPT + internal DB.",
      highlights: [
        "Launched a personalized onboarding chatbot integrated with Razorpay & Juspay.",
        "Built and scaled Nector Coin ecosystem, reducing cart abandonment.",
        "Used Mixpanel and GA4 to optimize the checkout flow."
      ]
    },
    {
      company: "Rise WPU",
      role: "Product Manager",
      period: "June 2022 – June 2023", 
      category: "Ed-tech | LMS | B2B & B2C SaaS | GTM",
      achievement: "🎯 Launched a white-label LMS MVP that led to a 135% increase in course completions and a 28-point rise in faculty NPS across 5+ universities.",
      highlights: [
        "Designed modular UI and onboarding for course discoverability.",
        "Rolled out analytics dashboard for educators.",
        "Led user interviews and agile releases to reduce learning friction."
      ]
    }
  ];

  return (
    <section id="experience-journey" className="py-16 sm:py-20 bg-[#F5EFFF]">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-display text-[#2F3E46] mb-4">
            My Experience Journey
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-[#D5AAFF]"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-6 sm:space-x-8 pb-12 last:pb-0">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-4 h-4 bg-[#D5AAFF] rounded-full border-4 border-[#F5EFFF] relative z-10"></div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-xl shadow-md p-4 sm:p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="mb-4">
                    <h3 className="font-display text-[#2F3E46] mb-1 text-lg sm:text-xl">
                      {exp.company}
                    </h3>
                    <p className="text-[#CDB4DB] font-semibold mb-1 font-body text-sm sm:text-base">
                      {exp.role} | {exp.period}
                    </p>
                    <p className="text-[#A3C4F3] text-xs sm:text-sm font-body mb-3">
                      {exp.category}
                    </p>
                  </div>
                  
                  <p className="text-[#4B3F3F] font-body text-sm sm:text-base leading-relaxed mb-4">
                    {exp.achievement}
                  </p>
                  
                  <div>
                    <p className="font-semibold text-[#2F3E46] mb-2 text-sm sm:text-base">Highlights:</p>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-[#4B3F3F] text-xs sm:text-sm leading-relaxed">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceJourney;
