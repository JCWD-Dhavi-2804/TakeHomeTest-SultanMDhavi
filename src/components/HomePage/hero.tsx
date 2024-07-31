import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-green-600 px-6 mt-10 md:px-10 md:mt-12 lg:mt-0">
      <div className="container mx-auto py-16 sm:py-0 lg:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center min-h-[400px] sm:min-h-[600px] lg:min-h-[700px]">
          {/* Text content section */}
          <div className="space-y-7 text-secondary order-2 sm:order-1 px-4 sm:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center sm:text-left">
              Welcome to Dhavi Farma!
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center sm:text-left">
              Best Drug Store in Town!
            </h2>
          </div>

          {/* Image section */}
          <div className="mt-2 sm:mt-0 flex justify-center">
            <img
              src="/images/hero.webp"
              alt="mammoth"
              className="h-3/5 w-3/5"
            />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
