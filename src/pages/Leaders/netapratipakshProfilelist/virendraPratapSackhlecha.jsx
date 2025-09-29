import React from "react";

const VirendraKumarSakhalechaPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-VK_saklecha.jpg" // ✅ Replace with actual image path
            alt="श्री वीरेन्द्र कुमार सखलेचा"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री वीरेन्द्र कुमार सखलेचा</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={ntStyles.tenure}>
            तृतीय विधान सभा (1962-67) एवं चतुर्थ विधान सभा (1967-1972)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="जन्मतिथि" value="04.मार्च, 1930" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., एल.एल.बी." />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          छात्र जीवन काल में ही शैक्षणिक तथा सार्वजनिक कार्यों में अत्यधिक रुचि. कॉलेज पत्रिका के अंग्रेजी विभाग के संपादक चुने गये और विभिन्न स्थानों के लिए चुनाव लड़ने वाले सफल छात्र उम्मीदवारों में सर्वाधिक मत मिले. सन् 1953 में महु नगर में साढ़े तीन वर्ष तक वकालत की. दिसम्बर 1956 में महू छोड़कर आम चुनाव में भाग लेने के लिए जावद आये, फरवरी, 1957 में जनसंघ के टिकिट पर जावद विधान सभा निर्वाचन क्षेत्र से म.प्र. विधान सभा के सदस्य निर्वाचित. सन् 1962 से 1967 तक विधान सभा में विरोधी दल के नेता रहे. सन् 1967 में तीसरी बार जनसंघ टिकिट पर जावद निर्वाचन क्षेत्र से राज्य विधान सभा के लिए चुने गये और विरोधी दल के नेता निर्वाचित हुए. विधायक के रूप में अपने कानूनी तथा संवैधानिक मामलों के परिपक्व ज्ञान के कारण प्रतिष्ठा प्राप्त की. तीन वर्षों तक अर्थात् 1962, 63 और 64 तक लोक लेखा समिति के सभापति रहे.
        </p>

        <p style={ntStyles.paragraph}>
          1967 में श्री द्वारिका प्रसाद मिश्र की सरकार को विधान सभा में पराजित कर संयुक्त विधायक दल की सरकार बनाने में प्रमुख रूप से भाग लिया तथा बाद में संयुक्त विधायक दल की सरकार में दिनांक 31 जुलाई, 1967 को श्री गोविन्द नारायण सिंह के मंत्रिमंडल में उप मुख्यमंत्री के रूप में शपथ ली. अंतर्राज्यीय प्राधिकरण के निर्णय और उसके क्रियान्वयन के विरोध में किये गये आंदोलन में भाग लेने हेतु उप मुख्य मंत्री पद से त्यागपत्र दिया. आंदोलन के बाद दुबारा उप मुख्यमंत्री पद पर नियुक्त हुए और मार्च, 1969 तक इस पद पर रहे. सन् 1972 में राज्य सभा के सदस्य निर्वाचित हुए. 26 जून, 1975 को आपातकाल की घोषणा के बाद गिरफ्तार किये गये. सन् 1977 के आम चुनाव में विधान सभा के लिए भारी बहुमत से विजयी. 27 जून, 1977 को म.प्र. मंत्रिमंडल में मंत्री पद की शपथ ली.
        </p>

        <p style={ntStyles.paragraph}>
          श्री कैलाश जोशी द्वारा त्यागपत्र दिए जाने के बाद 17 जनवरी, 1978 को जनता विधायक दल के नेता चुने गये और 18 जनवरी, 1978 को मुख्यमंत्री के रूप में पद तथा गोपनीयता की शपथ ली.
        </p>

        <p style={ntStyles.paragraph}>
          दिनांक 31 मई, 1999 को आपका देहावसान हो गया.
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

// Same CSS as previous profiles
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

export default VirendraKumarSakhalechaPage;
