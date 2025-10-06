import React, { useState } from "react";

const session = {
  assembly: "द्वादश विधानसभा",
  description: "मध्यप्रदेश राजपत्र (असाधारण) क्रमांक - 298",
  date: "17/06/2008",
  link: "/misc/Mantrimandal/Sampattivivran/12minister.pdf", // replace with actual PDF path
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "3rem 2rem",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    color: "#2d3748",
    background: "#f7fafc",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "800",
    marginBottom: "2rem",
    color: "#1a202c",
    borderBottom: "3px solid #4a90e2",
    display: "inline-block",
    paddingBottom: "0.5rem",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "2rem",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardHover: {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
  },
  assembly: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#2c5282",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.1rem",
    color: "#4a5568",
    marginBottom: "1rem",
  },
  date: {
    fontSize: "1rem",
    color: "#2d3748",
    marginBottom: "1.5rem",
  },
  button: {
    display: "inline-block",
    padding: "0.6rem 1.4rem",
    background: "#4a90e2",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    background: "#2c5282",
    transform: "scale(1.05)",
  },
};

const Sampattivivran12th = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>विधान सभा सत्र विवरण</h1>

      <div
        style={{
          ...styles.card,
          ...(hovered ? styles.cardHover : {}),
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h2 style={styles.assembly}>{session.assembly}</h2>
        <p style={styles.description}>{session.description}</p>
        <p style={styles.date}>दिनांक - {session.date}</p>
        <a
          href={session.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.button,
            ...(hovered ? styles.buttonHover : {}),
          }}
        >
          देखें
        </a>
      </div>
    </div>
  );
};

export default Sampattivivran12th;
