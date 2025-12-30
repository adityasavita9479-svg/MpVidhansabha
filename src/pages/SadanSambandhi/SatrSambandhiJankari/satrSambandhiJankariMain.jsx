// import React from "react";
// import { Link } from "react-router-dom";

// // ---------------------- Data ----------------------
// const assemblies = [
//   { number: "षोडश", name: "विधान सभा", path: "/satr/sambandhi/detail-16" },
//   { number: "पंचदश", name: "विधान सभा", path: "/satr/sambandhi/detail-15" },
//   { number: "चतुर्दश", name: "विधान सभा", path: "/satr/sambandhi/detail-14" },
//   { number: "त्रयोदश", name: "विधान सभा", path: "/satr/sambandhi/detail-13" },
//   { number: "द्वादश", name: "विधान सभा", path: "/satr/sambandhi/detail-12" },
//   { number: "एकादश", name: "विधान सभा", path: "/satr/sambandhi/detail-11" },
// ];

// // ---------------------- Styles ----------------------
// const styles = {
//   pageWrapper: {
//     fontFamily: "'Noto Sans Devanagari', sans-serif",
//     backgroundColor: "#f3f6fb",
//     minHeight: "100vh",
//   },
//   headerContainer: {
//     width: "100%",
//     background: "linear-gradient(90deg, #1e40af, #2563eb)",
//     color: "#fff",
//     padding: "40px 20px 60px 20px",
//     borderRadius: "0 0 25px 25px",
//     position: "relative",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//   },
//   backButton: {
//     position: "absolute",
//     top: "20px",
//     left: "30px",
//     backgroundColor: "#1e3a8a",
//     color: "#ffffff",
//     padding: "8px 18px",
//     borderRadius: "8px",
//     fontWeight: 600,
//     textDecoration: "none",
//     transition: "all 0.3s ease",
//   },
//   mainTitle: {
//     textAlign: "center",
//     fontSize: "2.3rem",
//     fontWeight: 700,
//     margin: "0",
//     letterSpacing: "0.5px",
//   },
//   contentContainer: {
//     maxWidth: "1100px",
//     margin: "0 auto",
//     padding: "50px 20px 60px 20px",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
//     gap: "25px",
//   },
//   card: {
//     background: "linear-gradient(180deg, #e0e7ff 0%, #ffffff 100%)",
//     borderRadius: "14px",
//     padding: "24px 16px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//     transition: "all 0.35s ease",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     cursor: "pointer",
//     textDecoration: "none",
//     color: "#1e293b",
//   },
//   cardHover: {
//     transform: "translateY(-6px) scale(1.03)",
//     boxShadow: "0 8px 22px rgba(37, 99, 235, 0.35)",
//     background: "linear-gradient(180deg, #dbeafe 0%, #ffffff 100%)",
//   },
//   sessionNumber: {
//     fontSize: "1.7rem",
//     fontWeight: 700,
//     color: "#1e40af",
//     marginBottom: "8px",
//   },
//   sessionName: {
//     fontSize: "1.2rem",
//     fontWeight: 600,
//     color: "#334155",
//   },
// };

// // ---------------------- Card Component ----------------------
// const AssemblyCard = ({ number, name, path }) => (
//   <Link
//     to={path}
//     style={styles.card}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.transform = styles.cardHover.transform;
//       e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
//       e.currentTarget.style.background = styles.cardHover.background;
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.transform = "none";
//       e.currentTarget.style.boxShadow = styles.card.boxShadow;
//       e.currentTarget.style.background = styles.card.background;
//     }}
//   >
//     <div style={styles.sessionNumber}>{number}</div>
//     <div style={styles.sessionName}>{name}</div>
//   </Link>
// );

// // ---------------------- Main Component ----------------------
// const SatrSambandhiSankshiptJankariMain = () => {
//   return (
//     <div style={styles.pageWrapper}>
//       {/* Full-width Blue Header */}
//       <div style={styles.headerContainer}>
//         <Link
//                           to="/home"
//                           style={styles.backButton}
//                           onMouseEnter={(e) => {
//                             e.currentTarget.style.backgroundColor = "#ffffff";
//                             e.currentTarget.style.color = "#1e3a8a";
//                             e.currentTarget.style.transform = "translateY(-2px)";
//                             e.currentTarget.style.boxShadow = "0 4px 14px rgba(255,255,255,0.4)";
//                           }}
//                           onMouseLeave={(e) => {
//                             e.currentTarget.style.backgroundColor = "#1e3a8a";
//                             e.currentTarget.style.color = "#ffffff";
//                             e.currentTarget.style.transform = "none";
//                             e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
//                           }}
//                         >
//                           ⬅ Back
//                         </Link>
//         <h1 style={styles.mainTitle}>सत्रवार संक्षिप्त (सांख्यिकीय) जानकारी</h1>
//       </div>

//       {/* Content Section */}
//       <div style={styles.contentContainer}>
//         <div style={styles.grid}>
//           {assemblies.map((assembly, idx) => (
//             <AssemblyCard
//               key={idx}
//               number={assembly.number}
//               name={assembly.name}
//               path={assembly.path}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SatrSambandhiSankshiptJankariMain;
import React from "react";
import { Link } from "react-router-dom";

// ---------------------- Data ----------------------
const assemblies = [
  { number: "षोडश", name: "विधान सभा", path: "/satr/sambandhi/detail-16" },
  { number: "पंचदश", name: "विधान सभा", path: "/satr/sambandhi/detail-15" },
  { number: "चतुर्दश", name: "विधान सभा", path: "/satr/sambandhi/detail-14" },
  { number: "त्रयोदश", name: "विधान सभा", path: "/satr/sambandhi/detail-13" },
  { number: "द्वादश", name: "विधान सभा", path: "/satr/sambandhi/detail-12" },
  { number: "एकादश", name: "विधान सभा", path: "/satr/sambandhi/detail-11" },
];

// ---------------------- Card Component ----------------------
const AssemblyCard = ({ number, name, path }) => (
  <Link
    to={path}
    className="panch-card"
    onMouseEnter={(e) => e.currentTarget.classList.add("hover")}
    onMouseLeave={(e) => e.currentTarget.classList.remove("hover")}
  >
    <div className="panch-card-number">{number}</div>
    <div className="panch-card-name">{name}</div>
  </Link>
);

// ---------------------- Main Component ----------------------
const SatrSambandhiSankshiptJankariMain = () => {
  return (
    <div className="panch-page">

      {/* Hero Section */}
      <div className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-text">

            <Link to="/home" className="panch-btn">
              पीछे जाये
            </Link>

            <h1>सत्रवार संक्षिप्त (सांख्यिकीय) जानकारी</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="panch-content-wrapper">
        <div className="panch-grid">
          {assemblies.map((assembly, idx) => (
            <AssemblyCard
              key={idx}
              number={assembly.number}
              name={assembly.name}
              path={assembly.path}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default SatrSambandhiSankshiptJankariMain;
