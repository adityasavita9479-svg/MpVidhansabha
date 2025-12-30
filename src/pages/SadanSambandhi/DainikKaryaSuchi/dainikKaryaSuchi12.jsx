import React from "react";
import { Link } from "react-router-dom";

const DainikKaryasuchi12 = () => {
  const data = [
  {
    "number": "प्रथम",
    "name": "दिसंबर, 2003",
    "months": [
      {
        "month": "दिसंबर",
        "dates": [
          { "day": "15", "pdf": "/karyasuchi/151203.pdf" },
          { "day": "16", "pdf": "/karyasuchi/161203.pdf" },
          { "day": "17", "pdf": "/karyasuchi/171203.pdf" },
          { "day": "18", "pdf": "/karyasuchi/181203.pdf" }
        ]
      }
    ]
  },
  {
    "number": "द्वितीय",
    "name": "फरवरी–मार्च, 2004",
    "months": [
      {
        "month": "फरवरी",
        "dates": [
          { "day": "23", "pdf": "/karyasuchi/230204.pdf" },
          { "day": "24", "pdf": "/karyasuchi/240204.pdf" },
          { "day": "25", "pdf": "/karyasuchi/250204.pdf" },
          { "day": "26", "pdf": "/karyasuchi/260204.pdf" },
          { "day": "27", "pdf": "/karyasuchi/270204.pdf" },]
      },
      {
        "month": "मार्च",
        "dates": [
          
          { "day": "1" },
          { "day": "3", "pdf": "/karyasuchi/030304.pdf" },
          { "day": "4", "pdf": "/karyasuchi/040304.pdf" },
          { "day": "5", "pdf": "/karyasuchi/050304.pdf" }
        ]
      }
    ]
  },
  {
    "number": "तृतीय",
    "name": "जून–जुलाई, 2004",
    "months": [
      {
        "month": "जून",
        "dates": [
          { "day": "24", "pdf": "/karyasuchi/240604.pdf" },
          { "day": "25", "pdf": "/karyasuchi/250604.pdf" },
          { "day": "28", "pdf": "/karyasuchi/280604.pdf" },
          { "day": "29" },
          { "day": "30" },
          { "day": "1" },
          { "day": "2" },
          { "day": "5" },
          { "day": "6" },
          { "day": "7" },
          { "day": "8" },
          


          
        ]
      },
      {
        "month": "जुलाई",
        "dates": [
          { "day": "9" },
          { "day": "12", "pdf": "/karyasuchi/120704.pdf" },
          { "day": "13", "pdf": "/karyasuchi/130704.pdf" },
          { "day": "14", "pdf": "/karyasuchi/140704.pdf" },
          { "day": "15", "pdf": "/karyasuchi/150704.pdf" },
          { "day": "16", "pdf": "/karyasuchi/160704.pdf" },
          { "day": "19", "pdf": "/karyasuchi/190704.pdf" },
          { "day": "20", "pdf": "/karyasuchi/200704.pdf" },
          { "day": "21", "pdf": "/karyasuchi/210704.pdf" },
          { "day": "22", "pdf": "/karyasuchi/220704.pdf" },
          { "day": "23", "pdf": "/karyasuchi/230704.pdf" },
          { "day": "26", "pdf": "/karyasuchi/260704.pdf" },
          { "day": "27", "pdf": "/karyasuchi/270704.pdf" },
          { "day": "28", "pdf": "/karyasuchi/280704.pdf" },
          { "day": "29", "pdf": "/karyasuchi/290704.pdf" },
          { "day": "30", "pdf": "/karyasuchi/300704.pdf" }
        ]
      }
    ]
  },
  {
    "number": "चतुर्थ",
    "name": "नवम्बर–दिसंबर, 2004",
    "months": [
      {
        "month": "नवम्बर",
        "dates": [
          { "day": "29", "pdf": "/karyasuchi/291104.pdf" },
          { "day": "30", "pdf": "/karyasuchi/301104.pdf" }
        ]
      },
      {
        "month": "दिसंबर",
        "dates": [
          { "day": "6", "pdf": "/karyasuchi/061204.pdf" },
          { "day": "7", "pdf": "/karyasuchi/071204.pdf" },
          { "day": "8", "pdf": "/karyasuchi/081204.pdf" },
          { "day": "9", "pdf": "/karyasuchi/091204.pdf" },
          { "day": "10", "pdf": "/karyasuchi/101204.pdf" }
        ]
      }
    ]
  },
  {
    "number": "पंचम",
    "name": "फरवरी–मार्च, 2005",
    "months": [
      {
        "month": "फरवरी",
        "dates": [
          { "day": "7", "pdf": "/karyasuchi/070205.pdf" },
          { "day": "8", "pdf": "/karyasuchi/080205.pdf" },
          { "day": "9", "pdf": "/karyasuchi/090205.pdf" },
          { "day": "10", "pdf": "/karyasuchi/100205.pdf" },
          { "day": "11" },
          { "day": "14" },
          { "day": "15", "pdf": "/karyasuchi/150205.pdf" },
          { "day": "16", "pdf": "/karyasuchi/160205.pdf" },
          { "day": "17", "pdf": "/karyasuchi/170205.pdf" },
          { "day": "18", "pdf": "/karyasuchi/180205.pdf" },
          { "day": "21", "pdf": "/karyasuchi/210205.pdf" },
          { "day": "22", "pdf": "/karyasuchi/220205.pdf" },
          { "day": "23" },
          { "day": "28", "pdf": "/karyasuchi/280205.pdf" },
        ]
      },
      {
        "month": "मार्च",
        "dates": [
          
          { "day": "1", "pdf": "/karyasuchi/010305.pdf" },
          { "day": "2", "pdf": "/karyasuchi/020305.pdf" },
          { "day": "3", "pdf": "/karyasuchi/030305.pdf" },
          { "day": "4", "pdf": "/karyasuchi/040305.pdf" },
          { "day": "9", "pdf": "/karyasuchi/090305.pdf" },
          { "day": "10", "pdf": "/karyasuchi/100305.pdf" },
          { "day": "11", "pdf": "/karyasuchi/110305.pdf" },
          { "day": "14", "pdf": "/karyasuchi/140305.pdf" },
          { "day": "15", "pdf": "/karyasuchi/150305.pdf" },
          { "day": "16", "pdf": "/karyasuchi/160305.pdf" },
          { "day": "17" },
          { "day": "18" }
        ]
      }
    ]
  },
  {
    "number": "षष्टम",
    "name": "जुलाई–अगस्त, 2005",
    "months": [
      {
        "month": "जुलाई",
        "dates": [
          { "day": "25", "pdf": "/karyasuchi/250705.pdf" },
          { "day": "26", "pdf": "/karyasuchi/260705.pdf" },
          { "day": "27", "pdf": "/karyasuchi/270705.pdf" },
          { "day": "28", "pdf": "/karyasuchi/280705.pdf" },
          { "day": "29", "pdf": "/karyasuchi/290705.pdf" }
        ]
      },
      {
        "month": "अगस्त",
        "dates": [
          
          { "day": "8" },
          { "day": "9" },
          { "day": "10" }
        ]
      }
    ]
  },
  {
    "number": "सप्तम",
    "name": "दिसंबर 2005–जनवरी 2006",
    "months": [
      {
        "month": "दिसंबर",
        "dates": [
           { "day": "23", "pdf": "/karyasuchi/231205.pdf" },
          { "day": "26" },
          { "day": "27" },
          { "day": "28" },
          { "day": "29" },
          { "day": "30" }
        ]
      },
      {
        "month": "जनवरी",
        "dates": [
         
        ]
      }
    ]
  },
  {
    "number": "अष्टम",
    "name": "फरवरी–मार्च, 2006",
    "months": [
      {
        "month": "फरवरी",
        "dates": [
          { "day": "14", "pdf": "/karyasuchi/140206.pdf" },
          { "day": "15", "pdf": "/karyasuchi/150206.pdf" },
          { "day": "16", "pdf": "/karyasuchi/160206.pdf" },
          { "day": "17", "pdf": "/karyasuchi/170206.pdf" },
          { "day": "20", "pdf": "/karyasuchi/200206.pdf" },
          { "day": "21" , "pdf": "/karyasuchi/210206.pdf"},
          { "day": "22" , "pdf": "/karyasuchi/220206.pdf"},
          { "day": "23" , "pdf": "/karyasuchi/230206.pdf"},
          { "day": "24" , "pdf": "/karyasuchi/240206.pdf"},
          { "day": "27" },
          { "day": "28" , "pdf": "/karyasuchi/280206.pdf"},



        ]
      },
      {
        "month": "मार्च",
        "dates": [

          { "day": "1", "pdf": "/karyasuchi/010306.pdf" },
          { "day": "2", "pdf": "/karyasuchi/020306.pdf" },
          { "day": "3", "pdf": "/karyasuchi/030306.pdf" },
          { "day": "6", "pdf": "/karyasuchi/060306.pdf" },
          { "day": "7", "pdf": "/karyasuchi/070306.pdf" },
          { "day": "8" , "pdf": "/karyasuchi/080306.pdf"},
          { "day": "9" , "pdf": "/karyasuchi/090306.pdf"},
          { "day": "10" , "pdf": "/karyasuchi/100306.pdf"},
          { "day": "21" , "pdf": "/karyasuchi/210306.pdf"},
          { "day": "22", "pdf":"/karyasuchi/220306.pdf"},
          { "day": "23" , "pdf": "/karyasuchi/230306.pdf"},
          { "day": "24" , "pdf": "/karyasuchi/240306.pdf"},

        ]
      },
      {
        "month": "अप्रैल",
        "dates": [
          { "day": "27", "pdf": "/karyasuchi/140206.pdf" },
          { "day": "28", "pdf": "/karyasuchi/150206.pdf" },
          { "day": "29", "pdf": "/karyasuchi/160206.pdf" },
          { "day": "30", "pdf": "/karyasuchi/170206.pdf" },
          { "day": "31", "pdf": "/karyasuchi/200206.pdf" },
          { "day": "3", "pdf": "/karyasuchi/210206.pdf" },
          { "day": "4", "pdf": "/karyasuchi/220206.pdf" },
          { "day": "5", "pdf": "/karyasuchi/230206.pdf" },
          
        ]
      },
      
    ]
  },
  {
    "number": "नवम्",
    "name": "जुलाई, 2006",
    "months": [
      {
        "month": "जुलाई",
        "dates": [
          { "day": "17", "pdf": "/karyasuchi/170706.pdf" },
          { "day": "18", "pdf": "/karyasuchi/180706.pdf" },
          { "day": "19", "pdf": "/karyasuchi/190706.pdf" },
          { "day": "20", "pdf": "/karyasuchi/200706.pdf" },
          { "day": "21", "pdf": "/karyasuchi/210706.pdf" },
          { "day": "24", "pdf": "/karyasuchi/240706.pdf" },
          { "day": "25", "pdf": "/karyasuchi/250706.pdf" },
          { "day": "26", "pdf": "/karyasuchi/260706.pdf" },
          { "day": "27" },
          { "day": "28" }
        ]
      }
    ]
  },
  {
    "number": "दशम्",
    "name": "अक्टूबर–नवम्बर, 2006",
    "months": [
      {
        "month": "अक्टूबर",
        "dates": [
          { "day": "31", "pdf": "/karyasuchi/311006.pdf" },
          { "day": "1", "pdf": "/karyasuchi/011106.pdf" },
          { "day": "2", "pdf": "/karyasuchi/021106.pdf" },
          { "day": "3", "pdf": "/karyasuchi/031106.pdf" },
          { "day": "6", "pdf": "/karyasuchi/061106.pdf" },
          { "day": "7", "pdf": "/karyasuchi/071106.pdf" },
          { "day": "8", "pdf": "/karyasuchi/081106.pdf" },
        ]
      },
      {
        "month": "नवम्बर",
        "dates": [
        
          
          { "day": "9", "pdf": "/karyasuchi/091106.pdf" },
          { "day": "10" }
        ]
      }
    ]
  },
  {
    "number": "एकादश",
    "name": "फरवरी–मार्च, 2007",
    "months": [
      {
        "month": "फरवरी",
        "dates": [
          { "day": "19", "pdf": "/karyasuchi/190207.pdf" },
          { "day": "20", "pdf": "/karyasuchi/200207.pdf" },
          { "day": "21", "pdf": "/karyasuchi/210207.pdf" },
          { "day": "22", "pdf": "/karyasuchi/220207.pdf" },
          { "day": "23", "pdf": "/karyasuchi/230207.pdf" },
          { "day": "26", "pdf": "/karyasuchi/260207.pdf" },
          { "day": "27" },
          { "day": "28" },
        ]
      },
      {
        "month": "मार्च",
        "dates": [
          { "day": "1" },
          { "day": "2" },
          { "day": "12", "pdf": "/karyasuchi/120307.pdf" },
          { "day": "13", "pdf": "/karyasuchi/130307.pdf" },
          { "day": "14", "pdf": "/karyasuchi/140307.pdf" },
          { "day": "15", "pdf": "/karyasuchi/150307.pdf" },
          { "day": "16", "pdf": "/karyasuchi/160307.pdf" },
          { "day": "17", "pdf": "/karyasuchi/170307.pdf" },
          { "day": "21", "pdf": "/karyasuchi/210307.pdf" },
          { "day": "22", "pdf": "/karyasuchi/220307.pdf" },
          { "day": "23", "pdf": "/karyasuchi/230307.pdf" },
          { "day": "28" },
          { "day": "29", "pdf": "/karyasuchi/290307.pdf" },
          { "day": "30", "pdf": "/karyasuchi/300307.pdf" },
        ]
      },
      {
        "month": "अप्रैल",
        "dates": [
          
          
          { "day": "2" },
          { "day": "3" },
          { "day": "4" },
          { "day": "5" }
        ]
      }
    ]
  },
  {
    "number": "द्वादश",
    "name": "जुलाई–अगस्त, 2007",
    "months": [
      {
        "month": "जुलाई",
        "dates": [
          { "day": "18", "pdf": "/karyasuchi/180707.pdf" },
          { "day": "23", "pdf": "/karyasuchi/230707.pdf" },
          { "day": "24", "pdf": "/karyasuchi/240707.pdf" },
          { "day": "25", "pdf": "/karyasuchi/250707.pdf" },
          { "day": "26", "pdf": "/karyasuchi/260707.pdf" },
          { "day": "27", "pdf": "/karyasuchi/270707.pdf" },
          { "day": "30", "pdf": "/karyasuchi/300707.pdf" },
          { "day": "31", "pdf": "/karyasuchi/310707.pdf" }
        ]
      },
      {
        "month": "अगस्त",
        "dates": [
          { "day": "1", "pdf": "/karyasuchi/010807.pdf" },
          { "day": "2" },
          { "day": "3" }
        ]
      }
    ]
  },
  {
    "number": "त्रयोदश",
    "name": "नवम्बर, 2007",
    "months": [
      {
        "month": "नवम्बर",
        "dates": [
          { "day": "26", "pdf": "/karyasuchi/261107.pdf" },
          { "day": "27", "pdf": "/karyasuchi/271107.pdf" },
          { "day": "28", "pdf": "/karyasuchi/281107.pdf" },
          { "day": "29" },
          { "day": "30" }
        ]
      },
      {
        "month": "दिसम्बर",
        "dates": [
          { "day": "4" },
          { "day": "5" },
          { "day": "6" },
          { "day": "7" }
        ]
      }
    ]
  },
  {
    "number": "चतुर्दश",
    "name": "फरवरी–मार्च, 2008",
    "months": [
      {
        "month": "फरवरी",
        "dates": [
          { "day": "25", "pdf": "/karyasuchi/250208.pdf" },
          { "day": "26", "pdf": "/karyasuchi/250208.pdf" },
          { "day": "27", "pdf": "/karyasuchi/270208.pdf" },
          { "day": "28", "pdf": "/karyasuchi/280208.pdf" },
          { "day": "29", "pdf": "/karyasuchi/290208.pdf" },
        ]
      },
      {
        "month": "मार्च",
        "dates": [
          { "day": "3", "pdf": "/karyasuchi/030308.pdf" },
          { "day": "4", "pdf": "/karyasuchi/040308.pdf" },
          { "day": "5", "pdf": "/karyasuchi/050308.pdf" },
          { "day": "7" },
          { "day": "10", "pdf": "/karyasuchi/100308.pdf" },
          { "day": "11", "pdf": "/karyasuchi/110308.pdf" },
          { "day": "12", "pdf": "/karyasuchi/120308.pdf" },
          { "day": "13", "pdf": "/karyasuchi/130308.pdf" },
          { "day": "14", "pdf": "/karyasuchi/140308.pdf" },
          { "day": "17", "pdf": "/karyasuchi/170308.pdf" },
          { "day": "18", "pdf": "/karyasuchi/180308.pdf" },
          { "day": "19", "pdf": "/karyasuchi/190308.pdf" },
          { "day": "20"},
          { "day": "31" },

        ]
      },
      {
        "month": "अप्रैल",
        "dates": [
          { "day": "1"},
          { "day": "2" },
          { "day": "3" },
          { "day": "4" },

          
          
        ]
      }
    ]
  },
  {
    "number": "पंचदश",
    "name": "जुलाई, 2008",
    "months": [
      {
        "month": "जुलाई",
        "dates": [
          { "day": "7", "pdf": "/karyasuchi/070708.pdf" },
          { "day": "8", "pdf": "/karyasuchi/070708.pdf" },
          { "day": "9", "pdf": "/karyasuchi/090708.pdf" },
          { "day": "10" },
          { "day": "11" }
        ]
      }
    ]
  }
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
     calendarGrid: {
       display: "flex",
       flexWrap: "wrap",
       justifyContent: "center",
       gap: "20px",
     },
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
       minWidth: "45px",
       textDecoration: "none",
     },
     specialDateCell: {
       backgroundColor: "#fde68a",
       color: "#b45309",
       border: "1px solid #fcd34d",
     },
   };
 
   const getDisplayText = (d) => {
     if (d.includes("अनुपूरक")) return d.replace("अनुपूरक", "अनु.");
     return d;
   };
 
   const isSpecial = (d) => d.includes("अनुपूरक");
 
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
                   <p>द्वादश विधान सभा (2003–2008)</p>
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
 
export default DainikKaryasuchi12;
