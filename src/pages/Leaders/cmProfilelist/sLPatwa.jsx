import React from "react";

const ShriSundarlalPatwaPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/cm-sunderlalpatwa.jpg" // Place image in public/leaders
            alt="श्री सुंदरलाल पटवा"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री सुंदरलाल पटवा</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व मुख्‍यमंत्री, मध्यप्रदेश)
          </h3>
          <div style={styles.tenure}>
            षष्‍टम् विधानसभा (1977-1980) एवं नवम् विधानसभा (1990-1992) <br />
            (दिनांक 20.01.1980 से 17.02.1980 एवं 05.03.1990 से 15.12.1992 तक)
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>व्यक्तिगत विवरण</h2>
        <p style={styles.paragraph}>
          पिता: श्री मन्नालाल पटवा <br />
          जन्मतिथि: 11 नवम्बर, 1924 <br />
          जन्म स्थान: कुकड़ेश्वर <br />
          वैवाहिक स्थिति: विवाहित <br />
          व्यवसाय: कृषि <br />
          अभिरुचि: खेलकूद, संगीत, सहकारिता, उद्योग <br />
          भाषाओं का ज्ञान: हिन्दी, अंग्रेजी <br />
          स्थायी पता: कुकड़ेश्वर, जिला मंदसौर (म.प्र.)
        </p>
      </div>

      {/* Political Career */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन</h2>
        <p style={styles.paragraph}>
          1941 से इन्दौर राज्य प्रजा मण्डल एवं 1942 से राष्ट्रीय स्वयंसेवक संघ से संबद्ध।  
          1947-1951 संघ प्रचारक, 1948 में संघ आंदोलन में सात माह जेल यात्रा। 1951 से जनसंघ के सक्रिय कार्यकर्ता।  
          1957-1967 विधान सभा सदस्य एवं विरोधी दल के मुख्य सचेतक। 1967-1974 जिला सहकारी बैंक के अध्यक्ष; संचालक, राज्य सहकारी बैंक एवं राज्य सहकारी विपणन संघ।  
          प्रदेश जनसंघ के कोषाध्यक्ष। 1974 में ब्रिटेन के आम चुनावों का अध्ययन और गणमान्य लोगों से भेंट।  
          1975 में म.प्र. जनसंघ के महामंत्री। 27 जून, 1975 से 28 जनवरी, 1977 तक आपातकाल में मीसा में निरुद्ध। जनता पार्टी कार्य समिति के सदस्य।  
          1977 में विधान सभा सदस्य निर्वाचित, 20 जनवरी, 1980 से 17 फरवरी, 1980 तक प्रदेश के मुख्यमंत्री।  
          1980 में सीहोर से विधान सभा सदस्य निर्वाचित, भाजपा नेता एवं सदन में विरोधी दल के नेता। विधान सभा की विभिन्न समितियों के सदस्य तथा लोक लेखा समिति के अध्यक्ष।  
          1980 में तीन माह संयुक्त राज्य अमेरिका का भ्रमण एवं राष्ट्रपति चुनाव का अनुभव।  
          1985 में पुन: विधान सभा सदस्य चुने गए; लोक लेखा समिति के अध्यक्ष एवं सामान्य प्रयोजन समिति के सदस्य।  
          1986 से भाजपा के प्रदेशाध्यक्ष। वर्ष 1989 में अखिल भारतीय पीठासीन अधिकारी सम्मेलन में 'विधान गौरव' उपाधि।  
          1990 में विधान सभा सदस्य एवं 05.03.1990 से 15.12.1992 तक मुख्यमंत्री।  
          1993 में पुनः विधान सभा सदस्य निर्वाचित। ग्यारहवीं लोकसभा सदस्य बनने के कारण 19.02.1997 को विधान सभा की सदस्यता से त्यागपत्र।  
          1998 में ग्यारहवीं विधान सभा सदस्य निर्वाचित। तेरहवीं लोकसभा सदस्य निर्वाचित होने से 17.10.1999 को विधान सभा की सदस्यता से त्यागपत्र।  
          केंद्र सरकार में: 13.10.1999 से 30.09.2000 ग्रामीण विकास विभाग, 30.09.2000 से 07.11.2000 रसायन एवं उर्वरक विभाग, 07.11.2000 से 01.09.2001 खनिज विभाग के मंत्री।
        </p>
      </div>

      {/* Death */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>अंतिम समाचार</h2>
        <p style={styles.deathNotice}>
          दिनांक 28 दिसम्बर, 2016 को आपका देहावसान हो गया।
        </p>
      </div>
    </div>
  );
};

// Styles (same as previous components)
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
    marginTop: 10,
  },
};

export default ShriSundarlalPatwaPage;
