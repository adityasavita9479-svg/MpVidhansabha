import React from "react";

const ShyamcharanShuklaPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-SC_shukla.jpg" // ✅ Replace with actual image path
            alt="श्री श्यामचरण शुक्ल"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री श्यामचरण शुक्ल</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={ntStyles.tenure}>
            चतुर्थ विधान सभा (1967-1972) एवं नवम् विधान सभा (1990-1992)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="पिता" value="स्व. पं. रविशंकर शुक्ल" />
          <InfoRow label="जन्मतिथि" value="27.फरवरी, 1925" />
          <InfoRow label="जन्म स्थान" value="रायपुर" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.एस.सी.(टेक्नॉलाजी), एल.एल.बी." />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          किशोरावस्था से राजनीतिक गतिविधियों में संलग्न तथा विद्यार्थी कांग्रेस के विभिन्न पदों पर कार्य. 1942 के भारत छोड़ो आंदोलन में पढ़ाई छोड़कर सक्रिय रूप से कार्य. 1952-63 में रायपुर जिला कांग्रेस कमेटी के संयुक्त सचिव. 1964 में म.प्र. कांग्रेस कमेटी के उपाध्यक्ष. 1957 से अखिल भारतीय कांग्रेस कमेटी के सदस्य. 1957 में पहली बार तदनंतर 1962, 1967 एवं 1972 में विधान सभा सदस्य निर्वाचित. 1963 में म.प्र. विधान सभा में कांग्रेस पार्टी के मुख्य सचेतक. 1967 में सिंचाई मंत्री तथा अप्रैल, 1969 से जनवरी, 1972 तक मुख्यमंत्री. रायपुर के हिंदी दैनिक "महाकौशल" के संस्थापक संपादक. अखिल भारतीय समाचार पत्र संपादक सम्मेलन के पूर्व प्रमुख सदस्य. 23 दिसम्बर, 1975 से 30 अप्रैल, 1977 तक एवं 9 दिसम्बर, 1989 से 6 मार्च, 1990 तक मध्यप्रदेश के मुख्यमंत्री.
        </p>

        <p style={ntStyles.paragraph}>
          1990 के विधान सभा चुनाव में पांचवी बार सदस्य निर्वाचित एवं 20 मार्च 1990 से नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा.
        </p>

        <p style={ntStyles.paragraph}>
          दिनांक 14 फरवरी, 2007 को आपका देहावसान हो गया.
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

// Same CSS as previous नेता प्रतिपक्ष profiles
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

export default ShyamcharanShuklaPage;
