// import React from "react";

// // Sample data with PDF links
// const sessions = [
//     // 16th
//   { assembly: "षोडश (2023–)", session: "March 2025", date: "12th March, 2025", minister: "Shri Jagdish Devda", image: "/leaders/jagdishdeoda.jpg", pdf: "/misc/budget2025.pdf" },
//   { assembly: "षोडश (2023–)", session: "July 2024", date: "03rd July, 2024", minister: "Shri Jagdish Devda", image: "/images/jagdish_devda.jpg", pdf: "/misc/budget2024.pdf" },
// //   15th
//   { assembly: "पंचदश (2018–2023)", session: "मार्च, 2023", date: "01 मार्च, 2023", minister: "Shri Jagdish Devda", image: "/leaders/jagdishdeoda.jpg", pdf: "/misc/budget2023.pdf" },
//   { assembly: "पंचदश (2018–2023)", session: "मार्च, 2022", date: "09 मार्च, 2022", minister: "Shri Jagdish Devda", image: "/images/jagdish_devda.jpg", pdf: "/misc/budget2022.pdf" },
//   { assembly: "पंचदश (2018–2023)", session: "फरवरी-मार्च, 2021", date: "02 मार्च, 2021", minister: "Shri Jagdish Devda", image: "/images/jagdish_devda.jpg", pdf: "/misc/budget2021.pdf" },
//   { assembly: "पंचदश (2018–2023)", session: "जुलाई, 2019", date: "10 जुलाई, 2019", minister: "Shri Tarun Bhanot", image: "/leaders/tarunbahot.jpg", pdf: "/misc/budget2019.pdf" },
// //   14th
//   { assembly: "चतुर्दश (2013–2018)", session: "February-March 2018", date: "28th February, 2018", minister: "Shri Jayant Malaiya", image: "/leaders/jayantmaileya.jpg", pdf: "/misc/budget2018.pdf" },
//   { assembly: "चतुर्दश (2013–2018)", session: "फरवरी-मार्च, 2017", date: "01 मार्च, 2017", minister: "Shri Jayant Malaiya", image: "/images/jayant_malaiya.jpg", pdf: "/misc/budget2017.pdf" },
//   { assembly: "चतुर्दश (2013–2018)", session: "फरवरी-मार्च, 2016", date: "26 फरवरी, 2016", minister: "Shri Jayant Malaiya", image: "/images/jayant_malaiya.jpg", pdf: "/misc/budget2016.pdf" },
//   { assembly: "चतुर्दश (2013–2018)", session: "फरवरी-मार्च, 2015", date: "25 फरवरी, 2015", minister: "Shri Jayant Malaiya", image: "/images/jayant_malaiya.jpg", pdf: "/misc/budget2015.pdf" },
//   { assembly: "चतुर्दश (2013–2018)", session: "जून-जुलाई, 2014", date: "01 जुलाई, 2014", minister: "Shri Jayant Malaiya", image: "/images/jayant_malaiya.jpg", pdf: "/misc/budget2014.pdf" },

// // 13th
//   { assembly: "त्रयोदश (2008–2013)", session: "फरवरी-मार्च, 2013", date: "22 फरवरी, 2013", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/budget2013.pdf" },
//   { assembly: "त्रयोदश (2008–2013)", session: "फरवरी-अप्रैल,2012", date: "28 फरवरी, 2012", minister: "Shri Raghavji", image: "/images/raghavji.jpg", pdf: "/misc/budget2012.pdf" },
//   { assembly: "त्रयोदश (2008–2013)", session: "फरवरी-अप्रैल,2011", date: "24 फरवरी, 2011", minister: "Shri Raghavji", image: "/images/raghavji.jpg", pdf: "/misc/budget2011.pdf" },
//   { assembly: "त्रयोदश (2008–2013)", session: "फरवरी-मार्च,2010", date: "25 फरवरी, 2010", minister: "Shri Raghavji", image: "/images/raghavji.jpg", pdf: "/misc/budget2010.pdf" },
//   { assembly: "त्रयोदश (2008–2013)", session: "जुलाई-अगस्त,2009", date: "10 जुलाई, 2009", minister: "Shri Raghavji", image: "/images/raghavji.jpg", pdf: "/misc/budget2009.pdf" },
// // 12th
//   { assembly: "द्वादश (2003–2008)", session: "फरवरी- मार्च 2008", date: "27 फरवरी, 2008", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/Budget2008.pdf" },
//   { assembly: "द्वादश (2003–2008)", session: "फरवरी- मार्च 2007", date: "26 फरवरी, 2007", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/Budget2007.pdf" },
//   { assembly: "द्वादश (2003–2008)", session: "फरवरी- मार्च 2006", date: "21 फरवरी, 2006", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/Budget2006.pdf" },
//   { assembly: "द्वादश (2003–2008)", session: "फरवरी-मार्च 2005", date: "18 फरवरी, 2005", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/budget2005.pdf" },
//   { assembly: "द्वादश (2003–2008)", session: "जून-जुलाई 2004 - Part 1", date: "12 जुलाई, 2004", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/Budget2004.pdf" },
//   { assembly: "द्वादश (2003–2008)", session: "जून-जुलाई 2004 - Part 2", date: "12 जुलाई, 2004", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/Budget2004-2.pdf" },

// // 11th
//   { assembly: "एकादश (1998–2003)", session: "फरवरी-मार्च 2003-Part 1", date: "24th February, 2003", minister: "Shri Ajay Narayan Musharan", image: "/leaders/ajaynaranmushran.jpg", pdf: "/misc/Budget2003.pdf" },
//   { assembly: "एकादश (1998–2003)", session: "फरवरी-मार्च 2003-Part 2", date: "24th February, 2003", minister: "Shri Ajay Narayan Musharan", image: "/images/ajay_musharan.jpg", pdf: "/misc/Budget2003-2.pdf" },

// ];

// const groupedByAssembly = sessions.reduce((acc, curr) => {
//   if (!acc[curr.assembly]) acc[curr.assembly] = [];
//   acc[curr.assembly].push(curr);
//   return acc;
// }, {});

// const BudgetPresentation = () => {
//   return (
//     <div style={styles.wrapper}>
//       <h1 style={styles.title}>बजट प्रस्‍तुति</h1>
//       <h5 style={styles.title}>वित्तमंत्री के बजट भाषण</h5>
//       <div style={styles.grid}>
//         {Object.keys(groupedByAssembly).map((assembly, idx) => {
//           const assemblySessions = groupedByAssembly[assembly];

//           const groupedByMinister = assemblySessions.reduce((acc, curr) => {
//             if (!acc[curr.minister]) acc[curr.minister] = [];
//             acc[curr.minister].push({ session: curr.session, date: curr.date, image: curr.image, pdf: curr.pdf });
//             return acc;
//           }, {});

//           return (
//             <div key={idx} style={styles.card}>
//               <h2 style={styles.assembly}>{assembly}</h2>

//               <div style={styles.ministerGrid}>
//                 {Object.keys(groupedByMinister).map((minister, index) => {
//                   const sessionsList = groupedByMinister[minister];
//                   return (
//                     <div key={index} style={styles.ministerSection}>
//                       <img
//                         src={sessionsList[0].image}
//                         alt={minister}
//                         style={styles.image}
//                       />
//                       <h3 style={styles.minister}>{minister}</h3>

//                       <div style={styles.sessionContainer}>
//                         {sessionsList.map((s, i) => (
//                           <div key={i} style={styles.sessionRow}>
//                             <button
//                               onClick={() => window.open(s.pdf, "_blank")}
//                               style={styles.sessionButton}
//                             >
//                               {s.session}
//                             </button>
//                             <div style={styles.date}>{s.date}</div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     width: "95%",
//     maxWidth: "1200px",
//     margin: "40px auto",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   title: {
//     textAlign: "center",
//     color: "#1a237e",
//     fontSize: "32px",
//     marginBottom: "40px",
//     fontWeight: "bold",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
//     gap: "25px",
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
//   },
//   assembly: {
//     fontSize: "22px",
//     fontWeight: "bold",
//     color: "#1565c0",
//     textAlign: "center",
//     marginBottom: "15px",
//   },
//   ministerGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
//     gap: "15px",
//   },
//   ministerSection: {
//     textAlign: "center",
//     backgroundColor: "#f9f9f9",
//     borderRadius: "10px",
//     padding: "10px",
//     boxShadow: "inset 0 0 6px rgba(0,0,0,0.05)",
//   },
//   image: {
//     width: "70px",
//     height: "70px",
//     objectFit: "cover",
//     borderRadius: "50%",
//     marginBottom: "8px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//   },
//   minister: {
//     fontSize: "16px",
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: "8px",
//   },
//   sessionContainer: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "8px",
//     alignItems: "center",
//   },
//   sessionRow: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   sessionButton: {
//     backgroundColor: "#1976d2",
//     color: "white",
//     border: "none",
//     borderRadius: "20px",
//     padding: "6px 14px",
//     cursor: "pointer",
//     fontSize: "14px",
//     transition: "background 0.2s",
//     width: "140px",
//   },
//   sessionButtonHover: {
//     backgroundColor: "#0d47a1",
//   },
//   date: {
//     fontSize: "13px",
//     color: "#555",
//     marginTop: "3px",
//   },
// };

// export default BudgetPresentation;
import React from "react";

// =======================
//  DATA
// =======================
const sessions = [
  // 16th
  { assembly: "षोडश (2023–)", session: "March 2025", date: "12th March, 2025", minister: "Shri Jagdish Devda", image: "/leaders/jagdishdeoda.jpg", pdf: "/misc/budget2025.pdf" },
  { assembly: "षोडश (2023–)", session: "July 2024", date: "03rd July, 2024", minister: "Shri Jagdish Devda", image: "/images/jagdish_devda.jpg", pdf: "/misc/budget2024.pdf" },

  // 15th
  { assembly: "पंचदश (2018–2023)", session: "मार्च, 2023", date: "01 मार्च, 2023", minister: "Shri Jagdish Devda", image: "/leaders/jagdishdeoda.jpg", pdf: "/misc/budget2023.pdf" },
  { assembly: "पंचदश (2018–2023)", session: "मार्च, 2022", date: "09 मार्च, 2022", minister: "Shri Jagdish Devda", image: "/images/jagdish_devda.jpg", pdf: "/misc/budget2022.pdf" },
  { assembly: "पंचदश (2018–2023)", session: "फरवरी-मार्च, 2021", date: "02 मार्च, 2021", minister: "Shri Jagdish Devda", image: "/images/jagdish_devda.jpg", pdf: "/misc/budget2021.pdf" },
  { assembly: "पंचदश (2018–2023)", session: "जुलाई, 2019", date: "10 जुलाई, 2019", minister: "Shri Tarun Bhanot", image: "/leaders/tarunbahot.jpg", pdf: "/misc/budget2019.pdf" },

  // 14th
  { assembly: "चतुर्दश (2013–2018)", session: "February-March 2018", date: "28th February, 2018", minister: "Shri Jayant Malaiya", image: "/leaders/jayantmaileya.jpg", pdf: "/misc/budget2018.pdf" },
  { assembly: "चतुर्दश (2013–2018)", session: "फरवरी-मार्च, 2017", date: "01 मार्च, 2017", minister: "Shri Jayant Malaiya", image: "/images/jayant_malaiya.jpg", pdf: "/misc/budget2017.pdf" },
  { assembly: "चतुर्दश (2013–2018)", session: "फरवरी-मार्च, 2016", date: "26 फरवरी, 2016", minister: "Shri Jayant Malaiya", image: "/images/jayant_malaiya.jpg", pdf: "/misc/budget2016.pdf" },
  { assembly: "चतुर्दश (2013–2018)", session: "फरवरी-मार्च, 2015", date: "25 फरवरी, 2015", minister: "Shri Jayant Malaiya", image: "/images/jayant_malaiya.jpg", pdf: "/misc/budget2015.pdf" },
  { assembly: "चतुर्दश (2013–2018)", session: "जून-जुलाई, 2014", date: "01 जुलाई, 2014", minister: "Shri Jayant Malaiya", image: "/images/jayant_malaiya.jpg", pdf: "/misc/budget2014.pdf" },

  // 13th
  { assembly: "त्रयोदश (2008–2013)", session: "फरवरी-मार्च, 2013", date: "22 फरवरी, 2013", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/budget2013.pdf" },
  { assembly: "त्रयोदश (2008–2013)", session: "फरवरी-अप्रैल,2012", date: "28 फरवरी, 2012", minister: "Shri Raghavji", image: "/images/raghavji.jpg", pdf: "/misc/budget2012.pdf" },
  { assembly: "त्रयोदश (2008–2013)", session: "फरवरी-अप्रैल,2011", date: "24 फरवरी, 2011", minister: "Shri Raghavji", image: "/images/raghavji.jpg", pdf: "/misc/budget2011.pdf" },
  { assembly: "त्रयोदश (2008–2013)", session: "फरवरी-मार्च,2010", date: "25 फरवरी, 2010", minister: "Shri Raghavji", image: "/images/raghavji.jpg", pdf: "/misc/budget2010.pdf" },
  { assembly: "त्रयोदश (2008–2013)", session: "जुलाई-अगस्त,2009", date: "10 जुलाई, 2009", minister: "Shri Raghavji", image: "/images/raghavji.jpg", pdf: "/misc/budget2009.pdf" },

  // 12th
  { assembly: "द्वादश (2003–2008)", session: "फरवरी- मार्च 2008", date: "27 फरवरी, 2008", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/Budget2008.pdf" },
  { assembly: "द्वादश (2003–2008)", session: "फरवरी- मार्च 2007", date: "26 फरवरी, 2007", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/Budget2007.pdf" },
  { assembly: "द्वादश (2003–2008)", session: "फरवरी- मार्च 2006", date: "21 फरवरी, 2006", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/Budget2006.pdf" },
  { assembly: "द्वादश (2003–2008)", session: "फरवरी-मार्च 2005", date: "18 फरवरी, 2005", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/budget2005.pdf" },
  { assembly: "द्वादश (2003–2008)", session: "जून-जुलाई 2004 - Part 1", date: "12 जुलाई, 2004", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/Budget2004.pdf" },
  { assembly: "द्वादश (2003–2008)", session: "जून-जुलाई 2004 - Part 2", date: "12 जुलाई, 2004", minister: "Shri Raghavji", image: "/leaders/raghavji.jpg", pdf: "/misc/Budget2004-2.pdf" },

  // 11th
  { assembly: "एकादश (1998–2003)", session: "फरवरी-मार्च 2003-Part 1", date: "24th February, 2003", minister: "Shri Ajay Narayan Musharan", image: "/leaders/ajaynaranmushran.jpg", pdf: "/misc/Budget2003.pdf" },
  { assembly: "एकादश (1998–2003)", session: "फरवरी-मार्च 2003-Part 2", date: "24th February, 2003", minister: "Shri Ajay Narayan Musharan", image: "/images/ajay_musharan.jpg", pdf: "/misc/Budget2003-2.pdf" },
];


// =======================
//  GROUPING
// =======================
const groupedByAssembly = sessions.reduce((acc, curr) => {
  if (!acc[curr.assembly]) acc[curr.assembly] = [];
  acc[curr.assembly].push(curr);
  return acc;
}, {});


// =======================
//  COMPONENT
// =======================
const BudgetPresentation = () => {
  return (
    <div>

      {/* ===========================
          HERO SECTION (FULL WIDTH)
      ============================ */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>बजट प्रस्‍तुति</h1>
        <h3 style={styles.heroSub}>वित्तमंत्री के बजट भाषण</h3>
      </div>

      {/* ===========================
          MAIN CONTENT WRAPPER
      ============================ */}
      <div style={styles.wrapper}>
        <div style={styles.grid}>
          {Object.keys(groupedByAssembly).map((assembly, idx) => {
            const assemblySessions = groupedByAssembly[assembly];

            const groupedByMinister = assemblySessions.reduce((acc, curr) => {
              if (!acc[curr.minister]) acc[curr.minister] = [];
              acc[curr.minister].push(curr);
              return acc;
            }, {});

            return (
              <div key={idx} style={styles.card}>
                <h2 style={styles.assembly}>{assembly}</h2>

                <div style={styles.ministerGrid}>
                  {Object.keys(groupedByMinister).map((minister, i) => {
                    const list = groupedByMinister[minister];
                    return (
                      <div key={i} style={styles.ministerSection}>
                        <img src={list[0].image} alt={minister} style={styles.image} />
                        <h3 style={styles.minister}>{minister}</h3>

                        <div style={styles.sessionContainer}>
                          {list.map((s, j) => (
                            <div key={j} style={styles.sessionRow}>
                              <button
                                onClick={() => window.open(s.pdf, "_blank")}
                                style={styles.sessionButton}
                              >
                                {s.session}
                              </button>
                              <div style={styles.date}>{s.date}</div>
                            </div>
                          ))}
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


// =======================
//  STYLES
// =======================
const styles = {
  hero: {
    background: "linear-gradient(135deg, #013b91, #005fcc)",
    padding: "20px 20px",
    textAlign: "center",
    color: "white",
    borderRadius: "0 0 20px 20px",
  },
  heroTitle: {
    fontSize: "40px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  heroSub: {
    fontSize: "22px",
    opacity: 0.9,
  },

  wrapper: {
    width: "95%",
    maxWidth: "1200px",
    margin: "40px auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "25px",
  },

  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  },

  assembly: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#1565c0",
    textAlign: "center",
    marginBottom: "15px",
  },

  ministerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "15px",
  },

  ministerSection: {
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.05)",
  },

  image: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "8px",
  },

  minister: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "8px",
  },

  sessionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center",
  },

  sessionRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  sessionButton: {
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    padding: "6px 14px",
    cursor: "pointer",
    fontSize: "14px",
    width: "140px",
  },

  date: {
    fontSize: "13px",
    color: "#555",
    marginTop: "3px",
  },
};

export default BudgetPresentation;
