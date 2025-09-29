import React from "react";

const HajarilalRaghuwanshiPage = () => {
  return (
    <div style={rsStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={rsStyles.topProfileCard}>
        <div style={rsStyles.photoFrame}>
          <img
            src="/leaders/ul-HL_raghuvanshi.jpg" // ✅ Replace with correct image path
            alt="श्री हजारीलाल रघुवंशी"
            style={rsStyles.profileImage}
          />
        </div>
        <div style={rsStyles.divider}></div>
        <div style={rsStyles.nameFrame}>
          <h1 style={rsStyles.topTitle}>श्री हजारीलाल रघुवंशी</h1>
          <h3 style={rsStyles.topSubtitle}>
            (भूतपूर्व उपाध्‍यक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={rsStyles.tenure}>
            द्वादश विधान सभा (2003-2008) <br />
            (दिनांक 18.12.2003 से 11.12.2008)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={rsStyles.card}>
        <section style={rsStyles.section}>
          <RSInfoRow label="पिता" value="स्‍व. श्री नन्‍हू सिंह रघुवंशी" />
          <RSInfoRow label="जन्‍मतिथि" value="05.जुलाई, 1930" />
          <RSInfoRow label="जन्‍म स्‍थान" value="ग्राम-चतरखेड़ा, जिला - होशंगाबाद" />
          <RSInfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <RSInfoRow label="पत्नी का नाम" value="श्रीमती सावित्री रघुवंशी" />
          <RSInfoRow label="संतान" value="5 पुत्र, 2 पुत्रियां" />
          <RSInfoRow label="शैक्षणिक योग्यता" value="मैट्रिक" />
          <RSInfoRow label="व्यवसाय" value="कृषि" />
          <RSInfoRow label="अभिरुचि" value="कुश्‍ती, जन-कल्याणकारी कार्य" />
          <RSInfoRow label="स्थायी पता" value="मु. पो. बानापुरा, तहसील-सिवनी मालवा, जिला- होशंगाबाद (म.प्र.)" />
          <RSInfoRow label="स्थायी दूरभाष क्रं." value="07570-224640, 224240" />
        </section>

        <hr style={rsStyles.divider} />

        <h2 style={rsStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={rsStyles.paragraph}>
          सन् 1948 से सन् 1976 तक की अवधि में मंडी समिति के उपाध्यक्ष. 1970-1974 में कुसुम महाविद्यालय सिवनी मालवा समिति के उपाध्यक्ष. मंडल एवं तहसील कांग्रेस कमेटी के अध्यक्ष. ब्लॉक जनपद पंचायत के अध्यक्ष एवं जिला कांग्रेस कमेटी के उपाध्यक्ष.
        </p>

        <p style={rsStyles.paragraph}>
          सन् 1977 में छठवीं विधान सभा के सदस्य निर्वाचित एवं पुस्तकालय तथा प्राकलन समिति के सदस्य. सन् 1977-1980 में मध्यप्रदेश कांग्रेस कमेटी के सदस्य. सन् 1980 में सातवीं विधान सभा के सदस्य निर्वाचित तथा राज्य मंत्री, गृह, जेल, सिंचाई, पंचायत तथा बीस सूत्रीय कार्यक्रम विभाग रहे. सन् 1986-1989 तक राज्य बीस सूत्रीय कार्यक्रम समिति के सदस्य. सन् 1990-92 में मध्यप्रदेश कमेटी के उपाध्यक्ष. सन् 1991 से लगातार अखिल भारतीय कांग्रेस कमेटी के सदस्य.
        </p>

        <p style={rsStyles.paragraph}>
          सन् 1993 में दशम् विधान सभा के सदस्य निर्वाचित एवं मंत्री, लोक निर्माण, कृषि, नगरीय कल्याण एवं सहकारिता विभाग रहे. सन् 1998 में ग्यारहवीं विधान सभा के सदस्य निर्वाचित एवं मंत्री, योजना, आर्थिक एवं सांख्यिकी, बीस सूत्र कार्यान्वयन, राजस्व, पुनर्वास, संसदीय कार्य विभाग रहे. 
        </p>

        <p style={rsStyles.paragraph}>
          सन् 2003 में पांचवीं बार विधान सभा सदस्य निर्वाचित. दिनांक 18 दिसंबर, 2003 से 11 दिसंबर, 2008 तक उपाध्यक्ष, मध्यप्रदेश विधान सभा.
        </p>

        <p style={rsStyles.paragraph}>
          टिप्‍पणी :- दिनांक 9 अप्रैल, 2020 को दिवंगत.
        </p>
      </div>
    </div>
  );
};

// InfoRow component
const RSInfoRow = ({ label, value }) => (
  <div style={rsStyles.infoRow}>
    <span style={rsStyles.infoLabel}>{label}:</span>
    <span style={rsStyles.infoValue}>{value}</span>
  </div>
);

// CSS same as Ramkishor Shukla page
const rsStyles = {
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

export default HajarilalRaghuwanshiPage;
