import React from "react";

// InfoRow component
const InfoRow = ({ label, value }) => (
  <div style={ntStyles.infoRow}>
    <span style={ntStyles.infoLabel}>{label}:</span>
    <span style={ntStyles.infoValue}>{value}</span>
  </div>
);

const BabuLalGaurPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/cm-babulal.jpg" // ✅ Replace with actual image path
            alt="श्री बाबूलाल गौर"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री बाबूलाल गौर</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व मुख्‍यमंत्री, मध्यप्रदेश)
          </h3>
          <div style={ntStyles.tenure}>
            द्वादश विधान सभा (2003-2008) <br />
            (दिनांक 23.08.2004 से 29.11.2005 तक)
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div style={ntStyles.card}>
        <InfoRow label="पिता" value="स्‍व. श्री राम प्रसाद" />
        <InfoRow label="जन्मतिथि" value="02. जून, 1929" />
        <InfoRow label="जन्म स्थान" value="ग्राम - नौगीर, जिला-प्रतापगढ़ (उ.प्र.)" />
        <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
        <InfoRow label="पत्नी" value="स्‍व. श्रीमती प्रेमदेवी गौर" />
        <InfoRow label="संतान" value="1 पुत्र (दिवंगत), 2 पुत्री" />
        <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., एल.एल.बी." />
        <InfoRow label="व्यवसाय" value="वकालत" />
        <InfoRow label="अभिरुचि" value="ट्रेड यूनियन गतिविधियां" />
        <InfoRow label="स्थायी पता" value="बी-6, स्‍वामी दयानंद नगर, भोपाल" />
        <InfoRow label="दूरभाष (स्थायी)" value="2441578" />
      </div>

      {/* Political Career */}
      <div style={ntStyles.card}>
        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>
        <p style={ntStyles.paragraph}>
          गोवा मुक्ति आंदोलन हेतु सत्‍याग्रह. 1948 से श्रम संघ गतिविधियों में संलग्‍न. भारतीय मजदूर संघ के संस्थापक सदस्य. 
          1946 से राष्ट्रीय स्वयंसेवक संघ के स्वयंसेवक. 1951 से भारतीय जनसंघ में सक्रिय. दिल्‍ली में बेरूवाडी, बंगला देश, पंजाब आदि सत्‍याग्रहों में भागीदारी. 
          टेक्सटाइल स्टाफ एसोसिएशन, हैवी इलेक्ट्रिकल्स लि., पुट्ठा मिल, एच.ई.जी. कर्मचारी संघ के अध्यक्ष एवं अन्य पदों पर कार्य. 
          27 जून, 1975 को आपातकाल के विरोध में भोपाल में सत्‍याग्रह किया और मीसा में गिरफ्तार. आपातकाल में 19 माह का कारावास.
        </p>
        <p style={ntStyles.paragraph}>
          1974 के उपचुनाव में पांचवीं, 1977 में छठवीं, 1980 में सातवीं, 1985 में आठवीं, 1990 में नौवीं, 1993 में दसवीं एवं 1998 में ग्यारहवीं विधान सभा के सदस्य निर्वाचित. 
          नौवीं विधान सभा के कार्यकाल में 7 मार्च, 1990 से दिसंबर 1992 तक मंत्री, स्थानीय शासन, विधि एवं विधायी कार्य, संसदीय कार्य, भोपाल गैस त्रासदी राहत एवं पुनर्वास, जनसम्पर्क एवं नगरीय कल्याण विभाग रहे. 
          विधान सभा की लोक लेखा समिति के सभापति तथा सार्वजनिक उपक्रम समिति के अनेक बार सदस्य.
        </p>
        <p style={ntStyles.paragraph}>
          1974 में म.प्र. शासन द्वारा स्वतंत्रता संग्राम सेनानी के रूप में सम्मानित. दैनिक नई दुनिया, भोपाल द्वारा जनमत संग्रह के आधार पर सन् 1991 में "वर्ष श्री" की उपाधि. 
          दसवीं विधान सभा अवधि में भा.ज.पा. विधायक दल के मुख्य सचेतक एवं लोक लेखा समिति के सभापति तथा सरकारी उपक्रम और विशेषाधिकार समिति के सदस्य रहे. 
          म.प्र. विधान सभा की पत्रिका "विधायिनी" में लेखों का निरंतर प्रकाशन. 1989 में रूस, 1991 में श्रीलंका एवं 1998 में ब्रिटेन, फ्रांस, इटली, जर्मनी, आस्ट्रिया, बेल्जियम एवं हॉलेण्ड की यात्रा. 
          ग्यारहवीं विधान सभा अवधि में 4 सितम्बर, 2002 से 5 दिसम्बर, 2003 तक नेता प्रतिपक्ष, म.प्र. विधान सभा रहे.
        </p>
        <p style={ntStyles.paragraph}>
          सन् 2003 में बारहवीं विधान सभा के सदस्य निर्वाचित एवं मंत्री, नगरीय प्रशासन एवं विकास, आवास एवं पर्यावरण, विधि एवं विधायी कार्य, श्रम, भोपाल गैस त्रासदी राहत एवं पुनर्वास रहे. 
          23 अगस्त, 2004 से 28 नवंबर, 2005 तक मुख्यमंत्री, मध्यप्रदेश. मंत्री, वाणिज्यिक कर, वाणिज्य, उद्योग और रोजगार, सार्वजनिक उपक्रम भोपाल गैस त्रासदी राहत एवं पुनर्वास रहे. 
          सन् 2008 में तेरहवीं विधान सभा के सदस्य निर्वाचित एवं मंत्री, वाणिज्यिक कर, सार्वजनिक उपक्रम रहे. 
          सन् 2013 में दसवीं बार, चतुर्दश विधान सभा हेतु सदस्य निर्वाचित एवं दिनांक 30 जून, 2016 तक मंत्री, गृह एवं जेल विभाग रहे.
        </p>
        <p style={ntStyles.paragraph}>
          दिनांक 21 अगस्त, 2019 को आपका देहावसान हो गया.
        </p>
      </div>
    </div>
  );
};

// Same CSS as previous CM pages
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

export default BabuLalGaurPage;
