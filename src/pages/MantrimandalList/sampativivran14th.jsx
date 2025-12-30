import React from "react";

const ministersDetails = [
  {
    id: 1,
    name: "श्री जयंत मलैया, मंत्री",
    date: "19 फरवरी, 2015",
    link: "/misc/upload_smptviv/jm15.pdf",
  },
  {
    id: 2,
    name: "श्री गौरीशंकर बिसेन, मंत्री",
    date: "21 मार्च, 2017",
    link: "/misc/upload_smptviv/gsb17.pdf",
  },
];

const MinistersAssetCardsPage = () => {
  return (
    <div className="comm-page">
      {/* Blue Header Section */}
      <div className="comm-hero">
        <h1>चतुर्दश विधानसभा</h1>
      </div>

      {/* Yellow Underline Section */}
      <section className="comm-section">
        <h2
          style={{
            display: "inline-block",
            borderBottom: "4px solid #FFD700", // yellow underline
            paddingBottom: "4px",
            color: "#000",
          }}
        >
          मा. मुख्यमंत्री श्री शिवराज सिंह चौहान की मंत्रिपरिषद के मा. सदस्‍यों द्वारा
          विधान सभा के पटल पर रखा गया चल-अचल संपत्ति का विवरण
        </h2>

        <div className="comm-grid">
          {ministersDetails.map((m) => (
            <a
              key={m.id}
              href={m.link}
              target="_blank"
              rel="noopener noreferrer"
              className="comm-card-link"
            >
              <div className="comm-card">
                <h3
                  style={{
                    textDecoration: "none",
                    borderBottom: "none",
                    color: "#2c5282",
                  }}
                >
                  {m.name}
                </h3>
                <p>￫ दिनांक {m.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MinistersAssetCardsPage;
