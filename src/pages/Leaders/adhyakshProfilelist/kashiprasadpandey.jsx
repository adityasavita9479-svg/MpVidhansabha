import React from "react";

const KashiPrasadPandePage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/sp-K_P_Pandey.jpg" // replace with actual image path
            alt="श्री काशी प्रसाद पाण्‍डे"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>श्री काशी प्रसाद पाण्‍डे</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व अध्यक्ष, मध्यप्रदेश विधानसभा)</h3>
          <div style={styles.tenure}>
            चतुर्थ विधान सभा (1967-72) <br />
            (24.3.1967 से 24.3.1972)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्म स्थान" value="प्रयाग" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="शैक्षणिक योग्यता" value="एम.ए., एल.एल.बी." />
          <InfoRow label="अभिरुचि" value="कृषि, सहकारिता, साहित्‍य, राजनीति व शिक्षा" />
          <InfoRow label="व्यवसाय" value="कृषि" />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम :</h2>

        <p style={styles.paragraph}>
          अपने परिचितों में ''काका'' के लोकप्रिय और आदरणीय संबोधन से पुकारे जाने वाले पाण्‍डे जी का जीवन एक पत्रकार के रूप में आरम्‍भ हुआ और कलम के माध्‍यम से ही आपने राजनीति में प्रवेश किया. सन् 1921 का वर्ष आपके जीवन में एक विशेष महत्‍व रखता है. इसी वर्ष जहां एक ओर आप जबलपुर जिले के सबसे पुराने सहकारी बैंक-विष्‍णुदत्‍त सहकारी अधिकोष सिहोरा के अध्‍यक्ष मनोनीत हुए, वहीं दूसरी ओर इसी समय से आपको सिहोरा-मुड़वारा निर्वाचन क्षेत्र से पुराने मध्‍यप्रदेश की तत्‍कालीन विधानसभा से क्षेत्र के निवासियों के प्रतिनिधित्‍व का अवसर मिला. तब से अनवरत रूप से ही राजनैतिक संस्‍था और संगठन कांग्रेस के माध्‍यम से अपने राज्‍य की व्‍यवस्‍थापिका सभा में अपने क्षेत्र की जनता का विश्‍वास और आस्‍था अर्जित कर निर्वाचित हुए. नवीन मध्‍यप्रदेश में भी आप सन् 1972 तक प्रत्‍येक आम चुनाव में विधान सभा के सदस्‍य निर्वाचित होते रहे.
        </p>
        <p style={styles.paragraph}>
          देश की विधान सभाओं में सबसे अधिक वरिष्‍ठ सदस्‍य होने के नाते ही आपको ''विधान सभा का जनक'' निरूपित किया जाता रहा और इसी नाते प्रत्‍येक चुनाव की समाप्ति पर और नवीन सदन के गठन पर राज्‍यपाल द्वारा आपको शपथ ग्रहण कराई जाती रही और जब विधान सभा का अधिवेशन आरम्‍भ होता तब प्रथम दिन की कार्यवाही का संचालन करने के लिये और सदस्‍यों को शपथ दिलाने के लिये अध्‍यक्ष पद पर आपको ही मनोनीत किया जाता रहा. आपने लगातार तीन विधान सभाओं में सदस्‍यों को शपथ दिलाई थी. चौथी विधान सभा में आपने दि. 24.3.1967 से 24.3.1972 तक अध्‍यक्ष पद को सुशोभित किया.
        </p>
        <p style={styles.paragraph}>
          युवावस्‍था से ही आपने कांग्रेस के आन्‍दोलनों में सक्रिय भाग लिया. सन् 1931 में एक वर्ष के लिये, सन् 1940 में एक वर्ष के लिये तथा 1942 में 2 वर्ष 11 माह के लिये - इस प्रकार तीन बार जेल यात्रा की. आप जिला कांग्रेस कमेटी के अनेकों वर्षों तक अध्‍यक्ष रहे.
        </p>
        <p style={styles.paragraph}>
          आप अपने गृह जिले जबलपुर में स्‍थापित दोनों विश्‍वविद्यालयों जबलपुर विश्‍वविद्यालय एवं जवाहरलाल नेहरू कृषि विश्‍वविद्यालय की सीनेट के सदस्‍य रहे और राज्‍य शासन का प्रतिनिधित्‍व करते रहे.
        </p>
        <p style={styles.paragraph}>
          सहकारिता के क्षेत्र में पं. काशीप्रसाद पाण्‍डे का योगदान जबलपुर और मध्‍यप्रदेश में सदैव आदर के साथ स्‍मरण किया जाएगा. अपने गृह नगर सिहोरा स्थित विष्‍णुदत्‍त सहकारी अधिकोष के साथ ही साथ आप जबलपुर स्थित मध्‍यप्रदेश राज्‍य सहकारी बैंक के (उसकी स्‍थापना काल से ही) अध्‍यक्ष रहे. इनके अलावा सन् 1935 से जबलपुर जिला भूमि विकास बैंक का सूत्र संचालन भी आपके ही हाथों में रहा. राजधानी दिल्‍ली स्थित राष्‍ट्रीय सहकारिता विकास निगम की सहकारी समिति के भी श्री पाण्‍डे जी अध्‍यक्ष रहे, जबकि अखिल भारतीय सहकारी बैंक फेडरेशन बम्‍बई ने आपको अपना अध्‍यक्ष मनोनीत किया.
        </p>
        <p style={styles.paragraph}>
          भारत सरकार द्वारा आपको ''पद्म श्री'' की उपाधि से अलंकृत किया गया.
        </p>
        <p style={styles.deathNotice}>
          दिनांक 18 मार्च, 1985 को आपका देहावसान हो गया.
        </p>
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

// Reuse the same styles object from your KunjiLalDubePage
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

export default KashiPrasadPandePage;
