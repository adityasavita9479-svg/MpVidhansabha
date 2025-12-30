
import React from "react";
import { useNavigate } from "react-router-dom";


const sessionData = [
  
  // षष्टम सत्र (जुलाई-अगस्त, 2025)
  {
    session: "षष्टम सत्र (जुलाई-अगस्त, 2025)",
    sections: [
      {
        section: "कार्यवाही",
        months: {
          "जुलाई": [
            { day: 28, pdf: "/misc/house proceedings/hp280725.pdf", html: "/misc/house proceedings/hp280725.htm" },
            { day: 29, pdf: "/misc/house proceedings/hp290725.pdf", html: "/misc/house proceedings/hp290725.htm" },
            { day: 30, pdf: "/misc/house proceedings/hp300725.pdf", html: "/misc/house proceedings/hp300725.htm" },
            { day: 31, pdf: "/misc/house proceedings/hp310725.pdf", html: "/misc/house proceedings/hp310725.htm" }
          ],
          "अगस्त": [
            { day: 1, pdf: "/misc/house proceedings/hp010825.pdf", html: "/misc/house proceedings/hp010825.htm" },
            { day: 4, pdf: "/misc/house proceedings/hp040825.pdf", html: "/misc/house proceedings/hp040825.htm" },
            { day: 5, pdf: "/misc/house proceedings/hp050825.pdf", html: "/misc/house proceedings/hp050825.htm" },
            { day: 6, pdf: "/misc/house proceedings/hp060825.pdf", html: "/misc/house proceedings/hp060825.htm" },
            { day: 7, pdf: null, html: null },
            { day: 8, pdf: null, html: null }
          ]
        }
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "जुलाई": [
            { day: 28, pdf: "/misc/house proceedings/ques280725.pdf", html: "/misc/house proceedings/ques280725.htm" },
            { day: 29, pdf: "/misc/house proceedings/ques290725.pdf", html: "/misc/house proceedings/ques290725.htm" },
            { day: 30, pdf: "/misc/house proceedings/ques300725.pdf", html: "/misc/house proceedings/ques300725.htm" },
            { day: 31, pdf: "/misc/house proceedings/ques310725.pdf", html: "/misc/house proceedings/ques310725.htm" }
          ],
          "अगस्त": [
            { day: 1, pdf: "/misc/house proceedings/ques010825.pdf", html: "/misc/house proceedings/ques010825.htm" },
            { day: 4, pdf: "/misc/house proceedings/ques040825.pdf", html: "/misc/house proceedings/ques040825.htm" },
            { day: 5, pdf: "/misc/house proceedings/ques050825.pdf", html: "/misc/house proceedings/ques050825.htm" },
            { day: 6, pdf: "/misc/house proceedings/ques060825.pdf", html: "/misc/house proceedings/ques060825.htm" },
            { day: 7, pdf: "/misc/house proceedings/ques070825.pdf", html: "/misc/house proceedings/ques070825.htm" },
            { day: 8, pdf: "/misc/house proceedings/ques080825.pdf", html: "/misc/house proceedings/ques080825.htm" }
          ]
        }
      },
      {
        section: "शुद्धि पत्र",
        months: {
          "जुलाई": [
            { day: 28, pdf: "/misc/house proceedings/sp280725.pdf", html: null },
            { day: 29, pdf: "/misc/house proceedings/sp290725.pdf", html: null },
            { day: 30, pdf: "/misc/house proceedings/sp300725.pdf", html: null },
            { day: 31, pdf: "/misc/house proceedings/sp310725.pdf", html: null }
          ],
          "अगस्त": [
            { day: 1, pdf: "/misc/house proceedings/sp010825.pdf", html: null },
            { day: 4, pdf: "/misc/house proceedings/sp040825.pdf", html: null },
            { day: 5, pdf: "/misc/house proceedings/sp050825.pdf", html: null },
            { day: 6, pdf: "/misc/house proceedings/sp060825.pdf", html: null },
            { day: 7, pdf: null, html: null },
            { day: 8, pdf: null, html: null }
          ]
        }
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "जुलाई": [
            { day: 28, pdf: "/misc/house proceedings/star280725.pdf", html: null },
            { day: 29, pdf: "/misc/house proceedings/star290725.pdf", html: null },
            { day: 30, pdf: "/misc/house proceedings/star300725.pdf", html: null },
            { day: 31, pdf: "/misc/house proceedings/star310725.pdf", html: null }
          ],
          "अगस्त": [
            { day: 1, pdf: "/misc/house proceedings/star010825.pdf", html: null },
            { day: 4, pdf: "/misc/house proceedings/star040825.pdf", html: null },
            { day: 5, pdf: "/misc/house proceedings/star050825.pdf", html: null },
            { day: 6, pdf: "/misc/house proceedings/star060825.pdf", html: null },
            { day: 7, pdf: null, html: null },
            { day: 8, pdf: null, html: null }
          ]
        }
      }
    ]
  },

  // पंचम सत्र (मार्च, 2025)
  {
    session: "पंचम सत्र (मार्च, 2025)",
    sections: [
      {
        section: "कार्यवाही",
        months: {
          "मार्च": [
            { day: 10, pdf: "/misc/house proceedings/hp100325.pdf", html: "/misc/house proceedings/hp100325.htm" },
            { day: 11, pdf: "/misc/house proceedings/hp110325.pdf", html: "/misc/house proceedings/hp110325.htm" },
            { day: 12, pdf: "/misc/house proceedings/hp120325.pdf", html: "/misc/house proceedings/hp120325.htm" },
            { day: 13, pdf: "/misc/house proceedings/hp130325.pdf", html: "/misc/house proceedings/hp130325.htm" },
            { day: 17, pdf: "/misc/house proceedings/hp170325.pdf", html: "/misc/house proceedings/hp170325.htm" },
            { day: 18, pdf: "/misc/house proceedings/hp180325.pdf", html: "/misc/house proceedings/hp180325.htm" },
            { day: 20, pdf: "/misc/house proceedings/hp200325.pdf", html: "/misc/house proceedings/hp200325.htm" },
            { day: 21, pdf: "/misc/house proceedings/hp210325.pdf", html: "/misc/house proceedings/hp210325.htm" },
            { day: 24, pdf: "/misc/house proceedings/hp240325.pdf", html: "/misc/house proceedings/hp240325.htm" }
          ]
        }
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "मार्च": [
            { day: 11, pdf: "/misc/house proceedings/ques110325.pdf", html: "/misc/house proceedings/ques110325.htm" },
            { day: 12, pdf: "/misc/house proceedings/ques120325.pdf", html: "/misc/house proceedings/ques120325.htm" },
            { day: 13, pdf: "/misc/house proceedings/ques130325.pdf", html: "/misc/house proceedings/ques130325.htm" },
            { day: 17, pdf: "/misc/house proceedings/ques170325.pdf", html: "/misc/house proceedings/ques170325.htm" },
            { day: 18, pdf: "/misc/house proceedings/ques180325.pdf", html: "/misc/house proceedings/ques180325.htm" },
            { day: 20, pdf: "/misc/house proceedings/ques200325.pdf", html: "/misc/house proceedings/ques200325.htm" },
            { day: 21, pdf: "/misc/house proceedings/ques210325.pdf", html: "/misc/house proceedings/ques210325.htm" },
            { day: 24, pdf: "/misc/house proceedings/ques240325.pdf", html: "/misc/house proceedings/ques240325.htm" }
          ]
        }
      },
      {
        section: "शुद्धि पत्र",
        months: {
          "मार्च": [
            { day: 11, pdf: "/misc/house proceedings/sp110325.pdf", html: "" },
            { day: 12, pdf: "/misc/house proceedings/sp120325.pdf", html: "" },
            { day: 13, pdf: "/misc/house proceedings/sp130325.pdf", html: "" },
            { day: 17, pdf: "/misc/house proceedings/sp170325.pdf", html: "" },
            { day: 18, pdf: "/misc/house proceedings/sp180325.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/sp200325.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/sp210325.pdf", html: "" },
            { day: 24, pdf: "/misc/house proceedings/sp240325.pdf", html: "" }
          ]
        }
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "मार्च": [
            { day: 11, pdf: "/misc/house proceedings/star110325.pdf", html: "" },
            { day: 12, pdf: "/misc/house proceedings/star120325.pdf", html: "" },
            { day: 13, pdf: "/misc/house proceedings/star130325.pdf", html: "" },
            { day: 17, pdf: "/misc/house proceedings/star170325.pdf", html: "" },
            { day: 18, pdf: "/misc/house proceedings/star180325.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/star200325.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/star210325.pdf", html: "" },
            { day: 24, pdf: "/misc/house proceedings/star240325.pdf", html: "" }
          ]
        }
      }
    ]
  },

  // चतुर्थ सत्र (दिसम्बर, 2024)
  {
    session: "चतुर्थ सत्र (दिसम्बर, 2024)",
    sections: [
      {
        section: "कार्यवाही",
        months: {
          "दिसम्बर": [
            { day: 16, pdf: "/misc/house proceedings/hp161224.pdf", html: "/misc/house proceedings/hp161224.htm" },
            { day: 17, pdf: "/misc/house proceedings/hp171224.pdf", html: "/misc/house proceedings/hp171224.htm" },
            { day: 18, pdf: "/misc/house proceedings/hp181224.pdf", html: "/misc/house proceedings/hp181224.htm" },
            { day: 19, pdf: "/misc/house proceedings/hp191224.pdf", html: "/misc/house proceedings/hp191224.htm" },
            { day: 20, pdf: "/misc/house proceedings/hp201224.pdf", html: "/misc/house proceedings/hp201224.htm" }
          ]
        }
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "दिसम्बर": [
            { day: 16, pdf: "/misc/house proceedings/ques161224.pdf", html: "/misc/house proceedings/ques161224.htm" },
            { day: 17, pdf: "/misc/house proceedings/hp171224.pdf", html: "/misc/house proceedings/hp171224.htm" },
            { day: 18, pdf: "/misc/house proceedings/ques181224.pdf", html: "/misc/house proceedings/ques181224.htm" },
            { day: 19, pdf: "/misc/house proceedings/ques191224.pdf", html: "/misc/house proceedings/ques191224.htm" },
            { day: 20, pdf: "/misc/house proceedings/ques201224.pdf", html: "/misc/house proceedings/ques201224.htm" }
          ]
        }
      },
      {
        section: "शुद्धि पत्र",
        months: {
          "दिसम्बर": [
            { day: 16, pdf: "/misc/house proceedings/sp161224.pdf", html: "" },
            { day: 17, pdf: "/misc/house proceedings/sp171224.pdf", html: "" },
            { day: 18, pdf: "/misc/house proceedings/sp181224.pdf", html: "" },
            { day: 19, pdf: "/misc/house proceedings/sp191224.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/sp201224.pdf", html: "" }
          ]
        }
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "दिसम्बर": [
            { day: 16, pdf: "/misc/house proceedings/star161224.pdf", html: "" },
            { day: 17, pdf: "/misc/house proceedings/star171224.pdf", html: "" },
            { day: 18, pdf: "/misc/house proceedings/star181224.pdf", html: "" },
            { day: 19, pdf: "/misc/house proceedings/star191224.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/star201224.pdf", html: "" }
          ]
        }
      }
    ]
  },

  // तृतीय सत्र (जुलाई, 2024)
  {
    session: "तृतीय सत्र (जुलाई, 2024)",
    sections: [
      {
        section: "कार्यवाही",
        months: {
          "जुलाई": [
            { day: 1, pdf: "/misc/house proceedings/hp010724.pdf", html: "/misc/house proceedings/hp010724.htm" },
            { day: 2, pdf: "/misc/house proceedings/hp020724.pdf", html: "/misc/house proceedings/hp020724.htm" },
            { day: 3, pdf: "/misc/house proceedings/hp030724.pdf", html: "/misc/house proceedings/hp030724.htm" },
            { day: 4, pdf: "/misc/house proceedings/hp040724.pdf", html: "/misc/house proceedings/hp040724.htm" },
            { day: 5, pdf: "/misc/house proceedings/hp050724.pdf", html: "/misc/house proceedings/hp050724.htm" },
            { day: 8, pdf: "/misc/house proceedings/hp080724.pdf", html: "/misc/house proceedings/hp080724.htm" },
            { day: 9, pdf: "/misc/house proceedings/hp090724.pdf", html: "/misc/house proceedings/hp090724.htm" },
            { day: 10, pdf: "/misc/house proceedings/hp100724.pdf", html: "/misc/house proceedings/hp100724.htm" },
            { day: 11, pdf: "/misc/house proceedings/hp110724.pdf", html: "/misc/house proceedings/hp110724.htm" }
          ]
        }
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "जुलाई": [
            { day: 1, pdf: "/misc/house proceedings/ques010724.pdf", html: "/misc/house proceedings/ques010724.htm" },
            { day: 2, pdf: "/misc/house proceedings/ques020724.pdf", html: "/misc/house proceedings/ques020724.htm" },
            { day: 3, pdf: "/misc/house proceedings/ques030724.pdf", html: "/misc/house proceedings/ques030724.htm" },
            { day: 4, pdf: "/misc/house proceedings/ques040724.pdf", html: "/misc/house proceedings/ques040724.htm" },
            { day: 5, pdf: "/misc/house proceedings/ques050724.pdf", html: "/misc/house proceedings/ques050724.htm" },
            { day: 8, pdf: "/misc/house proceedings/ques080724.pdf", html: "/misc/house proceedings/ques080724.htm" },
            { day: 9, pdf: "/misc/house proceedings/ques090724.pdf", html: "/misc/house proceedings/ques090724.htm" },
            { day: 10, pdf: "/misc/house proceedings/ques100724.pdf", html: "/misc/house proceedings/ques100724.htm" },
            { day: 11, pdf: "/misc/house proceedings/ques110724.pdf", html: "/misc/house proceedings/ques110724.htm" }
          ]
        }
      },
      {
        section: "शुद्धि पत्र",
        months: {
          "जुलाई": [
            { day: 1, pdf: "/misc/house proceedings/sp010724.pdf", html: "" },
            { day: 2, pdf: "/misc/house proceedings/sp020724.pdf", html: "" },
            { day: 3, pdf: "/misc/house proceedings/sp030724.pdf", html: "" },
            { day: 4, pdf: "/misc/house proceedings/sp040724.pdf", html: "" },
            { day: 5, pdf: "/misc/house proceedings/sp050724.pdf", html: "" },
            { day: 8, pdf: "/misc/house proceedings/sp080724.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/sp090724.pdf", html: "" },
            { day: 10, pdf: "/misc/house proceedings/sp100724.pdf", html: "" },
            { day: 11, pdf: "/misc/house proceedings/sp110724.pdf", html: "" }
          ]
        }
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "जुलाई": [
            { day: 1, pdf: "/misc/house proceedings/star010724.pdf", html: "" },
            { day: 2, pdf: "/misc/house proceedings/star020724.pdf", html: "" },
            { day: 3, pdf: "/misc/house proceedings/star030724.pdf", html: "" },
            { day: 4, pdf: "/misc/house proceedings/star040724.pdf", html: "" },
            { day: 5, pdf: "/misc/house proceedings/star050724.pdf", html: "" },
            { day: 8, pdf: "/misc/house proceedings/star080724.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/star090724.pdf", html: "" },
            { day: 10, pdf: "/misc/house proceedings/star100724.pdf", html: "" },
            { day: 11, pdf: "/misc/house proceedings/star110724.pdf", html: "" }
          ]
        }
      }
    ]
  },

  // द्वितीय सत्र (फरवरी, 2024)
  {
    session: "द्वितीय सत्र (फरवरी, 2024)",
    sections: [
      {
        section: "कार्यवाही",
        months: {
          "फरवरी": [
            { day: 5, pdf: "/misc/house proceedings/hp050224.pdf", html: "/misc/house proceedings/hp050224.htm" },
            { day: 6, pdf: "/misc/house proceedings/hp060224.pdf", html: "/misc/house proceedings/hp060224.htm" },
            { day: 7, pdf: "/misc/house proceedings/hp070224.pdf", html: "/misc/house proceedings/hp070224.htm" },
            { day: 8, pdf: "/misc/house proceedings/hp080224.pdf", html: "/misc/house proceedings/hp080224.htm" },
            { day: 9, pdf: "/misc/house proceedings/hp090224.pdf", html: "/misc/house proceedings/hp090224.htm" },
            { day: 12, pdf: "/misc/house proceedings/hp120224.pdf", html: "/misc/house proceedings/hp120224.htm" },
            { day: 13, pdf: "/misc/house proceedings/hp130224.pdf", html: "/misc/house proceedings/hp130224.htm" }
          ]
        }
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "फरवरी": [
            { day: 5, pdf: "/misc/house proceedings/ques050224.pdf", html: "/misc/house proceedings/ques050224.htm" },
            { day: 6, pdf: "/misc/house proceedings/ques060224.pdf", html: "/misc/house proceedings/ques060224.htm" },
            { day: 7, pdf: "/misc/house proceedings/ques070224.pdf", html: "/misc/house proceedings/ques070224.htm" },
            { day: 8, pdf: "/misc/house proceedings/ques080224.pdf", html: "/misc/house proceedings/ques080224.htm" },
            { day: 9, pdf: "/misc/house proceedings/ques090224.pdf", html: "/misc/house proceedings/ques090224.htm" },
            { day: 12, pdf: "/misc/house proceedings/ques120224.pdf", html: "/misc/house proceedings/ques120224.htm" },
            { day: 13, pdf: "/misc/house proceedings/ques130224.pdf", html: "/misc/house proceedings/ques130224.htm" }
          ]
        }
      },
      {
        section: "शुद्धि पत्र",
        months: {
          "फरवरी": [
            { day: 5, pdf: "/misc/house proceedings/sp050224.pdf", html: "" },
            { day: 6, pdf: "/misc/house proceedings/sp060224.pdf", html: "" },
            { day: 7, pdf: "/misc/house proceedings/sp070224.pdf", html: "" },
            { day: 8, pdf: "/misc/house proceedings/sp080224.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/sp090224.pdf", html: "" },
            { day: 12, pdf: "/misc/house proceedings/sp120224.pdf", html: "" },
            { day: 13, pdf: "/misc/house proceedings/sp130224.pdf", html: "" }
          ]
        }
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "फरवरी": [
            { day: 5, pdf: "/misc/house proceedings/star050224.pdf", html: "" },
            { day: 6, pdf: "/misc/house proceedings/star060224.pdf", html: "" },
            { day: 7, pdf: "/misc/house proceedings/star070224.pdf", html: "" },
            { day: 8, pdf: "/misc/house proceedings/star080224.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/star090224.pdf", html: "" },
            { day: 12, pdf: "/misc/house proceedings/star120224.pdf", html: "" },
            { day: 13, pdf: "/misc/house proceedings/star130224.pdf", html: "" }
          ]
        }
      }
    ]
  },

  // प्रथम सत्र (दिसम्बर, 2023)
  {
    session: "प्रथम सत्र (दिसम्बर, 2023)",
    sections: [
      {
        section: "कार्यवाही",
        months: {
          "दिसम्बर": [
            { day: 20, pdf: "/misc/house proceedings/hp201223.pdf", html: "/misc/house proceedings/hp201223.htm" },
            { day: 21, pdf: "/misc/house proceedings/hp211223.pdf", html: "/misc/house proceedings/hp211223.htm" },
            { day: 22, pdf: "/misc/house proceedings/hp221223.pdf", html: "/misc/house proceedings/hp221223.htm" }
          ]
        }
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "दिसम्बर": [
            { day: 20, pdf: "/misc/house proceedings/ques201223.pdf", html: "/misc/house proceedings/ques201223.htm" },
            { day: 21, pdf: "/misc/house proceedings/ques211223.pdf", html: "/misc/house proceedings/ques211223.htm" },
            { day: 22, pdf: "/misc/house proceedings/ques221223.pdf", html: "/misc/house proceedings/ques221223.htm" }
          ]
        }
      },
      {
        section: "शुद्धि पत्र",
        months: {
          "दिसम्बर": [
            { day: 20, pdf: "/misc/house proceedings/sp201223.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/sp211223.pdf", html: "" },
            { day: 22, pdf: "/misc/house proceedings/sp221223.pdf", html: "" }
          ]
        }
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "दिसम्बर": [
            { day: 20, pdf: "/misc/house proceedings/star201223.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/star211223.pdf", html: "" },
            { day: 22, pdf: "/misc/house proceedings/star221223.pdf", html: "" }
          ]
        }
      }
    ]
  },

  // प्रबोधन कार्यक्रम (जनवरी, 2024)
  {
    session: "प्रबोधन कार्यक्रम (जनवरी, 2024)",
    sections: [
      {
        section: "कार्यवाही",
        months: {
          "जनवरी": [
            { day: 15, pdf: "/misc/house proceedings/hp150124.pdf", html: "/misc/house proceedings/hp150124.htm" },
            { day: 16, pdf: "/misc/house proceedings/hp160124.pdf", html: "/misc/house proceedings/hp160124.htm" }
          ]
        }
      },
      
    ]
  }
];




const SadanKaryavahi2016 = () => {
   const navigate = useNavigate();
  const styles = {
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
    sessionTitle: {
      fontSize: "1.2rem",
      color: "#1e3a8a",
      fontWeight: 700,
      textAlign: "center",
      marginBottom: "12px",
    },
    sectionTitle: {
      fontSize: "1rem",
      fontWeight: 700,
      color: "#2563eb",
      margin: "10px 0",
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
      cursor: "pointer",
      transition: "all 0.2s ease",
      textDecoration: "none",
    },
    disabledDate: {
      backgroundColor: "#f1f5f9",
      color: "#94a3b8",
      border: "1px solid #e2e8f0",
      cursor: "not-allowed",
      padding: "8px 6px",
      minWidth: "50px",
      borderRadius: "6px",
      fontWeight: 600,
      textAlign: "center",
    },
  };

  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh" }}>

      {/* ⭐ HERO SECTION (Same as your first file) */}
      <div className="panch-hero">
        <div className="panch-hero-content">
          <div className="panch-hero-row">

<button
  className="panch-btn"
  onClick={() => {
    if (window.history.state && window.history.state.idx > 0) navigate(-1);
    else navigate("/vidhansabhakarywahi");
  }}
>
  पीछे जाएं
</button>



            {/* HERO TITLE */}
            <div className="panch-hero-text">
              <h1>गृह कार्यवाही / प्रश्नोत्तरी / शुद्धि पत्र</h1>
              <p>षोडश (16वीं) विधान सभा</p>
            </div>

          </div>
        </div>
      </div>

      {/* ⭐ SESSION CALENDAR */}
      <div style={styles.calendarFlex}>
        {sessionData.map((session, index) => (
          <div key={index} style={styles.sessionCard}>
            <div style={styles.sessionTitle}>{session.session}</div>

            {session.sections.map((sec, si) => (
              <div key={si}>
                <div style={styles.sectionTitle}>{sec.section}</div>

                {Object.entries(sec.months).map(([month, days], mi) => (
                  <div key={mi} style={styles.monthBlock}>
                    <div style={styles.monthTitle}>{month}</div>

                    <div style={styles.dateFlex}>
                      {days.map((d, di) =>
                        d.pdf || d.html ? (
                          <a
                            key={di}
                            href={d.html || d.pdf}
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
                          <span key={di} style={styles.disabledDate}>
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
        ))}
      </div>

    </div>
  );
};

export default SadanKaryavahi2016;