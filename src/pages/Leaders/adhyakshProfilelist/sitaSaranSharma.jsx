import React from "react";

const SitasaranSharmaPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/sp-speaker_Vs1.jpg" // ✅ यहां अपनी इमेज पाथ डालें
            alt="डॉ. सीतासरन शर्मा"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>डॉ. सीतासरन शर्मा</h1>
          <h3 style={styles.topSubtitle}>
            (पूर्व अध्यक्ष, मध्यप्रदेश विधानसभा)
          </h3>
          <div style={styles.tenure}>
            (09.01.2014 से 02.01.2019)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="पिता का नाम" value="स्‍व. श्री रामलाल शर्मा" />
          <InfoRow label="जन्‍मतिथि" value="24 सितम्‍बर, 1950" />
          <InfoRow label="जन्‍म स्‍थान" value="होशंगाबाद" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्‍नी का नाम" value="श्रीमती कल्‍पना शर्मा" />
          <InfoRow label="संतान" value="दो पुत्रियॉं" />
          <InfoRow label="शैक्षणिक योग्‍यता" value="एम.बी.बी.एस., एल.एल.बी." />
          <InfoRow label="व्‍यवसाय" value="कृषि" />
          <InfoRow label="अभिरूचि" value="समाज सेवा, अध्‍ययन" />
          <InfoRow
            label="स्‍थायी पता"
            value="देशबंधुपुरा, इटारसी, जिला-होशंगाबाद (म.प्र.)"
          />
          <InfoRow
            label="स्‍थायी दूरभाष"
            value="(07572) 361152, 361162"
          />
          <InfoRow
            label="स्‍थानीय पता"
            value="सी-2, (74 बंगले), स्‍वामी दयानंद नगर, भोपाल (म.प्र.)"
          />
          <InfoRow
            label="स्‍थानीय दूरभाष"
            value="2440694, 2440402, 2440315"
          />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={styles.paragraph}>
          अनेक शैक्षणिक संस्‍थाओं की कार्यकारिणी के सदस्‍य और अध्‍यक्ष. सन् 1977 से
          जनता पार्टी तत्‍पश्‍चात् भारतीय जनता पार्टी से संबद्ध. सन् 1990 में
          नौवीं एवं सन् 1993 में दसवीं विधान सभा के सदस्‍य निर्वाचित. सन् 1990-91
          में प्रत्‍यायुक्‍त विधान समिति के सभापति एवं 1991-92, 1994-96 तथा
          1996-98 में क्रमश: विशेषाधिकार, पुस्‍तकालय एवं सार्वजनिक उपक्रम समिति
          के सदस्‍य रहे. सन् 1998 में ग्‍यारहवीं विधान सभा के सदस्‍य निर्वाचित.
        </p>

        <p style={styles.paragraph}>
          सन् 2013 में चौथी बार तथा सन् 2018 में पांचवी बार विधान सभा सदस्‍य निर्वाचित.  
          दिनांक 9 जनवरी, 2014 से 2 जनवरी 2019 तक अध्‍यक्ष, मध्‍यप्रदेश विधान सभा रहे.
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

export default SitasaranSharmaPage;
