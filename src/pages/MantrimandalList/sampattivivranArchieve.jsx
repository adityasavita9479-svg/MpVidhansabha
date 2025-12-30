import React from "react";
import { Link } from "react-router-dom";

const upcomingCabinets = [
  {
    assembly: "चतुर्दश विधानसभा (2013–2018)",
    path: "/sampativivran14",
  },
  {
    assembly: "त्रयोदश विधानसभा (2008–2013)",
    path: "/sampativivran13",
  },
  {
    assembly: "द्वादश विधानसभा (2003–2008)",
    path: "/sampativivran12th",
  },
  {
    assembly: "एकादश विधानसभा (1998–2003)",
    path: "/sampativivran11th",
  },
  {
    assembly: "दशम विधानसभा (1993–1998)",
    path: "/sampativivran10th",
  },
  {
    assembly: "नवम विधानसभा (1990–1992)",
    path: "/sampativivran9th",
  },
];

const UpcomingCabinetsPage = () => {
  return (
    <div className="comm-page">
      {/* Hero Section */}
      <div className="comm-hero">
        <h1>संपत्ति विवरण</h1>
      </div>

      {/* Main Section */}
      <section className="comm-section">
        {/* <h2>दिनांक अनुसार स्थिति</h2> */}

        <div className="comm-grid">
          {upcomingCabinets.map((item, index) => (
            <Link key={index} to={item.path} className="comm-card-link">
              <div className="comm-card">
                <h3>{item.assembly}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UpcomingCabinetsPage;
