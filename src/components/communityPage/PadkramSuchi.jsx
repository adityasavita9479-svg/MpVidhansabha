import React from "react";

const PadkramSuchi = () => {
  return (
    <div className="padkram-page">
      {/* Hero Section */}
      <section className="padkram-hero">
        <div className="padkram-hero-content">
          <h1>मध्यप्रदेश विधान सभा सचिवालय</h1>
          {/* <p>पदक्रम सूची</p> */}
          <p>(01 अप्रैल, 2024 की स्थिति)</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="padkram-section">
        <h2>पदक्रम सूची</h2>
        <div className="padkram-grid">
          {/* Card 1 */}
          <div className="padkram-card">
            <a
              href="/misc/vsgradlist_i&ii2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3> प्रथम/द्वितीय श्रेणी अधिकारी</h3>
            </a>
          </div>

          {/* Card 2 */}
          <div className="padkram-card">
            <a
              href="/misc/vsgradlist_iii2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3> तृतीय श्रेणी कर्मचारी</h3>
            </a>
          </div>

          {/* Card 3 */}
          <div className="padkram-card">
            <a
              href="/misc/vsgradlist_iv2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3> चतुर्थ श्रेणी कर्मचारी</h3>
            </a>
          </div>

          {/* Card 4 */}
          <div className="padkram-card">
            <a
              href="/misc/vsgradlist_contin2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3> कार्यभारित/आकस्मिकता से देय सेवा के सदस्य</h3>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="padkram-footer">
        © {new Date().getFullYear()} मध्यप्रदेश विधान सभा — सभी अधिकार सुरक्षित
      </footer>
    </div>
  );
};

export default PadkramSuchi;
