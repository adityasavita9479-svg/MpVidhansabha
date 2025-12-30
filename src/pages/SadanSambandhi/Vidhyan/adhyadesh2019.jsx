import React from "react";
import { useNavigate } from "react-router-dom";

const OrdinanceTable2019 = () => {
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

  const ordinance2019 = [
    {
      no: 1,
      title: "मध्‍यप्रदेश कृषि उपज मण्‍डी (संशोधन) अध्‍यादेश, 2019",
      department: "किसान कल्‍याण तथा कृषि विकास",
      proclaimDate: "8/3/2019",
      billRef: "विधेयक क्रमांक 10 सन् 2019",
      pdf: "/misc/ORDINANCE/2019/ORD%201%20of%202019.pdf",
      billPdf: "",
    },
    {
      no: 2,
      title:
        "मध्‍यप्रदेश लोक सेवा (अनुसूचित जातियों,अनुसूचित जनजातियों और अन्‍य पिछड़े वर्गों के लिए आरक्षण) संशोधन अध्‍यादेश, 2019",
      department: "आदिम जाति कल्‍याण",
      proclaimDate: "8/3/2019",
      billRef: "विधेयक क्रमांक 15 सन् 2019",
      pdf: "/misc/ORDINANCE/2019/ORD%202%20of%202019.pdf",
      billPdf: "",
    },
    {
      no: 3,
      title:
        "मध्‍यप्रदेश सिंचाई प्रबंधन में कृषकों की भागीदारी (संशोधन) अध्‍यादेश, 2019",
      department: "जल संसाधन",
      proclaimDate: "8/3/2019",
      billRef: "अध्‍यादेश क्रमांक 5 सन् 2019 द्वारा निरसित",
      pdf: "/misc/ORDINANCE/2019/ORD%203%20of%202019.pdf",
      billPdf: "",
    },
    {
      no: 4,
      title: "मध्‍यप्रदेश विश्‍वविद्यालय (संशोधन) अध्‍यादेश, 2019",
      department: "उच्‍च शिक्षा",
      proclaimDate: "17/6/2019",
      billRef: "विधेयक क्रमांक 19 सन् 2019",
      pdf: "/misc/ORDINANCE/2019/ORD%204%20of%202019.pdf",
      billPdf: "",
    },
    {
      no: 5,
      title:
        "मध्‍यप्रदेश सिंचाई प्रबंधन में कृषकों की भागीदारी (द्वितीय संशोधन) अध्‍यादेश, 2019",
      department: "जल संसाधन",
      proclaimDate: "28/6/2019",
      billRef: "व्यपगत",
      pdf: "/misc/ORDINANCE/2019/ORD%205%20of%202019.pdf",
      billPdf: "",
    },
    {
      no: 6,
      title:
        "मध्‍यप्रदेश स्‍थानीय प्राधिकरण (निर्वाचन अपराध) संशोधन अध्‍यादेश, 2019",
      department: "नगरीय विकास एवं आवास",
      proclaimDate: "4/10/2019",
      billRef: "विधेयक क्रमांक 37 सन् 2019",
      pdf: "/misc/ORDINANCE/2019/ORD%206%20of%202019.pdf",
      billPdf: "",
    },
    {
      no: 7,
      title: "मध्‍यप्रदेश नगरपालिक विधि (संशोधन) अध्‍यादेश, 2019",
      department: "नगरीय विकास एवं आवास",
      proclaimDate: "9/10/2019",
      billRef: "विधेयक क्रमांक 38 सन् 2019",
      pdf: "/misc/ORDINANCE/2019/ORD%207%20of%202019.pdf",
      billPdf: "",
    },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.headerBar}>
        <button style={styles.backButton} onClick={() => navigate("/adhyadesh/ordinance")}>← Back</button>
        <h1 style={styles.headerTitle}>ORDINANCE / अध्‍यादेश - 2019</h1>
      </header>

      <div style={styles.container}>
        <h2 style={styles.sessionHeading}>मान. राज्‍यपाल महोदय द्वारा प्रख्‍यापित अध्‍यादेश</h2>

        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>क्र.</th>
                <th style={styles.th}>अध्‍यादेश का नाम</th>
                <th style={styles.th}>विभाग</th>
                <th style={styles.th}>प्रख्‍यापित किये जाने का दिनांक</th>
                <th style={styles.th}>अध्‍यादेश से संबंधित विधेयक</th>
              </tr>
            </thead>

            <tbody>
              {ordinance2019.map((item, idx) => (
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
                  <td style={styles.td}>{item.proclaimDate}</td>

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

export default OrdinanceTable2019;