import React from "react";

const BherulalPatidarPage = () => {
  return (
    <div style={bpStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={bpStyles.topProfileCard}>
        <div style={bpStyles.photoFrame}>
          <img
            src="/leaders/up-BL_patidar.jpg" // ✅ Replace with correct image path
            alt="श्री भेरूलाल पाटीदार"
            style={bpStyles.profileImage}
          />
        </div>
        <div style={bpStyles.divider}></div>
        <div style={bpStyles.nameFrame}>
          <h1 style={bpStyles.topTitle}>श्री भेरूलाल पाटीदार</h1>
          <h3 style={bpStyles.topSubtitle}>
            (भूतपूर्व उपाध्‍यक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={bpStyles.tenure}>
            दशम् विधान सभा (1993-1998) <br />
            (28.12.1993 से 01.12.1998)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={bpStyles.card}>
        <section style={bpStyles.section}>
          <BPInfoRow label="पिता" value="श्री ओंकारजी पाटीदार" />
          <BPInfoRow label="जन्‍मतिथि" value="15.अप्रैल, 1941" />
          <BPInfoRow label="जन्‍म स्‍थान" value="ग्राम-गवली पलासिया, तह. - महू, जिला - इन्‍दौर" />
          <BPInfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <BPInfoRow label="शैक्षणिक योग्यता" value="बी.एस.सी., बी.ई. (मैकेनिकल इंजीनियर)" />
        </section>

        <hr style={bpStyles.divider} />

        <h2 style={bpStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={bpStyles.paragraph}>
          सन् 1977-80 जनता पार्टी जिला इंदौर के अध्‍यक्ष. 1973, 85 और 1990 के विधान सभा चुनावों में सदस्‍य निर्वाचित. 
          1977-80 में म.प्र. राज्‍य कृषि, उद्योग विकास निगम के उपाध्‍यक्ष, 1977-82 में राष्‍ट्रीयकृत बैंक, बैंक ऑफ महाराष्‍ट्र 
          के अखिल भारतीय संचालक मंडल के सदस्य.
        </p>

        <p style={bpStyles.paragraph}>
          भारतीय जनता पार्टी जिला इंदौर के पूर्व अध्‍यक्ष, भारतीय जनता पार्टी के किसान मोर्चा के पूर्व प्रादेशिक अध्‍यक्ष 
          तथा भाजपा के पूर्व प्रादेशिक सचिव. 1977-80 में आदिवासी मंत्रणा समिति के सदस्य. भाजपा की प्रदेश कार्यसमिति के सदस्य. 
          1990-92 तक मध्‍यप्रदेश सरकार में पंचायत एवं ग्रामीण विकास मंत्री.
        </p>

        <p style={bpStyles.paragraph}>
          विधान सभा सचिवालय की संसदीय शोध पत्रिका 'विधायिनी' के संपादक मंडल के सभापति तथा राष्‍ट्रकुल संसदीय संघ और 
          भारतीय संसदीय संघ की मध्‍यप्रदेश शाखा के सचिव. 1993 में चौथी बार विधान सभा सदस्य निर्वाचित.
        </p>

        <p style={bpStyles.paragraph}>
          आपका दिनांक 13 नवम्‍बर, 2005 को देहावसान हो गया.
        </p>
      </div>
    </div>
  );
};

// Unique InfoRow component for Bherulal Patidar
const BPInfoRow = ({ label, value }) => (
  <div style={bpStyles.infoRow}>
    <span style={bpStyles.infoLabel}>{label}:</span>
    <span style={bpStyles.infoValue}>{value}</span>
  </div>
);

// Styles for Bherulal Patidar page
const bpStyles = {
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
  divider: { width: 5, height: 20, margin: "0 20px", background: "transparent", borderRadius: 2 },
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

export default BherulalPatidarPage;
