import React from "react";

const SundarlalPatwaPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-SL_patwa.jpg" // ✅ Replace with actual image path
            alt="श्री सुंदरलाल पटवा"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री सुंदरलाल पटवा</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={ntStyles.tenure}>
            सप्‍तम् विधान सभा (1980-1985)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="पिता" value="श्री मन्नालाल पटवा" />
          <InfoRow label="जन्मतिथि" value="11 नवम्बर, 1924" />
          <InfoRow label="जन्म स्थान" value="कुकड़ेश्वर" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="शैक्षणिक योग्यता" value="इन्‍टरमीडिएट" />
          <InfoRow label="व्यवसाय" value="कृषि" />
          <InfoRow label="अभिरुचि" value="खेलकूद, संगीत, सहकारिता, उद्योग" />
          <InfoRow label="भाषाओं का ज्ञान" value="हिन्‍दी, अंग्रेजी" />
          <InfoRow label="स्थायी पता" value="कुकड़ेश्वर, जिला - मंदसौर (म.प्र.)" />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          1941 से इन्दौर राज्य प्रजा मंडल एवं 1942 से राष्ट्रीय स्वयंसेवक संघ से सम्बद्ध. 1947 से 1951 तक संघ प्रचारक एवं 1948 से संघ आंदोलन में सात माह जेल यात्रा. 1951 से जनसंघ के सक्रिय कार्यकर्ता. 1957 से 1967 तक विधान सभा सदस्य एवं विरोधी दल के मुख्य सचेतक. 1967 से 1974 तक जिला सहकारी बैंक के अध्यक्ष. संचालक, राज्य सहकारी बैंक एवं राज्य सहकारी विपणन संघ. प्रदेश जनसंघ के कोषाध्यक्ष.
        </p>
        <p style={ntStyles.paragraph}>
          ब्रिटेन के 1974 के आम चुनावों का अध्ययन तथा गणमान्य लोगों से भेंट. 1975 में म.प्र. जनसंघ के महामंत्री. 27 जून, 1975 से 28 जनवरी, 1977 तक आपातकाल में मीसा में निरुद्ध. जनता पार्टी कार्य समिति के सदस्य. 1977 में विधान सभा सदस्य निर्वाचित होकर 20 जनवरी, 1980 से 17 फरवरी, 1980 तक प्रदेश के मुख्यमंत्री.
        </p>
        <p style={ntStyles.paragraph}>
          1980 में सीहोर से विधान सभा सदस्य निर्वाचित होकर भाजपा के नेता एवं सदन में विरोधी दल के नेता. विधान सभा की विभिन्न समितियों के सदस्य तथा लोक लेखा समिति के सभापति. 1980 में तीन माह तक संयुक्त राज्य अमेरिका का भ्रमण एवं राष्ट्रपति चुनाव का अनुभव प्राप्त किया. 1985 में पुन: विधान सभा सदस्य चुने गए तथा लोक लेखा समिति के सभापति एवं सामान्य प्रयोजन समिति के सदस्य रहे. 1986 से भाजपा के प्रदेशाध्यक्ष. वर्ष 1989 में हुए अखिल भारतीय पीठासीन अधिकारी सम्मेलन के अवसर पर 'विधान गौरव' की उपाधि से सम्मानित.
        </p>
        <p style={ntStyles.paragraph}>
          सन् 1990 के विधान सभा चुनाव में सदस्य निर्वाचित एवं 5.3.1990 से 15.12.1992 तक मुख्यमंत्री रहे. 1993 में पुन: विधान सभा सदस्य निर्वाचित.
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

export default SundarlalPatwaPage;
