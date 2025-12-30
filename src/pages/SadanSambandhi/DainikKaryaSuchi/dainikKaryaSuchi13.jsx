import React from "react";
import { Link } from "react-router-dom";

const DainikKaryasuchi13 = () => {
  
    const data = [
  {
    number: "प्रथम",
    name: "जनवरी, 2009",
    months: [
      {
        month: "जनवरी",
        dates: [
          { day: "5", pdf: "/misc//karyasuchi/050109.pdf" },
          { day: "6", pdf: "/misc/karyasuchi/060109.pdf" },
          { day: "7", pdf: "/misc/karyasuchi/070109.pdf" },
          { day: "9"},
          { day: "12", pdf: "/misc/karyasuchi/120109.pdf" },
          { day: "13", pdf: "/misc/karyasuchi/130109.pdf" },
        ],
      },
    ],
  },
  {
    number: "द्वितीय",
    name: "मार्च, 2009",
    months: [
      {
        month: "मार्च",
        dates: [
          { day: "16", pdf: "/misc/karyasuchi/160309.pdf" },
          { day: "17", pdf: "/misc/karyasuchi/170309.pdf" },
          { day: "18", pdf: "/misc/karyasuchi/180309.pdf" },
          { day: "19"},
          { day: "20" },
        ],
      },
    ],
  },
  {
    number: "तृतीय",
    name: "जुलाई-अगस्त, 2009",
    months: [
      { month: "जुलाई", dates: [] },
      {
        month: "अगस्त",
        dates: [
          { day: "3"},
          { day: "4" },
          { day: "6", pdf: "/misc/karyasuchi/060709.pdf" },
          { day: "7", pdf: "/misc/karyasuchi/070709.pdf" },
          { day: "8", pdf: "/misc/karyasuchi/080709.pdf" },
          { day: "9", pdf: "/misc/karyasuchi/090709.pdf" },
          { day: "10", pdf: "/misc/karyasuchi/100709.pdf" },
          { day: "13", pdf: "/misc/karyasuchi/130709.pdf" },
          { day: "14", pdf: "/misc/karyasuchi/140709.pdf" },
          { day: "15", pdf: "/misc/karyasuchi/150709.pdf" },
          { day: "16", pdf: "/misc/karyasuchi/160709.pdf" },
          { day: "17", pdf: "/misc/karyasuchi/170709.pdf" },
          { day: "20", pdf: "/misc/karyasuchi/200709.pdf" },
          { day: "21", pdf: "/misc/karyasuchi/210709.pdf" },
          { day: "22", pdf: "/misc/karyasuchi/220709.pdf" },
          { day: "23", pdf: "/misc/karyasuchi/230709.pdf" },
          { day: "24", pdf: "/misc/karyasuchi/240709.pdf" },
          { day: "27", pdf: "/misc/karyasuchi/270709.pdf" },
          { day: "28", pdf: "/misc/karyasuchi/280709.pdf" },
          { day: "29"},
          { day: "30"},
          { day: "31" },
        ],
      },
    ],
  },
  {
    number: "चतुर्थ",
    name: "नवम्बर, 2009",
    months: [
      {
        month: "नवम्बर",
        dates: [
          { day: "16", pdf: "/misc/karyasuchi/161109.pdf" },
          { day: "17", pdf: "/misc/karyasuchi/171109.pdf" },
          { day: "18", pdf: "/misc/karyasuchi/181109.pdf" },
          { day: "19", pdf: "/misc/karyasuchi/191109.pdf" },
          { day: "20", pdf: "/misc/karyasuchi/201109.pdf" },
          { day: "23", pdf: "/misc/karyasuchi/231109.pdf" },
          { day: "24", pdf: "/misc/karyasuchi/241109.pdf" },
          { day: "25" },
          { day: "26" },
          { day: "27" },
        ],
      },
    ],
  },
  {
    number: "पंचम",
    name: "फरवरी–मार्च, 2010",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "22", pdf: "/misc/karyasuchi/220210.pdf" },
          { day: "23", pdf: "/misc/karyasuchi/230210.pdf" },
          { day: "24", pdf: "/misc/karyasuchi/240210.pdf" },
          { day: "25", pdf: "/misc/karyasuchi/250210.pdf" },
          { day: "26", pdf: "/misc/karyasuchi/260210.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "8", pdf: "/misc/karyasuchi/080310.pdf" },
          { day: "9", pdf: "/misc/karyasuchi/090310.pdf" },
          { day: "10", pdf: "/misc/karyasuchi/100310.pdf" },
          { day: "11", pdf: "/misc/karyasuchi/110310.pdf" },
          { day: "12", pdf: "/misc/karyasuchi/120310.pdf" },
          { day: "18", pdf: "/misc/karyasuchi/180310.pdf" },
          { day: "19", pdf: "/misc/karyasuchi/190310.pdf" },
          { day: "22", pdf: "/misc/karyasuchi/220310.pdf" },
          { day: "23", pdf: "/misc/karyasuchi/230310.pdf" },
          { day: "25", pdf: "/misc/karyasuchi/250310.pdf" },
          { day: "26", pdf: "/misc/karyasuchi/260310.pdf" },
        ],
      },
    ],
  },
  {
    number: "षष्टम",
    name: "मई, 2010",
    months: [
      {
        month: "मई",
        dates: [
          { day: "11", pdf: "/misc/karyasuchi/110510.pdf" },
          { day: "12", pdf: "/misc/karyasuchi/120510.pdf" },
          { day: "13", pdf: "/misc/karyasuchi/130510.pdf" },
          { day: "14", pdf: "/misc/karyasuchi/140510.pdf" },
        ],
      },
    ],
  },
  {
    number: "सप्तम",
    name: "जुलाई, 2010",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "19", pdf: "/misc/karyasuchi/190710.pdf" },
          { day: "20", pdf: "/misc/karyasuchi/200710.pdf" },
          { day: "21", pdf: "/misc/karyasuchi/210710.pdf" },
          { day: "22", pdf: "/misc/karyasuchi/220710.pdf" },
          { day: "23", pdf: "/misc/karyasuchi/230710.pdf" },
          { day: "26", pdf: "/misc/karyasuchi/260710.pdf" },
          { day: "27", pdf: "/misc/karyasuchi/270710.pdf" },
          { day: "28", pdf: "/misc/karyasuchi/280710.pdf" },
          { day: "29", pdf: "/misc/karyasuchi/290710.pdf" },
          { day: "30", pdf: "/misc/karyasuchi/300710.pdf" },
        ],
      },
    ],
  },
  {
    number: "अष्टम",
    name: "नवम्बर, 2010",
    months: [
      {
        month: "नवम्बर",
        dates: [
          { day: "22", pdf: "/misc/karyasuchi/221110.pdf" },
          { day: "23", pdf: "/misc/karyasuchi/231110.pdf" },
          { day: "24", pdf: "/misc/karyasuchi/241110.pdf" },
          { day: "25", pdf: "/misc/karyasuchi/251110.pdf" },
          { day: "26"},
        ],
      },
    ],
  },
  // Continue with नवम् (2011) to सप्तदश (2013) in the same format



    {
      number: "नवम्",
      name: "फरवरी-अप्रैल, 2011",
      months: [
        {
          month: "फरवरी",
          dates: [
            { day: "21", pdf: "/misc/karyasuchi/210211.pdf" },
            { day: "22" , pdf: "/misc/karyasuchi/220211.pdf"},
            { day: "23" , pdf: "/misc/karyasuchi/230211.pdf"},
            { day: "24" , pdf: "/misc/karyasuchi/240211.pdf"},
            { day: "25" , pdf: "/misc/karyasuchi/250211.pdf"},
            { day: "28" , pdf: "/misc/karyasuchi/280211.pdf"},
          ],
        },
        {
          month: "मार्च",
          dates: [
            { day: "1" , pdf: "/misc/karyasuchi/010311.pdf"},
            { day: "3" , pdf: "/misc/karyasuchi/030311.pdf"},
            { day: "4" , pdf: "/misc/karyasuchi/040311.pdf"},
            { day: "7" , pdf: "/misc/karyasuchi/070311.pdf"},
            { day: "8" , pdf: "/misc/karyasuchi/090311.pdf"},
            { day: "9" , pdf: "/misc/karyasuchi/090311.pdf"},
            { day: "10" , pdf: "/misc/karyasuchi/100311.pdf"},
            { day: "11" , pdf: "/misc/karyasuchi/110311.pdf"},
            { day: "14" , pdf: "/misc/karyasuchi/140311.pdf"},
            { day: "15" , pdf: "/misc/karyasuchi/150311.pdf"},
            { day: "16" , pdf: "/misc/karyasuchi/160311.pdf"},
            { day: "17", pdf: "/misc/karyasuchi/170311.pdf" },
            { day: "18" , pdf: "/misc/karyasuchi/180311.pdf"},
            { day: "28" , pdf: "/misc/karyasuchi/280311.pdf"},
            { day: "29" , pdf: "/misc/karyasuchi/290311.pdf"},
            { day: "30" , pdf: "/misc/karyasuchi/300311.pdf"},
            { day: "31" , pdf: "/misc/karyasuchi/310311.pdf"},
          ],
        },
        {
          month: "अप्रैल",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010411.pdf" },
             { day: "6" }, 
             { day: "7" }, 
             { day: "8" }],
        },
      ],
    },

    {
      number: "दशम्",
      name: "जुलाई, 2011",
      months: [
        {
          month: "जुलाई",
          dates: [
            { day: "11" , pdf: "/misc/karyasuchi/110711.pdf"},
            { day: "12" , pdf: "/misc/karyasuchi/120711.pdf"},
            { day: "13", pdf: "/misc/karyasuchi/130711.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140711.pdf" },
            { day: "15"},
            { day: "18", pdf: "/misc/karyasuchi/180711.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190711.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200711.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210711.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220711.pdf" },
          ],
        },
      ],
    },

    {
      number: "एकादश",
      name: "नवम्बर-दिसम्बर, 2011",
      months: [
        {
          month: "नवम्बर",
          dates: [
            { day: "21" , pdf: "/misc/karyasuchi/211111.pdf"},
            { day: "22" , pdf: "/misc/karyasuchi/221111.pdf"},
            { day: "23", pdf: "/misc/karyasuchi/231111.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/241111.pdf"},
            { day: "25" , pdf: "/misc/karyasuchi/251111.pdf"},
            { day: "28" , pdf: "/misc/karyasuchi/281111.pdf"},
            { day: "29" , pdf: "/misc/karyasuchi/291111.pdf"},
            { day: "30" , pdf: "/misc/karyasuchi/301111.pdf"},
          ],
        },
        {
          month: "दिसम्बर",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/011211.pdf" }, 
            { day: "2" , pdf: "/misc/karyasuchi/021211.pdf"}],
        },
      ],
    },

    {
      number: "द्वादश",
      name: "फरवरी-अप्रैल, 2012",
      months: [
        {
          month: "फरवरी",
          dates: [
            { day: "21", pdf: "/misc/karyasuchi/210212.pdf" },
            { day: "22" , pdf: "/misc/karyasuchi/220212.pdf"},
            { day: "23" , pdf: "/misc/karyasuchi/230212.pdf"},
            { day: "24" , pdf: "/misc/karyasuchi/240212.pdf"},
            { day: "27" , pdf: "/misc/karyasuchi/270212.pdf"},
            { day: "28" , pdf: "/misc/karyasuchi/280212.pdf"},
            { day: "29" , pdf: "/misc/karyasuchi/290212.pdf"},
          ],
        },
        {
          month: "मार्च",
          dates: [
            { day: "1" , pdf: "/misc/karyasuchi/010312.pdf"},
            { day: "2" , pdf: "/misc/karyasuchi/020312.pdf"},
            { day: "13", pdf: "/misc/karyasuchi/130312.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140312.pdf" },
            { day: "15" , pdf: "/misc/karyasuchi/150312.pdf"},
            { day: "16" , pdf: "/misc/karyasuchi/160312.pdf"},
            { day: "19" , pdf: "/misc/karyasuchi/190312.pdf"},
            { day: "20" , pdf: "/misc/karyasuchi/200312.pdf"},
            { day: "21" , pdf: "/misc/karyasuchi/210312.pdf"},
            { day: "22" , pdf: "/misc/karyasuchi/220312.pdf"},
            { day: "26" , pdf: "/misc/karyasuchi/260312.pdf"},
            { day: "27" , pdf: "/misc/karyasuchi/270312.pdf"},
            { day: "28" , pdf: "/misc/karyasuchi/280312.pdf"},
            { day: "29" , pdf: "/misc/karyasuchi/290312.pdf"},
            { day: "30" , pdf: "/misc/karyasuchi/300312.pdf"},
          ],
        },
        {
          month: "अप्रैल",
          dates: [
            { day: "1" },
             { day: "2" },
              { day: "3" },
               { day: "4" }
              ],
        },
      ],
    },

    {
      number: "त्रयोदश",
      name: "जुलाई, 2012",
      months: [
        {
          month: "जुलाई",
          dates: [
            { day: "16", pdf: "/misc/karyasuchi/160712.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170712.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180712.pdf" },
            { day: "19",  },
            { day: "20" , },
            { day: "23" , },
            { day: "24" , },
            { day: "25" ,},
            { day: "26" ,},
            { day: "27" ,},
          ],
        },
      ],
    },

    {
      number: "चतुर्दश",
      name: "जुलाई, 2012",
      months: [{ month: "जुलाई", dates: [
        { day: "27", pdf: "/misc/karyasuchi/270712.pdf" }
      ] }],
    },

    {
      number: "पंचदश",
      name: "दिसम्बर, 2012",
      months: [
        {
          month: "दिसम्बर",
          dates: [
            { day: "4" , pdf: "/misc/karyasuchi/041212.pdf"},
            { day: "अनुपूरक", pdf: "/misc/karyasuchi/041212-suppl.pdf" },
            { day: "5" , pdf: "/misc/karyasuchi/051212.pdf"},
            { day: "6" , pdf: "/misc/karyasuchi/061212.pdf"},
            { day: "7" , pdf: "/misc/karyasuchi/071212.pdf"},
            { day: "10" , pdf: "/misc/karyasuchi/101212.pdf"},
            { day: "11" , pdf: "/misc/karyasuchi/111212.pdf"},
            { day: "12" , pdf: "/misc/karyasuchi/121212.pdf"},
            { day: "13" , pdf: "/misc/karyasuchi/131212.pdf"},
            { day: "14 ", pdf: "/misc/karyasuchi/141212.pdf" },
            { day: "अनुपूरक", pdf: "/misc/karyasuchi/141212-suppl.pdf" },

          ],
        },
      ],
    },

    {
      number: "षोडश",
      name: "फरवरी-मार्च, 2013",
      months: [
        {
          month: "फरवरी",
          dates: [{ day: "18", pdf: "/misc/karyasuchi/180213.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190213.pdf" },
            { day: "20" , pdf: "/misc/karyasuchi/200213.pdf"},
            { day: "21" , pdf: "/misc/karyasuchi/210213.pdf"},
            { day: "22", pdf: "/misc/karyasuchi/220213.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260213.pdf" },
            { day: "27" , pdf: "/misc/karyasuchi/270213.pdf"},
            { day: "28", pdf: "/misc/karyasuchi/280213.pdf" },],
        },
        {
          month: "मार्च",
          dates: [
            
            { day: "1" },
            { day: "4" , pdf: "/misc/karyasuchi/040313.pdf"},
            { day: "5" , pdf: "/misc/karyasuchi/050313.pdf"},
            { day: "6", pdf: "/misc/karyasuchi/060313.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070313.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080313.pdf" },
            { day: "11"},
            { day: "12" , pdf: "/misc/karyasuchi/120313.pdf"},
            { day: "13", pdf: "/misc/karyasuchi/130313.pdf" },
            { day: "14" , pdf: "/misc/karyasuchi/140313.pdf"},
            { day: "15" , pdf: "/misc/karyasuchi/150313.pdf"},
            { day: "18", pdf: "/misc/karyasuchi/180313.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190313.pdf" },
            { day: "20"},
            { day: "21"},
            { day: "22" },
          ],
        },
      ],
    },

    {
      number: "सप्तदश",
      name: "जुलाई, 2013",
      months: [
        {
          month: "जुलाई",
          dates: [
            { day: "8" , pdf: "/misc/karyasuchi/080713.pdf"},
            { day: "9" , pdf: "/misc/karyasuchi/090713.pdf"},
            { day: "10", pdf: "/misc/karyasuchi/100713.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110713.pdf" },
            { day: "12" },
            { day: "15"},
            { day: "16"},
            { day: "17" },
            { day: "18" },
            { day: "19" },
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
                  <p>त्रयोदश विधान सभा (2008–2013)</p>
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

export default DainikKaryasuchi13;