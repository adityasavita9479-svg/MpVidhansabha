
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// ----- 2016 Patrak Data -----
const patrakData2018 = [
  // 🗓 जनवरी
  { month: "जनवरी", number: "1", date: "22/01/2018", patrakNumber: "1", title: "चतुर्दश विधान सभा का षोड़श सत्र (दिनांक 26 फरवरी से 28 मार्च, 2018)"  , pdfLink: "/misc/P2/p2-220118-1.pdf"},
  { month: "जनवरी", number: "2", date: "22/01/2018", patrakNumber: "2", title: "निर्वाचन क्षेत्र क्रमांक-210, राऊ से निर्वाचित सदस्य श्री जितू पटवारी को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-220118-2.pdf"},

  // 🗓 फ़रवरी
  { month: "फ़रवरी", number: "3", date: "01/02/2018", patrakNumber: "3", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था" , pdfLink: "/misc/P2/p2-010218-1.pdf"},
  { month: "फ़रवरी", number: "4", date: "05/02/2018", patrakNumber: "4", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-050218-1.pdf"},
  { month: "फ़रवरी", number: "5", date: "19/02/2018", patrakNumber: "5", title: "समितियों में रिक्त हुए स्थानों की सूचना" , pdfLink: "/misc/P2/p2-190218-1.pdf"},
  { month: "फ़रवरी", number: "6", date: "21/02/2018", patrakNumber: "6", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ" , pdfLink: "/misc/P2/p2-210218-1.pdf"},
  { month: "फ़रवरी", number: "7", date: "22/02/2018", patrakNumber: "7", title: "पत्रकार दीर्घा सलाहकार समिति" , pdfLink: "/misc/P2/p2-220218-1.pdf"},
  { month: "फ़रवरी", number: "8", date: "23/02/2018", patrakNumber: "8", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-230218-1.pdf" },
  { month: "फ़रवरी", number: "9", date: "23/02/2018", patrakNumber: "9", title: "सत्रकाल में दीर्घा प्रवेश-पत्र व्यवस्था" , pdfLink: "/misc/P2/p2-230218-2.pdf"},
  { month: "फ़रवरी", number: "10", date: "24/02/2018", patrakNumber: "10", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-240218-1.pdf"},
  { month: "फ़रवरी", number: "11", date: "24/02/2018", patrakNumber: "11", title: "वन अधिकार पत्रों / पट्टों से संबंधित जानकारी 'जनजातीय कार्य विभाग' से पूछने विषयक" , pdfLink: "/misc/P2/p2-240218-2.pdf"},
  { month: "फ़रवरी", number: "12", date: "25/02/2018", patrakNumber: "12", title: "माननीय राज्यपाल का अभिभाषण" , pdfLink: "/misc/P2/p2-250218-1.pdf"},
  { month: "फ़रवरी", number: "13", date: "25/02/2018", patrakNumber: "13", title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-250218-2.pdf" },
  { month: "फ़रवरी", number: "14", date: "26/02/2018", patrakNumber: "14", title: "माननीय राज्यपाल के अभिभाषण पर कृतज्ञता ज्ञापन प्रस्ताव पर संशोधन संबंधी सूचना" , pdfLink: "/misc/P2/p2-260218-1.pdf"},
  { month: "फ़रवरी", number: "15", date: "27/02/2018", patrakNumber: "15", title: "वर्ष 2018-2019 के बजट साहित्य का वितरण", pdfLink: "/misc/P2/p2-270218-1.pdf" },
  { month: "फ़रवरी", number: "16", date: "27/02/2018", patrakNumber: "16", title: "वर्ष 2018-19 का आम बजट सदन में प्रस्तुत होने के कारण उक्त दिनांक को प्रश्नकाल नहीं होने संबंधी सूचना", pdfLink: "/misc/P2/p2-270218-2.pdf" },
  { month: "फ़रवरी", number: "17", date: "28/02/2018", patrakNumber: "17", title: "कटौती प्रस्ताव की सूचनाएं" , pdfLink: "/misc/P2/p2-280218-1.pdf"},

  // 🗓 मार्च
  { month: "मार्च", number: "18", date: "01/03/2018", patrakNumber: "18", title: "शुक्रवार, दिनांक 9 मार्च, 2018 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-010318-1.pdf" },
  { month: "मार्च", number: "19", date: "05/03/2018", patrakNumber: "19", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्य सभा के रिक्त स्थानों की पूर्ति हेतु द्विवार्षिक निर्वाचन", pdfLink: "/misc/P2/p2-050318-1.pdf" },
  { month: "मार्च", number: "20", date: "07/03/2018", patrakNumber: "20", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-070318-1.pdf"},
  { month: "मार्च", number: "21", date: "07/03/2018", patrakNumber: "21", title: "सभा भवन आसन क्रम आवंटित करने की सूचना" , pdfLink: "/misc/P2/p2-070318-2.pdf"},
  { month: "मार्च", number: "22", date: "08/03/2018", patrakNumber: "22", title: "पत्रकार दीर्घा सलाहकार समिति में रिक्त एक स्थान की पूर्ति" , pdfLink: "/misc/P2/p2-080318-1.pdf"},
  { month: "मार्च", number: "23", date: "08/03/2018", patrakNumber: "23", title: "शुक्रवार, दिनांक 9 मार्च, 2018 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-080318-2.pdf"},
  { month: "मार्च", number: "24", date: "08/03/2018", patrakNumber: "24", title: "सभा भवन आसन क्रम में परिवर्तन की सूचना", pdfLink: "/misc/P2/p2-080318-3.pdf" },
  { month: "मार्च", number: "25", date: "09/03/2018", patrakNumber: "25", title: "उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-090318-1.pdf"},
  { month: "मार्च", number: "26", date: "12/03/2018", patrakNumber: "26", title: "माननीय सदस्यों के लिये योग प्रशिक्षण कार्यक्रम" , pdfLink: "/misc/P2/p2-120318-1.pdf"},
  { month: "मार्च", number: "27", date: "12/03/2018", patrakNumber: "27", title: "शुक्रवार, दिनांक 16 मार्च, 2018 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-120318-2.pdf"},
  { month: "मार्च", number: "28", date: "12/03/2018", patrakNumber: "28", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-120318-3.pdf"},
  { month: "मार्च", number: "29", date: "13/03/2018", patrakNumber: "29", title: "प्रदेश के विभिन्न उत्पादों का प्रदर्शन सह - विक्रय" , pdfLink: "/misc/P2/p2-130318-1.pdf"},
  { month: "मार्च", number: "30", date: "14/03/2018", patrakNumber: "30", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-140318-1.pdf" },
  { month: "मार्च", number: "31", date: "15/03/2018", patrakNumber: "31", title: "मध्यप्रदेश विधान सभा के प्रक्रिया तथा कार्य संचालन सम्बन्धी नियमावली में संशोधन" , pdfLink: "/misc/P2/p2-150318-1.pdf"},
  { month: "मार्च", number: "32", date: "15/03/2018", patrakNumber: "32", title: "शुक्रवार, दिनांक 16 मार्च, 2018 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-150318-2.pdf" },
  { month: "मार्च", number: "33", date: "15/03/2018", patrakNumber: "33", title: "दिनांक 16 मार्च, 2018 को उठाई जाने वाली नियम-52 के अंतर्गत आधे घण्टे की चर्चा" , pdfLink: "/misc/P2/p2-150318-3.pdf"},
  { month: "मार्च", number: "34", date: "15/03/2018", patrakNumber: "34", title: "समितियों में रिक्त एक-एक स्थान की पूर्ति का निर्वाचन कार्यक्रम" , pdfLink: "/misc/P2/p2-150318-4.pdf"},
  { month: "मार्च", number: "35", date: "16/03/2018", patrakNumber: "35", title: "लोक लेखा, सरकारी उपक्रमों संबंधी तथा अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी समितियों में रिक्त एक-एक स्थान की पूर्ति हेतु एक-एक सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-160318-1.pdf" },
  { month: "मार्च", number: "36", date: "20/03/2018", patrakNumber: "36", title: "लोक लेखा, सरकारी उपक्रमों संबंधी तथा अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी समितियों में रिक्त एक-एक स्थान की पूर्ति हेतु एक-एक सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-200318-1.pdf" },
  { month: "मार्च", number: "37", date: "21/03/2018", patrakNumber: "37", title: "शुक्रवार, दिनांक 23 मार्च, 2018 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-210318-1.pdf" },
  { month: "मार्च", number: "38", date: "22/03/2018", patrakNumber: "38", title: "लोक लेखा, सरकारी उपक्रमों संबंधी तथा अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी समितियों में रिक्त एक-एक स्थान की पूर्ति हेतु निर्वाचन" , pdfLink: "/misc/P2/p2-220318-1.pdf"},
  { month: "मार्च", number: "39", date: "22/03/2018", patrakNumber: "39", title: "मध्यप्रदेश विधान सभा के प्रक्रिया तथा कार्य संचालन सम्बन्धी नियमावली में संशोधन" , pdfLink: "/misc/P2/p2-220318-2.pdf"},
  { month: "मार्च", number: "40", date: "28/03/2018", patrakNumber: "40", title: "फरवरी-मार्च, 2018 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-280318-1.pdf"},
  // 🗓 अप्रैल
  { month: "अप्रैल", number: "41", date: "02/04/2018", patrakNumber: "41", title: "फरवरी-मार्च, 2018 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-020418-1.pdf"},
  { month: "अप्रैल", number: "42", date: "03/04/2018", patrakNumber: "42", title: "निर्वाचन क्षेत्र क्रमांक-110, परसवाड़ा से निर्वाचित सदस्य श्री मधु भगत को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-030418-1.pdf"},
  { month: "अप्रैल", number: "43", date: "05/04/2018", patrakNumber: "43", title: "विधान सभा समितियों के कार्यकाल में वृद्धि विषयक", pdfLink: "/misc/P2/p2-050418-1.pdf" },
  { month: "अप्रैल", number: "44", date: "25/04/2018", patrakNumber: "44", title: "निर्वाचन क्षेत्र क्रमांक-210, राऊ से निर्वाचित सदस्य श्री जितू पटवारी को बंदी किये जाने की सूचना", pdfLink: "/misc/P2/p2-250418-1.pdf" },

  // 🗓 मई
  { month: "मई", number: "45", date: "25/05/2018", patrakNumber: "45", title: "चतुर्दश विधान सभा का सप्तदश सत्र (दिनांक 25 जून से 29 जून, 2018)", pdfLink: "https://example.com/pdf/1.pdf" },

  // 🗓 जून
  { month: "जून", number: "46", date: "01/06/2018", patrakNumber: "46", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था" , pdfLink: "/misc/P2/p2-010618-1.pdf"},
  { month: "जून", number: "47", date: "04/06/2018", patrakNumber: "47", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-040618-1.pdf"},
  { month: "जून", number: "48", date: "08/06/2018", patrakNumber: "48", title: "निर्वाचन क्षेत्र क्रमांक-210, राऊ से निर्वाचित सदस्य श्री जितू पटवारी को रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-080618-1.pdf" },
  { month: "जून", number: "49", date: "21/06/2018", patrakNumber: "49", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", pdfLink: "/misc/P2/p2-210618-1.pdf" },
  { month: "जून", number: "50", date: "21/06/2018", patrakNumber: "50", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , pdfLink: "/misc/P2/p2-210618-2.pdf"},
  { month: "जून", number: "51", date: "21/06/2018", patrakNumber: "51", title: "सत्रकाल में दीर्घा प्रवेश-पत्र व्यवस्था" , pdfLink: "/misc/P2/p2-210618-3.pdf"},
  { month: "जून", number: "52", date: "22/06/2018", patrakNumber: "52", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-220618-1.pdf"},
  { month: "जून", number: "53", date: "22/06/2018", patrakNumber: "53", title: "चतुर्दश विधान सभा के माननीय सदस्यों का समूह छायांकन" , pdfLink: "/misc/P2/p2-220618-2.pdf"},
  { month: "जून", number: "54", date: "24/06/2018", patrakNumber: "54", title: "प्रश्न के उत्तर में संशोधन" , pdfLink: "/misc/P2/p2-240618-1.pdf"},
  { month: "जून", number: "55", date: "25/06/2018", patrakNumber: "55", title: "मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-250618-1.pdf"},
  { month: "जून", number: "56", date: "25/06/2018", patrakNumber: "56", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-250618-2.pdf"},
  { month: "जून", number: "57", date: "25/06/2018", patrakNumber: "57", title: "माननीय सदस्यों के लिये सांस्कृतिक कार्यक्रम" , pdfLink: "/misc/P2/p2-250618-3.pdf"},
  { month: "जून", number: "58", date: "25/06/2018", patrakNumber: "58", title: "संकल्प : जबलपुर में विद्यमान 'डुमना विमानतल' के नाम को परिवर्तित कर 'वीरांगना रानी दुर्गावती विमानतल' किये जाने संबंधी" , pdfLink: "/misc/P2/p2-250618-4.pdf"},
  { month: "जून", number: "59", date: "26/06/2018", patrakNumber: "59", title: "उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-260618-1.pdf"},
  { month: "जून", number: "60", date: "26/06/2018", patrakNumber: "60", title: "माननीय सदस्यों के लिए सांस्कृतिक कार्यक्रम", pdfLink: "/misc/P2/p2-260618-2.pdf" },
  // 🗓 जुलाई
  { month: "जुलाई", number: "61", date: "05/07/2018", patrakNumber: "61", title: "जून, 2018 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-050718-1.pdf"},

  // 🗓 अगस्त
  { month: "अगस्त", number: "62", date: "13/08/2018", patrakNumber: "62", title: "निर्वाचन क्षेत्र क्रमांक-88, पुष्पराजगढ़ (अ.ज.जा.) से निर्वाचित सदस्य श्री फुन्देलाल सिंह मार्को को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-130818-1.pdf" },
  { month: "अगस्त", number: "63", date: "31/08/2018", patrakNumber: "63", title: "समितियों के मुद्रित प्रतिवेदनों के वितरण संबंधी", pdfLink: "/misc/P2/p2-310818-1.pdf" },

  // 🗓 सितम्बर
  { month: "सितम्बर", number: "64", date: "06/09/2018", patrakNumber: "64", title: "निर्वाचन क्षेत्र क्रमांक-38, देवरी से निर्वाचित सदस्य श्री हर्ष यादव को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-060918-1.pdf"},
  { month: "सितम्बर", number: "65", date: "06/09/2018", patrakNumber: "65", title: "निर्वाचन क्षेत्र क्रमांक-63, सतना से निर्वाचित सदस्य श्री शंकरलाल तिवारी को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-060918-2.pdf" },
  { month: "सितम्बर", number: "66", date: "11/09/2018", patrakNumber: "66", title: "निर्वाचन क्षेत्र क्रमांक-135, हरदा से निर्वाचित सदस्य डॉ. रामकिशोर दोगने को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-110918-1.pdf"},

  // 🗓 नवम्बर
  { month: "नवम्बर", number: "67", date: "19/11/2018", patrakNumber: "67", title: "निर्वाचन क्षेत्र क्रमांक-7, दिमनी से निर्वाचित सदस्य श्री बलवीर सिंह डण्डौतिया को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-191118-1.pdf"},

  // 🗓 दिसम्बर
  { month: "दिसम्बर", number: "68", date: "24/12/2018", patrakNumber: "68", title: "पंचदश विधान सभा का प्रथम सत्र (दिनांक 7 जनवरी से 11 जनवरी, 2019)" , pdfLink: "/misc/P2/p2-241218-1.pdf"},

];

const months2018 = [
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

const PatrakBhag2_2018 = () => {
  const monthRefs = months2018.reduce((acc, month) => {
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
        <p style={styles.subTitle}>सदन एवं समितियों सम्बन्धी सूचनाएं

          वर्ष 2018

        </p>
      </div>

      {/* Month Navigation */}
      <div style={styles.monthNav}>
        {months2018.map((m, i) => (
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
            {months2018.map((month, index) => (
              <React.Fragment key={index}>
                <tr ref={monthRefs[month]}>
                  <td colSpan="4" style={{ ...styles.td, ...styles.monthHeader }}>
                    {month}
                  </td>
                </tr>
                {patrakData2018
                  .filter((item) => item.month === month)
                  .map((item, i) => (
                    <tr key={i}>
                      <td style={styles.td}>{item.number}</td>
                      <td style={styles.td}>{item.date}</td>
                      <td style={styles.td}>{item.patrakNumber || "-"}</td>
                      <td style={styles.td}>
                        {item.pdfLink ? (
                          <a
                            href={item.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#1e40af", textDecoration: "underline" }}
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
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

export default PatrakBhag2_2018;
