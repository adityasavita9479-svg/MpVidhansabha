// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { FaFilePdf } from "react-icons/fa";

// // const governorAddresses = [
// //   {
// //     name: "श्री मंगुभाई पटेल",
// //     route: "/gov",
// //     image: "/leaders/governor_01.jpg",
// //     dates: [
// //       { date: "10 मार्च, 2025", pdf: "/misc/govspeech100325.pdf" },
// //       { date: "07 फरवरी, 2024", pdf: "/misc/govspeech070224.pdf" },
// //       { date: "20 दिसम्बर, 2023", pdf: "/misc/govspeech201223.pdf" },
// //       { date: "27 फरवरी, 2023", pdf: "/misc/govspeech270223.pdf" },
// //       { date: "07 मार्च, 2022", pdf: "/misc/govspeech070322.pdf" }
// //     ]
// //   },
// //   {
// //     name: "श्रीमती आनंदीबेन मफतभाई पटेल",
// //     route: "/anandiben-patel-1",
// //     image: "/leaders/guv-Anandipatel1.jpg",
// //     dates: [
// //       { date: "22 फरवरी, 2021", pdf: "/path/to/pdf/anandiben_22feb2021.pdf" },
// //       { date: "08 जनवरी 2019", pdf: "/misc/govspeech080119.pdf" },
// //       { date: "26 फरवरी 2018", pdf: "/misc/govbud_18.pdf" }
// //     ]
// //   },
// //   {
// //     name: "श्री लाल जी टंडन",
// //     route: "/lalji-tandon",
// //     image: "/leaders/guv-LalJiTandon.jpg",
// //     dates: [{ date: "16 मार्च 2020", pdf: "/misc/govspeech160320.pdf" }]
// //   },
// //   {
// //     name: "श्री ओ. पी. कोहली",
// //     route: "/op-kohli-2",
// //     image: "/leaders/guv-OPkohli.jpg",
// //     dates: [{ date: "21 फरवरी 2017", pdf: "/misc/govbud_17.pdf" }]
// //   },
// //   {
// //     name: "श्री राम नरेश यादव",
// //     route: "/ramnaresh-yadav",
// //     image: "/leaders/guv-rnyadav.jpg",
// //     dates: [
// //       { date: "23 फरवरी 2016", pdf: "/misc/govbud16.pdf" },
// //       { date: "18 फरवरी 2015", pdf: "/misc/govbud15.pdf" },
// //       { date: "9 जनवरी 2014", pdf: "/misc/govbud14.pdf" },
// //       { date: "18 फरवरी 2013", pdf: "/misc/govbud13.pdf" },
// //       { date: "21 फरवरी 2012", pdf: "/misc/govbud12.pdf" }
// //     ]
// //   },
// //   {
// //     name: "श्री रामेश्वर ठाकुर",
// //     route: "/rameshwar-thakur",
// //     image: "/leaders/guv_thakur.jpg",
// //     dates: [
// //       { date: "21 फरवरी 2011", pdf: "/misc/govbud11.pdf" },
// //       { date: "22 फरवरी 2010", pdf: "/misc/govbud10.pdf" }
// //     ]
// //   },
// //   {
// //     name: "डॉ बल्रराम जाखड़",
// //     route: "/balram-jakhar",
// //     image: "/leaders/guv-jakhar.jpg",
// //     dates: [
// //       { date: "7 जनवरी 2009", route: "/leaders/governors/balram-jakhar/07jan2009", pdf: "/path/to/pdf/balram_07jan2009.pdf" },
// //       { date: "25 फरवरी 2008", route: "/leaders/governors/balram-jakhar/25feb2008", pdf: "/path/to/pdf/balram_25feb2008.pdf" },
// //       { date: "19 फरवरी 2007", route: "/leaders/governors/balram-jakhar/19feb2007", pdf: "/path/to/pdf/balram_19feb2007.pdf" },
// //       { date: "14 फरवरी 2006", pdf: "/misc/govbud06.pdf" },
// //       { date: "7 फरवरी 2005", pdf: "/misc/govbud05.pdf" }
// //     ]
// //   },
// //   {
// //     name: "श्री राम प्रकाश गुप्त",
// //     route: "/ramprakash-gupta",
// //     image: "/leaders/guv-rpgupta.jpg",
// //     dates: [
// //       { date: "23 फरवरी 2004", pdf: "/misc/govbud04.pdf" },
// //       { date: "16 दिसम्बर 2003", pdf: "/misc/govwin03.pdf" }
// //     ]
// //   }
// // ];

// // const GovernorABhiBhasan = () => {
// //   return (
// //     <div style={{ padding: "40px", backgroundColor: "#f9f9f9", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
// //       <div style={{ maxWidth: "1000px", margin: "0 auto", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", padding: "30px" }}>
// //         <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>राज्यपाल का अभिभाषण</h2>
// //         <div style={{ overflowX: "auto" }}>
// //           <table style={{ width: "100%", borderCollapse: "collapse" }}>
// //             <thead>
// //               <tr style={{ backgroundColor: "#007BFF", color: "#fff", textAlign: "center" }}>
// //                 <th style={{ padding: "12px", minWidth: "250px" }}>माननीय राज्यपाल</th>
// //                 <th style={{ padding: "12px", minWidth: "400px" }}>अभिभाषण दिनांक</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {governorAddresses.map((gov, index) => (
// //                 <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#fdfdfd" : "#f0f0f0", verticalAlign: "top" }}>
// //                   <td style={{ padding: "10px", fontWeight: "500", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
// //                     <img src={gov.image} alt={gov.name} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover" }} />
// //                     <Link
// //                       to={gov.route}
// //                       style={{ color: "#007BFF", textDecoration: "none", fontWeight: "500" }}
// //                       onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
// //                       onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
// //                     >
// //                       {gov.name}
// //                     </Link>
// //                   </td>
// //                   <td style={{ padding: "10px" }}>
// //                     <ul style={{ margin: 0, paddingLeft: "18px" }}>
// //                       {gov.dates.map((d, idx) => (
// //                         <li key={idx} style={{ marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
// //                           <FaFilePdf color="#d9534f" />
// //                           {d.route ? (
// //                             <Link
// //                               to={d.route}
// //                               style={{ color: "#007BFF", textDecoration: "none" }}
// //                               onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
// //                               onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
// //                             >
// //                               {d.date}
// //                             </Link>
// //                           ) : (
// //                             <a
// //                               href={d.pdf}
// //                               target="_blank"
// //                               rel="noopener noreferrer"
// //                               style={{ color: "#007BFF", textDecoration: "none" }}
// //                               onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
// //                               onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
// //                             >
// //                               {d.date}
// //                             </a>
// //                           )}
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GovernorABhiBhasan;
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFilePdf } from "react-icons/fa";

// const governorAddresses = [
//   {
//     name: "श्री मंगुभाई पटेल",
//     route: "/gov",
//     image: "/leaders/governor_01.jpg",
//     dates: [
//       { date: "10 मार्च, 2025", pdf: "/misc/govspeech100325.pdf" },
//       { date: "07 फरवरी, 2024", pdf: "/misc/govspeech070224.pdf" },
//       { date: "20 दिसम्बर, 2023", pdf: "/misc/govspeech201223.pdf" },
//       { date: "27 फरवरी, 2023", pdf: "/misc/govspeech270223.pdf" },
//       { date: "07 मार्च, 2022", pdf: "/misc/govspeech070322.pdf" }
//     ]
//   },
//   {
//     name: "श्रीमती आनंदीबेन मफतभाई पटेल",
//     route: "/anandiben-patel-1",
//     image: "/leaders/guv-Anandipatel1.jpg",
//     dates: [
//       { date: "22 फरवरी, 2021", pdf: "/path/to/pdf/anandiben_22feb2021.pdf" },
//       { date: "08 जनवरी 2019", pdf: "/misc/govspeech080119.pdf" },
//       { date: "26 फरवरी 2018", pdf: "/misc/govbud_18.pdf" }
//     ]
//   },
//   {
//     name: "श्री लाल जी टंडन",
//     route: "/lalji-tandon",
//     image: "/leaders/guv-LalJiTandon.jpg",
//     dates: [{ date: "16 मार्च 2020", pdf: "/misc/govspeech160320.pdf" }]
//   },
//   {
//     name: "श्री ओ. पी. कोहली",
//     route: "/op-kohli-2",
//     image: "/leaders/guv-OPkohli.jpg",
//     dates: [{ date: "21 फरवरी 2017", pdf: "/misc/govbud_17.pdf" }]
//   },
//   {
//     name: "श्री राम नरेश यादव",
//     route: "/ramnaresh-yadav",
//     image: "/leaders/guv-rnyadav.jpg",
//     dates: [
//       { date: "23 फरवरी 2016", pdf: "/misc/govbud16.pdf" },
//       { date: "18 फरवरी 2015", pdf: "/misc/govbud15.pdf" },
//       { date: "9 जनवरी 2014", pdf: "/misc/govbud14.pdf" },
//       { date: "18 फरवरी 2013", pdf: "/misc/govbud13.pdf" },
//       { date: "21 फरवरी 2012", pdf: "/misc/govbud12.pdf" }
//     ]
//   },
//   {
//     name: "श्री रामेश्वर ठाकुर",
//     route: "/rameshwar-thakur",
//     image: "/leaders/guv_thakur.jpg",
//     dates: [
//       { date: "21 फरवरी 2011", pdf: "/misc/govbud11.pdf" },
//       { date: "22 फरवरी 2010", pdf: "/misc/govbud10.pdf" }
//     ]
//   },
//   {
//     name: "डॉ बल्रराम जाखड़",
//     route: "/balram-jakhar",
//     image: "/leaders/guv-jakhar.jpg",
//     dates: [
//       { date: "7 जनवरी 2009", route: "/leaders/governors/balram-jakhar/07jan2009", pdf: "/path/to/pdf/balram_07jan2009.pdf" },
//       { date: "25 फरवरी 2008", route: "/leaders/governors/balram-jakhar/25feb2008", pdf: "/path/to/pdf/balram_25feb2008.pdf" },
//       { date: "19 फरवरी 2007", route: "/leaders/governors/balram-jakhar/19feb2007", pdf: "/path/to/pdf/balram_19feb2007.pdf" },
//       { date: "14 फरवरी 2006", pdf: "/misc/govbud06.pdf" },
//       { date: "7 फरवरी 2005", pdf: "/misc/govbud05.pdf" }
//     ]
//   },
//   {
//     name: "श्री राम प्रकाश गुप्त",
//     route: "/ramprakash-gupta",
//     image: "/leaders/guv-rpgupta.jpg",
//     dates: [
//       { date: "23 फरवरी 2004", pdf: "/misc/govbud04.pdf" },
//       { date: "16 दिसम्बर 2003", pdf: "/misc/govwin03.pdf" }
//     ]
//   }
// ];

// const styles = {
//   hero: {
//     width: "100%",
//     padding: "60px 20px",
//     textAlign: "center",
//     background: "linear-gradient(135deg, #003c8f, #005bbb)",
//     color: "white",
//     borderRadius: "0 0 20px 20px",
//     marginBottom: "30px",
//   },
//   heroTitle: {
//     fontSize: "36px",
//     fontWeight: "700",
//     margin: 0,
//   }
// };

// const GovernorABhiBhasan = () => {
//   return (
//     <div style={{ padding: "0", backgroundColor: "#f9f9f9", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
//       {/* 🔵 HERO SECTION ADDED */}
//       <div style={styles.hero}>
//         <h1 style={styles.heroTitle}>राज्यपाल का अभिभाषण</h1>
//       </div>

//       <div style={{ maxWidth: "1000px", margin: "0 auto", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", padding: "30px" }}>
        
//         <div style={{ overflowX: "auto" }}>
//           <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr style={{ backgroundColor: "#007BFF", color: "#fff", textAlign: "center" }}>
//                 <th style={{ padding: "12px", minWidth: "250px" }}>माननीय राज्यपाल</th>
//                 <th style={{ padding: "12px", minWidth: "400px" }}>अभिभाषण दिनांक</th>
//               </tr>
//             </thead>

//             <tbody>
//               {governorAddresses.map((gov, index) => (
//                 <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#fdfdfd" : "#f0f0f0", verticalAlign: "top" }}>
//                   <td style={{ padding: "10px", fontWeight: "500", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
//                     <img src={gov.image} alt={gov.name} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover" }} />
//                     <Link to={gov.route} style={{ color: "#007BFF", textDecoration: "none", fontWeight: "500" }}>
//                       {gov.name}
//                     </Link>
//                   </td>

//                   <td style={{ padding: "10px" }}>
//                     <ul style={{ margin: 0, paddingLeft: "18px" }}>
//                       {gov.dates.map((d, idx) => (
//                         <li key={idx} style={{ marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
//                           <FaFilePdf color="#d9534f" />

//                           {d.route ? (
//                             <Link to={d.route} style={{ color: "#007BFF", textDecoration: "none" }}>
//                               {d.date}
//                             </Link>
//                           ) : (
//                             <a href={d.pdf} target="_blank" rel="noopener noreferrer" style={{ color: "#007BFF", textDecoration: "none" }}>
//                               {d.date}
//                             </a>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
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

// export default GovernorABhiBhasan;
import React from "react";
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";

const governorAddresses = [
  {
    name: "श्री मंगुभाई पटेल",
    route: "/gov",
    image: "/leaders/governor_01.jpg",
    dates: [
      { date: "10 मार्च, 2025", pdf: "/misc/govspeech100325.pdf" },
      { date: "07 फरवरी, 2024", pdf: "/misc/govspeech070224.pdf" },
      { date: "20 दिसम्बर, 2023", pdf: "/misc/govspeech201223.pdf" },
      { date: "27 फरवरी, 2023", pdf: "/misc/govspeech270223.pdf" },
      { date: "07 मार्च, 2022", pdf: "/misc/govspeech070322.pdf" }
    ]
  },
  {
    name: "श्रीमती आनंदीबेन मफतभाई पटेल",
    route: "/anandiben-patel-1",
    image: "/leaders/guv-Anandipatel1.jpg",
    dates: [
      { date: "22 फरवरी, 2021", pdf: "/path/to/pdf/anandiben_22feb2021.pdf" },
      { date: "08 जनवरी 2019", pdf: "/misc/govspeech080119.pdf" },
      { date: "26 फरवरी 2018", pdf: "/misc/govbud_18.pdf" }
    ]
  },
  {
    name: "श्री लाल जी टंडन",
    route: "/lalji-tandon",
    image: "/leaders/guv-LalJiTandon.jpg",
    dates: [{ date: "16 मार्च 2020", pdf: "/misc/govspeech160320.pdf" }]
  },
  {
    name: "श्री ओ. पी. कोहली",
    route: "/op-kohli-2",
    image: "/leaders/guv-OPkohli.jpg",
    dates: [{ date: "21 फरवरी 2017", pdf: "/misc/govbud_17.pdf" }]
  },
  {
    name: "श्री राम नरेश यादव",
    route: "/ramnaresh-yadav",
    image: "/leaders/guv-rnyadav.jpg",
    dates: [
      { date: "23 फरवरी 2016", pdf: "/misc/govbud16.pdf" },
      { date: "18 फरवरी 2015", pdf: "/misc/govbud15.pdf" },
      { date: "9 जनवरी 2014", pdf: "/misc/govbud14.pdf" },
      { date: "18 फरवरी 2013", pdf: "/misc/govbud13.pdf" },
      { date: "21 फरवरी 2012", pdf: "/misc/govbud12.pdf" }
    ]
  },
  {
    name: "श्री रामेश्वर ठाकुर",
    route: "/rameshwar-thakur",
    image: "/leaders/guv_thakur.jpg",
    dates: [
      { date: "21 फरवरी 2011", pdf: "/misc/govbud11.pdf" },
      { date: "22 फरवरी 2010", pdf: "/misc/govbud10.pdf" }
    ]
  },
  {
    name: "डॉ बल्रराम जाखड़",
    route: "/balram-jakhar",
    image: "/leaders/guv-jakhar.jpg",
    dates: [
      { date: "7 जनवरी 2009", route: "/leaders/governors/balram-jakhar/07jan2009", pdf: "/path/to/pdf/balram_07jan2009.pdf" },
      { date: "25 फरवरी 2008", route: "/leaders/governors/balram-jakhar/25feb2008", pdf: "/path/to/pdf/balram_25feb2008.pdf" },
      { date: "19 फरवरी 2007", route: "/leaders/governors/balram-jakhar/19feb2007", pdf: "/path/to/pdf/balram_19feb2007.pdf" },
      { date: "14 फरवरी 2006", pdf: "/misc/govbud06.pdf" },
      { date: "7 फरवरी 2005", pdf: "/misc/govbud05.pdf" }
    ]
  },
  {
    name: "श्री राम प्रकाश गुप्त",
    route: "/ramprakash-gupta",
    image: "/leaders/guv-rpgupta.jpg",
    dates: [
      { date: "23 फरवरी 2004", pdf: "/misc/govbud04.pdf" },
      { date: "16 दिसम्बर 2003", pdf: "/misc/govwin03.pdf" }
    ]
  }
];

// ⭐ ONLY HERO SECTION STYLE
const styles = {
  hero: {
    width: "100%",
    padding: "50px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #003c8f, #005bbb)",
    color: "white",
    borderRadius: "0 0 20px 20px",
    marginBottom: "20px"
  },
  heroTitle: {
    fontSize: "34px",
    fontWeight: "700",
    margin: 0
  }
};

const GovernorABhiBhasan = () => {
  return (
    <div
      style={{
        padding: "0",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      {/* ⭐ UPDATED HERO SECTION */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>राज्यपाल का अभिभाषण</h1>
      </div>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "30px"
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr
                style={{
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  textAlign: "center"
                }}
              >
                <th style={{ padding: "12px", minWidth: "250px" }}>
                  माननीय राज्यपाल
                </th>
                <th style={{ padding: "12px", minWidth: "400px" }}>
                  अभिभाषण दिनांक
                </th>
              </tr>
            </thead>

            <tbody>
              {governorAddresses.map((gov, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#fdfdfd" : "#f0f0f0",
                    verticalAlign: "top"
                  }}
                >
                  <td
                    style={{
                      padding: "10px",
                      fontWeight: "500",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <img
                      src={gov.image}
                      alt={gov.name}
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        objectFit: "cover"
                      }}
                    />
                    <Link
                      to={gov.route}
                      style={{
                        color: "#007BFF",
                        textDecoration: "none",
                        fontWeight: "500"
                      }}
                    >
                      {gov.name}
                    </Link>
                  </td>

                  <td style={{ padding: "10px" }}>
                    <ul style={{ margin: 0, paddingLeft: "18px" }}>
                      {gov.dates.map((d, idx) => (
                        <li
                          key={idx}
                          style={{
                            marginBottom: "6px",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px"
                          }}
                        >
                          <FaFilePdf color="#d9534f" />

                          {d.route ? (
                            <Link
                              to={d.route}
                              style={{ color: "#007BFF", textDecoration: "none" }}
                            >
                              {d.date}
                            </Link>
                          ) : (
                            <a
                              href={d.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "#007BFF", textDecoration: "none" }}
                            >
                              {d.date}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default GovernorABhiBhasan;
