import React from "react";

const YagyadattSharmaPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/sp-Yagya_Datta_Sharma.jpg" // replace with actual image path
            alt="श्री यज्ञदत्‍त शर्मा"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री यज्ञदत्‍त शर्मा</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व अध्यक्ष, मध्यप्रदेश विधानसभा)</h3>
          <div style={styles.tenure}>
            सप्‍तम् विधान सभा (1980 - 85) के प्रथम अध्‍यक्ष <br />
            (03.07.1980 से 19.07.1983)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्मतिथि" value="05.04.1930" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="शैक्षणिक योग्यता" value="एम.ए., एल.एल.बी., साहित्‍य रत्‍न" />
          <InfoRow label="व्यवसाय" value="वकालत" />
          <InfoRow label="अभिरुचि" value="अध्ययन" />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :</h2>

        <p style={styles.paragraph}>
          छात्र जीवन में छात्र नेता तथा महाविद्यालय संसद के महत्‍वपूर्ण पदों पर रहे. सन् 1953-54 के ग्‍वालियर व इंदौर के छात्र आन्‍दोलनों में छात्रों का नेतृत्‍व किया.
        </p>
        <p style={styles.paragraph}>
          सन् 1957 से वकालत प्रारम्‍भ की. वकालत में फौजदारी मुकदमों में चोटी के वकीलों में गणना. 23 वर्ष का वकालत का अनुभव.
        </p>
        <p style={styles.paragraph}>
          सन् 1958 में इंदौर नगर निगम के सदस्‍य के रूप में राजनीतिक क्षेत्र में प्रवेश किया. नागरिक समिति के संगठक तथा बाद में संयोजक रहे. सन् 1965 में नवनिर्वाचित नगर निगम परिषद् में एल्‍डरमैन निर्वाचित हुए तथा विपक्ष के नेता रहे. सन् 1966 में मंहगाई विरोधी आंदोलन में भाग लिया और जेल यात्रा की.
        </p>
        <p style={styles.paragraph}>
          सन् 1967 में स्‍थानीय संस्‍था नागरिक समिति के चुनाव चिन्‍ह से विधान सभा के सदस्‍य निर्वाचित हुए. तत्‍पश्‍चात् यह संस्‍था कांग्रेस में सम्मिलित हो गई. चतुर्थ विधान सभा की अवधि में प्राक्‍कलन तथा प्रत्‍यायुक्‍त विधान समितियों के सभापति और चुंगी जांच समिति एवं मध्यप्रदेश विश्‍वविद्यालय एकीकरण अधिनियम के लिए गठित प्रवर समिति के सदस्‍य रहे.
        </p>
        <p style={styles.paragraph}>
          सन् 1967 से 1972 की अवधि में टेलीफोन सलाहकार समिति इंदौर, तत्‍पश्‍चात् मध्यप्रदेश सर्किल जेड.आर.यू.सी.सी. वेस्‍टर्न रेलवे, इन्‍दौर विश्‍वविद्यालय कोर्ट और कार्यकारिणी समिति तथा नगर सुधार न्‍यास, इन्‍दौर के सदस्‍य रहे.
        </p>
        <p style={styles.paragraph}>
          मध्यप्रदेश नेशनल फोरम ऑफ लायर्स तथा कानूनी सहायता, मध्यप्रदेश बैंच के महामंत्री. गरीबों को नि:शुल्‍क कानूनी सहायता देने संबंधी सलाहकार समिति, मध्यप्रदेश हाईकोर्ट, इंदौर बैंच के संयोजक, जूनियर एडवोकेट्स को प्रशिक्षण देने संबंधी स्‍टीयरिंग कमेटी के सदस्‍य. सन् 1977 में विधान सभा के पुन: सदस्‍य निर्वाचित हुए.
        </p>
        <p style={styles.paragraph}>
          सन् 1980 में कांग्रेस (इ) के प्रत्‍याशी के रूप में इंदौर-4 से विधान सभा के पुन: सदस्‍य निर्वाचित हुए तथा दिनांक 3.7.1980 को सर्वसम्‍मति से विधान सभा के अध्‍यक्ष चुने गए. दिनांक 19.8.1980 को विधान सभा में की गई अपनी घोषणा के अनुसार आपने कांग्रेस (इ) विधायक दल की सदस्‍यता से त्‍यागपत्र दे दिया. आप दिनांक 19.7.1983 तक अध्‍यक्ष रहे. आपने मारीशस, जांबिया, केनिया, श्रीलंका, फिजी, चीन, हांगकांग, जापान, ऑस्‍ट्रेलिया तथा बैंकाक की यात्राएं की.
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

// Reuse the same styles object as previous pages
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

export default YagyadattSharmaPage;
