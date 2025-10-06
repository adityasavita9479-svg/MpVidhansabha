import React from "react";

// InfoRow component
const InfoRow = ({ label, value }) => (
  <div style={ntStyles.infoRow}>
    <span style={ntStyles.infoLabel}>{label}:</span>
    <span style={ntStyles.infoValue}>{value}</span>
  </div>
);

const ShriSundarlalPatwaPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/cm-sunderlalpatwa.jpg"
            alt="श्री सुंदरलाल पटवा"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री सुंदरलाल पटवा</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व मुख्‍यमंत्री, मध्यप्रदेश)
          </h3>
          <div style={ntStyles.tenure}>
            षष्‍टम् विधानसभा (1977-1980) एवं नवम् विधानसभा (1990-1992) <br />
            (दिनांक 20.01.1980 से 17.02.1980 एवं 05.03.1990 से 15.12.1992 तक)
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div style={ntStyles.card}>
        <InfoRow label="पिता" value="श्री मन्नालाल पटवा" />
        <InfoRow label="जन्मतिथि" value="11 नवम्बर, 1924" />
        <InfoRow label="जन्म स्थान" value="कुकड़ेश्वर, जिला मंदसौर (म.प्र.)" />
        <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
        <InfoRow label="व्यवसाय" value="कृषि" />
        <InfoRow label="अभिरुचि" value="खेलकूद, संगीत, सहकारिता, उद्योग" />
        <InfoRow label="भाषाओं का ज्ञान" value="हिन्दी, अंग्रेजी" />
        <InfoRow label="स्थायी पता" value="कुकड़ेश्वर, जिला मंदसौर (म.प्र.)" />
      </div>

      {/* Political Career */}
      <div style={ntStyles.card}>
        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>
        <p style={ntStyles.paragraph}>
          1941 से इन्दौर राज्य प्रजा मण्डल एवं 1942 से राष्ट्रीय स्वयंसेवक संघ से संबद्ध।  
          1947-1951 संघ प्रचारक, 1948 में संघ आंदोलन में सात माह जेल यात्रा।  
          1951 से जनसंघ के सक्रिय कार्यकर्ता।  
          1957-1967 विधान सभा सदस्य एवं विरोधी दल के मुख्य सचेतक।  
          1967-1974 जिला सहकारी बैंक के अध्यक्ष; संचालक, राज्य सहकारी बैंक एवं राज्य सहकारी विपणन संघ।  
          प्रदेश जनसंघ के कोषाध्यक्ष। 1974 में ब्रिटेन के आम चुनावों का अध्ययन।  
          1975 में म.प्र. जनसंघ के महामंत्री। आपातकाल (1975-77) में मीसा में निरुद्ध।  
          1977 में मुख्यमंत्री (20.01.1980 - 17.02.1980)।  
          1980 में पुनः विधायक; भाजपा नेता एवं विरोधी दल के नेता।  
          1985 में पुनः विधायक; लोक लेखा समिति के अध्यक्ष।  
          1986 से भाजपा के प्रदेशाध्यक्ष।  
          1989 में ‘विधान गौरव’ उपाधि।  
          1990 में मुख्यमंत्री (05.03.1990 - 15.12.1992)।  
          1993, 1998 में विधायक।  
          1997 व 1999 में लोकसभा सदस्य चुने गए।  
          केंद्र सरकार में मंत्री (1999-2001) — ग्रामीण विकास, रसायन एवं उर्वरक, खनिज विभाग।
        </p>
        {/* Death */}
        <p style={ntStyles.paragraph}>
          <strong>दिनांक 28 दिसम्बर, 2016</strong> को आपका देहावसान हो गया।
        </p>
      </div>

    </div>
  );
};

// Styles
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

export default ShriSundarlalPatwaPage;
