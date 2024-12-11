import React from "react";
import './App.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <h2 className="about-title">ABOUT <span className="highlight">US</span></h2>
      <p className="about-description">
        Welcome to [Your Company Name]! We are a team of passionate developers and designers dedicated to providing cutting-edge programming solutions. Our mission is to help businesses achieve their goals with innovative and customized software applications.
      </p>

      <div className="about-values">
        <div className="value-card">
          <div className="icon">💡</div>
          <h3>Innovation</h3>
          <p>
            We strive to stay ahead of industry trends, ensuring that our solutions are modern and effective for your business.
          </p>
        </div>

        <div className="value-card">
          <div className="icon">🤝</div>
          <h3>Commitment</h3>
          <p>
            We are dedicated to delivering high-quality work and building long-term relationships with our clients.
          </p>
        </div>

        <div className="value-card">
          <div className="icon">🌍</div>
          <h3>Global Reach</h3>
          <p>
            Our solutions are designed to scale, helping businesses across the globe achieve their digital transformation goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
