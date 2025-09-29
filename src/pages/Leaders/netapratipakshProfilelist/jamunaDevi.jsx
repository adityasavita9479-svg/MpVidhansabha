import React from "react";

const JamunaDeviPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-jamuna_devi_1.jpg" // ✅ Replace with actual image path
            alt="श्रीमती जमुना देवी"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्रीमती जमुना देवी</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={ntStyles.tenure}>
            दिनांक 16.12.2003 से 11.12.2008 तक
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="पिता का नाम" value="स्‍व. श्री सुखजी" />
          <InfoRow label="जन्मतिथि" value="19.नवम्‍बर, 1929" />
          <InfoRow label="जन्मस्थान" value="सरदारपुर, जिला - धार" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="संतान" value="1 पुत्री" />
          <InfoRow label="शैक्षणिक योग्यता" value="मैट्रिक" />
          <InfoRow label="व्यवसाय" value="समाज सेवा" />
          <InfoRow label="अभिरुचि" value="बागवानी, कृषि" />
          <InfoRow label="स्थायी पता" value="(1) श्री सुभाषचंद्र रामदास मुकाती, शिव शक्ति पैलेस, अलीराजपुर रोड़, कुक्षी, जिला-धार (म.प्र.), दूरभाष - (07297) 234370; (2) 29, एच.आई.जी., इंदौर (म.प्र.), दूरभाष - (0731) 2550479" />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          1934-57 में मध्‍य भारत विधान सभा की सदस्‍य. 1960-63 में झाबुआ जिला कांग्रेस की समन्‍वयक. 1962-67 में लोक सभा सदस्‍य. समाज कल्‍याण बोर्ड ब्‍लॉक रामा जिला झाबुआ की अध्‍यक्ष. अखिल भारतीय रेलवे क्‍लर्क एवं यार्ड मास्‍टर एसोसिएशन की अध्‍यक्ष. 1963-67 में आदिवासी केन्‍द्रीय सलाहकार बोर्ड की सदस्‍य एवं अ.भा. कांग्रेस की सदस्‍य. 1964 से निरंतर म.प्र. कांग्रेस कमेटी की सदस्‍य.
        </p>
        <p style={ntStyles.paragraph}>
          केन्‍द्रीय समाज कल्‍याण बोर्ड, नई दिल्‍ली तथा अ.भा. आदिम जाति सेवा संघ की सदस्‍य. 1973-76 में भील सेवा संघ, इंदौर संभाग की सचिव. 1978-81 में राज्‍य सभा सदस्‍य एवं हुडको की संचालक. अखिल भारतीय आदिम जाति महिला सेवक संघ, म.प्र. इकाई की अध्‍यक्ष. अखिल भारतीय कांग्रेस कमेटी आदिवासी एवं अनुसूचित जाति सेल (गुजराज एवं पंजाब) की संयुक्‍त सचिव.
        </p>
        <p style={ntStyles.paragraph}>
          1985 में आठवीं विधान सभा की सदस्‍य निर्वाचित एवं राज्‍य मंत्री (स्‍वतंत्र प्रभार) आदिम जाति एवं अनुसूचित जाति तथा पिछड़ा वर्ग कल्‍याण. 1989-90 में म.प्र. महिला कांग्रेस की महामंत्री, इंदौर संभाग प्रभारी. 1993 में दसवीं विधान सभा की सदस्‍य निर्वाचित एवं मंत्री, समाज कल्‍याण, महिला एवं बाल विकास विभाग रहीं. 1997 में उत्‍कृष्‍ट मंत्री पुरस्‍कार से सम्‍मानित.
        </p>
        <p style={ntStyles.paragraph}>
          1998 में ग्‍यारहवीं विधान सभा की सदस्‍य निर्वाचित एवं उप मुख्‍यमंत्री तथा प्रभारी महिला एवं बाल विकास विभाग रही. 2001 में भारत ज्‍योति सम्‍मान एवं 2003 में संसदीय जीवन के पचास वर्ष पूर्ण करने पर 'संसदीय जीवन सम्‍मान' से सम्‍मानित. सन् 2003 में बारहवीं विधान सभा की सदस्‍य निर्वाचित एवं 16 दिसम्‍बर, 2003 से 11 दिसम्‍बर 2008 तक नेता प्रतिपक्ष, म.प्र. विधान सभा.
        </p>
        <p style={ntStyles.paragraph}>
          सन् 2008 में छठी बार विधान सभा सदस्‍य निर्वाचित एवं 07 जनवरी, 2009 से निधन दिनांक तक नेता प्रतिपक्ष, म.प्र. विधान सभा. टिप्‍पणी - 24 सितंबर, 2010 को दिवंगत.
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

export default JamunaDeviPage;
