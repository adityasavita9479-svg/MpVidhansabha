import React from "react";

// Data for Deputy Speakers
const deputySpeakers = [
  { number: 1, name: "श्री विष्णु विनायक सरवटे", tenure: "24/12/1956 से 05/03/1957", assembly: "प्रथम (1956-1957)", image: "/leaders/up-V_V_Sarvate.jpg", link: "/sarwate" },
  { number: 2, name: "श्री अनंत सदाशिव पटवर्धन", tenure: "03/12/1957 से 07/03/1962", assembly: "द्वितीय (1957-1962)", image: "/leaders/annantsadahivpatvardhan.jpg", link: "/patwardhan" },
  { number: 3, name: "श्री नरबदा प्रसाद श्रीवास्तव", tenure: "04/07/1962 से 28/02/1967", assembly: "तृतीय (1962-1967)", image: "/leaders/up-NB_shrivastava.jpg", link: "/narbada" },
  { number: 4, name: "श्री नरबदा प्रसाद श्रीवास्तव", tenure: "05/04/1967 से", assembly: "चतुर्थ (1967-1972)", image: "/leaders/up-NB_shrivastava.jpg", link: "/narbada1" },
  { number: 5, name: "श्री रामकिशोर शुक्ल", tenure: "26/03/1968 से 16/03/1972", assembly: "चतुर्थ (1967-1972)", image: "/leaders/up-Ram_K_Shukla (1).jpg", link: "/ramkishore" },
  { number: 6, name: "श्री नारायण प्रसाद शुक्ल", tenure: "28/07/1972 से 07/01/1976", assembly: "पंचम् (1972-1977)", image: "/leaders/up-NP_shukla.jpg", link: "/nayrayan" },
  { number: 7, name: "श्री सवाईमल जैन", tenure: "10/03/1976 से 30/04/1977", assembly: "पंचम् (1972-1977)", image: "/leaders/up-SAWAIM.jpg", link: "/sawaimal" },
  { number: 8, name: "श्री रामचन्द्र महेश्वरी", tenure: "01/09/1978 से 17/02/1980", assembly: "षष्ठम् (1977-1980)", image: "/leaders/up-Ram_Chandra_Maheshwari.jpg", link: "/maheshwari" },
  { number: 9, name: "श्री रामकिशोर शुक्ल", tenure: "16/09/1980 से 03/03/1984", assembly: "सप्तम् (1980-1985)", image: "/leaders/up-Ram_K_Shukla (1).jpg", link: "/ramkishore1" },
  { number: 10, name: "श्री प्यारे लाल कंवर", tenure: "06/04/1984 से 10/03/1985", assembly: "सप्तम् (1980-1985)", image: "/leaders/up-Pyarelal_Kanwar.jpg", link: "/pyarelalkanwar" },
  { number: 11, name: "श्री कन्हैयालाल यादव", tenure: "12/03/1986 से 03/03/1990", assembly: "अष्टम् (1985-1990)", image: "/leaders/up-Kanhiyalal_Yadav.jpg", link: "/kanhaiyalal" },
  { number: 12, name: "श्रीयुत श्रीनिवास तिवारी", tenure: "23/03/1990 से 15/12/1992", assembly: "नवम् (1990-1992)", image: "/leaders/sp-sriniwastiwari.jpg", link: "/shriniwas" },
  { number: 13, name: "श्री भेरूलाल पाटीदार", tenure: "28/12/1993 से 01/12/1998", assembly: "दशम् (1993-1998)", image: "/leaders/up-BL_patidar.jpg", link: "/bhurelalpatidar" },
  { number: 14, name: "श्री ईश्वरदास रोहाणी", tenure: "11/02/1999 से 05/12/2003", assembly: "एकादश (1998-2003)", image: "/leaders/sp-Ishwerdas_Rohani (1).jpg", link: "/rohanidas" },
  { number: 15, name: "श्री हजारीलाल रघुवंशी", tenure: "18/12/2003 से 11/12/2008", assembly: "द्वादश (2003-2008)", image: "/leaders/ul-HL_raghuvanshi.jpg", link: "/hajarilalraghuwanshi" },
  { number: 16, name: "श्री हरवंश सिंह", tenure: "13/01/2009 से 14/05/2013", assembly: "त्रयोदश (2008-2013)", image: "/leaders/up-harvanshsingh.jpg", link: "/harwanshsingh" },
  { number: 17, name: "डॉ. राजेन्द्र कुमार सिंह", tenure: "10/01/2014 से 13/12/2018", assembly: "चतुदर्श (2013-2018)", image: "/leaders/up-present_dsp.jpg", link: "/rjkumarsingh" },
  { number: 18, name: "सुश्री हिना लिखीराम कावरे", tenure: "10/01/2019 से 24/03/2020", assembly: "पंचदश (2018-2023)", image: "/leaders/up-hinalkawre.jpg", link: "/hinalikhiramkanware" }
];

const DeputySpeakersList = () => {
  return (
    <section className="governors-section">
      <h2 className="section-heading">मध्‍यप्रदेश विधान सभा के माननीय उपाध्यक्षों की सूची</h2>
      <div className="governors-grid">
        {deputySpeakers.map((person) => (
          <a key={person.number} href={person.link} className="governor-card">
            <article className="governor-info">
              <img
                src={person.image}
                alt={person.name}
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
                <h3 className="governor-name">{person.name}</h3>
                <p className="governor-tenure">{person.tenure}</p>
                <p className="governor-assembly">{person.assembly}</p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
};

export default DeputySpeakersList;
