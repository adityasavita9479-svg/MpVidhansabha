import React from "react";

const ShriKailashJoshiPagecm = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/cm-kailashjoshi.jpg" // Place image in public/leaders
            alt="श्री कैलाश जोशी"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री कैलाश जोशी</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व मुख्‍यमंत्री, मध्यप्रदेश)
          </h3>
          <div style={styles.tenure}>
            षष्‍टम् विधान सभा (1977-1980) <br />
            (दिनांक 24.06.1977 से 17.01.1978 तक)
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :</h2>

        <p style={styles.paragraph}>
          पिता: श्री उमाशंकर जोशी <br />
          जन्म तिथि: 14 जुलाई, 1929 <br />
          जन्म स्थान: हाटपीपल्या, देवास <br />
          वैवाहिक स्थिति: विवाहित (सन् 1951) <br />
          शैक्षणिक योग्यता: मैट्रिक <br />
          व्यवसाय: कृषि <br />
          अभिरुचि: अध्यात्म, भारतीय विधाओं का अध्ययन तथा समाज सेवा <br />
          स्थायी पता: 81, महाकाल मार्ग, पोस्ट-हाटपीपल्या, जिला देवास (म.प्र.)
        </p>

        <p style={styles.paragraph}>
          सन् 1955 में हाटपीपल्या नगरपालिका के अध्यक्ष, सन् 1962 से निरंतर बागली क्षेत्र से विधान सभा के सदस्य। सन् 1951 में भारतीय जनसंघ की स्थापना से ही उसके सदस्य बने। सन् 1954 से 1960 तक देवास जिला जनसंघ के मंत्री। सन् 1961 से प्रदेश कार्य समिति के सदस्य तथा सन् 1972 से अद्यतन भारतीय जनसंघ, जनता पार्टी और अब भारतीय जनता पार्टी के प्रदेश कार्य समिति और राष्ट्रीय कार्य समिति के सदस्य।  
          सन् 1980 से 1984 तक भाजपा प्रदेशाध्यक्ष, सन् 1963 से 1968 तक जनसंघ विधायक दल के सचिव, सन् 1970 से 1972 तक उप नेता और मार्च 1972 से 1977 तक दल के नेता तथा नेता प्रतिपक्ष। सन् 1968-69 में आश्वासन समिति, सन् 1972 से 1975 तक लोक लेखा समिति के सभापति।  
          आपातकाल में एक माह भूमिगत रहने के पश्चात् दिनांक 28 जुलाई, 1975 को विधान सभा के द्वार पर गिरफ्तार होकर 19 माह तक मीसा में नजरबंद। सन् 1977 के निर्वाचन के पश्चात् गठित विधान सभा में निर्वाचित होने पर जनता पार्टी दल के नेता और मुख्यमंत्री चुने गये। सन् 1978 में अस्वस्थता के कारण मुख्यमंत्री पद त्याग, अंतरण के बाद उद्योग, विद्युत मंत्री बने।  
          वर्ष 1985 में विधान सभा सदस्य निर्वाचित एवं दिनांक 23 मार्च, 1985 को भारतीय जनता पार्टी विधायक दल के नेता। 1990 में नौवीं विधान सभा के सदस्य और वाणिज्य, उद्योग एवं ऊर्जा मंत्री। 1993 में दसवीं विधान सभा के सदस्य। 1993 में भाजपा किसान मोर्चा के राष्ट्रीय अध्यक्ष। वर्ष 2000 से 2004 तक राज्य सभा तथा वर्ष 2004 से 2014 तक लोक सभा के सदस्य रहे।
        </p>

        <p style={styles.deathNotice}>
          दिनांक 24 नवम्बर, 2019 को आपका देहावसान हो गया।
        </p>
      </div>
    </div>
  );
};

// Styles (reuse same as previous components)
const styles = {
  pageWrapper: {
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    backgroundColor: "#e0f7f7",
    padding: "1.5rem 1rem",
    maxWidth: 1100,
    margin: "auto",
    color: "#222",
  },
  topProfileCard: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    flexWrap: "wrap",
  },
  photoFrame: {
    backgroundColor: "white",
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
    backgroundColor: "#008b8b",
    borderRadius: 12,
    padding: "2rem 3rem",
    color: "white",
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
    marginTop: "0.8rem",
    fontSize: "1rem",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: "1.5rem 1.8rem",
    marginBottom: "2rem",
    boxShadow: "0 8px 14px rgba(0,0,0,0.08)",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    color: "#008b8b",
    borderBottom: "3px solid #004d4d",
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
    color: "#004d4d",
    marginTop: 20,
  },
};

export default ShriKailashJoshiPagecm;
