// import React from "react";

// const oppositions = [
//   { number: 1, name: "श्री विश्‍वनाथ यादवराव तामस्‍कर", tenure: "17/12/1956 से 05/03/1957", link: "/leaders/opposition/vy-tamaskar", image: "/leaders/umg-VY_tamaskar.jpg" },
//   { number: 2, name: "श्री चन्‍द्र प्रताप तिवारी", tenure: "01/07/1957 से 07/03/1962", link: "/leaders/opposition/cp-tiwari", image: "/leaders/umg-CP_tiwari.jpg" },
//   { number: 3, name: "श्री वीरेन्‍द्र कुमार सखलेचा", tenure: "28/03/1962 से 01/03/1967 | 01/03/1967 से 18/07/1967", link: "/leaders/opposition/vk-sakhlecha-1", image: "/leaders/umg-VK_saklecha.jpg" },
//   { number: 5, name: "श्री श्‍यामाचरण शुक्‍ल", tenure: "31/07/1967 से 08/09/1968", link: "/leaders/opposition/sc-shukla-1", image: "/leaders/umg-SC_shukla.jpg" },
//   { number: 6, name: "पं. द्वारिका प्रसाद मिश्र", tenure: "09/09/1968 से 16/02/1969", link: "/leaders/opposition/dp-mishra", image: "/leaders/umg-DP_mishra.jpg" },
//   { number: 7, name: "श्री श्‍यामाचरण शुक्‍ल", tenure: "17/02/1969 से 12/03/1969", link: "/leaders/opposition/sc-shukla-2", image: "/leaders/umg-SC_shukla.jpg" },
//   { number: 8, name: "श्री वीरेन्‍द्र कुमार सखलेचा", tenure: "20/03/1969 से 06/01/1970", link: "/leaders/opposition/vk-sakhlecha-3", image: "/leaders/umg-VK_saklecha.jpg" },
//   { number: 9, name: "श्री वसंत सदाशिव प्रधान", tenure: "07/01/1970 से 17/03/1972", link: "/leaders/opposition/vs-pradhan", image: "/leaders/umg-VS_pradhan.jpg" },
//   { number: 10, name: "श्री कैलाश जोशी", tenure: "28/03/1972 से 30/04/1977", link: "/leaders/opposition/kailash-joshi-1", image: "/leaders/umg-0K_joshi.jpg" },
//   { number: 11, name: "श्री अर्जुन सिंह", tenure: "15/07/1977 से 17/02/1980", link: "/leaders/opposition/arjun-singh", image: "/leaders/umg-A_singh.jpg" },
//   { number: 12, name: "श्री सुंदरलाल पटवा", tenure: "04/07/1980 से 10/03/1985", link: "/leaders/opposition/sl-patwa", image: "/leaders/umg-SL_patwa.jpg" },
//   { number: 13, name: "श्री कैलाश जोशी", tenure: "23/03/1985 से 03/03/1990", link: "/leaders/opposition/kailash-joshi-2", image: "/leaders/umg-0K_joshi.jpg" },
//   { number: 14, name: "श्री श्‍यामाचरण शुक्‍ल", tenure: "20/03/1990 से 15/12/1992", link: "/leaders/opposition/sc-shukla-3", image: "/leaders/umg-SC_shukla.jpg" },
//   { number: 15, name: "श्री विक्रम वर्मा", tenure: "24/12/1993 से 01/12/1998", link: "/leaders/opposition/vikram-verma", image: "/leaders/umg-V_verma.jpg" },
//   { number: 16, name: "डॉ. गौरीशंकर शेजवार", tenure: "02/02/1999 से 01/09/2002", link: "/leaders/opposition/gs-shejwar", image: "/leaders/umg-GS_shejwar.jpg" },
//   { number: 17, name: "श्री बाबूलाल गौर", tenure: "04/09/2002 से 05/12/2003", link: "/leaders/opposition/bl-gaur", image: "/leaders/umg-bl_gaur.jpg" },
//   { number: 18, name: "श्रीमती जमुना देवी", tenure: "16/12/2003 से 11/12/2008", link: "/leaders/opposition/jamuna-devi-1", image: "/leaders/umg-jamuna_devi_1.jpg" },
//   { number: 19, name: "श्रीमती जमुना देवी", tenure: "07/01/2009 से 24/09/2010", link: "/leaders/opposition/jamuna-devi-2", image: "/leaders/umg-jamuna_devi_1.jpg" },
//   { number: 20, name: "श्री अजय सिंह", tenure: "15/04/2011 से 10/12/2013", link: "/leaders/opposition/ajay-singh-1", image: "/leaders/umg-ajaysingh.jpg" },
//   { number: 21, name: "श्री सत्यदेव कटारे", tenure: "09/01/2014 से 20/10/2016", link: "/leaders/opposition/satyadev-katare", image: "/leaders/umg-satyadevkatare.jpg" },
//   { number: 22, name: "श्री अजय सिंह", tenure: "27/02/2017 से 13/12/2018", link: "/leaders/opposition/ajay-singh-2", image: "/leaders/umg-ajaysingh.jpg" },
//   { number: 23, name: "श्री गोपाल भार्गव", tenure: "08/01/2019 से 23/03/2020", link: "/leaders/opposition/gopal-bhargava", image: "/leaders/umg-gopalbhargava.jpg" },
//   { number: 24, name: "श्री कमल नाथ", tenure: "19/08/2020 से 29/04/2022", link: "/leaders/opposition/kamal-nath", image: "/leaders/umg-kamalnath2_1.jpg" },
//   { number: 25, name: "डॉ. गोविन्द सिंह", tenure: "29/04/2022 से 04/12/2023", link: "/leaders/opposition/govind-singh", image: "/leaders/umg-govindsingh.jpg" },
//   { number: 26, name: "श्री उमंग सिंघार", tenure: "18/12/2023 से निरंतर", link: "/leaders/opposition/umang-singhar", image: "/leaders/umg-usingharlo.jpg" },
// ];

// const NetapratipakshList = () => {
//   return (
//     <section className="governors-section">
//       <h2 className="section-heading">मध्यप्रदेश विधान सभा के माननीय नेता प्रतिपक्ष</h2>
//       <div className="governors-grid">
//         {oppositions.map((op) => (
//           <a key={op.number} href={op.link} className="governor-card">
//             <article className="governor-info">
//               <img src={op.image} alt={op.name} className="governor-image" />
//               <div className="governor-details">
//                 <h3 className="governor-name">{op.name}</h3>
//                 <p className="governor-tenure">{op.tenure}</p>
//               </div>
//             </article>
//           </a>
//         ))}
//       </div>
//       {/* Notes Section */}
// <div
//   className="notes-section"
//   style={{
//     marginTop: "2rem",
//     padding: "1rem",
//     fontSize: "15px",     // bigger text
//     lineHeight: "1.8",
//     color: "#111827",
//     textAlign: "justify", // justify text
//     fontWeight: "bold",   // bold text
//   }}
// >
//   <h3
//     className="section-heading"
//     style={{
//       fontSize: "20px",
//       marginBottom: "1rem",
//       fontWeight: "bold",
//     }}
//   >
//     टिप्‍पणी :-
//   </h3>
//   <p style={{ marginBottom: "1rem" }}>
//     (1) प्रथम से चतुर्थ विधान सभाओं में कोई मान्‍यता प्राप्‍त विरोधी दल नहीं था. तृतीय विधान सभा से ही विरोधी दल की मान्‍यता प्राप्‍त हुई. 
//     प्रथम विधान सभा में श्री विश्‍वनाथ यादवराव तामस्‍कर एवं द्वितीय विधान सभा में श्री चन्‍द्रप्रताप तिवारी, तत्‍कालीन विरोधी दलों में 
//     सबसे बड़े विरोधी दल के नेता थे.
//     (2) सदन की कार्यवाहियों के अनुसार, प्रथम से चतुर्थ विधानसभा कार्यकाल तक नेता प्रतिपक्ष की मान्यता की घोषणा या बधाई उल्लेख नहीं किया गया. 
//     तथापि, विरोधी दल के वरिष्ठतम सदस्य के नाते नेता प्रतिपक्ष के रूप में महत्वपूर्ण भाषण दिए जाने के प्रमाण उपलब्ध हैं. 
//     तदनन्‍तर पंचम विधान सभा कार्यकाल में श्री कैलाश जोशी से निरन्‍तर नेता प्रतिपक्ष की मान्यता संबंधी घोषणाएं की गई हैं.
//   </p>

// </div>

//     </section>
    
//   );
// };

// export default NetapratipakshList;


import React from "react";

const oppositions = [
  { number: 1, name: "श्री विश्‍वनाथ यादवराव तामस्‍कर", tenure: "17/12/1956 से 05/03/1957", link: "/vy-tamaskar", image: "/leaders/umg-VY_tamaskar.jpg" },
  { number: 2, name: "श्री चन्‍द्र प्रताप तिवारी", tenure: "01/07/1957 से 07/03/1962", link: "/cp-tiwari", image: "/leaders/umg-CP_tiwari.jpg" },
  { number: 3, name: "श्री वीरेन्‍द्र कुमार सखलेचा", tenure: "28/03/1962 से 01/03/1967 | 01/03/1967 से 18/07/1967", link: "/vk-sakhlecha-1", image: "/leaders/umg-VK_saklecha.jpg" },
  { number: 5, name: "श्री श्‍यामाचरण शुक्‍ल", tenure: "31/07/1967 से 08/09/1968", link: "/sc-shukla-1", image: "/leaders/umg-SC_shukla.jpg" },
  { number: 6, name: "पं. द्वारिका प्रसाद मिश्र", tenure: "09/09/1968 से 16/02/1969", link: "/dp-mishra", image: "/leaders/umg-DP_mishra.jpg" },
  { number: 7, name: "श्री श्‍यामाचरण शुक्‍ल", tenure: "17/02/1969 से 12/03/1969", link: "/sc-shukla-2", image: "/leaders/umg-SC_shukla.jpg" },
  { number: 8, name: "श्री वीरेन्‍द्र कुमार सखलेचा", tenure: "20/03/1969 से 06/01/1970", link: "/vk-sakhlecha-3", image: "/leaders/umg-VK_saklecha.jpg" },
  { number: 9, name: "श्री वसंत सदाशिव प्रधान", tenure: "07/01/1970 से 17/03/1972", link: "/vs-pradhan", image: "/leaders/umg-VS_pradhan.jpg" },
  { number: 10, name: "श्री कैलाश जोशी", tenure: "28/03/1972 से 30/04/1977", link: "/kailash-joshi-1", image: "/leaders/umg-0K_joshi.jpg" },
  { number: 11, name: "श्री अर्जुन सिंह", tenure: "15/07/1977 से 17/02/1980", link: "/arjun-singh", image: "/leaders/umg-A_singh.jpg" },
  { number: 12, name: "श्री सुंदरलाल पटवा", tenure: "04/07/1980 से 10/03/1985", link: "/sl-patwa", image: "/leaders/umg-SL_patwa.jpg" },
  { number: 13, name: "श्री कैलाश जोशी", tenure: "23/03/1985 से 03/03/1990", link: "/kailash-joshi-2", image: "/leaders/umg-0K_joshi.jpg" },
  { number: 14, name: "श्री श्‍यामाचरण शुक्‍ल", tenure: "20/03/1990 से 15/12/1992", link: "/sc-shukla-3", image: "/leaders/umg-SC_shukla.jpg" },
  { number: 15, name: "श्री विक्रम वर्मा", tenure: "24/12/1993 से 01/12/1998", link: "/vikram-verma", image: "/leaders/umg-V_verma.jpg" },
  { number: 16, name: "डॉ. गौरीशंकर शेजवार", tenure: "02/02/1999 से 01/09/2002", link: "/gs-shejwar", image: "/leaders/umg-GS_shejwar.jpg" },
  { number: 17, name: "श्री बाबूलाल गौर", tenure: "04/09/2002 से 05/12/2003", link: "/bl-gaur", image: "/leaders/umg-bl_gaur.jpg" },
  { number: 18, name: "श्रीमती जमुना देवी", tenure: "16/12/2003 से 11/12/2008", link: "/jamuna-devi-1", image: "/leaders/umg-jamuna_devi_1.jpg" },
  { number: 19, name: "श्रीमती जमुना देवी", tenure: "07/01/2009 से 24/09/2010", link: "/jamuna-devi-2", image: "/leaders/umg-jamuna_devi_1.jpg" },
  { number: 20, name: "श्री अजय सिंह", tenure: "15/04/2011 से 10/12/2013", link: "/ajay-singh-1", image: "/leaders/umg-ajaysingh.jpg" },
  { number: 21, name: "श्री सत्यदेव कटारे", tenure: "09/01/2014 से 20/10/2016", link: "/satyadev-katare", image: "/leaders/umg-satyadevkatare.jpg" },
  { number: 22, name: "श्री अजय सिंह", tenure: "27/02/2017 से 13/12/2018", link: "/ajay-singh-2", image: "/leaders/umg-ajaysingh.jpg" },
  { number: 23, name: "श्री गोपाल भार्गव", tenure: "08/01/2019 से 23/03/2020", link: "/gopal-bhargava", image: "/leaders/umg-gopalbhargava.jpg" },
  { number: 24, name: "श्री कमल नाथ", tenure: "19/08/2020 से 29/04/2022", link: "/kamal-nath", image: "/leaders/umg-kamalnath2_1.jpg" },
  { number: 25, name: "डॉ. गोविन्द सिंह", tenure: "29/04/2022 से 04/12/2023", link: "/govind-singh", image: "/leaders/umg-govindsingh.jpg" },
  { number: 26, name: "श्री उमंग सिंघार", tenure: "18/12/2023 से निरंतर", link: "/umang-singhar", image: "/leaders/umg-usingharlo.jpg" },
];

const NetapratipakshList = () => {
  return (
    <section className="governors-section">
      <h2 className="section-heading">मध्यप्रदेश विधान सभा के माननीय नेता प्रतिपक्ष</h2>
      <div className="governors-grid">
        {oppositions.map((op) => (
          <a key={op.number} href={op.link} className="governor-card">
            <article className="governor-info">
              <img src={op.image} alt={op.name} className="governor-image" />
              <div className="governor-details">
                <h3 className="governor-name">{op.name}</h3>
                <p className="governor-tenure">{op.tenure}</p>
              </div>
            </article>
          </a>
        ))}
      </div>

      {/* Notes Section */}
      <div className="notes-section">
        <h3 className="notes-heading">टिप्‍पणी :-</h3>
        <p className="notes-text">
          (1) प्रथम से चतुर्थ विधान सभाओं में कोई मान्‍यता प्राप्‍त विरोधी दल नहीं था. तृतीय विधान सभा से ही विरोधी दल की मान्‍यता प्राप्‍त हुई. 
          प्रथम विधान सभा में श्री विश्‍वनाथ यादवराव तामस्‍कर एवं द्वितीय विधान सभा में श्री चन्‍द्रप्रताप तिवारी, तत्‍कालीन विरोधी दलों में 
          सबसे बड़े विरोधी दल के नेता थे.
          (2) सदन की कार्यवाहियों के अनुसार, प्रथम से चतुर्थ विधानसभा कार्यकाल तक नेता प्रतिपक्ष की मान्यता की घोषणा या बधाई उल्लेख नहीं किया गया. 
          तथापि, विरोधी दल के वरिष्ठतम सदस्य के नाते नेता प्रतिपक्ष के रूप में महत्वपूर्ण भाषण दिए जाने के प्रमाण उपलब्ध हैं. 
          तदनन्‍तर पंचम विधान सभा कार्यकाल में श्री कैलाश जोशी से निरन्‍तर नेता प्रतिपक्ष की मान्यता संबंधी घोषणाएं की गई हैं.
        </p>
      </div>
    </section>
  );
};

export default NetapratipakshList;
