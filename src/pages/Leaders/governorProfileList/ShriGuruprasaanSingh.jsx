import React from "react";

const ShriGuruprasannanSinghPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/Guv-white.jpg" // Add the correct image in public/leaders
            alt="श्री गुरूप्रसन्‍न सिंह"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री गुरूप्रसन्‍न सिंह</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व कार्यवाहक राज्यपाल, मध्यप्रदेश)
          </h3>
          <div style={styles.tenure}>(दिनांक 26.5.1981 से 09.7.1981 तक)</div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्म तिथि" value="3 जनवरी, 1922" />
          <InfoRow label="जन्म स्थान" value="रायपुर ग्राम, रीवा जिला" />
          <InfoRow label="शिक्षा" value="एम.ए., एल.एल.बी." />
          <InfoRow label="व्यवसाय" value="वकालत" />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम:
        </h2>
        <p style={styles.paragraph}>
          शिक्षा समाप्त करने के पश्चात् सन् 1944 में आपने रीवा में वकालत प्रारंभ
          की। सन् 1946-56 में टी.आर.एस. कॉलेज, रीवा में सिविल लॉ के अंशकालिक
          व्याख्याता रहे। सन् 1954 में विंध्यप्रदेश के जुडीशियल कमिश्नर्स कोर्ट
          में एडवोकेट रहे। सन् 1956 में जबलपुर हाईकोर्ट में वकालत की। सन्
          1967 में मध्यप्रदेश उच्च न्यायालय में एडिशनल जज रहे तथा सन् 1968 में
          जज नियुक्त हुए।
        </p>
        <p style={styles.paragraph}>
          आपकी पुस्तक <strong>"Principles of statutory Interpretation"</strong>{" "}
          1966 में प्रकाशित हुई।
        </p>

        <p style={styles.deathNotice}>दिनांक 5 अक्टूबर, 2013 को दिवंगत।</p>
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
  tenure: {
    marginTop: 6,
    fontWeight: "600",
    fontSize: "1rem",
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

export default ShriGuruprasannanSinghPage;
