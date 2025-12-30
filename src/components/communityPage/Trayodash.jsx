import React from "react";
import { useNavigate } from "react-router-dom";

export default function Trayodash() {
  const navigate = useNavigate();

  return (
    <div className="tray-page">
      {/* Hero Section */}
      <section className="tray-hero">
        <div className="tray-hero-content">
          <div className="tray-hero-row">
            <div className="tray-hero-text">
              <h1>मध्‍यप्रदेश विधान सभा की समितियां</h1>
              <p>समितियों की आधिकारिक और विस्तृत जानकारी</p>
            </div>
            <div className="tray-btn" onClick={() => navigate("/committees1")}>
              पीछे जाये
            </div>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="tray-section">
        <h2>त्रयोदश विधान सभा की समितियां</h2>

        <div className="tray-grid">
          <div className="tray-card">
            <h3>2009</h3>
            <ul>
              <li>
                <a
                  href="/misc/committees2009.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vidhan Sabha Committees
                </a>
              </li>
            </ul>
          </div>

          <div className="tray-card">
            <h3>2010</h3>
            <ul>
              <li>
                <a
                  href="/misc/committees2010.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vidhan Sabha Committees
                </a>
              </li>
            </ul>
          </div>

          <div className="tray-card">
            <h3>2011</h3>
            <ul>
              <li>
                <a
                  href="/misc/committees2011-12.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vidhan Sabha Committees
                </a>
              </li>
            </ul>
          </div>

          <div className="tray-card">
            <h3>2012</h3>
            <ul>
              <li>
                <a
                  href="/misc/committees%202012-13.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vidhan Sabha Committees
                </a>
              </li>
              <li>
                <a
                  href="/misc/universityCourts2012.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University Courts
                </a>
              </li>
            </ul>
          </div>

          <div className="tray-card">
            <h3>2013</h3>
            <ul>
              <li>
                <a
                  href="/misc/committees-2013.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vidhan Sabha Committees
                </a>
              </li>
              <li>
                <a
                  href="/misc/vishishtsamiti2013.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  विशिष्‍ट समिति का गठन
                </a>
              </li>
              <li>
                <a
                  href="/misc/vishishtsamiti2013-correction.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Correction)
                </a>
              </li>
              <li>
                <a
                  href="/misc/p2-060713.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nomination Of Members Of Business Advisory Committee
                </a>
              </li>
              <li>
                <a
                  href="/misc/jnau-commtt-2013.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jawaharlal Nehru Agricultural University, Jabalpur
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tray-footer">
        © {new Date().getFullYear()} मध्यप्रदेश विधान सभा — सभी अधिकार सुरक्षित
      </footer>
    </div>
  );
}
