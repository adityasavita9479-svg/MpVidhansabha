import React from "react";

const VikramVermaPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-V_verma.jpg" // ✅ Replace with actual image path
            alt="श्री विक्रम वर्मा"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री विक्रम वर्मा</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={ntStyles.tenure}>
            दशम् विधान सभा (1993-1998)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="पिता" value="स्‍व. श्री गणपत सिंह वर्मा" />
          <InfoRow label="जन्मतिथि" value="23.जनवरी, 1944" />
          <InfoRow label="जन्म स्थान" value="धरमपुरी" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित (22 जून, 1978)" />
          <InfoRow label="पत्नी का नाम" value="श्रीमती नीना वर्मा" />
          <InfoRow label="संतान" value="3 पुत्रियां" />
          <InfoRow label="शैक्षणिक योग्यता" value="एम.ए. (हिन्‍दी, राजनीति विज्ञान), एल.एल.बी." />
          <InfoRow label="व्यवसाय" value="कृषि, वकालत" />
          <InfoRow label="अभिरुचि" value="अध्‍ययन, कृषि" />
          <InfoRow label="भाषाओं का ज्ञान" value="हिन्‍दी, अंग्रेजी" />
          <InfoRow label="स्थायी पता" value="धरमपुरी, जिला - धार (म.प्र.)" />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          छात्र जीवन में क्रिश्चियन कॉलेज (इंदौर) छात्र संघ के अध्यक्ष. 1970-1974 में धरमपुरी (जिला-धार) नगरपालिका के अध्यक्ष. 1977 में प्रथम बार विधान सभा सदस्य निर्वाचित तथा संसदीय सचिव. 1980 में दूसरी बार विधान सभा सदस्य निर्वाचित. भाजपा के प्रदेश मंत्री. 1990 में विधान सभा सदस्य निर्वाचित तथा स्कूल एवं उच्च शिक्षा तथा खेल एवं युवक कल्याण मंत्री, पाठ्य पुस्तक निगम तथा म.प्र. हिंदी ग्रंथ अकादमी के अध्यक्ष.
        </p>
        <p style={ntStyles.paragraph}>
          1993 में चौथी बार विधान सभा सदस्य निर्वाचित. सन् 1993 से 1998 तक नेता प्रतिपक्ष, म.प्र. विधान सभा रहे.
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

export default VikramVermaPage;
