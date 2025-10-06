// import React from "react";

// const UmangSingharProfile = () => {
//   return (
//     <div className="page-wrapper">
//       {/* Top Section with Photo and Name */}
//       <div className="top-profile-card">
//         <div className="photo-frame">
//           <img
//             src="src/assets/leaders/umangsingharlo.jpg"
//             alt="श्री उमंग सिंघार"
//             className="profile-image"
//           />
//         </div>
//         <div className="divider"></div>
//         <div className="name-frame">
//           <h1 className="top-title">श्री उमंग सिंघार</h1>
//           <h3 className="top-subtitle">
//             माननीय नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा
//           </h3>
//         </div>
//       </div>

//       {/* Information Section */}
//       <div className="card-landscape">
//         <section className="section">
//           <InfoRow label="पिता का नाम" value="स्‍व. श्री दयाराम सिंघार" />
//           <InfoRow label="जन्म तिथि" value="23 जनवरी, 1974" />
//           <InfoRow label="जन्म स्थान" value="धार" />
//           <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
//           <InfoRow label="संतान" value="2 पुत्र" />
//           <InfoRow label="शैक्षणिक योग्यता" value="बी.ए." />
//           <InfoRow label="व्यवसाय" value="कृषि, व्यवसाय" />
//           <InfoRow label="अभिरुचि" value="खेलकूद, संगीत" />
//          <InfoRow label="स्थायी पता" value="ब्लॉक कॉलोनी, ग्राम-बारिया, पोस्ट-गंधवानी, जिला-धार (म.प्र.) 454350, मोबाइल-9826040402, ई-मेल: umang.singhar@mpvidhansabha.nic.in" />
//           <InfoRow
//             label="स्थानीय पता"
//             value="बी-12(ए), 74 बंगला, भोपाल (म.प्र.)-462003"
//           />
//         </section>
//       </div>

//       {/* Biography Section */}
//       <div className="card">
//         <h2 className="section-title">राजनीतिक एवं सार्वजनिक जीवन</h2>
//         <p className="paragraph">
//           सन् 1994-2003 में जिला युवा कांग्रेस के अध्यक्ष. सन् 2008 में तेरहवीं विधान सभा के सदस्य निर्वाचित. सामान्य प्रशासन विभाग की परामर्शदात्री समिति एवं विधान सभा की याचिका समिति के सदस्य. अखिल भारतीय कांग्रेस कमेटी के राष्ट्रीय सचिव. कांग्रेस की राष्ट्रीय कार्यकारिणी के सदस्य. अखिल भारतीय कांग्रेस कमेटी की अनुसूचित जनजाति मोर्चा के सदस्य. प्रभारी झारखंड. सन् 2013 में चौदहवीं एवं सन् 2018 में पन्द्रहवीं विधान सभा के सदस्य निर्वाचित. दिनांक 29 दिसम्बर, 2018 से 20 मार्च, 2020 तक मंत्री वन विभाग रहे।</p>
//         <p className="paragraph">
//           सन् 2023 में चौथी बार विधान सभा सदस्य निर्वाचित।
//         </p>
//         <p className="bold-paragraph">
//           वर्तमान में: दिनांक 18 दिसम्बर, 2023 से नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा।
//         </p>
//       </div>
//     </div>
//   );
// };

// // InfoRow Component
// const InfoRow = ({ label, value }) => (
//   <div className="info-row">
//     <span className="info-label">{label}:</span>{" "}
//     <span className="info-value">{value}</span>
//   </div>
// );

// export default UmangSingharProfile;

import React from "react";

const UmangSingharProfile = () => {
  return (
    <div className="page-wrapper">
      {/* Top Section with Photo and Name */}
      <div className="top-profile-card">
        <div className="photo-frame">
          <img
            src="/leaders/umangsingharlo.jpg" // Updated path for public folder
            alt="श्री उमंग सिंघार"
            className="profile-image"
          />
        </div>
        <div className="divider"></div>
        <div className="name-frame">
          <h1 className="top-title">श्री उमंग सिंघार</h1>
          <h3 className="top-subtitle">
            माननीय नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा
          </h3>
        </div>
      </div>

      {/* Information Section */}
      <div className="card-landscape">
        <section className="section">
          <InfoRow label="पिता का नाम" value="स्‍व. श्री दयाराम सिंघार" />
          <InfoRow label="जन्म तिथि" value="23 जनवरी, 1974" />
          <InfoRow label="जन्म स्थान" value="धार" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="संतान" value="2 पुत्र" />
          <InfoRow label="शैक्षणिक योग्यता" value="बी.ए." />
          <InfoRow label="व्यवसाय" value="कृषि, व्यवसाय" />
          <InfoRow label="अभिरुचि" value="खेलकूद, संगीत" />
          <InfoRow
            label="स्थायी पता"
            value="ब्लॉक कॉलोनी, ग्राम-बारिया, पोस्ट-गंधवानी, जिला-धार (म.प्र.) 454350, मोबाइल-9826040402, ई-मेल: umang.singhar@mpvidhansabha.nic.in"
          />
          <InfoRow
            label="स्थानीय पता"
            value="बी-12(ए), 74 बंगला, भोपाल (म.प्र.)-462003"
          />
        </section>
      </div>

      {/* Biography Section */}
      <div className="card">
        <h2 className="section-title">राजनीतिक एवं सार्वजनिक जीवन</h2>
        <p className="paragraph">
          सन् 1994-2003 में जिला युवा कांग्रेस के अध्यक्ष. सन् 2008 में तेरहवीं विधान सभा के सदस्य निर्वाचित. सामान्य प्रशासन विभाग की परामर्शदात्री समिति एवं विधान सभा की याचिका समिति के सदस्य. अखिल भारतीय कांग्रेस कमेटी के राष्ट्रीय सचिव. कांग्रेस की राष्ट्रीय कार्यकारिणी के सदस्य. अखिल भारतीय कांग्रेस कमेटी की अनुसूचित जनजाति मोर्चा के सदस्य. प्रभारी झारखंड. सन् 2013 में चौदहवीं एवं सन् 2018 में पन्द्रहवीं विधान सभा के सदस्य निर्वाचित. दिनांक 29 दिसम्बर, 2018 से 20 मार्च, 2020 तक मंत्री वन विभाग रहे।
        </p>
        <p className="paragraph">
          सन् 2023 में चौथी बार विधान सभा सदस्य निर्वाचित।
        </p>
        <p className="bold-paragraph">
          वर्तमान में: दिनांक 18 दिसम्बर, 2023 से नेता प्रतिपक्ष, मध्यप्रदेश विधान सभा।
        </p>
      </div>
    </div>
  );
};

// InfoRow Component
const InfoRow = ({ label, value }) => (
  <div className="info-row">
    <span className="info-label">{label}:</span>{" "}
    <span className="info-value">{value}</span>
  </div>
);

export default UmangSingharProfile;

