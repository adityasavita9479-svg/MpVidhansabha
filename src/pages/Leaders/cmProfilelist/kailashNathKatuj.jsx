import React from "react";

const ShriKailashnathKatjuPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/cm-kailashnath.jpg" // Place image in public/leaders
            alt="श्री कैलाशनाथ काटजू"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री कैलाशनाथ काटजू</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व मुख्‍यमंत्री, मध्यप्रदेश)
          </h3>
          <div style={styles.tenure}>
            प्रथम विधान सभा (1956-57) एवं द्वितीय विधान सभा (1957-62) <br />
            (दिनांक 31.01.1957 से 14.04.1957 एवं दिनांक 15.04.1957 से 11.03.1962 तक)
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्म तिथि" value="17. जून, 1887" />
          <InfoRow label="जन्म स्थान" value="जावरा" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्नी का नाम" value="स्‍व. पं. निरंजन नाथ कौल की सुपुत्री श्रीमती रूपकिशोरी" />
          <InfoRow label="शैक्षणिक योग्यता" value="एम.ए., एल.एल.बी., डि.लिट." />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :</h2>

        <p style={styles.paragraph}>
          साढ़े तेरह वर्ष की उम्र में मैट्रिक होकर 1907 में एम.ए., एल.एल.बी. की परीक्षाएं उत्तीर्ण की। 1913 में एल.एल.एम. की डिग्री प्राप्त की। 1919 में इलाहाबाद विश्वविद्यालय द्वारा डॉक्‍टर ऑफ लॉ की डिग्री से विभूषित। व्यवसाय-वकालत। सात वर्ष तक कानपुर में वकालत करने पर 1914 में इलाहाबाद म्युनिसिपल कौंसिल के चेयरमैन। 1937 में वकालत छोड़कर उत्तरप्रदेश मंत्रिमंडल में न्याय, उद्योग एवं विकास मंत्री। 1946 तक उत्तरप्रदेशीय प्रांतीय कांग्रेस कमेटी की कौंसिल तथा अखिल भारतीय कांग्रेस कमेटी के सदस्य। नवम्बर, 1940 में सत्याग्रह आंदोलन में 18 माह का कारावास। अगस्त 1942 से अप्रैल 1943 तक नैनी जेल में नजरबंद। अप्रैल 1946 से अगस्त 1947 तक पुनः न्याय एवं विकास मंत्री। 1947 से जून 1948 तक उड़ीसा के गवर्नर। जून 1948 से 1951 तक पश्चिम बंगाल के गवर्नर। 1951-52 में केंद्रीय मंत्रिमंडल में गृह एवं विधि मंत्री। मई 1952 से जनवरी, 1955 तक राज्य एवं गृह मंत्री व जनवरी 1957 तक रक्षा मंत्री। 31 जनवरी 1957 से मध्यप्रदेश के मुख्यमंत्री। प्रख्यात वकील, अच्छे लेखक, संपादक, वक्ता, सामाजिक कार्यकर्ता, प्रशासक आदि विभिन्न क्षेत्रों में दीर्घ काल तक कार्य। इलाहाबाद लॉ जर्नल के संपादक रहे। 'माइ पेरेण्ट्स' और 'रेमिनिसेंसेज एण्‍ड एक्सपेरिमेंट्स इन एडवोकेसी' नामक दो पुस्तकों के लेखक। अन्य प्रकाशन- लॉ रिलेटिंग टू क्रिमिनल एण्‍ड एक्सशनेबल कॉन्स्पिरेसीज पर प्रबंध तथा डी.एस.सी.दास के साथ कोड ऑफ सिविल एण्‍ड क्रिमिनल प्रोसीजर पर टीका।
        </p>

        <p style={styles.deathNotice}>
          दिनांक 17.02.1988 को आपका देहावसान हो गया।
        </p>
      </div>
    </div>
  );
};

// Reusable InfoRow component
const InfoRow = ({ label, value }) => (
  <div style={styles.infoRow}>
    <span style={styles.infoLabel}>{label} --</span>
    <span style={styles.infoValue}>{value}</span>
  </div>
);

// Styles
const colors = {
  primary: "#008b8b",
  secondary: "#004d4d",
  background: "#e0f7f7",
  text: "#222",
  cardBackground: "white",
  title: "white",
};

const styles = {
  pageWrapper: {
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    backgroundColor: colors.background,
    padding: "1.5rem 1rem",
    maxWidth: 1100,
    margin: "auto",
    color: colors.text,
  },
  topProfileCard: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    flexWrap: "wrap",
  },
  photoFrame: {
    backgroundColor: colors.cardBackground,
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
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: "2rem 3rem",
    color: colors.title,
    flex: 1,
    textAlign: "center",
    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
    minWidth: 250,
  },
  topTitle: {
    fontSize: "2rem",
    margin: 0,
    fontWeight: "700",
    lineHeight: 1.1,
  },
  topSubtitle: {
    fontSize: "1.2rem",
    marginTop: "0.5rem",
    fontWeight: "500",
  },
  tenure: {
    marginTop: "0.8rem",
    fontSize: "1rem",
    fontWeight: "600",
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: "1.5rem 1.8rem",
    marginBottom: "2rem",
    boxShadow: "0 8px 14px rgba(0,0,0,0.08)",
  },
  section: {
    marginBottom: "1.5rem",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    color: colors.primary,
    borderBottom: `3px solid ${colors.secondary}`,
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
  deathNotice: {
    fontSize: "1.1rem",
    fontWeight: "700",
    textAlign: "center",
    color: colors.secondary,
    marginTop: 20,
  },
  infoRow: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  infoLabel: {
    fontWeight: "700",
    marginRight: 6,
    minWidth: 160,
    color: colors.secondary,
  },
  infoValue: {
    flex: 1,
    color: "#333",
    fontWeight: "500",
  },
};

export default ShriKailashnathKatjuPage;
