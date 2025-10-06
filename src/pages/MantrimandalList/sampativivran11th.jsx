import React, { useState } from "react";

const sessionReports = [
  {
    id: 1,
    session: "फरवरी-मार्च, 1999",
    parts: ["भाग-1"],
    links: ["/misc/Mantrimandal/Sampattivivran/Feb-march 1999.pdf"],
  },
  {
    id: 2,
    session: "अगस्त-सितम्बर, 2001",
    parts: ["भाग-1", "भाग-2"],
    links: ["/misc/Mantrimandal/Sampattivivran/Augest-sep. 2001 (1-50).pdf", "/misc/Mantrimandal/Sampattivivran/Augest-sep. 2001(2) (51-104).pdf"],
  },
  {
    id: 3,
    session: "फरवरी-मार्च, 2003",
    parts: ["भाग-1", "भाग-2"],
    links: ["/misc/Mantrimandal/Sampattivivran/Feb-march 2003(1) (1-116).pdf","/misc/Mantrimandal/Sampattivivran/Feb-march 2003(2) (117-169).pdf"],
  },
];

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "3rem 2rem",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    color: "#2d3748",
    background: "#f7fafc",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "700",
    color: "#1a202c",
    marginBottom: "2rem",
    borderBottom: "3px solid #4a90e2",
    display: "inline-block",
    paddingBottom: "0.5rem",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.8rem",
  },
  card: {
    background: "#fff",
    borderRadius: "14px",
    padding: "1.8rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardHover: {
    transform: "translateY(-5px) scale(1.02)",
    boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
  },
  sessionName: {
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#2c5282",
  },
  partsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.6rem",
    marginTop: "0.5rem",
  },
  partBadge: {
    background: "#4a90e2",
    color: "#fff",
    borderRadius: "8px",
    padding: "0.4rem 0.8rem",
    fontSize: "0.95rem",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  partBadgeHover: {
    background: "#2c5282",
    transform: "scale(1.05)",
  },
};

const Sampativivran11th = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredPart, setHoveredPart] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        सदन के पटल पर रखे गये सत्रवार चल-अचल संपत्ति विवरण
      </h1>

      <div style={styles.cardGrid}>
        {sessionReports.map((report, idx) => (
          <div
            key={report.id}
            style={{
              ...styles.card,
              ...(hoveredCard === idx ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.sessionName}>{`${idx + 1}. ${report.session}`}</div>
            <div style={styles.partsContainer}>
              {report.parts.map((part, i) => (
                <a
                  key={i}
                  href={report.links[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.partBadge,
                    ...(hoveredPart === `${idx}-${i}` ? styles.partBadgeHover : {}),
                  }}
                  onMouseEnter={() => setHoveredPart(`${idx}-${i}`)}
                  onMouseLeave={() => setHoveredPart(null)}
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

export default Sampativivran11th;
