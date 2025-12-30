import React from "react";


const CommitteeMeetings = () => {
  const committees = [
    { id: 1, name: "कार्य-मंत्रणा समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 2, name: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 3, name: "याचिका एवं अभ्यावेदन समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 4, name: "प्रत्‍यायुक्‍त विधान समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 5, name: "लोक लेखा समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 6, name: "प्राक्कलन समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 7, name: "सरकारी उपक्रमों संबंधी समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 8, name: "शासकीय आश्वासनों संबंधी समिति", date: "29/09/2025", day: "सोमवार", time: "11.30 पूर्वाह्न", location: "समिति कक्ष क्र. 6", subject: "मौखिक साक्ष्य: गृह, जनजातीय कार्य, खनिज साधन, औद्योगिक नीति एवं निवेश प्रोत्साहन, सूक्ष्म, लघु एवं मध्यम उद्यम विभाग" },
    { id: 9, name: "विशेषाधिकार समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 10, name: "नियम समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 11, name: "सदस्य सुविधा समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 12, name: "पुस्तकालय, अनुसंधान एवं संदर्भ समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 13, name: "सामान्य प्रयोजन समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 14, name: "अनुसूचित जाति, अनुसूचित जनजाति वर्ग के कल्याण संबंधी समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 15, name: "पटल पर रखे गये पत्रों का परीक्षण करने संबंधी समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 16, name: "प्रश्न एवं संदर्भ समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 17, name: "महिला एवं बाल कल्याण संबंधी समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 18, name: "आचरण समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 19, name: "स्थानीय निकाय एवं पंचायतीराज लेखा समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 20, name: "कृषि विकास समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 21, name: "पत्रकार दीर्घा सलाहकार समिति", date: "", day: "", time: "", location: "", subject: "" },
    { id: 22, name: "पिछड़े वर्गों के कल्याण संबंधी समिति", date: "13/10/2025", day: "सोमवार", time: "3 अपराह्न", location: "समिति कक्ष क्र. 6", subject: "" },
    { id: 23, name: "सदस्यों के शिष्टाचार एवं सम्मान अनुरक्षण समिति", date: "", day: "", time: "", location: "", subject: "" },
  ];

  return (
    <div className="table-card-wrapper">
      <h2 className="table-card-heading">समितियों की बैठक</h2>
      <div className="table-card">
        <table className="styled-table">
          <thead>
            <tr>
              <th>क्र.</th>
              <th>समिति</th>
              <th>बैठक का दिनांक</th>
              <th>दिन</th>
              <th>समय</th>
              <th>स्थान</th>
              <th>विषय / साक्ष्य</th>
            </tr>
          </thead>
          <tbody>
            {committees.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.date}</td>
                <td>{row.day}</td>
                <td>{row.time}</td>
                <td>{row.location}</td>
                <td>{row.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommitteeMeetings;
