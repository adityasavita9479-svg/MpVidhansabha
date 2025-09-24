import React from "react";


const ShriKyasamballiChengalRaoReddyPage2 = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-kcreddy.jpg"
            alt="श्री क्‍यासम्‍बल्लि चेंगलराव रेड्डी"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री क्‍यासम्‍बल्लि चेंगलराव रेड्डी</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्‍यपाल, मध्‍यप्रदेश)</h3>
          <div style={styles.tenure}>
            (दिनांक 11.02.1965 से 02.02.1966 तक तथा 10.02.1966 से 07.03.1971 तक)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्म" value="04 मई, 1902" />
          <InfoRow label="शिक्षा" value="बी.ए., बी.एल.एल.एल.डी (Honoris causa)" />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :</h2>
        <p style={styles.paragraph}>
          आप मैसूर पीपुल्‍स फेडरेशन के सन् 1935 से 1937 तक प्रेसीडेन्‍ट रहे. कुछ समय तक "जनवाणी" के संपादक रहे. सन् 1937-38 तथा 1946-47 में मैसूर कांग्रेस के अध्यक्ष रहे एवं मैसूर राज्य में उत्तरदायित्‍वपूर्ण शासन की स्थापना हेतु सत्याग्रह किया. सन् 1944-45 में अखिल भारतीय देशी राज्य प्रजा परिषद की कार्यकारिणी के सदस्य रहे. सन् 1947 से 1952 तक 3 बार लगातार मैसूर विधानसभा के नेता तथा मैसूर राज्य के मुख्यमंत्री रहे. भारतीय संविधान सभा के सन् 1947 से 1950 तक सदस्य रहे. सन् 1952 में मैसूर विधानसभा के सदस्य चुने गये तथा सन् 1952 से 1957 तक राज्य सभा के सदस्य तथा उत्पादन विभाग के मंत्री रहे और सन् 1957 से 1964 तक लोक सभा के सदस्य रहे. स्कूल ऑफ इकनॉमिक्‍स के संस्थापक सदस्य रहे. सन् 1957-61 में आप निर्माण, आवास और आपूर्ति के मंत्री रहे तथा 1961-62 में वाणिज्‍य तथा उद्योग मंत्री रहे. सन् 1963-64 में संसद की कांग्रेस पार्टी के उपनेता रहे.
        </p>
        <p style={styles.paragraph}>
          आपने संयुक्‍त राज्य अमेरिका, रूस और यूनाइटेड किंगडम की यात्रा भी की थी.
        </p>
        <p style={styles.paragraph}>
          दिनांक 11 फरवरी 1958 से 8 मार्च 1971 तक आप मध्यप्रदेश के राज्यपाल के पद को सुशोभित करते रहे. आपका 27 फरवरी 1976 को देहावसान हो गया.
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

export default ShriKyasamballiChengalRaoReddyPage2;
