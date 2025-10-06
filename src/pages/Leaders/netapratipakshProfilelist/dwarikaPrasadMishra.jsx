import React from "react";

const DwarikaPrasadMishraPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-DP_mishra.jpg" // ✅ Replace with actual image path
            alt="श्री द्वारिका प्रसाद मिश्र"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री द्वारिका प्रसाद मिश्र</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा)
          </h3>
          <div style={ntStyles.tenure}>
            चतुर्थ विधान सभा (1967-1972)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="जन्मतिथि" value="05.अगस्त, 1901" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., एल.एल.बी., डी.लिट्. रायपुर, जबलपुर और इलाहाबाद में शिक्षा प्राप्त की" />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          1920 में गांधी जी द्वारा विद्यार्थियों को दिए गए आह्वान पर महाविद्यालय छोड़ा और अमृतबाजार पत्रिका, कलकत्ता में कार्य. 1921 में प्रथम असहयोग आंदोलन के सिलसिले में गिरफ्तार. 1922 में जबलपुर से प्रकाशित पत्रिका "शारदा" के संपादक. श्री माधवराव सप्रे के सहयोग से जबलपुर के साहित्यिक कार्यकलापों में प्रमुख भाग.
        </p>
        <p style={ntStyles.paragraph}>
          विद्यार्थी जीवन में ही 1926 में तत्कालीन विधान सभा के लिए निर्वाचित. स्व. पंडित मोतीलाल नेहरू के नेतृत्व में स्वर्गीय श्री रफी अहमद किदवई के साथ दल के सचेतक के रूप में कार्य. लाहौर लाठी-कांड में स्वर्गीय लाला लाजपत राय पर हुए नृशंस व्यवहारों के लिए सदन में संकल्प द्वारा अंग्रेजों की आलोचना. इससे पूरे देश में संसद्विज्ञ के रूप में ख्याति. 1930 में जबलपुर से दैनिक समाचार पत्र 'लोकमत' का प्रारंभ. 1932 में जेल में रहते हुए जबलपुर नगरपालिका के अध्यक्ष निर्वाचित. 1936 में पुन: जबलपुर नगरपालिका के अध्यक्ष निर्वाचित.
        </p>
        <p style={ntStyles.paragraph}>
          1930, 1932, 1940 और 1942 में कुल मिलाकर सात वर्ष से अधिक अवधि के लिये जेल. जेल में 'कृष्णायन' महाकाव्य की रचना. 1942 में साप्ताहिक "सारथी" प्रारंभ किया जो शासन के आदेश से 1942 में बंद किया गया.
        </p>
        <p style={ntStyles.paragraph}>
          1937 में स्थानीय स्वशासन मंत्री तथा 1939 में कांग्रेस मंत्रिमंडलों के त्याग-पत्र देने पर मंत्री पद से त्याग. इस अवधि में स्थानीय स्वशासन पर एक मुख्य प्रबंध की रचना जिसकी सर बी. कीथ द्वारा प्रशंसा तथा जिसके आधार पर नगरपालिका अधिनियम बना तथा ग्राम पंचायत और जनपद संस्थाओं का पुनर्गठन हुआ. 1944 में कांग्रेस मंत्रिमंडल बनने पर भूतपूर्व मध्यप्रदेश के गृह मंत्री. 1948 में सागर विश्वविद्यालय द्वारा डी.लिट्. की उपाधि. 1950 में कांग्रेस वर्किंग कमेटी और भारतीय संसद मंडल के सदस्य 1956 में सागर विश्वविद्यालय के उप-कुलपति. 1962 में कुलपति के पद से त्यागपत्र तथा केंद्रीय नागरिक परिषद की सार्वजनिक संबंध समिति के सभापति.
        </p>
        <p style={ntStyles.paragraph}>
          मई 1963 में कसडोल निर्वाचन क्षेत्र से विधान सभा के लिए निर्वाचित तथा 24 सितंबर 1963 को कांग्रेस विधान सभा दल के नेता निर्वाचित. 30 सितंबर 1963 से मुख्यमंत्री.
        </p>
        <p style={ntStyles.paragraph}>
          दिनांक 31 मई, 1988 को आपका देहावसान हो गया.
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

export default DwarikaPrasadMishraPage;
