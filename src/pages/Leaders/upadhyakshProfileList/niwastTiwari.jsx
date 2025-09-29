import React from "react";

const NiwasTiwariPage = () => {
  return (
    <div style={stStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={stStyles.topProfileCard}>
        <div style={stStyles.photoFrame}>
          <img
            src="/leaders/sp-sriniwastiwari.jpg" // ✅ Replace with correct image path
            alt="श्रीयुत श्रीनिवास तिवारी"
            style={stStyles.profileImage}
          />
        </div>
        <div style={stStyles.divider}></div>
        <div style={stStyles.nameFrame}>
          <h1 style={stStyles.topTitle}>श्रीयुत श्रीनिवास तिवारी</h1>
          <h3 style={stStyles.topSubtitle}>
            (भूतपूर्व उपाध्‍यक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={stStyles.tenure}>
            नवम् विधान सभा (1990-1992) <br />
            (23.03.1990 से 15.12.1992)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={stStyles.card}>
        <section style={stStyles.section}>
          <STInfoRow label="पिता" value="स्‍व. श्री मंगलदीन तिवारी" />
          <STInfoRow label="जन्‍मतिथि" value="17.सितम्‍बर, 1926" />
          <STInfoRow label="जन्‍म स्‍थान" value="तिउनी, जिला - रीवा" />
          <STInfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <STInfoRow label="पत्‍नी का नाम" value="स्‍व. श्रीमती श्रवण कुमारी" />
          <STInfoRow label="संतान" value="2 पुत्र" />
          <STInfoRow label="शैक्षणिक योग्यता" value="एम.ए., एल.एल.बी." />
          <STInfoRow label="व्‍यवसाय" value="वकालत" />
          <STInfoRow label="अभिरूचि" value="अध्‍ययन, समाज सेवा" />
          <STInfoRow label="स्‍थायी पता" value="अमहिया, जिला - रीवा (म.प्र.)" />
        </section>

        <hr style={stStyles.divider} />

        <h2 style={stStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={stStyles.paragraph}>
          विद्यार्थी जीवन में स्‍वतंत्रता आंदोलन में सक्रिय रूप से भाग लिया. सन् 1948 में विंध्‍य प्रदेश में समाजवादी पार्टी का गठन किया 
          तथा सन् 1952 में समाजवादी पार्टी के प्रत्‍याशी के रूप में विंध्‍य प्रदेश विधान सभा के सदस्य निर्वाचित हुए. जमींदारी 
          उन्‍मूलन के लिए अनेक आंदोलन संचालित किए तथा कई बार जेल यात्राएं की. सन् 1972 में समाजवादी पार्टी से मध्‍यप्रदेश विधान सभा 
          के लिए निर्वाचित हुए. सन् 1973 में अ.भा. कांग्रेस पार्टी में शामिल हुए.
        </p>

        <p style={stStyles.paragraph}>
          सन् 1977, 1980 एवं 1990 में विधान सभा के सदस्य निर्वाचित. सन् 1980 में श्री अर्जुन सिंह के मंत्रिमंडल में लोक स्‍वास्‍थ्‍य 
          एवं परिवार कल्‍याण विभाग के मंत्री रहे. सहकारिता आंदोलन में सक्रिय भूमिका का निर्वाह किया. भूमि विकास बैंक, केन्‍द्रीय 
          सहकारी अधिकोष तथा उपभोक्‍ता भंडार रीवा के अध्‍यक्ष रहे. सन् 1973 से अखिल भारतीय कांग्रेस कमेटी तथा मध्‍यप्रदेश कांग्रेस 
          कमेटी की प्रबंध समिति के सदस्य. अवधेश प्रताप सिंह वि.वि. रीवा की कार्य परिषद् में विश्‍वविद्यालय की स्‍थापना से ही कई बार 
          सदस्य रहे.
        </p>

        <p style={stStyles.paragraph}>
          सन् 1990 से सन् 1992 तक मध्‍यप्रदेश विधान सभा के उपाध्‍यक्ष रहे. सन् 1993 में विधान सभा सदस्य निर्वाचित एवं दिनांक 
          24 अक्‍टूबर, 1993 से दिनांक 1 फरवरी, 1999 तक मध्‍यप्रदेश विधान सभा के अध्‍यक्ष रहे. सन् 1998 में सातवीं बार विधान सभा 
          सदस्य निर्वाचित एवं दिनांक 2 फरवरी, 1999 से 12 दिसम्‍बर, 2003 तक अध्‍यक्ष, मध्‍यप्रदेश विधान सभा रहे.
        </p>

        <p style={stStyles.paragraph}>
          टिप्‍पणी :- 19 जनवरी, 2018 को दिवंगत.
        </p>
      </div>
    </div>
  );
};

// Unique InfoRow component for Srinivas Tiwari
const STInfoRow = ({ label, value }) => (
  <div style={stStyles.infoRow}>
    <span style={stStyles.infoLabel}>{label}:</span>
    <span style={stStyles.infoValue}>{value}</span>
  </div>
);

// Styles for Srinivas Tiwari page
const stStyles = {
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
  divider: { width: 5, height: 20, margin: "0 20px", background: "transparent", borderRadius: 2 },
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
  topTitle: { fontSize: "2rem", margin: 0, fontWeight: "700", lineHeight: 1.1 },
  topSubtitle: { fontSize: "1.2rem", marginTop: "0.5rem", fontWeight: "500" },
  tenure: { marginTop: 6, fontWeight: "500" },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: "1.5rem 1.8rem",
    marginBottom: "2rem",
    boxShadow: "0 8px 14px rgba(0,0,0,0.08)",
  },
  section: { marginBottom: "1.5rem" },
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
  infoRow: { display: "flex", flexWrap: "wrap", marginBottom: 8 },
  infoLabel: { fontWeight: "700", marginRight: 6, minWidth: 150, color: "#004d4d" },
  infoValue: { flex: 1, color: "#333", fontWeight: "500" },
};

export default NiwasTiwariPage;
