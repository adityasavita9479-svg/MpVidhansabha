// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SvecchAnudan15 = () => {
//   const navigate = useNavigate();

//   // ✅ मान. अध्यक्ष
//   const adhyakshData = [
//     { date: "03/03/2021 (1)", pdf: "/misc/spkgrant030321_1.pdf" },
//     { date: "03/03/2021 (2)", pdf: "/misc/spkgrant030321_2.pdf" },
//     { date: "05/03/2021", pdf: "/misc/spkgrant050321.pdf" },
//     { date: "10/03/2021", pdf: "/misc/spkgrant100321.pdf" },
//     { date: "16/04/2021 (1)", pdf: "/misc/spkgrant160421_1.pdf" },
//     { date: "16/04/2021 (2)", pdf: "/misc/spkgrant160421_2.pdf" },
//     { date: "05/05/2021 (1)", pdf: "/misc/spkgrant050521_1.pdf" },
//     { date: "05/05/2021 (2)", pdf: "/misc/spkgrant050521_2.pdf" },
//     { date: "05/05/2021 (3)", pdf: "/misc/spkgrant050521_3.pdf" },
//     { date: "05/05/2021 (4)", pdf: "/misc/spkgrant050521_4.pdf" },
//     { date: "17/05/2021", pdf: "/misc/spkgrant170521.pdf" },
//     { date: "21/05/2021", pdf: "/misc/spkgrant210521.pdf" },
//     { date: "22/05/2021", pdf: "/misc/spkgrant220521.pdf" },
//     { date: "31/05/2021 (1)", pdf: "/misc/spkgrant310521_1.pdf" },
//     { date: "31/05/2021 (2)", pdf: "/misc/spkgrant310521_2.pdf" },
//     { date: "02/06/2021", pdf: "/misc/spkgrant020621.pdf" },
//     { date: "16/06/2021", pdf: "/misc/spkgrant160621.pdf" },
//     { date: "24/06/2021", pdf: "/misc/spkgrant240621.pdf" },
//     { date: "08/07/2021 (1)", pdf: "/misc/spkgrant080721_1.pdf" },
//     { date: "08/07/2021 (2)", pdf: "/misc/spkgrant080721_2.pdf" },
//     { date: "28/07/2021", pdf: "/misc/spkgrant280721.pdf" },
//     { date: "04/08/2021", pdf: "/misc/spkgrant040821.pdf" },
//     { date: "18/08/2021 (1)", pdf: "/misc/spkgrant180821_1.pdf" },
//     { date: "18/08/2021 (2)", pdf: "/misc/spkgrant180821_2.pdf" },
//     { date: "18/08/2021 (3)", pdf: "/misc/spkgrant180821_3.pdf" },
//     { date: "01/09/2021", pdf: "/misc/spkgrant010921.pdf" },
//     { date: "08/09/2021", pdf: "/misc/spkgrant080921.pdf" },
//     { date: "17/09/2021 (1)", pdf: "/misc/spkgrant170921_1.pdf" },
//     { date: "17/09/2021 (2)", pdf: "/misc/spkgrant170921_2.pdf" },
//     { date: "22/09/2021", pdf: "/misc/spkgrant220921.pdf" },
//     { date: "11/10/2021", pdf: "/misc/spkgrant111021.pdf" },
//     { date: "12/10/2021 (1)", pdf: "/misc/spkgrant121021_1.pdf" },
//     { date: "12/10/2021 (2)", pdf: "/misc/spkgrant121021_2.pdf" },
//     { date: "28/10/2021", pdf: "/misc/spkgrant281021.pdf" },
//     { date: "10/11/2021", pdf: "/misc/spkgrant101121.pdf" },
//     { date: "12/11/2021 (1-4)", pdf: "/misc/spkgrant121121.pdf" },
//     { date: "16/11/2021 (1-3)", pdf: "/misc/spkgrant161121.pdf" },
//     { date: "23/11/2021", pdf: "/misc/spkgrant231121.pdf" },
//     { date: "25/11/2021", pdf: "/misc/spkgrant251121.pdf" },
//     { date: "30/11/2021", pdf: "/misc/spkgrant301121.pdf" },
//     { date: "02/12/2021 (1-3)", pdf: "/misc/spkgrant021221.pdf" },
//     { date: "08/12/2021", pdf: "/misc/spkgrant081221.pdf" },
//     { date: "29/12/2021 (1-2)", pdf: "/misc/spkgrant291221.pdf" },
//     { date: "04/01/2022 (1-2)", pdf: "/misc/spkgrant040122.pdf" },
//     { date: "06/01/2022", pdf: "/misc/spkgrant060122.pdf" },
//     { date: "11/01/2022", pdf: "/misc/spkgrant110122.pdf" },
//     { date: "20/01/2022", pdf: "/misc/spkgrant200122.pdf" },
//     { date: "07/02/2022", pdf: "/misc/spkgrant070222.pdf" },
//     { date: "09/02/2022", pdf: "/misc/spkgrant090222.pdf" },
//     { date: "18/02/2022", pdf: "/misc/spkgrant180222.pdf" },
//     { date: "18/04/2022", pdf: "/misc/spkgrant180422.pdf" },
//     { date: "25/04/2022", pdf: "/misc/spkgrant250422.pdf" },
//     { date: "26/04/2022 (1-4)", pdf: "/misc/spkgrant260422.pdf" },
//     { date: "27/04/2022 (1-3)", pdf: "/misc/spkgrant270422.pdf" },
//     { date: "06/05/2022", pdf: "/misc/spkgrant060522.pdf" },
//     { date: "11/05/2022 (1-4)", pdf: "/misc/spkgrant110522.pdf" },
//     { date: "12/05/2022 (1-6)", pdf: "/misc/spkgrant120522.pdf" },
//     { date: "20/05/2022", pdf: "/misc/spkgrant200522.pdf" },
//     { date: "23/05/2022", pdf: "/misc/spkgrant230522.pdf" },
//     { date: "26/05/2022", pdf: "/misc/spkgrant260522.pdf" },
//     { date: "27/05/2022", pdf: "/misc/spkgrant270522.pdf" },
//     { date: "31/05/2022", pdf: "/misc/spkgrant310522.pdf" },
//     { date: "16/06/2022 (1-3)", pdf: "/misc/spkgrant160622.pdf" },
//     { date: "21/06/2022", pdf: "/misc/spkgrant210622.pdf" },
//     { date: "22/06/2022 (1-3)", pdf: "/misc/spkgrant220622.pdf" },
//     { date: "24/06/2022 (1-3)", pdf: "/misc/spkgrant240622.pdf" },
//     { date: "14/07/2022 (1-2)", pdf: "/misc/spkgrant140722.pdf" },
//     { date: "21/07/2022", pdf: "/misc/spkgrant210722.pdf" },
//     { date: "22/07/2022", pdf: "/misc/spkgrant220722.pdf" },
//     { date: "25/07/2022", pdf: "/misc/spkgrant250722.pdf" },
//     { date: "26/07/2022 (1-3)", pdf: "/misc/spkgrant260722.pdf" },
//     { date: "01/08/2022", pdf: "/misc/spkgrant010822.pdf" },
//     { date: "04/08/2022", pdf: "/misc/spkgrant040822.pdf" },
//     { date: "10/08/2022", pdf: "/misc/spkgrant100822.pdf" },
//     { date: "17/08/2022", pdf: "/misc/spkgrant170822.pdf" },
//     { date: "28/09/2022", pdf: "/misc/spkgrant280922.pdf" },
//     { date: "30/09/2022", pdf: "/misc/spkgrant300922.pdf" },
//     { date: "11/10/2022", pdf: "/misc/spkgrant111022.pdf" },
//     { date: "26/10/2022", pdf: "/misc/spkgrant261022.pdf" },
//     { date: "10/11/2022", pdf: "/misc/spkgrant101122.pdf" },
//     { date: "14/11/2022", pdf: "/misc/spkgrant141122.pdf" },
//     { date: "08/12/2022", pdf: "/misc/spkgrant081222.pdf" },
//     { date: "17/02/2023", pdf: "/misc/spkgrant170223.pdf" },
//     { date: "24/04/2023", pdf: "/misc/spkgrant240423.pdf" },
//     { date: "26/04/2023", pdf: "/misc/spkgrant260423.pdf" },
//     { date: "01/05/2023 (1-2)", pdf: "/misc/spkgrant010523.pdf" },
//     { date: "11/05/2023", pdf: "/misc/spkgrant110523.pdf" },
//     { date: "16/05/2023", pdf: "/misc/spkgrant160523.pdf" },
//     { date: "26/05/2023", pdf: "/misc/spkgrant260523.pdf" },
//     { date: "29/05/2023", pdf: "/misc/spkgrant290523.pdf" },
//     { date: "02/06/2023", pdf: "/misc/spkgrant020623.pdf" },
//     { date: "15/06/2023", pdf: "/misc/spkgrant150623.pdf" },
//     { date: "21/06/2023", pdf: "/misc/spkgrant210623.pdf" },
//     { date: "03/07/2023", pdf: "/misc/spkgrant030723.pdf" },
//     { date: "06/07/2023", pdf: "/misc/spkgrant060723.pdf" },
//     { date: "12/07/2023", pdf: "/misc/spkgrant120723.pdf" },
//     { date: "20/07/2023", pdf: "/misc/spkgrant200723.pdf" },
//     { date: "21/07/2023", pdf: "/misc/spkgrant210723.pdf" },
//     { date: "26/07/2023", pdf: "/misc/spkgrant260723.pdf" },
//     { date: "28/07/2023", pdf: "/misc/spkgrant280723.pdf" },
//     { date: "03/08/2023", pdf: "/misc/spkgrant030823.pdf" },
//     { date: "04/08/2023", pdf: "/misc/spkgrant040823.pdf" },
//     { date: "09/08/2023", pdf: "/misc/spkgrant090823.pdf" },
//     { date: "24/08/2023 (1-2)", pdf: "/misc/spkgrant240823.pdf" },
//     { date: "25/08/2023", pdf: "/misc/spkgrant250823.pdf" },
//     { date: "01/09/2023", pdf: "/misc/spkgrant010923.pdf" },
//     { date: "05/09/2023", pdf: "/misc/spkgrant050923.pdf" },
//     { date: "12/09/2023", pdf: "/misc/spkgrant120923.pdf" },
//     { date: "21/09/2023", pdf: "/misc/spkgrant210923.pdf" },
//     { date: "05/10/2023 (1-11)", pdf: "/misc/spkgrant051023.pdf" },
//   ];

//   // ✅ मान. सामयिक अध्यक्ष
//   const samayikData = [
//     { date: "22/12/2020", pdf: "/misc/actgrant221220.pdf" },
//     { date: "20/01/2021", pdf: "/misc/actgrant200121.pdf" },
//     { date: "10/02/2021", pdf: "/misc/actgrant100221.pdf" },
//   ];

//   // ✅ मान. उपाध्यक्ष (No Entries)
//   const upadhyakshData = [];

//   // ✅ मान. नेता प्रतिपक्ष
// const netaData = [
//   { date: "17/12/2020", pdf: "/misc/lopgrant171220.pdf" },
//   { date: "02/01/2021", pdf: "/misc/lopgrant020121.pdf" },
//   { date: "23/01/2021", pdf: "/misc/lopgrant230121.pdf" },
//   { date: "22/02/2021", pdf: "/misc/lopgrant220221.pdf" },
//   { date: "05/03/2021", pdf: "/misc/lopgrant050321.pdf" },
//   { date: "22/03/2021", pdf: "/misc/lopgrant220321.pdf" },
//   { date: "23/03/2021 (1)", pdf: "/misc/lopgrant230321(1).pdf" },
//   { date: "23/03/2021 (2)", pdf: "/misc/lopgrant230321(2).pdf" },
//   { date: "27/03/2021", pdf: "/misc/lopgrant270321.pdf" },
//   { date: "21/05/2021", pdf: "/misc/lopgrant210521.pdf" },
//   { date: "02/06/2021", pdf: "/misc/lopgrant020621.pdf" },
//   { date: "04/06/2021", pdf: "/misc/lopgrant040621.pdf" },
//   { date: "11/06/2021", pdf: "/misc/lopgrant110621.pdf" },
//   { date: "18/06/2021", pdf: "/misc/lopgrant180621.pdf" },
//   { date: "23/06/2021", pdf: "/misc/lopgrant230621.pdf" },
//   { date: "07/07/2021", pdf: "/misc/lopgrant070721.pdf" },
//   { date: "13/07/2021", pdf: "/misc/lopgrant130721.pdf" },
//   { date: "02/08/2021", pdf: "/misc/lopgrant020821.pdf" },
//   { date: "04/08/2021", pdf: "/misc/lopgrant040821.pdf" },
//   { date: "09/08/2021", pdf: "/misc/lopgrant090821.pdf" },
//   { date: "12/08/2021", pdf: "/misc/lopgrant120821.pdf" },
//   { date: "25/08/2021", pdf: "/misc/lopgrant250821.pdf" },
//   { date: "02/09/2021", pdf: "/misc/lopgrant020921.pdf" },
//   { date: "14/09/2021", pdf: "/misc/lopgrant140921.pdf" },
//   { date: "17/09/2021", pdf: "/misc/lopgrant170921.pdf" },
//   { date: "05/10/2021", pdf: "/misc/lopgrant051021.pdf" },
//   { date: "11/10/2021", pdf: "/misc/lopgrant111021.pdf" },
//   { date: "26/10/2021", pdf: "/misc/lopgrant261021.pdf" },
//   { date: "24/11/2021", pdf: "/misc/lopgrant241121.pdf" },
//   { date: "09/12/2021", pdf: "/misc/lopgrant091221.pdf" },
//   { date: "29/12/2021", pdf: "/misc/lopgrant291221.pdf" },
//   { date: "04/01/2022", pdf: "/misc/lopgrant040122.pdf" },
//   { date: "14/01/2022", pdf: "/misc/lopgrant140122.pdf" },
//   { date: "24/01/2022", pdf: "/misc/lopgrant240122.pdf" },
//   { date: "02/02/2022", pdf: "/misc/lopgrant020222.pdf" },
//   { date: "22/02/2022", pdf: "/misc/lopgrant220222.pdf" },
//   { date: "25/02/2022", pdf: "/misc/lopgrant250222.pdf" },
//   { date: "16/03/2022", pdf: "/misc/lopgrant160322.pdf" },
//   { date: "21/03/2022", pdf: "/misc/lopgrant210322.pdf" },
//   { date: "24/03/2022", pdf: "/misc/lopgrant240322.pdf" },
//   { date: "19/04/2022", pdf: "/misc/lopgrant190422.pdf" },
//   { date: "06/05/2022 (1-2)", pdf: "/misc/lopgrant060522(1-2).pdf" },
//   { date: "17/05/2022", pdf: "/misc/lopgrant170522.pdf" },
//   { date: "24/05/2022", pdf: "/misc/lopgrant240522.pdf" },
//   { date: "21/07/2022 (1-2)", pdf: "/misc/lopgrant210722(1-2).pdf" },
//   { date: "04/08/2022", pdf: "/misc/lopgrant040822.pdf" },
//   { date: "08/08/2022", pdf: "/misc/lopgrant080822.pdf" },
//   { date: "16/08/2022", pdf: "/misc/lopgrant160822.pdf" },
//   { date: "18/08/2022", pdf: "/misc/lopgrant180822.pdf" },
//   { date: "24/08/2022", pdf: "/misc/lopgrant240822.pdf" },
//   { date: "26/09/2022", pdf: "/misc/lopgrant260922.pdf" },
//   { date: "06/10/2022", pdf: "/misc/lopgrant061022.pdf" },
//   { date: "10/10/2022", pdf: "/misc/lopgrant101022.pdf" },
//   { date: "12/10/2022", pdf: "/misc/lopgrant121022.pdf" },
//   { date: "17/10/2022 (1-2)", pdf: "/misc/lopgrant171022(1-2).pdf" },
//   { date: "09/11/2022", pdf: "/misc/lopgrant091122.pdf" },
//   { date: "16/11/2022", pdf: "/misc/lopgrant161122.pdf" },
//   { date: "23/11/2022 (1-2)", pdf: "/misc/lopgrant231122(1-2).pdf" },
//   { date: "24/11/2022", pdf: "/misc/lopgrant241122.pdf" },
//   { date: "05/12/2022", pdf: "/misc/lopgrant051222.pdf" },
//   { date: "09/01/2023", pdf: "/misc/lopgrant090123.pdf" },
//   { date: "16/01/2023", pdf: "/misc/lopgrant160123.pdf" },
//   { date: "25/01/2023 (1-2)", pdf: "/misc/lopgrant250123(1-2).pdf" },
//   { date: "08/02/2023", pdf: "/misc/lopgrant080223.pdf" },
//   { date: "14/02/2023", pdf: "/misc/lopgrant140223.pdf" },
//   { date: "26/02/2023", pdf: "/misc/lopgrant260223.pdf" },
//   { date: "09/03/2023", pdf: "/misc/lopgrant090323.pdf" },
//   { date: "24/03/2023", pdf: "/misc/lopgrant240323.pdf" },
//   { date: "27/04/2023", pdf: "/misc/lopgrant270423.pdf" },
//   { date: "09/05/2023", pdf: "/misc/lopgrant090523.pdf" },
//   { date: "16/05/2023", pdf: "/misc/lopgrant160523.pdf" },
//   { date: "29/05/2023", pdf: "/misc/lopgrant290523.pdf" },
//   { date: "14/06/2023", pdf: "/misc/lopgrant140623.pdf" },
//   { date: "03/07/2023", pdf: "/misc/lopgrant030723.pdf" },
//   { date: "09/07/2023", pdf: "/misc/lopgrant090723.pdf" },
//   { date: "19/07/2023", pdf: "/misc/lopgrant190723.pdf" },
//   { date: "31/07/2023", pdf: "/misc/lopgrant310723.pdf" },
//   { date: "07/08/2023", pdf: "/misc/lopgrant070823.pdf" },
//   { date: "11/08/2023", pdf: "/misc/lopgrant110823.pdf" },
//   { date: "24/08/2023", pdf: "/misc/lopgrant240823.pdf" },
//   { date: "25/08/2023", pdf: "/misc/lopgrant250823.pdf" },
//   { date: "06/09/2023", pdf: "/misc/lopgrant060923.pdf" },
//   { date: "12/09/2023", pdf: "/misc/lopgrant120923.pdf" },
//   { date: "21/09/2023", pdf: "/misc/lopgrant210923.pdf" },
//   { date: "05/10/2023 (1-2)", pdf: "/misc/lopgrant051023(1-2).pdf" },
//   { date: "09/10/2023", pdf: "/misc/lopgrant091023.pdf" },
// ];

//     return (
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
//           स्वेच्छानुदान (पंचदश विधान सभा)
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
//               <th style={{ width: "15%" }}>PDF लिंक</th>
//               <th>टिप्पणी</th>
//             </tr>
//           </thead>
//           <tbody>
//             {upadhyakshData.map((item, index) => (
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

//       <p className="note">
//         टिप्पणी - सभी तिथियाँ पंचदश विधान सभा के सत्र अनुसार दी गई हैं।
//       </p>
//     </div>
//   );
// };

// export default SvecchAnudan15;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SvecchAnudan15 = () => {
//   const navigate = useNavigate();

//   // ✅ मान. अध्यक्ष
//   const adhyakshData = [
//      { date: "03/03/2021 (1)", pdf: "/misc/spkgrant030321_1.pdf" },
//      { date: "03/03/2021 (2)", pdf: "/misc/spkgrant030321_2.pdf" },
//      { date: "05/03/2021", pdf: "/misc/spkgrant050321.pdf" },
//      { date: "10/03/2021", pdf: "/misc/spkgrant100321.pdf" },
//      { date: "16/04/2021 (1)", pdf: "/misc/spkgrant160421_1.pdf" },
//      { date: "16/04/2021 (2)", pdf: "/misc/spkgrant160421_2.pdf" },
//      { date: "05/05/2021 (1)", pdf: "/misc/spkgrant050521_1.pdf" },
//      { date: "05/05/2021 (2)", pdf: "/misc/spkgrant050521_2.pdf" },
//      { date: "05/05/2021 (3)", pdf: "/misc/spkgrant050521_3.pdf" },
//      { date: "05/05/2021 (4)", pdf: "/misc/spkgrant050521_4.pdf" },
//      { date: "17/05/2021", pdf: "/misc/spkgrant170521.pdf" },
//      { date: "21/05/2021", pdf: "/misc/spkgrant210521.pdf" },
//      { date: "22/05/2021", pdf: "/misc/spkgrant220521.pdf" },
//      { date: "31/05/2021 (1)", pdf: "/misc/spkgrant310521_1.pdf" },
//      { date: "31/05/2021 (2)", pdf: "/misc/spkgrant310521_2.pdf" },
//      { date: "02/06/2021", pdf: "/misc/spkgrant020621.pdf" },
//      { date: "16/06/2021", pdf: "/misc/spkgrant160621.pdf" },
//      { date: "24/06/2021", pdf: "/misc/spkgrant240621.pdf" },
//      { date: "08/07/2021 (1)", pdf: "/misc/spkgrant080721_1.pdf" },
//      { date: "08/07/2021 (2)", pdf: "/misc/spkgrant080721_2.pdf" },
//      { date: "28/07/2021", pdf: "/misc/spkgrant280721.pdf" },
//      { date: "04/08/2021", pdf: "/misc/spkgrant040821.pdf" },
//      { date: "18/08/2021 (1)", pdf: "/misc/spkgrant180821_1.pdf" },
//      { date: "18/08/2021 (2)", pdf: "/misc/spkgrant180821_2.pdf" },
//      { date: "18/08/2021 (3)", pdf: "/misc/spkgrant180821_3.pdf" },
//      { date: "01/09/2021", pdf: "/misc/spkgrant010921.pdf" },
//      { date: "08/09/2021", pdf: "/misc/spkgrant080921.pdf" },
//      { date: "17/09/2021 (1)", pdf: "/misc/spkgrant170921_1.pdf" },
//      { date: "17/09/2021 (2)", pdf: "/misc/spkgrant170921_2.pdf" },
//      { date: "22/09/2021", pdf: "/misc/spkgrant220921.pdf" },
//      { date: "11/10/2021", pdf: "/misc/spkgrant111021.pdf" },
//      { date: "12/10/2021 (1)", pdf: "/misc/spkgrant121021_1.pdf" },
//      { date: "12/10/2021 (2)", pdf: "/misc/spkgrant121021_2.pdf" },
//      { date: "28/10/2021", pdf: "/misc/spkgrant281021.pdf" },
//      { date: "10/11/2021", pdf: "/misc/spkgrant101121.pdf" },
//      { date: "12/11/2021 (1-4)", pdf: "/misc/spkgrant121121.pdf" },
//      { date: "16/11/2021 (1-3)", pdf: "/misc/spkgrant161121.pdf" },
//      { date: "23/11/2021", pdf: "/misc/spkgrant231121.pdf" },
//      { date: "25/11/2021", pdf: "/misc/spkgrant251121.pdf" },
//      { date: "30/11/2021", pdf: "/misc/spkgrant301121.pdf" },
//      { date: "02/12/2021 (1-3)", pdf: "/misc/spkgrant021221.pdf" },
//      { date: "08/12/2021", pdf: "/misc/spkgrant081221.pdf" },
//      { date: "29/12/2021 (1-2)", pdf: "/misc/spkgrant291221.pdf" },
//      { date: "04/01/2022 (1-2)", pdf: "/misc/spkgrant040122.pdf" },
//      { date: "06/01/2022", pdf: "/misc/spkgrant060122.pdf" },
//      { date: "11/01/2022", pdf: "/misc/spkgrant110122.pdf" },
//      { date: "20/01/2022", pdf: "/misc/spkgrant200122.pdf" },
//      { date: "07/02/2022", pdf: "/misc/spkgrant070222.pdf" },
//      { date: "09/02/2022", pdf: "/misc/spkgrant090222.pdf" },
//      { date: "18/02/2022", pdf: "/misc/spkgrant180222.pdf" },
//      { date: "18/04/2022", pdf: "/misc/spkgrant180422.pdf" },
//      { date: "25/04/2022", pdf: "/misc/spkgrant250422.pdf" },
//      { date: "26/04/2022 (1-4)", pdf: "/misc/spkgrant260422.pdf" },
//      { date: "27/04/2022 (1-3)", pdf: "/misc/spkgrant270422.pdf" },
//      { date: "06/05/2022", pdf: "/misc/spkgrant060522.pdf" },
//      { date: "11/05/2022 (1-4)", pdf: "/misc/spkgrant110522.pdf" },
//      { date: "12/05/2022 (1-6)", pdf: "/misc/spkgrant120522.pdf" },
//      { date: "20/05/2022", pdf: "/misc/spkgrant200522.pdf" },
//      { date: "23/05/2022", pdf: "/misc/spkgrant230522.pdf" },
//      { date: "26/05/2022", pdf: "/misc/spkgrant260522.pdf" },
//      { date: "27/05/2022", pdf: "/misc/spkgrant270522.pdf" },
//      { date: "31/05/2022", pdf: "/misc/spkgrant310522.pdf" },
//      { date: "16/06/2022 (1-3)", pdf: "/misc/spkgrant160622.pdf" },
//      { date: "21/06/2022", pdf: "/misc/spkgrant210622.pdf" },
//      { date: "22/06/2022 (1-3)", pdf: "/misc/spkgrant220622.pdf" },
//      { date: "24/06/2022 (1-3)", pdf: "/misc/spkgrant240622.pdf" },
//      { date: "14/07/2022 (1-2)", pdf: "/misc/spkgrant140722.pdf" },
//      { date: "21/07/2022", pdf: "/misc/spkgrant210722.pdf" },
//      { date: "22/07/2022", pdf: "/misc/spkgrant220722.pdf" },
//      { date: "25/07/2022", pdf: "/misc/spkgrant250722.pdf" },
//      { date: "26/07/2022 (1-3)", pdf: "/misc/spkgrant260722.pdf" },
//      { date: "01/08/2022", pdf: "/misc/spkgrant010822.pdf" },
//      { date: "04/08/2022", pdf: "/misc/spkgrant040822.pdf" },
//      { date: "10/08/2022", pdf: "/misc/spkgrant100822.pdf" },
//      { date: "17/08/2022", pdf: "/misc/spkgrant170822.pdf" },
//      { date: "28/09/2022", pdf: "/misc/spkgrant280922.pdf" },
//      { date: "30/09/2022", pdf: "/misc/spkgrant300922.pdf" },
//      { date: "11/10/2022", pdf: "/misc/spkgrant111022.pdf" },
//      { date: "26/10/2022", pdf: "/misc/spkgrant261022.pdf" },
//      { date: "10/11/2022", pdf: "/misc/spkgrant101122.pdf" },
//      { date: "14/11/2022", pdf: "/misc/spkgrant141122.pdf" },
//      { date: "08/12/2022", pdf: "/misc/spkgrant081222.pdf" },
//      { date: "17/02/2023", pdf: "/misc/spkgrant170223.pdf" },
//      { date: "24/04/2023", pdf: "/misc/spkgrant240423.pdf" },
//      { date: "26/04/2023", pdf: "/misc/spkgrant260423.pdf" },
//      { date: "01/05/2023 (1-2)", pdf: "/misc/spkgrant010523.pdf" },
//      { date: "11/05/2023", pdf: "/misc/spkgrant110523.pdf" },
//      { date: "16/05/2023", pdf: "/misc/spkgrant160523.pdf" },
//      { date: "26/05/2023", pdf: "/misc/spkgrant260523.pdf" },
//      { date: "29/05/2023", pdf: "/misc/spkgrant290523.pdf" },
//      { date: "02/06/2023", pdf: "/misc/spkgrant020623.pdf" },
//      { date: "15/06/2023", pdf: "/misc/spkgrant150623.pdf" },
//      { date: "21/06/2023", pdf: "/misc/spkgrant210623.pdf" },
//      { date: "03/07/2023", pdf: "/misc/spkgrant030723.pdf" },
//      { date: "06/07/2023", pdf: "/misc/spkgrant060723.pdf" },
//      { date: "12/07/2023", pdf: "/misc/spkgrant120723.pdf" },
//      { date: "20/07/2023", pdf: "/misc/spkgrant200723.pdf" },
//      { date: "21/07/2023", pdf: "/misc/spkgrant210723.pdf" },
//      { date: "26/07/2023", pdf: "/misc/spkgrant260723.pdf" },
//      { date: "28/07/2023", pdf: "/misc/spkgrant280723.pdf" },
//      { date: "03/08/2023", pdf: "/misc/spkgrant030823.pdf" },
//      { date: "04/08/2023", pdf: "/misc/spkgrant040823.pdf" },
//      { date: "09/08/2023", pdf: "/misc/spkgrant090823.pdf" },
//      { date: "24/08/2023 (1-2)", pdf: "/misc/spkgrant240823.pdf" },
//      { date: "25/08/2023", pdf: "/misc/spkgrant250823.pdf" },
//      { date: "01/09/2023", pdf: "/misc/spkgrant010923.pdf" },
//      { date: "05/09/2023", pdf: "/misc/spkgrant050923.pdf" },
//      { date: "12/09/2023", pdf: "/misc/spkgrant120923.pdf" },
//      { date: "21/09/2023", pdf: "/misc/spkgrant210923.pdf" },
//      { date: "05/10/2023 (1-11)", pdf: "/misc/spkgrant051023.pdf" },
//    ];

//    // ✅ मान. सामयिक अध्यक्ष
//   const samayikData = [
//      { date: "22/12/2020", pdf: "/misc/actgrant221220.pdf" },
//      { date: "20/01/2021", pdf: "/misc/actgrant200121.pdf" },
//      { date: "10/02/2021", pdf: "/misc/actgrant100221.pdf" },
//    ];
//    // ✅ मान. उपाध्यक्ष (No Entries)
//   const upadhyakshData = [];

//   //✅ मान. नेता प्रतिपक्ष
// const netaData = [
//   { date: "17/12/2020", pdf: "/misc/lopgrant171220.pdf" },
//   { date: "02/01/2021", pdf: "/misc/lopgrant020121.pdf" },
//    { date: "23/01/2021", pdf: "/misc/lopgrant230121.pdf" },
//    { date: "22/02/2021", pdf: "/misc/lopgrant220221.pdf" },
//    { date: "05/03/2021", pdf: "/misc/lopgrant050321.pdf" },
//    { date: "22/03/2021", pdf: "/misc/lopgrant220321.pdf" },
//    { date: "23/03/2021 (1)", pdf: "/misc/lopgrant230321(1).pdf" },
//    { date: "23/03/2021 (2)", pdf: "/misc/lopgrant230321(2).pdf" },
//    { date: "27/03/2021", pdf: "/misc/lopgrant270321.pdf" },
//    { date: "21/05/2021", pdf: "/misc/lopgrant210521.pdf" },
//    { date: "02/06/2021", pdf: "/misc/lopgrant020621.pdf" },
//    { date: "04/06/2021", pdf: "/misc/lopgrant040621.pdf" },
//    { date: "11/06/2021", pdf: "/misc/lopgrant110621.pdf" },
//    { date: "18/06/2021", pdf: "/misc/lopgrant180621.pdf" },
//    { date: "23/06/2021", pdf: "/misc/lopgrant230621.pdf" },
//    { date: "07/07/2021", pdf: "/misc/lopgrant070721.pdf" },
//    { date: "13/07/2021", pdf: "/misc/lopgrant130721.pdf" },
//    { date: "02/08/2021", pdf: "/misc/lopgrant020821.pdf" },
//    { date: "04/08/2021", pdf: "/misc/lopgrant040821.pdf" },
//    { date: "09/08/2021", pdf: "/misc/lopgrant090821.pdf" },
//    { date: "12/08/2021", pdf: "/misc/lopgrant120821.pdf" },
//    { date: "25/08/2021", pdf: "/misc/lopgrant250821.pdf" },
//    { date: "02/09/2021", pdf: "/misc/lopgrant020921.pdf" },
//    { date: "14/09/2021", pdf: "/misc/lopgrant140921.pdf" },
//    { date: "17/09/2021", pdf: "/misc/lopgrant170921.pdf" },
//    { date: "05/10/2021", pdf: "/misc/lopgrant051021.pdf" },
//    { date: "11/10/2021", pdf: "/misc/lopgrant111021.pdf" },
//    { date: "26/10/2021", pdf: "/misc/lopgrant261021.pdf" },
//    { date: "24/11/2021", pdf: "/misc/lopgrant241121.pdf" },
//    { date: "09/12/2021", pdf: "/misc/lopgrant091221.pdf" },
//    { date: "29/12/2021", pdf: "/misc/lopgrant291221.pdf" },
//    { date: "04/01/2022", pdf: "/misc/lopgrant040122.pdf" },
//    { date: "14/01/2022", pdf: "/misc/lopgrant140122.pdf" },
//    { date: "24/01/2022", pdf: "/misc/lopgrant240122.pdf" },
//    { date: "02/02/2022", pdf: "/misc/lopgrant020222.pdf" },
//    { date: "22/02/2022", pdf: "/misc/lopgrant220222.pdf" },
//    { date: "25/02/2022", pdf: "/misc/lopgrant250222.pdf" },
//    { date: "16/03/2022", pdf: "/misc/lopgrant160322.pdf" },
//    { date: "21/03/2022", pdf: "/misc/lopgrant210322.pdf" },
//    { date: "24/03/2022", pdf: "/misc/lopgrant240322.pdf" },
//    { date: "19/04/2022", pdf: "/misc/lopgrant190422.pdf" },
//    { date: "06/05/2022 (1-2)", pdf: "/misc/lopgrant060522(1-2).pdf" },
//    { date: "17/05/2022", pdf: "/misc/lopgrant170522.pdf" },
//    { date: "24/05/2022", pdf: "/misc/lopgrant240522.pdf" },
//    { date: "21/07/2022 (1-2)", pdf: "/misc/lopgrant210722(1-2).pdf" },
//    { date: "04/08/2022", pdf: "/misc/lopgrant040822.pdf" },
//    { date: "08/08/2022", pdf: "/misc/lopgrant080822.pdf" },
//    { date: "16/08/2022", pdf: "/misc/lopgrant160822.pdf" },
//    { date: "18/08/2022", pdf: "/misc/lopgrant180822.pdf" },
//    { date: "24/08/2022", pdf: "/misc/lopgrant240822.pdf" },
//    { date: "26/09/2022", pdf: "/misc/lopgrant260922.pdf" },
//    { date: "06/10/2022", pdf: "/misc/lopgrant061022.pdf" },
//    { date: "10/10/2022", pdf: "/misc/lopgrant101022.pdf" },
//    { date: "12/10/2022", pdf: "/misc/lopgrant121022.pdf" },
//    { date: "17/10/2022 (1-2)", pdf: "/misc/lopgrant171022(1-2).pdf" },
//    { date: "09/11/2022", pdf: "/misc/lopgrant091122.pdf" },
//    { date: "16/11/2022", pdf: "/misc/lopgrant161122.pdf" },
//    { date: "23/11/2022 (1-2)", pdf: "/misc/lopgrant231122(1-2).pdf" },
//    { date: "24/11/2022", pdf: "/misc/lopgrant241122.pdf" },
//    { date: "05/12/2022", pdf: "/misc/lopgrant051222.pdf" },
//    { date: "09/01/2023", pdf: "/misc/lopgrant090123.pdf" },
//    { date: "16/01/2023", pdf: "/misc/lopgrant160123.pdf" },
//    { date: "25/01/2023 (1-2)", pdf: "/misc/lopgrant250123(1-2).pdf" },
//    { date: "08/02/2023", pdf: "/misc/lopgrant080223.pdf" },
//    { date: "14/02/2023", pdf: "/misc/lopgrant140223.pdf" },
//    { date: "26/02/2023", pdf: "/misc/lopgrant260223.pdf" },
//    { date: "09/03/2023", pdf: "/misc/lopgrant090323.pdf" },
//    { date: "24/03/2023", pdf: "/misc/lopgrant240323.pdf" },
//    { date: "27/04/2023", pdf: "/misc/lopgrant270423.pdf" },
//    { date: "09/05/2023", pdf: "/misc/lopgrant090523.pdf" },
//    { date: "16/05/2023", pdf: "/misc/lopgrant160523.pdf" },
//    { date: "29/05/2023", pdf: "/misc/lopgrant290523.pdf" },
//    { date: "14/06/2023", pdf: "/misc/lopgrant140623.pdf" },
//    { date: "03/07/2023", pdf: "/misc/lopgrant030723.pdf" },
//    { date: "09/07/2023", pdf: "/misc/lopgrant090723.pdf" },
//    { date: "19/07/2023", pdf: "/misc/lopgrant190723.pdf" },
//    { date: "31/07/2023", pdf: "/misc/lopgrant310723.pdf" },
//    { date: "07/08/2023", pdf: "/misc/lopgrant070823.pdf" },
//    { date: "11/08/2023", pdf: "/misc/lopgrant110823.pdf" },
//    { date: "24/08/2023", pdf: "/misc/lopgrant240823.pdf" },
//    { date: "25/08/2023", pdf: "/misc/lopgrant250823.pdf" },
//    { date: "06/09/2023", pdf: "/misc/lopgrant060923.pdf" },
//    { date: "12/09/2023", pdf: "/misc/lopgrant120923.pdf" },
//    { date: "21/09/2023", pdf: "/misc/lopgrant210923.pdf" },
//    { date: "05/10/2023 (1-2)", pdf: "/misc/lopgrant051023(1-2).pdf" },
//    { date: "09/10/2023", pdf: "/misc/lopgrant091023.pdf" },
//  ];

//   const openPdf = (pdf) => {
//     window.open(pdf, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div className="comm-page">

//       {/* ⭐ HERO WITH BACK BUTTON */}
//       <div className="comm-hero" style={{ position: "relative" }}>
//         <button
//           onClick={() => navigate("/grant-list")}
//           className="btn btn-outline-light btn-sm"
//           style={{ position: "absolute", right: "20px", top: "20px", borderRadius: "6px", fontWeight: "500" }}
//         >
//           ← Back
//         </button>
//         <div className="comm-hero-content">
//           <h1>स्वेच्छानुदान (पंचदश विधान सभा)</h1>
//           <p>पंचदश विधान सभा के स्वेच्छा अनुदान की सूची</p>
//         </div>
//       </div>

//       <div className="container mt-3">

//         {/* मान. अध्यक्ष */}
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
//             <tbody>
//               {adhyakshData.map((item, index) => (
//                 <tr key={index}>
//                   <td className="text-center">{index + 1}</td>
//                   <td>
//                     <a
//                       href={item.pdf}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="pdf-link"
//                       style={{ color: "#0056b3", fontWeight: "500", textDecoration: "none", cursor: "pointer" }}
//                     >
//                       {item.date}
//                     </a>
//                   </td>
//                   <td></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* मान. सामयिक अध्यक्ष */}
// <h5 className="mt-4 section-title">मान. सामयिक अध्यक्ष</h5>
// <div className="table-responsive">
//   <table className="table align-middle table-bordered table-striped">
//     <thead className="text-center table-primary">
//       <tr>
//         <th style={{ width: "10%" }}>क्रमांक</th>
//         <th>दिनांक</th>
//         <th>टिप्पणी</th>
//       </tr>
//     </thead>
//     <tbody>
//       {samayikData.map((item, index) => (
//         <tr key={index}>
//           <td className="text-center">{index + 1}</td>
//           <td>
//             <a
//               href={item.pdf}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="pdf-link"
//               style={{ color: "#0056b3", fontWeight: "500", textDecoration: "none", cursor: "pointer" }}
//             >
//               {item.date}
//             </a>
//           </td>
//           <td></td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>


//         {/* मान. उपाध्यक्ष */}
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
//                 upadhyakshData.map((item, index) => (
//                   <tr key={index}>
//                     <td className="text-center">{index + 1}</td>
//                     <td>
//                       <a
//                         href={item.pdf}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="pdf-link"
//                         style={{ color: "#0056b3", fontWeight: "500", textDecoration: "none", cursor: "pointer" }}
//                       >
//                         {item.date}
//                       </a>
//                     </td>
//                     <td></td>
//                   </tr>
//                 ))
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

//         {/* मान. नेता प्रतिपक्ष */}
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
//             <tbody>
//               {netaData.map((item, index) => (
//                 <tr key={index}>
//                   <td className="text-center">{index + 1}</td>
//                   <td>
//                     <a
//                       href={item.pdf}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="pdf-link"
//                       style={{ color: "#0056b3", fontWeight: "500", textDecoration: "none", cursor: "pointer" }}
//                     >
//                       {item.date}
//                     </a>
//                   </td>
//                   <td></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <p className="mt-3 note" style={{ fontStyle: "italic", color: "#555" }}>
//           टिप्पणी - सभी तिथियाँ पंचदश विधान सभा के सत्र अनुसार दी गई हैं।
//         </p>

//       </div>
//     </div>
//   );
// };

// export default SvecchAnudan15;


import React from "react";
import { useNavigate } from "react-router-dom";

const SvecchAnudan15 = () => {
  const navigate = useNavigate();

  // ✅ मान. अध्यक्ष
  const adhyakshData = [
      { date: "03/03/2021 (1)", pdf: "/misc/spkgrant030321_1.pdf" },
      { date: "03/03/2021 (2)", pdf: "/misc/spkgrant030321_2.pdf" },
      { date: "05/03/2021", pdf: "/misc/spkgrant050321.pdf" },
      { date: "10/03/2021", pdf: "/misc/spkgrant100321.pdf" },
      { date: "16/04/2021 (1)", pdf: "/misc/spkgrant160421_1.pdf" },
      { date: "16/04/2021 (2)", pdf: "/misc/spkgrant160421_2.pdf" },
      { date: "05/05/2021 (1)", pdf: "/misc/spkgrant050521_1.pdf" },
      { date: "05/05/2021 (2)", pdf: "/misc/spkgrant050521_2.pdf" },
      { date: "05/05/2021 (3)", pdf: "/misc/spkgrant050521_3.pdf" },
      { date: "05/05/2021 (4)", pdf: "/misc/spkgrant050521_4.pdf" },
      { date: "17/05/2021", pdf: "/misc/spkgrant170521.pdf" },
      { date: "21/05/2021", pdf: "/misc/spkgrant210521.pdf" },
      { date: "22/05/2021", pdf: "/misc/spkgrant220521.pdf" },
      { date: "31/05/2021 (1)", pdf: "/misc/spkgrant310521_1.pdf" },
      { date: "31/05/2021 (2)", pdf: "/misc/spkgrant310521_2.pdf" },
      { date: "02/06/2021", pdf: "/misc/spkgrant020621.pdf" },
      { date: "16/06/2021", pdf: "/misc/spkgrant160621.pdf" },
      { date: "24/06/2021", pdf: "/misc/spkgrant240621.pdf" },
      { date: "08/07/2021 (1)", pdf: "/misc/spkgrant080721_1.pdf" },
      { date: "08/07/2021 (2)", pdf: "/misc/spkgrant080721_2.pdf" },
      { date: "28/07/2021", pdf: "/misc/spkgrant280721.pdf" },
      { date: "04/08/2021", pdf: "/misc/spkgrant040821.pdf" },
      { date: "18/08/2021 (1)", pdf: "/misc/spkgrant180821_1.pdf" },
      { date: "18/08/2021 (2)", pdf: "/misc/spkgrant180821_2.pdf" },
      { date: "18/08/2021 (3)", pdf: "/misc/spkgrant180821_3.pdf" },
      { date: "01/09/2021", pdf: "/misc/spkgrant010921.pdf" },
      { date: "08/09/2021", pdf: "/misc/spkgrant080921.pdf" },
      { date: "17/09/2021 (1)", pdf: "/misc/spkgrant170921_1.pdf" },
      { date: "17/09/2021 (2)", pdf: "/misc/spkgrant170921_2.pdf" },
      { date: "22/09/2021", pdf: "/misc/spkgrant220921.pdf" },
      { date: "11/10/2021", pdf: "/misc/spkgrant111021.pdf" },
      { date: "12/10/2021 (1)", pdf: "/misc/spkgrant121021_1.pdf" },
      { date: "12/10/2021 (2)", pdf: "/misc/spkgrant121021_2.pdf" },
      { date: "28/10/2021", pdf: "/misc/spkgrant281021.pdf" },
      { date: "10/11/2021", pdf: "/misc/spkgrant101121.pdf" },
      { date: "12/11/2021 (1-4)", pdf: "/misc/spkgrant121121.pdf" },
      { date: "16/11/2021 (1-3)", pdf: "/misc/spkgrant161121.pdf" },
      { date: "23/11/2021", pdf: "/misc/spkgrant231121.pdf" },
      { date: "25/11/2021", pdf: "/misc/spkgrant251121.pdf" },
      { date: "30/11/2021", pdf: "/misc/spkgrant301121.pdf" },
      { date: "02/12/2021 (1-3)", pdf: "/misc/spkgrant021221.pdf" },
      { date: "08/12/2021", pdf: "/misc/spkgrant081221.pdf" },
      { date: "29/12/2021 (1-2)", pdf: "/misc/spkgrant291221.pdf" },
      { date: "04/01/2022 (1-2)", pdf: "/misc/spkgrant040122.pdf" },
      { date: "06/01/2022", pdf: "/misc/spkgrant060122.pdf" },
      { date: "11/01/2022", pdf: "/misc/spkgrant110122.pdf" },
      { date: "20/01/2022", pdf: "/misc/spkgrant200122.pdf" },
      { date: "07/02/2022", pdf: "/misc/spkgrant070222.pdf" },
      { date: "09/02/2022", pdf: "/misc/spkgrant090222.pdf" },
      { date: "18/02/2022", pdf: "/misc/spkgrant180222.pdf" },
      { date: "18/04/2022", pdf: "/misc/spkgrant180422.pdf" },
      { date: "25/04/2022", pdf: "/misc/spkgrant250422.pdf" },
      { date: "26/04/2022 (1-4)", pdf: "/misc/spkgrant260422.pdf" },
      { date: "27/04/2022 (1-3)", pdf: "/misc/spkgrant270422.pdf" },
      { date: "06/05/2022", pdf: "/misc/spkgrant060522.pdf" },
      { date: "11/05/2022 (1-4)", pdf: "/misc/spkgrant110522.pdf" },
      { date: "12/05/2022 (1-6)", pdf: "/misc/spkgrant120522.pdf" },
      { date: "20/05/2022", pdf: "/misc/spkgrant200522.pdf" },
      { date: "23/05/2022", pdf: "/misc/spkgrant230522.pdf" },
      { date: "26/05/2022", pdf: "/misc/spkgrant260522.pdf" },
      { date: "27/05/2022", pdf: "/misc/spkgrant270522.pdf" },
      { date: "31/05/2022", pdf: "/misc/spkgrant310522.pdf" },
      { date: "16/06/2022 (1-3)", pdf: "/misc/spkgrant160622.pdf" },
      { date: "21/06/2022", pdf: "/misc/spkgrant210622.pdf" },
      { date: "22/06/2022 (1-3)", pdf: "/misc/spkgrant220622.pdf" },
      { date: "24/06/2022 (1-3)", pdf: "/misc/spkgrant240622.pdf" },
      { date: "14/07/2022 (1-2)", pdf: "/misc/spkgrant140722.pdf" },
      { date: "21/07/2022", pdf: "/misc/spkgrant210722.pdf" },
      { date: "22/07/2022", pdf: "/misc/spkgrant220722.pdf" },
      { date: "25/07/2022", pdf: "/misc/spkgrant250722.pdf" },
      { date: "26/07/2022 (1-3)", pdf: "/misc/spkgrant260722.pdf" },
      { date: "01/08/2022", pdf: "/misc/spkgrant010822.pdf" },
      { date: "04/08/2022", pdf: "/misc/spkgrant040822.pdf" },
      { date: "10/08/2022", pdf: "/misc/spkgrant100822.pdf" },
      { date: "17/08/2022", pdf: "/misc/spkgrant170822.pdf" },
      { date: "28/09/2022", pdf: "/misc/spkgrant280922.pdf" },
      { date: "30/09/2022", pdf: "/misc/spkgrant300922.pdf" },
      { date: "11/10/2022", pdf: "/misc/spkgrant111022.pdf" },
      { date: "26/10/2022", pdf: "/misc/spkgrant261022.pdf" },
      { date: "10/11/2022", pdf: "/misc/spkgrant101122.pdf" },
      { date: "14/11/2022", pdf: "/misc/spkgrant141122.pdf" },
      { date: "08/12/2022", pdf: "/misc/spkgrant081222.pdf" },
      { date: "17/02/2023", pdf: "/misc/spkgrant170223.pdf" },
      { date: "24/04/2023", pdf: "/misc/spkgrant240423.pdf" },
      { date: "26/04/2023", pdf: "/misc/spkgrant260423.pdf" },
      { date: "01/05/2023 (1-2)", pdf: "/misc/spkgrant010523.pdf" },
      { date: "11/05/2023", pdf: "/misc/spkgrant110523.pdf" },
      { date: "16/05/2023", pdf: "/misc/spkgrant160523.pdf" },
      { date: "26/05/2023", pdf: "/misc/spkgrant260523.pdf" },
      { date: "29/05/2023", pdf: "/misc/spkgrant290523.pdf" },
      { date: "02/06/2023", pdf: "/misc/spkgrant020623.pdf" },
      { date: "15/06/2023", pdf: "/misc/spkgrant150623.pdf" },
      { date: "21/06/2023", pdf: "/misc/spkgrant210623.pdf" },
      { date: "03/07/2023", pdf: "/misc/spkgrant030723.pdf" },
      { date: "06/07/2023", pdf: "/misc/spkgrant060723.pdf" },
      { date: "12/07/2023", pdf: "/misc/spkgrant120723.pdf" },
      { date: "20/07/2023", pdf: "/misc/spkgrant200723.pdf" },
      { date: "21/07/2023", pdf: "/misc/spkgrant210723.pdf" },
      { date: "26/07/2023", pdf: "/misc/spkgrant260723.pdf" },
      { date: "28/07/2023", pdf: "/misc/spkgrant280723.pdf" },
      { date: "03/08/2023", pdf: "/misc/spkgrant030823.pdf" },
      { date: "04/08/2023", pdf: "/misc/spkgrant040823.pdf" },
      { date: "09/08/2023", pdf: "/misc/spkgrant090823.pdf" },
      { date: "24/08/2023 (1-2)", pdf: "/misc/spkgrant240823.pdf" },
      { date: "25/08/2023", pdf: "/misc/spkgrant250823.pdf" },
      { date: "01/09/2023", pdf: "/misc/spkgrant010923.pdf" },
      { date: "05/09/2023", pdf: "/misc/spkgrant050923.pdf" },
      { date: "12/09/2023", pdf: "/misc/spkgrant120923.pdf" },
      { date: "21/09/2023", pdf: "/misc/spkgrant210923.pdf" },
      { date: "05/10/2023 (1-11)", pdf: "/misc/spkgrant051023.pdf" },
    ];

    // ✅ मान. सामयिक अध्यक्ष
   const samayikData = [
      { date: "22/12/2020", pdf: "/misc/actgrant221220.pdf" },
      { date: "20/01/2021", pdf: "/misc/actgrant200121.pdf" },
      { date: "10/02/2021", pdf: "/misc/actgrant100221.pdf" },
    ];
    // ✅ मान. उपाध्यक्ष (No Entries)
   const upadhyakshData = [];

   //✅ मान. नेता प्रतिपक्ष
 const netaData = [
   { date: "17/12/2020", pdf: "/misc/lopgrant171220.pdf" },
   { date: "02/01/2021", pdf: "/misc/lopgrant020121.pdf" },
    { date: "23/01/2021", pdf: "/misc/lopgrant230121.pdf" },
    { date: "22/02/2021", pdf: "/misc/lopgrant220221.pdf" },
    { date: "05/03/2021", pdf: "/misc/lopgrant050321.pdf" },
    { date: "22/03/2021", pdf: "/misc/lopgrant220321.pdf" },
    { date: "23/03/2021 (1)", pdf: "/misc/lopgrant230321(1).pdf" },
    { date: "23/03/2021 (2)", pdf: "/misc/lopgrant230321(2).pdf" },
    { date: "27/03/2021", pdf: "/misc/lopgrant270321.pdf" },
    { date: "21/05/2021", pdf: "/misc/lopgrant210521.pdf" },
    { date: "02/06/2021", pdf: "/misc/lopgrant020621.pdf" },
    { date: "04/06/2021", pdf: "/misc/lopgrant040621.pdf" },
    { date: "11/06/2021", pdf: "/misc/lopgrant110621.pdf" },
    { date: "18/06/2021", pdf: "/misc/lopgrant180621.pdf" },
    { date: "23/06/2021", pdf: "/misc/lopgrant230621.pdf" },
    { date: "07/07/2021", pdf: "/misc/lopgrant070721.pdf" },
    { date: "13/07/2021", pdf: "/misc/lopgrant130721.pdf" },
    { date: "02/08/2021", pdf: "/misc/lopgrant020821.pdf" },
    { date: "04/08/2021", pdf: "/misc/lopgrant040821.pdf" },
    { date: "09/08/2021", pdf: "/misc/lopgrant090821.pdf" },
    { date: "12/08/2021", pdf: "/misc/lopgrant120821.pdf" },
    { date: "25/08/2021", pdf: "/misc/lopgrant250821.pdf" },
    { date: "02/09/2021", pdf: "/misc/lopgrant020921.pdf" },
    { date: "14/09/2021", pdf: "/misc/lopgrant140921.pdf" },
    { date: "17/09/2021", pdf: "/misc/lopgrant170921.pdf" },
    { date: "05/10/2021", pdf: "/misc/lopgrant051021.pdf" },
    { date: "11/10/2021", pdf: "/misc/lopgrant111021.pdf" },
    { date: "26/10/2021", pdf: "/misc/lopgrant261021.pdf" },
    { date: "24/11/2021", pdf: "/misc/lopgrant241121.pdf" },
    { date: "09/12/2021", pdf: "/misc/lopgrant091221.pdf" },
    { date: "29/12/2021", pdf: "/misc/lopgrant291221.pdf" },
    { date: "04/01/2022", pdf: "/misc/lopgrant040122.pdf" },
    { date: "14/01/2022", pdf: "/misc/lopgrant140122.pdf" },
    { date: "24/01/2022", pdf: "/misc/lopgrant240122.pdf" },
    { date: "02/02/2022", pdf: "/misc/lopgrant020222.pdf" },
    { date: "22/02/2022", pdf: "/misc/lopgrant220222.pdf" },
    { date: "25/02/2022", pdf: "/misc/lopgrant250222.pdf" },
    { date: "16/03/2022", pdf: "/misc/lopgrant160322.pdf" },
    { date: "21/03/2022", pdf: "/misc/lopgrant210322.pdf" },
    { date: "24/03/2022", pdf: "/misc/lopgrant240322.pdf" },
    { date: "19/04/2022", pdf: "/misc/lopgrant190422.pdf" },
    { date: "06/05/2022 (1-2)", pdf: "/misc/lopgrant060522(1-2).pdf" },
    { date: "17/05/2022", pdf: "/misc/lopgrant170522.pdf" },
    { date: "24/05/2022", pdf: "/misc/lopgrant240522.pdf" },
    { date: "21/07/2022 (1-2)", pdf: "/misc/lopgrant210722(1-2).pdf" },
    { date: "04/08/2022", pdf: "/misc/lopgrant040822.pdf" },
    { date: "08/08/2022", pdf: "/misc/lopgrant080822.pdf" },
    { date: "16/08/2022", pdf: "/misc/lopgrant160822.pdf" },
    { date: "18/08/2022", pdf: "/misc/lopgrant180822.pdf" },
    { date: "24/08/2022", pdf: "/misc/lopgrant240822.pdf" },
    { date: "26/09/2022", pdf: "/misc/lopgrant260922.pdf" },
    { date: "06/10/2022", pdf: "/misc/lopgrant061022.pdf" },
    { date: "10/10/2022", pdf: "/misc/lopgrant101022.pdf" },
    { date: "12/10/2022", pdf: "/misc/lopgrant121022.pdf" },
    { date: "17/10/2022 (1-2)", pdf: "/misc/lopgrant171022(1-2).pdf" },
    { date: "09/11/2022", pdf: "/misc/lopgrant091122.pdf" },
    { date: "16/11/2022", pdf: "/misc/lopgrant161122.pdf" },
    { date: "23/11/2022 (1-2)", pdf: "/misc/lopgrant231122(1-2).pdf" },
    { date: "24/11/2022", pdf: "/misc/lopgrant241122.pdf" },
    { date: "05/12/2022", pdf: "/misc/lopgrant051222.pdf" },
    { date: "09/01/2023", pdf: "/misc/lopgrant090123.pdf" },
    { date: "16/01/2023", pdf: "/misc/lopgrant160123.pdf" },
    { date: "25/01/2023 (1-2)", pdf: "/misc/lopgrant250123(1-2).pdf" },
    { date: "08/02/2023", pdf: "/misc/lopgrant080223.pdf" },
    { date: "14/02/2023", pdf: "/misc/lopgrant140223.pdf" },
    { date: "26/02/2023", pdf: "/misc/lopgrant260223.pdf" },
    { date: "09/03/2023", pdf: "/misc/lopgrant090323.pdf" },
    { date: "24/03/2023", pdf: "/misc/lopgrant240323.pdf" },
    { date: "27/04/2023", pdf: "/misc/lopgrant270423.pdf" },
    { date: "09/05/2023", pdf: "/misc/lopgrant090523.pdf" },
    { date: "16/05/2023", pdf: "/misc/lopgrant160523.pdf" },
    { date: "29/05/2023", pdf: "/misc/lopgrant290523.pdf" },
    { date: "14/06/2023", pdf: "/misc/lopgrant140623.pdf" },
    { date: "03/07/2023", pdf: "/misc/lopgrant030723.pdf" },
    { date: "09/07/2023", pdf: "/misc/lopgrant090723.pdf" },
    { date: "19/07/2023", pdf: "/misc/lopgrant190723.pdf" },
    { date: "31/07/2023", pdf: "/misc/lopgrant310723.pdf" },
    { date: "07/08/2023", pdf: "/misc/lopgrant070823.pdf" },
    { date: "11/08/2023", pdf: "/misc/lopgrant110823.pdf" },
    { date: "24/08/2023", pdf: "/misc/lopgrant240823.pdf" },
    { date: "25/08/2023", pdf: "/misc/lopgrant250823.pdf" },
    { date: "06/09/2023", pdf: "/misc/lopgrant060923.pdf" },
    { date: "12/09/2023", pdf: "/misc/lopgrant120923.pdf" },
    { date: "21/09/2023", pdf: "/misc/lopgrant210923.pdf" },
    { date: "05/10/2023 (1-2)", pdf: "/misc/lopgrant051023(1-2).pdf" },
    { date: "09/10/2023", pdf: "/misc/lopgrant091023.pdf" },
  ];

  const openPdf = (pdf) => {
    window.open(pdf, "_blank", "noopener,noreferrer");
  };

  const renderTable = (data) =>
    data.length > 0 ? (
      data.map((item, index) => (
        <tr key={index}>
          <td className="text-center">{index + 1}</td>
          <td
            className="text-center"
            style={{ color: "#0056b3", cursor: "pointer", textDecoration: "underline" }}
            onClick={() => openPdf(item.pdf)}
          >
            {item.date}
          </td>
          <td></td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="3" className="text-center text-muted">
          कोई प्रविष्टि उपलब्ध नहीं है
        </td>
      </tr>
    );

  return (
    <div className="comm-page">

      {/* HERO */}
      <div className="comm-hero" style={{ position: "relative" }}>
        <button
          onClick={() => navigate("/grant-list")}
          className="btn btn-outline-light btn-sm"
          style={{ position: "absolute", right: "20px", top: "20px", borderRadius: "6px", fontWeight: "500" }}
        >
          ← Back
        </button>
        <div className="comm-hero-content">
          <h1>स्वेच्छानुदान (पंचदश विधान सभा)</h1>
          <p>पंचदश विधान सभा के स्वेच्छा अनुदान की सूची</p>
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

        {/* मान. सामयिक अध्यक्ष */}
        <h5 className="mt-4 section-title">मान. सामयिक अध्यक्ष</h5>
        <div className="table-responsive">
          <table className="table mb-2 align-middle table-bordered table-striped">
            <thead className="text-center table-primary">
              <tr>
                <th style={{ width: "10%" }}>क्रमांक</th>
                <th>दिनांक</th>
                <th>टिप्पणी</th>
              </tr>
            </thead>
            <tbody>{renderTable(samayikData)}</tbody>
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
            <tbody>{renderTable(upadhyakshData)}</tbody>
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
          टिप्पणी - सभी तिथियाँ पंचदश विधान सभा के सत्र अनुसार दी गई हैं।
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

export default SvecchAnudan15;
