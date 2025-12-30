import React from "react";
import { Link } from "react-router-dom";

const previousCabinets = [
  {
    assembly: "पंचदश विधानसभा",
    date: "11/12/2023 तक",
    path: "/mantrimandal15",
  },
  {
    assembly: "चतुर्दश विधानसभा",
    date: "25/08/2023 तक",
    path: "/mantrimandal14",
  },
];

const PreviousCabinetsPagess = () => {
  return (
    <div className="comm-page">
      
      {/* ⭐ Hero Section */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>पूर्व मंत्रिमण्डल</h1>
        </div>
      </div>

      {/* ⭐ Main Section */}
      <section className="comm-section">

        <div className="comm-grid">
          {previousCabinets.map((item, index) => (
            <Link key={index} to={item.path} className="comm-card-link">
              <div className="comm-card">
                <h3>{item.assembly}</h3>
                <p> दिनांक {item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PreviousCabinetsPagess;
