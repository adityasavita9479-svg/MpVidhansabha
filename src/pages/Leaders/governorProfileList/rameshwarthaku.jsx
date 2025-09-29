import React from "react";

const RameshwarThakurPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv_thakur.jpg" // Place image in public/leaders
            alt="श्री रामेश्वर ठाकुर"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री रामेश्वर ठाकुर</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>
            (दिनांक 30.06.2009 से 07.09.2011 तक)
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>व्यक्तिगत विवरण:</h2>
        <p style={styles.paragraph}>
          पिता का नाम: स्व. पंडित धोधन ठाकुर (उर्फ श्री परमेश्वर ठाकुर) <br />
          जन्मतिथि: 28 जुलाई, 1927 <br />
          जन्मस्थान: ग्राम, पोस्ट, थाना, प्रखंड - ठाकुर गंगटी, जिला-मोड्डा (झारखंड) <br />
          वैवाहिक स्थिति: विवाहित <br />
          पत्नी: श्रीमती नर्मदा ठाकुर <br />
          संतान: 2 पुत्र, 2 पुत्रियां <br />
          शैक्षणिक योग्यता: एम.ए., एल.एल.बी., एफ.सी.ए. <br />
          अभिरुचि: शिक्षा, समाजसेवा, ग्रामीण विकास, आदिवासी उत्थान <br />
          स्थायी पता: 
          <ul>
            <li>ग्राम, पोस्ट, थाना, प्रखंड- ठाकुर गंगटी, जिला-गोड्डा (झारखंड)</li>
            <li>ए-4, आनंद निकेतन, नई दिल्ली-110021</li>
          </ul>
        </p>

        {/* Career & Achievements */}
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन:</h2>
        <p style={styles.paragraph}>
          - 1942: भारत छोड़ो आंदोलन में सक्रिय, संथाल परगना (झारखंड) के राजमहल हिल्स में लगभग छह माह भूमिगत। <br />
          - स्वतंत्रता आंदोलन में भाग लेने के कारण सेंट्रल जेल कोलकाता (दमदम) में निरुद्ध। <br />
          - 1955-60: सिटी कॉलेज, कोलकाता विश्वविद्यालय में लेक्चरर। <br />
          - 1960-73: दिल्ली विश्वविद्यालय में विजिटिंग प्रोफेसर, डिपार्टमेंट ऑफ मैनेजमेंट स्टडीज। <br />
          - संस्थापक सचिव: इंदिरा गांधी अवार्ड फॉर नेशनल इंटीग्रेशन एवं राजीव गांधी सद्भावना अवार्ड। <br />
          - संस्थापक न्यासी: गदाधर मिश्रा स्मारक निधि एवं हरि देवी स्मारक निधि। <br />
          - 1964-70: इंस्टीट्यूट ऑफ चार्टर्ड एकाउंटेंट्स ऑफ इंडिया काउंसिल सदस्य एवं 1966-67 में प्रेसीडेंट। <br />
          - अध्यक्ष: इंडियन फेलोशिप ऑफ फारमर स्काउट्स एंड गाइड्स, अखिल भारतीय स्काउट्स एंड गाइड्स। <br />
          - 1978-82: भारत सरकार के बैंकिंग कमीशन द्वारा गठित अध्‍ययन दल के चेयरमेन। <br />
          - विभिन्न संस्थानों के निदेशक/अध्यक्ष: यूनिट ट्रस्ट ऑफ इंडिया, पंजाब नेशनल बैंक, एक्सपोर्ट क्रेडिट गारंटी कार्पोरेशन, पंजाब-हरियाणा और दिल्ली चेंबर्स ऑफ कॉमर्स, संजय गांधी मेमोरियल ट्रस्ट, एमडीआई गुड़गांव। <br />
          - 1984-96: राज्य सभा सदस्य, विशेषाधिकार एवं लोक लेखा समिति सदस्य। <br />
          - जून 1991-दिसंबर 1994: भारत सरकार में वित्त (राजस्व), ग्रामीण विकास एवं संसदीय कार्य राज्य मंत्री। <br />
          - 2004-2007: उड़ीसा, आंध्रप्रदेश और कर्नाटक के राज्यपाल। <br />
          - 30 जून 2009 से 07.09.2011: मध्यप्रदेश के राज्यपाल। <br />
          - अनेक देशों की यात्राएं एवं अंतरराष्ट्रीय प्रतिनिधिमंडलों में नेतृत्व।
        </p>
      </div>
    </div>
  );
};

// Shared Styles (Same as previous governors)
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
};

export default RameshwarThakurPage;
