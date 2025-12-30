import React from "react";
import { Link } from "react-router-dom";

const DainikKaryasuchi14 = () => {
const data = [
  {
    number: "प्रथम",
    name: "जनवरी, 2014",
    months: [
      {
        month: "जनवरी",
        dates: [
          { day: "8", pdf: "/misc/karyasuchi/080114.pdf" },
          { day: "9", pdf: "/misc/karyasuchi/090114.pdf" },
          { day: "10", pdf: "/misc/karyasuchi/100114.pdf" },
          { day: "शुद्धि पत्र", pdf: "/misc/karyasuchi/shuddhi_100114.pdf" },
          { day: "11", pdf: "/misc/karyasuchi/110114.pdf" },
          { day: "15", pdf: "/misc/karyasuchi/150114.pdf" },
          { day: "16" },
          { day: "17" },
        ],
      },
    ],
  },
  {
    number: "द्वितीय",
    name: "मार्च, 2014",
    months: [
      {
        month: "मार्च",
        dates: [
          { day: "3", pdf: "/misc/karyasuchi/030314.pdf" },
          { day: "4", pdf: "/misc/karyasuchi/040314.pdf" },
          { day: "5", pdf: "/misc/karyasuchi/050314.pdf" },
        ],
      },
    ],
  },
  {
    number: "तृतीय",
    name: "जून-जुलाई, 2014",
    months: [
      { month: "जून", dates: [{ day: "30", pdf: "/misc/karyasuchi/300614.pdf" }] },
      {
        month: "जुलाई",
        dates: [
          { day: "1", pdf: "/misc/karyasuchi/010714.pdf" },
          { day: "2", pdf: "/misc/karyasuchi/020714.pdf" },
          { day: "3", pdf: "/misc/karyasuchi/030714.pdf" },
          { day: "4", pdf: "/misc/karyasuchi/040714.pdf" },
          { day: "7", pdf: "/misc/karyasuchi/070714.pdf" },
          { day: "8", pdf: "/misc/karyasuchi/080714.pdf" },
          { day: "9", pdf: "/misc/karyasuchi/090714.pdf" },
          { day: "10", pdf: "/misc/karyasuchi/100714.pdf" },
          { day: "11", pdf: "/misc/karyasuchi/110714.pdf" },
          { day: "14", pdf: "/misc/karyasuchi/140714.pdf" },
          { day: "15", pdf: "/misc/karyasuchi/150714.pdf" },
          { day: "16", pdf: "/misc/karyasuchi/160714.pdf" },
          { day: "17", pdf: "/misc/karyasuchi/170714.pdf" },
          { day: "18", pdf: "/misc/karyasuchi/180714.pdf" },
          { day: "21", pdf: "/misc/karyasuchi/210714.pdf" },
          { day: "22", pdf: "/misc/karyasuchi/220714.pdf" },
          { day: "(अनुपूरक)", pdf: "/misc/karyasuchi/220714-suppl.pdf" },

          { day: "23" },
          { day: "24" },
          { day: "25" },
          { day: "28"},
        ],
      },
    ],
  },
  {
    number: "चतुर्थ",
    name: "दिसम्बर, 2014",
    months: [
      {
        month: "दिसम्बर",
        dates: [
          { day: "8", pdf: "/misc/karyasuchi/081214.pdf" },
          { day: "9", pdf: "/misc/karyasuchi/091214.pdf" },
          { day: "10", pdf: "/misc/karyasuchi/101214.pdf" },
          { day: "11", pdf: "/misc/karyasuchi/111214.pdf" },
          { day: "12", pdf: "/misc/karyasuchi/121214.pdf" },
        ],
      },
    ],
  },
  {
    number: "पंचम",
    name: "फरवरी-मार्च, 2015",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "18", pdf: "/misc/karyasuchi/180215.pdf" },
          { day: "19", pdf: "/misc/karyasuchi/190215.pdf" },
          { day: "20", pdf: "/misc/karyasuchi/200215.pdf" },
          { day: "23", pdf: "/misc/karyasuchi/230215.pdf" },
          { day: "24", pdf: "/misc/karyasuchi/240215.pdf" },
          { day: "25", pdf: "/misc/karyasuchi/250215.pdf" },
          { day: "26", pdf: "/misc/karyasuchi/260215.pdf" },
          { day: "27"},
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "2" },
          { day: "3"},
          { day: "4" },
          { day: "11" },
          { day: "12" },
          { day: "13" },
          { day: "16"},
          { day: "17" },
          { day: "18" },
          { day: "19" },
          { day: "20"},
          { day: "23" },
          { day: "24" },
          { day: "25" },
          { day: "26" },
          { day: "27" },
        ],
      },
    ],
  },
  {
    number: "षष्टम्",
    name: "मार्च, 2015",
    months: [{ month: "मार्च", dates: [{ day: "24", pdf: "/misc/karyasuchi/240315.pdf" }] }],
  },
  {
    number: "सप्तम्",
    name: "जुलाई, 2015",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "20", pdf: "/misc/karyasuchi/200715.pdf" },
          { day: "21", pdf: "/misc/karyasuchi/210715.pdf" },
          { day: "22", pdf: "/misc/karyasuchi/220715.pdf" },
          { day: "(अनुपूरक)", pdf: "/misc/karyasuchi/220715-suppl.pdf" },

          { day: "23" },
          { day: "24" },
          { day: "27"},
          { day: "28" },
          { day: "29" },
          { day: "30" },
          { day: "31"},
        ],
      },
    ],
  },
  {
    number: "अष्टम्",
    name: "नवम्बर, 2015",
    months: [{ month: "नवम्बर", dates: [{ day: "5", pdf: "/misc/karyasuchi/051115.pdf" }] }],
  },
  {
    number: "नवम्",
    name: "दिसम्बर, 2015",
    months: [
      {
        month: "दिसम्बर",
        dates: [
          { day: "7", pdf: "/misc/karyasuchi/071215.pdf" },
          { day: "8", pdf: "/misc/karyasuchi/081215.pdf" },
          { day: "9", pdf: "/misc/karyasuchi/091215.pdf" },
          { day: "10", pdf: "/misc/karyasuchi/101215.pdf" },
          { day: "11", pdf: "/misc/karyasuchi/111215.pdf" },
          { day: "14", pdf: "/misc/karyasuchi/141215.pdf" },
          { day: "15", pdf: "/misc/karyasuchi/151215.pdf" },
          { day: "16", pdf: "/misc/karyasuchi/161215.pdf" },
          { day: "17" },
          { day: "18" },
        ],
      },
    ],
  },
  {
    number: "दशम्",
    name: "फरवरी-अप्रैल, 2016",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "23", pdf: "/misc/karyasuchi/230216.pdf" },
          { day: "24", pdf: "/misc/karyasuchi/240216.pdf" },
          { day: "25", pdf: "/misc/karyasuchi/250216.pdf" },
          { day: "26", pdf: "/misc/karyasuchi/260216.pdf" },
          { day: "29", pdf: "/misc/karyasuchi/290216.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "1", pdf: "/misc/karyasuchi/010316.pdf" },
          { day: "2", pdf: "/misc/karyasuchi/020316.pdf" },
          { day: "3", pdf: "/misc/karyasuchi/030316.pdf" },
          { day: "4", pdf: "/misc/karyasuchi/040316.pdf" },
          { day: "8", pdf: "/misc/karyasuchi/080316.pdf" },
          { day: "9", pdf: "/misc/karyasuchi/090316.pdf" },
          { day: "10", pdf: "/misc/karyasuchi/100316.pdf" },
          { day: "11", pdf: "/misc/karyasuchi/110316.pdf" },
          { day: "14", pdf: "/misc/karyasuchi/140316.pdf" },
          { day: "15", pdf: "/misc/karyasuchi/150316.pdf" },
          { day: "16", pdf: "/misc/karyasuchi/160316.pdf" },
          { day: "17", pdf: "/misc/karyasuchi/170316.pdf" },
          { day: "18", pdf: "/misc/karyasuchi/180316.pdf" },
          { day: "28", pdf: "/misc/karyasuchi/280316.pdf" },
          { day: "29", pdf: "/misc/karyasuchi/290316.pdf" },
          { day: "30", pdf: "/misc/karyasuchi/300316.pdf" },
          { day: "31", pdf: "/misc/karyasuchi/310316.pdf" },
        ],
      },
      { month: "अप्रैल", dates: [{ day: "1", pdf: "/misc/karyasuchi/010416.pdf" }] },
    ],
  },
  {
    number: "एकादश",
    name: "जुलाई-अगस्त, 2016",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "18", pdf: "/misc/karyasuchi/180716.pdf" },
          { day: "19"},
          { day: "20", pdf: "/misc/karyasuchi/200716.pdf" },
          { day: "21", pdf: "/misc/karyasuchi/210716.pdf" },
          { day: "22", pdf: "/misc/karyasuchi/220716.pdf" },
          { day: "25", pdf: "/misc/karyasuchi/250716.pdf" },
          { day: "26", pdf: "/misc/karyasuchi/260716.pdf" },
          { day: "27", pdf: "/misc/karyasuchi/270716.pdf" },
          { day: "28", pdf: "/misc/karyasuchi/280716.pdf" },
          { day: "29", pdf: "/misc/karyasuchi/290716.pdf" },
        ],
      },
      {
        month: "अगस्त",
        dates: [{ day: "24", pdf: "/misc/karyasuchi/240816.pdf" }],
      },
    ],
  },
  {
    number: "द्वादश",
    name: "दिसम्बर, 2016",
    months: [
      {
        month: "दिसम्बर",
        dates: [
          { day: "5", pdf: "/misc/karyasuchi/051216.pdf" },
          { day: "6", pdf: "/misc/karyasuchi/061216.pdf" },
          { day: "7", pdf: "/misc/karyasuchi/071216.pdf" },
          { day: "8", pdf: "/misc/karyasuchi/081216.pdf" },
          { day: "9", pdf: "/misc/karyasuchi/091216.pdf" },
        ],
      },
    ],
  },
  {
    number: "त्रयोदश",
    name: "फरवरी-मई, 2017",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "21", pdf: "/misc/karyasuchi/210217.pdf" },
          { day: "22", pdf: "/misc/karyasuchi/220217.pdf" },
          { day: "23", pdf: "/misc/karyasuchi/230217.pdf" },
          { day: "27", pdf: "/misc/karyasuchi/270217.pdf" },
          { day: "28", pdf: "/misc/karyasuchi/280217.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "1", pdf: "/misc/karyasuchi/010317.pdf" },
          { day: "2", pdf: "/misc/karyasuchi/020317.pdf" },
          { day: "3", pdf: "/misc/karyasuchi/030317.pdf" },
          { day: "6", pdf: "/misc/karyasuchi/060317.pdf" },
          { day: "7", pdf: "/misc/karyasuchi/070317.pdf" },
          { day: "8", pdf: "/misc/karyasuchi/080317.pdf" },
          { day: "9", pdf: "/misc/karyasuchi/090317.pdf" },
          { day: "10", pdf: "/misc/karyasuchi/100317.pdf" },
          { day: "20", pdf: "/misc/karyasuchi/200317.pdf" },
          { day: "21", pdf: "/misc/karyasuchi/210317.pdf" },
          { day: "22", pdf: "/misc/karyasuchi/220317.pdf" },
          { day: "23", pdf: "/misc/karyasuchi/230317.pdf" },
          { day: "24", pdf: "/misc/karyasuchi/240317.pdf" },
          { day: "27"},
          { day: "28"},
          { day: "30"},
          { day: "31"},
        ],
      },
      {
        month: "मई",
        dates: [{ day: "3", pdf: "/misc/karyasuchi/030517.pdf" }],
      },
    ],
  },
  {
    number: "चतुर्दश",
    name: "जुलाई, 2017",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "17", pdf: "/misc/karyasuchi/170717.pdf" },
          { day: "18", pdf: "/misc/karyasuchi/180717.pdf" },
          { day: "19", pdf: "/misc/karyasuchi/190717.pdf" },
          { day: "20", pdf: "/misc/karyasuchi/200717.pdf" },
          { day: "21", pdf: "/misc/karyasuchi/210717.pdf" },
          { day: "24", pdf: "/misc/karyasuchi/240717.pdf" },
          { day: "25", pdf: "/misc/karyasuchi/250717.pdf" },
          { day: "26", pdf: "/misc/karyasuchi/260717.pdf" },
          { day: "27"},
          { day: "28"},
        ],
      },
    ],
  },
  {
    number: "पंचदश",
    name: "नवम्बर-दिसम्बर, 2017",
    months: [
      {
        month: "नवम्बर",
        dates: [
          { day: "27", pdf: "/misc/karyasuchi/271117.pdf" },
          { day: "28", pdf: "/misc/karyasuchi/281117.pdf" },
          { day: "29", pdf: "/misc/karyasuchi/291117.pdf" },
          { day: "30", pdf: "/misc/karyasuchi/301117.pdf" },
        ],
      },
      {
        month: "दिसम्बर",
        dates: [
          { day: "1", pdf: "/misc/karyasuchi/011217.pdf" },
          { day: "4", pdf: "/misc/karyasuchi/041217.pdf" },
          { day: "5" },
          { day: "6"},
          { day: "7" },
          { day: "8" },
        ],
      },
    ],
  },
  {
    number: "षोडश",
    name: "फरवरी-मार्च, 2018",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "26", pdf: "/misc/karyasuchi/260218.pdf" },
          { day: "27", pdf: "/misc/karyasuchi/270218.pdf" },
          { day: "28", pdf: "/misc/karyasuchi/280218.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "7", pdf: "/misc/karyasuchi/070318.pdf" },
          { day: "8", pdf: "/misc/karyasuchi/080318.pdf" },
          { day: "9", pdf: "/misc/karyasuchi/090318.pdf" },
          { day: "12", pdf: "/misc/karyasuchi/120318.pdf" },
          { day: "13", pdf: "/misc/karyasuchi/130318.pdf" },
          { day: "14", pdf: "/misc/karyasuchi/140318.pdf" },
          { day: "15", pdf: "/misc/karyasuchi/150318.pdf" },
          { day: "16", pdf: "/misc/karyasuchi/160318.pdf" },
          { day: "20", pdf: "/misc/karyasuchi/200318.pdf" },
          { day: "21", pdf: "/misc/karyasuchi/210318.pdf" },
          { day: "(पुनरीक्षित अनु. कार्यसूची)", pdf: "/misc/karyasuchi/210318%20punrikshit%20anupurak.pdf" },

          { day: "22" },
          { day: "23" },
          { day: "26" },
          { day: "27"},
          { day: "28"},
        ],
      },
    ],
  },
  {
    number: "सप्तदश",
    name: "जून, 2018",
    months: [
      {
        month: "जून",
        dates: [
          { day: "25" },
          { day: "26"},
          { day: "27"},
          { day: "28" },
          { day: "29" },
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
    header: {
      textAlign: "center",
      backgroundColor: "#1d4ed8",
      color: "#fff",
      padding: "25px 10px",
      borderRadius: "12px",
      marginBottom: "25px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      position: "relative",
    },
    backButton: {
      position: "absolute",
      left: "20px",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "#ffffff",
      color: "#1d4ed8",
      border: "none",
      padding: "8px 16px",
      borderRadius: "8px",
      fontWeight: 600,
      cursor: "pointer",
      textDecoration: "none",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      transition: "all 0.2s ease",
    },
    title: { fontSize: "2rem", fontWeight: 700 },
    subTitle: { fontSize: "1.1rem", marginTop: "5px", opacity: 0.9 },
    calendarGrid: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" },
    sessionCard: {
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      padding: "20px",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
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
    dateGrid: { display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" },
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
    specialDateCell: { backgroundColor: "#fde68a", color: "#b45309", border: "1px solid #fcd34d" },
  };

  const getDisplayText = (d) => {
    if (d.includes("अनुपूरक")) return d.replace("अनुपूरक", "अनु.");
    if (d.includes("पुनरीक्षित")) return d.replace("पुनरीक्षित", "संश.");
    return d;
  };

  const isSpecial = (d) => d.includes("अनुपूरक") || d.includes("पुनरीक्षित");

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
               <p>चतुर्दश विधान सभा (2014–2018)</p>
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
export default DainikKaryasuchi14;
