import React from "react";

const VishnuVinayakSarwatePage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/up-V_V_Sarvate.jpg" // ✅ Replace with correct image path
            alt="श्री विष्णु विनायक सरवटे"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री विष्णु विनायक सरवटे</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व उपाध्‍यक्ष, मध्‍यप्रदेश विधान सभा)
          </h3>
          <div style={styles.tenure}>
            प्रथम विधान सभा (1956-57) <br />
            (24.12.1956 से 05.03.1957)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्‍मतिथि" value="25.08.1906" />
          <InfoRow label="जन्‍म स्‍थान" value="नीचम" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित (सन् 1932)" />
          <InfoRow
            label="शैक्षणिक योग्‍यता"
            value="बी.एस.सी. (1927), एल.एल.बी. (1929) प्रथम श्रेणी में"
          />
          <InfoRow label="पत्‍नी का नाम" value="श्रीमती आशावती सरवटे" />
          <InfoRow label="संतान" value="2 पुत्रियां" />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={styles.paragraph}>
          सन् 1939 से 1965 तक इन्‍दौर नगर म्‍युनिसिपल कौंसिल के सदस्‍य रहे तथा इन
          16 वर्षों में 5 बार स्‍टेंडिंग के सभापति तथा चार बार म्‍युनिसिपल
          कौंसिल के अध्‍यक्ष निर्वाचित हुए तथा अंतिम 7 वर्ष नगरपालिका निगम में
          कांग्रेस पक्ष के नेता रहे। इन्‍दौर राज्‍य धार सभा के सदस्‍य एवं कांग्रेस
          पक्ष के मंत्री (1944), इन्‍दौर राज्‍य विधान सभा के सदस्‍य एवं सेक्रेटरी
          व मध्‍यभारत निर्माण (1948) से विधान सभा के सदस्‍य एवं कांग्रेस पक्ष के
          मंत्री, मध्‍यभारत देशी राज्‍य लोक परिषद के इलेक्‍शन ट्रिब्‍यूनल के
          संयोजक रहे। आल इंडिया लोकल अथारिटीज फेडरेशन के जनरल सेक्रेटरी
          (1951-54) रहे।
        </p>

        <p style={styles.paragraph}>
          सन् 1952 में मध्‍यभारत विधान सभा के उपाध्‍यक्ष एवं प्राक्‍कलन समिति के
          अध्‍यक्ष बने। 01.11.1956 को नवीन मध्‍यप्रदेश के निर्माण के पश्‍चात्
          24.12.1956 को मध्‍यप्रदेश विधान सभा के उपाध्‍यक्ष निर्वाचित हुए तथा
          05.03.1957 तक उक्‍त पद को सुशोभित करते रहे। सन् 1958 से 1964 तक भारतीय
          पार्लियामेंट की राज्‍यसभा के सदस्‍य रहे। महाराष्‍ट्र साहित्‍य सभा
          इन्‍दौर के अध्‍यक्ष रहे।
        </p>

        <p style={styles.paragraph}>
          आपका दिनांक 03 अप्रैल, 1995 को देहावसान हो गया।
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

// CSS / Styles
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

export default VishnuVinayakSarwatePage;
