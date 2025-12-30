// Updated with comm-page overlay CSS and removed inline styles
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cardItems = [
  { title: "क्षेत्रवार", link: "/misc/11thvs/11vs-no-list.pdf" },
  { title: "नामवार", link: "/misc/11thvs/11vs-name-list.pdf" },
  { title: "महिला सदस्य", link: "/11mahila" },
  { title: "नक्शेवार", image: "/misc/Sadasyagan/SadasyaganIMG/sadasyagan11nakshewar.gif" },
  { title: "सदस्य - त्यागपत्र / दिवंगत", link: "/misc/11thvs/11vs-divangat.pdf" },
  { title: "दलीय स्थिति", link: "/misc/11thvs/11vs-partyposition.pdf" },
];

const SadasyaganEkadash = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (item) => {
    if (item.image) {
      setSelectedImage(item.image);
    } else if (item.link || item.route) {
      const url = item.link || item.route;
      window.open(url, "_blank");
    }
  };

  return (
    <div className="comm-page">
      {/* Hero */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>एकादश विधान सभा</h1>
          <p>सदस्य परिचय | नोट : वर्ष 1998 से 2003 तक की स्थिति</p>
        </div>
      </div>

      {/* Cards */}
      <div className="comm-section">
        <div className="comm-grid">
          {cardItems.map((item, i) => (
            <div
              key={i}
              className="comm-card comm-clickable"
              onClick={() => handleClick(item)}
            >
              <p className="comm-card-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="comm-modal" onClick={() => setSelectedImage(null)}>
          <span className="comm-modal-close">&times;</span>
          <img src={selectedImage} alt="नक्शेवार" className="comm-modal-image" />
        </div>
      )}
    </div>
  );
};

export default SadasyaganEkadash;