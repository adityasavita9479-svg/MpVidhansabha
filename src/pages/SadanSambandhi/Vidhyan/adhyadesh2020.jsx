import React from "react";
import { useNavigate } from "react-router-dom";

const OrdinanceTable2020 = () => {
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
  // ORDINANCE — YEAR 2020 DATA
  // ================================

  const ordinance2020 = [
    {
      no: 1,
      title: "मध्‍यप्रदेश वित्‍त अध्‍यादेश, 2020",
      department: "वित्‍त",
      proclaimDate: "28/3/2020",
      billRef: "विधेयक क्रमांक 17 सन् 2020",
      pdf: "/misc/ord%202020/ORD%201%20of%202020.pdf",
      billPdf: "",
    },
    {
      no: 2,
      title: "मध्‍यप्रदेश विनियोग (लेखानुदान) अध्‍यादेश, 2020",
      department: "वित्‍त",
      proclaimDate: "",
      billRef: "मध्‍यप्रदेश विनियोग अध्‍यादेश, 2020 क्रमांक 6 सन् 2020 द्वारा निरसित",
      pdf: "/misc/ord%202020/ORD%202%20of%202020.pdf",
      billPdf: "",
    },
    {
      no: 3,
      title: "मध्‍यप्रदेश नगरपालिक विधि (संशोधन) अध्‍यादेश, 2020",
      department: "नगरीय विकास एवं आवास",
      proclaimDate: "",
      billRef: "शासन द्वारा वापस लिया गया",
      pdf: "",
      billPdf: "",
    },
    {
      no: 4,
      title: "मध्‍यप्रदेश कृषि उपज मण्‍डी (संशोधन) अध्‍यादेश, 2020",
      department: "किसान कल्‍याण तथा कृषि विकास",
      proclaimDate: "1/5/2020",
      billRef: "व्‍यपगत",
      pdf: "/misc/ord%202020/ORD%204%20of%202020.pdf",
      billPdf: "",
    },
    {
      no: 5,
      title: "मध्‍यप्रदेश श्रम विधि (संशोधन) अध्‍यादेश, 2020",
      department: "श्रम",
      proclaimDate: "6/5/2020",
      billRef: "व्‍यपगत",
      pdf: "/misc/ord%202020/ORD%205%20of%202020.PDF",
      billPdf: "",
    },
    {
      no: 6,
      title: "मध्‍यप्रदेश विनियोग अध्‍यादेश, 2020",
      department: "वित्‍त",
      proclaimDate: "24/7/2020",
      billRef: "विधेयक क्रमांक 18 सन् 2020",
      pdf: "/misc/ord%202020/ORD%206%20of%202020.PDF",
      billPdf: "",
    },
    {
      no: 7,
      title: "मध्‍यप्रदेश लोक सेवाओं के प्रदान की गारंटी (संशोधन) अध्‍यादेश, 2020",
      department: "लोक सेवा प्रबंधन",
      proclaimDate: "19/8/2020",
      billRef: "व्‍यपगत",
      pdf: "/misc/ord%202020/ORD%207%20of%202020.pdf",
      billPdf: "",
    },
    {
      no: 8,
      title: "श्रम विधि (मध्‍यप्रदेश संशोधन) अध्‍यादेश, 2020",
      department: "श्रम",
      proclaimDate: "20/8/2020",
      billRef: "व्‍यपगत",
      pdf: "/misc/ord%202020/ORD%208%20of%202020.pdf",
      billPdf: "",
    },
    {
      no: 9,
      title: "मध्‍यप्रदेश सहकारी सोसाइटी (संशोधन) अध्‍यादेश, 2020",
      department: "सहकारिता",
      proclaimDate: "24/8/2020",
      billRef: "व्‍यपगत",
      pdf: "/misc/ord%202020/ORD%209%20of%202020.pdf",
      billPdf: "",
    },
    {
      no: 10,
      title: "मध्‍यप्रदेश नगरपालिक विधि (संशोधन) अध्‍यादेश, 2020",
      department: "नगरीय विकास एवं आवास",
      proclaimDate: "14/9/2020",
      billRef: "विधेयक क्रमांक 15 सन् 2020",
      pdf: "/misc/ord%202020/ORD%2010%20of%202020.pdf",
      billPdf: "",
    },
    {
      no: 11,
      title: "मध्‍यप्रदेश कराधान अधिनियमों की पुरानी बकाया राशि का समाधान अध्‍यादेश, 2020",
      department: "वाणिज्यिक कर",
      proclaimDate: "26/9/2020",
      billRef: "विधेयक क्रमांक 7 सन् 2021",
      pdf: "/misc/ord%202020/ORD%2011%20of%202020.pdf",
      billPdf: "",
    },
    {
      no: 12,
      title: "मध्‍यप्रदेश नगरपालिक विधि (द्वितीय संशोधन) अध्‍यादेश, 2020",
      department: "नगरीय विकास एवं आवास",
      proclaimDate: "26/9/2020",
      billRef: "विधेयक क्रमांक 2 सन् 2021",
      pdf: "/misc/ord%202020/ORD%2012%20of%202020.pdf",
      billPdf: "",
    },
    {
      no: 13,
      title: "मध्‍यप्रदेश नगरपालिक विधि (तृतीय संशोधन) अध्‍यादेश, 2020",
      department: "नगरीय विकास एवं आवास",
      proclaimDate: "26/9/2020",
      billRef: "व्‍यपगत",
      pdf: "/misc/ord%202020/ORD%2013%20of%202020.pdf",
      billPdf: "",
    },
    {
      no: 14,
      title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) संशोधन अध्‍यादेश, 2020",
      department: "उच्‍च शिक्षा",
      proclaimDate: "26/9/2020",
      billRef: "विधेयक क्रमांक 11 सन् 2021",
      pdf: "/misc/ord%202020/ORD%2014%20of%202020.pdf",
      billPdf: "",
    },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.headerBar}>
        <button style={styles.backButton} onClick={() => navigate("/adhyadesh/ordinance")}>
          ← Back
        </button>
        <h1 style={styles.headerTitle}>ORDINANCE / अध्‍यादेश - 2020</h1>
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
                <th style={styles.th}>संबंधित विधेयक</th>
              </tr>
            </thead>

            <tbody>
              {ordinance2020.map((item, idx) => (
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

export default OrdinanceTable2020;
