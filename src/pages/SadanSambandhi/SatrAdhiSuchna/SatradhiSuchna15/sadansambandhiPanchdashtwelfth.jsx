// import React from "react";

// // Data for the session items with PDF paths
// const sessionItems = [
//   { title: "सत्र आमंत्रण की अधिसूचना", pdf: "/misc/adhisuchna/prevdload/aman_15_12.pdf" },
//   { title: "सत्र आमंत्रण की अधिसूचना (पुनरीक्षित)", pdf: "/misc/adhisuchna/prevdload/aman_15_12%20revised.pdf" },
//   { title: "पत्रक भाग - 2", pdf: "/misc/adhisuchna/prevdload/patrak_15_12.pdf" },
//   { title: "पत्रक भाग - 2 (पुनरीक्षित)", pdf: "/misc/adhisuchna/prevdload/patrak_15_12%20revised.pdf" },
//   { title: "सत्र की बैठकों की दिनदर्शिका", pdf: "/misc/adhisuchna/prevdload/din_15_12.pdf" },
//   { title: "सत्र की बैठकों की दिनदर्शिका (पुनरीक्षित)", pdf: "/misc/adhisuchna/prevdload/din_15_12%20revised.pdf" },
//   { title: "सत्र में बैठकों की सामान्य सूची", pdf: "/misc/adhisuchna/prevdload/samanayasuchi_15_12.pdf" },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-सदस्‍यों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartm-15-12.pdf" },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartd-15-12.pdf" },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये (पुनरीक्षित)", pdf: "/misc/adhisuchna/prevdload/rchartd-15-12%20revised.pdf" },
// ];

// // Styles
// const styles = {
//   container: {
//     maxWidth: "1100px",
//     margin: "0 auto",
//     padding: "50px 20px",
//     fontFamily: "'Noto Sans Devanagari', sans-serif",
//     backgroundColor: "#f5f7fa",
//     minHeight: "100vh",
//     position: "relative",
//   },
//   backButton: {
//     position: "absolute",
//     top: "20px",
//     left: "20px",
//     padding: "8px 16px",
//     backgroundColor: "#2563eb",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     fontSize: "1rem",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//   },
//   backButtonHover: {
//     backgroundColor: "#1e40af",
//   },
//   header: { textAlign: "center", marginBottom: "40px" },
//   mainTitle: {
//     fontSize: "2.5rem",
//     fontWeight: 700,
//     color: "#1e293b",
//     marginBottom: "10px",
//   },
//   sessionTitle: {
//     fontSize: "1.5rem",
//     fontWeight: 600,
//     color: "#2563eb",
//     marginBottom: "5px",
//   },
//   sessionPeriod: {
//     fontSize: "1.2rem",
//     fontWeight: 500,
//     color: "#334155",
//     marginBottom: "30px",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "25px",
//   },
//   card: {
//     background: "linear-gradient(135deg, #ffffff 0%, #dbeafe 100%)",
//     borderRadius: "16px",
//     padding: "25px 20px",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
//     transition: "all 0.3s ease",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center",
//     cursor: "pointer",
//     textDecoration: "none",
//   },
//   cardHover: {
//     transform: "translateY(-6px) scale(1.02)",
//     boxShadow: "0 14px 28px rgba(0,0,0,0.15)",
//   },
//   cardTitle: {
//     fontSize: "1.25rem",
//     fontWeight: 600,
//     color: "#1e3a8a",
//   },
// };

// // Card Component
// const SessionCard = ({ title, pdf }) => {
//   const handleHover = (e, hover) => {
//     if (hover) {
//       e.currentTarget.style.transform = styles.cardHover.transform;
//       e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
//     } else {
//       e.currentTarget.style.transform = "none";
//       e.currentTarget.style.boxShadow = styles.card.boxShadow;
//     }
//   };

//   return (
//     <a
//       href={pdf}
//       target="_blank"
//       rel="noopener noreferrer"
//       style={styles.card}
//       onMouseEnter={(e) => handleHover(e, true)}
//       onMouseLeave={(e) => handleHover(e, false)}
//     >
//       <div style={styles.cardTitle}>{title}</div>
//     </a>
//   );
// };

// // Main Component
// const PanchadashVidhanSabhaTwelfthSessionSeptember2022 = () => {
//   const handleBack = () => {
//     window.history.back();
//   };

//   return (
//     <div style={styles.container}>
//       <button
//         style={styles.backButton}
//         onMouseEnter={(e) =>
//           (e.currentTarget.style.backgroundColor = styles.backButtonHover.backgroundColor)
//         }
//         onMouseLeave={(e) =>
//           (e.currentTarget.style.backgroundColor = styles.backButton.backgroundColor)
//         }
//         onClick={handleBack}
//       >
//         ← Back
//       </button>

//       <div style={styles.header}>
//         <h1 style={styles.mainTitle}>पंचदश विधान सभा</h1>
//         <h2 style={styles.sessionTitle}>द्वादश सत्र</h2>
//         <h3 style={styles.sessionPeriod}>(सितम्बर, 2022)</h3>
//       </div>

//       <div style={styles.grid}>
//         {sessionItems.map((item, idx) => (
//           <SessionCard key={idx} title={item.title} pdf={item.pdf} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PanchadashVidhanSabhaTwelfthSessionSeptember2022;
import React from "react";
import { Link } from "react-router-dom";

const sessionItems = [
  { title: "सत्र आमंत्रण की अधिसूचना", pdf: "/misc/adhisuchna/prevdload/aman_15_12.pdf" },
  { title: "सत्र आमंत्रण की अधिसूचना (पुनरीक्षित)", pdf: "/misc/adhisuchna/prevdload/aman_15_12%20revised.pdf" },
  { title: "पत्रक भाग - 2", pdf: "/misc/adhisuchna/prevdload/patrak_15_12.pdf" },
  { title: "पत्रक भाग - 2 (पुनरीक्षित)", pdf: "/misc/adhisuchna/prevdload/patrak_15_12%20revised.pdf" },
  { title: "सत्र की बैठकों की दिनदर्शिका", pdf: "/misc/adhisuchna/prevdload/din_15_12.pdf" },
  { title: "सत्र की बैठकों की दिनदर्शिका (पुनरीक्षित)", pdf: "/misc/adhisuchna/prevdload/din_15_12%20revised.pdf" },
  { title: "सत्र में बैठकों की सामान्य सूची", pdf: "/misc/adhisuchna/prevdload/samanayasuchi_15_12.pdf" },
  { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-सदस्‍यों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartm-15-12.pdf" },
  { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartd-15-12.pdf" },
  { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये (पुनरीक्षित)", pdf: "/misc/adhisuchna/prevdload/rchartd-15-12%20revised.pdf" },
];

export default function PanchadashVidhanSabhaTwelfthSessionSeptember2022() {
  return (
    <div className="panch-page">
      
      {/* HERO */}
      <section className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">

            {/* TEXT */}
            <div className="panch-hero-text">
              <h1>पंचदश विधान सभा</h1>
              <p>द्वादश सत्र (सितम्बर, 2022)</p>
            </div>

            {/* BACK BUTTON */}
            <Link to="/vidhansabha-15" className="panch-btn">
              पीछे जाये
            </Link>

          </div>
        </div>
      </section>

      {/* LIST SECTION */}
      <section className="panch-section">
        <br />

        <div className="panch-grid">
          {sessionItems.map((item, idx) => (
            <div
              key={idx}
              className="panch-card"
              onClick={() => window.open(item.pdf, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        <br />
      </section>

    </div>
  );
}
