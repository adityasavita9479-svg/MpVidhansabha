import React from "react";

const chiefMinisters = [
  { number: 1, name: "पं. रविशंकर शुक्‍ल", tenure: "01/11/1956 से 31/12/1956", assembly: "प्रथम (1956-1957)", image: "/leaders/cm-ravishankar.jpg", link: "/cms/ravishankar-shukla" },
  { number: 2, name: "श्री भगवंतराव मण्‍डलोई", tenure: "09/01/1957 से 30/01/1957\n12/03/1962 से 29/09/1963", assembly: "प्रथम (1956-1957), तृतीय (1962-1967)", image: "/leaders/cm-bhagawantmand.jpg", link: "/cms/bhagwantrao-mandloi" },
  { number: 3, name: "श्री कैलाशनाथ काटजू", tenure: "31/01/1957 से 14/04/1957\n15/04/1957 से 11/03/1962", assembly: "प्रथम, द्वितीय", image: "/leaders/cm-kailashnath.jpg", link: "/cms/kailashnath-katju" },
  { number: 4, name: "पं. द्वारिका प्रसाद मिश्र", tenure: "30/09/1963 से 29/07/1967", assembly: "तृतीय, चतुर्थ", image: "/leaders/cm-dwarkaprasad.jpg", link: "/cms/dwarka-prasad-mishra" },
  { number: 5, name: "श्रीमती विजयाराजे सिंधिया", tenure: "30/07/1967 से 25/03/1969", assembly: "चतुर्थ", image: "/leaders/cm-VijayaRajeScindia.jpg", link: "/cms/vijayaraje-scindia" },
  { number: 6, name: "श्री गोविन्‍द नारायण सिंह", tenure: "30/07/1967 से 12/03/1969", assembly: "चतुर्थ", image: "/leaders/cm-govindnarayan.jpg", link: "/cms/govind-narayan-singh" },
  { number: 7, name: "श्री राजा नरेशचंद्र सिंह", tenure: "13/03/1969 से 25/03/1969", assembly: "चतुर्थ", image: "/leaders/cm-nareshchandra.jpg", link: "/cms/nareshchandra-singh" },
  { number: 8, name: "श्री श्‍यामाचरण शुक्‍ल", tenure: "26/03/1969 से 28/01/1972, 23/12/1975 से 30/04/1977", assembly: "चतुर्थ (1967-1972), पंचम् (1972-1977)", image: "/leaders/cm-SC_shukla.jpg", link: "/cms/nareshchandra-singh" },
  { number: 9, name: "श्री प्रकाश चन्‍द्र सेठी", tenure: "29/01/1972 से 22/03/1972, 23/03/1972 से 23/12/1975", assembly: "चतुर्थ (1967-1972), पंचम् (1972-1977)", image: "/leaders/cm-prakashchandsethi.jpg", link: "/cms/nareshchandra-singh" },
  { number: 10, name: "श्री कैलाश जोशी", tenure: "24/06/1977 से 17/01/1978", assembly: "षष्‍टम् (1977-1980)", image: "/leaders/cm-kailashjoshi.jpg", link: "/cms/nareshchandra-singh" },
  { number: 11, name: "श्री वीरेन्‍द्र कुमार सखलेचा", tenure: "18/01/1978 से 19/01/1980", assembly: "षष्‍टम् (1977-1980)", image: "/leaders/cm-veerendrasakhlech.jpg", link: "/cms/nareshchandra-singh" },
  { number: 12, name: "श्री सुंदरलाल पटवा", tenure: "20/01/1980 से 17/02/1980", assembly: "षष्‍टम् (1977-1980)", image: "/leaders/cm-sunderlalpatwa.jpg", link: "/cms/nareshchandra-singh" },
  { number: 13, name: "श्री अर्जुन सिंह", tenure: "09/06/1980 से 10/03/1985, 11/03/1985 से 12/03/1985, 14/02/1988 से 23/01/1989", assembly: "सप्‍तम् (1980-1985), अष्‍टम् (1985-1990)", image: "/leaders/cm-arjunsingh.jpg", link: "/cms/nareshchandra-singh" },
  { number: 14, name: "श्री मोतीलाल वोरा", tenure: "13/03/1985 से 13/02/1988, 25/01/1989 से 09/12/1989", assembly: "अष्‍टम् (1985-1990)", image: "/leaders/cm-motilalvora.jpg", link: "/cms/nareshchandra-singh" },
  { number: 15, name: "श्री श्‍यामाचरण शुक्‍ल", tenure: "09/12/1989 से 01/03/1990", assembly: "अष्‍टम् (1985-1990)", image: "/leaders/cm-SC_shukla.jpg", link: "/cms/nareshchandra-singh" },
  { number: 16, name: "श्री सुंदरलाल पटवा", tenure: "05/03/1990 से 15/12/1992", assembly: "नवम् (1990-1992)", image: "/leaders/cm-sunderlalpatwa.jpg", link: "/cms/nareshchandra-singh" },
  { number: 17, name: "श्री दिग्विजय सिंह", tenure: "07/12/1993 से 01/12/1998, 01/12/1998 से 07/12/2003", assembly: "दशम् (1993-1998), एकादश (1998-2003)", image: "/leaders/cm-digvijaysingh.jpg", link: "/cms/nareshchandra-singh" },
  { number: 18, name: "सुश्री उमा भारती", tenure: "08/12/2003 से 23/08/2004", assembly: "द्वादश (2003-2008)", image: "/leaders/cm-umabharti.jpg", link: "/cms/nareshchandra-singh" },
  { number: 19, name: "श्री बाबूलाल गौर", tenure: "23/08/2004 से 29/11/2005", assembly: "द्वादश (2003-2008)", image: "/leaders/cm-SC_shukla.jpg", link: "/cms/nareshchandra-singh" },
  { number: 20, name: "श्री शिवराज सिंह चौहान", tenure: "29/11/2005 से 11/12/2008, 12/12/2008 से 09/12/2013, 14/12/2013 से 12/12/2018, 23/03/2020 से 11/12/2023", assembly: "द्वादश, त्रयोदश, चतुर्दश, पंचदश", image: "/leaders/cm-shivrajsingh.jpg", link: "/cms/nareshchandra-singh" },
  { number: 21, name: "श्री कमलनाथ", tenure: "17/12/2018 से 20/03/2020", assembly: "पंचदश (2018 - 2023)", image: "/leaders/cm-kamalnath2_1.jpg", link: "/cms/nareshchandra-singh" },
  { number: 22, name: "डॉ. मोहन यादव", tenure: "13/12/2023 से निरंतर", assembly: "षोडश (2023 - )", image: "/leaders/mlyadavcm.jpg", link: "/cms/nareshchandra-singh" },
];

const ChiefMinistersList = () => {
  return (
    <section className="governors-section">
      <h2 className="section-heading">
        मध्‍यप्रदेश के माननीय मुख्‍यमंत्रियों / सदन का नेता की सूची
      </h2>
      <div className="governors-grid">
        {chiefMinisters.map((cm) => (
          <a key={cm.number} href={cm.link} className="governor-card">
            <article className="governor-info">
              <img
                src={cm.image}
                alt={cm.name}
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
                <h3 className="governor-name">{cm.name}</h3>
                <p className="governor-tenure">{cm.tenure}</p>
                <p className="governor-tenure">{cm.assembly}</p>
              </div>
            </article>
          </a>
        ))}
      </div>
      <p style={{ marginTop: "20px", fontStyle: "italic", color: "#555" }}>
        *साधारणत: मुख्‍यमंत्री ही सदन का नेता होता है। लेकिन चतुर्थ विधान सभा में श्री गोविन्‍द नारायण सिंह के कार्यकाल में श्रीमती विजयाराजे सिंधिया, सदन की नेता रहीं।
      </p>
    </section>
  );
};

export default ChiefMinistersList;
