import React from "react";

const SatyadevKataraPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-satyadevkatare.jpg" // ✅ Replace with actual image path
            alt="श्री सत्‍यदेव कटारे"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री सत्‍यदेव कटारे</h1>
          <h3 style={ntStyles.topSubtitle}>
            पूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा
          </h3>
          <div style={ntStyles.tenure}>
            09.01.2014 से 20.10.2016
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="पिता का नाम" value="स्‍व. श्री जगराम कटारे" />
          <InfoRow label="जन्म तिथि" value="15 फरवरी, 1955" />
          <InfoRow label="जन्म स्थान" value="ग्राम मनेपुरा, जिला-भिण्ड" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्नी का नाम" value="श्रीमती मीरा देवी कटारे" />
          <InfoRow label="संतान" value="2 पुत्र, 1 पुत्री" />
          <InfoRow label="शैक्षनिक योग्यता" value="बी.ए., एल.एल.बी." />
          <InfoRow label="व्यवसाय" value="कृषि, व्यापार" />
          <InfoRow label="अभिरुचि" value="धार्मिक ग्रंथों का अध्ययन, संगीत सुनना, तैरना, भ्रमण" />
          <InfoRow label="स्थानीय पता" value="सी-118, भारती निकेतन, गोविन्‍दपुरा, भोपाल (म.प्र.)" />
          <InfoRow label="दूरभाष" value="(0755) 2588020, 2588021" />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          1977 में ग्राम पंचायत कोषण (भिण्‍ड) के निर्विरोध पंच निर्वाचित. 1978 से भोपाल में श्रमिक आन्‍दोलन से संबद्ध एवं भारतीय राष्‍ट्रीय मजदूर कांग्रेस के माध्‍यम से कार्य. मार्च 1978 से नवम्‍बर 1978 तक मध्‍यप्रदेश सेवादल के प्रदेश कार्यालय मंत्री. 1981 में भोपाल जिला इंटक कौंसिल के संयुक्‍त सचिव एवं इंटक यूनियनों का सफल संचालन.
        </p>
        <p style={ntStyles.paragraph}>
          1983 से मध्‍यप्रदेश युवक कांग्रेस प्रबंध कार्यकारिणी समिति के सदस्‍य, मार्च, 1983 में विकास केन्‍द्र भारतीय युवक कांग्रेस के युवा समन्‍वयक कार्यक्रम में मुजफ्फरपुर (बिहार) में एक वर्ष रहकर युवा समन्‍वयक के रूप में कार्य. 1985 में आठवीं विधान सभा के सदस्‍य निर्वाचित. 1985-1990 में मध्‍यप्रदेश युवक कांग्रेस के महामंत्री. 1987-90 में मध्‍यप्रदेश कांग्रेस विधायक दल के सचेतक. 1986-90 में भारत-रूस मैत्री संघ मध्‍यप्रदेश के सचिव. 1988-90 में मध्‍यप्रदेश कांग्रेस विधायक दल के सचिव. 1985-88 में मध्‍यप्रदेश शासन की अनेक विभागीय सलाहकार समितियों के सदस्‍य.
        </p>
        <p style={ntStyles.paragraph}>
          1986-88 एवं दिसम्‍बर 1989 से फरवरी 1990 तक मध्‍यप्रदेश विधिक सलाहकार बोर्ड के सदस्‍य. फरवरी 1989 से दिसम्‍बर 1989 तक उप मंत्री परिवहन एवं जेल विभाग. 1990-92 में मध्‍यप्रदेश कांग्रेस कमेटी के संयुक्‍त सचिव. 1993 में दसवीं विधान सभा के सदस्‍य निर्वाचित एवं 14 दिसम्‍बर, 1993 से राज्‍य मंत्री गृह विभाग (मुख्‍यमंत्री से संबद्ध) एवं 28 फरवरी, 1995 से मई 1998 तक मंत्री खाद्य एवं नागरिक आपूर्ति रहे. वर्ष 1995-96 के उत्‍कृष्‍ट मंत्री पुरस्‍कार से सम्‍मानित.
        </p>
        <p style={ntStyles.paragraph}>
          मध्‍यप्रदेश राज भाषा प्रचार समिति एवं मानस भवन भोपाल तथा "मंगलम" शिवपुरी के आजीवन सदस्‍य. 1999 एवं 2004 में भिण्‍ड-दतिया लोक सभा निर्वाचन में कांग्रेस के प्रत्‍याशी. वर्ष 2003 से 2008 तक मध्‍यप्रदेश कांग्रेस कमेटी के महामंत्री. 2003 में बारहवीं विधान सभा के सदस्‍य निर्वाचित. 2004-05, 2005-06 में विधान सभा की लोक लेखा समिति के सभापति. वर्ष 2007 में न्‍यूजीलैण्‍ड, आस्‍ट्रेलिया, सिंगापुर व हांगकांग की यात्रा. वर्ष 2008 में उत्‍कृष्‍ट विधायक पुरस्‍कार से सम्‍मानित. वर्ष 2009 व 2013 में म.प्र. कांग्रेस चुनाव अभियान समिति के सदस्‍य रहे. वर्ष 2011 से 2013 तक म.प्र. कांग्रेस के महामंत्री व भोपाल लोक सभा के प्रभारी रहे.
        </p>
        <p style={ntStyles.paragraph}>
          सन् 2013 में चौथी बार विधान सभा सदस्‍य निर्वाचित एवं दिनांक 09 जनवरी, 2014 से 20 अक्‍टूबर, 2016 तक नेता प्रतिपक्ष, मध्‍यप्रदेश विधान सभा रहे. टिप्‍पणी - दिनांक 20 अक्‍टूबर, 2016 को दिवंगत.
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

export default SatyadevKataraPage;
