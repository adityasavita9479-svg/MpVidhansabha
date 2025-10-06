import React from "react";

const PtRavishankarShuklaPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/cm-ravishankar.jpg" // ✅ place in public/leaders
            alt="पं. रविशंकर शुक्ल"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>पं. रविशंकर शुक्ल</h1>
          <h3 style={styles.topSubtitle}>
            (भूतपूर्व मुख्‍यमंत्री, मध्यप्रदेश)
          </h3>
          <div style={styles.tenure}>
            प्रथम विधान सभा (1956 - 1957) <br />
            (01.11.1956 से 31.12.1956)
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div style={styles.card}>
        <section style={styles.section}>
          <InfoRow label="जन्‍म तिथि" value="02 अगस्‍त, 1877, सागर नगर" />
          <InfoRow
            label="शैक्षणिक योग्‍यता"
            value="बी.ए., एल.एल.बी., रायपुर, जबलपुर और नागपुर"
          />
        </section>

        <hr style={styles.divider} />

        <h2 style={styles.sectionTitle}>सार्वजनिक एवं राजनैतिक जीवन</h2>

        <p style={styles.paragraph}>
          शिक्षा समाप्‍त करने के पश्‍चात् आप तीन वर्ष तक खैरागढ़ राज्‍य के हाई स्‍कूल में प्रधानाध्‍यापक तथा बस्‍तर कवर्धा एवं खैरागढ़ के राजकुमारों के शिक्षक रहे और सन् 1906 में आपने रायपुर में वकालत प्रारंभ की.
                    प्रारम्‍भ से ही आपको सार्वजनिक कार्यों के प्रति रूचि थी और सदा जनहित के कार्यों में महात्‍मा गांधी के नेतृत्‍व में असहयोग आंदोलन प्रारंभ होने पर आप अपनी अच्‍छी वकालत को छोड़कर राजनीति के क्षेत्र में क्रियात्‍मक रूप से उतर आये और गिरफ्तार कर लिये गये परन्‍तु बाद में आपको छोड़ने के लिये सरकार को बाध्‍य होना पडा. सन् 1930 में आपको तीन साल की सजा हुई और सन् 1932 में सजा के साथ-साथ आप पर पांच सौ रूपये जुर्माना हुआ तथा आपका नाम वकीलों की सूची से हटा दिया गया. परन्‍तु सन् 1935 में आपने फिर वकालत करने की आज्ञा प्राप्‍त कर ली.
                     सन् 1923 में आप स्‍वराज्‍य पार्टी की ओर से सभा के सदस्‍य चुने गये. सन् 1926 से 1937 तक आप रायपुर जिला बोर्ड के सदस्‍य रहे. सन् 1936 में प्रान्‍तीय धारा सभा के चुनाव में बहुमत से कांग्रेस की विजय हुई और डॉक्‍टर एन.बी. खरे के नेतृत्‍व में मंत्रिमण्‍डल बना, आप शिक्षा मंत्री बने और आपने विद्यामंदिर योजना का सूत्रपात किया जिसकी प्रशंसा महात्‍मा गांधी ने की. वास्‍तव में शिक्षा के क्षेत्र में यह एक नया प्रयोग था. डॉक्‍टर खरे के मंत्रिमण्‍डल में मतभेद होने के कारण केन्‍द्रीय पार्लियामेन्‍ट्री बोर्ड को हस्‍तक्षेप करने के लिए बाध्‍य होना पडा और डॉ. खरे के त्‍यागपत्र देने पर शुक्‍ल जी मुख्‍यमंत्री चुने गये और आपने सफलता के साथ अगस्‍त 1938 से 10 नवम्‍बर, 1939 तक मुख्‍यमंत्री का कार्य किया. परन्‍तु सन् 1939 में द्व‍ितीय महायुद्ध में अंग्रेजों की सहायता न करने का निर्णय करने के कारण अन्‍य कांग्रेसी प्रांतों के मंत्रिमण्‍डलों की भांति नवम्‍बर 1938 को आपने मध्‍यप्रदेश मंत्रिमण्‍डल से त्‍यागपत्र दे दिया और प्रांत के अन्‍य नेताओं के साथ आप भी राष्‍ट्रीय आंदोलन में संलग्‍न हो गये. फलस्‍वरूप अवज्ञा भंग के अपराध में सन् 1940 में आपको पुन: जेल जाना पड़ा. इसी प्रकार अगस्‍त सन् 1942 को 'भारत छोड़ो' आंदोलन में सक्रिय भाग लेने पर आपकी फिर गिरफ्तारी हुई.
                    2 सितम्‍बर, 1945 को पंडित जवाहरलाल नेहरू के नेतृत्‍व में अन्‍त:कालीन शासन की स्‍थापना हुई, जिसमें बाद में मुस्लिम लीग भी सम्मिलित हो गयी थी. इस समय प्रान्‍तों में भी कांग्रेस सरकारों की स्‍थापना हुई और आपके नेतृत्‍व में मध्‍यप्रदेश में भी कांग्रेसी मंत्रिमण्‍डल बना. सन् 1952 में प्रथम आम चुनावों के बाद मध्‍यप्रदेश में आपके नेतृत्‍व में फिर सरकार स्‍थापित हुई.
                  राज्‍य पुर्नगठन के पश्‍चात् जिस नये मध्‍यप्रदेश का निर्माण 1 नवम्‍बर 1956 को हुआ था, उसके आप सर्वसम्‍मति से मुख्‍यमंत्री बनाये गये.
                      
        </p>
        <p style={styles.paragraph}>
       दिनांक 31 दिसम्‍बर 1956 को आपका देहावसान हो गया.
        </p>
        
      </div>
    </div>
  );
};

// Reusable InfoRow
const InfoRow = ({ label, value }) => (
  <div style={styles.infoRow}>
    <span style={styles.infoLabel}>{label}:</span>
    <span style={styles.infoValue}>{value}</span>
  </div>
);

// Same styles object as BrijmohanMishraPage
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
    minWidth: 120,
    color: colors.secondary,
  },
  infoValue: {
    flex: 1,
    color: "#333",
    fontWeight: "500",
  },
};

export default PtRavishankarShuklaPage;
