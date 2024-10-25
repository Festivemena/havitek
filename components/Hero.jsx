import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-customBlue to-customCyan text-white py-20">
      <div className="container mx-auto h-[300px] px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Build Your Dream Product with Ease
        </h1>
        <p className="text-xl mb-8">
          Crafting Innovations across various Ecosystems.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition">
            Request a Demo 
          </button>
          <button className="bg-transparent border border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
