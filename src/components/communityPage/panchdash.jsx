import React from "react";
import { useNavigate } from "react-router-dom";

export default function PanchdashPage() {
  const navigate = useNavigate();

  return (
    <div className="panch-page">
      {/* Hero Section */}
      <section className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">
            <div className="panch-hero-text">
              <h1>मध्यप्रदेश विधानसभा की समितियां</h1>
              <p>समितियों की आधिकारिक और विस्तृत जानकारी</p>
            </div>
            <div
              className="panch-btn"
              onClick={() => navigate("/committees1")}
              style={{ cursor: "pointer" }}
            >
              पीछे जाये
            </div>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section id="committees" className="panch-section">
        <h2 style={{ textAlign: "center" }}>पंचदश विधानसभा की समितियां</h2>
        <br />

        <div className="panch-grid">
          {/* Repeat committee cards */}
          <div
            className="panch-card"
            onClick={() =>
              window.open("/misc/PATRAK_nominated_aug19.pdf")
            }
            style={{ cursor: "pointer" }}
          >
            <h3>8 जनवरी, 2019</h3>
            <h3>Nominated Committees</h3>
          </div>

          <div
            className="panch-card"
            onClick={() => navigate("/committees/panchadash/financial")}
            style={{ cursor: "pointer" }}
          >
            <h3>21 फरवरी, 2019</h3>
            <h3>Financial / Elected Committees</h3>
          </div>

          <div
            className="panch-card"
            onClick={() =>
              window.open("/misc/pravar%20samiti.pdf")
            }
            style={{ cursor: "pointer" }}
          >
            <h3> 26 अगस्त, 2019</h3>
            <h3>प्रवर समिति 2020-2021</h3>
          </div>

          <div
            className="panch-card"
            onClick={() =>
              window.open(
                "/misc/p2-310323-2.pdf"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <h3> 31 मार्च, 2023</h3>
            <h3>
              Extension of the tenure of the Legislative Assembly Committees for
              remaining tenure of 15th Vidhan Sabha
            </h3>
          </div>

          <div
            className="panch-card"
            onClick={() =>
              window.open("/misc/fincommittee2021.pdf")
            }
            style={{ cursor: "pointer" }}
          >
            <h3> 4 मार्च, 2021</h3>
            <h3>Financial / Elected Committees</h3>
          </div>

          <div
            className="panch-card"
            onClick={() =>
              window.open("/misc/p2-040321-6-7.pdf")
            }
            style={{ cursor: "pointer" }}
          >
            <h3> 4 मार्च, 2021</h3>
            <h3>University Court / Other</h3>
          </div>

          <div
            className="panch-card"
            onClick={() =>
              window.open("/misc/nomcommittee2022.pdf")
            }
            style={{ cursor: "pointer" }}
          >
            <h3> 31 मार्च, 2022</h3>
            <h3>Nominated Committees</h3>
          </div>

          <div
            className="panch-card"
            onClick={() =>
              window.open("/misc/Adhcommittee2021.pdf")
            }
            style={{ cursor: "pointer" }}
          >
            <h3> 22 जून, 2021</h3>
            <h3>Adhoc Committee</h3>
          </div>
        </div>
        <br />
      </section>

      {/* Footer */}
      <footer className="panch-footer">
        © {new Date().getFullYear()} मध्यप्रदेश विधान सभा — सभी अधिकार सुरक्षित
      </footer>
    </div>
  );
}
