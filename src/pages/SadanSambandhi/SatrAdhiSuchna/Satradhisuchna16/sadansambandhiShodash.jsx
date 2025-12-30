import React from "react";
import { Link } from "react-router-dom";

// Data with route/PDF links
const sessions = [
   
  { number: "षष्टम", name: "जुलाई-अगस्त, 2025", path: "/sixth/6" },
  { number: "पंचम", name: "मार्च, 2025", path: "/fifth/5" },
  { number: "चतुर्थ", name: "दिसम्बर, 2024", path: "/fourth/4" },
  { number: "तृतीय", name: "जुलाई, 2024", path: "/third/3" },
  { number: "द्वितीय", name: "फरवरी, 2024", path: "/second/2" },
  { number: "प्रथम", name: "दिसम्बर, 2023", path: "/first/1" },


];

// Styles
const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "50px 20px",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  mainTitle: {
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#1e293b",
    marginBottom: "10px",
  },
  subTitle: {
    fontSize: "1.3rem",
    fontWeight: 500,
    color: "#334155",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)",
    borderRadius: "16px",
    padding: "25px 20px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textDecoration: "none",
  },
  cardHover: {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: "0 14px 28px rgba(0, 0, 0, 0.15)",
  },
  sessionNumber: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#1d4ed8",
    marginBottom: "10px",
  },
  sessionName: {
    fontSize: "1.1rem",
    fontWeight: 500,
    color: "#334155",
  },
};

// Card Component
const SessionCard = ({ number, name, path }) => {
  const isPDF = path?.endsWith(".pdf");

  const CardContent = () => (
    <>
      <div style={styles.sessionNumber}>{number}</div>
      <div style={styles.sessionName}>{name}</div>
    </>
  );

  return isPDF ? (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.cardHover.transform;
        e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = styles.card.boxShadow;
      }}
    >
      <CardContent />
    </a>
  ) : (
    <Link
      to={path}
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.cardHover.transform;
        e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = styles.card.boxShadow;
      }}
    >
      <CardContent />
    </Link>
  );
};

// Main Component
const SadansambandhiSatrAdhisuhnaShodash = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>सत्र अधिसूचना</h1>
        <h3 style={styles.subTitle}>षोडश विधान सभा (2023 से...)</h3>
      </div>

      <div style={styles.grid}>
        {sessions.map((session, idx) => (
          <SessionCard
            key={idx}
            number={session.number}
            name={session.name}
            path={session.path}
          />
        ))}
      </div>
    </div>
  );
};

export default SadansambandhiSatrAdhisuhnaShodash;
