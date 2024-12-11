import React from 'react';
import './App.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>

      <div className="portfolio-items">
        {/* مثال على معرض صغير للمشاريع */}
        <div className="portfolio-item">
          <img src="\images\bernd-dittrich-uL1TI7xyLHQ-unsplash.jpg" alt="Project 1" />
          <h2>Project Title 1</h2>
          <p>A modern, responsive website design optimized for all devices with a seamless user interface and exceptional user experience</p>
        </div>

        <div className="portfolio-item">
          <img src="\images\madeline-n-jVP0wxSWsHM-unsplash.jpg" alt="Project 2" />
          <h2>Project Title 2</h2>
          <p>An innovative visual identity for a startup with a modern logo and engaging design that clearly reflects the brand's values.</p>
        </div>

        <div className="portfolio-item">
          <img src="\images\lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg" alt="Project 1" />
          <h2>Project Title 1</h2>
          <p>A modern, responsive website design optimized for all devices with a seamless user interface and exceptional user experience</p>
        </div>

        {/* يمكنك تكرار هذا الهيكل للعديد من المشاريع */}
      </div>
    </div>
  );
};

export default Portfolio;
