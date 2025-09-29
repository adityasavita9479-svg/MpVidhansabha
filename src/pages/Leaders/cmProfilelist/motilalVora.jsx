import React from "react";

const MotilalVoraPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/cm-motilalvora.jpg" // replace with actual image path
            alt="श्री मोतीलाल वोरा"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री मोतीलाल वोरा</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व मुख्‍यमंत्री, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>
            अष्‍टम् विधान सभा (1985-1990) <br />
            (13.03.1985 से 13.02.1988 एवं 25.01.1989 से 09.12.1989)
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>व्यक्तिगत विवरण</h2>
        <InfoRow label="पिता का नाम" value="श्री मोहनलाल वोरा" />
        <InfoRow label="जन्‍मतिथि" value="20 दिसम्बर, 1928" />
        <InfoRow label="जन्‍म स्थान" value="नागौर (राजस्थान)" />
        <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
        <InfoRow label="शैक्षनिक एवं व्यवसायिक योग्यता" value="प्रारम्भिक शिक्षा के पश्चात् टेक्निकल एवं मेंटेंस कोर्स तथा पत्रकारिता में प्रशिक्षण" />
        <InfoRow label="व्यवसाय" value="पत्रकारिता, लेखन" />
        <InfoRow label="स्थायी पता" value="33, मोहननगर वार्ड दुर्ग, जिला-दुर्ग (म.प्र.)" />
      </div>

      {/* Political & Public Life */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम</h2>
        <p style={styles.paragraph}>
          सन् 1957 में गांधी स्मारक समिति के गठनकर्ता और उसके महामंत्री। सन् 1958 में राजनांदगांवा में महात्मा गांधी की आदमकद कांस्य प्रतिमा का अनावरण तथा गांधी सांस्कृतिक भवन के उद्घाटन में सक्रिय। नवभारत, नागपुर और रायपुर, नागपुर टाइम्स, मध्यप्रदेश क्रॉनिकल और नवभारत टाइम्स, बंबई के संवाददाता।  
        </p>
        <p style={styles.paragraph}>
          सन् 1963 में दुर्ग में राजेन्द्र स्मारक समिति के गठनकर्ता एवं महामंत्री बने। दुर्ग में डॉ. राजेन्द्र प्रसाद एवं सरदार पटेल की कांस्य प्रतिमाएं लगवाने हेतु आयोजन। दुर्ग जिला हिंदी साहित्य समिति के चार साल अध्यक्ष। सन् 1968 में नगरपालिका परिषद के सदस्य, परिषद की स्थाई समिति के सदस्य और लोक निर्माण समिति के अध्यक्ष। दुर्ग जिला पत्रकार संघ के महामंत्री, दुर्ग नगर कांग्रेस कमेटी के मनोनीत महामंत्री, दुर्ग आयुर्वेदिक चिकित्सा महाविद्यालय के संस्थापक और महाविद्यालय की संचालक समिति के उपाध्यक्ष।  
        </p>
        <p style={styles.paragraph}>
          मध्यप्रदेश कांग्रेस कमेटी की प्रबंध समिति के सदस्य, सन् 1972 तथा 1977 के आम चुनाव में विधान सभा के सदस्य निर्वाचित। सन् 1980 में पुन: विधान सभा के लिए निर्वाचित और श्री अर्जुन सिंह के मंत्रिमंडल में उच्च शिक्षा, विज्ञान एवं टेक्नोलॉजी, परिवहन, स्थानीय शासन विभागों के मंत्री।  
        </p>
        <p style={styles.paragraph}>
          सन् 1985 में पुन: विधान सभा के सदस्य निर्वाचित होकर 13 मार्च, 1985 को मुख्यमंत्री पद की शपथ ग्रहण की। 1988-89 में राज्य सभा सदस्य एवं केंद्रीय स्वास्थ्य मंत्री। पुनः 25.01.1989 से 09.12.1989 तक मुख्यमंत्री। 1990 में विधान सभा सदस्य निर्वाचित।
        </p>
      </div>

      {/* Death Notice */}
      <div style={styles.card}>
        <p style={styles.deathNotice}>दिनांक 21 दिसम्बर, 2020 को दिवंगत।</p>
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
    minWidth: 200,
    color: colors.secondary,
  },
  infoValue: {
    flex: 1,
    color: "#333",
    fontWeight: "500",
  },
};

export default MotilalVoraPage;
