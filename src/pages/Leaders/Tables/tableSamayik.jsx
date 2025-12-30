import React from "react";

const TemporarySpeakers = () => {
  const data = [
    {
      assembly: "प्रथम विधान सभा",
      period: "1.11.1956 से 5.3.1957",
      firstMeeting: "17.12.1956",
      temporarySpeakerDate: "श्री काशीप्रसाद पाण्डे, 29.11.1956",
      speakerDate: "श्री कुंजीलाल दुबे, 18.12.1956",
      note: "निर्विरोध",
    },
    {
      assembly: "द्वितीय विधान सभा",
      period: "1.4.1957 से 7.3.1962",
      firstMeeting: "01.07.1957",
      temporarySpeakerDate: "श्री काशीप्रसाद पाण्डे, 29.06.1957",
      speakerDate: "श्री कुंजीलाल दुबे, 2.7.1957",
      note: "निर्विरोध",
    },
    {
      assembly: "तृतीय विधान सभा",
      period: "7.3.1962 से 1.3.1967",
      firstMeeting: "26.3.1962",
      temporarySpeakerDate: "श्री काशीप्रसाद पाण्डे, 13.3.1962",
      speakerDate: "श्री कुंजीलाल दुबे, 27.3.1962",
      note: "मत विभाजन द्वारा",
    },
    {
      assembly: "चतुर्थ विधान सभा",
      period: "1.3.1967 से 17.3.1972",
      firstMeeting: "23.3.1967",
      temporarySpeakerDate: "श्री रत्नाकर झा, 11.3.1967",
      speakerDate: "श्री काशीप्रसाद पाण्डे, 24.3.1967",
      note: "मत विभाजन द्वारा",
    },
    {
      assembly: "पंचम विधान सभा",
      period: "17.3.1972 से 30.4.1977",
      firstMeeting: "24.3.1972",
      temporarySpeakerDate: "(1) श्री तेजलाल टेंभरे, 25.3.1972 (2) श्री गुलशेर अहमद, 14.8.1972",
      speakerDate: "श्री अर्जुन सिंह, 24.3.1972",
      note: "निर्विरोध",
    },
    {
      assembly: "षष्ठम् विधान सभा",
      period: "23.6.1977 से 17.2.1980",
      firstMeeting: "14.7.1977",
      temporarySpeakerDate: "श्री मुकुन्‍द सखाराम नेवालकर, 15.7.1977",
      speakerDate: "श्री रघुनाथ सिंह, 14.7.1977",
      note: "निर्विरोध",
    },
    {
      assembly: "सप्तम् विधान सभा",
      period: "7.3.1980 से 10.3.1985",
      firstMeeting: "2.7.1980",
      temporarySpeakerDate: "(1) श्री मथुरा प्रसाद दुबे, 2.7.1980 (2) श्री चित्रकांत जायसवाल, 3.3.1984",
      speakerDate: "(1) श्री यज्ञदत्‍त शर्मा, 3.7.1980 (2) श्री रामकिशोर शुक्‍ल, 5.3.1984",
      note: "निर्विरोध",
    },
    {
      assembly: "अष्ठम् विधान सभा",
      period: "10.3.1985 से 3.3.1990",
      firstMeeting: "23.3.1985",
      temporarySpeakerDate: "(1) श्री शिवभानु सोलंकी, 14.3.1985 से 22.3.1985 पूर्वा. तक (2) श्री प्‍यारेलाल कंवर, 22.3.1985",
      speakerDate: "श्री राजेन्‍द्र प्रसाद शुक्‍ल, 25.3.1985",
      note: "निर्विरोध",
    },
    {
      assembly: "नवम् विधान सभा",
      period: "5.3.1990 से 15.12.1992",
      firstMeeting: "19.3.1990",
      temporarySpeakerDate: "श्री अर्जुन सिंह, 19.3.1990",
      speakerDate: "श्री बृजमोहन मिश्र, 20.3.1990",
      note: "निर्विरोध",
    },
    {
      assembly: "दशम् विधान सभा",
      period: "7.12.1993 से 1.12.1998",
      firstMeeting: "23.12.1993",
      temporarySpeakerDate: "श्री रामकिशोर शुक्‍ल, 23.12.1993",
      speakerDate: "श्रीयुत् श्रीनिवास तिवारी, 24.12.1993",
      note: "निर्विरोध",
    },
    {
      assembly: "एकादश विधान सभा",
      period: "1.12.1998 से 5.12.2003",
      firstMeeting: "1.2.1999",
      temporarySpeakerDate: "(1) श्रीयुत् श्रीनिवास तिवारी, 1.2.1999 *(2) श्री कृष्‍णपाल सिंह, 2.2.1999",
      speakerDate: "श्रीयुत् श्रीनिवास तिवारी, 2.2.1999",
      note: "निर्विरोध",
    },
    {
      assembly: "द्वादश विधान सभा",
      period: "5.12.2003 से 11.12.2008",
      firstMeeting: "15.12.2003",
      temporarySpeakerDate: "श्रीमती जमुना देवी, 12.12.2003 से 16.12.2003",
      speakerDate: "श्री ईश्‍वरदास रोहाणी, 16.12.2003",
      note: "निर्विरोध",
    },
    {
      assembly: "त्रयोदश विधान सभा",
      period: "11.12.2008 से 10.12.2013",
      firstMeeting: "5.1.2009",
      temporarySpeakerDate: "श्रीमती जमुना देवी, 04.1.2009 से 07.01.2009",
      speakerDate: "श्री ईश्‍वरदास रोहाणी, 07.01.2009; श्री ज्ञान सिंह, 5.11.2013 से 21.12.2013",
      note: "निर्विरोध",
    },
    {
      assembly: "चतुर्दश विधान सभा",
      period: "10.12.2013 से 13.12.2018",
      firstMeeting: "08.01.2014",
      temporarySpeakerDate: "श्री के.डी देशमुख, 21.12.2013 से 9.01.2014",
      speakerDate: "डॉ. सीतासरन शर्मा, 09.01.2014",
      note: "निर्विरोध",
    },
    {
      assembly: "पंचदश विधानसभा",
      period: "13.12.2018 से",
      firstMeeting: "07.01.2019",
      temporarySpeakerDate: "श्री दीपक सक्सेना, 01.01.2019 से 08.01.2019",
      speakerDate: "श्री नर्मदा प्रसाद प्रजापति, 08.01.2019",
      note: "मत विभाजन द्वारा",
    },
    {
      assembly: "पंचदश विधानसभा",
      period: "13.12.2018 से",
      firstMeeting: "07.01.2019",
      temporarySpeakerDate: "श्री जगदीश देवड़ा, 24.03.2020 से 02.07.2020",
      speakerDate: "-",
      note: "-",
    },
    {
      assembly: "पंचदश विधानसभा",
      period: "13.12.2018 से",
      firstMeeting: "07.01.2019",
      temporarySpeakerDate: "श्री रामेश्वर शर्मा, 02.07.2020 से 22.02.2021",
      speakerDate: "श्री गिरीश गौतम, 22.02.2021",
      note: "निर्विरोध",
    },
    {
      assembly: "षोडश विधान सभा",
      period: "4.12.2023 से",
      firstMeeting: "18.12.2023",
      temporarySpeakerDate: "श्री गोपाल भार्गव, 14.12.2023 से 20.12.2023",
      speakerDate: "श्री नरेन्द्र सिंह तोमर, 20.12.2023",
      note: "निर्विरोध",
    },
  ];

return (
    <div style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", backgroundColor: "#e0f7f7", padding: "2rem 1rem", minHeight: "100vh" }}>
      {/* Heading */}
      <h2 style={{ textAlign: "center", fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", color: "#004d4d" }}>
        मान. सामयिक अध्यक्षों की सूची
      </h2>

      {/* Table wrapper */}
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        backgroundColor: "white",
        borderRadius: 12,
        padding: "1.5rem",
        boxShadow: "0 8px 14px rgba(0,0,0,0.08)",
        overflowX: "auto"
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
          <thead style={{ backgroundColor: "#bbdefb", position: "sticky", top: 0 }}>
            <tr>
              <th style={thStyle}>विधान सभा</th>
              <th style={thStyle}>अवधि</th>
              <th style={thStyle}>प्रथम बैठक</th>
              <th style={thStyle}>सामयिक अध्यक्ष/तिथि</th>
              <th style={thStyle}>अध्यक्ष/तिथि</th>
              <th style={thStyle}>टिप्पणी</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff", transition: "background-color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = "#e3f2fd"}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#f9f9f9" : "#ffffff"}>
                <td style={tdStyle}>{row.assembly}</td>
                <td style={tdStyle}>{row.period}</td>
                <td style={tdStyle}>{row.firstMeeting}</td>
                <td style={tdStyle}>{row.temporarySpeakerDate}</td>
                <td style={tdStyle}>{row.speakerDate}</td>
                <td style={tdStyle}>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Table cell styles
const thStyle = {
  textAlign: "left",
  padding: "0.6rem",
  border: "1px solid #90caf9",
  fontWeight: 700,
  color: "#0d47a1"
};

const tdStyle = {
  padding: "0.6rem",
  border: "1px solid #e3f2fd",
  color: "#333"
};

export default TemporarySpeakers;