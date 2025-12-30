import React from "react";

const sessionReports = [
  {
    id: 1,
    session: "जून-अगस्त, 1990",
    parts: ["भाग-1", "भाग-2", "भाग-3"],
    links: [
      "/misc/upload_smptviv/Jun-Augest%201990%20(1-65).pdf",
      "/misc/upload_smptviv/Jun-Augest%201990%20(66-131).pdf",
      "/home",
    ],
  },
];

const Sampativivran10th = () => {
  return (
    <div className="comm-page">
      {/* Blue Section */}
      <div className="comm-hero">
        <h1>नवम विधानसभा</h1>
      </div>

      {/* Yellow Underline Section */}
      <section className="comm-section">
        <h2 className="comm-heading">
          सदन के पटल पर रखे गये सत्रवार चल-अचल संपत्ति विवरण
        </h2>

        <div className="comm-grid">
          {sessionReports.map((report) => (
            <div key={report.id} className="comm-card">
              <h3 className="comm-card-title">{report.session}</h3>
              <div className="comm-parts">
                {report.parts.map((part, i) => (
                  <a
                    key={i}
                    href={report.links[i]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comm-part-link"
                  >
                    {part}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sampativivran10th;
