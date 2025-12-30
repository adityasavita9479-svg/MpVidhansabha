// import React from "react";
// import { useNavigate } from "react-router-dom";

// const sessions = [
//   { number: "प्रथम सत्र", name: "जनवरी, 2014", path: "/chaturdashsession/pratham" },
//   { number: "द्वितीय सत्र", name: "मार्च, 2014", path: "/chaturdashsession/dwitiya" },
//   { number: "तृतीय सत्र", name: "जून-जुलाई, 2014", path: "/chaturdashsession/tritiya" },
//   { number: "चतुर्थ सत्र", name: "दिसम्बर, 2014", path: "/chaturdashsession/chaturth" },
//   { number: "पंचम सत्र", name: "फरवरी-मार्च, 2015", path: "/chaturdashsession/pancham" },
//   { number: "षष्टम् सत्र", name: "मार्च, 2015", path: "/chaturdashsession/shashtham" },
//   { number: "सप्तम् सत्र", name: "जुलाई, 2015", path: "/chaturdashsession/saptam" },
//   { number: "अष्टम् सत्र", name: "नवम्बर, 2015", path: "/chaturdashsession/ashtam" },
//   { number: "नवम् सत्र", name: "दिसम्बर, 2015", path: "/chaturdashsession/navam" },
//   { number: "दशम् सत्र", name: "फरवरी - अप्रैल, 2016", path: "/chaturdashsession/dasham" },
//   { number: "एकादश सत्र", name: "जुलाई, 2016", path: "/chaturdashsession/ekadash" },
//   { number: "द्वादश सत्र", name: "दिसम्बर, 2016", path: "/chaturdashsession/dwadash" },
//   { number: "त्रयोदश सत्र", name: "फरवरी-मई, 2017", path: "/chaturdashsession/trayodash" },
//   { number: "चतुर्दश सत्र", name: "जुलाई, 2017", path: "/chaturdashsession/chaturdash" },
//   { number: "पंचदश सत्र", name: "नवम्बर-दिसम्बर, 2017", path: "/chaturdashsession/panchdash" },
//   { number: "षोडश सत्र", name: "फरवरी-मार्च, 2018", path: "/chaturdashsession/shodash" },
//   { number: "सप्तदश सत्र", name: "जून, 2018", path: "/chaturdashsession/saptadash" },
// ];

// const SadansambandhiSatrAdhisuhnaChaturdash = () => {
//   const navigate = useNavigate();

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
//       background: "linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)",
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

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.mainTitle}>सत्र अधिसूचना</h1>
//         <h3 style={styles.subTitle}>चतुर्दश विधान सभा (2013 से 2018)</h3>
//       </div>

//       <div style={styles.grid}>
//         {sessions.map((session, index) => (
//           <div
//             key={index}
//             style={styles.card}
//             onClick={() => navigate(session.path)}
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

// export default SadansambandhiSatrAdhisuhnaChaturdash;
import React from "react";
import { useNavigate } from "react-router-dom";

const sessions = [
  { number: "प्रथम सत्र", name: "जनवरी, 2014", path: "/chaturdashsession/pratham" },
  { number: "द्वितीय सत्र", name: "मार्च, 2014", path: "/chaturdashsession/dwitiya" },
  { number: "तृतीय सत्र", name: "जून-जुलाई, 2014", path: "/chaturdashsession/tritiya" },
  { number: "चतुर्थ सत्र", name: "दिसम्बर, 2014", path: "/chaturdashsession/chaturth" },
  { number: "पंचम सत्र", name: "फरवरी-मार्च, 2015", path: "/chaturdashsession/pancham" },
  { number: "षष्टम् सत्र", name: "मार्च, 2015", path: "/chaturdashsession/shashtham" },
  { number: "सप्तम् सत्र", name: "जुलाई, 2015", path: "/chaturdashsession/saptam" },
  { number: "अष्टम् सत्र", name: "नवम्बर, 2015", path: "/chaturdashsession/ashtam" },
  { number: "नवम् सत्र", name: "दिसम्बर, 2015", path: "/chaturdashsession/navam" },
  { number: "दशम् सत्र", name: "फरवरी - अप्रैल, 2016", path: "/chaturdashsession/dasham" },
  { number: "एकादश सत्र", name: "जुलाई, 2016", path: "/chaturdashsession/ekadash" },
  { number: "द्वादश सत्र", name: "दिसम्बर, 2016", path: "/chaturdashsession/dwadash" },
  { number: "त्रयोदश सत्र", name: "फरवरी-मई, 2017", path: "/chaturdashsession/trayodash" },
  { number: "चतुर्दश सत्र", name: "जुलाई, 2017", path: "/chaturdashsession/chaturdash" },
  { number: "पंचदश सत्र", name: "नवम्बर-दिसम्बर, 2017", path: "/chaturdashsession/panchdash" },
  { number: "षोडश सत्र", name: "फरवरी-मार्च, 2018", path: "/chaturdashsession/shodash" },
  { number: "सप्तदश सत्र", name: "जून, 2018", path: "/chaturdashsession/saptadash" },
];

export default function SadansambandhiSatrAdhisuhnaChaturdash() {
  const navigate = useNavigate();

  return (
    <div className="panch-page">

      {/* HERO */}
      <section className="panch-hero">
        <div className="panch-hero-content">

          <div className="panch-hero-row">

            {/* LEFT TEXT */}
            <div className="panch-hero-text">
              <h1>सत्र अधिसूचना</h1>
              <p>चतुर्दश विधान सभा (2013 — 2018)</p>
            </div>

            {/* RIGHT BACK BUTTON */}
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

      {/* CONTENT */}
      <section className="panch-section">

        <div className="panch-grid">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="panch-card"
              onClick={() => navigate(session.path)}
              style={{ cursor: "pointer" }}
            >
              <h3>{session.number}</h3>
              <h3>{session.name}</h3>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
