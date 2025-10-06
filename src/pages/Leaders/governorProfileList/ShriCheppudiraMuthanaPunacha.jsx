import React from "react";

const ShriCheppudiraMuthanaPunachaPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-cmpunacha.jpg" // Add the correct image in public/leaders
            alt="श्री चेप्पुदिरा मुथाना पुनाचा"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री चेप्पुदिरा मुथाना पुनाचा</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>(दिनांक 17.8.1978 से 29.4.1980 तक)</div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्म तिथि" value="16.9.1910" />
          <InfoRow label="जन्म स्थान" value="ग्राम उत्तूर, दक्षिण कुर्ग" />
          <InfoRow
            label="शिक्षा"
            value="कुर्ग में मरकरा तथा विराजपेट; सेंट एलायसिस कॉलेज, मंगलौर"
          />
          <InfoRow label="संतान" value="2 पुत्र एवं 2 पुत्रियां" />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम:
        </h2>
        <p style={styles.paragraph}>
          विद्यार्थी जीवन से ही भारतीय स्वतंत्रता आंदोलन में रूचि होने के कारण
          अध्ययन छोड़कर सन् 1930 में स्वतंत्रता आंदोलन में शामिल हो गये। सन्
          1932 तथा 1933 में दो बार कारावास हुआ। सन् 1940-41 में व्यक्तिगत रूप से
          सत्याग्रह आंदोलन में भाग लेने के कारण कारावास हुआ। सन् 1942-44 में
          "भारत छोड़ो" आंदोलन में नजरबंद रहे।
        </p>
        <p style={styles.paragraph}>
          सन् 1933 में कुर्ग जिला कांग्रेस कमेटी के सेक्रेटरी रहे। सन् 1938 में
          प्रांतीय कांग्रेस कमेटी की कार्यकारिणी, अखिल भारतीय कांग्रेस कमेटी के
          सदस्य तथा कुर्ग डिस्ट्रिक्ट बोर्ड के लिए निर्वाचित हुए एवं 1941 में
          उसके अध्यक्ष रहे। सन् 1945 में कुर्ग विधान परिषद् के सदस्य निर्वाचित
          हुए तथा 1945-51 में परिषद् में कांग्रेस विधायक दल के नेता रहे। सन्
          1947-51 में संविधान सभा के सदस्य तथा अस्थायी संसद के सदस्य रहे।
        </p>
        <p style={styles.paragraph}>
          सन् 1952-56 में कुर्ग के मुख्यमंत्री रहे। नया मैसूर राज्य निर्मित होने पर
          1956 में उद्योग तथा वाणिज्य मंत्री रहे तथा बाद में गृह कार्य तथा उद्योग
          मंत्री रहे। सन् 1959-63 में भारतीय व्यापार निगम के सभापति रहे। 
        </p>
        <p style={styles.paragraph}>
          सन् 1960 में कुछ पूर्व यूरोप के देशों को जाने वाले भारत सरकार के व्यापार
          प्रतिनिधि मंडल के नेता रहे। सन् 1961 में जापान को जाने वाले राज्य व्यापार
          निगम के प्रतिनिधि मंडल के नेता रहे। अप्रैल, 1964 में राज्य सभा के
          सदस्य निर्वाचित हुए तथा 1 से 24 जनवरी 1966 तक वित्त मंत्रालय के
          राज्य मंत्री रहे। 25 जनवरी 1966 से 12 मार्च 1967 तक परिवहन, उड्डयन,
          नौवहन तथा पर्यटन मंत्रालय में राज्य मंत्री तथा 13 मार्च 1967 से 1969
          तक रेलवे मंत्री रहे।
        </p>
        <p style={styles.paragraph}>
          आपने जापान, चेकोस्लोवाकिया, रूमानिया, हंगरी तथा यूगोस्लाविया की यात्रा
          की। आप दिनांक 17.8.1978 से 29.4.1980 तक मध्यप्रदेश के राज्यपाल रहे।
        </p>

        <p style={styles.deathNotice}>
          आपका दिनांक 03.08.1990 को देहावसान हो गया।
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

// Shared Styles (reused from previous components)
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

export default ShriCheppudiraMuthanaPunachaPage;
