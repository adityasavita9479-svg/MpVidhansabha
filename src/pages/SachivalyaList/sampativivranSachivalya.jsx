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
    <div className="apr-container">
      {/* Inline CSS inside component */}
      <style>
        {`
          .apr-container {
            min-height: 100vh;
            font-family: 'Segoe UI', Arial, sans-serif;
            background: #f9fafb;
            display: flex;
            flex-direction: column;
          }
          .apr-header {
            color: black;
            text-align: center;
            padding: 3rem 1rem;
          }
          .apr-header h1 {
            font-size: 2.2rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
          }
          .apr-header p {
            font-size: 1.2rem;
            opacity: 0.9;
          }
          .apr-main {
            flex: 1;
            padding: 3rem 2rem;
          }
          .apr-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto;
          }
          .apr-card {
            background: rgba(255, 255, 255, 0.85);
            border: 1px solid #e5e7eb;
            border-radius: 1rem;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            backdrop-filter: blur(6px);
            transition: all 0.3s ease;
            cursor: pointer;
            color: #1e40af;
            text-decoration: none; /* Important for Link */
          }
          .apr-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
          .apr-card h2 {
            font-size: 1.8rem;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 0.5rem;
          }
          .apr-card p {
            font-size: 0.9rem;
            color: #4b5563;
          }
          .apr-footer {
            text-align: center;
            padding: 1.5rem;
            background: #f1f5f9;
            font-size: 0.9rem;
            color: #6b7280;
          }
        `}
      </style>

      {/* Header */}
      <header className="apr-header">
        <h1>Madhya Pradesh Legislative Assembly Secretariat</h1>
        <p>Annual Property Returns</p>
      </header>

      {/* Year Cards */}
      <main className="apr-main">
        <div className="apr-grid">
          {years.map((item) => (
            <Link key={item.year} to={item.path} className="apr-card">
              <h2>{item.year}</h2>
              <p>Click to view details</p>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="apr-footer">
        © {new Date().getFullYear()} Madhya Pradesh Vidhan Sabha Secretariat
      </footer>
    </div>
  );
};

export default Sachiwalyasampativivran;
