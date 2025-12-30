// import React from "react";
// import { Link } from "react-router-dom";

// // Data
// const numberedSessions = [
//   { number: "सप्तम", name: " दिसम्बर, 2025", path: "/satradhisuchna7" },
//   { number: "षष्टम", name: "जुलाई-अगस्त, 2025", path: "/satradhisuchna6" },
//   { number: "पंचम", name: "मार्च, 2025", path: "/satradhisuchna5" },
//   { number: "चतुर्थ", name: "दिसम्बर, 2024", path: "/satradhisuchna4" },
//   { number: "तृतीय", name: "जुलाई, 2024", path: "/satradhisuchna3" },
//   { number: "द्वितीय", name: "फरवरी, 2024", path: "/satradhisuchna2" },
//   { number: "प्रथम", name: "दिसम्बर, 2023", path: "/satradhisuchna1" },
// ];

// const vidhanSabha = [
//   { title: "पंचदश विधान सभा", route: "/vidhansabha-15" },
//   { title: "चतुर्दश विधान सभा", route: "/vidhansabha-14" },
//   { title: "त्रयोदश विधान सभा", route: "/vidhansabha-13" },
//   { title: "द्वादश विधान सभा", route: "/vidhansabha-12" },
// ];


// // Styles
// const styles = {
//   container: {
//     maxWidth: "1100px",
//     margin: "0 auto",
//     padding: "0 20px 60px 20px", // header has its own padding now
//     fontFamily: "'Noto Sans Devanagari', sans-serif",
//     backgroundColor: "#f9fafb",
//     minHeight: "100vh",
//   },
//   header: {
//     textAlign: "center",
//     padding: "40px 20px 60px 20px",
//     background: "linear-gradient(90deg, #1e40af, #2563eb)",
//     color: "#fff",
//     borderRadius: "0 0 25px 25px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//     marginBottom: "30px",
//   },
//   mainTitle: {
//     fontSize: "2.5rem",
//     fontWeight: 700,
//     color: "#fff",
//     marginBottom: "10px",
//   },
//   subHeader: {
//     fontSize: "1.3rem",
//     fontWeight: 500,
//     color: "#e0e7ff",
//     marginBottom: "4px",
//   },
//   sessionPeriod: { fontSize: "1.1rem", color: "#ffffffaa", marginBottom: "20px" },
//   sectionTitle: {
//     fontSize: "1.4rem",
//     fontWeight: 600,
//     color: "#1e293b",
//     marginBottom: "20px",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//     gap: "20px",
//   },
//   smallGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)",
//     gap: "12px",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   card: {
//     background: "#ffffff",
//     borderRadius: "12px",
//     padding: "18px 10px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//     transition: "all 0.3s ease",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     cursor: "pointer",
//     textDecoration: "none",
//     color: "#1e293b",
//   },
//   smallCard: {
//     background: "#e2e8f0",
//     borderRadius: "10px",
//     padding: "15px 5px",
//     textAlign: "center",
//     fontSize: "1rem",
//     fontWeight: 600,
//     color: "#374151",
//     boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
//     transition: "0.3s",
//   },
//   cardHover: {
//     transform: "translateY(-6px) scale(1.03)",
//     boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
//   },
//   sessionNumber: {
//     fontSize: "1.5rem",
//     fontWeight: 700,
//     color: "#2563eb",
//     marginBottom: "12px",
//   },
//   sessionName: {
//     fontSize: "1.1rem",
//     fontWeight: 500,
//     textAlign: "center",
//     color: "#334155",
//   },
// };



// // Card Component
// const SessionCard = ({ number, name, path, title, variant }) => {
//   const isSecondary = variant === "secondary";
//   const isSmall = variant === "small";

//   const cardStyle = isSmall
//     ? styles.smallCard
//     : { ...styles.card, background: isSecondary ? "#e2e8f0" : "#ffffff" };

//   const hoverStyle = {
//     transform: styles.cardHover.transform,
//     boxShadow: styles.cardHover.boxShadow,
//   };

//   const content = (
//     <>
//       {number && <div style={styles.sessionNumber}>{number} सत्र</div>}
//       <div style={styles.sessionName}>{name || title}</div>
//     </>
//   );

//   return (
//     <Link
//       to={path}
//       style={cardStyle}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = hoverStyle.transform;
//         e.currentTarget.style.boxShadow = hoverStyle.boxShadow;
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = "none";
//         e.currentTarget.style.boxShadow = cardStyle.boxShadow;
//       }}
//     >
//       {content}
//     </Link>
//   );
// };

// // Main Component
// const SadansambandhiSatrAdhisuchna = () => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.mainTitle}>सत्र अधिसूचना</h1>
//         <div style={styles.subHeader}>षोडश विधान सभा</div>
//       </div>

//       {/* Numbered Sessions */}
//       <div style={{ marginBottom: "50px" }}>
//         <div style={styles.grid}>
//           {numberedSessions.map((session, idx) => (
//             <SessionCard
//               key={idx}
//               number={session.number}
//               name={session.name}
//               path={session.path}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Vidhan Sabha Past Assemblies */}
//       <div style={{ marginTop: "40px" }}>
//         <div
//           style={{
//             height: "2px",
//             width: "100%",
//             backgroundColor: "#2563eb",
//             margin: "0 auto 15px auto",
//             borderRadius: "2px",
//           }}
//         />
//         <div style={styles.smallGrid}>
//           {vidhanSabha.map((assembly, idx) => (
//             <SessionCard
//               key={idx}
//               title={assembly.title}
//               path={assembly.route}
//               variant="small"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SadansambandhiSatrAdhisuchna;
// import React from "react";
// import { Link } from "react-router-dom";

// // Data
// const numberedSessions = [
//   { number: "सप्तम", name: "दिसम्बर, 2025", path: "/satradhisuchna7" },
//   { number: "षष्टम", name: "जुलाई-अगस्त, 2025", path: "/satradhisuchna6" },
//   { number: "पंचम", name: "मार्च, 2025", path: "/satradhisuchna5" },
//   { number: "चतुर्थ", name: "दिसम्बर, 2024", path: "/satradhisuchna4" },
//   { number: "तृतीय", name: "जुलाई, 2024", path: "/satradhisuchna3" },
//   { number: "द्वितीय", name: "फरवरी, 2024", path: "/satradhisuchna2" },
//   { number: "प्रथम", name: "दिसम्बर, 2023", path: "/satradhisuchna1" },
// ];

// const vidhanSabha = [
//   { title: "पंचदश विधान सभा", route: "/vidhansabha-15" },
//   { title: "चतुर्दश विधान सभा", route: "/vidhansabha-14" },
//   { title: "त्रयोदश विधान सभा", route: "/vidhansabha-13" },
//   { title: "द्वादश विधान सभा", route: "/vidhansabha-12" },
// ];

// // Card Component
// const SessionCard = ({ number, name, path, title, variant }) => {
//   return (
//     <Link
//       to={path}
//       className={variant === "small" ? "panch-card panch-card-small" : "panch-card"}
//     >
//       {number && <h3 className="panch-card-number">{number} सत्र</h3>}
//       <h3 className="panch-card-title">{name || title}</h3>
//     </Link>
//   );
// };

// // Main Component
// export default function SadansambandhiSatrAdhisuchna() {
//   return (
//     <div className="panch-page">

//       {/* HERO (updated exactly like your CommitteesPage hero) */}
//       <section className="panch-hero">
//         <div className="panch-hero-content">
//           <div className="panch-hero-row">
//             <div className="panch-hero-text">
//               <h1>सत्र अधिसूचना</h1>
//               <p>षोडश विधान सभा</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MAIN SECTION */}
//       <section className="panch-section">

//         {/* Numbered Sessions */}
//         <div className="panch-grid">
//           {numberedSessions.map((session, idx) => (
//             <SessionCard
//               key={idx}
//               number={session.number}
//               name={session.name}
//               path={session.path}
//             />
//           ))}
//         </div>

//         {/* Divider */}
//         <hr className="comm-separator" />

//         {/* Past Vidhan Sabha Assemblies */}
//         <div className="panch-grid panch-small-grid">
//           {vidhanSabha.map((assembly, idx) => (
//             <SessionCard
//               key={idx}
//               title={assembly.title}
//               path={assembly.route}
//               variant="small"
//             />
//           ))}
//         </div>

//       </section>

//       {/* Footer */}
//       {/* <footer className="panch-footer">
//         © {new Date().getFullYear()} मध्यप्रदेश विधान सभा — सभी अधिकार सुरक्षित
//       </footer> */}
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

// Data
const numberedSessions = [
  { number: "सप्तम", name: "दिसम्बर, 2025", path: "/satradhisuchna7" },
  { number: "षष्टम", name: "जुलाई-अगस्त, 2025", path: "/satradhisuchna6" },
  { number: "पंचम", name: "मार्च, 2025", path: "/satradhisuchna5" },
  { number: "चतुर्थ", name: "दिसम्बर, 2024", path: "/satradhisuchna4" },
  { number: "तृतीय", name: "जुलाई, 2024", path: "/satradhisuchna3" },
  { number: "द्वितीय", name: "फरवरी, 2024", path: "/satradhisuchna2" },
  { number: "प्रथम", name: "दिसम्बर, 2023", path: "/satradhisuchna1" },
];

const vidhanSabha = [
  { title: "पंचदश विधान सभा", route: "/vidhansabha-15" },
  { title: "चतुर्दश विधान सभा", route: "/vidhansabha-14" },
  { title: "त्रयोदश विधान सभा", route: "/vidhansabha-13" },
  { title: "द्वादश विधान सभा", route: "/vidhansabha-12" },
];

// Card Component
const SessionCard = ({ number, name, path }) => {
  return (
    <Link to={path} className="panch-card">
      {number && <h3 className="panch-card-number">{number} सत्र</h3>}
      <h3 className="panch-card-title">{name}</h3>
    </Link>
  );
};

// Main Component
export default function SadansambandhiSatrAdhisuchna() {
  return (
    <div className="panch-page">

      {/* HERO */}
      <section className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">
            <div className="panch-hero-text">
              <h1>सत्र अधिसूचना</h1>
              <p>षोडश विधान सभा</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="panch-section">

        {/* Numbered Sessions */}
        <div className="panch-grid">
          {numberedSessions.map((session, idx) => (
            <SessionCard
              key={idx}
              number={session.number}
              name={session.name}
              path={session.path}
            />
          ))}
        </div>

        {/* ⬇⬇ NEW — Assembly Links (Just like your CommitteesPage) */}
        <div className="comm-assembly-links">
          <hr className="comm-separator" />

          <div className="comm-assembly-container">

            {vidhanSabha.map((item, idx) => (
              <Link
                key={idx}
                to={item.route}
                className="comm-link"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                {item.title}
              </Link>
            ))}

          </div>
        </div>
        {/* ⬆⬆ END — Assembly Links */}

      </section>
    </div>
  );
}
