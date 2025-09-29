import React from "react";

const PyareLalKanwarPage = () => {
  return (
    <div style={plkStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={plkStyles.topProfileCard}>
        <div style={plkStyles.photoFrame}>
          <img
            src="/leaders/up-Pyarelal_Kanwar.jpg" // ✅ Replace with correct image path
            alt="श्री प्‍यारे लाल कंवर"
            style={plkStyles.profileImage}
          />
        </div>
        <div style={plkStyles.divider}></div>
        <div style={plkStyles.nameFrame}>
          <h1 style={plkStyles.topTitle}>श्री प्‍यारे लाल कंवर</h1>
          <h3 style={plkStyles.topSubtitle}>
            (भूतपूर्व उपाध्‍यक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={plkStyles.tenure}>
            सप्‍तम् विधान सभा (1980-85) <br />
            (06.04.1984 से 10.03.1985)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={plkStyles.card}>
        <section style={plkStyles.section}>
          <PLKInfoRow label="जन्‍मतिथि" value="19.03.1933" />
          <PLKInfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <PLKInfoRow label="शैक्षणिक योग्यता" value="एम.ए., एल.एल.बी." />
          <PLKInfoRow label="व्‍यवसाय" value="वकालत एवं कृषि" />
          <PLKInfoRow label="अभिरूचि" value="खेलकूद, समाजसेवा, विशेषकर पिछड़े वर्ग का उत्‍थान" />
          <PLKInfoRow label="स्‍थायी पता" value="ग्राम व पोस्‍ट - भेसमा, तह. कटघीरा, जिला - बिलासपुर (म.प्र.)" />
        </section>

        <hr style={plkStyles.divider} />

        <h2 style={plkStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :
        </h2>

        <p style={plkStyles.paragraph}>
          विद्यार्थी जीवन से ही राजनीति में रूचि. वकालत के साथ-साथ सामाजिक अध्‍ययन तथा समाज कल्‍याण 
          संस्‍थाओं के संगठन में सहयोग. सन् 1962 के आम चुनाव में विधान सभा सदस्य निर्वाचित हुए. तत्‍पश्‍चात् 
          मण्‍डल कांग्रेस का संगठन किया. सन् 1966 से निरन्‍तर प्रदेश कमेटी के सक्रिय सदस्य रहे. 
          सन् 1967 में विधान सभा के सदस्य निर्वाचित हुए.
        </p>

        <p style={plkStyles.paragraph}>
          जिला स्‍तरीय आदिम जाति, अनुदान समिति, विधान सभा की सदन समिति, लोक लेखा समिति, प्रत्‍यायुक्‍त 
          विधान समिति, रविशंकर शुक्‍ल विश्‍वतवद्यालय समिति के सक्रिय सदस्य रहे. दिनांक 9 अप्रैल, 1969 से 
          पं. श्‍यामाचरण शुक्‍ल के मंत्रिमण्‍डल में राज्‍यमंत्री, आदिम जाति कल्‍याण का पद ग्रहण किया. 
          सन् 1972 के आम चुनाव में विधायक चुने गये.
        </p>

        <p style={plkStyles.paragraph}>
          सन् 1980 के आम चुनाव में पुन: विधान सभा के सदस्य निर्वाचित हुए. 06.04.1984 से 10.03.1985 तक 
          विधान सभा के उपाध्‍यक्ष रहे. 1985 में पुन: सदस्य निर्वाचित एवं राज्‍यमंत्री वित्‍त एवं आदिम जाति कल्‍याण. 
          1993 में विधान सभा सदस्य निर्वाचित एवं उप मुख्‍यमंत्री रहे.
        </p>

        <p style={plkStyles.paragraph}>
          दिनांक 13 जनवरी, 2010 को दिवंगत.
        </p>
      </div>
    </div>
  );
};

// Unique InfoRow component for Pyare Lal Kanwar
const PLKInfoRow = ({ label, value }) => (
  <div style={plkStyles.infoRow}>
    <span style={plkStyles.infoLabel}>{label}:</span>
    <span style={plkStyles.infoValue}>{value}</span>
  </div>
);

// Styles for Pyare Lal Kanwar page
const plkStyles = {
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

export default PyareLalKanwarPage;
