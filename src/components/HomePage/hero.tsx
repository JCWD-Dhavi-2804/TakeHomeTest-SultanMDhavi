import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-green-600 px-6 mt-10 md:px-10 md:mt-12 lg:mt-0">
      <div className="max-w-full mx-auto py-16 md:py-0">
        <div className="grid grid-cols-1 gap-8 items-center min-h-[400px] md:grid-cols-2 md:min-h-[600px] lg:min-h-[700px]">
          {/* Text content section */}
          <div className="order-2 px-4 md:order-1 md:px-8">
            <h1 className="text-3xl font-bold text-center md:text-left md:text-4xl lg:text-5xl">
              Welcome to Dhavi Farma!
            </h1>
            <h2 className="text-lg font-semibold mt-7 text-center md:text-left md:text-xl lg:text-2xl animate-fadeIn">
              Best Drug Store in Town!
            </h2>
          </div>

          {/* Image section */}
          <div className="mt-2 flex justify-center md:mt-0">
            <img src="/images/hero.webp" alt="hero" className="h-3/5 w-3/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
