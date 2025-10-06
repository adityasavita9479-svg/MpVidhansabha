import React from "react";

const GovindSinghPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/umg-govindsingh.jpg" // ✅ Replace with actual image path
            alt="डॉ. गोविन्द सिंह"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>डॉ. गोविन्द सिंह</h1>
          <h3 style={ntStyles.topSubtitle}>
            पूर्व नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा
          </h3>
          <div style={ntStyles.tenure}>
            28.04.2022 - 04.12.2023
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={ntStyles.card}>
        <section style={ntStyles.section}>
          <InfoRow label="पिता का नाम" value="स्‍व. श्री ठा. मथुरा सिंह" />
          <InfoRow label="जन्म तिथि" value="01 जुलाई, 1951" />
          <InfoRow label="जन्म स्थान" value="ग्राम वैशपुरा, जिला भिण्ड" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्नी का नाम" value="श्रीमती सुमन सिंह" />
          <InfoRow label="संतान" value="1 पुत्र, 1 पुत्री" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए., बी.ए.एम.एस." />
          <InfoRow label="व्यवसाय" value="कृषि" />
          <InfoRow label="अभिरुचि" value="समाज सेवा" />
          <InfoRow
            label="स्थायी पता"
            value="मुकाम पो. लहार, जिला-भिण्ड (म.प्र.), दूरभाष-(07529) 252010, मोबाइल-9425109782, फ़ैक्स-(07529) 2521010, ई-मेल-govind[dot]singh[at]mpvidhansabha[dot]nic[dot]in, gsingh[dot]1951[at]rediffmail[dot]com"
          />
          <InfoRow
            label="स्थानीय पता"
            value="ई-28, 45-बंगले, भोपाल (म.प्र.), दूरभाष-2441462,2441672"
          />
        </section>

        <hr style={ntStyles.divider} />

        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>

        <p style={ntStyles.paragraph}>
          1971-72 में पत्रिका सचिव एवं 1974-75 में शासकीय आयुर्वेद महाविद्यालय जबलपुर छात्र संघ के निर्वाचित अध्यक्ष. जबलपुर विश्वविद्यालय छात्र संघ कार्यकारिणी के सदस्य. 1979-82 में कृषि उपज मंडी समिति लहार के सदस्य. 1979-82 तथा 1984-85 में सहकारी विपणन संस्था मर्यादित लहार के निर्वाचित अध्यक्ष. 1984-86 में जिला सहकारी भूमि विकास बैंक भिण्ड के निर्वाचित संचालक. 1985-87 में नगर पालिका परिषद लहार के अध्यक्ष.
        </p>

        <p style={ntStyles.paragraph}>
          1990 में नौवीं एवं 1993 में दसवीं विधान सभा के सदस्य निर्वाचित. जून 1994 से जून 1997 तक जवाहरलाल नेहरू कृषि विश्वविद्यालय जबलपुर के संचालक मंडल के सदस्य. 1996-97, 1997-98 एवं 31 दिसंबर 1998 तक विधान सभा की याचिका समिति के सदस्य. अप्रैल, 1997 से मध्यप्रदेश राज्य सहकारी भूमि विकास बैंक के संचालक. सितंबर, 1997 में सहकारिता के अध्ययन हेतु इटली, जर्मनी, इंग्लैंड, स्विटजरलैंड, नीदरलैंड, ऑस्ट्रिया, फ्रांस एवं दुबई का दौरा.
        </p>

        <p style={ntStyles.paragraph}>
          1997 में उत्कृष्ट विधायक चुने गए. 1998 में ग्यारहवीं विधानसभा के सदस्य निर्वाचित एवं 6 दिसम्बर 1998 से राज्य मंत्री, गृह; 26 अप्रैल 2000 से राज्य मंत्री, सहकारिता (स्वतंत्र प्रभार); 12 अगस्त 2002 से मंत्री, सहकारिता विभाग. 10 जनवरी 2001 से 9 फरवरी 2002 तक मध्यप्रदेश राज्य सहकारी विपणन संघ मर्यादित के संचालक. 10 दिसंबर 2001 से 2 जनवरी 2002 तक मध्यप्रदेश राज्य सहकारी कृषि एवं ग्रामीण विकास बैंक के संचालक. 28 मार्च 2002 से मध्यप्रदेश राज्य सहकारी आवास संघ के अध्यक्ष. 5 अगस्त 2002 से भारतीय राष्ट्रीय सहकारी आवास संघ, नई दिल्ली के संचालक.
        </p>

        <p style={ntStyles.paragraph}>
          अक्टूबर 2002 में I.C.A. रीजनल असेंबली में भाग लेने हेतु सिंगापुर एवं "Parliament on Population and Development" की सातवीं जनरल असेंबली में भाग लेने हेतु चीन और हांगकांग की यात्रा. वर्ष 1995 से वर्तमान तक प्रदेश कांग्रेस समिति एवं 2005 से अखिल भारतीय कांग्रेस समिति के सदस्य. 24 मार्च 2008 से वर्तमान तक मध्यप्रदेश कांग्रेस समिति के उपाध्यक्ष.
        </p>

        <p style={ntStyles.paragraph}>
          2003 में बारहवीं विधान सभा के सदस्य निर्वाचित एवं कांग्रेस विधायक दल के मुख्य सचेतक रहे. 2008 में तेरहवीं विधान सभा के सदस्य निर्वाचित तथा 2009 से 2011 तक सभापति लोक लेखा समिति. अप्रैल-मई, 2011 में भारतीय संसदीय संघ, मध्यप्रदेश शाखा के तत्वावधान में ग्रीस, स्पेन, ऑस्ट्रिया, स्विटजरलैंड, जर्मनी, नीदरलैंड, फ्रांस, यू.के. एवं यू.ए.ई. की यात्रा.
        </p>

        <p style={ntStyles.paragraph}>
          वर्तमान में मध्यप्रदेश कांग्रेस समिति भोपाल के उपाध्यक्ष. 2013 में छठी बार विधान सभा के सदस्य निर्वाचित. दिसंबर 2013 से जून 2018 तक कार्यमंत्रणा समिति के सदस्य तथा अगस्त 2014 से जून 2018 तक रचना नगर आवासीय प्रकोष्ठ योजना के क्रियान्वयन के पर्यवेक्षण संबंधी अस्थाई आवास समिति के सदस्य. 2016 में उत्कृष्ट विधायक नवदुनिया संसदीय पुरस्कार से सम्मानित और 2017 में सर्वश्रेष्ठ विधायक नईदुनिया संसदीय पुरस्कार से सम्मानित.
        </p>

        <p style={ntStyles.paragraph}>
          2018 में सातवीं बार विधान सभा सदस्य निर्वाचित. 29 दिसंबर 2018 से मंत्री सहकारिता एवं संसदीय कार्य विभाग, 2 जनवरी 2019 से सामान्य प्रशासन विभाग, 13 मार्च से 20 मार्च 2020 तक खाद्य, नागरिक आपूर्ति एवं उपभोक्ता संरक्षण विभाग का अतिरिक्त प्रभार रहा. 28 अप्रैल 2022 से 4 दिसंबर 2023 तक माननीय नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा.
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

export default GovindSinghPage;
