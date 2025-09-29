import React from "react";

const ShriBhagwantraoMandaloiPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/cm-bhagawantmand.jpg" // ✅ place in public/leaders
            alt="श्री भगवंतराव मण्डलोई"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री भगवंतराव मण्‍डलोई</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व मुख्‍यमंत्री, मध्यप्रदेश)
          </h3>
          <div style={styles.tenure}>
            प्रथम विधान सभा (1956 - 1957) एवं तृतीय विधान सभा (1962 - 1967) <br />
            (09.01.1957 से 30.01.1957 एवं 12.03.1962 से 29.09.1963)
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्‍म तिथि" value="15 दिसम्‍बर, 1892" />
          <InfoRow label="जन्‍म स्‍थान" value="खण्‍डवा" />
          <InfoRow label="शैक्षणिक योग्‍यता" value="बी.ए., एल.एल.बी." />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन</h2>

        <p style={styles.paragraph}>
          सन् 1919 से 1922 तक खण्‍डवा नगरपालिका के सदस्‍य, सन् 1922 से उसके
          उप-सभापति तथा लगातार तीन कार्यावधि तक सभापति रहे। सन् 1943 में नागपुर
          जेल में बन्‍दी रहते हुए तीसरी बार सभापति निर्वाचित हुए। खण्‍डवा सार्वजनिक
          पुस्‍तकालय के अध्‍यक्ष और सचिव रहे। एक महिला अस्‍पताल और बाल-सेवा सदन के
          संचालन में सहयोग किया तथा 10 वर्ष तक सदन के अध्‍यक्ष रहे। निमाड़ शिक्षण
          संस्‍था एवं 1951 में चालू किये गये जनता हाईस्‍कूल के प्रवर्तन सदस्‍य रहे।
        </p>
        <p style={styles.paragraph}>
          सन् 1940 के व्‍यक्तिगत सत्‍याग्रह में जेल यात्रा एवं 1942 के आंदोलन में
          पुन: जेल यात्रा की। सन् 1939 से 1945 तक अखिल भारतीय कांग्रेस कमेटी एवं
          महाकौशल कांग्रेस कमेटी के सदस्‍य रहे। सन् 1939 के त्रिपुरी कांग्रेस अधिवेशन
          की प्रदर्शनी समिति के प्रमुख सदस्‍य रहे।
        </p>
        <p style={styles.paragraph}>
          सन् 1935 के उप निर्वाचन से विधान परिषद् के सदस्‍य, सन् 1937 से विधान सभा
          सदस्‍य, संविधान सभा एवं संसद सदस्‍य रहे। मध्‍यप्रदेश कांग्रेस विधान सभा दल
          के मुख्‍य सचेतक भी रहे। सन् 1951-52 के प्रथम मंत्रिमंडल में राजस्‍व मंत्री
          रहे।
        </p>
        <p style={styles.paragraph}>
          तत्‍कालीन मुख्‍यमंत्री पं. रविशंकर शुक्‍ल के निधन के बाद अंतरिम मुख्‍यमंत्री
          के रूप में 31 जनवरी, 1957 तक दायित्व निभाया। तत्‍पश्चात् डॉ. कटजू ने पदभार
          ग्रहण किया। सन् 1957 में पुन: निर्वाचित होकर राजस्‍व मंत्री बने। सन् 1962
          में पुन: निर्वाचित होकर 30 सितम्‍बर, 1963 तक राज्‍य के मुख्‍यमंत्री रहे।
        </p>

        <p style={styles.deathNotice}>
          दिनांक 3 नवम्‍बर, 1977 को आपका देहावसान हो गया।
        </p>
      </div>
    </div>
  );
};

// Reusable InfoRow
const InfoRow = ({ label, value }) => (
  <div style={styles.infoRow}>
    <span style={styles.infoLabel}>{label}:</span>
    <span style={styles.infoValue}>{value}</span>
  </div>
);

// Same styles object reused
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
    marginTop: "0.8rem",
    fontSize: "1rem",
    fontWeight: "600",
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

export default ShriBhagwantraoMandaloiPage;
