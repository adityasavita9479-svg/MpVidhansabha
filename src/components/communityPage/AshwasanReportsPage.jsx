import React from "react";
import { useNavigate } from "react-router-dom";

export default function AshwasanReportsPage() {
  const navigate = useNavigate();

  return (
    <div className="chatur-page">
      {/* Hero Section */}
      <section className="chatur-hero">
        <div className="chatur-hero-content">
          <div className="chatur-hero-row">
            <div className="chatur-hero-text">
              <h1>शासकीय आश्‍वासनों संबंधी समिति के प्रतिवेदन (वर्ष 2015, 2016)</h1>
              <p>सदन में प्रस्तुत प्रतिवेदन</p>
            </div>
            <div
              className="chatur-btn"
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer" }}
            >
              पीछे जाये
            </div>
          </div>
        </div>
      </section>

      {/* Report List Section */}
      <section id="ashwasan-reports" className="chatur-section">
        <h2 style={{ textAlign: "center" }}>प्रस्तुत प्रतिवेदन को सदन में प्रस्तुत</h2>
        <br />

        <div className="chatur-grid">
          <div className="chatur-card">
            <ul>
              {/* 28 जुलाई 2016 redirects to internal page */}
              <li>
                <span
                  className="chatur-link-text"
                  style={{ cursor: "pointer", color: "#004aad" }}
                  onClick={() => navigate("/committees/ashwasan/2016")}
                >
                  28 जुलाई, 2016
                </span>
              </li>

              {/* Other dates still open PDF */}
              <li>
                <a
                  href="/committees/ashwasan-report-march-2016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  18 मार्च, 2016
                </a>
              </li>
              <li>
                <a
                  href="/misc/committees/ashwasan/ashwasan-report-15-12-2015.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  15 दिसम्बर, 2015
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="chatur-footer">
        © {new Date().getFullYear()} मध्यप्रदेश विधान सभा — सभी अधिकार सुरक्षित
      </footer>
    </div>
  );
}
