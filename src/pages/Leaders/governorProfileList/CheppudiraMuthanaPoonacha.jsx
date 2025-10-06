import React from "react";

const CMPoonachaPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-cmpunacha.jpg" // Place image in public/leaders
            alt="श्री चेप्पुदिरा मुथाना पुनाचा"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री चेप्पुदिरा मुथाना पुनाचा</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>
            (17/08/1978 – 29/04/1980)
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>व्यक्तिगत विवरण:</h2>
        <p style={styles.paragraph}>
          जन्म तिथि: 16 सितम्बर 1910 <br />
          जन्म स्थान: ग्राम उत्तूर, दक्षिण कुर्ग <br />
          शिक्षा: कुर्ग में मरकरा एवं विराजपेट तथा सेंट अलायसिस कॉलेज, मंगलौर <br />
          संतान: 2 पुत्र एवं 2 पुत्रियां <br />
          देहावसान: 3 अगस्त, 1990
        </p>

        {/* Career & Achievements */}
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन:</h2>
        <p style={styles.paragraph}>
          - विद्यार्थी जीवन से ही स्वतंत्रता आंदोलन में सक्रिय। 1930 में पढ़ाई छोड़कर स्वतंत्रता संग्राम में शामिल हुए। <br />
          - 1932 और 1933 में दो बार कारावास, 1940-41 में सत्याग्रह आंदोलन हेतु कारावास, 1942-44 में 'भारत छोड़ो आंदोलन' में नजरबंद। <br />
          - 1933: कुर्ग जिला कांग्रेस कमेटी के सचिव। <br />
          - 1938: प्रांतीय कांग्रेस कमेटी कार्यकारिणी एवं एआईसीसी सदस्य, कुर्ग जिला बोर्ड में निर्वाचित और 1941 में अध्यक्ष। <br />
          - 1945-51: कुर्ग विधान परिषद् सदस्य एवं कांग्रेस विधायक दल के नेता। <br />
          - 1947-51: संविधान सभा सदस्य एवं अस्थायी संसद सदस्य। <br />
          - 1952-56: कुर्ग के मुख्यमंत्री। <br />
          - 1956: उद्योग एवं वाणिज्य मंत्री, बाद में गृह कार्य व उद्योग मंत्री, मैसूर राज्य। <br />
          - 1959-63: भारतीय व्यापार निगम के सभापति। <br />
          - 1960: भारत सरकार के व्यापार प्रतिनिधिमंडल के नेता (यूरोप यात्रा)। <br />
          - 1961: जापान यात्रा, राज्य व्यापार निगम प्रतिनिधिमंडल के नेता। <br />
          - 1964: राज्य सभा सदस्य निर्वाचित। <br />
          - 1966 (जनवरी): वित्त मंत्रालय में राज्यमंत्री। <br />
          - 25 जनवरी 1966 – 12 मार्च 1967: परिवहन, उद्वहन, नौवहन एवं पर्यटन राज्यमंत्री। <br />
          - 13 मार्च 1967 – 1969: रेलवे मंत्री। <br />
          - विदेश यात्राएं: जापान, चेकोस्लोवाकिया, रोमानिया, हंगरी और यूगोस्लाविया। <br />
          - 17 अगस्त 1978 – 29 अप्रैल 1980: मध्यप्रदेश के राज्यपाल।
        </p>
      </div>
    </div>
  );
};

// SAME CSS as others
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

export default CMPoonachaPage;
