// import React from "react";
// import { useNavigate } from "react-router-dom";

// const DainikKaryasuchi16 = () => {
//   const navigate = useNavigate();
  

//   const data = [
//   {
//     number: "षष्टम्",
//     name: "जुलाई-अगस्त, 2025",
//     months: [
//       {
//         month: "जुलाई",
//         dates: [
//           { day: "28", pdf: "/misc/karyasuchi/280725.pdf" },
//           { day: "29", pdf: "/misc/karyasuchi/290725.pdf" },
//           { day: "30", pdf: "/misc/karyasuchi/300725.pdf" },
//           { day: "31", pdf: "/misc/karyasuchi/310725.pdf" },
//         ],
//       },
//       {
//         month: "अगस्त",
//         dates: [
//           { day: "1", pdf: "/misc/karyasuchi/010825.pdf" },
//           { day: "4", pdf: "/misc/karyasuchi/040825.pdf" },
//           { day: "5", pdf: "/misc/karyasuchi/050825.pdf" },
//           { day: "6", pdf: "/misc/karyasuchi/060825.pdf" },
//           { day: "7"},
//           { day: "8" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "पंचम",
//     name: "मार्च, 2025",
//     months: [
//       {
//         month: "मार्च",
//         dates: [
//           { day: "10", pdf: "/misc/karyasuchi/100325.pdf" },
//           { day: "11", pdf: "/misc/karyasuchi/110325.pdf" },
//           { day: "12", pdf: "/misc/karyasuchi/120325.pdf" },
//           { day: "13", pdf: "/misc/karyasuchi/130325.pdf" },
//           { day: "17", pdf: "/misc/karyasuchi/170325.pdf" },
//           { day: "18", pdf: "/misc/karyasuchi/180325.pdf" },
//           { day: "20", pdf: "/misc/karyasuchi/200325.pdf" },
//           { day: "21"},
//           { day: "24", pdf: "/misc/karyasuchi/240325.pdf" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "चतुर्थ",
//     name: "दिसम्बर, 2024",
//     months: [
//       {
//         month: "दिसम्बर",
//         dates: [
//           { day: "16", pdf: "/misc/karyasuchi/161224.pdf" },
//           { day: "17", pdf: "/misc/karyasuchi/171224.pdf" },
//           { day: "18", pdf: "/misc/karyasuchi/181224.pdf" },
//           { day: "19", pdf: "/misc/karyasuchi/191224.pdf" },
//           { day: "20", pdf: "/misc/karyasuchi/201224.pdf" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "तृतीय",
//     name: "जुलाई, 2024",
//     months: [
//       {
//         month: "जुलाई",
//         dates: [
//           { day: "1", pdf: "/misc/karyasuchi/010724.pdf" },
//           { day: "2", pdf: "/misc/karyasuchi/020724.pdf" },
//           { day: "3", pdf: "/misc/karyasuchi/030724.pdf" },
//           { day: "4", pdf: "/misc/karyasuchi/040724.pdf" },
//           { day: "5", pdf: "/misc/karyasuchi/050724.pdf" },
//           { day: "8"},
//           { day: "9"},
//           { day: "10" },
//           { day: "11" },
//           { day: "12" },
//           { day: "15" },
//           { day: "16" },
//           { day: "18" },
//           { day: "19" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "द्वितीय",
//     name: "फरवरी, 2024",
//     months: [
//       {
//         month: "फरवरी",
//         dates: [
//           { day: "7", pdf: "/misc/karyasuchi/070224.pdf" },
//           { day: "8", pdf: "/misc/karyasuchi/080224.pdf" },
//           { day: "9", pdf: "/misc/karyasuchi/090224.pdf" },
//           { day: "12", pdf: "/misc/karyasuchi/120224.pdf" },
//           { day: "13", pdf: "/misc/karyasuchi/130224.pdf" },
//           { day: "14", pdf: "/misc/karyasuchi/140224.pdf" },
//           { day: "15" },
//           { day: "16" },
//           { day: "19" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "प्रथम",
//     name: "दिसम्बर, 2023",
//     months: [
//       {
//         month: "दिसम्बर",
//         dates: [
//           { day: "18", pdf: "/misc/karyasuchi/181223.pdf" },
//           { day: "19", pdf: "/misc/karyasuchi/191223.pdf" },
//           { day: "20", pdf: "/misc/karyasuchi/201223.pdf" },
//           { day: "21", pdf: "/misc/karyasuchi/211223.pdf" },
//         ],
//       },
//     ],
//   },
// ];


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
//       top: "50%",
//       transform: "translateY(-50%)",
//       backgroundColor: "#ffffff",
//       color: "#1d4ed8",
//       border: "none",
//       padding: "8px 16px",
//       borderRadius: "8px",
//       fontWeight: 600,
//       cursor: "pointer",
//       textDecoration: "none",
//       boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
//       transition: "all 0.2s ease",
//     },
//     title: { fontSize: "2rem", fontWeight: 700 },
//     subTitle: { fontSize: "1.1rem", marginTop: "5px", opacity: 0.9 },
//     calendarGrid: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" },
//     sessionCard: { backgroundColor: "#ffffff", borderRadius: "15px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", padding: "20px", transition: "transform 0.2s ease, box-shadow 0.2s ease", width: "320px" },
//     sessionHeader: { backgroundColor: "#3b82f6", color: "#ffffff", borderRadius: "10px", padding: "10px 15px", fontWeight: 700, marginBottom: "15px", textAlign: "center" },
//     monthBlock: { marginBottom: "10px", backgroundColor: "#f9fafb", borderRadius: "10px", padding: "10px", border: "1px solid #e5e7eb" },
//     monthTitle: { fontSize: "1.1rem", fontWeight: 700, color: "#1e3a8a", marginBottom: "8px", textAlign: "center" },
//     dateGrid: { display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" },
//     dateCell: { backgroundColor: "#eff6ff", borderRadius: "6px", padding: "6px 8px", textAlign: "center", fontWeight: 600, color: "#1e40af", border: "1px solid #bfdbfe", transition: "all 0.2s ease", cursor: "pointer", lineHeight: 1.1, minWidth: "45px", textDecoration: "none" },
//   };

//   return (
//     <div style={styles.page}>
//       {/* Header with Back Button */}
//       <div style={styles.header}>
//         <button
//           style={styles.backButton}
//           onClick={() => navigate(-1)}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = "#1d4ed8";
//             e.currentTarget.style.color = "#fff";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = "#fff";
//             e.currentTarget.style.color = "#1d4ed8";
//           }}
//         >
//           ← वापस जाएं
//         </button>

//         <div style={styles.title}>दैनिक कार्य सूची</div>
//         <div style={styles.subTitle}>षोडश (16वीं) विधान सभा (2023 से ...)</div>
//       </div>

//       {/* Calendar Cards */}
//       <div style={styles.calendarGrid}>
//         {data.map((session, idx) => (
//           <div key={idx} style={styles.sessionCard}>
//             <div style={styles.sessionHeader}>
//               {session.number} सत्र — {session.name}
//             </div>

//             {session.months.map((m, i) => (
//               <div key={i} style={styles.monthBlock}>
//                 <div style={styles.monthTitle}>{m.month}</div>
//                 <div style={styles.dateGrid}>
//                   {m.dates.map((d, j) =>
//                     d.pdf ? (
//                       <a
//                         key={j}
//                         href={d.pdf}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={styles.dateCell}
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
//                       <div key={j} style={styles.dateCell}>
//                         {d.day}
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DainikKaryasuchi16;
import React from "react";
import { useNavigate } from "react-router-dom";

const DainikKaryasuchi16 = () => {
  const navigate = useNavigate();

  const data = [
    {
      number: "षष्टम्",
      name: "जुलाई-अगस्त, 2025",
      months: [
        {
          month: "जुलाई",
          dates: [
            { day: "28", pdf: "/misc/karyasuchi/280725.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/290725.pdf" },
            { day: "30", pdf: "/misc/karyasuchi/300725.pdf" },
            { day: "31", pdf: "/misc/karyasuchi/310725.pdf" },
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
    {
      number: "पंचम",
      name: "मार्च, 2025",
      months: [
        {
          month: "मार्च",
          dates: [
            { day: "10", pdf: "/misc/karyasuchi/100325.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110325.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120325.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130325.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170325.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180325.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200325.pdf" },
            { day: "21" },
            { day: "24", pdf: "/misc/karyasuchi/240325.pdf" },
          ],
        },
      ],
    },
    {
      number: "चतुर्थ",
      name: "दिसम्बर, 2024",
      months: [
        {
          month: "दिसम्बर",
          dates: [
            { day: "16", pdf: "/misc/karyasuchi/161224.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/171224.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/181224.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/191224.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/201224.pdf" },
          ],
        },
      ],
    },
    {
      number: "तृतीय",
      name: "जुलाई, 2024",
      months: [
        {
          month: "जुलाई",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010724.pdf" },
            { day: "2", pdf: "/misc/karyasuchi/020724.pdf" },
            { day: "3", pdf: "/misc/karyasuchi/030724.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040724.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050724.pdf" },
            { day: "8" },
            { day: "9" },
            { day: "10" },
            { day: "11" },
            { day: "12" },
            { day: "15" },
            { day: "16" },
            { day: "18" },
            { day: "19" },
          ],
        },
      ],
    },
    {
      number: "द्वितीय",
      name: "फरवरी, 2024",
      months: [
        {
          month: "फरवरी",
          dates: [
            { day: "7", pdf: "/misc/karyasuchi/070224.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080224.pdf" },
            { day: "9", pdf: "/misc/karyasuchi/090224.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120224.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130224.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140224.pdf" },
            { day: "15" },
            { day: "16" },
            { day: "19" },
          ],
        },
      ],
    },
    {
      number: "प्रथम",
      name: "दिसम्बर, 2023",
      months: [
        {
          month: "दिसम्बर",
          dates: [
            { day: "18", pdf: "/misc/karyasuchi/181223.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/191223.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/201223.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/211223.pdf" },
          ],
        },
      ],
    },
  ];

  const styles = {
    page: {
      fontFamily: "'Noto Sans Devanagari', sans-serif",
      backgroundColor: "#f3f4f6",
      minHeight: "100vh",
    },
    calendarGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px",
    },
    sessionCard: {
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      padding: "20px",
      width: "320px",
    },
    sessionHeader: {
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      borderRadius: "10px",
      padding: "10px 15px",
      fontWeight: 700,
      marginBottom: "15px",
      textAlign: "center",
    },
    monthBlock: {
      marginBottom: "10px",
      backgroundColor: "#f9fafb",
      borderRadius: "10px",
      padding: "10px",
      border: "1px solid #e5e7eb",
    },
    monthTitle: {
      fontSize: "1.1rem",
      fontWeight: 700,
      color: "#1e3a8a",
      marginBottom: "8px",
      textAlign: "center",
    },
    dateGrid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px",
      justifyContent: "center",
    },
    dateCell: {
      backgroundColor: "#eff6ff",
      borderRadius: "6px",
      padding: "6px 8px",
      textAlign: "center",
      fontWeight: 600,
      color: "#1e40af",
      border: "1px solid #bfdbfe",
      transition: "all 0.2s ease",
      cursor: "pointer",
      lineHeight: 1.1,
      minWidth: "45px",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.page}>
      
      {/* ⭐ NEW HERO SECTION (Same as your working one) */}
      <div className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">

            <button
              className="panch-btn"
              onClick={() => {
                if (window.history.state && window.history.state.idx > 0) {
                  navigate(-1);
                } else {
                  navigate("/dainik");
                }
              }}
            >
              पीछे जाये
            </button>

            <div className="panch-hero-text">
              <h1>दैनिक कार्य सूची</h1>
              <p>षोडश (16वीं) विधान सभा (2023 से ...)</p>
            </div>

          </div>
        </div>
      </div>

      {/* ⭐ CALENDAR (unchanged as requested) */}
      <div style={styles.calendarGrid}>
        {data.map((session, idx) => (
          <div key={idx} style={styles.sessionCard}>
            <div style={styles.sessionHeader}>
              {session.number} सत्र — {session.name}
            </div>

            {session.months.map((m, i) => (
              <div key={i} style={styles.monthBlock}>
                <div style={styles.monthTitle}>{m.month}</div>

                <div style={styles.dateGrid}>
                  {m.dates.map((d, j) =>
                    d.pdf ? (
                      <a
                        key={j}
                        href={d.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.dateCell}
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
                      <div key={j} style={styles.dateCell}>
                        {d.day}
                      </div>
                    )
                  )}
                </div>

              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DainikKaryasuchi16;
