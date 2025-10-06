import React from "react";

const NarmadaPrasadPrajapatiPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/sp-npprajapati.jpg" // ✅ यहां अपनी इमेज का सही path डालें
            alt="श्री नर्मदा प्रसाद प्रजापति"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री नर्मदा प्रसाद प्रजापति (एन. पी.)</h1>
          <h3 style={styles.topSubtitle}>
            (पूर्व अध्यक्ष, मध्यप्रदेश विधानसभा)
          </h3>
          <div style={styles.tenure}>
            (08.01.2019 - 23.03.2020)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="पिता का नाम" value="श्री संतराम प्रजापति" />
          <InfoRow label="जन्‍मतिथि" value="12 सितम्बर, 1958" />
          <InfoRow label="जन्‍म स्‍थान" value="कन्देली, जिला-नरसिंहपुर" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्‍नी का नाम" value="श्रीमती प्रमिला प्रजापति" />
          <InfoRow label="संतान" value="दो पुत्र" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., एलएल.बी. (आनर्स)" />
          <InfoRow label="व्यवसाय" value="कृषि" />
          <InfoRow label="अभिरूचि" value="चिंतन" />
          <InfoRow
            label="स्‍थायी पता"
            value={`(1) बुढ़ार रोड, गणेश मंदिर के पास, जिला-शहडोल (म.प्र.) 
(2) इतवारा बाजार, कन्देली, जिला-नरसिंहपुर (म.प्र.)`}
          />
          <InfoRow label="स्‍थायी दूरभाष" value="07792-230386" />
          <InfoRow
            label="स्‍थानीय पता"
            value="बी -9, चार इमली, भोपाल."
          />
          <InfoRow
            label="स्‍थानीय दूरभाष"
            value="0755-2440402, 2440694 | Fax - 2440315"
          />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={styles.paragraph}>
          स्कूल शिक्षा डेली कॉलेज इंदौर में हुई. 1976-1982 में इंदौर
          विश्र्वविद्यालयीन एवं महाविद्यालयीन हॉकी टीम के गोलकीपर. 1980-81 में
          इंदौर विश्र्वविद्यालय में खेल प्रतिनिधि के रूप में महासभा सदस्‍य निर्वाचित.
          1982 में इंदौर विश्र्वविद्यालय की हॉकी टीम के कैप्‍टन. 1983 में भा.रा.
          छात्र संगठन के जिलाध्‍यक्ष. 1985 में आठवीं एवं 1993 में दसवीं विधान सभा
          के सदस्‍य निर्वाचित. दसवीं विधान सभा अवधि में राज्‍यमंत्री (स्‍वतंत्र
          प्रभार) ऊर्जा विभाग. 1993-98 में विधान सभा द्वारा उत्‍कृष्‍ट मंत्री
          पुरस्‍कार एवं 1996-97 में राजीव गांधी सद्भावना पुरस्‍कार से सम्‍मानित.
        </p>

        <p style={styles.paragraph}>
          1996-97 से वर्तमान तक म.प्र. प्रजा‍पति (कुंभकार) संघ के अध्‍यक्ष. 1998
          में प्रदेश कांग्रेस के महामंत्री एवं 2008 में कोषाध्‍यक्ष. 2008 में
          तेरहवीं विधान सभा के सदस्य निर्वाचित. सन् 2018 में चौथी बार विधान सभा
          सदस्‍य निर्वाचित.  
          दिनांक 8 जनवरी, 2019 से 23 मार्च, 2020 तक अध्‍यक्ष, मध्‍यप्रदेश विधान सभा रहे.
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

export default NarmadaPrasadPrajapatiPage;
