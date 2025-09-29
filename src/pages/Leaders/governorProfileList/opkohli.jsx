import React from "react";

const OPKohliPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-OPkohli.jpg" // Place image in public/leaders
            alt="श्री ओ. पी. कोहली"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री ओ. पी. कोहली</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>
            (08/09/2016 – 23/01/2018) <br />
            (16/05/2018 – 02/06/2018, कार्यवाहक)
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>व्यक्तिगत विवरण:</h2>
        <p style={styles.paragraph}>
          पिता का नाम: स्वर्गीय श्री मनोहर लाल कोहली <br />
          माता का नाम: स्वर्गीय श्रीमती शिवदेवी <br />
          जन्मतिथि: 9 अगस्त, 1935 <br />
          जन्मस्थान: दिल्ली <br />
          पत्नी: श्रीमती अविनाश कोहली <br />
          संतान: 1 पुत्र, 2 पुत्रियां <br />
          शैक्षणिक योग्यता: एम.ए. (हिंदी), प्रभाकर, साहित्य रत्न <br />
          अभिरुचि: अकादमिक एवं शैक्षिक गतिविधियां <br />
          स्थानीय पता: राजभवन, भोपाल (म.प्र.)
        </p>

        {/* Career & Achievements */}
        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन:</h2>
        <p style={styles.paragraph}>
          - हंसराज कॉलेज (दिल्ली विश्वविद्यालय) पार्लियामेंट के पी.एम., डूसू एक्जीक्यूटिव सदस्य एवं लगातार तीन वर्ष तक अखिल भारतीय विद्यार्थी परिषद (एबीवीपी) के अखिल भारतीय अध्यक्ष। <br />
          - 37 वर्ष तक हंसराज कॉलेज एवं देशबंधु कॉलेज (दिल्ली विश्वविद्यालय) में व्याख्याता, 1994 में रीडर पद से सेवानिवृत्त। <br />
          - 1973-79 में दिल्ली यूनिवर्सिटी टीचर्स एसोसिएशन (डूटा) के अध्यक्ष, दिल्ली विश्वविद्यालय की अकादमिक और एक्जीक्यूटिव कौंसिल के निर्वाचित सदस्य एवं नेशनल डेमोक्रेटिक टीचर्स फ्रंट (एनडीटीएफ) के अध्यक्ष। <br />
          - मीसा में गिरफ्तार एवं 19 माह दिल्ली, आगरा और वाराणसी की जेलों में निरुद्ध। <br />
          - 1994-2000: राज्य सभा सदस्य एवं आवासीय समिति, पत्रों की समिति, शहरी और ग्रामीण विकास तथा वित्त संबंधी स्थायी समितियों के सदस्य। <br />
          - 1991-95 एवं 2009-10: भाजपा दिल्ली राज्य अध्यक्ष, भाजपा राष्ट्रीय सचिव; जम्मू-कश्मीर, पंजाब, चंडीगढ़, हरियाणा, हिमाचल प्रदेश एवं राजस्थान के प्रभारी। <br />
          - भाजपा केंद्रीय अनुशासन समिति के सचिव एवं अध्यक्ष तथा भाजपा मुख्यालय प्रभारी। <br />
          - 16 जुलाई 2014 से गुजरात एवं 8 सितंबर 2016 – 23 जनवरी 2018 तक मध्यप्रदेश के राज्यपाल। <br />
          - 16 मई 2018 – 02 जून 2018 तक मध्यप्रदेश के कार्यवाहक राज्यपाल।
        </p>
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
};

export default OPKohliPage;
