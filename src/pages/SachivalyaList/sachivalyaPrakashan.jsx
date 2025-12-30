import React from "react";

const Sachivalayaprakashan = () => {
  const publications = [
    {
      title: "मध्यप्रदेश के लोकसभा सदस्य",
      subtitle: "1952 से 2014 तक",
      pdf: "/misc/praksahan1.pdf",
    },
  ];

  return (
    <div className="comm-page">
      {/* Hero Section */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>विधान सभा सचिवालय के प्रकाशन</h1>
        </div>
      </div>

      {/* Main Section */}
      <section className="comm-section">
        <div className="comm-grid">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="comm-card comm-card-link"
            >
              <h3>{pub.title}</h3>
              <p>{pub.subtitle}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sachivalayaprakashan;
