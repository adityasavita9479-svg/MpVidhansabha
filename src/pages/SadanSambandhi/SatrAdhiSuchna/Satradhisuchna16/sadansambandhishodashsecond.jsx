// import React from "react";
// import { Link } from "react-router-dom";

// // Data for द्वितीय सत्र with PDF links
// const sessionDocuments = [
//   { title: "सत्र आमंत्रण की अधिसूचना", pdf: "/misc/adhisuchna/prevdload/aman_16_2.pdf" },
//   { title: "पत्रक भाग - 2", pdf: "/misc/adhisuchna/prevdload/patrak_16_2.pdf" },
//   { title: "सत्र की बैठकों की दिनदर्शिका", pdf: "/misc/adhisuchna/prevdload/din_16_2.pdf" },
//   { title: "सत्र में बैठकों की प्रथम पुनरीक्षित सामान्य सूची", pdf: "/misc/adhisuchna/prevdload/firstrevsamanayasuchi_16_2.pdf" },
//   { title: "सत्र में बैठकों की सामान्य सूची (पुनरीक्षित)", pdf: "/misc/adhisuchna/prevdload/psamanayasuchi_16_2.pdf" },
//   { title: "सत्र में बैठकों की सामान्य सूची", pdf: "/misc/adhisuchna/prevdload/samanayasuchi_16_2.pdf" },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-सदस्‍यों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartm-16-2.pdf" },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartd-16-2.pdf" },
//   { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartd-16-2.pdf" },
// ];

// const ShodashVidhanSabhaSecondSession = () => {
//   const styles = {
//     container: {
//       maxWidth: "1100px",
//       margin: "40px auto",
//       padding: "60px 20px 20px",
//       fontFamily: "'Noto Sans Devanagari', sans-serif",
//       background: "#f9f9fb",
//       borderRadius: "16px",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//       position: "relative",
//       minHeight: "70vh",
//     },
//     backButton: {
//       position: "absolute",
//       top: "20px",
//       left: "20px",
//       backgroundColor: "#2563eb",
//       color: "#fff",
//       padding: "8px 16px",
//       borderRadius: "8px",
//       textDecoration: "none",
//       fontWeight: 500,
//       transition: "background-color 0.2s ease",
//     },
//     heading: {
//       textAlign: "center",
//       fontSize: "1.8rem",
//       fontWeight: "700",
//       color: "#2c3e50",
//       marginBottom: "5px",
//     },
//     subHeading: {
//       textAlign: "center",
//       fontSize: "1.2rem",
//       fontWeight: "500",
//       color: "#555",
//       marginBottom: "30px",
//     },
//     grid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//       gap: "20px",
//     },
//     card: {
//       background: "linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)",
//       padding: "20px",
//       borderRadius: "12px",
//       boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//       transition: "transform 0.2s ease, box-shadow 0.2s ease",
//       cursor: "default",
//       textAlign: "center",
//     },
//     cardHover: {
//       transform: "translateY(-5px)",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//     },
//     title: {
//       fontSize: "1.25rem",
//       fontWeight: 600,
//       color: "#1d4ed8",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       {/* Back Button */}
//       <Link
//         to="/satradhisuchna"
//         style={styles.backButton}
//         onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
//         onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
//       >
//         ← Back
//       </Link>

//       <h2 style={styles.heading}>षोडश विधान सभा</h2>
//       <h3 style={styles.subHeading}>द्वितीय सत्र (फरवरी, 2024)</h3>

//       <div style={styles.grid}>
//         {sessionDocuments.map((doc, index) => (
//           <div
//             key={index}
//             style={{ ...styles.card, cursor: doc.pdf ? "pointer" : "default" }}
//             onClick={() => doc.pdf && window.open(doc.pdf, "_blank")}
//             onMouseEnter={(e) => doc.pdf && Object.assign(e.currentTarget.style, styles.cardHover)}
//             onMouseLeave={(e) =>
//               doc.pdf &&
//               Object.assign(e.currentTarget.style, {
//                 transform: "none",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//               })
//             }
//           >
//             <div style={styles.title}>{doc.title}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShodashVidhanSabhaSecondSession;



import React from "react";
import { useNavigate } from "react-router-dom";

// Data for द्वितीय सत्र with PDF links
const sessionDocuments = [
  { title: "सत्र आमंत्रण की अधिसूचना", pdf: "/misc/adhisuchna/prevdload/aman_16_2.pdf" },
  { title: "पत्रक भाग - 2", pdf: "/misc/adhisuchna/prevdload/patrak_16_2.pdf" },
  { title: "सत्र की बैठकों की दिनदर्शिका", pdf: "/misc/adhisuchna/prevdload/din_16_2.pdf" },
  { title: "सत्र में बैठकों की प्रथम पुनरीक्षित सामान्य सूची", pdf: "/misc/adhisuchna/prevdload/firstrevsamanayasuchi_16_2.pdf" },
  { title: "सत्र में बैठकों की सामान्य सूची (पुनरीक्षित)", pdf: "/misc/adhisuchna/prevdload/psamanayasuchi_16_2.pdf" },
  { title: "सत्र में बैठकों की सामान्य सूची", pdf: "/misc/adhisuchna/prevdload/samanayasuchi_16_2.pdf" },
  { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-सदस्‍यों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartm-16_2.pdf" },
  { title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये", pdf: "/misc/adhisuchna/prevdload/rchartd-16_2.pdf" },
];

export default function ShodashVidhanSabhaSecondSession() {
  const navigate = useNavigate();

  return (
    <div className="panch-page">

      {/* ⭐ HERO SECTION — Same as previous page */}
      <section className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">

            <div className="panch-hero-text">
              <h1>षोडश विधान सभा</h1>
              <p>द्वितीय सत्र (फरवरी, 2024)</p>
            </div>

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

      {/* ⭐ DOCUMENT GRID SECTION — Global CSS */}
      <section className="panch-section">
        <div className="panch-grid">
          {sessionDocuments.map((doc, index) => (
            <div
              key={index}
              className="panch-card"
              style={{ cursor: doc.pdf ? "pointer" : "default" }}
              onClick={() => doc.pdf && window.open(doc.pdf, "_blank")}
            >
              <h3>{doc.title}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
