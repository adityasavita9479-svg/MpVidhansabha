import React from "react";

const GulSherAhmedPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/sp-Gulsher.jpg" // replace with actual image path
            alt="श्री गुलशेर अहमद"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री गुलशेर अहमद</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व अध्यक्ष, मध्यप्रदेश विधानसभा)</h3>
          <div style={styles.tenure}>
            पंचम विधान सभा (1972 - 77) के द्वितीय अध्‍यक्ष <br />
            (14.8.1972 से 14.7.1977)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्मतिथि" value="सन् 1921" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्नी का नाम" value="श्रीमती बतून फातमा" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., एल.एल.बी., बैरिस्‍टर-एट-लॉ." />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :</h2>

        <p style={styles.paragraph}>
          सन् 1952 में विंध्‍य प्रदेश से राज्य सभा के लिए सदस्‍य निर्वाचित हुए. सन् 1962 के आम चुनाव में मध्यप्रदेश विधान सभा के लिए सदस्‍य निर्वाचित हुए. मई 1963 से अक्‍टूबर 1963 तक विधि एवं वित्‍त विभाग के उप मंत्री रहे. उसके पश्‍चात् विधि मंत्री एवं पृथक आगम विभाग के मंत्री के रूप में मार्च 1967 तक कार्य किया. सहकारिता एवं शिक्षा के क्षेत्र में सक्रिय रहे. सतना केन्‍द्रीय सहकारी बैंक के संचालक मंडल के 5 साल तक सदस्‍य रहे और सतना जिला विपणन सहकारी समिति के अध्‍यक्ष के रूप में करीब 20 साल तक काम किया. मदरसा मोहम्‍मदिया अहसनिया की प्रबंधन कमेटी के अध्‍यक्ष के रूप में करीब 25 वर्ष तक कार्यरत रहे. कुछ वर्ष तक भोपाल हैवी इलेक्ट्रिकल्‍स के संचालक मंडल के सदस्‍य रहे. सन् 1972 के आम चुनाव में विधान सभा के लिए निर्वाचित हुए. दिनांक 14 अगस्‍त, 1972 से 14 जुलाई, 1977 तक मध्यप्रदेश विधान सभा के अध्‍यक्ष रहे. सन् 1980 के आम चुनाव में लोक सभा के सदस्‍य निर्वाचित हुए. आप अखिल भारतीय कांग्रेस (आई), अल्‍पसंख्‍यक विभाग के अध्‍यक्ष तथा दरगाह शरीफ अजमेर की समिति के सदस्‍य रहे. आपने संयुक्‍त राष्‍ट्र संघ के भारतीय प्रतिनिधि मण्‍डल के सदस्‍य के रूप में न्‍यूयार्क (अमेरिका) तथा अन्य देशों की यात्रा की. लोकसभा सदस्‍य के रूप में नियम समिति, विधि, न्याय तथा कम्‍पनी कार्य की सलाहकार समिति के सदस्‍य रहे. इसके अलावा लाभ के पदों सम्‍बन्‍धी संयुक्‍त समिति के सभापति एवं अतिरिक्‍त पैनल चेयरमैन के भी सदस्‍य रहे. आप 30 जून, 1993 से नवंबर, 1993 तक हिमाचल प्रदेश के राज्‍यपाल रहे. आप महात्‍मा गांधी ग्रामोदय विश्वविद्यालय, चित्रकूट के कुलपति रहे.
        </p>
        <p style={styles.deathNotice}>
          दिनांक 20 मई, 2002 को आपका देहावसान हो गया.
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

export default GulSherAhmedPage;
