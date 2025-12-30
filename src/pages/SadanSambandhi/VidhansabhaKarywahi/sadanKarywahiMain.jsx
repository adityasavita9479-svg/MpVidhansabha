
// import React from "react";

// const sessionData = [
//   {
//     section: "कार्यवाही",
//     months: {
//       "जुलाई": [
//         { day: 28, pdf: "/misc/house proceedings/hp280725.pdf", html: "/misc/house proceedings/hp280725.htm" },
//         { day: 29, pdf: "/misc/house proceedings/hp290725.pdf", html: "/misc/house proceedings/hp290725.htm" },
//         { day: 30, pdf: "/misc/house proceedings/hp300725.pdf", html: "/misc/house proceedings/hp300725.htm" },
//         { day: 31, pdf: "/misc/house proceedings/hp310725.pdf", html: "/misc/house proceedings/hp310725.htm" },
//       ],
//       "अगस्त": [
//         { day: 1, pdf: "/misc/house proceedings/hp010825.pdf", html: "/misc/house proceedings/hp010825.htm" },
//         { day: 4, pdf: "/misc/house proceedings/hp040825.pdf", html: "/misc/house proceedings/hp040825.htm" },
//         { day: 5, pdf: "/misc/house proceedings/hp050825.pdf", html: "/misc/house proceedings/hp050825.htm" },
//         { day: 6, pdf: "/misc/house proceedings/hp060825.pdf", html: "/misc/house proceedings/hp060825.htm" },
//         { day: 7,  },
//         { day: 8,  },
//       ],
//     },
//   },

//   {
//     section: "प्रश्नोत्तरी",
//     months: {
//       "जुलाई": [
//         { day: 28, pdf: "/misc/house proceedings/ques280725.pdf", html: "/misc/house proceedings/ques280725.htm" },
//         { day: 29, pdf: "/misc/house proceedings/ques290725.pdf", html: "/misc/house proceedings/ques290725.htm" },
//         { day: 30, pdf: "/misc/house proceedings/ques300725.pdf", html: "/misc/house proceedings/ques300725.htm" },
//         { day: 31, pdf: "/misc/house proceedings/ques310725.pdf", html: "/misc/house proceedings/ques310725.htm" },
//       ],
//       "अगस्त": [
//         { day: 1, pdf: "/misc/house proceedings/ques010825.pdf", html: "/misc/house proceedings/ques010825.htm" },
//         { day: 4, pdf: "/misc/house proceedings/ques040825.pdf", html: "/misc/house proceedings/ques040825.htm" },
//         { day: 5, pdf: "/misc/house proceedings/ques050825.pdf", html: "/misc/house proceedings/ques050825.htm" },
//         { day: 6, pdf: "/misc/house proceedings/ques060825.pdf", html: "/misc/house proceedings/ques060825.htm" },
//         { day: 7, },
//         { day: 8,},
//       ],
//     },
//   },

//   {
//     section: "शुद्धि पत्र",
//     months: {
//       "जुलाई": [
//         { day: 28, pdf: "/misc/house proceedings/sp280725.pdf"},
//         { day: 29, pdf: "/misc/house proceedings/sp290725.pdf"},
//         { day: 30, pdf: "/misc/house proceedings/sp300725.pdf" },
//         { day: 31, pdf: "/misc/house proceedings/sp310725.pdf" },
//       ],
//       "अगस्त": [
//         { day: 1, pdf: "/misc/house proceedings/sp010825.pdf" },
//         { day: 4, pdf: "/misc/house proceedings/sp040825.pdf" },
//         { day: 5, pdf: "/misc/house proceedings/sp050825.pdf" },
//         { day: 6, pdf: "/misc/house proceedings/sp060825.pdf" },
//         { day: 7,  },
//         { day: 8,},
//       ],
//     },
//   },

//   {
//     section: "तारांकित प्रश्न",
//     months: {
//       "जुलाई": [
//         { day: 28, pdf: "/misc/house proceedings/star280725.pdf", html: "/html/tarankit/july28.html" },
//         { day: 29, pdf: "/misc/house proceedings/star290725.pdf", html: "/html/tarankit/july29.html" },
//         { day: 30, pdf: "/misc/house proceedings/star300725.pdf", html: "/html/tarankit/july30.html" },
//         { day: 31, pdf: "/misc/house proceedings/star310725.pdf", html: "/html/tarankit/july31.html" },
//       ],
//       "अगस्त": [
//         { day: 1, pdf: "/misc/house proceedings/star280725.pdf",  },
//         { day: 4, pdf: "/misc/house proceedings/star040825.pdf", },
//         { day: 5, pdf: "/misc/house proceedings/star050825.pdf",  },
//         { day: 6, pdf: "/misc/house proceedings/star060825.pdf",  },
//         { day: 7,  },
//         { day: 8, },
//       ],
//     },
//   },
// ];

// const assemblies = [
//   { title: "षोडश विधान सभा", route: "/sadankarywahi2016" },
//   { title: "पंचदश विधान सभा", route: "/sadankarywahi2015" },
//   { title: "चतुर्दश विधान सभा", route: "/sadankarywahi2014" },
// ];

// const SadanKaryavahiMain = () => {
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
//     },
//     headerTitle: {
//       fontSize: "2rem",
//       fontWeight: 700,
//     },
//     headerSubtitle: {
//       fontSize: "1.1rem",
//       marginTop: "5px",
//       opacity: 0.9,
//     },
//     calendarGrid: {
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "center",
//       gap: "20px",
//     },
//     sessionCard: {
//       backgroundColor: "#ffffff",
//       borderRadius: "15px",
//       boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//       padding: "20px",
//       width: "320px",
//     },
//     sessionHeader: {
//       backgroundColor: "#3b82f6",
//       color: "#ffffff",
//       borderRadius: "10px",
//       padding: "10px 15px",
//       fontWeight: 700,
//       marginBottom: "15px",
//       textAlign: "center",
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
//     dateGrid: {
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "6px",
//       justifyContent: "center",
//     },
//     dateCell: {
//       backgroundColor: "#eff6ff",
//       borderRadius: "6px",
//       padding: "6px 8px",
//       textAlign: "center",
//       fontWeight: 600,
//       color: "#1e40af",
//       border: "1px solid #bfdbfe",
//       lineHeight: 1.1,
//       minWidth: "45px",
//     },
//     linkBtn: {
//       backgroundColor: "#1e40af",
//       color: "#fff",
//       padding: "2px 6px",
//       fontSize: "0.75rem",
//       borderRadius: "4px",
//       textDecoration: "none",
//       border: "1px solid #1e3a8a",
//       transition: "0.2s",
//     },
//     footerDivider: {
//       width: "100%",
//       height: "2px",
//       background: "linear-gradient(to right, transparent, #2563eb, transparent)",
//       margin: "50px 0 25px",
//     },
//     footerGrid: {
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
//       textDecoration: "none",
//       color: "#1e293b",
//       boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
//       transition: "all 0.3s ease",
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.header}>
//         <div style={styles.headerTitle}>सदन की कार्यवाही</div>
//         <div style={styles.headerSubtitle}>षोडश (16वीं) विधान सभा</div>
//       </div>

//       <div
//         style={{
//           textAlign: "center",
//           fontSize: "1.3rem",
//           fontWeight: 600,
//           marginBottom: "20px",
//           color: "#1e40af",
//         }}
//       >
//         षष्टम सत्र (जुलाई-अगस्त, 2025)
//       </div>

//       <div style={styles.calendarGrid}>
//         {sessionData.map((session, idx) => (
//           <div key={idx} style={styles.sessionCard}>
//             <div style={styles.sessionHeader}>{session.section}</div>

//             {Object.entries(session.months).map(([month, days], i) => (
//               <div key={i} style={styles.monthBlock}>
//                 <div style={styles.monthTitle}>{month}</div>

//                 <div style={styles.dateGrid}>
//                   {days.map(({ day, pdf, html }, j) => (
//                     <div key={j} style={{ textAlign: "center" }}>
//                       <div style={styles.dateCell}>{day}</div>

//                       <div
//                         style={{
//                           marginTop: "4px",
//                           display: "flex",
//                           gap: "4px",
//                           justifyContent: "center",
//                         }}
//                       >
//                         {html ? (
//                           <a
//                             href={html}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             style={styles.linkBtn}
//                           >
//                             HTML
//                           </a>
//                         ) : (
//                           <span style={{ fontSize: "0.7rem", opacity: 0.5 }}>—</span>
//                         )}

//                         {pdf ? (
//                           <a
//                             href={pdf}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             style={styles.linkBtn}
//                           >
//                             PDF
//                           </a>
//                         ) : (
//                           <span style={{ fontSize: "0.7rem", opacity: 0.5 }}>—</span>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       <div style={styles.footerDivider}></div>

//       <div style={styles.footerGrid}>
//         {assemblies.map((a, i) => (
//           <a
//             key={i}
//             href={a.route}
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
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SadanKaryavahiMain;
import React from "react";


const sessionData = [
  {
    section: "कार्यवाही",
    months: {
      "जुलाई": [
        { day: 28, pdf: "/misc/house proceedings/hp280725.pdf", html: "/misc/house proceedings/hp280725.htm" },
        { day: 29, pdf: "/misc/house proceedings/hp290725.pdf", html: "/misc/house proceedings/hp290725.htm" },
        { day: 30, pdf: "/misc/house proceedings/hp300725.pdf", html: "/misc/house proceedings/hp300725.htm" },
        { day: 31, pdf: "/misc/house proceedings/hp310725.pdf", html: "/misc/house proceedings/hp310725.htm" },
      ],
      "अगस्त": [
        { day: 1, pdf: "/misc/house proceedings/hp010825.pdf", html: "/misc/house proceedings/hp010825.htm" },
        { day: 4, pdf: "/misc/house proceedings/hp040825.pdf", html: "/misc/house proceedings/hp040825.htm" },
        { day: 5, pdf: "/misc/house proceedings/hp050825.pdf", html: "/misc/house proceedings/hp050825.htm" },
        { day: 6, pdf: "/misc/house proceedings/hp060825.pdf", html: "/misc/house proceedings/hp060825.htm" },
        { day: 7 },
        { day: 8 },
      ],
    },
  },

  {
    section: "प्रश्नोत्तरी",
    months: {
      "जुलाई": [
        { day: 28, pdf: "/misc/house proceedings/ques280725.pdf", html: "/misc/house proceedings/ques280725.htm" },
        { day: 29, pdf: "/misc/house proceedings/ques290725.pdf", html: "/misc/house proceedings/ques290725.htm" },
        { day: 30, pdf: "/misc/house proceedings/ques300725.pdf", html: "/misc/house proceedings/ques300725.htm" },
        { day: 31, pdf: "/misc/house proceedings/ques310725.pdf", html: "/misc/house proceedings/ques310725.htm" },
      ],
      "अगस्त": [
        { day: 1, pdf: "/misc/house proceedings/ques010825.pdf", html: "/misc/house proceedings/ques010825.htm" },
        { day: 4, pdf: "/misc/house proceedings/ques040825.pdf", html: "/misc/house proceedings/ques040825.htm" },
        { day: 5, pdf: "/misc/house proceedings/ques050825.pdf", html: "/misc/house proceedings/ques050825.htm" },
        { day: 6, pdf: "/misc/house proceedings/ques060825.pdf", html: "/misc/house proceedings/ques060825.htm" },
        { day: 7 },
        { day: 8 },
      ],
    },
  },

  {
    section: "शुद्धि पत्र",
    months: {
      "जुलाई": [
        { day: 28, pdf: "/misc/house proceedings/sp280725.pdf" },
        { day: 29, pdf: "/misc/house proceedings/sp290725.pdf" },
        { day: 30, pdf: "/misc/house proceedings/sp300725.pdf" },
        { day: 31, pdf: "/misc/house proceedings/sp310725.pdf" },
      ],
      "अगस्त": [
        { day: 1, pdf: "/misc/house proceedings/sp010825.pdf" },
        { day: 4, pdf: "/misc/house proceedings/sp040825.pdf" },
        { day: 5, pdf: "/misc/house proceedings/sp050825.pdf" },
        { day: 6, pdf: "/misc/house proceedings/sp060825.pdf" },
        { day: 7 },
        { day: 8 },
      ],
    },
  },

  {
    section: "तारांकित प्रश्न",
    months: {
      "जुलाई": [
        { day: 28, pdf: "/misc/house proceedings/star280725.pdf", html: "/html/tarankit/july28.html" },
        { day: 29, pdf: "/misc/house proceedings/star290725.pdf", html: "/html/tarankit/july29.html" },
        { day: 30, pdf: "/misc/house proceedings/star300725.pdf", html: "/html/tarankit/july30.html" },
        { day: 31, pdf: "/misc/house proceedings/star310725.pdf", html: "/html/tarankit/july31.html" },
      ],
      "अगस्त": [
        { day: 1, pdf: "/misc/house proceedings/star280725.pdf" },
        { day: 4, pdf: "/misc/house proceedings/star040825.pdf" },
        { day: 5, pdf: "/misc/house proceedings/star050825.pdf" },
        { day: 6, pdf: "/misc/house proceedings/star060825.pdf" },
        { day: 7 },
        { day: 8 },
      ],
    },
  },
];

const assemblies = [
  { title: "षोडश विधान सभा", route: "/sadankarywahi2016" },
  { title: "पंचदश विधान सभा", route: "/sadankarywahi2015" },
  { title: "चतुर्दश विधान सभा", route: "/sadankarywahi2014" },
];

const SadanKaryavahiMain = () => {
  return (
    <div className="panch-page">

      {/* ============================
          HERO SECTION (overlay based)
      ============================= */}
      <div className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">

            <div className="panch-hero-text">
              <h1>सदन की कार्यवाही</h1>
              <p>षष्टम सत्र (जुलाई-अगस्त, 2025)</p>
            </div>

          </div>
        </div>
      </div>

      {/* ============================
          SESSION CARDS (unchanged)
      ============================= */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        {sessionData.map((session, idx) => (
          <div key={idx} style={{
            backgroundColor: "#fff",
            borderRadius: "15px",
            padding: "20px",
            width: "320px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}>
            <div style={{
              backgroundColor: "#3b82f6",
              color: "#fff",
              padding: "10px",
              borderRadius: "10px",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "15px",
            }}>
              {session.section}
            </div>

            {Object.entries(session.months).map(([month, days], i) => (
              <div key={i} style={{
                backgroundColor: "#f9fafb",
                borderRadius: "10px",
                padding: "10px",
                border: "1px solid #e5e7eb",
                marginBottom: "10px",
              }}>

                <div style={{
                  color: "#1e3a8a",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  marginBottom: "6px",
                  textAlign: "center",
                }}>
                  {month}
                </div>

                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "6px",
                }}>
                  {days.map(({ day, pdf, html }, j) => (
                    <div key={j} style={{ textAlign: "center" }}>
                      <div style={{
                        padding: "6px 8px",
                        minWidth: "45px",
                        backgroundColor: "#eff6ff",
                        color: "#1e40af",
                        borderRadius: "6px",
                        fontWeight: 600,
                        border: "1px solid #bfdbfe",
                      }}>
                        {day}
                      </div>

                      <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "4px",
                        marginTop: "4px",
                      }}>
                        {html ? (
                          <a href={html} target="_blank" rel="noopener noreferrer" className="date-link">HTML</a>
                        ) : (
                          <span className="date-missing">—</span>
                        )}

                        {pdf ? (
                          <a href={pdf} target="_blank" rel="noopener noreferrer" className="date-link">PDF</a>
                        ) : (
                          <span className="date-missing">—</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ============================
          ASSEMBLY LINKS
      ============================= */}
      <div className="comm-assembly-links">
        <hr className="comm-separator" />

        <div className="comm-assembly-container">
          {assemblies.map((a, i) => (
            <div
              key={i}
              className="comm-link"
              onClick={() => (window.location.href = a.route)}
            >
              {a.title}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SadanKaryavahiMain;
