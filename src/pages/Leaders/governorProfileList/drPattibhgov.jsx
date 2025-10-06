import React from "react";

const DrPattabhiSeetaramayyaPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-pbsitaramaiya.jpg"
            alt="डॉ. पट्टाभिसीतारामैया"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>डॉ. पट्टाभिसीतारामैया</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>(दिनांक 1.11.1956 से 13.6.1957 तक)</div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्म" value="24 नवम्बर, 1880" />
          <InfoRow label="शिक्षा" value="बी.ए., एम.सी.एम." />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनीतिक जीवन का संक्षिप्त विकास क्रम :</h2>
        <p style={styles.paragraph}>
          चिकित्सकीय शिक्षा समाप्त कर आपने सन 1906 में चिकित्सकीय कार्य आरम्भ कर दिया. सन 1916 में यह कार्य छोड़कर सन 1916 से 1952 तक अखिल भारतीय कांग्रेस कमेटी के मेम्बर रहे. सन 1919 से अंग्रेजी साप्ताहिक ''जन्मभूमि'' का प्रकाशन प्रारम्भ किया. आप देश के स्वतंत्रता संग्राम में अग्रणियों की हैसियत से भाग लेते रहे और कांग्रेस के आंदोलनों में आपने कई बार जेल यात्रा की. सन 1929-30, 1931 और 1934, 1936, 1938, 1939 और 1940-46 तथा 1948 में अखिल भारतीय कांग्रेस कमेटी की कार्यकारिणी समिति के सदस्य रहे.
        </p>
        <p style={styles.paragraph}>
          सन 1936 में अखिल भारतीय देशी राज्य प्रजा परिषद के अध्यक्ष निर्वाचित हुए. सन 1946, 1947-48 में कार्यकारी अध्यक्ष रहे. सन 1948-50 में जयपुर के अखिल भारतीय अधिवेशन में भारतीय राष्ट्रीय कांग्रेस के अध्यक्ष निर्वाचित हुए. सन 1946 से 1949 तक संविधान सभा के सदस्य रहे तथा इसके पश्चात् अंतरिम संसद के भी.
        </p>
        <p style={styles.paragraph}>
          सन 1952 में पुराने मध्यप्रदेश के राज्यपाल नियुक्त हुए तथा दिनांक 01.11.1956 से 13.6.1957 तक नए मध्यप्रदेश के राज्यपाल रहे.
        </p>
        <p style={styles.paragraph}>
          वे महान देशभक्त, उत्कृष्ट विद्वान् और उच्चकोटि के प्रशासक थे.
        </p>
        <p style={styles.paragraph}>
          वे एक सिद्धहस्त लेखक भी थे. उन्होंने कई पुस्तकें भी लिखी थी. वे तमिल, हिन्दी, कन्नड़, संस्कृत और तेलगू के भी अच्छे विद्वान थे.
        </p>

        <h2 style={styles.sectionTitle}>आपकी निम्नलिखित पुस्तकें प्रकाशित हुई हैं:</h2>
        <ul style={styles.bookList}>
          <li>National Education - 1912</li>
          <li>Indian Nationalism - 1913</li>
          <li>Re-Distribution of Indian Provinces on a Language Basis - 1916</li>
          <li>The Indian National Congress (Jubilee Commemoration Volume - 1935)</li>
          <li>Economic conquest of India</li>
          <li>Constitutions of the World</li>
          <li>Gandhi, Gandhism and Socialism</li>
          <li>Hindu Home Re-Discovered in 1936-37</li>
          <li>Why Vote Congress?</li>
          <li>Sixty years of Congress</li>
          <li>Fundamentals of Indian Political Problems</li>
          <li>Feathers and Stones</li>
          <li>History of Congress Vol. II</li>
          <li>Current History in Question and Answer</li>
        </ul>

        <p style={styles.deathNotice}>
          आपका दिनांक 17.12.1959 को हैदराबाद में देहावसान हो गया.
        </p>
      </div>
    </div>
  );
};

// InfoRow Component
const InfoRow = ({ label, value }) => (
  <div style={styles.infoRow}>
    <span style={styles.infoLabel}>{label}:</span>
    <span style={styles.infoValue}>{value}</span>
  </div>
);

// Shared Styles
const colors = {
  primary: "#008b8b", // Dark Cyan
  secondary: "#004d4d", // Darker Cyan
  background: "#e0f7f7", // Light Cyan
  text: "#222", // Dark text
  cardBackground: "white", // Card background
  title: "white", // Title text color
};

const styles = {
  pageWrapper: {
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    backgroundColor: colors.background,
    padding: "1.5rem 1rem",
    maxWidth: 1100,
    margin: "auto",
    color: colors.text,
  },
  topProfileCard: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    flexWrap: "wrap",
  },
  photoFrame: {
    backgroundColor: colors.cardBackground,
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
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: "2rem 3rem",
    color: colors.title,
    flex: 1,
    textAlign: "center",
    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
    minWidth: 250,
  },
  topTitle: {
    fontSize: "2rem",
    margin: 0,
    fontWeight: "700",
    lineHeight: 1.1,
  },
  topSubtitle: {
    fontSize: "1.2rem",
    marginTop: "0.5rem",
    fontWeight: "500",
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: "1.5rem 1.8rem",
    marginBottom: "2rem",
    boxShadow: "0 8px 14px rgba(0,0,0,0.08)",
  },
  section: {
    marginBottom: "1.5rem",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    color: colors.primary,
    borderBottom: `3px solid ${colors.secondary}`,
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
  bookList: {
    marginLeft: "20px",
    marginBottom: "1rem",
  },
  deathNotice: {
    fontSize: "1.1rem",
    fontWeight: "700",
    textAlign: "center",
    color: colors.secondary,
    marginTop: 20,
  },
  infoRow: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  infoLabel: {
    fontWeight: "700",
    marginRight: 6,
    minWidth: 120,
    color: colors.secondary,
  },
  infoValue: {
    flex: 1,
    color: "#333",
    fontWeight: "500",
  },
};

export default DrPattabhiSeetaramayyaPage;



