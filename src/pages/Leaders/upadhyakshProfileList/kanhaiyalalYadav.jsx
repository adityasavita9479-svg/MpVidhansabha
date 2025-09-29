import React from "react";

const KanhaiyalalYadavPage = () => {
  return (
    <div style={kyStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={kyStyles.topProfileCard}>
        <div style={kyStyles.photoFrame}>
          <img
            src="/leaders/up-Kanhiyalal_Yadav.jpg" // ✅ Replace with correct image path
            alt="श्री कन्‍हैयालाल यादव"
            style={kyStyles.profileImage}
          />
        </div>
        <div style={kyStyles.divider}></div>
        <div style={kyStyles.nameFrame}>
          <h1 style={kyStyles.topTitle}>श्री कन्‍हैयालाल यादव</h1>
          <h3 style={kyStyles.topSubtitle}>
            (भूतपूर्व उपाध्‍यक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={kyStyles.tenure}>
            अष्‍टम् विधान सभा (1985-1990) <br />
            (12.03.1986 से 03.03.1990)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={kyStyles.card}>
        <section style={kyStyles.section}>
          <KYInfoRow label="पिता" value="श्री रामनाथ यादव" />
          <KYInfoRow label="जन्‍मतिथि" value="सन् 1925" />
          <KYInfoRow label="जन्‍म स्‍थान" value="इन्‍दौर" />
          <KYInfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <KYInfoRow label="शैक्षणिक योग्यता" value="एम.ए., एल.एल.बी., साहित्‍य रत्‍न" />
        </section>

        <hr style={kyStyles.divider} />

        <h2 style={kyStyles.sectionTitle}>
          विदेश यात्रा
        </h2>

        <p style={kyStyles.paragraph}>
          सन् 1961 में कोलम्‍बो प्‍लान के तहत् इंग्‍लैण्‍ड में श्रम संगठन प्रशिक्षण, तदुपरांत पूर्व जर्मनी, 
          पश्चिमी जर्मनी, स्विट्जरलैण्‍ड, फ्रांस, संयुक्‍त अरब गणराज्‍य, इटली आदि देशों की श्रमिक गतिविधियों का अध्‍ययन. 
          सन् 1979 में बैंकाक (थाईलैण्‍ड) में स्‍वाधीन, श्रम संगठनों के अंतर्राष्‍ट्रीय महासंघ द्वारा आयोजित सम्‍मेलन 
          में भारतीय प्रतिनिधि के रूप में भाग लिया. लन्‍दन सिटी एण्‍ड गिल्‍ड्स इन्‍स्‍टीट्यूट से कपड़ा उद्योग तकनीक और 
          व्‍यवस्‍था की परीक्षा उत्‍तीर्ण.
        </p>

        <h2 style={kyStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={kyStyles.paragraph}>
          सन् 1946 में साधारण श्रमिक के रूप में कार्य शुरू किया और शीघ्र ही सुपरवाईजर बन गए. सन् 1955 में इन्‍दौर नगरपालिका के 
          पार्षद, तत्‍पश्‍चात् नगर निगम परिषद में विधि एवं राजस्‍व समिति के अध्‍यक्ष रहे. सन् 1954 में इन्‍दौर मिल मजदूर संघ के 
          माध्‍यम से इंटक की गतिविधियों में संलग्‍न. 25 वर्षों से मध्‍यप्रदेश टेक्‍सटाइल सुपरवाईजर स्‍टाफ यूनियन के अध्‍यक्ष. 
          12 वर्ष तक इन्‍दौर मिल मजदूर संघ के प्रधान मंत्री. 14 वर्षों तक मध्‍यप्रदेश इंटक के मंत्री. अखिल भारतीय कपड़ा मजदूरों के 
          महासंघ के 2 वर्ष तक मंत्री.
        </p>

        <p style={kyStyles.paragraph}>
          वर्ष 1980 के आम चुनाव में कांग्रेस (इ) के प्रत्‍याशी के रूप में म.प्र. विधान सभा सदस्य निर्वाचित हुए. वर्ष 1981 से लगातार 
          4 वर्ष तक मध्‍यप्रदेश गन्‍दी बस्‍ती उन्‍मूलन मण्‍डल के अध्‍यक्ष. इन्‍दौर शहर की कांग्रेस कार्यकारिणी व प्रदेश कांग्रेस 
          कमेटी की जनरल कौंसिल के सदस्य, प्रदेश कांग्रेस की तदर्थ समिति के सदस्य रहे.
        </p>

        <p style={kyStyles.paragraph}>
          पुन: वर्ष 1985 के आम चुनावों में विधान सभा सदस्य निर्वाचित होने के उपरांत मध्‍यप्रदेश विधान सभा की प्रत्‍यायुक्‍त 
          विधान समिति के सभापति रहे. त्रैमासिक पत्रिका 'विधायिनी' के संपादक मण्‍डल के अध्‍यक्ष एवं 12.03.1986 से 03.03.1990 तक 
          उपाध्‍यक्ष म.प्र. विधान सभा.
        </p>

        <p style={kyStyles.paragraph}>
          दिनांक 12 नवंबर, 2012 को दिवंगत.
        </p>
      </div>
    </div>
  );
};

// Unique InfoRow component for Kanhaiyalal Yadav
const KYInfoRow = ({ label, value }) => (
  <div style={kyStyles.infoRow}>
    <span style={kyStyles.infoLabel}>{label}:</span>
    <span style={kyStyles.infoValue}>{value}</span>
  </div>
);

// Styles for Kanhaiyalal Yadav page
const kyStyles = {
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

export default KanhaiyalalYadavPage;
