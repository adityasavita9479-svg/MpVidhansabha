// import React from "react";

// const speakers = [
//   { number:1 , name: "	पं. कुंजीलाल दुबे", tenure: "01/11/1956 से 17/12/1956 18/12/1956 से 01/07/1957  02/07/1957 से 26/03/1962  27/03/1962 से 07/03/1967",assembly: "प्रथम (1956-1957)",link: "/pattabhi-seetharamaiah", image: "src/assets/leaders/sp-KLDubey.jpg" },
//   { number: 4, name: "श्री काशीप्रसाद पाण्‍डे", tenure: "	24/03/1967 से 24/03/1972", link: "/governors/mangubhai-patel", image: "src/assets/leaders/sp-K_P_Pandey.jpg" },
//   { number: 5, name: "श्री तेजलाल टेंभरे", tenure: "	25/03/1972 से 10/08/1972", link: "/governors/mangubhai-patel", image: "src/assets/leaders/sp-Tembhre.jpg" },
//   { number: 6, name: "श्री गुलशेर अहमद", tenure: "14/08/1972 से 14/07/1977", link: "/governors/mangubhai-patel", image: "src/assets/leaders/sp-Gulsher.jpg" },
//   { number: 7, name: "	श्री मुकुन्‍द सखाराम नेवालकर", tenure: "15/07/1977 से 02/07/1980", link: "/governors/mangubhai-patel", image: "src/assets/leaders/sp-MSNevalkar.jpg" },
//   { number: 8, name: "	श्री यज्ञदत्‍त शर्मा", tenure: "	03/07/1980 से 19/07/1983", link: "/governors/mangubhai-patel", image: "src/assets/leaders/sp-Yagya_Datta_Sharma.jpg" },
//   { number: 9, name: "	श्री रामकिशोर शुक्‍ला", tenure: "	05/03/1984 से 13/03/1985", link: "/governors/mangubhai-patel", image: "src/assets/leaders/sp-Ram_K_Shukla.jpg" },
//   { number: 10, name: "	श्री राजेन्‍द्र प्रसाद शुक्‍ल", tenure: "25/03/1985 से 19/03/1990", link: "/governors/mangubhai-patel", image: "src/assets/leaders/sp-Rajendra_Prasad_Shukla.jpg" },
//   { number: 11, name: "	श्री बृजमोहन मिश्रा", tenure: "20/03/1990 से 22/12/1993", link: "/governors/mangubhai-patel", image: "src/assets/leaders/sp-Brij_Mohan_Mishra.jpg" },
//   { number: 12, name: "	श्रीयुत श्रीनिवास तिवारी", tenure: "	24/12/1993 से 01/02/1999| 02/02/1999 से 11/12/2003", link: "/governors/mangubhai-patel", image: "src/assets/leaders/sp-sriniwastiwari.jpg" },
//   { number: 13, name: "	श्री ईश्वरदास रोहाणी", tenure: "	16/12/2003 से 04/01/2009 | 07/01/2009 से 05/11/2013", link: "/governors/mangubhai-patel", image: "src/assets/leaders/sp-Ishwerdas_Rohani (1).jpg" },
//   { number: 15, name: "	डॉ. सीतासरन शर्मा", tenure: "	09/01/2014 से 01/01/2019", link: "/governors/mangubhai-patel", image: "src/assets/leaders/sp-speaker_Vs1.jpg" },
//   { number: 16, name: "		श्री नर्मदा प्रसाद प्रजापति (एन. पी.)", tenure: "08/01/2019 से 23/03/2020", link: "/governors/mangubhai-patel", image: "src/assets/leaders/sp-npprajapati.jpg" },
//   { number: 18, name: "		श्री गिरीश गौतम	", tenure: "	22/02/2021 से 14/12/2023", link: "/governors/mangubhai-patel", image: "src/assets/leaders/sp-girishgautam.jpg" },
//   { number: 19, name: "		श्री नरेन्द्र सिंह तोमर", tenure: "	20/12/2023 से निरंतर", link: "/governors/mangubhai-patel", image: "src/assets/leaders/nstomarspkr.jpg" },
 
// ];

// const SpeakersList = () => {
//   return (
//     <section className="governors-section">
//       <h2 className="section-heading">मध्‍यप्रदेश विधान सभा के माननीय अध्‍यक्षों की सूची</h2>
//       <div className="governors-grid">
//         {speakers.map((gov) => (
//           <a key={gov.number} href={gov.link} className="governor-card">
//             <article className="governor-info">
//               <img
//                 src={gov.image}
//                 alt={gov.name}
//                 className="governor-image"
//                 style={{
//                   width: "100px",
//                   height: "100px",
//                   objectFit: "cover",
//                   borderRadius: "50%",
//                   marginBottom: "10px",
//                 }}
//               />
//               <div className="governor-details">
//                 <h3 className="governor-name">{gov.name}</h3>
//                 <p className="governor-tenure">{gov.tenure}</p>
//               </div>
//             </article>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SpeakersList;

import React from "react";

const speakers = [
  { number: 1, name: "पं. कुंजीलाल दुबे", tenure: "01/11/1956 से 17/12/1956 18/12/1956 से 01/07/1957 02/07/1957 से 26/03/1962 27/03/1962 से 07/03/1967", assembly: "प्रथम (1956-1957)", link: "/pattabhi-seetharamaiah", image: "/leaders/sp-KLDubey.jpg" },
  { number: 4, name: "श्री काशीप्रसाद पाण्‍डे", tenure: "24/03/1967 से 24/03/1972", link: "/governors/mangubhai-patel", image: "/leaders/sp-K_P_Pandey.jpg" },
  { number: 5, name: "श्री तेजलाल टेंभरे", tenure: "25/03/1972 से 10/08/1972", link: "/governors/mangubhai-patel", image: "/leaders/sp-Tembhre.jpg" },
  { number: 6, name: "श्री गुलशेर अहमद", tenure: "14/08/1972 से 14/07/1977", link: "/governors/mangubhai-patel", image: "/leaders/sp-Gulsher.jpg" },
  { number: 7, name: "श्री मुकुन्‍द सखाराम नेवालकर", tenure: "15/07/1977 से 02/07/1980", link: "/governors/mangubhai-patel", image: "/leaders/sp-MSNevalkar.jpg" },
  { number: 8, name: "श्री यज्ञदत्‍त शर्मा", tenure: "03/07/1980 से 19/07/1983", link: "/governors/mangubhai-patel", image: "/leaders/sp-Yagya_Datta_Sharma.jpg" },
  { number: 9, name: "श्री रामकिशोर शुक्‍ला", tenure: "05/03/1984 से 13/03/1985", link: "/governors/mangubhai-patel", image: "/leaders/sp-Ram_K_Shukla.jpg" },
  { number: 10, name: "श्री राजेन्‍द्र प्रसाद शुक्‍ल", tenure: "25/03/1985 से 19/03/1990", link: "/governors/mangubhai-patel", image: "/leaders/sp-Rajendra_Prasad_Shukla.jpg" },
  { number: 11, name: "श्री बृजमोहन मिश्रा", tenure: "20/03/1990 से 22/12/1993", link: "/governors/mangubhai-patel", image: "/leaders/sp-Brij_Mohan_Mishra.jpg" },
  { number: 12, name: "श्रीयुत श्रीनिवास तिवारी", tenure: "24/12/1993 से 01/02/1999| 02/02/1999 से 11/12/2003", link: "/governors/mangubhai-patel", image: "/leaders/sp-sriniwastiwari.jpg" },
  { number: 13, name: "श्री ईश्वरदास रोहाणी", tenure: "16/12/2003 से 04/01/2009 | 07/01/2009 से 05/11/2013", link: "/governors/mangubhai-patel", image: "/leaders/sp-Ishwerdas_Rohani (1).jpg" },
  { number: 15, name: "डॉ. सीतासरन शर्मा", tenure: "09/01/2014 से 01/01/2019", link: "/governors/mangubhai-patel", image: "/leaders/sp-speaker_Vs1.jpg" },
  { number: 16, name: "श्री नर्मदा प्रसाद प्रजापति (एन. पी.)", tenure: "08/01/2019 से 23/03/2020", link: "/governors/mangubhai-patel", image: "/leaders/sp-npprajapati.jpg" },
  { number: 18, name: "श्री गिरीश गौतम", tenure: "22/02/2021 से 14/12/2023", link: "/governors/mangubhai-patel", image: "/leaders/sp-girishgautam.jpg" },
  { number: 19, name: "श्री नरेन्द्र सिंह तोमर", tenure: "20/12/2023 से निरंतर", link: "/governors/mangubhai-patel", image: "/leaders/nstomarspkr.jpg" },
];

const SpeakersList = () => {
  return (
    <section className="governors-section">
      <h2 className="section-heading">मध्‍यप्रदेश विधान सभा के माननीय अध्‍यक्षों की सूची</h2>
      <div className="governors-grid">
        {speakers.map((gov) => (
          <a key={gov.number} href={gov.link} className="governor-card">
            <article className="governor-info">
              <img
                src={gov.image}
                alt={gov.name}
                className="governor-image"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom: "10px",
                }}
              />
              <div className="governor-details">
                <h3 className="governor-name">{gov.name}</h3>
                <p className="governor-tenure">{gov.tenure}</p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SpeakersList;
