import React from "react";
import { Link } from "react-router-dom";

const Sachiwalyasampativivran = () => {
  const years = [
    { year: 2020, path: "/year/2020" },
    { year: 2021, path: "/year/2021" },
    { year: 2022, path: "/year/2022" },
    { year: 2023, path: "/year/2023" },
    { year: 2024, path: "/year/2024" },
  ];

  return (
    <div className="comm-page">

      {/* ================= HERO SECTION ================= */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>Madhya Pradesh Legislative Assembly Secretariat</h1>
          <p>Annual Property Returns</p>
        </div>
      </div>

      {/* ================= MAIN SECTION ================= */}
      <section className="comm-section">
        {/* <h2>Select Year</h2> */}

        <div className="comm-grid">
          {years.map((item) => (
            <Link key={item.year} to={item.path} className="comm-card">
              <h3>{item.year}</h3>
            </Link>
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

export default Sachiwalyasampativivran;
