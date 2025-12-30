// import React from "react";

// const sessions = [
//   { number: "प्रथम", name: "जनवरी, 2009", path: "/trayodash1" },
//   { number: "द्वितीय", name: "मार्च, 2009", path: "/trayodash2" },
//   { number: "तृतीय", name: "जुलाई-अगस्त, 2009", path: "trayodash3" },
//   { number: "चतुर्थ", name: "नवम्बर, 2009", path: "trayodash4" },
//   { number: "पंचम", name: "फरवरी-मार्च, 2010", path: "trayodash5" },
//   { number: "षष्टम", name: "मई, 2010", path: "trayodash6" },
//   { number: "सप्तम", name: "जुलाई, 2010", path: "trayodash7" },
//   { number: "अष्टम", name: "नवम्बर, 2010", path: "trayodash8" },
//   { number: "नवम्", name: "फरवरी-अप्रैल, 2011", path: "trayodash9" },
//   { number: "दशम्", name: "जुलाई, 2011", path: "trayodash10" },
//   { number: "एकादश", name: "नवम्बर-दिसम्बर, 2011", path: "trayodash11" },
//   { number: "द्वादश", name: "फरवरी-अप्रैल, 2012", path: "trayodash12" },
//   { number: "त्रयोदश", name: "जुलाई, 2012", path: "trayodash13" },
//   { number: "चतुर्दश", name: "जुलाई, 2012", path: "trayodash14" },
//   { number: "पंचदश", name: "दिसम्बर, 2012", path: "trayodash15" },
//   { number: "षोडश", name: "फरवरी-मार्च, 2013", path: "trayodash16" },
//   { number: "सप्तदश", name: "जुलाई, 2013", path: "trayodash17" },
// ];

// const SadansambandhiSatrAdhisuhnaTrayodash = () => {
//   const styles = {
//     container: {
//       maxWidth: "1100px",
//       margin: "50px auto",
//       padding: "20px",
//       fontFamily: "'Noto Sans Devanagari', sans-serif",
//       background: "#f9fafb",
//       borderRadius: "16px",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     },
//     header: {
//       textAlign: "center",
//       marginBottom: "40px",
//     },
//     mainTitle: {
//       fontSize: "2.3rem",
//       fontWeight: 700,
//       color: "#1e293b",
//       marginBottom: "10px",
//     },
//     subTitle: {
//       fontSize: "1.2rem",
//       fontWeight: 500,
//       color: "#475569",
//     },
//     grid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//       gap: "20px",
//     },
//     card: {
//       background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
//       borderRadius: "14px",
//       padding: "25px 20px",
//       boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
//       transition: "transform 0.2s ease, box-shadow 0.2s ease",
//       textAlign: "center",
//       cursor: "pointer",
//     },
//     cardHover: {
//       transform: "translateY(-6px)",
//       boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
//     },
//     sessionNumber: {
//       fontSize: "1.4rem",
//       fontWeight: 600,
//       color: "#1d4ed8",
//       marginBottom: "8px",
//     },
//     sessionName: {
//       fontSize: "1.1rem",
//       color: "#334155",
//       fontWeight: 500,
//     },
//   };

//   const openPath = (path) => {
//     window.open(path, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.mainTitle}>सत्र अधिसूचना</h1>
//         <h3 style={styles.subTitle}>त्रयोदश विधान सभा (2008 - 2013)</h3>
//       </div>

//       <div style={styles.grid}>
//         {sessions.map((session, index) => (
//           <div
//             key={index}
//             style={styles.card}
//             onClick={() => openPath(session.path)}
//             onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
//             onMouseLeave={(e) =>
//               Object.assign(e.currentTarget.style, {
//                 transform: "none",
//                 boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
//               })
//             }
//           >
//             <div style={styles.sessionNumber}>{session.number}</div>
//             <div style={styles.sessionName}>{session.name}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SadansambandhiSatrAdhisuhnaTrayodash;
import React from "react";
import { useNavigate } from "react-router-dom";

const sessions = [
{ number: "प्रथम", name: "जनवरी, 2009", path: "/trayodash1" },
{ number: "द्वितीय", name: "मार्च, 2009", path: "/trayodash2" },
{ number: "तृतीय", name: "जुलाई-अगस्त, 2009", path: "/trayodash3" },
{ number: "चतुर्थ", name: "नवम्बर, 2009", path: "/trayodash4" },
{ number: "पंचम", name: "फरवरी-मार्च, 2010", path: "/trayodash5" },
{ number: "षष्टम", name: "मई, 2010", path: "/trayodash6" },
{ number: "सप्तम", name: "जुलाई, 2010", path: "/trayodash7" },
{ number: "अष्टम", name: "नवम्बर, 2010", path: "/trayodash8" },
{ number: "नवम्", name: "फरवरी-अप्रैल, 2011", path: "/trayodash9" },
{ number: "दशम्", name: "जुलाई, 2011", path: "/trayodash10" },
{ number: "एकादश", name: "नवम्बर-दिसम्बर, 2011", path: "/trayodash11" },
{ number: "द्वादश", name: "फरवरी-अप्रैल, 2012", path: "/trayodash12" },
{ number: "त्रयोदश", name: "जुलाई, 2012", path: "/trayodash13" },
{ number: "चतुर्दश", name: "जुलाई, 2012", path: "/trayodash14" },
{ number: "पंचदश", name: "दिसम्बर, 2012", path: "/trayodash15" },
{ number: "षोडश", name: "फरवरी-मार्च, 2013", path: "/trayodash16" },
{ number: "सप्तदश", name: "जुलाई, 2013", path: "/trayodash17" },
];

const SessionCard = ({ number, name, path }) => {
const navigate = useNavigate();
return (
<div className="panch-card" onClick={() => navigate(path)} style={{ cursor: "pointer" }}> <h3>{number}</h3> <h3>{name}</h3> </div>
);
};

export default function SadansambandhiSatrAdhisuhnaTrayodash() {
const navigate = useNavigate();

return ( <div className="panch-page">


  {/* HERO */}
  <section className="panch-hero">
    <div className="panch-hero-content">
      <div className="panch-hero-row">

        {/* TEXT */}
        <div className="panch-hero-text">
          <h1>सत्र अधिसूचना</h1>
          <p>त्रयोदश विधान सभा (2008 — 2013)</p>
        </div>

        {/* BACK BUTTON */}
        <div
          className="panch-btn"
          onClick={() => navigate("/satradhisuchna")}
          style={{ cursor: "pointer" }}
        >
          पीछे जाये
        </div>

      </div>
    </div>
  </section>

  {/* SESSIONS GRID */}
  <section className="panch-section">
    <div className="panch-grid">
      {sessions.map((session, idx) => (
        <SessionCard
          key={idx}
          number={session.number}
          name={session.name}
          path={session.path}
        />
      ))}
    </div>
  </section>
</div>


);
}
