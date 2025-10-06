import React from "react";

const RohaniPage = () => {
  return (
    <div style={irStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={irStyles.topProfileCard}>
        <div style={irStyles.photoFrame}>
          <img
            src="/leaders/sp-Ishwerdas_Rohani (1).jpg" // ✅ Replace with correct image path
            alt="श्री ईश्‍वरदास रोहाणी"
            style={irStyles.profileImage}
          />
        </div>
        <div style={irStyles.divider}></div>
        <div style={irStyles.nameFrame}>
          <h1 style={irStyles.topTitle}>श्री ईश्‍वरदास रोहाणी</h1>
          <h3 style={irStyles.topSubtitle}>
            (भूतपूर्व उपाध्‍यक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={irStyles.tenure}>
            एकादश विधान सभा (1998-2003) <br />
            (दिनांक 11.02.1999 से 05.12.2003 तक)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={irStyles.card}>
        <section style={irStyles.section}>
          <IRInfoRow label="पिता" value="श्री चन्‍दूमल रोहाणी" />
          <IRInfoRow label="जन्‍मतिथि" value="30.जून, 1946" />
          <IRInfoRow label="जन्‍म स्‍थान" value="कराची" />
          <IRInfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <IRInfoRow label="पत्नी का नाम" value="श्रीमती माया देवी" />
          <IRInfoRow label="संतान" value="2 पुत्र, 4 पुत्रियां" />
          <IRInfoRow label="शैक्षणिक योग्यता" value="बी. कॉम., एल.एल.बी." />
          <IRInfoRow label="व्यवसाय" value="मुद्रण" />
          <IRInfoRow label="अभिरुचि" value="अध्‍ययन, पीडि़त मानवता की सेवा" />
        </section>

        <hr style={irStyles.divider} />

        <h2 style={irStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={irStyles.paragraph}>
          बाल्‍यावस्‍था से राष्‍ट्रीय स्‍वयं सेवक संघ के स्‍वयं सेवक. राजनैतिक यात्रा सन् 1965 में भारतीय जनसंघ के गलगला वार्ड के सदस्य के रूप में प्रारम्‍भ की. 
          सन् 1973 में भारतीय जनसंघ की ओर से जबलपुर नगर निगम में वरिष्ठ पार्षद निर्वाचित. भूमिगत रहकर 14 नवम्‍बर, 1975 को जबलपुर में आपातकाल के विरूद्ध 
          प्रथम आंदोलन का नेतृत्‍व किया. आपातकाल की समाप्ति तक 19 महीने जेल में निरुद्ध रहे.
        </p>

        <p style={irStyles.paragraph}>
          जन समस्याओं के निराकरण हेतु अनेक बार जेल यात्राएं की. सन् 1979 में तिलक वार्ड से निगम हेतु पार्षद निर्वाचित तथा नगर निगम में तत्कालीन जनता पार्टी के नेता. 
          भारतीय जनता पार्टी के दो बार जिला महामंत्री, जिलाध्यक्ष एवं प्रदेश मंत्री. जबलपुर विकास प्राधिकरण के अध्यक्ष, रानी दुर्गावती विश्वविद्यालय जबलपुर की विद्वत परिषद के सदस्य निर्वाचित.
        </p>

        <p style={irStyles.paragraph}>
          भाजपा नगर निगम एवं नगर पालिका मोर्चा के प्रदेश प्रभारी तथा भाजपा के जबलपुर संभाग प्रभारी. सन् 1991 में निजी डेरी मालिकों द्वारा दूध के भावों में की गई वृद्धि के विरूद्ध 72 घंटों का तथा अनुसूचित जाति की बस्तियों में पेयजल व्यवस्था हेतु चार दिन तक अनशन.
        </p>

        <p style={irStyles.paragraph}>
          सन् 1993 में दशम् विधान सभा के सदस्य निर्वाचित एवं भाजपा विधायक दल के सचेतक रहे. सन् 1998 में दूसरी बार विधान सभा के सदस्य निर्वाचित एवं दिनांक 11 फरवरी, 1999 से 5 दिसंबर, 2003 तक उपाध्यक्ष रहे. 
          सन् 2003 में तीसरी बार विधान सभा के सदस्य निर्वाचित एवं दिनांक 16 दिसम्‍बर, 2003 से 4 जनवरी, 2009 तक अध्यक्ष, मध्‍यप्रदेश विधानसभा रहे. सन् 2008 में चौथी बार विधान सभा सदस्य निर्वाचित एवं जनवरी, 2009 से निधन दिनांक तक अध्यक्ष, म.प्र. विधान सभा.
        </p>

        <p style={irStyles.paragraph}>
          टिप्‍पणी :- 05 नवम्‍बर, 2013 को दिवंगत.
        </p>
      </div>
    </div>
  );
};

// Unique InfoRow component for Ishwardas Rohani
const IRInfoRow = ({ label, value }) => (
  <div style={irStyles.infoRow}>
    <span style={irStyles.infoLabel}>{label}:</span>
    <span style={irStyles.infoValue}>{value}</span>
  </div>
);

// Styles for Ishwardas Rohani page
const irStyles = {
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

export default RohaniPage;
