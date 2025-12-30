import React from "react";
import { useNavigate } from "react-router-dom";

const cardItems = [
  { title: "क्षेत्रवार", link: "/misc/13THVS/13vs-no-list.pdf" },
  { title: "नामवार", link: "/misc/13THVS/13vs-name-list.pdf" },
  { title: "महिला सदस्य", link: "/13mahila" },
  { title: "नक्शावार (दलीय स्थिति)", route: "/sadasyagan13nakshewar" },
  { title: "सदस्य - दिवंगत", link: "/misc/13THVS/13vs-divangat.pdf" },
  { title: "सदस्य - त्यागपत्र", link: "/misc/13THVS/13vs-resignation.pdf" },
  { title: "सदस्य निरर्ह घोषित", link: "/misc/13THVS/13vs-disqualified.pdf" },
  { title: "मंत्रिमण्डल", link: "/misc/13THVS/13minster.pdf" },
  { title: "संपत्ति विवरण", route: "/sadasyagan13sampativivran" },
  { title: "निर्वाचन क्षेत्र की सूची", link: "/misc/13THVS/13constituencies.pdf" },
  { title: "आरक्षित निर्वाचन क्षेत्र", link: "/misc/13THVS/13reservervedconstituency.pdf" },
  { title: "8.12.2008 को घोषित चुनाव परिणाम का विश्लेषण", link: "//misc/13THVS/13vs-vishleshan.pdf" },
];

const Sadasyagantrayodash = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.route) {
      navigate(item.route);
    } else if (item.link) {
      window.open(item.link, "_blank");
    }
  };

  return (
    <div className="comm-page">
      {/* Hero Section */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>त्रयोदश विधान सभा</h1>
          <p>10 दिसम्बर, 2013 तक की स्थिति</p>
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

export default Sadasyagantrayodash;