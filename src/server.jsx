import React from "react";
import './App.css';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2 className="services-title">OUR <span className="highlight">SERVICES</span></h2>
      <p className="services-description">
        We are in your corner. At the core of everything we do, we desire to make your life better. We see ourselves as in the business of helping people see their goals coming to life. Take a look and see how we can help you.
      </p>
      
      <div className="services-cards">
        <div className="service-card">
          <div className="icon">🏠</div>
          <h3>Buying</h3>
          <p>
            The feeling of putting a client in their dream home is what motivates us. Handing the keys over and witnessing the look on their face is something that never gets old. Let us help realize your dreams.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">📦</div>
          <h3>Selling</h3>
          <p>
            You may have an idea of what your home is worth or how quickly it might sell. Let us blow that idea out of the water and leave you ecstatic about selling your home.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">📝</div>
          <h3>Loans</h3>
          <p>
            One of the most incredible tools in our belt is the ability to get a better rate on your home loan than anybody else. With a better rate, you get a better home or live loan-free sooner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
