import React from "react";

const RamkishorShuklaPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/sp-Ram_K_Shukla.jpg" // replace with correct image path
            alt="श्री रामकिशोर शुक्ल"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री रामकिशोर शुक्ल</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व अध्यक्ष, मध्यप्रदेश विधानसभा)</h3>
          <div style={styles.tenure}>
            सप्तम् विधान सभा (1980 - 85) के द्वितीय अध्यक्ष <br />
            (05.03.1984 से 13.03.1985)
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="पिता का नाम" value="स्व. श्री राम सुंदर शुक्ला" />
          <InfoRow label="जन्मतिथि" value="04.09.1923" />
          <InfoRow label="जन्म स्थान" value="ग्राम व्‍योहारी, जिला शहडोल, म.प्र." />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., एल.एल.बी." />
          <InfoRow label="पत्नी का नाम" value="श्रीमती कलावती" />
          <InfoRow label="संतान" value="पुत्र 5, पुत्री 2" />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={styles.paragraph}>
          छात्र जीवन में लोकप्रिय छात्र, अध्‍ययन में प्रथम श्रेणी के छात्र, छात्र संघ के सचिव,
          विधि महाविद्यालय म.ला.सोसायटी के अध्‍यक्ष रहे. आर्थिक परिस्थिति ठीक न होने के कारण
          हाई स्‍कूल की परीक्षा के बाद कुछ समय तक राजस्‍व विभाग में लिपिक तथा बी.ए. की परीक्षा
          के बाद कुछ वर्ष तक शिक्षक रहे.
        </p>
        <p style={styles.paragraph}>
          सर्वप्रथम निर्वाचित ग्राम पंचायत व्‍योहारी के अध्‍यक्ष, न्‍याय पंचायत के सरपंच, विपणन
          सहकारी समिति व्‍योहारी तथा दि शहडोल केन्‍द्रीय सहकारी अधिकोष के अध्‍यक्ष, माध्‍यमिक
          शिक्षा मण्‍डल म.प्र. व सागर विश्‍वविद्यालय के कोर्ट के सदस्‍य तथा कला एवं वाणिज्‍य
          महाविद्यालय व्‍योहारी के संचालक मंडल के कार्यवाहक अध्‍यक्ष रहे.
        </p>
        <p style={styles.paragraph}>
          आपने राजनैतिक जीवन में अनेक आन्‍दोलनों में भाग लिया तथा जेल यात्राऐं की. राजनैतिक जीवन
          समाजवादी दल की सदस्‍यता से प्रारंभ किया. म.प्र. समाजवादी दल के प्रांतीय अध्‍यक्ष रहे. सन्
          1964 में कांग्रेस पार्टी में शामिल हुए और जिला कांग्रेस कमेटी के अध्‍यक्ष रहे.
        </p>
        <p style={styles.paragraph}>
          सन् 1952 से 1972 तक विधायक तथा सन् 1968 से 1972 तक विधान सभा के उपाध्‍यक्ष रहे. लोक लेखा
          समिति, प्राक्‍कलन समिति, विशेषाधिकार समिति के अध्‍यक्ष तथा अनेक समितियों के सदस्‍य रहे.
          पूर्व विंध्‍य प्रदेश विधान सभा में विरोधी दल के नेता थे. मध्‍यप्रदेश विधान सभा में समाजवादी
          विधायक दल के नेता रहे. विधि महाविद्यालय शिक्षा समिति शहडोल के प्रारंभ से उपाध्‍यक्ष, मार्तण्‍ड
          क्‍लब, नेहरू बाल मंदिर तथा तहसील कौमी एकता समिति के संरक्षक, गांधी स्‍मृति समिति के अध्‍यक्ष रहे.
          अपने गांव में क्‍लब, पुस्‍तकालय तथा पाठशालाओं की स्‍थापना की.
        </p>
        <p style={styles.paragraph}>
          सन् 1980 के आम चुनाव में व्‍योहारी क्षेत्र से पुन: विधायक निर्वाचित हुए तथा 16 सितम्‍बर 1980
          से 3 मार्च, 1984 तक विधान सभा के उपाध्‍यक्ष रहे. तद्नंतर आप 5 मार्च, 1984 से 11 मार्च, 1985
          तक विधान सभा के अध्‍यक्ष रहे. 1985 में अष्‍टम् विधान सभा के सदस्‍य निर्वाचित एवं वित्‍त,
          पृथक आगम, विधि विधायी एवं संसदीय कार्य विभाग के मंत्री. 1993 में दसवीं विधान सभा के सदस्‍य
          निर्वाचित.
        </p>

        <div style={styles.deathNotice}>
          दिनांक 11.12.2003 को आपका देहावसान हो गया.
        </div>
      </div>
    </div>
  );
};

// InfoRow component
const InfoRow = ({ label, value }) => (
  <div style={styles.infoRow}>
    <span style={styles.infoLabel}>{label}:</span>
    <span style={styles.infoValue}>{value}</span>
  </div>
);

// Styles (same as previous pages for consistency)
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

export default RamkishorShuklaPage;
