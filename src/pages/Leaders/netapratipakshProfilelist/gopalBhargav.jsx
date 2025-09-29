import React from "react";

const GopalBhargavaPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-gopalbhargava.jpg" // ✅ Replace with actual image path
            alt="श्री गोपाल भार्गव"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री गोपाल भार्गव</h1>
          <h3 style={ntStyles.topSubtitle}>
            पूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा
          </h3>
          <div style={ntStyles.tenure}>
            08.01.2019 - 23.03.2020
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="पिता का नाम" value="श्री शंकरलाल भार्गव" />
          <InfoRow label="जन्म तिथि" value="01 जुलाई, 1952" />
          <InfoRow label="जन्म स्थान" value="गढ़ाकोटा, जिला-सागर" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्नी का नाम" value="श्रीमती रेखा भार्गव" />
          <InfoRow label="संतान" value="1 पुत्र, 3 पुत्रियां" />
          <InfoRow label="शैक्षनिक योग्यता" value="बी.एस-सी., एम.ए., एल-एल.बी" />
          <InfoRow label="व्यवसाय" value="कृषि एवं सिनेमा व्यवसाय" />
          <InfoRow label="अभिरुचि" value="ग्रामीण क्षेत्रों का भ्रमण, साधनहीन वर्ग की सेवा" />
          <InfoRow label="स्थायी पता" value="मकान नं. 24, भगत सिंह वार्ड, गढ़ाकोटा, जिला-सागर (म.प्र.)" />
          <InfoRow label="दूरभाष" value="(07585) 258401, 258277" />
          <InfoRow label="ई-मेल" value="gopal.bhargava[at]mpvidhansabha[dot]nic[dot]in" />
          <InfoRow label="स्थानीय पता" value="बी-1, स्वामी दयानन्द नगर (74 बंगला), भोपाल" />
          <InfoRow label="स्थानीय दूरभाष" value="0755-2440205, 2523005" />
          <InfoRow label="निवास" value="0755-2555145" />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          विद्यार्थी जीवन से छात्र राजनीति में सक्रिय. 1970-73 में सागर विश्वविद्यालय छात्र संघ में विभिन्‍न पदों पर रहे. 1980-82 में नगर पालिका परिषद गढ़ाकोटा के अध्‍यक्ष. छात्रों, बीड़ी मजदूरों एवं किसानों के अनेक आंदोलनों में भाग लिया तथा जेल यात्राएं की.
        </p>
        <p style={ntStyles.paragraph}>
          1985 में आठवीं, 1990 में नौवीं, 1993 में दसवीं एवं 1998 में ग्‍यारहवीं विधान सभा के सदस्‍य निर्वाचित. विधान सभा की लोक लेखा, सार्वजनिक उपक्रम, प्राक्‍कलन समिति के सदस्‍य तथा प्रश्‍न एवं संदर्भ समिति के सभापति रहे. भा.ज.पा. जिला सागर के अध्‍यक्ष रहे.
        </p>
        <p style={ntStyles.paragraph}>
          सन् 2003 में बारहवीं विधान सभा के सदस्‍य निर्वाचित एवं मंत्री कृषि, राजस्‍व, सहकारिता, धार्मिक न्‍यास व धर्मस्‍व, पुनर्वास, खाद्य-नागरिक आपूर्ति एवं उपभोक्‍ता संरक्षण रहे. मध्‍यप्रदेश राज्‍य सहकारी बैंक (अपेक्‍स बैंक), मध्‍यप्रदेश राज्‍य कृषि विपणन बोर्ड (मण्‍डी बोर्ड), मध्‍यप्रदेश एग्रो इण्‍डस्‍ट्रीज डेव्‍लपमेंट कार्पोरेशन, मध्‍यप्रदेश राज्‍य बीज एवं फार्म विकास निगम (सीड कार्पोरेशन), मध्‍यप्रदेश राज्‍य सहकारी कृषि एवं ग्रामीण विकास बैंक, मध्‍यप्रदेश स्‍टेट वेयर हाउसिंग कार्पोरेशन, मध्‍यप्रदेश राज्‍य सहकारी बीज उत्‍पादक एवं विपणन संघ के संस्थापक अध्‍यक्ष. प्राधिकृत अधिकारी मध्‍यप्रदेश राज्‍य सहकारी आवास संघ.
        </p>
        <p style={ntStyles.paragraph}>
          2008 में तेरहवीं विधानसभा के सदस्‍य निर्वाचित एवं मंत्री पंचायत और ग्रामीण विकास तथा सामाजिक न्‍याय विभाग रहे. सन् 2013 में सातवीं बार विधान सभा के सदस्‍य निर्वाचित तदनंतर मंत्री पंचायत और ग्रामीण विकास, सामाजिक न्‍याय एवं नि:शक्‍तजन कल्‍याण, सहकारिता.
        </p>
        <p style={ntStyles.paragraph}>
          सन् 2018 में आठवीं बार विधान सभा सदस्‍य निर्वाचित. 8 जनवरी, 2019 से 23 मार्च, 2020 तक नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा.
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

export default GopalBhargavaPage;
