import React from "react";

const ChandraPratapTiwariPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-CP_tiwari.jpg" // ✅ Replace with actual image path
            alt="श्री चन्द्र प्रताप तिवारी"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री चन्द्र प्रताप तिवारी</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={ntStyles.tenure}>द्वितीय विधान सभा (1957 से 1962)</div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="जन्मतिथि" value="25.दिसम्बर, 1920" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित (सन् 1930)" />
          <InfoRow label="शैक्षणिक योग्यता" value="एम.ए., एल.एल.बी." />
          <InfoRow label="पत्नी का नाम" value="श्रीमती शांति देवी" />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          सन् 1942 की क्रांति में विद्यार्थी आंदोलन में भाग लेने के कारण रीवा पुलिस द्वारा वारंट रहा. सन् 1949 से लगातार सोशलिस्ट जमींदारों द्वारा किसानों की बेदखली के विरुद्ध आंदोलन का नेतृत्व किया और आठ बार जेल गये. गोवा सत्याग्रह में 15 अगस्त 1955 को भाग लिया. विंध्यप्रदेश के 19 सत्याग्रहियों का नेतृत्व करते हुए सासोली मार्ग से गोवा में प्रवेश किया. प्रथम तथा द्वितीय आम चुनावों में सदस्य निर्वाचित हुए, तत्पश्चात् तृतीय एवं चतुर्थ विधानसभा के भी सदस्य रहे. 1972 में कांग्रेस पार्टी के प्रत्याशी के रूप में सदस्य निर्वाचित हुए तथा सेठी जी के मंत्रिमंडल में मंत्री रहे.
        </p>

        <p style={ntStyles.paragraph}>
          आपका दिनांक 19 जून, 1992 को देहावसान हो गया.
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

export default ChandraPratapTiwariPage;
