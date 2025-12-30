import React from "react";

const propertyData = [
  { serial: 1, constituency: 11, member: "डॉ. गोविन्द सिंह", year: "2020-2021, 2021-2022 एवं 2022-2023", link: "/misc/Sadasyagan/SadasyaganPDF/GovindSingh_prop.pdf" },
  { serial: 2, constituency: 41, member: "श्री शैलेन्द्र जैन", year: "2019-2020", link: "/misc/Sadasyagan/SadasyaganPDF/ShailendraKumarJain_prop_mar2020.pdf" },
  { serial: 3, constituency: 53, member: "कुँवर प्रद्युम्न सिंह लोधी", year: "2020-2021", link: "/misc/Sadasyagan/SadasyaganPDF/PradyumnSLodhi_prop.pdf" },
  { serial: 4, constituency: 55, member: "श्री अजय कुमार टंडन", year: "2019-2020", link: "/misc/Sadasyagan/SadasyaganPDF/AjayKTandon_prop_mar2021.pdf" },
  { serial: 5, constituency: 72, member: "श्री गिरीश गौतम", year: "2020-2021", link: "/misc/Sadasyagan/SadasyaganPDF/GirishGautam_prop_mar2021.pdf" },
  { serial: 6, constituency: 75, member: "श्री नागेन्द्र सिंह (गुढ़)", year: "2019-2020", link: "/misc/Sadasyagan/SadasyaganPDF/NagendraSinghGurh_prop.pdf" },
  { serial: 7, constituency: 96, member: "श्री संजय यादव", year: "2019-2020 एवं 2020-2021", link: "/misc/Sadasyagan/SadasyaganPDF/SanjayYadav_prop.pdf" },
  { serial: 8, constituency: 113, member: "श्री टामलाल रघुजी सहारे", year: "2020-2021", link: "/misc/Sadasyagan/SadasyaganPDF/TamlalSahare_prop.pdf" },
  { serial: 9, constituency: 142, member: "डॉ. प्रभुराम चौधरी", year: "2019-2020", link: "/misc/Sadasyagan/SadasyaganPDF/PrabhuramChaudhary_prop_feb2021.pdf" },
  { serial: 10, constituency: 143, member: "श्री रामपाल सिंह", year: "2020-2021", link: "/misc/Sadasyagan/SadasyaganPDF/RampalSingh_prop.pdf" },
  { serial: 11, constituency: 145, member: "श्रीमती लीना संजय जैन", year: "2019-2020", link: "/misc/Sadasyagan/SadasyaganPDF/LeelaSJain_prop.pdf" },
  { serial: 12, constituency: 153, member: "श्री आरिफ मसूद", year: "2019-2020 एवं 2021-2022", link: "/misc/Sadasyagan/SadasyaganPDF/ArifMasood_prop.pdf" },
  { serial: 13, constituency: 156, member: "श्री शिवराज सिंह चौहान", year: "2019-2020", link: "/misc/Sadasyagan/SadasyaganPDF/ShivrajSinghChauhan_prop_mar2020.pdf" },
  { serial: 14, constituency: 187, member: "श्री ग्‍यारसी लाल रावत", year: "2019-2020", link: "/misc/Sadasyagan/SadasyaganPDF/GyarsilalRawat_prop_mar2020.pdf" },
  { serial: 15, constituency: 220, member: "श्री चेतन्‍य कुमार काश्‍यप", year: "2019-2020", link: "/misc/Sadasyagan/SadasyaganPDF/ChetanyaKumarKashyap_prop_mar2020.pdf" },
];

const SadasyaganPanchdashSampatiVivran = () => {
  return (
    <div className="comm-page">
      {/* HERO */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>मध्यप्रदेश विधान सभा द्वारा दिनांक 18 दिसम्बर, 2019 को पारित संकल्प के संदर्भ में</h1>
          <p>मध्यप्रदेश विधान सभा के सदस्य एवं उनके आश्रितों की संपत्ति का विवरण वर्षवार</p>
        </div>
      </div>

      {/* PROPERTY CARDS */}
      <div className="comm-section">
        <div className="comm-grid">
          {propertyData.map((item) => (
            <div
              key={item.serial}
              className="comm-card"
              onClick={() => window.open(item.link, "_blank")}
            >
              <p><strong>क्रमांक:</strong> {item.serial}</p>
              <p><strong>क्षेत्र क्रमांक:</strong> {item.constituency}</p>
              <p><strong>सदस्य:</strong> {item.member}</p>
              <p><strong>वर्ष:</strong> {item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SadasyaganPanchdashSampatiVivran;
