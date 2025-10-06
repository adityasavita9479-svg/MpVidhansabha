import React from "react";

const SwaimalJainPage = () => {
  return (
    <div style={sjStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={sjStyles.topProfileCard}>
        <div style={sjStyles.photoFrame}>
          <img
            src="/leaders/up-SAWAIM.jpg" // ✅ Replace with correct image path
            alt="श्री सवाईमल जैन"
            style={sjStyles.profileImage}
          />
        </div>
        <div style={sjStyles.divider}></div>
        <div style={sjStyles.nameFrame}>
          <h1 style={sjStyles.topTitle}>श्री सवाईमल जैन</h1>
          <h3 style={sjStyles.topSubtitle}>
            (भूतपूर्व उपाध्‍यक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={sjStyles.tenure}>
            पंचम् विधान सभा (1972-77) <br />
            (10.03.1976 से 30.04.1977 तक)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={sjStyles.card}>
        <section style={sjStyles.section}>
          <SJInfoRow label="जन्‍मतिथि" value="30.11.1912" />
          <SJInfoRow label="शैक्षणिक योग्यता" value="बी.कॉम., एल.एल.बी., एडवोकेट" />
        </section>

        <hr style={sjStyles.divider} />

        <h2 style={sjStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={sjStyles.paragraph}>
          सत्रह वर्ष की आयु से ही देश-सेवा में अग्रसर, स्‍वतंत्रता संग्राम के सभी आंदोलनों में सन् 1930, 
          1932, 1941 तथा 1942 में सक्रिय भाग लिया. कुल साढ़े तीन वर्ष का कारावास हुआ।
        </p>

        <p style={sjStyles.paragraph}>
          सन् 1952 से 1964 तक जबलपुर नगर निगम में महत्‍वपूर्ण पदों पर कार्य किया तथा सन् 1960 में लगातार 
          दो बार महापौर रहे।
        </p>

        <p style={sjStyles.paragraph}>
          सन् 1970 के उपचुनाव तथा सन् 1972 के आम चुनाव में जबलपुर पश्चिम क्षेत्र से विधायक निर्वाचित हुए. 
          कुल कार्यकाल दिसम्‍बर, 1970 से अप्रैल, 1977 तक रहा।
        </p>

        <p style={sjStyles.paragraph}>
          मध्‍यप्रदेश राज्‍य परिवहन निगम तथा राज्‍य वस्‍तु व्‍यापार निगम के संचालक, प्राक्‍कलन समिति के पदेन 
          सदस्‍य, लोक लेखा समिति के सदस्‍य तथा सन् 1975 में उसके अध्‍यक्ष रहे. दिनांक 10.3.76 से 30.4.77 तक 
          विधान सभा के उपाध्‍यक्ष रहे. केन्‍द्र द्वारा गठित क्षेत्रीय ग्रामीण बैंक परिचालन समिति के सदस्‍य रहे।
        </p>

        <p style={sjStyles.paragraph}>
          नगर की प्राय: सभी प्रमुख शैक्षणिक, सामाजिक व व्‍यापारिक संस्‍थाओं में सक्रिय तथा महत्‍वपूर्ण योगदान दिया।
        </p>

        <p style={sjStyles.paragraph}>
          प्रांत के प्रसिद्ध औद्योगिक प्रतिष्‍ठान परफेक्‍ट पॉटरी कम्‍पनी में उच्‍च स्‍तरीय पदों पर 30 वर्षों तक 
          प्रशासनिक तथा व्‍यावसायिक कार्य किया तथा इसी प्रतिष्‍ठान के वित्‍तीय सलाहकार रहे।
        </p>

        <p style={sjStyles.paragraph}>
          भारतीय प्रतिनिधि मंडल के सदस्‍य के रूप में सन् 1960 से सोवियत संघ तथा सन् 1976 में मारीशस की विदेश यात्रा की।
        </p>

        <p style={sjStyles.paragraph}>
          आपका दिनांक 03 जनवरी, 1994 को देहावसान हो गया।
        </p>
      </div>
    </div>
  );
};

// Unique InfoRow component
const SJInfoRow = ({ label, value }) => (
  <div style={sjStyles.infoRow}>
    <span style={sjStyles.infoLabel}>{label}:</span>
    <span style={sjStyles.infoValue}>{value}</span>
  </div>
);

// Styles (matching previous pages)
const sjStyles = {
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

export default SwaimalJainPage;
