// WomenMembers12Table.jsx
import React from "react";

/*
  Data sourced from the uploaded PDF (page 1). :contentReference[oaicite:1]{index=1}
  Place images under: public/leaders/12mlawomen/<file>.png
  Place PDFs under:    public/misc/12thvs/12_<seatNo>.pdf
*/

const womenMembers12 = [
  { name: "जमना देवी, श्रीमती (नेता प्रतिपक्ष, म.प्र. विधान सभा)", constituency: "", seatNo: "1", party: "भारतीय राष्ट्रीय कांग्रेस", position: "", link: "/misc/12thvs/12-213.PDF", image: "/leaders/12mlawomen/jamunadevi.png" },
  { name: "महदेले, कुमारी कुसुम सिंह (मंत्री)", constituency: "", seatNo: "2", party: "भारतीय जनता पार्टी", position: "मंत्री", link: "/misc/12thvs/12-56.PDF", image: "/leaders/12mlawomen/kusumsinghmehdele.png" },
  { name: "माण्डवे, कुमारी मीना सिंह (राज्य मंत्री)", constituency: "", seatNo: "3", party: "भारतीय जनता पार्टी", position: "राज्य मंत्री", link: "/misc/12thvs/12-81.PDF", image: "/leaders/12mlawomen/meenasinghmadwe.png" },
  { name: "बघेल, श्रीमती रंजना (राज्य मंत्री)", constituency: "", seatNo: "4", party: "भारतीय जनता पार्टी", position: "राज्य मंत्री", link: "/misc/12thvs/12-208.PDF", image: "/leaders/12mlawomen/rajanabaghel.png" },
  { name: "भूरिया, कुमारी निर्मला (राज्य मंत्री)", constituency: "", seatNo: "5", party: "भारतीय जनता पार्टी", position: "राज्य मंत्री", link: "/misc/12thvs/12-217.PDF", image: "/leaders/12mlawomen/nirmalabhuria.png" },
  { name: "राय, श्रीमती संध्या", constituency: "", seatNo: "6", party: "भारतीय जनता पार्टी", position: "", link: "/misc/12thvs/12-7.PDF", image: "/leaders/12mlawomen/nirmalabhuria.png" },
  { name: "सिरोमिया, श्रीमती सुशीला राकेश", constituency: "", seatNo: "7", party: "भारतीय जनता पार्टी", position: "", link: "/misc/12thvs/12-35.PDF", image: "/leaders/12mlawomen/sushilarakeshsirothiya.png" },
  { name: "जैन, श्रीमती सुधा", constituency: "", seatNo: "8", party: "भारतीय जनता पार्टी", position: "", link: "/misc/12thvs/12-39.PDF", image: "/leaders/12mlawomen/sudhajain.png" },
  { name: "अहिरवार, श्रीमती सोना बाई", constituency: "", seatNo: "9", party: "भारतीय जनता पार्टी", position: "", link: "/misc/12thvs/12-54.PDF", image: "/leaders/12mlawomen/sonabaiahirwar.png" },
  { name: "कावरे, श्रीमती पुष्पलता लिखीराम", constituency: "", seatNo: "10", party: "भारतीय राष्ट्रीय कांग्रेस", position: "", link: "/misc/12thvs/12-89.PDF", image: "/leaders/12mlawomen/pushpalatalikhiramkawre.png" },
  { name: "जैन, श्रीमती अलका", constituency: "", seatNo: "11", party: "भारतीय जनता पार्टी", position: "", link: "/misc/12thvs/12-112.PDF", image: "/leaders/12mlawomen/alkajain.png" },
  { name: "नायक, श्रीमती सरोज बच्छन", constituency: "", seatNo: "12", party: "जनता दल (यूनाइटेड)", position: "", link: "/misc/12thvs/12-113.PDF", image: "/leaders/12mlawomen/sarojbachannayak.png" },
  { name: "ठाकर, श्रीमती शशि", constituency: "", seatNo: "13", party: "भारतीय जनता पार्टी", position: "", link: "/misc/12thvs/12-119.PDF", image: "/leaders/12mlawomen/sashithakur.png" },
  { name: "बेलन, श्रीमती सुनीता", constituency: "", seatNo: "14", party: "भारतीय राष्ट्रीय कांग्रेस", position: "", link: "/misc/12thvs/12-143.PDF", image: "/leaders/12mlawomen/sunitabele.png" },
  { name: "सिंह, श्रीमती शशिप्रभा रामपाल", constituency: "", seatNo: "15", party: "भारतीय जनता पार्टी", position: "", image: "/leaders/12mlawomen/profile.jpg" },
  { name: "रत्नाकर, श्रीमती रेखा", constituency: "", seatNo: "16", party: "भारतीय जनता पार्टी", position: "", link: "/misc/12thvs/12-169.PDF", image: "/leaders/12mlawomen/rekharatnakar.png" },
  { name: "ठाकुर, सुश्री उषा", constituency: "", seatNo: "17", party: "भारतीय जनता पार्टी", position: "", link: "/misc/12thvs/12-180.PDF", image: "/leaders/12mlawomen/ushathakur.png" },
  { name: "चितनीस, श्रीमती अर्चना", constituency: "", seatNo: "18", party: "भारतीय जनता पार्टी", position: "", link: "/misc/12thvs/12-195.PDF", image: "/leaders/12mlawomen/archanachitnis.png" },
  { name: "लोबो, श्रीमती लॉरेन बी.", constituency: "", seatNo: "19", party: "नामनिर्दिष्ट", position: "", link: "/misc/12thvs/12-231.PDF", image: "/leaders/12mlawomen/lorenblobo.png" }
];

const WomenMembers12Table = () => {
  return (
    <section className="governors-section">
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <h2 className="section-heading" style={{ color: "#348fee", textAlign: "center", margin: 0 }}>
          द्वादश विधानसभा (2003-2008) - महिला सदस्य
        </h2>
      </div>

      <div className="governors-grid">
        {womenMembers12.map((member) => (
          <a key={member.seatNo + member.name} href={member.link} className="governor-card" target="_blank" rel="noopener noreferrer">
            <article className="governor-info">
              <img
                src={member.image}
                alt={member.name}
                className="governor-image"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/leaders/placeholder.png"; }}
              />
              <div className="governor-details">
                <h3 className="governor-name">{member.name}</h3>

                {member.position && <p className="governor-tenure">{member.position}</p>}

                <p className="governor-tenure">निर्वाचन क्षेत्र: {member.constituency || "—"}</p>
                <p className="governor-tenure">सीट क्रमांक: {member.seatNo}</p>
                <p className="governor-tenure">पार्टी: {member.party || "—"}</p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WomenMembers12Table;
