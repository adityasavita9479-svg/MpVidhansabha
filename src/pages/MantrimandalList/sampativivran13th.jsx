import React from "react";
import { Link } from "react-router-dom";

const yearwiseAssets = [
  {
    year: 2013,
    link: "/assets/2013.pdf",
    label: "वर्ष 2013 में रखा गया संपत्ति विवरण",
    path: "/desc2013",
  },
  {
    year: 2012,
    link: "/assets/2012.pdf",
    label: "वर्ष 2012 में रखा गया संपत्ति विवरण",
    path: "/desc2012",
  },
  {
    year: 2011,
    link: "/assets/2011.pdf",
    label: "वर्ष 2011 में रखा गया संपत्ति विवरण",
    path: "/desc2011",
  },
];

const sessionReports = [
  {
    id: 1,
    session: "फरवरी-मार्च, 2010",
    parts: ["भाग-1", "भाग-2"],
    links: [
      "/misc/upload_smptviv/Feb-march%202010%20(1-76).pdf",
      "/misc/upload_smptviv/Feb-march%202010%20(77-151).pdf",
    ],
  },
  {
    id: 2,
    session: "फरवरी-अप्रिल, 2008",
    parts: ["भाग-1"],
    links: [
      "/misc/upload_smptviv/Feb-April%202008.pdf",
    ],
  },
];

const YearwiseAssetsPage = () => {
  return (
    <div className="comm-page">
      {/* ✅ Hero Section */}
      <div className="comm-hero">
        <h1>त्रयोदश विधानसभा</h1>
      </div>

      {/* ✅ Main Section */}
      <section className="comm-section">
        {/* Yearwise Assets */}
        <h2>वर्षवार संपत्ति विवरण</h2>
        <div className="comm-grid">
          {yearwiseAssets.map((item, index) => (
            <div key={index} className="comm-card">
              <h3>{item.label}</h3>
              <Link to={item.path} className="comm-card-link">
                <span>पीडीएफ देखें</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Sessionwise Assets */}
        <h2>सत्रवार संपत्ति विवरण</h2>
        <div className="comm-grid">
          {sessionReports.map((report) => (
            <div key={report.id} className="comm-card">
              <h3>{report.session}</h3>
              <ul>
                {report.parts.map((part, idx) => (
                  <li key={idx}>
                    <a
                      href={report.links[idx]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {part}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default YearwiseAssetsPage;
