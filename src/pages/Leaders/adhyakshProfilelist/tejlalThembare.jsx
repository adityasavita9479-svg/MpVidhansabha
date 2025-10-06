import React from "react";

const TejLalTembharePage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/sp-Tembhre.jpg" // replace with actual image path
            alt="श्री तेजलाल टेंभरे"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री तेजलाल टेंभरे</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व अध्यक्ष, मध्यप्रदेश विधानसभा)</h3>
          <div style={styles.tenure}>
            पंचम् विधान सभा (1972 - 77) के प्रथम अध्‍यक्ष <br />
            (25.3.1972 से 10.8.1972)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्मतिथि" value="22.02.1913" />
          <InfoRow label="जन्म स्थान" value="मौजा देवसगांव तहसील व जिला बालाघाट" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., एल.एल.बी." />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :</h2>

        <p style={styles.paragraph}>
          मौजा देवसगांव तहसील व जिला बालाघाट (म.प्र.) के कृषक परिवार में जन्‍म दिनांक 22.2.1913, स्‍नातक की परीक्षा मारिस कॉलेज नागपुर से सन् 1935 में पास होने के पश्‍चात् नागपुर विश्‍वविद्यालय के विधि महाविद्यालय से सन् 1937 में एल.एल.बी. की परीक्षा में प्रथम श्रेणी उत्‍तीर्ण.
        </p>
        <p style={styles.paragraph}>
          माह जून 1937 से बालाघाट में वकालत करते रहे. सन् 1951 में नागपुर हाईकोर्ट के अधिवक्‍ता सनद प्राप्‍त की तथा सन् 1972 तक बालाघाट में ही वकालत करते रहे. सन् 1977 से 1980 तक उच्‍च न्‍यायालय जबलपुर में वकालत करते रहे.
        </p>
        <p style={styles.paragraph}>
          दिनांक 24 मार्च 1972 को सर्वसम्‍मति से मध्‍यप्रदेश विधान सभा के अध्‍यक्ष निर्वाचित हुए तथा दिनांक 10 अगस्‍त 1972 को अध्‍यक्ष पद से त्‍याग पत्र दिया. दिनांक 15 अगस्‍त 1972 को ही मंत्री पद की शपथ ली तथा सन् 1975 तक लोक निर्माण विभाग के मंत्री रहे. तत्‍पश्‍चात् पंडित श्‍यामाचरण जी शुक्‍ल के मंत्रीमंडल में सन् 1977 तक एक साथ राजस्‍व, कृषि, सहकारिता एवं खाद्य तथा आपूर्ति मंत्री रहे. जनता पार्टी की सरकार बनने पर 1977 से सन् 1980 तक उच्‍च न्‍यायालय जबलपुर में वकालत करते रहे.
        </p>
        <p style={styles.paragraph}>
          सन् 1937 से ही भारतीय राष्‍ट्रीय कांग्रेस के सदस्‍य रहे. सन् 1948 से 1953 तक जिला कांग्रेस कमेटी बालाघाट के उपाध्‍यक्ष रहे तथा 1953 से 1958 तक जिला कांग्रेस के अध्‍यक्ष रहे. सन् 1948 में गांधी स्‍मारक निधि के सचिव रहे.
        </p>
        <p style={styles.paragraph}>
          सन् 1952 से 1962 तक तथा 1962 से वर्तमान समय तक मध्‍यप्रदेश विधान सभा के सदस्‍य रहते आए. सार्वजनिक क्षेत्र में सर्वप्रथम सन् 1943 में जिला हरिजन संघ के अध्‍यक्ष के नाते हरिजन सेवा में कार्य किया तत्‍पश्‍चात् बालाघाट स्‍वीपर यूनियन से अध्‍यक्ष रहकर सेवा कार्य किया. सन् 1945-1948 तक सी.पी.एम.ओ. कम्‍पनी को भरवेदी खदान मजदूर संघ के सक्रिय कार्यकर्ता रहे.
        </p>
        <p style={styles.paragraph}>
          सहकारिता क्षेत्र में काफी लम्‍बे समय तक कार्य करते रहे. सन् 1944 से 1972 तक अर्थात् 27 वर्ष तक जिला सहकारी अधिकोष बालाघाट के अध्‍यक्ष रहे. इसी अवधि में अनेक बार मध्‍यप्रदेश राज्‍य सहकारी अधिकोष जबलपुर के संचालक मंडल में सदस्‍य रहे. 5 वर्षों तक बालाघाट जिला मार्केटिंग सोसाइटी के मनोनीत अध्‍यक्ष रहे. जिले में अनेक प्रकार की सहकारी सभाओं के गठन करने का एवं संचालन का भार वहन करने का भी सौभाग्‍य प्राप्‍त हुआ.
        </p>
        <p style={styles.paragraph}>
          सन् 1953 से 1960 तक जनपद सभा बालाघाट के अध्‍यक्ष रहे. सन् 1967 से 1972 तक बालाघाट में शासकीय अधिवक्‍ता रहे. शिक्षा समितियों में अध्‍यक्ष एवं सदस्‍य रहकर उच्‍चतर माध्‍यमिक विद्यालय तथा महिला महाविद्यालय की स्‍थापना की.
        </p>
        <p style={styles.paragraph}>
          राजनीतिक तथा सार्वजनिक जीवन के शुरूआत से ही भारतीय राष्‍ट्रीय कांग्रेस के सदस्‍य रहे. भारतीय राष्‍ट्रीय कांग्रेस (इ) के क्रियाशील सदस्‍य रहे.
        </p>
        <p style={styles.deathNotice}>
          दिनांक 18 जून, 1998 को आपका देहावसान हो गया.
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

// Reuse the same styles object
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

export default TejLalTembharePage;
