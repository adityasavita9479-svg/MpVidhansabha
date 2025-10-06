import React from "react";

const RamPrakashGuptaPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-rpgupta.jpg" // Add the correct image in public/leaders
            alt="श्री राम प्रकाश गुप्‍त"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री राम प्रकाश गुप्‍त</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>(दिनांक 07.05.2003 से 01.05.2004 तक)</div>
        </div>
      </div>

      {/* Personal Info */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>व्यक्तिगत विवरण:</h2>
        <p style={styles.paragraph}>
          पिता का नाम: श्री गोपाल कृष्ण गुप्‍त <br />
          जन्मतिथि: 26 अक्टूबर, 1923 <br />
          जन्मस्थान: ग्राम सुकवां-ढुकवां, जिला-झांसी (उत्तर प्रदेश) <br />
          वैवाहिक स्थिति: विवाहित <br />
          शैक्षणिक योग्यता: एम.एस.सी.
        </p>

        {/* Political & Public Life */}
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन:</h2>
        <p style={styles.paragraph}>
          विद्यार्थी जीवन से राष्ट्रीय स्वयं सेवक संघ से संबद्ध एवं शिक्षा उपरांत संघ कार्यों में सक्रिय। अध्ययन के दौरान बलिया जिले में स्वतंत्रता आंदोलन में भाग लिया। 1946 से राष्ट्रीय स्वयं सेवक संघ के प्रचारक। 
          1948 में संघ पर प्रतिबंध हटाने के लिए सत्याग्रह एवं जेल यात्रा। 1954 में गौ हत्या निरोध समिति के आंदोलन में सत्याग्रह का संचालन। 1956 में उत्तर प्रदेश जनसंघ मध्य क्षेत्र के संगठन मंत्री। 
        </p>
        <p style={styles.paragraph}>
          1960 में लखनऊ महानगर पालिका में जनसंघ दल के नेता निर्वाचित एवं 1964 में इसके उप नगर प्रमुख निर्वाचित। 1964 में उत्तर प्रदेश विधान परिषद के सदस्य चुने गए और संसदीय कार्यों के मंत्री रहे। 
          1967 में उत्तर प्रदेश के उप मुख्यमंत्री और शिक्षा मंत्री। 1973 में भारतीय जनसंघ उत्तर प्रदेश के अध्यक्ष निर्वाचित। 1975 में आपातकाल में मीसा में निरुद्ध। 1977 में लखनऊ मध्य क्षेत्र से विधान सभा सदस्य निर्वाचित एवं मंत्रिमंडल में उद्योग मंत्री बने। 
        </p>
        <p style={styles.paragraph}>
          1993 में पुनः विधान सभा सदस्य निर्वाचित। 11 मार्च, 1998 से उत्तर प्रदेश राज्य योजना मंडल के उपाध्यक्ष। 1999 में उत्तर प्रदेश के मुख्यमंत्री बने एवं ग्यारह माह इस पद पर रहे। 
        </p>
        <p style={styles.paragraph}>
          दिनांक 07 मई, 2003 से 01 मई, 2004 तक मध्यप्रदेश के राज्यपाल रहे। आपका दिनांक 01.05.2004 को देहावसान हो गया।
        </p>
      </div>
    </div>
  );
};

// Shared Styles
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

export default RamPrakashGuptaPage;
