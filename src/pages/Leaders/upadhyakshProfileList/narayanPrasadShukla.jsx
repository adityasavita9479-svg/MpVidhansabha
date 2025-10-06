import React from "react";

const NarayanPrasadShuklaPage1 = () => {
  return (
    <div style={npsStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={npsStyles.topProfileCard}>
        <div style={npsStyles.photoFrame}>
          <img
            src="/leaders/up-NP_shukla.jpg" // ✅ Replace with correct image path
            alt="श्री नारायण प्रसाद शुक्‍ल"
            style={npsStyles.profileImage}
          />
        </div>
        <div style={npsStyles.divider}></div>
        <div style={npsStyles.nameFrame}>
          <h1 style={npsStyles.topTitle}>श्री नारायण प्रसाद शुक्‍ल</h1>
          <h3 style={npsStyles.topSubtitle}>
            (भूतपूर्व उपाध्‍यक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={npsStyles.tenure}>
            पंचम् विधान सभा (1972-77) <br />
            (28.07.1972 से 07.01.1976 तक)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={npsStyles.card}>
        <section style={npsStyles.section}>
          <NPSInfoRow label="जन्‍मतिथि" value="15.12.1931" />
          <NPSInfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <NPSInfoRow label="शैक्षणिक योग्यता" value="एम.ए." />
          <NPSInfoRow label="व्‍यवसाय" value="पत्रकारिता" />
          <NPSInfoRow label="अभिरूचि" value="सामाजिक कार्य, पठन, लेखन" />
          <NPSInfoRow label="स्‍थायी पता" value="7/1, शनि गली, इन्‍दौर नगर, इन्‍दौर (मध्‍यप्रदेश)" />
        </section>

        <hr style={npsStyles.divider} />

        <h2 style={npsStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={npsStyles.paragraph}>
          होल्‍कर कॉलेज इन्‍दौर में अध्‍ययन तथा छात्र आंदोलन का नेतृत्‍व किया। यू.पी. आई. संवाद समिति में 
          सम्‍पादन कार्य किया। 15 वर्षों तक प्रमुख समाचार पत्रों की संवाद समिति में कार्यरत रहे। 
          इन्‍दौर कॉरपोरेशन में 12 वर्षों तक सदस्‍य, डिप्‍टी मेयर तथा 2 वर्षों तक मेयर रहे। 
          अखिल भारतीय मेयर्स कौन्सिल की 7 सदस्‍यीय कार्यकारिणी के निर्वाचित सदस्‍य रहे। खेलकूद 
          संस्‍थाओं के पदाधिकारी रहे।
        </p>

        <p style={npsStyles.paragraph}>
          सन् 1972 के आम चुनाव में इन्‍दौर-4 निर्वाचन क्षेत्र से प्रथम बार विधान सभा के सदस्‍य निर्वाचित 
          हुए तथा दिनांक 28 जुलाई, 1972 को मध्‍यप्रदेश विधान सभा के उपाध्‍यक्ष निर्वाचित हुये 
          तथा दिनांक 07.01.1976 तक इस पद को सुशोभित करते रहे। इसके पश्‍चात् दिनांक 08.01.76 
          से 30.4.77 तक श्री श्‍यामाचरण शुक्‍ल के मंत्री-मंडल में राज्‍यमंत्री रहे।
        </p>
      </div>
    </div>
  );
};

// Unique InfoRow component
const NPSInfoRow = ({ label, value }) => (
  <div style={npsStyles.infoRow}>
    <span style={npsStyles.infoLabel}>{label}:</span>
    <span style={npsStyles.infoValue}>{value}</span>
  </div>
);

// Styles (same structure as RamkishorShuklaPage1)
const npsStyles = {
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

export default NarayanPrasadShuklaPage1;
