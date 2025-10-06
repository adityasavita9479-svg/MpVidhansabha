import React from "react";

const KrishnaMohanSethPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-kmseth.jpg" // Add the correct image in public/leaders
            alt="लेफ्टिनेंट जनरल कृष्‍ण मोहन सेठ"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>लेफ्टिनेंट जनरल कृष्‍ण मोहन सेठ</h1>
          <h3 style={styles.topSubtitle}>(भूतपूर्व राज्यपाल, मध्यप्रदेश)</h3>
          <div style={styles.tenure}>
            (दिनांक 02.05.2004 से 29.06.2004 तक)
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>व्यक्तिगत विवरण:</h2>
        <p style={styles.paragraph}>
          जन्मतिथि: 19 दिसंबर, 1939 <br />
          जन्मस्थान: इलाहाबाद <br />
          गृह प्रदेश: उत्तर प्रदेश <br />
          पिता का नाम: स्व. त्रिलोकदास सेठ <br />
          पत्नी: श्रीमती वीना सेठ <br />
          संतान: दो पुत्र – लेफ्टिनेंट कर्नल धीरज सेठ, लेफ्टिनेंट रवनीश सेठ <br />
          मातृभाषा: हिन्दी <br />
          अन्य भाषा ज्ञान: अंग्रेज़ी <br />
          शैक्षणिक योग्यता: एम.बी.ए. (एस.आई.एम.एस.पूना), एम.एस.सी. (मद्रास विश्वविद्यालय), एम.एस.सी. (जे.एन.यू. दिल्ली), स्नातक (फंजी अकादमी मास्को), स्नातक (स्टाफ कॉलेज कैम्ब्रले, यू.के.)
        </p>

        {/* Career & Achievements */}
        <h2 style={styles.sectionTitle}>सेना एवं सार्वजनिक जीवन:</h2>
        <p style={styles.paragraph}>
          - सेना अधिकारी के रूप में उत्कृष्ट सेवा हेतु परम विशिष्ट सेवा मेडल (पी.वी.एस.एम.) एवं अति विशिष्ट सेवा मेडल (ए.वी.एस.एम.) प्राप्त। 31 दिसम्बर 1997 को सेवानिवृत्त। <br />
          - 1983-1986: जिला उखरूल, मणिपुर में शांति स्थापित करने हेतु ब्रिगेड कमांडर के रूप में महत्वपूर्ण भूमिका। <br />
          - 1994-1995: नागालैंड में हिंसक गतिविधियों पर नियंत्रण और शांति व्यवस्था बहाल करने में नेतृत्व। एन.एस.सी.एन. (आई.एम.) के साथ शांति वार्ता। <br />
          - मणिपुर, साउथ असम, त्रिपुरा और मिजोरम विद्रोह नियंत्रण अभियान में उल्लेखनीय योगदान। <br />
          - सेना में एडजुटेंट जनरल के रूप में कार्य। 
        </p>
        <p style={styles.paragraph}>
          - असैनिक सामूहिक बीमा योजना के अध्यक्ष के रूप में प्रबंधकीय व्यवस्था संचालित एवं 3500 करोड़ निधि संग्रह। <br />
          - आर्मी वेलफेयर हाउसिंग ऑर्गेनाइजेशन के अध्यक्ष के रूप में 23 बड़े शहरों में गृह परियोजनाओं का योजना एवं दिशा निर्देश। <br />
          - सेना में भ्रष्टाचार पर निगरानी एवं अनुशासन बनाए रखने में योगदान। <br />
          - तीन लाख सेना के नागरिक कर्मचारियों में सामंजस्य एवं संबंध स्थापित। <br />
          - 104 सैनिक पब्लिक स्कूलों एवं वोकेशनल ट्रेनिंग संस्थानों के माध्यम से मानव संसाधन विकास। 
        </p>
        <p style={styles.paragraph}>
          - 22 जून 2000 से 1 जून 2003: त्रिपुरा के राज्यपाल। प्रमुख विद्रोही संगठन एन.एल.एफ.टी. के साथ शांति वार्ता। <br />
          - 2 जून 2003: छत्तीसगढ़ के राज्यपाल। <br />
          - 2 मई 2004 से 29 जून 2004: मध्यप्रदेश के राज्यपाल का अतिरिक्त प्रभार। 
        </p>

        {/* Honors & Interests */}
        <h2 style={styles.sectionTitle}>सम्मान एवं रुचियाँ:</h2>
        <p style={styles.paragraph}>
          - 1996: परम विशिष्ट सेवा मेडल (पी.वी.एस.एम.) – नागालैंड, मणिपुर, मिजोरम, त्रिपुरा में आतंकवाद नियंत्रण। <br />
          - 1985: अति विशिष्ट सेवा मेडल – मणिपुर, उखरूल में आतंकवादी गतिविधियों को रोकने में व्यक्तिगत योगदान। <br />
          - प्रकाशन: सेना से संबंधित अनेक लेख। <br />
          - रुचियाँ: पढ़ना, लिखना, पैराट्रूपिंग। <br />
          - पैराट्रूपर के रूप में मणिपुर, नागालैंड, मिजोरम, त्रिपुरा में कोर कमांडर के रूप में नेतृत्व। 
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

export default KrishnaMohanSethPage;
