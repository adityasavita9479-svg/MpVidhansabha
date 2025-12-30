import React, { useState } from "react";

const partyStatusTimeline = [
  { 
    title: "नवम्बर, 2024 की स्थिति", 
    description: "षोडश (16वीं) विधान सभा", 
    color: "#3B82F6",
    image: "/galleries/AE_MapMP.jpg"
  },
  { 
    title: "जुलाई, 2024 की स्थिति", 
    description: "षोडश (16वीं) विधान सभा", 
    color: "#3B82F6",
    image: "/galleries/AE_MapMP2024.jpg"
  },
  { 
    title: "आम चुनाव (2023) की स्थिति", 
    description: "षोडश (16वीं) विधान सभा", 
    color: "#3B82F6",
    image: "/galleries/AE_MapMP2023.jpg"
  },
];

const SadasyaganNakshewar = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>षोडश (16वीं) विधान सभा - दलीय स्थिति मानचित्र</h1>

      <div style={styles.cardsWrapper}>
        {partyStatusTimeline.map((entry, idx) => (
          <div
            key={idx}
            style={styles.card}
            onClick={() => setSelectedImage(entry.image)}
          >
            <div style={styles.cardImageWrapper}>
              <img src={entry.image} alt={entry.title} style={styles.cardImage} />
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{entry.title}</h3>
              <p style={styles.cardDesc}>{entry.description}</p>
              <button
                style={{ ...styles.viewButton, backgroundColor: entry.color }}
                onClick={(e) => { e.stopPropagation(); setSelectedImage(entry.image); }}
              >
                View Map
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div style={styles.modal} onClick={() => setSelectedImage(null)}>
          <span style={styles.closeButton} onClick={() => setSelectedImage(null)}>&times;</span>
          <img src={selectedImage} alt="Party Map" style={styles.modalImage} />
        </div>
      )}

      <style>
        {`
          @media (max-width: 800px) {
            .card-flex {
              flex-direction: column;
            }
            .cardImage {
              width: 100% !important;
              height: auto !important;
              border-radius: 20px 20px 0 0;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "'Poppins', sans-serif",
    background: "#f8fafc",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    marginBottom: "50px",
    fontSize: "2.2rem",
    fontWeight: "700",
    color: "#1e3a8a",
  },
  cardsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    width: "550px",
    height: "200px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    background: "#fff",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardImageWrapper: {
    flex: "0 0 40%",
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  cardContent: {
    flex: "1",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#1e40af",
    marginBottom: "10px",
  },
  cardDesc: {
    fontSize: "1rem",
    color: "#4b5563",
    marginBottom: "15px",
  },
  viewButton: {
    padding: "8px 16px",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    alignSelf: "flex-start",
    transition: "background 0.3s ease",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    animation: "fadeIn 0.3s ease-in-out",
  },
  modalImage: {
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: "12px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
    transition: "transform 0.3s ease",
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    right: "30px",
    fontSize: "2rem",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default SadasyaganNakshewar;
