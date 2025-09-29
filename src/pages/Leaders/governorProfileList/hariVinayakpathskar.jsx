import React from "react";

const ShriHariVinayakPatskarPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-pataskar.jpg"
            alt="श्री हरि विनायक पाटस्‍कर"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री हरि विनायक पाटस्‍कर</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्‍यपाल, मध्‍यप्रदेश)</h3>
          <div style={styles.tenure}>(दिनांक 14.06.1957 से 10.02.1965 तक)</div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्म" value="15 मई सन् 1892, इन्‍दापुर, पूना" />
          <InfoRow
            label="शिक्षा"
            value="बी.ए., एल.एल.बी., (बम्‍बई) एल.एल.डी., (Honoris causa) जबलपुर, सागर और विक्रम विश्वविद्यालय"
          />
          <InfoRow
            label="विवाहित"
            value="29 मार्च 1913 को श्रीमती अन्नपूर्णा बाई के साथ, एक पुत्री"
          />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :</h2>
        <p style={styles.paragraph}>
          आप बम्‍बई उच्च न्यायालय और भारत के सर्वोच्च न्यायालय के एडवोकेट रहे. सन् 1920 से अखिल भारतीय कांग्रेस कमेटी के सदस्य रहे. सन् 1926 में बम्‍बई विधान परिषद् के सदस्य बने एवं 1930 में महात्‍मा गांधी के अवतरित होने पर सदस्यता से त्यागपत्र दिया. सन् 1921-37 में आप चालीसगांव नगरपालिका के अध्यक्ष रहे. सन् 1937-39 और 1945-52 में बम्‍बई विधानसभा के सदस्य रहे. सन् 1947-50 में आप संविधान सभा के सदस्य रहे. 15 वर्षों तक नारायण बैंकट जमखाना, चालीसगांव की गवर्निंग बॉडी के सभापति रहे. अनेक वर्षों तक चालीसगांव के अंधों के अस्पताल के सभापति रहे. सन् 1925 से 1945 तक राजनीतिक पीडि़तों का नि:शुल्क बचाव किया. चालीसगांव में हरिजनों के लिए बोर्डिंग हाउस और हाईस्‍कूल के संस्थापक रहे. कुष्‍ठ रोगियों और अन्य असहायों और गरीबों की आप हमेशा सहायता करते रहे. सन् 1942 के स्वतंत्रता आंदोलन में जेल यात्रा की.
        </p>
        <p style={styles.paragraph}>
          सन् 1952 में लोक सभा के सदस्य के रूप में विजयी होकर 1955-57 तक विधि एवं नागरिक उड्डयन विभाग के मंत्री रहे. तत्पश्चात् दिनांक 14.6.1957 से 10.2.1965 तक मध्‍यप्रदेश के लोकप्रिय राज्यपाल रहे. राज्‍यपाल पद से सेवानिवृत्‍त होने के पश्चात् आप आसाम पर्वतीय सीमा आयोग के सभापति नियुक्त हुए थे. आप अपने जीवन काल में कई आयोगों तथा समितियों के अध्यक्ष रहे एवं महाराष्‍ट्र-मैसूर और आंध्र-मद्रास सीमा विवादों में मध्यस्थता की.
        </p>
        <p style={styles.paragraph}>
          केंद्रीय विधि मंत्रालय काल का आपका ऐतिहासिक "हिन्‍दू कोड बिल" हमेशा स्मरणीय रहेगा. देश के संविधान निर्माण में आपके विद्वतापूर्ण योगदान की पंक्तियां श्री पाटसकर की स्मृतियों में सदा जागृत रहेंगी. अपने जीवन के अंतिम समय में सन् 1967 से आप पूना विश्वविद्यालय के उपकुलपति रहे. संसदीय मामलों में निष्णात विद्वान्, कुशल प्रशासक, महान शिक्षा शास्‍त्री और लेखक थे. आपके महान गुणों के कारण भारत सरकार ने 1963 में "पद्म विभूषण" से अलंकृत किया. आपका दिनांक 21 फरवरी 1970 को पूना में स्वर्गवास हो गया.
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

// **Reuse the same styles from the previous component**
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

export default ShriHariVinayakPatskarPage;
