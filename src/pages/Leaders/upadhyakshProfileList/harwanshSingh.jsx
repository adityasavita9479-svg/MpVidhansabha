import React from "react";

const HarvanshSinghPage = () => {
  return (
    <div style={rsStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={rsStyles.topProfileCard}>
        <div style={rsStyles.photoFrame}>
          <img
            src="/leaders/up-harvanshsingh.jpg" // ✅ Replace with correct image path
            alt="श्री हरवंश सिंह"
            style={rsStyles.profileImage}
          />
        </div>
        <div style={rsStyles.divider}></div>
        <div style={rsStyles.nameFrame}>
          <h1 style={rsStyles.topTitle}>श्री हरवंश सिंह</h1>
          <h3 style={rsStyles.topSubtitle}>
            (भूतपूर्व उपाध्‍यक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={rsStyles.tenure}>
            (दिनांक 13.01.2009 से 14 मई, 2013)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={rsStyles.card}>
        <section style={rsStyles.section}>
          <RSInfoRow label="पिता" value="स्‍व. श्री ठाकुर झनकलाल सिंह" />
          <RSInfoRow label="जन्‍मतिथि" value="11.नवम्‍बर, 1949" />
          <RSInfoRow label="जन्‍म स्‍थान" value="ग्राम - बिन्‍दरई, जिला - छिन्‍दवाड़ा" />
          <RSInfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <RSInfoRow label="पत्नी का नाम" value="श्रीमती पवन बाई" />
          <RSInfoRow label="संतान" value="2 पुत्र, 1 पुत्री" />
          <RSInfoRow label="व्यवसाय" value="कृषि" />
          <RSInfoRow label="अभिरुचि" value="कृषि, बागवानी, भजन संगीत एवं समाज सेवा" />
        </section>

        <hr style={rsStyles.divider} />

        <h2 style={rsStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={rsStyles.paragraph}>
          1968 से 1972 तक जिला युवक कांग्रेस कमेटी जिला-सिवनी के अध्यक्ष. 1971-77 में जिला कांग्रेस कमेटी सिवनी के महामंत्री. 1971 से प्रदेश कांग्रेस कमेटी के सदस्य. 1983-86 में म.प्र. राज्य हथकरघा के उपाध्यक्ष तथा 1986-88 में निर्वाचित अध्यक्ष. 1986-89 में प्रदेश कांग्रेस सेवादल के अध्यक्ष. 1988-90 में मध्यप्रदेश राज्य वस्त्र निगम के अध्यक्ष.
        </p>

        <p style={rsStyles.paragraph}>
          1992 में प्रदेश कांग्रेस कमेटी के महामंत्री तथा अखिल भारतीय कांग्रेस कमेटी के सदस्य. सिंगापुर व बैंकाक की यात्रा. 1993 में दसवीं विधान सभा के सदस्य निर्वाचित एवं मंत्री, लोक स्वास्थ्य यांत्रिकी विभाग. तदनंतर दिसंबर 1995 से अप्रैल, 1998 तक लोक स्वास्थ्य यांत्रिकी, पंचायत एवं ग्रामीण विकास विभाग, तदनंतर पंचायत एवं परिवहन विभाग एवं जून, 1998 से नवंबर, 1998 तक गृह एवं परिवहन विभाग रहे. 1996-97 के लिए म.प्र. विधान सभा द्वारा उत्कृष्ट मंत्री के रूप में सम्मानित.
        </p>

        <p style={rsStyles.paragraph}>
          1998 में ग्यारहवीं विधान सभा के सदस्य निर्वाचित एवं 1999 में सार्वजनिक उपक्रम समिति के सभापति, तदनंतर मंत्री वन तथा परिवहन विभाग रहे. 2003 में बारहवीं विधान सभा के सदस्य निर्वाचित. म.प्र. कांग्रेस कमेटी के उपाध्यक्ष. इंग्लैंड, अमेरिका, कनाडा एवं जर्मनी की यात्रा.
        </p>

        <p style={rsStyles.paragraph}>
          2008 में चौथी बार विधान सभा सदस्य निर्वाचित एवं 13 जनवरी, 2009 से निधन दिनांक तक उपाध्यक्ष, म.प्र. विधान सभा.
        </p>

        <p style={rsStyles.paragraph}>
          टिप्‍पणी - 14 मई, 2013 को दिवंगत.
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

// Same CSS as previous pages
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

export default HarvanshSinghPage;
