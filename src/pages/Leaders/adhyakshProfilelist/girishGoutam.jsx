import React from "react";

const GirishGautamPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/sp-girishgautam.jpg" // ✅ इमेज का सही path डालें
            alt="श्री गिरीश गौतम"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री गिरीश गौतम</h1>
          <h3 style={styles.topSubtitle}>
            (पूर्व अध्यक्ष, मध्यप्रदेश विधानसभा)
          </h3>
          <div style={styles.tenure}>
            (22.02.2021 से 14.12.2023)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="पिता का नाम" value="स्व. श्री तीरथ प्रसाद गौतम" />
          <InfoRow label="जन्‍मतिथि" value="28 मार्च, 1953" />
          <InfoRow label="जन्‍म स्‍थान" value="ग्राम करौदी, जिला-रीवा" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्‍नी का नाम" value="श्रीमती ललिता गौतम" />
          <InfoRow label="संतान" value="एक पुत्र, दो पुत्रियाँ" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.एस-सी., एल-एल.बी." />
          <InfoRow label="व्यवसाय" value="कृषि" />
          <InfoRow
            label="अभिरूचि"
            value="अध्ययन, खेल, सामाजिक कार्य"
          />
          <InfoRow
            label="स्‍थायी पता"
            value={`(1) ग्राम-करौदी, पो.-डेल्ही वाया मनगवां, जिला-रीवा (म.प्र.) 
(2) मोहल्ला उर्रहट, जिला-रीवा (म.प्र.)`}
          />
          <InfoRow label="स्‍थायी दूरभाष" value="(07662) 242015" />
          <InfoRow label="स्थानीय पता" value="" />
          <InfoRow label="स्थानीय दूरभाष" value="" />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={styles.paragraph}>
          1972 से छात्र राजनीति में सक्रिय. 1977 से लगातार कृषकों एवं श्रमिकों
          के लिए संघर्ष. सन् 2003 में बारहवीं विधान सभा के सदस्‍य निर्वाचित. लोक
          लेखा, महिला एवं बाल कल्‍याण, अ.जा., अ.ज.जा. तथा पिछड़ा वर्ग कल्‍याण
          समिति के सदस्‍य. माध्‍यमिक शिक्षा मंडल एवं गृह, विमानन तथा शिक्षा
          विभाग की सलाहकार समितियों के सदस्‍य. सन् 2008 में तेरहवीं विधान सभा
          के सदस्‍य निर्वाचित. प्राक्‍कलन समिति, विशेषाधिकार समिति, सार्वजनिक
          उपक्रम समिति के सभापति एवं लोक लेखा, अ.जा., अ.ज.जा. तथा पिछड़े
          वर्ग के कल्‍याण एवं महिलाओं और बालकों के कल्‍याण संबंधी समिति के
          सदस्‍य.
        </p>

        <p style={styles.paragraph}>
          सन् 2013 में चौदहवीं विधान सभा के सदस्‍य निर्वाचित. 2014-2015 में
          सदस्‍य, लोकलेखा समिति, 2015-2018 में सभापति प्राक्‍कलन समिति, 2017-2018
          में विशेष आमंत्रित सदस्‍य लोक लेखा समिति. जवाहर लाल नेहरू कृषि
          विश्‍वविद्यालय जबलपुर की प्रबंध सभा के सदस्‍य. 2016 में उत्‍तर मध्‍य
          रेल्‍वे परामर्शदात्री समिति के सदस्‍य. देवतालाब एवं नईगढ़ी महाविद्यालयों
          की जनभागीदारी समिति के सदस्‍य. शिक्षा से संबंधित परामर्शदात्री समितियों
          के सदस्‍य. सन् 2018 में चौथी बार विधान सभा सदस्‍य निर्वाचित. दिनांक 22
          फरवरी, 2021 से 14 दिसम्बर, 2023 तक अध्‍यक्ष, मध्‍यप्रदेश विधान सभा.
          सन् 2023 में पाँचवीं बार विधान सभा सदस्‍य निर्वाचित.
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

// CSS / Styles same as other pages
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

export default GirishGautamPage;
