import React from "react";

const secretariesData = [
  {
    type: "Chief Secretary",
    list: [
      { name: "श्री अरविन्द शर्मा", tenure: "01/10/2025 से निरंतर......" },
      { name: "श्री अवधेश प्रताप सिंह", tenure: "01/07/2016 से 30/09/2025" },
      { name: "श्री भगवानदेव ईसरानी", tenure: "29/03/2014 से 30/06/2016" },
      { name: "श्री राजकुमार पांडे", tenure: "01/06/2011 से 28/03/2014" },
      { name: "डॉ. ए. के. पयासी", tenure: "14/11/2002 से 31/05/2011" }
    ]
  },
  {
    type: "Secretary",
    list: [
      { name: "डॉ. ए. के. पयासी", tenure: "03/08/2001 से 13/11/2002" },
      { name: "श्री के. पी. तिवारी", tenure: "05/06/1997 से 02/08/2001" },
      { name: "श्री अशोक चतुर्वेदी (कार्यकारी सचिव)", tenure: "04/11/1995 से 04/06/1997" },
      { name: "सुश्री शीला खन्ना", tenure: "14/12/1993 से 03/11/1995" },
      { name: "श्री विश्वेन्द्र मेहता", tenure: "31/03/1989 से 13/12/1993" },
      { name: "श्री भरत नारायण", tenure: "23/12/1985 से 31/03/1989" },
      { name: "श्री बलवंत सहाय", tenure: "02/02/1984 से 22/12/1985" },
      { name: "श्री पी.एम. पतकी", tenure: "08/10/1982 से 31/01/1984" },
      { name: "श्री कैलाश किशोर गुप्ता", tenure: "04/07/1980 से 07/10/1982" },
      { name: "श्री भरत नारायण", tenure: "01/12/1979 से 03/07/1980" },
      { name: "श्री कैलाश किशोर गुप्ता", tenure: "20/11/1973 से 30/11/1979" },
      { name: "श्री मदन गोपाल", tenure: "26/05/1962 से 20/11/1973" },
      { name: "श्री रघुनाथ सिंह", tenure: "15/02/1959 से 26/05/1962" },
      { name: "श्री ख. के. रांगोले", tenure: "01/11/1956 से 14/02/1959" }
    ]
  }
];

const SecretariatTable = () => {
  const styles = {
    container: {
      padding: "30px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f3f4f6",
      minHeight: "100vh"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      borderRadius: "12px",
      overflow: "hidden",
      marginBottom: "40px"
    },
    th: {
      backgroundColor: "#3b82f6",
      color: "#fff",
      padding: "12px 16px",
      textAlign: "center"
    },
    td: { padding: "12px 16px", borderBottom: "1px solid #e5e7eb" },
    sectionTitle: { fontSize: "1.5rem", fontWeight: "700", margin: "30px 0 10px 0" }
  };

  return (
    <div style={styles.container}>
      {secretariesData.map((section, idx) => (
        <div key={idx}>
          <h2 style={styles.sectionTitle}>
            {section.type === "Chief Secretary" ? "प्रमुख सचिव" : "सचिव"}
          </h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>क्र.</th>
                <th style={styles.th}>नाम</th>
                <th style={styles.th}>कार्यकाल</th>
              </tr>
            </thead>
            <tbody>
              {section.list.map((staff, index) => (
                <tr key={index}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{staff.name}</td>
                  <td style={styles.td}>{staff.tenure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default SecretariatTable;
