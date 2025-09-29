import React from "react";

const KamalNathPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-kamalnath2_1.jpg" // ✅ Replace with actual image path
            alt="श्री कमल नाथ"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री कमल नाथ</h1>
          <h3 style={ntStyles.topSubtitle}>
            पूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा
          </h3>
          <div style={ntStyles.tenure}>
            19.08.2020 - 28.04.2022
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="पिता का नाम" value="स्‍व. श्री महेन्‍द्र नाथ" />
          <InfoRow label="जन्म तिथि" value="18 नवम्‍बर, 1946" />
          <InfoRow label="जन्म स्थान" value="कानपुर (उ.प्र.)" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्नी का नाम" value="श्रीमती अलका नाथ" />
          <InfoRow label="संतान" value="2 पुत्र" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.कॉम." />
          <InfoRow label="व्यवसाय" value="राजनीतिक एवं सामाजिक कार्यकर्त्‍ता" />
          <InfoRow
            label="अभिरुचि"
            value="जनजातीय और दलित वर्गों का विकास, वन्‍य जीव, बागवानी और सामाजिक-आर्थिक मुद्दों में रूचि"
          />
          <InfoRow
            label="स्थायी पता"
            value="मकान नं. 1, शिकारपुर, ब्लॉक एवं तहसील मोहखेड़, थाना देहात परतला, जिला-छिंदवाड़ा-480001 (म.प्र.)"
          />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          1980 में सातवीं, 1985 में आठवीं,1989 में नवीं, 1991 में दसवीं, 1998 में बारहवीं, 1999 में तेरहवीं, 2004 में चौदहवीं, 2009 में पन्‍द्रहवीं तथा 2014 में सोलहवीं लोक सभा के सदस्य निर्वाचित. 1991-1995 केन्द्रीय राज्य मंत्री (स्वतंत्र प्रभार) पर्यावरण एवं वन, 1995-1996 केन्द्रीय राज्य मंत्री (स्वतंत्र प्रभार) वस्त्र, 23 मई 2004 से 2009 तक केन्द्रीय मंत्री वाणिज्य एवं उद्योग, 2009 से 18 जनवरी 2011 तक केन्द्रीय मंत्री सड़क परिवहन और राजमार्ग, 19 जनवरी 2011 से 26 मई 2014 तक केन्द्रीय मंत्री शहरी विकास, 28 अक्टूबर 2012 से 26 मई 2014 तक केन्द्रीय मंत्री संसदीय कार्य रहे.
        </p>

        <p style={ntStyles.paragraph}>
          2001-2004 महासचिव, भारतीय राष्ट्रीय कांग्रेस. 4-6 जून 2014 तक सामयिक अध्यक्ष लोक सभा. 1998-1999 सदस्य - पेट्रोलियम और रसायन संबंधी स्थायी समिति, संसद सदस्य स्थानीय क्षेत्र विकास योजना समिति, परामर्शदात्री समिति विद्युत मंत्रालय. 1999-2000 सदस्य, वित्त स्थायी समिति, 2000-2004 सदस्य, परामर्शदात्री समिति, खान और खनिज मंत्रालय, 1 सितम्बर 2014 से सदस्य, वाणिज्य स्थायी समिति, परामर्शदात्री समिति वित्त और कार्पोरेट कार्य मंत्रालय.
        </p>

        <p style={ntStyles.paragraph}>
          सदस्य: कलकत्ता क्रिकेट और फुटबाल क्लब, टॉलीगंज क्लब कलकत्ता, दिल्ली फ्लाइंग क्लब, एक्स-चीफ पेट्रन दिल्ली जिला क्रिकेट संघ. सदस्य: संयुक्त राष्ट्र गए भारतीय शिष्टमंडल (1982, 1983), गुटनिरपेक्ष देशों का सम्मेलन (1983), आई.पी.यू. सम्मेलन निकारागुआ (1987), ग्वाटेमाला (1988), साइप्रस (1990), भारतीय संसदीय शिष्टमंडल टोक्यो (1989), साइप्रस (1990), युनाइटेड किंगडम (1990). नेतृत्व वर्ल्ड इकोनोमिक फोरम डावोस, स्विट्जरलैंड में भारतीय दल का.
        </p>

        <p style={ntStyles.paragraph}>
          अध्‍यक्ष: शासी बोर्ड, इंस्टीट्यूट ऑफ मैनेजमेंट टेक्नोलॉजी गाजियाबाद; लाजपत राय स्मारक महाविद्यालय समिति गाजियाबाद; चेयरमैन, सेंटर फॉर एडवांस्ड एजुकेशन, नागपुर. निदेशक मंडल, हडकों; संरक्षक: राष्ट्रीय कोयला खान मजदूर फेडरेशन, भारत युवक समाज. पुरस्‍कृत: FDI Personality of the Year 2007, राष्ट्रीय कोयला खान मजदूर फेडरेशन, भारत युवक समाज.
        </p>

        <p style={ntStyles.paragraph}>
          1968 में भारतीय राष्ट्रीय कांग्रेस में शामिल. महासचिव भारतीय राष्ट्रीय कांग्रेस, सदस्य कांग्रेस कार्य समिति, सितंबर 2002-जुलाई 2004. 25 अप्रैल 2018 से अध्यक्ष, मध्यप्रदेश कांग्रेस समिति. प्रकाशित पुस्तकें: "Indias Environmental Concerns", "Indias Century" और "भारत की शताब्दी". अप्रैल 2019 के उप चुनाव में पहली बार विधान सभा सदस्य निर्वाचित एवं 10 जून 2019 को शपथ ग्रहण.
        </p>

        <p style={ntStyles.paragraph}>
          17 दिसंबर 2018 से 20 मार्च 2020 तक मुख्यमंत्री, मध्यप्रदेश शासन. 19 अगस्त 2020 से 28 अप्रैल 2022 तक नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा.
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

export default KamalNathPage;
