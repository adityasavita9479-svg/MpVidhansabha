import React from "react";

const IshwardasRohaniPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/sp-Ishwerdas_Rohani (1).jpg" // replace with actual image path
            alt="श्री ईश्‍वरदास रोहाणी"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री ईश्‍वरदास रोहाणी</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व अध्यक्ष, मध्यप्रदेश विधानसभा)
          </h3>
          <div style={styles.tenure}>
            (07.01.2009 से 05.11.2013 तक)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="पिता" value="श्री चन्‍दूमल रोहाणी" />
          <InfoRow label="जन्‍मतिथि" value="30 जून, 1946" />
          <InfoRow label="जन्‍म स्‍थान" value="कराची" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्‍नी का नाम" value="श्रीमती माया देवी" />
          <InfoRow label="संतान" value="2 पुत्र, 4 पुत्रियां" />
          <InfoRow label="शैक्षणिक योग्‍यता" value="बी. कॉम., एल.एल.बी." />
          <InfoRow label="व्‍यवसाय" value="मुद्रण" />
          <InfoRow
            label="अभिरूचि"
            value="अध्‍ययन, पीड़ि‍त मानवता की सेवा"
          />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={styles.paragraph}>
          बाल्‍यावस्‍था से राष्‍ट्रीय स्‍वयं सेवक संघ के स्‍वयं सेवक. राजनैतिक यात्रा
          सन् 1965 में भारतीय जनसंघ के गलगला वार्ड के सदस्‍य के रूप में प्रारम्‍भ की.
          सन् 1973 में भारतीय जनसंघ की ओर से जबलपुर नगरनिगम में वरिष्‍ठ पार्षद निर्वाचित.
          भूमिगत रहकर 14 नवम्‍बर, 1975 को जबलपुर में आपातकाल के विरूद्ध प्रथम आंदोलन का
          नेतृत्‍व किया. आपातकाल की समाप्ति तक 19 महीने जेल में निरूद्ध रहे. जन समस्‍याओं
          के निराकरण हेतु अनेक बार जेल यात्राएं की.
        </p>

        <p style={styles.paragraph}>
          सन् 1979 में तिलक वार्ड से निगम हेतु पार्षद निर्वाचित तथा नगर निगम में
          तत्‍कालीन जनता पार्टी के नेता. भारतीय जनता पार्टी के दो बार जिला महामंत्री
          तथा भा.ज.पा. के जिलाध्‍यक्ष एवं प्रदेश मंत्री. जबलपुर विकास प्राधिकरण के
          अध्‍यक्ष, रानी दुर्गावती विश्‍वविद्यालय जबलपुर की विद्वत परिषद के सदस्‍य.
          भा.ज.पा. नगर निगम एवं नगर पालिका मोर्चा के प्रदेश प्रभारी तथा भा.ज.पा. के
          जबलपुर संभाग प्रभारी.
        </p>

        <p style={styles.paragraph}>
          सन् 1991 में निजी डेरी मालिकों द्वारा दूध के भावों में की गई वृद्धि के विरूद्ध
          72 घंटों का तथा अनुसूचित जाति की बस्तियों में पेयजल व्‍यवस्‍था हेतु चार दिन तक
          अनशन. सन् 1993 में दशम् विधान सभा के सदस्‍य निर्वाचित एवं भा.ज.पा. विधायक दल
          के सचेतक रहे. सन् 1998 में ग्‍यारहवीं विधान सभा के सदस्‍य निर्वाचित एवं
          11 फरवरी, 1999 से 5 दिसंबर, 2003 तक उपाध्‍यक्ष, मध्‍यप्रदेश विधान सभा रहे.
        </p>

        <p style={styles.paragraph}>
          यूनाईटेड किंगडम, फ्रांस, इटली, जर्मनी, ऑस्ट्रिया, बैल्जियम, नीदरलैंड,
          स्विट्जरलैण्‍ड, फिजी, साउथ अफ्रीका, हांगकॉंग, चीन, जापान, नाईजीरिया,
          आस्‍ट्रेलिया, न्‍यूजीलैण्‍ड, सिंगापुर एवं पाकिस्‍तान की यात्रा. सन् 2003 में
          बारहवीं विधान सभा के सदस्‍य निर्वाचित एवं 16 दिसम्‍बर, 2003 से 4 जनवरी, 2009 तक
          अध्‍यक्ष, मध्‍यप्रदेश विधानसभा रहे.
        </p>

        <p style={styles.paragraph}>
          सन् 2008 में चौथी बार विधान सभा सदस्‍य निर्वाचित एवं जनवरी, 2009 से निधन दिनांक
          तक अध्‍यक्ष, म.प्र. विधान सभा रहे.
        </p>

        <p style={styles.deathNotice}>टिप्‍पणी :- 05 नवम्‍बर, 2013 को दिवंगत.</p>
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

export default IshwardasRohaniPage;
