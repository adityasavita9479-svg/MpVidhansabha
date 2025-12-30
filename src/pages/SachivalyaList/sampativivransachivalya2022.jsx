import React from "react";
import { motion } from "framer-motion";

const Sampativivransachivalya2022 = () => {
  const sections = [
    { title: "प्रथम श्रेणी अधिकारी", pdf: "/misc/sampativivransachivalaya2022(1).pdf" },
    { title: "द्वितीय श्रेणी अधिकारी", pdf: "/misc/sampativivransachivalaya2022(2).pdf" },
    { title: "तृतीय श्रेणी कर्मचारी (भाग- 1)", pdf: "/misc/sampativivransachivalaya2022(3).pdf" },
    { title: "तृतीय श्रेणी कर्मचारी (भाग- 2)", pdf: "/misc/sampativivransachivalaya2022(4).pdf" },
    { title: "तृतीय श्रेणी कर्मचारी (भाग- 3)", pdf: "/misc/sampativivransachivalaya2022(5).pdf" },
    { title: "तृतीय श्रेणी कर्मचारी (भाग- 4)", pdf: "/misc/sampativivransachivalaya2022(6).pdf" },
    { title: "तृतीय श्रेणी कर्मचारी (भाग- 5)", pdf: "/misc/sampativivransachivalaya2022(7).pdf" },
  ];

  return (
    <div className="comm-page">

      {/* ================= HERO ================= */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>वार्षिक संपत्ति विवरण</h1>
          <p>(वर्ष 2022)</p>
        </div>
      </div>

      {/* ================= SECTION ================= */}
      <section className="comm-section">
        {/* <h2>विभाग चुनें</h2> */}

        <div className="comm-grid">
          {sections.map((section, index) => (
            <motion.a
              key={index}
              href={section.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="comm-card"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
              }}
            >
              <h3>{section.title}</h3>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="comm-footer">
        © {new Date().getFullYear()} Madhya Pradesh Vidhan Sabha Secretariat
      </footer>
    </div>
  );
};

export default Sampativivransachivalya2022;
