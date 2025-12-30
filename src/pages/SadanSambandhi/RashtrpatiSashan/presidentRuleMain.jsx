import React from "react";

const PresidentsRuleMain = () => {
  const periods = [
    {
      assemblyPeriod: "पंचम् एवं षष्‍टम् विधानसभा अवधि के मध्य",
      dates: "30.04.1977 से 23.06.1977 तक",
    },
    {
      assemblyPeriod: "षष्‍टम् एवं सप्‍तम् विधानसभा अवधि के मध्य",
      dates: "17.02.1980 से 09.06.1980 तक",
    },
    {
      assemblyPeriod: "नवम् एवं दशम् विधानसभा अवधि के मध्य",
      dates: "15.12.1992 से 06.12.1993 तक",
    },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <h1 style={styles.title}>मध्यप्रदेश में राष्ट्रपति शासन</h1>
        <p style={styles.intro}>
          मध्यप्रदेश राज्य में निम्नांकित अवधि में 'राष्ट्रपति शासन' लागू था:
        </p>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>विधानसभा अवधि</th>
                <th style={styles.th}>राष्ट्रपति शासन की तिथियाँ</th>
              </tr>
            </thead>
            <tbody>
              {periods.map((p, idx) => (
                <tr
                  key={idx}
                  style={idx % 2 === 0 ? styles.evenRow : styles.oddRow}
                >
                  <td style={styles.td}>{p.assemblyPeriod}</td>
                  <td style={styles.td}>{p.dates}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer style={styles.footer}>
        © 2025 मध्यप्रदेश विधानसभा
      </footer>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#f0f4f8",
    padding: "20px",
    boxSizing: "border-box",
  },
  content: {
    width: "90%",
    maxWidth: "1000px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    overflowX: "auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#1a237e",
    fontSize: "28px",
  },
  intro: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "18px",
  },
  tableContainer: {
    width: "100%",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "16px",
  },
  th: {
    backgroundColor: "#1d89d1ff",
    color: "#fff",
    padding: "12px",
    textAlign: "center",
    fontWeight: "bold",
    border: "1px solid #ddd",
  },
  td: {
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "center",
  },
  evenRow: {
    backgroundColor: "#f5f5f5",
  },
  oddRow: {
    backgroundColor: "#ffffff",
  },
  footer: {
    textAlign: "center",
    padding: "15px 0",
    marginTop: "20px",
    color: "#555",
    fontWeight: "bold",
  },
};

export default PresidentsRuleMain;
