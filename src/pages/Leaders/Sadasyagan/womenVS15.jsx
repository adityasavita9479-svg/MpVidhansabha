import React from "react";

const womenMembers15 = [
  { name: "सरौनियां, श्रीमती रक्षा संतराम", constituency: "भाण्डेर", seatNo: "21", party: "भारतीय जनता पार्टी", position: "" , image: "/leaders/15mlawomen/rakshasantram.png", link: "/misc/15thvs/2019_21.pdf" },
  { name: "सिंधिया, श्रीमती यशोधरा राजे, मंत्री", constituency: "शिवपुरी", seatNo: "25", party: "भारतीय जनता पार्टी", position: "मंत्री", image: "/leaders/15mlawomen/yashodhararaje.png", link: "/misc/15thvs/2019_25.pdf" },
  { name: "सिंह, श्रीमती रामबाई गोविंद", constituency: "पथरिया", seatNo: "54", party: "बहुजन समाज पार्टी", position: "", image: "/leaders/15mlawomen/rambaigovind.png", link: "/misc/15thvs/2019_54.pdf" },
  { name: "वर्मा, श्रीमती कल्पना", constituency: "रैगांव", seatNo: "62", party: "इंडियन नेशनल कांग्रेस", position: "", image: "/leaders/15mlawomen/kalpanaverma.png", link: "/misc/15thvs/2019_62.pdf" },
  { name: "सिंह, श्रीमती मनीषा", constituency: "जैतपुर", seatNo: "85", party: "भारतीय जनता पार्टी", position: "", image: "/leaders/15mlawomen/manishasingh.png", link: "/misc/15thvs/2019_85.pdf" },
  { name: "मांडवे, कुमारी मीना सिंह, मंत्री", constituency: "मानपुर", seatNo: "90", party: "भारतीय जनता पार्टी", position: "मंत्री", image: "/leaders/15mlawomen/meenasinghmarwe.png", link: "/misc/15thvs/2019_90.pdf" },
  { name: "मरावी, श्रीमती नंदनी", constituency: "सिहोरा", seatNo: "102", party: "भारतीय जनता पार्टी", position: "", image: "/leaders/15mlawomen/nandnimarwi.png", link: "/misc/15thvs/2019_102.pdf" },
  { name: "कावरे, सुश्री हिना लिखीराम", constituency: "लांजी", seatNo: "109", party: "इंडियन नेशनल कांग्रेस", position: "", image: "/leaders/15mlawomen/hinalikhiramkanware.png", link: "/misc/15thvs/2019_109.pdf" },
  { name: "पटेल, श्रीमती सुनीता", constituency: "गाडरवारा", seatNo: "121", party: "इंडियन नेशनल कांग्रेस", position: "", image: "/leaders/15mlawomen/sunitapatel.png", link: "/misc/15thvs/2019_121.pdf" },
  { name: "जैन, श्रीमती लीना संजय", constituency: "बासौदा", seatNo: "145", party: "भारतीय जनता पार्टी", position: "", image: "/leaders/15mlawomen/leelasanjayjain.png", link: "/misc/15thvs/2019_145.pdf" },

  { name: "सिंह, श्रीमती राजश्री रूद्र प्रताप", constituency: "शमशाबाद", seatNo: "148", party: "भारतीय जनता पार्टी", position: "", image: "/leaders/15mlawomen/rajshreerudrapratapsingh.png", link: "/misc/15thvs/2019_148.pdf" },
  { name: "गौर, श्रीमती कृष्णा", constituency: "गोविन्दपुरा", seatNo: "154", party: "भारतीय जनता पार्टी", position: "", image: "/leaders/15mlawomen/krishnagour.png", link: "/misc/15thvs/2019_154.pdf" },
  { name: "पवार, श्रीमती गायत्री राजे", constituency: "देवास", seatNo: "171", party: "भारतीय जनता पार्टी", position: "", image: "/leaders/15mlawomen/gaytriraje.png", link: "/misc/15thvs/2019_171.pdf" },
  { name: "कास्‍डेकर, श्रीमती सुमित्रा देवी", constituency: "नेपानगर", seatNo: "179", party: "भारतीय जनता पार्टी", position: "", image: "/leaders/15mlawomen/sumitradevi.png", link: "/misc/15thvs/2019_179.pdf" },
  { name: "सोलंकी, श्रीमती झूमा डॉ. ध्यानसिंह", constituency: "भीकनगांव", seatNo: "181", party: "इंडियन नेशनल कांग्रेस", position: "", image: "/leaders/15mlawomen/jhumadhyansinghsolanki.png", link: "/misc/15thvs/2019_181.pdf" },
  { name: "साधौ, डॉ. विजयलक्ष्मी", constituency: "महेश्वर", seatNo: "183", party: "इंडियन नेशनल कांग्रेस", position: "", image: "/leaders/15mlawomen/vijaylakshmisadho.png", link: "/misc/15thvs/2019_183.pdf" },
  { name: "किराड़े, सुश्री चंद्रभागा", constituency: "पानसेमल", seatNo: "189", party: "इंडियन नेशनल कांग्रेस", position: "", image: "/leaders/15mlawomen/chandrabhagakirade.png", link: "/misc/15thvs/2019_189.pdf" },
  { name: "रावत, श्रीमती सुलोचना", constituency: "जौबट", seatNo: "192", party: "भारतीय जनता पार्टी", position: "", image: "/leaders/15mlawomen/sulochnarawat.png", link: "/misc/15thvs/2019_192.pdf" },
  { name: "वर्मा, श्रीमती नीना विक्रम", constituency: "धार", seatNo: "201", party: "भारतीय जनता पार्टी", position: "", image: "/leaders/15mlawomen/neenavikramverma.png", link: "/misc/15thvs/2019_201.pdf" },
  { name: "गौड़, श्रीमती मालिनी लक्ष्मण सिंह", constituency: "इन्दौर-4", seatNo: "207", party: "भारतीय जनता पार्टी", position: "", image: "/leaders/15mlawomen/malinilakshmansinghgour.png", link: "/misc/15thvs/2019_207.pdf" },
  { name: "ठाकुर, सुश्री उषा, मंत्री", constituency: "डॉ. अम्बेडकरनगर-महू", seatNo: "209", party: "भारतीय जनता पार्टी", position: "मंत्री", image: "/leaders/15mlawomen/umathakur.png", link: "/misc/15thvs/2019_209.pdf" }
];

const WomenMembers15Table = () => {
  return (
    <section className="governors-section">
      {/* Wrapper for center heading + right button */}
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <h2
          className="section-heading"
          style={{
            color: "#348fee",
            textAlign: "center",
            margin: 0,
          }}
        >
          पंचदश (15वीं) विधानसभा में निर्वाचित महिला सदस्य
        </h2>
      </div>

      <div className="governors-grid">
        {womenMembers15.map((member) => (
          <a key={member.seatNo} href={member.link} className="governor-card">
            <article className="governor-info">
              <img
                src={member.image}
                alt={member.name}
                className="governor-image"
              />
              <div className="governor-details">
                <h3 className="governor-name">
                  {member.name}
                </h3>

                {member.position && (
                  <p className="governor-tenure">{member.position}</p>
                )}

                <p className="governor-tenure">
                  निर्वाचन क्षेत्र: {member.constituency}
                </p>

                <p className="governor-tenure">
                  सीट क्रमांक: {member.seatNo}
                </p>

                <p className="governor-tenure">
                  पार्टी: {member.party}
                </p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WomenMembers15Table;
