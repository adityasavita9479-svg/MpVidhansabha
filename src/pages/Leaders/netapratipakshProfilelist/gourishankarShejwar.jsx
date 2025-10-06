import React from "react";

const GaurishankarShejwarPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-GS_shejwar.jpg" // ✅ Replace with actual image path
            alt="श्री गौरीशंकर शेजवार"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री गौरीशंकर शेजवार</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={ntStyles.tenure}>एकादश विधान सभा (1998-2002)</div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="पिता" value="स्‍व. श्री शिवचरण शेजवार" />
          <InfoRow label="जन्मतिथि" value="01.जुलाई, 1934" />
          <InfoRow label="जन्म स्थान" value="उदयपुरा, जिला-रायसेन" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्नी का नाम" value="श्रीमती किरण शेजवार" />
          <InfoRow label="संतान" value="1 पुत्र, 2 पुत्रियां" />
          <InfoRow label="शैक्षणिक योग्यता" value="एम.बी.बी.एस." />
          <InfoRow label="व्यवसाय" value="कृषि" />
          <InfoRow label="अभिरुचि" value="बैडमिंटन, ग्रामों में भ्रमण" />
          <InfoRow label="स्थायी पता" value="ग्राम-बारला, पो.- माखनी, जिला-रायसेन (म.प्र.)" />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          बाल्‍यावस्‍था से राष्‍ट्रीय स्‍वयंसेवक संघ के स्‍वयंसेवक एवं छात्र जीवन से जनसंघ का कार्य. छात्र राजनीति में सक्रिय तथा गांधी मेडीकल कॉलेज, भोपाल में छात्र संघ के पदाधिकारी. 1977 में छठी विधान सभा के सदस्‍य निर्वाचित एवं संसदीय सचिव, लोक स्‍वास्‍थ्‍य तथा परिवार कल्‍याण विभाग रहे. जनता युवा मोर्चा के प्रदेश उपाध्‍यक्ष. 1980 में सातवीं विधान सभा के सदस्‍य निर्वाचित एवं भा.ज.पा. विधायक दल के सचिव तथा लोक लेखा और याचिका समिति के सदस्‍य. 1990 में नौवीं विधान सभा के सदस्‍य निर्वाचित. प्रत्‍यायुक्‍त विधान समिति के सभापति. तदनंतर राज्‍य मंत्री गृह, विमानन, सामान्‍य प्रशासन, लोक स्‍वास्‍थ्‍य एवं परिवार कल्‍याण विभाग रहे.
        </p>
        <p style={ntStyles.paragraph}>
          1993 में दसवीं विधान सभा के सदस्‍य निर्वाचित एवं लोक लेखा समिति के सभापति और कार्य मंत्रणा समिति के सदस्‍य. भा.ज.पा. विधायक दल के महासचिव. अनुसूचित जाति मोर्चा के प्रदेश उपाध्‍यक्ष. 1998 में पांचवीं बार विधान सभा सदस्‍य निर्वाचित एवं 2 फरवरी, 1999 के 1 सितम्‍बर, 2002 तक नेता प्रतिपक्ष, म.प्र. विधान सभा रहे. विधान सभा की विशेष समिति के सभापति. भा.ज.पा. की राष्‍ट्रीय कार्यकारिणी के सदस्‍य. सितम्‍बर, 2003 से भा.ज.पा. मध्‍यप्रदेश के वरिष्‍ठ उपाध्‍यक्ष.
        </p>
        <p style={ntStyles.paragraph}>
          सन् 2003 में बारहवीं विधान सभा के सदस्‍य निर्वाचित एवं मंत्री, सामान्‍य प्रशासन, ऊर्जा, चिकित्‍सा शिक्षा, लोक स्‍वास्‍थ्‍य एवं परिवार कल्‍याण, स्‍कूल शिक्षा, सामाजिक न्‍यास, आदिम जाति तथा अनुसूचित जाति कल्‍याण (आदिम जाति कल्‍याण को छोड़कर) मंत्री, ऊर्जा, चिकित्‍सा शिक्षा, जैव विविधता तथा जैव प्रौद्योगिकी रहे. सन् 2013 में सातवीं बार विधान सभा सदस्‍य निर्वाचित.
        </p>
      </div>
    </div>
  );
};

// InfoRow component
const InfoRow = ({ label, value }) => (
  <div style={ntStyles.infoRow}>
    <span style={ntStyles.infoLabel}>{label}:</span>
    <span style={ntStyles.infoValue}>{value}</span>
  </div>
);

// CSS same as previous नेता प्रतिपक्ष profiles
const ntStyles = {
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

export default GaurishankarShejwarPage;
