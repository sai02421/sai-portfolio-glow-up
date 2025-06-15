
const ExperienceSection = () => {
  return (
    <section className="py-20 bg-slate-blue">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in-up">
            <h2 className="text-light-gray mb-8">My Journey in Product</h2>
          </div>
          
          <div className="animate-stagger-1">
            <div className="space-y-6 text-cool-gray font-source-sans text-lg leading-relaxed">
              <p>
                My product management journey began in the fast-paced world of Ed-Tech, where I spearheaded the '0 to 1' development of a scalable Learning Management System for both B2B and B2C clients at Rise WPU. By leading user interviews and defining the product vision from scratch, we created a platform that drove a <span className="text-muted-teal font-semibold">135% increase in course completion rates</span>.
              </p>
              
              <p>
                From there, I moved into the competitive e-commerce space at Incnut Lifestyle, where I focused on data-driven optimization. I led the end-to-end redesign of the Vedix B2C platform, using rigorous A/B testing to achieve a <span className="text-muted-teal font-semibold">10% improvement in conversion and a 12% boost in average order value</span>. My passion for innovation led me to build and deploy an AI-powered chatbot that personalized skincare education, increasing user retention by <span className="text-muted-teal font-semibold">15%</span>, and to launch a gamified loyalty program that drove a <span className="text-muted-teal font-semibold">35% increase in web conversions</span>.
              </p>
              
              <p>
                Across all my roles, I thrive on aligning technical and business teams, using data to inform strategy, and delivering products that create measurable value for both the user and the business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
