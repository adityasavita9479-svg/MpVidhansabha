import React from "react";

const ShriSatyanarayanSinghPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-snsinha.jpg"
            alt="श्री सत्‍यनारायण सिंह"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री सत्‍यनारायण सिंह</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व राज्‍यपाल, मध्‍यप्रदेश)
          </h3>
          <div style={styles.tenure}>
            (दिनांक 08.03.1971 से 13.10.1977 तक)
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्म" value="9 जुलाई, 1900 को शम्‍भूपट्टी, जिला दरभंगा (बिहार) में" />
          <InfoRow label="शिक्षा" value="विधि स्‍नातक, मुजफ्फरपुर जिला स्‍कूल तथा पटना विश्‍वविद्यालय" />
          <InfoRow label="विवाहित" value="सन् 1918 में, एक पुत्र एवं तीन पुत्रियां" />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={styles.paragraph}>
          सन् 1920 में आप स्‍वतंत्रता आंदोलन में सम्मिलित हुए. सन् 1926-30 में बिहार विधान परिषद् के सदस्‍य रहे. अनेक वर्षों तक अखिल भारतीय कांग्रेस कमेटी के सदस्‍य रहे. सन् 1930 से 1947 तक दरभंगा जिला कांग्रेस कमेटी के प्रधान रहे.
        </p>

        <p style={styles.paragraph}>
          सन् 1934 में केन्‍द्रीय विधानसभा के सदस्‍य निर्वाचित हुए. सन् 1937 में केन्‍द्रीय विधान सभा में कांग्रेस दल के सचेतक तथा सन् 1939 में विरोधी दल के मुख्‍य सचेतक चुने गये. सन् 1942 से 1947 तक बिहार प्रदेश कांग्रेस कमेटी के महामंत्री रहे. सन् 1945 में पुन: केन्‍द्रीय विधान सभा के सदस्‍य निर्वाचित हुए और सन् 1946 में कांग्रेस दल के मुख्‍य सचेतक निर्वाचित हुए.
        </p>

        <p style={styles.paragraph}>
          सन् 1948 में सरकारी मुख्‍य सचेतक के साथ-साथ सभा के नेता के सचिव बनाये गये. सन् 1948-52 में संसदीय कार्य के राज्‍य मंत्री रहे.
        </p>

        <p style={styles.paragraph}>
          सन् 1952-57 में प्रथम लोक सभा, सन् 1957-62 में द्वितीय लोक सभा और सन् 1962-67 में तृतीय लोक सभा के सदस्‍य रहे. सन् 1952 से 1962 तक संसदीय कार्य मंत्री रहे. मई 1962 से मंत्रिमंडल के सदस्‍य का दर्जा प्राप्‍त किया. सितम्‍बर 1963 से जून 1964 तक संसदीय कार्य और सूचना तथा प्रसारण मंत्री रहे. जून 1964 से मार्च 1967 तक संसदीय कार्य और संचार मंत्री रहे. मार्च 1967 से बिना विभाग के मंत्री रहे. तत्‍पश्‍चात् स्‍वास्‍थ्‍य, परिवार नियोजन तथा नगरीय विकास मंत्री रहे.
        </p>

        <p style={styles.paragraph}>
          दिनांक 09.03.1971 से 13.10.1977 तक मध्‍यप्रदेश के राज्‍यपाल रहे.
        </p>

        <p style={styles.paragraph}>
          आपका दिनॉंक 07.07.1983 को स्‍वर्गवास हो गया.
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

// **Reuse the same styles**
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
    minWidth: 120,
    color: colors.secondary,
  },
  infoValue: {
    flex: 1,
    color: "#333",
    fontWeight: "500",
  },
};


export default ShriSatyanarayanSinghPage;
