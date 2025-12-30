// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function CommitteesPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="comm-page">
//       {/* Hero Section */}
//       <section className="comm-hero">
//         <div className="comm-hero-content">
//           <h1>मध्‍यप्रदेश विधानसभा की समितियां</h1>
//           <p>समितियों की आधिकारिक और विस्तृत जानकारी</p>
//         </div>
//       </section>

//       {/* Committees Section */}
//       <section id="committees" className="comm-section">
//         <h2>षोडश (16वीं) विधानसभा की समितियां</h2>
//         <br />

//         {/* Committees Cards */}
//         <div className="comm-grid">
//           <div
//             className="comm-card"
//             onClick={() =>
//               window.open(
//                 "/misc/P2/p2-300524-2.pdf",
//                 "_blank"
//               )
//             }
//             style={{ cursor: "pointer" }}
//           >
//             <h3>
//               <span className="comm-card-date">30 मई 2024</span>
//             </h3>
//             <h3>
//               राष्ट्रीय डिजिटल इंडिया कार्यक्रम के अंतर्गत NeVA परियोजना को
//               मध्यप्रदेश विधान सभा में कार्यान्वित करने के संबंध में सभा समिति
//               का गठन
//             </h3>
//           </div>

//           <div
//             className="comm-card"
//             onClick={() =>
//               window.open("/misc/nomcomm16vs.pdf")
//             }
//             style={{ cursor: "pointer" }}
//           >
//             <h3>
//               <span className="comm-card-date">7 फरवरी 2024</span>
//             </h3>
//             <h3>Nominated Committees</h3>
//           </div>

//           <div
//             className="comm-card"
//             onClick={() =>
//               window.open("/misc/electedcomm16vs.pdf")
//             }
//             style={{ cursor: "pointer" }}
//           >
//             <h3>
//               <span className="comm-card-date">4 अगस्त 2025</span>
//             </h3>
//             <h3>Elected Committees</h3>
//           </div>

//           <div
//             className="comm-card"
//             onClick={() =>
//               window.open(
//                 "/misc/achranvishesh2024.pdf"
//               )
//             }
//             style={{ cursor: "pointer" }}
//           >
//             <h3>
//               <span className="comm-card-date">16 अगस्त 2024</span>
//             </h3>
//             <h3>आचरण समिति तथा विशेषाधिकार समिति संबंधी जानकारी</h3>
//           </div>
//         </div>

//         {/* Government Assurances and Archive cards */}
//         <h2>प्रतिवेदन </h2>
//         <div className="comm-grid">
//           <div
//             className="comm-card"
//             onClick={() =>
//               navigate("/committees/shodash/government-assurances")
//             }
//             style={{ cursor: "pointer" }}
//           >
//             <h3>शासकीय आश्‍वासनों संबंधी समिति के प्रतिवेदन</h3>
//           </div>
//         </div>

//         {/* Assembly Links */}
//         <div className="comm-assembly-links">
//           <hr className="comm-separator" />
//           <div className="comm-assembly-container">
//             <div
//               className="comm-link"
//               onClick={() => navigate("/assemblies/panchadash")}
//               style={{ cursor: "pointer" }}
//             >
//               पंचदश विधान सभा
//             </div>
//             <div
//               className="comm-link"
//               onClick={() => navigate("/assemblies/chaturdash")}
//               style={{ cursor: "pointer" }}
//             >
//               चतुर्दश विधानसभा
//             </div>
//             <div
//               className="comm-link"
//               onClick={() => navigate("/assemblies/trayodash")}
//               style={{ cursor: "pointer" }}
//             >
//               त्रयोदश विधानसभा
//             </div>
//             <a
//               href="/misc/12vscommittees.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="comm-link"
//               style={{ cursor: "pointer", textDecoration: "none" }}
//             >
//               द्वादश विधानसभा
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="comm-footer">
//         © {new Date().getFullYear()} मध्यप्रदेश विधान सभा — सभी अधिकार सुरक्षित
//       </footer>
//     </div>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CommitteesPage() {
  const navigate = useNavigate();

  return (
    <div className="panch-page">
      {/* Hero Section */}
      <section className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">
            <div className="panch-hero-text">
              <h1>मध्‍यप्रदेश विधानसभा की समितियां</h1>
              <p>समितियों की आधिकारिक और विस्तृत जानकारी</p>
            </div>

            {/* <div
              className="panch-btn"
              onClick={() => navigate("/committees1")}
              style={{ cursor: "pointer" }}
            >
              पीछे जाये
            </div> */}
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section id="committees" className="panch-section">
        <h2 style={{ textAlign: "center" }}>षोडश (16वीं) विधानसभा की समितियां</h2>
        <br />

        {/* Committees Cards */}
        <div className="panch-grid">
          <div
            className="panch-card"
            onClick={() =>
              window.open("/misc/P2/p2-300524-2.pdf", "_blank")
            }
            style={{ cursor: "pointer" }}
          >
            <h3>
              <span className="panch-card-date">30 मई 2024</span>
            </h3>
            <h3>
              राष्ट्रीय डिजिटल इंडिया कार्यक्रम के अंतर्गत NeVA परियोजना को
              मध्यप्रदेश विधान सभा में कार्यान्वित करने के संबंध में सभा समिति
              का गठन
            </h3>
          </div>

          <div
            className="panch-card"
            onClick={() => window.open("/misc/nomcomm16vs.pdf")}
            style={{ cursor: "pointer" }}
          >
            <h3>
              <span className="panch-card-date">7 फरवरी 2024</span>
            </h3>
            <h3>Nominated Committees</h3>
          </div>

          <div
            className="panch-card"
            onClick={() => window.open("/misc/electedcomm16vs.pdf")}
            style={{ cursor: "pointer" }}
          >
            <h3>
              <span className="panch-card-date">4 अगस्त 2025</span>
            </h3>
            <h3>Elected Committees</h3>
          </div>

          <div
            className="panch-card"
            onClick={() =>
              window.open("/misc/achranvishesh2024.pdf")
            }
            style={{ cursor: "pointer" }}
          >
            <h3>
              <span className="panch-card-date">16 अगस्त 2024</span>
            </h3>
            <h3>आचरण समिति तथा विशेषाधिकार समिति संबंधी जानकारी</h3>
          </div>
        </div>

        {/* Reports section */}
        <h2 style={{ marginTop: "40px" }}>प्रतिवेदन</h2>

        <div className="panch-grid">
          <div
            className="panch-card"
            onClick={() =>
              navigate("/committees/shodash/government-assurances")
            }
            style={{ cursor: "pointer" }}
          >
            <h3>शासकीय आश्‍वासनों संबंधी समिति के प्रतिवेदन</h3>
          </div>
        </div>

        {/* Assembly Links — DO NOT TOUCH */}
        <div className="comm-assembly-links">
          <hr className="comm-separator" />
          <div className="comm-assembly-container">
            <div
              className="comm-link"
              onClick={() => navigate("/assemblies/panchadash")}
              style={{ cursor: "pointer" }}
            >
              पंचदश विधान सभा
            </div>
            <div
              className="comm-link"
              onClick={() => navigate("/assemblies/chaturdash")}
              style={{ cursor: "pointer" }}
            >
              चतुर्दश विधानसभा
            </div>
            <div
              className="comm-link"
              onClick={() => navigate("/assemblies/trayodash")}
              style={{ cursor: "pointer" }}
            >
              त्रयोदश विधानसभा
            </div>
            <a
              href="/misc/12vscommittees.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="comm-link"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              द्वादश विधानसभा
            </a>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="panch-footer">
        © {new Date().getFullYear()} मध्यप्रदेश विधान सभा — सभी अधिकार सुरक्षित
      </footer>
    </div>
  );
}
