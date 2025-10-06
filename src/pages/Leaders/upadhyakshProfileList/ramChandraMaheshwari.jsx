import React from "react";

const RamchandraMaheshwariPage = () => {
  return (
    <div style={rmStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={rmStyles.topProfileCard}>
        <div style={rmStyles.photoFrame}>
          <img
            src="/leaders/up-Ram_Chandra_Maheshwari.jpg" // ✅ Replace with correct image path
            alt="श्री रामचन्‍द्र महेश्‍वरी"
            style={rmStyles.profileImage}
          />
        </div>
        <div style={rmStyles.divider}></div>
        <div style={rmStyles.nameFrame}>
          <h1 style={rmStyles.topTitle}>श्री रामचन्‍द्र महेश्‍वरी</h1>
          <h3 style={rmStyles.topSubtitle}>
            (भूतपूर्व उपाध्‍यक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={rmStyles.tenure}>
            षष्‍टम् विधान सभा (1977-80) <br />
            (01.09.1978 से 17.02.1980 तक)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={rmStyles.card}>
        <section style={rmStyles.section}>
          <RMInfoRow label="जन्‍मतिथि" value="12.02.1928" />
          <RMInfoRow label="वैवाहिक स्थिति" value="विवाहित (सन् 1952)" />
          <RMInfoRow label="शैक्षणिक योग्यता" value="एम.ए. (अर्थशास्‍त्र), एल.एल.बी." />
        </section>

        <hr style={rmStyles.divider} />

        <h2 style={rmStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={rmStyles.paragraph}>
          सन् 1956 से सोहागपुर में वकालत प्रारंभ की. छात्र जीवन से विभिन्‍न छात्र संस्‍थाओं में सक्रिय, 
          छात्र जीवन से ही राजनीति, साहित्‍य एवं नाट्य कलाओं में रूचि. अनेक विश्‍वविद्यालयीन एवं 
          अंतर-विश्‍वविद्यालयीन वाक् प्रतियोगिताओं में सफलतापूर्वक भाग लिया.
        </p>

        <p style={rmStyles.paragraph}>
          पहले युवजन सभा फिर समाजवादी पार्टी एवं बाद में जनता पार्टी के सक्रिय सदस्य रहे. 
          गीता, रामायण एवं अन्य धार्मिक ग्रंथों का अध्‍ययन. दर्शनशास्‍त्र में रूचि.
        </p>

        <p style={rmStyles.paragraph}>
          सन् 1977 के आम चुनाव में पिपरिया निर्वाचन क्षेत्र से जनता पार्टी के टिकिट पर विधान सभा सदस्य 
          निर्वाचित तथा दिनांक 01.09.1978 से 17.02.1980 तक विधान सभा के उपाध्‍यक्ष रहे.
        </p>

        <p style={rmStyles.paragraph}>
          26 फरवरी 1979 से 17 मार्च 1979 तक राष्‍ट्रकुल संसदीय सम्‍मेलन की बैठक में भाग लेने हेतु 
          भारतीय प्रतिनिधि मंडल के सदस्य के रूप में लंदन की यात्रा की।
        </p>

        <p style={rmStyles.paragraph}>
          आपका दिनांक 25 मई, 2005 को देहावसान हो गया।
        </p>
      </div>
    </div>
  );
};

// Unique InfoRow component
const RMInfoRow = ({ label, value }) => (
  <div style={rmStyles.infoRow}>
    <span style={rmStyles.infoLabel}>{label}:</span>
    <span style={rmStyles.infoValue}>{value}</span>
  </div>
);

// Styles for Ramchandra Maheshwari page
const rmStyles = {
  pageWrapper: {
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    backgroundColor: "#e0f7f7",
    padding: "1.5rem 1rem",
    maxWidth: 1100,
    margin: "auto",
    color: "#222",
  },
  topProfileCard: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    flexWrap: "wrap",
  },
  photoFrame: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    flexShrink: 0,
  },
  profileImage: {
    width: "180px",
    height: "auto",
    borderRadius: "10px",
    display: "block",
    boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
  },
  divider: { width: 5, height: 20, margin: "0 20px", background: "transparent", borderRadius: 2 },
  nameFrame: {
    backgroundColor: "#008b8b",
    borderRadius: 12,
    padding: "2rem 3rem",
    color: "white",
    flex: 1,
    textAlign: "center",
    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
    minWidth: 250,
  },
  topTitle: { fontSize: "2rem", margin: 0, fontWeight: "700", lineHeight: 1.1 },
  topSubtitle: { fontSize: "1.2rem", marginTop: "0.5rem", fontWeight: "500" },
  tenure: { marginTop: 6, fontWeight: "500" },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: "1.5rem 1.8rem",
    marginBottom: "2rem",
    boxShadow: "0 8px 14px rgba(0,0,0,0.08)",
  },
  section: { marginBottom: "1.5rem" },
  sectionTitle: {
    fontSize: "1.5rem",
    color: "#008b8b",
    borderBottom: "3px solid #004d4d",
    paddingBottom: 6,
    marginBottom: 15,
    fontWeight: "700",
  },
  paragraph: {
    fontSize: "1rem",
    lineHeight: 1.8,
    textAlign: "justify",
    marginBottom: "1rem",
    color: "#444",
  },
  infoRow: { display: "flex", flexWrap: "wrap", marginBottom: 8 },
  infoLabel: { fontWeight: "700", marginRight: 6, minWidth: 150, color: "#004d4d" },
  infoValue: { flex: 1, color: "#333", fontWeight: "500" },
};

export default RamchandraMaheshwariPage;
