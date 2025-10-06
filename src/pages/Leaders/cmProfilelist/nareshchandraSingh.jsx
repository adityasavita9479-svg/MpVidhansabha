import React from "react";

const ShriNareshchandraSinghPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/cm-nareshchandra.jpg" // Place image in public/leaders
            alt="श्री नरेशचन्‍द्र सिंह (राजा)"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री नरेशचन्‍द्र सिंह (राजा)</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व मुख्‍यमंत्री, मध्यप्रदेश)
          </h3>
          <div style={styles.tenure}>
            चतुर्थ विधान सभा (1967-1972) <br />
            (दिनांक 13.03.1969 से 25.03.1969 तक)
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :</h2>

        <p style={styles.paragraph}>
          जन्म 21 नवम्बर, 1908। शिक्षा-1918 से 1929 तक राजकुमार कॉलेज, रायपुर में, जहां तीन वर्ष तक अध्ययन तथा खेलकूद में सर्वश्रेष्ठ छात्र होने का कप, तीन खेलों में विशेष कॉलेज कलर तथा किंग स्काउट।  
          1929 से 1932 तक रायपुर में अवैतनिक सहायक आयुक्त के रूप में दंडाधिकारी के कार्य का प्रशिक्षण। अपने पिता स्वर्गीय राजाबहादुर जवाहर सिंह, C.I.E. के राज्यकाल में शिक्षा मंत्री तथा प्रथम श्रेणी दंडाधिकारी के पद पर कार्य।  
          1936-37 में महानदी की भयंकर बाढ़ के समय सहायता-कार्य में सक्रिय भाग तथा बाढ़ग्रस्त व्यक्तियों को अन्न, वस्त्र व आवास संबंधी सहायता और महामारी फैलने पर जनता की सक्रिय सहायता।  
          विवाह 1942। पत्नी-स्व. ठाकुर लालबहादुर सिंह, सराईपाली जमींदार की सुपुत्री श्रीमती ललिता देवी। व्यवसाय-29 अप्रैल, 1946 से सारंगढ़ का शासन।  
          1948-49 में नैनपुर में आयोजित आदिवासी सम्मेलन के अध्यक्ष। 1948 में अपने राज्य को मध्यप्रदेश में विलीन किया।  
          1950-51 में रायपुर में हुए मध्यप्रदेश आदिवासी सम्मेलन के अध्यक्ष। 1952 से आज तक विधान सभा सदस्य तथा मंत्रिमंडल के सदस्य व 1956 तक लोक निर्माण विभाग, विद्युत तथा आदिवासी कल्याण विभाग के मंत्री व 1957 से अब तक आदिवासी कल्याण विभाग के मंत्री।  
          1954 में अखिल भारतीय आदिम जाति सेवक संघ द्वारा जगदलपुर में आयोजित सम्मेलन के अध्यक्ष। 1959 में जिला कांग्रेस कार्यकारिणी समिति, प्रांतीय कांग्रेस कार्यकारिणी समिति तथा अखिल भारतीय कांग्रेस कमेटी के सदस्य।  
          आदिम जाति कल्याण मंत्री, मध्यप्रदेश शासन रहे।
        </p>

        <p style={styles.deathNotice}>
          दिनांक 12.09.1987 को आपका देहावसान हो गया।
        </p>
      </div>
    </div>
  );
};

// Styles and reusable components (same as previous)
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

export default ShriNareshchandraSinghPage;
