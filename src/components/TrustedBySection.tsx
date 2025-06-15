
const TrustedBySection = () => {
  return (
    <section id="trusted-by" className="py-16 bg-dark-green">
      <div className="container-max">
        <div className="text-center space-y-12">
          <h2 className="font-fredoka text-light-gray text-4xl">
            Trusted By
          </h2>
          
          <div className="flex justify-center items-center space-x-16">
            {/* Company logos - using placeholder divs for now */}
            <div className="bg-light-gray/20 rounded-lg p-6 min-w-[150px] h-20 flex items-center justify-center">
              <span className="text-light-gray font-source-sans font-semibold">Incnut Lifestyle</span>
            </div>
            <div className="bg-light-gray/20 rounded-lg p-6 min-w-[150px] h-20 flex items-center justify-center">
              <span className="text-light-gray font-source-sans font-semibold">Rise WPU</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
