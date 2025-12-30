
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// ----- 2016 Patrak Data -----
const patrakData2023 = [
    { month: "जनवरी", number: "1", date: "06/01/2023", patrakNumber: "1", title: "दिसम्बर, 2022 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-060123-1.pdf" },
  { month: "जनवरी", number: "2", date: "25/01/2023", patrakNumber: "2", title: "निर्वाचन क्षेत्र क्र.223-आलोट (अ.जा.) से निर्वाचित सदस्‍य, श्री मनोज चावला को गिरफ्तार किये जाने की सूचना", pdfLink: "/misc/P2/p2-250123-1.pdf" },
  { month: "जनवरी", number: "3", date: "30/01/2023", patrakNumber: "3", title: "पंचदश विधान सभा का चतुर्दश सत्र (दिनांक 27 फरवरी से 27 मार्च, 2023)", pdfLink: "/misc/P2/p2-300123-1.pdf" },

  // फरवरी
  { month: "फ़रवरी", number: "4", date: "01/02/2023", patrakNumber: "4", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-010223-1.pdf" },
  { month: "फ़रवरी", number: "5", date: "01/02/2023", patrakNumber: "5", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-010223-2.pdf" },
  { month: "फ़रवरी", number: "6", date: "02/02/2023", patrakNumber: "6", title: "स्थायी आदेश में संशोधन", pdfLink: "/misc/P2/p2-020223-1.pdf" },
  { month: "फ़रवरी", number: "7", date: "03/02/2023", patrakNumber: "7", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-030223-1.pdf" },
  { month: "फ़रवरी", number: "8", date: "17/02/2023", patrakNumber: "8", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-170223-1.pdf" },
  { month: "फ़रवरी", number: "9", date: "17/02/2023", patrakNumber: "9", title: "फ़रवरी-मार्च, 2023 सत्र हेतु स्वास्थ्य संबंधी आवश्यक व्यवस्थाएं", pdfLink: "/misc/P2/p2-170223-2.pdf" },
  { month: "फ़रवरी", number: "10", date: "21/02/2023", patrakNumber: "10", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-210223-1.pdf" },
  { month: "फ़रवरी", number: "11", date: "21/02/2023", patrakNumber: "11", title: "पंद्रहवीं विधान सभा के माननीय सदस्यों का समूह-छायांकन", pdfLink: "/misc/P2/p2-210223-2.pdf" },
  { month: "फ़रवरी", number: "12", date: "26/02/2023", patrakNumber: "12", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-260223-1.pdf" },
  { month: "फ़रवरी", number: "13", date: "26/02/2023", patrakNumber: "13", title: "माननीय राज्यपाल का अभिभाषण", pdfLink: "/misc/P2/p2-260223-2.pdf" },
  { month: "फ़रवरी", number: "14", date: "26/02/2023", patrakNumber: "14", title: "सभा भवन में आसन क्रम की व्यवस्था पूर्ववत रखी जाना", pdfLink: "/misc/P2/p2-260223-3.pdf" },
  { month: "फ़रवरी", number: "15", date: "27/02/2023", patrakNumber: "15", title: "सदस्यों के लिए संदर्भ सेवा", pdfLink: "/misc/P2/p2-270223-1.pdf" },
  { month: "फ़रवरी", number: "16", date: "27/02/2023", patrakNumber: "16", title: "सदस्य परिचय पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-270223-2.pdf" },
  { month: "फ़रवरी", number: "17", date: "27/02/2023", patrakNumber: "17", title: "माननीय राज्यपाल का अभिभाषण", pdfLink: "/misc/P2/p2-270223-3.pdf" },
  { month: "फ़रवरी", number: "18", date: "28/02/2023", patrakNumber: "18", title: "माननीय सदस्यों हेतु पुस्तकों का वितरण", pdfLink: "/misc/P2/p2-280223-1.pdf" },
  { month: "फ़रवरी", number: "19", date: "28/02/2023", patrakNumber: "19", title: "वर्ष 2023-2024 के डिजीटल बजट का वितरण", pdfLink: "/misc/P2/p2-280223-2.pdf" },
  { month: "फ़रवरी", number: "20", date: "28/02/2023", patrakNumber: "20", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-280223-3.pdf" },
  { month: "फ़रवरी", number: "21", date: "28/02/2023", patrakNumber: "21", title: "वर्ष 2023-24 का आम बजट दिनांक 9 मार्च, 2022 को पूर्वाह्न 11.00 बजे सदन में प्रस्तुत होने के कारण उक्त दिनांक को प्रश्नकाल नहीं हो सकेगा", pdfLink: "/misc/P2/p2-280223-4.pdf" },
  { month: "फ़रवरी", number: "22", date: "28/02/2023", patrakNumber: "22", title: "शुक्रवार, दिनांक 28 फरवरी, 2023 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-280223-5.pdf" },

  // मार्च
  { month: "मार्च", number: "23", date: "01/03/2023", patrakNumber: "23", title: "कटौती प्रस्ताव की सूचनाएं", pdfLink: "/misc/P2/p2-010323-1.pdf" },
  { month: "मार्च", number: "24", date: "02/03/2023", patrakNumber: "24", title: "शुक्रवार, दिनांक 02 मार्च, 2023 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-020323-1.pdf" },
  { month: "मार्च", number: "25", date: "03/03/2023", patrakNumber: "25", title: "सदस्य का सभा से निलंबन", pdfLink: "/misc/P2/p2-030323-1.pdf" },
  { month: "मार्च", number: "26", date: "12/03/2023", patrakNumber: "26", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-120323-1.pdf" },
  { month: "मार्च", number: "27", date: "13/03/2023", patrakNumber: "27", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-130323-1.pdf" },
  { month: "मार्च", number: "28", date: "14/03/2023", patrakNumber: "28", title: "कार्य मंत्रणा समिति के प्रतिवेदन का शुद्धि-पत्र", pdfLink: "/misc/P2/p2-140323-1.pdf" },
  { month: "मार्च", number: "29", date: "20/03/2023", patrakNumber: "29", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-200323-1.pdf" },
  { month: "मार्च", number: "30", date: "21/03/2023", patrakNumber: "30", title: "फरवरी-मार्च, 2023 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-210323-1.pdf" },
  { month: "मार्च", number: "31", date: "31/03/2023", patrakNumber: "31", title: "फरवरी-मार्च, 2023 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-310323-1.pdf" },
  { month: "मार्च", number: "32", date: "31/03/2023", patrakNumber: "32", title: "समितियों के कार्यकाल में वृद्धि", pdfLink: "/misc/P2/p2-310323-2.pdf" },
// मई
  { month: "मई", number: "33", date: "31/05/2023", patrakNumber: "33", title: "फरवरी-मार्च, 2023 सत्र में दिनांक 13 मार्च, 2023 को पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-310523-1.pdf" },

  // जून
  { month: "जून", number: "34", date: "06/06/2023", patrakNumber: "34", title: "पंचदश विधान सभा का पंचदश सत्र (दिनांक 10 से 14 जुलाई, 2023)", pdfLink: "/misc/P2/p2-060623-1.pdf" },
  { month: "जून", number: "35", date: "09/06/2023", patrakNumber: "35", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-090623-1.pdf" },
  { month: "जून", number: "36", date: "13/06/2023", patrakNumber: "36", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-130623-1.pdf" },
  { month: "जून", number: "37", date: "26/06/2023", patrakNumber: "37", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-260623-1.pdf" },

  // जुलाई
  { month: "जुलाई", number: "38", date: "04/07/2023", patrakNumber: "38", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-040723-1.pdf" },
  { month: "जुलाई", number: "39", date: "06/07/2023", patrakNumber: "39", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-060723-1.pdf" },
  { month: "जुलाई", number: "40", date: "06/07/2023", patrakNumber: "40", title: "मध्यप्रदेश विधान सभा सचिवालय द्वारा जारी पत्रक भाग-दो, क्रमांक-34, दिनांक 6 जून, 2023 को एतदद्वारा पुनरीक्षित किया जाता है.", pdfLink: "/misc/P2/p2-060723-2.pdf" },
  { month: "जुलाई", number: "41", date: "07/07/2023", patrakNumber: "41", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-070723-1.pdf" },
  { month: "जुलाई", number: "42", date: "07/07/2023", patrakNumber: "42", title: "पंचदश मध्यप्रदेश विधान सभा का पंचदश सत्र अब पुनरीक्षित कार्यक्रम अनुसार मंगलवार, दिनांक 11 जुलाई, 2023 से 15 जुलाई, 2023 तक किया जाना नियत किया गया है.", pdfLink: "/misc/P2/p2-070723-2.pdf" },
  { month: "जुलाई", number: "43", date: "07/07/2023", patrakNumber: "43", title: "समूह छायाचित्र का वितरण", pdfLink: "/misc/P2/p2-070723-3.pdf" },
  { month: "जुलाई", number: "44", date: "07/07/2023", patrakNumber: "44", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी संशोधित व्यवस्था", pdfLink: "/misc/P2/p2-070723-4.pdf" },
  { month: "जुलाई", number: "45", date: "09/07/2023", patrakNumber: "45", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-090723-1.pdf" },
  { month: "जुलाई", number: "46", date: "10/07/2023", patrakNumber: "46", title: "सदस्यों के लिए संदर्भ सेवा", pdfLink: "/misc/P2/p2-100723-1.pdf" },
  { month: "जुलाई", number: "47", date: "10/07/2023", patrakNumber: "47", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-100723-2.pdf" },
  { month: "जुलाई", number: "48", date: "11/07/2023", patrakNumber: "48", title: "मध्यप्रदेश विधान सभा के मार्च, 2022 सत्र में माननीय सदस्यों द्वारा उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-110723-1.pdf" },
  { month: "जुलाई", number: "49", date: "11/07/2023", patrakNumber: "49", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-110723-2.pdf" },
  { month: "जुलाई", number: "50", date: "11/07/2023", patrakNumber: "50", title: "वर्ष 2023-2024 के प्रथम अनुपूरक अनुमान (ई-बजट) पेनड्राईव से वितरण की सूचना", pdfLink: "/misc/P2/p2-110723-3.pdf" },
  { month: "जुलाई", number: "51", date: "12/07/2023", patrakNumber: "51", title: "शुक्रवार, दिनांक 14 जुलाई, 2023 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-120723-1.pdf" },

  // अगस्त
  { month: "अगस्त", number: "52", date: "08/08/2023", patrakNumber: "52", title: "स्थायी आदेश में संशोधन", pdfLink: "/misc/P2/p2-080823-1.pdf" },
// नवम्बर
  { month: "नवम्बर", number: "53", date: "22/11/2023", patrakNumber: "53", title: "विधान सभा की सदस्यता से त्याग-पत्र", pdfLink: "/misc/P2/p2-221123-1.pdf" },

  // दिसम्बर
  { month: "दिसम्बर", number: "54", date: "14/12/2023", patrakNumber: "54", title: "षोडश विधान सभा का प्रथम सत्र (दिनांक 18 से 21 दिसम्बर, 2023)", pdfLink: "/misc/P2/p2-141223-1.pdf" },
  { month: "दिसम्बर", number: "55", date: "15/12/2023", patrakNumber: "55", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-151223-1.pdf" },
  { month: "दिसम्बर", number: "56", date: "15/12/2023", patrakNumber: "56", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-151223-2.pdf" },
  { month: "दिसम्बर", number: "57", date: "16/12/2023", patrakNumber: "57", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-161223-1.pdf" },
  { month: "दिसम्बर", number: "58", date: "17/12/2023", patrakNumber: "58", title: "अध्यक्ष का निर्वाचन", pdfLink: "/misc/P2/p2-171223-1.pdf" },
  { month: "दिसम्बर", number: "59", date: "17/12/2023", patrakNumber: "59", title: "सभा भवन में आसन क्रम आवंटित किये जाने की सूचना", pdfLink: "/misc/P2/p2-171223-2.pdf" },
  { month: "दिसम्बर", number: "60", date: "18/12/2023", patrakNumber: "60", title: "मध्यप्रदेश विधान सभा में नेता प्रतिपक्ष को मान्यता", pdfLink: "/misc/P2/p2-181223-1.pdf" },
  { month: "दिसम्बर", number: "61", date: "19/12/2023", patrakNumber: "61", title: "मध्यप्रदेश विधान सभा के सितम्बर, 2022 एवं दिसम्बर, 2022 सत्र में माननीय सदस्यों द्वारा उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-191223-1.pdf" },
  { month: "दिसम्बर", number: "62", date: "19/12/2023", patrakNumber: "62", title: "माननीय राज्‍यपाल महोदय का अभिभाषण", pdfLink: "/misc/P2/p2-191223-2.pdf" },
  { month: "दिसम्बर", number: "63", date: "20/12/2023", patrakNumber: "63", title: "सभा भवन में आसन क्रम में परिवर्तन की सूचना", pdfLink: "/misc/P2/p2-201223-1.pdf" },
  { month: "दिसम्बर", number: "64", date: "20/12/2023", patrakNumber: "64", title: "माननीय राज्यपाल का अभिभाषण", pdfLink: "https://example.com/pdf/64.pdf" }
];

const months2023 = [
  "जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई",
  "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्टूबर",
  "नवम्बर", "दिसम्बर"
];

const styles = {
  wrapper: {
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh"
  },
  headerContainer: {
    width: "100%",
    background: "linear-gradient(90deg, #1e3a8a, #2563eb)",
    color: "#fff",
    padding: "50px 20px 70px",
    borderRadius: "0 0 30px 30px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    position: "relative",
    textAlign: "center"
  },
  backButton: {
    position: "absolute",
    top: "20px",
    left: "25px",
    backgroundColor: "rgba(255,255,255,0.15)",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: 600,
    textDecoration: "none",
    transition: "all 0.3s ease"
  },
  mainTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "10px"
  },
  subTitle: { fontSize: "1.2rem", opacity: 0.9 },
  monthNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: "#e0e7ff",
    padding: "15px 20px",
    margin: "25px auto",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    maxWidth: "1100px"
  },
  monthButton: {
    backgroundColor: "#1e3a8a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  monthButtonHover: {
    backgroundColor: "#fff",
    color: "#1e3a8a",
    boxShadow: "0 4px 10px rgba(37,99,235,0.3)"
  },
  tableContainer: {
    backgroundColor: "#fff",
    maxWidth: "1100px",
    margin: "20px auto 50px",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    overflowX: "auto"
  },
  table: { width: "100%", borderCollapse: "collapse" },
  th: {
    backgroundColor: "#1e40af",
    color: "#fff",
    textAlign: "left",
    padding: "12px 15px",
    fontWeight: "700",
    borderBottom: "2px solid #ccc"
  },
  td: {
    padding: "12px 15px",
    borderBottom: "1px solid #e2e8f0",
    fontSize: "1rem",
    color: "#1e293b",
    textAlign: "left"
  },
  monthHeader: {
    backgroundColor: "#dbeafe",
    color: "#1e3a8a",
    fontWeight: "700",
    textAlign: "center"
  }
};

const PatrakBhag2_2023 = () => {
  const monthRefs = months2023.reduce((acc, month) => {
    acc[month] = useRef(null);
    return acc;
  }, {});

  const scrollToMonth = (month) => {
    monthRefs[month]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={styles.wrapper}>
      {/* Header */}
      <div style={styles.headerContainer}>
        <Link
          to="/patrakbhag-02"
          style={styles.backButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#fff";
            e.currentTarget.style.color = "#1e3a8a";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.color = "#fff";
          }}
        >
          ⬅ वापस जाएँ
        </Link>
        <h1 style={styles.mainTitle}>पत्रक भाग - दो</h1>
        <p style={styles.subTitle}>
          सदन एवं समितियों सम्बन्धी सूचनाएं<br />
          वर्ष 2023
        </p>
      </div>

      {/* Month Navigation */}
      <div style={styles.monthNav}>
        {months2023.map((m, i) => (
          <button
            key={i}
            style={styles.monthButton}
            onClick={() => scrollToMonth(m)}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.monthButtonHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.monthButton)}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Table */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>सरल क्रमांक</th>
              <th style={styles.th}>जारी दिनांक</th>
              <th style={styles.th}>पत्रक क्रमांक</th>
              <th style={styles.th}>विषय</th>
            </tr>
          </thead>
          <tbody>
            {months2023.map((month, index) => (
              <React.Fragment key={index}>
                <tr ref={monthRefs[month]}>
                  <td colSpan="4" style={{ ...styles.td, ...styles.monthHeader }}>
                    {month}
                  </td>
                </tr>
                {patrakData2023
                  .filter((item) => item.month === month)
                  .map((item, i) => (
                    <tr key={i}>
                      <td style={styles.td}>{item.number}</td>
                      <td style={styles.td}>{item.date}</td>
                      <td style={styles.td}>{item.patrakNumber || "-"}</td>
                      <td style={styles.td}>
                        <a
                          href={item.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#1e40af", textDecoration: "underline" }}
                        >
                          {item.title}
                        </a>
                      </td>
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatrakBhag2_2023;