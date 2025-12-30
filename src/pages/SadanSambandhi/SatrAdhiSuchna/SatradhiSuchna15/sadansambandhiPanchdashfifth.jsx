// import React from "react";
// import { Link } from "react-router-dom";

// // Data for the session items with PDF paths
// const sessionItems = [
//   { title: "सत्र आमंत्रण की अधिसूचना", pdf: "/misc/adhisuchna/prevdload/aman_15_5.pdf" },
//   { title: "पत्रक भाग - 2", pdf: "/misc/adhisuchna/prevdload/patrak_15_5.pdf" },
//   { title: "सत्र की बैठकों की दिनदर्शिका", pdf: "/misc/adhisuchna/prevdload/din_15_5.pdf" },
//   { title: "सत्र की बैठकों की सामान्य सूची", },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-सदस्‍यों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartm-15-5.pdf" },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartd-15-5.pdf" },
// ];

// const PanchadashVidhanSabhaFifthSession = () => {
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
//       minHeight: "70vh",
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
//     header: { textAlign: "center", marginBottom: "40px" },
//     mainTitle: { fontSize: "2.5rem", fontWeight: 700, color: "#1e293b", marginBottom: "10px" },
//     sessionTitle: { fontSize: "1.5rem", fontWeight: 600, color: "#2563eb", marginBottom: "5px" },
//     sessionPeriod: { fontSize: "1.2rem", fontWeight: 500, color: "#334155", marginBottom: "30px" },
//     grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" },
//     card: {
//       background: "linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)",
//       borderRadius: "16px",
//       padding: "25px 20px",
//       boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
//       transition: "all 0.3s ease",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       textAlign: "center",
//       cursor: "pointer",
//     },
//     cardHover: { transform: "translateY(-6px) scale(1.02)", boxShadow: "0 14px 28px rgba(0,0,0,0.15)" },
//     cardTitle: { fontSize: "1.25rem", fontWeight: 600, color: "#1d4ed8" },
//   };

//   const handleCardClick = (pdf) => {
//     if (pdf) window.open(pdf, "_blank", "noopener,noreferrer");
//   };

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
//     <div style={styles.container}>
//       {/* Back Button */}
//       <Link
//         to="/satradhisuchna"
//         style={styles.backButton}
//         onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
//         onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
//       >
//         ← Back
//       </Link>

//       <div style={styles.header}>
//         <h1 style={styles.mainTitle}>पंचदश विधान सभा</h1>
//         <h2 style={styles.sessionTitle}>पंचम सत्र</h2>
//         <h3 style={styles.sessionPeriod}>(मार्च–अप्रैल, 2020)</h3>
//       </div>

//       <div style={styles.grid}>
//         {sessionItems.map((item, idx) => (
//           <div
//             key={idx}
//             style={styles.card}
//             onClick={() => handleCardClick(item.pdf)}
//             onMouseEnter={(e) => handleHover(e, true)}
//             onMouseLeave={(e) => handleHover(e, false)}
//           >
//             <div style={styles.cardTitle}>{item.title}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PanchadashVidhanSabhaFifthSession;
import React from "react";
import { Link } from "react-router-dom";

// Data for the session items with PDF paths
const sessionItems = [
  { title: "सत्र आमंत्रण की अधिसूचना", pdf: "/misc/adhisuchna/prevdload/aman_15_5.pdf" },
  { title: "पत्रक भाग - 2", pdf: "/misc/adhisuchna/prevdload/patrak_15_5.pdf" },
  { title: "सत्र की बैठकों की दिनदर्शिका", pdf: "/misc/adhisuchna/prevdload/din_15_5.pdf" },
  { title: "सत्र की बैठकों की सामान्य सूची" },
  { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-सदस्‍यों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartm-15-5.pdf" },
  { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartd-15-5.pdf" },
];

export default function PanchadashVidhanSabhaFifthSession() {
  return (
    <div className="panch-page">

      {/* HERO */}
      <section className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">

            <div className="panch-hero-text">
              <h1>पंचदश विधान सभा</h1>
              <p>पंचम सत्र (मार्च–अप्रैल, 2020)</p>
            </div>

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
              onClick={() => item.pdf && window.open(item.pdf, "_blank")}
              style={{ cursor: item.pdf ? "pointer" : "not-allowed" }}
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
