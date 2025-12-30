import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SanksheptKaryaVivran2015 = () => {
  const navigate = useNavigate();

const data = [
  {
    number: "प्रथम सत्र",
    name: "जनवरी, 2019",
    months: [
      {
        month: "जनवरी",
        dates: [
          { day: "07" , pdf:"/misc/sanshipt/s070119.pdf"},
          { day: "08" , pdf:"/misc/sanshipt/s080119.pdf"},
          { day: "09" , pdf:"/misc/sanshipt/s090119.pdf"},
          { day: "10" , pdf:"/misc/sanshipt/s100119.pdf"},
          { day: "11" , pdf:""},
        ],
      },
    ],
  },
  {
    number: "द्वितीय सत्र",
    name: "फरवरी, 2019",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "18" , pdf:"/misc/sanshipt/s180219.pdf"},
          { day: "20" , pdf:"/misc/sanshipt/s200219.pdf"},
          { day: "21" , pdf:"/misc/sanshipt/s210219.pdf"},
        ],
      },
    ],
  },
  {
    number: "तृतीय सत्र",
    name: "जुलाई, 2019",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "08", pdf:"/misc/sanshipt/s080719.pdf"},
          { day: "09", pdf:"/misc/sanshipt/s090719.pdf"},
          { day: "10", pdf:"/misc/sanshipt/s100719.pdf"},
          { day: "11", pdf:"/misc/sanshipt/s110719.pdf"},
          { day: "12", pdf:"/misc/sanshipt/s120719.pdf"},
          { day: "15", pdf:"/misc/sanshipt/s150719.pdf"},
          { day: "16", pdf:"/misc/sanshipt/s160719.pdf"},
          { day: "17", pdf:"/misc/sanshipt/s170719.pdf"},
          { day: "18", pdf:"/misc/sanshipt/s180719.pdf"},
          { day: "19", pdf:"/misc/sanshipt/s190719.pdf"},
          { day: "20", pdf:"/misc/sanshipt/s200719.pdf"},
          { day: "21", pdf:"/misc/sanshipt/s210719.pdf"},
          { day: "22", pdf:"/misc/sanshipt/s220719.pdf"},
          { day: "23", pdf:"/misc/sanshipt/s230719.pdf"},
          { day: "24", pdf:"/misc/sanshipt/s240719.pdf"},
          { day: "25", pdf:"/misc/sanshipt/s250719.pdf"},
          { day: "26", pdf:"/misc/sanshipt/s260719.pdf"},
        ],
      },
    ],
  },
  {
    number: "चतुर्थ सत्र",
    name: "दिसम्बर, 2019",
    months: [
      {
        month: "दिसम्बर",
        dates: [
          { day: "17", pdf:"/misc/sanshipt/s171219.pdf"},
          { day: "18", pdf:"/misc/sanshipt/s181219.pdf"},
          { day: "19", pdf:"/misc/sanshipt/s191219.pdf"},
          { day: "20", pdf:"/misc/sanshipt/s201219.pdf"},
          { day: "23", pdf:""},
        ],
      },
      {
        month: "जनवरी",
        dates: [
          { day: "16", pdf:"/misc/sanshipt/s160120.pdf" },
          { day: "17", pdf:"/misc/sanshipt/s170120.pdf" },
        ],
      },
    ],
  },
  {
    number: "पंचम सत्र",
    name: "मार्च-अप्रैल, 2020",
    months: [
      {
        month: "मार्च",
        dates: [
          { day: "16", pdf:"/misc/sanshipt/s160320.pdf"},
          { day: "17", pdf:""},
          { day: "18", pdf:""},
          { day: "19", pdf:""},
          { day: "20", pdf:"/misc/sanshipt/s200320.pdf"},
          { day: "23", pdf:""},
          { day: "24", pdf:""},
          { day: "26", pdf:""},
          { day: "27", pdf:""},
          { day: "30", pdf:""},
          { day: "31", pdf:""},
        ],
      },
      {
        month: "अप्रैल",
        dates: [
          { day: "01" , pdf:""},
          { day: "03" , pdf:""},
          { day: "07" , pdf:""},
          { day: "08" , pdf:""},
          { day: "09" , pdf:""},
          { day: "13" , pdf:""},
        ],
      },
    ],
  },
  {
    number: "षष्टम् सत्र",
    name: "मार्च, 2020",
    months: [
      {
        month: "मार्च",
        dates: [
          { day: "24" , pdf:"/misc/sanshipt/s240320.pdf"},
          { day: "25" , pdf:""},
          { day: "26" , pdf:""},
          { day: "27" , pdf:""},
        ],
      },
    ],
  },
  {
    number: "सप्तम् सत्र",
    name: "सितम्बर, 2020",
    months: [
      {
        month: "सितम्बर",
        dates: [
          { day: "21", pdf:"/misc/sanshipt/s210920.pdf"},
          { day: "22", pdf:""},
          { day: "23", pdf:""},
        ],
      },
    ],
  },
  {
    number: "अष्टम् सत्र",
    name: "फरवरी-मार्च, 2021",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "22" , pdf:"/misc/sanshipt/s220221.pdf"},
          { day: "23" , pdf:"/misc/sanshipt/s230221.pdf"},
          { day: "24" , pdf:"/misc/sanshipt/s240221.pdf"},
          { day: "25" , pdf:"/misc/sanshipt/s250221.pdf"},
          { day: "26" , pdf:"/misc/sanshipt/s260221.pdf"},
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "01" , pdf:"/misc/sanshipt/s010321.pdf"},
          { day: "02" , pdf:"/misc/sanshipt/s020321.pdf"},
          { day: "03" , pdf:""},
          { day: "04" , pdf:"/misc/sanshipt/s040321.pdf"},
          { day: "05" , pdf:"/misc/sanshipt/s050321.pdf"},
          { day: "08" , pdf:"/misc/sanshipt/s080321.pdf"},
          { day: "09" , pdf:"/misc/sanshipt/s090321.pdf"},
          { day: "10" , pdf:""},
          { day: "15" , pdf:"/misc/sanshipt/s150321.pdf"},
          { day: "16" , pdf:"/misc/sanshipt/s160321.pdf"},
          { day: "17" , pdf:""},
          { day: "18" , pdf:""},
          { day: "19" , pdf:""},
          { day: "22" , pdf:""},
          { day: "23" , pdf:""},
          { day: "24" , pdf:""},
          { day: "25" , pdf:""},
          { day: "26" , pdf:""},
        ],
      },
    ],
  },
  {
    number: "नवम् सत्र", 
    name: "अगस्त, 2021",
    months: [
      {
        month: "अगस्त",
        dates: [
          { day: "09" , pdf:"/misc/sanshipt/s090821.pdf"},
          { day: "10" , pdf:"/misc/sanshipt/s100821.pdf"},
          { day: "11" , pdf:""},
          { day: "12" , pdf:""},
        ],
      },
    ],
  },
  {
    number: "दशम् सत्र",
    name: "दिसम्बर, 2021",
    months: [
      {
        month: "दिसम्बर",
        dates: [
          { day: "20" , pdf:"/misc/sanshipt/s201221.pdf"},
          { day: "21" , pdf:"/misc/sanshipt/s211221.pdf"},
          { day: "22" , pdf:"/misc/sanshipt/s221221.pdf"},
          { day: "23" , pdf:"/misc/sanshipt/s231221.pdf"},
          { day: "24" , pdf:"/misc/sanshipt/s241221.pdf"},
        ],
      },
    ],
  },
  {
    number: "एकादश सत्र",
    name: "मार्च, 2022",
    months: [
      {
        month: "मार्च",
        dates: [
          { day: "07", pdf:"/misc/sanshipt/s070322.pdf"},
          { day: "08", pdf:"/misc/sanshipt/s080322.pdf"},
          { day: "09", pdf:"/misc/sanshipt/s090322.pdf"},
          { day: "10", pdf:"/misc/sanshipt/s100322.pdf"},
          { day: "11", pdf:"/misc/sanshipt/s110322.pdf"},
          { day: "14", pdf:"/misc/sanshipt/s140322.pdf"},
          { day: "15", pdf:"/misc/sanshipt/s150322.pdf"},
          { day: "16", pdf:"/misc/sanshipt/s160322.pdf"},
          { day: "17", pdf:"/misc/sanshipt/s170322.pdf"},
          { day: "21", pdf:"/misc/sanshipt/s210322.pdf"},
          { day: "23", pdf:"/misc/sanshipt/s230322.pdf"},
          { day: "24", pdf:"/misc/sanshipt/s240322.pdf"},
          { day: "25", pdf:"/misc/sanshipt/s250322.pdf"},
        ],
      },
    ],
  },
  {
    number: "द्वादश सत्र",
    name: "सितम्बर, 2022",
    months: [
      {
        month: "सितम्बर",
        dates: [
          { day: "13", pdf:"/misc/sanshipt/s130922.pdf"},
          { day: "14", pdf:"/misc/sanshipt/s140922.pdf"},
          { day: "15", pdf:"/misc/sanshipt/s150922.pdf"},
          { day: "16", pdf:""},
          { day: "17", pdf:""},
        ],
      },
    ],
  },
  {
    number: "त्रयोदश सत्र",
    name: "दिसम्बर, 2022",
    months: [
      {
        month: "दिसम्बर",
        dates: [
          { day: "19", pdf:"/misc/sanshipt/s191222.pdf"},
          { day: "20", pdf:"/misc/sanshipt/s201222.pdf"},
          { day: "21", pdf:"/misc/sanshipt/s211222.pdf"},
          { day: "22", pdf:"/misc/sanshipt/s221222.pdf"},
          { day: "23", pdf:""},
        ],
      },
    ],
  },
  {
    number: "चतुर्दश सत्र",
    name: "फरवरी-मार्च, 2023",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "27", pdf:"/misc/sanshipt/s270223.pdf" },
          { day: "28", pdf:"/misc/sanshipt/s280223.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "01", pdf:"/misc/sanshipt/s010323.pdf"},
          { day: "02", pdf:"/misc/sanshipt/s020323.pdf"},
          { day: "03", pdf:"/misc/sanshipt/s030323.pdf"},
          { day: "13", pdf:"/misc/sanshipt/s130323.pdf"},
          { day: "14", pdf:"/misc/sanshipt/s140323.pdf"},
          { day: "15", pdf:"/misc/sanshipt/s150323.pdf"},
          { day: "16", pdf:"/misc/sanshipt/s160323.pdf"},
          { day: "17", pdf:"/misc/sanshipt/s170323.pdf"},
          { day: "20", pdf:"/misc/sanshipt/s200323.pdf"},
          { day: "21", pdf:"/misc/sanshipt/s210323.pdf"},
          { day: "27", pdf:"/misc/sanshipt/s270323.pdf"},
        ],
      },
    ],
  },
  {
    number: "पंचदश सत्र",
    name: "जुलाई, 2023",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "11" , pdf:"/misc/sanshipt/s110723.pdf"},
          { day: "12" , pdf:"/misc/sanshipt/s120723.pdf"},
          { day: "13" , pdf:""},
          { day: "14" , pdf:""},
          { day: "15" , pdf:""},
        ],
      },
    ],
  },
];


  const assemblies = [
   
  ];

 const styles = {
     page: {
       fontFamily: "'Noto Sans Devanagari', sans-serif",
       backgroundColor: "#f3f4f6",
       minHeight: "100vh",
       // padding: "20px",
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
       top: "20px",
       backgroundColor: "#fff",
       color: "#1d4ed8",
       border: "1px solid #1d4ed8",
       padding: "6px 14px",
       borderRadius: "8px",
       fontSize: "0.95rem",
       fontWeight: 600,
       cursor: "pointer",
       transition: "all 0.2s ease",
     },
     title: {
       fontSize: "2rem",
       fontWeight: 700,
     },
     subTitle: {
       fontSize: "1.1rem",
       marginTop: "5px",
       opacity: 0.9,
     },
     calendarFlex: {
       display: "flex",
       flexWrap: "wrap",
       justifyContent: "center",
       gap: "25px",
     },
     sessionCard: {
       backgroundColor: "#ffffff",
       borderRadius: "15px",
       boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
       padding: "20px",
       width: "340px",
     },
     sessionTitleLine: {
       fontSize: "1.2rem",
       color: "#1e3a8a",
       fontWeight: 700,
       textAlign: "center",
       marginBottom: "12px",
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
     dateFlex: {
       display: "flex",
       flexWrap: "wrap",
       justifyContent: "center",
       gap: "8px",
     },
     dateLink: {
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
     },
     // assembliesDivider: {
     //   width: "100%",
     //   height: "2px",
     //   background: "linear-gradient(to right, transparent, #2563eb, transparent)",
     //   margin: "50px 0 25px",
     // },
     smallGrid: {
       display: "flex",
       flexWrap: "wrap",
       justifyContent: "center",
       gap: "10px",
     },
     assemblyCard: {
       backgroundColor: "#e2e8f0",
       borderRadius: "8px",
       padding: "12px 18px",
       textAlign: "center",
       fontSize: "0.95rem",
       fontWeight: 600,
       color: "#1e293b",
       textDecoration: "none",
       boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
       transition: "all 0.3s ease",
     },
   };
 
  return (
     <div style={styles.page}>
       {/* 🔵 UPDATED HERO SECTION USING YOUR GLOBAL CSS */}
       <div className="panch-hero">
         <div className="panch-hero-content">
           <div className="panch-hero-row">
   
             {/* Back Button */}
             <button
               className="panch-btn"
               onClick={() => {
                 if (window.history.state && window.history.state.idx > 0) {
                   navigate(-1);
                 } else {
                   navigate("/home");
                 }
               }}
             >
               पीछे जाये
             </button>
   
             {/* Center Text */}
             <div className="panch-hero-text">
               <h1>संक्षिप्त कार्य विवरण</h1>
               <p>पंचदश विधान सभा (2019 से ...)</p>
             </div>
   
           </div>
         </div>
       </div>
   
       {/* 🔵 YOUR CALENDAR CODE (UNTOUCHED) */}
       <div style={styles.calendarFlex}>
         {data.map((session, idx) => (
           <div key={idx} style={styles.sessionCard}>
             <div style={styles.sessionTitleLine}>
               {session.number} ({session.name})
             </div>
   
             {session.months.map((m, i) => (
               <div key={i} style={styles.monthBlock}>
                 <div style={styles.monthTitle}>{m.month}</div>
                 <div style={styles.dateFlex}>
                   {m.dates.map((d, j) =>
                     d.pdf ? (
                       <a
                         key={j}
                         href={d.pdf}
                         target="_blank"
                         rel="noopener noreferrer"
                         style={styles.dateLink}
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
                           ...styles.dateLink,
                           backgroundColor: "#f1f5f9",
                           color: "#94a3b8",
                           border: "1px solid #e2e8f0",
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
   
       {/* Divider + Other Assemblies */}
       <div style={styles.assembliesDivider}></div>
       <div style={styles.smallGrid}>
         {assemblies.map((a, i) => (
           <Link
             key={i}
             to={a.route}
             style={styles.assemblyCard}
             onMouseEnter={(e) => {
               e.currentTarget.style.backgroundColor = "#2563eb";
               e.currentTarget.style.color = "#fff";
               e.currentTarget.style.transform = "translateY(-3px)";
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.backgroundColor = "#e2e8f0";
               e.currentTarget.style.color = "#1e293b";
               e.currentTarget.style.transform = "none";
             }}
           >
             {a.title}
           </Link>
         ))}
       </div>
     </div>
   );
   };
 
export default SanksheptKaryaVivran2015;