import React, { useState } from "react";

const sessionReports = [
  {
    id: 2,
    session: "फरवरी-मई, 1994",
    parts: ["भाग-1", "भाग-2"],
    links: ["/misc/Mantrimandal/Sampattivivran/Feb-may 1994 (1-100).pdf", "/misc/Mantrimandal/Sampattivivran/Feb-may 1994(2) (101-169).pdf"],
  },
  {
    id: 3,
    session: "अगस्त-सितम्बर, 1995",
    parts: ["भाग-1", "भाग-2", "भाग-3", "भाग-4", "भाग-5"],
    links: [
      "/misc/Mantrimandal/Sampattivivran/Augast-september 1995(1) (1-100).pdf",
      "/misc/Mantrimandal/Sampattivivran/Augast-september 1995(2) (101-200).pdf",
      "/misc/Mantrimandal/Sampattivivran/Augast-september 1995(3) (201-250).pdf",
      "/misc/Mantrimandal/Sampattivivran/Augast-september 1995 (4)(251-300).pdf",
      "/misc/Mantrimandal/Sampattivivran/Augast-september 1995(5) (301-353).pdf",
    ],
  },
  {
    id: 4,
    session: "जुलाई-अगस्त, 1997",
    parts: ["भाग-1", "भाग-2"],
    links: ["/misc/Mantrimandal/Sampattivivran/July-augest 1997(1).pdf", "/misc/Mantrimandal/Sampattivivran/augest 1997 (anupurak)(2).pdf"],
  },
  {
    id: 5,
    session: "नवम्बर, 1997",
    parts: ["भाग-1"],
    links: ["/misc/Mantrimandal/Sampattivivran/November 1997 (21.11.1997 other vivaran).pdf"],
  },
];

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "2.5rem 2rem",
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

const SessionAssetsCardsPage = () => {
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
            <div style={styles.sessionName}>{report.session}</div>
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

export default SessionAssetsCardsPage;
