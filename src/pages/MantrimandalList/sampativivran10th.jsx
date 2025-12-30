import React from "react";

const sessionReports = [
  {
    id: 2,
    session: "फरवरी-मई, 1994",
    parts: ["भाग-1", "भाग-2"],
    links: [
      "/misc/upload_smptviv/Feb-may%201994%20(1-100).pdf",
      "/misc/upload_smptviv/Feb-may%201994%20(101-169).pdf",
    ],
  },
  {
    id: 3,
    session: "अगस्त-सितम्बर, 1995",
    parts: ["भाग-1", "भाग-2", "भाग-3", "भाग-4", "भाग-5"],
    links: [
      "/misc/upload_smptviv/Augast-september%201995%20(1-100).pdf",
      "/misc/upload_smptviv/Augast-september%201995%20(101-200).pdf",
      "/misc/upload_smptviv/Augast-september%201995%20(201-250).pdf",
      "/misc/upload_smptviv/Augast-september%201995%20(251-300).pdf",
      "/misc/upload_smptviv/Augast-september%201995%20(301-353).pdf",
    ],
  },
  {
    id: 4,
    session: "जुलाई-अगस्त, 1997",
    parts: ["भाग-1", "भाग-2"],
    links: [
      "/misc/upload_smptviv/July-augest%201997.pdf",
      "/misc/upload_smptviv/augest%201997%20(anupurak).pdf",
    ],
  },
  {
    id: 5,
    session: "नवम्बर, 1997",
    parts: ["भाग-1"],
    links: [
      "/misc/upload_smptviv/November%201997%20(21.11.1997%20other%20vivaran).pdf",
    ],
  },
];

const SessionAssetsCardsPage = () => {
  return (
    <div className="comm-page">
      {/* Blue Section */}
      <div className="comm-hero">
        <h1>दशम विधानसभा</h1>
      </div>

      {/* Yellow Underline Section */}
      <section className="comm-section">
        <h2 className="comm-heading">
          सदन के पटल पर रखे गये सत्रवार चल-अचल संपत्ति विवरण
        </h2>

        <div className="comm-grid">
          {sessionReports.map((report, idx) => (
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

export default SessionAssetsCardsPage;
