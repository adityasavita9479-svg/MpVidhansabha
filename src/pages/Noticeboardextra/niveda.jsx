// import React from "react";
// import { useNavigate } from "react-router-dom";

// const tenders = [
//   { no: 29, date: "19/09/2025", subject: "NICSI/MSP for NEVA-MP Vidhan Sabha/2025/13", pdf: "/misc/tender/2025_NICSI_249706_1.pdf" },
//   { no: 28, date: "25/08/2025", subject: "विधान सभा भवन स्थित भोजनालय/स्वल्पाहार गृह संचालन के ठेके का नवीनीकरण (संशोधित विज्ञप्ति)", pdf: "/misc/Tenders/tender250825.pdf" },
//   { no: 27, date: "16/07/2025", subject: "BID NO: GEM/2025/B/6459464 for Layer 2 Access Switch (V2) Quantity: 1", pdf: "/misc/Tenders/tender160725.pdf" },
//   { no: 26, date: "02/07/2025", subject: "विधान सभा के 'वेल ऑफ द हाउस' में बैठने वाले अधिकारियों/कर्मचारियों के उपयोगार्थ तैयार यूनिफॉर्म (सिलाई सहित) का क्रय", pdf: "/misc/Tenders/tender020725.pdf" },
//   { no: 25, date: "25/06/2025", subject: "GEM Bid No. GEM/2025/B/6382205 for Augmentation of IT Infrastructure at MP Vidhan Sabha Bhopal for NeVA Project", pdf: "/misc/Tenders/tender250625.pdf" },
//   { no: 24, date: "20/06/2025", subject: "मध्यप्रदेश विधान सभा सचिवालय के छह वाहनों के विक्रय हेतु निविदा", pdf: "/misc/Tenders/tender200625.pdf" },
//   { no: 23, date: "18/06/2025", subject: "विधान सभा के 'वेल ऑफ द हाउस' में बैठने वाले अधिकारियों/कर्मचारियों के उपयोगार्थ तैयार यूनिफॉर्म (सिलाई सहित) का क्रय [निरस्त]", pdf: "/misc/Tenders/tender180625.pdf" },
//   { no: 22, date: "28/05/2025", subject: "ई-निविदा आमंत्रण सूचना: GeM पोर्टल के माध्यम से All In One कंप्यूटर का क्रय [BID NO: GEM/2025/B/6284335]", pdf: "/misc/Tenders/tender280525.pdf" },
//   { no: 21, date: "25/09/2024", subject: "चतुर्थ श्रेणी कर्मचारियों के उपयोगार्थ वर्दी के कपड़े एवं वर्दी के साथ लगने वाली अन्य सामग्री का क्रय", pdf: "/misc/Tenders/tender250924.pdf" },
//   { no: 20, date: "05/09/2024", subject: "सुरक्षा स्टाफ के लिए वर्दी एवं वर्दी से संबंधित सामग्रियों का क्रय एवं सिलाई कार्य हेतु निविदा", pdf: "/misc/Tenders/tender050924.pdf" },
//   { no: 19, date: "09/02/2024", subject: "किराए का वाहन उपलब्ध कराने हेतु निविदा", pdf: "/misc/Tenders/tender090224.pdf" },
//   { no: 18, date: "15/09/2023", subject: "किराए का वाहन उपलब्ध कराने हेतु निविदा", pdf: "/misc/Tenders/tender150923.pdf" },
//   { no: 17, date: "11/01/2023", subject: "राज्य डाटा सेंटर, भोपाल एवं डी.आर. साइट, मुम्बई में स्थापित हार्डवेयर एवं सॉफ्टवेयर लायसेंस का OEM based नवीनीकरण", pdf: "/misc/Tenders/tender110123.pdf" },
//   { no: 16, date: "21/10/2022", subject: "सुरक्षा स्टाफ के लिए वर्दी एवं वर्दी से संबंधित सामग्रियों का क्रय एवं सिलाई", pdf: "/misc/Tenders/tender211022.pdf" },
//   { no: 15, date: "15/07/2022", subject: "चतुर्थ श्रेणी कर्मचारियों के उपयोगार्थ वर्दी के कपड़े एवं वर्दी के साथ लगने वाली अन्य सामग्री का क्रय", pdf: "/misc/Tenders/tender150722.pdf" },
//   { no: 14, date: "26/04/2022", subject: "वर्ष 2022-2023 के लिए लेखन सामग्री क्रय हेतु", pdf: "/misc/Tenders/tender260422.pdf" },
//   { no: 13, date: "05/07/2021", subject: "किराये का वाहन उपलब्ध कराने हेतु निविदा", pdf: "/misc/Tenders/tender050721.pdf" },
//   { no: 12, date: "15/06/2021", subject: "वर्ष 2021-2022 के लिए लेखन सामग्री क्रय हेतु", pdf: "/misc/Tenders/tender150621.pdf" },
//   { no: 11, date: "24/11/2020", subject: "सुरक्षा स्टाफ के लिए वर्दी एवं वर्दी से संबंधित सामग्रियों का क्रय एवं सिलाई", pdf: "/misc/Tenders/tender241120.pdf" },
//   { no: 10, date: "01/02/2020", subject: "चतुर्थ श्रेणी पुरुष कर्मचारियों के उपयोगार्थ वर्दी की सिलाई", pdf: "/misc/Tenders/tender010220.pdf" },
//   { no: 9, date: "29/01/2020", subject: "विधायक विश्राम गृह खण्ड -2 की कैंटीन का संचालन कार्य (द्वितीय विज्ञप्ति)", pdf: "/misc/Tenders/tender290120.pdf" },
//   { no: 8, date: "17/01/2020", subject: "विधायक विश्राम गृह खण्ड -2 की कैंटीन के संचालन हेतु", pdf: "/misc/Tenders/tender170120.pdf" },
//   { no: 7, date: "21/08/2019", subject: "चतुर्थ श्रेणी कर्मचारियों के लिए वर्दी के कपड़े एवं वर्दी से संबंधित अन्य सामग्री का क्रय", pdf: "/misc/Tenders/tender210819.pdf" },
//   { no: 6, date: "03/08/2019", subject: "दो वाहनों के विक्रय हेतु निविदा", pdf: "/misc/Tenders/tender030819.pdf" },
//   { no: 5, date: "17/10/2018", subject: "सुरक्षा स्टाफ के लिए वर्दी एवं वर्दी से संबंधित सामग्रियों का क्रय एवं सिलाई", pdf: "/misc/Tenders/tender171018.pdf" },
//   { no: 4, date: "23/07/2018", subject: "विधायक विश्राम गृह परिसर में (दक्षिणी द्वार के समीप) नव निर्मित भवन पर किराया दर पर रेस्टोरेन्ट का संचालन.", pdf: "/misc/Tenders/tender230718.pdf" },
//   { no: 3, date: "16/04/2018", subject: "प्रिंटर्स की कार्ट्रिज रिफलिंग संबंधी", pdf: "/misc/Tenders/tender160418.pdf" },
//   { no: 2, date: "16/04/2018", subject: "पेरिसिएबिल सामग्री क्रय संबंधी", pdf: "/misc/Tenders/tender160418b.pdf" },
//   { no: 1, date: "14/03/2018", subject: "लेखन सामग्री क्रय करने हेतु निविदाएँ आमंत्रित.", pdf: "/misc/Tenders/tender140318.pdf" },
// ];

// const Niveda = () => {
//   const navigate = useNavigate();

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
//           text-align: left;
//         }
//         .btn-outline-primary {
//           font-weight: 500;
//           border-radius: 6px;
//         }
//         .btn-outline-primary:hover {
//           background-color: #0d6efd;
//           color: white;
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

//       {/* Header */}
//       <div className="mb-3 d-flex justify-content-between align-items-center">
//         <button onClick={() => navigate("/home")} className="btn btn-outline-primary btn-sm">
//           ← Back
//         </button>
//         <h4 className="m-0 text-center flex-grow-1 answers-heading">निविदाएँ</h4>
//       </div>

//       {/* Table */}
//       <div className="table-responsive">
//         <table className="table align-middle table-bordered table-striped">
//           <thead>
//             <tr>
//               <th style={{ width: "10%" }}>क्रमांक</th>
//               <th style={{ width: "20%" }}>दिनांक</th>
//               <th>विषय</th>
//               <th style={{ width: "15%" }}>PDF लिंक</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tenders.map((item) => (
//               <tr key={item.no}>
//                 <td className="text-center">{item.no}</td>
//                 <td className="text-center">{item.date}</td>
//                 <td>{item.subject}</td>
//                 <td className="text-center">
//                   <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="pdf-link">
//                     🔗 View PDF
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Niveda;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const tenders = [
//     { no: 29, date: "19/09/2025", subject: "NICSI/MSP for NEVA-MP Vidhan Sabha/2025/13", pdf: "/misc/tender/2025_NICSI_249706_1.pdf" },
//    { no: 28, date: "25/08/2025", subject: "विधान सभा भवन स्थित भोजनालय/स्वल्पाहार गृह संचालन के ठेके का नवीनीकरण (संशोधित विज्ञप्ति)", pdf: "/misc/Tenders/tender250825.pdf" },
//    { no: 27, date: "16/07/2025", subject: "BID NO: GEM/2025/B/6459464 for Layer 2 Access Switch (V2) Quantity: 1", pdf: "/misc/Tenders/tender160725.pdf" },
//    { no: 26, date: "02/07/2025", subject: "विधान सभा के 'वेल ऑफ द हाउस' में बैठने वाले अधिकारियों/कर्मचारियों के उपयोगार्थ तैयार यूनिफॉर्म (सिलाई सहित) का क्रय", pdf: "/misc/Tenders/tender020725.pdf" },
//    { no: 25, date: "25/06/2025", subject: "GEM Bid No. GEM/2025/B/6382205 for Augmentation of IT Infrastructure at MP Vidhan Sabha Bhopal for NeVA Project", pdf: "/misc/Tenders/tender250625.pdf" },
//    { no: 24, date: "20/06/2025", subject: "मध्यप्रदेश विधान सभा सचिवालय के छह वाहनों के विक्रय हेतु निविदा", pdf: "/misc/Tenders/tender200625.pdf" },
//    { no: 23, date: "18/06/2025", subject: "विधान सभा के 'वेल ऑफ द हाउस' में बैठने वाले अधिकारियों/कर्मचारियों के उपयोगार्थ तैयार यूनिफॉर्म (सिलाई सहित) का क्रय [निरस्त]", pdf: "/misc/Tenders/tender180625.pdf" },
//    { no: 22, date: "28/05/2025", subject: "ई-निविदा आमंत्रण सूचना: GeM पोर्टल के माध्यम से All In One कंप्यूटर का क्रय [BID NO: GEM/2025/B/6284335]", pdf: "/misc/Tenders/tender280525.pdf" },
//    { no: 21, date: "25/09/2024", subject: "चतुर्थ श्रेणी कर्मचारियों के उपयोगार्थ वर्दी के कपड़े एवं वर्दी के साथ लगने वाली अन्य सामग्री का क्रय", pdf: "/misc/Tenders/tender250924.pdf" },
//    { no: 20, date: "05/09/2024", subject: "सुरक्षा स्टाफ के लिए वर्दी एवं वर्दी से संबंधित सामग्रियों का क्रय एवं सिलाई कार्य हेतु निविदा", pdf: "/misc/Tenders/tender050924.pdf" },
//    { no: 19, date: "09/02/2024", subject: "किराए का वाहन उपलब्ध कराने हेतु निविदा", pdf: "/misc/Tenders/tender090224.pdf" },
//    { no: 18, date: "15/09/2023", subject: "किराए का वाहन उपलब्ध कराने हेतु निविदा", pdf: "/misc/Tenders/tender150923.pdf" },
//    { no: 17, date: "11/01/2023", subject: "राज्य डाटा सेंटर, भोपाल एवं डी.आर. साइट, मुम्बई में स्थापित हार्डवेयर एवं सॉफ्टवेयर लायसेंस का OEM based नवीनीकरण", pdf: "/misc/Tenders/tender110123.pdf" },
//    { no: 16, date: "21/10/2022", subject: "सुरक्षा स्टाफ के लिए वर्दी एवं वर्दी से संबंधित सामग्रियों का क्रय एवं सिलाई", pdf: "/misc/Tenders/tender211022.pdf" },
//    { no: 15, date: "15/07/2022", subject: "चतुर्थ श्रेणी कर्मचारियों के उपयोगार्थ वर्दी के कपड़े एवं वर्दी के साथ लगने वाली अन्य सामग्री का क्रय", pdf: "/misc/Tenders/tender150722.pdf" },
//    { no: 14, date: "26/04/2022", subject: "वर्ष 2022-2023 के लिए लेखन सामग्री क्रय हेतु", pdf: "/misc/Tenders/tender260422.pdf" },
//    { no: 13, date: "05/07/2021", subject: "किराये का वाहन उपलब्ध कराने हेतु निविदा", pdf: "/misc/Tenders/tender050721.pdf" },
//    { no: 12, date: "15/06/2021", subject: "वर्ष 2021-2022 के लिए लेखन सामग्री क्रय हेतु", pdf: "/misc/Tenders/tender150621.pdf" },
//    { no: 11, date: "24/11/2020", subject: "सुरक्षा स्टाफ के लिए वर्दी एवं वर्दी से संबंधित सामग्रियों का क्रय एवं सिलाई", pdf: "/misc/Tenders/tender241120.pdf" },
//    { no: 10, date: "01/02/2020", subject: "चतुर्थ श्रेणी पुरुष कर्मचारियों के उपयोगार्थ वर्दी की सिलाई", pdf: "/misc/Tenders/tender010220.pdf" },
//    { no: 9, date: "29/01/2020", subject: "विधायक विश्राम गृह खण्ड -2 की कैंटीन का संचालन कार्य (द्वितीय विज्ञप्ति)", pdf: "/misc/Tenders/tender290120.pdf" },
//    { no: 8, date: "17/01/2020", subject: "विधायक विश्राम गृह खण्ड -2 की कैंटीन के संचालन हेतु", pdf: "/misc/Tenders/tender170120.pdf" },
//    { no: 7, date: "21/08/2019", subject: "चतुर्थ श्रेणी कर्मचारियों के लिए वर्दी के कपड़े एवं वर्दी से संबंधित अन्य सामग्री का क्रय", pdf: "/misc/Tenders/tender210819.pdf" },
//    { no: 6, date: "03/08/2019", subject: "दो वाहनों के विक्रय हेतु निविदा", pdf: "/misc/Tenders/tender030819.pdf" },
//    { no: 5, date: "17/10/2018", subject: "सुरक्षा स्टाफ के लिए वर्दी एवं वर्दी से संबंधित सामग्रियों का क्रय एवं सिलाई", pdf: "/misc/Tenders/tender171018.pdf" },
//    { no: 4, date: "23/07/2018", subject: "विधायक विश्राम गृह परिसर में (दक्षिणी द्वार के समीप) नव निर्मित भवन पर किराया दर पर रेस्टोरेन्ट का संचालन.", pdf: "/misc/Tenders/tender230718.pdf" },
//    { no: 3, date: "16/04/2018", subject: "प्रिंटर्स की कार्ट्रिज रिफलिंग संबंधी", pdf: "/misc/Tenders/tender160418.pdf" },
//    { no: 2, date: "16/04/2018", subject: "पेरिसिएबिल सामग्री क्रय संबंधी", pdf: "/misc/Tenders/tender160418b.pdf" },
//    { no: 1, date: "14/03/2018", subject: "लेखन सामग्री क्रय करने हेतु निविदाएँ आमंत्रित.", pdf: "/misc/Tenders/tender140318.pdf" },
// ];

// const Niveda = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="comm-page">

//       {/* HERO SECTION WITH BACK BUTTON */}
//       <div className="comm-hero" style={{ position: "relative" }}>
//         <button
//           onClick={() => navigate("/home")}
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
//           <h1>निविदाएँ</h1>
//           <p>विभाग द्वारा जारी निविदाएँ एवं प्रकाशन</p>
//         </div>
//       </div>

//       {/* TENDERS TABLE */}
//       <div className="container mt-3">
//         <div className="table-responsive">
//           <table className="table table-bordered table-striped">
//             <thead>
//               <tr className="text-center table-primary">
//                 <th style={{ width: "10%" }}>क्रमांक</th>
//                 <th style={{ width: "20%" }}>दिनांक</th>
//                 <th>विषय</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tenders.map((item) => (
//                 <tr key={item.no}>
//                   <td className="text-center">{item.no}</td>
//                   <td className="text-center">{item.date}</td>

//                   {/* Clickable subject */}
//                   <td>
//                     <a
//                       href={item.pdf}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="pdf-link"
//                       style={{
//                         color: "#0056b3",
//                         fontWeight: "500",
//                         cursor: "pointer",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {item.subject}
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Niveda;
import React from "react";
import { useNavigate } from "react-router-dom";

const tenders = [
    { no: 29, date: "19/09/2025", subject: "NICSI/MSP for NEVA-MP Vidhan Sabha/2025/13", pdf: "/misc/tender/2025_NICSI_249706_1.pdf" },
    { no: 28, date: "25/08/2025", subject: "विधान सभा भवन स्थित भोजनालय/स्वल्पाहार गृह संचालन के ठेके का नवीनीकरण (संशोधित विज्ञप्ति)", pdf: "/misc/Tenders/tender250825.pdf" },
    { no: 27, date: "16/07/2025", subject: "BID NO: GEM/2025/B/6459464 for Layer 2 Access Switch (V2) Quantity: 1", pdf: "/misc/Tenders/tender160725.pdf" },
    { no: 26, date: "02/07/2025", subject: "विधान सभा के 'वेल ऑफ द हाउस' में बैठने वाले अधिकारियों/कर्मचारियों के उपयोगार्थ तैयार यूनिफॉर्म (सिलाई सहित) का क्रय", pdf: "/misc/Tenders/tender020725.pdf" },
    { no: 25, date: "25/06/2025", subject: "GEM Bid No. GEM/2025/B/6382205 for Augmentation of IT Infrastructure at MP Vidhan Sabha Bhopal for NeVA Project", pdf: "/misc/Tenders/tender250625.pdf" },
    { no: 24, date: "20/06/2025", subject: "मध्यप्रदेश विधान सभा सचिवालय के छह वाहनों के विक्रय हेतु निविदा", pdf: "/misc/Tenders/tender200625.pdf" },
    { no: 23, date: "18/06/2025", subject: "विधान सभा के 'वेल ऑफ द हाउस' में बैठने वाले अधिकारियों/कर्मचारियों के उपयोगार्थ तैयार यूनिफॉर्म (सिलाई सहित) का क्रय [निरस्त]", pdf: "/misc/Tenders/tender180625.pdf" },
    { no: 22, date: "28/05/2025", subject: "ई-निविदा आमंत्रण सूचना: GeM पोर्टल के माध्यम से All In One कंप्यूटर का क्रय [BID NO: GEM/2025/B/6284335]", pdf: "/misc/Tenders/tender280525.pdf" },
    { no: 21, date: "25/09/2024", subject: "चतुर्थ श्रेणी कर्मचारियों के उपयोगार्थ वर्दी के कपड़े एवं वर्दी के साथ लगने वाली अन्य सामग्री का क्रय", pdf: "/misc/Tenders/tender250924.pdf" },
    { no: 20, date: "05/09/2024", subject: "सुरक्षा स्टाफ के लिए वर्दी एवं वर्दी से संबंधित सामग्रियों का क्रय एवं सिलाई कार्य हेतु निविदा", pdf: "/misc/Tenders/tender050924.pdf" },
    { no: 19, date: "09/02/2024", subject: "किराए का वाहन उपलब्ध कराने हेतु निविदा", pdf: "/misc/Tenders/tender090224.pdf" },
    { no: 18, date: "15/09/2023", subject: "किराए का वाहन उपलब्ध कराने हेतु निविदा", pdf: "/misc/Tenders/tender150923.pdf" },
    { no: 17, date: "11/01/2023", subject: "राज्य डाटा सेंटर, भोपाल एवं डी.आर. साइट, मुम्बई में स्थापित हार्डवेयर एवं सॉफ्टवेयर लायसेंस का OEM based नवीनीकरण", pdf: "/misc/Tenders/tender110123.pdf" },
    { no: 16, date: "21/10/2022", subject: "सुरक्षा स्टाफ के लिए वर्दी एवं वर्दी से संबंधित सामग्रियों का क्रय एवं सिलाई", pdf: "/misc/Tenders/tender211022.pdf" },
    { no: 15, date: "15/07/2022", subject: "चतुर्थ श्रेणी कर्मचारियों के उपयोगार्थ वर्दी के कपड़े एवं वर्दी के साथ लगने वाली अन्य सामग्री का क्रय", pdf: "/misc/Tenders/tender150722.pdf" },
    { no: 14, date: "26/04/2022", subject: "वर्ष 2022-2023 के लिए लेखन सामग्री क्रय हेतु", pdf: "/misc/Tenders/tender260422.pdf" },
    { no: 13, date: "05/07/2021", subject: "किराये का वाहन उपलब्ध कराने हेतु निविदा", pdf: "/misc/Tenders/tender050721.pdf" },
    { no: 12, date: "15/06/2021", subject: "वर्ष 2021-2022 के लिए लेखन सामग्री क्रय हेतु", pdf: "/misc/Tenders/tender150621.pdf" },
    { no: 11, date: "24/11/2020", subject: "सुरक्षा स्टाफ के लिए वर्दी एवं वर्दी से संबंधित सामग्रियों का क्रय एवं सिलाई", pdf: "/misc/Tenders/tender241120.pdf" },
    { no: 10, date: "01/02/2020", subject: "चतुर्थ श्रेणी पुरुष कर्मचारियों के उपयोगार्थ वर्दी की सिलाई", pdf: "/misc/Tenders/tender010220.pdf" },
    { no: 9, date: "29/01/2020", subject: "विधायक विश्राम गृह खण्ड -2 की कैंटीन का संचालन कार्य (द्वितीय विज्ञप्ति)", pdf: "/misc/Tenders/tender290120.pdf" },
    { no: 8, date: "17/01/2020", subject: "विधायक विश्राम गृह खण्ड -2 की कैंटीन के संचालन हेतु", pdf: "/misc/Tenders/tender170120.pdf" },
    { no: 7, date: "21/08/2019", subject: "चतुर्थ श्रेणी कर्मचारियों के लिए वर्दी के कपड़े एवं वर्दी से संबंधित अन्य सामग्री का क्रय", pdf: "/misc/Tenders/tender210819.pdf" },
    { no: 6, date: "03/08/2019", subject: "दो वाहनों के विक्रय हेतु निविदा", pdf: "/misc/Tenders/tender030819.pdf" },
    { no: 5, date: "17/10/2018", subject: "सुरक्षा स्टाफ के लिए वर्दी एवं वर्दी से संबंधित सामग्रियों का क्रय एवं सिलाई", pdf: "/misc/Tenders/tender171018.pdf" },
    { no: 4, date: "23/07/2018", subject: "विधायक विश्राम गृह परिसर में (दक्षिणी द्वार के समीप) नव निर्मित भवन पर किराया दर पर रेस्टोरेन्ट का संचालन.", pdf: "/misc/Tenders/tender230718.pdf" },
    { no: 3, date: "16/04/2018", subject: "प्रिंटर्स की कार्ट्रिज रिफलिंग संबंधी", pdf: "/misc/Tenders/tender160418.pdf" },
    { no: 2, date: "16/04/2018", subject: "पेरिसिएबिल सामग्री क्रय संबंधी", pdf: "/misc/Tenders/tender160418b.pdf" },
    { no: 1, date: "14/03/2018", subject: "लेखन सामग्री क्रय करने हेतु निविदाएँ आमंत्रित.", pdf: "/misc/Tenders/tender140318.pdf" },
];

const Niveda = () => {
  const navigate = useNavigate();

  return (
    <div className="comm-page">

      {/* HERO SECTION */}
      <div className="comm-hero" style={{ position: "relative", marginBottom: "0" }}>
        <button
          onClick={() => navigate("/home")}
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
          <h1>निविदाएँ</h1>
          <p>विभाग द्वारा जारी निविदाएँ एवं प्रकाशन</p>
        </div>
      </div>

      {/* TENDERS TABLE */}
      <div className="container">
        <div className="table-responsive">
          <table className="table table-bordered table-striped" style={{ marginTop: "0" }}>
            <thead>
              <tr className="text-center table-primary">
                <th style={{ width: "10%" }}>क्रमांक</th>
                <th style={{ width: "20%" }}>दिनांक</th>
                <th>विषय</th>
              </tr>
            </thead>
            <tbody>
              {tenders.map((item) => (
                <tr key={item.no}>
                  <td className="text-center">{item.no}</td>
                  <td className="text-center">{item.date}</td>
                  <td>
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#0056b3",
                        fontWeight: "500",
                        textDecoration: "none",
                      }}
                    >
                      {item.subject}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CSS FIX */}
      <style>{`
        .comm-page { padding-top: 0 !important; }
        .comm-hero { margin-bottom: 0 !important; }
        .container { margin-top: 0 !important; padding-top: 0 !important; }
        .table { margin-top: 0 !important; }
      `}</style>

    </div>
  );
};

export default Niveda;
