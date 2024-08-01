import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Text content section */}
          <div className="hero-text">
            <h1 className="hero-title">Welcome to Dhavi Farma!</h1>
            <h2 className="hero-subtitle">Best Drug Store in Town!</h2>
          </div>

          {/* Image section */}
          <div className="hero-image-container">
            <img src="/images/hero.webp" alt="hero" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
