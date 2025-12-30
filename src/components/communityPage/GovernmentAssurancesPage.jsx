import React from "react";
import { Link } from "react-router-dom";

export default function GovernmentAssurancesPage() {
  return (
    <div className="gov-page">
      {/* Hero Section */}
      <section className="gov-hero">
        <div className="gov-hero-content">
          <div className="gov-hero-row">
            <div className="gov-hero-text">
              <h1>मध्‍यप्रदेश विधान सभा की समितियां</h1>
              <p>समितियों को सदन में प्रस्तुत प्रतिवेदन </p>
            </div>
            <Link to="/committees1" className="gov-btn">
              पीछे जाये
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="gov-section">
        <h1>षोडश (16वीं) विधानसभा </h1>
        <h2>शासकीय आश्वासनों संबंधी समिति के प्रतिवेदन </h2>

        {/* 18 दिसम्बर 2024 Section */}
        <div className="gov-report-block">
          <h3>18 दिसम्बर, 2024 </h3>
          <ul className="gov-report-list">
            <li>
              <a
                href="/misc/ashwasan/assurcommvsxvirep1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gov-link"
              >
                प्रथम प्रतिवेदन
              </a>
            </li>
            <li>
              <a
                href="/misc/ashwasan/assurcommvsxvirep2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gov-link"
              >
                द्वितीय प्रतिवेदन
              </a>
            </li>
            <li>
              <a
                href="/misc/ashwasan/assurcommvsxvirep3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gov-link"
              >
                तृतीय प्रतिवेदन
              </a>
            </li>
          </ul>
        </div>

        <hr className="gov-separator" />

        {/* 18 मार्च 2025 Section */}
        <div className="gov-report-block">
          <h3>18 मार्च, 2025 </h3>
          <ul className="gov-report-list">
            <li>
              <a
                href="/misc/ashwasan/assurcommvsxvirep4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gov-link"
              >
                चतुर्थ प्रतिवेदन
              </a>
            </li>
            <li>
              <a
                href="/misc/ashwasan/assurcommvsxvirep5.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gov-link"
              >
                पंचम प्रतिवेदन
              </a>
            </li>
            <li>
              <a
                href="/misc/ashwasan/assurcommvsxvirep6.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gov-link"
              >
                षष्टम प्रतिवेदन
              </a>
            </li>
            <li>
              <a
                href="/misc/ashwasan/assurcommvsxvirep7.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gov-link"
              >
                सप्तम प्रतिवेदन
              </a>
            </li>
            <li>
              <a
                href="/misc/ashwasan/assurcommvsxvirep8.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gov-link"
              >
                अष्टम प्रतिवेदन
              </a>
            </li>
          </ul>
        </div>

        <hr className="gov-separator" />

        {/* 20 मार्च 2025 Section */}
        <div className="gov-report-block">
          <h3>20 मार्च, 2025</h3>
          <ul className="gov-report-list">
            <li>
              <a
                href="/misc/ashwasan/assurcommvsxvirep9.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gov-link"
              >
                नवम प्रतिवेदन
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="gov-footer">
        © {new Date().getFullYear()} मध्यप्रदेश विधान सभा — सभी अधिकार सुरक्षित
      </footer>
    </div>
  );
}
