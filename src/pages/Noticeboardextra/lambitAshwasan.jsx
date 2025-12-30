// import React, { useMemo, useState } from "react";

// const assuranceEntries = [
//   { year: 2025, period: "मार्च, 2025", month: "मार्च", details: "11  12  13  17  18  20  21  24  —  पूर्ण उत्तर" },
//   { year: 2024, period: "दिसम्बर, 2024", month: "दिसम्बर", details: "16  17  18  19  20" },
//   { year: 2024, period: "जुलाई, 2024", month: "जुलाई", details: "01 02 03 04 05 08 09 10 — पूर्ण उत्तर\n11 12 15 16 18 19" },
//   { year: 2024, period: "फरवरी, 2024", month: "फरवरी", details: "08 09 12 13 14 15 16 19" },
//   { year: 2023, period: "जुलाई, 2023", month: "जुलाई", details: "11 12 — पूर्ण उत्तर" },
//   { year: 2023, period: "फरवरी-मार्च, 2023", month: "फरवरी / मार्च", details: "फरवरी: 28\nमार्च: 01 02 03 13 14 15 16 17 20 21 27 — पूर्ण उत्तर" },
//   { year: 2022, period: "दिसम्बर, 2022", month: "दिसम्बर", details: "19 20 21 22 23 — पूर्ण उत्तर" },
//   { year: 2022, period: "सितम्बर, 2022", month: "सितम्बर", details: "13 14 15 16 17 — पूर्ण उत्तर" },
//   { year: 2022, period: "मार्च, 2022", month: "मार्च", details: "08 09 10 11 14 15 16 — पूर्ण उत्तर\n17 21 23 24 25" },
//   { year: 2022, period: "टिप्पणी", isNote: true, month: "", details: "07 मार्च, 2022 तक की स्थिति में लंबित विभागवार आश्वासन" },
//   { year: 2021, period: "दिसम्बर, 2021", month: "दिसम्बर", details: "20 21 22 23 24 — पूर्ण उत्तर" },
//   { year: 2021, period: "अगस्त, 2021", month: "अगस्त", details: "09 10 11 12 — पूर्ण उत्तर" },
//   { year: 2021, period: "मार्च, 2021", month: "मार्च", details: "01 02 04 05 08 09 15 16 — पूर्ण उत्तर\n17 18 19 22 23 24 25 26" },
//   { year: 2021, period: "फरवरी, 2021", month: "फरवरी", details: "23 24 25 26" },
//   { year: 2020, period: "दिसम्बर, 2020", month: "दिसम्बर", details: "28 29 30" },
//   { year: 2020, period: "सितम्बर, 2020", month: "सितम्बर", details: "21 22 23 — पूर्ण उत्तर" },
//   { year: 2020, period: "मार्च, 2020", month: "मार्च", details: "17 18 19 20" },
//   { year: 2019, period: "दिसम्बर, 2019", month: "दिसम्बर", details: "17 18 19 20 23 — पूर्ण उत्तर" },
//   { year: 2019, period: "जुलाई, 2019", month: "जुलाई", details: "08 09 10 11 12\n15 16 17 18 19\n20 21 22 23 24 — पूर्ण उत्तर" },
//   { year: 2019, period: "फरवरी, 2019", month: "फरवरी", details: "18 20 21" },
//   { year: 2018, period: "जून, 2018", month: "जून", details: "25 26 — पूर्ण उत्तर" },
//   { year: 2018, period: "फरवरी-मार्च, 2018", month: "फरवरी / मार्च", details: "फरवरी: 27 28 — पूर्ण उत्तर\nमार्च: 07 08 09 12 13\n14 15 16 20 21\n22 23 26 27 28" },
// ];

// const PendingAssurancesPage = () => {
//   const [selectedYear, setSelectedYear] = useState("all");
//   const [search, setSearch] = useState("");

//   const years = useMemo(() => {
//     const set = new Set(assuranceEntries.map((e) => e.year));
//     return Array.from(set).sort((a, b) => b - a);
//   }, []);

//   const filteredEntries = useMemo(() => {
//     return assuranceEntries.filter((entry) => {
//       const matchYear = selectedYear === "all" || entry.year.toString() === selectedYear;
//       const query = search.trim().toLowerCase();
//       if (!query) return matchYear;

//       const searchText = (entry.period + " " + entry.month + " " + entry.details).toLowerCase();
//       return matchYear && searchText.includes(query);
//     });
//   }, [selectedYear, search]);

//   return (
//     <>
//       {/* INLINE CSS */}
//       <style>{`
//         .pending-root {
//           max-width: 1200px;
//           margin: auto;
//           padding: 24px;
//           font-family: "Noto Sans Devanagari", sans-serif;
//           background: #f4f6fa;
//         }
//         .pending-header {
//           display: flex;
//           justify-content: space-between;
//           gap: 16px;
//           flex-wrap: wrap;
//           margin-bottom: 20px;
//         }
//         .pending-title {
//           margin: 0;
//           font-size: 1.9rem;
//           font-weight: 600;
//           color: #1a2234;
//         }
//         .pending-subtitle {
//           margin: 4px 0 0;
//           color: #4b5563;
//           font-size: 0.95rem;
//         }
//         .controls {
//           display: flex;
//           gap: 12px;
//           flex-wrap: wrap;
//           align-items: end;
//         }
//         select, input {
//           padding: 8px 12px;
//           border-radius: 8px;
//           border: 1px solid #cbd5e1;
//         }
//         input:focus, select:focus {
//           outline: none;
//           border-color: #6366f1;
//           box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
//         }
//         .grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//           gap: 16px;
//         }
//         .card {
//           background: white;
//           padding: 14px;
//           border-radius: 12px;
//           box-shadow: 0 4px 14px rgba(0,0,0,0.08);
//           border: 1px solid #e5e7eb;
//           transition: .2s;
//         }
//         .card:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 6px 20px rgba(0,0,0,0.12);
//         }
//         .card-note {
//           border-left: 4px solid #f97316;
//         }
//         .card-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: start;
//         }
//         .year-badge {
//           background: #eef2ff;
//           padding: 4px 8px;
//           border-radius: 50px;
//           font-size: 0.75rem;
//           color: #3730a3;
//           font-weight: bold;
//         }
//         .details {
//           white-space: pre-line;
//           font-size: 0.9rem;
//           margin-top: 8px;
//           color: #374151;
//         }
//         .pill {
//           display: inline-block;
//           padding: 4px 10px;
//           margin-top: 8px;
//           border-radius: 50px;
//           font-size: 0.75rem;
//           font-weight: 600;
//         }
//         .pill-status { background: #dcfce7; color: #166534; }
//         .pill-note { background: #fef3c7; color: #92400e; }
//       `}</style>

//       <div className="pending-root">
//         <div className="pending-header">
//           <div>
//             <h1 className="pending-title">लंबित आश्वासनों की सूची</h1>
//             <p className="pending-subtitle">
//               वर्ष एवं माह के अनुसार सदन में दिए गए आश्वासनों की सूची।
//             </p>
//           </div>

//           <div className="controls">
//             <div>
//               <label>वर्ष</label><br />
//               <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
//                 <option value="all">सभी वर्ष</option>
//                 {years.map((year) => (
//                   <option key={year}>{year}</option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label>खोजें</label><br />
//               <input
//                 type="text"
//                 placeholder="माह, तिथि, वर्ष..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="grid">
//           {filteredEntries.map((entry, i) => (
//             <div key={i} className={`card ${entry.isNote ? "card-note" : ""}`}>
//               <div className="card-header">
//                 <div>
//                   <h3 style={{ margin: 0 }}>{entry.period}</h3>
//                   <small style={{ color: "#6b7280" }}>{entry.month}</small>
//                 </div>
//                 <span className="year-badge">{entry.year}</span>
//               </div>

//               <div className="details">{entry.details}</div>

//               {!entry.isNote && <span className="pill pill-status">आश्वासन तिथियाँ</span>}
//               {entry.isNote && <span className="pill pill-note">टिप्पणी</span>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default PendingAssurancesPage;



// import React, { useMemo, useState } from "react";

// const assuranceEntries = [
//   // === उदाहरण 1: मार्च 2025 ===
//   {
//     year: 2025,
//     period: "मार्च, 2025",
//     month: "मार्च",
//     items: [
//       // हर date के लिए अलग PDF लिंक
//       { type: "date", label: "11", href: "/pdf/assurances/2025/03/11.pdf" },
//       { type: "12", label: "12", href: "/pdf/assurances/2025/03/12.pdf" },
//       { type: "date", label: "13", href: "/pdf/assurances/2025/03/13.pdf" },
//       { type: "date", label: "17", href: "/pdf/assurances/2025/03/17.pdf" },
//       { type: "date", label: "18", href: "/pdf/assurances/2025/03/18.pdf" },
//       { type: "date", label: "20", href: "/pdf/assurances/2025/03/20.pdf" },
//       { type: "date", label: "21", href: "/pdf/assurances/2025/03/21.pdf" },
//       { type: "date", label: "24", href: "/pdf/assurances/2025/03/24.pdf" },
//       // "पूर्ण उत्तर" के लिए अलग PDF
//       {
//         type: "fullReply",
//         label: "पूर्ण उत्तर",
//         href: "/pdf/assurances/2025/03/fullreply.pdf",
//       },
//     ],
//   },

//   // === उदाहरण 2: दिसम्बर 2024 (बिना पूर्ण उत्तर) ===
//   {
//     year: 2024,
//     period: "दिसम्बर, 2024",
//     month: "दिसम्बर",
//     items: [
//       { type: "date", label: "16", href: "/pdf/assurances/2024/12/16.pdf" },
//       { type: "date", label: "17", href: "/pdf/assurances/2024/12/17.pdf" },
//       { type: "date", label: "18", href: "/pdf/assurances/2024/12/18.pdf" },
//       { type: "date", label: "19", href: "/pdf/assurances/2024/12/19.pdf" },
//       { type: "date", label: "20", href: "/pdf/assurances/2024/12/20.pdf" },
//     ],
//   },

//   // === उदाहरण 3: जुलाई 2024 (partial + पूर्ण उत्तर) ===
//   {
//     year: 2024,
//     period: "जुलाई, 2024",
//     month: "जुलाई",
//     items: [
//       { type: "date", label: "01", href: "/pdf/assurances/2024/07/01.pdf" },
//       { type: "date", label: "02", href: "/pdf/assurances/2024/07/02.pdf" },
//       { type: "date", label: "03", href: "/pdf/assurances/2024/07/03.pdf" },
//       { type: "date", label: "04", href: "/pdf/assurances/2024/07/04.pdf" },
//       { type: "date", label: "05", href: "/pdf/assurances/2024/07/05.pdf" },
//       { type: "date", label: "08", href: "/pdf/assurances/2024/07/08.pdf" },
//       { type: "date", label: "09", href: "/pdf/assurances/2024/07/09.pdf" },
//       { type: "date", label: "10", href: "/pdf/assurances/2024/07/10.pdf" },
//       {
//         type: "fullReply",
//         label: "पूर्ण उत्तर",
//         href: "/pdf/assurances/2024/07/fullreply-1.pdf",
//       },
//       { type: "date", label: "11", href: "/pdf/assurances/2024/07/11.pdf" },
//       { type: "date", label: "12", href: "/pdf/assurances/2024/07/12.pdf" },
//       { type: "date", label: "15", href: "/pdf/assurances/2024/07/15.pdf" },
//       { type: "date", label: "16", href: "/pdf/assurances/2024/07/16.pdf" },
//       { type: "date", label: "18", href: "/pdf/assurances/2024/07/18.pdf" },
//       { type: "date", label: "19", href: "/pdf/assurances/2024/07/19.pdf" },
//     ],
//   },

//   // === उदाहरण 4: टिप्पणी/नोट एंट्री (सिर्फ टेक्स्ट, कोई लिंक नहीं) ===
//   {
//     year: 2022,
//     period: "नोट (मार्च, 2022)",
//     month: "",
//     isNote: true,
//     items: [
//       {
//         type: "note",
//         label:
//           "07 मार्च, 2022 तक की स्थिति में विभागवार लंबित आश्‍वासनों की स्थिति।",
//       },
//     ],
//   },

//   // === उदाहरण 5: जुलाई 2019 (जैसा आपके डेटा में था) ===
//   {
//     year: 2019,
//     period: "जुलाई, 2019",
//     month: "जुलाई",
//     items: [
//       { type: "date", label: "08", href: "/pdf/assurances/2019/07/08.pdf" },
//       { type: "date", label: "09", href: "/pdf/assurances/2019/07/09.pdf" },
//       { type: "date", label: "10", href: "/pdf/assurances/2019/07/10.pdf" },
//       { type: "date", label: "11", href: "/pdf/assurances/2019/07/11.pdf" },
//       { type: "date", label: "12", href: "/pdf/assurances/2019/07/12.pdf" },
//       { type: "date", label: "15", href: "/pdf/assurances/2019/07/15.pdf" },
//       { type: "date", label: "16", href: "/pdf/assurances/2019/07/16.pdf" },
//       { type: "date", label: "17", href: "/pdf/assurances/2019/07/17.pdf" },
//       { type: "date", label: "18", href: "/pdf/assurances/2019/07/18.pdf" },
//       { type: "date", label: "19", href: "/pdf/assurances/2019/07/19.pdf" },
//       { type: "date", label: "20", href: "/pdf/assurances/2019/07/20.pdf" },
//       { type: "date", label: "21", href: "/pdf/assurances/2019/07/21.pdf" },
//       { type: "date", label: "22", href: "/pdf/assurances/2019/07/22.pdf" },
//       { type: "date", label: "23", href: "/pdf/assurances/2019/07/23.pdf" },
//       { type: "date", label: "24", href: "/pdf/assurances/2019/07/24.pdf" },
//       {
//         type: "fullReply",
//         label: "पूर्ण उत्तर",
//         href: "/pdf/assurances/2019/07/fullreply.pdf",
//       },
//     ],
//   },

//   // 👉 बाकी सारे years/months को भी आप इसी फॉर्मेट से जोड़ सकते हैं
// ];

// const PendingAssurancesPage = () => {
//   const [selectedYear, setSelectedYear] = useState("all");
//   const [search, setSearch] = useState("");

//   const years = useMemo(() => {
//     const set = new Set(assuranceEntries.map((e) => e.year));
//     return Array.from(set).sort((a, b) => b - a); // descending
//   }, []);

//   const filteredEntries = useMemo(() => {
//     return assuranceEntries.filter((entry) => {
//       const matchYear =
//         selectedYear === "all" || entry.year.toString() === selectedYear;
//       const query = search.trim();
//       if (!query) return matchYear;

//       const itemsText = (entry.items || [])
//         .map((i) => i.label || "")
//         .join(" ");
//       const haystack = `${entry.period || ""} ${entry.month || ""} ${itemsText}`;
//       return matchYear && haystack.toLowerCase().includes(query.toLowerCase());
//     });
//   }, [selectedYear, search]);

//   const handleItemClick = (href) => {
//     if (!href) return;
//     window.open(href, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div className="pending-assurances-page">
//       {/* CSS को यहीं embed किया गया है */}
//       <style>{`
//         .pending-assurances-page {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 24px 16px 40px;
//           font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
//             "Noto Sans Devanagari", sans-serif;
//           background: linear-gradient(135deg, #f5f7fb, #ffffff);
//         }

//         .pending-header {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: space-between;
//           gap: 16px;
//           margin-bottom: 24px;
//         }

//         .pending-header h1 {
//           font-size: 1.8rem;
//           margin: 0;
//           color: #1f2933;
//         }

//         .pending-subtitle {
//           margin-top: 4px;
//           margin-bottom: 0;
//           font-size: 0.95rem;
//           color: #52606d;
//         }

//         .pending-controls {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//           align-items: flex-end;
//         }

//         .control-group {
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//           min-width: 180px;
//         }

//         .control-group label {
//           font-size: 0.8rem;
//           font-weight: 600;
//           color: #52606d;
//         }

//         .control-group select,
//         .control-group input {
//           padding: 6px 10px;
//           border-radius: 8px;
//           border: 1px solid #cbd2e1;
//           font-size: 0.9rem;
//           outline: none;
//           background: #ffffff;
//           transition: border-color 0.2s ease, box-shadow 0.2s ease;
//         }

//         .control-group select:focus,
//         .control-group input:focus {
//           border-color: #4f46e5;
//           box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.12);
//         }

//         .pending-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//           gap: 16px;
//         }

//         .pending-card {
//           background: #ffffff;
//           border-radius: 14px;
//           padding: 14px 14px 12px;
//           box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
//           border: 1px solid rgba(226, 232, 240, 0.9);
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           transition: transform 0.18s ease, box-shadow 0.18s ease,
//             border-color 0.18s ease, background 0.18s ease;
//         }

//         .pending-card:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 14px 30px rgba(15, 23, 42, 0.12);
//           border-color: #c7d2fe;
//           background: linear-gradient(135deg, #ffffff, #f9fafb);
//         }

//         .pending-card-note {
//           border-left: 4px solid #f97316;
//         }

//         .pending-card-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           gap: 8px;
//         }

//         .pending-card-header h2 {
//           font-size: 1rem;
//           margin: 0;
//           color: #111827;
//         }

//         .pending-month-label {
//           margin: 4px 0 0;
//           font-size: 0.85rem;
//           color: #6b7280;
//         }

//         .pending-year-badge {
//           padding: 4px 9px;
//           border-radius: 999px;
//           font-size: 0.8rem;
//           background: #eef2ff;
//           color: #3730a3;
//           font-weight: 600;
//           white-space: nowrap;
//         }

//         .pending-details {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 6px;
//           margin-top: 2px;
//         }

//         .pending-chip {
//           border-radius: 999px;
//           padding: 4px 9px;
//           font-size: 0.8rem;
//           border: 1px solid #e5e7eb;
//           background: #f9fafb;
//           cursor: pointer;
//           transition: background 0.15s ease, box-shadow 0.15s ease,
//             transform 0.1s ease, border-color 0.15s ease;
//         }

//         .pending-chip:hover {
//           background: #eef2ff;
//           border-color: #c7d2fe;
//           box-shadow: 0 2px 6px rgba(148, 163, 184, 0.5);
//           transform: translateY(-1px);
//         }

//         .pending-chip:disabled,
//         .pending-chip[disabled] {
//           cursor: default;
//           opacity: 0.6;
//           background: #f3f4f6;
//           box-shadow: none;
//         }

//         .pending-chip-date {
//           font-weight: 500;
//           color: #111827;
//         }

//         .pending-chip-full {
//           font-weight: 600;
//           background: #dcfce7;
//           border-color: #bbf7d0;
//           color: #166534;
//         }

//         .pending-chip-full:hover {
//           background: #bbf7d0;
//         }

//         .pending-chip-note {
//           cursor: default;
//           background: #fef3c7;
//           border-color: #fde68a;
//           color: #92400e;
//           font-weight: 500;
//         }

//         .pending-meta {
//           display: flex;
//           justify-content: flex-start;
//           margin-top: 4px;
//         }

//         .pill {
//           display: inline-flex;
//           align-items: center;
//           padding: 3px 8px;
//           border-radius: 999px;
//           font-size: 0.75rem;
//           font-weight: 600;
//         }

//         .pill-status {
//           background: #e0f2fe;
//           color: #075985;
//         }

//         .pill-note {
//           background: #fef3c7;
//           color: #92400e;
//         }

//         .pending-empty-state {
//           grid-column: 1 / -1;
//           text-align: center;
//           padding: 24px 12px;
//           border-radius: 12px;
//           background: #f9fafb;
//           border: 1px dashed #d1d5db;
//           font-size: 0.95rem;
//           color: #6b7280;
//         }
//       `}</style>

//       <header className="pending-header">
//         <div>
//           <h1>लंबित आश्वासनों की सूची</h1>
//           <p className="pending-subtitle">
//             वर्ष एवं माह के अनुसार सदन में दिए गए आश्वासनों की तिथि–वार सूची।
//             प्रत्येक तिथि एवं "पूर्ण उत्तर" के लिए अलग-अलग PDF उपलब्ध है।
//           </p>
//         </div>
//         <div className="pending-controls">
//           <div className="control-group">
//             <label htmlFor="year-select">वर्ष चुनें</label>
//             <select
//               id="year-select"
//               value={selectedYear}
//               onChange={(e) => setSelectedYear(e.target.value)}
//             >
//               <option value="all">सभी वर्ष</option>
//               {years.map((year) => (
//                 <option key={year} value={year.toString()}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="control-group">
//             <label htmlFor="search-input">खोजें</label>
//             <input
//               id="search-input"
//               type="text"
//               placeholder="माह / तिथि / वर्ष से खोजें..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         </div>
//       </header>

//       <main>
//         <section className="pending-grid">
//           {filteredEntries.map((entry, index) => (
//             <article
//               key={entry.period + index}
//               className={
//                 entry.isNote ? "pending-card pending-card-note" : "pending-card"
//               }
//             >
//               <div className="pending-card-header">
//                 <div>
//                   <h2>{entry.period}</h2>
//                   {entry.month && (
//                     <p className="pending-month-label">{entry.month}</p>
//                   )}
//                 </div>
//                 <span className="pending-year-badge">{entry.year}</span>
//               </div>

//               <div className="pending-details">
//                 {(entry.items || []).map((item, i) => {
//                   const isDate = item.type === "date" || item.type === undefined;
//                   const isFull = item.type === "fullReply";
//                   const isNote = item.type === "note";

//                   const chipClass = [
//                     "pending-chip",
//                     isDate && "pending-chip-date",
//                     isFull && "pending-chip-full",
//                     isNote && "pending-chip-note",
//                   ]
//                     .filter(Boolean)
//                     .join(" ");

//                   const clickable = !!item.href && !isNote;

//                   return (
//                     <button
//                       key={item.label + i}
//                       type="button"
//                       className={chipClass}
//                       onClick={() => clickable && handleItemClick(item.href)}
//                       disabled={!clickable}
//                     >
//                       {item.label}
//                     </button>
//                   );
//                 })}
//               </div>

//               {!entry.isNote && (
//                 <div className="pending-meta">
//                   <span className="pill pill-status">
//                     आश्वासन तिथियाँ / पूर्ण उत्तर
//                   </span>
//                 </div>
//               )}

//               {entry.isNote && (
//                 <div className="pending-meta">
//                   <span className="pill pill-note">विशेष टिप्पणी</span>
//                 </div>
//               )}
//             </article>
//           ))}

//           {filteredEntries.length === 0 && (
//             <div className="pending-empty-state">
//               <p>दिए गए फिल्टर के अनुसार कोई प्रविष्टि उपलब्ध नहीं है।</p>
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// };

// export default PendingAssurancesPage;






// import React, { useMemo, useState } from "react";

// const assuranceEntries = [
//   { year: 2025, period: "मार्च, 2025", month: "मार्च", details: "11  12  13  17  18  20  21  24  —  पूर्ण उत्तर" },
//   { year: 2024, period: "दिसम्बर, 2024", month: "दिसम्बर", details: "16  17  18  19  20" },
//   { year: 2024, period: "जुलाई, 2024", month: "जुलाई", details: "01 02 03 04 05 08 09 10 — पूर्ण उत्तर\n11 12 15 16 18 19" },
//   { year: 2024, period: "फरवरी, 2024", month: "फरवरी", details: "08 09 12 13 14 15 16 19" },
//   { year: 2023, period: "जुलाई, 2023", month: "जुलाई", details: "11 12 — पूर्ण उत्तर" },
//   { year: 2023, period: "फरवरी-मार्च, 2023", month: "फरवरी / मार्च", details: "फरवरी: 28\nमार्च: 01 02 03 13 14 15 16 17 20 21 27 — पूर्ण उत्तर" },
//   { year: 2022, period: "दिसम्बर, 2022", month: "दिसम्बर", details: "19 20 21 22 23 — पूर्ण उत्तर" },
//   { year: 2022, period: "सितम्बर, 2022", month: "सितम्बर", details: "13 14 15 16 17 — पूर्ण उत्तर" },
//   { year: 2022, period: "मार्च, 2022", month: "मार्च", details: "08 09 10 11 14 15 16 — पूर्ण उत्तर\n17 21 23 24 25" },
//   { year: 2022, period: "टिप्पणी", isNote: true, month: "", details: "07 मार्च, 2022 तक की स्थिति में लंबित विभागवार आश्वासन" },
//   { year: 2021, period: "दिसम्बर, 2021", month: "दिसम्बर", details: "20 21 22 23 24 — पूर्ण उत्तर" },
//   { year: 2021, period: "अगस्त, 2021", month: "अगस्त", details: "09 10 11 12 — पूर्ण उत्तर" },
//   { year: 2021, period: "मार्च, 2021", month: "मार्च", details: "01 02 04 05 08 09 15 16 — पूर्ण उत्तर\n17 18 19 22 23 24 25 26" },
//   { year: 2021, period: "फरवरी, 2021", month: "फरवरी", details: "23 24 25 26" },
//   { year: 2020, period: "दिसम्बर, 2020", month: "दिसम्बर", details: "28 29 30" },
//   { year: 2020, period: "सितम्बर, 2020", month: "सितम्बर", details: "21 22 23 — पूर्ण उत्तर" },
//   { year: 2020, period: "मार्च, 2020", month: "मार्च", details: "17 18 19 20" },
//   { year: 2019, period: "दिसम्बर, 2019", month: "दिसम्बर", details: "17 18 19 20 23 — पूर्ण उत्तर" },
//   { year: 2019, period: "जुलाई, 2019", month: "जुलाई", details: "08 09 10 11 12\n15 16 17 18 19\n20 21 22 23 24 — पूर्ण उत्तर" },
//   { year: 2019, period: "फरवरी, 2019", month: "फरवरी", details: "18 20 21" },
//   { year: 2018, period: "जून, 2018", month: "जून", details: "25 26 — पूर्ण उत्तर" },
//   { year: 2018, period: "फरवरी-मार्च, 2018", month: "फरवरी / मार्च", details: "फरवरी: 27 28 — पूर्ण उत्तर\nमार्च: 07 08 09 12 13\n14 15 16 20 21\n22 23 26 27 28" },
// ];

// // ---------- INLINE STYLES ----------
// const styles = {
//   page: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "24px 16px 40px",
//     fontFamily:
//       'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans Devanagari", sans-serif',
//     background: "linear-gradient(135deg, #f5f7fb, #ffffff)",
//   },
//   header: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     gap: "16px",
//     marginBottom: "24px",
//   },
//   title: {
//     fontSize: "1.8rem",
//     margin: 0,
//     color: "#1f2933",
//   },
//   subtitle: {
//     marginTop: "4px",
//     marginBottom: 0,
//     fontSize: "0.95rem",
//     color: "#52606d",
//   },
//   controls: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "12px",
//     alignItems: "flex-end",
//   },
//   controlGroup: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "4px",
//     minWidth: "180px",
//   },
//   label: {
//     fontSize: "0.8rem",
//     fontWeight: 600,
//     color: "#52606d",
//   },
//   input: {
//     padding: "6px 10px",
//     borderRadius: "8px",
//     border: "1px solid #cbd2e1",
//     fontSize: "0.9rem",
//     outline: "none",
//     background: "#ffffff",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//     gap: "16px",
//   },
//   card: {
//     background: "#ffffff",
//     borderRadius: "14px",
//     padding: "14px 14px 12px",
//     boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
//     border: "1px solid rgba(226, 232, 240, 0.9)",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     transition:
//       "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease",
//   },
//   cardNote: {
//     borderLeft: "4px solid #f97316",
//   },
//   cardHeader: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     gap: "8px",
//   },
//   cardTitle: {
//     fontSize: "1rem",
//     margin: 0,
//     color: "#111827",
//   },
//   monthLabel: {
//     margin: "4px 0 0",
//     fontSize: "0.85rem",
//     color: "#6b7280",
//   },
//   yearBadge: {
//     padding: "4px 9px",
//     borderRadius: "999px",
//     fontSize: "0.8rem",
//     background: "#eef2ff",
//     color: "#3730a3",
//     fontWeight: 600,
//     whiteSpace: "nowrap",
//   },
//   details: {
//     fontSize: "0.88rem",
//     lineHeight: 1.5,
//     color: "#374151",
//   },
//   detailsLine: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "4px",
//     marginBottom: "2px",
//   },
//   inlineText: {
//     fontSize: "0.87rem",
//   },
//   dateChip: {
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "2px 8px",
//     borderRadius: "999px",
//     border: "1px solid #d1d5db",
//     fontSize: "0.8rem",
//     cursor: "pointer",
//     background: "#f9fafb",
//     userSelect: "none",
//   },
//   dateChipHover: {
//     background: "#e0f2fe",
//     borderColor: "#38bdf8",
//   },
//   purnuttarChip: {
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "2px 10px",
//     borderRadius: "999px",
//     fontSize: "0.8rem",
//     cursor: "pointer",
//     background: "#dcfce7",
//     border: "1px solid #22c55e",
//     color: "#166534",
//     userSelect: "none",
//   },
//   dashText: {
//     marginRight: "4px",
//   },
//   meta: {
//     marginTop: "4px",
//   },
//   pillStatus: {
//     display: "inline-flex",
//     alignItems: "center",
//     padding: "3px 8px",
//     borderRadius: "999px",
//     fontSize: "0.75rem",
//     fontWeight: 600,
//     background: "#eff6ff",
//     color: "#1d4ed8",
//   },
//   pillNote: {
//     display: "inline-flex",
//     alignItems: "center",
//     padding: "3px 8px",
//     borderRadius: "999px",
//     fontSize: "0.75rem",
//     fontWeight: 600,
//     background: "#fef3c7",
//     color: "#92400e",
//   },
//   emptyState: {
//     gridColumn: "1 / -1",
//     textAlign: "center",
//     padding: "24px 12px",
//     borderRadius: "12px",
//     background: "#f9fafb",
//     border: "1px dashed #d1d5db",
//     fontSize: "0.95rem",
//     color: "#6b7280",
//   },
// };

// // ---------- URL BUILDERS (इन्हें अपने हिसाब से बदलें) ----------
// const buildDatePdfUrl = (entry, day) => {
//   // TODO: यहाँ अपना असली path लगाएँ
//   // उदाहरण: /pdf/pending-assurances/2025/03/11.pdf
//   const dayStr = String(day).padStart(2, "0");
//   return `/pdf/pending-assurances/${entry.year}/${encodeURIComponent(
//     entry.month || "misc"
//   )}/${dayStr}.pdf`;
// };

// const buildPurnuttarPdfUrl = (entry) => {
//   // TODO: यहाँ अपना असली path लगाएँ
//   // उदाहरण: /pdf/pending-assurances/2025/03/purnuttar.pdf
//   return `/pdf/pending-assurances/${entry.year}/${encodeURIComponent(
//     entry.month || "misc"
//   )}/purnuttar.pdf`;
// };

// const PendingAssurancesPage = () => {
//   const [selectedYear, setSelectedYear] = useState("all");
//   const [search, setSearch] = useState("");

//   const years = useMemo(() => {
//     const set = new Set(assuranceEntries.map((e) => e.year));
//     return Array.from(set).sort((a, b) => b - a); // descending
//   }, []);

//   const filteredEntries = useMemo(() => {
//     return assuranceEntries.filter((entry) => {
//       const matchYear =
//         selectedYear === "all" || entry.year.toString() === selectedYear;
//       const query = search.trim();
//       if (!query) return matchYear;

//       const haystack =
//         (entry.period || "") +
//         " " +
//         (entry.month || "") +
//         " " +
//         (entry.details || "");
//       return matchYear && haystack.toLowerCase().includes(query.toLowerCase());
//     });
//   }, [selectedYear, search]);

//   const handleDateClick = (entry, day) => {
//     const url = buildDatePdfUrl(entry, day);
//     window.open(url, "_blank");
//   };

//   const handlePurnuttarClick = (entry) => {
//     const url = buildPurnuttarPdfUrl(entry);
//     window.open(url, "_blank");
//   };

//   const renderLine = (line, entry, lineIndex) => {
//     // "— पूर्ण उत्तर" या "- पूर्ण उत्तर" अलग से दिखाएँ
//     const hasPurnuttar = line.includes("पूर्ण उत्तर");
//     const split = line.split(/[—-]/); // em dash या hyphen
//     const mainText = split[0].trim(); // तारीखें और बाकी टेक्स्ट

//     const nodes = [];

//     // mainText के tokens से dates को clickable बनाना
//     const tokens = mainText.split(/\s+/).filter(Boolean);
//     tokens.forEach((token, i) => {
//       if (/^\d+$/.test(token)) {
//         // pure number -> date
//         nodes.push(
//           <span
//             key={`${entry.period}-d-${lineIndex}-${i}`}
//             style={styles.dateChip}
//             onClick={() => handleDateClick(entry, token)}
//             onMouseOver={(e) =>
//               Object.assign(e.currentTarget.style, styles.dateChipHover)
//             }
//             onMouseOut={(e) =>
//               Object.assign(e.currentTarget.style, styles.dateChip)
//             }
//           >
//             {token}
//           </span>
//         );
//       } else {
//         // normal text
//         nodes.push(
//           <span
//             key={`${entry.period}-t-${lineIndex}-${i}`}
//             style={styles.inlineText}
//           >
//             {token}
//           </span>
//         );
//       }
//     });

//     if (hasPurnuttar) {
//       nodes.push(
//         <span
//           key={`${entry.period}-dash-${lineIndex}`}
//           style={{ ...styles.inlineText, ...styles.dashText }}
//         >
//           —
//         </span>,
//         <span
//           key={`${entry.period}-purnuttar-${lineIndex}`}
//           style={styles.purnuttarChip}
//           onClick={() => handlePurnuttarClick(entry)}
//         >
//           पूर्ण उत्तर
//         </span>
//       );
//     }

//     return nodes;
//   };

//   return (
//     <div style={styles.page}>
//       <header style={styles.header}>
//         <div>
//           <h1 style={styles.title}>लंबित आश्वासनों की सूची</h1>
//           <p style={styles.subtitle}>
//             वर्ष एवं माह के अनुसार सदन में दिए गए आश्वासनों की तिथि–वार सूची।
//           </p>
//         </div>

//         <div style={styles.controls}>
//           <div style={styles.controlGroup}>
//             <label htmlFor="year-select" style={styles.label}>
//               वर्ष चुनें
//             </label>
//             <select
//               id="year-select"
//               value={selectedYear}
//               onChange={(e) => setSelectedYear(e.target.value)}
//               style={styles.input}
//             >
//               <option value="all">सभी वर्ष</option>
//               {years.map((year) => (
//                 <option key={year} value={year.toString()}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div style={styles.controlGroup}>
//             <label htmlFor="search-input" style={styles.label}>
//               खोजें
//             </label>
//             <input
//               id="search-input"
//               type="text"
//               placeholder="माह / तिथि / वर्ष से खोजें..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={styles.input}
//             />
//           </div>
//         </div>
//       </header>

//       <main>
//         <section style={styles.grid}>
//           {filteredEntries.map((entry, index) => (
//             <article
//               key={entry.period + index}
//               style={{
//                 ...styles.card,
//                 ...(entry.isNote ? styles.cardNote : {}),
//               }}
//             >
//               <div style={styles.cardHeader}>
//                 <div>
//                   <h2 style={styles.cardTitle}>{entry.period}</h2>
//                   {entry.month && (
//                     <p style={styles.monthLabel}>{entry.month}</p>
//                   )}
//                 </div>
//                 <span style={styles.yearBadge}>{entry.year}</span>
//               </div>

//               <div style={styles.details}>
//                 {entry.details.split("\n").map((line, i) => (
//                   <div key={i} style={styles.detailsLine}>
//                     {renderLine(line, entry, i)}
//                   </div>
//                 ))}
//               </div>

//               <div style={styles.meta}>
//                 {entry.isNote ? (
//                   <span style={styles.pillNote}>विशेष टिप्पणी</span>
//                 ) : (
//                   <span style={styles.pillStatus}>आश्वासन तिथियाँ</span>
//                 )}
//               </div>
//             </article>
//           ))}

//           {filteredEntries.length === 0 && (
//             <div style={styles.emptyState}>
//               <p>दिए गए फ़िल्टर के अनुसार कोई प्रविष्टि उपलब्ध नहीं है।</p>
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// };

// export default PendingAssurancesPage;







// import React, { useMemo, useState } from "react";

// const PendingAssurancesPage = () => {
//   // ----- INLINE STYLES (CSS IN COMPONENT) -----
//   const styles = {
//     page: {
//       maxWidth: "1200px",
//       margin: "0 auto",
//       padding: "24px 16px 40px",
//       fontFamily:
//         'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans Devanagari", sans-serif',
//       background: "linear-gradient(135deg, #f3f4f6, #ffffff)",
//       color: "#111827",
//     },
//     layout: {
//       display: "grid",
//       gridTemplateColumns: "260px 1fr",
//       gap: "20px",
//       alignItems: "flex-start",
//     },
//     header: {
//       marginBottom: "18px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "flex-end",
//       flexWrap: "wrap",
//       gap: "12px",
//     },
//     title: {
//       fontSize: "1.9rem",
//       margin: 0,
//       fontWeight: 700,
//       letterSpacing: "0.02em",
//     },
//     subtitle: {
//       margin: "4px 0 0",
//       fontSize: "0.95rem",
//       color: "#4b5563",
//     },
//     searchBox: {
//       minWidth: "220px",
//       display: "flex",
//       flexDirection: "column",
//       gap: "4px",
//     },
//     searchInput: {
//       padding: "7px 10px",
//       borderRadius: "10px",
//       border: "1px solid #d1d5db",
//       outline: "none",
//       fontSize: "0.9rem",
//       backgroundColor: "#ffffff",
//     },
//     searchLabel: {
//       fontSize: "0.8rem",
//       fontWeight: 600,
//       color: "#6b7280",
//     },
//     // Sidebar
//     sidebar: {
//       background: "#ffffff",
//       borderRadius: "18px",
//       boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
//       border: "1px solid #e5e7eb",
//       padding: "14px 10px 16px",
//       position: "sticky",
//       top: "12px",
//     },
//     sidebarTitle: {
//       fontSize: "1rem",
//       fontWeight: 600,
//       margin: "0 0 8px",
//       padding: "0 8px",
//     },
//     sidebarDesc: {
//       fontSize: "0.78rem",
//       color: "#6b7280",
//       margin: "0 0 8px",
//       padding: "0 8px",
//     },
//     yearList: {
//       listStyle: "none",
//       margin: 0,
//       padding: "4px 0 0",
//       maxHeight: "420px",
//       overflowY: "auto",
//     },
//     yearItem: (active) => ({
//       margin: "2px 0",
//       padding: "6px 10px",
//       borderRadius: "999px",
//       fontSize: "0.9rem",
//       cursor: "pointer",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       border: active ? "1px solid #4f46e5" : "1px solid transparent",
//       background: active ? "#eef2ff" : "transparent",
//       color: active ? "#1d1b7a" : "#374151",
//       transition: "background 0.15s ease, transform 0.15s ease",
//     }),
//     yearDot: (active) => ({
//       width: "8px",
//       height: "8px",
//       borderRadius: "999px",
//       background: active ? "#4f46e5" : "#d1d5db",
//     }),
//     yearLabel: {
//       flex: 1,
//       marginLeft: "8px",
//     },
//     // Main content
//     main: {
//       display: "flex",
//       flexDirection: "column",
//       gap: "10px",
//     },
//     hint: {
//       fontSize: "0.8rem",
//       color: "#6b7280",
//       marginBottom: "2px",
//     },
//     accordion: {
//       borderRadius: "18px",
//       overflow: "hidden",
//       border: "1px solid #e5e7eb",
//       background: "#ffffff",
//       boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
//     },
//     accordionHeader: (open) => ({
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       padding: "10px 14px",
//       cursor: "pointer",
//       borderBottom: open ? "1px solid #e5e7eb" : "none",
//       background: open
//         ? "linear-gradient(90deg, #eef2ff, #ffffff)"
//         : "linear-gradient(90deg, #f9fafb, #ffffff)",
//     }),
//     headerLeft: {
//       display: "flex",
//       flexDirection: "column",
//       gap: "3px",
//     },
//     periodText: {
//       fontSize: "1rem",
//       fontWeight: 600,
//     },
//     monthText: {
//       fontSize: "0.8rem",
//       color: "#6b7280",
//     },
//     headerRight: {
//       display: "flex",
//       alignItems: "center",
//       gap: "8px",
//     },
//     yearBadge: {
//       padding: "3px 9px",
//       fontSize: "0.8rem",
//       borderRadius: "999px",
//       background: "#ecfeff",
//       color: "#0f766e",
//       border: "1px solid #a5f3fc",
//       fontWeight: 600,
//     },
//     chipCount: {
//       fontSize: "0.78rem",
//       color: "#6b7280",
//     },
//     chevron: (open) => ({
//       fontSize: "0.8rem",
//       transform: open ? "rotate(90deg)" : "rotate(0deg)",
//       transition: "transform 0.15s ease",
//       color: "#4b5563",
//     }),
//     accordionBody: {
//       padding: "10px 14px 12px",
//       display: "grid",
//       gridTemplateColumns: "minmax(0, 2.4fr) minmax(0, 1.4fr)",
//       gap: "12px",
//     },
//     datesColumn: {
//       borderRight: "1px dashed #e5e7eb",
//       paddingRight: "10px",
//     },
//     datesTitle: {
//       fontSize: "0.8rem",
//       fontWeight: 600,
//       color: "#6b7280",
//       marginBottom: "6px",
//     },
//     datesWrap: {
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "6px",
//     },
//     dateChip: {
//       display: "inline-flex",
//       alignItems: "center",
//       justifyContent: "center",
//       padding: "4px 8px",
//       fontSize: "0.8rem",
//       borderRadius: "999px",
//       border: "1px solid #d1d5db",
//       background: "#f9fafb",
//       cursor: "pointer",
//       textDecoration: "none",
//       color: "#111827",
//       transition: "background 0.15s ease, transform 0.1s ease, boxShadow 0.1s",
//     },
//     dateChipHover: {
//       background: "#eef2ff",
//       transform: "translateY(-1px)",
//       boxShadow: "0 2px 6px rgba(148, 163, 184, 0.6)",
//     },
//     fullColumn: {
//       display: "flex",
//       flexDirection: "column",
//       gap: "6px",
//       justifyContent: "space-between",
//     },
//     fullTitle: {
//       fontSize: "0.8rem",
//       fontWeight: 600,
//       color: "#6b7280",
//     },
//     fullButton: {
//       display: "inline-flex",
//       alignItems: "center",
//       justifyContent: "center",
//       padding: "7px 10px",
//       borderRadius: "999px",
//       background: "linear-gradient(90deg, #4f46e5, #6366f1)",
//       color: "#ffffff",
//       fontSize: "0.85rem",
//       border: "none",
//       cursor: "pointer",
//       textDecoration: "none",
//       fontWeight: 500,
//       boxShadow: "0 6px 14px rgba(79, 70, 229, 0.45)",
//     },
//     fullButtonSub: {
//       fontSize: "0.75rem",
//       color: "#6b7280",
//     },
//     noteCard: {
//       padding: "8px 12px",
//       marginTop: "6px",
//       borderRadius: "10px",
//       background: "#fffbeb",
//       border: "1px solid #facc15",
//       fontSize: "0.8rem",
//       color: "#854d0e",
//     },
//     noResultBox: {
//       marginTop: "10px",
//       padding: "16px 14px",
//       borderRadius: "12px",
//       border: "1px dashed #d1d5db",
//       background: "#f9fafb",
//       fontSize: "0.9rem",
//       color: "#6b7280",
//     },
//     // Responsive
//     "@media (max-width: 900px)": {},
//   };

//   // ----- DATA STRUCTURE WITH PDF LINKS -----
//   // हर तारीख का अलग pdf और "पूर्ण उत्तर" का अलग pdf
//   const assuranceEntries = [
//     {
//       year: 2025,
//       period: "मार्च, 2025",
//       month: "मार्च",
//       dates: [
//         { day: "11", pdf: "/pdfs/2025/03/11.pdf" },
//         { day: "12", pdf: "/pdfs/2025/03/12.pdf" },
//         { day: "13", pdf: "/pdfs/2025/03/13.pdf" },
//         { day: "17", pdf: "/pdfs/2025/03/17.pdf" },
//         { day: "18", pdf: "/pdfs/2025/03/18.pdf" },
//         { day: "20", pdf: "/pdfs/2025/03/20.pdf" },
//         { day: "21", pdf: "/pdfs/2025/03/21.pdf" },
//         { day: "24", pdf: "/pdfs/2025/03/24.pdf" },
//       ],
//       fullAnswer: {
//         label: "पूर्ण उत्तर",
//         pdf: "/pdfs/2025/03/full.pdf",
//       },
//     },
//     {
//       year: 2024,
//       period: "दिसम्बर, 2024",
//       month: "दिसम्बर",
//       dates: [
//         { day: "16", pdf: "/pdfs/2024/12/16.pdf" },
//         { day: "17", pdf: "/pdfs/2024/12/17.pdf" },
//         { day: "18", pdf: "/pdfs/2024/12/18.pdf" },
//         { day: "19", pdf: "/pdfs/2024/12/19.pdf" },
//         { day: "20", pdf: "/pdfs/2024/12/20.pdf" },
//       ],
//       fullAnswer: {
//         label: "पूर्ण उत्तर",
//         pdf: "/pdfs/2024/12/full.pdf",
//       },
//     },
//     {
//       year: 2024,
//       period: "जुलाई, 2024",
//       month: "जुलाई",
//       dates: [
//         { day: "01", pdf: "/pdfs/2024/07/01.pdf" },
//         { day: "02", pdf: "/pdfs/2024/07/02.pdf" },
//         { day: "03", pdf: "/pdfs/2024/07/03.pdf" },
//         { day: "04", pdf: "/pdfs/2024/07/04.pdf" },
//         { day: "05", pdf: "/pdfs/2024/07/05.pdf" },
//         { day: "08", pdf: "/pdfs/2024/07/08.pdf" },
//         { day: "09", pdf: "/pdfs/2024/07/09.pdf" },
//         { day: "10", pdf: "/pdfs/2024/07/10.pdf" },
//         { day: "11", pdf: "/pdfs/2024/07/11.pdf" },
//         { day: "12", pdf: "/pdfs/2024/07/12.pdf" },
//         { day: "15", pdf: "/pdfs/2024/07/15.pdf" },
//         { day: "16", pdf: "/pdfs/2024/07/16.pdf" },
//         { day: "18", pdf: "/pdfs/2024/07/18.pdf" },
//         { day: "19", pdf: "/pdfs/2024/07/19.pdf" },
//       ],
//       fullAnswer: {
//         label: "पूर्ण उत्तर",
//         pdf: "/pdfs/2024/07/full.pdf",
//       },
//     },
//     {
//       year: 2024,
//       period: "फरवरी, 2024",
//       month: "फरवरी",
//       dates: [
//         { day: "08", pdf: "/pdfs/2024/02/08.pdf" },
//         { day: "09", pdf: "/pdfs/2024/02/09.pdf" },
//         { day: "12", pdf: "/pdfs/2024/02/12.pdf" },
//         { day: "13", pdf: "/pdfs/2024/02/13.pdf" },
//         { day: "14", pdf: "/pdfs/2024/02/14.pdf" },
//         { day: "15", pdf: "/pdfs/2024/02/15.pdf" },
//         { day: "16", pdf: "/pdfs/2024/02/16.pdf" },
//         { day: "19", pdf: "/pdfs/2024/02/19.pdf" },
//       ],
//       fullAnswer: {
//         label: "पूर्ण उत्तर",
//         pdf: "/pdfs/2024/02/full.pdf",
//       },
//     },
//     {
//       year: 2023,
//       period: "जुलाई, 2023",
//       month: "जुलाई",
//       dates: [
//         { day: "11", pdf: "/pdfs/2023/07/11.pdf" },
//         { day: "12", pdf: "/pdfs/2023/07/12.pdf" },
//       ],
//       fullAnswer: {
//         label: "पूर्ण उत्तर",
//         pdf: "/pdfs/2023/07/full.pdf",
//       },
//     },
//     {
//       year: 2023,
//       period: "फरवरी-मार्च, 2023",
//       month: "फरवरी / मार्च",
//       dates: [
//         { day: "28", monthTag: "फरवरी", pdf: "/pdfs/2023/02/28.pdf" },
//         { day: "01", monthTag: "मार्च", pdf: "/pdfs/2023/03/01.pdf" },
//         { day: "02", monthTag: "मार्च", pdf: "/pdfs/2023/03/02.pdf" },
//         // ... बाकी दिन भी इसी तरह जोड़ सकते हैं
//       ],
//       fullAnswer: {
//         label: "पूर्ण उत्तर",
//         pdf: "/pdfs/2023/02-03/full.pdf",
//       },
//       note: "फरवरी और मार्च, दोनों माह की संयुक्त सूची।",
//     },
//     // इसी पैटर्न पर बाक़ी वर्षों के डेटा आगे जोड़ सकते हैं...
//   ];

//   // ----- STATE -----
//   const [selectedYear, setSelectedYear] = useState("all");
//   const [search, setSearch] = useState("");
//   const [openIndex, setOpenIndex] = useState(null);

//   // Years for sidebar
//   const years = useMemo(() => {
//     const set = new Set(assuranceEntries.map((e) => e.year));
//     return Array.from(set).sort((a, b) => b - a);
//   }, [assuranceEntries]);

//   // Filtered entries
//   const filteredEntries = useMemo(() => {
//     return assuranceEntries.filter((entry) => {
//       const matchYear =
//         selectedYear === "all" || entry.year.toString() === selectedYear;
//       const query = search.trim();
//       if (!query) return matchYear;

//       const text =
//         (entry.period || "") +
//         " " +
//         (entry.month || "") +
//         " " +
//         entry.dates.map((d) => d.day).join(" ") +
//         " " +
//         (entry.fullAnswer?.label || "") +
//         " " +
//         (entry.note || "");
//       return matchYear && text.toLowerCase().includes(query.toLowerCase());
//     });
//   }, [assuranceEntries, selectedYear, search]);

//   // Helper to open pdf (date + full)
//   const openPdf = (pdf) => {
//     if (!pdf) return;
//     window.open(pdf, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div style={styles.page}>
//       {/* HEADER */}
//       <header style={styles.header}>
//         <div>
//           <h1 style={styles.title}>लंबित आश्वासनों की सूची</h1>
//           <p style={styles.subtitle}>
//             वर्ष एवं माह के अनुसार सदन में दिए गए आश्वासनों की तिथि–वार सूची,
//             जिनसे सम्बंधित PDF दस्तावेज़ देखे जा सकते हैं।
//           </p>
//         </div>
//         <div style={styles.searchBox}>
//           <label htmlFor="search" style={styles.searchLabel}>
//             माह / तिथि / वर्ष से खोजें
//           </label>
//           <input
//             id="search"
//             type="text"
//             placeholder="जैसे: मार्च, 2024 या 21 ..."
//             style={styles.searchInput}
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//       </header>

//       {/* MAIN LAYOUT */}
//       <div style={styles.layout}>
//         {/* SIDEBAR – YEARS */}
//         <aside style={styles.sidebar}>
//           <h2 style={styles.sidebarTitle}>वर्ष अनुसार फिल्टर</h2>
//           <p style={styles.sidebarDesc}>
//             किसी वर्ष पर क्लिक करें या <b>सभी वर्ष</b> देखने के लिए नीचे वाला
//             विकल्प चुनें।
//           </p>
//           <ul style={styles.yearList}>
//             <li
//               style={styles.yearItem(selectedYear === "all")}
//               onClick={() => setSelectedYear("all")}
//             >
//               <span style={styles.yearDot(selectedYear === "all")} />
//               <span style={styles.yearLabel}>सभी वर्ष</span>
//             </li>
//             {years.map((year) => (
//               <li
//                 key={year}
//                 style={styles.yearItem(selectedYear === String(year))}
//                 onClick={() => setSelectedYear(String(year))}
//               >
//                 <span
//                   style={styles.yearDot(selectedYear === String(year))}
//                 ></span>
//                 <span style={styles.yearLabel}>{year}</span>
//               </li>
//             ))}
//           </ul>
//         </aside>

//         {/* MAIN CONTENT – ACCORDION */}
//         <main style={styles.main}>
//           <p style={styles.hint}>
//             नीचे दिए गए प्रत्येक खंड में: <b>तिथियों पर क्लिक</b> करके संबंधित
//             दिन का PDF देखें, तथा <b>&quot;पूर्ण उत्तर&quot;</b> बटन से पूरे
//             माह/अवधि की संपूर्ण फाइल देखें।
//           </p>

//           {filteredEntries.length === 0 && (
//             <div style={styles.noResultBox}>
//               दिए गए फिल्टर/खोज के आधार पर कोई प्रविष्टि उपलब्ध नहीं है।
//             </div>
//           )}

//           {filteredEntries.map((entry, index) => {
//             const isOpen = openIndex === index;
//             return (
//               <section key={entry.period + index} style={styles.accordion}>
//                 <div
//                   style={styles.accordionHeader(isOpen)}
//                   onClick={() =>
//                     setOpenIndex(isOpen ? null : index)
//                   }
//                 >
//                   <div style={styles.headerLeft}>
//                     <span style={styles.periodText}>{entry.period}</span>
//                     {entry.month && (
//                       <span style={styles.monthText}>{entry.month}</span>
//                     )}
//                   </div>
//                   <div style={styles.headerRight}>
//                     <span style={styles.yearBadge}>{entry.year}</span>
//                     <span style={styles.chipCount}>
//                       {entry.dates?.length || 0} तिथि
//                     </span>
//                     <span style={styles.chevron(isOpen)}>▶</span>
//                   </div>
//                 </div>

//                 {isOpen && (
//                   <div style={styles.accordionBody}>
//                     {/* LEFT – DATES */}
//                     <div style={styles.datesColumn}>
//                       <div style={styles.datesTitle}>
//                         तिथि अनुसार आश्वासन (PDF)
//                       </div>
//                       <div style={styles.datesWrap}>
//                         {entry.dates?.map((d, i) => (
//                           <a
//                             key={`${d.day}-${i}`}
//                             href={d.pdf}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             style={styles.dateChip}
//                             onClick={(e) => {
//                               // यदि आप सिर्फ window.open इस्तेमाल करना चाहें:
//                               // e.preventDefault();
//                               // openPdf(d.pdf);
//                             }}
//                             onMouseEnter={(e) => {
//                               Object.assign(
//                                 e.currentTarget.style,
//                                 styles.dateChipHover
//                               );
//                             }}
//                             onMouseLeave={(e) => {
//                               Object.assign(
//                                 e.currentTarget.style,
//                                 styles.dateChip
//                               );
//                             }}
//                           >
//                             {d.monthTag ? `${d.monthTag} ${d.day}` : d.day}
//                           </a>
//                         ))}
//                       </div>
//                     </div>

//                     {/* RIGHT – FULL ANSWER + NOTE */}
//                     <div style={styles.fullColumn}>
//                       <div>
//                         <div style={styles.fullTitle}>
//                           संपूर्ण उत्तर (पूर्ण उत्तर PDF)
//                         </div>
//                         {entry.fullAnswer?.pdf ? (
//                           <button
//                             type="button"
//                             style={styles.fullButton}
//                             onClick={() => openPdf(entry.fullAnswer.pdf)}
//                           >
//                             {entry.fullAnswer.label || "पूर्ण उत्तर देखें"}
//                           </button>
//                         ) : (
//                           <span style={styles.fullButtonSub}>
//                             पूर्ण उत्तर PDF उपलब्ध नहीं।
//                           </span>
//                         )}
//                       </div>
//                       {entry.note && (
//                         <div style={styles.noteCard}>{entry.note}</div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </section>
//             );
//           })}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default PendingAssurancesPage;




// import React, { useMemo, useState } from "react";

// const assuranceEntries = [
//   {
//     year: 2025,
//     period: "मार्च, 2025",
//     month: "मार्च",
//     dates: [
//       { day: "11", pdf: "/pdf/assurance/2025-03-11.pdf" },
//       { day: "12", pdf: "/pdf/assurance/2025-03-12.pdf" },
//       { day: "13", pdf: "/pdf/assurance/2025-03-13.pdf" },
//       { day: "17", pdf: "/pdf/assurance/2025-03-17.pdf" },
//       { day: "18", pdf: "/pdf/assurance/2025-03-18.pdf" },
//       { day: "20", pdf: "/pdf/assurance/2025-03-20.pdf" },
//       { day: "21", pdf: "/pdf/assurance/2025-03-21.pdf" },
//       { day: "24", pdf: "/pdf/assurance/2025-03-24.pdf" },
//     ],
//     fullAnswer: {
//       label: "पूर्ण उत्तर",
//       pdf: "/pdf/assurance/2025-03-purnuttar.pdf",
//     },
//   },
//   {
//     year: 2024,
//     period: "दिसम्बर, 2024",
//     month: "दिसम्बर",
//     dates: [
//       { day: "16", pdf: "/pdf/assurance/2024-12-16.pdf" },
//       { day: "17", pdf: "/pdf/assurance/2024-12-17.pdf" },
//       { day: "18", pdf: "/pdf/assurance/2024-12-18.pdf" },
//       { day: "19", pdf: "/pdf/assurance/2024-12-19.pdf" },
//       { day: "20", pdf: "/pdf/assurance/2024-12-20.pdf" },
//     ],
//     fullAnswer: {
//       label: "पूर्ण उत्तर",
//       pdf: "/pdf/assurance/2024-12-purnuttar.pdf",
//     },
//   },
//   {
//     year: 2024,
//     period: "जुलाई, 2024",
//     month: "जुलाई",
//     dates: [
//       { day: "01", pdf: "/pdf/assurance/2024-07-01.pdf" },
//       { day: "02", pdf: "/pdf/assurance/2024-07-02.pdf" },
//       { day: "03", pdf: "/pdf/assurance/2024-07-03.pdf" },
//       { day: "04", pdf: "/pdf/assurance/2024-07-04.pdf" },
//       { day: "05", pdf: "/pdf/assurance/2024-07-05.pdf" },
//       { day: "08", pdf: "/pdf/assurance/2024-07-08.pdf" },
//       { day: "09", pdf: "/pdf/assurance/2024-07-09.pdf" },
//       { day: "10", pdf: "/pdf/assurance/2024-07-10.pdf" },
//       { day: "11", pdf: "/pdf/assurance/2024-07-11.pdf" },
//       { day: "12", pdf: "/pdf/assurance/2024-07-12.pdf" },
//       { day: "15", pdf: "/pdf/assurance/2024-07-15.pdf" },
//       { day: "16", pdf: "/pdf/assurance/2024-07-16.pdf" },
//       { day: "18", pdf: "/pdf/assurance/2024-07-18.pdf" },
//       { day: "19", pdf: "/pdf/assurance/2024-07-19.pdf" },
//     ],
//     fullAnswer: {
//       label: "पूर्ण उत्तर",
//       pdf: "/pdf/assurance/2024-07-purnuttar.pdf",
//     },
//   },
//   {
//     year: 2024,
//     period: "फरवरी, 2024",
//     month: "फरवरी",
//     dates: [
//       { day: "08", pdf: "/pdf/assurance/2024-02-08.pdf" },
//       { day: "09", pdf: "/pdf/assurance/2024-02-09.pdf" },
//       { day: "12", pdf: "/pdf/assurance/2024-02-12.pdf" },
//       { day: "13", pdf: "/pdf/assurance/2024-02-13.pdf" },
//       { day: "14", pdf: "/pdf/assurance/2024-02-14.pdf" },
//       { day: "15", pdf: "/pdf/assurance/2024-02-15.pdf" },
//       { day: "16", pdf: "/pdf/assurance/2024-02-16.pdf" },
//       { day: "19", pdf: "/pdf/assurance/2024-02-19.pdf" },
//     ],
//     fullAnswer: {
//       label: "पूर्ण उत्तर",
//       pdf: "/pdf/assurance/2024-02-purnuttar.pdf",
//     },
//   },
//   {
//     year: 2023,
//     period: "जुलाई, 2023",
//     month: "जुलाई",
//     dates: [
//       { day: "11", pdf: "/pdf/assurance/2023-07-11.pdf" },
//       { day: "12", pdf: "/pdf/assurance/2023-07-12.pdf" },
//     ],
//     fullAnswer: {
//       label: "पूर्ण उत्तर",
//       pdf: "/pdf/assurance/2023-07-purnuttar.pdf",
//     },
//   },
//   {
//     year: 2022,
//     period: "टिप्पणी",
//     isNote: true,
//     noteText: "07 मार्च, 2022 तक की स्थिति में लंबित विभागवार आश्वासन",
//     notePdf: "/pdf/assurance/2022-03-07-status.pdf",
//   },
//   // 👉 इसी पैटर्न पर अपनी बाकी सारी entries Add कर सकते हैं
// ];

// const styles = {
//   page: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "24px 16px 40px",
//     fontFamily:
//       'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans Devanagari", sans-serif',
//     background:
//       "linear-gradient(145deg, rgba(248,250,252,1), rgba(239,246,255,1))",
//   },
//   layout: {
//     display: "grid",
//     gridTemplateColumns: "260px minmax(0, 1fr)",
//     gap: "20px",
//   },
//   header: {
//     marginBottom: "16px",
//   },
//   title: {
//     margin: 0,
//     fontSize: "1.9rem",
//     color: "#111827",
//   },
//   subtitle: {
//     marginTop: "4px",
//     fontSize: "0.95rem",
//     color: "#4b5563",
//   },
//   sidebar: {
//     background: "#ffffff",
//     borderRadius: "16px",
//     padding: "14px 14px 16px",
//     boxShadow: "0 10px 25px rgba(15,23,42,0.08)",
//     border: "1px solid rgba(226,232,240,0.9)",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     position: "sticky",
//     top: "12px",
//     alignSelf: "flex-start",
//   },
//   sidebarHeader: {
//     fontSize: "0.9rem",
//     fontWeight: 700,
//     color: "#111827",
//     marginBottom: "2px",
//   },
//   sidebarHint: {
//     fontSize: "0.78rem",
//     color: "#6b7280",
//   },
//   yearList: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "6px",
//     marginTop: "8px",
//   },
//   yearChip: (active) => ({
//     padding: "5px 10px",
//     borderRadius: "999px",
//     fontSize: "0.8rem",
//     border: "1px solid",
//     borderColor: active ? "#4f46e5" : "#e5e7eb",
//     background: active ? "rgba(79,70,229,0.06)" : "#ffffff",
//     color: active ? "#312e81" : "#4b5563",
//     cursor: "pointer",
//     fontWeight: active ? 700 : 500,
//     transition: "all 0.18s ease",
//     whiteSpace: "nowrap",
//   }),
//   searchBox: {
//     marginTop: "10px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "4px",
//   },
//   searchLabel: {
//     fontSize: "0.8rem",
//     fontWeight: 600,
//     color: "#6b7280",
//   },
//   searchInput: {
//     padding: "7px 10px",
//     borderRadius: "10px",
//     border: "1px solid #d1d5db",
//     fontSize: "0.85rem",
//     outline: "none",
//   },
//   main: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "12px",
//   },
//   sectionHeaderRow: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "baseline",
//     marginBottom: "4px",
//   },
//   sectionTitle: {
//     fontSize: "0.95rem",
//     fontWeight: 600,
//     color: "#4b5563",
//   },
//   sectionCount: {
//     fontSize: "0.8rem",
//     color: "#6b7280",
//   },
//   listContainer: {
//     borderRadius: "18px",
//     border: "1px solid rgba(209,213,219,0.8)",
//     background: "#ffffff",
//     boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
//     overflow: "hidden",
//   },
//   list: {
//     maxHeight: "520px",
//     overflowY: "auto",
//   },
//   listItem: {
//     borderBottom: "1px solid #f3f4f6",
//     padding: "10px 14px 10px",
//     display: "grid",
//     gridTemplateColumns: "minmax(0, 230px) minmax(0, 1fr)",
//     gap: "10px",
//   },
//   listItemNote: {
//     background: "linear-gradient(135deg, #fffbeb, #fef3c7)",
//   },
//   listItemLeft: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "2px",
//   },
//   periodText: {
//     fontSize: "0.95rem",
//     fontWeight: 600,
//     color: "#111827",
//   },
//   monthText: {
//     fontSize: "0.8rem",
//     color: "#6b7280",
//   },
//   yearBadge: {
//     display: "inline-flex",
//     alignSelf: "flex-start",
//     marginTop: "4px",
//     padding: "2px 8px",
//     borderRadius: "999px",
//     background: "#eef2ff",
//     color: "#3730a3",
//     fontSize: "0.78rem",
//     fontWeight: 600,
//   },
//   listItemRight: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "6px",
//   },
//   dateChipRow: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "6px",
//   },
//   dateChip: {
//     padding: "4px 8px",
//     borderRadius: "999px",
//     fontSize: "0.78rem",
//     border: "1px solid #e5e7eb",
//     background: "#f9fafb",
//     color: "#111827",
//     cursor: "pointer",
//     transition: "all 0.18s ease",
//   },
//   fullAnswerChip: {
//     padding: "4px 10px",
//     borderRadius: "999px",
//     fontSize: "0.78rem",
//     background: "#dcfce7",
//     border: "1px solid #bbf7d0",
//     color: "#166534",
//     cursor: "pointer",
//     fontWeight: 600,
//   },
//   noteText: {
//     fontSize: "0.85rem",
//     color: "#92400e",
//   },
//   noteLink: {
//     fontSize: "0.8rem",
//     marginTop: "4px",
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "4px",
//     cursor: "pointer",
//     color: "#b45309",
//     fontWeight: 600,
//   },
//   emptyState: {
//     padding: "16px",
//     textAlign: "center",
//     fontSize: "0.9rem",
//     color: "#6b7280",
//   },
// };

// const PendingAssurancesPage = () => {
//   const [selectedYear, setSelectedYear] = useState("all");
//   const [search, setSearch] = useState("");

//   const years = useMemo(() => {
//     const set = new Set(assuranceEntries.map((e) => e.year));
//     return Array.from(set).sort((a, b) => b - a);
//   }, []);

//   const filteredEntries = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     return assuranceEntries.filter((entry) => {
//       const matchYear =
//         selectedYear === "all" || String(entry.year) === String(selectedYear);

//       if (!q) return matchYear;

//       const haystack = (
//         (entry.period || "") +
//         " " +
//         (entry.month || "") +
//         " " +
//         (entry.noteText || "") +
//         " " +
//         (entry.dates ? entry.dates.map((d) => d.day).join(" ") : "") +
//         " " +
//         (entry.fullAnswer?.label || "")
//       ).toLowerCase();

//       return matchYear && haystack.includes(q);
//     });
//   }, [selectedYear, search]);

//   const handleOpenPdf = (pdf) => {
//     if (!pdf) return;
//     window.open(pdf, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div style={styles.page}>
//       <header style={styles.header}>
//         <h1 style={styles.title}>लंबित आश्वासनों की सूची</h1>
//         <p style={styles.subtitle}>
//           वर्ष, माह एवं तिथि के अनुसार सदन में दिए गए आश्वासनों की सूची। प्रत्येक
//           तिथि एवं पूर्ण उत्तर अलग-अलग PDF के रूप में उपलब्ध है।
//         </p>
//       </header>

//       <div style={styles.layout}>
//         {/* LEFT SIDEBAR */}
//         <aside style={styles.sidebar}>
//           <div>
//             <div style={styles.sidebarHeader}>फ़िल्टर</div>
//             <div style={styles.sidebarHint}>
//               वर्ष चुनें और ऊपर/नीचे स्क्रॉल कर के प्रविष्टियाँ देखें।
//             </div>
//           </div>

//           <div style={styles.yearList}>
//             <button
//               style={styles.yearChip(selectedYear === "all")}
//               onClick={() => setSelectedYear("all")}
//             >
//               सभी वर्ष
//             </button>
//             {years.map((year) => (
//               <button
//                 key={year}
//                 style={styles.yearChip(selectedYear === String(year))}
//                 onClick={() => setSelectedYear(String(year))}
//               >
//                 {year}
//               </button>
//             ))}
//           </div>

//           <div style={styles.searchBox}>
//             <label style={styles.searchLabel}>खोजें (माह / तिथि / शब्द)</label>
//             <input
//               style={styles.searchInput}
//               type="text"
//               placeholder="जैसे 'मार्च', '11', 'पूर्ण उत्तर'..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         </aside>

//         {/* MAIN CONTENT */}
//         <main style={styles.main}>
//           <div style={styles.sectionHeaderRow}>
//             <div style={styles.sectionTitle}>प्रविष्टियाँ</div>
//             <div style={styles.sectionCount}>
//               कुल {filteredEntries.length} रिकॉर्ड
//             </div>
//           </div>

//           <div style={styles.listContainer}>
//             {filteredEntries.length === 0 ? (
//               <div style={styles.emptyState}>
//                 दिए गए फ़िल्टर/खोज के अनुसार कोई रिकॉर्ड नहीं मिला।
//               </div>
//             ) : (
//               <div style={styles.list}>
//                 {filteredEntries.map((entry, index) => (
//                   <div
//                     key={entry.period + index}
//                     style={{
//                       ...styles.listItem,
//                       ...(entry.isNote ? styles.listItemNote : {}),
//                     }}
//                   >
//                     {/* LEFT COLUMN */}
//                     <div style={styles.listItemLeft}>
//                       <span style={styles.periodText}>{entry.period}</span>
//                       {entry.month && (
//                         <span style={styles.monthText}>{entry.month}</span>
//                       )}
//                       <span style={styles.yearBadge}>{entry.year}</span>
//                     </div>

//                     {/* RIGHT COLUMN */}
//                     <div style={styles.listItemRight}>
//                       {/* NOTE STYLE ENTRY */}
//                       {entry.isNote ? (
//                         <>
//                           <span style={styles.noteText}>
//                             {entry.noteText}
//                           </span>
//                           {entry.notePdf && (
//                             <span
//                               style={styles.noteLink}
//                               onClick={() => handleOpenPdf(entry.notePdf)}
//                             >
//                               स्थिति देखें (PDF)
//                               <span aria-hidden="true">↗</span>
//                             </span>
//                           )}
//                         </>
//                       ) : (
//                         <>
//                           {/* DATE CHIPS */}
//                           <div style={styles.dateChipRow}>
//                             {entry.dates?.map((d) => (
//                               <button
//                                 key={d.day}
//                                 style={styles.dateChip}
//                                 onClick={() => handleOpenPdf(d.pdf)}
//                                 title={`PDF - ${d.day} ${entry.month}`}
//                               >
//                                 {d.day}
//                               </button>
//                             ))}
//                           </div>

//                           {/* FULL ANSWER CHIP */}
//                           {entry.fullAnswer && (
//                             <div>
//                               <button
//                                 style={styles.fullAnswerChip}
//                                 onClick={() =>
//                                   handleOpenPdf(entry.fullAnswer.pdf)
//                                 }
//                                 title={`${entry.period} - पूर्ण उत्तर PDF`}
//                               >
//                                 {entry.fullAnswer.label} ↗
//                               </button>
//                             </div>
//                           )}
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default PendingAssurancesPage;







import React, { useMemo, useState } from "react";

// 🧾 SAMPLE DATA (add all your entries in this format)
// 🧾 ALL PDF FIELDS KEPT BLANK ("")
const assuranceEntries = [
  {
    year: 2025,
    period: "मार्च, 2025",
    month: "मार्च",
    dates: [
      { label: "11", pdf: "/misc/ashwasan/asw110325.pdf" },
      { label: "12", pdf: "/misc/ashwasan/asw120325.pdf" },
      { label: "13", pdf: "/misc/ashwasan/asw130325.pdf" },
      { label: "17", pdf: "/misc/ashwasan/asw170325.pdf" },
      { label: "18", pdf: "/misc/ashwasan/asw180325.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw200325.pdf" },
      { label: "21", pdf: "/misc/ashwasan/asw210325.pdf" },
      { label: "24", pdf: "/misc/ashwasan/asw240325.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/March2025_poorna_uttar.pdf",
    },
  },
  {
    year: 2024,
    period: "दिसम्बर, 2024",
    month: "दिसम्बर",
    dates: [
      { label: "16", pdf: "/misc/ashwasan/asw161224.pdf" },
      { label: "17", pdf: "/misc/ashwasan/asw171224.pdf" },
      { label: "18", pdf: "/misc/ashwasan/asw181224.pdf" },
      { label: "19", pdf: "/misc/ashwasan/asw191224.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw201224.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "",
    },
  },
  {
    year: 2024,
    period: "जुलाई, 2024",
    month: "जुलाई",
    dates: [
      { label: "01", pdf: "/misc/ashwasan/asw010724.pdf" },
      { label: "02", pdf: "/misc/ashwasan/asw020724.pdf" },
      { label: "03", pdf: "/misc/ashwasan/asw030724.pdf" },
      { label: "04", pdf: "/misc/ashwasan/asw040724.pdf" },
      { label: "05", pdf: "/misc/ashwasan/asw050724.pdf" },
      { label: "08", pdf: "/misc/ashwasan/asw080724.pdf" },
      { label: "09", pdf: "/misc/ashwasan/asw090724.pdf" },
      { label: "10", pdf: "/misc/ashwasan/asw100724.pdf" },
      { label: "11", pdf: "/misc/ashwasan/asw110724.pdf" },
      { label: "12", pdf: "/misc/ashwasan/asw120724.pdf" },
      { label: "15", pdf: "/misc/ashwasan/asw150724.pdf" },
      { label: "16", pdf: "/misc/ashwasan/asw160724.pdf" },
      { label: "18", pdf: "/misc/ashwasan/asw180724.pdf" },
      { label: "19", pdf: "/misc/ashwasan/asw190724.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/July24_poorna_uttar.pdf",
    },
  },
  {
    year: 2024,
    period: "फरवरी, 2024",
    month: "फरवरी",
    dates: [
      { label: "08", pdf: "/misc/ashwasan/asw080224.pdf" },
      { label: "09", pdf: "/misc/ashwasan/asw090224.pdf" },
      { label: "12", pdf: "/misc/ashwasan/asw120224.pdf" },
      { label: "13", pdf: "/misc/ashwasan/asw130224.pdf" },
      { label: "14", pdf: "/misc/ashwasan/asw140224.pdf" },
      { label: "15", pdf: "/misc/ashwasan/asw150224.pdf" },
      { label: "16", pdf: "/misc/ashwasan/asw160224.pdf" },
      { label: "19", pdf: "/misc/ashwasan/asw190224.pdf" },
    ],
  },
  {
    year: 2023,
    period: "जुलाई, 2023",
    month: "जुलाई",
    dates: [
      { label: "11", pdf: "/misc/ashwasan/asw110723.pdf" },
      { label: "12", pdf: "/misc/ashwasan/asw120723.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/July23_poorna_uttar.pdf",
    },
  },
  {
    year: 2023,
    period: "फरवरी-मार्च, 2023",
    month: "फरवरी-मार्च",
    dates: [
      { label: "28", pdf: "/misc/ashwasan/asw280223.pdf" }, // फरवरी
      { label: "01", pdf: "/misc/ashwasan/asw010323.pdf" },
      { label: "02", pdf: "/misc/ashwasan/asw020323.pdf" },
      { label: "03", pdf: "/misc/ashwasan/asw030323.pdf" },
      { label: "13", pdf: "/misc/ashwasan/asw130323.pdf" },
      { label: "14", pdf: "/misc/ashwasan/asw140323.pdf" },
      { label: "15", pdf: "/misc/ashwasan/asw150323.pdf" },
      { label: "16", pdf: "/misc/ashwasan/asw160323.pdf" },
      { label: "17", pdf: "/misc/ashwasan/asw170323.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw200323.pdf" },
      { label: "21", pdf: "/misc/ashwasan/asw210323.pdf" },
      { label: "27", pdf: "/misc/ashwasan/asw270323.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/bud23_poorna_uttar.pdf",
    },
  },
  {
    year: 2022,
    period: "दिसम्बर, 2022",
    month: "दिसम्बर",
    dates: [
      { label: "19", pdf: "/misc/ashwasan/asw191222.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw201222.pdf" },
      { label: "21", pdf: "/misc/ashwasan/asw211222.pdf" },
      { label: "22", pdf: "/misc/ashwasan/asw221222.pdf" },
      { label: "23", pdf: "/misc/ashwasan/asw231222.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/dec22_poorna_uttar.pdf",
    },
  },
  {
    year: 2022,
    period: "सितम्बर, 2022",
    month: "सितम्बर",
    dates: [
      { label: "13", pdf: "/misc/ashwasan/asw130922.pdf" },
      { label: "14", pdf: "/misc/ashwasan/asw140922.pdf" },
      { label: "15", pdf: "/misc/ashwasan/asw150922.pdf" },
      { label: "16", pdf: "/misc/ashwasan/asw160922.pdf" },
      { label: "17", pdf: "/misc/ashwasan/asw170922.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/sep22_poorna_uttar.pdf",
    },
  },
  {
    year: 2022,
    period: "मार्च, 2022",
    month: "मार्च",
    dates: [
      { label: "08", pdf: "/misc/ashwasan/asw080322.pdf" },
      { label: "09", pdf: "/misc/ashwasan/asw090322.pdf" },
      { label: "10", pdf: "/misc/ashwasan/asw100322.pdf" },
      { label: "11", pdf: "/misc/ashwasan/asw110322.pdf" },
      { label: "14", pdf: "/misc/ashwasan/asw140322.pdf" },
      { label: "15", pdf: "/misc/ashwasan/asw150322.pdf" },
      { label: "16", pdf: "/misc/ashwasan/asw160322.pdf" },
      { label: "17", pdf: "/misc/ashwasan/asw170322.pdf" },
      { label: "21", pdf: "/misc/ashwasan/asw210322.pdf" },
      { label: "23", pdf: "/misc/ashwasan/asw230322.pdf" },
      { label: "24", pdf: "/misc/ashwasan/asw240322.pdf" },
      { label: "25", pdf: "/misc/ashwasan/asw250322.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/march22_poorna_uttar.pdf",
    },
  },
  {
    year: 2022,
    period: "टिप्पणी",
    isNote: true,
    month: "",
    noteText:
      "07 मार्च, 2022 तक की स्थिति में लंबित विभागवार आश्वासन",
    notePdf: "/dept-wise-status",
  },
  {
    year: 2021,
    period: "दिसम्बर, 2021",
    month: "दिसम्बर",
    dates: [
      { label: "20", pdf: "/misc/ashwasan/asw201221.pdf" },
      { label: "21", pdf: "/misc/ashwasan/asw211221.pdf" },
      { label: "22", pdf: "/misc/ashwasan/asw221221.pdf" },
      { label: "23", pdf: "/misc/ashwasan/asw231221.pdf" },
      { label: "24", pdf: "/misc/ashwasan/asw241221.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/dec21_poorna_uttar.pdf",
    },
  },
  {
    year: 2021,
    period: "अगस्त, 2021",
    month: "अगस्त",
    dates: [
      { label: "09", pdf: "/misc/ashwasan/asw090821.pdf" },
      { label: "10", pdf: "/misc/ashwasan/asw100821.pdf" },
      { label: "11", pdf: "/misc/ashwasan/asw110821.pdf" },
      { label: "12", pdf: "/misc/ashwasan/asw120821.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/aug21_poorna_uttar.pdf",
    },
  },
  {
    year: 2021,
    period: "मार्च, 2021",
    month: "मार्च",
    dates: [
      { label: "01", pdf: "/misc/ashwasan/asw010321.pdf" },
      { label: "02", pdf: "/misc/ashwasan/asw020321.pdf" },
      { label: "04", pdf: "/misc/ashwasan/asw040321.pdf" },
      { label: "05", pdf: "/misc/ashwasan/asw050321.pdf" },
      { label: "08", pdf: "/misc/ashwasan/asw080321.pdf" },
      { label: "09", pdf: "/misc/ashwasan/asw090321.pdf" },
      { label: "15", pdf: "/misc/ashwasan/asw150321.pdf" },
      { label: "16", pdf: "/misc/ashwasan/asw160321.pdf" },
      { label: "17", pdf: "/misc/ashwasan/asw170321.pdf" },
      { label: "18", pdf: "/misc/ashwasan/asw180321.pdf" },
      { label: "19", pdf: "/misc/ashwasan/asw190321.pdf" },
      { label: "22", pdf: "/misc/ashwasan/asw220321.pdf" },
      { label: "23", pdf: "/misc/ashwasan/asw230321.pdf" },
      { label: "24", pdf: "/misc/ashwasan/asw240321.pdf" },
      { label: "25", pdf: "/misc/ashwasan/asw250321.pdf" },
      { label: "26", pdf: "/misc/ashwasan/asw260321.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/febmar21_poorna_uttar.pdf",
    },
  },
  {
    year: 2021,
    period: "फरवरी, 2021",
    month: "फरवरी",
    dates: [
      { label: "23", pdf: "/misc/ashwasan/asw230221.pdf" },
      { label: "24", pdf: "/misc/ashwasan/asw240221.pdf" },
      { label: "25", pdf: "/misc/ashwasan/asw250221.pdf" },
      { label: "26", pdf: "/misc/ashwasan/asw260221.pdf" },
    ],
  },
  {
    year: 2020,
    period: "दिसम्बर, 2020",
    month: "दिसम्बर",
    dates: [
      { label: "28", pdf: "/misc/ashwasan/asw281220.pdf" },
      { label: "29", pdf: "/misc/ashwasan/asw291220.pdf" },
      { label: "30", pdf: "/misc/ashwasan/asw301220.pdf" },
    ],
  },
  {
    year: 2020,
    period: "सितम्बर, 2020",
    month: "सितम्बर",
    dates: [
      { label: "21", pdf: "/misc/ashwasan/asw210920.pdf" },
      { label: "22", pdf: "/misc/ashwasan/asw220920.pdf" },
      { label: "23", pdf: "/misc/ashwasan/asw230920.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/sep20_poorna_uttar.pdf",
    },
  },
  {
    year: 2020,
    period: "मार्च, 2020",
    month: "मार्च",
    dates: [
      { label: "17", pdf: "/misc/ashwasan/asw170320.pdf" },
      { label: "18", pdf: "/misc/ashwasan/asw180320.pdf" },
      { label: "19", pdf: "/misc/ashwasan/asw190320.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw200320.pdf" },
    ],
  },
  {
    year: 2019,
    period: "दिसम्बर, 2019",
    month: "दिसम्बर",
    dates: [
      { label: "17", pdf: "/misc/ashwasan/asw171219.pdf" },
      { label: "18", pdf: "/misc/ashwasan/asw181219.pdf" },
      { label: "19", pdf: "/misc/ashwasan/asw191219.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw201219.pdf" },
      { label: "23", pdf: "/misc/ashwasan/asw231219.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/win19_poorna__uttar.pdf",
    },
  },
  {
    year: 2019,
    period: "जुलाई, 2019",
    month: "जुलाई",
    dates: [
      { label: "08", pdf: "/misc/ashwasan/asw080719.pdf" },
      { label: "09", pdf: "/misc/ashwasan/asw090719.pdf" },
      { label: "10", pdf: "/misc/ashwasan/asw100719.pdf" },
      { label: "11", pdf: "/misc/ashwasan/asw110719.pdf" },
      { label: "12", pdf: "/misc/ashwasan/asw120719.pdf" },
      { label: "15", pdf: "/misc/ashwasan/asw150719.pdf" },
      { label: "16", pdf: "/misc/ashwasan/asw160719.pdf" },
      { label: "17", pdf: "/misc/ashwasan/asw170719.pdf" },
      { label: "18", pdf: "/misc/ashwasan/asw180719.pdf" },
      { label: "19", pdf: "/misc/ashwasan/asw190719.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw200719.pdf" },
      { label: "21", pdf: "/misc/ashwasan/asw210719.pdf" },
      { label: "22", pdf: "/misc/ashwasan/asw220719.pdf" },
      { label: "23", pdf: "/misc/ashwasan/asw230719.pdf" },
      { label: "24", pdf: "/misc/ashwasan/asw240719.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/win19_poorna_uttar.pdf",
    },
  },
  {
    year: 2019,
    period: "फरवरी, 2019",
    month: "फरवरी",
    dates: [
      { label: "18", pdf: "/misc/ashwasan/asw180219.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw200219.pdf" },
      { label: "21", pdf: "/misc/ashwasan/asw210219.pdf" },
    ],
  },
  {
    year: 2018,
    period: "जून, 2018",
    month: "जून",
    dates: [
      { label: "25", pdf: "/misc/ashwasan/asw250618.pdf" },
      { label: "26", pdf: "/misc/ashwasan/asw260618.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/mon18_poorna_uttar.pdf",
    },
  },
  {
    year: 2018,
    period: "फरवरी-मार्च, 2018",
    month: "फरवरी-मार्च",
    dates: [
      { label: "27", pdf: "/misc/ashwasan/asw270218.pdf" },
      { label: "28", pdf: "/misc/ashwasan/asw280218.pdf" },
      { label: "07", pdf: "/misc/ashwasan/asw070318.pdf" },
      { label: "08", pdf: "/misc/ashwasan/asw080318.pdf" },
      { label: "09", pdf: "/misc/ashwasan/asw090318.pdf" },
      { label: "12", pdf: "/misc/ashwasan/asw120318.pdf" },
      { label: "13", pdf: "/misc/ashwasan/asw130318.pdf" },
      { label: "14", pdf: "/misc/ashwasan/asw140318.pdf" },
      { label: "15", pdf: "/misc/ashwasan/asw150318.pdf" },
      { label: "16", pdf: "/misc/ashwasan/asw160318.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw200318.pdf" },
      { label: "21", pdf: "/misc/ashwasan/asw210318.pdf" },
      { label: "22", pdf: "/misc/ashwasan/asw220318.pdf" },
      { label: "23", pdf: "/misc/ashwasan/asw230318.pdf" },
      { label: "26", pdf: "/misc/ashwasan/asw260318.pdf" },
      { label: "27", pdf: "/misc/ashwasan/asw270318.pdf" },
      { label: "28", pdf: "/misc/ashwasan/asw280318.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/bud18_poorna_uttar.pdf",
    },
  },
  {
    year: 2017,
    period: "नवम्बर - दिसम्बर, 2017",
    month: "नवम्बर-दिसम्बर",
    dates: [
      { label: "27", pdf: "/misc/ashwasan/asw271117.pdf" },
      { label: "28", pdf: "/misc/ashwasan/asw281117.pdf" },
      { label: "29", pdf: "/misc/ashwasan/asw291117.pdf" },
      { label: "30", pdf: "/misc/ashwasan/asw301117.pdf" },
      { label: "01", pdf: "/misc/ashwasan/asw011217.pdf" },
      { label: "04", pdf: "/misc/ashwasan/asw041217.pdf" },
      { label: "05", pdf: "/misc/ashwasan/asw051217.pdf" },
      { label: "06", pdf: "/misc/ashwasan/asw061217.pdf" },
      { label: "07", pdf: "/misc/ashwasan/asw071217.pdf" },
      { label: "08", pdf: "/misc/ashwasan/asw081217.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/mon17_poorna_uttar.pdf",
    },
  },
  {
    year: 2017,
    period: "जुलाई, 2017",
    month: "जुलाई",
    dates: [
      { label: "17", pdf: "/misc/ashwasan/asw170717.pdf" },
      { label: "18", pdf: "/misc/ashwasan/asw180717.pdf" },
      { label: "19", pdf: "/misc/ashwasan/asw190717.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw200717.pdf" },
      { label: "21", pdf: "/misc/ashwasan/asw210717.pdf" },
      { label: "24", pdf: "/misc/ashwasan/asw240717.pdf" },
      { label: "25", pdf: "/misc/ashwasan/asw250717.pdf" },
      { label: "26", pdf: "/misc/ashwasan/asw260717.pdf" },
      { label: "27 (स्थगित बैठक)", pdf: "/misc/ashwasan/asw270717.pdf" },
      { label: "28 (स्थगित बैठक)", pdf: "/misc/ashwasan/asw280717.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/mon17_poorna_uttar.pdf",
    },
  },
  {
    year: 2017,
    period: "फरवरी-मार्च, 2017",
    month: "फरवरी-मार्च",
    dates: [
      { label: "22", pdf: "/misc/ashwasan/asw220217.pdf" },
      { label: "23", pdf: "/misc/ashwasan/asw230217.pdf" },
      { label: "27", pdf: "/misc/ashwasan/asw270217.pdf" },
      { label: "28", pdf: "/misc/ashwasan/asw280217.pdf" },
      { label: "01", pdf: "/misc/ashwasan/asw010317.pdf" },
      { label: "02", pdf: "/misc/ashwasan/asw020317.pdf" },
      { label: "03", pdf: "/misc/ashwasan/asw030317.pdf" },
      { label: "06", pdf: "/misc/ashwasan/asw060317.pdf" },
      { label: "07", pdf: "/misc/ashwasan/asw070317.pdf" },
      { label: "08", pdf: "/misc/ashwasan/asw080317.pdf" },
      { label: "09", pdf: "/misc/ashwasan/asw090317.pdf" },
      { label: "10", pdf: "/misc/ashwasan/asw100317.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw200317.pdf" },
      { label: "21", pdf: "/misc/ashwasan/asw210317.pdf" },
      { label: "22", pdf: "/misc/ashwasan/asw220317.pdf" },
      { label: "23", pdf: "/misc/ashwasan/asw230317.pdf" },
      { label: "24", pdf: "/misc/ashwasan/asw240317.pdf" },
      { label: "27", pdf: "/misc/ashwasan/asw270317.pdf" },
      { label: "28", pdf: "/misc/ashwasan/asw280317.pdf" },
      { label: "30", pdf: "/misc/ashwasan/asw300317.pdf" },
      { label: "31", pdf: "/misc/ashwasan/asw310317.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/bud17_poorna_uttar.pdf",
    },
  },
  {
    year: 2016,
    period: "दिसम्बर, 2016",
    month: "दिसम्बर",
    dates: [
      { label: "05", pdf: "/misc/ashwasan/asw051216.pdf" },
      { label: "06", pdf: "/misc/ashwasan/asw061216.pdf" },
      { label: "07", pdf: "/misc/ashwasan/asw071216.pdf" },
      { label: "08", pdf: "/misc/ashwasan/asw081216.pdf" },
      { label: "09", pdf: "/misc/ashwasan/asw091216.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/dec16_poorna_uttar.pdf",
    },
  },
  {
    year: 2016,
    period: "जुलाई, 2016",
    month: "जुलाई",
    dates: [
      { label: "18", pdf: "/misc/ashwasan/asw180716.pdf" },
      { label: "19", pdf: "/misc/ashwasan/asw190716.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw200716.pdf" },
      { label: "21", pdf: "/misc/ashwasan/asw210716.pdf" },
      { label: "22", pdf: "/misc/ashwasan/asw220716.pdf" },
      { label: "25", pdf: "/misc/ashwasan/asw250716.pdf" },
      { label: "26", pdf: "/misc/ashwasan/asw260716.pdf" },
      { label: "27", pdf: "/misc/ashwasan/asw270716.pdf" },
      { label: "28", pdf: "/misc/ashwasan/asw280716.pdf" },
      { label: "29", pdf: "/misc/ashwasan/asw290716.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/jul16_poorna_uttar.pdf",
    },
  },
  {
    year: 2016,
    period: "फरवरी-अप्रैल, 2016",
    month: "फरवरी-अप्रैल",
    dates: [
      { label: "24", pdf: "/misc/ashwasan/asw240216.pdf" },
      { label: "25", pdf: "/misc/ashwasan/asw250216.pdf" },
      { label: "26", pdf: "/misc/ashwasan/asw260216.pdf" },
      { label: "29", pdf: "/misc/ashwasan/asw290216.pdf" },
      { label: "01", pdf: "/misc/ashwasan/asw010316.pdf" },
      { label: "02", pdf: "/misc/ashwasan/asw020316.pdf" },
      { label: "03", pdf: "/misc/ashwasan/asw030316.pdf" },
      { label: "04", pdf: "/misc/ashwasan/asw040316.pdf" },
      { label: "08", pdf: "/misc/ashwasan/asw080316.pdf" },
      { label: "09", pdf: "/misc/ashwasan/asw090316.pdf" },
      { label: "10", pdf: "/misc/ashwasan/asw100316.pdf" },
      { label: "11", pdf: "/misc/ashwasan/asw110316.pdf" },
      { label: "14", pdf: "/misc/ashwasan/asw140316.pdf" },
      { label: "15", pdf: "/misc/ashwasan/asw150316.pdf" },
      { label: "16", pdf: "/misc/ashwasan/asw160316.pdf" },
      { label: "17", pdf: "/misc/ashwasan/asw170316.pdf" },
      { label: "18", pdf: "/misc/ashwasan/asw180316.pdf" },
      { label: "28", pdf: "/misc/ashwasan/asw280316.pdf" },
      { label: "29", pdf: "/misc/ashwasan/asw290316.pdf" },
      { label: "30", pdf: "/misc/ashwasan/asw300316.pdf" },
      { label: "31", pdf: "/misc/ashwasan/asw310316.pdf" },
      { label: "01", pdf: "/misc/ashwasan/asw010416.pdf" }, // अप्रैल
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/feb-apr16_poorna_uttar.pdf",
    },
  },
  {
    year: 2015,
    period: "दिसम्बर, 2015",
    month: "दिसम्बर",
    dates: [
      { label: "07", pdf: "/misc/ashwasan/asw071215.pdf" },
      { label: "08", pdf: "/misc/ashwasan/asw081215.pdf" },
      { label: "09", pdf: "/misc/ashwasan/asw091215.pdf" },
      { label: "10", pdf: "/misc/ashwasan/asw101215.pdf" },
      { label: "11", pdf: "/misc/ashwasan/asw111215.pdf" },
      { label: "14", pdf: "/misc/ashwasan/asw141215.pdf" },
      { label: "15", pdf: "/misc/ashwasan/asw151215.pdf" },
      { label: "16", pdf: "/misc/ashwasan/asw161215.pdf" },
      { label: "17", pdf: "/misc/ashwasan/asw171215.pdf" },
      { label: "18", pdf: "/misc/ashwasan/asw181215.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/poorna_uttar_dec15.pdf",
    },
  },
  {
    year: 2015,
    period: "जुलाई, 2015",
    month: "जुलाई",
    dates: [
      { label: "20", pdf: "/misc/ashwasan/asw200715.pdf" },
      { label: "21", pdf: "/misc/ashwasan/asw210715.pdf" },
      { label: "22", pdf: "/misc/ashwasan/asw220715.pdf" },
      { label: "23", pdf: "/misc/ashwasan/asw230715.pdf" },
      { label: "24", pdf: "/misc/ashwasan/asw240715.pdf" },
      { label: "27", pdf: "/misc/ashwasan/asw270715.pdf" },
      { label: "28", pdf: "/misc/ashwasan/asw280715.pdf" },
      { label: "29", pdf: "/misc/ashwasan/asw290715.pdf" },
      { label: "30", pdf: "/misc/ashwasan/asw300715.pdf" },
      { label: "31", pdf: "/misc/ashwasan/asw310715.pdf" },
    ],
    fullAnswer: {
      label: "खण्ड - 4 - पूर्ण उत्तर",
      pdf: "/misc/ashwasan/poornauttar_july2015.pdf",
    },
  },
  {
    year: 2015,
    period: "फरवरी-मार्च, 2015",
    month: "फरवरी-मार्च",
    dates: [
      { label: "19", pdf: "/misc/ashwasan/asw190215.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw200215.pdf" },
      { label: "23", pdf: "/misc/ashwasan/asw230215.pdf" },
      { label: "24", pdf: "/misc/ashwasan/asw240215.pdf" },
      { label: "25", pdf: "/misc/ashwasan/asw250215.pdf" },
      { label: "26", pdf: "/misc/ashwasan/asw260215.pdf" },
      { label: "27", pdf: "/misc/ashwasan/asw270215.pdf" },
      { label: "02", pdf: "/misc/ashwasan/asw020315.pdf" },
      { label: "03", pdf: "/misc/ashwasan/asw030315.pdf" },
      { label: "04", pdf: "/misc/ashwasan/asw040315.pdf" },
      { label: "11", pdf: "/misc/ashwasan/asw110315.pdf" },
      { label: "12", pdf: "/misc/ashwasan/asw120315.pdf" },
      { label: "13", pdf: "/misc/ashwasan/asw130315.pdf" },
      { label: "16", pdf: "/misc/ashwasan/asw160315.pdf" },
      { label: "17", pdf: "/misc/ashwasan/asw170315.pdf" },
      { label: "18", pdf: "/misc/ashwasan/asw180315.pdf" },
      { label: "19", pdf: "/misc/ashwasan/asw190315.pdf" },
      { label: "20", pdf: "/misc/ashwasan/asw200315.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/apornauttar_dec.pdf",
    },
  },
  {
    year: 2014,
    period: "दिसम्बर, 2014",
    month: "दिसम्बर",
    dates: [
      { label: "08", pdf: "/misc/ashwasan/asw081214.pdf" },
      { label: "09", pdf: "/misc/ashwasan/asw091214.pdf" },
      { label: "10", pdf: "/misc/ashwasan/asw101214.pdf" },
      { label: "11", pdf: "/misc/ashwasan/asw111214.pdf" },
      { label: "12", pdf: "/misc/ashwasan/asw121214.pdf" },
    ],
    fullAnswer: {
      label: "पूर्ण उत्तर",
      pdf: "/misc/ashwasan/apornauttar2014.pdf",
    },
  },
  {
    year: 2014,
    period: "जून-जुलाई, 2014",
    month: "जून-जुलाई",
    dates: [
      { label: "30", pdf: "/misc/ashwasan/asw300614.pdf" }, // जून
      { label: "01", pdf: "/misc/ashwasan/asw010714.pdf" },
      { label: "02", pdf: "/misc/ashwasan/asw020714.pdf" },
      { label: "03", pdf: "/misc/ashwasan/asw030714.pdf" },
      { label: "04", pdf: "/misc/ashwasan/asw040714.pdf" },
      { label: "07", pdf: "/misc/ashwasan/asw070714.pdf" },
      { label: "08", pdf: "/misc/ashwasan/asw080714.pdf" },
      { label: "09", pdf: "/misc/ashwasan/asw090714.pdf" },
      { label: "10", pdf: "/misc/ashwasan/asw100714.pdf" },
      { label: "11", pdf: "/misc/ashwasan/asw110714.pdf" },
      { label: "14", pdf: "/misc/ashwasan/asw140714.pdf" },
      { label: "15", pdf: "/misc/ashwasan/asw150714.pdf" },
      { label: "16", pdf: "/misc/ashwasan/asw160714.pdf" },
      { label: "17", pdf: "/misc/ashwasan/asw170714.pdf" },
      { label: "18", pdf: "/misc/ashwasan/asw180714.pdf" },
      { label: "21", pdf: "/misc/ashwasan/asw210714.pdf" },
      { label: "22", pdf: "/misc/ashwasan/asw220714.pdf" },
      { label: "23", pdf: "/misc/ashwasan/asw230714.pdf" },
      { label: "24", pdf: "/misc/ashwasan/asw240714.pdf" },
      { label: "25", pdf: "/misc/ashwasan/asw250714.pdf" },
      { label: "28", pdf: "/misc/ashwasan/asw280714.pdf" },
    ],
  },
];


// 🎨 INLINE STYLES
const styles = {
  page: {
    maxWidth: "1220px",
    margin: "0 auto",
    padding: "28px 18px 40px",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans Devanagari", sans-serif',
    background:
      "radial-gradient(circle at top left, #e0f2fe 0, #eef2ff 32%, #ffffff 70%)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "20px",
  },
  titleBlock: { display: "flex", flexDirection: "column", gap: "6px" },
  title: {
    fontSize: "1.9rem",
    margin: 0,
    color: "#0f172a",
    letterSpacing: "0.03em",
  },
  subtitle: {
    margin: 0,
    fontSize: "0.95rem",
    color: "#475569",
  },
  badgeRow: {
    display: "flex",
    gap: "8px",
    marginTop: "4px",
    flexWrap: "wrap",
  },
  mainBadge: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    padding: "3px 9px",
    borderRadius: "999px",
    background: "rgba(15,23,42,0.06)",
    color: "#0f172a",
  },
  controls: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "flex-end",
  },
  controlGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    minWidth: "180px",
  },
  label: {
    fontSize: "0.78rem",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "#64748b",
  },
  select: {
    padding: "7px 10px",
    borderRadius: "999px",
    border: "1px solid #cbd5f5",
    fontSize: "0.9rem",
    background: "rgba(255,255,255,0.9)",
    outline: "none",
    boxShadow: "0 4px 10px rgba(15,23,42,0.06)",
  },
  input: {
    padding: "7px 12px",
    borderRadius: "999px",
    border: "1px solid #cbd5f5",
    fontSize: "0.9rem",
    background: "rgba(255,255,255,0.9)",
    outline: "none",
    boxShadow: "0 4px 10px rgba(15,23,42,0.06)",
  },
  contentWrapper: {
    marginTop: "10px",
    display: "grid",
    gridTemplateColumns: "260px minmax(0,1fr)",
    gap: "18px",
  },
  yearSidebar: {
    background: "rgba(255,255,255,0.9)",
    borderRadius: "18px",
    padding: "14px 12px",
    boxShadow: "0 10px 25px rgba(15,23,42,0.08)",
    border: "1px solid #e2e8f0",
    alignSelf: "flex-start",
    position: "sticky",
    top: "12px",
  },
  yearSidebarTitle: {
    fontSize: "0.85rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "#64748b",
    margin: "0 0 8px",
  },
  yearList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },
  yearChip: (active) => ({
    borderRadius: "999px",
    padding: "4px 10px",
    fontSize: "0.85rem",
    cursor: "pointer",
    border: active ? "1px solid #4f46e5" : "1px solid transparent",
    background: active ? "#eef2ff" : "#f8fafc",
    color: active ? "#1d28a3" : "#0f172a",
    fontWeight: active ? 600 : 500,
    boxShadow: active ? "0 4px 10px rgba(79,70,229,0.25)" : "none",
    transition: "all 0.15s ease",
  }),
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  yearBlock: {
    display: "flex",
    gap: "14px",
  },
  yearTimelineRail: {
    width: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  yearPill: {
    padding: "4px 8px",
    borderRadius: "999px",
    fontSize: "0.75rem",
    background: "#0f172a",
    color: "#e5e7eb",
    fontWeight: 600,
    boxShadow: "0 4px 12px rgba(15,23,42,0.45)",
  },
  verticalLine: {
    flex: 1,
    width: "2px",
    background:
      "linear-gradient(to bottom, rgba(148,163,184,0.9), rgba(148,163,184,0.1))",
    marginTop: "6px",
  },
  cardsColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  card: {
    background: "rgba(255,255,255,0.95)",
    borderRadius: "16px",
    padding: "12px 14px 12px",
    boxShadow: "0 10px 24px rgba(15,23,42,0.10)",
    border: "1px solid rgba(226,232,240,0.9)",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  cardHeaderRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "8px",
    alignItems: "flex-start",
  },
  cardTitle: {
    margin: 0,
    fontSize: "1rem",
    color: "#0f172a",
  },
  cardMonth: {
    margin: 0,
    fontSize: "0.82rem",
    color: "#6b7280",
  },
  chipRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },
  dateChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3px 9px",
    borderRadius: "999px",
    border: "1px solid #e2e8f0",
    background: "#f8fafc",
    fontSize: "0.8rem",
    color: "#0f172a",
    textDecoration: "none",
    cursor: "pointer",
    boxShadow: "0 3px 8px rgba(15,23,42,0.06)",
    transition: "transform 0.15s ease, boxShadow 0.15s ease, background 0.15s ease, border-color 0.15s ease",
  },
  // hover effect style
  dateChipHover: {
    transform: "translateY(-1px) scale(1.03)",
    background: "#eef2ff",
    borderColor: "#4f46e5",
    boxShadow: "0 4px 12px rgba(79,70,229,0.35)",
  },
  dateChipStrong: {
    fontWeight: 600,
  },
  fullAnswerChip: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 10px",
    borderRadius: "999px",
    border: "none",
    background:
      "linear-gradient(to right, #4f46e5, #6366f1, #22c55e)",
    fontSize: "0.78rem",
    color: "#eef2ff",
    fontWeight: 600,
    textDecoration: "none",
    cursor: "pointer",
    boxShadow: "0 6px 16px rgba(79,70,229,0.35)",
    marginTop: "4px",
  },
  // when pdf is empty – still show, but look disabled
  fullAnswerChipDisabled: {
    opacity: 0.7,
    cursor: "not-allowed",
    boxShadow: "0 3px 8px rgba(148,163,184,0.4)",
  },
  fullAnswerIcon: {
    fontSize: "0.95rem",
  },
  noteCard: {
    borderLeft: "4px solid #f97316",
  },
  noteText: {
    fontSize: "0.86rem",
    color: "#7c2d12",
    margin: 0,
  },
  noteLink: {
    marginTop: "6px",
    fontSize: "0.8rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    textDecoration: "none",
    color: "#c05621",
    fontWeight: 600,
  },
  emptyState: {
    marginTop: "24px",
    padding: "18px 14px",
    borderRadius: "14px",
    border: "1px dashed #cbd5e1",
    background: "rgba(248,250,252,0.9)",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#64748b",
  },
};

const PendingAssurancesPage = () => {
  const [selectedYear, setSelectedYear] = useState("all");
  const [search, setSearch] = useState("");
  const [hoveredDate, setHoveredDate] = useState(null);

  const years = useMemo(() => {
    const set = new Set(assuranceEntries.map((e) => e.year));
    return Array.from(set).sort((a, b) => b - a);
  }, []);

  const groupedByYear = useMemo(() => {
    const filtered = assuranceEntries.filter((entry) => {
      const matchYear =
        selectedYear === "all" || entry.year.toString() === selectedYear;

      const q = search.trim();
      if (!q) return matchYear;

      const haystack =
        (entry.period || "") +
        " " +
        (entry.month || "") +
        " " +
        (entry.noteText || "") +
        " " +
        (entry.dates || [])
          .map((d) => d.label)
          .join(" ");

      return matchYear && haystack.toLowerCase().includes(q.toLowerCase());
    });

    const map = new Map();
    filtered.forEach((e) => {
      if (!map.has(e.year)) map.set(e.year, []);
      map.get(e.year).push(e);
    });

    map.forEach((arr) => {
      arr.sort((a, b) => a.period.localeCompare(b.period));
    });

    return Array.from(map.entries())
      .sort((a, b) => b[0] - a[0])
      .map(([year, entries]) => ({ year, entries }));
  }, [selectedYear, search]);

  const isNarrow =
    typeof window !== "undefined" ? window.innerWidth < 900 : false;

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.titleBlock}>
          <h1 style={styles.title}>लंबित आश्वासनों की सूची</h1>
          <p style={styles.subtitle}>
            सत्रवार एवं तिथि–वार सदन में दिए गए आश्वासनों की स्थिति (PDF लिंक सहित)।
          </p>
          <div style={styles.badgeRow}>
            <span style={styles.mainBadge}>Legislative Dashboard</span>
          </div>
        </div>

        <div style={styles.controls}>
          <div style={styles.controlGroup}>
            <label htmlFor="year" style={styles.label}>
              वर्ष
            </label>
            <select
              id="year"
              style={styles.select}
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="all">सभी वर्ष</option>
              {years.map((y) => (
                <option key={y} value={y.toString()}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.controlGroup}>
            <label htmlFor="search" style={styles.label}>
              खोजें
            </label>
            <input
              id="search"
              style={styles.input}
              placeholder="माह / तिथि / टिप्पणी से खोजें..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div
        style={{
          ...styles.contentWrapper,
          ...(isNarrow
            ? {
                display: "flex",
                flexDirection: "column",
              }
            : {}),
        }}
      >
        {/* YEAR SIDEBAR */}
        <aside style={styles.yearSidebar}>
          <p style={styles.yearSidebarTitle}>वर्ष</p>
          <ul style={styles.yearList}>
            <li>
              <button
                type="button"
                style={styles.yearChip(selectedYear === "all")}
                onClick={() => setSelectedYear("all")}
              >
                सभी
              </button>
            </li>
            {years.map((y) => (
              <li key={y}>
                <button
                  type="button"
                  style={styles.yearChip(selectedYear === y.toString())}
                  onClick={() => setSelectedYear(y.toString())}
                >
                  {y}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* TIMELINE CARDS */}
        <section style={styles.timeline}>
          {groupedByYear.map(({ year, entries }) => (
            <div key={year} style={styles.yearBlock}>
              <div style={styles.yearTimelineRail}>
                <div style={styles.yearPill}>{year}</div>
                <div style={styles.verticalLine} />
              </div>

              <div style={styles.cardsColumn}>
                {entries.map((entry, idx) => {
                  if (entry.isNote) {
                    return (
                      <article
                        key={entry.period + idx}
                        style={{ ...styles.card, ...styles.noteCard }}
                      >
                        <div style={styles.cardHeaderRow}>
                          <div>
                            <h2 style={styles.cardTitle}>{entry.period}</h2>
                          </div>
                        </div>
                        <p style={styles.noteText}>{entry.noteText}</p>
                        {entry.notePdf && (
                          <a
                            href={entry.notePdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.noteLink}
                          >
                            विस्तृत विवरण (PDF) ↗
                          </a>
                        )}
                      </article>
                    );
                  }

                  return (
                    <article key={entry.period + idx} style={styles.card}>
                      <div style={styles.cardHeaderRow}>
                        <div>
                          <h2 style={styles.cardTitle}>{entry.period}</h2>
                          {entry.month && (
                            <p style={styles.cardMonth}>{entry.month}</p>
                          )}
                        </div>
                      </div>

                      {/* DATE CHIPS */}
                      <div style={styles.chipRow}>
                        {entry.dates &&
                          entry.dates.map((d) => {
                            const dateKey = `${entry.year}-${entry.period}-${d.label}`;
                            const isHovered = hoveredDate === dateKey;

                            return (
                              <a
                                key={d.label}
                                href={d.pdf || "#"}
                                target={d.pdf ? "_blank" : undefined}
                                rel={d.pdf ? "noopener noreferrer" : undefined}
                                style={{
                                  ...styles.dateChip,
                                  ...(d.highlight ? styles.dateChipStrong : {}),
                                  ...(isHovered ? styles.dateChipHover : {}),
                                }}
                                title={`दिनांक ${d.label} का PDF`}
                                onMouseEnter={() => setHoveredDate(dateKey)}
                                onMouseLeave={() => setHoveredDate(null)}
                              >
                                {d.label}
                              </a>
                            );
                          })}
                      </div>

                      {/* FULL ANSWER CHIP – हमेशा दिखेगा */}
                      {entry.fullAnswer && (
                        <a
                          href={entry.fullAnswer.pdf || "#"}
                          target={entry.fullAnswer.pdf ? "_blank" : undefined}
                          rel={
                            entry.fullAnswer.pdf
                              ? "noopener noreferrer"
                              : undefined
                          }
                          style={{
                            ...styles.fullAnswerChip,
                            ...(entry.fullAnswer.pdf
                              ? {}
                              : styles.fullAnswerChipDisabled),
                          }}
                          title="पूर्ण उत्तर PDF"
                        >
                          <span style={styles.fullAnswerIcon}>📄</span>
                          {entry.fullAnswer.label}
                        </a>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          ))}

          {groupedByYear.length === 0 && (
            <div style={styles.emptyState}>
              दिए गए फिल्टर के अनुसार कोई प्रविष्टि उपलब्ध नहीं है।
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default PendingAssurancesPage;