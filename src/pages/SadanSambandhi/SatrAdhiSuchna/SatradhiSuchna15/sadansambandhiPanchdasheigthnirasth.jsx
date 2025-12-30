// import React from "react";
// import { useNavigate } from "react-router-dom"; // ✅ For back navigation

// // Data for the session items (replace /path/to/pdf/... with actual PDF paths)
// const sessionItems = [
//   { title: "सत्र अधिसूचना निरस्त करने का राज्यपाल महोदया का आदेश", pdf: "/misc/adhisuchna/prevdload/SessionCancellationNotification_15_8.pdf" },
//   { title: "सत्र आमंत्रण की अधिसूचना", pdf: "/misc/adhisuchna/prevdload/aman_15_8_0.pdf" },
//   { title: "पत्रक भाग - 2", pdf: "/misc/adhisuchna/prevdload/patrak_15_8_0.pdf" },
//   { title: "सत्र की बैठकों की दिनदर्शिका", pdf: "/misc/adhisuchna/prevdload/din_15_8_0.pdf" },
//   { title: "सत्र की बैठकों की सामान्य सूची", pdf: "/misc/adhisuchna/prevdload/samanayasuchi_15_8_0.pdf" },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-सदस्‍यों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartm-15-8-0.pdf" },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartd-15-8-0.pdf" },
// ];

// // Styles
// const styles = {
//   container: {
//     maxWidth: "1100px",
//     margin: "40px auto",
//     padding: "60px 20px 20px",
//     fontFamily: "'Noto Sans Devanagari', sans-serif",
//     background: "#f9f9fb",
//     borderRadius: "16px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     position: "relative",
//     minHeight: "70vh",
//   },
//   backButton: {
//     position: "absolute",
//     top: "20px",
//     left: "20px",
//     backgroundColor: "#dc2626",
//     color: "#fff",
//     padding: "8px 16px",
//     borderRadius: "8px",
//     textDecoration: "none",
//     fontWeight: 500,
//     transition: "background-color 0.2s ease",
//   },
//   header: { textAlign: "center", marginBottom: "40px" },
//   mainTitle: { fontSize: "2.5rem", fontWeight: 700, color: "#1e293b", marginBottom: "10px" },
//   sessionTitle: { fontSize: "1.5rem", fontWeight: 600, color: "#dc2626", marginBottom: "5px" }, // Red for "निरस्त"
//   sessionPeriod: { fontSize: "1.2rem", fontWeight: 500, color: "#334155", marginBottom: "30px" },
//   grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" },
//   card: {
//     background: "linear-gradient(135deg, #ffffff 0%, #fee2e2 100%)", // light red gradient
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
//   },
//   cardHover: { transform: "translateY(-6px) scale(1.02)", boxShadow: "0 14px 28px rgba(0,0,0,0.15)" },
//   cardTitle: { fontSize: "1.25rem", fontWeight: 600, color: "#b91c1c" },
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

//   const handleClick = () => {
//     window.open(pdf, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div
//       style={styles.card}
//       onMouseEnter={(e) => handleHover(e, true)}
//       onMouseLeave={(e) => handleHover(e, false)}
//       onClick={handleClick}
//     >
//       <div style={styles.cardTitle}>{title}</div>
//     </div>
//   );
// };

// // Main Component
// const PanchadashVidhanSabhaEighthSessionNirast2020 = () => {
//   const navigate = useNavigate();

//   return (
//     <div style={styles.container}>
//       {/* ✅ Back Button */}
//       <button style={styles.backButton} onClick={() => navigate(-1)}>
//         ← वापस जाएं
//       </button>

//       <div style={styles.header}>
//         <h1 style={styles.mainTitle}>पंचदश विधान सभा</h1>
//         <h2 style={styles.sessionTitle}>अष्टम् सत्र (निरस्त)</h2>
//         <h3 style={styles.sessionPeriod}>(दिसम्बर, 2020)</h3>
//       </div>

//       <div style={styles.grid}>
//         {sessionItems.map((item, idx) => (
//           <SessionCard key={idx} title={item.title} pdf={item.pdf} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PanchadashVidhanSabhaEighthSessionNirast2020;
import React from "react";
import { useNavigate } from "react-router-dom";

const sessionItems = [
  { title: "सत्र अधिसूचना निरस्त करने का राज्यपाल महोदया का आदेश", pdf: "/misc/adhisuchna/prevdload/SessionCancellationNotification_15_8.pdf" },
  { title: "सत्र आमंत्रण की अधिसूचना", pdf: "/misc/adhisuchna/prevdload/aman_15_8_0.pdf" },
  { title: "पत्रक भाग - 2", pdf: "/misc/adhisuchna/prevdload/patrak_15_8_0.pdf" },
  { title: "सत्र की बैठकों की दिनदर्शिका", pdf: "/misc/adhisuchna/prevdload/din_15_8_0.pdf" },
  { title: "सत्र की बैठकों की सामान्य सूची", pdf: "/misc/adhisuchna/prevdload/samanayasuchi_15_8_0.pdf" },
  { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-सदस्‍यों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartm-15-8-0.pdf" },
  { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartd-15-8-0.pdf" },
];

export default function PanchadashVidhanSabhaEighthSessionNirast2020() {
  const navigate = useNavigate();

  return (
    <div className="panch-page">
      {/* HERO */}
      <section className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">

            <div className="panch-hero-text">
              <h1>पंचदश विधान सभा</h1>
              <p>अष्टम् सत्र (निरस्त)</p>
              <p>(दिसम्बर, 2020)</p>
            </div>

            <button onClick={() => navigate(-1)} className="panch-btn">
              पीछे जाये
            </button>

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
