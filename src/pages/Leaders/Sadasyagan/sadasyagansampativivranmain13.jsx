import React from "react";
import { useNavigate } from "react-router-dom";

const assemblyData = [
  
  { id: 2, name: "त्रयोदश विधानसभा (2013)", path: "/assembly/2013" },
  { id: 3, name: "द्वादश विधानसभा (2012)", path: "/assembly/2012" },
  { id: 4, name: "एकादश विधानसभा (2011)", path: "/assembly/2011" },
 
];

const Sadasyagan13SampatiVivranmain = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">संपत्ति विवरण - विधान सभा</h1>

      <div className="cards-wrapper">
        {assemblyData.map((assembly) => (
          <div
            key={assembly.id}
            className="card"
            onClick={() => navigate(assembly.path)}
          >
            <p className="assembly-name">{assembly.name}</p>
            <span className="view-link">देखें</span>
          </div>
        ))}
      </div>

       <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 3rem 2rem;
          font-family: 'Noto Sans Devanagari', sans-serif;
          background: #f8fafc;
          min-height: 100vh;
          color: #1a202c;
        }
        .title {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: #1e40af;
        }
        .cards-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .card {
          background: #fff;
          padding: 50px 25px; /* increased padding for bigger height */
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
          min-height: 150px; /* ensures minimum height */
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }
        .assembly-name {
          font-weight: 600;
          font-size: 1.2rem; /* slightly bigger text */
          color: #111827;
          margin: 0;
        }
        .view-link {
          background-color: #2563eb;
          color: #fff;
          padding: 8px 16px; /* larger button */
          border-radius: 8px;
          font-weight: 600;
          transition: background 0.3s;
        }
        .card:hover .view-link {
          background-color: #1e40af;
        }
      `}</style>
    </div>
  );
};
export default Sadasyagan13SampatiVivranmain;
