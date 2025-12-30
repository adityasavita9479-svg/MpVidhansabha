// import React from "react";
// import { useNavigate } from "react-router-dom";

// // Data for दशम सत्र (Oct–Nov 2006 Session)
// const sessionItems = [
//   { title: "सत्र आमंत्रण की अधिसूचना", pdf: "/misc/adhisuchna/AMANwin06.pdf" },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये", pdf: "/misc/adhisuchna/rchartdwin06.pdf" },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-सदस्‍यों के लिये", pdf: "/misc/adhisuchna/rchartmwin06.pdf" },
//   { title: "पत्रक भाग - 2", pdf: "/misc/adhisuchna/PATRAKwin06.pdf" },
//   { title: "सत्र की बैठकों की दिनदर्शिका", pdf: "/misc/adhisuchna/dinwin06.pdf" },
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
//     backgroundColor: "#2563eb",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     padding: "10px 18px",
//     cursor: "pointer",
//     fontSize: "1rem",
//     fontWeight: "500",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
//     transition: "all 0.3s ease",
//   },
//   backButtonHover: {
//     backgroundColor: "#1e40af",
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: "50px",
//   },
//   mainTitle: {
//     fontSize: "2.2rem",
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
//     background: "linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)",
//     borderRadius: "16px",
//     padding: "30px 20px",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
//     transition: "all 0.3s ease",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
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
//     color: "#1d4ed8",
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

//   const handleClick = () => {
//     window.open(pdf, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div
//       style={styles.card}
//       onClick={handleClick}
//       onMouseEnter={(e) => handleHover(e, true)}
//       onMouseLeave={(e) => handleHover(e, false)}
//     >
//       <div style={styles.cardTitle}>{title}</div>
//     </div>
//   );
// };

// // Main Component
// const DwadashTenthSession = () => {
//   const navigate = useNavigate();
  
//  const handleBack = () => navigate("/vidhansabha-12");

//   return (
//     <div style={styles.container}>
//       <button
//         style={styles.backButton}
//         onClick={handleBack}
//         onMouseEnter={(e) =>
//           (e.currentTarget.style.backgroundColor = styles.backButtonHover.backgroundColor)
//         }
//         onMouseLeave={(e) =>
//           (e.currentTarget.style.backgroundColor = styles.backButton.backgroundColor)
//         }
//       >
//         ⬅ वापस जाएं
//       </button>

//       <div style={styles.header}>
//         <h1 style={styles.mainTitle}>द्वादश विधान सभा (2003 - 2008)</h1>
//         <h2 style={styles.sessionTitle}>दशम सत्र</h2>
//         <h3 style={styles.sessionPeriod}>Oct–Nov 2006 Session</h3>
//       </div>

//       <div style={styles.grid}>
//         {sessionItems.map((item, idx) => (
//           <SessionCard key={idx} title={item.title} pdf={item.pdf} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DwadashTenthSession;
import React from "react";
import { useNavigate } from "react-router-dom";

// Data for दशम सत्र (Oct–Nov 2006 Session)
const sessionItems = [
{ title: "सत्र आमंत्रण की अधिसूचना", pdf: "/misc/adhisuchna/AMANwin06.pdf" },
{ title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये", pdf: "/misc/adhisuchna/rchartdwin06.pdf" },
{ title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-सदस्‍यों के लिये", pdf: "/misc/adhisuchna/rchartmwin06.pdf" },
{ title: "पत्रक भाग - 2", pdf: "/misc/adhisuchna/PATRAKwin06.pdf" },
{ title: "सत्र की बैठकों की दिनदर्शिका", pdf: "/misc/adhisuchna/dinwin06.pdf" },
];

export default function DwadashTenthSession() {
const navigate = useNavigate();

return ( <div className="panch-page">


  {/* HERO SECTION */}
  <section className="panch-hero">
    <div className="panch-hero-content">
      <div className="panch-hero-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="panch-hero-text">
          <h1>द्वादश विधान सभा (2003 - 2008)</h1>
          <p>दशम सत्र – Oct–Nov 2006 Session</p>
        </div>

        <div
          className="panch-btn"
          onClick={() => navigate("/vidhansabha-12")}
          style={{ cursor: "pointer" }}
        >
          पीछे जाये
        </div>
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
          <div className="panch-card-overlay">
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
    <br />
  </section>

</div>


);
}
