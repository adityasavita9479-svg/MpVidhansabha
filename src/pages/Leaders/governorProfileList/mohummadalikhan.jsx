import React from "react";

const KunwarMahmoodAliKhanPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-kmakhan.jpg" // Add the correct image in public/leaders
            alt="कुंवर महमूद अली खॉं"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>कुंवर महमूद अली खॉं</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>(दिनांक 06.02.1990 से 23.06.1993 तक)</div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>व्यक्तिगत एवं पारिवारिक विवरण:</h2>
        <p style={styles.paragraph}>
          पिता: स्व. श्री राव हकीम अली खॉं <br />
          जन्म: 16 जून, 1920 / जोगीपुरा, मेरठ (उ.प्र.) <br />
          शिक्षा: बी.ए., एल.एल.बी. <br />
          पारिवारिक पृष्ठभूमि: राजपूत (परमारवंश) मुस्लिम, अपनी सांस्कृतिक परंपराओं पर गर्व, विक्रम संवत 1815 में जोगीपुरा में उनके पूर्वज आए। पूर्वजों में राव मोजीसिंह शामिल, जिन्होंने विक्रम संवत 1411 में इस्लाम धर्म स्वीकार किया। परिवार में राजपूत रीति-रिवाज मान्य।
        </p>

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम:</h2>
        <p style={styles.paragraph}>
          बाल्यावस्था से राष्ट्रीय स्वयंसेवक संघ के स्वयंसेवक। राजनीतिक यात्रा 1965 में भारतीय जनसंघ के सदस्य के रूप में शुरू। 1973 में जबलपुर नगर निगम में वरिष्ठ पार्षद निर्वाचित। आपातकाल के दौरान 14 नवम्बर 1975 को प्रथम आंदोलन का नेतृत्व किया और 19 महीने जेल में रहे। 1979 में तिलक वार्ड से निगम पार्षद निर्वाचित और तत्कालीन जनता पार्टी के नेता। 
        </p>

        <p style={styles.paragraph}>
          भाजपा के दो बार जिला महामंत्री, जिलाध्यक्ष और प्रदेश मंत्री। जबलपुर विकास प्राधिकरण के अध्यक्ष, रानी दुर्गावती विश्वविद्यालय की विद्वत परिषद के सदस्य। भाजपा नगर निगम एवं नगर पालिका मोर्चा के प्रदेश प्रभारी और जबलपुर संभाग प्रभारी। 1991 में दूध मूल्य वृद्धि और पेयजल व्यवस्था के लिए अनशन। 
        </p>

        <p style={styles.paragraph}>
          1993 में दसवीं विधान सभा के सदस्य निर्वाचित एवं भाजपा विधायक दल के सचेतक। 1998 में ग्यारहवीं विधान सभा सदस्य एवं 11 फरवरी 1999 से 5 दिसंबर 2003 तक उपाध्यक्ष, मध्यप्रदेश विधानसभा। 2003 में बारहवीं विधान सभा के सदस्य एवं 16 दिसंबर 2003 से 4 जनवरी 2009 तक अध्यक्ष, मध्यप्रदेश विधानसभा। 2008 में चौथी बार विधान सभा सदस्य एवं जनवरी 2009 से निधन दिनांक तक अध्यक्ष। 
        </p>

        <p style={styles.deathNotice}>टिप्पणी: 05 नवम्बर, 2013 को दिवंगत।</p>
      </div>
    </div>
  );
};

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
};

export default KunwarMahmoodAliKhanPage;
