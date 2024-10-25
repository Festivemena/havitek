import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-customBlue to-customCyan text-white py-10 md:py-20">
      <div className="container mx-auto h-auto px-6 flex flex-col items-center justify-center text-center space-y-4 md:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight mb-2 md:mb-4">
          Build Your Dream Product with Ease
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-8">
          Crafting Innovations across various Ecosystems.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-gray-200 transition">
            Request a Demo 
          </button>
          <button className="bg-transparent border border-white text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
