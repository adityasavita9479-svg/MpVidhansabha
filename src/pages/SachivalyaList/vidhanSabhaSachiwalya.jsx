// import React from "react";

// const staffData = [
//   {
//     name: "Shri Arvind Sharma",
//     designation: "Principal Secretary",
//     email: "arvind.sharma@mpvidhansabha.nic.in",
//     branch: "Head of Secretariat",
//     address: "A-805, Revera Heights, Near Mata Mandir, Bhopal",
//     phone: "Office: 0755-2440212 / 2440206, Fax: 0755-2440208",
//     epbx: "0755-2523011, 2523006"
//   },
//   {
//     name: "Shri B.D. Singh",
//     designation: "Additional Secretary",
//     email: "bdsingh.paraste@mpvidhansabha.nic.in",
//     branch: "Establishment, Resolutions, Private Bills, Privileges, SC/ST Welfare, Research, Library, Telephones, Stationery, Records, Vehicles etc.",
//     address: "F-85/39, Tulsi Nagar, Bhopal",
//     phone: "Residence: 0755-2570455, Office: 0755-2763797",
//     epbx: "0755-2523041"
//   },
//   {
//     name: "Shri Virendra Kumar",
//     designation: "Additional Secretary",
//     email: "birendra.kumar@mpvidhansabha.nic.in",
//     branch: "Assurances, Estimates, Questions, Accounts, PAC, Local Bodies Accounts, Property, Computer/Digitization etc.",
//     address: "E-117/13, Shivaji Nagar, Bhopal",
//     phone: "Residence: 0755-2764337, Office: 0755-2570409",
//     epbx: "0755-2523039"
//   },
//   {
//     name: "Shri Umesh Kumar Sharma",
//     designation: "Additional Secretary",
//     email: "umesh.sharma71@mp.gov.in",
//     branch: "Reports, Legislative Branch (Bills, Rules, Committees), Petitions, Security, Agriculture, Member Facilities, Zero Hour etc.",
//     address: "B-25, Shahpura, Bhopal",
//     phone: "Residence: 0755-3589391, Office: 0755-2440225",
//     epbx: "0755-2523009"
//   },
//   // 👉 Add more staff members here
// ];

// const SecretariatOrganogram = () => {
//   const styles = {
//     container: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'Arial, sans-serif'
//     },
//     heading: {
//       fontSize: '2rem',
//       fontWeight: '700',
//       marginBottom: '24px',
//       textAlign: 'center',
//       color: '#111827'
//     },
//     grid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//       gap: '24px'
//     },
//     card: {
//       border: '1px solid #e5e7eb',
//       borderRadius: '8px',
//       padding: '16px',
//       boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
//       backgroundColor: '#ffffff'
//     },
//     name: {
//       fontSize: '1.25rem',
//       fontWeight: '600',
//       marginBottom: '4px'
//     },
//     designation: {
//       color: '#374151',
//       marginBottom: '8px'
//     },
//     email: {
//       color: '#2563eb',
//       marginBottom: '8px'
//     },
//     label: {
//       fontWeight: '600'
//     },
//     info: {
//       marginBottom: '4px'
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>
//         Secretariat Organogram - Madhya Pradesh Legislative Assembly
//       </h1>

//       <div style={styles.grid}>
//         {staffData.map((staff, index) => (
//           <div key={index} style={styles.card}>
//             <h2 style={styles.name}>{staff.name}</h2>
//             <p style={styles.designation}>{staff.designation}</p>

//             {staff.email && (
//               <p style={styles.email}>
//                 Email: <a href={`mailto:${staff.email}`}>{staff.email}</a>
//               </p>
//             )}

//             <p style={styles.info}>
//               <span style={styles.label}>Branch/Work:</span> {staff.branch}
//             </p>
//             <p style={styles.info}>
//               <span style={styles.label}>Address:</span> {staff.address}
//             </p>
//             {staff.phone && (
//               <p style={styles.info}>
//                 <span style={styles.label}>Phone:</span> {staff.phone}
//               </p>
//             )}
//             {staff.epbx && (
//               <p style={styles.info}>
//                 <span style={styles.label}>EPBX:</span> {staff.epbx}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SecretariatOrganogram;


// import React from "react";

// const staffData = [
//   {
//     name: "Shri Arvind Sharma",
//     designation: "Principal Secretary",
//     email: "arvind.sharma@mpvidhansabha.nic.in",
//     branch: "Head of Secretariat",
//     address: "A-805, Revera Heights, Near Mata Mandir, Bhopal",
//     phone: "Office: 0755-2440212 / 2440206, Fax: 0755-2440208",
//     epbx: "0755-2523011, 2523006"
//   },
//   {
//     name: "Shri B.D. Singh",
//     designation: "Additional Secretary",
//     email: "bdsingh.paraste@mpvidhansabha.nic.in",
//     branch: "Establishment, Resolutions, Private Bills, Privileges, SC/ST Welfare, Research, Library, Telephones, Stationery, Records, Vehicles etc.",
//     address: "F-85/39, Tulsi Nagar, Bhopal",
//     phone: "Residence: 0755-2570455, Office: 0755-2763797",
//     epbx: "0755-2523041"
//   },
//   {
//     name: "Shri Virendra Kumar",
//     designation: "Additional Secretary",
//     email: "birendra.kumar@mpvidhansabha.nic.in",
//     branch: "Assurances, Estimates, Questions, Accounts, PAC, Local Bodies Accounts, Property, Computer/Digitization etc.",
//     address: "E-117/13, Shivaji Nagar, Bhopal",
//     phone: "Residence: 0755-2764337, Office: 0755-2570409",
//     epbx: "0755-2523039"
//   },
//   // Add more staff as needed
// ];

// const SecretariatOrganogram = () => {
//   const topStaff = staffData[0];
//   const otherStaff = staffData.slice(1);

//   const styles = {
//     container: {
//       padding: "24px",
//       fontFamily: "Arial, sans-serif",
//       lineHeight: "1.6",
//       backgroundColor: "#f9fafb",
//       minHeight: "100vh"
//     },
//     headingEnglish: {
//       fontSize: "2rem",
//       fontWeight: "700",
//       textAlign: "center",
//       marginBottom: "8px",
//       color: "#111827"
//     },
//     headingHindi: {
//       fontSize: "1.5rem",
//       fontWeight: "600",
//       textAlign: "center",
//       marginBottom: "32px",
//       color: "#1f2937"
//     },
//     topCard: {
//       padding: "16px",
//       border: "1px solid #e5e7eb",
//       borderRadius: "8px",
//       backgroundColor: "#ffffff",
//       marginBottom: "32px",
//       boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
//     },
//     table: {
//       width: "100%",
//       borderCollapse: "collapse",
//       backgroundColor: "#ffffff"
//     },
//     th: {
//       border: "1px solid #d1d5db",
//       padding: "8px",
//       textAlign: "left",
//       backgroundColor: "#f3f4f6"
//     },
//     td: {
//       border: "1px solid #d1d5db",
//       padding: "8px"
//     },
//     label: {
//       fontWeight: "600"
//     },
//     emailLink: {
//       color: "#2563eb",
//       textDecoration: "none"
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.headingEnglish}>In English: Secretariat Organogram</h1>
//       <h2 style={styles.headingHindi}>मध्यप्रदेश विधान सभा सचिवालय</h2>

//       {/* Top Staff Highlight */}
//       <div style={styles.topCard}>
//         <p style={{ fontWeight: "700", fontSize: "1.25rem" }}>{topStaff.name}</p>
//         <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>{topStaff.designation}</p>
//         {topStaff.phone && (
//           <p>
//             <span style={styles.label}>कार्यालय दूरभाष:</span> {topStaff.phone}
//           </p>
//         )}
//         {topStaff.epbx && (
//           <p>
//             <span style={styles.label}>ई.पी.बी.एक्स नं.:</span> {topStaff.epbx}
//           </p>
//         )}
//         {topStaff.email && (
//           <p>
//             e-mail:{" "}
//             <a
//               href={`mailto:${topStaff.email}`}
//               style={styles.emailLink}
//             >
//               {topStaff.email.replace("@", "[at]").replace(/\./g, "[dot]")}
//             </a>
//           </p>
//         )}
//         <p>
//           <span style={styles.label}>पता:</span> {topStaff.address}
//         </p>
//       </div>

//       {/* Other Staff Table */}
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.th}>Name</th>
//             <th style={styles.th}>Designation</th>
//             <th style={styles.th}>Branch / Work</th>
//             <th style={styles.th}>Phone</th>
//             <th style={styles.th}>EPBX</th>
//             <th style={styles.th}>Email</th>
//             <th style={styles.th}>Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {otherStaff.map((staff, index) => (
//             <tr key={index}>
//               <td style={styles.td}>{staff.name}</td>
//               <td style={styles.td}>{staff.designation}</td>
//               <td style={styles.td}>{staff.branch}</td>
//               <td style={styles.td}>{staff.phone || "-"}</td>
//               <td style={styles.td}>{staff.epbx || "-"}</td>
//               <td style={styles.td}>
//                 {staff.email
//                   ? staff.email.replace("@", "[at]").replace(/\./g, "[dot]")
//                   : "-"}
//               </td>
//               <td style={styles.td}>{staff.address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SecretariatOrganogram;


// import React from "react";

// const staffData = [
//   {
//     name: "Shri Arvind Sharma",
//     designation: "Principal Secretary",
//     email: "arvind.sharma@mpvidhansabha.nic.in",
//     branch: "Head of Secretariat",
//     address: "A-805, Revera Heights, Near Mata Mandir, Bhopal",
//     phone: "Office: 0755-2440212 / 2440206, Fax: 0755-2440208",
//     epbx: "0755-2523011, 2523006",
//     image: "/images/arvind-sharma.jpg" // put image in public/images folder
//   },
//   {
//     name: "Shri B.D. Singh",
//     designation: "Additional Secretary",
//     email: "bdsingh.paraste@mpvidhansabha.nic.in",
//     branch: "Establishment, Resolutions, Private Bills, Privileges, SC/ST Welfare, Research, Library, Telephones, Stationery, Records, Vehicles etc.",
//     address: "F-85/39, Tulsi Nagar, Bhopal",
//     phone: "Residence: 0755-2570455, Office: 0755-2763797",
//     epbx: "0755-2523041",
//     image: "/images/bd-singh.jpg"
//   },
//   {
//     name: "Shri Virendra Kumar",
//     designation: "Additional Secretary",
//     email: "birendra.kumar@mpvidhansabha.nic.in",
//     branch: "Assurances, Estimates, Questions, Accounts, PAC, Local Bodies Accounts, Property, Computer/Digitization etc.",
//     address: "E-117/13, Shivaji Nagar, Bhopal",
//     phone: "Residence: 0755-2764337, Office: 0755-2570409",
//     epbx: "0755-2523039",
//     image: "/images/virendra-kumar.jpg"
//   }
// ];

// const SecretariatOrganogram = () => {
//   const topStaff = staffData[0];
//   const otherStaff = staffData.slice(1);

//   const styles = {
//     container: {
//       padding: "24px",
//       fontFamily: "Arial, sans-serif",
//       lineHeight: "1.6",
//       backgroundColor: "#f9fafb",
//       minHeight: "100vh"
//     },
//     headingEnglish: {
//       fontSize: "2rem",
//       fontWeight: "700",
//       textAlign: "center",
//       marginBottom: "8px",
//       color: "#111827"
//     },
//     headingHindi: {
//       fontSize: "1.5rem",
//       fontWeight: "600",
//       textAlign: "center",
//       marginBottom: "32px",
//       color: "#1f2937"
//     },
//     topCard: {
//       display: "flex",
//       alignItems: "center",
//       padding: "16px",
//       border: "1px solid #e5e7eb",
//       borderRadius: "8px",
//       backgroundColor: "#ffffff",
//       marginBottom: "32px",
//       boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
//     },
//     topImage: {
//       width: "120px",
//       height: "120px",
//       borderRadius: "8px",
//       objectFit: "cover",
//       marginRight: "24px",
//       border: "1px solid #d1d5db"
//     },
//     topInfo: {
//       flex: 1
//     },
//     table: {
//       width: "100%",
//       borderCollapse: "collapse",
//       backgroundColor: "#ffffff"
//     },
//     th: {
//       border: "1px solid #d1d5db",
//       padding: "8px",
//       textAlign: "left",
//       backgroundColor: "#f3f4f6"
//     },
//     td: {
//       border: "1px solid #d1d5db",
//       padding: "8px",
//       verticalAlign: "middle"
//     },
//     profileImage: {
//       width: "60px",
//       height: "60px",
//       borderRadius: "6px",
//       objectFit: "cover",
//       border: "1px solid #d1d5db"
//     },
//     label: {
//       fontWeight: "600"
//     },
//     emailLink: {
//       color: "#2563eb",
//       textDecoration: "none"
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.headingEnglish}>In English: Secretariat Organogram</h1>
//       <h2 style={styles.headingHindi}>मध्यप्रदेश विधान सभा सचिवालय</h2>

//       {/* Top Staff Highlight */}
//       <div style={styles.topCard}>
//         {topStaff.image && <img src={topStaff.image} alt={topStaff.name} style={styles.topImage} />}
//         <div style={styles.topInfo}>
//           <p style={{ fontWeight: "700", fontSize: "1.25rem" }}>{topStaff.name}</p>
//           <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>{topStaff.designation}</p>
//           {topStaff.phone && (
//             <p>
//               <span style={styles.label}>कार्यालय दूरभाष:</span> {topStaff.phone}
//             </p>
//           )}
//           {topStaff.epbx && (
//             <p>
//               <span style={styles.label}>ई.पी.बी.एक्स नं.:</span> {topStaff.epbx}
//             </p>
//           )}
//           {topStaff.email && (
//             <p>
//               e-mail:{" "}
//               <a
//                 href={`mailto:${topStaff.email}`}
//                 style={styles.emailLink}
//               >
//                 {topStaff.email.replace("@", "[at]").replace(/\./g, "[dot]")}
//               </a>
//             </p>
//           )}
//           <p>
//             <span style={styles.label}>पता:</span> {topStaff.address}
//           </p>
//         </div>
//       </div>

//       {/* Other Staff Table */}
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.th}>Photo</th>
//             <th style={styles.th}>Name</th>
//             <th style={styles.th}>Designation</th>
//             <th style={styles.th}>Branch / Work</th>
//             <th style={styles.th}>Phone</th>
//             <th style={styles.th}>EPBX</th>
//             <th style={styles.th}>Email</th>
//             <th style={styles.th}>Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {otherStaff.map((staff, index) => (
//             <tr key={index}>
//               <td style={styles.td}>
//                 {staff.image ? <img src={staff.image} alt={staff.name} style={styles.profileImage} /> : "-"}
//               </td>
//               <td style={styles.td}>{staff.name}</td>
//               <td style={styles.td}>{staff.designation}</td>
//               <td style={styles.td}>{staff.branch}</td>
//               <td style={styles.td}>{staff.phone || "-"}</td>
//               <td style={styles.td}>{staff.epbx || "-"}</td>
//               <td style={styles.td}>
//                 {staff.email
//                   ? staff.email.replace("@", "[at]").replace(/\./g, "[dot]")
//                   : "-"}
//               </td>
//               <td style={styles.td}>{staff.address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SecretariatOrganogram;


// import React from "react";

// const staffData = [
//   {
//     name: "Shri Arvind Sharma",
//     designation: "Principal Secretary",
//     email: "arvind.sharma@mpvidhansabha.nic.in",
//     branch: "Head of Secretariat",
//     address: "A-805, Revera Heights, Near Mata Mandir, Bhopal",
//     phone: "Office: 0755-2440212 / 2440206, Fax: 0755-2440208",
//     epbx: "0755-2523011, 2523006",
//     image: "/images/arvind-sharma.jpg"
//   },
//   {
//     name: "Shri B.D. Singh",
//     designation: "Additional Secretary",
//     email: "bdsingh.paraste@mpvidhansabha.nic.in",
//     branch: "Establishment, Resolutions, Private Bills, Privileges, SC/ST Welfare, Research, Library, Telephones, Stationery, Records, Vehicles etc.",
//     address: "F-85/39, Tulsi Nagar, Bhopal",
//     phone: "Residence: 0755-2570455, Office: 0755-2763797",
//     epbx: "0755-2523041",
//     image: "/images/bd-singh.jpg"
//   },
//   {
//     name: "Shri Virendra Kumar",
//     designation: "Additional Secretary",
//     email: "birendra.kumar@mpvidhansabha.nic.in",
//     branch: "Assurances, Estimates, Questions, Accounts, PAC, Local Bodies Accounts, Property, Computer/Digitization etc.",
//     address: "E-117/13, Shivaji Nagar, Bhopal",
//     phone: "Residence: 0755-2764337, Office: 0755-2570409",
//     epbx: "0755-2523039",
//     image: "/images/virendra-kumar.jpg"
//   }
// ];

// const SecretariatOrganogram = () => {
//   const topStaff = staffData[0];
//   const otherStaff = staffData.slice(1);

//   const styles = {
//     container: {
//       padding: "32px",
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       lineHeight: "1.7",
//       backgroundColor: "#f4f6f8",
//       minHeight: "100vh"
//     },
//     headings: {
//       textAlign: "center",
//       marginBottom: "48px"
//     },
//     headingEnglish: {
//       fontSize: "2.2rem",
//       fontWeight: "700",
//       color: "#0f172a",
//       marginBottom: "4px"
//     },
//     headingHindi: {
//       fontSize: "1.6rem",
//       fontWeight: "600",
//       color: "#334155"
//     },
//     topCard: {
//       display: "flex",
//       flexDirection: "row",
//       alignItems: "center",
//       padding: "24px",
//       borderRadius: "12px",
//       backgroundColor: "#ffffff",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//       marginBottom: "48px",
//       transition: "transform 0.3s",
//       hover: {
//         transform: "translateY(-4px)"
//       }
//     },
//     topImage: {
//       width: "140px",
//       height: "140px",
//       borderRadius: "50%",
//       objectFit: "cover",
//       marginRight: "32px",
//       border: "2px solid #cbd5e1"
//     },
//     topInfo: {
//       flex: 1
//     },
//     topName: {
//       fontSize: "1.6rem",
//       fontWeight: "700",
//       color: "#0f172a",
//       marginBottom: "6px"
//     },
//     topDesignation: {
//       fontSize: "1.2rem",
//       fontWeight: "600",
//       color: "#334155",
//       marginBottom: "12px"
//     },
//     topLine: {
//       marginBottom: "6px",
//       fontSize: "0.95rem",
//       color: "#475569"
//     },
//     topEmail: {
//       color: "#2563eb",
//       textDecoration: "none"
//     },
//     tableWrapper: {
//       overflowX: "auto",
//       borderRadius: "12px",
//       boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//       backgroundColor: "#ffffff"
//     },
//     table: {
//       width: "100%",
//       borderCollapse: "collapse",
//       minWidth: "900px"
//     },
//     th: {
//       borderBottom: "2px solid #e2e8f0",
//       padding: "12px 16px",
//       textAlign: "left",
//       backgroundColor: "#f1f5f9",
//       fontWeight: "600",
//       color: "#1e293b",
//       textTransform: "uppercase",
//       fontSize: "0.95rem"
//     },
//     td: {
//       borderBottom: "1px solid #e2e8f0",
//       padding: "12px 16px",
//       verticalAlign: "middle",
//       fontSize: "0.95rem",
//       color: "#334155"
//     },
//     profileImage: {
//       width: "60px",
//       height: "60px",
//       borderRadius: "50%",
//       objectFit: "cover",
//       border: "1px solid #cbd5e1"
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.headings}>
//         <h1 style={styles.headingEnglish}>In English: Secretariat Organogram</h1>
//         <h2 style={styles.headingHindi}>मध्यप्रदेश विधान सभा सचिवालय</h2>
//       </div>

//       {/* Top Staff */}
//       <div style={styles.topCard}>
//         {topStaff.image && <img src={topStaff.image} alt={topStaff.name} style={styles.topImage} />}
//         <div style={styles.topInfo}>
//           <p style={styles.topName}>{topStaff.name}</p>
//           <p style={styles.topDesignation}>{topStaff.designation}</p>
//           {topStaff.phone && <p style={styles.topLine}><span style={{ fontWeight: 600 }}>कार्यालय दूरभाष:</span> {topStaff.phone}</p>}
//           {topStaff.epbx && <p style={styles.topLine}><span style={{ fontWeight: 600 }}>ई.पी.बी.एक्स नं.:</span> {topStaff.epbx}</p>}
//           {topStaff.email && (
//             <p style={styles.topLine}>
//               e-mail: <a href={`mailto:${topStaff.email}`} style={styles.topEmail}>{topStaff.email.replace("@", "[at]").replace(/\./g, "[dot]")}</a>
//             </p>
//           )}
//           <p style={styles.topLine}><span style={{ fontWeight: 600 }}>पता:</span> {topStaff.address}</p>
//         </div>
//       </div>

//       {/* Other Staff Table */}
//       <div style={styles.tableWrapper}>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>Photo</th>
//               <th style={styles.th}>Name</th>
//               <th style={styles.th}>Designation</th>
//               <th style={styles.th}>Branch / Work</th>
//               <th style={styles.th}>Phone</th>
//               <th style={styles.th}>EPBX</th>
//               <th style={styles.th}>Email</th>
//               <th style={styles.th}>Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {otherStaff.map((staff, index) => (
//               <tr key={index}>
//                 <td style={styles.td}>
//                   {staff.image ? <img src={staff.image} alt={staff.name} style={styles.profileImage} /> : "-"}
//                 </td>
//                 <td style={styles.td}>{staff.name}</td>
//                 <td style={styles.td}>{staff.designation}</td>
//                 <td style={styles.td}>{staff.branch}</td>
//                 <td style={styles.td}>{staff.phone || "-"}</td>
//                 <td style={styles.td}>{staff.epbx || "-"}</td>
//                 <td style={styles.td}>{staff.email ? staff.email.replace("@", "[at]").replace(/\./g, "[dot]") : "-"}</td>
//                 <td style={styles.td}>{staff.address}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SecretariatOrganogram;


// import React from "react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const staffData = [
//   {
//     name: "Shri Arvind Sharma",
//     designation: "Principal Secretary",
//     email: "arvind.sharma@mpvidhansabha.nic.in",
//     branch: "Head of Secretariat",
//     address: "A-805, Revera Heights, Near Mata Mandir, Bhopal",
//     phone: "0755-2440212 / 2440206",
//     epbx: "0755-2523011, 2523006",
//     image: "/images/arvind-sharma.jpg"
//   },
//   {
//     name: "Shri B.D. Singh",
//     designation: "Additional Secretary",
//     email: "bdsingh.paraste@mpvidhansabha.nic.in",
//     branch: "Establishment, Resolutions, Private Bills, Privileges, SC/ST Welfare, Research, Library, Telephones, Stationery, Records, Vehicles etc.",
//     address: "F-85/39, Tulsi Nagar, Bhopal",
//     phone: "0755-2570455 / 0755-2763797",
//     epbx: "0755-2523041",
//     image: "/images/bd-singh.jpg"
//   },
//   {
//     name: "Shri Virendra Kumar",
//     designation: "Additional Secretary",
//     email: "birendra.kumar@mpvidhansabha.nic.in",
//     branch: "Assurances, Estimates, Questions, Accounts, PAC, Local Bodies Accounts, Property, Computer/Digitization etc.",
//     address: "E-117/13, Shivaji Nagar, Bhopal",
//     phone: "0755-2764337 / 0755-2570409",
//     epbx: "0755-2523039",
//     image: "/images/virendra-kumar.jpg"
//   }
// ];

// const SecretariatOrganogram = () => {
//   const topStaff = staffData[0];
//   const otherStaff = staffData.slice(1);

//   const styles = {
//     container: {
//       padding: "40px 20px",
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       backgroundColor: "#f5f7fa"
//     },
//     headings: {
//       textAlign: "center",
//       marginBottom: "50px"
//     },
//     headingEnglish: {
//       fontSize: "2.5rem",
//       fontWeight: "700",
//       color: "#0f172a",
//       marginBottom: "8px"
//     },
//     headingHindi: {
//       fontSize: "1.8rem",
//       fontWeight: "600",
//       color: "#334155"
//     },
//     topCard: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       padding: "30px 20px",
//       borderRadius: "16px",
//       background: "linear-gradient(to right, #e0f2fe, #f0f9ff)",
//       boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
//       marginBottom: "60px",
//       transition: "transform 0.3s",
//       textAlign: "center"
//     },
//     topImage: {
//       width: "160px",
//       height: "160px",
//       borderRadius: "50%",
//       objectFit: "cover",
//       marginBottom: "20px",
//       border: "3px solid #3b82f6"
//     },
//     topName: {
//       fontSize: "1.8rem",
//       fontWeight: "700",
//       color: "#0f172a",
//       marginBottom: "6px"
//     },
//     topDesignation: {
//       fontSize: "1.2rem",
//       fontWeight: "600",
//       color: "#1e40af",
//       marginBottom: "16px"
//     },
//     topInfo: {
//       fontSize: "1rem",
//       color: "#334155",
//       marginBottom: "6px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       gap: "6px"
//     },
//     grid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//       gap: "24px"
//     },
//     card: {
//       backgroundColor: "#ffffff",
//       borderRadius: "12px",
//       padding: "20px",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//       transition: "transform 0.3s, box-shadow 0.3s",
//       textAlign: "center",
//       cursor: "default",
//       hover: {
//         transform: "translateY(-6px)",
//         boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
//       }
//     },
//     cardImage: {
//       width: "100px",
//       height: "100px",
//       borderRadius: "50%",
//       objectFit: "cover",
//       marginBottom: "14px",
//       border: "2px solid #3b82f6"
//     },
//     cardName: {
//       fontWeight: "700",
//       fontSize: "1.2rem",
//       marginBottom: "4px",
//       color: "#0f172a"
//     },
//     cardDesignation: {
//       fontSize: "1rem",
//       fontWeight: "600",
//       marginBottom: "10px",
//       color: "#1e40af"
//     },
//     cardInfo: {
//       fontSize: "0.95rem",
//       color: "#475569",
//       marginBottom: "6px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       gap: "6px"
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.headings}>
//         <h1 style={styles.headingEnglish}> Secretariat Organogram</h1>
//         <h2 style={styles.headingHindi}>मध्यप्रदेश विधान सभा सचिवालय</h2>
//       </div>

//       {/* Top Staff Hero Card */}
//       <div style={styles.topCard}>
//         {topStaff.image && <img src={topStaff.image} alt={topStaff.name} style={styles.topImage} />}
//         <p style={styles.topName}>{topStaff.name}</p>
//         <p style={styles.topDesignation}>{topStaff.designation}</p>
//         <p style={styles.topInfo}><FaPhone /> {topStaff.phone}</p>
//         <p style={styles.topInfo}><span style={{ fontWeight: 600 }}>EPBX:</span> {topStaff.epbx}</p>
//         <p style={styles.topInfo}><FaEnvelope /> <a href={`mailto:${topStaff.email}`} style={{ color: "#2563eb" }}>{topStaff.email.replace("@", "[at]").replace(/\./g, "[dot]")}</a></p>
//         <p style={styles.topInfo}><FaMapMarkerAlt /> {topStaff.address}</p>
//       </div>

//       {/* Other Staff Grid */}
//       <div style={styles.grid}>
//         {otherStaff.map((staff, index) => (
//           <div key={index} style={styles.card}>
//             {staff.image && <img src={staff.image} alt={staff.name} style={styles.cardImage} />}
//             <p style={styles.cardName}>{staff.name}</p>
//             <p style={styles.cardDesignation}>{staff.designation}</p>
//             <p style={styles.cardInfo}><FaPhone /> {staff.phone}</p>
//             <p style={styles.cardInfo}><span style={{ fontWeight: 600 }}>EPBX:</span> {staff.epbx}</p>
//             <p style={styles.cardInfo}><FaEnvelope /> <a href={`mailto:${staff.email}`} style={{ color: "#2563eb" }}>{staff.email.replace("@", "[at]").replace(/\./g, "[dot]")}</a></p>
//             <p style={styles.cardInfo}><FaMapMarkerAlt /> {staff.address}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SecretariatOrganogram;


import React, { useState } from "react";

const staffData = [
  {
    name_en: "Shri Arvind Sharma",
    name_hi: "श्री अरविन्द शर्मा",
    designation_en: "Principal Secretary",
    designation_hi: "प्रमुख सचिव",
    email: "arvind.sharma@mpvidhansabha.nic.in",
    branch_en: "Head of Secretariat",
    branch_hi: "सचिवालय प्रमुख",
    address_en: "A-805, Revera Heights, Near Mata Mandir, Bhopal",
    address_hi: "ए-805, रेवेरा हाईट्स, माता मंदिर के पास, भोपाल",
    phone: "0755-2440212 / 2440206",
    epbx: "0755-2523011, 2523006",
    image: "/leaders/mpvs_ps_arvind_sharma.jpg"
  },

    {
    name_en: "Shri B.D. Singh",
    name_hi: "श्री बी.डी. सिंह",
    designation_en: "Additional Secretary",
    designation_hi: "अपर सचिव",
    email: "bdsingh.paraste@mpvidhansabha.nic.in",
    branch_en: "Establishment, Resolutions, Private Bills, Privileges, SC/ST Welfare, Research, Library, Telephones, Stationery, Records, Vehicles etc.",
    branch_hi: "स्थापना शाखा, अशासकीय संकल्प, गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति, विशेषाधिकार समिति शाखा, अनुसूचित जाति, अनुसूचित जनजाति के कल्याण संबंधी समिति शाखा, अनुसंधान शाखा, संदर्भ शाखा, विधायनी, आचरण समिति शाखा, पुस्तकालय शाखा, दूरभाष शाखा, स्टेशनरी शाखा, सामान्य शाखा, अभिलेख शाखा, वाहन शाखा",
    address_en: "F-85/39, Tulsi Nagar, Bhopal",
    address_hi: "एफ-85/39, तुलसी नगर, भोपाल",
    phone: "Residence: 0755-2570455 / Office: 0755-2763797",
    epbx: "0755-2523041",
    image: "/images/bd-singh.jpg"
  },
  {
    name_en: "Shri Virendra Kumar",
    name_hi: "श्री वीरेन्द्र कुमार",
    designation_en: "Additional Secretary",
    designation_hi: "अपर सचिव",
    email: "birendra.kumar@mpvidhansabha.nic.in",
    branch_en: "Assurances, Estimates, Questions, Accounts, PAC, Local Bodies Accounts, Property, Computer/Digitization etc.",
    branch_hi: "आश्वासन समिति शाखा, प्राक्कलन समिति शाखा, प्रश्न शाखा, लेखा शाखा, सदस्य लेखा शाखा, लोक लेखा समिति शाखा, स्थानीय निकाय एवं पंचायती राज लेखा समिति शाखा, संपदा शाखा, प्रश्न एवं संदर्भ समिति शाखा, पिछड़े वर्गों के कल्याण संबंधी समिति शाखा, कम्प्यूटर/डिजिटाइजेशन शाखा",
    address_en: "E-117/13, Shivaji Nagar, Bhopal",
    address_hi: "ई-117/13, शिवाजी नगर, भोपाल",
    phone: "Residence: 0755-2764337 / Office: 0755-2570409",
    epbx: "0755-2523039",
    image: "/images/virendra-kumar.jpg"
  },
  {
    name_en: "Shri Umesh Kumar Sharma",
    name_hi: "श्री उमेश कुमार शर्मा",
    designation_en: "Additional Secretary",
    designation_hi: "अपर सचिव",
    email: "umesh.sharma71@mp.gov.in",
    branch_en: "Reports, Legislative Branch (Bills, Rules, Committees), Petitions, Security, Agriculture, Member Facilities, Zero Hour etc.",
    branch_hi: "प्रतिवेदन शाखा, विधान शाखा (विधेयक से संबंधित कार्य, नियम समिति, प्रत्यायुक्त विधान समिति, पटल समिति एवं सामान्य प्रयोजन समिति), कार्यविन्यास, महिला एवं बाल कल्याण संबंधी समिति शाखा, सरकारी उपक्रमों संबंधी समिति शाखा, याचिका एवं अभ्यावेदन समिति शाखा, सुरक्षा शाखा, कृषि विकास समिति शाखा, सदस्य सुविधा समिति शाखा, स्थगन एवं ध्यानाकर्षण शाखा, शून्यकाल",
    address_en: "B-25, Shahpura, Bhopal",
    address_hi: "बी-25, शाहपुरा, भोपाल",
    phone: "Residence: 0755-3589391 / Office: 0755-2440225",
    epbx: "0755-2523009",
    image: "/images/umesh-sharma.jpg"
  },
  {
    name_en: "Smt. Manju Gajbhiye",
    name_hi: "श्रीमती मंजू गजभिये",
    designation_en: "Special Duty Officer",
    designation_hi: "विशेष कर्तव्यस्थ अधिकारी",
    email: "manju.gajbhiye@mpvidhansabha.nic.in",
    branch_en: "Legislative & Work Allocation, Public Accounts Committee, Planning Committee, Bills, Patal Committee, Deputed Legislative Committee, Public Accounts Implementation Committee, Govt Undertakings, Women & Children Welfare Committee, RTI First Appellate Authority",
    branch_hi: "विधान व कार्य विन्यास शाखा का सम्पूर्ण कार्य, लोक लेखा समिति (सिविल / राजस्व) शाखा, प्राक्कलन समिति शाखा, विधेयक संबंधी कार्य, पटल समित, प्रत्यायुक्त विधान समिति, लोक लेखा (कार्यान्वयन) समिति शाखा, सरकारी उपक्रमों संबंधी समिति शाखा, महिला एवं बालकों के कल्याण संबंधी समिति शाखा, प्रथम अपीलीय अधिकारी (सूचना का अधिकार)",
    address_en: "E-100/10, Shivaji Nagar, Bhopal",
    address_hi: "ई-100/10, शिवाजी नगर, भोपाल",
    phone: "Residence: 0755-2763187 / Office: 0755-2440213",
    epbx: "0755-2523015",
    image: "/images/manju-gajbhiye.jpg"
  },
  {
    name_en: "Shri Parikshit Pandey",
    name_hi: "श्री परीक्षित पाण्डेय",
    designation_en: "Director (Security)",
    designation_hi: "संचालक (सुरक्षा)",
    email: "parikshit.mpvs@mp.gov.in",
    branch_en: "Security, Backward Classes Welfare Committee, SC/ST Welfare Committee, General Branch, Records Branch",
    branch_hi: "सुरक्षा शाखा, पिछड़े वर्गों के कल्याण संबंधी समिति शाखा, अनुसूचित जाति, अनुसूचित जनजाति के कल्याण संबंधी समिति शाखा, सामान्य शाखा, अभिलेख शाखा",
    address_en: "M-295, Arvind Vihar Colony, Bag Mugalia, Bhopal",
    address_hi: "एम-295, अरविन्द विहार कॉलोनी, बाग मुगालिया, भोपाल",
    phone: "",
    epbx: "0755-2523062",
    image: "/images/parikshit-pandey.jpg"
  }
  // Continue adding remaining staff similarly
];

const SecretariatOrganogram = () => {
  const [language, setLanguage] = useState("en"); // en or hi

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const topStaff = staffData[0];
  const otherStaff = staffData.slice(1);

  const styles = {
    container: {
      padding: "40px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "linear-gradient(to bottom, #e0f2fe 0%, #f5f7fa 100%)",
      minHeight: "100vh"
    },
    headings: { textAlign: "center", marginBottom: "40px" },
    toggleButtons: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "40px",
      gap: "12px"
    },
    button: (active) => ({
      padding: "8px 16px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
      backgroundColor: active ? "#3b82f6" : "#e2e8f0",
      color: active ? "#ffffff" : "#1e293b",
      transition: "all 0.3s"
    }),
    topCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "30px 20px",
      borderRadius: "16px",
      background: "rgba(255, 255, 255, 0.35)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      marginBottom: "60px",
      textAlign: "center"
    },
    topImage: {
      width: "160px",
      height: "200px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "20px",
      border: "3px solid #3b82f6"
    },
    topName: { fontSize: "1.8rem", fontWeight: "700", color: "#0f172a", marginBottom: "6px" },
    topDesignation: { fontSize: "1.2rem", fontWeight: "600", color: "#1e40af", marginBottom: "16px" },
    topInfo: { fontSize: "1rem", color: "#334155", marginBottom: "6px" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" },
    card: {
      background: "rgba(255, 255, 255, 0.35)",
      backdropFilter: "blur(10px)",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
      transition: "transform 0.3s, box-shadow 0.3s",
      textAlign: "center",
      cursor: "default"
    },
    cardImage: { width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", marginBottom: "14px", border: "2px solid #3b82f6" },
    cardName: { fontWeight: "700", fontSize: "1.2rem", marginBottom: "4px", color: "#0f172a" },
    cardDesignation: { fontSize: "1rem", fontWeight: "600", marginBottom: "10px", color: "#1e40af" },
    cardInfo: { fontSize: "0.95rem", color: "#475569", marginBottom: "6px" }
  };

  return (
    <div style={styles.container}>
      {/* Headings */}
      <div style={styles.headings}>
        <h1>{language === "en" ? " Secretariat Organogram" : "सचिवालय आरेख"}</h1>
        <h2>{language === "en" ? "Madhya Pradesh Legislative Assembly" : "मध्यप्रदेश विधान सभा सचिवालय"}</h2>
      </div>

      {/* Language Toggle */}
      <div style={styles.toggleButtons}>
        <button style={styles.button(language === "en")} onClick={() => toggleLanguage("en")}>English</button>
        <button style={styles.button(language === "hi")} onClick={() => toggleLanguage("hi")}>Hindi</button>
      </div>

      {/* Top Staff Card */}
      <div style={styles.topCard}>
        {topStaff.image && <img src={topStaff.image} alt={topStaff[`name_${language}`]} style={styles.topImage} />}
        <p style={styles.topName}>{topStaff[`name_${language}`]}</p>
        <p style={styles.topDesignation}>{topStaff[`designation_${language}`]}</p>
        <p style={styles.topInfo}>📞 {topStaff.phone}</p>
        <p style={styles.topInfo}><span style={{ fontWeight: 600 }}>EPBX:</span> {topStaff.epbx}</p>
        <p style={styles.topInfo}>✉️ {topStaff.email.replace("@", "[at]").replace(/\./g, "[dot]")}</p>
        <p style={styles.topInfo}>📍 {topStaff[`address_${language}`]}</p>
      </div>

      {/* Other Staff Grid */}
      <div style={styles.grid}>
        {otherStaff.map((staff, index) => (
          <div key={index} style={styles.card}>
            {staff.image && <img src={staff.image} alt={staff[`name_${language}`]} style={styles.cardImage} />}
            <p style={styles.cardName}>{staff[`name_${language}`]}</p>
            <p style={styles.cardDesignation}>{staff[`designation_${language}`]}</p>
            <p style={styles.cardInfo}>📞 {staff.phone}</p>
            <p style={styles.cardInfo}><span style={{ fontWeight: 600 }}>EPBX:</span> {staff.epbx}</p>
            <p style={styles.cardInfo}>✉️ {staff.email.replace("@", "[at]").replace(/\./g, "[dot]")}</p>
            <p style={styles.cardInfo}>📍 {staff[`address_${language}`]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecretariatOrganogram;
