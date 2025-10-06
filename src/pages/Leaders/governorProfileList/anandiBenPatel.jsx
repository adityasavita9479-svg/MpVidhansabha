import React from "react";

const AnandibenPatelPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-Anandipatel1.jpg" // Place image in public/leaders
            alt="श्रीमती आनंदीबेन पटेल"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्रीमती आनंदीबेन मफतभाई पटेल</h1>
          <h3 style={styles.topSubtitle}>(पूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>
            (23/01/2018 – 28/07/2019) <br />
            (15/08/2018 – 28/07/2019, कार्यवाहक, छत्तीसगढ़) <br />
            (01/07/2020, कार्यवाहक, मध्यप्रदेश) <br />
            (24/07/2020 – 08/07/2021, मध्यप्रदेश)
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>व्यक्तिगत विवरण:</h2>
        <p style={styles.paragraph}>
          जन्मतिथि: 21 नवम्बर, 1941 <br />
          जन्मस्थान: खरोद, विजापुर तालुका, जिला मेहसाणा, गुजरात <br />
          शैक्षणिक योग्यता: एम.एससी., एम.एड. (गोल्ड मेडलिस्ट) <br />
          अभिरुचि: अध्ययन, लेखन, यात्रा, जनसंपर्क <br />
          स्थानीय पता: राजभवन, मध्यप्रदेश, भोपाल <br />
          स्थाई पता: 'धरम', शान बंगलोस के पास, शिलज, अहमदाबाद
        </p>

        {/* Career & Achievements */}
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन:</h2>
        <p style={styles.paragraph}>
          - सेवानिवृत प्राचार्य (मोहनाबा गर्ल्स हाई स्कूल, अहमदाबाद) एवं समाज सेवा। <br />
          - 1987 में राजनीति में जुड़ीं; भाजपा महिला मोर्चा प्रदेश अध्यक्ष, उपाध्यक्ष और राष्ट्रीय कार्यकारिणी सदस्य। <br />
          - 1992: कन्न्याकुमारी-श्रीनगर एकता यात्रा में गुजरात की एकमात्र महिला। श्रीनगर में 26 जनवरी को राष्ट्रीय ध्वज फहराने में शामिल। <br />
          - 1994-1998: राज्यसभा सदस्य। 1998, 2002, 2007, 2012: गुजरात विधानसभा सदस्य। 2012 में सर्वाधिक मतों से निर्वाचित। <br />
          - विभिन्न मंत्रिपरिषद: शिक्षा (प्रारंभिक, माध्यमिक, वयस्क), महिला एवं बाल कल्याण, उच्च एवं तकनीकी शिक्षा, खेल, राजस्व, आपदा प्रबंधन, सड़क एवं भवन, राजधानी परियोजना, शहरी विकास एवं आवास। <br />
          - 22 मई, 2014 – 07 अगस्त, 2016: गुजरात की प्रथम महिला मुख्यमंत्री। <br />
          - मुख्यमंत्री काल की उपलब्धियां: 'मां वात्सल्य योजना', 'युवा स्वावलंबन योजना', गुजरात को खुले में शौच-मुक्त बनाना, महिलाओं के लिए कैंसर जांच, नर्मदा के पानी की वितरण योजनाएं, 100+ नगर नियोजन मंजूरी। <br />
          - सम्मान: वीर बाला पुरस्कार, श्रेष्ठ शिक्षक पुरस्कार (राज्य और राष्ट्रीय), वीरता पुरस्कार, सरदार पटेल पुरस्कार, विद्या गौरव पुरस्कार, पाटीदार शिरोमणी पुरस्कार। <br />
          - साहित्यिक गतिविधियां: 'धरती', 'साधना', 'सखी' पत्रिकाओं में लेखन। <br />
          - विदेश यात्रा: बीजिंग, बुल्गेरिया, फ्रांस, जर्मनी, हॉलैंड, इंग्लैंड, नीदरलैंड्स, अमेरिका, कनाडा, मेक्सिको, नामीबिया-दक्षिण अफ्रीका, लंदन, चीन (2015)।
        </p>
      </div>
    </div>
  );
};

// SAME CSS as OPKohliPage
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
};

export default AnandibenPatelPage;
