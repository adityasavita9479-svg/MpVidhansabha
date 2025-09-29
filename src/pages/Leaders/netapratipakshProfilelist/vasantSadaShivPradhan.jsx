import React from "react";

const VasantSadashivPradhanPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-VS_pradhan.jpg" // ✅ Replace with actual image path
            alt="श्री वसंत सदाशिव प्रधान"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री वसंत सदाशिव प्रधान</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={ntStyles.tenure}>
            चतुर्थ विधान सभा (1967-1972)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="जन्मतिथि" value="17.मई, 1914" />
          <InfoRow label="जन्म स्थान" value="ग्राम कानवण, तहसील बदनाबर, जिला - धार (म.प्र.)" />
          <InfoRow label="वैवाहिक स्थिति" value="प्रथम विवाह 1945. प्रथम पत्नी का देहांत होने पर द्वितीय विवाह 26 नवम्बर, 1950" />
          <InfoRow label="पत्नी" value="श्रीमती मालती प्रधान" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., एल.एल.बी." />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          सन् 1940 से हिंदू महासभा के सदस्य. सार्वजनिक कार्यों में भाग लेने की ओर विशेष रुचि. सन् 1957 में हिंदू सभा के टिकट पर विधान सभा के लिए निर्वाचित हुए तथा सन् 1962 तक विधान सभा सदस्य रहे. तत्पश्चात् सन् 1967 में भारतीय जनसंघ के सदस्य बने व सन् 1967 के आम चुनाव में विधान सभा के लिए निर्वाचित हुए. संविद शासन काल में वित्त मंत्री रहे.
        </p>
        <p style={ntStyles.paragraph}>
          आपका दिनांक 09 सितम्बर, 2002 को देहावसान हो गया.
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

// CSS same as previous नेता प्रतिपक्ष profiles
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

export default VasantSadashivPradhanPage;
