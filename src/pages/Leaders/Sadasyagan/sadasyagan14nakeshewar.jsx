import React, { useState } from "react";

const partyStatusTimeline14 = [
  { title: "आम चुनाव (2013) की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2013-nakshewar.jpg" },
  { title: "20 दिसम्बर, 2013 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2013-20-12-2013.jpg" },
  { title: "31 मार्च, 2014 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2014_31-03-2014_vacant2.jpg" },
  { title: "12 अप्रैल 2014 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2014_12-04-2014_vacant_03.jpg" },
  { title: "16 मई 2014 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2014_16-05-2014_vacant_04.jpg" },
  { title: "30 मई 2014 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2014_30_05_2014_vacant_05.jpg" },
  { title: "25 अगस्त 2014 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2014_28_08_2014_vacant_06.jpg" },
  { title: "01 अप्रैल 2015 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2014_01-04-2015_vacant.jpg" },
  { title: "25 जून 2015 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2015_25-06-2015_vacant.jpg" },
  { title: "30 जून 2015 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2015_30-06-2015_vacant.jpg" },
  { title: "27 अगस्त 2015 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2013_03-09-2015_vacant.jpg" },
  { title: "24 नवम्बर 2015 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2015_24-11-2015_vacant.jpg" },
  { title: "16 फरवरी 2016 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2015_16-02-2016_vacant.jpg" },
  { title: "19 मार्च 2016 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2013_19-03-2016_vacant.jpg" },
  { title: "11 जून 2016 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE2013_11-06-2016_vacant.jpg" },
  { title: "21 अक्टूबर 2016 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE_2013_21-10-2016_vacant.jpg" },
  { title: "05 दिसम्बर 2016 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE_2013_13Dec2016_vacant_2_89.jpg" },
  { title: "13 अप्रैल 2017 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE_2013_13042017.jpg" },
  { title: "29 मई 2017 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE_2013_29052017.jpg" },
  { title: "12 सितम्बर 2017 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE_2013_14-09-2017_vacant.jpg" },
  { title: "9 मार्च, 2018 की स्थिति", description: "चतुर्दश (14वीं) विधान सभा", color: "#2563eb", image: "/misc/Sadasyagan/SadasyaganIMG/AE_2013_09033018.jpg" },
];

const Sadasyagan14Nakshewar = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="comm-page">
      {/* Hero */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>चतुर्दश (14वीं) विधान सभा - दलीय स्थिति मानचित्र</h1>
        </div>
      </div>

      {/* Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", padding: "20px" }}>
        {partyStatusTimeline14.map((entry, idx) => (
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
              <img src={entry.image} alt={entry.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }} />
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
          <span style={{ position: "absolute", top: "20px", right: "30px", fontSize: "2rem", color: "#fff", cursor: "pointer", fontWeight: "bold" }}>&times;</span>
          <img src={selectedImage} alt="Party Map" style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "12px", boxShadow: "0 15px 40px rgba(0,0,0,0.5)" }} />
        </div>
      )}
    </div>
  );
};

export default Sadasyagan14Nakshewar;
