import React, { useState } from "react";
import { Link } from "react-router-dom";

const previousCabinets = [
  {
    assembly: "पंद्रहवीं विधानसभा",
    date: "11/12/2023 तक",
    path: "/mantrimandal15", // React route
  },
  {
    assembly: "चतुर्दश विधानसभा",
    date: "25/08/2023 तक",
    path: "/mantrimandal14", // React route
  },
];

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "3rem 2rem",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    color: "#2d3748",
    background: "linear-gradient(135deg, #f8fafc, #edf2f7)",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "clamp(2rem, 3vw, 2.5rem)",
    marginBottom: "2.5rem",
    color: "#1a202c",
    fontWeight: "800",
    borderBottom: "3px solid #4a90e2",
    display: "inline-block",
    paddingBottom: "0.5rem",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "2rem 1.5rem",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textAlign: "center",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cardHover: {
    transform: "translateY(-10px) scale(1.02)",
    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
  },
  assembly: {
    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#2c5282",
  },
  date: {
    fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
    marginBottom: "2rem",
    color: "#4a5568",
  },
  button: {
    display: "inline-block",
    padding: "0.7rem 1.5rem",
    background: "#4a90e2",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    background: "#2c5282",
    transform: "scale(1.05)",
  },
};

const PreviousCabinetsPagess = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>पूर्व मंत्रिमण्डल</h1>

      <div style={styles.cardContainer}>
        {previousCabinets.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(hovered === index ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 style={styles.assembly}>{item.assembly}</h3>
            <p style={styles.date}>￫ दिनांक {item.date}</p>
            <Link
              to={item.path}
              style={{
                ...styles.button,
                ...(hovered === index ? styles.buttonHover : {}),
              }}
            >
              देखें
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousCabinetsPagess;
