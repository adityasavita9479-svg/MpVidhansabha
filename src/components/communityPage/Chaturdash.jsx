import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChaturdashPage() {
  const navigate = useNavigate();

  return (
    <div className="chatur-page">
      {/* Hero Section */}
      <section className="chatur-hero">
        <div className="chatur-hero-content">
          <div className="chatur-hero-row">
            <div className="chatur-hero-text">
              <h1>मध्‍यप्रदेश विधानसभा की समितियां</h1>
              <p>समितियों की आधिकारिक और विस्तृत जानकारी</p>
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
        <h2 style={{ textAlign: "center" }}>चतुर्दश विधानसभा की समितियां</h2>
        <br />

        {/* 2014–2018 Cards in One Grid */}
        <div
          className="chatur-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            alignItems: "start",
          }}
        >
          {/* 2014 */}
          <div className="chatur-card" style={{ minHeight: "180px" }}>
            <h3>2014</h3>
            <ul>
              <li>
                <a
                  href="/misc/committees2014.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  All Committees
                </a>
              </li>
              <li>
                <a
                  href="/misc/P2/p2-060614.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  Nominated Members of Press Gallery Advisory Committee
                </a>
              </li>
              <li>
                <a
                  href="/misc/patrak_agri2014.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  Members Nominated for University Board
                </a>
              </li>
            </ul>
          </div>

          {/* 2015 */}
          <div className="chatur-card" style={{ minHeight: "180px" }}>
            <h3>2015</h3>
            <ul>
              <li>
                <a
                  href="/misc/comm15-16.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  All Committees
                </a>
              </li>
              <li>
                <a
                  href="/misc/p2/p2-030315-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  Members Nominated for University Board
                </a>
              </li>
              <li>
                <a
                  href="/misc/P2/p2-291215.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  अनुसूचित जाति एवं अनुसूचित जनजाति समिति गठन
                </a>
              </li>
            </ul>
          </div>

          {/* 2016 */}
          <div className="chatur-card" style={{ minHeight: "180px" }}>
            <h3>2016</h3>
            <ul>
              <li>
                <a
                  href="/misc/patrak_elected_committee.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  Elected Committees
                </a>
              </li>
              <li>
                <a
                  href="/misc/patrak_nominated.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  Nominated Committees
                </a>
              </li>
              <li>
                <a
                  href="/misc/bill_2016/Press%20ADVt.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  Press Gallery Advisory Committee
                </a>
              </li>
            </ul>
          </div>

          {/* 2017 */}
          <div className="chatur-card" style={{ minHeight: "180px" }}>
            <h3>2017</h3>
            <ul>
              <li>
                <a
                  href="/misc/patrak_Elected%20Comm17.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  Elected Committees
                </a>
              </li>
              <li>
                <a
                  href="/misc/nominated_comm17.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  Nominated Committees
                </a>
              </li>
            </ul>
          </div>

          {/* 2018 */}
          <div className="chatur-card" style={{ minHeight: "180px" }}>
            <h3>2018</h3>
            <ul>
              <li>
                <a
                  href="/misc/p2-050418.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chatur-link-text"
                >
                  समितियों के कार्यकाल में वृद्धि
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* प्रतिवेदन Section */}
        <h2 style={{ marginTop: "40px" }}>प्रतिवेदन</h2>
        <div className="chatur-grid" style={{ marginTop: "10px" }}>
          <div
            className="comm-card"
            onClick={() => navigate("/committees/special-privilege")}
            style={{ cursor: "pointer" }}
          >
            <h3>समितियों के प्रतिवेदन (ARCHIVE)</h3>
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
