import React from "react";

const rajyaSabhaMembers = [
  {
    id: 1,
    election: "द्विवार्षिक निर्वाचन, 2020",
    name: "श्री दिग्विजय सिंह",
    party: "इण्डियन नेशनल कांग्रेस",
    term: "दिनांक 9 अप्रैल, 2020 से 9 अप्रैल, 2026 तक",
    note: "(कोविड संक्रमण के कारण लॉक डाउन होने से दिनांक 19 जून, 2020 को निर्वाचित)",
    pdf: "/misc/digvijaysinghrs2020.pdf",
  },
  {
    id: 2,
    election: "द्विवार्षिक निर्वाचन, 2020",
    name: "डॉ. सुमेरसिंह सोलंकी",
    party: "भारतीय जनता पार्टी",
    term: "दिनांक 9 अप्रैल, 2020 से 9 अप्रैल, 2026 तक",
    note: "(कोविड संक्रमण के कारण लॉक डाउन होने से दिनांक 19 जून, 2020 को निर्वाचित)",
    pdf: "/misc/sumerssolankirs2020.pdf",
  },
  {
    id: 3,
    election: "द्विवार्षिक निर्वाचन, 2022",
    name: "कविता",
    party: "भारतीय जनता पार्टी",
    term: "दिनांक 29 जून, 2022 से 29 जून, 2028 तक",
    note: "(दिनांक 3 जून, 2022 को निर्विरोध निर्वाचित)",
    pdf: "/misc/KavitaPatidarrs310522.pdf",
  },
  {
    id: 4,
    election: "द्विवार्षिक निर्वाचन, 2022",
    name: "श्री विवेक कृष्ण तन्खा",
    party: "इण्डियन नेशनल कांग्रेस",
    term: "दिनांक 29 जून, 2022 से 29 जून, 2028 तक",
    note: "(दिनांक 3 जून, 2022 को निर्विरोध निर्वाचित)",
    pdf: "/misc/vivektankhars300522.pdf",
  },
  {
    id: 5,
    election: "द्विवार्षिक निर्वाचन, 2022",
    name: "श्रीमती सुमित्रा",
    party: "भारतीय जनता पार्टी",
    term: "दिनांक 29 जून, 2022 से 29 जून, 2028 तक",
    note: "(दिनांक 3 जून, 2022 को निर्विरोध निर्वाचित)",
    pdf: "/misc/SumitraValmikrs310522.pdf",
  },
  {
    id: 6,
    election: "द्विवार्षिक निर्वाचन, 2024",
    name: "श्री बाल योगी उमेशनाथ",
    party: "भारतीय जनता पार्टी",
    term: "दिनांक 3 अप्रैल, 2024 से 3 अप्रैल, 2030 तक",
    note: "(दिनांक 20 फरवरी, 2024 को निर्विरोध निर्वाचित)",
    pdf: "/misc/Balyogi%20Umeshnath.pdf",
  },
  {
    id: 7,
    election: "द्विवार्षिक निर्वाचन, 2024",
    name: "डॉ. एल. मुरूगन",
    party: "भारतीय जनता पार्टी",
    term: "दिनांक 3 अप्रैल, 2024 से 3 अप्रैल, 2030 तक",
    note: "(दिनांक 20 फरवरी, 2024 को निर्विरोध निर्वाचित)",
    pdf: "/misc/Dr. L. Murugan.pdf",
  },
  {
    id: 8,
    election: "द्विवार्षिक निर्वाचन, 2024",
    name: "श्री बंशीलाल गुर्जर",
    party: "भारतीय जनता पार्टी",
    term: "दिनांक 3 अप्रैल, 2024 से 3 अप्रैल, 2030 तक",
    note: "(दिनांक 20 फरवरी, 2024 को निर्विरोध निर्वाचित)",
    pdf: "/misc/Shri Banshilal Gurjar.pdf",
  },
  {
    id: 9,
    election: "द्विवार्षिक निर्वाचन, 2024",
    name: "श्रीमती माया विक्रमसिंह नारोलिया",
    party: "भारतीय जनता पार्टी",
    term: "दिनांक 3 अप्रैल, 2024 से 3 अप्रैल, 2030 तक",
    note: "(दिनांक 20 फरवरी, 2024 को निर्विरोध निर्वाचित)",
    pdf: "/misc/Smt. Maya Naroliya.pdf",
  },
  {
    id: 10,
    election: "द्विवार्षिक निर्वाचन, 2024",
    name: "श्री अशोक सिंह",
    party: "इण्डियन नेशनल कांग्रेस",
    term: "दिनांक 3 अप्रैल, 2024 से 3 अप्रैल, 2030 तक",
    note: "(दिनांक 20 फरवरी, 2024 को निर्विरोध निर्वाचित)",
    pdf: "/misc/Shri Ashok Singh.pdf",
  },
  {
    id: 11,
    election: "उप निर्वाचन, 2024",
    name: "श्री जॉर्ज कुरियन",
    party: "भारतीय जनता पार्टी",
    term: "",
    note: "(दिनांक 27 अगस्त, 2024 को निर्विरोध निर्वाचित)",
    pdf: "/misc/Jeorge_Kurian.pdf",
  },
];

const RajyaSabhaMembersMP = () => {
  return (
    <div className="container">
      <h1 className="title">राज्य सभा सदस्य</h1>
      <h2 className="subtitle">मध्यप्रदेश से राज्य सभा के लिए निर्वाचित सदस्य</h2>

      <table className="styled-table">
        <thead>
          <tr>
            <th>क्रमांक</th>
            <th>कार्यकाल</th>
            <th>सदस्य का नाम एवं संबद्ध दल</th>
            <th>निर्वाचन की तिथि एवं कार्यकाल समाप्ति की तिथि</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          {rajyaSabhaMembers.map((member, index) => (
            <tr key={member.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{member.id}</td>
              <td>{member.election}</td>
              <td>
                <strong>{member.name}</strong>
                <br />
                <span style={{ fontSize: "0.95rem", color: "#374151" }}>{member.party}</span>
              </td>
              <td>
                {member.term && <div>{member.term}</div>}
                {member.note && (
                  <div style={{ fontSize: "0.9rem", color: "#6b7280", marginTop: "4px" }}>
                    {member.note}
                  </div>
                )}
              </td>
              <td>
                {member.pdf ? (
                  <a
                    href={member.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1e40af", fontWeight: "600" }}
                  >
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
          margin-bottom: 0.5rem;
        }
        .subtitle {
          text-align: center;
          font-size: 1.3rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 2rem;
          border-bottom: 3px solid #4a90e2;
          display: inline-block;
          padding-bottom: 0.4rem;
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

export default RajyaSabhaMembersMP;
