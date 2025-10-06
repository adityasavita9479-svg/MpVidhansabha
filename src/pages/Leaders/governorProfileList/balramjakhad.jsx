import React from "react";

const BalramJakharPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-jakhar.jpg" // Add the correct image in public/leaders
            alt="डॉ. बलराम जाखड़"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>डॉ. बलराम जाखड़</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>
            (दिनांक 30.06.2004 से 29.06.2009 तक)
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>व्यक्तिगत विवरण:</h2>
        <p style={styles.paragraph}>
          पिता का नाम: स्व. चौधरी श्री राजाराम जाखड़ <br />
          जन्मतिथि: 23 अगस्त, 1923 <br />
          जन्मस्थान: पंजकोसी, जिला-फिरोजपुर (पंजाब) <br />
          वैवाहिक स्थिति: विवाहित <br />
          पत्नी: स्व. श्रीमती रामेश्वरी देवी <br />
          संतान: 3 पुत्र, 2 पुत्रियां <br />
          शैक्षणिक योग्यता: स्नातक (संस्कृत ऑनर्स) <br />
          अभिरुचि: खेलकूद, कृषि, अध्ययन <br />
          स्थायी पता: ग्राम-पंजकोसी, जिला फिरोजपुर (पंजाब)
        </p>

        {/* Career & Achievements */}
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन:</h2>
        <p style={styles.paragraph}>
          - 1972: पंजाब विधान सभा के सदस्य निर्वाचित एवं मंत्रिमंडल में उप मंत्री। <br />
          - 1977: पुनः सदस्य निर्वाचित एवं विपक्ष के नेता। <br />
          - 1975: फलोद्यान में विशिष्ट उपलब्धियों हेतु "उद्यान पंडित" राष्ट्रीय पुरस्कार। <br />
          - हरियाणा कृषि विश्वविद्यालय, हिसार और गुरूकुल कांगड़ी विश्वविद्यालय, हरिद्वार द्वारा क्रमशः "डॉक्टर ऑफ साइंस" एवं "विद्या मार्तंड" की मानद उपाधि। <br />
          - 1980 एवं 1984: लोक सभा के सदस्य एवं लगातार दो बार अध्यक्ष, लोक सभा। <br />
          - 1984: राष्ट्रमंडल संसदीय संघ की कार्यकारिणी के अध्यक्ष निर्वाचित। <br />
          - भारत कृषक समाज के आजीवन अध्यक्ष। <br />
          - जलियांवाला बाग मेमोरियल ट्रस्ट की प्रबंध समिति के अध्यक्ष। <br />
          - 1990-92: ऑल इंडिया कांग्रेस कमेटी (इ) के महासचिव। <br />
          - 1991: लोक सभा सदस्य एवं कृषि विभाग मंत्री। <br />
          - 1998: पुनः लोक सभा सदस्य। <br />
          - विभिन्न संसदीय समितियों के सभापति एवं सदस्य। <br />
          - अनेक देशों की यात्रा। <br />
          - "पीपल, पार्लियामेंट एंड एडमिनिस्ट्रेशन" और "न्यू हॉराइजन्स इन एग्रीकल्चर इन इंडिया" सहित विभिन्न विषयों पर लेख प्रकाशित।
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

export default BalramJakharPage;
