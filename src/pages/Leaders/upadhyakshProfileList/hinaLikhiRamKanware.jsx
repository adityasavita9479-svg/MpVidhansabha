import React from "react";

const HinaKawrePage = () => {
  return (
    <div style={hkStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={hkStyles.topProfileCard}>
        <div style={hkStyles.photoFrame}>
          <img
            src="/leaders/up-hinalkawre.jpg" // ✅ Replace with actual image path
            alt="सुश्री हिना लिखीराम कावरे"
            style={hkStyles.profileImage}
          />
        </div>
        <div style={hkStyles.divider}></div>
        <div style={hkStyles.nameFrame}>
          <h1 style={hkStyles.topTitle}>सुश्री हिना लिखीराम कावरे</h1>
          <h3 style={hkStyles.topSubtitle}>
            (पूर्व उपाध्‍यक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={hkStyles.tenure}>
            उपाध्‍यक्ष, विधान सभा (10.1.2019 - 24.3.2020)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={hkStyles.card}>
        <section style={hkStyles.section}>
          <InfoRow label="पिता का नाम" value="स्‍व. श्री लिखीराम कावरे" />
          <InfoRow label="जन्मतिथि" value="12 नवम्बर, 1984" />
          <InfoRow label="जन्म स्थान" value="सोनपुरी (किरनापुर)" />
          <InfoRow label="वैवाहिक स्थिति" value="अविवाहित" />
          <InfoRow label="शैक्षणिक योग्यता" value="एम. ए. (राजनीति शास्‍त्र)" />
          <InfoRow label="व्यवसाय" value="कृषि" />
          <InfoRow label="अभिरुचि" value="अध्‍ययन, समाज सेवा" />
          <InfoRow label="स्थायी पता" value="ग्राम-सोनपुरी, पोस्ट व तहसील-किरनापुर, जिला-बालाघाट (म.प्र.) पिन-481115" />
          <InfoRow label="स्थायी दूरभाष" value="(07632) 246644" />
          <InfoRow label="मोबाइल" value="9303405200, 8989252684" />
          <InfoRow label="ई-मेल" value="hina.kawre[at]mpvidhansabha[dot]nic[dot]in" />
        </section>

        <hr style={hkStyles.divider} />

        <h2 style={hkStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={hkStyles.paragraph}>
          दो बार युवा कांग्रेस बालाघाट की महासचिव. सन् 2013 में चौदहवीं विधान सभा की सदस्य निर्वाचित.
        </p>

        <p style={hkStyles.paragraph}>
          सन् 2018 में दूसरी बार विधान सभा सदस्य निर्वाचित. दिनांक 10 जनवरी, 2019 से 24 मार्च, 2020 तक उपाध्‍यक्ष, मध्यप्रदेश विधान सभा.
        </p>
      </div>
    </div>
  );
};

// InfoRow component
const InfoRow = ({ label, value }) => (
  <div style={hkStyles.infoRow}>
    <span style={hkStyles.infoLabel}>{label}:</span>
    <span style={hkStyles.infoValue}>{value}</span>
  </div>
);

// Same CSS as previous profiles
const hkStyles = {
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

export default HinaKawrePage;
