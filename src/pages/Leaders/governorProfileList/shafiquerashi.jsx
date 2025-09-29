import React from "react";

const MohammadShafiQuraishiPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-msqureshi.jpg" // Add the correct image in public/leaders
            alt="श्री मोहम्‍मद शफी कुरैशी"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री मोहम्‍मद शफी कुरैशी</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>(दिनांक 24.06.1993 से 21.04.1998 तक)</div>
        </div>
      </div>

      {/* Personal & Family Info */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>व्यक्तिगत एवं पारिवारिक विवरण:</h2>
        <p style={styles.paragraph}>
          पिता: स्व. श्री हाजी मोहम्‍मद अमीन कुरैशी <br />
          जन्मतिथि: 24 नवम्बर, 1929 <br />
          जन्मस्थान: श्रीनगर <br />
          शिक्षा: एम.ए., एल.एल.बी. <br />
          विवाहित: विवाहित <br />
          व्यवसाय: वकालत <br />
          अभिरुचि: पढ़ना, गोल्फ खेलना, प्राचीन भारतीय इतिहास <br />
          भाषाओं का ज्ञान: अंग्रेज़ी, पंजाबी, उर्दू, फारसी, अरबी, हिंदी तथा कश्मीरी <br />
          स्थायी पता: अराफत मंजिल, रावलपोरा, श्रीनगर (जम्मू एवं कश्मीर), क्यू 13, तारा अपार्टमेंट, अलकनंदा, नई दिल्ली
        </p>

        {/* Political & Public Life */}
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन:</h2>
        <p style={styles.paragraph}>
          छात्र जीवन में खेलकूद, सांस्कृतिक और शैक्षणिक गतिविधियों में सक्रिय। कॉलेज और विश्वविद्यालय की डिबेटिंग सोसायटी के अध्यक्ष। 1952-54 में अलीगढ़ मुस्लिम विश्वविद्यालय की स्टूडेंट कैबिनेट के सदस्य और लॉ सोसायटी के सचिव। 1954 में जियोग्राफिकल सोसायटी के उपाध्यक्ष, जम्मू एवं कश्मीर स्टूडेंट फेडरेशन के अध्यक्ष। 
        </p>
        <p style={styles.paragraph}>
          नेशनल कांग्रेस और जम्मू एवं कश्मीर नेशनल कांग्रेस के संस्थापक अध्यक्ष। भारतीय राष्ट्रीय कांग्रेस के सदस्य एवं 1977-79 में महासचिव। कई सामाजिक और सांस्कृतिक संगठनों में प्रमुख पद। 
        </p>
        <p style={styles.paragraph}>
          1965-67: राज्यसभा सदस्य, 1967-70: चौथी लोकसभा, 1971-77: पांचवीं लोकसभा, 1977-79: छठवीं लोकसभा। उपमंत्री और केंद्रीय राज्य मंत्री विभिन्न मंत्रालयों में। 
        </p>
        <p style={styles.paragraph}>
          1965-1976: कई अंतरराष्ट्रीय प्रतिनिधिमंडलों और देशों का दौरा। खेलकूद और सांस्कृतिक संगठनों से जुड़े। 19 मार्च 1991 से 13 अगस्त 1993 तक बिहार के राज्यपाल और दो बार पश्चिम बंगाल के कार्यवाहक राज्यपाल। 24 जून 1993 से 21 अप्रैल 1998 तक मध्यप्रदेश के राज्यपाल।
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

export default MohammadShafiQuraishiPage;
