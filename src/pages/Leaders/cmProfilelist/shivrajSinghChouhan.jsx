import React from "react";

// InfoRow component
const InfoRow = ({ label, value }) => (
  <div style={ntStyles.infoRow}>
    <span style={ntStyles.infoLabel}>{label}:</span>
    <span style={ntStyles.infoValue}>{value}</span>
  </div>
);

const ShivrajSinghChouhanPage = () => {
  return (
    <div style={ntStyles.pageWrapper}>
      {/* Top Section with Photo and Name */}
      <div style={ntStyles.topProfileCard}>
        <div style={ntStyles.photoFrame}>
          <img
            src="/leaders/cm-shivrajsingh.jpg" // ✅ Replace with actual image path
            alt="श्री शिवराज सिंह चौहान"
            style={ntStyles.profileImage}
          />
        </div>
        <div style={ntStyles.divider}></div>
        <div style={ntStyles.nameFrame}>
          <h1 style={ntStyles.topTitle}>श्री शिवराज सिंह चौहान</h1>
          <h3 style={ntStyles.topSubtitle}>
            (पूर्व मुख्‍यमंत्री, मध्यप्रदेश)
          </h3>
          <div style={ntStyles.tenure}>
            मुख्‍यमंत्री (29.11.2005 से 10.12.2008, 12.12.2008 से 09.12.2013,
            14.12.2013 से 12.12.2018 एवं 23.03.2020 से 11.12.2023)
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div style={ntStyles.card}>
        <InfoRow label="पिता" value="श्री प्रेम सिंह चौहान" />
        <InfoRow label="जन्मतिथि" value="05. मार्च, 1959" />
        <InfoRow label="जन्म स्थान" value="ग्राम-जैत, जिला-सीहोर" />
        <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
        <InfoRow label="पत्नी" value="श्रीमती साधना सिंह चौहान" />
        <InfoRow label="संतान" value="2 पुत्र" />
        <InfoRow label="शैक्षणिक योग्यता" value="एम.ए." />
        <InfoRow label="व्यवसाय" value="कृषि" />
        <InfoRow label="अभिरुचि" value="संगीत, आध्‍यात्मिक साहित्‍य, भ्रमण" />
        <InfoRow
          label="स्थायी पता"
          value="(1) ग्राम-जैत, पो.-सरदार नगर, तह.-बुधनी, जिला-सीहोर (म.प्र.)"
        />
      </div>

      {/* Political Career */}
      <div style={ntStyles.card}>
        <h2 style={ntStyles.sectionTitle}>
          सार्वजनिक एवं राजनैतिक जीवन का संक्षिप्त विकास क्रम
        </h2>
        <p style={ntStyles.paragraph}>
          1972 से राष्‍ट्रीय स्वयंसेवक संघ के स्वयंसेवक. 1975 में मॉडल उच्चतर
          माध्यमिक विद्यालय विद्यार्थी संघ के अध्‍यक्ष. आपातकाल के विरूद्ध
          भूमिगत आंदोलन में भाग लिया और 1976-77 में भोपाल जेल में तथा अन्य
          अवसरों पर राजनैतिक आंदोलनों के दौरान निरूद्ध रहे.
        </p>
        <p style={ntStyles.paragraph}>
          1977-78 में अखिल भारतीय विद्यार्थी परिषद, भोपाल के संगठन सचिव, 1978-80 में ए.बी.वी.पी. मध्‍यप्रदेश के संयुक्‍त सचिव एवं 1980-82 में इसके महासचिव. 
          1982-83 में ए.बी.वी.पी. की राष्ट्रीय कार्यकारिणी के सदस्य. 1984-85 में भारतीय जनता युवा मोर्चा मध्‍यप्रदेश के संयुक्‍त सचिव, 1985-88 में महासचिव एवं 1988-91 में इसके अध्यक्ष.
        </p>
        <p style={ntStyles.paragraph}>
          1990 में नौवीं विधान सभा के सदस्य निर्वाचित एवं 23 नवंबर, 1991 को सदस्यता से त्याग पत्र. 
          1991 में दसवीं लोक सभा के सदस्य निर्वाचित. 1991-92 में अखिल भारतीय केशरिया वाहिनी के संयोजक. 1992 से अखिल भारतीय जनता युवा मोर्चा के महासचिव. 
          1992-94 में भा.ज.पा. मध्‍यप्रदेश के महासचिव. 1992-96 में मानव संसाधन विकास मंत्रालय की परामर्शदात्री समिति, 1993-96 में श्रम और कल्‍याण संबंधी समिति, 1994-96 में हिंदी सलाहकार समिति एवं 1995-96 में सभा की बैठकों से सदस्यों की अनुपस्थिति संबंधी समिति के सदस्य.
        </p>
        <p style={ntStyles.paragraph}>
          1996 में ग्यारहवीं लोक सभा के सदस्य निर्वाचित. 1996-97 में शहरी और ग्रामीण विकास संबंधी समिति एवं मानव संसाधन विकास मंत्रालय की परामर्शदात्री समिति के सदस्य. 
          1997-98 में शहरी और ग्रामीण विकास संबंधी समिति के सदस्य और भा.ज.पा. मध्‍यप्रदेश के महासचिव.
        </p>
        <p style={ntStyles.paragraph}>
          1998 में बारहवीं लोक सभा के सदस्य निर्वाचित. 1998-99 में प्राक्कलन समिति, शहरी और ग्रामीण विकास संबंधी समिति, ग्रामीण क्षेत्र और रोजगार मंत्रालय संबंधी इसकी उप समिति-दो एवं मानव संसाधन विकास मंत्रालय की परामर्शदात्री समिति के सदस्य.
        </p>
        <p style={ntStyles.paragraph}>
          1999 में तेरहवीं लोक सभा के सदस्य निर्वाचित. 1999-2000 में कृषि संबंधी समिति, 1999-2000 और 2000-2001 में सरकारी उपक्रमों संबंधी समिति एवं 2000 से संचार मंत्रालय की परामर्शदात्री समिति के सदस्य.
        </p>
        <p style={ntStyles.paragraph}>
          2002 में भा.ज.पा. के राष्ट्रीय सचिव. 2003 में भा.ज.पा. के राष्ट्रीय महासचिव. 2004 में चौदहवीं लोक सभा के सदस्य (पांचवी बार) निर्वाचित. मई, 2005 से भा.ज.पा. मध्‍यप्रदेश के प्रदेश अध्यक्ष. 
          29 नवंबर, 2005 को मध्यप्रदेश के मुख्यमंत्री की शपथ ग्रहण की. 6 मई, 2006 को उपचुनाव में बारहवीं विधान सभा के सदस्य निर्वाचित. 10 मई, 2006 को लोक सभा की सदस्यता से त्यागपत्र. विधान सभा सदस्य के रूप में 12 मई, 2006 को शपथ ग्रहण की.
        </p>
        <p style={ntStyles.paragraph}>
          10 दिसम्बर, 2008 तक मुख्यमंत्री रहे. सन् 2008 में तेरहवीं विधान सभा के सदस्य निर्वाचित एवं 12 दिसम्बर, 2008 से 9 दिसम्बर, 2013 तक मुख्यमंत्री रहे. 
          वर्ष 2013 में चौथी बार विधान सभा सदस्य निर्वाचित. दिनांक 14/12/2013 से 12/12/2018 तक मुख्यमंत्री रहे. वर्ष 2018 में पाँचवीं बार विधान सभा सदस्य निर्वाचित. 
          दिनांक 23/03/2020 से 11/12/2023 तक मुख्यमंत्री रहे. वर्ष 2023 में छठवीं बार विधान सभा सदस्य निर्वाचित.
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

export default ShivrajSinghChouhanPage;
