
const ExperienceSection = () => {
  return (
    <section id="my-journey" className="py-20 bg-earthen-luxe">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Section Title */}
          <div className="animate-fade-in-up">
            <h2 className="font-fredoka text-dark-green mb-8">
              My Journey in Product
            </h2>
          </div>
          
          {/* Right Column - Experience Narrative */}
          <div className="animate-fade-in-up animate-stagger-1">
            <div className="space-y-6 text-dark-green font-source-sans">
              <p>
                My product management journey began in the fast-paced world of Ed-Tech, where I spearheaded the '0 to 1' development of a scalable Learning Management System for both B2B and B2C clients at Rise WPU. By leading user interviews and defining the product vision from scratch, we created a platform that drove a <span className="font-semibold text-digital-lavender">135% increase in course completion rates</span>.
              </p>
              
              <p>
                From there, I moved into the competitive e-commerce space at Incnut Lifestyle, where I focused on data-driven optimization. I led the end-to-end redesign of the Vedix B2C platform, using rigorous A/B testing to achieve a <span className="font-semibold text-digital-lavender">10% improvement in conversion and a 12% boost in average order value</span>. My passion for innovation led me to build and deploy an AI-powered chatbot that personalized skincare education, increasing user retention by <span className="font-semibold text-digital-lavender">15%</span>, and to launch a gamified loyalty program that drove a <span className="font-semibold text-digital-lavender">35% increase in web conversions</span>.
              </p>
              
              <p>
                Across all my roles, I thrive on aligning technical and business teams, using data to inform strategy, and delivering products that create measurable value for both the user and the business. Beyond the metrics, I'm driven by a passion for solving complex puzzles and a deep curiosity about what makes people tick. When I'm not building products, you can find me exploring new technologies or getting lost in a good book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
