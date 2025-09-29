import React from "react";

const AnantSadashivPatwardhanPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/annantsadahivpatvardhan.jpg" // ✅ Replace with correct image path
            alt="श्री अनंत सदाशिव पटवर्धन"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री अनंत सदाशिव पटवर्धन</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व उपाध्‍यक्ष, मध्‍यप्रदेश विधान सभा)
          </h3>
          <div style={styles.tenure}>
            द्वितीय विधान सभा (1957-62) <br />
            (03.12.1957 से 07.03.1962 तक)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्‍मतिथि" value="07 जनवरी, 1910" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित (सन् 1935)" />
          <InfoRow
            label="शैक्षणिक योग्‍यता"
            value="होल्‍कर कॉलेज इन्‍दौर से बी.ए. (1931), एल.एल.बी. (1933) प्रथम श्रेणी में"
          />
          <InfoRow label="पत्‍नी का नाम" value="श्रीमती कुसुम पटवर्धन" />
          <InfoRow label="संतान" value="1 पुत्र, 2 पुत्रियां" />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={styles.paragraph}>
          सन् 1934 से 1947 तक देवास राज्‍य सभा के सदस्‍य रहे। सन् 1946 में देवास
          जूनियर विधान सभा निर्मात्री परिषद के सदस्‍य तथा उक्‍त लोक सभा के प्रथम
          निर्वाचित अध्‍यक्ष बने। सन् 1947 में प्रजामंडल व कार्यकारिणी के सदस्‍य
          रहे तथा 1946-47 में संयुक्‍त देवास कांग्रेस एवं नगर पालिका के अध्‍यक्ष
          रहे। मध्‍य भारत विधान सभा के निर्माण (1948) से ही विधान सभा के उपाध्‍यक्ष
          रहे।
        </p>

        <p style={styles.paragraph}>
          सन् 1952 में विधान सभा के अध्‍यक्ष निर्वाचित हुए तथा भारत सेवक समाज के
          संयोजक रहे। नवीन मध्‍यप्रदेश निर्माण के पश्‍चात् 03.12.1957 को उपाध्‍यक्ष
          निर्वाचित हुए तथा 07.03.1962 तक पदासीन रहे। आप अनेक विधान सभा समितियों के
          सभापति रहे।
        </p>

        <p style={styles.paragraph}>
          दिनांक 01 मार्च, 1970 को आपका देहावसान हो गया।
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

// CSS / Styles (reuse from previous components)
const colors = {
  primary: "#008b8b",
  secondary: "#004d4d",
  background: "#e0f7f7",
  text: "#222",
  cardBackground: "white",
  title: "white",
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
  infoRow: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  infoLabel: {
    fontWeight: "700",
    marginRight: 6,
    minWidth: 150,
    color: colors.secondary,
  },
  infoValue: {
    flex: 1,
    color: "#333",
    fontWeight: "500",
  },
};

export default AnantSadashivPatwardhanPage;
