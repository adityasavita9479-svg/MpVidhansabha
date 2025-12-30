import React from "react";
import { Link } from "react-router-dom";

const Vidheyak = () => {
  const styles = {
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "50px 20px",
      fontFamily: "'Noto Sans Devanagari', sans-serif",
      minHeight: "100vh",
      backgroundColor: "#f5f7fa",
    },
    header: {
      textAlign: "center",
      fontSize: "1.8rem",
      fontWeight: "700",
      color: "#1e293b",
      marginBottom: "20px",
      position: "relative",
      display: "inline-block",
      paddingBottom: "10px",
    },
    headerUnderline: {
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "4px",
      borderRadius: "2px",
      background: "linear-gradient(90deg, #3b82f6, #0ea5e9)",
    },
    subHeader: {
      textAlign: "center",
      fontSize: "1.1rem",
      color: "#334155",
      marginBottom: "40px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
      gap: "20px",
      justifyItems: "center",
    },
    yearCard: {
      backgroundColor: "#fff",
      padding: "20px 10px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      textAlign: "center",
      fontSize: "1.1rem",
      fontWeight: "600",
      color: "#0d47a1",
      cursor: "pointer",
      transition: "all 0.3s ease",
      width: "100%",
      maxWidth: "100px",
      textDecoration: "none",
    },
    yearHover: {
      transform: "translateY(-5px) scale(1.05)",
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      border: "1px solid #0d47a1",
      backgroundColor: "#e0e7ff",
    },
  };

  // Years array with routes
  const years = [
    { year: 2014, route: "/vidheyak/year/2014" },
    { year: 2015, route: "/vidheyak/year/2015" },
    { year: 2016, route: "/vidheyak/year/2016" },
    { year: 2017, route: "/vidheyak/year/2017" },
    { year: 2018, route: "/vidheyak/year/2018" },
    { year: 2019, route: "/vidheyak/year/2019" },
    { year: 2020, route: "/vidheyak/year/2020" },
    { year: 2021, route: "/vidheyak/year/2021" },
    { year: 2022, route: "/vidheyak/year/2022" },
    { year: 2023, route: "/vidheyak/year/2023" },
    { year: 2024, route: "/vidheyak/year/2024" },
    { year: 2025, route: "/vidheyak/year/2025" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>
        मध्‍यप्रदेश विधान सभा द्वारा पारित विधेयकों का विवरण
        <span style={styles.headerUnderline}></span>
      </h1>
      <div style={styles.subHeader}>वर्षवार जानकारी</div>
      <div style={styles.grid}>
        {years.map((item) => (
          <Link
            key={item.year}
            to={item.route}
            style={styles.yearCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.yearHover.transform;
              e.currentTarget.style.boxShadow = styles.yearHover.boxShadow;
              e.currentTarget.style.backgroundColor = styles.yearHover.backgroundColor;
              e.currentTarget.style.border = styles.yearHover.border;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = styles.yearCard.boxShadow;
              e.currentTarget.style.backgroundColor = styles.yearCard.backgroundColor;
              e.currentTarget.style.border = "none";
            }}
          >
            {item.year}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Vidheyak;
