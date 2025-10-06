import React, { useState } from "react";

const ministersDetails = [
  { id: 1, name: "श्री जयंत मलैया, मंत्री", date: "19 फरवरी, 2015", link: "/misc/Mantrimandal/Sampattivivran/jayantkumarmailye15.pdf" },
  { id: 2, name: "श्री गौरीशंकर बिसेन, मंत्री", date: "21 मार्च, 2017", link: "/misc/Mantrimandal/Sampattivivran/gourishankarsbisen17.pdf" },
];

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "3rem 2rem",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    background: "#f8fafc",
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
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "2rem 1.5rem",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-8px) scale(1.03)",
    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
  },
  name: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#2c5282",
    marginBottom: "1rem",
    textDecoration: "none",
    display: "inline-block",
  },
  date: {
    fontSize: "1rem",
    color: "#4a5568",
    marginBottom: "1.5rem",
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

const MinistersAssetCardsPage = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        मा. मुख्यमंत्री श्री शिवराज सिंह चौहान की मंत्रिपरिषद के मा. सदस्‍यों द्वारा विधान सभा के पटल पर रखा गया चल-अचल संपत्ति का विवरण
      </h1>

      <div style={styles.cardContainer}>
        {ministersDetails.map((m, index) => (
          <div
            key={m.id}
            style={{
              ...styles.card,
              ...(hovered === index ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <a href={m.link} style={styles.name}>
              {m.name}
            </a>
            <p style={styles.date}>￫ दिनांक {m.date}</p>
            <a
              href={m.link}
              style={{
                ...styles.viewButton,
                ...(hovered === index ? styles.viewButtonHover : {}),
              }}
            >
              विवरण देखें
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinistersAssetCardsPage;
