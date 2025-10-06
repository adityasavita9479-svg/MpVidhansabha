import React from "react";

const ShriGovindNarayanSinghPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/cm-govindnarayan.jpg" // Place image in public/leaders
            alt="श्री गोविन्‍द नारायण सिंह"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री गोविन्‍द नारायण सिंह</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व मुख्‍यमंत्री, मध्यप्रदेश)
          </h3>
          <div style={styles.tenure}>
            चतुर्थ विधान सभा (1967-1972) <br />
            (दिनांक 30.07.1967 से 12.03.1969 तक)
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्म तिथि" value="25. जुलाई, 1920" />
          <InfoRow label="जन्म स्थान" value="रामपुर बघेलान" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित (मई-1945)" />
          <InfoRow label="पत्नी का नाम" value="श्रीमती पद्यावती देवी" />
          <InfoRow label="संतान" value="5 पुत्र, 1 पुत्री" />
          <InfoRow label="शैक्षणिक योग्यता" value="एम.ए., एल.एल.बी." />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :</h2>

        <p style={styles.paragraph}>
          1941 में आतंककारी कार्य के लिये नजरबन्‍द, 1942 के अगस्त आंदोलन से 1944 तक कारावास। 1946 से 1947 के अंत तक बनारस हिंदू विश्वविद्यालय में लेक्चरार तथा शोध कार्य।  
          सन् 1948 में भारतीय प्रशासन सेवा के लिये चुने जाकर विन्ध्यप्रदेश सरकार में असिस्टेंट रीजनल कमिश्नर के पद पर नियुक्ति और कार्यभार ग्रहण करने के दूसरे दिन ही पद त्याग। विद्यार्थी जीवन से ही बनारस में 1941 से 1946 तक विद्यार्थी संघ और विद्यार्थी कांग्रेस के अध्यक्ष।  
          1952 के सामान्य निर्वाचन में विन्ध्यप्रदेश विधान सभा सदस्य निर्वाचित। 1953 से 1957 तक विन्ध्यप्रदेश कांग्रेस कमेटी के अध्यक्ष। विधान सभा सदस्य के रूप में जागीरदारी उन्मूलन समिति, भू-राजस्व समिति, लोक लेखा समिति एवं अन्य विभिन्न समितियों में कार्य।  
          मध्‍यप्रदेश विधान सभा की सदस्यता में 1957 से 1959 तक लोक लेखा समिति के सभापति। इसके पश्चात् याचिका समिति के सभापति। उपमंत्री बनने पर सभापति पद से त्यागपत्र। प्रदेश कांग्रेस की चुनाव समिति के सदस्य।  
          15 अगस्त 1960 से उप मंत्री, तत्पश्चात् उप गृह मंत्री तथा 27 मई 1963 से उप मंत्री लोक कार्य (सिंचाई)। 30 सितंबर 1963 से स्थानीय शासन मंत्री। संविद शासन काल में मुख्‍यमंत्री, मध्यप्रदेश।
        </p>

        <p style={styles.deathNotice}>
          दिनांक 10.05.2005 को आपका देहावसान हो गया।
        </p>
      </div>
    </div>
  );
};

// Reusable InfoRow
const InfoRow = ({ label, value }) => (
  <div style={styles.infoRow}>
    <span style={styles.infoLabel}>{label}:</span>
    <span style={styles.infoValue}>{value}</span>
  </div>
);

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

export default ShriGovindNarayanSinghPage;
