
// import React, { useEffect, useState } from 'react'; // ⬅️ Added useState
// import { Link } from 'react-router-dom';



// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("theme") === "dark" // ⬅️ Remember theme
//   );

//   // Apply theme to body
//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark-mode");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.body.classList.remove("dark-mode");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const menuItems = [
//     {
//       title: 'राज्यपाल',
//       options: [
//         { name: 'वर्तमान', path: '/gov' },
//         { name: 'भूतपूर्व ', path: '/govlst' },
//       ],
//     },
//     {
//       title: 'अध्यक्ष',
//       options: [
//         { name: 'वर्तमान', path: '/nst' },
//         { name: 'भूतपूर्व ', path: '/spklist' },
//       ],
//     },
//     {
//       title: 'उपाध्यक्ष',
//       options: [  
//         { name: 'भूतपूर्व ', path: '/uplist' },
//       ],
//     },
//     {
//       title: 'नेता प्रतिपक्ष',
//       options: [
//         { name: 'वर्तमान ', path: '/umg' },
//         { name: 'भूतपूर्व ', path: '/umglst' },
//       ],
//     },
//     {
//       title: 'मुख्यमंत्री',
//       options: [
//         { name: 'वर्तमान ', path: '/cm' },
//         { name: 'भूतपूर्व ', path: '/cmlist' },
//       ],
//     },
//     {
//       title: 'मंत्रिमण्डल',
//       options: [
//         { name: ' मंत्रिमण्डल', path: '/mlagroup' },
//         { name: 'पूर्व मंत्रिमण्डल ', path: '/mlagroupall' },
//         { name: 'संपत्ति विवरण [ARCHIVE]', path: '/propertydescarchieve' },
//       ],
//     },
//     {
//       title: 'सचिवालय',
//       options: [
//         { name: 'विधान सभा सचिवालय', path: '/vssachiwalya' },
//         { name: 'सचिव / प्रमुख सचिव', path: '/sachivpramukhsachiv' },
//         { name: 'विधान सभा भवन', path: '/vsbhawan' },
//         { name: 'सूचना का अधिकार (राजपत्र)', path: '/misc/rti.pdf' },
//         { name: 'सूचना का अधिकार (मैन्युअल)', path: '/misc/rtimanual.pdf' },
//         { name: 'पुरस्कार योजना', path: '/puruskaryojna' },
//         { name: 'पीठासीन अधिकारी सम्मेलन', path: '/pithasinadhikarisammmelan' },
//         { name: 'संपत्ति विवरण', path: '/sachiwalyasampativivran' },
//         { name: 'विधानसभा पुस्तकालय', path: '/libarypage' },
//         { name: 'तथ्य पत्रक : पेयजल', path: '/misc/peyjal191015.pdf' },
//         { name: 'सचिवालय प्रकाशन', path: '/sachivalayaprakashan' },

//       ],
//     },
//     {
//       title: 'सदस्यगण',
//       options: [
//         { name: 'वर्तमान', path: '/sadasyaganvartman' },
//         { name: 'पंचदश विधान सभा', path: '/sadasyaganpanchdash' },
//         { name: 'चतुर्दश विधान सभा', path: '/sadasyaganchaturthdas' },
//         { name: 'त्रयोदश विधान सभा', path: '/sadasyagantrayodash' },
//         { name: 'द्वादश विधान सभा', path: '/sadasyagandwadash' },
//         { name: 'एकादश विधान सभा', path: '/sadasyaganekadash' },
//         { name: 'नामनिर्दिष्ट सदस्य', path: '/misc/nominated.pdf' },
//         { name: 'राज्य सभा सदस्य', path: '/sadasyaganrajyasabha' },
//         { name: 'लोक सभा सदस्य', path: 'https://sansad.in/ls/members' },

//         // ✅ Updated submenu with PDF links (replaced '#' with actual PDF paths)
//         {
//           name: 'सुविधाएं',
//           submenu: [
//             { name: 'अध्यक्ष / उपाध्यक्ष', path: '/misc/Sadasyagan/SadasyaganPDF/sadasyaganadhyakshupadhyaksh.pdf' },
//             { name: 'नेता प्रतिपक्ष', path: '/misc/Sadasyagan/SadasyaganPDF/sadasyagannetapratipaksh.pdf' },
//             { name: 'मंत्री', path: '/misc/Sadasyagan/SadasyaganPDF/sadasyagansuvidhaminister.pdf' },
//             { name: 'विधायक', path: '/misc/Sadasyagan/SadasyaganPDF/sadasyagansuvidhavidhayak.pdf' },
//             { name: 'भूतपूर्व विधायक', path: '/sadasyagan/pensionrules' },
//           ],
//         },
//       ],
//     },
//     {
//       title: 'सदन संबंधी',
//       options: [
//         { name: 'सत्र अधिसूचना', path: '/satradhisuchna' },
//         { name: 'दैनिक कार्यसूची', path: '/dainik' },
//         { name: 'विधायन', path: '/vidhyan' },
//         { name: 'विधानसभा कार्यवाही', path: '/vidhansabhakarywahi' },
//         { name: 'संक्षिप्त कार्य विवरण', path: '/sankshiptkaryavivran' },
//         { name: 'सत्र संबंधी संक्षिप्त जानकारी', path: '/satrsambandhisankshiptjankari' },
//         { name: 'पत्रक भाग-दो', path: '/patrakbhag-02' },
//         { name: 'सत्रों की बैठकों का विवरण', path: '/misc/sittingdetail.pdf' },
//         { name: 'राज्यपाल का अभिभाषण', path: '/abhibhashan' },
//         { name: 'बजट प्रस्तुति', path: '/budgetprastuti' },
//         { name: 'विधानसभा समिति', path: '/committees1' },
//         { name: 'राष्ट्रपति शासन', path: '/presidentrule' },
//         { name: 'अविश्वास प्रस्ताव', path: '/avishwasprastav' },
//         { name: 'स्वर्णिम मध्य प्रदेश के निर्माण का संकल्प', path: '/misc/sankalp2010.pdf' },
//       ],
//     },
//     // {
//     //   title: 'नियम',
//     //   options: [
//     //     { name: 'सदस्यों द्वारा पालनीय नियम', path: '#' },
//     //     { name: 'प्रवेश पत्र नियम', path: '#' },
//     //     { name: 'सभा में कार्य का क्रम', path: '#' },
//     //     { name: 'प्रश्नों की ग्राह्यता के नियम', path: '#' },
//     //     { name: 'पुस्तक क्रय नीति', path: '#' },
//     //     { name: 'सचिवालय के प्रशासनिक आदेश', path: '#' },
//     //   ],
//     // },
//     {
//       title: 'प्रेस विज्ञप्ति',
//       options: [],
//       path: '/pressrelease',
//     },
//     {
//       title: 'छायाचित्र',
//       options: [],
//       path: '/gallery',
//     },
//     // {
//     //   title: 'मुख पृष्ठ',
//     //   options: [],
//     //   path: '/home',
//     // },
//   ];

//     useEffect(() => {
//     const dropdowns = document.querySelectorAll('.nav-item.dropdown');
//     dropdowns.forEach((dropdown) => {
//       dropdown.addEventListener('mouseenter', function () {
//         const toggle = this.querySelector('.dropdown-toggle');
//         const menu = this.querySelector('.dropdown-menu');
//         toggle.classList.add('show');
//         menu.classList.add('show');
//       });
//       dropdown.addEventListener('mouseleave', function () {
//         const toggle = this.querySelector('.dropdown-toggle');
//         const menu = this.querySelector('.dropdown-menu');
//         toggle.classList.remove('show');
//         menu.classList.remove('show');
//       });
//     });
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-#fffff" style={{ borderBottom: '1px solid #ccc' }}>
//       <div className="container-fluid">
//         <a className="navbar-brand d-flex align-items-center" href="/home">
//           <img src="/misc/MPVS_LOGO.jpg" alt="Logo" style={{ height: "50px" }} />
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="mx-auto mb-2 navbar-nav mb-lg-0">
//             {menuItems.map((item, index) => (
//               <li key={index} className={`nav-item ${item.options && item.options.length > 0 ? 'dropdown' : ''}`}>
//                 {item.options && item.options.length > 0 ? (
//                   <>
//                     <a
//                       className="nav-link dropdown-toggle text-dark fw-bold"
//                       href="#"
//                       id={`navbarDropdown${index}`}
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                       style={{ fontSize: '15px', padding: '8px 12px' }}
//                     >
//                       {item.title}
//                     </a>
//                     <ul className="dropdown-menu" aria-labelledby={`navbarDropdown${index}`}>
//                       {item.options.map((opt, optIndex) => (
//                         <li key={optIndex} className={opt.submenu ? 'dropdown-submenu position-relative' : ''}>
//                           {opt.submenu ? (
//                             <>
//                               <a href="#" className="dropdown-item dropdown-toggle">{opt.name}</a>
//                               <ul className="top-0 mt-0 dropdown-menu position-absolute start-100">
//                                 {opt.submenu.map((subOpt, subIndex) => (
//                                   <li key={subIndex}>
//                                     {subOpt.path.endsWith('.pdf') ? (
//                                       <a
//                                         className="dropdown-item"
//                                         href={subOpt.path}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                       >
//                                         {subOpt.name}
//                                       </a>
//                                     ) : (
//                                       <Link className="dropdown-item" to={subOpt.path}>
//                                         {subOpt.name}
//                                       </Link>
//                                     )}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </>
//                           ) : opt.path.endsWith('.pdf') ? (
//                             <a className="dropdown-item" href={opt.path} target="_blank" rel="noopener noreferrer">
//                               {opt.name}
//                             </a>
//                           ) : (
//                             <Link className="dropdown-item" to={opt.path}>
//                               {opt.name}
//                             </Link>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 ) : (
//                   <Link className="nav-link text-dark fw-bold" to={item.path} style={{ fontSize: '15px', padding: '8px 12px' }}>
//                     {item.title}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* Right-end Buttons */}
//           <div className="gap-2 d-flex align-items-center">
//             <Link to="vidhansabha-tour23" className="btn tour-btn">
//               विधानसभा भ्रमण
//             </Link>
//             <button onClick={() => setDarkMode(!darkMode)} className="btn btn-outline-secondary">
//               {darkMode ? "☀️ Light" : "🌙 Dark"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   const [searchTerm, setSearchTerm] = useState("");
//   const [noResult, setNoResult] = useState(false);
//   const [results, setResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark-mode");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.body.classList.remove("dark-mode");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const menuItems = [
//     {
//       title: "राज्यपाल",
//       options: [
//         {
//           name: "वर्तमान",
//           path: "/gov",
//           keywords: [
//             "राज्यपाल",
//             "वर्तमान राज्यपाल",
//             "मौजूदा राज्यपाल",
//             "governor",
//             "current governor",
//             "rajyapal",
//           ],
//         },
//         {
//           name: "भूतपूर्व ",
//           path: "/govlst",
//           keywords: [
//             "राज्यपाल",
//             "भूतपूर्व राज्यपाल",
//             "पूर्व राज्यपाल",
//             "ex governor",
//             "former governor",
//           ],
//         },
//       ],
//     },
//     {
//       title: "अध्यक्ष",
//       options: [
//         {
//           name: "वर्तमान",
//           path: "/nst",
//           keywords: [
//             "अध्यक्ष",
//             "वर्तमान अध्यक्ष",
//             "speaker",
//             "current speaker",
//             "sabha adhyaksh",
//           ],
//         },
//         {
//           name: "भूतपूर्व ",
//           path: "/spklist",
//           keywords: [
//             "पूर्व अध्यक्ष",
//             "भूतपूर्व अध्यक्ष",
//             "ex speaker",
//             "former speaker",
//           ],
//         },
//       ],
//     },
//     {
//       title: "उपाध्यक्ष",
//       options: [
//         {
//           name: "भूतपूर्व ",
//           path: "/uplist",
//           keywords: [
//             "उपाध्यक्ष",
//             "भूतपूर्व उपाध्यक्ष",
//             "पूर्व उपाध्यक्ष",
//             "deputy speaker",
//             "ex deputy speaker",
//           ],
//         },
//       ],
//     },
//     {
//       title: "नेता प्रतिपक्ष",
//       options: [
//         {
//           name: "वर्तमान ",
//           path: "/umg",
//           keywords: [
//             "नेता प्रतिपक्ष",
//             "वर्तमान नेता प्रतिपक्ष",
//             "lop",
//             "leader of opposition",
//             "current lop",
//           ],
//         },
//         {
//           name: "भूतपूर्व ",
//           path: "/umglst",
//           keywords: [
//             "भूतपूर्व नेता प्रतिपक्ष",
//             "पूर्व नेता प्रतिपक्ष",
//             "former lop",
//             "ex leader of opposition",
//           ],
//         },
//       ],
//     },
//     {
//       title: "मुख्यमंत्री",
//       options: [
//         {
//           name: "वर्तमान ",
//           path: "/cm",
//           keywords: [
//             "मुख्यमंत्री",
//             "वर्तमान मुख्यमंत्री",
//             "cm",
//             "chief minister",
//             "current chief minister",
//           ],
//         },
//         {
//           name: "भूतपूर्व ",
//           path: "/cmlist",
//           keywords: [
//             "भूतपूर्व मुख्यमंत्री",
//             "पूर्व मुख्यमंत्री",
//             "former chief minister",
//             "ex cm",
//           ],
//         },
//       ],
//     },
//     {
//       title: "मंत्रिमण्डल",
//       options: [
//         {
//           name: " मंत्रिमण्डल",
//           path: "/mlagroup",
//           keywords: [
//             "मंत्रिमंडल",
//             "वर्तमान मंत्रिमंडल",
//             "cabinet",
//             "council of ministers",
//           ],
//         },
//         {
//           name: "पूर्व मंत्रिमण्डल ",
//           path: "/mlagroupall",
//           keywords: [
//             "पूर्व मंत्रिमंडल",
//             "भूतपूर्व मंत्रिमंडल",
//             "former cabinet",
//             "past cabinets",
//           ],
//         },
//         {
//           name: "संपत्ति विवरण ",
//           path: "/propertydescarchieve",
//           keywords: [
//             "संपत्ति विवरण",
//             "मंत्रियों की संपत्ति",
//             "property details ",
//             "assets",
//           ],
//         },
//       ],
//     },
//     {
//       title: "सचिवालय",
//       options: [
//         {
//           name: "विधान सभा सचिवालय",
//           path: "/vssachiwalya",
//           keywords: [
//             "विधान सभा सचिवालय",
//             "सचिवालय",
//             "vidhan sabha secretariat",
//             "assembly secretariat",
//           ],
//         },
//         {
//           name: "सचिव / प्रमुख सचिव",
//           path: "/sachivpramukhsachiv",
//           keywords: [
//             "सचिव",
//             "प्रमुख सचिव",
//             "secretary",
//             "principal secretary",
//           ],
//         },
//         {
//           name: "विधान सभा भवन",
//           path: "/vsbhawan",
//           keywords: [
//             "विधानसभा भवन",
//             "भवन",
//             "assembly building",
//             "vidhan sabha bhawan",
//           ],
//         },
//         {
//           name: "सूचना का अधिकार (राजपत्र)",
//           path: "/misc/rti.pdf",
//           keywords: [
//             "(राजपत्र)",
//             "सूचना का अधिकार",
//             "आरटीआई",
//             "राजपत्र",
//             "rti gazette",
//             "right to information",
//           ],
//         },
//         {
//           name: "सूचना का अधिकार (मैन्युअल)",
//           path: "/misc/rtimanual.pdf",
//           keywords: [
//             "सूचना का अधिकार मैन्युअल",
//             "आरटीआई मैन्युअल",
//             "manual",
//             "right to information manual",
//           ],
//         },
//         {
//           name: "पुरस्कार योजना",
//           path: "/puruskaryojna",
//           keywords: [
//             "पुरस्कार योजना",
//             "पुरस्कार",
//             "award scheme",
//             "awards",
//           ],
//         },
//         {
//           name: "पीठासीन अधिकारी सम्मेलन",
//           path: "/pithasinadhikarisammmelan",
//           keywords: [
//             "पीठासीन अधिकारी",
//             "सम्मेलन",
//             "presiding officers conference",
//           ],
//         },
//         {
//           name: "संपत्ति विवरण",
//           path: "/sachiwalyasampativivran",
//           keywords: [
//             "संपत्ति विवरण",
//             "सचिवालय संपत्ति",
//             "property details",
//             "assets details",
//           ],
//         },
//         {
//           name: "विधानसभा पुस्तकालय",
//           path: "/libarypage",
//           keywords: [
//             "पुस्तकालय",
//             "विधानसभा पुस्तकालय",
//             "library",
//             "assembly library",
//           ],
//         },
//         {
//           name: "तथ्य पत्रक : पेयजल",
//           path: "/misc/peyjal191015.pdf",
//           keywords: [
//             "तथ्य पत्रक",
//             "पेयजल",
//             "water factsheet",
//             "factsheet drinking water",
//           ],
//         },
//         {
//           name: "सचिवालय प्रकाशन",
//           path: "/sachivalayaprakashan",
//           keywords: [
//             "सचिवालय प्रकाशन",
//             "प्रकाशन",
//             "secretariat publications",
//             "publications",
//           ],
//         },
//       ],
//     },
//     {
//       title: "सदस्यगण",
//       options: [
//         {
//           name: "वर्तमान",
//           path: "/sadasyaganvartman",
//           keywords: [
//             "वर्तमान",
//             "वर्तमान सदस्य",
//             "वर्तमान विधायक",
//             "current members",
//             "current mlas",
//           ],
//         },
//         {
//           name: "पंचदश विधान सभा",
//           path: "/sadasyaganpanchdash",
//           keywords: [
//             "पंचदश विधानसभा",
//             "15वीं विधानसभा",
//             "15th assembly",
//             "15th vidhan sabha",
//           ],
//         },
//         {
//           name: "चतुर्दश विधान सभा",
//           path: "/sadasyaganchaturthdas",
//           keywords: [
//             "चतुर्दश विधानसभा",
//             "14वीं विधानसभा",
//             "14th assembly",
//             "14th vidhan sabha",
//           ],
//         },
//         {
//           name: "त्रयोदश विधान सभा",
//           path: "/sadasyagantrayodash",
//           keywords: [
//             "त्रयोदश विधानसभा",
//             "13वीं विधानसभा",
//             "13th assembly",
//             "13th vidhan sabha",
//           ],
//         },
//         {
//           name: "द्वादश विधान सभा",
//           path: "/sadasyagandwadash",
//           keywords: [
//             "द्वादश विधानसभा",
//             "12वीं विधानसभा",
//             "12th assembly",
//             "12th vidhan sabha",
//           ],
//         },
//         {
//           name: "एकादश विधान सभा",
//           path: "/sadasyaganekadash",
//           keywords: [
//             "एकादश विधानसभा",
//             "11वीं विधानसभा",
//             "11th assembly",
//             "11th vidhan sabha",
//           ],
//         },
//         {
//           name: "नामनिर्दिष्ट सदस्य",
//           path: "/misc/nominated.pdf",
//           keywords: [
//             "नामनिर्दिष्ट सदस्य",
//             "नामित सदस्य",
//             "nominated members",
//           ],
//         },
//         {
//           name: "राज्य सभा सदस्य",
//           path: "/sadasyaganrajyasabha",
//           keywords: [
//             "राज्यसभा सदस्य",
//             "राज्य सभा सदस्य",
//             "rajya sabha members",
//             "rs members",
//           ],
//         },
//         {
//           name: "लोक सभा सदस्य",
//           path: "https://sansad.in/ls/members",
//           keywords: [

//             "लोकसभा सदस्य",
//             "लोक सभा सदस्य",
//             "lok sabha members",
//             "mp list",
//           ],
//         },
//         {
//           name: "सुविधाएं",
//           submenu: [
//             {
//               name: "अध्यक्ष / उपाध्यक्ष",
//               path: "/misc/speaker.pdf",
//               keywords: [
//                 "अध्यक्ष / उपाध्यक्ष",
//                 "अध्यक्ष सुविधा",
//                 "उपाध्यक्ष सुविधा",
//                 "speaker facilities",
//                 "deputy speaker facilities",
//               ],
//             },
//             {
//               name: "नेता प्रतिपक्ष",
//               path: "/misc/opp_leader.pdf",
//               keywords: [
//                 "नेता प्रतिपक्ष",
//                 "नेता प्रतिपक्ष सुविधा",
//                 "lop facilities",
//                 "leader of opposition facilities",
//               ],
//             },
//             {
//               name: "मंत्री",
//               path: "/misc/minister.pdf",
//               keywords: [
//                 "मंत्री",
//                 "मंत्री सुविधा",
//                 "minister facilities",
//                 "suvidha mantri",
//               ],
//             },
//             {
//               name: "विधायक",
//               path: "/misc/member_all.pdf",
//               keywords: [
//                 "विधायक",
//                 "विधायक सुविधा",
//                 "mla facilities",
//                 "suvidha vidhayak",
//               ],
//             },
//             {
//               name: "भूतपूर्व विधायक",
//               path: "/sadasyagan/pensionrules",
//               keywords: [
//                 "भूतपूर्व विधायक",
//                 "पूर्व विधायक",
//                 "ex mla",
//                 "pension rules",
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       title: "सदन संबंधी",
//       options: [
//         {
//           name: "सत्र अधिसूचना",
//           path: "/satradhisuchna",
//           keywords: [
//             "सत्र अधिसूचना",
//             "session notification",
//             "session notice",
//           ],
//         },
//         {
//           name: "दैनिक कार्यसूची",
//           path: "/dainik",
//           keywords: [
//             "दैनिक कार्यसूची",
//             "दिन की कार्यसूची",
//             "कार्यसूची",
//             "daily agenda",
//             "list of business",
//           ],
//         },
//         {
//           name: "विधायन",
//           path: "/vidhyan",
//           keywords: [
//             "विधायन",
//             "विधेयक",
//             "bills",
//             "legislation",
//           ],
//         },
//         {
//           name: "विधानसभा कार्यवाही",
//           path: "/vidhansabhakarywahi",
//           keywords: [
//             "विधानसभा कार्यवाही",
//             "सदन की कार्यवाही",
//             "house proceedings",
//             "debates",
//           ],
//         },
//         {
//           name: "संक्षिप्त कार्य विवरण",
//           path: "/sankshiptkaryavivran",
//           keywords: [
//             "संक्षिप्त कार्य विवरण",
//             "संक्षिप्त विवरण",
//             "short work summary",
//             "resume of work",
//           ],
//         },
//         {
//           name: "सत्र संबंधी संक्षिप्त जानकारी",
//           path: "/satrsambandhisankshiptjankari",
//           keywords: [
//             "सत्र संबंधी संक्षिप्त जानकारी",
//             "session information",
//             "session summary",
//           ],
//         },
//         {
//           name: "पत्रक भाग-दो",
//           path: "/patrakbhag-02",
//           keywords: [
//             "पत्रक भाग-दो",
//             "बुलेटिन भाग-दो",
//             "bulletin part 2",
//             "part ii",
//           ],
//         },
//         {
//           name: "सत्रों की बैठकों का विवरण",
//           path: "/misc/sittingdetail.pdf",
//           keywords: [
//             "सत्रों बैठकों का विवरण",
//             "सत्रों की बैठकें",
//             "sitting details",
//             "session sittings",
//           ],
//         },
//         {
//           name: "राज्यपाल का अभिभाषण",
//           path: "/abhibhashan",
//           keywords: [
//             "राज्यपाल का अभिभाषण",
//             "अभिभाषण",
//             "governor address",
//             "address by governor",
//           ],
//         },
//         {
//           name: "बजट प्रस्तुति",
//           path: "/budgetprastuti",
//           keywords: [
//             "बजट प्रस्तुति",
//             "बजट",
//             "budget presentation",
//             "state budget",
//           ],
//         },
//         {
//           name: "विधानसभा समिति",
//           path: "/committees1",
//           keywords: [
//             "समितियाँ",
//             "विधानसभा समिति",
//             "assembly committees",
//             "committees",
//           ],
//         },
//         {
//           name: "राष्ट्रपति शासन",
//           path: "/presidentrule",
//           keywords: [
//             "राष्ट्रपति शासन",
//             "president rule",
//             "president's rule",
//           ],
//         },
//         {
//           name: "अविश्वास प्रस्ताव",
//           path: "/avishwasprastav",
//           keywords: [
//             "अविश्वास प्रस्ताव",
//             "no confidence motion",
//             "ncm",
//           ],
//         },
//         {
//           name: "स्वर्णिम मध्य प्रदेश के निर्माण का संकल्प",
//           path: "/misc/sankalp2010.pdf",
//           keywords: [
//             "स्वर्णिम मध्य प्रदेश",
//             "निर्माण का संकल्प",
//             "sankalp 2010",
//             "golden madhya pradesh",
//           ],
//         },
//       ],
//     },
//     {
//       title: "प्रेस विज्ञप्ति",
//       options: [],
//       path: "/pressrelease",
//       keywords: [
//         "प्रेस विज्ञप्ति",
//         "प्रेस नोट",
//         "press",
//         "press release",
//         "press note",
//       ],
//     },
//     {
//       title: "छायाचित्र",
//       options: [],
//       path: "/gallery",
//       keywords: [
//         "छायाचित्र",
//         "फोटो",
//         "तस्वीरें",
//         "gallery",
//         "photos",
//         "images",
//       ],
//     },
//   ];
//   // 👉 Collect ALL matches for dropdown
//   const getMatches = (query) => {
//     const q = query.trim().toLowerCase();
//     if (!q) return [];

//     const matches = [];

//     for (const item of menuItems) {
//       const titleText = (item.title || "").toLowerCase();

//       // top-level (if it has path)
//       if (item.path) {
//         const titleKeywords = `${titleText}`;
//         if (titleKeywords.includes(q)) {
//           matches.push({
//             label: `${item.title}`,
//             path: item.path,
//           });
//         }
//       }

//       if (item.options && item.options.length > 0) {
//         for (const opt of item.options) {
//           const optText = (opt.name || "").toLowerCase();
//           const keywordsText = Array.isArray(opt.keywords)
//             ? opt.keywords.join(" ").toLowerCase()
//             : "";
//           const combined = `${titleText} ${optText} ${keywordsText}`;

//           if (opt.path && combined.includes(q)) {
//             matches.push({
//               label: `${item.title} › ${opt.name}`,
//               path: opt.path,
//             });
//           }

//           if (opt.submenu && opt.submenu.length > 0) {
//             for (const sub of opt.submenu) {
//               const subText = (sub.name || "").toLowerCase();
//               const subKeywordsText = Array.isArray(sub.keywords)
//                 ? sub.keywords.join(" ").toLowerCase()
//                 : "";
//               const subCombined = `${titleText} ${optText} ${subText} ${subKeywordsText}`;

//               if (sub.path && subCombined.includes(q)) {
//                 matches.push({
//                   label: `${item.title} › ${opt.name} › ${sub.name}`,
//                   path: sub.path,
//                 });
//               }
//             }
//           }
//         }
//       }
//     }

//     return matches;
//   };

//   // 🔁 When search changes: update dropdown options
//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setNoResult(false);

//     if (value.trim().length === 0) {
//       setResults([]);
//       setShowResults(false);
//       return;
//     }

//     const matched = getMatches(value);
//     setResults(matched);
//     setShowResults(matched.length > 0);
//   };

//   // 🖱 Click on one of the dropdown options
//   const handleResultClick = (result) => {
//     const path = result.path;

//     setShowResults(false);
//     setSearchTerm("");
//     setResults([]);
//     setNoResult(false);

//     if (path.startsWith("http") || path.endsWith(".pdf")) {
//       window.open(path, "_blank", "noopener,noreferrer");
//     } else {
//       navigate(path);
//     }
//   };

//   // ⏎ If user presses Enter: go to FIRST match like before
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     const query = searchTerm.trim().toLowerCase();
//     if (!query) return;

//     const matched = getMatches(query);

//     if (matched.length > 0) {
//       setNoResult(false);
//       handleResultClick(matched[0]); // go to first result
//     } else {
//       setNoResult(true);
//       setShowResults(false);
//       setResults([]);
//     }
//   };

//   // Hover dropdown logic (unchanged)
//   useEffect(() => {
//     const dropdowns = document.querySelectorAll(".nav-item.dropdown");
//     dropdowns.forEach((dropdown) => {
//       dropdown.addEventListener("mouseenter", function () {
//         const toggle = this.querySelector(".dropdown-toggle");
//         const menu = this.querySelector(".dropdown-menu");
//         toggle.classList.add("show");
//         menu.classList.add("show");
//       });
//       dropdown.addEventListener("mouseleave", function () {
//         const toggle = this.querySelector(".dropdown-toggle");
//         const menu = this.querySelector(".dropdown-menu");
//         toggle.classList.remove("show");
//         menu.classList.remove("show");
//       });
//     });
//   }, []);

//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-light bg-#fffff"
//       style={{ borderBottom: "1px solid #ccc" }}
//     >
//       <div className="container-fluid">
//         <a className="navbar-brand d-flex align-items-center" href="/home">
//           <img
//             src="/misc/MPVS_LOGO.jpg"
//             alt="Logo"
//             style={{ height: "50px" }}
//           />
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="mx-auto mb-2 navbar-nav mb-lg-0">
//             {menuItems.map((item, index) => (
//               <li
//                 key={index}
//                 className={`nav-item ${
//                   item.options && item.options.length > 0 ? "dropdown" : ""
//                 }`}
//               >
//                 {item.options && item.options.length > 0 ? (
//                   <>
//                     <a
//                       className="nav-link dropdown-toggle text-dark fw-bold"
//                       href="#"
//                       id={`navbarDropdown${index}`}
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                       style={{ fontSize: "15px", padding: "8px 12px" }}
//                     >
//                       {item.title}
//                     </a>
//                     <ul
//                       className="dropdown-menu"
//                       aria-labelledby={`navbarDropdown${index}`}
//                     >
//                       {item.options.map((opt, optIndex) => (
//                         <li
//                           key={optIndex}
//                           className={
//                             opt.submenu
//                               ? "dropdown-submenu position-relative"
//                               : ""
//                           }
//                         >
//                           {opt.submenu ? (
//                             <>
//                               <a
//                                 href="#"
//                                 className="dropdown-item dropdown-toggle"
//                               >
//                                 {opt.name}
//                               </a>
//                               <ul className="top-0 mt-0 dropdown-menu position-absolute start-100">
//                                 {opt.submenu.map((subOpt, subIndex) => (
//                                   <li key={subIndex}>
//                                     {subOpt.path.endsWith(".pdf") ||
//                                     subOpt.path.startsWith("http") ? (
//                                       <a
//                                         className="dropdown-item"
//                                         href={subOpt.path}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                       >
//                                         {subOpt.name}
//                                       </a>
//                                     ) : (
//                                       <Link
//                                         className="dropdown-item"
//                                         to={subOpt.path}
//                                       >
//                                         {subOpt.name}
//                                       </Link>
//                                     )}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </>
//                           ) : opt.path.endsWith(".pdf") ||
//                             opt.path.startsWith("http") ? (
//                             <a
//                               className="dropdown-item"
//                               href={opt.path}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               {opt.name}
//                             </a>
//                           ) : (
//                             <Link className="dropdown-item" to={opt.path}>
//                               {opt.name}
//                             </Link>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 ) : (
//                   <Link
//                     className="nav-link text-dark fw-bold"
//                     to={item.path}
//                     style={{ fontSize: "15px", padding: "8px 12px" }}
//                   >
//                     {item.title}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* 🔍 Search + buttons on right side */}
//           <div className="gap-2 d-flex align-items-center">
//             <form
//               className="d-flex me-2 position-relative"
//               onSubmit={handleSearchSubmit}
//               style={{ minWidth: "160px" }}
//             >
//               <div className="w-100 position-relative">
//                 <input
//                   className="form-control"
//                   type="search"
//                   placeholder="खोजें / Search..."
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                   onFocus={() => {
//                     if (results.length > 0) setShowResults(true);
//                   }}
//                   onBlur={() => {
//                     // small timeout so click fires before hide
//                     setTimeout(() => setShowResults(false), 150);
//                   }}
//                   style={{ fontSize: "14px" }}
//                 />

//                 {showResults && results.length > 0 && (
//                   <ul
//                     className="list-group position-absolute w-100"
//                     style={{
//                       zIndex: 1050,
//                       top: "100%",
//                       left: 0,
//                       maxHeight: "260px",
//                       overflowY: "auto",
//                     }}
//                   >
//                     {results.map((res, idx) => (
//                       <li
//                         key={idx}
//                         className="list-group-item list-group-item-action"
//                         style={{ cursor: "pointer", fontSize: "13px" }}
//                         onMouseDown={() => handleResultClick(res)}
//                       >
//                         {res.label}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </form>

//             {noResult && (
//               <span className="text-danger small me-2">
//                 कोई पृष्ठ नहीं मिला / No page found
//               </span>
//             )}

//             <Link to="vidhansabha-tour23" className="btn tour-btn">
//               विधानसभा भ्रमण
//             </Link>
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="btn btn-outline-secondary"
//             >
//               {darkMode ? "☀️ Light" : "🌙 Dark"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// // Navbar.jsx
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const sampleMenu = [
//   {
//     title: "राज्यपाल",
//     options: [
//       {
//         name: "वर्तमान",
//         path: "/gov",
//         keywords: [
//           "राज्यपाल",
//           "वर्तमान राज्यपाल",
//           "मौजूदा राज्यपाल",
//           "governor",
//           "current governor",
//           "rajyapal",
//         ],
//       },
//       {
//         name: "भूतपूर्व ",
//         path: "/govlst",
//         keywords: [
//           "राज्यपाल",
//           "भूतपूर्व राज्यपाल",
//           "पूर्व राज्यपाल",
//           "ex governor",
//           "former governor",
//         ],
//       },
//     ],
//   },
//   {
//     title: "अध्यक्ष",
//     options: [
//       {
//         name: "वर्तमान",
//         path: "/nst",
//         keywords: [
//           "अध्यक्ष",
//           "वर्तमान अध्यक्ष",
//           "speaker",
//           "current speaker",
//           "sabha adhyaksh",
//         ],
//       },
//       {
//         name: "भूतपूर्व ",
//         path: "/spklist",
//         keywords: [
//           "पूर्व अध्यक्ष",
//           "भूतपूर्व अध्यक्ष",
//           "ex speaker",
//           "former speaker",
//         ],
//       },
//     ],
//   },
//   {
//     title: "उपाध्यक्ष",
//     options: [
//       {
//         name: "भूतपूर्व ",
//         path: "/uplist",
//         keywords: [
//           "उपाध्यक्ष",
//           "भूतपूर्व उपाध्यक्ष",
//           "पूर्व उपाध्यक्ष",
//           "deputy speaker",
//           "ex deputy speaker",
//         ],
//       },
//     ],
//   },
//   {
//     title: "नेता प्रतिपक्ष",
//     options: [
//       {
//         name: "वर्तमान ",
//         path: "/umg",
//         keywords: [
//           "नेता प्रतिपक्ष",
//           "वर्तमान नेता प्रतिपक्ष",
//           "lop",
//           "leader of opposition",
//           "current lop",
//         ],
//       },
//       {
//         name: "भूतपूर्व ",
//         path: "/umglst",
//         keywords: [
//           "भूतपूर्व नेता प्रतिपक्ष",
//           "पूर्व नेता प्रतिपक्ष",
//           "former lop",
//           "ex leader of opposition",
//         ],
//       },
//     ],
//   },
//   {
//     title: "मुख्यमंत्री",
//     options: [
//       {
//         name: "वर्तमान ",
//         path: "/cm",
//         keywords: [
//           "मुख्यमंत्री",
//           "वर्तमान मुख्यमंत्री",
//           "cm",
//           "chief minister",
//           "current chief minister",
//         ],
//       },
//       {
//         name: "भूतपूर्व ",
//         path: "/cmlist",
//         keywords: [
//           "भूतपूर्व मुख्यमंत्री",
//           "पूर्व मुख्यमंत्री",
//           "former chief minister",
//           "ex cm",
//         ],
//       },
//     ],
//   },
//   {
//     title: "मंत्रिमण्डल",
//     options: [
//       {
//         name: " मंत्रिमण्डल",
//         path: "/mlagroup",
//         keywords: [
//           "मंत्रिमंडल",
//           "वर्तमान मंत्रिमंडल",
//           "cabinet",
//           "council of ministers",
//         ],
//       },
//       {
//         name: "पूर्व मंत्रिमण्डल ",
//         path: "/mlagroupall",
//         keywords: [
//           "पूर्व मंत्रिमंडल",
//           "भूतपूर्व मंत्रिमंडल",
//           "former cabinet",
//           "past cabinets",
//         ],
//       },
//       {
//         name: "संपत्ति विवरण ",
//         path: "/propertydescarchieve",
//         keywords: [
//           "संपत्ति विवरण",
//           "मंत्रियों की संपत्ति",
//           "property details ",
//           "assets",
//         ],
//       },
//     ],
//   },
//   {
//     title: "सचिवालय",
//     options: [
//       {
//         name: "विधान सभा सचिवालय",
//         path: "/vssachiwalya",
//         keywords: [
//           "विधान सभा सचिवालय",
//           "सचिवालय",
//           "vidhan sabha secretariat",
//           "assembly secretariat",
//         ],
//       },
//       {
//         name: "सचिव / प्रमुख सचिव",
//         path: "/sachivpramukhsachiv",
//         keywords: [
//           "सचिव",
//           "प्रमुख सचिव",
//           "secretary",
//           "principal secretary",
//         ],
//       },
//       {
//         name: "विधान सभा भवन",
//         path: "/vsbhawan",
//         keywords: [
//           "विधानसभा भवन",
//           "भवन",
//           "assembly building",
//           "vidhan sabha bhawan",
//         ],
//       },
//       {
//         name: "सूचना का अधिकार (राजपत्र)",
//         path: "/misc/rti.pdf",
//         keywords: [
//           "(राजपत्र)",
//           "सूचना का अधिकार",
//           "आरटीआई",
//           "राजपत्र",
//           "rti gazette",
//           "right to information",
//         ],
//       },
//       {
//         name: "सूचना का अधिकार (मैन्युअल)",
//         path: "/misc/rtimanual.pdf",
//         keywords: [
//           "सूचना का अधिकार मैन्युअल",
//           "आरटीआई मैन्युअल",
//           "manual",
//           "right to information manual",
//         ],
//       },
//       {
//         name: "पुरस्कार योजना",
//         path: "/puruskaryojna",
//         keywords: [
//           "पुरस्कार योजना",
//           "पुरस्कार",
//           "award scheme",
//           "awards",
//         ],
//       },
//       {
//         name: "पीठासीन अधिकारी सम्मेलन",
//         path: "/pithasinadhikarisammmelan",
//         keywords: [
//           "पीठासीन अधिकारी",
//           "सम्मेलन",
//           "presiding officers conference",
//         ],
//       },
//       {
//         name: "संपत्ति विवरण",
//         path: "/sachiwalyasampativivran",
//         keywords: [
//           "संपत्ति विवरण",
//           "सचिवालय संपत्ति",
//           "property details",
//           "assets details",
//         ],
//       },
//       {
//         name: "विधानसभा पुस्तकालय",
//         path: "/libarypage",
//         keywords: [
//           "पुस्तकालय",
//           "विधानसभा पुस्तकालय",
//           "library",
//           "assembly library",
//         ],
//       },
//       {
//         name: "तथ्य पत्रक : पेयजल",
//         path: "/misc/peyjal191015.pdf",
//         keywords: [
//           "तथ्य पत्रक",
//           "पेयजल",
//           "water factsheet",
//           "factsheet drinking water",
//         ],
//       },
//       {
//         name: "सचिवालय प्रकाशन",
//         path: "/sachivalayaprakashan",
//         keywords: [
//           "सचिवालय प्रकाशन",
//           "प्रकाशन",
//           "secretariat publications",
//           "publications",
//         ],
//       },
//     ],
//   },
//   {
//     title: "सदस्यगण",
//     options: [
//       {
//         name: "वर्तमान",
//         path: "/sadasyaganvartman",
//         keywords: [
//           "वर्तमान",
//           "वर्तमान सदस्य",
//           "वर्तमान विधायक",
//           "current members",
//           "current mlas",
//         ],
//       },
//       {
//         name: "पंचदश विधान सभा",
//         path: "/sadasyaganpanchdash",
//         keywords: [
//           "पंचदश विधानसभा",
//           "15वीं विधानसभा",
//           "15th assembly",
//           "15th vidhan sabha",
//         ],
//       },
//       {
//         name: "चतुर्दश विधान सभा",
//         path: "/sadasyaganchaturthdas",
//         keywords: [
//           "चतुर्दश विधानसभा",
//           "14वीं विधानसभा",
//           "14th assembly",
//           "14th vidhan sabha",
//         ],
//       },
//       {
//         name: "त्रयोदश विधान सभा",
//         path: "/sadasyagantrayodash",
//         keywords: [
//           "त्रयोदश विधानसभा",
//           "13वीं विधानसभा",
//           "13th assembly",
//           "13th vidhan sabha",
//         ],
//       },
//       {
//         name: "द्वादश विधान सभा",
//         path: "/sadasyagandwadash",
//         keywords: [
//           "द्वादश विधानसभा",
//           "12वीं विधानसभा",
//           "12th assembly",
//           "12th vidhan sabha",
//         ],
//       },
//       {
//         name: "एकादश विधान सभा",
//         path: "/sadasyaganekadash",
//         keywords: [
//           "एकादश विधानसभा",
//           "11वीं विधानसभा",
//           "11th assembly",
//           "11th vidhan sabha",
//         ],
//       },
//       {
//         name: "नामनिर्दिष्ट सदस्य",
//         path: "/misc/nominated.pdf",
//         keywords: [
//           "नामनिर्दिष्ट सदस्य",
//           "नामित सदस्य",
//           "nominated members",
//         ],
//       },
//       {
//         name: "राज्य सभा सदस्य",
//         path: "/sadasyaganrajyasabha",
//         keywords: [
//           "राज्यसभा सदस्य",
//           "राज्य सभा सदस्य",
//           "rajya sabha members",
//           "rs members",
//         ],
//       },
//       {
//         name: "लोक सभा सदस्य",
//         path: "https://sansad.in/ls/members",
//         keywords: [
//           "लोकसभा सदस्य",
//           "लोक सभा सदस्य",
//           "lok sabha members",
//           "mp list",
//         ],
//       },
//       // Nested submenu kept here:
//       {
//         title: "सुविधाएं",
//         options: [
//           {
//             name: "अध्यक्ष / उपाध्यक्ष",
//             path: "/misc/speaker.pdf",
//             keywords: [
//               "अध्यक्ष / उपाध्यक्ष",
//               "अध्यक्ष सुविधा",
//               "उपाध्यक्ष सुविधा",
//               "speaker facilities",
//               "deputy speaker facilities",
//             ],
//           },
//           {
//             name: "नेता प्रतिपक्ष",
//             path: "/misc/opp_leader.pdf",
//             keywords: [
//               "नेता प्रतिपक्ष",
//               "नेता प्रतिपक्ष सुविधा",
//               "lop facilities",
//               "leader of opposition facilities",
//             ],
//           },
//           {
//             name: "मंत्री",
//             path: "/misc/minister.pdf",
//             keywords: [
//               "मंत्री",
//               "मंत्री सुविधा",
//               "minister facilities",
//               "suvidha mantri",
//             ],
//           },
//           {
//             name: "विधायक",
//             path: "/misc/member_all.pdf",
//             keywords: [
//               "विधायक",
//               "विधायक सुविधा",
//               "mla facilities",
//               "suvidha vidhayak",
//             ],
//           },
//           {
//             name: "भूतपूर्व विधायक",
//             path: "/sadasyagan/pensionrules",
//             keywords: [
//               "भूतपूर्व विधायक",
//               "पूर्व विधायक",
//               "ex mla",
//               "pension rules",
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "सदन संबंधी",
//     options: [
//       {
//         name: "सत्र अधिसूचना",
//         path: "/satradhisuchna",
//         keywords: [
//           "सत्र अधिसूचना",
//           "session notification",
//           "session notice",
//         ],
//       },
//       {
//         name: "दैनिक कार्यसूची",
//         path: "/dainik",
//         keywords: [
//           "दैनिक कार्यसूची",
//           "दिन की कार्यसूची",
//           "कार्यसूची",
//           "daily agenda",
//           "list of business",
//         ],
//       },
//       {
//         name: "विधायन",
//         path: "/vidhyan",
//         keywords: [
//           "विधायन",
//           "विधेयक",
//           "bills",
//           "legislation",
//         ],
//       },
//       {
//         name: "विधानसभा कार्यवाही",
//         path: "/vidhansabhakarywahi",
//         keywords: [
//           "विधानसभा कार्यवाही",
//           "सदन की कार्यवाही",
//           "house proceedings",
//           "debates",
//         ],
//       },
//       {
//         name: "संक्षिप्त कार्य विवरण",
//         path: "/sankshiptkaryavivran",
//         keywords: [
//           "संक्षिप्त कार्य विवरण",
//           "संक्षिप्त विवरण",
//           "short work summary",
//           "resume of work",
//         ],
//       },
//       {
//         name: "सत्र संबंधी संक्षिप्त जानकारी",
//         path: "/satrsambandhisankshiptjankari",
//         keywords: [
//           "सत्र संबंधी संक्षिप्त जानकारी",
//           "session information",
//           "session summary",
//         ],
//       },
//       {
//         name: "पत्रक भाग-दो",
//         path: "/patrakbhag-02",
//         keywords: [
//           "पत्रक भाग-दो",
//           "बुलेटिन भाग-दो",
//           "bulletin part 2",
//           "part ii",
//         ],
//       },
//       {
//         name: "सत्रों की बैठकों का विवरण",
//         path: "/misc/sittingdetail.pdf",
//         keywords: [
//           "सत्रों बैठकों का विवरण",
//           "सत्रों की बैठकें",
//           "sitting details",
//           "session sittings",
//         ],
//       },
//       {
//         name: "राज्यपाल का अभिभाषण",
//         path: "/abhibhashan",
//         keywords: [
//           "राज्यपाल का अभिभाषण",
//           "अभिभाषण",
//           "governor address",
//           "address by governor",
//         ],
//       },
//       {
//         name: "बजट प्रस्तुति",
//         path: "/budgetprastuti",
//         keywords: [
//           "बजट प्रस्तुति",
//           "बजट",
//           "budget presentation",
//           "state budget",
//         ],
//       },
//       {
//         name: "विधानसभा समिति",
//         path: "/committees1",
//         keywords: [
//           "समितियाँ",
//           "विधानसभा समिति",
//           "assembly committees",
//           "committees",
//         ],
//       },
//       {
//         name: "राष्ट्रपति शासन",
//         path: "/presidentrule",
//         keywords: [
//           "राष्ट्रपति शासन",
//           "president rule",
//           "president's rule",
//         ],
//       },
//       {
//         name: "अविश्वास प्रस्ताव",
//         path: "/avishwasprastav",
//         keywords: [
//           "अविश्वास प्रस्ताव",
//           "no confidence motion",
//           "ncm",
//         ],
//       },
//       {
//         name: "स्वर्णिम मध्य प्रदेश के निर्माण का संकल्प",
//         path: "/misc/sankalp2010.pdf",
//         keywords: [
//           "स्वर्णिम मध्य प्रदेश",
//           "निर्माण का संकल्प",
//           "sankalp 2010",
//           "golden madhya pradesh",
//         ],
//       },
//     ],
//   },
//   {
//     title: "प्रेस विज्ञप्ति",
//     options: [],
//     path: "/pressrelease",
//     keywords: [
//       "प्रेस विज्ञप्ति",
//       "प्रेस नोट",
//       "press",
//       "press release",
//       "press note",
//     ],
//   },
//   {
//     title: "छायाचित्र",
//     options: [],
//     path: "/gallery",
//     keywords: [
//       "छायाचित्र",
//       "फोटो",
//       "तस्वीरें",
//       "gallery",
//       "photos",
//       "images",
//     ],
//   },
// ];

// const Navbar = ({ menuItems = sampleMenu }) => {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("theme") === "dark"
//   );
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);
//   const [noResult, setNoResult] = useState(false);
//   const navigate = useNavigate();

//   // keep theme persisted
//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark-mode");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.body.classList.remove("dark-mode");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   // Recursive helper to search through nested options
//   const searchMenuRecursive = (items, q, parentTitle = "") => {
//     const found = [];
//     items.forEach((m) => {
//       const title = (m.title || m.name || "").toLowerCase();
//       if (title.includes(q)) {
//         found.push({
//           label: parentTitle ? `${parentTitle} › ${m.title || m.name}` : (m.title || m.name),
//           path: m.path || (m.options && m.options[0]?.path) || "#",
//         });
//       }
//       // if item has keywords, search them too
//       if (m.keywords && Array.isArray(m.keywords)) {
//         m.keywords.forEach((k) => {
//           if (k.toLowerCase().includes(q)) {
//             found.push({
//               label: parentTitle ? `${parentTitle} › ${m.title || m.name}` : (m.title || m.name),
//               path: m.path || (m.options && m.options[0]?.path) || "#",
//             });
//           }
//         });
//       }
//       if (m.options) {
//         // if m has nested options, search them with parent title set
//         found.push(...searchMenuRecursive(m.options, q, m.title || m.name || parentTitle));
//       }
//     });
//     return found;
//   };

//   // search effect (uses recursive search)
//   useEffect(() => {
//     const q = searchTerm.trim().toLowerCase();
//     if (!q) {
//       setResults([]);
//       setShowResults(false);
//       return;
//     }

//     const found = searchMenuRecursive(menuItems, q);
//     // remove duplicates by path+label
//     const unique = [];
//     const seen = new Set();
//     found.forEach((f) => {
//       const key = `${f.label}||${f.path}`;
//       if (!seen.has(key)) {
//         seen.add(key);
//         unique.push(f);
//       }
//     });

//     setResults(unique);
//     setShowResults(unique.length > 0);
//   }, [searchTerm, menuItems]);

//   const handleResultClick = (res) => {
//     setShowResults(false);
//     setSearchTerm("");
//     if (!res.path) return;
//     if (res.path.startsWith("http") || res.path.endsWith(".pdf")) {
//       window.open(res.path, "_blank", "noopener,noreferrer");
//     } else {
//       navigate(res.path);
//     }
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (results.length > 0) handleResultClick(results[0]);
//     else {
//       setNoResult(true);
//       setTimeout(() => setNoResult(false), 2500);
//     }
//   };

//   // small hover dropdown enhancement (works with Bootstrap's dropdown)
//   useEffect(() => {
//     const dropdowns = document.querySelectorAll(".mpvs-nav .nav-item.dropdown");
//     dropdowns.forEach((d) => {
//       d.addEventListener("mouseenter", () => {
//         const toggle = d.querySelector(".dropdown-toggle");
//         const menu = d.querySelector(".dropdown-menu");
//         if (toggle && menu) {
//           toggle.classList.add("show");
//           menu.classList.add("show");
//         }
//       });
//       d.addEventListener("mouseleave", () => {
//         const toggle = d.querySelector(".dropdown-toggle");
//         const menu = d.querySelector(".dropdown-menu");
//         if (toggle && menu) {
//           toggle.classList.remove("show");
//           menu.classList.remove("show");
//         }
//       });
//     });
//     // cleanup not strictly necessary here (component lifetime typically whole app)
//   }, []);

//   // helper render for nested options (supports arbitrary 2-level nesting used here)
//   const renderOption = (opt, keyPrefix = "") => {
//     // If opt is a nested group (has .options and perhaps a .title)
//     if (opt.options && Array.isArray(opt.options)) {
//       const titleOrName = opt.title || opt.name || "submenu";
//       return (
//         <li key={keyPrefix + titleOrName} className="dropdown-submenu dropend">
//           <a
//             className="dropdown-item dropdown-toggle"
//             href="#"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             {titleOrName}
//           </a>
//           <ul className="dropdown-menu">
//             {opt.options.map((sub, j) => (
//               <li key={`${keyPrefix}sub-${j}`}>
//                 {sub.path && (sub.path.startsWith("http") || sub.path.endsWith(".pdf")) ? (
//                   <a className="dropdown-item" href={sub.path} target="_blank" rel="noreferrer">{sub.name}</a>
//                 ) : (
//                   <Link className="dropdown-item" to={sub.path || "#"}>{sub.name}</Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </li>
//       );
//     }

//     // regular single-level option
//     return (
//       <li key={keyPrefix + (opt.name || opt.path || Math.random())}>
//         {opt.path && (opt.path.startsWith("http") || opt.path.endsWith(".pdf")) ? (
//           <a className="dropdown-item" href={opt.path} target="_blank" rel="noreferrer">{opt.name}</a>
//         ) : (
//           <Link className="dropdown-item" to={opt.path || "#"}>{opt.name}</Link>
//         )}
//       </li>
//     );
//   };

//   return (
//     <header className={`site-header ${darkMode ? "dark" : "light"}`}>


//       {/* Main header (logo + title + right emblem) */}
//       <div className="main-header container-fluid d-flex align-items-center justify-content-between">
//         <div className="brand d-flex align-items-center">
//           {/* Use the uploaded file as emblem / image */}
//           <img
//             src="/misc/mpvs_Logo.jpeg"
//             alt="MP Emblem"
//             className="brand-emblem"
//           />
//           <div className="brand-text ms-3">
//             <div className="brand-title">मध्य प्रदेश विधानसभा</div>
//             <div className="brand-subtitle">Madhya Pradesh Vidhan Sabha </div>
//           </div>
//         </div>

//         <div className="header-side d-flex align-items-center">
//           {/* rightside small logo or program icon */}
//           <img
//             src="/misc/swachh-bharat-mission.webp"
//             alt="side logo"
//             className="side-logo d-none d-md-inline"
//             onError={(e) => { e.target.style.display = 'none'; }}
//           />
//         </div>
//       </div>

//       {/* Royal blue nav (sticky) */}
//       <nav className="mpvs-nav navbar navbar-expand-lg sticky-top">
//         <div className="container-fluid">
//           {/* left home box */}
//           <div className="nav-left d-flex align-items-center">
//             <Link to="/" className="home-box d-flex align-items-center justify-content-center" aria-label="Home">
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
//                 <path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z" fill="#fff" />
//               </svg>
//             </Link>
//           </div>

//           {/* toggler for small screens */}
//           <button
//             className="navbar-toggler custom-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#mpvsNavbar"
//             aria-controls="mpvsNavbar"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>

//           <div className="collapse navbar-collapse" id="mpvsNavbar">
//             {/* center menus */}
//             <ul className="navbar-nav mx-auto mpvs-nav">
//               {menuItems.map((item, idx) => (
//                 <li key={idx} className={`nav-item ${item.options ? "dropdown" : ""}`}>
//                   {item.options ? (
//                     <>
//                       <a
//                         className="nav-link dropdown-toggle text-white fw-semibold"
//                         href="#"
//                         id={`navDropdown${idx}`}
//                         role="button"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       >
//                         {item.title}
//                       </a>

//                       <ul className="dropdown-menu shadow-sm" aria-labelledby={`navDropdown${idx}`}>
//                         {item.options.map((opt, i) => renderOption(opt, `${idx}-${i}-`))}
//                       </ul>
//                     </>
//                   ) : (
//                     <Link className="nav-link text-white fw-semibold" to={item.path}>{item.title}</Link>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             {/* right side: search + buttons */}
//             <div className="d-flex align-items-center gap-2">
//               <form className="d-flex position-relative" onSubmit={handleSearchSubmit}>
//                 <input
//                   className="form-control form-control-sm search-input"
//                   type="search"
//                   placeholder="खोजें / Search..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   onFocus={() => { if (results.length) setShowResults(true); }}
//                   onBlur={() => setTimeout(() => setShowResults(false), 150)}
//                 />
//                 {showResults && results.length > 0 && (
//                   <ul className="list-group search-results shadow-sm">
//                     {results.map((r, i) => (
//                       <li key={i} className="list-group-item list-group-item-action" onMouseDown={() => handleResultClick(r)}>
//                         {r.label}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </form>

//               <Link to="/vidhansabha-tour23" className="btn btn-royal btn-sm">
//                 <span>विधानसभा भ्रमण</span>
//               </Link>


//               <button className="btn btn-outline-light btn-sm" onClick={() => setDarkMode(!darkMode)}>
//                 {darkMode ? "☀️ Light" : "🌙 Dark"}
//               </button>

//               <div className="more-dropdown dropdown d-none d-lg-block">
//                 <button className="btn btn-more dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">More</button>
//                 <ul className="dropdown-menu dropdown-menu-end">
//                   <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
//                   <li><Link className="dropdown-item" to="/help">Help</Link></li>
//                 </ul>
//               </div>
//             </div>
//           </div> 
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;






// Navbar.jsx
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";


// const sampleMenu = [
//   // ... your sampleMenu unchanged (keep the same array you already have) ...
//   {
//     title: "राज्यपाल",
//     options: [
//       {
//         name: "वर्तमान",
//         path: "/gov",
//         keywords: [
//           "राज्यपाल",
//           "वर्तमान राज्यपाल",
//           "मौजूदा राज्यपाल",
//           "governor",
//           "current governor",
//           "rajyapal",
//         ],
//       },
//       {
//         name: "भूतपूर्व ",
//         path: "/govlst",
//         keywords: [
//           "राज्यपाल",
//           "भूतपूर्व राज्यपाल",
//           "पूर्व राज्यपाल",
//           "ex governor",
//           "former governor",
//         ],
//       },
//     ],
//   },
//   // ... keep rest of sampleMenu as you provided ...
//   {
//     title: "अध्यक्ष",
//     options: [
//       {
//         name: "वर्तमान",
//         path: "/nst",
//         keywords: [
//           "अध्यक्ष",
//           "वर्तमान अध्यक्ष",
//           "speaker",
//           "current speaker",
//           "sabha adhyaksh",
//         ],
//       },
//       {
//         name: "भूतपूर्व ",
//         path: "/spklist",
//         keywords: [
//           "पूर्व अध्यक्ष",
//           "भूतपूर्व अध्यक्ष",
//           "ex speaker",
//           "former speaker",
//         ],
//       },
//     ],
//   },
//   // ... (rest omitted here for brevity — keep the full array in your file) ...
// ];
// const sampleMenu = [
//   {
//     title: "राज्यपाल",
//     options: [
//       {
//         name: "वर्तमान",
//         path: "/gov",
//         keywords: [
//           "राज्यपाल",
//           "वर्तमान राज्यपाल",
//           "मौजूदा राज्यपाल",
//           "governor",
//           "current governor",
//           "rajyapal",
//         ],
//       },
//       {
//         name: "भूतपूर्व ",
//         path: "/govlst",
//         keywords: [
//           "राज्यपाल",
//           "भूतपूर्व राज्यपाल",
//           "पूर्व राज्यपाल",
//           "ex governor",
//           "former governor",
//         ],
//       },
//     ],
//   },
//   {
//     title: "अध्यक्ष",
//     options: [
//       {
//         name: "वर्तमान",
//         path: "/nst",
//         keywords: [
//           "अध्यक्ष",
//           "वर्तमान अध्यक्ष",
//           "speaker",
//           "current speaker",
//           "sabha adhyaksh",
//         ],
//       },
//       {
//         name: "भूतपूर्व ",
//         path: "/spklist",
//         keywords: [
//           "पूर्व अध्यक्ष",
//           "भूतपूर्व अध्यक्ष",
//           "ex speaker",
//           "former speaker",
//         ],
//       },
//     ],
//   },
//   {
//     title: "उपाध्यक्ष",
//     options: [
//       {
//         name: "भूतपूर्व ",
//         path: "/uplist",
//         keywords: [
//           "उपाध्यक्ष",
//           "भूतपूर्व उपाध्यक्ष",
//           "पूर्व उपाध्यक्ष",
//           "deputy speaker",
//           "ex deputy speaker",
//         ],
//       },
//     ],
//   },
//   {
//     title: "नेता प्रतिपक्ष",
//     options: [
//       {
//         name: "वर्तमान ",
//         path: "/umg",
//         keywords: [
//           "नेता प्रतिपक्ष",
//           "वर्तमान नेता प्रतिपक्ष",
//           "lop",
//           "leader of opposition",
//           "current lop",
//         ],
//       },
//       {
//         name: "भूतपूर्व ",
//         path: "/umglst",
//         keywords: [
//           "भूतपूर्व नेता प्रतिपक्ष",
//           "पूर्व नेता प्रतिपक्ष",
//           "former lop",
//           "ex leader of opposition",
//         ],
//       },
//     ],
//   },
//   {
//     title: "मुख्यमंत्री",
//     options: [
//       {
//         name: "वर्तमान ",
//         path: "/cm",
//         keywords: [
//           "मुख्यमंत्री",
//           "वर्तमान मुख्यमंत्री",
//           "cm",
//           "chief minister",
//           "current chief minister",
//         ],
//       },
//       {
//         name: "भूतपूर्व ",
//         path: "/cmlist",
//         keywords: [
//           "भूतपूर्व मुख्यमंत्री",
//           "पूर्व मुख्यमंत्री",
//           "former chief minister",
//           "ex cm",
//         ],
//       },
//     ],
//   },
//   {
//     title: "मंत्रिमण्डल",
//     options: [
//       {
//         name: " मंत्रिमण्डल",
//         path: "/mlagroup",
//         keywords: [
//           "मंत्रिमंडल",
//           "वर्तमान मंत्रिमंडल",
//           "cabinet",
//           "council of ministers",
//         ],
//       },
//       {
//         name: "पूर्व मंत्रिमण्डल ",
//         path: "/mlagroupall",
//         keywords: [
//           "पूर्व मंत्रिमंडल",
//           "भूतपूर्व मंत्रिमंडल",
//           "former cabinet",
//           "past cabinets",
//         ],
//       },
//       {
//         name: "संपत्ति विवरण ",
//         path: "/propertydescarchieve",
//         keywords: [
//           "संपत्ति विवरण",
//           "मंत्रियों की संपत्ति",
//           "property details ",
//           "assets",
//         ],
//       },
//     ],
//   },
//   {
//     title: "सचिवालय",
//     options: [
//       {
//         name: "विधान सभा सचिवालय",
//         path: "/vssachiwalya",
//         keywords: [
//           "विधान सभा सचिवालय",
//           "सचिवालय",
//           "vidhan sabha secretariat",
//           "assembly secretariat",
//         ],
//       },
//       {
//         name: "सचिव / प्रमुख सचिव",
//         path: "/sachivpramukhsachiv",
//         keywords: [
//           "सचिव",
//           "प्रमुख सचिव",
//           "secretary",
//           "principal secretary",
//         ],
//       },
//       {
//         name: "विधान सभा भवन",
//         path: "/vsbhawan",
//         keywords: [
//           "विधानसभा भवन",
//           "भवन",
//           "assembly building",
//           "vidhan sabha bhawan",
//         ],
//       },
//       {
//         name: "सूचना का अधिकार (राजपत्र)",
//         path: "/misc/rti.pdf",
//         keywords: [
//           "(राजपत्र)",
//           "सूचना का अधिकार",
//           "आरटीआई",
//           "राजपत्र",
//           "rti gazette",
//           "right to information",
//         ],
//       },
//       {
//         name: "सूचना का अधिकार (मैन्युअल)",
//         path: "/misc/rtimanual.pdf",
//         keywords: [
//           "सूचना का अधिकार मैन्युअल",
//           "आरटीआई मैन्युअल",
//           "manual",
//           "right to information manual",
//         ],
//       },
//       {
//         name: "पुरस्कार योजना",
//         path: "/puruskaryojna",
//         keywords: [
//           "पुरस्कार योजना",
//           "पुरस्कार",
//           "award scheme",
//           "awards",
//         ],
//       },
//       {
//         name: "पीठासीन अधिकारी सम्मेलन",
//         path: "/pithasinadhikarisammmelan",
//         keywords: [
//           "पीठासीन अधिकारी",
//           "सम्मेलन",
//           "presiding officers conference",
//         ],
//       },
//       {
//         name: "संपत्ति विवरण",
//         path: "/sachiwalyasampativivran",
//         keywords: [
//           "संपत्ति विवरण",
//           "सचिवालय संपत्ति",
//           "property details",
//           "assets details",
//         ],
//       },
//       {
//         name: "विधानसभा पुस्तकालय",
//         path: "/libarypage",
//         keywords: [
//           "पुस्तकालय",
//           "विधानसभा पुस्तकालय",
//           "library",
//           "assembly library",
//         ],
//       },
//       {
//         name: "तथ्य पत्रक : पेयजल",
//         path: "/misc/peyjal191015.pdf",
//         keywords: [
//           "तथ्य पत्रक",
//           "पेयजल",
//           "water factsheet",
//           "factsheet drinking water",
//         ],
//       },
//       {
//         name: "सचिवालय प्रकाशन",
//         path: "/sachivalayaprakashan",
//         keywords: [
//           "सचिवालय प्रकाशन",
//           "प्रकाशन",
//           "secretariat publications",
//           "publications",
//         ],
//       },
//     ],
//   },
//   {
//     title: "सदस्यगण",
//     options: [
//       {
//         name: "वर्तमान",
//         path: "/sadasyaganvartman",
//         keywords: [
//           "वर्तमान",
//           "वर्तमान सदस्य",
//           "वर्तमान विधायक",
//           "current members",
//           "current mlas",
//         ],
//       },
//       {
//         name: "पंचदश विधान सभा",
//         path: "/sadasyaganpanchdash",
//         keywords: [
//           "पंचदश विधानसभा",
//           "15वीं विधानसभा",
//           "15th assembly",
//           "15th vidhan sabha",
//         ],
//       },
//       {
//         name: "चतुर्दश विधान सभा",
//         path: "/sadasyaganchaturthdas",
//         keywords: [
//           "चतुर्दश विधानसभा",
//           "14वीं विधानसभा",
//           "14th assembly",
//           "14th vidhan sabha",
//         ],
//       },
//       {
//         name: "त्रयोदश विधान सभा",
//         path: "/sadasyagantrayodash",
//         keywords: [
//           "त्रयोदश विधानसभा",
//           "13वीं विधानसभा",
//           "13th assembly",
//           "13th vidhan sabha",
//         ],
//       },
//       {
//         name: "द्वादश विधान सभा",
//         path: "/sadasyagandwadash",
//         keywords: [
//           "द्वादश विधानसभा",
//           "12वीं विधानसभा",
//           "12th assembly",
//           "12th vidhan sabha",
//         ],
//       },
//       {
//         name: "एकादश विधान सभा",
//         path: "/sadasyaganekadash",
//         keywords: [
//           "एकादश विधानसभा",
//           "11वीं विधानसभा",
//           "11th assembly",
//           "11th vidhan sabha",
//         ],
//       },
//       {
//         name: "नामनिर्दिष्ट सदस्य",
//         path: "/misc/nominated.pdf",
//         keywords: [
//           "नामनिर्दिष्ट सदस्य",
//           "नामित सदस्य",
//           "nominated members",
//         ],
//       },
//       {
//         name: "राज्य सभा सदस्य",
//         path: "/sadasyaganrajyasabha",
//         keywords: [
//           "राज्यसभा सदस्य",
//           "राज्य सभा सदस्य",
//           "rajya sabha members",
//           "rs members",
//         ],
//       },
//       {
//         name: "लोक सभा सदस्य",
//         path: "https://sansad.in/ls/members",
//         keywords: [
//           "लोकसभा सदस्य",
//           "लोक सभा सदस्य",
//           "lok sabha members",
//           "mp list",
//         ],
//       },
//       // Nested submenu kept here:
//       {
//         title: "सुविधाएं",
//         options: [
//           {
//             name: "अध्यक्ष / उपाध्यक्ष",
//             path: "/misc/speaker.pdf",
//             keywords: [
//               "अध्यक्ष / उपाध्यक्ष",
//               "अध्यक्ष सुविधा",
//               "उपाध्यक्ष सुविधा",
//               "speaker facilities",
//               "deputy speaker facilities",
//             ],
//           },
//           {
//             name: "नेता प्रतिपक्ष",
//             path: "/misc/opp_leader.pdf",
//             keywords: [
//               "नेता प्रतिपक्ष",
//               "नेता प्रतिपक्ष सुविधा",
//               "lop facilities",
//               "leader of opposition facilities",
//             ],
//           },
//           {
//             name: "मंत्री",
//             path: "/misc/minister.pdf",
//             keywords: [
//               "मंत्री",
//               "मंत्री सुविधा",
//               "minister facilities",
//               "suvidha mantri",
//             ],
//           },
//           {
//             name: "विधायक",
//             path: "/misc/member_all.pdf",
//             keywords: [
//               "विधायक",
//               "विधायक सुविधा",
//               "mla facilities",
//               "suvidha vidhayak",
//             ],
//           },
//           {
//             name: "भूतपूर्व विधायक",
//             path: "/sadasyagan/pensionrules",
//             keywords: [
//               "भूतपूर्व विधायक",
//               "पूर्व विधायक",
//               "ex mla",
//               "pension rules",
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "सदन संबंधी",
//     options: [
//       {
//         name: "सत्र अधिसूचना",
//         path: "/satradhisuchna",
//         keywords: [
//           "सत्र अधिसूचना",
//           "session notification",
//           "session notice",
//         ],
//       },
//       {
//         name: "दैनिक कार्यसूची",
//         path: "/dainik",
//         keywords: [
//           "दैनिक कार्यसूची",
//           "दिन की कार्यसूची",
//           "कार्यसूची",
//           "daily agenda",
//           "list of business",
//         ],
//       },
//       {
//         name: "विधायन",
//         path: "/vidhyan",
//         keywords: [
//           "विधायन",
//           "विधेयक",
//           "bills",
//           "legislation",
//         ],
//       },
//       {
//         name: "विधानसभा कार्यवाही",
//         path: "/vidhansabhakarywahi",
//         keywords: [
//           "विधानसभा कार्यवाही",
//           "सदन की कार्यवाही",
//           "house proceedings",
//           "debates",
//         ],
//       },
//       {
//         name: "संक्षिप्त कार्य विवरण",
//         path: "/sankshiptkaryavivran",
//         keywords: [
//           "संक्षिप्त कार्य विवरण",
//           "संक्षिप्त विवरण",
//           "short work summary",
//           "resume of work",
//         ],
//       },
//       {
//         name: "सत्र संबंधी संक्षिप्त जानकारी",
//         path: "/satrsambandhisankshiptjankari",
//         keywords: [
//           "सत्र संबंधी संक्षिप्त जानकारी",
//           "session information",
//           "session summary",
//         ],
//       },
//       {
//         name: "पत्रक भाग-दो",
//         path: "/patrakbhag-02",
//         keywords: [
//           "पत्रक भाग-दो",
//           "बुलेटिन भाग-दो",
//           "bulletin part 2",
//           "part ii",
//         ],
//       },
//       {
//         name: "सत्रों की बैठकों का विवरण",
//         path: "/misc/sittingdetail.pdf",
//         keywords: [
//           "सत्रों बैठकों का विवरण",
//           "सत्रों की बैठकें",
//           "sitting details",
//           "session sittings",
//         ],
//       },
//       {
//         name: "राज्यपाल का अभिभाषण",
//         path: "/abhibhashan",
//         keywords: [
//           "राज्यपाल का अभिभाषण",
//           "अभिभाषण",
//           "governor address",
//           "address by governor",
//         ],
//       },
//       {
//         name: "बजट प्रस्तुति",
//         path: "/budgetprastuti",
//         keywords: [
//           "बजट प्रस्तुति",
//           "बजट",
//           "budget presentation",
//           "state budget",
//         ],
//       },
//       {
//         name: "विधानसभा समिति",
//         path: "/committees1",
//         keywords: [
//           "समितियाँ",
//           "विधानसभा समिति",
//           "assembly committees",
//           "committees",
//         ],
//       },
//       {
//         name: "राष्ट्रपति शासन",
//         path: "/presidentrule",
//         keywords: [
//           "राष्ट्रपति शासन",
//           "president rule",
//           "president's rule",
//         ],
//       },
//       {
//         name: "अविश्वास प्रस्ताव",
//         path: "/avishwasprastav",
//         keywords: [
//           "अविश्वास प्रस्ताव",
//           "no confidence motion",
//           "ncm",
//         ],
//       },
//       {
//         name: "स्वर्णिम मध्य प्रदेश के निर्माण का संकल्प",
//         path: "/misc/sankalp2010.pdf",
//         keywords: [
//           "स्वर्णिम मध्य प्रदेश",
//           "निर्माण का संकल्प",
//           "sankalp 2010",
//           "golden madhya pradesh",
//         ],
//       },
//     ],
//   },
//   {
//     title: "प्रेस विज्ञप्ति",
//     options: [],
//     path: "/pressrelease",
//     keywords: [
//       "प्रेस विज्ञप्ति",
//       "प्रेस नोट",
//       "press",
//       "press release",
//       "press note",
//     ],
//   },
//   {
//     title: "छायाचित्र",
//     options: [],
//     path: "/gallery",
//     keywords: [
//       "छायाचित्र",
//       "फोटो",
//       "तस्वीरें",
//       "gallery",
//       "photos",
//       "images",
//     ],
//   },
// ];

// const Navbar = ({ menuItems = sampleMenu }) => {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("theme") === "dark"
//   );
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);
//   const [noResult, setNoResult] = useState(false);
//   const navigate = useNavigate();

//   // keep theme persisted
//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark-mode");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.body.classList.remove("dark-mode");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   // Recursive helper to search through nested options
//   const searchMenuRecursive = (items, q, parentTitle = "") => {
//     const found = [];
//     items.forEach((m) => {
//       const title = (m.title || m.name || "").toLowerCase();
//       if (title.includes(q)) {
//         found.push({
//           label: parentTitle ? `${parentTitle} › ${m.title || m.name}` : (m.title || m.name),
//           path: m.path || (m.options && m.options[0]?.path) || "#",
//         });
//       }
//       // if item has keywords, search them too
//       if (m.keywords && Array.isArray(m.keywords)) {
//         m.keywords.forEach((k) => {
//           if (k.toLowerCase().includes(q)) {
//             found.push({
//               label: parentTitle ? `${parentTitle} › ${m.title || m.name}` : (m.title || m.name),
//               path: m.path || (m.options && m.options[0]?.path) || "#",
//             });
//           }
//         });
//       }
//       if (m.options) {
//         // if m has nested options, search them with parent title set
//         found.push(...searchMenuRecursive(m.options, q, m.title || m.name || parentTitle));
//       }
//     });
//     return found;
//   };

//   // search effect (uses recursive search)
//   useEffect(() => {
//     const q = searchTerm.trim().toLowerCase();
//     if (!q) {
//       setResults([]);
//       setShowResults(false);
//       return;
//     }

//     const found = searchMenuRecursive(menuItems, q);
//     // remove duplicates by path+label
//     const unique = [];
//     const seen = new Set();
//     found.forEach((f) => {
//       const key = `${f.label}||${f.path}`;
//       if (!seen.has(key)) {
//         seen.add(key);
//         unique.push(f);
//       }
//     });

//     setResults(unique);
//     setShowResults(unique.length > 0);
//   }, [searchTerm, menuItems]);

//   const handleResultClick = (res) => {
//     setShowResults(false);
//     setSearchTerm("");
//     if (!res.path) return;
//     if (res.path.startsWith("http") || res.path.endsWith(".pdf")) {
//       window.open(res.path, "_blank", "noopener,noreferrer");
//     } else {
//       navigate(res.path);
//     }
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (results.length > 0) handleResultClick(results[0]);
//     else {
//       setNoResult(true);
//       setTimeout(() => setNoResult(false), 2500);
//     }
//   };

//   // Hover dropdown enhancement (desktop) — with cleanup
//   useEffect(() => {
//     const dropdowns = Array.from(document.querySelectorAll(".mpvs-nav .nav-item.dropdown"));
//     const mq = window.matchMedia("(min-width: 992px)");

//     const mouseEnterHandlers = new Map();
//     const mouseLeaveHandlers = new Map();

//     dropdowns.forEach((d) => {
//       const onEnter = () => {
//         if (mq.matches) {
//           const toggle = d.querySelector(".dropdown-toggle");
//           const menu = d.querySelector(".dropdown-menu");
//           if (toggle) toggle.classList.add("show");
//           if (menu) menu.classList.add("show");
//         }
//       };
//       const onLeave = () => {
//         if (mq.matches) {
//           const toggle = d.querySelector(".dropdown-toggle");
//           const menu = d.querySelector(".dropdown-menu");
//           if (toggle) toggle.classList.remove("show");
//           if (menu) menu.classList.remove("show");
//         }
//       };
//       d.addEventListener("mouseenter", onEnter);
//       d.addEventListener("mouseleave", onLeave);
//       mouseEnterHandlers.set(d, onEnter);
//       mouseLeaveHandlers.set(d, onLeave);
//     });

//     const onResize = () => {
//       // remove any leftover 'show' classes when switching to mobile view
//       if (!mq.matches) {
//         dropdowns.forEach((d) => {
//           const toggle = d.querySelector(".dropdown-toggle");
//           const menu = d.querySelector(".dropdown-menu");
//           toggle && toggle.classList.remove("show");
//           menu && menu.classList.remove("show");
//         });
//       }
//     };
//     window.addEventListener("resize", onResize);

//     return () => {
//       dropdowns.forEach((d) => {
//         d.removeEventListener("mouseenter", mouseEnterHandlers.get(d));
//         d.removeEventListener("mouseleave", mouseLeaveHandlers.get(d));
//       });
//       window.removeEventListener("resize", onResize);
//     };
//   }, []);

//   /**
//    * Mobile: nested submenu click/toggle logic
//    * - On small screens we want clicking the parent dropdown-toggle inside .dropdown-submenu
//    *   to toggle the nested submenu (instead of immediately navigating or relying on BS).
//    * - We add handlers and clean them up on unmount.
//    */
//   useEffect(() => {
//     const submenuToggles = Array.from(document.querySelectorAll(".dropdown-submenu > .dropdown-toggle"));

//     const handlers = new Map();

//     const isDesktop = () => window.matchMedia("(min-width: 992px)").matches;

//     submenuToggles.forEach((toggle) => {
//       const handler = (e) => {
//         // On desktop, let hover behavior handle it — only intercept on small screens
//         if (isDesktop()) return;
//         e.preventDefault();
//         e.stopPropagation();
//         const submenu = toggle.nextElementSibling;
//         if (!submenu) return;
//         // toggle show class on submenu; Bootstrap dropdowns use 'show'
//         submenu.classList.toggle("show");
//       };
//       toggle.addEventListener("click", handler);
//       handlers.set(toggle, handler);
//     });

//     // Close any open nested submenus when clicking outside (mobile)
//     const onDocClick = (ev) => {
//       if (isDesktop()) return;
//       // if click is inside an open dropdown submenu or its toggle, do nothing
//       const openSubmenus = Array.from(document.querySelectorAll(".dropdown-submenu .dropdown-menu.show"));
//       if (openSubmenus.length === 0) return;
//       const clickedInsideAny = openSubmenus.some((menu) => menu.contains(ev.target));
//       if (!clickedInsideAny) {
//         openSubmenus.forEach((m) => m.classList.remove("show"));
//       }
//     };
//     document.addEventListener("click", onDocClick);

//     return () => {
//       submenuToggles.forEach((toggle) => {
//         toggle.removeEventListener("click", handlers.get(toggle));
//       });
//       document.removeEventListener("click", onDocClick);
//     };
//   }, []); // run once on mount

//   // helper render for nested options (supports arbitrary 2-level nesting used here)
//   const renderOption = (opt, keyPrefix = "") => {
//     // If opt is a nested group (has .options and perhaps a .title)
//     if (opt.options && Array.isArray(opt.options)) {
//       const titleOrName = opt.title || opt.name || "submenu";
//       return (
//         <li key={keyPrefix + titleOrName} className="dropdown-submenu dropend">
//           <a
//             className="dropdown-item dropdown-toggle"
//             href="#"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             {titleOrName}
//           </a>
//           <ul className="dropdown-menu">
//             {opt.options.map((sub, j) => (
//               <li key={`${keyPrefix}sub-${j}`}>
//                 {sub.path && (sub.path.startsWith("http") || sub.path.endsWith(".pdf")) ? (
//                   <a className="dropdown-item" href={sub.path} target="_blank" rel="noreferrer">{sub.name}</a>
//                 ) : (
//                   <Link className="dropdown-item" to={sub.path || "#"}>{sub.name}</Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </li>
//       );
//     }

//     // regular single-level option
//     return (
//       <li key={keyPrefix + (opt.name || opt.path || Math.random())}>
//         {opt.path && (opt.path.startsWith("http") || opt.path.endsWith(".pdf")) ? (
//           <a className="dropdown-item" href={opt.path} target="_blank" rel="noreferrer">{opt.name}</a>
//         ) : (
//           <Link className="dropdown-item" to={opt.path || "#"}>{opt.name}</Link>
//         )}
//       </li>
//     );
//   };

//   return (
//     <header className={`site-header ${darkMode ? "dark" : "light"}`}>

//       {/* Main header (logo + title + right emblem) */}
//       <div className="main-header container-fluid d-flex align-items-center justify-content-between">
//         <div className="brand d-flex align-items-center">
//           {/* Use the uploaded file as emblem / image */}
//           <img
//             src="/misc/mpvs_Logo.jpeg"
//             alt="MP Emblem"
//             className="brand-emblem"
//           />
//           <div className="brand-text ms-3">
//             <div className="brand-title">मध्य प्रदेश विधानसभा</div>
//             <div className="brand-subtitle">Madhya Pradesh Vidhan Sabha </div>
//           </div>
//         </div>

//         <div className="header-side d-flex align-items-center">
//           {/* rightside small logo or program icon */}
//           <img
//             src="/misc/swachh-bharat-mission.webp"
//             alt="side logo"
//             className="side-logo d-none d-md-inline"
//             onError={(e) => { e.target.style.display = 'none'; }}
//           />
//         </div>
//       </div>

//       {/* Royal blue nav (sticky) */}
//       <nav className="mpvs-nav navbar navbar-expand-lg sticky-top">
//         <div className="container-fluid">
//           {/* left home box */}
//           <div className="nav-left d-flex align-items-center">
//             <Link to="/" className="home-box d-flex align-items-center justify-content-center" aria-label="Home">
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
//                 <path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z" fill="#fff" />
//               </svg>
//             </Link>
//           </div>

//           {/* toggler for small screens */}
//           <button
//             className="navbar-toggler custom-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#mpvsNavbar"
//             aria-controls="mpvsNavbar"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>

//           <div className="collapse navbar-collapse" id="mpvsNavbar">
//             {/* center menus */}
//             <ul className="navbar-nav mx-auto mpvs-nav nav-center">

//               {menuItems.map((item, idx) => (
//                 <li key={idx} className={`nav-item ${item.options ? "dropdown" : ""}`}>
//                   {item.options ? (
//                     <>
//                       <a
//                         className="nav-link dropdown-toggle text-white fw-semibold"
//                         href="#"
//                         id={`navDropdown${idx}`}
//                         role="button"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       >
//                         {item.title}
//                       </a>

//                       <ul className="dropdown-menu shadow-sm" aria-labelledby={`navDropdown${idx}`}>
//                         {item.options.map((opt, i) => renderOption(opt, `${idx}-${i}-`))}
//                       </ul>
//                     </>
//                   ) : (
//                     <Link className="nav-link text-white fw-semibold" to={item.path}>{item.title}</Link>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             {/* right side: search + buttons */}
//             <div className="right-controls d-flex align-items-center gap-2">
//               <form className="d-flex position-relative" onSubmit={handleSearchSubmit}>
//                 <input
//                   className="form-control form-control-sm search-input"
//                   type="search"
//                   placeholder="खोजें / Search..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   onFocus={() => { if (results.length) setShowResults(true); }}
//                   onBlur={() => setTimeout(() => setShowResults(false), 150)}
//                 />
//                 {showResults && results.length > 0 && (
//                   <ul className="list-group search-results shadow-sm">
//                     {results.map((r, i) => (
//                       <li key={i} className="list-group-item list-group-item-action" onMouseDown={() => handleResultClick(r)}>
//                         {r.label}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </form>

//               <Link to="/vidhansabha-tour23" className="btn btn-royal btn-sm">
//                 <span>विधानसभा भ्रमण</span>
//               </Link>

//               <button className="btn btn-outline-light btn-sm" onClick={() => setDarkMode(!darkMode)}>
//                 {darkMode ? "☀️ Light" : "🌙 Dark"}
//               </button>


//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;




// Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [noResult, setNoResult] = useState(false);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);





  const menuItems = [
    {
      title: "राज्यपाल",
      options: [
        {
          name: "वर्तमान",
          path: "/gov",
          keywords: [
            "राज्यपाल",
            "वर्तमान राज्यपाल",
            "मौजूदा राज्यपाल",
            "governor",
            "current governor",
            "rajyapal",
          ],
        },
        {
          name: "भूतपूर्व ",
          path: "/govlst",
          keywords: [
            "राज्यपाल",
            "भूतपूर्व राज्यपाल",
            "पूर्व राज्यपाल",
            "ex governor",
            "former governor",
          ],
        },
      ],
    },
    {
      title: "अध्यक्ष",
      options: [
        {
          name: "वर्तमान",
          path: "/nst",
          keywords: [
            "अध्यक्ष",
            "वर्तमान अध्यक्ष",
            "speaker",
            "current speaker",
            "sabha adhyaksh",
          ],
        },
        {
          name: "भूतपूर्व ",
          path: "/spklist",
          keywords: [
            "पूर्व अध्यक्ष",
            "भूतपूर्व अध्यक्ष",
            "ex speaker",
            "former speaker",
          ],
        },
      ],
    },
    {
      title: "उपाध्यक्ष",
      options: [
        {
          name: "भूतपूर्व ",
          path: "/uplist",
          keywords: [
            "उपाध्यक्ष",
            "भूतपूर्व उपाध्यक्ष",
            "पूर्व उपाध्यक्ष",
            "deputy speaker",
            "ex deputy speaker",
          ],
        },
      ],
    },
    {
      title: "नेता प्रतिपक्ष",
      options: [
        {
          name: "वर्तमान ",
          path: "/umg",
          keywords: [
            "नेता प्रतिपक्ष",
            "वर्तमान नेता प्रतिपक्ष",
            "lop",
            "leader of opposition",
            "current lop",
          ],
        },
        {
          name: "भूतपूर्व ",
          path: "/umglst",
          keywords: [
            "भूतपूर्व नेता प्रतिपक्ष",
            "पूर्व नेता प्रतिपक्ष",
            "former lop",
            "ex leader of opposition",
          ],
        },
      ],
    },
    {
      title: "मुख्यमंत्री",
      options: [
        {
          name: "वर्तमान ",
          path: "/cm",
          keywords: [
            "मुख्यमंत्री",
            "वर्तमान मुख्यमंत्री",
            "cm",
            "chief minister",
            "current chief minister",
          ],
        },
        {
          name: "भूतपूर्व ",
          path: "/cmlist",
          keywords: [
            "भूतपूर्व मुख्यमंत्री",
            "पूर्व मुख्यमंत्री",
            "former chief minister",
            "ex cm",
          ],
        },
      ],
    },
    {
      title: "मंत्रिमण्डल",
      options: [
        {
          name: " मंत्रिमण्डल",
          path: "/mlagroup",
          keywords: [
            "मंत्रिमंडल",
            "वर्तमान मंत्रिमंडल",
            "cabinet",
            "council of ministers",
          ],
        },
        {
          name: "पूर्व मंत्रिमण्डल ",
          path: "/mlagroupall",
          keywords: [
            "पूर्व मंत्रिमंडल",
            "भूतपूर्व मंत्रिमंडल",
            "former cabinet",
            "past cabinets",
          ],
        },
        {
          name: "संपत्ति विवरण ",
          path: "/propertydescarchieve",
          keywords: [
            "संपत्ति विवरण",
            "मंत्रियों की संपत्ति",
            "property details ",
            "assets",
          ],
        },
      ],
    },
    {
      title: "सचिवालय",
      options: [
        {
          name: "विधान सभा सचिवालय",
          path: "/vssachiwalya",
          keywords: [
            "विधान सभा सचिवालय",
            "सचिवालय",
            "vidhan sabha secretariat",
            "assembly secretariat",
          ],
        },
        {
          name: "सचिव / प्रमुख सचिव",
          path: "/sachivpramukhsachiv",
          keywords: [
            "सचिव",
            "प्रमुख सचिव",
            "secretary",
            "principal secretary",
          ],
        },
        {
          name: "विधान सभा भवन",
          path: "/vsbhawan",
          keywords: [
            "विधानसभा भवन",
            "भवन",
            "assembly building",
            "vidhan sabha bhawan",
          ],
        },
        {
          name: "सूचना का अधिकार (राजपत्र)",
          path: "/misc/rti.pdf",
          keywords: [
            "(राजपत्र)",
            "सूचना का अधिकार",
            "आरटीआई",
            "राजपत्र",
            "rti gazette",
            "right to information",
          ],
        },
        {
          name: "सूचना का अधिकार (मैन्युअल)",
          path: "/misc/rtimanual.pdf",
          keywords: [
            "सूचना का अधिकार मैन्युअल",
            "आरटीआई मैन्युअल",
            "manual",
            "right to information manual",
          ],
        },
        {
          name: "पुरस्कार योजना",
          path: "/puruskaryojna",
          keywords: [
            "पुरस्कार योजना",
            "पुरस्कार",
            "award scheme",
            "awards",
          ],
        },
        {
          name: "पीठासीन अधिकारी सम्मेलन",
          path: "/pithasinadhikarisammmelan",
          keywords: [
            "पीठासीन अधिकारी",
            "सम्मेलन",
            "presiding officers conference",
          ],
        },
        {
          name: "संपत्ति विवरण",
          path: "/sachiwalyasampativivran",
          keywords: [
            "संपत्ति विवरण",
            "सचिवालय संपत्ति",
            "property details",
            "assets details",
          ],
        },
        {
          name: "विधानसभा पुस्तकालय",
          path: "/libarypage",
          keywords: [
            "पुस्तकालय",
            "विधानसभा पुस्तकालय",
            "library",
            "assembly library",
          ],
        },
        {
          name: "तथ्य पत्रक : पेयजल",
          path: "/misc/peyjal191015.pdf",
          keywords: [
            "तथ्य पत्रक",
            "पेयजल",
            "water factsheet",
            "factsheet drinking water",
          ],
        },
        {
          name: "सचिवालय प्रकाशन",
          path: "/sachivalayaprakashan",
          keywords: [
            "सचिवालय प्रकाशन",
            "प्रकाशन",
            "secretariat publications",
            "publications",
          ],
        },
      ],
    },
    {
      title: "सदस्यगण",
      options: [
        {
          name: "वर्तमान",
          path: "/sadasyaganvartman",
          keywords: [
            "वर्तमान",
            "वर्तमान सदस्य",
            "वर्तमान विधायक",
            "current members",
            "current mlas",
          ],
        },
        {
          name: "पंचदश विधान सभा",
          path: "/sadasyaganpanchdash",
          keywords: [
            "पंचदश विधानसभा",
            "15वीं विधानसभा",
            "15th assembly",
            "15th vidhan sabha",
          ],
        },
        {
          name: "चतुर्दश विधान सभा",
          path: "/sadasyaganchaturthdas",
          keywords: [
            "चतुर्दश विधानसभा",
            "14वीं विधानसभा",
            "14th assembly",
            "14th vidhan sabha",
          ],
        },
        {
          name: "त्रयोदश विधान सभा",
          path: "/sadasyagantrayodash",
          keywords: [
            "त्रयोदश विधानसभा",
            "13वीं विधानसभा",
            "13th assembly",
            "13th vidhan sabha",
          ],
        },
        {
          name: "द्वादश विधान सभा",
          path: "/sadasyagandwadash",
          keywords: [
            "द्वादश विधानसभा",
            "12वीं विधानसभा",
            "12th assembly",
            "12th vidhan sabha",
          ],
        },
        {
          name: "एकादश विधान सभा",
          path: "/sadasyaganekadash",
          keywords: [
            "एकादश विधानसभा",
            "11वीं विधानसभा",
            "11th assembly",
            "11th vidhan sabha",
          ],
        },
        {
          name: "नामनिर्दिष्ट सदस्य",
          path: "/misc/nominated.pdf",
          keywords: [
            "नामनिर्दिष्ट सदस्य",
            "नामित सदस्य",
            "nominated members",
          ],
        },
        {
          name: "राज्य सभा सदस्य",
          path: "/sadasyaganrajyasabha",
          keywords: [
            "राज्यसभा सदस्य",
            "राज्य सभा सदस्य",
            "rajya sabha members",
            "rs members",
          ],
        },
        {
          name: "लोक सभा सदस्य",
          path: "https://sansad.in/ls/members",
          keywords: [
            "लोकसभा सदस्य",
            "लोक सभा सदस्य",
            "lok sabha members",
            "mp list",
          ],
        },
        // Nested submenu kept here:
        {
          title: "सुविधाएं",
          options: [
            {
              name: "अध्यक्ष / उपाध्यक्ष",
              path: "/misc/speaker.pdf",
              keywords: [
                "अध्यक्ष / उपाध्यक्ष",
                "अध्यक्ष सुविधा",
                "उपाध्यक्ष सुविधा",
                "speaker facilities",
                "deputy speaker facilities",
              ],
            },
            {
              name: "नेता प्रतिपक्ष",
              path: "/misc/opp_leader.pdf",
              keywords: [
                "नेता प्रतिपक्ष",
                "नेता प्रतिपक्ष सुविधा",
                "lop facilities",
                "leader of opposition facilities",
              ],
            },
            {
              name: "मंत्री",
              path: "/misc/minister.pdf",
              keywords: [
                "मंत्री",
                "मंत्री सुविधा",
                "minister facilities",
                "suvidha mantri",
              ],
            },
            {
              name: "विधायक",
              path: "/misc/member_all.pdf",
              keywords: [
                "विधायक",
                "विधायक सुविधा",
                "mla facilities",
                "suvidha vidhayak",
              ],
            },
            {
              name: "भूतपूर्व विधायक",
              path: "/sadasyagan/pensionrules",
              keywords: [
                "भूतपूर्व विधायक",
                "पूर्व विधायक",
                "ex mla",
                "pension rules",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "सदन संबंधी",
      options: [
        {
          name: "सत्र अधिसूचना",
          path: "/satradhisuchna",
          keywords: [
            "सत्र अधिसूचना",
            "session notification",
            "session notice",
          ],
        },
        {
          name: "दैनिक कार्यसूची",
          path: "/dainik",
          keywords: [
            "दैनिक कार्यसूची",
            "दिन की कार्यसूची",
            "कार्यसूची",
            "daily agenda",
            "list of business",
          ],
        },
        {
          name: "विधायन",
          path: "/vidhyan",
          keywords: [
            "विधायन",
            "विधेयक",
            "bills",
            "legislation",
          ],
        },
        {
          name: "विधानसभा कार्यवाही",
          path: "/vidhansabhakarywahi",
          keywords: [
            "विधानसभा कार्यवाही",
            "सदन की कार्यवाही",
            "house proceedings",
            "debates",
          ],
        },
        {
          name: "संक्षिप्त कार्य विवरण",
          path: "/sankshiptkaryavivran",
          keywords: [
            "संक्षिप्त कार्य विवरण",
            "संक्षिप्त विवरण",
            "short work summary",
            "resume of work",
          ],
        },
        {
          name: "सत्र संबंधी संक्षिप्त जानकारी",
          path: "/satrsambandhisankshiptjankari",
          keywords: [
            "सत्र संबंधी संक्षिप्त जानकारी",
            "session information",
            "session summary",
          ],
        },
        {
          name: "पत्रक भाग-दो",
          path: "/patrakbhag-02",
          keywords: [
            "पत्रक भाग-दो",
            "बुलेटिन भाग-दो",
            "bulletin part 2",
            "part ii",
          ],
        },
        {
          name: "सत्रों की बैठकों का विवरण",
          path: "/misc/sittingdetail.pdf",
          keywords: [
            "सत्रों बैठकों का विवरण",
            "सत्रों की बैठकें",
            "sitting details",
            "session sittings",
          ],
        },
        {
          name: "राज्यपाल का अभिभाषण",
          path: "/abhibhashan",
          keywords: [
            "राज्यपाल का अभिभाषण",
            "अभिभाषण",
            "governor address",
            "address by governor",
          ],
        },
        {
          name: "बजट प्रस्तुति",
          path: "/budgetprastuti",
          keywords: [
            "बजट प्रस्तुति",
            "बजट",
            "budget presentation",
            "state budget",
          ],
        },
        {
          name: "विधानसभा समिति",
          path: "/committees1",
          keywords: [
            "समितियाँ",
            "विधानसभा समिति",
            "assembly committees",
            "committees",
          ],
        },
        {
          name: "राष्ट्रपति शासन",
          path: "/presidentrule",
          keywords: [
            "राष्ट्रपति शासन",
            "president rule",
            "president's rule",
          ],
        },
        {
          name: "अविश्वास प्रस्ताव",
          path: "/avishwasprastav",
          keywords: [
            "अविश्वास प्रस्ताव",
            "no confidence motion",
            "ncm",
          ],
        },
        {
          name: "स्वर्णिम मध्य प्रदेश के निर्माण का संकल्प",
          path: "/misc/sankalp2010.pdf",
          keywords: [
            "स्वर्णिम मध्य प्रदेश",
            "निर्माण का संकल्प",
            "sankalp 2010",
            "golden madhya pradesh",
          ],
        },
      ],
    },
    {
      title: "प्रेस विज्ञप्ति",
      options: [],
      path: "/pressrelease",
      keywords: [
        "प्रेस विज्ञप्ति",
        "प्रेस नोट",
        "press",
        "press release",
        "press note",
      ],
    },
    {
      title: "छायाचित्र",
      options: [],
      path: "/gallery",
      keywords: [
        "छायाचित्र",
        "फोटो",
        "तस्वीरें",
        "gallery",
        "photos",
        "images",
      ],
    },
  ];


  // ----------------------------------------------------------------

  const getMatches = (query) => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const matches = [];
    for (const item of menuItems) {
      const titleText = (item.title || "").toLowerCase();
      if (item.path && titleText.includes(q)) {
        matches.push({ label: item.title, path: item.path });
      }
      if (item.options && item.options.length > 0) {
        for (const opt of item.options) {
          const optText = (opt.name || "").toLowerCase();
          const keywordsText = Array.isArray(opt.keywords) ? opt.keywords.join(" ").toLowerCase() : "";
          const combined = `${titleText} ${optText} ${keywordsText}`;
          if (opt.path && combined.includes(q)) {
            matches.push({ label: `${item.title} › ${opt.name}`, path: opt.path });
          }
        }
      }
    }
    return matches;
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setNoResult(false);

    if (value.trim().length === 0) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const matched = getMatches(value);
    setResults(matched);
    setShowResults(matched.length > 0);
  };

  const handleResultClick = (result) => {
    const path = result.path;
    setShowResults(false);
    setSearchTerm("");
    setResults([]);
    setNoResult(false);

    if (path.startsWith("http") || path.endsWith(".pdf")) {
      window.open(path, "_blank", "noopener,noreferrer");
    } else {
      navigate(path);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchTerm.trim().toLowerCase();
    if (!query) return;

    const matched = getMatches(query);

    if (matched.length > 0) {
      setNoResult(false);
      handleResultClick(matched[0]);
    } else {
      setNoResult(true);
      setShowResults(false);
      setResults([]);
    }
  };

  // Hover dropdown show/hide for Bootstrap dropdowns (improves desktop UX)
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".nav-item.dropdown");
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", function () {
        const toggle = this.querySelector(".dropdown-toggle");
        const menu = this.querySelector(".dropdown-menu");
        if (toggle) toggle.classList.add("show");
        if (menu) menu.classList.add("show");
      });
      dropdown.addEventListener("mouseleave", function () {
        const toggle = this.querySelector(".dropdown-toggle");
        const menu = this.querySelector(".dropdown-menu");
        if (toggle) toggle.classList.remove("show");
        if (menu) menu.classList.remove("show");
      });
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("mouseenter", () => { });
        dropdown.removeEventListener("mouseleave", () => { });
      });
    };
  }, []);

  return (
    <header className="gov-header">
      {/* Top thin strip */}


      {/* Main branding row */}
      <div className="brand-row container-fluid py-2 px-3 d-flex align-items-center justify-content-between">
        <div className="brand-left d-flex align-items-center gap-3">
          <img src="/galleries/mpvs_Logo.jpeg" alt="Emblem" className="emblem" />
          <div className="title-block">
            <div className="title-hi">मध्य प्रदेश विधानसभा</div>
            <div className="title-en">Madhya Pradesh Vidhan Sabha</div>
          </div>
        </div>


        <div className="brand-right d-flex align-items-center gap-3">
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/madhyapradesh.vidhansabha/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src="/galleries/FacebookLogosu.jpg"
              alt="Facebook"
              style={{ width: "30px", height: "30px", objectFit: "contain" }}
            />
          </a>

          {/* Twitter Icon */}
          <a
            href="https://x.com/MPVidhanSabha?s=20"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src="/galleries/twitter.jpg"
              alt="Twitter"
              style={{ width: "19px", height: "20px", objectFit: "contain",borderRadius: "40%" }}
            />
          </a>
          <img src="/galleries/swachh-bharat-mission.webp" alt="Right logo" className="right-logo" />
        </div>
      </div>

      {/* Blue nav row (main navigation) */}
      <nav className="main-nav navbar navbar-expand-lg">
        <div className="container-fluid px-3">
          <div className="d-flex w-100 justify-content-between align-items-center d-lg-none mb-2">

            {/* HOME BUTTON LEFT */}
            <Link
              to="/home"
              className="d-flex align-items-center justify-content-center"
              style={{
                background: "#003a70",
                width: "42px",
                height: "42px",
                borderRadius: "4px",
              }}
            >
              <img
                src="/galleries/homeicon.jpg"
                alt="Home"
                style={{ width: "22px", height: "22px" }}
              />
            </Link>

            {/* HAMBURGER RIGHT */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

          </div>




          <div className="collapse navbar-collapse" id="mainNavbar">
            {/* Home Button (Outside menu) */}

            <Link
              to="/home"
              className="d-none d-lg-flex align-items-center justify-content-center me-3"
              style={{
                background: "#003a70",
                width: "42px",
                height: "42px",
                borderRadius: "4px",
              }}
            >
              <img
                src="/galleries/homeicon.jpg"
                alt="Home"
                style={{ width: "22px", height: "22px" }}
              />
            </Link>




            {/* scrollable horizontal nav area so items stay in single row on wide screens */}
            <ul className="navbar-nav nav-scroll mx-auto mb-2 mb-lg-0 align-items-center">
              {/* Home Image Button */}

              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${item.options && item.options.length > 0 ? "dropdown" : ""}`}
                >
                  {item.options && item.options.length > 0 ? (
                    <>
                      <a
                        className="nav-link dropdown-toggle"
                        href="#!"
                        id={`navDrop${index}`}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.title}
                      </a>
                      <ul className="dropdown-menu" aria-labelledby={`navDrop${index}`}>
                        {item.options.map((opt, oi) => (
                          <li key={oi}>
                            {opt.path && (opt.path.startsWith("http") || opt.path.endsWith(".pdf")) ? (
                              <a className="dropdown-item" href={opt.path} target="_blank" rel="noopener noreferrer">
                                {opt.name}
                              </a>
                            ) : (
                              <Link className="dropdown-item" to={opt.path || "#"}>{opt.name}</Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link className="nav-link" to={item.path || "#"}>
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* right side controls: search + buttons */}
            <div className="d-flex align-items-center gap-2 ms-auto">
              <form className="d-flex position-relative search-wrap" onSubmit={handleSearchSubmit}>
                <input
                  className="form-control form-control-sm"
                  type="search"
                  placeholder="खोजें / Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={() => { if (results.length > 0) setShowResults(true); }}
                  onBlur={() => setTimeout(() => setShowResults(false), 150)}
                />
                {showResults && results.length > 0 && (
                  <ul className="list-group position-absolute search-results">
                    {results.map((res, idx) => (
                      <li key={idx} className="list-group-item list-group-item-action" onMouseDown={() => handleResultClick(res)}>
                        {res.label}
                      </li>
                    ))}
                  </ul>
                )}
              </form>

              {noResult && <span className="text-warning small">No page found</span>}

              <Link to="/vidhansabha-tour23" className="btn btn-tour btn-sm">विधानसभा भ्रमण</Link>

              <button onClick={() => setDarkMode(!darkMode)} className="btn btn-outline-light btn-sm">
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
            </div>
          </div>

          {/* permanent "More" button on the right when space allows */}

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
