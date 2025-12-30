import React from "react";
import { Link } from "react-router-dom";

const VidhyanMain = () => {
  const styles = {
    page: {
      width: "100vw",
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "'Noto Sans Devanagari', sans-serif",
      color: "#1e293b",
      padding: "60px 20px",
    },
    container: {
      width: "100%",
      maxWidth: "1100px",
      background: "#ffffff",
      borderRadius: "20px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      padding: "60px 40px 80px",
      textAlign: "center",
      position: "relative",
    },
    header: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "10px",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    subHeader: {
      fontSize: "1.1rem",
      color: "#475569",
      marginBottom: "50px",
    },
    divider: {
      width: "80px",
      height: "4px",
      background:
        "linear-gradient(90deg, #1e40af 0%, #3b82f6 50%, #1e40af 100%)",
      borderRadius: "4px",
      margin: "0 auto 40px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "35px",
    },
    card: {
      backgroundColor: "#f9fafb",
      border: "1px solid #e2e8f0",
      borderRadius: "14px",
      padding: "35px 25px",
      transition: "all 0.3s ease",
      textDecoration: "none",
      color: "#0f172a",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
    },
    cardHover: {
      backgroundColor: "#ffffff",
      boxShadow: "0 8px 18px rgba(0,0,0,0.1)",
      transform: "translateY(-6px)",
      border: "1px solid #cbd5e1",
    },
    iconCircle: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      background:
        "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "18px",
      fontSize: "2rem",
      color: "#fff",
      boxShadow: "0 4px 10px rgba(59,130,246,0.4)",
      transition: "transform 0.3s ease",
    },
    title: {
      fontSize: "1.15rem",
      fontWeight: "600",
      color: "#1e40af",
    },
  };

  const items = [
    {
      title: "विधेयक (BILL)",
      route: "/vidheyak/bill",
      icon: "📄",
    },
    {
      title: "अध्‍यादेश (ORDINANCE)",
      route: "/adhyadesh/ordinance",
      icon: "🏛️",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.header}>विधायन (Legislation)</h1>
        <p style={styles.subHeader}>
          म.प्र. विधान सभा में विधेयक एवं अध्‍यादेश संबंधी जानकारी
        </p>
        <div style={styles.divider}></div>

        <div style={styles.grid}>
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.route}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  styles.cardHover.backgroundColor;
                e.currentTarget.style.boxShadow =
                  styles.cardHover.boxShadow;
                e.currentTarget.style.transform =
                  styles.cardHover.transform;
                e.currentTarget.style.border = styles.cardHover.border;
                const icon = e.currentTarget.querySelector(".icon-circle");
                icon.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  styles.card.backgroundColor;
                e.currentTarget.style.boxShadow =
                  styles.card.boxShadow;
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.border = styles.card.border;
                const icon = e.currentTarget.querySelector(".icon-circle");
                icon.style.transform = "scale(1)";
              }}
            >
              <div className="icon-circle" style={styles.iconCircle}>
                {item.icon}
              </div>
              <div style={styles.title}>{item.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VidhyanMain;
