// import React from "react";
// import { Link } from "react-router-dom";

// const sessionDocuments = [
//   { title: "सत्र आमंत्रण की अधिसूचना", link: "/misc/adhisuchna/prevdload/aman_16_5.pdf" },
//   { title: "पत्रक भाग - 2", link: "/misc/adhisuchna/prevdload/patrak_16_5.pdf " },
//   { title: "सत्र की बैठकों की दिनदर्शिका", link: "/misc/adhisuchna/prevdload/din_16_5.pdf" },
//   { title: "सत्र में बैठकों की सामान्य सूची", link: "/misc/adhisuchna/prevdload/samanayasuchi_16_5.pdf" },
//   { title: "सत्र में बैठकों की सामान्य सूची (पुनरीक्षित)", link: "/misc/adhisuchna/adhisuchna/prevdload/revised samanayasuchi_16_5.pdf" },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम - सदस्‍यों के लिये", link: "/misc/adhisuchna/adhisuchna/prevdload/rchartm-16-5.pdf" },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम - विभागों के लिये", link: "/misc/adhisuchna/prevdload/rchartd-16-5.pdf" },
// ];

// const ShodashFifthSession = () => {
//   const styles = {
//     container: {
//       maxWidth: "1100px",
//       margin: "40px auto",
//       padding: "60px 20px 20px",
//       fontFamily: "'Noto Sans Devanagari', sans-serif",
//       background: "#f9f9fb",
//       borderRadius: "16px",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//       position: "relative",
//       minHeight: "70vh", // ✅ Full height look
//     },
//     backButton: {
//       position: "absolute",
//       top: "20px",
//       left: "20px",
//       backgroundColor: "#2563eb",
//       color: "#fff",
//       padding: "8px 16px",
//       borderRadius: "8px",
//       textDecoration: "none",
//       fontWeight: 500,
//       transition: "background-color 0.2s ease",
//     },
//     heading: {
//       textAlign: "center",
//       fontSize: "1.8rem",
//       fontWeight: "700",
//       color: "#2c3e50",
//       marginBottom: "5px",
//     },
//     subHeading: {
//       textAlign: "center",
//       fontSize: "1.2rem",
//       fontWeight: "500",
//       color: "#555",
//       marginBottom: "30px",
//     },
//     grid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//       gap: "20px",
//     },
//     card: {
//       background: "linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)",
//       padding: "20px",
//       borderRadius: "12px",
//       boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//       transition: "transform 0.2s ease, box-shadow 0.2s ease",
//       cursor: "pointer",
//     },
//     cardHover: {
//       transform: "translateY(-5px)",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//     },
//     title: {
//       fontSize: "1.25rem",
//       fontWeight: 600,
//       textAlign: "center",
//       marginBottom: "15px",
//       color: "#1d4ed8",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       {/* ✅ Back Button */}
//       <Link
//         to="/satradhisuchna"
//         style={styles.backButton}
//         onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
//         onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
//       >
//         ← Back
//       </Link>

//       <h2 style={styles.heading}>षोडश विधान सभा</h2>
//       <h3 style={styles.subHeading}>पंचम सत्र (मार्च, 2025)</h3>

//       <div style={styles.grid}>
//         {sessionDocuments.map((doc, index) => (
//           <div
//             key={index}
//             style={styles.card}
//             onClick={() => window.open(doc.link, "_blank")}
//             onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
//             onMouseLeave={(e) =>
//               Object.assign(e.currentTarget.style, {
//                 transform: "none",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//               })
//             }
//           >
//             <div style={styles.title}>{doc.title}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShodashFifthSession;
import React from "react";
import { useNavigate } from "react-router-dom";

const sessionDocuments = [
  { title: "सत्र आमंत्रण की अधिसूचना", link: "/misc/adhisuchna/prevdload/aman_16_5.pdf" },
  { title: "पत्रक भाग - 2", link: "/misc/adhisuchna/prevdload/patrak_16_5.pdf " },
  { title: "सत्र की बैठकों की दिनदर्शिका", link: "/misc/adhisuchna/prevdload/din_16_5.pdf" },
  { title: "सत्र में बैठकों की सामान्य सूची", link: "/misc/adhisuchna/prevdload/samanayasuchi_16_5.pdf" },
  { title: "सत्र में बैठकों की सामान्य सूची (पुनरीक्षित)", link: "/misc/adhisuchna/adhisuchna/prevdload/revised samanayasuchi_16_5.pdf" },
  { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम - सदस्‍यों के लिये", link: "/misc/adhisuchna/adhisuchna/prevdload/rchartm-16-5.pdf" },
  { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम - विभागों के लिये", link: "/misc/adhisuchna/prevdload/rchartd-16-5.pdf" },
];

export default function ShodashFifthSession() {
  const navigate = useNavigate();

  return (
    <div className="panch-page">

      {/* ⭐ HERO SECTION — GLOBAL STYLE APPLIED */}
      <section className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">

            {/* Left: Title */}
            <div className="panch-hero-text">
              <h1>षोडश विधान सभा</h1>
              <p>पंचम सत्र (मार्च, 2025)</p>
            </div>

            {/* Right: Back Button */}
            <div
              className="panch-btn"
              onClick={() => navigate("/satradhisuchna")}
              style={{ cursor: "pointer" }}
            >
              पीछे जाये
            </div>

          </div>
        </div>
      </section>

      {/* ⭐ DOCUMENT GRID — GLOBAL CSS */}
      <section className="panch-section">
        <div className="panch-grid">
          {sessionDocuments.map((doc, index) => (
            <div
              key={index}
              className="panch-card"
              style={{ cursor: "pointer" }}
              onClick={() => window.open(doc.link, "_blank")}
            >
              <h3>{doc.title}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
