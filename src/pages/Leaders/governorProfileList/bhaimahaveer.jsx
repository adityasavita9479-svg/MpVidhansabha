import React from "react";

const BhaiMahavirPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-bhaimahavir.jpg" // Add the correct image in public/leaders
            alt="डॉ. भाई महावीर"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>डॉ. भाई महावीर</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>(दिनांक 22.04.1998 से 06.05.2003 तक)</div>
        </div>
      </div>

      {/* Personal & Family Info */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>व्यक्तिगत एवं पारिवारिक विवरण:</h2>
        <p style={styles.paragraph}>
          पिता का नाम: श्री भाई परमानंद <br />
          जन्मतिथि: 30 अक्टूबर, 1922 <br />
          जन्मस्थान: ग्राम-करयाला, जिला-जेहलम (वर्तमान पाकिस्तान) <br />
          वैवाहिक स्थिति: विवाहित <br />
          पत्नी का नाम: श्रीमती कृष्णाकुमारी <br />
          संतान: 2 पुत्रियां <br />
          शैक्षणिक योग्यता: एम.ए., एल.एल.बी., पी.एच.डी. <br />
          अभिरुचि: अध्ययन, अध्यापन तथा लेखन, समाज सेवा <br />
          स्थायी पता: डी/एस - 389, न्यू राजेन्द्र नगर, नई दिल्ली
        </p>

        {/* Political & Public Life */}
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन:</h2>
        <p style={styles.paragraph}>
          भारतीय जनसंघ के संस्थापक-महासचिव। तत्पश्चात् जनसंघ के अखिल भारतीय उपाध्यक्ष और 1968-69 में दिल्ली के प्रदेशाध्यक्ष। भारतीय जनता पार्टी की स्थापना के बाद उसकी राष्ट्रीय कार्यकारिणी के सदस्य। आपातकाल में 19 माह जेल में निरुद्ध। 
        </p>
        <p style={styles.paragraph}>
          पी.जी.डी.ए.वी. कॉलेज के प्राचार्य। 1968-1974 और 1978-1984 तक राज्यसभा के सदस्य। 1996 से भारतीय जनता पार्टी की केंद्रीय अनुशासन समिति के अध्यक्ष।
        </p>
        <p style={styles.paragraph}>
          22 अप्रैल 1998 से 06 मई 2003 तक मध्यप्रदेश के राज्यपाल।
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

export default BhaiMahavirPage;
