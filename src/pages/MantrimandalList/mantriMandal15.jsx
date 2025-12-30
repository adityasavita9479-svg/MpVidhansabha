import React from "react";
import { useNavigate } from "react-router-dom";

const previousCabinets = [
  { date: "11/12/2023 तक", link: "/misc/15MINISTER.pdf" },
  { date: "25/08/2023 तक", link: "/misc/sscminister250823.pdf" },
  { date: "01/01/2021 तक", link: "/misc/sscminister010121.pdf" },
  { date: "11/11/2020 तक", link: "/misc/sscminister111120.pdf" },
  { date: "20/10/2020 तक", link: "/misc/sscminister201020.pdf" },
  { date: "01/07/2020 तक", link: "/misc/sscminister010720.pdf" },
  { date: "20/03/2020 तक", link: "/misc/knmantri200320.pdf" },
  { date: "05/01/2019 की स्थिति", link: "/misc/knmantri050119.pdf" },
];

const PreviousCabinetsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="comm-page">
      {/* Hero Header */}
      <div className="flex items-center justify-between comm-hero">
        <div>
          <h1>मंत्रिमण्डल</h1>
          <p>(पंचदश विधानसभा)</p>
        </div>

        {/* Back Button */}
        <div
          className="back-btn"
          onClick={() => navigate("/mlagroupall")}
        >
          <span>पीछे जाये</span> →
        </div>
      </div>

      {/* Cabinet Timeline */}
      <div className="comm-section">
        <div className="comm-grid">
          {previousCabinets.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="comm-card"
            >
              <h3>￫ दिनांक {item.date}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousCabinetsPage;
