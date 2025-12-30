import React from "react";
import { useNavigate } from "react-router-dom";

const cardItems = [
  { title: "क्षेत्रवार", link: "/misc/12thvs/12vs-no-list.pdf" },
  { title: "नामवार", link: "/misc/12thvs/12vs-name-list.pdf" },
  { title: "महिला सदस्य", link: "/12mahilasadasya" },
  { title: "नक्शेवार", image: "/misc/Sadasyagan/SadasyaganIMG/sadasyagan12nakshewar.jpg" },
  { title: "दलीय स्थिति", link: "/misc/12thvs/12partyposition.pdf" },
  { title: "सदस्य - त्यागपत्र / दिवंगत", link: "/misc/12thvs/12divangat.pdf" },
  { title: "मंत्रिमण्डल", link: "/misc/12thvs/12minister.pdf" },
  { title: "निर्वाचन क्षेत्र की सूची", link: "/misc/12thvs/12constituencies.pdf" },
  { title: "आरक्षित निर्वाचन क्षेत्र", link: "/misc/12thvs/12reserved.pdf" },
];

const SadasyaganDwadash = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.route) {
      navigate(item.route);
    } else if (item.link || item.image) {
      const url = item.link || item.image;
      window.open(url, "_blank");
    }
  };

  return (
    <div className="comm-page">
      {/* Hero Section */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>द्वादश (12वीं) विधान सभा - सदस्य परिचय</h1>
          <p>नोट : दिसम्बर 2008 तक की स्थिति</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="comm-grid">
        {cardItems.map((item, i) => (
          <div
            key={i}
            className="comm-card"
            onClick={() => handleClick(item)}
          >
            <p className="comm-card-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SadasyaganDwadash;