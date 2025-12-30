// WomenMembers11Table.jsx
import React from "react";

const womenMembers11 = [
  { name: "श्रीमती यशोधरा राजे सिंधिया", constituency: "", seatNo: "1", party: "भाजपा", position: "", link: "/misc/11thvs/11-26.pdf", image: "/leaders/11mlawomen/yashodhararajesindhiya.png" },
  { name: "श्रीमती राधा जैन", constituency: "", seatNo: "2", party: "भाजपा", position: "", link: "/misc/11thvs/11-39.pdf", image: "/leaders/11mlawomen/sudhajain.png" },
  { name: "सुश्री कुसुम सिंह", constituency: "", seatNo: "3", party: "भाजपा", position: "", link: "/misc/11thvs/11-56.pdf", image: "/leaders/11mlawomen/kusumsingh.png" },
  { name: "एडवोकेट विष्मती / विधायिका पटेल", constituency: "", seatNo: "4", party: "बसपा", position: "", link: "/misc/11thvs/11-67.pdf", image: "/leaders/11mlawomen/vidhyawatipatel.png" },
  { name: "कुमारी शकुना प्रधान", constituency: "", seatNo: "5", party: "भारकां", position: "", link: "/misc/11thvs/11-81.pdf", image: "/leaders/11mlawomen/shakkuntalapradhan.png" },
  { name: "श्रीमती श्यामला गोसी", constituency: "", seatNo: "6", party: "निर्दलीय", position: "", link: "/misc/11thvs/11-85.pdf", image: "/leaders/11mlawomen/shabnammousi.png" },
  { name: "श्रीमती पुष्पलता लिखीराम कावरे", constituency: "", seatNo: "7", party: "भारकां", position: "", link: "/misc/11thvs/11-89.pdf", image: "/leaders/11mlawomen/pushpalatalikhiramkanware.png" },
  { name: "श्रीमती गंगाबाई उत्तरी", constituency: "", seatNo: "8", party: "भारकां", position: "", link: "/misc/11thvs/11-100.pdf", image: "/leaders/11mlawomen/gangabaiuraiti.png" },
  { name: "श्रीमती कोमलता गोसावीया", constituency: "", seatNo: "9", party: "भारकां", position: "", link: "/misc/11thvs/11-103.pdf", image: "/leaders/11mlawomen/koushalyagotiya.png" },
  { name: "श्रीमती साधना स्थपक", constituency: "", seatNo: "10", party: "भारकां", position: "", link: "/misc/11thvs/11-115.pdf", image: "/leaders/11mlawomen/sadhanastaphak.png" },
  { name: "श्रीमती उर्मिला सिंह", constituency: "", seatNo: "11", party: "भारकां", position: "", link: "/misc/11thvs/11-120.pdf", image: "/leaders/11mlawomen/urmilasingh.png" },
  { name: "श्रीमती सभिता दिवान", constituency: "", seatNo: "12", party: "भारकां", position: "", link: "/misc/11thvs/11-133.pdf", image: "/leaders/11mlawomen/savitadeewan.png" },
  { name: "श्रीमती सुशीला देवी ठाकुर", constituency: "", seatNo: "13", party: "भाजपा", position: "", link: "/misc/11thvs/11-158.pdf", image: "/leaders/11mlawomen/sushiladevithakur.png" },
  { name: "डॉ. कल्पना परलेकर", constituency: "", seatNo: "14", party: "भारकां", position: "", link: "/misc/11thvs/11-172.pdf", image: "/leaders/11mlawomen/kalpanaparulekar.png" },
  { name: "श्रीमती प्रीती भार्गव", constituency: "", seatNo: "15", party: "भारकां", position: "", link: "/misc/11thvs/11-177.pdf", image: "/leaders/11mlawomen/pretibhargav.png" },
  { name: "सुश्री मंजुश्री ठाकुर", constituency: "", seatNo: "16", party: "भारकां", position: "", link: "/misc/11thvs/11-197.pdf", image: "/leaders/11mlawomen/manjushreethakur.png" },
  { name: "डॉ. विजया लक्ष्मी साधो", constituency: "", seatNo: "17", party: "भारकां", position: "", link: "/misc/11thvs/11-200.pdf", image: "/leaders/11mlawomen/vijaylakshmisadho.png" },
  { name: "श्रीमती जमुना देवी", constituency: "", seatNo: "18", party: "भारकां", position: "", link: "/misc/11thvs/11-213.pdf", image: "/leaders/11mlawomen/jamunadevi.png" },
  { name: "श्रीमती सलोचना रावत", constituency: "", seatNo: "19", party: "भारकां", position: "", link: "/misc/11thvs/11-215.pdf", image: "/leaders/11mlawomen/sulochnarawat.png" },
  { name: "श्रीमती स्वराज बाई भगत", constituency: "", seatNo: "20", party: "भारकां", position: "", link: "/misc/11thvs/11-216.pdf", image: "/leaders/12mlawomen/profile.jpg" },
  { name: "सुश्री निर्मला भूरिया", constituency: "", seatNo: "21", party: "भाजपा", position: "", link: "/misc/11thvs/11-217.pdf", image: "/leaders/11mlawomen/nirmalabhuriya.png" },
  { name: "श्रीमती पुष्पा भारतीय", constituency: "", seatNo: "22", party: "भारकां", position: "", link: "/misc/11thvs/11-226.pdf", image: "/leaders/11mlawomen/pushpabhartiya.png" },
  { name: "श्रीमती जुनू चोघरी", constituency: "", seatNo: "23", party: "नाम निर्दिष्ट", position: "", link: "/misc/11thvs/11-231.pdf", image: "/leaders/11mlawomen/junechoudhary.png" }
];

const WomenMembers11Table = () => {
  return (
    <section className="governors-section">

      <div style={{ position: "relative", marginBottom: "20px" }}>
        <h2 className="section-heading" style={{ color: "#348fee", textAlign: "center", margin: 0 }}>
          एकादश विधानसभा (1998-2003) - महिला सदस्य
        </h2>
      </div>

      <div className="governors-grid">
        {womenMembers11.map((member) => (
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

export default WomenMembers11Table;
