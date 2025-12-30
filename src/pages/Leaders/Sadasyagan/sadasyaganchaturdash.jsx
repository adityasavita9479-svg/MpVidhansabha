import React from "react";
import { useNavigate } from "react-router-dom";

const cardItems = [
  { title: "क्षेत्रवार", link: "/misc/14thvs/14mla-no.pdf" },
  { title: "नामवार", link: "/misc/14thvs/14mla-name.pdf" },
  { title: "महिला सदस्य", link: "/14mlamahila" },
  { title: "नक्शेवार", route: "/chaturdash-nakshewar" },
  { title: "समाजार्थिक विश्लेषण", link: "/misc/14thvs/14profession.pdf" },
  { title: "प्रथम बार निर्वाचित सदस्य", link: "/misc/14thvs/14mla-first_time.pdf" },
  { title: "उप चुनाव में निर्वाचित सदस्य / दिवंगत सदस्य / सदस्यता त्यागने वाले सदस्य", link: "/misc/14thvs_bi-election.pdf" },
  { title: "मंत्रिमण्डल", link: "/misc/14minister-2.pdf" },
];

const partyList = [
  { name: "भारतीय जनता पार्टी", link: "/misc/14thvs/14mla-bjp.pdf" },
  { name: "इंडियन नेशनल काँग्रेस", link: "/misc/14thvs/14mla-inc.pdf" },
  { name: "बहुजन समाज पार्टी", link: "/misc/14thvs/14mla-bsp.pdf" },
  { name: "निर्दलीय", link: "/misc/14thvs/14mla-ind.pdf" },
  { name: "नामनिर्दिष्ट", link: "/misc/14thvs/14mla-nom.pdf" },
  { name: "मध्यप्रदेश विधायक क्लब", link: "/misc/Sadasyagan/SadasyaganPDF/sadasyagan14vidhayakclub.pdf" },
];

const extraItems = [];

const SadasyaganChaturdash = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.route) navigate(item.route);
    else if (item.link) window.open(item.link, "_blank");
  };

  return (
    <div className="comm-page">
      {/* Hero Section */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>चतुर्दश विधान सभा</h1>
          <p>सदस्य परिचय</p>
        </div>
      </div>

      {/* Main Cards */}
      <div className="comm-section">
        <div className="comm-grid">
          {cardItems.map((item, i) => (
            <div
              key={i}
              className="comm-card"
              onClick={() => handleClick(item)}
            >
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Party Cards */}
        <div
          className="comm-section"
          style={{ backgroundColor: "#e0f2fe", padding: "25px", borderRadius: "12px" }}
        >
          <h3 style={{ marginBottom: "15px" }}>￫ दलीय स्थिति :</h3>
          <div className="comm-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "15px" }}>
            {partyList.map((party, i) => (
              <div
                key={i}
                className="comm-card"
                onClick={() => window.open(party.link, "_blank")}
                style={{ padding: "15px 20px", textAlign: "center", fontWeight: 500 }}
              >
                {party.name}
              </div>
            ))}
          </div>
        </div>

        {/* Extra Cards */}
        {extraItems.length > 0 && (
          <div className="comm-grid">
            {extraItems.map((item, i) => (
              <div
                key={i}
                className="comm-card"
                onClick={() => handleClick(item)}
              >
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SadasyaganChaturdash;