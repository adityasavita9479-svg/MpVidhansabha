import React from "react";

const AjaySinghPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-ajaysingh.jpg" // ✅ Replace with actual image path
            alt="श्री अजय सिंह"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री अजय सिंह</h1>
          <h3 style={ntStyles.topSubtitle}>
            पूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा
          </h3>
          <div style={ntStyles.tenure}>
            15.04.2011 से 10.12.2013 एवं 27.02.2017 से 13.12.2018
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="पिता का नाम" value="स्‍व. श्री अर्जुन सिंह" />
          <InfoRow label="जन्म तिथि" value="23 सितम्‍बर, 1955" />
          <InfoRow label="जन्म स्थान" value="इलाहाबाद" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्नी का नाम" value="श्रीमती सुनीति सिंह" />
          <InfoRow label="संतान" value="1 पुत्र, 2 पुत्रियां" />
          <InfoRow label="शैक्षनिक योग्यता" value="एम.ए. (अर्थशास्‍त्र)" />
          <InfoRow label="व्यवसाय" value="कृषि" />
          <InfoRow label="अभिरुचि" value="पर्यटन, सामाजिक कार्य, ग्रामीण क्षेत्रों का विकास" />
          <InfoRow label="स्थानीय पता" value="सी-19, शिवाजी नगर, भोपाल. दूरभाष - 2555355, 2572284" />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          1971 में एन.सी.सी के बेस्‍ट केडेट के रूप में पुरस्‍कृत. 1972 में अन्‍तर स्‍कूल वाद-विवाद प्रतियोगिता में बेस्‍ट डिबेटर के रूप में पुरस्‍कृत. 1971-72 में कैम्पियन स्‍कूल के कैप्‍टन. कैम्पियन ओल्‍ड ब्‍वायज़, भोपाल के पूर्व अध्‍यक्ष. श्रीराम कॉलेज ऑफ कामर्स, दिल्‍ली विश्‍वविद्यालय से बी.ए. (अर्थशास्‍त्र) आनर्स तथा 1976-77 में भोपाल विश्‍वविद्यालय से एम.ए. (अर्थशास्‍त्र) में गोल्‍ड मेडल.
        </p>
        <p style={ntStyles.paragraph}>
          जिला कांग्रेस (इ) सेवादल, सीधी के पूर्व अध्‍यक्ष. अखिल भारतीय कांग्रेस कमेटी के सदस्‍य. मध्‍यप्रदेश कांग्रेस कमेटी (इ) के पूर्व महामंत्री तथा उपाध्‍यक्ष. 1985 के उप चुनाव में आठवीं एवं 1991 के उप चुनाव में नौवीं विधान सभा के सदस्‍य निर्वाचित. अमेरिका, जर्मनी, आस्ट्रिया तथा यू.के. सहित तीस देशों की यात्रा.
        </p>
        <p style={ntStyles.paragraph}>
          1998 में ग्‍यारहवीं विधान सभा के सदस्‍य निर्वाचित एवं मंत्री, पंचायत एवं ग्रामीण विकास तथा पर्यटन एवं संस्‍कृति विभाग तदनंतर पंचायत एवं ग्रामीण विकास रहे. सन् 2003 में बारहवीं विधान सभा के सदस्‍य निर्वाचित. म.प्र. कांग्रेस चुनाव अभियान समिति के अध्‍यक्ष.
        </p>
        <p style={ntStyles.paragraph}>
          सन् 2008 में तेरहवीं विधान सभा के सदस्‍य निर्वाचित एवं दिनांक 15.04.2011 से 10.12.2013 तक नेता प्रतिपक्ष रहे. सन् 2013 में छठवीं बार विधान सभा सदस्‍य निर्वाचित. 27 फरवरी, 2017 से 13 दिसम्बर, 2018 तक नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा.
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

export default AjaySinghPage;
