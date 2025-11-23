import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="wrapper">
      <div className="card sedans">
        <img className="icon" src="" alt="sedans icon" />
        <h2>SEDANS</h2>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="btn btn-sedans">Learn More</button>
      </div>

      <div className="card suvs">
        <img className="icon" src="" alt="suvs icon" />
        <h2>SUVS</h2>
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button className="btn btn-suvs">Learn More</button>
      </div>

      <div className="card luxury">
        <img className="icon" src="" alt="luxury icon" />
        <h2>LUXURY</h2>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          allure of a luxury rental and arrive in style.
        </p>
        <button className="btn btn-luxury">Learn More</button>
      </div>
    </div>
  );
}
