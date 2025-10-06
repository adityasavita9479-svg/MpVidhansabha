import React from "react";

const ProfessorKMChandyPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-kmchandy.jpg" // Update with correct image in public/leaders
            alt="प्रोफेसर के. एम. चांडी"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>प्रोफेसर के. एम. चांडी</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>(दिनांक 15.5.1984 से 30.3.1989 तक)</div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्म तिथि" value="6 अगस्त 1921" />
          <InfoRow label="जन्म स्थान" value="पलई नगर, कोट्टयम जिला (केरल)" />
          <InfoRow
            label="शिक्षा"
            value="अंग्रेज़ी भाषा और साहित्य में स्नातकोत्तर (1942), प्रारम्भिक शिक्षा पलई नगर, महाविद्यालय शिक्षा चंगनाचेरी और त्रिवेन्द्रम"
          />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम:</h2>
        <p style={styles.paragraph}>
          प्रोफेसर के.एम. चांडी का जन्म केरल राज्य के कोट्टयम जिले के पलई नगर में 6 अगस्त 1921 को हुआ था। उन्होंने प्रारम्भिक शिक्षा अपने गृह नगर में और महाविद्यालय शिक्षा चंगनाचेरी और त्रिवेन्द्रम में प्राप्त की। 1942 में अंग्रेजी भाषा और साहित्य में स्नातकोत्तर उपाधि प्राप्‍त की।
        </p>
        <p style={styles.paragraph}>
          छात्र जीवन से ही वे स्वतंत्रता आंदोलन में सक्रिय रहे। सेंट वर्च मेन कॉलेज, चंगनाचेरी में अध्ययन के दौरान विद्यार्थियों के नेतृत्व में आंदोलन किया। त्रिवेन्द्रम में टैगोर अकादमी के गठन में प्रमुख भूमिका निभाई। कई बार गिरफ्तारी और जेल यात्रा का सामना किया। 26 वर्ष की उम्र में राज्य विधानसभा के लिये निर्विरोध निर्वाचित हुए और कई बार पुनः विधायक चुने गए। वे विधानसभा में कांग्रेस पार्टी के मुख्य सचेतक भी रहे।
        </p>
        <p style={styles.paragraph}>
          उन्होंने विभिन्न श्रमिक संघों की स्थापना की और "तोझिलालली" नामक साप्ताहिक का प्रकाशन किया। 1974-76 तक इलायची मंडल के अध्यक्ष रहे। पलई में सेंट थॉमस कॉलेज की स्थापना में योगदान किया और 1968 तक अंग्रेज़ी के स्नातकोत्तर प्राध्यापक रहे। रबर बोर्ड के अध्यक्ष रहे और भारत में रबर अनुसंधान, उत्पादन और अंतरराष्ट्रीय सहयोग में महत्वपूर्ण भूमिका निभाई। 1953 से 1957 तक जिला कांग्रेस कमेटी, 1963-67 तक केरल प्रदेश कांग्रेस कमेटी में महासचिव और 1967-72 तक कोषाध्यक्ष रहे। 
        </p>
        <p style={styles.paragraph}>
          15 मई 1982 को पांडीचेरी के उप-राज्यपाल बने, 6 अगस्त 1983 को गुजरात के राज्यपाल बने और 15 मई 1984 को मध्यप्रदेश के राज्यपाल का पद संभाला। उन्होंने अंतरराष्ट्रीय सम्मेलनों में लंदन, कुआलालमपुर, बैंकाक, सिंगापुर और वाशिंगटन की यात्राएं कीं।
        </p>

        <p style={styles.deathNotice}>आपका दिनांक 7.9.1998 को देहावसान हो गया।</p>
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

// Shared Styles
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
    marginTop: 6,
    fontWeight: "600",
    fontSize: "1rem",
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

export default ProfessorKMChandyPage;
