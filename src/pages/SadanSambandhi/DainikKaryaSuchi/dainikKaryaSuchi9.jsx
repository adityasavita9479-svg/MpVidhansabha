import React from "react";
import { useNavigate } from "react-router-dom";

const DainikKaryasuchi9 = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "दैनिक कार्य सूची",
      vidhanSabha: "नवम् विधान सभा (1990–1992)",
      sessions: [
        {
          sessionNumber: "प्रथम",
          sessionName: "मार्च, 1990",
          months: [
            {
              monthName: "मार्च",
              dates: [
                { label: "19", pdf: "/misc/karyasuchi/190390.pdf" },
                { label: "20", pdf: "/misc/karyasuchi/200390.pdf" },
                { label: "21", pdf: "/misc/karyasuchi/210390.pdf" },
                { label: "22", pdf: "/misc/karyasuchi/220390.pdf" },
                { label: "23", pdf: "/misc/karyasuchi/230390.pdf" },
                { label: "28", pdf: "/misc/karyasuchi/280390.pdf" },
                { label: "(अनुपूरक)", pdf: "/misc/karyasuchi/280390-supplementary.pdf" },

                { label: "29", pdf: "/misc/karyasuchi/290390.pdf" },
              ],
            },
          ],
        },

        {
          sessionNumber: "द्वितीय",
          sessionName: "जून - अगस्त, 1990",
          months: [
            {
              monthName: "जून",
              dates: [
                { label: "20", pdf: "/misc/karyasuchi/200690.pdf" },
                { label: "21", pdf: "/misc/karyasuchi/210690.pdf" },
                { label: "22", pdf: "/misc/karyasuchi/220690.pdf" },
                { label: "25", pdf: "/misc/karyasuchi/250690.pdf" },
                { label: "26", pdf: "/misc/karyasuchi/260690.pdf" },
                { label: "27", pdf: "/misc/karyasuchi/270690.pdf" },
                { label: "28", pdf: "/misc/karyasuchi/280690.pdf" },
                { label: "29", pdf: "/misc/karyasuchi/290690.pdf" },
              ],
            },
            {
              monthName: "जुलाई",
              dates: [
                { label: "2", pdf: "/misc/karyasuchi/020790.pdf" },
                { label: "3", pdf: "/misc/karyasuchi/030790.pdf" },
                { label: "5", pdf: "/misc/karyasuchi/050790.pdf" },
                { label: "6", pdf: "/misc/karyasuchi/060790.pdf" },
                { label: "9", pdf: "/misc/karyasuchi/090790.pdf" },
                { label: "10", pdf: "/misc/karyasuchi/100790.pdf" },
                { label: "11", pdf: "/misc/karyasuchi/110790.pdf" },
                { label: "12", pdf: "/misc/karyasuchi/120790.pdf" },
                { label: "13", pdf: "/misc/karyasuchi/130790.pdf" },
                { label: "16", pdf: "/misc/karyasuchi/160790.pdf" },
                { label: "17", pdf: "/misc/karyasuchi/170790.pdf" },
                { label: "18", pdf: "/misc/karyasuchi/180790.pdf" },
                { label: "19", pdf: "/misc/karyasuchi/190790.pdf" },
                { label: "20", pdf: "/misc/karyasuchi/200790.pdf" },
                { label: "23", pdf: "/misc/karyasuchi/230790.pdf" },
                { label: "24", pdf: "/misc/karyasuchi/240790.pdf" },
                { label: "25", pdf: "/misc/karyasuchi/250790.pdf" },
                { label: "27", pdf: "/misc/karyasuchi/270790.pdf" },
                { label: "28", pdf: "/misc/karyasuchi/280790.pdf" },
                { label: "30", pdf: "/misc/karyasuchi/300790.pdf" },
                { label: "31", pdf: "/misc/karyasuchi/310790.pdf" },
              ],
            },
            {
              monthName: "अगस्त",
              dates: [{ label: "1", pdf: "/misc/karyasuchi/010890.pdf" }],
            },
          ],
        },

        {
          sessionNumber: "तृतीय",
          sessionName: "दिसम्बर, 1990",
          months: [
            {
              monthName: "दिसम्बर",
              dates: [
                { label: "17", pdf: "/misc/karyasuchi/171290.pdf" },
                { label: "19", pdf: "/misc/karyasuchi/191290.pdf" },
                { label: "20", pdf: "/misc/karyasuchi/201290.pdf" },
                { label: "21", pdf: "/misc/karyasuchi/211290.pdf" },
              ],
            },
          ],
        },

        {
          sessionNumber: "चतुर्थ",
          sessionName: "मार्च, 1991",
          months: [
            {
              monthName: "मार्च",
              dates: [
                { label: "11", pdf: "/misc/karyasuchi/110391.pdf" },
                { label: "12", pdf: "/misc/karyasuchi/120391.pdf" },
                { label: "(अनुपूरक)", pdf: "/misc/karyasuchi/120391-supplementary.pdf" },

                { label: "13", pdf: "/misc/karyasuchi/130391.pdf" },
                { label: "14", pdf: "/misc/karyasuchi/140391.pdf" },
                { label: "15", pdf: "/misc/karyasuchi/150391.pdf" },
                { label: "18", pdf: "/misc/karyasuchi/180391.pdf" },
                { label: "19", pdf: "/misc/karyasuchi/190391.pdf" },
                { label: "20", pdf: "/misc/karyasuchi/200391.pdf" },
                { label: "21", pdf: "/misc/karyasuchi/210391.pdf" },
                { label: "22", pdf: "/misc/karyasuchi/220391.pdf" },
                { label: "25", pdf: "/misc/karyasuchi/250391.pdf" },
                { label: "26", pdf: "/misc/karyasuchi/260391.pdf" },
                { label: "27(", pdf: "/misc/karyasuchi/270391.pdf" },
                { label: "(शुद्धि पत्र)", pdf: "/misc/karyasuchi/270391-shuddhi%20patra.pdf" },

              ],
            },
          ],
        },

        {
          sessionNumber: "पंचम्",
          sessionName: "जून - अगस्त, 1991",
          months: [
            {
              monthName: "जून",
              dates: [
                { label: "26", pdf: "/misc/karyasuchi/260691.pdf" },
                { label: "27", pdf: "/misc/karyasuchi/270691.pdf" },
                { label: "28", pdf: "/misc/karyasuchi/280691.pdf" },
              ],
            },
            {
              monthName: "जुलाई",
              dates: [
                { label: "1", pdf: "/misc/karyasuchi/010791.pdf" },
                { label: "2", pdf: "/misc/karyasuchi/020791.pdf" },
                { label: "3", pdf: "/misc/karyasuchi/030791.pdf" },
                { label: "4", pdf: "/misc/karyasuchi/040791.pdf" },
                { label: "(शुद्धि पत्र)", pdf: "/misc/karyasuchi/040791-shuddhi%20patra.pdf" },

                { label: "5", pdf: "/misc/karyasuchi/050791.pdf" },
                { label: "8", pdf: "/misc/karyasuchi/080791.pdf" },
                { label: "9", pdf: "/misc/karyasuchi/090791.pdf" },
                { label: "10", pdf: "/misc/karyasuchi/100791.pdf" },
                { label: "11", pdf: "/misc/karyasuchi/110791.pdf" },
                { label: "12", pdf: "/misc/karyasuchi/120791.pdf" },
                { label: "15", pdf: "/misc/karyasuchi/150791.pdf" },
                { label: "16", pdf: "/misc/karyasuchi/160791.pdf" },
                { label: "17", pdf: "/misc/karyasuchi/170791.pdf" },
                { label: "18", pdf: "/misc/karyasuchi/180791.pdf" },
                { label: "19", pdf: "/misc/karyasuchi/190791.pdf" },
                { label: "22", pdf: "/misc/karyasuchi/220791.pdf" },
                { label: "24", pdf: "/misc/karyasuchi/240791.pdf" },
                { label: "25", pdf: "/misc/karyasuchi/250791.pdf" },
                { label: "26", pdf: "/misc/karyasuchi/260791.pdf" },
                { label: "29", pdf: "/misc/karyasuchi/290791.pdf" },
                { label: "(शुद्धि पत्र)", pdf: "/misc/karyasuchi/290791-shuddhi%20patra.pdf" },

                { label: "30", pdf: "/misc/karyasuchi/300791.pdf" },
                { label: "31", pdf: "/misc/karyasuchi/310791.pdf" },
              ],
            },
            {
              monthName: "अगस्त",
              dates: [
                { label: "1", pdf: "/misc/karyasuchi/010891.pdf" },
                { label: "2", pdf: "/misc/karyasuchi/020891.pdf" },
                { label: "(शुद्धि पत्र)", pdf: "/misc/karyasuchi/020891-shuddhi%20patra.pdf" },

                { label: "7", pdf: "/misc/karyasuchi/070891.pdf" },
                { label: "(अनुपूरक)", pdf: "/misc/karyasuchi/070891-supplementary.pdf" },

                { label: "8", pdf: "/misc/karyasuchi/080891.pdf" },
              ],
            },
          ],
        },

        {
          sessionNumber: "षष्टम्",
          sessionName: "दिसम्बर, 1991",
          months: [
            {
              monthName: "दिसम्बर",
              dates: [
                { label: "9", pdf: "/misc/karyasuchi/091291.pdf" },
                { label: "10", pdf: "/misc/karyasuchi/101291.pdf" },
                { label: "11", pdf: "/misc/karyasuchi/111291.pdf" },
                { label: "(अनुपूरक)", pdf: "/misc/karyasuchi/111291-supplementary.pdf" },

                { label: "12", pdf: "/misc/karyasuchi/121291.pdf" },
                { label: "(अनुपूरक)", pdf: "/misc/karyasuchi/121291-supplementary.pdf" },

                { label: "13", pdf: "/misc/karyasuchi/131291.pdf" },
                { label: "16", pdf: "/misc/karyasuchi/161291.pdf" },
                { label: "(अनुपूरक)", pdf: "/misc/karyasuchi/161291-supplementary.pdf" },

                { label: "17", pdf: "/misc/karyasuchi/171291.pdf" },
              ],
            },
          ],
        },

        {
          sessionNumber: "सप्तम्",
          sessionName: "फरवरी - मार्च, 1992",
          months: [
            {
              monthName: "फरवरी",
              dates: [
                { label: "10", pdf: "/misc/karyasuchi/100292.pdf" },
                { label: "11", pdf: "/misc/karyasuchi/110292.pdf" },
                { label: "(अनुपूरक)", pdf: "/misc/karyasuchi/110292-supplementary.pdf" },

                { label: "12", pdf: "/misc/karyasuchi/120292.pdf" },
                { label: "13", pdf: "/misc/karyasuchi/130292.pdf" },
                { label: "14", pdf: "/misc/karyasuchi/140292.pdf" },
                { label: "(अनुपूरक)", pdf: "/misc/karyasuchi/140292-supplementary.pdf" },

                { label: "17", pdf: "/misc/karyasuchi/170292.pdf" },
                { label: "19", pdf: "/misc/karyasuchi/190292.pdf" },
                { label: "20", pdf: "/misc/karyasuchi/200292.pdf" },
                { label: "21", pdf: "/misc/karyasuchi/210292.pdf" },
                { label: "24", pdf: "/misc/karyasuchi/240292.pdf" },
                { label: "25", pdf: "/misc/karyasuchi/250292.pdf" },
                { label: "26", pdf: "/misc/karyasuchi/260292.pdf" },
                { label: "27", pdf: "/misc/karyasuchi/270292.pdf" },
                { label: "28", pdf: "/misc/karyasuchi/280292.pdf" },
              ],
            },
            {
              monthName: "मार्च",
              dates: [
                { label: "3", pdf: "/misc/karyasuchi/030392.pdf" },
                { label: "4", pdf: "/misc/karyasuchi/040392.pdf" },
                { label: "5", pdf: "/misc/karyasuchi/050392.pdf" },
                { label: "6", pdf: "/misc/karyasuchi/060392.pdf" },
                { label: "9", pdf: "/misc/karyasuchi/090392.pdf" },
                { label: "(पुनरीक्षित)", pdf: "/misc/karyasuchi/090392-Revised.pdf" },

                { label: "10", pdf: "/misc/karyasuchi/100392.pdf" },
                { label: "11", pdf: "/misc/karyasuchi/110392.pdf" },
                { label: "12", pdf: "/misc/karyasuchi/120392.pdf" },
                { label: "13", pdf: "/misc/karyasuchi/130392.pdf" },
                { label: "16", pdf: "/misc/karyasuchi/160392.pdf" },
                { label: "17", pdf: "/misc/karyasuchi/170392.pdf" },
              ],
            },
          ],
        },

        {
          sessionNumber: "अष्टम्",
          sessionName: "सितम्बर, 1992",
          months: [
            {
              monthName: "सितम्बर",
              dates: [
                { label: "2", pdf: "/misc/karyasuchi/020992.pdf" },
                { label: "3", pdf: "/misc/karyasuchi/030992.pdf" },
                { label: "4", pdf: "/misc/karyasuchi/040992.pdf" },
                { label: "7", pdf: "/misc/karyasuchi/070992.pdf" },
                { label: "8", pdf: "/misc/karyasuchi/080992.pdf" },
                { label: "9", pdf: "/misc/karyasuchi/090992.pdf" },
                { label: "10", pdf: "/misc/karyasuchi/100992.pdf" },
                { label: "11", pdf: "/misc/karyasuchi/110992.pdf" },
                { label: "(शुद्धि पत्र)", pdf: "/misc/karyasuchi/110992-shuddhi%20patra.pdf" },

                { label: "(अनुपूरक)", pdf: "/misc/karyasuchi/110992-supplementary.pdf" },
              ],
            },
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
                  <p>नवम् विधान सभा (1990–1992)</p>
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

export default DainikKaryasuchi9;
