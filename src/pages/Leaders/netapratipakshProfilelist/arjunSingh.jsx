import React from "react";

const ArjunSinghPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-A_singh.jpg" // ✅ Replace with actual image path
            alt="श्री अर्जुन सिंह"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री अर्जुन सिंह</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={ntStyles.tenure}>
            षष्ठम् विधान सभा (1977-1980)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="पिता" value="श्री राव शिव बहादुर सिंह" />
          <InfoRow label="जन्मतिथि" value="05.नवम्बर, 1930" />
          <InfoRow label="जन्म स्थान" value="चुरहट" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., एल.एल.बी." />
          <InfoRow label="व्यवसाय" value="कृषि" />
          <InfoRow label="अभिरुचि" value="वाचन, शिकार और यात्रा" />
          <InfoRow label="स्थायी पता" value="ग्राम व पोस्ट - चुरहट, जिला - सीधी (म.प्र.)" />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          छात्र जीवन से ही सामाजिक कार्यों में भाग लिया, सन् 1953 में रीवा दरबार कॉलेज यूनियन के अध्यक्ष, दिनांक 30 सितम्बर, 1963 से राज्य मंत्री कृषि, सामान्य प्रशासन तथा सूचना प्रसारण विभाग, सन् 1964 में मास्को में आयोजित विश्व युवक सम्मेलन में भारतीय प्रतिनिधि मंडल के उपनेता. सन् 1965 में संयुक्त राज्य अमेरिका में मध्यप्रदेश कृषि विश्वविद्यालय की स्थापना हेतु चर्चा के लिए यात्रा.
        </p>
        <p style={ntStyles.paragraph}>
          मई 1967 के उप चुनाव में निर्वाचित. दिनांक 1 जून, 1967 से 30 जुलाई, 1967 तक योजना तथा विकास मंत्री. सन् 1969 में संयुक्त राष्ट्र संघ में भारतीय प्रतिनिधि मंडल के सदस्य. सन् 1970 में संयुक्त राष्ट्र संघ के तत्वाधान में बेलग्रेड, युगोस्लाविया में आयोजित विचार गोष्ठी में भारतीय प्रतिनिधि के रूप में भाग लिया.
        </p>
        <p style={ntStyles.paragraph}>
          15 अगस्त, 1972 से दिसम्बर, 1975 तक शिक्षा मंत्री, 1977 के चुनाव में पुन: निर्वाचित होकर 15 जुलाई, 1977 से मध्यप्रदेश विधान सभा में प्रतिपक्ष के नेता एवं लोक लेखा समिति के सभापति. जनता शासन काल में दल द्वारा प्रदेश में आयोजित विभिन्न आंदोलनों का नेतृत्व किया और जेल यात्रा की. सन् 1980 में मध्यप्रदेश विधान सभा के सदस्य निर्वाचित होने के बाद सर्वसम्मति से दल के नेता. दिनांक 9.6.1980 से प्रदेश के मुख्यमंत्री.
        </p>
        <p style={ntStyles.paragraph}>
          1985 में पुन: मुख्यमंत्री, तदनंतर पंजाब के राज्यपाल नियुक्त होने के कारण सदस्यता से त्यागपत्र. 1985 में केंद्रीय वाणिज्य मंत्री. 1985 में लोक सभा सदस्य. 1986 में अ.भा. कांग्रेस कमेटी के उपाध्यक्ष. 1986 में केंद्रीय संचार मंत्री. 1989 से प्रदेश कांग्रेस कमेटी के अध्यक्ष. 1990 में विधान सभा सदस्य निर्वाचित. 1991 में आप दसवीं लोकसभा तथा अप्रैल, 2000 और मार्च, 2006 में आप राज्यसभा के सदस्य चुने गये. आप जून, 1991 से मई, 2009 तक दो बार भारत सरकार में मानव संसाधन विकास मंत्री रहे.
        </p>
        <p style={ntStyles.paragraph}>
          टिप्पणी - आपका दिनांक 4.3.2011 को देहावसान हो गया.
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

export default ArjunSinghPage;
