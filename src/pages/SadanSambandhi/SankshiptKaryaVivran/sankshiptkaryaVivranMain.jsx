// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const SanksShiptKaryaVivranMain = () => {
//   const navigate = useNavigate();

//   const data = [
//     {
//       number: "षष्टम सत्र",
//       name: "जुलाई-अगस्त, 2025",
//       months: [
//         {
//           month: "जुलाई",
//           dates: [
//             { day: "28", pdf: "/misc/sanshipt/s280725.pdf" },
//             { day: "29", pdf: "/misc/sanshipt/s290725.pdf" },
//             { day: "30", pdf: "/misc/sanshipt/s300725.pdf" },
//             { day: "31", pdf: "/misc/sanshipt/s310725.pdf" },
//           ],
//         },
//         {
//           month: "अगस्त",
//           dates: [
//             { day: "1", pdf: "/misc/sanshipt/s010825.pdf" },
//             { day: "4", pdf: "/misc/sanshipt/s040825.pdf" },
//             { day: "5", pdf: "/misc/sanshipt/s050825.pdf" },
//             { day: "6", pdf: "/misc/sanshipt/s060825.pdf" },
//             { day: "7" },
//             { day: "8" },
//           ],
//         },
//       ],
//     },
//   ];

//   const assemblies = [
//     { title: "षोडश विधान सभा", route: "/sankshiptvivran2016" },
//     { title: "पंचदश विधान सभा", route: "/sankshiptvivran2015" },
//     { title: "चतुर्दश विधान सभा", route: "/sankshiptvivran2014" },
//     { title: "त्रयोदश विधान सभा", route: "/sankshiptvivran2013" },
//     { title: "द्वादश विधान सभा", route: "/sankshiptvivran2012" },
//   ];

//   const styles = {
//     page: {
//       fontFamily: "'Noto Sans Devanagari', sans-serif",
//       backgroundColor: "#f3f4f6",
//       minHeight: "100vh",
//       padding: "20px",
//     },
//     header: {
//       textAlign: "center",
//       backgroundColor: "#1d4ed8",
//       color: "#fff",
//       padding: "25px 10px",
//       borderRadius: "12px",
//       marginBottom: "25px",
//       boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//       position: "relative",
//     },
//     backButton: {
//       position: "absolute",
//       left: "20px",
//       top: "20px",
//       backgroundColor: "#fff",
//       color: "#1d4ed8",
//       border: "1px solid #1d4ed8",
//       padding: "6px 14px",
//       borderRadius: "8px",
//       fontSize: "0.95rem",
//       fontWeight: 600,
//       cursor: "pointer",
//       transition: "all 0.2s ease",
//     },
//     title: {
//       fontSize: "2rem",
//       fontWeight: 700,
//     },
//     subTitle: {
//       fontSize: "1.1rem",
//       marginTop: "5px",
//       opacity: 0.9,
//     },
//     calendarFlex: {
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "center",
//       gap: "25px",
//     },
//     sessionCard: {
//       backgroundColor: "#ffffff",
//       borderRadius: "15px",
//       boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//       padding: "20px",
//       width: "340px",
//     },
//     sessionTitleLine: {
//       fontSize: "1.2rem",
//       color: "#1e3a8a",
//       fontWeight: 700,
//       textAlign: "center",
//       marginBottom: "12px",
//     },
//     monthBlock: {
//       marginBottom: "10px",
//       backgroundColor: "#f9fafb",
//       borderRadius: "10px",
//       padding: "10px",
//       border: "1px solid #e5e7eb",
//     },
//     monthTitle: {
//       fontSize: "1.1rem",
//       fontWeight: 700,
//       color: "#1e3a8a",
//       marginBottom: "8px",
//       textAlign: "center",
//     },
//     dateFlex: {
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "center",
//       gap: "8px",
//     },
//     dateLink: {
//       backgroundColor: "#eff6ff",
//       borderRadius: "6px",
//       padding: "8px 6px",
//       minWidth: "50px",
//       textAlign: "center",
//       fontWeight: 600,
//       color: "#1e40af",
//       border: "1px solid #bfdbfe",
//       transition: "all 0.2s ease",
//       textDecoration: "none",
//       lineHeight: 1.1,
//       display: "inline-block",
//     },
//     assembliesDivider: {
//       width: "100%",
//       height: "2px",
//       background: "linear-gradient(to right, transparent, #2563eb, transparent)",
//       margin: "50px 0 25px",
//     },
//     smallGrid: {
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "center",
//       gap: "10px",
//     },
//     assemblyCard: {
//       backgroundColor: "#e2e8f0",
//       borderRadius: "8px",
//       padding: "12px 18px",
//       textAlign: "center",
//       fontSize: "0.95rem",
//       fontWeight: 600,
//       color: "#1e293b",
//       textDecoration: "none",
//       boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
//       transition: "all 0.3s ease",
//     },
//   };

//   return (
//     <div style={styles.page}>
//       {/* Header */}
//       <div style={styles.header}>
//         {/* ✅ Fixed Back Button */}
//         <button
//           style={styles.backButton}
//           onClick={() => {
//             if (window.history.state && window.history.state.idx > 0) {
//               navigate(-1);
//             } else {
//               navigate("/home");
//             }
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = "#1d4ed8";
//             e.currentTarget.style.color = "#fff";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = "#fff";
//             e.currentTarget.style.color = "#1d4ed8";
//           }}
//         >
//           ← Back
//         </button>

//         <div style={styles.title}>संक्षिप्त कार्य विवरण</div>
//         <div style={styles.subTitle}>षष्टम सत्र (जुलाई-अगस्त, 2025)</div>
//       </div>

//       {/* Calendar Cards */}
//       <div style={styles.calendarFlex}>
//         {data.map((session, idx) => (
//           <div key={idx} style={styles.sessionCard}>
//             <div style={styles.sessionTitleLine}>
//               {session.number} ({session.name})
//             </div>

//             {session.months.map((m, i) => (
//               <div key={i} style={styles.monthBlock}>
//                 <div style={styles.monthTitle}>{m.month}</div>
//                 <div style={styles.dateFlex}>
//                   {m.dates.map((d, j) =>
//                     d.pdf ? (
//                       <a
//                         key={j}
//                         href={d.pdf}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={styles.dateLink}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.backgroundColor = "#2563eb";
//                           e.currentTarget.style.color = "#fff";
//                           e.currentTarget.style.transform = "scale(1.05)";
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.backgroundColor = "#eff6ff";
//                           e.currentTarget.style.color = "#1e40af";
//                           e.currentTarget.style.transform = "none";
//                         }}
//                       >
//                         {d.day}
//                       </a>
//                     ) : (
//                       <span
//                         key={j}
//                         style={{
//                           ...styles.dateLink,
//                           backgroundColor: "#f1f5f9",
//                           color: "#94a3b8",
//                           border: "1px solid #e2e8f0",
//                           cursor: "not-allowed",
//                         }}
//                       >
//                         {d.day}
//                       </span>
//                     )
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       {/* Divider + Other Assemblies */}
//       <div style={styles.assembliesDivider}></div>
//       <div style={styles.smallGrid}>
//         {assemblies.map((a, i) => (
//           <Link
//             key={i}
//             to={a.route}
//             style={styles.assemblyCard}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = "#2563eb";
//               e.currentTarget.style.color = "#fff";
//               e.currentTarget.style.transform = "translateY(-3px)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = "#e2e8f0";
//               e.currentTarget.style.color = "#1e293b";
//               e.currentTarget.style.transform = "none";
//             }}
//           >
//             {a.title}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SanksShiptKaryaVivranMain;
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SanksShiptKaryaVivranMain = () => {
  const navigate = useNavigate();

  const data = [
    {
      number: "षष्टम सत्र",
      name: "जुलाई-अगस्त, 2025",
      months: [
        {
          month: "जुलाई",
          dates: [
            { day: "28", pdf: "/misc/sanshipt/s280725.pdf" },
            { day: "29", pdf: "/misc/sanshipt/s290725.pdf" },
            { day: "30", pdf: "/misc/sanshipt/s300725.pdf" },
            { day: "31", pdf: "/misc/sanshipt/s310725.pdf" },
          ],
        },
        {
          month: "अगस्त",
          dates: [
            { day: "1", pdf: "/misc/sanshipt/s010825.pdf" },
            { day: "4", pdf: "/misc/sanshipt/s040825.pdf" },
            { day: "5", pdf: "/misc/sanshipt/s050825.pdf" },
            { day: "6", pdf: "/misc/sanshipt/s060825.pdf" },
            { day: "7" },
            { day: "8" },
          ],
        },
      ],
    },
  ];

  const assemblies = [
    { title: "षोडश विधान सभा", route: "/sankshiptvivran2016" },
    { title: "पंचदश विधान सभा", route: "/sankshiptvivran2015" },
    { title: "चतुर्दश विधानसभा", route: "/sankshiptvivran2014" },
    { title: "त्रयोदश विधानसभा", route: "/sankshiptvivran2013" },
    { title: "द्वादश विधानसभा", route: "/sankshiptvivran2012" },
  ];

  return (
    <div className="panch-page">

      {/* ================================
          HERO
      ================================= */}
      <div className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">

            <div className="panch-hero-text">
              <h1>संक्षिप्त कार्य विवरण</h1>
              <p>षष्टम सत्र (जुलाई-अगस्त, 2025)</p>
            </div>

            {/* BACK BUTTON
            <div
              className="panch-btn"
              onClick={() => {
                if (window.history.state && window.history.state.idx > 0) {
                  navigate(-1);
                } else {
                  navigate("/home");
                }
              }}
            >
              ← Back
            </div> */}

          </div>
        </div>
      </div>

      {/* ================================
          CALENDAR (UNTOUCHED)
      ================================= */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "25px"
      }}>
        {data.map((session, idx) => (
          <div key={idx} style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            padding: "20px",
            width: "340px"
          }}>

            <div style={{
              fontSize: "1.2rem",
              color: "#1e3a8a",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "12px"
            }}>
              {session.number} ({session.name})
            </div>

            {session.months.map((m, i) => (
              <div key={i} style={{
                marginBottom: "10px",
                backgroundColor: "#f9fafb",
                borderRadius: "10px",
                padding: "10px",
                border: "1px solid #e5e7eb",
              }}>

                <div style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#1e3a8a",
                  marginBottom: "8px",
                  textAlign: "center",
                }}>
                  {m.month}
                </div>

                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "8px"
                }}>
                  {m.dates.map((d, j) =>
                    d.pdf ? (
                      <a
                        key={j}
                        href={d.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: "#eff6ff",
                          borderRadius: "6px",
                          padding: "8px 6px",
                          minWidth: "50px",
                          textAlign: "center",
                          fontWeight: 600,
                          color: "#1e40af",
                          border: "1px solid #bfdbfe",
                          transition: "all 0.2s ease",
                          textDecoration: "none",
                          lineHeight: 1.1,
                          display: "inline-block",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#2563eb";
                          e.currentTarget.style.color = "#fff";
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#eff6ff";
                          e.currentTarget.style.color = "#1e40af";
                          e.currentTarget.style.transform = "none";
                        }}
                      >
                        {d.day}
                      </a>
                    ) : (
                      <span
                        key={j}
                        style={{
                          backgroundColor: "#f1f5f9",
                          color: "#94a3b8",
                          border: "1px solid #e2e8f0",
                          padding: "8px 6px",
                          minWidth: "50px",
                          textAlign: "center",
                          fontWeight: 600,
                          borderRadius: "6px",
                          cursor: "not-allowed",
                        }}
                      >
                        {d.day}
                      </span>
                    )
                  )}
                </div>
              </div>
            ))}

          </div>
        ))}
      </div>

      {/* ================================
          OTHER ASSEMBLIES — using comm-* classes
      ================================= */}
      <div className="comm-assembly-links">
        <hr className="comm-separator" />

        <div className="comm-assembly-container">
          {assemblies.map((a, i) => (
            <div
              key={i}
              className="comm-link"
              onClick={() => navigate(a.route)}
              style={{ cursor: "pointer" }}
            >
              {a.title}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SanksShiptKaryaVivranMain;
