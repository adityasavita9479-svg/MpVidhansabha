import React from "react";

const RamNareshYadavPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-rnyadav.jpg" // Place image in public/leaders
            alt="श्री राम नरेश यादव"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री राम नरेश यादव</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>
            (दिनांक 08.09.2011 से 07.09.2016 तक)
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>व्यक्तिगत विवरण:</h2>
        <p style={styles.paragraph}>
          पिता का नाम: स्व. श्री गया प्रसाद यादव <br />
          जन्मतिथि: 1 जुलाई, 1928 <br />
          जन्मस्थान: ग्राम-आंधीपुर (अंबारी), जिला-आजमगढ़ (उ.प्र.) <br />
          वैवाहिक स्थिति: विवाहित <br />
          पत्नी: स्व. श्रीमती अनारीदेवी उर्फ श्रीमती शांति देवी यादव <br />
          संतान: 3 पुत्र, 5 पुत्रियां <br />
          शैक्षणिक योग्यता: एम.ए., एल.एल.बी. <br />
          अभिरुचि: अध्ययन एवं लेखन <br />
          स्थायी पता: मोहल्ला अलवल, आजमगढ़ (उ.प्र.) <br />
          स्थानीय पता: राजभवन, भोपाल (म.प्र.)
        </p>

        {/* Career & Achievements */}
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन:</h2>
        <p style={styles.paragraph}>
          - छात्र जीवन से समाजवादी विचारधारा से प्रभावित। <br />
          - चिंतामणि एंग्लो बंगाली इंटरमीडिएट कॉलेज, वाराणसी में तीन वर्ष तक प्रवक्ता एवं पट्टी नरेन्द्रपुर इंटर कॉलेज, जौनपुर में प्रवक्ता। <br />
          - 1953 में आजमगढ़ में वकालत। <br />
          - विभिन्‍न आंदोलनों में अनेक बार गिरफ्तार एवं आपातकाल (जून 1975 – फरवरी 1977) में मीसा में निरुद्ध। <br />
          - 1978-79, 1985-1988 एवं 1996-2007: उत्तर प्रदेश विधान सभा के सदस्य। <br />
          - 23 जून 1977 से 15 फरवरी 1979 तक उत्तर प्रदेश के मुख्यमंत्री। <br />
          - 1977: छठी लोक सभा, 1988-1994: राज्य सभा के सदस्य। <br />
          - विभिन्न संसदीय एवं विभागीय समितियों के सदस्य, संसदीय दल के उप नेता। <br />
          - 1989 से कांग्रेस के सदस्य। <br />
          - अखिल भारतीय राजीव ग्राम्य विकास मंच, अखिल भारतीय खादी ग्रामोद्योग कर्मचारी यूनियन और कोयला मजदूर संगठन कांग्रेस के राष्ट्रीय अध्यक्ष। <br />
          - बनारस हिंदू विश्वविद्यालय की कार्यकारी परिषद के सदस्य। <br />
          - अखिल भारतीय अन्य पिछड़ा वर्ग (OBC) रेलवे कर्मचारी महासंघ के राष्ट्रीय अध्यक्ष। <br />
          - जनता इंटर कॉलेज, अंबारी (आजमगढ़) के प्रबंधक और गांधी गुरूकुल इंटर कॉलेज, भंवरनाथ (आजमगढ़) की प्रबंध समिति के अध्यक्ष। <br />
          - इंडियन काउंसिल ऑफ एग्रीकल्चरल रिसर्च की जनरल और गवर्निंग बॉडी के सदस्य। <br />
          - 8 सितंबर, 2011 से 7 सितंबर, 2016 तक मध्यप्रदेश के राज्यपाल।
        </p>
      </div>
    </div>
  );
};

// Shared Styles (same as previous governor pages)
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

export default RamNareshYadavPage;
