import React from "react";

const SmtSarlaGrewalPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-sgrewal.jpg" // Update with correct image in public/leaders
            alt="श्रीमती सरला ग्रेवाल"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्रीमती सरला ग्रेवाल</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>(दिनांक 31.03.1989 से 06.02.1990 तक)</div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम:</h2>

        <p style={styles.paragraph}>
          श्रीमती सरला ग्रेवाल का जन्म 4 अक्टूबर 1927 को हुआ था। अपनी प्रारम्भिक शिक्षा पूरी करने के बाद उन्होंने आनर्स में स्नातम उपाधि ली। बाद में दर्शनशास्त्र में स्नातकोत्तर उपाधि में पंजाब विश्वविद्यालय में सर्वोच्च स्थान प्राप्त किया। 1952 में उन्होंने भारतीय प्रशासनिक सेवा में प्रवेश किया और उस समय इस सेवा में आने वाली वे भारत की दूसरी महिला अधिकारी थीं। उन्होंने पंजाब प्रदेश के अंतर्गत अनेक महत्वपूर्ण प्रशासनिक पदों पर कार्य किया।
        </p>

        <p style={styles.paragraph}>
          1956 में वे शिमला की डिप्टी कमिश्नर बनीं और देश में इस पद का दायित्व निभाने वाली पहली महिला अधिकारी थीं। 1962 में शिक्षा संचालक बनने वाली पहली आई.ए.एस. अधिकारी थीं। इस हैसियत में उन्होंने प्राथमिक से लेकर हाईस्कूल और विश्वविद्यालय स्तर तक शिक्षा प्रशासन के विभिन्न दायित्वों का निर्वहन किया। उन्होंने शिक्षा प्रणाली को माध्यमिक स्तर पर व्यवसाय से जोड़ने की पहल की और रूस में मध्यवर्ती शिक्षा प्रणाली का अध्ययन किया। ब्रिटिश कौंसिल की छात्रवृत्ति पर दस माह तक लंदन स्कूल ऑफ इकनॉमिक्स में विकासशील देशों में सामाजिक सेवाओं का गहन अध्ययन किया।
        </p>

        <p style={styles.paragraph}>
          1963 में वे पंजाब सरकार के स्वास्थ्य विभाग की सचिव बनीं। इस कार्यकाल में राज्य को राष्ट्रीय परिवार कल्याण कार्यक्रम के अंतर्गत चार सर्वोच्च राष्ट्रीय पुरस्कार प्राप्त हुए। उन्होंने मातृ और शिशु-स्वास्थ्य-कल्याण सेवाओं के लिए एक मजबूत आधारभूत संरचना तैयार की। इसके अतिरिक्त समाज कल्याण, महिला कल्याण, स्थानीय प्रशासन, उद्योग, खाद्य और नागरिक आपूर्ति विभागों में भी कुशल नेतृत्व किया। 1971-74 में पंजाब के विकास आयुक्त रहीं और कृषि, पशुपालन एवं दुग्ध उत्पादन के क्षेत्र में महत्वपूर्ण कार्य किया।
        </p>

        <p style={styles.paragraph}>
          मार्च 1974 से संयुक्त सचिव और आयुक्त, परिवार कल्याण रहीं। 1976 में भारत सरकार के परिवार कल्याण मंत्रालय में अतिरिक्त सचिव और आयुक्त बनीं। कार्यकाल में परिवार कल्याण कार्यक्रम को नया आयाम मिला। उन्होंने परिवार नियोजन, मातृ कल्याण और शिशु स्वास्थ्य में प्रभावी कार्य किया। महिला साक्षरता और प्रौढ़ शिक्षा पर भी विशेष ध्यान दिया। 
        </p>

        <p style={styles.paragraph}>
          1981 में समाज कल्याण मंत्रालय की सचिव बनीं और कई राष्ट्रीय और अंतर्राष्ट्रीय मंचों पर भारत का प्रतिनिधित्व किया। 1982-83 में यूनीसेफ एक्जीक्यूटिव बोर्ड की कार्यक्रम समिति की अध्यक्ष चुनी गईं। नवम्बर 1982 में सचिव, शिक्षा और संस्कृति बनीं। 1985 में स्वास्थ्य और परिवार कल्याण मंत्रालय की सचिव, और 25 सितंबर 1985 को प्रधानमंत्री की सचिव नियुक्त हुईं। मध्‍यप्रदेश के राज्यपाल पद का कार्यभार 1 मार्च 1989 से 05.02.1990 तक संभाला। 
        </p>

        <p style={styles.deathNotice}>आपका दिनांक 30.01.2002 को देहावसान हो गया।</p>
      </div>
    </div>
  );
};

// Shared Styles
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
    marginTop: 6,
    fontWeight: "600",
    fontSize: "1rem",
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: "1.5rem 1.8rem",
    marginBottom: "2rem",
    boxShadow: "0 8px 14px rgba(0,0,0,0.08)",
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
};

export default SmtSarlaGrewalPage;