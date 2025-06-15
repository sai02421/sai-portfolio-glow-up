
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
    <section className="py-20 bg-earthen-luxe">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-fredoka text-navy-blue mb-4">
            My Experience Journey
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-digital-lavender"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8 pb-12 last:pb-0">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-4 h-4 bg-digital-lavender rounded-full border-4 border-earthen-luxe relative z-10"></div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <h3 className="font-fredoka text-navy-blue mb-2">
                    {exp.company}
                  </h3>
                  <p className="caption text-digital-lavender mb-3 font-source-sans">
                    {exp.period}
                  </p>
                  <p className="text-dark-green font-source-sans">
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
