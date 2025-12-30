import React from "react";

const ministers2011 = [
  { id: 1, name: "श्री शिवराज सिंह चौहान, मुख्यमंत्री", date: "25 फरवरी, 2011", link: "/misc/upload_smptviv/ssc11.pdf" },
  { id: 2, name: "श्री जगदीश देवड़ा, मंत्री", date: "29 मार्च, 2011", link: "/misc/upload_smptviv/jd11.pdf" },
  { id: 3, name: "श्री अजय विश्नोई, मंत्री", date: "01 अप्रैल, 2011", link: "/misc/upload_smptviv/av11.pdf" },
  { id: 4, name: "श्रीमती अर्चना चिटनीस, मंत्री", date: "01 अप्रैल, 2011", link: "/misc/upload_smptviv/ac11.pdf" },
  { id: 5, name: "श्री गौरीशंकर चतुर्भुज बिसेन, मंत्री", date: "29 मार्च, 2011", link: "/misc/upload_smptviv/gsb11.pdf" },
  { id: 6, name: "श्री उमाशंकर गुप्ता, मंत्री", date: "16 मार्च, 2011", link: "/misc/upload_smptviv/usg11.pdf" },
  { id: 7, name: "डॉ. रामकृष्ण कुसमरिया, मंत्री", date: "02 दिसम्बर, 2011", link: "/misc/upload_smptviv/rkk11.pdf" },
  { id: 8, name: "श्री पारस चन्द्र जैन, राज्यमंत्री", date: "31 मार्च, 2011", link: "/misc/upload_smptviv/pcj11.pdf" },
  { id: 9, name: "श्री नारायण सिंह कुशवाह, राज्यमंत्री", date: "31 मार्च, 2011", link: "/misc/upload_smptviv/nsk11.pdf" },
  { id: 10, name: "श्री कन्हैयालाल अग्रवाल, राज्यमंत्री", date: "30 मार्च, 2011", link: "/misc/upload_smptviv/kla11.pdf" },
  { id: 11, name: "श्री हरिशंकर खटीक, राज्यमंत्री", date: "31 मार्च, 2011", link: "/misc/upload_smptviv/hsk11.pdf" },
  { id: 12, name: "श्री देव सिंह सैयाम, राज्यमंत्री", date: "01 अप्रैल, 2011", link: "/misc/upload_smptviv/dss11.pdf" },
  { id: 13, name: "श्री बृजेन्द्र प्रताप सिंह, राज्यमंत्री", date: "01 अप्रैल, 2011", link: "/misc/upload_smptviv/bps11.pdf" },
  { id: 14, name: "श्री जय सिंह मरावी, राज्यमंत्री", date: "01 अप्रैल, 2011", link: "/misc/upload_smptviv/jsm11.pdf" },
  { id: 15, name: "श्री नाना भाऊ मोहोड़, राज्यमंत्री", date: "31 मार्च, 2011", link: "/misc/upload_smptviv/nbm11.pdf" },
  { id: 16, name: "श्री मनोहर ऊंटवाल, राज्यमंत्री", date: "31 मार्च, 2011", link: "/misc/upload_smptviv/mu11.pdf" },
];

const Sampativivran2011 = () => {
  return (
    <div className="container">
      <h1 className="title">
        वर्ष 2011 में श्री शिवराज सिंह चौहान की मंत्रिपरिषद द्वारा विधान सभा के पटल पर रखा गया संपत्ति विवरण
      </h1>

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
          {ministers2011.map((minister, index) => (
            <tr key={minister.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{minister.id}</td>
              <td>{minister.name}</td>
              <td>{minister.date}</td>
              <td>
                {minister.link ? (
                  <a href={minister.link} target="_blank" rel="noopener noreferrer">
                    PDF देखें
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
          font-size: 2rem;
          font-weight: 800;
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
      `}</style>
    </div>
  );
};

export default Sampativivran2011;
