import React from "react";

const RajendraKumarSinghPage = () => {
  return (
    <div style={rsStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={rsStyles.topProfileCard}>
        <div style={rsStyles.photoFrame}>
          <img
            src="/leaders/up-present_dsp.jpg" // ✅ Replace with actual image path
            alt="डॉ. राजेन्‍द्र कुमार सिंह"
            style={rsStyles.profileImage}
          />
        </div>
        <div style={rsStyles.divider}></div>
        <div style={rsStyles.nameFrame}>
          <h1 style={rsStyles.topTitle}>डॉ. राजेन्‍द्र कुमार सिंह</h1>
          <h3 style={rsStyles.topSubtitle}>
            (पूर्व उपाध्‍यक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={rsStyles.tenure}>
            (दिनांक 10.1.2014 से 13/12/2018)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={rsStyles.card}>
        <section style={rsStyles.section}>
          <RSInfoRow label="पिता का नाम" value="श्री शिवमोहन सिंह" />
          <RSInfoRow label="जन्मतिथि" value="3. सितम्‍बर, 1950" />
          <RSInfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <RSInfoRow label="पत्नी का नाम" value="श्रीमती रंजना कुमारी सिंह" />
          <RSInfoRow label="संतान" value="2 पुत्र" />
          <RSInfoRow label="शैक्षणिक योग्यता" value="बी. ई. (मैकेनिकल), डिप्‍लोमा इन आटो मैनेजमेंट (कनाडा), एम.ए. (राजनीति शास्‍त्र), पी.एच.डी." />
          <RSInfoRow label="व्यवसाय" value="कृषि, व्यापार, अभियांत्रिकी परामर्शदाता" />
          <RSInfoRow label="अभिरुचि" value="समाज सेवा, खेलकूद" />
          <RSInfoRow label="स्थायी पता" value="'शांति निकेतन', अमरपाटन, जिला-सतना (म.प्र.)" />
          <RSInfoRow label="स्थायी दूरभाष" value="(07675) 272228" />
          <RSInfoRow label="मोबाइल" value="9425172740, 9826545976" />
          <RSInfoRow label="ई-मेल" value="dr.rajendrakumarsingh[at]gmail[dot]com" />
          <RSInfoRow label="स्थानीय दूरभाष" value="(0755) 2440529, 2440400 (Res.), (0755) 2440204, 2523004 (Office)" />
        </section>

        <hr style={rsStyles.divider} />

        <h2 style={rsStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={rsStyles.paragraph}>
          विद्यार्थी जीवन में मौलाना आजाद तकनीकी महाविद्यालय में खेलों की अनेक अंतरमहाविद्यालयीन प्रतिस्पर्धाओं में महाविद्यालय का प्रतिनिधित्व. विक्रम वि.वि. उज्जैन और भोपाल वि.वि. की क्रमश: हॉकी और क्रिकेट टीम में प्रतिनिधित्व. 1971 में ''बैस्ट ऑलराउंडर ऑफ दि कॉलेज'' की उपाधि. अखिल भारतीय निशानेबाजी प्रतियोगिता में भाग. 1975 में अखिल भारतीय ''स्पिरिट-75'' भारतीय युवक समारोह के संयोजक. 1978 में कांग्रेस की सदस्यता. अखिल भारतीय कांग्रेस के सदस्य मनोनीत. सतना जिला कांग्रेस प्रबंध समिति के सदस्य. श्रीमती इंदिरा गांधी की गिरफ्तारी के विरोध में जेल भरों आंदोलन में सक्रिय.
        </p>

        <p style={rsStyles.paragraph}>
          उच्च शिक्षा हेतु 2 वर्ष के लिए कनाडा प्रवास एवं केनेडियन टायर कार्पोरेशन टोरंटो में सर्विस एडवाइज़र के पद पर छह माह तक कार्य. यू.एस.ए., इंग्लैंड, फ्रांस, स्विट्जरलैंड, जर्मनी, जापान आदि देशों की यात्रा. नवंबर 1980 में ''वर्ल्ड पीस कौंसिल'' के भारतीय शिष्ट मंडल के सदस्य के रूप में रूस, बल्गारिया और रोमानिया की यात्रा.
        </p>

        <p style={rsStyles.paragraph}>
          1980 में सातवीं विधान सभा के सदस्य निर्वाचित. गृह विभाग की परामर्शदात्री समिति के सदस्य. भारत कृषक समाज के सक्रिय सदस्य तथा मध्यप्रदेश राज्य विपणन संघ के संचालक मंडल के सदस्य रहे. 1993 में दसवीं विधान सभा के सदस्य निर्वाचित एवं राज्य मंत्री (स्वतंत्र प्रभार) वाणिज्य और उद्योग विभाग तथा 1996 से मंत्री वाणिज्य एवं उद्योग तथा पर्यावरण विभाग रहे.
        </p>

        <p style={rsStyles.paragraph}>
          1996 में तत्कालीन राष्ट्रपति स्व. डॉ. शंकर दयाल शर्मा द्वारा दिल्ली में इंदिरा प्रियदर्शिनी अवार्ड एवं 1998 में मध्यप्रदेश विधान सभा द्वारा 'पं. रविशंकर शुक्ल उत्कृष्ट मंत्री पुरस्कार' से सम्मानित. 2003 में बारहवीं विधान सभा के सदस्य निर्वाचित. सविता रामकुमारी चैरिटेबल पब्लिक ट्रस्ट के अध्यक्ष.
        </p>

        <p style={rsStyles.paragraph}>
          2013 में चौथी बार विधान सभा सदस्य निर्वाचित. 10 जनवरी, 2014 से 13 दिसम्बर, 2018 तक उपाध्यक्ष, मध्यप्रदेश विधान सभा.
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

// Same CSS as previous profiles
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

export default RajendraKumarSinghPage;
