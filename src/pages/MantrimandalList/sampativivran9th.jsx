import React, { useState } from "react";

const sessionReports = [
  {
    id: 1,
    session: "जून-अगस्त, 1990",
    parts: ["भाग-1", "भाग-2", "भाग-3"],
    links: [
      "/misc/Mantrimandal/Sampattivivran/Jun-Augest 1990(1)(1-65).pdf",
      "/misc/Mantrimandal/Sampattivivran/Jun-Augest 1990(2) (66-131).pdf",
      "/",
    ],
  },
];

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "3rem 2rem",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    background: "#f0f4f8",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#1a202c",
    marginBottom: "3rem",
    borderBottom: "3px solid #4a90e2",
    display: "inline-block",
    paddingBottom: "0.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.8rem",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "1.5rem",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
  },
  sessionName: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#2c5282",
    marginBottom: "1rem",
  },
  parts: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  partBadge: {
    background: "#4a90e2",
    color: "#fff",
    borderRadius: "8px",
    padding: "0.3rem 0.6rem",
    fontSize: "0.9rem",
    fontWeight: "600",
    textDecoration: "none",
    transition: "background 0.3s ease",
  },
  partHover: {
    background: "#2c5282",
  },
};

const Sampativivran10th = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        सदन के पटल पर रखे गये सत्रवार चल-अचल संपत्ति विवरण
      </h1>

      <div style={styles.grid}>
        {sessionReports.map((report, index) => (
          <div
            key={report.id}
            style={{
              ...styles.card,
              ...(hovered === index ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.sessionName}>{report.session}</div>
            <div style={styles.parts}>
              {report.parts.map((part, idx) => (
                <a
                  key={idx}
                  href={report.links[idx]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.partBadge}
                >
                  {part}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sampativivran10th;
