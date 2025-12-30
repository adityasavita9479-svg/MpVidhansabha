// import React from "react";
// import { Link } from "react-router-dom";

// // ---------------------- Data ----------------------
// const years = [
//   { year: "2009", path: "/patrakbhagdo/2009" },
//   { year: "2010", path: "/patrakbhagdo/2010" },
//   { year: "2011", path: "/patrakbhagdo/2011" },
//   { year: "2012", path: "/patrakbhagdo/2012" },
//   { year: "2013", path: "/patrakbhagdo/2013" },
//   { year: "2014", path: "/patrakbhagdo/2014" },
//   { year: "2015", path: "/patrakbhagdo/2015" },
//   { year: "2016", path: "/patrakbhagdo/2016" },
//   { year: "2017", path: "/patrakbhagdo/2017" },
//   { year: "2018", path: "/patrakbhagdo/2018" },
//   { year: "2019", path: "/patrakbhagdo/2019" },
//   { year: "2020", path: "/patrakbhagdo/2020" },
//   { year: "2021", path: "/patrakbhagdo/2021" },
//   { year: "2022", path: "/patrakbhagdo/2022" },
//   { year: "2023", path: "/patrakbhagdo/2023" },
//   { year: "2024", path: "/patrakbhagdo/2024" },
//   { year: "2025", path: "/patrakbhagdo/2025" },
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
//     padding: "10px 22px",
//     borderRadius: "10px",
//     fontWeight: 600,
//     textDecoration: "none",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//     transition: "all 0.3s ease-in-out",
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
//     maxWidth: "1000px",
//     margin: "0 auto",
//     padding: "50px 20px 60px 20px",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
//     gap: "25px",
//   },
//   card: {
//     background: "linear-gradient(180deg, #e0e7ff 0%, #ffffff 100%)",
//     borderRadius: "14px",
//     padding: "30px 20px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//     transition: "all 0.35s ease",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     cursor: "pointer",
//     textDecoration: "none",
//     color: "#1e293b",
//     fontWeight: 700,
//     fontSize: "1.4rem",
//   },
//   cardHover: {
//     transform: "translateY(-6px) scale(1.05)",
//     boxShadow: "0 8px 22px rgba(37, 99, 235, 0.35)",
//     background: "linear-gradient(180deg, #dbeafe 0%, #ffffff 100%)",
//   },
// };

// // ---------------------- Year Card ----------------------
// const YearCard = ({ year, path }) => (
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
//     {year}
//   </Link>
// );

// // ---------------------- Main Component ----------------------
// const PatrakBhagDoMain = () => {
//   return (
//     <div style={styles.pageWrapper}>
//       {/* Header */}
//       <div style={styles.headerContainer}>
//         <Link
//           to="/home"
//           style={styles.backButton}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = "#ffffff";
//             e.currentTarget.style.color = "#1e3a8a";
//             e.currentTarget.style.transform = "translateY(-2px)";
//             e.currentTarget.style.boxShadow =
//               "0 4px 14px rgba(255,255,255,0.4)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = "#1e3a8a";
//             e.currentTarget.style.color = "#ffffff";
//             e.currentTarget.style.transform = "none";
//             e.currentTarget.style.boxShadow =
//               "0 2px 8px rgba(0,0,0,0.2)";
//           }}
//         >
//           ⬅ वापस जाएँ
//         </Link>
//         <h1 style={styles.mainTitle}>पत्रक भाग - दो</h1>
//         <p style={styles.subTitle}>वर्षवार जानकारी</p>
//       </div>

//       {/* Content */}
//       <div style={styles.contentContainer}>
//         <div style={styles.grid}>
//           {years.map((item, index) => (
//             <YearCard key={index} year={item.year} path={item.path} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatrakBhagDoMain;
import React from "react";
import { Link } from "react-router-dom";

// ---------------------- Data ----------------------
const years = [
  { year: "2009", path: "/patrakbhagdo/2009" },
  { year: "2010", path: "/patrakbhagdo/2010" },
  { year: "2011", path: "/patrakbhagdo/2011" },
  { year: "2012", path: "/patrakbhagdo/2012" },
  { year: "2013", path: "/patrakbhagdo/2013" },
  { year: "2014", path: "/patrakbhagdo/2014" },
  { year: "2015", path: "/patrakbhagdo/2015" },
  { year: "2016", path: "/patrakbhagdo/2016" },
  { year: "2017", path: "/patrakbhagdo/2017" },
  { year: "2018", path: "/patrakbhagdo/2018" },
  { year: "2019", path: "/patrakbhagdo/2019" },
  { year: "2020", path: "/patrakbhagdo/2020" },
  { year: "2021", path: "/patrakbhagdo/2021" },
  { year: "2022", path: "/patrakbhagdo/2022" },
  { year: "2023", path: "/patrakbhagdo/2023" },
  { year: "2024", path: "/patrakbhagdo/2024" },
  { year: "2025", path: "/patrakbhagdo/2025" },
];

// ---------------------- Card Component ----------------------
const YearCard = ({ year, path }) => (
  <Link
    to={path}
    className="panch-card"
    onMouseEnter={(e) => e.currentTarget.classList.add("hover")}
    onMouseLeave={(e) => e.currentTarget.classList.remove("hover")}
  >
    <div className="panch-card-number">{year}</div>
  </Link>
);

// ---------------------- Main Component ----------------------
const PatrakBhagDoMain = () => {
  return (
    <div className="panch-page">

      {/* Hero Section */}
      <div className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-text">

            {/* <Link to="/home" className="panch-btn">
              वापस जाएँ
            </Link> */}

            <h1>पत्रक भाग - दो</h1>
            <p>वर्षवार जानकारी</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="panch-content-wrapper">
        <div className="panch-grid">
          {years.map((item, index) => (
            <YearCard key={index} year={item.year} path={item.path} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default PatrakBhagDoMain;
