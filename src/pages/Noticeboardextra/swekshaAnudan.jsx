// import React from "react";
// import { useNavigate } from "react-router-dom";

// const GrantsList = () => {
//   const navigate = useNavigate();

//   const assemblies = [
//     { id: 1, title: "षोडश विधान सभा (2023 - 2028)", path: "/grants16" },
//     { id: 2, title: "पंचदश विधान सभा (2018 - 2023)", path: "/grants15" },
//   ];

//   return (
//     <div className="comm-page">
//       {/* HERO SECTION */}
//       <div className="comm-hero" style={{ position: "relative" }}>
//         {/* BACK BUTTON */}
//         <button
//           onClick={() => navigate("/home")}
//           className="grants-back-btn"
//         >
//           ← Back
//         </button>

//         <div className="comm-hero-content">
//           <h1>स्वेच्छानुदान</h1>
//           <p>विधान सभा अनुसार स्वेच्छानुदान विवरण</p>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="container grants-cards-wrapper">
//         {assemblies.map((assembly) => (
//           <div
//             key={assembly.id}
//             className="grants-card"
//             onClick={() => navigate(assembly.path)}
//           >
//             {assembly.title}
//           </div>
//         ))}
//       </div>

//       {/* ⭐ CSS Overlay */}
//       <style>{`
//         /* BACK BUTTON */
//         .grants-back-btn {
//           position: absolute;
//           top: 20px;
//           right: 20px;
//           background-color: white;
//           color: #0d6efd;
//           border: none;
//           border-radius: 6px;
//           padding: 6px 12px;
//           font-weight: 600;
//           cursor: pointer;
//           box-shadow: 0 2px 6px rgba(0,0,0,0.2);
//           transition: 0.2s ease;
//         }

//         .grants-back-btn:hover {
//           background-color: #e9ecef;
//         }

//         /* GRANTS CARDS CONTAINER */
//         .grants-cards-wrapper {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 1.5rem;
//           max-width: 1200px;
//           margin: 2rem auto;
//           padding: 0 1rem;
//         }

//         /* GRANT CARD */
//         .grants-card {
//           background-color: white;
//           border-radius: 16px;
//           padding: 2rem 1.5rem;
//           font-weight: 700;
//           font-size: 1.5rem;
//           color: #0d6efd;
//           text-align: center;
//           cursor: pointer;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.1);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .grants-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 8px 25px rgba(0,0,0,0.15);
//         }

//         @media (max-width: 768px) {
//           .grants-card {
//             font-size: 1.3rem;
//             padding: 1.5rem 1rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default GrantsList;
import React from "react";
import { useNavigate } from "react-router-dom";

const GrantsList = () => {
  const navigate = useNavigate();

  const assemblies = [
    { id: 1, title: "षोडश विधान सभा (2023 - 2028)", path: "/grants16" },
    { id: 2, title: "पंचदश विधान सभा (2018 - 2023)", path: "/grants15" },
  ];

  return (
    <div className="comm-page">
      
      {/* ⭐ HERO SECTION WITH BACK BUTTON */}
      <div className="comm-hero" style={{ position: "relative" }}>
        <button
          onClick={() => navigate("/home")}
          className="grants-back-btn"
        >
          ← Back
        </button>

        <div className="comm-hero-content">
          <h1>स्वेच्छानुदान</h1>
          <p>विधान सभा अनुसार स्वेच्छानुदान विवरण</p>
        </div>
      </div>

      {/* ⭐ MAIN CONTENT */}
      <div className="container grants-cards-wrapper">
        {assemblies.map((assembly) => (
          <div
            key={assembly.id}
            className="grants-card"
            onClick={() => navigate(assembly.path)}
          >
            {assembly.title}
          </div>
        ))}
      </div>

      {/* ⭐ PAGE CSS */}
      <style>{`
        /* BACK BUTTON */
        .grants-back-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background-color: white;
          color: #0d6efd;
          border: none;
          border-radius: 6px;
          padding: 6px 12px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          transition: 0.2s ease;
        }
        .grants-back-btn:hover {
          background-color: #e9ecef;
        }

        /* GRID WRAPPER */
        .grants-cards-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        /* INDIVIDUAL CARD */
        .grants-card {
          background-color: white;
          border-radius: 16px;
          padding: 2rem 1.5rem;
          font-weight: 700;
          font-size: 1.5rem;
          color: #0d6efd;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .grants-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        @media (max-width: 768px) {
          .grants-card {
            font-size: 1.3rem;
            padding: 1.5rem 1rem;
          }
        }
      `}</style>

    </div>
  );
};

export default GrantsList;
