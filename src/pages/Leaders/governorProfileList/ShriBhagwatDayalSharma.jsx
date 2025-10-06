import React from "react";

const ShriBhagwatDayalSharmaPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-bdsharma.jpg" // Add the correct image in public/leaders
            alt="श्री भगवत दयाल शर्मा"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री भगवत दयाल शर्मा</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>
            (दिनांक 30.4.1980 से 25.5.1981 तथा 10.7.1981 से 14.5.1984)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्म तिथि" value="26 जनवरी 1918" />
          <InfoRow label="जन्म स्थान" value="बेरो, जिला रोहतक" />
          <InfoRow
            label="शिक्षा"
            value="एम.ए. (बनारस हिन्दू यूनिवर्सिटी), डी.लिट. (Honoris causa) म‍हर्षि दयानंद विश्वविद्यालय रोहतक"
          />
          <InfoRow label="पत्नी" value="श्रीमती सावित्री देवी" />
          <InfoRow label="संतान" value="03 पुत्र, 03 पुत्रियां" />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम:
        </h2>
        <p style={styles.paragraph}>
          पूर्व में आप कांग्रेस और संगठन कांग्रेस से संबद्ध रहे। सन् 1941-46
          में आपने भारतीय स्वतंत्रता संग्राम में भाग लिया। आपने 1941 में 1
          वर्ष की जेल यात्रा की तथा सन् 1942 में साढ़े तीन वर्ष की जेल यात्रा
          की।
        </p>
        <p style={styles.paragraph}>
          सन् 1959-61 में आप क्षेत्रीय भारतीय राष्ट्रीय ट्रेड यूनियन कांग्रेस
          पंजाब, हिमाचल प्रदेश और जम्मूकश्मीर के सेक्रेटरी तथा प्रेसीडेंट
          रहे। 1959-65 में भारतीय राष्ट्रीय ट्रेड यूनियन कांग्रेस की राष्ट्रीय
          कार्यकारिणी के सदस्य रहे। सन् 1959 में वर्किंग कमेटी के सदस्य तथा
          1960-61 में संगठन सचिव रहे। सन् 1963 और 1964-66 में पंजाब प्रदेश
          कांग्रेस कमेटी तथा 1966 में हरियाणा प्रदेश कांग्रेस कमेटी के
          प्रेसीडेंट रहे। सन् 1968 में हरियाणा में संयुक्त मोर्चे के नेता
          निर्वाचित हुए। सन् 1970-71 में अखिल भारतीय (संगठन) कांग्रेस
          कमेटी की वर्किंग कमेटी के सदस्य रहे।
        </p>
        <p style={styles.paragraph}>
          सन् 1962-66 में पंजाब विधानसभा के सदस्य तथा श्रम और सहकारिता के राज्य
          मंत्री रहे। सन् 1966-67 में हरियाणा राज्य के मुख्यमंत्री रहे। सन्
          1968-74 में राज्यसभा के सदस्य रहे। मार्च-सितम्बर 1977 में छठवीं लोक
          सभा के सदस्य रहे। 23 सितम्बर, 1977 को आप उड़ीसा के राज्यपाल
          नियुक्त किये गये। उड़ीसा राज्य की अनेक सामाजिक और सांस्कृतिक
          संस्थाओं के संरक्षक रहे। जगन्नाथ मंदिर की प्रशासनिक कमेटी से सक्रिय
          रूप से संबद्ध रहे।
        </p>
        <p style={styles.paragraph}>
          सन् 1957 और 1958 में अंतर्राष्ट्रीय श्रम संगठन (जिनेवा), स्विट्जरलैण्ड
          में भारतीय श्रमिकों का प्रतिनिधित्व किया। सन् 1963-64 में यूनाइटेड
          किंगडम को जाने वाले ट्रेड यूनियनिस्ट के शिष्ट मंडल के सदस्य रहे। 
          दिनांक 30.4.1980 को आपने मध्यप्रदेश के राज्यपाल का पदभार ग्रहण किया। 
          आपने स्विट्जरलैंड, यूनाइटेड किंगडम, यू.एस.एस.आर., जर्मनी, अमेरिका तथा अन्य यूरोपीय देशों की यात्रा की।
        </p>

        <p style={styles.deathNotice}>
          आपका दिनांक 22.02.1993 को देहावसान हो गया।
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

export default ShriBhagwatDayalSharmaPage;
