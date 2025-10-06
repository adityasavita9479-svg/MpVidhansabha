import React from "react";

const NarbadaPrasadShrivastavPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/up-NB_shrivastava.jpg" // ✅ Replace with correct image path
            alt="श्री नरबदा प्रसाद श्रीवास्‍तव"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री नरबदा प्रसाद श्रीवास्‍तव</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व उपाध्‍यक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={styles.tenure}>
            तृतीय (1962-67) एवं चतुर्थ (1967-72) विधान सभा <br />
            (04.07.1962 से 28.02.1967) एवं (05.04.1967 से )
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्‍मतिथि" value="20 अगस्त, 1926" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="शैक्षणिक योग्‍यता" value="एम.ए., एल.एल.बी." />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={styles.paragraph}>
          विद्यार्थी जीवन से ही राष्‍ट्रीय विचार व समाजवादी धारा के समर्थक रहे। 
          सन् 1942 के आंदोलन में सक्रिय रूप से कार्यरत रहे। किसान मजदूर प्रजा 
          पार्टी के प्रांतीय स्‍थाई मंत्री रहे। प्रजा सोशलिस्‍ट पार्टी की प्रांतीय 
          कार्यकारिणी के सदस्‍य व सहमंत्री वर्षों तक रहे। सन् 1962 से 1977 तक विधान 
          सभा सदस्‍य रहे। सन् 1962 में विधान सभा के विरोधी दल की ओर से विधान सभा 
          के उपाध्‍यक्ष चुने गये। चतुर्थ विधान सभा में दिनांक 5.4.1967 को पुन: उपाध्यक्ष निर्वाचित।
        </p>

        <p style={styles.paragraph}>
          संविद काल में लोक निर्माण विभाग, विधि विभाग और पुनर्वास विभाग के मंत्री रहे। 
          विधान सभा की लोक लेखा समिति के सभापति रहे। जबलपुर विश्वविद्यालय कोर्ट 
          तथा ऐकेडमिक काउन्सिल के सदस्‍य रहे। जबलपुर कृषि विश्वविद्यालय की सलेक्‍ट 
          समिति के सभापति रहे। नेशनल लोन्‍स स्‍कालरशिप कमेटी के सदस्‍य रहे। शासन द्वारा 
          प्रोबेशन ऑफीसर के पद पर नियुक्ति की गई। रविशंकर विश्वविद्यालय रायपुर की 
          प्रवर समिति के सभापति रहे। लोक लेखा समिति के प्रतिवेदन पर पार्लियामेन्‍ट्री 
          एसोसिएशन द्वारा प्रशंसनीय कार्य के लिए सराहना की गई थी।
        </p>

        <p style={styles.paragraph}>
          अस्‍पृश्‍यता निवारण, सहकारिता आंदोलन, भूमि सुधार, साम्‍प्रदायिकता, मेलजोल 
          जैसे अनेकों महत्‍वपूर्ण राष्‍ट्रीय व समाजवादी विचारधारा के कार्यक्रमों में 
          सक्रिय भाग लेते रहे। ग्रामदान विधेयक की प्रवर समिति के सभापति रहे। 
          विधान सभा कार्यप्रणाली पुस्‍तक निर्माण समिति तथा विधान सभा सचिवालय 
          पुनर्गठन समिति के सदस्‍य रहे। सन् 1972 के आम चुनाव में लांजी निर्वाचन क्षेत्र 
          से विधान सभा के सदस्‍य निर्वाचित हुए तथा विधान सभा के निर्दलीय विधायक दल के 
          नेता तथा सरकारी उपक्रमों संबंधी समिति के सदस्‍य रहे। 1985 में आठवीं 
          विधान सभा के सदस्‍य निर्वाचित।
        </p>

        <p style={styles.paragraph}>
          दिनांक 18 मई, 2007 को आपका देहावसान हो गया।
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

// CSS / Styles (reuse from previous components)
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
  infoRow: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  infoLabel: {
    fontWeight: "700",
    marginRight: 6,
    minWidth: 150,
    color: colors.secondary,
  },
  infoValue: {
    flex: 1,
    color: "#333",
    fontWeight: "500",
  },
};

export default NarbadaPrasadShrivastavPage;
