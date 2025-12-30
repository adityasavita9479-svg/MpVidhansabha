// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SvecchAnudan16 = () => {
//   const navigate = useNavigate();

//   // ✅ मान. अध्यक्ष (with PDF links)
//   const adhyakshData = [
//     { date: "23/07/2024", pdf: "/misc/spkgrant230724.pdf" },
//     { date: "21/08/2024", pdf: "/misc/spkgrant210824.pdf" },
//     { date: "28/10/2024", pdf: "/misc/spkgrant281024.pdf" },
//     { date: "22/11/2024", pdf: "/misc/spkgrant221124.pdf" },
//     { date: "10/12/2024", pdf: "/misc/spkgrant101224.pdf" },
//     { date: "17/12/2024", pdf: "/misc/spkgrant171224.pdf" },
//     { date: "30/12/2024", pdf: "/misc/spkgrant301224.pdf" },
//     { date: "03/01/2025", pdf: "/misc/spkgrant030125.pdf" },
//     { date: "13/01/2025", pdf: "/misc/spkgrant130125.pdf" },
//     { date: "16/01/2025", pdf: "/misc/spkgrant160125.pdf" },
//     { date: "03/03/2025", pdf: "/misc/spkgrant030325.pdf" },
//     { date: "25/03/2025", pdf: "/misc/spkgrant250325.pdf" },
//     { date: "28/03/2025", pdf: "/misc/spkgrant280325.pdf" },
//     { date: "05/05/2025", pdf: "/misc/spkgrant050525.pdf" },
//     { date: "09/05/2025", pdf: "/misc/spkgrant090525.pdf" },
//     { date: "27/06/2025", pdf: "/misc/spkgrant270625.pdf" },
//     { date: "03/07/2025", pdf: "/misc/spkgrant030725.pdf" },
//     { date: "29/08/2025", pdf: "/misc/spkgrant290825.pdf" },
//     { date: "25/09/2025", pdf: "/misc/spkgrant250925.pdf" },
//   ];

//   // ✅ मान. उपाध्यक्ष (कोई प्रविष्टि नहीं)
//   const upadhyakshData = [];

//   // ✅ मान. नेता प्रतिपक्ष (added dummy PDF links)
//   const netaData = [
//     { date: "28/06/2024", pdf: "/misc/loogrant280624.pdf" },
//     { date: "02/07/2024", pdf: "/misc/loogrant020724.pdf" },
//     { date: "21/08/2024", pdf: "/misc/loogrant210824.pdf" },
//     { date: "29/08/2024", pdf: "/misc/loogrant290824.pdf" },
//     { date: "04/09/2024", pdf: "/misc/loogrant040924.pdf" },
//     { date: "19/09/2024", pdf: "/misc/loogrant190924.pdf" },
//     { date: "07/10/2024", pdf: "/misc/loogrant071024.pdf" },
//     { date: "16/10/2024", pdf: "/misc/loogrant161024.pdf" },
//     { date: "24/10/2024", pdf: "/misc/loogrant241024.pdf" },
//     { date: "07/11/2024", pdf: "/misc/loogrant071124.pdf" },
//     { date: "12/11/2024", pdf: "/misc/loogrant121124.pdf" },
//     { date: "04/12/2024", pdf: "/misc/loogrant041224.pdf" },
//     { date: "11/12/2024", pdf: "/misc/loogrant111224.pdf" },
//     { date: "19/12/2024", pdf: "/misc/loogrant191224.pdf" },
//     { date: "15/01/2025", pdf: "/misc/loogrant150125.pdf" },
//     { date: "05/02/2025", pdf: "/misc/loogrant050225.pdf" },
//     { date: "14/02/2025", pdf: "/misc/loogrant140225.pdf" },
//     { date: "18/02/2025", pdf: "/misc/loogrant180225.pdf" },
//     { date: "03/03/2025", pdf: "/misc/loogrant030325.pdf" },
//     { date: "07/03/2025", pdf: "/misc/loogrant070325.pdf" },
//     { date: "11/03/2025", pdf: "/misc/loogrant110325.pdf" },
//     { date: "18/03/2025", pdf: "/misc/loogrant180325.pdf" },
//     { date: "25/03/2025 (1)", pdf: "/misc/loogrant250325-1.pdf" },
//     { date: "25/03/2025 (2)", pdf: "/misc/loogrant250325-2.pdf" },
//     { date: "25/03/2025 (3)", pdf: "/misc/loogrant250325-3.pdf" },
//     { date: "05/05/2025", pdf: "/misc/loogrant050525.pdf" },
//     { date: "28/05/2025", pdf: "/misc/loogrant280525.pdf" },
//     { date: "06/06/2025", pdf: "/misc/loogrant060625.pdf" },
//     { date: "23/06/2025", pdf: "/misc/loogrant230625.pdf" },
//     { date: "04/08/2025", pdf: "/misc/loogrant040825.pdf" },
//     { date: "12/08/2025", pdf: "/misc/loogrant120825.pdf" },
//     { date: "02/09/2025", pdf: "/misc/loogrant020925.pdf" },
//     { date: "11/09/2025", pdf: "/misc/loogrant110925.pdf" },
//     { date: "09/10/2025 (1)", pdf: "/misc/loogrant091025_1.pdf" },
//     { date: "09/10/2025 (2)", pdf: "/misc/loogrant091025_2.pdf" },
//     { date: "03/11/2025 (1)", pdf: "/misc/loogrant031125_1.pdf" },
//     { date: "03/11/2025 (2)", pdf: "/misc/loogrant031125_2.pdf" },
//   ];

//   return (
//     <div className="container mt-4 answers-wrapper">
//       <style>{`
//         .answers-wrapper {
//           background-color: #f8f9fa;
//           padding: 2rem;
//           border-radius: 12px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
//           font-family: 'Noto Sans Devanagari', sans-serif;
//           color: #333;
//         }
//         .answers-heading {
//           font-weight: bold;
//           color: #0d6efd;
//           text-align: center;
//           font-size: 1.4rem;
//         }
//         .table {
//           margin-top: 1rem;
//           border-radius: 8px;
//           overflow: hidden;
//         }
//         .table th {
//           background-color: #0d6efd;
//           color: white;
//           text-align: center;
//           font-size: 1rem;
//         }
//         .table td {
//           font-size: 0.95rem;
//           vertical-align: middle;
//         }
//         .btn-outline-primary {
//           font-weight: 500;
//           border-radius: 6px;
//         }
//         .btn-outline-primary:hover {
//           background-color: #0d6efd;
//           color: white;
//         }
//         .section-title {
//           color: #333;
//           font-weight: 600;
//           margin-top: 2rem;
//           font-size: 1.1rem;
//           border-bottom: 2px solid #0d6efd;
//           display: inline-block;
//           padding-bottom: 4px;
//         }
//         .note {
//           font-style: italic;
//           color: #555;
//           text-align: center;
//           margin-top: 20px;
//         }
//         .pdf-link {
//           text-decoration: none;
//           color: #0d6efd;
//           font-weight: 500;
//         }
//         .pdf-link:hover {
//           text-decoration: underline;
//         }
//       `}</style>

//       {/* ✅ Header */}
//       <div className="mb-3 d-flex justify-content-between align-items-center">
//         <button onClick={() => navigate("/home")} className="btn btn-outline-primary btn-sm">
//           ← Back
//         </button>
//         <h4 className="m-0 text-center flex-grow-1 answers-heading">
//           स्वेच्छानुदान (षोडश विधान सभा)
//         </h4>
//       </div>

//       {/* ✅ मान. अध्यक्ष */}
//       <h5 className="section-title">मान. अध्यक्ष</h5>
//       <div className="table-responsive">
//         <table className="table align-middle table-bordered table-striped">
//           <thead>
//             <tr>
//               <th style={{ width: "10%" }}>क्रमांक</th>
//               <th style={{ width: "30%" }}>दिनांक</th>
//               <th style={{ width: "15%" }}>PDF लिंक</th>
//               <th>टिप्पणी</th>
//             </tr>
//           </thead>
//           <tbody>
//             {adhyakshData.map((item, index) => (
//               <tr key={index}>
//                 <td className="text-center">{index + 1}</td>
//                 <td className="text-center">{item.date}</td>
//                 <td className="text-center">
//                   <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="pdf-link">
//                     🔗 View PDF
//                   </a>
//                 </td>
//                 <td></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* ✅ मान. उपाध्यक्ष */}
//       <h5 className="section-title">मान. उपाध्यक्ष</h5>
//       <div className="table-responsive">
//         <table className="table align-middle table-bordered table-striped">
//           <thead>
//             <tr>
//               <th style={{ width: "10%" }}>क्रमांक</th>
//               <th style={{ width: "30%" }}>दिनांक</th>
//               <th>टिप्पणी</th>
//             </tr>
//           </thead>
//           <tbody>
//             {upadhyakshData.length > 0 ? (
//               upadhyakshData.map((date, index) => (
//                 <tr key={index}>
//                   <td className="text-center">{index + 1}</td>
//                   <td className="text-center">{date}</td>
//                   <td></td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3" className="text-center text-muted">
//                   कोई प्रविष्टि उपलब्ध नहीं है
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* ✅ मान. नेता प्रतिपक्ष */}
//       <h5 className="section-title">मान. नेता प्रतिपक्ष</h5>
//       <div className="table-responsive">
//         <table className="table align-middle table-bordered table-striped">
//           <thead>
//             <tr>
//               <th style={{ width: "10%" }}>क्रमांक</th>
//               <th style={{ width: "30%" }}>दिनांक</th>
//               <th style={{ width: "15%" }}>PDF लिंक</th>
//               <th>टिप्पणी</th>
//             </tr>
//           </thead>
//           <tbody>
//             {netaData.map((item, index) => (
//               <tr key={index}>
//                 <td className="text-center">{index + 1}</td>
//                 <td className="text-center">{item.date}</td>
//                 <td className="text-center">
//                   <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="pdf-link">
//                     🔗 View PDF
//                   </a>
//                 </td>
//                 <td></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <p className="note">टिप्पणी - सभी तिथियाँ षोडश विधान सभा के सत्र अनुसार दी गई हैं।</p>
//     </div>
//   );
// };

// export default SvecchAnudan16;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SvecchAnudan16 = () => {
//   const navigate = useNavigate();

//   // ✅ मान. अध्यक्ष
//   const adhyakshData = [
//      { date: "23/07/2024", pdf: "/misc/spkgrant230724.pdf" },
//     { date: "21/08/2024", pdf: "/misc/spkgrant210824.pdf" },
//     { date: "28/10/2024", pdf: "/misc/spkgrant281024.pdf" },
//     { date: "22/11/2024", pdf: "/misc/spkgrant221124.pdf" },
//     { date: "10/12/2024", pdf: "/misc/spkgrant101224.pdf" },
//     { date: "17/12/2024", pdf: "/misc/spkgrant171224.pdf" },
//     { date: "30/12/2024", pdf: "/misc/spkgrant301224.pdf" },
//     { date: "03/01/2025", pdf: "/misc/spkgrant030125.pdf" },
//     { date: "13/01/2025", pdf: "/misc/spkgrant130125.pdf" },
//     { date: "16/01/2025", pdf: "/misc/spkgrant160125.pdf" },
//     { date: "03/03/2025", pdf: "/misc/spkgrant030325.pdf" },
//     { date: "25/03/2025", pdf: "/misc/spkgrant250325.pdf" },
//     { date: "28/03/2025", pdf: "/misc/spkgrant280325.pdf" },
//     { date: "05/05/2025", pdf: "/misc/spkgrant050525.pdf" },
//     { date: "09/05/2025", pdf: "/misc/spkgrant090525.pdf" },
//     { date: "27/06/2025", pdf: "/misc/spkgrant270625.pdf" },
//     { date: "03/07/2025", pdf: "/misc/spkgrant030725.pdf" },
//     { date: "29/08/2025", pdf: "/misc/spkgrant290825.pdf" },
//     { date: "25/09/2025", pdf: "/misc/spkgrant250925.pdf" },
//   ];

//   // ✅ मान. उपाध्यक्ष
//   const upadhyakshData = [];

//   // ✅ मान. नेता प्रतिपक्ष
//   const netaData = [
//     { date: "28/06/2024", pdf: "/misc/loogrant280624.pdf" },
//      { date: "02/07/2024", pdf: "/misc/loogrant020724.pdf" },
//      { date: "21/08/2024", pdf: "/misc/loogrant210824.pdf" },
//      { date: "29/08/2024", pdf: "/misc/loogrant290824.pdf" },
//      { date: "04/09/2024", pdf: "/misc/loogrant040924.pdf" },
//      { date: "19/09/2024", pdf: "/misc/loogrant190924.pdf" },
//      { date: "07/10/2024", pdf: "/misc/loogrant071024.pdf" },
//      { date: "16/10/2024", pdf: "/misc/loogrant161024.pdf" },
//      { date: "24/10/2024", pdf: "/misc/loogrant241024.pdf" },
//      { date: "07/11/2024", pdf: "/misc/loogrant071124.pdf" },
//      { date: "12/11/2024", pdf: "/misc/loogrant121124.pdf" },
//      { date: "04/12/2024", pdf: "/misc/loogrant041224.pdf" },
//      { date: "11/12/2024", pdf: "/misc/loogrant111224.pdf" },
//      { date: "19/12/2024", pdf: "/misc/loogrant191224.pdf" },
//      { date: "15/01/2025", pdf: "/misc/loogrant150125.pdf" },
//      { date: "05/02/2025", pdf: "/misc/loogrant050225.pdf" },
//      { date: "14/02/2025", pdf: "/misc/loogrant140225.pdf" },
//      { date: "18/02/2025", pdf: "/misc/loogrant180225.pdf" },
//      { date: "03/03/2025", pdf: "/misc/loogrant030325.pdf" },
//      { date: "07/03/2025", pdf: "/misc/loogrant070325.pdf" },
//      { date: "11/03/2025", pdf: "/misc/loogrant110325.pdf" },
//      { date: "18/03/2025", pdf: "/misc/loogrant180325.pdf" },
//      { date: "25/03/2025 (1)", pdf: "/misc/loogrant250325-1.pdf" },
//      { date: "25/03/2025 (2)", pdf: "/misc/loogrant250325-2.pdf" },
//      { date: "25/03/2025 (3)", pdf: "/misc/loogrant250325-3.pdf" },
//      { date: "05/05/2025", pdf: "/misc/loogrant050525.pdf" },
//      { date: "28/05/2025", pdf: "/misc/loogrant280525.pdf" },
//      { date: "06/06/2025", pdf: "/misc/loogrant060625.pdf" },
//      { date: "23/06/2025", pdf: "/misc/loogrant230625.pdf" },
//      { date: "04/08/2025", pdf: "/misc/loogrant040825.pdf" },
//      { date: "12/08/2025", pdf: "/misc/loogrant120825.pdf" },
//      { date: "02/09/2025", pdf: "/misc/loogrant020925.pdf" },
//      { date: "11/09/2025", pdf: "/misc/loogrant110925.pdf" },
//      { date: "09/10/2025 (1)", pdf: "/misc/loogrant091025_1.pdf" },
//      { date: "09/10/2025 (2)", pdf: "/misc/loogrant091025_2.pdf" },
//      { date: "03/11/2025 (1)", pdf: "/misc/loogrant031125_1.pdf" },
//      { date: "03/11/2025 (2)", pdf: "/misc/loogrant031125_2.pdf" },
//   ];

//   const openPdf = (pdf) => {
//     window.open(pdf, "_blank", "noopener,noreferrer");
//   };

//   const renderTable = (data) =>
//     data.map((item, index) => (
//       <tr key={index}>
//         <td className="text-center">{index + 1}</td>
//         <td
//           className="text-center"
//           style={{ color: "#0056b3", cursor: "pointer", textDecoration: "underline" }}
//           onClick={() => openPdf(item.pdf)}
//         >
//           {item.date}
//         </td>
//         <td></td>
//       </tr>
//     ));

//   return (
//     <div className="comm-page">
//       {/* HERO */}
//       <div className="comm-hero" style={{ position: "relative" }}>
//         <button
//           onClick={() => navigate("/grant-list")}
//           className="btn btn-outline-light btn-sm"
//           style={{
//             position: "absolute",
//             right: "20px",
//             top: "20px",
//             borderRadius: "6px",
//             fontWeight: "500",
//           }}
//         >
//           ← Back
//         </button>
//         <div className="comm-hero-content">
//           <h1>स्वेच्छानुदान (षोडश विधान सभा)</h1>
//           <p>विधान सभा अनुसार स्वेच्छानुदान विवरण</p>
//         </div>
//       </div>

//       <div className="container mt-3">
//         {/* अध्यक्ष */}
//         <h5 className="section-title">मान. अध्यक्ष</h5>
//         <div className="table-responsive">
//           <table className="table align-middle table-bordered table-striped">
//             <thead className="text-center table-primary">
//               <tr>
//                 <th style={{ width: "10%" }}>क्रमांक</th>
//                 <th>दिनांक</th>
//                 <th>टिप्पणी</th>
//               </tr>
//             </thead>
//             <tbody>{renderTable(adhyakshData)}</tbody>
//           </table>
//         </div>

//         {/* उपाध्यक्ष */}
//         <h5 className="mt-4 section-title">मान. उपाध्यक्ष</h5>
//         <div className="table-responsive">
//           <table className="table align-middle table-bordered table-striped">
//             <thead className="text-center table-primary">
//               <tr>
//                 <th style={{ width: "10%" }}>क्रमांक</th>
//                 <th>दिनांक</th>
//                 <th>टिप्पणी</th>
//               </tr>
//             </thead>
//             <tbody>
//               {upadhyakshData.length > 0 ? (
//                 renderTable(upadhyakshData)
//               ) : (
//                 <tr>
//                   <td colSpan="3" className="text-center text-muted">
//                     कोई प्रविष्टि उपलब्ध नहीं है
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* नेता प्रतिपक्ष */}
//         <h5 className="mt-4 section-title">मान. नेता प्रतिपक्ष</h5>
//         <div className="table-responsive">
//           <table className="table align-middle table-bordered table-striped">
//             <thead className="text-center table-primary">
//               <tr>
//                 <th style={{ width: "10%" }}>क्रमांक</th>
//                 <th>दिनांक</th>
//                 <th>टिप्पणी</th>
//               </tr>
//             </thead>
//             <tbody>{renderTable(netaData)}</tbody>
//           </table>
//         </div>

//         <p className="mt-3 note" style={{ fontStyle: "italic", color: "#555" }}>
//           टिप्पणी - सभी तिथियाँ षोडश विधान सभा के सत्र अनुसार दी गई हैं।
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SvecchAnudan16;
import React from "react";
import { useNavigate } from "react-router-dom";

const SvecchAnudan16 = () => {
  const navigate = useNavigate();

  // मान. अध्यक्ष
  const adhyakshData = [
    { date: "23/07/2024", pdf: "/misc/spkgrant230724.pdf" },
    { date: "21/08/2024", pdf: "/misc/spkgrant210824.pdf" },
    { date: "28/10/2024", pdf: "/misc/spkgrant281024.pdf" },
    { date: "22/11/2024", pdf: "/misc/spkgrant221124.pdf" },
    { date: "10/12/2024", pdf: "/misc/spkgrant101224.pdf" },
    { date: "17/12/2024", pdf: "/misc/spkgrant171224.pdf" },
    { date: "30/12/2024", pdf: "/misc/spkgrant301224.pdf" },
    { date: "03/01/2025", pdf: "/misc/spkgrant030125.pdf" },
    { date: "13/01/2025", pdf: "/misc/spkgrant130125.pdf" },
    { date: "16/01/2025", pdf: "/misc/spkgrant160125.pdf" },
    { date: "03/03/2025", pdf: "/misc/spkgrant030325.pdf" },
    { date: "25/03/2025", pdf: "/misc/spkgrant250325.pdf" },
    { date: "28/03/2025", pdf: "/misc/spkgrant280325.pdf" },
    { date: "05/05/2025", pdf: "/misc/spkgrant050525.pdf" },
    { date: "09/05/2025", pdf: "/misc/spkgrant090525.pdf" },
    { date: "27/06/2025", pdf: "/misc/spkgrant270625.pdf" },
    { date: "03/07/2025", pdf: "/misc/spkgrant030725.pdf" },
    { date: "29/08/2025", pdf: "/misc/spkgrant290825.pdf" },
    { date: "25/09/2025", pdf: "/misc/spkgrant250925.pdf" },
  ];

  // मान. उपाध्यक्ष
  const upadhyakshData = [];

  // मान. नेता प्रतिपक्ष
  const netaData = [
    { date: "28/06/2024", pdf: "/misc/loogrant280624.pdf" },
    { date: "02/07/2024", pdf: "/misc/loogrant020724.pdf" },
    { date: "21/08/2024", pdf: "/misc/loogrant210824.pdf" },
    { date: "29/08/2024", pdf: "/misc/loogrant290824.pdf" },
    { date: "04/09/2024", pdf: "/misc/loogrant040924.pdf" },
    { date: "19/09/2024", pdf: "/misc/loogrant190924.pdf" },
    { date: "07/10/2024", pdf: "/misc/loogrant071024.pdf" },
    { date: "16/10/2024", pdf: "/misc/loogrant161024.pdf" },
    { date: "24/10/2024", pdf: "/misc/loogrant241024.pdf" },
    { date: "07/11/2024", pdf: "/misc/loogrant071124.pdf" },
    { date: "12/11/2024", pdf: "/misc/loogrant121124.pdf" },
    { date: "04/12/2024", pdf: "/misc/loogrant041224.pdf" },
    { date: "11/12/2024", pdf: "/misc/loogrant111224.pdf" },
    { date: "19/12/2024", pdf: "/misc/loogrant191224.pdf" },
    { date: "15/01/2025", pdf: "/misc/loogrant150125.pdf" },
    { date: "05/02/2025", pdf: "/misc/loogrant050225.pdf" },
    { date: "14/02/2025", pdf: "/misc/loogrant140225.pdf" },
    { date: "18/02/2025", pdf: "/misc/loogrant180225.pdf" },
    { date: "03/03/2025", pdf: "/misc/loogrant030325.pdf" },
    { date: "07/03/2025", pdf: "/misc/loogrant070325.pdf" },
    { date: "11/03/2025", pdf: "/misc/loogrant110325.pdf" },
    { date: "18/03/2025", pdf: "/misc/loogrant180325.pdf" },
    { date: "25/03/2025 (1)", pdf: "/misc/loogrant250325-1.pdf" },
    { date: "25/03/2025 (2)", pdf: "/misc/loogrant250325-2.pdf" },
    { date: "25/03/2025 (3)", pdf: "/misc/loogrant250325-3.pdf" },
    { date: "05/05/2025", pdf: "/misc/loogrant050525.pdf" },
    { date: "28/05/2025", pdf: "/misc/loogrant280525.pdf" },
    { date: "06/06/2025", pdf: "/misc/loogrant060625.pdf" },
    { date: "23/06/2025", pdf: "/misc/loogrant230625.pdf" },
    { date: "04/08/2025", pdf: "/misc/loogrant040825.pdf" },
    { date: "12/08/2025", pdf: "/misc/loogrant120825.pdf" },
    { date: "02/09/2025", pdf: "/misc/loogrant020925.pdf" },
    { date: "11/09/2025", pdf: "/misc/loogrant110925.pdf" },
    { date: "09/10/2025 (1)", pdf: "/misc/loogrant091025_1.pdf" },
    { date: "09/10/2025 (2)", pdf: "/misc/loogrant091025_2.pdf" },
    { date: "03/11/2025 (1)", pdf: "/misc/loogrant031125_1.pdf" },
    { date: "03/11/2025 (2)", pdf: "/misc/loogrant031125_2.pdf" },
  ];

  const openPdf = (pdf) => {
    window.open(pdf, "_blank", "noopener,noreferrer");
  };

  const renderTable = (data) =>
    data.map((item, index) => (
      <tr key={index}>
        <td className="text-center">{index + 1}</td>
        <td
          className="text-center"
          style={{
            color: "#0056b3",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => openPdf(item.pdf)}
        >
          {item.date}
        </td>
        <td></td>
      </tr>
    ));

  return (
    <div className="comm-page">

      {/* HERO */}
      <div className="comm-hero" style={{ position: "relative" }}>
        <button
          onClick={() => navigate("/grant-list")}
          className="btn btn-outline-light btn-sm"
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
            borderRadius: "6px",
            fontWeight: "500",
          }}
        >
          ← Back
        </button>

        <div className="comm-hero-content">
          <h1>स्वेच्छानुदान (षोडश विधान सभा)</h1>
          <p>विधान सभा अनुसार स्वेच्छानुदान विवरण</p>
        </div>
      </div>

      <div className="container">

        {/* मान. अध्यक्ष */}
        <h5 className="mt-3 section-title">मान. अध्यक्ष</h5>
        <div className="table-responsive">
          <table className="table mb-2 align-middle table-bordered table-striped">
            <thead className="text-center table-primary">
              <tr>
                <th style={{ width: "10%" }}>क्रमांक</th>
                <th>दिनांक</th>
                <th>टिप्पणी</th>
              </tr>
            </thead>
            <tbody>{renderTable(adhyakshData)}</tbody>
          </table>
        </div>

        {/* मान. उपाध्यक्ष */}
        <h5 className="mt-4 section-title">मान. उपाध्यक्ष</h5>
        <div className="table-responsive">
          <table className="table mb-2 align-middle table-bordered table-striped">
            <thead className="text-center table-primary">
              <tr>
                <th style={{ width: "10%" }}>क्रमांक</th>
                <th>दिनांक</th>
                <th>टिप्पणी</th>
              </tr>
            </thead>
            <tbody>
              {upadhyakshData.length > 0 ? (
                renderTable(upadhyakshData)
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-muted">
                    कोई प्रविष्टि उपलब्ध नहीं है
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* मान. नेता प्रतिपक्ष */}
        <h5 className="mt-4 section-title">मान. नेता प्रतिपक्ष</h5>
        <div className="table-responsive">
          <table className="table mb-2 align-middle table-bordered table-striped">
            <thead className="text-center table-primary">
              <tr>
                <th style={{ width: "10%" }}>क्रमांक</th>
                <th>दिनांक</th>
                <th>टिप्पणी</th>
              </tr>
            </thead>
            <tbody>{renderTable(netaData)}</tbody>
          </table>
        </div>

        <p className="mb-3 text-center note" style={{ fontStyle: "italic", color: "#555" }}>
          टिप्पणी - सभी तिथियाँ षोडश विधान सभा के सत्र अनुसार दी गई हैं।
        </p>
      </div>

     <style>{`
  .section-title {
    color: #333;
    font-weight: 600;
    border-bottom: 2px solid #0d6efd;
    display: inline-block;
    padding-bottom: 4px;
  }

  .note {
    margin-top: 10px;
  }

  table {
    margin-bottom: 0 !important;
  }

  /* ⭐ FIX GAP ABOVE TABLE */
  .comm-page {
    padding-top: 0 !important;
  }

  .comm-hero {
    margin-bottom: 0 !important;
  }

  .container {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
`}</style>

    </div>
  );
};

export default SvecchAnudan16;
