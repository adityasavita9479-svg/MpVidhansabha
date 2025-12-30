import React from "react";
import { Link } from "react-router-dom";

const cabinetStatuses = [
  { date: "02/12/2024 से...", link: "/misc/16MINISTER.pdf" },
  { date: "02/12/2024 तक की स्थिति", link: "/misc/16MINISTER_021224.pdf" },
  { date: "07/07/2024 तक की स्थिति", link: "/misc/16MINISTER_070724.pdf" },
];

const Ministers16thAssemblyPage = () => {
  return (
    <div className="comm-page">
      {/* Hero Section */}
      <div className="comm-hero">
        <h1>मंत्रिमण्डल</h1>
        <p>(षोडश विधानसभा)</p>
      </div>

      {/* Main Section */}
      <section className="comm-section">
        <h2>दिनांक अनुसार स्थिति</h2>
        <div className="comm-grid">
          {cabinetStatuses.map((status, index) => {
            const isPdf = status.link.endsWith(".pdf");
            const content = (
              <div className="comm-card">
                <h3>￫ {status.date}</h3>
              </div>
            );

            return isPdf ? (
              <a
                key={index}
                href={status.link}
                target="_blank"
                rel="noopener noreferrer"
                className="comm-card-link"
              >
                {content}
              </a>
            ) : (
              <Link key={index} to={status.link} className="comm-card-link">
                {content}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Ministers16thAssemblyPage;
