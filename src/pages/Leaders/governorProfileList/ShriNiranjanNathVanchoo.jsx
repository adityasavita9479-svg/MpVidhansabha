import React from "react";

const ShriNiranjanNathVanchooPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-nnvanchu.jpg" // Add your image in public/leaders folder
            alt="श्री निरंजननाथ वांचू"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री निरंजननाथ वांचू</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>(दिनांक 14.10.1977 से 16.8.1978 तक)</div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्म" value="1 मई, 1910 (सतना)" />
          <InfoRow
            label="शिक्षा"
            value="गवर्नमेंट कॉलेज लाहौर और किंग्‍ज कॉलेज, केम्ब्रिज; आई.ए.एस. 1934"
          />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम:
        </h2>
        <p style={styles.paragraph}>
          सन् 1934 में आपने इंडियन सिविल सर्विस में प्रवेश किया तथा बिहार में
          सब-कलेक्टर के रूप में सेवा प्रारंभ की। फिर आप उड़ीसा में तैनात
          हुए। बाद में भारत सरकार के वाणिज्य एवं खाद्यान्न विभाग में नियुक्त
          हुए। सन् 1948 में आप आर्डिनेंस फैक्ट्रियों के महानिदेशक बने। 
          सन् 1948 से 1957 तक सुरक्षा मंत्रालय में संयुक्त सचिव तथा सुरक्षा
          उत्पादन में मुख्य नियंत्रक नियुक्त हुए। विश्वविद्यालय अनुदान आयोग के
          सदस्य रहे। सन् 1948 से 1961 तक वित्त मंत्रालय में सचिव रहे। आप
          लौह और इस्पात औद्योगिक विकास विभाग में भी सचिव रहे। सन् 1965 से
          1970 तक बोकारो स्टील लिमिटेड के तथा सन् 1968 से 1972 तक नेशनल
          प्रोडक्टिविटी कौंसिल के चेयरमैन रहे। इंडस्ट्रियल कास्ट्स एंड
          प्राइसेस ब्यूरो के चेयरमैन के रूप में उन्होंने सन् 1972 में अवकाश
          ग्रहण किया। आप अप्रैल, 1973 से अक्टूबर, 1977 तक केरल के तथा दिनांक
          14.10.1977 से 16.8.1978 तक मध्यप्रदेश के राज्यपाल रहे।
        </p>

        <p style={styles.deathNotice}>
          आपका दिनांक 20.10.1982 को स्वर्गवास हो गया।
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

// Shared Styles (reused from previous component)
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

export default ShriNiranjanNathVanchooPage;
