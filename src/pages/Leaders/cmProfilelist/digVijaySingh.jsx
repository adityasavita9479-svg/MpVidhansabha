import React from "react";

// InfoRow component
const InfoRow = ({ label, value }) => (
  <div style={ntStyles.infoRow}>
    <span style={ntStyles.infoLabel}>{label}:</span>
    <span style={ntStyles.infoValue}>{value}</span>
  </div>
);

const DigvijaySinghPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/cm-digvijaysingh.jpg" // ✅ Replace with actual image path
            alt="श्री दिग्विजय सिंह"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री दिग्विजय सिंह</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व मुख्‍यमंत्री, मध्यप्रदेश)
          </h3>
          <div style={ntStyles.tenure}>
            दशम् विधान सभा (1993-1998) एवं एकादश विधान सभा (1998-2003) <br />
            (दिनांक 07.12.1993 से 01.12.1998 एवं दिनांक 01.12.1998 से 07.12.2003 तक)
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div style={ntStyles.card}>
        <InfoRow label="पिता" value="स्व. श्री बलभद्र सिंह" />
        <InfoRow label="जन्मतिथि" value="28. फरवरी, 1947" />
        <InfoRow label="जन्म स्थान" value="इन्‍दौर" />
        <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
        <InfoRow label="पत्नी का नाम" value="श्रीमती अमृता राय" />
        <InfoRow label="संतान" value="1 पुत्र, 4 पुत्रियां" />
        <InfoRow label="शैक्षणिक योग्यता" value="बी.ई. (मैकेनिकल)" />
        <InfoRow label="व्यवसाय" value="कृषि" />
        <InfoRow label="अभिरुचि" value="क्रिकेट, स्‍क्‍वाश, संगीत, फोटोग्राफी" />
        <InfoRow label="स्थायी पता" value="पो. राघोगढ़, जिला-गुना (म.प्र.)" />
        <InfoRow label="दूरभाष (स्थायी)" value="(07544) 262300" />
        <InfoRow label="स्थानीय पता" value="1, श्‍यामला हिल्‍स, भोपाल" />
        <InfoRow label="दूरभाष (स्थानीय)" value="2440517" />
      </div>

      {/* Political Career */}
      <div style={ntStyles.card}>
        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>
        <p style={ntStyles.paragraph}>
          1969-71 में राघौगढ़ नगर पालिका के अध्‍यक्ष. 1971 से कांग्रेस के सदस्य. 
          मध्यप्रदेश युवक कांग्रेस के महासचिव. 1977 में छठवीं विधान सभा के सदस्य निर्वाचित. 
          1976-78 में केंद्रीय सहकारी बैंक, गुना के निदेशक. 1980 में सातवीं विधान सभा के सदस्य निर्वाचित एवं 
          सिंचाई, कृषि, मत्स्य पालन तथा पशुपालन विभागों के राज्य मंत्री और मंत्री रहे. 
          1984 में आठवीं एवं 1991 में दसवीं लोक सभा के सदस्य निर्वाचित. प्रदेश कांग्रेस के दो बार अध्यक्ष. 
          दिनांक 7 दिसम्बर, 1993 को मध्यप्रदेश के मुख्यमंत्री के रूप में शपथ ली. 
          लोक सभा की सदस्यता से दिनांक 21 फरवरी, 1993 को त्यागपत्र. 1994 के उपचुनाव में दसवीं विधान सभा के सदस्य निर्वाचित एवं 2 जून, 1994 को विधान सभा सदस्य के रूप में शपथ ली. 
          1998 में ग्यारहवीं विधान सभा के सदस्य निर्वाचित एवं 1 दिसंबर, 1998 से 7 दिसंबर, 2003 तक मध्यप्रदेश के मुख्यमंत्री रहे. 
          हांगकांग, जापान, मलेशिया, थाइलैंड, इजराइल, दक्षिण अफ्रीका सहित अनेक देशों की यात्रा. 
          सन् 2003 में पांचवीं बार विधान सभा सदस्य निर्वाचित. अप्रैल, 2014 एवं जून, 2020 में राज्य सभा के सदस्य निर्वाचित तथा विभिन्न सभा एवं विभागीय परामर्शदात्री समितियों के सदस्य.
        </p>
        <p style={ntStyles.paragraph}>
          सम्‍प्रति - सदस्य, राज्यसभा.
        </p>
      </div>
    </div>
  );
};

// Same CSS as Shukla / Sethi pages
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

export default DigvijaySinghPage;
