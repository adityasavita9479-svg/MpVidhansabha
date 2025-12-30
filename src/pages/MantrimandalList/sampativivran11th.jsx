import React from "react";

const sessionReports = [
  {
    id: 1,
    session: "फरवरी-मार्च, 1999",
    parts: ["भाग-1"],
    links: ["/misc/upload_smptviv/Feb-march%201999.pdf"],
  },
  {
    id: 2,
    session: "अगस्त-सितम्बर, 2001",
    parts: ["भाग-1", "भाग-2"],
    links: [
      "/misc/upload_smptviv/Augest-sep.%202001%20(1-50).pdf",
      "/misc/upload_smptviv/Augest-sep.%202001%20(51-104).pdf",
    ],
  },
  {
    id: 3,
    session: "फरवरी-मार्च, 2003",
    parts: ["भाग-1", "भाग-2"],
    links: [
      "/misc/upload_smptviv/Feb-march%202003%20(1-116).pdf",
      "/misc/upload_smptviv/Feb-march%202003%20(117-169).pdf",
    ],
  },
];

const Sampativivran11th = () => {
  return (
    <div className="comm-page">
      {/* Blue Section */}
      <div className="comm-hero">
        <h1>एकादश विधानसभा</h1>
      </div>

      {/* Yellow Underline Section */}
      <section className="comm-section">
        <h2 className="comm-heading">
          सदन के पटल पर रखे गये सत्रवार चल-अचल संपत्ति विवरण
        </h2>

        <div className="comm-grid">
          {sessionReports.map((report, idx) => (
            <div key={report.id} className="comm-card">
              <h3 className="comm-card-title">
                {idx + 1}. {report.session}
              </h3>
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

export default Sampativivran11th;
