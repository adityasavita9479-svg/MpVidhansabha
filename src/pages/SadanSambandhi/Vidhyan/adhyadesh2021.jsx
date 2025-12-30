import React from "react";
import { useNavigate } from "react-router-dom";

const AdhyadeshTable2021 = () => {
  const navigate = useNavigate();

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f1f5f9",
      fontFamily: "'Noto Sans Devanagari', sans-serif",
    },

    headerBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "linear-gradient(90deg, #1e3a8a, #3b82f6)",
      color: "#fff",
      padding: "15px 30px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      position: "sticky",
      top: 0,
      zIndex: 10,
    },

    backButton: {
      backgroundColor: "#fff",
      color: "#1e3a8a",
      border: "none",
      padding: "8px 16px",
      borderRadius: "8px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    },

    headerTitle: {
      fontSize: "1.8rem",
      fontWeight: "700",
      flex: 1,
      textAlign: "center",
    },

    container: {
      maxWidth: "1200px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "16px",
    },

    sessionHeading: {
      textAlign: "center",
      fontSize: "1.4rem",
      fontWeight: "600",
      background: "linear-gradient(90deg, #3b82f6, #1e40af)",
      color: "#fff",
      borderRadius: "10px",
      padding: "10px",
      margin: "40px 0 20px",
    },

    tableContainer: { overflowX: "auto" },

    table: { width: "100%", borderCollapse: "collapse" },

    th: {
      backgroundColor: "#1e3a8a",
      color: "#fff",
      padding: "12px",
      textAlign: "center",
    },

    td: {
      padding: "10px",
      textAlign: "center",
      borderBottom: "1px solid #e2e8f0",
    },

    ordinanceLink: {
      color: "#1d4ed8",
      textDecoration: "underline",
      fontWeight: 600,
    },

    billLink: {
      color: "#2563eb",
      textDecoration: "underline",
      fontWeight: 500,
    },
  };

  // ================================
  // ORDINANCE — YEAR 2021
  // ================================

  const ordinance2021 = [
    { no: 1, title: "मध्‍यप्रदेश धार्मिक स्‍वतंत्रता अध्‍यादेश, 2021", department: "गृह", date: "9/1/2021", billRef: "विधेयक क्रमांक 1 सन् 2021", pdf: "/misc/ord%202021/ORD%201%20of%202021.pdf", billPdf: "" },
    { no: 2, title: "मध्‍यप्रदेश विनियोग अध्‍यादेश, 2021", department: "वित्‍त", date: "11/1/2021", billRef: "विधेयक क्रमांक 16 सन् 2021", pdf: "/misc/ord%202021/ORD%202%20of%202021.pdf", billPdf: "" },
    { no: 3, title: "मध्‍यप्रदेश हाई स्‍पीड डीजल उपकर (संशोधन) अध्‍यादेश, 2021", department: "वाणिज्यिक कर", date: "11/1/2021", billRef: "विधेयक क्रमांक 6 सन् 2021", pdf: "/misc/ord%202021/ORD%203%20of%202021.pdf", billPdf: "" },
    { no: 4, title: "मध्‍यप्रदेश मोटर स्पिरिट उपकर (संशोधन) अध्‍यादेश, 2021", department: "वाणिज्यिक कर", date: "11/1/2021", billRef: "विधेयक क्रमांक 5 सन् 2021", pdf: "/misc/ord%202021/ORD%204%20of%202021.pdf", billPdf: "" },
    { no: 5, title: "मध्‍यप्रदेश वेट (संशोधन) अध्‍यादेश, 2021", department: "वाणिज्यिक कर", date: "12/1/2021", billRef: "विधेयक क्रमांक 4 सन् 2021", pdf: "/misc/ord%202021/ORD%205%20of%202021.pdf", billPdf: "" },
    { no: 6, title: "पंडित एस.एन. शुक्‍ला विश्‍वविद्यालय (संशोधन) अध्‍यादेश, 2021", department: "उच्‍च शिक्षा", date: "12/1/2021", billRef: "विधेयक क्रमांक 10 सन् 2021", pdf: "/misc/ord%202021/ORD%206%20of%202021.pdf", billPdf: "" },
    { no: 7, title: "डॉ.बी.आर.अम्‍बेडकर सामाजिक विज्ञान विश्‍वविद्यालय (संशोधन) अध्‍यादेश, 2021", department: "उच्‍च शिक्षा", date: "12/1/2021", billRef: "विधेयक क्रमांक 9 सन् 2021", pdf: "/misc/ord%202021/ORD%207%20of%202021.pdf", billPdf: "" },
    { no: 8, title: "मध्‍यप्रदेश भोज (मुक्‍त) विश्‍वविद्यालय संशोधन अध्‍यादेश, 2021", department: "उच्‍च शिक्षा", date: "12/1/2021", billRef: "विधेयक क्रमांक 8 सन् 2021", pdf: "/misc/ord%202021/ORD%208%20of%202021.pdf", billPdf: "" },
    { no: 9, title: "मध्‍यप्रदेश लोक सेवाओं के प्रदान की गारंटी (संशोधन) अध्‍यादेश, 2021", department: "लोक सेवा प्रबंधन", date: "12/1/2021", billRef: "विधेयक क्रमांक 12 सन् 2021", pdf: "/misc/ord%202021/ORD%209%20of%202021.pdf", billPdf: "" },
    { no: 10, title: "मध्‍यप्रदेश राज्‍य पिछडा वर्ग आयोग (संशोधन) अध्‍यादेश, 2021", department: "पिछड़ा वर्ग कल्‍याण", date: "12/1/2021", billRef: "विधेयक क्रमांक 15 सन् 2021", pdf: "/misc/ord%202021/ORD%2010%20of%202021.pdf", billPdf: "" },
    { no: 11, title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) द्वितीय संशोधन अध्‍यादेश, 2021", department: "उच्‍च शिक्षा", date: "13/1/2021", billRef: "विधेयक क्रमांक 11 सन् 2021", pdf: "/misc/ord%202021/ORD%2011%20of%202021.pdf", billPdf: "" },
    { no: 12, title: "मध्‍यप्रदेश सहकारी सोसाइटी (संशोधन) अध्‍यादेश, 2021", department: "सहकारिता", date: "23/1/2021", billRef: "विधेयक क्रमांक 21 सन् 2021", pdf: "/misc/ord%202021/ORD%2012%20of%202021.pdf", billPdf: "" },
    { no: 13, title: "मध्‍यप्रदेश नगरपालिक विधि (संशोधन) अध्‍यादेश, 2021", department: "नगरीय विकास एवं आवास", date: "20/07/2021", billRef: "विधेयक क्रमांक 24 सन् 2021", pdf: "/misc/ord%202021/ORD%2013%20of%202021.pdf", billPdf: "" },
    { no: 14, title: "मध्‍यप्रदेश पंचायत राज एवं ग्राम स्‍वराज (संशोधन) अध्‍यादेश, 2021 , वर्णित अध्‍यादेश मान. राज्‍यपाल महोदय द्वारा दिनांक 26 दिसम्‍बर, 2021 को वापस लिया गया", department: "पंचायत एवं ग्रामीण विकास", date: "21/11/2021", billRef: "विधेयक क्रमांक 33 सन् 2021 (सभा में पुर:स्‍थापित नहीं हुआ)", pdf: "/misc/ord%202021/ORD%2014%20of%202021.PDF", billPdf: "" },
    { no: 15, title: "मध्‍यप्रदेश पंचायतराज एवं ग्राम स्‍वराज (द्वितीय संशोधन) अध्‍यादेश, 2021", department: "पंचायत एवं ग्रामीण विकास", date: "30/12/2021", billRef: "विधेयक क्रमांक 2 सन् 2022", pdf: "/misc/ord%202021/ord%2015%20of%202021.pdf", billPdf: "" },
  ];

  // ================================
  // ORDINANCE — YEAR 2022
  // ================================

  const ordinance2022 = [
    { no: 1, title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) संशोधन अध्‍यादेश, 2022", department: "उच्‍च शिक्षा", date: "22/02/2022", billRef: "व्‍यपगत", pdf: "/misc/ord%202022/ord%20no%201%20of%202022.pdf", billPdf: "" },
    { no: 2, title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) द्वितीय संशोधन अध्‍यादेश, 2022", department: "उच्‍च शिक्षा", date: "28/04/2022", billRef: "विधेयक क्रमांक 15 सन् 2022", pdf: "/misc/ord%202022/ord%202%20of%202022.pdf", billPdf: "" },
    { no: 3, title: "मध्‍यप्रदेश नगरपालिक विधि (संशोधन) अध्‍यादेश, 2022", department: "नगरीय विकास एवं आवास", date: "26/05/2022", billRef: "विधेयक क्रमांक 12 सन् 2022", pdf: "/misc/ord%202022/ord%203%20of%202022.pdf", billPdf: "" },
    { no: 4, title: "मध्‍यप्रदेश भू-राजस्‍व संहिता (संशोधन) अध्‍यादेश, 2022", department: "राजस्‍व", date: "13/06/2022", billRef: "विधेयक क्रमांक 9 सन् 2022", pdf: "/misc/ord%202022/ord%204%20of%202022.pdf", billPdf: "" },
    { no: 5, title: "मध्‍यप्रदेश नगरपालिक विधि (द्वितीय संशोधन) अध्‍यादेश, 2022", department: "नगरीय विकास एवं आवास", date: "12/07/2022", billRef: "विधेयक क्रमांक 12 सन् 2022", pdf: "/misc/ord%202022/ORD%205%20of%202022.pdf", billPdf: "" },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.headerBar}>
        <button style={styles.backButton} onClick={() => navigate("/adhyadesh/ordinance")}>
          ← Back
        </button>
        <h1 style={styles.headerTitle}>ORDINANCE / अध्‍यादेश - 2021 & 2022</h1>
      </header>

      <div style={styles.container}>
        {/* ======================= 2021 ======================= */}
        <h2 style={styles.sessionHeading}>अध्‍यादेश - 2021</h2>

        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>क्र.</th>
                <th style={styles.th}>अध्‍यादेश का नाम</th>
                <th style={styles.th}>विभाग</th>
                <th style={styles.th}>प्रख्‍यापित दिनांक</th>
                <th style={styles.th}>संबंधित विधेयक</th>
              </tr>
            </thead>

            <tbody>
              {ordinance2021.map((item, idx) => (
                <tr key={idx}>
                  <td style={styles.td}>{item.no}</td>

                  <td style={styles.td}>
                    {item.pdf ? (
                      <a href={item.pdf} target="_blank" rel="noopener noreferrer" style={styles.ordinanceLink}>
                        {item.title}
                      </a>
                    ) : (
                      <span>{item.title}</span>
                    )}
                  </td>

                  <td style={styles.td}>{item.department}</td>
                  <td style={styles.td}>{item.date}</td>

                  <td style={styles.td}>
                    {item.billPdf ? (
                      <a href={item.billPdf} target="_blank" rel="noopener noreferrer" style={styles.billLink}>
                        {item.billRef}
                      </a>
                    ) : (
                      <span>{item.billRef}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ======================= 2022 ======================= */}
        <h2 style={styles.sessionHeading}>अध्‍यादेश - 2022</h2>

        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>क्र.</th>
                <th style={styles.th}>अध्‍यादेश का नाम</th>
                <th style={styles.th}>विभाग</th>
                <th style={styles.th}>प्रख्‍यापित दिनांक</th>
                <th style={styles.th}>संबंधित विधेयक</th>
              </tr>
            </thead>

            <tbody>
              {ordinance2022.map((item, idx) => (
                <tr key={idx}>
                  <td style={styles.td}>{item.no}</td>

                  <td style={styles.td}>
                    {item.pdf ? (
                      <a href={item.pdf} target="_blank" rel="noopener noreferrer" style={styles.ordinanceLink}>
                        {item.title}
                      </a>
                    ) : (
                      <span>{item.title}</span>
                    )}
                  </td>

                  <td style={styles.td}>{item.department}</td>
                  <td style={styles.td}>{item.date}</td>

                  <td style={styles.td}>
                    {item.billPdf ? (
                      <a href={item.billPdf} target="_blank" rel="noopener noreferrer" style={styles.billLink}>
                        {item.billRef}
                      </a>
                    ) : (
                      <span>{item.billRef}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdhyadeshTable2021;







