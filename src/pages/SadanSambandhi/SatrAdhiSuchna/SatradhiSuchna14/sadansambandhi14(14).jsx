// import React from "react";

// // 🗂 Data for the 14th Vidhan Sabha – First Session
// const sessionItems = [
//   {
//     title: "सत्र आमंत्रण की अधिसूचना",
//     pdf: "/misc/adhisuchna/aman-14-2017.pdf",
//   },
//   {
//     title: "पत्रक भाग - 2",
//     pdf: "/misc/adhisuchna/patrak-14-2017.pdf",
//   },
//   {
//     title: "सत्र की बैठकों की दिनदर्शिका",
//     pdf: "/misc/adhisuchna/din-14-2017.pdf",
//   },
//   {
//     title: "सत्र की बैठकों की सामान्य सूची",
//     pdf: "/misc/adhisuchna/samanayasuchi_14.pdf",
//   },
//   {
//     title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-सदस्‍यों के लिये",
//     pdf: "/misc/adhisuchna/rchartm-14-2017.pdf",
//   },
//   {
//     title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये",
//     pdf: "/misc/adhisuchna/rchartd-14-2017.pdf",
//   },
// ];

// // 🎨 Styles
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
//     padding: "10px 18px",
//     fontSize: "1rem",
//     borderRadius: "8px",
//     cursor: "pointer",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
//     transition: "background 0.3s ease",
//   },
//   backButtonHover: {
//     backgroundColor: "#1e40af",
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: "40px",
//   },
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
//     background: "linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)",
//     borderRadius: "16px",
//     padding: "25px 20px",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
//     transition: "all 0.3s ease",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     textAlign: "center",
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

// // 🧩 Card Component
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

// // 🏛️ Main Component
// const ChaturdashVidhanSabhaFourteenSession = () => {
//   const handleBack = () => {
//     window.history.back();
//   };

//   return (
//     <div style={styles.container}>
//       <button
//         style={styles.backButton}
//         onMouseEnter={(e) =>
//           (e.currentTarget.style.backgroundColor =
//             styles.backButtonHover.backgroundColor)
//         }
//         onMouseLeave={(e) =>
//           (e.currentTarget.style.backgroundColor =
//             styles.backButton.backgroundColor)
//         }
//         onClick={handleBack}
//       >
//         ⬅ वापस जाएं
//       </button>

//       <div style={styles.header}>
//   <h1 style={styles.mainTitle}>चतुर्दश विधान सभा</h1>
//   <h2 style={styles.sessionTitle}>चतुर्दश सत्र</h2>
//   <h3 style={styles.sessionPeriod}>(जुलाई, 2017)</h3>
// </div>


//       <div style={styles.grid}>
//         {sessionItems.map((item, idx) => (
//           <SessionCard key={idx} title={item.title} pdf={item.pdf} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChaturdashVidhanSabhaFourteenSession;
import React from "react";
import { useNavigate } from "react-router-dom";

const sessionItems = [
  { title: "सत्र आमंत्रण की अधिसूचना", pdf: "/misc/adhisuchna/aman-14-2017.pdf" },
  { title: "पत्रक भाग - 2", pdf: "/misc/adhisuchna/patrak-14-2017.pdf" },
  { title: "सत्र की बैठकों की दिनदर्शिका", pdf: "/misc/adhisuchna/din-14-2017.pdf" },
  { title: "सत्र की बैठकों की सामान्य सूची", pdf: "/misc/adhisuchna/samanayasuchi_14.pdf" },
  { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-सदस्‍यों के लिये", pdf: "/misc/adhisuchna/rchartm-14-2017.pdf" },
  { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये", pdf: "/misc/adhisuchna/rchartd-14-2017.pdf" },
];

export default function ChaturdashVidhanSabhaFourteenSession() {
  const navigate = useNavigate();

  return (
    <div className="panch-page">

      {/* HERO SECTION */}
      <section className="panch-hero">
        <div className="panch-hero-content">

          <div className="panch-hero-row">

            {/* TEXT */}
            <div className="panch-hero-text">
              <h1>चतुर्दश विधान सभा</h1>
              <p>चतुर्दश सत्र (जुलाई, 2017)</p>
            </div>

            {/* BACK BUTTON */}
            <div
              className="panch-btn"
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer" }}
            >
              पीछे जाये
            </div>

          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
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
