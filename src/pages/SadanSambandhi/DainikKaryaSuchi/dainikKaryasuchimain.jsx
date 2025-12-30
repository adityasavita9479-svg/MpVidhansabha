// import React from "react";

// const DainikKaryaSuchiMain = () => {
//   const data = [
//     {
//       number: "षष्टम्",
//       name: "जुलाई-अगस्त, 2025",
//       months: [
//         {
//           month: "जुलाई",
//           dates: [
//             { day: "28", pdf: "/karyasuchi/280725.pdf" },
//             { day: "29", pdf: "/karyasuchi/290725.pdf" },
//             { day: "30", pdf: "/karyasuchi/300725.pdf" },
//             { day: "31", pdf: "/karyasuchi/310725.pdf" },
//           ],
//         },
//         {
//           month: "अगस्त",
//           dates: [
//             { day: "1", pdf: "/karyasuchi/010825.pdf" },
//             { day: "4", pdf: "/karyasuchi/040825.pdf" },
//             { day: "5", pdf: "/karyasuchi/050825.pdf" },
//             { day: "6", pdf: "/karyasuchi/060825.pdf" },
//             { day: "7"},
//             { day: "8" },
//           ],
//         },
//       ],
//     },
//   ];

//   const assemblies = [
//     { title: "षोडश विधान सभा", route: "/dainik-16" },
//     { title: "पंचदश विधान सभा", route: "/dainik-15" },
//     { title: "चतुर्दश विधान सभा", route: "/dainik-14" },
//     { title: "त्रयोदश विधान सभा", route: "/dainik-13" },
//     { title: "द्वादश विधान सभा", route: "/dainik-12" },
//     { title: "एकादश विधान सभा", route: "/dainik-11" },
//     { title: "दशम् विधान सभा", route: "/dainik-10" },
//     { title: "नवम् विधान सभा", route: "/dainik-9" },
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
//         <div style={styles.title}>दैनिक कार्य सूची</div>
//         <div style={styles.subTitle}>षोडश विधान सभा (2023 से ...)</div>
//       </div>

//       {/* Session Cards */}
//       <div style={styles.calendarFlex}>
//         {data.map((session, idx) => (
//           <div key={idx} style={styles.sessionCard}>
//             <div style={styles.sessionHeader}>
//               {session.number} सत्र — {session.name}
//             </div>

//             {session.months.map((m, i) => (
//               <div key={i} style={styles.monthBlock}>
//                 <div style={styles.monthTitle}>{m.month}</div>
//                 <div style={styles.dateFlex}>
//                   {m.dates.map((d, j) => (
//                     <a
//                       key={j}
//                       href={d.pdf}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={styles.dateLink}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.backgroundColor = "#2563eb";
//                         e.currentTarget.style.color = "#fff";
//                         e.currentTarget.style.transform = "scale(1.05)";
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.backgroundColor = "#eff6ff";
//                         e.currentTarget.style.color = "#1e40af";
//                         e.currentTarget.style.transform = "none";
//                       }}
//                     >
//                       {d.day}
//                     </a>
//                   ))}
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

// export default DainikKaryaSuchiMain;
import React from "react";

const DainikKaryaSuchiMain = () => {
  const data = [
    {
      number: "षष्टम्",
      name: "जुलाई-अगस्त, 2025",
      months: [
        {
          month: "जुलाई",
          dates: [
            { day: "28", pdf: "../misc/karyasuchi/280725.pdf" },
           
            { day: "29", pdf: "../misc/karyasuchi/290725.pdf" },
            { day: "30", pdf: "../misc/karyasuchi/300725.pdf" },
            { day: "31", pdf: "../misc/karyasuchi/310725.pdf" },
          ],
        },
        {
          month: "अगस्त",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010825.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040825.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050825.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/060825.pdf" },
            { day: "7" },
            { day: "8" },
          ],
        },
      ],
    },
  ];

  const assemblies = [
    { title: "षोडश विधान सभा", route: "/dainik-16" },
    { title: "पंचदश विधान सभा", route: "/dainik-15" },
    { title: "चतुर्दश विधान सभा", route: "/dainik-14" },
    { title: "त्रयोदश विधान सभा", route: "/dainik-13" },
    { title: "द्वादश विधान सभा", route: "/dainik-12" },
    { title: "एकादश विधान सभा", route: "/dainik-11" },
    { title: "दशम् विधान सभा", route: "/dainik-10" },
    { title: "नवम् विधान सभा", route: "/dainik-9" },
  ];

  return (
    <div className="panch-page">

      {/* ================================  
          HERO SECTION (overlay applied)
      ================================= */}
      <div className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">
            
            <div className="panch-hero-text">
              <h1>दैनिक कार्य सूची</h1>
              <p>षोडश विधान सभा (2023 से ...)</p>
            </div>

          </div>
        </div>
      </div>

      {/* ================================  
          CALENDAR (unchanged)
      ================================= */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "25px",
      }}>
        {data.map((session, idx) => (
          <div key={idx} style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            padding: "20px",
            width: "340px",
          }}>
            
            <div style={{
              backgroundColor: "#3b82f6",
              color: "#ffffff",
              borderRadius: "10px",
              padding: "10px 15px",
              fontWeight: 700,
              marginBottom: "15px",
              textAlign: "center",
            }}>
              {session.number} सत्र — {session.name}
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
                  gap: "8px",
                }}>
                  {m.dates.map((d, j) => (
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
                  ))}
                </div>
              </div>
            ))}

          </div>
        ))}
      </div>

      {/* Assemblies list (unchanged) */}
      <div className="comm-assembly-links">
        <hr className="comm-separator" />
        <div className="comm-assembly-container">
          {assemblies.map((a, i) => (
            <a key={i} href={a.route} className="comm-link">
              {a.title}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DainikKaryaSuchiMain;
