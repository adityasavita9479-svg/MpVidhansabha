// import React from "react";
// import { useNavigate } from "react-router-dom";

// const sessions = [
//   { number: "प्रथम सत्र", name: "जनवरी, 2019", path: "/pancdashpancdashsession/pratham" },
//   { number: "द्वितीय सत्र", name: "फरवरी, 2019", path: "/pancdashsession/dwitiya" },
//   { number: "तृतीय सत्र", name: "जुलाई, 2019", path: "/pancdashsession/tritiya" },
//   { number: "चतुर्थ सत्र", name: "दिसम्बर, 2019", path: "/pancdashsession/chaturth" },
//   { number: "पंचम सत्र", name: "मार्च-अप्रैल, 2020", path: "/pancdashsession/pancham" },
//   { number: "षष्टम् सत्र", name: "मार्च, 2020", path: "/pancdashsession/shashtham" },
//   { number: "सप्तम् सत्र (निरस्त)", name: "जुलाई, 2020", path: "/pancdashsession/saptam-nirast" },
//   { number: "सप्तम् सत्र", name: "सितम्बर, 2020", path: "/pancdashsession/saptam" },
//   { number: "अष्टम् सत्र (निरस्त)", name: "दिसम्बर, 2020", path: "/pancdashsession/ashtam-nirast" },
//   { number: "अष्टम् सत्र", name: "फरवरी-मार्च, 2021", path: "/pancdashsession/ashtam" },
//   { number: "नवम् सत्र", name: "अगस्त, 2021", path: "/pancdashsession/navam" },
//   { number: "दशम सत्र", name: "दिसम्बर, 2021", path: "/pancdashsession/dasham" },
//   { number: "एकादश सत्र", name: "मार्च, 2022", path: "/pancdashsession/ekadash" },
//   { number: "द्वादश सत्र", name: "सितम्बर, 2022", path: "/pancdashsession/dwadash" },
//   { number: "त्रयोदश सत्र", name: "दिसम्बर, 2022", path: "/pancdashsession/trayodash" },
//   { number: "चतुर्दश सत्र", name: "फरवरी-मार्च, 2023", path: "/pancdashsession/chaturdash" },
//   { number: "पंचदश सत्र", name: "जुलाई, 2023", path: "/pancdashsession/panchdash" },
// ];

// const SadansambandhiSatrAdhisuhnaPanchdash = () => {
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
//         <h3 style={styles.subTitle}>पंचदश विधान सभा (2019 से 2023)</h3>
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

// export default SadansambandhiSatrAdhisuhnaPanchdash;
import React from "react";
import { useNavigate } from "react-router-dom";

// Panchdash Sessions (2019–2023)
const sessions = [
  { number: "प्रथम सत्र", name: "जनवरी, 2019", path: "/pancdashpancdashsession/pratham" },
  { number: "द्वितीय सत्र", name: "फरवरी, 2019", path: "/pancdashsession/dwitiya" },
  { number: "तृतीय सत्र", name: "जुलाई, 2019", path: "/pancdashsession/tritiya" },
  { number: "चतुर्थ सत्र", name: "दिसम्बर, 2019", path: "/pancdashsession/chaturth" },
  { number: "पंचम सत्र", name: "मार्च-अप्रैल, 2020", path: "/pancdashsession/pancham" },
  { number: "षष्टम् सत्र", name: "मार्च, 2020", path: "/pancdashsession/shashtham" },
  { number: "सप्तम् सत्र (निरस्त)", name: "जुलाई, 2020", path: "/pancdashsession/saptam-nirast" },
  { number: "सप्तम् सत्र", name: "सितम्बर, 2020", path: "/pancdashsession/saptam" },
  { number: "अष्टम् सत्र (निरस्त)", name: "दिसम्बर, 2020", path: "/pancdashsession/ashtam-nirast" },
  { number: "अष्टम् सत्र", name: "फरवरी-मार्च, 2021", path: "/pancdashsession/ashtam" },
  { number: "नवम् सत्र", name: "अगस्त, 2021", path: "/pancdashsession/navam" },
  { number: "दशम सत्र", name: "दिसम्बर, 2021", path: "/pancdashsession/dasham" },
  { number: "एकादश सत्र", name: "मार्च, 2022", path: "/pancdashsession/ekadash" },
  { number: "द्वादश सत्र", name: "सितम्बर, 2022", path: "/pancdashsession/dwadash" },
  { number: "त्रयोदश सत्र", name: "दिसम्बर, 2022", path: "/pancdashsession/trayodash" },
  { number: "चतुर्दश सत्र", name: "फरवरी-मार्च, 2023", path: "/pancdashsession/chaturdash" },
  { number: "पंचदश सत्र", name: "जुलाई, 2023", path: "/pancdashsession/panchdash" },
];

// Session Card
const SessionCard = ({ number, name, path }) => {
  const navigate = useNavigate();
  return (
    <div className="panch-card" onClick={() => navigate(path)} style={{ cursor: "pointer" }}>
      <h3>{number}</h3>
      <h3>{name}</h3>
    </div>
  );
};

// Main Page Component
export default function SadansambandhiSatrAdhisuhnaPanchdash() {
  const navigate = useNavigate();

  return (
    <div className="panch-page">

      {/* HERO */}
      <section className="panch-hero">
        <div className="panch-hero-content">

          <div className="panch-hero-row">
            {/* TEXT */}
            <div className="panch-hero-text">
              <h1>सत्र अधिसूचना</h1>
              <p>पंचदश विधान सभा (2019 — 2023)</p>
            </div>

            {/* BACK BUTTON — UPDATED */}
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

      {/* CONTENT SECTION */}
      <section className="panch-section">

        {/* Sessions Grid */}
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

