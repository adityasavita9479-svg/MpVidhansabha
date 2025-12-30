import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SanksheptKaryaVivran2012 = () => {
  const navigate = useNavigate();

const data = [
  {
    number: "प्रथम सत्र",
    name: "दिसंबर, 2003",
    months: [
      {
        month: "दिसंबर",
        dates: [
          { day: "15", pdf: "/misc/sanshipt/s151203.pdf" },
          { day: "16", pdf: "/misc/sanshipt/s161203.pdf" },
          { day: "17", pdf: "/misc/sanshipt/s171203.pdf" },
          { day: "18", pdf: "/misc/sanshipt/s181203.pdf" },
        ],
      },
    ],
  },

  {
    number: "द्वितीय सत्र",
    name: "फरवरी-मार्च, 2004",
    months: [
      { month: "फरवरी", dates: [
         { day: "23", pdf: "/misc/karyasuchi/230204.pdf" },
          { day: "24", pdf: "/misc/sanshipt/s240204.pdf" },
          { day: "25", pdf: "/misc/sanshipt/s250204.pdf" },
          { day: "26", pdf: "/misc/sanshipt/s260204.pdf" },
          { day: "27", pdf: "/misc/sanshipt/s270204.pdf" },
      ] },
      {
        month: "मार्च",
        dates: [
         
          { day: "01", pdf: "" },
          { day: "03", pdf: "/misc/sanshipt/s030304.pdf" },
          { day: "04", pdf: "/misc/sanshipt/s040304.pdf" },
          { day: "05", pdf: "/misc/sanshipt/s050304.pdf" },
        ],
      },
    ],
  },

  {
    number: "तृतीय सत्र",
    name: "जून-जुलाई, 2004",
    months: [
      {
        month: "जून",
        dates: [
          { day: "24", pdf: "/misc/sanshipt/s240604.pdf" },
          { day: "25", pdf: "/misc/sanshipt/s250604.pdf" },
          { day: "28", pdf: "/misc/sanshipt/s280604.pdf" },
          { day: "29", pdf: "" },
          { day: "30", pdf: "" },
        ],
      },
      {
        month: "जुलाई",
        dates: [
          { day: "01", pdf: "" },
          { day: "02", pdf: "" },
          { day: "05", pdf: "" },
          { day: "06", pdf: "" },
          { day: "07", pdf: "" },
          { day: "08", pdf: "" },
          { day: "09", pdf: "" },
          { day: "12", pdf: "/misc/sanshipt/s120704.pdf" },
          { day: "13", pdf: "/misc/sanshipt/s130704.pdf" },
          { day: "14", pdf: "/misc/sanshipt/s140704.pdf" },
          { day: "15", pdf: "/misc/sanshipt/s150704.pdf" },
          { day: "16", pdf: "/misc/sanshipt/s160704.pdf" },
          { day: "19", pdf: "/misc/sanshipt/s190704.pdf" },
          { day: "20", pdf: "/misc/sanshipt/s200704.pdf" },
          { day: "21", pdf: "/misc/sanshipt/s210704.pdf" },
          { day: "22", pdf: "/misc/sanshipt/s220704.pdf" },
          { day: "23", pdf: "/misc/sanshipt/s230704.pdf" },
          { day: "26", pdf: "/misc/sanshipt/s260704.pdf" },
          { day: "27", pdf: "/misc/sanshipt/s270704.pdf" },
          { day: "28", pdf: "/misc/sanshipt/s280704.pdf" },
          { day: "29", pdf: "/misc/sanshipt/s290704.pdf" },
          { day: "30", pdf: "/misc/sanshipt/s300704.pdf" },
        ],
      },
    ],
  },

  {
    number: "चतुर्थ सत्र",
    name: "नवम्बर-दिसंबर, 2004",
    months: [
      {
        month: "नवम्बर",
        dates: [
          { day: "29", pdf: "/misc/sanshipt/s291104.pdf" },
          { day: "30", pdf: "/misc/sanshipt/s301104.pdf" },
        ],
      },
      {
        month: "दिसंबर",
        dates: [
          { day: "06", pdf: "/misc/sanshipt/s061204.pdf" },
          { day: "07", pdf: "/misc/sanshipt/s071204.pdf" },
          { day: "08", pdf: "/misc/sanshipt/s081204.pdf" },
          { day: "09", pdf: "/misc/sanshipt/s091204.pdf" },
          { day: "10", pdf: "/misc/sanshipt/s101204.pdf" },
        ],
      },
    ],
  },

  {
    number: "पंचम सत्र",
    name: "फरवरी-मार्च, 2005",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "07", pdf: "/misc/sanshipt/s070205.pdf" },
          { day: "08", pdf: "/misc/sanshipt/s080205.pdf" },
          { day: "09", pdf: "/misc/sanshipt/s090205.pdf" },
          { day: "10", pdf: "/misc/sanshipt/s100205.pdf" },
          { day: "11", pdf: "" },
          { day: "14", pdf: "" },
          { day: "15", pdf: "/misc/sanshipt/s150205.pdf" },
          { day: "16", pdf: "/misc/sanshipt/s160205.pdf" },
          { day: "17", pdf: "/misc/sanshipt/s170205.pdf" },
          { day: "18", pdf: "/misc/sanshipt/s180205.pdf" },
          { day: "21", pdf: "/misc/sanshipt/s210205.pdf" },
          { day: "22", pdf: "/misc/sanshipt/s220205.pdf" },
          { day: "23", pdf: "" },
          { day: "28", pdf: "/misc/sanshipt/s280205.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "01", pdf: "/misc/sanshipt/s010305.pdf" },
          { day: "02", pdf: "/misc/sanshipt/s020305.pdf" },
          { day: "03", pdf: "/misc/sanshipt/s030305.pdf" },
          { day: "04", pdf: "/misc/sanshipt/s040305.pdf" },
          { day: "09", pdf: "/misc/sanshipt/s090305.pdf" },
          { day: "10", pdf: "/misc/sanshipt/s100305.pdf" },
          { day: "11", pdf: "/misc/sanshipt/s110305.pdf" },
          { day: "14", pdf: "/misc/sanshipt/s140305.pdf" },
          { day: "15", pdf: "" },
          { day: "16", pdf: "" },
          { day: "17", pdf: "" },
          { day: "18", pdf: "" },
        ],
      },
    ],
  },

  {
    number: "षष्टम सत्र",
    name: "जुलाई-अगस्त, 2005",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "25", pdf: "/misc/sanshipt/s250705.pdf" },
          { day: "26", pdf: "/misc/sanshipt/s260705.pdf" },
          { day: "27", pdf: "/misc/sanshipt/s270705.pdf" },
          { day: "28", pdf: "/misc/sanshipt/s280705.pdf" },
          { day: "29", pdf: "/misc/sanshipt/s290705.pdf" },
        ],
      },
      {
        month: "अगस्त",
        dates: [
          { day: "01", pdf: "/misc/sanshipt/s010805.pdf" },
          { day: "02", pdf: "/misc/sanshipt/s020805.pdf" },
          { day: "03", pdf: "/misc/sanshipt/s030805.pdf" },
          { day: "04", pdf: "" },
          { day: "05", pdf: "" },
          { day: "08", pdf: "" },
          { day: "09", pdf: "" },
          { day: "10", pdf: "" },
        ],
      },
    ],
  },

  {
    number: "सप्तम सत्र",
    name: "दिसंबर 2005 - जनवरी 2006",
    months: [
      {
        month: "दिसंबर",
        dates: [
          { day: "23", pdf: "/misc/sanshipt/s231205.pdf" },
          { day: "26", pdf: "" },
          { day: "27", pdf: "" },
          { day: "28", pdf: "" },
          { day: "29", pdf: "" },
          { day: "30", pdf: "" },
        ],
      },
      {
        month: "जनवरी",
        dates: [
          { day: "02", pdf: "/misc/sanshipt/s020106.pdf" },
          { day: "03", pdf: "/misc/sanshipt/s030106.pdf" },
          { day: "04", pdf: "/misc/sanshipt/s040106.pdf" },
          { day: "05", pdf: "/misc/sanshipt/s050106.pdf" },
          { day: "06", pdf: "/misc/sanshipt/s060106.pdf" },
        ],
      },
    ],
  },

  {
    number: "अष्टम सत्र",
    name: "फरवरी-अप्रैल, 2006",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "14", pdf: "/misc/sanshipt/s140206.pdf" },
          { day: "15", pdf: "/misc/sanshipt/s150206.pdf" },
          { day: "16", pdf: "/misc/sanshipt/s160206.pdf" },
          { day: "17", pdf: "/misc/sanshipt/s170206.pdf" },
          { day: "20", pdf: "/misc/sanshipt/s200206.pdf" },
          { day: "21", pdf: "/misc/sanshipt/s210206.pdf" },
          { day: "22", pdf: "/misc/sanshipt/s220206.pdf" },
          { day: "23", pdf: "/misc/sanshipt/s230206.pdf" },
          { day: "24", pdf: "/misc/sanshipt/s240206.pdf" },
          { day: "27", pdf: "" },
          { day: "28", pdf: "/misc/sanshipt/s280206.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "01", pdf: "/misc/sanshipt/s010306.pdf" },
          { day: "02", pdf: "/misc/sanshipt/s020306.pdf" },
          { day: "03", pdf: "/misc/sanshipt/s030306.pdf" },
          { day: "06", pdf: "/misc/sanshipt/s060306.pdf" },
          { day: "07", pdf: "/misc/sanshipt/s070306.pdf" },
          { day: "08", pdf: "/misc/sanshipt/s080306.pdf" },
          { day: "09", pdf: "/misc/sanshipt/s090306.pdf" },
          { day: "10", pdf: "/misc/sanshipt/s100306.pdf" },
          { day: "21", pdf: "/misc/sanshipt/s210306.pdf" },
          { day: "22", pdf: "/misc/sanshipt/s220306.pdf" },
          { day: "23", pdf: "/misc/sanshipt/s230306.pdf" },
          { day: "24", pdf: "/misc/sanshipt/s240306.pdf" },
          { day: "27", pdf: "" },
          { day: "28", pdf: "" },
          { day: "29", pdf: "" },
          { day: "30", pdf: "" },
          { day: "31", pdf: "" },
        ],
      },
      {
        month: "अप्रैल",
        dates: [
          { day: "03", pdf: "" },
          { day: "04", pdf: "" },
          { day: "05", pdf: "" },
        ],
      },
    ],
  },

  {
    number: "नवम् सत्र",
    name: "जुलाई, 2006",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "17", pdf: "/misc/sanshipt/s170706.pdf" },
          { day: "18", pdf: "/misc/sanshipt/s180706.pdf" },
          { day: "19", pdf: "/misc/sanshipt/s190706.pdf" },
          { day: "20", pdf: "/misc/sanshipt/s200706.pdf" },
          { day: "21", pdf: "/misc/sanshipt/s210706.pdf" },
          { day: "24", pdf: "/misc/sanshipt/s240706.pdf" },
          { day: "25", pdf: "/misc/sanshipt/s250706.pdf" },
          { day: "26", pdf: "/misc/sanshipt/s260706.pdf" },
          { day: "27", pdf: "" },
          { day: "28", pdf: "" },
        ],
      },
    ],
  },

  {
    number: "दशम् सत्र",
    name: "अक्टूबर-नवम्बर, 2006",
    months: [
      {
        month: "अक्टूबर",
        dates: [{ day: "31", pdf: "/misc/sanshipt/s311006.pdf" }],
      },
      {
        month: "नवम्बर",
        dates: [
          { day: "01", pdf: "/misc/sanshipt/s011106.pdf" },
          { day: "02", pdf: "/misc/sanshipt/s021106.pdf" },
          { day: "03", pdf: "/misc/sanshipt/s031106.pdf" },
          { day: "06", pdf: "/misc/sanshipt/s061106.pdf" },
          { day: "07", pdf: "/misc/sanshipt/s071106.pdf" },
          { day: "08", pdf: "/misc/sanshipt/s081106.pdf" },
          { day: "09", pdf: "/misc/sanshipt/s091106.pdf" },
          { day: "10", pdf: "" },
        ],
      },
    ],
  },

  {
    number: "एकादश सत्र",
    name: "फरवरी-अप्रैल, 2007",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "19", pdf: "/misc/sanshipt/s190207.pdf" },
          { day: "20", pdf: "/misc/sanshipt/s200207.pdf" },
          { day: "21", pdf: "/misc/sanshipt/s210207.pdf" },
          { day: "22", pdf: "/misc/sanshipt/s220207.pdf" },
          { day: "23", pdf: "/misc/sanshipt/s230207.pdf" },
          { day: "26", pdf: "/misc/sanshipt/s260207.pdf" },
          { day: "27", pdf: "" },
          { day: "28", pdf: "" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "01", pdf: "" },
          { day: "02", pdf: "" },
          { day: "12", pdf: "/misc/sanshipt/s120307.pdf" },
          { day: "13", pdf: "/misc/sanshipt/s130307.pdf" },
          { day: "14", pdf: "/misc/sanshipt/s140307.pdf" },
          { day: "15", pdf: "/misc/sanshipt/s150307.pdf" },
          { day: "16", pdf: "/misc/sanshipt/s160307.pdf" },
          { day: "17", pdf: "/misc/sanshipt/s170307.pdf" },
          { day: "21", pdf: "/misc/sanshipt/s210307.pdf" },
          { day: "22", pdf: "/misc/sanshipt/s220307.pdf" },
          { day: "23", pdf: "/misc/sanshipt/s230307.pdf" },
          { day: "28", pdf: "" },
          { day: "29", pdf: "/misc/sanshipt/s290307.pdf" },
          { day: "30", pdf: "/misc/sanshipt/s300307.pdf" },
        ],
      },
      {
        month: "अप्रैल",
        dates: [
          { day: "02", pdf: "" },
          { day: "03", pdf: "" },
          { day: "04", pdf: "" },
          { day: "05", pdf: "" },
        ],
      },
    ],
  },

  {
    number: "द्वादश सत्र",
    name: "जुलाई-अगस्त, 2007",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "18", pdf: "/misc/sanshipt/s180707.pdf" },
          { day: "23", pdf: "/misc/sanshipt/s230707.pdf" },
          { day: "24", pdf: "/misc/sanshipt/s240707.pdf" },
          { day: "25", pdf: "/misc/sanshipt/s250707.pdf" },
          { day: "26", pdf: "/misc/sanshipt/s260707.pdf" },
        ],
      },
      {
        month: "अगस्त",
        dates: [
          { day: "01", pdf: "/misc/sanshipt/s010807.pdf" },
          { day: "02", pdf: "" },
          { day: "03", pdf: "" },
        ],
      },
    ],
  },

  {
    number: "त्रयोदश सत्र",
    name: "नवम्बर-दिसंबर, 2007",
    months: [
      {
        month: "नवम्बर",
        dates: [
          { day: "26", pdf: "/misc/sanshipt/s261107.pdf" },
          { day: "27", pdf: "/misc/sanshipt/s271107.pdf" },
          { day: "28", pdf: "/misc/sanshipt/s281107.pdf" },
          { day: "29", pdf: "" },
          { day: "30", pdf: "" },
        ],
      },
      {
        month: "दिसंबर",
        dates: [
          { day: "04", pdf: "" },
          { day: "05", pdf: "" },
          { day: "06", pdf: "" },
          { day: "07", pdf: "" },
        ],
      },
    ],
  },

  {
    number: "चतुर्दश सत्र",
    name: "फरवरी-अप्रैल, 2008",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "25", pdf: "/misc/sanshipt/s250208.pdf" },
          { day: "26", pdf: "/misc/sanshipt/s250208.pdf" },
          { day: "27", pdf: "/misc/sanshipt/s270208.pdf" },
          { day: "28", pdf: "/misc/sanshipt/s280208.pdf" },
          { day: "29", pdf: "/misc/sanshipt/s290208.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "03", pdf: "/misc/sanshipt/s030308.pdf" },
          { day: "04", pdf: "/misc/sanshipt/s040308.pdf" },
          { day: "05", pdf: "/misc/sanshipt/s050308.pdf" },
          { day: "07", pdf: "" },
          { day: "10", pdf: "/misc/sanshipt/s100308.pdf" },
          { day: "11", pdf: "/misc/sanshipt/s110308.pdf" },
          { day: "12", pdf: "/misc/sanshipt/s120308.pdf" },
          { day: "13", pdf: "/misc/sanshipt/s130308.pdf" },
          { day: "14", pdf: "/misc/sanshipt/s140308.pdf" },
          { day: "17", pdf: "/misc/sanshipt/s170308.pdf" },
          { day: "18", pdf: "/misc/sanshipt/s180308.pdf" },
          { day: "19", pdf: "/misc/sanshipt/s190308.pdf" },
          { day: "20", pdf: "" },
          { day: "31", pdf: "" },
        ],
      },
      {
        month: "अप्रैल",
        dates: [
          { day: "01", pdf: "" },
          { day: "02", pdf: "" },
          { day: "03", pdf: "" },
          { day: "04", pdf: "" },
        ],
      },
    ],
  },

  {
    number: "पंचदश सत्र",
    name: "जुलाई, 2008",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "07", pdf: "/misc/sanshipt/s070708.pdf" },
          { day: "08", pdf: "/misc/sanshipt/s080708.pdf" },
          { day: "09", pdf: "/misc/sanshipt/s090708.pdf" },
          { day: "10", pdf: "" },
          { day: "11", pdf: "" },
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
    assembliesDivider: {
      width: "100%",
      height: "2px",
      background: "linear-gradient(to right, transparent, #2563eb, transparent)",
      margin: "50px 0 25px",
    },
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
            <p>द्वादश विधान सभा (2003-2008)</p>
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

export default SanksheptKaryaVivran2012;