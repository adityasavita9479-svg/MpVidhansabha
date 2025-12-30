import React from "react";

const Sampativivransachivalya2023 = () => {
  const sections = [
    { title: "प्रथम श्रेणी अधिकारी", pdf: "/misc/sampativivransachivalaya2023(1).pdf" },
    { title: "द्वितीय श्रेणी अधिकारी", pdf: "/misc/sampativivransachivalaya2023(2).pdf" },
    { title: "तृतीय श्रेणी कर्मचारी (भाग- 1)", pdf: "/misc/sampativivransachivalaya2023(3).pdf" },
    { title: "तृतीय श्रेणी कर्मचारी (भाग- 2)", pdf: "/misc/sampativivransachivalaya2023(4).pdf" },
    { title: "तृतीय श्रेणी कर्मचारी (भाग- 3)", pdf: "/misc/sampativivransachivalaya2023(5).pdf" },
    { title: "तृतीय श्रेणी कर्मचारी (भाग- 4)", pdf: "/misc/sampativivransachivalaya2023(6).pdf" },
  ];

  return (
    <div className="comm-page">

      {/* HERO SECTION */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>वार्षिक संपत्ति विवरण (वर्ष 2023)</h1>
          {/* <p>मध्यप्रदेश विधानसभा सचिवालय</p> */}
        </div>
      </div>

      {/* MAIN SECTION */}
      <section className="comm-section">
        {/* <h2>श्रेणी अनुसार विवरण</h2> */}

        <div className="comm-grid">
          {sections.map((sec, index) => (
            <a
              key={index}
              href={sec.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="comm-card"
            >
              <h3>{sec.title}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="comm-footer">
        © {new Date().getFullYear()} Madhya Pradesh Vidhan Sabha Secretariat
      </footer>
    </div>
  );
};

export default Sampativivransachivalya2023;
