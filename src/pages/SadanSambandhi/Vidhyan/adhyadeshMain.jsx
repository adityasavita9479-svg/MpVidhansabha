import React from "react";
import { useNavigate } from "react-router-dom";

const AdhyadeshPage = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "'Noto Sans Devanagari', sans-serif",
      minHeight: "100vh",
      backgroundColor: "#f5f7fa",
    },
    heading: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: 700,
      color: "#1e293b",
      marginBottom: "40px",
    },
    yearGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "20px",
    },
    yearCard: {
      padding: "20px 0",
      backgroundColor: "#fff",
      color: "#0d47a1",
      fontSize: "1.2rem",
      fontWeight: 600,
      textAlign: "center",
      borderRadius: "8px",
      cursor: "pointer",
      border: "2px solid #0d47a1",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    },
    yearCardHover: {
    //   backgroundColor: "#0d47a1",
      color: "#0d47a1",
      transform: "translateY(-3px)",
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
    },
    footer: {
      marginTop: "50px",
      fontSize: "0.9rem",
      color: "#555",
      textAlign: "center",
    },
  };

  const years = [
    { year: "2019", route: "/adhyadesh/2019" },
    { year: "2020", route: "/adhyadesh/2020" },
    { year: "2021", route: "/adhyadesh/2021" },
   
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>अध्‍यादेश</h1>
      <div style={styles.yearGrid}>
        {years.map(({ year, route }, idx) => (
          <div
            key={idx}
            style={styles.yearCard}
            onClick={() => navigate(route)}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, styles.yearCardHover)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, styles.yearCard)
            }
          >
            {year}
          </div>
        ))}
      </div>
      <div style={styles.footer}>
        मध्यप्रदेश विधान सभा - सभी अध्‍यादेश वर्षवार
      </div>
    </div>
  );
};

export default AdhyadeshPage;
