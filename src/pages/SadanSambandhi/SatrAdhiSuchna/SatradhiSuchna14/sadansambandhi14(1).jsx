// import React from "react";
// import { useNavigate } from "react-router-dom";

// // 🗂 Data for the 14th Vidhan Sabha – First Session
// const sessionItems = [
//   {
//     title: "सत्र आमंत्रण की अधिसूचना",
//     pdf: "/misc/adhisuchna/aman-1-2014.pdf",
//   },
//   {
//     title: "पत्रक भाग - 2",
//     pdf: "/misc/adhisuchna/patrak-1-2014.pdf",
//   },
//   {
//     title: "सत्र की बैठकों की दिनदर्शिका",
//     pdf: "/misc/adhisuchna/din-1-2014.pdf",
//   },
//   {
//     title: "सत्र की बैठकों की सामान्य सूची (7 जनवरी 2014)",
//     pdf: "/misc/adhisuchna/saman-1-2014.pdf",
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
//   },
//   backButtonContainer: {
//     display: "flex",
//     justifyContent: "flex-start",
//     marginBottom: "30px",
//   },
//   backButton: {
//     backgroundColor: "#1e40af",
//     color: "white",
//     border: "none",
//     padding: "10px 22px",
//     borderRadius: "8px",
//     fontSize: "1rem",
//     fontWeight: 600,
//     cursor: "pointer",
//     transition: "background-color 0.3s ease, transform 0.2s ease",
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
// const ChaturdashVidhanSabhaFirstSession = () => {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div style={styles.container}>
//       {/* 🔙 Back Button */}
//       <div style={styles.backButtonContainer}>
//         <button
//           style={styles.backButton}
//           onClick={handleBack}
//           onMouseEnter={(e) =>
//             (e.currentTarget.style.backgroundColor = "#1d4ed8")
//           }
//           onMouseLeave={(e) =>
//             (e.currentTarget.style.backgroundColor = "#1e40af")
//           }
//         >
//           ← वापस जाएँ
//         </button>
//       </div>

//       {/* 🏛 Header */}
//       <div style={styles.header}>
//         <h1 style={styles.mainTitle}>चतुर्दश विधान सभा</h1>
//         <h2 style={styles.sessionTitle}>प्रथम सत्र</h2>
//         <h3 style={styles.sessionPeriod}>(जनवरी, 2014)</h3>
//       </div>

//       {/* 📜 Grid of PDFs */}
//       <div style={styles.grid}>
//         {sessionItems.map((item, idx) => (
//           <SessionCard key={idx} title={item.title} pdf={item.pdf} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChaturdashVidhanSabhaFirstSession;
import React from "react";
import { useNavigate } from "react-router-dom";

const sessionItems = [
  {
    title: "सत्र आमंत्रण की अधिसूचना",
    pdf: "/misc/adhisuchna/aman-1-2014.pdf",
  },
  {
    title: "पत्रक भाग - 2",
    pdf: "/misc/adhisuchna/patrak-1-2014.pdf",
  },
  {
    title: "सत्र की बैठकों की दिनदर्शिका",
    pdf: "/misc/adhisuchna/din-1-2014.pdf",
  },
  {
    title: "सत्र की बैठकों की सामान्य सूची (7 जनवरी 2014)",
    pdf: "/misc/adhisuchna/saman-1-2014.pdf",
  },
];

export default function ChaturdashVidhanSabhaFirstSession() {
  const navigate = useNavigate();

  return (
    <div className="panch-page">

      {/* HERO SECTION */}
      <section className="panch-hero">
        <div className="panch-hero-content">

          <div className="panch-hero-row">

            {/* LEFT TEXT */}
            <div className="panch-hero-text">
              <h1>चतुर्दश विधान सभा</h1>
              <p>प्रथम सत्र (जनवरी, 2014)</p>
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
