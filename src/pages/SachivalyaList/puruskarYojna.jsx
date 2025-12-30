import React from "react";

const Puruskaryojna = () => {
  const documents = [
    {
      title: "Notice",
      year: "2015",
      pdf: "/misc/puraskar2015.pdf",
    },
    {
      title: "नियम - गांधी दर्शन पुरस्कार योजना नियम",
      pdf: "/misc/puruskargandhi(2).pdf",
    },
    {
      title: "नियम - डॉ. भीमराव अम्बेडकर पुरस्कार योजना नियम",
      pdf: "/misc/puruskarambedkar(3).pdf",
    },
  ];

  return (
    <div className="comm-page">
      
      {/* ⭐ Hero Section */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>पुरस्कार योजना</h1>
          <p>मध्य प्रदेश विधान सभा पुरस्कार योजनाएँ</p>
        </div>
      </div>

      {/* ⭐ Main Section */}
      <section className="comm-section">
        <div className="comm-grid">
          {documents.map((doc, index) => (
            <a
              key={index}
              className="comm-card-link"
              onClick={() => doc.pdf && window.open(doc.pdf, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <div className="comm-card">
                <h3>{doc.title}</h3>

                {doc.year && (
                  <p style={{ marginTop: "10px", color: "#555" }}>
                    Year: {doc.year}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Puruskaryojna;
