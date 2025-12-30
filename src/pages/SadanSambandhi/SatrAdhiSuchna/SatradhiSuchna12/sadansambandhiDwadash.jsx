// import React from "react";
// import { Link } from "react-router-dom";

// const sessions = [
//   { number: "प्रथम", name: "दिसंबर, 2003" },
//   { number: "द्वितीय", name: "फरवरी-मार्च, 2004", path: "/dritiya2" },
//   { number: "तृतीय", name: "जून-जुलाई, 2004", path: "/tritiya3" },
//   { number: "चतुर्थ", name: "नवम्बर-दिसंबर, 2004", path: "/chaturth4" },
//   { number: "पंचम", name: "फरवरी-मार्च, 2005", path: "/pancham5" },
//   { number: "षष्टम", name: "जुलाई-अगस्त, 2005", path: "/shastam6" },
//   { number: "सप्तम", name: "दिसंबर 2005 - जनवरी 2006", path: "/saptam7" },
//   { number: "अष्टम", name: "फरवरी-मार्च, 2006", path: "/astham8" },
//   { number: "नवम्", name: "जुलाई, 2006", path: "/navam9" },
//   { number: "दशम्", name: "अक्टूबर-नवम्बर, 2006", path: "/dasham10" },
//   { number: "एकादश", name: "फरवरी-मार्च, 2007", path: "/ekadash11" },
//   { number: "द्वादश", name: "जुलाई-अगस्त, 2007", path: "/dwadash12" },
//   { number: "त्रयोदश", name: "नवम्बर, 2007", path: "/trayodash13" },
//   { number: "चतुर्दश", name: "फरवरी-मार्च, 2008", path: "/chaturdash14" },
//   { number: "पंचदश", name: "जुलाई, 2008", path: "/panchdash15" },
// ];

// const SadansambandhiSatrAdhisuhnaDwadash = () => {
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
//       textDecoration: "none",
//       cursor: "pointer",
//       color: "inherit",
//       display: "block",
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

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.mainTitle}>सत्र अधिसूचना</h1>
//         <h3 style={styles.subTitle}>द्वादश विधान सभा (2003 - 2008)</h3>
//       </div>

//       <div style={styles.grid}>
//         {sessions.map((session, index) => (
//           <Link
//             to={session.path}
//             key={index}
//             style={styles.card}
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
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SadansambandhiSatrAdhisuhnaDwadash;
import React from "react";
import { useNavigate } from "react-router-dom";

const sessions = [
{ number: "प्रथम", name: "दिसंबर, 2003", path: "/dritiya1" },
{ number: "द्वितीय", name: "फरवरी-मार्च, 2004", path: "/dritiya2" },
{ number: "तृतीय", name: "जून-जुलाई, 2004", path: "/tritiya3" },
{ number: "चतुर्थ", name: "नवम्बर-दिसंबर, 2004", path: "/chaturth4" },
{ number: "पंचम", name: "फरवरी-मार्च, 2005", path: "/pancham5" },
{ number: "षष्टम", name: "जुलाई-अगस्त, 2005", path: "/shastam6" },
{ number: "सप्तम", name: "दिसंबर 2005 - जनवरी 2006", path: "/saptam7" },
{ number: "अष्टम", name: "फरवरी-मार्च, 2006", path: "/astham8" },
{ number: "नवम्", name: "जुलाई, 2006", path: "/navam9" },
{ number: "दशम्", name: "अक्टूबर-नवम्बर, 2006", path: "/dasham10" },
{ number: "एकादश", name: "फरवरी-मार्च, 2007", path: "/ekadash11" },
{ number: "द्वादश", name: "जुलाई-अगस्त, 2007", path: "/dwadash12" },
{ number: "त्रयोदश", name: "नवम्बर, 2007", path: "/dwatrayodash13" },
{ number: "चतुर्दश", name: "फरवरी-मार्च, 2008", path: "/chaturdash14" },
{ number: "पंचदश", name: "जुलाई, 2008", path: "/panchdash15" },
];

const SessionCard = ({ number, name, path }) => {
const navigate = useNavigate();
return (
<div className="panch-card" onClick={() => navigate(path)} style={{ cursor: "pointer" }}> <h3>{number}</h3> <h3>{name}</h3> </div>
);
};

export default function SadansambandhiSatrAdhisuhnaDwadash() {
const navigate = useNavigate();

return ( <div className="panch-page">


  {/* HERO */}
  <section className="panch-hero">
    <div className="panch-hero-content">
      <div className="panch-hero-row">

        {/* TEXT */}
        <div className="panch-hero-text">
          <h1>सत्र अधिसूचना</h1>
          <p>द्वादश विधान सभा (2003 — 2008)</p>
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
