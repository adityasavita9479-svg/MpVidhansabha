import React from "react";

const ShriPurushottamVinayakDixitPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/Guv-white.avif"
            alt="श्री पुरूषोत्‍तम विनायक दीक्षित"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री पुरूषोत्‍तम विनायक दीक्षित</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व कार्यवाहक राज्‍यपाल, मध्‍यप्रदेश)
          </h3>
          <div style={styles.tenure}>
            (दिनांक 03.02.1966 से 09.02.1966 तक)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्म" value="19 मार्च, 1907" />
          <InfoRow
            label="शिक्षा"
            value="बी.ए. (केन्‍टब), बी.एस.सी. (प्रथम श्रेणी), बार-एट-लॉ"
          />
          <p style={styles.paragraph}>
            आपने पटवर्धन हाईस्‍कूल नागपुर, नागपुर विश्‍वविद्यालय और क्राइस्‍ट
            कॉलेज, केम्ब्रिज में शिक्षा प्राप्त की.
          </p>
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>
        <p style={styles.paragraph}>
          आपने सन् 1931 में नागपुर में 10 साल तक वकालत की. सन् 1940-41 में
          ग्वालियर में कोडीफिकेशन ऑफीसर रहे. सन् 1941-42 में ग्वालियर उच्च
          न्यायालय के न्यायाधीश रहे. सन् 1942-45 में ग्वालियर राज्य में विधि,
          विदेश तथा राजनीतिक सचिव रहे. सन् 1945-46 में ग्वालियर उच्च न्यायालय
          के न्यायाधीश रहे. सन् 1946-47 में विदेश और राजनीतिक मंत्रियों के
          सलाहकार रहे. सन् 1944-48 में ग्वालियर उच्च न्यायालय के मुख्य न्यायाधीश
          रहे. सन् 1948-56 में मध्यभारत उच्च न्यायालय के न्यायाधीश रहे.
        </p>
        <p style={styles.paragraph}>
          सन् 1949 में रतलाम इन्सीडेंट्स इन्क्वायरी कमीशन के अध्यक्ष रहे. सन्
          1950 में ग्वालियर अग्निकांड जांच के अध्यक्ष रहे. सन् 1954 में
          मध्यभारत उच्च न्यायालय के कार्यकारी प्रधान न्यायाधीश रहे तथा 1956-59
          में मध्यप्रदेश उच्च न्यायालय के न्यायाधीश रहे.
        </p>
        <p style={styles.paragraph}>
          दिनांक 22 सितम्बर 1959 से आपने मध्यप्रदेश उच्च न्यायालय के प्रधान
          न्यायाधीश का कार्यभार ग्रहण किया.
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

// **Reuse the same styles**
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
    minWidth: 120,
    color: colors.secondary,
  },
  infoValue: {
    flex: 1,
    color: "#333",
    fontWeight: "500",
  },
};

export default ShriPurushottamVinayakDixitPage;
