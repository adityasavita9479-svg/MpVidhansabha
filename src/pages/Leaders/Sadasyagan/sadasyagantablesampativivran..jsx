import React from "react";

const ministers2013 = [
  { id: 1, name: "श्री शिवराज सिंह चौहान, मुख्यमंत्री", date: "12 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(1).pdf" },
  { id: 2, name: "श्री बाबूलाल गौर, मंत्री", date: "19 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(2).pdf" },
  { id: 3, name: "श्री कैलाश विजयवर्गीय, मंत्री", date: "19 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(3).pdf" },
  { id: 4, name: "डॉ. नरोत्तम मिश्रा, मंत्री", date: "19 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(4).pdf" },
  { id: 5, name: "श्री लक्ष्मी कांत शर्मा, मंत्री", date: "19 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(5).pdf" },
  { id: 6, name: "श्री नागेन्द्र सिंह (नागौद), मंत्री", date: "18 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(6).pdf" },
  { id: 7, name: "श्री जगनाथ सिंह, मंत्री", date: "14 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(7).pdf" },
  { id: 8, name: "श्री गौरीशंकर चतुर्भज बिसेन, मंत्री", date: "19 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(8).pdf" },
  { id: 9, name: "श्री पारस जैन, मंत्री", date: "14 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(9).pdf" },
  { id: 10, name: "श्री राजेन्द्र शुक्ल, मंत्री", date: "19 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(10).pdf" },
  { id: 11, name: "श्री जयंत मलैया, मंत्री", date: "09 जुलाई, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(11).pdf" },
  { id: 12, name: "श्री जगदीश देवड़ा, मंत्री", date: "मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(12).pdf" },
  { id: 13, name: "श्री कन्हैयालाल अग्रवाल, राज्यमंत्री", date: "19 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(13).pdf" },
  { id: 14, name: "श्री हरिशंकर खटीक, राज्यमंत्री", date: "15 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(14).pdf" },
  { id: 15, name: "श्री महेन्द्र हार्डिया, राज्यमंत्री", date: "14 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(15).pdf" },
  { id: 16, name: "श्री नानाभाऊ मोहोड, राज्यमंत्री", date: "19 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(16).pdf" },
  { id: 17, name: "श्री मनोहर ऊँटवाल, राज्यमंत्री", date: "14 मार्च, 2013", link: "/misc/Sadasyagan/SadasyaganPDF/SMV2013(17).pdf" },
];

const Sadasyagan13Sampativivran = () => {
  return (
    <div className="container">
      <h2 className="title">
        फरवरी-अप्रैल, 2013 एवं जुलाई, 2013 सत्र में श्री शिवराज सिंह चौहान की मंत्रिपरिषद द्वारा विधान सभा के पटल पर रखा गया संपत्ति विवरण
      </h2>

      <table className="styled-table">
        <thead>
          <tr>
            <th>क्रमांक</th>
            <th>मंत्री</th>
            <th>दिनांक</th>
            <th>लिंक</th>
          </tr>
        </thead>
        <tbody>
          {ministers2013.map((minister, index) => (
            <tr key={minister.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{minister.id}</td>
              <td>{minister.name}</td>
              <td>{minister.date}</td>
              <td>
                {minister.link ? (
                  <a href={minister.link} target="_blank" rel="noopener noreferrer">
                    देखें
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     

      <style jsx>{`
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 2rem;
          font-family: 'Noto Sans Devanagari', sans-serif;
          background: #f8fafc;
          color: #2d3748;
          min-height: 100vh;
        }
        .title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 2rem;
          border-bottom: 3px solid #4a90e2;
          display: inline-block;
          padding-bottom: 0.5rem;
        }
        .styled-table {
          width: 100%;
          border-collapse: collapse;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
        }
        .styled-table th {
          background: #4a90e2;
          color: #fff;
          padding: 1rem;
          text-align: left;
          font-weight: 700;
          font-size: 1rem;
        }
        .styled-table td {
          padding: 0.9rem 1rem;
          border-bottom: 1px solid #e2e8f0;
          font-size: 1rem;
          text-align: left;
        }
        .styled-table tr:hover {
          background: #edf2f7;
        }
        .even-row {
          background: #f9fafb;
        }
        .previous-entries {
          margin-top: 2rem;
          font-weight: 600;
          font-size: 1rem;
          color: #1a202c;
        }
        .previous-entries p {
          margin: 0.3rem 0;
        }
      `}</style>
    </div>
  );
};

export default Sadasyagan13Sampativivran;
