import React from "react";

const BrijmohanMishraPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/sp-Brij_Mohan_Mishra.jpg" // replace with actual image path
            alt="श्री बृजमोहन मिश्रा"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री बृजमोहन मिश्रा</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व अध्यक्ष, मध्यप्रदेश विधानसभा)
          </h3>
          <div style={styles.tenure}>
            नवम् विधान सभा (1990 - 1992) <br />
            (20.03.1990 से 22.12.1993)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="पिता" value="स्‍व. श्री द्वारिका प्रसाद मिश्रा" />
          <InfoRow label="जन्‍मतिथि" value="20 अप्रैल, 1934" />
          <InfoRow label="जन्‍म स्‍थान" value="वृन्‍दावन" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="शैक्षणिक योग्‍यता" value="एम.ए., एम.एस.सी., एल.एल.बी." />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={styles.paragraph}>
          1947 में राष्‍ट्रीय स्‍वयंसेवक संघ पर लगे प्रतिबंध का विरोध करने पर जेल
          यात्रा एवं स्‍कूल से निष्‍कासन. 1954-57 में नागपुर विद्यार्थी परिषद् में
          महामंत्री और 1959 में डी.ए.व्‍ही. कालेज कानपुर के अध्‍यक्ष तथा उत्‍तर
          प्रदेश की विद्यार्थी परिषद् के महामंत्री. चीन अतिक्रमण की संभावना तथा
          तिब्‍बत पर चीनी अतिक्रमण के संबंध में 10 हजार विद्यार्थियों द्वारा
          तत्‍कालीन प्रधानमंत्री को खून से हस्‍ताक्षरित ज्ञापन देने वाले
          प्रतिनिधि मंडल का नेतृत्‍व.
        </p>

        <p style={styles.paragraph}>
          1964 में सेवा सदन महाविद्यालय में प्राध्‍यापक. 1969 में खंडवा जिला जनसंघ
          के उपाध्‍यक्ष एवं विवेकानंद शिला स्‍मारक कन्‍याकुमारी के महामंत्री. 1971
          में बंगला देश की भारत सरकार द्वारा मान्‍यता प्रदान करने के लिए सत्‍याग्रह
          तथा जेल यात्रा. 1972 में प्रथम बार जनसंघ के टिकिट पर विधान सभा सदस्‍य
          निर्वाचित. जनसंघ विधायक दल के सचिव एवं सचेतक और विधान सभा की
          विशेषाधिकार समिति तथा वाणिज्‍य एवं उद्योग विभाग की सलाहकार समिति के
          सदस्‍य.
        </p>

        <p style={styles.paragraph}>
          22 जुलाई, 1975 से 26 जनवरी, 1977 तक आपातकाल के दौरान मीसा में निरूद्ध.
          ग्‍वालियर जेल की फांसी की कोठरी में एक माह सत्रह दिन के एकांतवास की सजा
          भुगतनी पड़ी. 1977 में पुन: विधान सभा सदस्‍य निर्वाचित. विधान सभा की
          सरकारी उपक्रमों संबंधी समिति के सभापति. 1980 में तत्‍कालीन मुख्‍यमंत्री
          श्री पटवा के मंत्रिमंडल में वनमंत्री. 1990 के विधान सभा चुनाव में तीसरी
          बार सदस्‍य निर्वाचित होकर 20 मार्च, 1990 से 22 दिसम्‍बर, 1993 तक अध्‍यक्ष
          म.प्र. विधान सभा रहे.
        </p>

        <p style={styles.deathNotice}>
          दिनांक 06.05.2004 को आपका देहावसान हो गया.
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

// Reuse the same styles object
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

export default BrijmohanMishraPage;
