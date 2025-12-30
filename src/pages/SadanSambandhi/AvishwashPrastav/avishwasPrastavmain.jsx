// import React from "react";

// const NoConfidenceMotionMain = () => {
//   const motions = [
//     { number: "द्वितीय 1", proposer: "श्री वी.एन.वाय.राव तामस्‍कर", chiefMinister: "श्री कैलाश नाथ काटजू", dates: "04.12.1957, 5.12.1957", days: 2, time: "07-04", participants: 17 },
//     { number: "2", proposer: "श्री वी.एन.वाय.राव तामस्‍कर", chiefMinister: "श्री कैलाश नाथ काटजू", dates: "18.9.1961, 19.9.1961, 20.9.1961, 21.9.1961, 22.9.1961", days: 5, time: "07-58", participants: 20 },
//     { number: "तृतीय 3", proposer: "श्री गुलाब चंद्र तामोट", chiefMinister: "श्री भगवंत राव मण्‍डलोई", dates: "08.8.1962, 09.8.1962", days: 2, time: "02-53", participants: 21 },
//     { number: "4", proposer: "श्री वीरेन्‍द्र कुमार सखलेचा", chiefMinister: "श्री द्वारका प्रसाद मिश्र", dates: "25.8.1964, 01.9.1964, 02.9.1964, 03.9.1964", days: 4, time: "12-19", participants: 14 },
//     { number: "5", proposer: "श्री लक्ष्‍मीनारायण अग्रवाल", chiefMinister: "श्री द्वारका प्रसाद मिश्र", dates: "23.8.1965, 25.8.1965, 31.8.1965, 01.9.1965, 02.9.1965", days: 5, time: "10-27", participants: 27 },
//     { number: "6", proposer: "श्री मदनलाल तिवारी", chiefMinister: "श्री द्वारका प्रसाद मिश्र", dates: "05.4.1966, 06.4.1966", days: 2, time: "07-46", participants: 7 },
//     { number: "7", proposer: "श्री वीरेन्‍द्र कुमार सखलेचा", chiefMinister: "श्री द्वारका प्रसाद मिश्र", dates: "26.9.1966, 28.9.1966, 29.9.1966", days: 3, time: "07-32", participants: 10 },
//     { number: "चतुर्थ 8", proposer: "श्री श्‍यामाचरण शुक्‍ल", chiefMinister: "श्री गोविंद नारायण सिंह", dates: "28.3.1968, 29.3.1968, 30.3.1968", days: 3, time: "05-38", participants: 13 },
//     { number: "9", proposer: "श्री द्वारका प्रसाद मिश्र", chiefMinister: "श्री गोविंद नारायण सिंह", dates: "09.9.1968, 10.9.1968, 13.9.1968, 17.9.1968", days: 4, time: "07-04", participants: 11 },
//     { number: "10", proposer: "श्री बसंत सदाशिव प्रधान", chiefMinister: "श्री श्‍यामाचरण शुक्‍ल", dates: "09.01.1970, 12.1.1970, 16.1.1970", days: 3, time: "04-54", participants: 28 },
//     { number: "11", proposer: "श्री बसंत सदाशिव प्रधान", chiefMinister: "श्री श्‍यामाचरण शुक्‍ल", dates: "21.9.1971, 22.9.1971", days: 2, time: "04-01", participants: 12 },
//     { number: "पंचम् 12", proposer: "श्री कैलाश जोशी", chiefMinister: "श्री प्रकाश चन्‍द्र सेठी", dates: "27.2.1973, 28.2.1973, 07.3.1973", days: 3, time: "04-44", participants: 20 },
//     { number: "13", proposer: "श्री लक्ष्‍मीनारायण नायक", chiefMinister: "श्री प्रकाश चन्‍द्र सेठी", dates: "01.8.1973", days: 1, time: "03-45", participants: 11 },
//     { number: "षष्‍टम् 14", proposer: "श्री वेदराम", chiefMinister: "श्री वीरेन्‍द्र कुमार सखलेचा", dates: "26.10.1979, 27.10.1979", days: 2, time: "10-49", participants: 43 },
//     { number: "सप्‍तम् 15", proposer: "(1) श्री रमाशंकर सिंह, (2) श्री सुन्‍दरलाल पटवा", chiefMinister: "श्री अर्जुन सिंह", dates: "18.9.1980", days: 1, time: "04-00", participants: 17 },
//     { number: "16", proposer: "श्री सुन्‍दरलाल पटवा", chiefMinister: "श्री अर्जुन सिंह", dates: "17.9.1981", days: 1, time: "08-40", participants: 28 },
//     { number: "17", proposer: "श्री सुन्‍दरलाल पटवा", chiefMinister: "श्री अर्जुन सिंह", dates: "5.10.1982, 6.10.1982", days: 2, time: "08-04", participants: 19 },
//     { number: "18", proposer: "श्री सुन्‍दरलाल पटवा", chiefMinister: "श्री अर्जुन सिंह", dates: "11.10.1983", days: 1, time: "5-56", participants: 20 },
//     { number: "19", proposer: "श्री सुन्‍दरलाल पटवा", chiefMinister: "श्री अर्जुन सिंह", dates: "20.10.1984", days: 1, time: "5-31", participants: 28 },
//     { number: "अष्‍टम् 20", proposer: "श्री कैलाश जोशी", chiefMinister: "श्री मोतीलाल वोरा", dates: "26.12.1986", days: 1, time: "09-26", participants: 34 },
//     { number: "21", proposer: "श्री कैलाश जोशी", chiefMinister: "श्री मोतीलाल वोरा", dates: "16.9.1989", days: 1, time: "06-51", participants: 11 },
//     { number: "नवम् 22", proposer: "श्री श्‍यामाचरण शुक्‍ल", chiefMinister: "श्री सुंदरलाल पटवा", dates: "25.3.1991, 26.3.1991, 27.3.1991", days: 3, time: "09-09", participants: 18 },
//     { number: "23", proposer: "श्री श्‍यामाचरण शुक्‍ल", chiefMinister: "श्री सुंदरलाल पटवा", dates: "11.9.1992", days: 1, time: "09-30", participants: 18 },
//     { number: "दशम् 24", proposer: "श्री विक्रम वर्मा", chiefMinister: "श्री दिग्विजय सिंह", dates: "11.9.1996", days: 1, time: "14-22", participants: 48 },
//     { number: "25", proposer: "श्री विक्रम वर्मा", chiefMinister: "श्री दिग्विजय सिंह", dates: "05.8.1998, 06.8.1998, 07.8.1998", days: 3, time: "18-30", participants: 58 },
//     { number: "एकादश 26", proposer: "श्री गौरी शंकर शेजवार", chiefMinister: "श्री दिग्विजय सिंह", dates: "22.7.2002, 23.7.2002, 24.7.2002", days: 3, time: "15-52", participants: 43 },
//     { number: "त्रयोदश 27", proposer: "श्री अजय सिंह", chiefMinister: "श्री शिवराज सिंह चौहान", dates: "28.11.2011, 29.11.2011, 30.11.2011, 1.12.2011", days: 4, time: "25-24", participants: 47 },
//   ];

//  // Helper to split session and serial number
//   const splitSession = (number) => {
//     const parts = number.split(" ");
//     if (parts.length > 1 && isNaN(Number(parts[0]))) {
//       return { session: parts[0], serial: parts[1] };
//     } else {
//       return { session: "", serial: number };
//     }
//   };

//   return (
//     <div style={styles.wrapper}>
//       <h2 style={styles.title}>अविश्वास प्रस्ताव</h2>
//       <div style={styles.tableContainer}>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>विधानसभा</th>
//               <th style={styles.th}>प्रस्‍ताव क्र.</th>
//               <th style={styles.th}>प्रस्‍तावक</th>
//               <th style={styles.th}>मुख्‍यमंत्री</th>
//               <th style={styles.th}>चर्चा के दिनांक</th>
//               <th style={styles.th}>दिन</th>
//               <th style={styles.th}>समय (घंटे-मिनिट)</th>
//               <th style={styles.th}>हिस्‍सा लेने वाले मा. सदस्‍यों की संख्‍या</th>
//             </tr>
//           </thead>
//           <tbody>
//             {motions.map((m, idx) => {
//               const { session, serial } = splitSession(m.number);
//               return (
//                 <tr key={idx} style={idx % 2 === 0 ? styles.evenRow : styles.oddRow}>
//                   <td style={styles.td}>{session}</td>
//                   <td style={styles.td}>{serial}</td>
//                   <td style={styles.td}>{m.proposer}</td>
//                   <td style={styles.td}>{m.chiefMinister}</td>
//                   <td style={styles.td}>{m.dates}</td>
//                   <td style={styles.td}>{m.days}</td>
//                   <td style={styles.td}>{m.time}</td>
//                   <td style={styles.td}>{m.participants}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     width: "1200px",
//     margin: "20px auto",
//     fontFamily: "Arial, sans-serif",
//     color: "#333",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//     color: "#1a237e",
//   },
//   tableContainer: {
//     overflowX: "auto",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     border: "1px solid #ccc",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     fontSize: "14px",
//   },
//   th: {
//     backgroundColor: "#1d89d1ff",
//     color: "#fff",
//     padding: "8px",
//     textAlign: "center",
//     fontWeight: "bold",
//     border: "1px solid #ddd",
//   },
//   td: {
//     padding: "8px",
//     border: "1px solid #ddd",
//     textAlign: "center",
//   },
//   evenRow: {
//     backgroundColor: "#f5f5f5",
//   },
//   oddRow: {
//     backgroundColor: "#ffffff",
//   },
// };

// export default NoConfidenceMotionMain;



import React, { useState } from "react";

const NoConfidenceMotionMain = () => {
  const [lang, setLang] = useState("hi"); // Default language is Hindi

  // Hindi motions
 const motions = [
     { number: "द्वितीय 1", proposer: "श्री वी.एन.वाय.राव तामस्‍कर", chiefMinister: "श्री कैलाश नाथ काटजू", dates: "04.12.1957, 5.12.1957", days: 2, time: "07-04", participants: 17 },
     { number: "2", proposer: "श्री वी.एन.वाय.राव तामस्‍कर", chiefMinister: "श्री कैलाश नाथ काटजू", dates: "18.9.1961, 19.9.1961, 20.9.1961, 21.9.1961, 22.9.1961", days: 5, time: "07-58", participants: 20 },
     { number: "तृतीय 3", proposer: "श्री गुलाब चंद्र तामोट", chiefMinister: "श्री भगवंत राव मण्‍डलोई", dates: "08.8.1962, 09.8.1962", days: 2, time: "02-53", participants: 21 },
     { number: "4", proposer: "श्री वीरेन्‍द्र कुमार सखलेचा", chiefMinister: "श्री द्वारका प्रसाद मिश्र", dates: "25.8.1964, 01.9.1964, 02.9.1964, 03.9.1964", days: 4, time: "12-19", participants: 14 },
     { number: "5", proposer: "श्री लक्ष्‍मीनारायण अग्रवाल", chiefMinister: "श्री द्वारका प्रसाद मिश्र", dates: "23.8.1965, 25.8.1965, 31.8.1965, 01.9.1965, 02.9.1965", days: 5, time: "10-27", participants: 27 },
     { number: "6", proposer: "श्री मदनलाल तिवारी", chiefMinister: "श्री द्वारका प्रसाद मिश्र", dates: "05.4.1966, 06.4.1966", days: 2, time: "07-46", participants: 7 },
     { number: "7", proposer: "श्री वीरेन्‍द्र कुमार सखलेचा", chiefMinister: "श्री द्वारका प्रसाद मिश्र", dates: "26.9.1966, 28.9.1966, 29.9.1966", days: 3, time: "07-32", participants: 10 },
     { number: "चतुर्थ 8", proposer: "श्री श्‍यामाचरण शुक्‍ल", chiefMinister: "श्री गोविंद नारायण सिंह", dates: "28.3.1968, 29.3.1968, 30.3.1968", days: 3, time: "05-38", participants: 13 },
     { number: "9", proposer: "श्री द्वारका प्रसाद मिश्र", chiefMinister: "श्री गोविंद नारायण सिंह", dates: "09.9.1968, 10.9.1968, 13.9.1968, 17.9.1968", days: 4, time: "07-04", participants: 11 },
     { number: "10", proposer: "श्री बसंत सदाशिव प्रधान", chiefMinister: "श्री श्‍यामाचरण शुक्‍ल", dates: "09.01.1970, 12.1.1970, 16.1.1970", days: 3, time: "04-54", participants: 28 },
     { number: "11", proposer: "श्री बसंत सदाशिव प्रधान", chiefMinister: "श्री श्‍यामाचरण शुक्‍ल", dates: "21.9.1971, 22.9.1971", days: 2, time: "04-01", participants: 12 },
     { number: "पंचम् 12", proposer: "श्री कैलाश जोशी", chiefMinister: "श्री प्रकाश चन्‍द्र सेठी", dates: "27.2.1973, 28.2.1973, 07.3.1973", days: 3, time: "04-44", participants: 20 },
     { number: "13", proposer: "श्री लक्ष्‍मीनारायण नायक", chiefMinister: "श्री प्रकाश चन्‍द्र सेठी", dates: "01.8.1973", days: 1, time: "03-45", participants: 11 },
     { number: "षष्‍टम् 14", proposer: "श्री वेदराम", chiefMinister: "श्री वीरेन्‍द्र कुमार सखलेचा", dates: "26.10.1979, 27.10.1979", days: 2, time: "10-49", participants: 43 },
     { number: "सप्‍तम् 15", proposer: "(1) श्री रमाशंकर सिंह, (2) श्री सुन्‍दरलाल पटवा", chiefMinister: "श्री अर्जुन सिंह", dates: "18.9.1980", days: 1, time: "04-00", participants: 17 },
     { number: "16", proposer: "श्री सुन्‍दरलाल पटवा", chiefMinister: "श्री अर्जुन सिंह", dates: "17.9.1981", days: 1, time: "08-40", participants: 28 },
     { number: "17", proposer: "श्री सुन्‍दरलाल पटवा", chiefMinister: "श्री अर्जुन सिंह", dates: "5.10.1982, 6.10.1982", days: 2, time: "08-04", participants: 19 },
     { number: "18", proposer: "श्री सुन्‍दरलाल पटवा", chiefMinister: "श्री अर्जुन सिंह", dates: "11.10.1983", days: 1, time: "5-56", participants: 20 },
     { number: "19", proposer: "श्री सुन्‍दरलाल पटवा", chiefMinister: "श्री अर्जुन सिंह", dates: "20.10.1984", days: 1, time: "5-31", participants: 28 },
     { number: "अष्‍टम् 20", proposer: "श्री कैलाश जोशी", chiefMinister: "श्री मोतीलाल वोरा", dates: "26.12.1986", days: 1, time: "09-26", participants: 34 },
     { number: "21", proposer: "श्री कैलाश जोशी", chiefMinister: "श्री मोतीलाल वोरा", dates: "16.9.1989", days: 1, time: "06-51", participants: 11 },
     { number: "नवम् 22", proposer: "श्री श्‍यामाचरण शुक्‍ल", chiefMinister: "श्री सुंदरलाल पटवा", dates: "25.3.1991, 26.3.1991, 27.3.1991", days: 3, time: "09-09", participants: 18 },
     { number: "23", proposer: "श्री श्‍यामाचरण शुक्‍ल", chiefMinister: "श्री सुंदरलाल पटवा", dates: "11.9.1992", days: 1, time: "09-30", participants: 18 },
     { number: "दशम् 24", proposer: "श्री विक्रम वर्मा", chiefMinister: "श्री दिग्विजय सिंह", dates: "11.9.1996", days: 1, time: "14-22", participants: 48 },
     { number: "25", proposer: "श्री विक्रम वर्मा", chiefMinister: "श्री दिग्विजय सिंह", dates: "05.8.1998, 06.8.1998, 07.8.1998", days: 3, time: "18-30", participants: 58 },
     { number: "एकादश 26", proposer: "श्री गौरी शंकर शेजवार", chiefMinister: "श्री दिग्विजय सिंह", dates: "22.7.2002, 23.7.2002, 24.7.2002", days: 3, time: "15-52", participants: 43 },
     { number: "त्रयोदश 27", proposer: "श्री अजय सिंह", chiefMinister: "श्री शिवराज सिंह चौहान", dates: "28.11.2011, 29.11.2011, 30.11.2011, 1.12.2011", days: 4, time: "25-24", participants: 47 },
   ];

//    Name translations (Hindi → Proper English)
  const nameTranslations = {
    "श्री वी.एन.वाय.राव तामस्‍कर": "Shri V.N.Y. Rao Tamskar",
    "श्री कैलाश नाथ काटजू": "Shri Kailash Nath Katju",
    "श्री गुलाब चंद्र तामोट": "Shri Gulab Chandra Tamot",
    "श्री भगवंत राव मण्‍डलोई": "Shri Bhagwant Rao Mandloi",
    "श्री वीरेन्‍द्र कुमार सखलेचा": "Shri Virendra Kumar Saklecha",
    "श्री द्वारका प्रसाद मिश्र": "Shri Dwarka Prasad Mishra",
    "श्री लक्ष्‍मीनारायण अग्रवाल": "Shri Laxminarayan Agrawal",
    "श्री श्‍यामाचरण शुक्‍ल": "Shri Shyama Charan Shukla",
    "श्री गोविंद नारायण सिंह": "Shri Govind Narayan Singh",
    "श्री बसंत सदाशिव प्रधान": "Shri Basant Sadashiv Pradhan",
    "श्री कैलाश जोशी": "Shri Kailash Joshi",
    "श्री प्रकाश चन्‍द्र सेठी": "Shri Prakash Chandra Sethi",
    "श्री वेदराम": "Shri Vedram",
    "श्री रमाशंकर सिंह": "Shri Ramashankar Singh",
    "श्री सुन्‍दरलाल पटवा": "Shri Sundarlal Patwa",
    "श्री अर्जुन सिंह": "Shri Arjun Singh",
    "श्री मोतीलाल वोरा": "Shri Motilal Vora",
    "श्री विक्रम वर्मा": "Shri Vikram Verma",
    "श्री दिग्विजय सिंह": "Shri Digvijay Singh",
    "श्री गौरी शंकर शेजवार": "Shri Gauri Shankar Shejwar",
    "श्री अजय सिंह": "Shri Ajay Singh",
    "श्री शिवराज सिंह चौहान": "Shri Shivraj Singh Chouhan"
    // Add any other names as needed
  };

  // Translations for headers and sessions
  const translations = {
    hi: {
      title: "अविश्वास प्रस्ताव",
      vidhanSabha: "विधानसभा",
      prasthav: "प्रस्‍ताव क्र.",
      proposer: "प्रस्‍तावक",
      chiefMinister: "मुख्‍यमंत्री",
      discussionDates: "चर्चा के दिनांक",
      days: "दिन",
      time: "समय (घंटे-मिनिट)",
      participants: "हिस्‍सा लेने वाले मा. सदस्‍यों की संख्‍या",
      sessions: {
        "द्वितीय": "द्वितीय",
        "तृतीय": "तृतीय",
        "चतुर्थ": "चतुर्थ",
        "पंचम्": "पंचम्",
        "षष्‍टम्": "षष्‍टम्",
        "सप्‍तम्": "सप्‍तम्",
        "अष्‍टम्": "अष्‍टम्",
        "नवम्": "नवम्",
        "दशम्": "दशम्",
        "एकादश": "एकादश",
        "त्रयोदश": "त्रयोदश",
      }
    },
    en: {
      title: "No Confidence Motion",
      vidhanSabha: "Vidhan Sabha",
      prasthav: "Serial No.",
      proposer: "Proposer",
      chiefMinister: "Chief Minister",
      discussionDates: "Discussion Dates",
      days: "Days",
      time: "Time (Hrs-Min)",
      participants: "No. of Participants",
      sessions: {
        "द्वितीय": "Second",
        "तृतीय": "Third",
        "चतुर्थ": "Fourth",
        "पंचम्": "Fifth",
        "षष्‍टम्": "Sixth",
        "सप्‍तम्": "Seventh",
        "अष्‍टम्": "Eighth",
        "नवम्": "Ninth",
        "दशम्": "Tenth",
        "एकादश": "Eleventh",
        "त्रयोदश": "Thirteenth",
      }
    }
  };

  // Helper to split session and serial number
  const splitSession = (number) => {
    const parts = number.split(" ");
    if (parts.length > 1 && isNaN(Number(parts[0]))) {
      return { session: translations[lang].sessions[parts[0]] || parts[0], serial: parts[1] };
    } else {
      return { session: "", serial: number };
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* Translate Button */}
      <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <button style={styles.button} onClick={() => setLang(lang === "hi" ? "en" : "hi")}>
          {lang === "hi" ? "Translate to English" : "हिंदी में अनुवाद करें"}
        </button>
      </div>

      <h2 style={styles.title}>{translations[lang].title}</h2>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{translations[lang].vidhanSabha}</th>
              <th style={styles.th}>{translations[lang].prasthav}</th>
              <th style={styles.th}>{translations[lang].proposer}</th>
              <th style={styles.th}>{translations[lang].chiefMinister}</th>
              <th style={styles.th}>{translations[lang].discussionDates}</th>
              <th style={styles.th}>{translations[lang].days}</th>
              <th style={styles.th}>{translations[lang].time}</th>
              <th style={styles.th}>{translations[lang].participants}</th>
            </tr>
          </thead>
          <tbody>
            {motions.map((m, idx) => {
              const { session, serial } = splitSession(m.number);
              const proposer = lang === "hi" ? m.proposer : nameTranslations[m.proposer] || m.proposer;
              const chiefMinister = lang === "hi" ? m.chiefMinister : nameTranslations[m.chiefMinister] || m.chiefMinister;

              return (
                <tr key={idx} style={idx % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  <td style={styles.td}>{session}</td>
                  <td style={styles.td}>{serial}</td>
                  <td style={styles.td}>{proposer}</td>
                  <td style={styles.td}>{chiefMinister}</td>
                  <td style={styles.td}>{m.dates}</td>
                  <td style={styles.td}>{m.days}</td>
                  <td style={styles.td}>{m.time}</td>
                  <td style={styles.td}>{m.participants}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "1200px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#1a237e",
  },
  tableContainer: {
    overflowX: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    border: "1px solid #ccc",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  },
  th: {
    backgroundColor: "#1d89d1ff",
    color: "#fff",
    padding: "8px",
    textAlign: "center",
    fontWeight: "bold",
    border: "1px solid #ddd",
  },
  td: {
    padding: "8px",
    border: "1px solid #ddd",
    textAlign: "center",
  },
  evenRow: {
    backgroundColor: "#f5f5f5",
  },
  oddRow: {
    backgroundColor: "#ffffff",
  },
  button: {
    padding: "6px 12px",
    borderRadius: "4px",
    border: "1px solid #1d89d1",
    backgroundColor: "#1d89d1",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default NoConfidenceMotionMain;
