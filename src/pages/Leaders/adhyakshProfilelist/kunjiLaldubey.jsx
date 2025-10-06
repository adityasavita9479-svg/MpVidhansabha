import React from "react";

const KunjiLalDubePage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/sp-KLDubey.jpg"
            alt="पं. कुंजीलाल दुबे"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>पं. कुंजीलाल दुबे</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व अध्यक्ष, मध्यप्रदेश विधानसभा)</h3>
          <div style={styles.tenure}>
            प्रथम विधानसभा (1956-57), द्वितीय विधानसभा (1957-62) एवं तृतीय विधानसभा (1962-67)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्मतिथि" value="19.03.1896" />
          <InfoRow label="जन्म स्थान" value="आमगांव ग्राम, जिला नरसिंहपुर" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्नी का नाम" value="श्रीमती ललिताबाई" />
          <InfoRow label="संतान" value="3 पुत्र, 3 पुत्रियां" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., एल.एल.बी." />
          <InfoRow label="व्यवसाय" value="वकालत" />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :</h2>

        <p style={styles.paragraph}>
          आरंभ से ही दुबे जी ने हिन्दू धर्म, संस्कृति, दर्शन और हिन्दू समाज के अभ्युत्थान में रुचि ली।
          सनातन धर्म में अपनी गहरी आस्था के कारण कुछ वर्ष पूज्य पं. मदन मोहन मालवीय जी के मार्गदर्शन में काम किया।
          सन् 1935 में हितकारिणी विधि महाविद्यालय में आचार्य नियुक्त हुए।
        </p>
        <p style={styles.paragraph}>
          सन् 1937 में आपने कांग्रेस की सदस्यता ग्रहण की और शीघ्र ही कांग्रेस के प्रमुख कार्यकर्ताओं में गिने जाने लगे।
          1939 में अखिल भारतीय कांग्रेस के प्रसिद्ध त्रिपुरी अधिवेशन के स्वागत समिति के सचिव बने।
          जनवरी 1941 में गांधीजी के व्यक्तिगत सत्याग्रह आह्वान पर डिक्टेटर बनाए गए और पुलिस ने आपको घर पर ही हिरासत में लिया।
          आपको 6 महीने की सजा हुई। 1942 के बंबई अधिवेशन में भी आप शामिल हुए और पुनः जेल गए।
        </p>
        <p style={styles.paragraph}>
          जेल से छूटने के बाद प्रथम विधानसभा चुनाव में जबलपुर से निर्विरोध चुने गए। 
          2 अक्टूबर 1946 को मंत्रिमंडल में मुख्य संसदीय सचिव बने। 
          उसी वर्ष नागपुर विश्वविद्यालय के उपकुलपति चुने गए और लगातार तीन बार इस पद पर रहे।
        </p>
        <p style={styles.paragraph}>
          1947 में विश्वविद्यालय को पूर्ण समय देने के लिए मुख्य संसदीय सचिव पद से त्यागपत्र दे दिया।
          1953 और 1954 में कैम्ब्रिज और किंग्स्टन में इंटर-यूनिवर्सिटी बोर्ड के अधिवेशनों में भारत का प्रतिनिधित्व किया।
          नागपुर विश्वविद्यालय में हिंदी और मराठी को उचित स्थान दिलाने में उनका योगदान अमूल्य रहा।
        </p>
        <p style={styles.paragraph}>
          1 नवम्बर 1956 को मध्यप्रदेश के गठन पर वे विधानसभा अध्यक्ष निर्वाचित हुए और 1957 में पुनः चुने गए।
          जबलपुर विश्वविद्यालय विधेयक पारित हुआ और वे इसके संस्थापक कुलपति बने। 
          उनका कार्यकाल 11 वर्षों तक चला।
        </p>
        <p style={styles.paragraph}>
          हिंदी जगत में उनके कार्य अमर रहेंगे। 1959 में वे मध्यप्रदेश हिंदी साहित्य सम्मेलन के अध्यक्ष निर्वाचित हुए।
          सम्मेलन के अधिवेशन का उद्घाटन पं. जवाहरलाल नेहरू ने किया।
        </p>
        <p style={styles.paragraph}>
          1967 में पुनः विधायक चुने गए और पं. द्वारकाप्रसाद मिश्र तथा श्री श्यामाचरण शुक्ल के मंत्रिमंडल में वित्त मंत्री रहे।
        </p>
        <p style={styles.paragraph}>
          उन्हें 1964 में पद्मभूषण, 1965 में एल.एल.डी. और 1967 में विक्रम विश्वविद्यालय द्वारा डी.लिट. की उपाधि दी गई।
        </p>

        <p style={styles.deathNotice}>दिनांक 2 जून 1970 को आपका स्वर्गवास हो गया।</p>
      </div>
    </div>
  );
};

// InfoRow Component
const InfoRow = ({ label, value }) => (
  <div style={styles.infoRow}>
    <span style={styles.infoLabel}>{label}:</span>
    <span style={styles.infoValue}>{value}</span>
  </div>
);

// Shared Styles (reused from your code)
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
  bookList: {
    marginLeft: "20px",
    marginBottom: "1rem",
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
    minWidth: 120,
    color: colors.secondary,
  },
  infoValue: {
    flex: 1,
    color: "#333",
    fontWeight: "500",
  },
};

export default KunjiLalDubePage;
