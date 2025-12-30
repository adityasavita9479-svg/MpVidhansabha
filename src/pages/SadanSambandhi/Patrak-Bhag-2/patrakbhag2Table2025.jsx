import React, { useRef } from "react";
import { Link } from "react-router-dom";

 const patrakData2025 = [
  { month: "जनवरी", date: "02/01/2025", number: "1", title: "दिसम्बर, 2024 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-020125-1.pdf" },
  { month: "फरवरी", date: "06/02/2025", number: "2", title: "षोडश विधान सभा का पंचम सत्र (दिनांक 10 से 24 मार्च, 2025)" , pdfLink: "/misc/P2/p2-060225-1.pdf" },
  { month: "फरवरी", date: "11/02/2025", number: "3", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था" , pdfLink: "/misc/P2/p2-110225-1.pdf" },
  { month: "फरवरी", date: "11/02/2025", number: "4", title: "सदस्यों के शिष्टाचार एवं सम्मान अनुरक्षण समिति", pdfLink: "/misc/P2/p2-110225-2.pdf"  },
  { month: "फरवरी", date: "13/02/2025", number: "5", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-130225-1.pdf"},
  { month: "फरवरी", date: "13/02/2025", number: "6", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-130225-2.pdf"  },
  { month: "मार्च", date: "03/03/2025", number: "7", title: "राष्‍ट्रगीत ‘वन्‍दे मातरम्’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-030325-1.pdf"  },
  { month: "मार्च", date: "05/03/2025", number: "8", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-050325-1.pdf"  },
  { month: "मार्च", date: "09/03/2025", number: "9", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-090325-1.pdf" },
  { month: "मार्च", date: "09/03/2025", number: "10", title: "माननीय राज्यपाल का अभिभाषण" , pdfLink: "/misc/P2/p2-090325-2.pdf" },
  { month: "मार्च", date: "10/03/2025", number: "11", title: "माननीय राज्यपाल का अभिभाषण" , pdfLink: "/misc/P2/p2-100325-1.pdf" },
  { month: "मार्च", date: "10/03/2025", number: "12", title: "सभा भवन आसन क्रम में परिवर्तन की सूचना" , pdfLink: "/misc/P2/p2-100325-2.pdf" },
  { month: "मार्च", date: "10/03/2025", number: "13", title: "मान. सदस्यों से शोध पत्रिका 'विधायिनी' हेतु लेख आमंत्रण की सूचना", pdfLink: "/misc/P2/p2-100325-3.pdf"  },
  { month: "मार्च", date: "10/03/2025", number: "14", title: "माननीय सदस्यों के जीवन परिचय की पुष्टि बाबत्" , pdfLink: "/misc/P2/p2-100325-4.pdf" },
  { month: "मार्च", date: "10/03/2025", number: "15", title: "सदस्यों के लिए संदर्भ सेवा" , pdfLink: "/misc/P2/p2-100325-5.pdf" },
  { month: "मार्च", date: "11/03/2025", number: "16", title: "वर्ष 2025-2026 के बजट साहित्य का वितरण", pdfLink: "/misc/P2/p2-110325-1.pdf"  },
  { month: "मार्च", date: "11/03/2025", number: "17", title: "विश्वविद्यालयों की सभा (कोर्ट) के लिए विधान सभा के सदस्यों का निर्वाचन" , pdfLink: "/misc/P2/p2-110325-2.pdf" },
  { month: "मार्च", date: "11/03/2025", number: "18", title: "दिनांक 12 मार्च, 2025 को प्रश्नोत्तर काल न होने विषयक" , pdfLink: "/misc/P2/p2-110325-3.pdf" },
  { month: "मार्च", date: "11/03/2025", number: "19", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-110325-4.pdf" },
  { month: "मार्च", date: "12/03/2025", number: "20", title: "कटौती प्रस्ताव की सूचनाएं", pdfLink: "/misc/P2/p2-120325-1.pdf"  },
  { month: "मार्च", date: "13/03/2025", number: "21", title: "लोक लेखा, प्राक्कलन, सरकारी उपक्रमों संबंधी तथा स्थानीय निकाय एवं पंचायतीराज लेखा समितियों के लिए सदस्यों के निर्वाचन का कार्यक्रम", pdfLink: "/misc/P2/p2-130325-1.pdf"  },
  { month: "मार्च", date: "17/03/2025", number: "22", title: "वर्ष 2025-2026 के लिए अनुदानों की मांगों पर कटौती प्रस्ताव का शुद्धि पत्र" , pdfLink: "/misc/P2/p2-170325-1.pdf" },
  { month: "मार्च", date: "17/03/2025", number: "23", title: "विश्वविद्यालयों की सभा (कोर्ट) के लिए विधान सभा के 8-8 सदस्यों का निर्वाचन" , pdfLink: "/misc/P2/p2-170325-2.pdf" },
  { month: "मार्च", date: "18/03/2025", number: "24", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-180325-1.pdf"  },
  { month: "मार्च", date: "18/03/2025", number: "25", title: "विश्वविद्यालयों की सभा (कोर्ट) के लिए विधान सभा के 8-8 सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-180325-2.pdf"  },
  { month: "मार्च", date: "18/03/2025", number: "26", title: "लोक लेखा, प्राक्कलन, सरकारी उपक्रमों संबंधी तथा स्थानीय निकाय एवं पंचायतीराज लेखा समितियों के लिए सदस्यों के निर्वाचन के लिए प्रस्तावित उम्मीदवारों के नाम" , pdfLink: "/misc/P2/p2-180325-3.pdf" },
  { month: "मार्च", date: "20/03/2025", number: "27", title: "होली मिलन समारोह 'फाग उत्सव'" , pdfLink: "/misc/P2/p2-200325-1.pdf" },
  { month: "मार्च", date: "20/03/2025", number: "28", title: "लोक लेखा, प्राक्कलन, सरकारी उपक्रमों संबंधी तथा स्थानीय निकाय एवं पंचायतीराज लेखा समितियों के लिए निर्वाचन", pdfLink: "/misc/P2/p2-200325-2.pdf"  },
  { month: "मार्च", date: "20/03/2025", number: "29", title: "शुक्रवार, दिनांक 21 मार्च, 2025 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-200325-3.pdf" },
  { month: "मार्च", date: "21/03/2025", number: "30", title: "विश्वविद्यालयों की सभा (कोर्ट) के लिए विधान सभा के 8-8 सदस्यों का निर्वाचन" , pdfLink: "/misc/P2/p2-210325-1.pdf" },
  { month: "मार्च", date: "21/03/2025", number: "31", title: "विश्वविद्यालयों की सभा (कोर्ट) के लिए विधान सभा के 8-8 सदस्यों का निर्वाचन" , pdfLink: "/misc/P2/p2-210325-2.pdf" },
  { month: "मार्च", date: "21/03/2025", number: "32", title: "लोक लेखा, प्राक्कलन, सरकारी उपक्रमों संबंधी तथा स्थानीय निकाय एवं पंचायतीराज लेखा समितियों के लिए सदस्यों का निर्वाचन" , pdfLink: "/misc/P2/p2-210325-3.pdf" },
  { month: "मार्च", date: "24/03/2025", number: "33", title: "सत्रावधि में पत्रकार दीर्घा में प्रतिबंध विषयक" , pdfLink: "/misc/P2/p2-240325-1.pdf" },
  { month: "अप्रैल", date: "07/04/2025", number: "34", title: "मार्च, 2025 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-070425-1.pdf" },
  { month: "मई", date: "23/05/2025", number: "35", title: "उल्लिखित निर्वाचित सदस्यों को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-230525-1.pdf" },
  { month: "जून", date: "24/06/2025", number: "36", title: "षोडश विधान सभा का षष्टम सत्र (दिनांक 28 जुलाई से 8 अगस्त, 2025)" , pdfLink: "/misc/P2/p2-240625-1.pdf" },
  { month: "जून", date: "26/06/2025", number: "37", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-260625-1.pdf" },
  { month: "जुलाई", date: "01/07/2025", number: "38", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था" , pdfLink: "/misc/P2/p2-010725-1.pdf" },
  { month: "जुलाई", date: "02/07/2025", number: "39", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था" , pdfLink: "/misc/P2/p2-020725-1.pdf" },
  { month: "जुलाई", date: "21/07/2025", number: "40", title: "राष्‍ट्रगीत ‘वन्‍दे मातरम्’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-210725-1.pdf"  },
  { month: "जुलाई", date: "23/07/2025", number: "41", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , pdfLink: "/misc/P2/p2-230725-1.pdf" },
  { month: "जुलाई", date: "24/07/2025", number: "42", title: "सत्रकाल में विधायक विश्राम गृह से नवीन विधान सभा भवन तक माननीय सदस्यों को आवागमन हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-240725-1.pdf" },
  { month: "जुलाई", date: "27/07/2025", number: "43", title: "सभा भवन आसन क्रम परिवर्तन किये जाने की सूचना" , pdfLink: "/misc/P2/p2-270725-1.pdf" },
  { month: "जुलाई", date: "27/07/2025", number: "44", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-270725-2.pdf"  },
  { month: "जुलाई", date: "28/07/2025", number: "45", title: "माननीय सदस्यों हेतु पुस्तक का वितरण", pdfLink: "/misc/P2/p2-280725-1.pdf"  },
  { month: "जुलाई", date: "28/07/2025", number: "46", title: "सदस्यों के लिए संदर्भ सेवा" , pdfLink: "/misc/P2/p2-280725-2.pdf" },
  { month: "जुलाई", date: "28/07/2025", number: "47", title: "मान. सदस्यों से शोध पत्रिका 'विधायिनी' हेतु लेख आमंत्रण की सूचना" , pdfLink: "/misc/P2/p2-280725-3.pdf" },
  { month: "जुलाई", date: "28/07/2025", number: "48", title: "मध्यप्रदेश विधान सभा के जुलाई, 2024 सत्र (तृतीय सत्र) में माननीय सदस्यों द्वारा उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-280725-4.pdf" },
  { month: "जुलाई", date: "28/07/2025", number: "49", title: "मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-280725-5.pdf" },
  { month: "जुलाई", date: "29/07/2025", number: "50", title: "सभा भवन आसन क्रम परिवर्तन किये जाने की सूचना", pdfLink: "/misc/P2/p2-290725-1.pdf"  },
  { month: "जुलाई", date: "29/07/2025", number: "51", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-290725-2.pdf"  },
  { month: "जुलाई", date: "29/07/2025", number: "52", title: "अनुसूचित जाति तथा अनुसूचित जनजाति वर्ग के कल्याण संबंधी समिति एवं पिछड़े वर्गों के कल्याण संबंधी समिति के लिए सदस्यों के निर्वाचन का कार्यक्रम", pdfLink: "/misc/P2/p2-290725-3.pdf"  },
  { month: "जुलाई", date: "29/07/2025", number: "53", title: "शुक्रवार, दिनांक 01 अगस्त, 2025 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-290725-4.pdf" },
  { month: "जुलाई", date: "30/07/2025", number: "54", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-300725-1.pdf"  },
  { month: "जुलाई", date: "30/07/2025", number: "55", title: "शुक्रवार, दिनांक 01 अगस्त, 2025 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-300725-2.pdf" },
  { month: "जुलाई", date: "31/07/2025", number: "56", title: "शुक्रवार, दिनांक 01 अगस्त, 2025 हेतु निर्धारित अशासकीय संकल्पों की सूची. गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का पंचम प्रतिवेदन.", pdfLink: "/misc/P2/p2-310725-1.pdf"  },
  { month: "जुलाई", date: "31/07/2025", number: "57", title: "अनुसूचित जाति तथा अनुसूचित जनजाति वर्ग के कल्याण संबंधी समिति एवं पिछड़े वर्गों के कल्याण संबंधी समिति के लिए सदस्यों के निर्वाचन के लिए प्रस्तावित उम्मीदवारों के नाम", pdfLink: "/misc/P2/p2-310725-2.pdf"  },
  { month: "जुलाई", date: "31/07/2025", number: "58", title: "अनुसूचित जाति तथा अनुसूचित जनजाति वर्ग के कल्याण संबंधी समिति एवं पिछड़े वर्गों के कल्याण संबंधी समिति के लिए सदस्यों का निर्वाचन" , pdfLink: "/misc/P2/p2-310725-3.pdf" },
  { month: "अगस्त", date: "04/08/2025", number: "59", title: "मध्यप्रदेश विधान सभा की अनुसूचित जाति तथा अनुसूचित जनजाति वर्ग के कल्याण संबंधी एवं पिछड़े वर्गों के कल्याण संबंधी समितियों का गठन वर्ष 2025-26" , pdfLink: "/misc/P2/p2-040825-1.pdf" },
  { month: "अगस्त", date: "18/08/2025", number: "60", title: "जुलाई-अगस्त, 2025 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-180825-1.pdf"  },
  { month: "अगस्त", date: "25/08/2025", number: "61", title: "जुलाई-अगस्त, 2025 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-220825-1.pdf" },
  { month: "अक्टूबर", date: "27/10/2025", number: "62", title: "नाम-निर्दिष्ट समितियों के संबंध में", pdfLink: "/misc/P2/p2-271025-1.pdf"  },
  { month: "अक्टूबर", date: "29/10/2025", number: "63", title: "षोडश विधान सभा का सप्तम् सत्र (दिनांक 1 दिसम्बर से 5 दिसम्बर, 2025)" , pdfLink: "/misc/P2/p2-291025-1.pdf" },
  { month: "अक्टूबर", date: "03/11/2025", number: "64", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-031125-1.pdf" },
  { month: "अक्टूबर", date: "06/11/2025", number: "65", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था" , pdfLink: "/misc/P2/p2-061125-1.pdf" },
  { month: "अक्टूबर", date: "07/11/2025", number: "66", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-071125-1.pdf"  },
];
const months2025 = [
  "जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई",
  "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्टूबर",
  "नवम्बर", "दिसम्बर"
];


const styles = {
  wrapper: {
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
  },
  headerContainer: {
    width: "100%",
    background: "linear-gradient(90deg, #1e3a8a, #2563eb)",
    color: "#fff",
    padding: "50px 20px 70px",
    borderRadius: "0 0 30px 30px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    position: "relative",
    textAlign: "center",
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
    transition: "all 0.3s ease",
  },
  mainTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "10px",
  },
  subTitle: {
    fontSize: "1.2rem",
    opacity: 0.9,
  },
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
    maxWidth: "1100px",
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
    transition: "all 0.3s ease",
  },
  monthButtonHover: {
    backgroundColor: "#fff",
    color: "#1e3a8a",
    boxShadow: "0 4px 10px rgba(37,99,235,0.3)",
  },
  tableContainer: {
    backgroundColor: "#fff",
    maxWidth: "1100px",
    margin: "20px auto 50px",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#1e40af",
    color: "#fff",
    textAlign: "left",
    padding: "12px 15px",
    fontWeight: "700",
    borderBottom: "2px solid #ccc",
  },
  td: {
    padding: "12px 15px",
    borderBottom: "1px solid #e2e8f0",
    fontSize: "1rem",
    color: "#1e293b",
    textAlign: "left",
  },
  monthHeader: {
    backgroundColor: "#dbeafe",
    color: "#1e3a8a",
    fontWeight: "700",
    textAlign: "center",
  },
  viewLink: {
    color: "#2563eb",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.2s ease",
  },
};

const PatrakBhag2_2025 = () => {
  const monthRefs = months2025.reduce((acc, month) => {
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
          वर्ष 2025
        </p>
      </div>

      {/* Month Navigation */}
      <div style={styles.monthNav}>
        {months2025.map((m, i) => (
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
            {months2025.map((month, index) => {
              const monthData = patrakData2025.filter(item => item.month === month);
              if (monthData.length === 0) return null; // Skip months with no data
              return (
                <React.Fragment key={index}>
                  <tr ref={monthRefs[month]}>
                    <td colSpan="4" style={{ ...styles.td, ...styles.monthHeader }}>
                      {month}
                    </td>
                  </tr>
                  {monthData.map((item, i) => (
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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatrakBhag2_2025;











