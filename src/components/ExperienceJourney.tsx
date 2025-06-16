
const ExperienceJourney = () => {
  const experiences = [
    {
      company: "Incnut Lifestyle",
      period: "Nov 2023 - Nov 2024",
      achievement: "Led e-commerce redesign, boosting conversion by 10% and launching an AI chatbot that increased retention by 15%."
    },
    {
      company: "Rise WPU",
      period: "June 2022 - June 2023", 
      achievement: "Spearheaded 0-to-1 LMS development, driving a 135% increase in course completion."
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
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-[#D5AAFF]"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-6 sm:space-x-8 pb-12 last:pb-0">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-4 h-4 bg-[#D5AAFF] rounded-full border-4 border-[#F5EFFF] relative z-10"></div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-xl shadow-md p-4 sm:p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <h3 className="font-display text-[#2F3E46] mb-2 text-lg sm:text-xl">
                    {exp.company}
                  </h3>
                  <p className="caption text-[#D5AAFF] mb-3 font-body">
                    {exp.period}
                  </p>
                  <p className="text-[#4B3F3F] font-body text-sm sm:text-base leading-relaxed">
                    {exp.achievement}
                  </p>
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
