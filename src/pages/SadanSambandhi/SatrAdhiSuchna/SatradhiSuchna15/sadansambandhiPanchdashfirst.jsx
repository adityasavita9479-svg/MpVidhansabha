
import React from "react";
import { Link } from "react-router-dom";

const sessionItems = [
  { title: "सत्र आमंत्रण की अधिसूचना", pdf: "/misc/adhisuchna/aman_15_1.pdf" },
  { title: "पत्रक भाग - 2", pdf: "/misc/adhisuchna/patrak_15_1.pdf" },
  { title: "सत्र की बैठकों की दिनदर्शिका", pdf: "/misc/adhisuchna/din_15_1.pdf" },
  { title: "सत्र की बैठकों की सामान्य सूची", pdf: "/misc/adhisuchna/samanayasuchi_15_1.pdf" },
  { title: "प्रथम पुनरीक्षित सामान्य सूची", pdf: "/misc/adhisuchna/prevdload/First%20punrichit%20samanayasuchi_1.pdf" },
  { title: "पुनरीक्षित सामान्य सूची", pdf: "/misc/adhisuchna/prevdload/punrichit%20samanayasuchi_1.pdf" },
];

export default function PanchadashVidhanSabhaFirstSession() {
  return (
    <div className="panch-page">
      {/* HERO */}
      <section className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">
            <div className="panch-hero-text">
              <h1>पंचदश विधान सभा</h1>
              <p>प्रथम सत्र (जनवरी, 2019)</p>
            </div>

            <Link to="/vidhansabha-15" className="panch-btn">
              पीछे जाये
            </Link>
          </div>
        </div>
      </section>

      {/* List Section */}
      <section className="panch-section">
        {/* <h2 style={{ textAlign: "center" }}>सत्र से संबंधित दस्तावेज़</h2> */}
        <br />

        <div className="panch-grid">
          {sessionItems.map((item, idx) => (
            <div
              key={idx}
              className="panch-card"
              onClick={() => window.open(item.pdf, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        <br />
      </section>

     
    </div>
  );
}
