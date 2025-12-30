// import React from "react";
// import { Link } from "react-router-dom";

// // ---------------------- Data ----------------------
// const sessions = [
//   { number: "सप्तदश", name: "जुलाई, 2013", pdf: "misc/stats/stat13thvs-17.pdf" },
//   { number: "षोडश", name: "फरवरी - मार्च, 2013", pdf: "misc/stats/stat13thvs-16.pdf" },
//   { number: "पंचदश", name: "दिसम्बर, 2012", pdf: "misc/stats/stat13thvs-15.pdf" },
//   { number: "चतुर्दश", name: "जुलाई, 2012", pdf: "misc/stats/stat13thvs-14.pdf" },
//   { number: "त्रयोदश", name: "जुलाई, 2012", pdf: "misc/stats/stat13thvs-13.pdf" },
//   { number: "द्वादश", name: "फरवरी - अप्रैल, 2012", pdf: "misc/stats/stat13thvs-12.pdf" },
//   { number: "एकादश", name: "नवम्बर - दिसम्बर, 2011", pdf: "misc/stats/stat13thvs-11.pdf" },
//   { number: "दशम्", name: "जुलाई, 2011", pdf: "misc/stats/stat13thvs-10.pdf" },
//   { number: "नवम्", name: "फरवरी - अप्रैल, 2011", pdf: "misc/stats/stat13thvs-9.pdf" },
//   { number: "अष्टम्", name: "नवम्बर, 2010", pdf: "misc/stats/stat13thvs-8.pdf" },
//   { number: "सप्तम्", name: "जुलाई, 2010", pdf: "misc/stats/stat13thvs-7.pdf" },
//   { number: "षष्टम्", name: "मई, 2010", pdf: "misc/stats/stat13thvs-6.pdf" },
//   { number: "पंचम्", name: "फरवरी - मार्च, 2010", pdf: "misc/stats/stat13thvs-5.pdf" },
//   { number: "चतुर्थ", name: "नवम्बर, 2009", pdf: "misc/stats/stat13thvs-4.pdf" },
//   { number: "तृतीय", name: "जुलाई - अगस्त, 2009", pdf: "misc/stats/stat13thvs-3.pdf" },
//   { number: "द्वितीय", name: "मार्च, 2009", pdf: "misc/stats/stat13thvs-2.pdf" },
//   { number: "प्रथम", name: "जनवरी, 2009", pdf: "misc/stats/stat13thvs-1.pdf" },
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
//   subTitle: {
//     textAlign: "center",
//     fontSize: "1.3rem",
//     marginTop: "8px",
//     opacity: 0.95,
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
//     padding: "26px 18px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//     transition: "all 0.35s ease",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
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
//     marginBottom: "10px",
//   },
//   sessionName: {
//     fontSize: "1.2rem",
//     fontWeight: 600,
//     color: "#334155",
//   },
// };

// // ---------------------- Card Component ----------------------
// const SessionCard = ({ number, name, pdf }) => (
//   <a
//     href={pdf}
//     target="_blank"
//     rel="noopener noreferrer"
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
//   </a>
// );

// // ---------------------- Main Component ----------------------
// const SatrSambandhiJankari2013 = () => {
//   return (
//     <div style={styles.pageWrapper}>
//       {/* Header */}
//       <div style={styles.headerContainer}>
//        <Link
//                          to="/satrsambandhisankshiptjankari"
//                          style={styles.backButton}
//                          onMouseEnter={(e) => {
//                            e.currentTarget.style.backgroundColor = "#ffffff";
//                            e.currentTarget.style.color = "#1e3a8a";
//                            e.currentTarget.style.transform = "translateY(-2px)";
//                            e.currentTarget.style.boxShadow = "0 4px 14px rgba(255,255,255,0.4)";
//                          }}
//                          onMouseLeave={(e) => {
//                            e.currentTarget.style.backgroundColor = "#1e3a8a";
//                            e.currentTarget.style.color = "#ffffff";
//                            e.currentTarget.style.transform = "none";
//                            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
//                          }}
//                        >
//                          ⬅ Back
//                        </Link>
//         <h1 style={styles.mainTitle}>त्रयोदश विधान सभा</h1>
//         <p style={styles.subTitle}>(2008 से 2013)</p>
//       </div>

//       {/* Content */}
//       <div style={styles.contentContainer}>
//         <div style={styles.grid}>
//           {sessions.map((session, idx) => (
//             <SessionCard
//               key={idx}
//               number={session.number}
//               name={session.name}
//               pdf={session.pdf}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SatrSambandhiJankari2013;
import React from "react";
import { Link } from "react-router-dom";

// ---------------------- Data ----------------------
const sessions = [
  { number: "सप्तदश", name: "जुलाई, 2013", pdf: "misc/stats/stat13thvs-17.pdf" },
  { number: "षोडश", name: "फरवरी - मार्च, 2013", pdf: "misc/stats/stat13thvs-16.pdf" },
  { number: "पंचदश", name: "दिसम्बर, 2012", pdf: "misc/stats/stat13thvs-15.pdf" },
  { number: "चतुर्दश", name: "जुलाई, 2012", pdf: "misc/stats/stat13thvs-14.pdf" },
  { number: "त्रयोदश", name: "जुलाई, 2012", pdf: "misc/stats/stat13thvs-13.pdf" },
  { number: "द्वादश", name: "फरवरी - अप्रैल, 2012", pdf: "misc/stats/stat13thvs-12.pdf" },
  { number: "एकादश", name: "नवम्बर - दिसम्बर, 2011", pdf: "misc/stats/stat13thvs-11.pdf" },
  { number: "दशम्", name: "जुलाई, 2011", pdf: "misc/stats/stat13thvs-10.pdf" },
  { number: "नवम्", name: "फरवरी - अप्रैल, 2011", pdf: "misc/stats/stat13thvs-9.pdf" },
  { number: "अष्टम्", name: "नवम्बर, 2010", pdf: "misc/stats/stat13thvs-8.pdf" },
  { number: "सप्तम्", name: "जुलाई, 2010", pdf: "misc/stats/stat13thvs-7.pdf" },
  { number: "षष्टम्", name: "मई, 2010", pdf: "misc/stats/stat13thvs-6.pdf" },
  { number: "पंचम्", name: "फरवरी - मार्च, 2010", pdf: "misc/stats/stat13thvs-5.pdf" },
  { number: "चतुर्थ", name: "नवम्बर, 2009", pdf: "misc/stats/stat13thvs-4.pdf" },
  { number: "तृतीय", name: "जुलाई - अगस्त, 2009", pdf: "misc/stats/stat13thvs-3.pdf" },
  { number: "द्वितीय", name: "मार्च, 2009", pdf: "misc/stats/stat13thvs-2.pdf" },
  { number: "प्रथम", name: "जनवरी, 2009", pdf: "misc/stats/stat13thvs-1.pdf" },
];

// ---------------------- Card Component ----------------------
const SessionCard = ({ number, name, pdf }) => (
  <a
    href={pdf}
    target="_blank"
    rel="noopener noreferrer"
    className="panch-card"
    onMouseEnter={(e) => e.currentTarget.classList.add("hover")}
    onMouseLeave={(e) => e.currentTarget.classList.remove("hover")}
  >
    <div className="panch-card-number">{number}</div>
    <div className="panch-card-name">{name}</div>
  </a>
);

// ---------------------- Main Component ----------------------
const SatrSambandhiJankari2013 = () => {
  return (
    <div className="panch-page">

      {/* Hero Section */}
      <div className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-text">

            <Link to="/satrsambandhisankshiptjankari" className="panch-btn">
              पीछे जाये
            </Link>

            <h1>त्रयोदश विधान सभा</h1>
            <p>(2008 से 2013)</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="panch-content-wrapper">
        <div className="panch-grid">
          {sessions.map((session, idx) => (
            <SessionCard
              key={idx}
              number={session.number}
              name={session.name}
              pdf={session.pdf}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default SatrSambandhiJankari2013;
