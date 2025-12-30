import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SpecialPrivilegePage() {
  const navigate = useNavigate();
  const [showAshwasanReports, setShowAshwasanReports] = useState(false);
  const [showJuly28, setShowJuly28] = useState(false);
  const [showJuly18, setShowJuly18] = useState(false);
  const [showDec15, setShowDec15] = useState(false);

  return (
    <div className="chatur-page">
      {/* Hero Section */}
      <section className="chatur-hero">
        <div className="chatur-hero-content">
          <div className="chatur-hero-row">
            <div className="chatur-hero-text">
              <h1>विशेषाधिकार एवं आश्वासन समितियां</h1>
              <p>समितियों की प्रतिवेदन संबंधी जानकारी</p>
            </div>
            <div
              className="chatur-btn"
              onClick={() => navigate("/committees1")}
              style={{ cursor: "pointer" }}
            >
              पीछे जाये
            </div>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section id="committees" className="chatur-section">
        <h2 style={{ textAlign: "center" }}>
          चतुर्दश विधानसभा समितियों के प्रतिवेदन
        </h2>
        <br />

        <div className="chatur-grid">
          {/* विशेषाधिकार समिति */}
          <div className="chatur-card">
            <h3>विशेषाधिकार समिति</h3>
            <ul>
              <li>
                <a
                  href="/misc/visheshadhikar_first.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  प्रथम प्रतिवेदन
                </a>
              </li>
              <li>
                <a
                  href="/misc/visheshadhikar_second.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  द्वितीय प्रतिवेदन
                </a>
              </li>
            </ul>
          </div>

          {/* आश्वासन समिति */}
          <div className="chatur-card">
            <h3>आश्‍वासन समिति</h3>
            <ul>
              <li>
                {/* Toggle for Ashwasan Reports */}
                <span
                  onClick={() => setShowAshwasanReports(!showAshwasanReports)}
                  className="chatur-link-text"
                  style={{
                    cursor: "pointer",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                >
                  शासकीय आश्‍वासनों संबंधी समिति के प्रतिवेदन (वर्ष 2015, 2016)
                </span>

                {/* Level 1 Expansion */}
                {showAshwasanReports && (
                  <ul style={{ marginTop: "10px", marginLeft: "20px" }}>
                    {/* 28 जुलाई 2016 */}
                    <li>
                      <span
                        onClick={() => setShowJuly28(!showJuly28)}
                        className="chatur-link-text"
                        style={{
                          cursor: "pointer",
                          color: "#0056b3",
                          fontWeight: "600",
                        }}
                      >
                        28 जुलाई 2016
                      </span>

                      {showJuly28 && (
                        <ul style={{ marginTop: "8px", marginLeft: "25px" }}>
                          <li>
                            <a
                              href="/misc/ashwasan/July%202015%20Report.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              जुलाई, 2015 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/Feb-Mar%202015%20Report.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              फरवरी–मार्च, 2015 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/Nov-Dec%202004%20Report.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              नवम्बर–दिसम्बर, 2004 सत्र
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* 18 जुलाई 2016 */}
                    <li>
                      <span
                        onClick={() => setShowJuly18(!showJuly18)}
                        className="chatur-link-text"
                        style={{
                          cursor: "pointer",
                          color: "#0056b3",
                          fontWeight: "600",
                        }}
                      >
                        18 जुलाई 2016
                      </span>

                      {showJuly18 && (
                        <ul style={{ marginTop: "8px", marginLeft: "25px" }}>
                          <li>
                            <a
                              href="/misc/ashwasan/FEB-APR%202002.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              फरवरी–अप्रैल, 2002 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/JULY-AUGUST%202002.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              जुलाई–अगस्‍त, 2002 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/NOVEMBER%202002.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              नवम्बर, 2002 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/FEB-MAR%202003.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              फरवरी–मार्च, 2003 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/JULY-AUG%202003.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              जुलाई–अगस्‍त, 2003 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/FEB-MAR%202004.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              फरवरी–मार्च, 2004 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/JUNE-JULY%202004.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              जून–जुलाई, 2004 सत्र
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* 15 दिसम्बर 2016 */}
                    <li>
                      <span
                        onClick={() => setShowDec15(!showDec15)}
                        className="chatur-link-text"
                        style={{
                          cursor: "pointer",
                          color: "#0056b3",
                          fontWeight: "600",
                        }}
                      >
                        15 दिसम्बर 2016
                      </span>

                      {showDec15 && (
                        <ul style={{ marginTop: "8px", marginLeft: "25px" }}>
                          <li>
                            <a
                              href="/misc/ashwasan/Februrary-Mardh%202000%20report.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              फरवरी–मार्च, 2000 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/July-August%202000%20report.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              जुलाई–अगस्‍त, 2000 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/October-December%202000%20report.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              अक्‍टूबर–दिसम्‍बर, 2000 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/Janurary-April%202001%20report.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              जनवरी–अप्रैल, 2001 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/August-September%202001%20report.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              अगस्‍त–सितम्‍बर, 2001 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/November%202001%20report.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              नवम्‍बर, 2001 सत्र
                            </a>
                          </li>
                          <li>
                            <a
                              href="/misc/ashwasan/December%202014%20report.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chatur-link-text"
                            >
                              दिसम्‍बर, 2014 सत्र
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
        <br />
      </section>

      {/* Footer */}
      <footer className="chatur-footer">
        © {new Date().getFullYear()} मध्यप्रदेश विधान सभा — सभी अधिकार सुरक्षित
      </footer>
    </div>
  );
}
