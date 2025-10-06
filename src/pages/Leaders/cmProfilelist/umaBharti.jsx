import React from "react";

// InfoRow component
const InfoRow = ({ label, value }) => (
  <div style={ntStyles.infoRow}>
    <span style={ntStyles.infoLabel}>{label}:</span>
    <span style={ntStyles.infoValue}>{value}</span>
  </div>
);

const UmaBhartiPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/cm-umabharti.jpg" // ✅ Replace with actual image path
            alt="सुश्री उमा भारती"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>सुश्री उमा भारती</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व मुख्‍यमंत्री, मध्यप्रदेश)
          </h3>
          <div style={ntStyles.tenure}>
            द्वादश विधान सभा (2003-2008) <br />
            (दिनांक 08.12.2003 से 23.08.2004 तक)
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div style={ntStyles.card}>
        <InfoRow label="पिता" value="स्‍व. श्री गुलाब सिंह लोधी" />
        <InfoRow label="जन्मतिथि" value="03. मई, 1959" />
        <InfoRow label="जन्म स्थान" value="ग्राम-डूंडा, जिला-टीकमगढ़" />
        <InfoRow label="वैवाहिक स्थिति" value="अविवाहित" />
        <InfoRow label="शैक्षणिक योग्यता" value="प्राथमिक शिक्षा" />
        <InfoRow label="अभिरुचि" value="अध्‍ययन, ड्रायविंग, पर्यटन, फोटोग्राफी" />
        <InfoRow label="स्थायी पता" value="28, सिविल लाइन्‍स, जिला-टीकमगढ़ (म.प्र.)" />
        <InfoRow label="दूरभाष (स्थायी)" value="(07683) 244264, मो.- 09425018228" />
        <InfoRow label="स्थानीय पता" value="2, सिविल लाइन, प्रोफेसर कॉलोनी, भोपाल, (म.प्र.)" />
        <InfoRow label="दूरभाष (स्थानीय)" value="2440793, 2441397" />
      </div>

      {/* Political Career */}
      <div style={ntStyles.card}>
        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>
        <p style={ntStyles.paragraph}>
          भा.ज.पा. मध्यप्रदेश की उपाध्यक्ष. 1989 में नौवीं, 1991 में दसवीं, 1996 में ग्यारहवीं, 1998 में बारहवीं एवं 1999 में तेरहवीं लोक सभा की सदस्य निर्वाचित. 
          भा.ज.पा. युवा मोर्चा की दो बार राष्ट्रीय अध्यक्ष रहीं. 1998-99 में भारत सरकार में राज्य मंत्री मानव संसाधन विकास एवं 13 अक्टूबर, 1999 से 2 फरवरी, 2000 तक राज्य मंत्री (स्वतंत्र प्रभार) पर्यटन. 
          1991-92 एवं 1992-93 में लोक लेखा समिति (दो बार), 1996 में विज्ञान और प्रौद्योगिकी एवं पर्यावरण और वन संबंधी समिति तथा संविधान संशोधन संबंधी संयुक्त समिति की सदस्य रहीं. 
          माता बेटीबाई चेरिटेबल ट्रस्ट तथा मानव जागृति संघ के माध्यम से जन कल्याणकारी कार्य. राम जन्म भूमि ट्रस्ट की सदस्य. 
          विश्व हिन्दू परिषद के कार्यकलापों से संबंद्ध. तीन पुस्तकें प्रकाशित. धार्मिक प्रवचन हेतु अनेक देशों की यात्रा. 18 दिसम्बर, 2003 को तेरहवीं लोक सभा की सदस्यता से त्यागपत्र.
        </p>
        <p style={ntStyles.paragraph}>
          सन् 2003 में पहली बार विधान सभा सदस्य निर्वाचित. 8 दिसंबर, 2003 से 23 अगस्त, 2004 तक मुख्यमंत्री, मध्यप्रदेश. 
          <br />
          टिप्‍पणी - 4 मई, 2006 से विधान सभा सदस्यता से त्यागपत्र.
        </p>
      </div>
    </div>
  );
};

// Same CSS as previous CM pages
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

export default UmaBhartiPage;
