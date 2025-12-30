import React, { useState } from "react";

const partyStatusTimeline15 = [
  { title: "आम चुनाव (2018) की स्थिति", description: "पंचदश (15वीं) विधान सभा", image: "/misc/AE_Panchdashnakshewar2019.jpg" },
  { title: "6 जून 2019 की स्थिति", description: "पंचदश (15वीं) विधान सभा", image: "/misc/AE_Panchdash06062019.jpg" },
  { title: "5 नवम्बर, 2019 की स्थिति", description: "पंचदश (15वीं) विधान सभा", image: "/misc/AE_Panchdash05112019.jpg" },
  { title: "1 फरवरी, 2020 की स्थिति", description: "पंचदश (15वीं) विधान सभा", image: "/misc/AE_Panchdash01022020.jpg" },
  { title: "11 मई, 2020 की स्थिति", description: "पंचदश (15वीं) विधान सभा", image: "/misc/AE_Panchdash18052020.jpg" },
  { title: "27 जुलाई, 2020 की स्थिति", description: "पंचदश (15वीं) विधान सभा", image: "/misc/AE_Panchdash27072020.jpg" },
  { title: "27 अक्टूबर, 2020 की स्थिति", description: "पंचदश (15वीं) विधान सभा", image: "/misc/AE_Panchdashoct27102020.jpg" },
  { title: "10 नवम्बर, 2020 की स्थिति", description: "पंचदश (15वीं) विधान सभा", image: "/misc/AE_Panchdashnov10112020.jpg" },
  { title: "20 मई, 2021 की स्थिति", description: "पंचदश (15वीं) विधान सभा", image: "/misc/AE_Panchdasmay20052021.jpg" },
  { title: "2 नवम्बर, 2021 की स्थिति", description: "पंचदश (15वीं) विधान सभा", image: "/misc/AE_Panchdasnove09112021.jpg" },
];

const SadasyaganNakshewarPanchdash = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="comm-page">
      {/* Hero Section */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>पंचदश (15वीं) विधान सभा - दलीय स्थिति मानचित्र</h1>
        </div>
      </div>

      {/* Cards Section */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", padding: "20px" }}>
        {partyStatusTimeline15.map((entry, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              width: "550px",
              height: "220px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              background: "#fff",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onClick={() => setSelectedImage(entry.image)}
          >
            <div style={{ flex: "0 0 40%", overflow: "hidden" }}>
              <img
                src={entry.image}
                alt={entry.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // ensures full coverage
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
            <div style={{ flex: "1", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e40af", marginBottom: "10px" }}>{entry.title}</h3>
              <p style={{ fontSize: "1rem", color: "#4b5563" }}>{entry.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          style={{
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
          }}
          onClick={() => setSelectedImage(null)}
        >
          <span
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              fontSize: "2rem",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            &times;
          </span>
          <img
            src={selectedImage}
            alt="Party Map"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "12px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SadasyaganNakshewarPanchdash;
