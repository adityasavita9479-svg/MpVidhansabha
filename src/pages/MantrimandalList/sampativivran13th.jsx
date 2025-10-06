import React, { useState } from "react";

// ✅ Year-wise assets with full path
const yearwiseAssets = [
  {
    year: 2013,
    link: "/assets/2013.pdf",
    label: "वर्ष 2013 में रखा गया संपत्ति विवरण",
    path: "/desc2013",
  },
  {
    year: 2012,
    link: "/assets/2012.pdf",
    label: "वर्ष 2012 में रखा गया संपत्ति विवरण",
    path: "/desc2012",
  },
  {
    year: 2011,
    link: "/assets/2011.pdf",
    label: "वर्ष 2011 में रखा गया संपत्ति विवरण",
    path: "/desc2011",
  },
];

// ✅ Session-wise reports
const sessionReports = [
  {
    id: 1,
    session: "फरवरी-मार्च, 2010",
    parts: ["भाग-1", "भाग-2"],
    links: ["/misc/Mantrimandal/Sampattivivran/Feb-march 2010 (1-76).pdf", "/misc/Mantrimandal/Sampattivivran/Feb-march 2010 (77-151)2.pdf"],
  },
  {
    id: 2,
    session: "फरवरी-अप्रिल, 2008",
    parts: ["भाग-1"],
    links: ["public/misc/Mantrimandal/Sampattivivran/Feb-April 2008(3).pdf"],
  },
];

// ✅ Styles (unchanged)
const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "3rem 2rem",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    background: "#f8fafc",
    color: "#2d3748",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#1a202c",
    marginBottom: "3rem",
    borderBottom: "3px solid #4a90e2",
    display: "inline-block",
    paddingBottom: "0.5rem",
  },
  subTitle: {
    fontSize: "1.6rem",
    fontWeight: "700",
    color: "#2c5282",
    margin: "2rem 0 1rem",
    borderBottom: "2px solid #cbd5e0",
    paddingBottom: "0.3rem",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "1.5rem",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-6px) scale(1.03)",
    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
  },
  yearLabel: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#2c5282",
    marginBottom: "1rem",
    textDecoration: "none",
    display: "inline-block",
  },
  sessionName: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#1a202c",
    marginBottom: "1rem",
  },
  parts: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    justifyContent: "center",
  },
  partBadge: {
    background: "#4a90e2",
    color: "#fff",
    borderRadius: "8px",
    padding: "0.4rem 0.8rem",
    fontSize: "0.9rem",
    fontWeight: "600",
    textDecoration: "none",
    transition: "background 0.3s ease",
  },
  partBadgeHover: {
    background: "#2c5282",
  },
  viewButton: {
    display: "inline-block",
    padding: "0.6rem 1.2rem",
    background: "#4a90e2",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  viewButtonHover: {
    background: "#2c5282",
    transform: "scale(1.05)",
  },
};

// ✅ Component
const YearwiseAssetsPage = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>त्रयोदश विधानसभा</h1>

      {/* Year-wise Assets */}
      <h2 style={styles.subTitle}>वर्षवार संपत्ति विवरण</h2>
      <div style={styles.cardContainer}>
        {yearwiseAssets.map((item, index) => (
          <div
            key={item.year}
            style={{
              ...styles.card,
              ...(hovered === `year-${index}` ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHovered(`year-${index}`)}
            onMouseLeave={() => setHovered(null)}
          >
            <span style={styles.yearLabel}>{item.label}</span>
            <br />
            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.viewButton,
                ...(hovered === `year-${index}` ? styles.viewButtonHover : {}),
              }}
            >
              देखें
            </a>
          </div>
        ))}
      </div>

      {/* Session-wise Assets */}
      <h2 style={styles.subTitle}>सत्रवार संपत्ति विवरण</h2>
      <div style={styles.cardContainer}>
        {sessionReports.map((report, index) => (
          <div
            key={report.id}
            style={{
              ...styles.card,
              ...(hovered === `session-${index}` ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHovered(`session-${index}`)}
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

export default YearwiseAssetsPage;
