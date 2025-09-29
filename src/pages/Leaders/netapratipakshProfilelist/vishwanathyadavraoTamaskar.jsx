import React from "react";

const VishwanathTamascarPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-VY_tamaskar.jpg" // ✅ Replace with actual image path
            alt="श्री विश्‍वनाथ यादवराव तामस्‍कर"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री विश्‍वनाथ यादवराव तामस्‍कर</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व नेताप्रतिपक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={ntStyles.tenure}>प्रथम विधान सभा (1956-57)</div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="जन्मतिथि" value="30.7.1902" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., एल.एल.बी. (मारिस कॉलेज नागपुर और लॉ कालेज नागपुर)" />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          श्री तामस्‍कर प्रजा समाजवादी और कांग्रेस दल के सदस्य रहे. आप मध्यप्रदेश प्रजा समाजवादी दल के अध्यक्ष रहे. आप ग्राम पंचायत बेमेतरा, जिला परिषद् दुर्ग के सदस्य तथा लोकल बोर्ड बेमेतरा के उपप्रधान रहे. सन् 1936 से 1939 तक मध्य प्रांत एवं बरार विधानसभा के सदस्य, सन् 1952 से 1956 तक पुरानी मध्यप्रदेश विधान सभा तथा 1956 से 1962 तक मध्यप्रदेश विधान सभा के सदस्य रहे. सन् 1967 के आम चुनाव में दुर्ग निर्वाचन क्षेत्र से लोकसभा के सदस्य निर्वाचित हुए और मृत्युपर्यंत उसके सदस्य रहे.
        </p>

        <p style={ntStyles.paragraph}>
          आपका दिनांक 07 सितम्बर, 1969 को देहावसान हो गया.
        </p>
      </div>
    </div>
  );
};

// InfoRow component
const InfoRow = ({ label, value }) => (
  <div style={ntStyles.infoRow}>
    <span style={ntStyles.infoLabel}>{label}:</span>
    <span style={ntStyles.infoValue}>{value}</span>
  </div>
);

// Same CSS as previous profiles
const ntStyles = {
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
  divider: {
    width: 5,
    height: 20,
    margin: "0 20px",
    background: "transparent",
    borderRadius: 2,
  },
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

export default VishwanathTamascarPage;
