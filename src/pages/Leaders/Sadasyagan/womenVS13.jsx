// WomenMembers13Table.jsx
import React from "react";

const womenMembers13 = [
  { name: "चितनिस, श्रीमती अर्चना (मंत्री)", constituency: "बुरहानपुर", seatNo: "180", party: "भारतीय जनता पार्टी", position: "मंत्री", link: "/misc/13thvs/13-180.PDF", image: "/leaders/13mlawomen/archanachitnis.png" },
  { name: "बघेल, श्रीमती रंजना (मंत्री)", constituency: "मनावर", seatNo: "199", party: "भारतीय जनता पार्टी", position: "मंत्री", link: "/misc/13thvs/13-199.PDF", image: "/leaders/13mlawomen/ranjanabaghel.png" },
  { name: "देवी, श्रीमती इमरती", constituency: "डबरा", seatNo: "19", party: "भारतीय राष्ट्रीय कांग्रेस", position: "", link: "/misc/13thvs/13-19.PDF", image: "/leaders/13mlawomen/imartidevi.png" },
  { name: "पंठी, डॉ. श्रीमती विनोद", constituency: "बीना", seatNo: "35", party: "भारतीय जनता पार्टी", position: "", link: "/misc/13thvs/13-35.PDF", image: "/leaders/13mlawomen/vinodpanthi.png" },
  { name: "यादव, श्रीमती मीरा दीपक", constituency: "निवाड़ी", seatNo: "46", party: "समाजवादी पार्टी", position: "", link: "/misc/13thvs/13-46.PDF", image: "/leaders/13mlawomen/meeradeepakyadav.png" },
  { name: "यादव, श्रीमती ललिता", constituency: "छतरपुर", seatNo: "51", party: "भारतीय जनता पार्टी", position: "", link: "/misc/13thvs/13-51.PDF", image: "/leaders/13mlawomen/lalitayadav.png" },
  { name: "यादव, श्रीमती रेखा", constituency: "मलहरा", seatNo: "53", party: "भारतीय जनता पार्टी", position: "", link: "/misc/13thvs/13-53.PDF", image: "/leaders/13mlawomen/rekhayadav.png" },
  { name: "खटीक, श्रीमती उमादेवी", constituency: "हटा", seatNo: "57", party: "भारतीय जनता पार्टी", position: "", link: "/misc/13thvs/13-57.PDF", image: "/leaders/13mlawomen/umadevikhatik.png" },
  { name: "प्रजापति, श्रीमती पन्नाबाई", constituency: "मनगवां", seatNo: "73", party: "भारतीय जनता पार्टी", position: "", link: "/misc/13thvs/13-73.PDF", image: "/leaders/13mlawomen/pannabaiprajapati.png" },
  { name: "माणके, कुमारी मीना सिंह", constituency: "मानपुर", seatNo: "90", party: "भारतीय जनता पार्टी", position: "", link: "/misc/13thvs/13-90.PDF", image: "/leaders/13mlawomen/menasinghmadwe.png" },
  { name: "सिंह, श्रीमती प्रतिभा", constituency: "बरगी", seatNo: "96", party: "भारतीय जनता पार्टी", position: "", link: "/misc/13thvs/13-96.PDF", image: "/leaders/13mlawomen/prathibhasingh.png" },
  { name: "सरवी, श्रीमती चंदनी", constituency: "सिहोरा", seatNo: "102", party: "भारतीय जनता पार्टी", position: "", link: "/misc/13thvs/13-102.PDF", image: "/leaders/13mlawomen/nandnimarwi.png" },
  { name: "उरेटी, श्रीमती गंगाबाई", constituency: "शाहपुरा", seatNo: "103", party: "भारतीय राष्ट्रीय कांग्रेस", position: "", link: "/misc/13thvs/13-103.PDF", image: "/leaders/13mlawomen/gangabaiureeti.png" },
  { name: "पेटेरिया, श्रीमती नीता", constituency: "सिवनी", seatNo: "115", party: "भारतीय जनता पार्टी", position: "", link: "/misc/13thvs/13-115.PDF", image: "/leaders/13mlawomen/netapateria.png" },
  { name: "ठाकुर, श्रीमती शशि", constituency: "लखनादौन", seatNo: "117", party: "भारतीय जनता पार्टी", position: "", link: "/misc/13thvs/13-117.PDF", image: "/leaders/13mlawomen/sashithakur.png" },
  { name: "स्थापक, श्रीमती साधना", constituency: "गाडरवारा", seatNo: "121", party: "भारतीय राष्ट्रीय कांग्रेस", position: "", link: "/misc/13thvs/13-121.PDF", image: "/leaders/13mlawomen/sadhnastaphak.png" },
  { name: "उडके, श्रीमती गीता रामजीलाल", constituency: "घोड़ाडोंगरी", seatNo: "132", party: "भारतीय जनता पार्टी", position: "", link: "/misc/13thvs/13-132.PDF", image: "/leaders/13mlawomen/getaramjilaluike.png" },
  { name: "रावत, श्रीमती सुलोचना", constituency: "जोबट", seatNo: "192", party: "भारतीय राष्ट्रीय कांग्रेस", position: "", link: "/misc/13thvs/13-192.PDF", image: "/leaders/13mlawomen/sulochnarawat.png" },
  { name: "गौड़, श्रीमती मालिनी लक्ष्मण सिंह", constituency: "इन्दौर-4", seatNo: "207", party: "भारतीय जनता पार्टी", position: "", link: "/misc/13thvs/13-207.PDF", image: "/leaders/13mlawomen/malinilakshmansinghgour.png" },
  { name: "परलेकर, डॉ. कल्पना", constituency: "महिदपुर", seatNo: "213", party: "भारतीय राष्ट्रीय कांग्रेस", position: "", link: "/misc/13thvs/13-213.PDF", image: "/leaders/13mlawomen/kalpanaparulekar.png" },
  { name: "खराड़ी, श्रीमती लक्ष्मीदेवी", constituency: "रतलाम ग्रामीण", seatNo: "219", party: "भारतीय राष्ट्रीय कांग्रेस", position: "", link: "/misc/13thvs/13-219.PDF", image: "/leaders/13mlawomen/lakshmikharadi.png" },
  { name: "लोबो, श्रीमती लॉरेन बी.", constituency: "नाम निर्दिष्ट", seatNo: "231", party: "नाम निर्दिष्ट", position: "", link: "/misc/13thvs/13-231.PDF", image: "/leaders/13mlawomen/lorenblobo.png" }
];

const WomenMembers13Table = () => {
  return (
    <section className="governors-section">

      <div style={{ position: "relative", marginBottom: "20px" }}>
        <h2 className="section-heading" style={{ color: "#348fee", textAlign: "center", margin: 0 }}>
          त्रयोदश (13वीं) विधानसभा में निर्वाचित महिला सदस्य
        </h2>
      </div>

      <div className="governors-grid">
        {womenMembers13.map((member) => (
          <a key={member.seatNo + member.name} href={member.link} className="governor-card">
            <article className="governor-info">
              <img
                src={member.image}
                alt={member.name}
                className="governor-image"
              />
              <div className="governor-details">
                <h3 className="governor-name">{member.name}</h3>

                {member.position && (
                  <p className="governor-tenure">{member.position}</p>
                )}

                <p className="governor-tenure">निर्वाचन क्षेत्र: {member.constituency}</p>
                <p className="governor-tenure">सीट क्रमांक: {member.seatNo}</p>
                <p className="governor-tenure">पार्टी: {member.party}</p>
              </div>
            </article>
          </a>
        ))}
      </div>

    </section>
  );
};

export default WomenMembers13Table;
