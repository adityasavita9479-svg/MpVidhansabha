import React, { useEffect } from "react";

const session = {
  description: "मध्यप्रदेश राजपत्र (असाधारण) क्रमांक - 298",
  date: "17/06/2008",
  link: "/misc/12thvs/12minister.pdf", // replace with actual PDF path
};

const Sampattivivran12th = () => {
  useEffect(() => {
    // Remove underline (yellow line) only for this page
    const heroHeading = document.querySelector(".comm-hero h1");
    if (heroHeading) {
      heroHeading.style.textDecoration = "none";
      heroHeading.style.borderBottom = "none";

      // Hide the ::after pseudo-element (yellow line)
      heroHeading.style.setProperty("--after-display", "none");
    }

    // Temporarily disable the ::after style globally for this page
    const style = document.createElement("style");
    style.innerHTML = `
      .comm-hero h1::after {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="comm-page">
      {/* Hero Section */}
      <div className="comm-hero">
        <h1
          style={{
            textDecoration: "none",
            borderBottom: "none",
            color: "inherit",
          }}
        >
          द्वादश विधानसभा
        </h1>
      </div>

      {/* Main Section */}
      <section className="comm-section">
        <div className="comm-grid">
          <a
            href={session.link}
            target="_blank"
            rel="noopener noreferrer"
            className="comm-card-link"
          >
            <div className="comm-card">
              <p>{session.description}</p>
              <p>दिनांक - {session.date}</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sampattivivran12th;
