// import React from "react";
// import { Link } from "react-router-dom";

// const DainikKaryasuchi15 = () => {

//   const data = [
//   {
//     number: "प्रथम",
//     name: "जनवरी, 2019",
//     months: [
//       {
//         month: "जनवरी",
//         dates: [
//           { day: "07", pdf: "/misc/karyasuchi/070119.pdf" },
//           { day: "08", pdf: "/misc/karyasuchi/080119.pdf" },
//           { day: "09", pdf: "/misc/karyasuchi/090119.pdf" },
//           { day: "10", pdf: "/misc/karyasuchi/100119.pdf" },
//           { day: "11" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "द्वितीय",
//     name: "फरवरी, 2019",
//     months: [
//       {
//         month: "फरवरी",
//         dates: [
//           { day: "18", pdf: "/misc/karyasuchi/180219.pdf" },
//           { day: "20", pdf: "/misc/karyasuchi/200219.pdf" },
//           { day: "21", pdf: "/misc/karyasuchi/210219.pdf" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "तृतीय",
//     name: "जुलाई, 2019",
//     months: [
//       {
//         month: "जुलाई",
//         dates: [
//           { day: "8", pdf: "/misc/karyasuchi/080719.pdf" },
//           { day: "9", pdf: "/misc/karyasuchi/090719.pdf" },
//           { day: "10", pdf: "/misc/karyasuchi/100719.pdf" },
//           { day: "11", pdf: "/misc/karyasuchi/110719.pdf" },
//           { day: "12", pdf: "/misc/karyasuchi/120719.pdf" },
//           { day: "15" },
//           { day: "16" },
//           { day: "17", pdf: "/misc/karyasuchi/170719.pdf" },
//           { day: "18", pdf: "/misc/karyasuchi/180719.pdf" },
//           { day: "19", pdf: "/misc/karyasuchi/190719.pdf" },
//           { day: "20", pdf: "/misc/karyasuchi/200719.pdf" },
//           { day: "21", pdf: "/misc/karyasuchi/210719.pdf" },
//           { day: "22", pdf: "/misc/karyasuchi/220719.pdf" },
//           { day: "23", pdf: "/misc/karyasuchi/230719.pdf" },
//           { day: "24", pdf: "/misc/karyasuchi/240719.pdf" },
//           { day: "25" },
//           { day: "26" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "चतुर्थ",
//     name: "दिसम्बर, 2019 - जनवरी, 2020",
//     months: [
//       {
//         month: "दिसम्बर",
//         dates: [
//           { day: "17", pdf: "/misc/karyasuchi/171219.pdf" },
//           { day: "18", pdf: "/misc/karyasuchi/181219.pdf" },
//           { day: "19", pdf: "/misc/karyasuchi/191219.pdf" },
//           { day: "20", pdf: "/misc/karyasuchi/201219.pdf" },
//           { day: "23" },
//         ],
//       },
//       {
//         month: "जनवरी",
//         dates: [
//           { day: "16", pdf: "/misc/karyasuchi/160120.pdf" },
//           { day: "17", pdf: "/misc/karyasuchi/170120.pdf" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "पंचम",
//     name: "मार्च- अप्रैल, 2020",
//     months: [
//       {
//         month: "मार्च",
//         dates: [
//           { day: "16", pdf: "/misc/karyasuchi/160320.pdf" },
//           { day: "17" },
//           { day: "18" },
//           { day: "19" },
//           { day: "20", pdf: "/misc/karyasuchi/200320.pdf" },
//           { day: "23" },
//           { day: "24" },
//           { day: "26" },
//           { day: "27"},
//           { day: "30" },
//           { day: "31" },
//         ],
//       },
//       {
//         month: "अप्रैल",
//         dates: [
//           { day: "1" },
//           { day: "3"},
//           { day: "7" },
//           { day: "8" },
//           { day: "9" },
//           { day: "13" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "षष्टम्",
//     name: "मार्च, 2020",
//     months: [
//       {
//         month: "मार्च",
//         dates: [
//           { day: "24", pdf: "/misc/karyasuchi/240320.pdf" },
//           { day: "25" },
//           { day: "26" },
//           { day: "27" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "सप्तम्",
//     name: "सितम्बर, 2020",
//     months: [
//       {
//         month: "सितम्बर",
//         dates: [
//           { day: "21", pdf: "/misc/karyasuchi/210920.pdf" },
//           { day: "21(संशोधन)", pdf: "/misc/karyasuchi/Amendment210920.pdf" },
//           { day: "21(अनुपूरक कार्यसूची)", pdf: "/misc/karyasuchi/Supplementary210920.pdf" },
//           { day: "22" },
//           { day: "23" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "अष्टम्",
//     name: "फरवरी-मार्च, 2021",
//     months: [
//       {
//         month: "फरवरी",
//         dates: [
//           { day: "22", pdf: "/misc/karyasuchi/220221.pdf" },
//           { day: "23", pdf: "/misc/karyasuchi/230221.pdf" },
//           { day: "24", pdf: "/misc/karyasuchi/240221.pdf" },
//           { day: "25", pdf: "/misc/karyasuchi/250221.pdf" },
//           { day: "26", pdf: "/misc/karyasuchi/260221.pdf" },
//         ],
//       },
//       {
//         month: "मार्च",
//         dates: [
//           { day: "1", pdf: "/misc/karyasuchi/010321.pdf" },
//           { day: "2", pdf: "/misc/karyasuchi/020321.pdf" },
//           { day: "3" },
//           { day: "4", pdf: "/misc/karyasuchi/040321.pdf" },
//           { day: "5", pdf: "/misc/karyasuchi/050321.pdf" },
//           { day: "8", pdf: "/misc/karyasuchi/080321.pdf" },
//           { day: "9", pdf: "/misc/karyasuchi/090321.pdf" },
//           { day: "10" },
//           { day: "15", pdf: "/misc/karyasuchi/150321.pdf" },
//           { day: "16", pdf: "/misc/karyasuchi/160321.pdf" },
//           { day: "17"},
//           { day: "18"},
//           { day: "19" },
//           { day: "22" },
//           { day: "23"},
//           { day: "24"},
//           { day: "25" },
//           { day: "26" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "नवम्",
//     name: "अगस्त, 2021",
//     months: [
//       {
//         month: "अगस्त",
//         dates: [
//           { day: "09", pdf: "/misc/karyasuchi/090821.pdf" },
//           { day: "10", pdf: "/misc/karyasuchi/100821.pdf" },
//           { day: "10(अनुपूरक कार्यसूची)", pdf: "/misc/karyasuchi/Supplementary100821.pdf" },
//           { day: "11" },
//           { day: "12" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "दशम्",
//     name: "दिसम्बर, 2021",
//     months: [
//       {
//         month: "दिसम्बर",
//         dates: [
//           { day: "20", pdf: "/misc/karyasuchi/201221.pdf" },
//           { day: "21", pdf: "/misc/karyasuchi/211221.pdf" },
//           { day: "22", pdf: "/misc/karyasuchi/221221.pdf" },
//           { day: "23", pdf: "/misc/karyasuchi/231221.pdf" },
//           { day: "24", pdf: "/misc/karyasuchi/241221.pdf" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "एकादश",
//     name: "मार्च, 2022",
//     months: [
//       {
//         month: "मार्च",
//         dates: [
//           { day: "7", pdf: "/misc/karyasuchi/070322.pdf" },
//           { day: "8", pdf: "/misc/karyasuchi/080322.pdf" },
//           { day: "9", pdf: "/misc/karyasuchi/090322.pdf" },
//           { day: "10", pdf: "/misc/karyasuchi/100322.pdf" },
//           { day: "11", pdf: "/misc/karyasuchi/110322.pdf " },
//           { day: "14", pdf: "/misc/karyasuchi/140322.pdf" },
//           { day: "15", pdf: "/misc/karyasuchi/150322.pdf" },
//           { day: "16", pdf: "/misc/karyasuchi/160322.pdf" },
//           { day: "17" },
//           { day: "21"},
//           { day: "23"},
//           { day: "24"},
//           { day: "25" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "द्वादश",
//     name: "सितम्बर, 2022",
//     months: [
//       {
//         month: "सितम्बर",
//         dates: [
//           { day: "13", pdf: "/misc/karyasuchi/130922.pdf" },
//           { day: "14", pdf: "/misc/karyasuchi/140922.pdf" },
//           { day: "15", pdf: "/misc/karyasuchi/150922.pdf" },
//           { day: "15(अनुपूरक कार्यसूची)", pdf: "/misc/karyasuchi/150922%20supplementary%20karyasuchi.pdf" },
//           { day: "16" },
//           { day: "17" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "त्रयोदश",
//     name: "दिसम्बर, 2022",
//     months: [
//       {
//         month: "दिसम्बर",
//         dates: [
//           { day: "19", pdf: "/misc/karyasuchi/191222.pdf" },
//           { day: "20", pdf: "/misc/karyasuchi/201222.pdf" },
//           { day: "20(अनुपूरक कार्यसूची)", pdf: "/misc/karyasuchi/201222%20supplementary%20karyasuchi.pdf" },
//           { day: "21", pdf: "/misc/karyasuchi/211222.pdf" },
//           { day: "22", pdf: "/misc/karyasuchi/221222.pdf" },
//           { day: "23"},
//         ],
//       },
//     ],
//   },
//   {
//     number: "चतुर्दश",
//     name: "फरवरी-मार्च, 2023",
//     months: [
//       {
//         month: "फरवरी",
//         dates: [
//           { day: "27", pdf: "/misc/karyasuchi/270223.pdf" },
//           { day: "28", pdf: "/misc/karyasuchi/280223.pdf" },
//         ],
//       },
//       {
//         month: "मार्च",
//         dates: [
//           { day: "1", pdf: "/misc/karyasuchi/010323.pdf" },
//           { day: "2", pdf: "/misc/karyasuchi/020323.pdf" },
//           { day: "3", pdf: "/misc/karyasuchi/030323.pdf" },
//           { day: "13", pdf: "/misc/karyasuchi/130323.pdf" },
//           { day: "14", pdf: "/misc/karyasuchi/140323.pdf" },
//           { day: "15", pdf: "/misc/karyasuchi/150323.pdf" },
//           { day: "16", pdf: "/misc/karyasuchi/160323.pdf" },
//           { day: "17", pdf: "/misc/karyasuchi/170323.pdf" },
//           { day: "20", pdf: "/misc/karyasuchi/200323.pdf" },
//           { day: "21", pdf: "/misc/karyasuchi/210323.pdf" },
//           { day: "27" },
//         ],
//       },
//     ],
//   },
//   {
//     number: "पंचदश",
//     name: "जुलाई, 2023",
//     months: [
//       {
//         month: "जुलाई",
//         dates: [
//           { day: "11", pdf: "/misc/karyasuchi/110723.pdf" },
//           { day: "12", pdf: "/misc/karyasuchi/120723.pdf" },
//           { day: "12(अनुपूरक कार्यसूची)", pdf: "/misc/karyasuchi/120723%20supplementary%20karyasuchi.pdf" },
//           { day: "13" },
//           { day: "14" },
//           { day: "15" },
//         ],
//       },
//     ],
//   },
// ];

//     const styles = {
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
//     specialDateCell: { backgroundColor: "#fde68a", color: "#b45309", fontWeight: 700, border: "1px solid #fcd34d" },
//   };

//   // function to check for special annotations
//   const getDisplayText = (day) => {
//     if (day.includes("अनुपूरक")) return day.replace("अनुपूरक कार्यसूची", "अनु. सू.");
//     if (day.includes("संशोधन")) return day.replace("संशोधन", "संशो.");
//     return day;
//   };

//   const isSpecial = (day) => day.includes("अनुपूरक") || day.includes("संशोधन");

//   return (
//     <div style={styles.page}>
//       {/* Header with Back Button */}
//       <div style={styles.header}>
//         <Link to="/dainik" style={styles.backButton}>
//           ← वापस जाएं
//         </Link>
//         <div style={styles.title}>दैनिक कार्य सूची</div>
//         <div style={styles.subTitle}>पंचदश विधान सभा (2019 से 2023)</div>
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
//                         style={{
//                           ...styles.dateCell,
//                           ...(isSpecial(d.day) ? styles.specialDateCell : {}),
//                         }}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.backgroundColor = isSpecial(d.day) ? "#fcd34d" : "#2563eb";
//                           e.currentTarget.style.color = isSpecial(d.day) ? "#78350f" : "#fff";
//                           e.currentTarget.style.transform = "scale(1.05)";
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.backgroundColor = isSpecial(d.day) ? "#fde68a" : "#eff6ff";
//                           e.currentTarget.style.color = isSpecial(d.day) ? "#b45309" : "#1e40af";
//                           e.currentTarget.style.transform = "none";
//                         }}
//                       >
//                         {getDisplayText(d.day)}
//                       </a>
//                     ) : (
//                       <div key={j} style={styles.dateCell}>
//                         {getDisplayText(d.day)}
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

// export default DainikKaryasuchi15;
import React from "react";
import { Link } from "react-router-dom";

const DainikKaryasuchi15 = () => {
  const data = [
    {
     number: "प्रथम",
     name: "जनवरी, 2019",
     months: [
       {
         month: "जनवरी",
         dates: [
           { day: "07", pdf: "/misc/karyasuchi/070119.pdf" },
           { day: "08", pdf: "/misc/karyasuchi/080119.pdf" },
           { day: "09", pdf: "/misc/karyasuchi/090119.pdf" },
           { day: "10", pdf: "/misc/karyasuchi/100119.pdf" },
           { day: "11" },
         ],
       },
     ],
   },
   {
     number: "द्वितीय",
     name: "फरवरी, 2019",
     months: [
       {
         month: "फरवरी",
         dates: [
           { day: "18", pdf: "/misc/karyasuchi/180219.pdf" },
           { day: "20", pdf: "/misc/karyasuchi/200219.pdf" },
           { day: "21", pdf: "/misc/karyasuchi/210219.pdf" },
         ],
       },
     ],
   },
   {
     number: "तृतीय",
     name: "जुलाई, 2019",
     months: [
       {
         month: "जुलाई",
         dates: [
           { day: "8", pdf: "/misc/karyasuchi/080719.pdf" },
           { day: "9", pdf: "/misc/karyasuchi/090719.pdf" },
           { day: "10", pdf: "/misc/karyasuchi/100719.pdf" },
           { day: "11", pdf: "/misc/karyasuchi/110719.pdf" },
           { day: "12", pdf: "/misc/karyasuchi/120719.pdf" },
           { day: "15" },
           { day: "16" },
           { day: "17", pdf: "/misc/karyasuchi/170719.pdf" },
           { day: "18", pdf: "/misc/karyasuchi/180719.pdf" },
           { day: "19", pdf: "/misc/karyasuchi/190719.pdf" },
           { day: "20", pdf: "/misc/karyasuchi/200719.pdf" },
           { day: "21", pdf: "/misc/karyasuchi/210719.pdf" },
           { day: "22", pdf: "/misc/karyasuchi/220719.pdf" },
           { day: "23", pdf: "/misc/karyasuchi/230719.pdf" },
           { day: "24", pdf: "/misc/karyasuchi/240719.pdf" },
           { day: "25" },
           { day: "26" },
         ],
       },
     ],
   },
   {
     number: "चतुर्थ",
     name: "दिसम्बर, 2019 - जनवरी, 2020",
     months: [
       {
         month: "दिसम्बर",
         dates: [
           { day: "17", pdf: "/misc/karyasuchi/171219.pdf" },
           { day: "18", pdf: "/misc/karyasuchi/181219.pdf" },
           { day: "19", pdf: "/misc/karyasuchi/191219.pdf" },
           { day: "20", pdf: "/misc/karyasuchi/201219.pdf" },
           { day: "23" },
         ],
       },
       {
         month: "जनवरी",
         dates: [
           { day: "16", pdf: "/misc/karyasuchi/160120.pdf" },
           { day: "17", pdf: "/misc/karyasuchi/170120.pdf" },
         ],
       },
     ],
   },
   {
     number: "पंचम",
     name: "मार्च- अप्रैल, 2020",
     months: [
       {
         month: "मार्च",
         dates: [
           { day: "16", pdf: "/misc/karyasuchi/160320.pdf" },
           { day: "17" },
           { day: "18" },
           { day: "19" },
           { day: "20", pdf: "/misc/karyasuchi/200320.pdf" },
           { day: "23" },
           { day: "24" },
           { day: "26" },
           { day: "27"},
           { day: "30" },
           { day: "31" },
         ],
       },
       {
         month: "अप्रैल",
         dates: [
           { day: "1" },
           { day: "3"},
           { day: "7" },
           { day: "8" },
           { day: "9" },
           { day: "13" },
         ],
       },
     ],
   },
   {
     number: "षष्टम्",
     name: "मार्च, 2020",
     months: [
       {
         month: "मार्च",
         dates: [
           { day: "24", pdf: "/misc/karyasuchi/240320.pdf" },
           { day: "25" },
           { day: "26" },
           { day: "27" },
         ],
       },
     ],
   },
   {
     number: "सप्तम्",
     name: "सितम्बर, 2020",
     months: [
       {
         month: "सितम्बर",
         dates: [
           { day: "21", pdf: "/misc/karyasuchi/210920.pdf" },
           { day: "21(संशोधन)", pdf: "/misc/karyasuchi/Amendment210920.pdf" },
           { day: "21(अनुपूरक कार्यसूची)", pdf: "/misc/karyasuchi/Supplementary210920.pdf" },
           { day: "22" },
           { day: "23" },
         ],
       },
     ],
   },
   {
     number: "अष्टम्",
     name: "फरवरी-मार्च, 2021",
     months: [
       {
         month: "फरवरी",
         dates: [
           { day: "22", pdf: "/misc/karyasuchi/220221.pdf" },
           { day: "23", pdf: "/misc/karyasuchi/230221.pdf" },
           { day: "24", pdf: "/misc/karyasuchi/240221.pdf" },
           { day: "25", pdf: "/misc/karyasuchi/250221.pdf" },
           { day: "26", pdf: "/misc/karyasuchi/260221.pdf" },
         ],
       },
       {
         month: "मार्च",
         dates: [
           { day: "1", pdf: "/misc/karyasuchi/010321.pdf" },
           { day: "2", pdf: "/misc/karyasuchi/020321.pdf" },
           { day: "3" },
           { day: "4", pdf: "/misc/karyasuchi/040321.pdf" },
           { day: "5", pdf: "/misc/karyasuchi/050321.pdf" },
           { day: "8", pdf: "/misc/karyasuchi/080321.pdf" },
           { day: "9", pdf: "/misc/karyasuchi/090321.pdf" },
           { day: "10" },
           { day: "15", pdf: "/misc/karyasuchi/150321.pdf" },
           { day: "16", pdf: "/misc/karyasuchi/160321.pdf" },
           { day: "17"},
           { day: "18"},
           { day: "19" },
           { day: "22" },
           { day: "23"},
           { day: "24"},
           { day: "25" },
           { day: "26" },
         ],
       },
     ],
   },
   {
     number: "नवम्",
     name: "अगस्त, 2021",
     months: [
       {
         month: "अगस्त",
         dates: [
           { day: "09", pdf: "/misc/karyasuchi/090821.pdf" },
           { day: "10", pdf: "/misc/karyasuchi/100821.pdf" },
           { day: "10(अनुपूरक कार्यसूची)", pdf: "/misc/karyasuchi/Supplementary100821.pdf" },
           { day: "11" },
           { day: "12" },
         ],
       },
     ],
   },
   {
     number: "दशम्",
     name: "दिसम्बर, 2021",
     months: [
       {
         month: "दिसम्बर",
         dates: [
           { day: "20", pdf: "/misc/karyasuchi/201221.pdf" },
           { day: "21", pdf: "/misc/karyasuchi/211221.pdf" },
           { day: "22", pdf: "/misc/karyasuchi/221221.pdf" },
           { day: "23", pdf: "/misc/karyasuchi/231221.pdf" },
           { day: "24", pdf: "/misc/karyasuchi/241221.pdf" },
         ],
       },
     ],
   },
   {
     number: "एकादश",
     name: "मार्च, 2022",
     months: [
       {
         month: "मार्च",
         dates: [
           { day: "7", pdf: "/misc/karyasuchi/070322.pdf" },
           { day: "8", pdf: "/misc/karyasuchi/080322.pdf" },
           { day: "9", pdf: "/misc/karyasuchi/090322.pdf" },
           { day: "10", pdf: "/misc/karyasuchi/100322.pdf" },
           { day: "11", pdf: "/misc/karyasuchi/110322.pdf " },
           { day: "14", pdf: "/misc/karyasuchi/140322.pdf" },
           { day: "15", pdf: "/misc/karyasuchi/150322.pdf" },
           { day: "16", pdf: "/misc/karyasuchi/160322.pdf" },
           { day: "17" },
           { day: "21"},
           { day: "23"},
           { day: "24"},
           { day: "25" },
         ],
       },
     ],
   },
   {
     number: "द्वादश",
     name: "सितम्बर, 2022",
     months: [
       {
         month: "सितम्बर",
         dates: [
           { day: "13", pdf: "/misc/karyasuchi/130922.pdf" },
           { day: "14", pdf: "/misc/karyasuchi/140922.pdf" },
           { day: "15", pdf: "/misc/karyasuchi/150922.pdf" },
           { day: "15(अनुपूरक कार्यसूची)", pdf: "/misc/karyasuchi/150922%20supplementary%20karyasuchi.pdf" },
           { day: "16" },
           { day: "17" },
         ],
       },
     ],
   },
   {
     number: "त्रयोदश",
     name: "दिसम्बर, 2022",
     months: [
       {
         month: "दिसम्बर",
         dates: [
           { day: "19", pdf: "/misc/karyasuchi/191222.pdf" },
           { day: "20", pdf: "/misc/karyasuchi/201222.pdf" },
           { day: "20(अनुपूरक कार्यसूची)", pdf: "/misc/karyasuchi/201222%20supplementary%20karyasuchi.pdf" },
           { day: "21", pdf: "/misc/karyasuchi/211222.pdf" },
           { day: "22", pdf: "/misc/karyasuchi/221222.pdf" },
           { day: "23"},
         ],
       },
     ],
   },
   {
     number: "चतुर्दश",
     name: "फरवरी-मार्च, 2023",
     months: [
       {
         month: "फरवरी",
         dates: [
           { day: "27", pdf: "/misc/karyasuchi/270223.pdf" },
           { day: "28", pdf: "/misc/karyasuchi/280223.pdf" },
         ],
       },
       {
         month: "मार्च",
         dates: [
           { day: "1", pdf: "/misc/karyasuchi/010323.pdf" },
           { day: "2", pdf: "/misc/karyasuchi/020323.pdf" },
           { day: "3", pdf: "/misc/karyasuchi/030323.pdf" },
           { day: "13", pdf: "/misc/karyasuchi/130323.pdf" },
           { day: "14", pdf: "/misc/karyasuchi/140323.pdf" },
           { day: "15", pdf: "/misc/karyasuchi/150323.pdf" },
           { day: "16", pdf: "/misc/karyasuchi/160323.pdf" },
           { day: "17", pdf: "/misc/karyasuchi/170323.pdf" },
           { day: "20", pdf: "/misc/karyasuchi/200323.pdf" },
           { day: "21", pdf: "/misc/karyasuchi/210323.pdf" },
           { day: "27" },
         ],
       },
     ],
   },
   {
     number: "पंचदश",
     name: "जुलाई, 2023",
     months: [
       {
         month: "जुलाई",
         dates: [
           { day: "11", pdf: "/misc/karyasuchi/110723.pdf" },
           { day: "12", pdf: "/misc/karyasuchi/120723.pdf" },
           { day: "12(अनुपूरक कार्यसूची)", pdf: "/misc/karyasuchi/120723%20supplementary%20karyasuchi.pdf" },
           { day: "13" },
           { day: "14" },
           { day: "15" },
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
    specialDateCell: {
      backgroundColor: "#fde68a",
      color: "#b45309",
      fontWeight: 700,
      border: "1px solid #fcd34d",
    },
  };

  const getDisplayText = (day) => {
    if (day.includes("अनुपूरक")) return day.replace("अनुपूरक कार्यसूची", "अनु. सू.");
    if (day.includes("संशोधन")) return day.replace("संशोधन", "संशो.");
    return day;
  };

  const isSpecial = (day) =>
    day.includes("अनुपूरक") || day.includes("संशोधन");

  return (
    <div style={styles.page}>
      
      {/* ⭐ NEW HERO SECTION (same as DainikKaryasuchi16) */}
      <div className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">

            <Link to="/dainik" className="panch-btn">
              पीछे जाये
            </Link>

            <div className="panch-hero-text">
              <h1>दैनिक कार्य सूची</h1>
              <p>पंचदश विधान सभा (2019 से 2023)</p>
            </div>

          </div>
        </div>
      </div>

      {/* ⭐ CALENDAR UNTOUCHED */}
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
                        style={{
                          ...styles.dateCell,
                          ...(isSpecial(d.day) ? styles.specialDateCell : {}),
                        }}
                      >
                        {getDisplayText(d.day)}
                      </a>
                    ) : (
                      <div key={j} style={styles.dateCell}>
                        {getDisplayText(d.day)}
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

export default DainikKaryasuchi15;
