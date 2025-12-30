import React from "react";
import { useNavigate } from "react-router-dom";

const olderCabinets = [
  {
    date: "17/12/2018 तक",
    assembly: "चतुर्दश विधानसभा",
    details: "",
    link: "/misc/14MINISTER.pdf",
  },
  {
    date: "01/12/2013",
    assembly: "चतुर्दश विधानसभा",
    details: "मध्यप्रदेश राजपत्र (असाधारण) क्रमांक - 570",
    link: "/misc/13THVS/13minster.pdf",
  },
];

const OlderCabinetsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="comm-page">
      {/* Hero Section */}
      <div className="flex items-center justify-between comm-hero">
        <div className="comm-hero-content">
          <h1>मंत्रिमण्डल</h1>
          <p>(चतुर्दश विधानसभा)</p>
        </div>

        {/* Back Button */}
        <div
          className="back-btn"
          onClick={() => navigate("/mlagroupall")}
        >
          <span>पीछे जाये</span> →
        </div>
      </div>

      {/* Main Section */}
      <section className="comm-section">
        <div className="comm-grid">
          {olderCabinets.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="comm-card"
            >
              <h3 className="comm-card-title">{item.assembly}</h3>
              <p className="comm-card-date">दिनांक {item.date}</p>
              {item.details && (
                <p className="comm-card-details">{item.details}</p>
              )}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OlderCabinetsPage;