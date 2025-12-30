// import React from "react";
// import { useNavigate } from "react-router-dom";

// const FullAnswers = () => {
//   const navigate = useNavigate();

//   const sixteenthAssembly = [
//     {
//       id: 1,
//       title: "फरवरी, 2024 सत्र के प्रश्‍नों के अपूर्ण उत्‍तरों के पूर्ण उत्तर (खण्‍ड-1)",
//       pdf: "/misc/house%20proceedings/cansjuly2024p1.pdf",
//     },
//     {
//       id: 2,
//       title: "फरवरी, 2024 एवं जुलाई, 2024 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-2)",
//       pdf: "/misc/house%20proceedings/cansdecember2024p2.pdf",
//     },
//     {
//       id: 3,
//       title: "फरवरी 2024 से दिसम्‍बर 2024 सत्र के प्रश्‍नों के पूर्ण उत्‍तर (खण्‍ड-3)",
//       pdf: "/misc/house%20proceedings/cansmarch2025p3.pdf",
//     },
//     {
//       id: 4,
//       title: "फरवरी 2024 से मार्च 2025 सत्र के प्रश्‍नों के पूर्ण उत्‍तर (खण्‍ड-4)",
//       pdf: "/misc/house%20proceedings/cansjulaug2025p4.pdf",
//     },
//   ];

//   const fifteenthAssembly = [
//     { id: 1, title: "फरवरी, 2019 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-1)", pdf: "/misc/house%20proceedings/cansjul2019p1.pdf" },
//     { id: 2, title: "फरवरी, 2019 एवं जुलाई, 2019 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-2)", pdf: "/misc/house%20proceedings/cansdec2019p2.pdf" },
//     { id: 3, title: "फरवरी, 2019 से दिसम्बर, 2019 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-3)", pdf: "/misc/house%20proceedings/cansmarapr2020p3.pdf" },
//     { id: 4, title: "फरवरी, 2019 से मार्च-अप्रैल, 2020 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-4)", pdf: "/misc/house%20proceedings/cansjul2020p4.pdf" },
//     { id: 5, title: "फरवरी, 2019 से सितम्बर, 2020 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-5)", pdf: "/misc/house%20proceedings/cansdec2020p5.pdf" },
//     { id: 6, title: "जुलाई, 2019 से दिसम्बर, 2020 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-6)", pdf: "/misc/house%20proceedings/cansfebmar2021p6.pdf" },
//     { id: 7, title: "जुलाई, 2019 से फरवरी-मार्च, 2021 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-7)", pdf: "/misc/house%20proceedings/cansaug2021p7.pdf" },
//     { id: 8, title: "जुलाई, 2019 से अगस्त, 2021 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-8)", pdf: "/misc/house%20proceedings/cansdec2021p8.pdf" },
//     { id: 9, title: "दिसम्बर, 2019 से दिसम्बर, 2021 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-9)", pdf: "/misc/house%20proceedings/cansmar2022p9.pdf" },
//     { id: 10, title: "जुलाई, 2019 से मार्च, 2022 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-10)", pdf: "/misc/house%20proceedings/canssep2022p10.pdf" },
//     { id: 11, title: "जुलाई, 2019 से सितम्बर, 2022 (जुलाई, 2022) सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-11)", pdf: "/misc/house%20proceedings/cansdec2022p11.pdf" },
//     { id: 12, title: "फरवरी-मार्च, 2021 से दिसम्बर, 2022 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-12)", pdf: "/misc/house%20proceedings/cansfebmar2023p12.pdf" },
//     { id: 13, title: "फरवरी-मार्च, 2021 से फरवरी-मार्च, 2023 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-13)", pdf: "/misc/house%20proceedings/cansjuly2023p13.pdf" },
//   ];

//   return (
//     <div className="comm-page">

//       {/* ⭐ HERO WITH BACK BUTTON */}
//       <div className="comm-hero" style={{ position: "relative" }}>
//         <button
//           onClick={() => navigate("/home")}
//           className="btn btn-outline-light btn-sm"
//           style={{
//             position: "absolute",
//             right: "20px",
//             top: "20px",
//             borderRadius: "6px",
//             fontWeight: "500"
//           }}
//         >
//           ← Back
//         </button>

//         <div className="comm-hero-content">
//           <h1>प्रश्‍नों के पूर्ण उत्‍तर</h1>
//           <p>विभिन्न सत्रों के प्रश्नों के संपूर्ण उत्तर</p>
//         </div>
//       </div>

//       <div className="container mt-3">

//         {/* 16th Assembly */}
//         <h5 className="section-title">षोडश (16वीं) विधान सभा</h5>
//         <div className="table-responsive">
//           <table className="table align-middle table-bordered table-striped">
//             <thead className="text-center table-primary">
//               <tr>
//                 <th style={{ width: "10%" }}>क्रमांक</th>
//                 <th>प्रश्न</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sixteenthAssembly.map((item) => (
//                 <tr key={item.id}>
//                   <td className="text-center">{item.id}</td>
//                   <td>
//                     <a
//                       href={item.pdf}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="pdf-link"
//                       style={{
//                         color: "#0056b3",
//                         fontWeight: "500",
//                         textDecoration: "none",
//                         cursor: "pointer"
//                       }}
//                     >
//                       {item.title}
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* 15th Assembly */}
//         <h5 className="mt-4 section-title">पंचदश (15वीं) विधान सभा</h5>
//         <div className="table-responsive">
//           <table className="table align-middle table-bordered table-striped">
//             <thead className="text-center table-primary">
//               <tr>
//                 <th style={{ width: "10%" }}>क्रमांक</th>
//                 <th>प्रश्न</th>
//               </tr>
//             </thead>
//             <tbody>
//               {fifteenthAssembly.map((item) => (
//                 <tr key={item.id}>
//                   <td className="text-center">{item.id}</td>
//                   <td>
//                     <a
//                       href={item.pdf}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="pdf-link"
//                       style={{
//                         color: "#0056b3",
//                         fontWeight: "500",
//                         textDecoration: "none",
//                         cursor: "pointer"
//                       }}
//                     >
//                       {item.title}
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <p className="mt-3 note">
//           टिप्पणी: खण्ड-3 तथा खण्ड-4 सितम्बर, 2020 सत्र में पटल पर रखे गये।
//         </p>

//       </div>
//     </div>
//   );
// };

// export default FullAnswers;
import React from "react";
import { useNavigate } from "react-router-dom";

const FullAnswers = () => {
  const navigate = useNavigate();

  const sixteenthAssembly = [
    {
      id: 1,
      title: "फरवरी, 2024 सत्र के प्रश्‍नों के अपूर्ण उत्‍तरों के पूर्ण उत्तर (खण्‍ड-1)",
      pdf: "/misc/house%20proceedings/cansjuly2024p1.pdf",
    },
    {
      id: 2,
      title: "फरवरी, 2024 एवं जुलाई, 2024 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-2)",
      pdf: "/misc/house%20proceedings/cansdecember2024p2.pdf",
    },
    {
      id: 3,
      title: "फरवरी 2024 से दिसम्‍बर 2024 सत्र के प्रश्‍नों के पूर्ण उत्‍तर (खण्‍ड-3)",
      pdf: "/misc/house%20proceedings/cansmarch2025p3.pdf",
    },
    {
      id: 4,
      title: "फरवरी 2024 से मार्च 2025 सत्र के प्रश्‍नों के पूर्ण उत्‍तर (खण्‍ड-4)",
      pdf: "/misc/house%20proceedings/cansjulaug2025p4.pdf",
    },
  ];

  const fifteenthAssembly = [
    { id: 1, title: "फरवरी, 2019 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-1)", pdf: "/misc/house%20proceedings/cansjul2019p1.pdf" },
    { id: 2, title: "फरवरी, 2019 एवं जुलाई, 2019 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-2)", pdf: "/misc/house%20proceedings/cansdec2019p2.pdf" },
    { id: 3, title: "फरवरी, 2019 से दिसम्बर, 2019 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-3)", pdf: "/misc/house%20proceedings/cansmarapr2020p3.pdf" },
    { id: 4, title: "फरवरी, 2019 से मार्च-अप्रैल, 2020 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-4)", pdf: "/misc/house%20proceedings/cansjul2020p4.pdf" },
    { id: 5, title: "फरवरी, 2019 से सितम्बर, 2020 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-5)", pdf: "/misc/house%20proceedings/cansdec2020p5.pdf" },
    { id: 6, title: "जुलाई, 2019 से दिसम्बर, 2020 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-6)", pdf: "/misc/house%20proceedings/cansfebmar2021p6.pdf" },
    { id: 7, title: "जुलाई, 2019 से फरवरी-मार्च, 2021 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-7)", pdf: "/misc/house%20proceedings/cansaug2021p7.pdf" },
    { id: 8, title: "जुलाई, 2019 से अगस्त, 2021 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-8)", pdf: "/misc/house%20proceedings/cansdec2021p8.pdf" },
    { id: 9, title: "दिसम्बर, 2019 से दिसम्बर, 2021 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-9)", pdf: "/misc/house%20proceedings/cansmar2022p9.pdf" },
    { id: 10, title: "जुलाई, 2019 से मार्च, 2022 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-10)", pdf: "/misc/house%20proceedings/canssep2022p10.pdf" },
    { id: 11, title: "जुलाई, 2019 से सितम्बर, 2022 (जुलाई, 2022) सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-11)", pdf: "/misc/house%20proceedings/cansdec2022p11.pdf" },
    { id: 12, title: "फरवरी-मार्च, 2021 से दिसम्बर, 2022 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-12)", pdf: "/misc/house%20proceedings/cansfebmar2023p12.pdf" },
    { id: 13, title: "फरवरी-मार्च, 2021 से फरवरी-मार्च, 2023 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-13)", pdf: "/misc/house%20proceedings/cansjuly2023p13.pdf" },
  ];

  return (
    <div className="comm-page">

      {/* ⭐ HERO WITH BACK BUTTON */}
      <div className="pb-0 mb-0 comm-hero" style={{ position: "relative" }}>
        <button
          onClick={() => navigate("/home")}
          className="btn btn-outline-light btn-sm"
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
            borderRadius: "6px",
            fontWeight: "500"
          }}
        >
          ← Back
        </button>

        <div className="comm-hero-content">
          <h1>प्रश्‍नों के पूर्ण उत्‍तर</h1>
          <p>विभिन्न सत्रों के प्रश्नों के संपूर्ण उत्तर</p>
        </div>
      </div>

      <div className="container pt-2 mt-0">

        {/* 16th Assembly */}
        <h5 className="section-title">षोडश (16वीं) विधान सभा</h5>
        <div className="table-responsive">
          <table className="table align-middle table-bordered table-striped">
            <thead className="text-center table-primary">
              <tr>
                <th style={{ width: "10%" }}>क्रमांक</th>
                <th>प्रश्न</th>
              </tr>
            </thead>
            <tbody>
              {sixteenthAssembly.map((item) => (
                <tr key={item.id}>
                  <td className="text-center">{item.id}</td>
                  <td>
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf-link"
                      style={{
                        color: "#0056b3",
                        fontWeight: "500",
                        textDecoration: "none",
                        cursor: "pointer"
                      }}
                    >
                      {item.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 15th Assembly */}
        <h5 className="mt-4 section-title">पंचदश (15वीं) विधान सभा</h5>
        <div className="table-responsive">
          <table className="table align-middle table-bordered table-striped">
            <thead className="text-center table-primary">
              <tr>
                <th style={{ width: "10%" }}>क्रमांक</th>
                <th>प्रश्न</th>
              </tr>
            </thead>
            <tbody>
              {fifteenthAssembly.map((item) => (
                <tr key={item.id}>
                  <td className="text-center">{item.id}</td>
                  <td>
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf-link"
                      style={{
                        color: "#0056b3",
                        fontWeight: "500",
                        textDecoration: "none",
                        cursor: "pointer"
                      }}
                    >
                      {item.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 note">
          टिप्पणी: खण्ड-3 तथा खण्ड-4 सितम्बर, 2020 सत्र में पटल पर रखे गये।
        </p>

      </div>
    </div>
  );
};

export default FullAnswers;
