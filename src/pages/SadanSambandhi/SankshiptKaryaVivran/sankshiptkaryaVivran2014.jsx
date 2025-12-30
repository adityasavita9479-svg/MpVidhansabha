import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SanksheptKaryaVivran2014 = () => {
  const navigate = useNavigate();

const data = [
  {
    number: "प्रथम सत्र",
    name: "जनवरी, 2014",
    months: [
      {
        month: "जनवरी",
        dates: [
          { day: "8", pdf: "/misc/sanshipt/s080114.pdf" },
          { day: "9", pdf: "/misc/sanshipt/s090114.pdf" },
          { day: "10", pdf: "/misc/sanshipt/s100114.pdf" },
          { day: "11", pdf: "/misc/sanshipt/s110114.pdf" },
          { day: "15", pdf: "/misc/sanshipt/s150114.pdf" },
          { day: "16", pdf: null },
          { day: "17", pdf: null },
        ],
      },
    ],
  },
  {
    number: "द्वितीय सत्र",
    name: "मार्च, 2014",
    months: [
      {
        month: "मार्च",
        dates: [
          { day: "3", pdf: "/misc/sanshipt/s030314.pdf" },
          { day: "4", pdf: "/misc/sanshipt/s040314.pdf" },
          { day: "5", pdf: "/misc/sanshipt/s050314.pdf" },
        ],
      },
    ],
  },
  {
    number: "तृतीय सत्र",
    name: "जून-जुलाई, 2014",
    months: [
      {
        month: "जून",
        dates: [{ day: "30", pdf: "/misc/sanshipt/s300614.pdf" }],
      },
      {
        month: "जुलाई",
        dates: [
          { day: "1", pdf: "/misc/sanshipt/s010714.pdf" },
          { day: "2", pdf: "/misc/sanshipt/s020714.pdf" },
          { day: "3", pdf: "/misc/sanshipt/s030714.pdf" },
          { day: "4", pdf: "/misc/sanshipt/s040714.pdf" },
          { day: "7", pdf: "/misc/sanshipt/s070714.pdf" },
          { day: "8", pdf: "/misc/sanshipt/s080714.pdf" },
          { day: "9", pdf: "/misc/sanshipt/s090714.pdf" },
          { day: "10", pdf: "/misc/sanshipt/s100714.pdf" },
          { day: "11", pdf: "/misc/sanshipt/s110714.pdf" },
          { day: "14", pdf: "/misc/sanshipt/s140714.pdf" },
          { day: "15", pdf: "/misc/sanshipt/s150714.pdf" },
          { day: "16", pdf: "/misc/sanshipt/s160714.pdf" },
          { day: "17", pdf: "/misc/sanshipt/s170714.pdf" },
          { day: "18", pdf: "/misc/sanshipt/s180714.pdf" },
          { day: "21", pdf: "/misc/sanshipt/s210714.pdf" },
          { day: "22", pdf: "/misc/sanshipt/s220714.pdf" },
          { day: "23", pdf: null },
          { day: "24", pdf: null },
          { day: "25", pdf: null },
          { day: "28", pdf: null },
        ],
      },
    ],
  },
  {
    number: "चतुर्थ सत्र",
    name: "दिसम्बर, 2014",
    months: [
      {
        month: "दिसम्बर",
        dates: [
          { day: "8", pdf: "/misc/sanshipt/s081214.pdf" },
          { day: "9", pdf: "/misc/sanshipt/s091214.pdf" },
          { day: "10", pdf: "/misc/sanshipt/s101214.pdf" },
          { day: "11", pdf: "/misc/sanshipt/s111214.pdf" },
          { day: "12", pdf: "/misc/sanshipt/s121214.pdf" },
        ],
      },
    ],
  },
  {
    number: "पंचम सत्र",
    name: "फरवरी-मार्च, 2015",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "18", pdf: "/misc/sanshipt/S180215.pdf" },
          { day: "19", pdf: "/misc/sanshipt/s190215.pdf" },
          { day: "20", pdf: "/misc/sanshipt/s200215.pdf" },
          { day: "23", pdf: "/misc/sanshipt/s230215.pdf" },
          { day: "24", pdf: "/misc/sanshipt/s240215.pdf" },
          { day: "25", pdf: "/misc/sanshipt/s250215.pdf" },
          { day: "26", pdf: "/misc/sanshipt/s260215.pdf" },
          { day: "27", pdf: null },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "2", pdf: null },
          { day: "3", pdf: null },
          { day: "4", pdf: null },
          { day: "11", pdf: null },
          { day: "12", pdf: null },
          { day: "13", pdf: null },
          { day: "16", pdf: null },
          { day: "17", pdf: null },
          { day: "18", pdf: null },
          { day: "19", pdf: null },
          { day: "20", pdf: null },
          { day: "23", pdf: null },
          { day: "24", pdf: null },
          { day: "25", pdf: null },
          { day: "26", pdf: null },
          { day: "27", pdf: null },
        ],
      },
    ],
  },
  {
    number: "षष्टम् सत्र",
    name: "मार्च, 2015",
    months: [
      {
        month: "मार्च",
        dates: [{ day: "24", pdf: "/misc/sanshipt/s240315.pdf" }],
      },
    ],
  },
  {
    number: "सप्तम् सत्र",
    name: "जुलाई, 2015",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "20", pdf: "/misc/sanshipt/s200715.pdf" },
          { day: "21", pdf: "/misc/sanshipt/s210715.pdf" },
          { day: "22", pdf: "/misc/sanshipt/s220715.pdf" },
          { day: "23", pdf: null },
          { day: "24", pdf: null },
          { day: "27", pdf: null },
          { day: "28", pdf: null },
          { day: "29", pdf: null },
          { day: "30", pdf: null },
          { day: "31", pdf: null },
        ],
      },
    ],
  },
  {
    number: "अष्टम् सत्र",
    name: "नवम्बर, 2015",
    months: [
      {
        month: "नवम्बर",
        dates: [{ day: "05", pdf: "/misc/sanshipt/s051115.pdf" }],
      },
    ],
  },
  {
    number: "नवम् सत्र",
    name: "दिसम्बर, 2015",
    months: [
      {
        month: "दिसम्बर",
        dates: [
          { day: "7", pdf: "/misc/sanshipt/s071215.pdf" },
          { day: "8", pdf: "/misc/sanshipt/s081215.pdf" },
          { day: "9", pdf: "/misc/sanshipt/s091215.pdf" },
          { day: "10", pdf: "/misc/sanshipt/s101215.pdf" },
          { day: "11", pdf: "/misc/sanshipt/s111215.pdf" },
          { day: "14", pdf: "/misc/sanshipt/s141215.pdf" },
          { day: "15", pdf: "/misc/sanshipt/s151215.pdf" },
          { day: "16", pdf: "/misc/sanshipt/s161215.pdf" },
          { day: "17", pdf: null },
          { day: "18", pdf: null },
        ],
      },
    ],
  },
  {
    number: "दशम् सत्र",
    name: "फरवरी-अप्रैल, 2016",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "23", pdf: "/misc/sanshipt/s230216.pdf" },
          { day: "24", pdf: "/misc/sanshipt/s240216.pdf" },
          { day: "25", pdf: "/misc/sanshipt/s250216.pdf" },
          { day: "26", pdf: "/misc/sanshipt/s260216.pdf" },
          { day: "29", pdf: "/misc/sanshipt/s290216.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "1", pdf: "/misc/sanshipt/s010316.pdf" },
          { day: "2", pdf: "/misc/sanshipt/s020316.pdf" },
          { day: "3", pdf: "/misc/sanshipt/s030316.pdf" },
          { day: "4", pdf: "/misc/sanshipt/s040316.pdf" },
          { day: "8", pdf: "/misc/sanshipt/s080316.pdf" },
          { day: "9", pdf: "/misc/sanshipt/s090316.pdf" },
          { day: "10", pdf: "/misc/sanshipt/s100316.pdf" },
          { day: "11", pdf: "/misc/sanshipt/s110316.pdf" },
          { day: "14", pdf: "/misc/sanshipt/s140316.pdf" },
          { day: "15", pdf: "/misc/sanshipt/s150316.pdf" },
          { day: "16", pdf: "/misc/sanshipt/s160316.pdf" },
          { day: "17", pdf: "/misc/sanshipt/s170316.pdf" },
          { day: "18", pdf: "/misc/sanshipt/s180316.pdf" },
          { day: "28", pdf: "/misc/sanshipt/s280316.pdf" },
          { day: "29", pdf: "/misc/sanshipt/s290316.pdf" },
          { day: "30", pdf: "/misc/sanshipt/s300316.pdf" },
          { day: "31", pdf: "/misc/sanshipt/s310316.pdf" },
        ],
      },
      {
        month: "अप्रैल",
        dates: [{ day: "1", pdf: "/misc/sanshipt/s010416.pdf" }],
      },
    ],
  },
  {
    number: "एकादश सत्र",
    name: "जुलाई-अगस्त, 2016",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "18", pdf: "/misc/sanshipt/s180716.pdf" },
          { day: "19", pdf: null },
          { day: "20", pdf: "/misc/sanshipt/s200716.pdf" },
          { day: "21", pdf: "/misc/sanshipt/s210716.pdf" },
          { day: "22", pdf: "/misc/sanshipt/s220716.pdf" },
          { day: "25", pdf: "/misc/sanshipt/s250716.pdf" },
          { day: "26", pdf: "/misc/sanshipt/s260716.pdf" },
          { day: "27", pdf: "/misc/sanshipt/s270716.pdf" },
          { day: "28", pdf: "/misc/sanshipt/s280716.pdf" },
          { day: "29", pdf: "/misc/sanshipt/s290716.pdf" },
        ],
      },
      {
        month: "अगस्त",
        dates: [{ day: "24", pdf: "/misc/sanshipt/s240816.pdf" }],
      },
    ],
  },
  {
    number: "द्वादश सत्र",
    name: "दिसम्बर, 2016",
    months: [
      {
        month: "दिसम्बर",
        dates: [
          { day: "5", pdf: "/misc/sanshipt/s051216.pdf" },
          { day: "6", pdf: "/misc/sanshipt/s061216.pdf" },
          { day: "7", pdf: "/misc/sanshipt/s071216.pdf" },
          { day: "8", pdf: "/misc/sanshipt/s081216.pdf" },
          { day: "9", pdf: "/misc/sanshipt/s091216.pdf" },
        ],
      },
    ],
  },
  {
    number: "त्रयोदश सत्र",
    name: "फरवरी-मई, 2017",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "21", pdf: "/misc/sanshipt/s210217.pdf" },
          { day: "22", pdf: "/misc/sanshipt/s220217.pdf" },
          { day: "23", pdf: "/misc/sanshipt/s230217.pdf" },
          { day: "27", pdf: "/misc/sanshipt/s270217.pdf" },
          { day: "28", pdf: "/misc/sanshipt/s280217.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "1", pdf: "/misc/sanshipt/s010317.pdf" },
          { day: "2", pdf: "/misc/sanshipt/s020317.pdf" },
          { day: "3", pdf: "/misc/sanshipt/s030317.pdf" },
          { day: "6", pdf: "/misc/sanshipt/s060317.pdf" },
          { day: "7", pdf: "/misc/sanshipt/s070317.pdf" },
          { day: "8", pdf: "/misc/sanshipt/s080317.pdf" },
          { day: "9", pdf: "/misc/sanshipt/s090317.pdf" },
          { day: "10", pdf: "/misc/sanshipt/s100317.pdf" },
          { day: "20", pdf: "/misc/sanshipt/s200317.pdf" },
          { day: "21", pdf: "/misc/sanshipt/s210317.pdf" },
          { day: "22", pdf: "/misc/sanshipt/s220317.pdf" },
          { day: "23", pdf: "/misc/sanshipt/s230317.pdf" },
          { day: "24", pdf: "/misc/sanshipt/s240317.pdf" },
          { day: "27", pdf: null },
          { day: "28", pdf: null },
          { day: "30", pdf: null },
          { day: "31", pdf: null },
        ],
      },
      {
        month: "मई",
        dates: [{ day: "3", pdf: "/misc/sanshipt/s030517.pdf" }],
      },
    ],
  },
  {
    number: "चतुर्दश सत्र",
    name: "जुलाई, 2017",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "17", pdf: "/misc/sanshipt/s170717.pdf" },
          { day: "18", pdf: "/misc/sanshipt/s180717.pdf" },
          { day: "19", pdf: "/misc/sanshipt/s190717.pdf" },
          { day: "20", pdf: "/misc/sanshipt/s200717.pdf" },
          { day: "21", pdf: "/misc/sanshipt/s210717.pdf" },
          { day: "24", pdf: "/misc/sanshipt/s240717.pdf" },
          { day: "25", pdf: "/misc/sanshipt/s250717.pdf" },
          { day: "26", pdf: "/misc/sanshipt/s260717.pdf" },
          { day: "27", pdf: null },
          { day: "28", pdf: null },
        ],
      },
    ],
  },
  {
    number: "पंचदश सत्र",
    name: "नवम्बर-दिसम्बर, 2017",
    months: [
      {
        month: "नवम्बर",
        dates: [
          { day: "27", pdf: "/misc/sanshipt/s271117.pdf" },
          { day: "28", pdf: "/misc/sanshipt/s281117.pdf" },
          { day: "29", pdf: "/misc/sanshipt/s291117.pdf" },
          { day: "30", pdf: "/misc/sanshipt/s301117.pdf" },
        ],
      },
      {
        month: "दिसम्बर",
        dates: [
          { day: "1", pdf: "/misc/sanshipt/s011217.pdf" },
          { day: "4", pdf: "/misc/sanshipt/s041217.pdf" },
          { day: "5", pdf: null },
          { day: "6", pdf: null },
          { day: "7", pdf: null },
          { day: "8", pdf: null },
        ],
      },
    ],
  },
  {
    number: "षोडश सत्र",
    name: "फरवरी-मार्च, 2018",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "26", pdf: "/misc/sanshipt/s260218.pdf" },
          { day: "27", pdf: "/misc/sanshipt/s270218.pdf" },
          { day: "28", pdf: "/misc/sanshipt/s280218.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "7", pdf: "/misc/sanshipt/s070318.pdf" },
          { day: "8", pdf: "/misc/sanshipt/s080318.pdf" },
          { day: "9", pdf: "/misc/sanshipt/s090318.pdf" },
          { day: "12", pdf: "/misc/sanshipt/s120318.pdf" },
          { day: "13", pdf: "/misc/sanshipt/s130318.pdf" },
          { day: "14", pdf: "/misc/sanshipt/s140318.pdf" },
          { day: "15", pdf: "/misc/sanshipt/s150318.pdf" },
          { day: "16", pdf: "/misc/sanshipt/s160318.pdf" },
          { day: "20", pdf: "/misc/sanshipt/s200318.pdf" },
          { day: "21", pdf: "/misc/sanshipt/s210318.pdf" },
          { day: "22", pdf: null
           },
          { day: "23", pdf: null
           },
          { day: "26", pdf: null
           },
          { day: "27", pdf: null
           },
          { day: "28", pdf: null
           },
        ],
      },
    ],
  },
  {
    number: "सप्तदश सत्र",
    name: "जून, 2018",
    months: [
      {
        month: "जून",
        dates: [
          { day: "25", pdf: "/misc/sanshipt/s250618.pdf" },
          { day: "26", pdf: "/misc/sanshipt/s260618.pdf" },
          { day: "27", pdf: null },
          { day: "28", pdf: null },
          { day: "29", pdf: null },
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
              <p>चतुर्दश विधान सभा (2013 से 2018)</p>
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

export default SanksheptKaryaVivran2014;