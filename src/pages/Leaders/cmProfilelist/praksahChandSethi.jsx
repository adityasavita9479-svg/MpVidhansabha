import React from "react";

const ShriPrakashChandraSethiPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/cm-prakashchandsethi.jpg" // ✅ Place image in public/leaders
            alt="श्री प्रकाश चन्‍द्र सेठी"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री प्रकाश चन्‍द्र सेठी</h1>
          <h3 style={ntStyles.topSubtitle}>
            (भूतपूर्व मुख्‍यमंत्री, मध्यप्रदेश)
          </h3>
          <div style={ntStyles.tenure}>
            चतुर्थ विधान सभा (1967-1972) एवं पंचम् विधान सभा (1972-1977) <br />
            (दिनांक 29.01.1972 से 22.03.1972 एवं दिनांक 23.03.1972 से 23.12.1975 तक)
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="जन्मतिथि" value="19 अक्टूबर, 1920" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित (1939)" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., एल.एल.बी." />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          सन् 1939 में उज्जैन के माधव महाविद्यालय के स्नेह सम्मेलन एवं माधव क्लब के सचिव रहे। 
          सन् 1942 में स्वतंत्रता आंदोलन में सक्रिय रूप से भाग लेने के लिये महाविद्यालयीन शिक्षा का बहिष्कार किया। 
          सन् 1942 में तथा सन् 1949 से 1952 तक मध्यभारत इंटक के उपाध्यक्ष पद का कार्यभार संभाला। 
          सन् 1951 से अखिल भारतीय कांग्रेस समिति के सदस्य, सन् 1948-49 में इंटक से संबंधित टेक्सटाइल वर्कर्स एसोसिएशन के अध्यक्ष रहे। 
          मध्यभारत कर्मचारी संघ के अध्यक्ष के रूप में कार्यरत रहे।  
        </p>

        <p style={ntStyles.paragraph}>
          सन् 1951, 1954 तथा 1957 में उज्जैन जिला कांग्रेस के अध्यक्ष रहे। सन् 1953 से 1957 तक मध्य भारत, प्रदेश कांग्रेस कार्यकारिणी के सदस्य रहे। 
          मध्यभारत कला परिषद के सदस्य रहे। सन् 1954-1955 में मध्य भारत कांग्रेस के कोषाध्यक्ष। 
          सन् 1956 से 1959 तक मध्य भारत ग्राम तथा खादी मंडल तथा प्रादेशिक परिवहन समिति के सदस्य रहे। 
          सन् 1957 से 1959 तक उज्जैन जिला सहकारी बैंक के संचालक।  
        </p>

        <p style={ntStyles.paragraph}>
          सन् 1953 बिहार में, सन् 1954 पेप्सू में तथा सन् 1959 केरल में अखिल भारतीय कांग्रेस समिति की ओर से चुनाव प्रचारक रहे। 
          अखिल भारतीय कांग्रेस समिति द्वारा सन् 1955-1956 में कर्नाटक, महाराष्ट्र, बम्बई और गुजरात के लिये क्षेत्रीय प्रतिनिधि नियुक्त हुए। 
          सन् 1958 में अफगानिस्तान, सन् 1960 में अमेरिका, कनाडा, इंग्लैंड, नार्वे, स्वीडन, डेनमार्क, जर्मनी, फ्रांस, स्विट्जरलैंड, मिस्र देश और सन् 1962 में चेकोस्लोवाकिया तथा ऑस्ट्रिया की यात्राएँ कीं।  
        </p>

        <p style={ntStyles.paragraph}>
          फरवरी, 1961 तथा अप्रैल, 1964 में राज्यसभा के लिये सदस्य निर्वाचित। 
          दिसम्बर 1966 में बिहार में अखिल भारतीय कांग्रेस समिति के पर्यवेक्षक। 
          फरवरी, 1967 में लोक सभा के लिये निर्वाचित। 
          9 जून, 1962 से मार्च, 1967 तक केंद्रीय उप मंत्री।  
          13 मार्च, 1967 से राज्य मंत्री, 26 अप्रैल, 1968 से 23 फरवरी, 1969 तक इस्पात, खान और धातु मंत्रालय के स्वतंत्र प्रभारी मंत्री। 
          14 फरवरी, 1969 को वित्त मंत्रालय में राजस्व तथा व्यय मंत्री। 
          सितम्बर, 1969 में बारबाडोस (वेस्टइंडीज) के राष्ट्र मंडलीय वित्त मंत्री सम्मेलन में भारत सरकार का प्रतिनिधित्व।  
        </p>

        <p style={ntStyles.paragraph}>
          अक्‍टूबर, 1969 में कोलंबो योजना सम्मेलन के प्रतिनिधि मंडल का नेतृत्व किया। 
          एशियाई विकास बैंक मनीला और अंतर्राष्ट्रीय पुनर्निर्माण तथा विकास बैंक में भारत के गवर्नर मनोनीत हुए। 
          27 जून, 1970 को प्रतिरक्षा उत्पादन मंत्री बने। 
          तदुपरांत पेट्रोलियम तथा रसायन राज्य मंत्री रहे।  
          दिनांक 29 जनवरी, 1972 के आम चुनाव में विधान सभा के लिये निर्वाचित होकर पुन: सदन के नेता निर्वाचित हुए।
        </p>

        <p style={ntStyles.paragraph}>
          <strong>दिनांक 21 फरवरी, 1996</strong> को आपका देहावसान हो गया।
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

// Reusing the same ntStyles as Shukla Page
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

export default ShriPrakashChandraSethiPage;
