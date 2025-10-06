// import React, { useState } from "react";


// // Add year to each item
// const galleryImages = [
//   {
//     id: 1,
//     year: 2025,
//     title: "सिंगरौलीप्रगति",
//     image: "src/assets/galleries/सिंगरौलीप्रगति.jpg",
//     link: "/",
//   },
//   {
//     id: 2,
//     year: 2025,
//     title: "दिल्ली में मध्यांचल उत्सव में अध्यक्ष तोमर: युवा शक्ति बने विकसित भारत की धुरी।",
//     image: "src/assets/galleries/युवाशक्ति.jpg",
//     link: "/",
//   },

//   {
//     id: 3,
//     year: 2025,
//     title: "प्रमुख सचिव को कैम्ब्रिज से मानद डॉक्टरेट पर बधाई।",
//     image: "src/assets/galleries/डॉक्टरेटसम्मान.jpg",
//     link: "/",
//   },
//   {
//     id: 4,
//     year: 2025,
//     title: "सेवानिवृत्त अधिकारियों-कर्मचारियों को विदाई दी गई।",
//     image: "src/assets/galleries/विदाईसम्मान.jpg",
//     link: "/",
//   },
//   {
//     id: 5,
//     year: 2025,
//     title: "16वीं विधानसभा के पंचम सत्र का समापन; कार्यप्रणाली जनहित की धुरी बने – अध्यक्ष तोमर।",
//     image: "src/assets/galleries/सत्रसमापन.jpg",
//     link: "/",
//   },
//   {
//     id: 1,
//     year: 2025,
//     title: "विधान सभा में फाग उत्सव का आयोजन",
//     image: "src/assets/galleries/फागउत्सव.jpg",
//     link: "/",
//   },
//   {
//     id: 1,
//     year: 2025,
//     title: "कार्यमंत्रणा समिति की बैठक संपन्न",
//     image: "src/assets/galleries/कार्यमंत्रणाबैठक.jpg",
//     link: "/",
//   },
//    {
//     id: 1,
//     year: 2025,

//     title: "केन्द्रीय मंत्री श्री शिवराज सिंह ने अध्यक्ष श्री तोमर से भेंट कर विधानसभा कार्रवाई का अवलोकन किया।",
//     image: "src/assets/galleries/सौजन्यभेंट.jpg",
//     link: "/",
//   },
//   {
//     id: 1,
//     year: 2025,

//     title: "	सत्र का प्रथम दिवस",
//     image: "src/assets/galleries/सत्रप्रथमदिवस.jpg",
//     link: "/",
//   },
//   {
//     id: 1,
//     year: 2025,

//     title: "विधायक उमाकान्त शर्मा ने प्रमुख सचिव से भेंट की और दिव्यांगजन को अवलोकन कराया।",
//     image: "src/assets/galleries/सौजन्यभेंट2.jpg",
//     link: "/",
//   },
//   {
//     id: 1,
//     year: 2025,

//     title: "श्री तोमर ने राजभवन में राज्यपाल से मुलाकात की।",
//     image: "src/assets/galleries/सौजन्यभेंट3.jpg",
//     link: "/",
//   },
//   {
//     id: 1,
//     year: 2025,

//     title: "बजट सत्र सोमवार से, अध्यक्ष ने निरीक्षण किया।",
//     image: "src/assets/galleries/निरीक्षण.jpg",
//     link: "/",
//   },
//    {
//     id: 1,
//     year: 2025,

//     title: "प्राक्कलन समिति की बैठक संपन्न",
//     image: "src/assets/galleries/प्राक्कलनसंपन्न.jpg",
//     link: "/",
//   },
//    {
//     id: 1,
//     year: 2025,

//     title: "वकील विधि में सहयोगी",
//     image: "src/assets/galleries/सहभागिता.jpg",
//     link: "/",
//   },
//    {
//     id: 1,
//     year: 2025,

//     title: "विधानसभा में ई-विधान हाउस कमेटी की बैठक हुई।",
//     image: "src/assets/galleries/बैठक2.jpg",
//     link: "/",
//   },
//    {
//     id: 1,
//     year: 2025,

//     title: "सचिवालय की लेखा शाखा का उद्घाटन हुआ",
//     image: "src/assets/galleries/लेखाशाखाकाउद्घाटन.jpg",
//     link: "/adg1",
//   },
//    {
//     id: 1,
//     year: 2025,

//     title: "श्री नरेंद्र सिंह तोमर ने मुरैना में गणतंत्र दिवस पर झंडा वंदन किया।",
//     image: "src/assets/galleries/झंडावंदन.jpg",
//     link: "/adg1",
//   },
//    {
//     id: 1,
//     year: 2025,

//     title: "गणतंत्र दिवस पर विधानसभा में कार्यक्रम संपन्न।",
//     image: "src/assets/galleries/कार्यक्रम.jpg",
//     link: "/adg1",
//   },
//    {
//     id: 1,
//     year: 2025,

//     title: "आधुनिक तकनीक से विधायिका का विकास: प्रमुख सचिव।",
//     image: "src/assets/galleries/तकनीक.jpg",
//     link: "/adg1",
//   },
//    {
//     id: 1,
//     year: 2025,

//     title: "स्थानीय निकायों पर मध्यप्रदेश व हरियाणा की बैठक संपन्न।",
//     image: "src/assets/galleries/निकायोंहरियाणा.jpg",
//     link: "/",
//   },

// // 2019

//   {
//     id: 1,
//     year: 2019,

//     title: "राष्‍ट्रमंडल संसदीय सम्‍मेलन 2019 - युगांडा",
//     image: "src/assets/galleries/up1-vs290919.jpg",
//     link: "/adg1",
//   },
//   {
//     id: 2,
//     year: 2019,

//     title: "Independence Day 2019",
//     image: "src/assets/galleries/ind1-vs160819_1.jpg",
//     link: "/indg1",
//   },
//   {
//     id: 2,
//     year: 2019,



//     title: "Orientation Programme  - 2019",
//     image: "src/assets/galleries/OrientationProgramme2.jpg",
//     link: "/indg1",
//   },
//   {
//     id: 3,
//     year: 2019,

//     title: "मुख्यमंत्री कमल नाथ ने विधान सभा सदस्यता की शपथ ली।",
//     image: "src/assets/galleries/शपथली।vs100619_3.jpg",
//     link: "",
//   },
//   {
//     id: 4,
//     year: 2019,

//     title: "स्वामी सुबोधानंद जी महाराज का विधानसभा में पुष्पगुच्छ और शॉल से स्वागत किया गया।",
//     image: "src/assets/galleries/स्वामीसुबोधानंदजीमहाराज।vs280519_2.jpg",
//     link: "/gallery/oath-ceremony",
//   },
//   {
//     id: 5,
//     year: 2019,

//     title: "विधान सभा में स्‍वास्‍थ्‍य परीक्षण शिविर आयोजित [09/05/2019]",
//     image: "src/assets/galleries/शिविरआयोजित.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 6,
//     year: 2019,

//     title: "श्री एन.पी. प्रजापति ने सचिवालय कर्मचारियों से सेंट्रल हॉल में मुलाकात की और सराहना की।",
//     image: "src/assets/galleries/एनपीप्रजापतिने।.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 7,
//     year: 2019,

//     title: "विधान सभा अध्यक्ष श्री एन.पी. प्रजापति की अध्यक्षता में कार्य मंत्रणा समिति की बैठक हुई।",
//     image: "src/assets/galleries/विधानसभाअध्यक्षबैठकहुई।.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 8,
//     year: 2019,

//     title: "नव निर्वाचित विधानसभा अध्यक्ष एवं उपाध्यक्ष विधानसभा परिसर में।",
//     image: "src/assets/galleries/अध्यक्षएवंउपाध्यक्षविधानसभापरिसमें।.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 9,
//     year: 2019,

//     title: "नव निर्वाचित विधान सभा अध्यक्ष श्री एन.पी. प्रजापति का प्रमुख सचिव ने स्वागत किया।",
//     image: "src/assets/galleries/स्वागतकिया।.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 10,
//     year: 2019,
//     title: "गणतंत्र दिवस उत्सव।।",
//     image: "src/assets/galleries/गणतंत्रदिवसउत्सव।.jpg",
//     link: "src/assets/galleries/cultural-event",
//   },
//   {
//     id: 11,
//     year: 2019,

//     title: "प्रजापति व सिंह ने लोकसभा अध्यक्ष से भेंट की।",
//     image: "src/assets/galleries/शिष्टाचारभेंट.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 12,
//     year: 2019,

//     title: "मुख्‍यमंत्री कमलनाथ ने विधान सभा स्थित मुख्‍यमंत्री कक्ष एवं कार्यालय का अवलोकन किया ।",
//     image: "src/assets/galleries/अवलोकन.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 13,
//     year: 2019,

//     title: "मध्यप्रदेश की राज्यपाल से विधानसभा के प्रमुख सचिव श्री ए पी सिंह ने नव वर्ष पर सौजनय भेंट की",
//     image: "src/assets/galleries/सौजन्यbhet.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 12,
//     year: 2019,

//     title: "गाँधी जयंती पर प्रमुख सचिव ने महात्मा गांधी को श्रद्धांजलि दी।।",
//     image: "src/assets/galleries/श्रद्धांजलि.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 12,
//     year: 2019,

//     title: "राजभवन में शपथ समारोह में प्रमुख सचिव ने सदस्यों के नाम पुकारे।।",
//     image: "src/assets/galleries/शपथसंचालन.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 12,
//     year: 2019,

//     title: "CPA India Region Conference on Evidhan, 21-23 Sept 2018, Shimla HP Assembly.",
//     image: "src/assets/galleries/सम्मेलन.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 12,
//     year: 2019,

//     title: "कॉमनवेल्थ पार्लियामेंटस की 54वीं सचिव सम्मेलन, टोरंटो (कनाडा) में।",
//     image: "src/assets/galleries/सम्मेलन2.jpeg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 12,
//     year: 2019,

//     title: "परिचर्चा कार्यक्रम ओन्टारियो विधानसभा चैम्बर में आयोजित।",
//     image: "src/assets/galleries/परिचर्चा.jpeg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 12,
//     year: 2019,

//     title: "Republic Day 2018  ",
//     image: "src/assets/galleries/RepublicDay2018.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 12,
//     year: 2019,

//     title: "मध्यप्रदेश व हरियाणा विधानसभा समितियों की संयुक्त बैठक।",
//     image: "src/assets/galleries/संयुक्तबैठक.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 12,
//     year: 2019,

//     title: "नेहरू मेमोरियल संग्रहालय एवं पुस्तकालय ऑडिटोरियम, नई दिल्ली में।",
//     image: "src/assets/galleries/ऑडिटोरियम.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 12,
//     year: 2019,

//     title: "63वां कॉमनवेल्थ संसदीय सम्मेलन, ढाका (बांग्लादेश) में।",
//     image: "src/assets/galleries/सम्मेलन3.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 12,
//     year: 2019,

//     title: "Independence Day 2017 ",
//     image: "src/assets/galleries/IndependenceDay2017.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 12,
//     year: 2019,

//     title: "Snapshots 2017",
//     image: "src/assets/galleries/Snapshots2017.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 12,
//     year: 2019,

//     title: "Orientation Programme 2014  ",
//     image: "src/assets/galleries/OrientationProgramme2014.jpg",
//     link: "/gallery/cultural-event",
//   },
//    {
//     id: 12,
//     year: 2019,

//     title: "Gandhi Darshan and Dr.Ambedkar Smriti  Awards",
//     image: "src/assets/galleries/GandhiDarshanAwards.jpg",
//     link: "/gallery/cultural-event",
//   },
//    {
//     id: 12,
//     year: 2019,

//     title: "First Meeting of newly constituted Public Accounts Committee of Vidhan Sabha (08/05/2012)",
//     image: "src/assets/galleries/प्रारंभ.jpg",
//     link: "/gallery/cultural-event",
//   },
//    {
//     id: 12,
//     year: 2019,

//     title: "Visit of Trainee Officers (27/02/2012)",
//     image: "src/assets/galleries/भ्रमण.jpg",
//     link: "/gallery/cultural-event",
//   },
//    {
//     id: 12,
//     year: 2019,

//     title: "Business Advisory Committee Meeting (21/02/2012)",
//     image: "src/assets/galleries/बैठक.jpg",
//     link: "/gallery/cultural-event",
//   },
//    {
//     id: 12,
//     year: 2019,

//     title: "Visit of the Committee of Bihar Legislative Council (13/01/2012)",
//     image: "src/assets/galleries/भ्रमण2.jpg",
//     link: "/gallery/cultural-event",
//   },
//    {
//     id: 12,
//     year: 2019,

//     title: "Visit of House Committee of West Bengal Legislative Assembly (05/01/2012)",
//     image: "src/assets/galleries/भ्रमण3.jpg",
//     link: "/gallery/cultural-event",
//   },
//    {
//     id: 12,
//     year: 2019,

//     title: "74th Presiding Officers' Conference of Legislative Bodies in India(2nd to 6th February 2010)",
//     image: "src/assets/galleries/सम्मेलन4.jpg",
//     link: "/gallery/cultural-event",
//   },
//    {
//     id: 12,
//     year: 2019,

//     title: "17 जुलाई 2006 को राष्ट्रपति डॉ. ए.पी.जे. अब्दुल कलाम का म.प्र. विधानसभा में संबोधन।",
//     image: "src/assets/galleries/संबोधन.jpg",
//     link: "/gallery/cultural-event",
//   },
//    {
//     id: 12,
//     year: 2019,

//     title: "Snapshots 2017",
//     image: "src/assets/galleries/Snapshots2017.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 4,
//     year: 2019,
//     title: "राष्‍ट्रमंडल संसदीय सम्‍मेलन 2019 - युगांडा",
//     image: "src/assets/galleries/up1-vs290919.jpg",
//     link: "/adg1",
//   },
//   {
//     id: 5,
//     year: 2019,
//     title: "Independence Day 2019",
//     image: "src/assets/galleries/ind1-vs160819_1.jpg",
//     link: "/indg1",
//   },
// //  2018
//  {
//     id: 6,
//     year: 2018,
//     title: "CPA India Region Conference on Evidhan, 21-23 Sept 2018, Shimla HP Assembly.",
//     image: "सम्मेलन.jfif",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 7,
//     year: 2017,
//     title: "Independence Day 2017",
//     image: "IndependenceDay2017.jfif",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 8,
//     year: 2014,
//     title: "Orientation Programme 2014",
//     image: "OrientationProgramme2014.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 9,
//     year: 2012,
//     title: "Visit of Trainee Officers (27/02/2012)",
//     image: "भ्रमण.jfif",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 10,
//     year: 2010,
//     title: "74th Presiding Officers' Conference of Legislative Bodies in India",
//     image: "सम्मेलन4.jpg",
//     link: "/gallery/cultural-event",
//   },
//   {
//     id: 11,
//     year: 2006,
//     title: "राष्ट्रपति डॉ. ए.पी.जे. अब्दुल कलाम का म.प्र. विधानसभा में संबोधन।",
//     image: "संबोधन.jfif",
//     link: "/gallery/cultural-event",
//   },
// ];
// const years = [...new Set(galleryImages.map((item) => item.year))].sort((a, b) => b - a);

// const GalleryFlex = () => {
//   const [selectedYear, setSelectedYear] = useState(years[0]);
//   const filteredImages = galleryImages.filter((item) => item.year === selectedYear);
  
//   return (
//     <div className="gallery-flex-wrapper">
//       <h2 className="gallery-heading">फोटो गैलरी</h2>

//       <div className="year-filter">
//         <label htmlFor="yearSelect" className="year-label">
//           वर्ष चुनें:
//         </label>
//         <select
//           id="yearSelect"
//           value={selectedYear}
//           onChange={(e) => setSelectedYear(Number(e.target.value))}
//           className="year-dropdown"
//         >
//           {years.map((year) => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="gallery-grid">
//         {filteredImages.map((item) => (
//           <a
//             href={item.link}
//             key={`${item.id}-${item.image}`}
//             className="gallery-card"
//           >
//             <div
//               className="gallery-card-image"
//               style={{ backgroundImage: `url(${item.image})` }}
//             ></div>
//             <div className="gallery-card-title">{item.title}</div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryFlex;


import React, { useState } from "react";

// Gallery images with Vite-compatible paths
const galleryImages = [
  {
    id: 1,
    year: 2025,
    title: "सिंगरौलीप्रगति",
    image: "/galleries/सिंगरौलीप्रगति.jpg",
    link: "/",
  },
  {
    id: 2,
    year: 2025,
    title: "दिल्ली में मध्यांचल उत्सव में अध्यक्ष तोमर: युवा शक्ति बने विकसित भारत की धुरी।",
    image: "/galleries/युवाशक्ति.jpg",
    link: "/",
  },
  {
    id: 3,
    year: 2025,
    title: "प्रमुख सचिव को कैम्ब्रिज से मानद डॉक्टरेट पर बधाई।",
    image: "/galleries/डॉक्टरेटसम्मान.jpg",
    link: "/",
  },
  {
    id: 4,
    year: 2025,
    title: "सेवानिवृत्त अधिकारियों-कर्मचारियों को विदाई दी गई।",
    image: "/galleries/विदाईसम्मान.jpg",
    link: "/",
  },
  {
    id: 5,
    year: 2025,
    title: "16वीं विधानसभा के पंचम सत्र का समापन; कार्यप्रणाली जनहित की धुरी बने – अध्यक्ष तोमर।",
    image: "/galleries/सत्रसमापन.jpg",
    link: "/",
  },
  {
    id: 6,
    year: 2025,
    title: "विधान सभा में फाग उत्सव का आयोजन",
    image: "/galleries/फागउत्सव.jpg",
    link: "/",
  },
  {
    id: 7,
    year: 2025,
    title: "कार्यमंत्रणा समिति की बैठक संपन्न",
    image: "/galleries/कार्यमंत्रणाबैठक.jpg",
    link: "/",
  },
  {
    id: 8,
    year: 2025,
    title: "केन्द्रीय मंत्री श्री शिवराज सिंह ने अध्यक्ष श्री तोमर से भेंट कर विधानसभा कार्रवाई का अवलोकन किया।",
    image: "/galleries/सौजन्यभेंट.jpg",
    link: "/",
  },
  {
    id: 9,
    year: 2025,
    title: "सत्र का प्रथम दिवस",
    image: "/galleries/सत्रप्रथमदिवस.jpg",
    link: "/",
  },
  {
    id: 10,
    year: 2025,
    title: "विधायक उमाकान्त शर्मा ने प्रमुख सचिव से भेंट की और दिव्यांगजन को अवलोकन कराया।",
    image: "/galleries/सौजन्यभेंट2.jpg",
    link: "/",
  },
  {
    id: 11,
    year: 2025,
    title: "श्री तोमर ने राजभवन में राज्यपाल से मुलाकात की।",
    image: "/galleries/सौजन्यभेंट3.jpg",
    link: "/",
  },
  {
    id: 12,
    year: 2025,
    title: "बजट सत्र सोमवार से, अध्यक्ष ने निरीक्षण किया।",
    image: "/galleries/निरीक्षण.jpg",
    link: "/",
  },
  {
    id: 13,
    year: 2025,
    title: "प्राक्कलन समिति की बैठक संपन्न",
    image: "/galleries/प्राक्कलनसंपन्न.jpg",
    link: "/",
  },
  {
    id: 14,
    year: 2025,
    title: "वकील विधि में सहयोगी",
    image: "/galleries/सहभागिता.jpg",
    link: "/",
  },
  {
    id: 15,
    year: 2025,
    title: "विधानसभा में ई-विधान हाउस कमेटी की बैठक हुई।",
    image: "/galleries/बैठक2.jpg",
    link: "/",
  },
  {
    id: 16,
    year: 2025,
    title: "सचिवालय की लेखा शाखा का उद्घाटन हुआ",
    image: "/galleries/लेखाशाखाकाउद्घाटन.jpg",
    link: "/adg1",
  },
  {
    id: 17,
    year: 2025,
    title: "श्री नरेंद्र सिंह तोमर ने मुरैना में गणतंत्र दिवस पर झंडा वंदन किया।",
    image: "/galleries/झंडावंदन.jpg",
    link: "/adg1",
  },
  {
    id: 18,
    year: 2017,
    title: "Independence Day 2017",
    image: "/galleries/IndependenceDay2017.jpg",
    link: "/gallery/cultural-event",
  },
  {
    id: 19,
    year: 2014,
    title: "Orientation Programme 2014",
    image: "/galleries/OrientationProgramme2014.jpg",
    link: "/gallery/cultural-event",
  },
  {
    id: 20,
    year: 2010,
    title: "74th Presiding Officers' Conference of Legislative Bodies in India",
    image: "/galleries/सम्मेलन4.jpg",
    link: "/gallery/cultural-event",
  },
  {
    id: 21,
    year: 2006,
    title: "राष्ट्रपति डॉ. ए.पी.जे. अब्दुल कलाम का म.प्र. विधानसभा में संबोधन।",
    image: "/galleries/संबोधन.jpg",
    link: "/gallery/cultural-event",
  },
];

// Extract unique years
const years = [...new Set(galleryImages.map((item) => item.year))].sort((a, b) => b - a);

const GalleryFlex = () => {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const filteredImages = galleryImages.filter((item) => item.year === selectedYear);

  return (
    <div className="gallery-flex-wrapper">
      <h2 className="gallery-heading">फोटो गैलरी</h2>

      <div className="year-filter">
        <label htmlFor="yearSelect" className="year-label">
          वर्ष चुनें:
        </label>
        <select
          id="yearSelect"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="year-dropdown"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="gallery-grid">
        {filteredImages.map((item) => (
          <a
            href={item.link}
            key={`${item.id}-${item.image}`}
            className="gallery-card"
          >
            <div
              className="gallery-card-image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="gallery-card-title">{item.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GalleryFlex;
