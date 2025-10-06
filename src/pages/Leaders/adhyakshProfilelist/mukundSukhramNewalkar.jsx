import React from "react";

const MukundSakharamNewalkarPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/sp-MSNevalkar.jpg" // replace with actual image path
            alt="श्री मुकुन्‍द सखाराम नेवालकर"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री मुकुन्‍द सखाराम नेवालकर</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व अध्यक्ष, मध्यप्रदेश विधानसभा)</h3>
          <div style={styles.tenure}>
            षष्‍टम् विधान सभा (1977 - 80) <br />
            (15.7.1977 से 02.7.1980)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्मतिथि" value="15.01.1922" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्नी का नाम" value="श्रीमती मन्‍दाकिनी नेवालकर" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., एल.एल.बी." />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :</h2>

        <p style={styles.paragraph}>
          छतरपुर में वकालत करते रहे. सन् 1942 में ''क्विट इंडिया'' तथा ''करो या मरो'' आन्‍दोलन में भाग लिया. नौगांव से सिविल अस्‍पताल हटाने के बाद वहां टी.बी. क्‍लीनिक की स्‍थापना कराने हेतु जन आन्‍दोलन का संचालन किया तथा स्‍वतंत्रता संग्राम में भाग लेते हुए जेल गये. छतरपुर जिला जनसंघ के 8 वर्ष तक अध्‍यक्ष रहे. जुलाई 1955 से जुलाई 1964 तक म्‍युनिसिपल बोर्ड के सभापति रहे. कॉस्‍मोपालिटन इंस्‍टीट्यूट ऑफ पब्लिक अफेयर्स के मुख्‍य संरक्षक, अखिल भारतीय बैनर्जी मेमोरियल फुटबाल टूर्नामेन्‍ट छतरपुर तथा अखिल भारतीय राजमाता बैडमिंटन टूर्नामेंट छतरपुर के संरक्षक, नौगांव मेला सप्‍ताह, नौगांव के संरक्षक, मध्‍यप्रदेश भोपाल में इलाहाबाद यूनिवर्सिटी की ओल्‍ड बॉयज एसोसिएशन के अध्‍यक्ष.
        </p>
        <p style={styles.paragraph}>
          आपातकाल (1975-76) में मीसा के तहत गिरफ्तार होकर छतरपुर जेल में 19 महिने 3 दिन रहे. सन् 1977 में विधान सभा सदस्‍य निर्वाचित हुए. 2 जुलाई 1977 को राज्‍यमंत्री बने. 15 जुलाई, 1977 से 2 जुलाई, 1980 तक मध्यप्रदेश विधान सभा के अध्‍यक्ष रहे.
        </p>
        <p style={styles.deathNotice}>
          दिनांक 05.11.2000 को आपका देहावसान हो गया.
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

// Reuse the same styles object from previous pages
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

export default MukundSakharamNewalkarPage;
