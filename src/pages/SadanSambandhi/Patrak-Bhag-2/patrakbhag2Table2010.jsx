  import React, { useRef } from "react";
  import { Link } from "react-router-dom";

  const patrakData2010 = [
    // जनवरी
    { month: "जनवरी", date: "20/01/2010", number: 1, patrakNumber: 1, title: "त्रयोदश विधान सभा का पंचम सत्र (दिनांक 22 जनवरी से 26 मार्च, 2010)", pdfLink: "/misc/P2/p2-200110.pdf"},
    { month: "जनवरी", date: "29/01/2010", number: 2, patrakNumber: 2, title: "स्थगन प्रस्ताव, ध्यानाकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-290110.pdf" },

    // फरवरी
    { month: "फरवरी", date: "01/02/2010", number: 3, patrakNumber: 3, title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-010210.pdf" },
    { month: "फरवरी", date: "18/02/2010", number: 4, patrakNumber: 4, title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-180210.pdf" },
    { month: "फरवरी", date: "19/02/2010", number: 5, patrakNumber: 6, title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", pdfLink: "/misc/P2/p2-190210.pdf" },
    { month: "फरवरी", date: "21/02/2010", number: 6, patrakNumber: 7, title: "महामहिम राज्यपाल (श्री रामेश्वर ठाकुर) के अभिभाषण सम्बन्धी सूचना", pdfLink: "/misc/P2/p2-210210-1.pdf" },
    { month: "फरवरी", date: "21/02/2010", number: 7, patrakNumber: 8, title: "महामहिम राज्यपाल के अभिभाषण पर चर्चा की सूचना", pdfLink: "/misc/P2/p2-210210-2.pdf" },
    { month: "फरवरी", date: "22/02/2010", number: 8, patrakNumber: 5, title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-220210-1.pdf" },
    { month: "फरवरी", date: "22/02/2010", number: 9, patrakNumber: 9, title: "दैनिक भत्ते का अग्रिम", pdfLink: "/misc/P2/p2-220210-2.pdf" },
    { month: "फरवरी", date: "22/02/2010", number: 10, patrakNumber: 10, title: "महामहिम राज्यपाल के अभिभाषण पर संशोधन सम्बन्धी सूचना", pdfLink: "/misc/P2/p2-220210-3.pdf" },
    { month: "फरवरी", date: "22/02/2010", number: 11, patrakNumber: 11, title: "सदन की मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-220210-4.pdf" },
    { month: "फरवरी", date: "23/02/2010", number: 12, patrakNumber: 12, title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-230210-1.pdf" },
    { month: "फरवरी", date: "23/02/2010", number: 13, patrakNumber: 13, title: "शुक्रवार, दिनांक 26 फरवरी, 2010 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-230210-2.pdf" },
    { month: "फरवरी", date: "23/02/2010", number: 14, patrakNumber: 14, title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-230210-3.pdf" },
    { month: "फरवरी", date: "24/02/2010", number: 15, patrakNumber: 15, title: "दिनांक 25 फरवरी, 2010 को बजट प्रस्तुतिकरण होने के कारण प्रश्नोत्तर काल नहीं होने संबंधी सूचना", pdfLink: "/misc/P2/p2-240210-1.pdf" },
    { month: "फरवरी", date: "24/02/2010", number: 16, patrakNumber: 16, title: "वर्ष 2010-11 से संबंधित बजट साहित्य का वितरण", pdfLink: "/misc/P2/p2-240210-2.pdf" },
    { month: "फरवरी", date: "24/02/2010", number: 17, patrakNumber: 18, title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का चतुर्थ प्रतिवेदन", pdfLink: "/misc/P2/p2-240210-3.pdf" },
    { month: "फरवरी", date: "25/02/2010", number: 18, patrakNumber: 17, title: "कटौती प्रस्ताव की सूचनाएं", pdfLink: "/misc/P2/p2-250210.pdf" },

    // मार्च
    { month: "मार्च", date: "02/03/2010", number: 19, patrakNumber: 19, title: "फरवरी-मार्च, 2010 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-020310.pdf" },
    { month: "मार्च", date: "08/03/2010", number: 20, patrakNumber: 20, title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-080310-1.pdf" },
    { month: "मार्च", date: "08/03/2010", number: 21, patrakNumber: 21, title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-080310-2.pdf" },
    { month: "मार्च", date: "08/03/2010", number: 22, patrakNumber: 22, title: "लोक लेखा, प्राक्कलन, सरकारी उपक्रमों संबंधी एवं अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी समितियों के लिए क्रमश: 11-11-11 तथा 15 सदस्यों के निर्वाचन : कार्यक्रम", pdfLink: "/misc/P2/p2-080310-3.pdf" },
    { month: "मार्च", date: "08/03/2010", number: 23, patrakNumber: 23, title: "शुक्रवार, दिनांक 12 एवं 19 मार्च, 2010 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-080310-4.pdf" },
    { month: "मार्च", date: "08/03/2010", number: 24, patrakNumber: 24, title: "नवम्बर, 2009 सत्र की अनुक्रमणिका पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-080310-5.pdf" },
    { month: "मार्च", date: "09/03/2010", number: 25, patrakNumber: 25, title: "कार्य मंत्रणा समिति के प्रतिवेदन संबंधी पत्रक भाग-दो (क्रमांक 21) का शुद्धि पत्र", pdfLink: "/misc/P2/p2-090310.pdf" },
    { month: "मार्च", date: "10/03/2010", number: 26, patrakNumber: 26, title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का पंचम् प्रतिवेदन", pdfLink: "/misc/P2/p2-100310-1.pdf" },
    { month: "मार्च", date: "10/03/2010", number: 27, patrakNumber: 27, title: "समितियों का निर्वाचन : प्रस्तावित उम्मीदवार", pdfLink: "/misc/P2/p2-100310-2.pdf" },
    { month: "मार्च", date: "11/03/2010", number: 28, patrakNumber: 28, title: "समितियों का निर्वाचन : वैध उम्मीदवार", pdfLink: "/misc/P2/p2-110310-1.pdf" },
    { month: "मार्च", date: "11/03/2010", number: 29, patrakNumber: 29, title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का पंचम् (पुनरीक्षित) प्रतिवेदन", pdfLink: "/misc/P2/p2-110310-2.pdf" },
    { month: "मार्च", date: "12/03/2010", number: 30, patrakNumber: 30, title: "फरवरी-मार्च, 2010 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-120310.pdf" },
    { month: "मार्च", date: "18/03/2010", number: 31, patrakNumber: 31, title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का षष्टम् प्रतिवेदन", pdfLink: "/misc/P2/p2-180310.pdf" },
    { month: "मार्च", date: "21/03/2010", number: 32, patrakNumber: 32, title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-210310.pdf" },
    { month: "मार्च", date: "22/03/2010", number: 33, patrakNumber: 33, title: "शुक्रवार, दिनांक 26 मार्च, 2010 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-220310.pdf" },
    { month: "मार्च", date: "23/03/2010", number: 34, patrakNumber: 34, title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-230310.pdf" },
    { month: "मार्च", date: "24/03/2010", number: 35, patrakNumber: 35, title: "सदन की मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-240310.pdf" },
    { month: "मार्च", date: "25/03/2010", number: 36, patrakNumber: 36, title: "समितियों का निर्वाचन : घोषणा", pdfLink: "/misc/P2/p2-250310.pdf" },
    { month: "मार्च", date: "26/03/2010", number: 37, patrakNumber: 37, title: "मध्यप्रदेश विधान सभा के प्रक्रिया तथा कार्य संचालन सम्बन्धी नियमावली में संशोधन", pdfLink: "/misc/P2/p2-260310-1.pdf" },
    { month: "मार्च", date: "26/03/2010", number: 38, patrakNumber: 38, title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का सप्तम् प्रतिवेदन", pdfLink: "/misc/P2/p2-260310-2.pdf" },
    { month: "मार्च", date: "26/03/2010", number: 39, patrakNumber: 39, title: "नाम-निर्दिष्ट 11 समितियों का गठन", pdfLink: "/misc/P2/p2-260310-3.pdf" },
    { month: "मार्च", date: "26/03/2010", number: 40, patrakNumber: 40, title: "फरवरी-मार्च, 2010 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-260310-4.pdf" },

    // अप्रैल
    { month: "अप्रैल", date: "29/04/2010", number: 41, patrakNumber: 41, title: "पुस्तकालय समिति में सदस्य का मनोनयन", pdfLink: "/misc/P2/p2-290410.pdf" },
    { month: "अप्रैल", date: "30/04/2010", number: 42, patrakNumber: 42, title: "डॉ. कल्पना परूलेकर (महिदपुर), सदस्य को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-300410.pdf" },

    // मई
    { month: "मई", date: "04/05/2010", number: 43, patrakNumber: 43, title: "त्रयोदश विधान सभा का षष्टम् सत्र (दिनांक 11 से 14 मई, 2010)", pdfLink: "/misc/P2/p2-040510.pdf" },
    { month: "मई", date: "05/05/2010", number: 44, patrakNumber: 44, title: "सामान्य प्रयोजन समिति का गठन", pdfLink: "/misc/P2/p2-050510.pdf" },
    { month: "मई", date: "07/05/2010", number: 45, patrakNumber: 45, title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-070510-1.pdf" },
    { month: "मई", date: "07/05/2010", number: 46, patrakNumber: 46, title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", pdfLink: "/misc/P2/p2-070510-2.pdf" },
    { month: "मई", date: "10/05/2010", number: 47, patrakNumber: 47, title: "मुख्यमंत्री श्री शिवराज सिंह चौहान द्वारा 'स्वर्णिम मध्यप्रदेश के निर्माण' का संकल्प प्रस्तुत करने विषयक", pdfLink: "/misc/P2/p2-100510.pdf" },
    { month: "मई", date: "11/05/2010", number: 48, patrakNumber: 48, title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-110510-1.pdf" },
    { month: "मई", date: "11/05/2010", number: 49, patrakNumber: 50, title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-110510-2.pdf" },
    { month: "मई", date: "12/05/2010", number: 50, patrakNumber: 49, title: "सदन की मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-120510.pdf" },
    { month: "मई", date: "13/05/2010", number: 51, patrakNumber: 51, title: "\"मध्यप्रदेश विधान सभा में श्वेत पत्र (1956-2008)\" नामक ग्रंथ का माननीय सदस्यों को वितरण", pdfLink: "/misc/P2/p2-130510.pdf" },
    { month: "मई", date: "14/05/2010", number: 52, patrakNumber: 52, title: "मुख्यमंत्री श्री शिवराज सिंह चौहान द्वारा 'स्वर्णिम मध्यप्रदेश के निर्माण' का संकल्प प्रस्तुत करने विषयक (पुनरीक्षित)", pdfLink: "/misc/P2/p2-140510.pdf" },
    { month: "मई", date: "20/05/2010", number: 53, patrakNumber: 53, title: "श्री रामलाल मालवीय (घट्टिया), सदस्य को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-200510.pdf" },
    { month: "मई", date: "31/05/2010", number: 54, patrakNumber: 54, title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्य सभा के रिक्त स्थानों की पूर्ति हेतु द्विवार्षिक निर्वाचन अधिसूचना", pdfLink: "/misc/P2/p2-310510.pdf" },

    // जून
    { month: "जून", date: "16/06/2010", number: 55, patrakNumber: 55, title: "त्रयोदश विधान सभा का सप्तम् सत्र (दिनांक 19 से 30 जुलाई, 2010)", pdfLink: "/misc/P2/p2-160610.pdf" },
    { month: "जून", date: "26/06/2010", number: 56, patrakNumber: 56, title: "श्री नारायण प्रजापति (बण्डा), सदस्य को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-260610.pdf" },

    // जुलाई
    { month: "जुलाई", date: "01/07/2010", number: 57, patrakNumber: 57, title: "स्थगन प्रस्ताव, ध्यानाकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-010710-1.pdf" },
    { month: "जुलाई", date: "01/07/2010", number: 58, patrakNumber: 58, title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-010710-2.pdf" },
    { month: "जुलाई", date: "08/07/2010", number: 59, patrakNumber: 59, title: "डॉ. विजयलक्ष्मी साधो द्वारा विधान सभा की सदस्यता से त्याग-पत्र", pdfLink: "/misc/P2/p2-080710.pdf " },
    { month: "जुलाई", date: "15/07/2010", number: 60, patrakNumber: 60, title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-150710.pdf" },
    { month: "जुलाई", date: "16/07/2010", number: 61, patrakNumber: 61, title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-190710-1.pdf" },
    { month: "जुलाई", date: "16/07/2010", number: 62, patrakNumber: 62, title: "श्री कमल पटेल (हरदा), सदस्य को बंदी किये जाने की सूचना", pdfLink: "/misc/P2/p2-160710-1.pdf" },
    { month: "जुलाई", date: "16/07/2010", number: 63, patrakNumber: 63, title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", pdfLink: "/misc/P2/p2-160710-2.pdf" },
    { month: "जुलाई", date: "19/07/2010", number: 64, patrakNumber: 64, title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-190710-2.pdf" },
    { month: "जुलाई", date: "20/07/2010", number: 65, patrakNumber: 65, title: "मध्यप्रदेश विधान मण्डल यात्रा भत्ता नियम, 1957 में संशोधनों का अनुमोदन संबंधी संविहित संकल्प", pdfLink: "/misc/P2/p2-200710.pdf" },
    { month: "जुलाई", date: "21/07/2010", number: 66, patrakNumber: 66, title: "शुक्रवार, दिनांक 23 जुलाई, 2010 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-210710.pdf" },
    { month: "जुलाई", date: "22/07/2010", number: 67, patrakNumber: 68, title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का अष्टम् प्रतिवेदन", pdfLink: "/misc/P2/p2-220710.pdf" },
    { month: "जुलाई", date: "23/07/2010", number: 68, patrakNumber: 67, title: "फरवरी-मार्च, 2010 एवं मई, 2010 सत्र की अनुक्रमणिका पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-230710-1.pdf" },
    { month: "जुलाई", date: "23/07/2010", number: 69, patrakNumber: 69, title: "जुलाई, 2010 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-230710-2.pdf" },
    { month: "जुलाई", date: "25/07/2010", number: 70, patrakNumber: 70, title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-250710.pdf" },
    { month: "जुलाई", date: "26/07/2010", number: 71, patrakNumber: 71, title: "परम श्रद्धेय संत (मुनिश्री तरूण सागर जी महाराज) का उदबोधन कार्यक्रम", pdfLink: "/misc/P2/p2-260710.pdf" },
    { month: "जुलाई", date: "27/07/2010", number: 72, patrakNumber: 72, title: "सदन की मुद्रित कार्यवाहियों का वितरण", pdfLink: "" },
    { month: "जुलाई", date: "27/07/2010", number: 73, patrakNumber: 73, title: "शुक्रवार, दिनांक 30 जुलाई, 2010 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "" },
    { month: "जुलाई", date: "27/07/2010", number: 74, patrakNumber: 74, title: "लोक लेखा समिति में रिक्त 1 स्थान की पूर्ति हेतु निर्वाचन : कार्यक्रम", pdfLink: "/misc/P2/p2-270710-3.pdf" },
    { month: "जुलाई", date: "28/07/2010", number: 75, patrakNumber: 75, title: "समिति हेतु निर्वाचन : प्रस्तावित उम्मीदवार", pdfLink: "/misc/P2/p2-280710-1.pdf" },
    { month: "जुलाई", date: "28/07/2010", number: 76, patrakNumber: 76, title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का नवम् प्रतिवेदन", pdfLink: "/misc/P2/p2-280710-2.pdf" },
    { month: "जुलाई", date: "28/07/2010", number: 77, patrakNumber: 77, title: "समिति हेतु निर्वाचन : वैध उम्मीदवार", pdfLink: "/misc/P2/p2-280710-3.pdf" },
    { month: "जुलाई", date: "29/07/2010", number: 78, patrakNumber: 78, title: "समिति हेतु निर्वाचन : घोषणा", pdfLink: "/misc/P2/p2-290710.pdf" },

    // अगस्त
    { month: "अगस्त", date: "10/08/2010", number: 79, patrakNumber: 79, title: "पुस्तकालय समिति में सदस्यों का मनोनयन", pdfLink: "/misc/P2/p2-100810.pdf" },

    // सितम्बर
    { month: "सितम्बर", date: "28/09/2010", number: 80, patrakNumber: 80, title: "श्रीमती जमुना देवी, सदस्य (नेता प्रतिपक्ष) के निधन की सूचना", pdfLink: "/misc/P2/p2-280910.pdf" },

    // अक्टूबर
    { month: "अक्टूबर", date: "15/10/2010", number: 81, patrakNumber: 81, title: "त्रयोदश विधान सभा का अष्टम् सत्र  (दिनांक 22 नवम्बर से 2 दिसम्बर, 2010)", pdfLink: "/misc/P2/p2-151010.pdf" },
    { month: "अक्टूबर", date: "30/10/2010", number: 82, patrakNumber: 82, title: "श्री कमल पटेल (हरदा), सदस्य को रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-301010.pdf" },

    // नवम्बर
    { month: "नवम्बर", date: "01/11/2010", number: 83, patrakNumber: 83, title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-011110-1.pdf" },
    { month: "नवम्बर", date: "01/11/2010", number: 84, patrakNumber: 84, title: "सर्वश्री सत्यनारायण पटेल (देपालपुर) तथा तुलसीराम सिलावट (सांवेर), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-011110-2.pdf" },
    { month: "नवम्बर", date: "03/11/2010", number: 85, patrakNumber: 85, title: "स्थगन प्रस्ताव, ध्यानाकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-031110.pdf" },
    { month: "नवम्बर", date: "18/11/2010", number: 86, patrakNumber: 86, title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-181110.pdf" },
    { month: "नवम्बर", date: "19/11/2010", number: 87, patrakNumber: 88, title: "फैक्स से प्राप्त विधान सभा प्रश्नों की सूचनाएं ग्राह्य योग्य न होना", pdfLink: "/misc/P2/p2-191110-1.pdf" },
    { month: "नवम्बर", date: "19/11/2010", number: 88, patrakNumber: 89, title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", pdfLink: "/misc/P2/p2-191110-2.pdf" },
    { month: "नवम्बर", date: "21/11/2010", number: 89, patrakNumber: 90, title: "श्री नर्मदा प्रसाद प्रजापति (एन.पी.) (गोटेगांव), सदस्य को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-211110.pdf" },
    { month: "नवम्बर", date: "22/11/2010", number: 90, patrakNumber: 87, title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-221110-1.pdf" },
    { month: "नवम्बर", date: "22/11/2010", number: 91, patrakNumber: 91, title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-221110-2.pdf" },
    { month: "नवम्बर", date: "22/11/2010", number: 92, patrakNumber: 92, title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-221110-3.pdf" },
    { month: "नवम्बर", date: "23/11/2010", number: 93, patrakNumber: 93, title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-231110-1.pdf" },
    { month: "नवम्बर", date: "23/11/2010", number: 94, patrakNumber: 94, title: "शुक्रवार, दिनांक 26 नवम्बर, 2010 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-231110-2.pdf" },
    { month: "नवम्बर", date: "24/11/2010", number: 95, patrakNumber: 95, title: "सदन की मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-241110-1.pdf" },
    { month: "नवम्बर", date: "24/11/2010", number: 96, patrakNumber: 96, title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-241110-2.pdf" },
    { month: "नवम्बर", date: "24/11/2010", number: 97, patrakNumber: 97, title: "निरस्त बैठक के प्रश्नों को अगले दिन की कार्यवाही में मुद्रित किया जाना", pdfLink: "/misc/P2/p2-241110-3.pdf" },
    { month: "नवम्बर", date: "25/11/2010", number: 98, patrakNumber: 98, title: "जुलाई, 2010 सत्र की अनुक्रमणिका पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-251110-1.pdf" },
    { month: "नवम्बर", date: "25/11/2010", number: 99, patrakNumber: 99, title: "नवम्बर-दिसम्बर, 2010 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-251110-2.pdf" },

    // दिसम्बर
    { month: "दिसम्बर", date: "01/12/2010", number: 100, patrakNumber: 100, title: "श्रीमती सुलोचना रावत (जोबट), डॉ. प्रभुराम चौधरी (सांची), सर्वश्री तेजीलाल सैयाम (जुन्नारदेव), प्रताप ग्रेवाल (सरदारपुर), बृजराज सिंह (श्योपुर), सुखदेव पांसे (मुलताई), नारायण प्रजापति (बण्डा), लाखन सिंह यादव (भितरवार), प्रद्युम्न सिंह तोमर (ग्वालियर), जेवियर मेड़ा (झाबुआ), शिवनारायण मीना (चाचौडा), रणवीर सिंह जाटव (गोहद), सत्यनारायण पटेल (देपालपुर), सुरेश चौधरी (सबलगढ़), नर्मदा प्रसाद प्रजापति (गोटेगांव), डॉ. कल्पना परूलेकर (महिदपुर), सर्वश्री यादवेन्द्र सिंह (टीकमगढ़), पांचीलाल मेडा (धरमपुरी), नारायण सिंह पट्टा (बिछिया), विजेन्द्र सिंह मलाहेड़ा (मनासा), राजवर्धन सिंह दत्तीगांव (बदनावर), डॉ. गोविन्द सिंह (लहार), सर्वश्री गोविन्द सिंह राजपूत (सुरखी), बृजेन्द्र सिंह राठौर (पृथ्वीपुर), के.पी. सिंह (पिछोर), हुकुम सिंह कराड़ा (शाजापुर), उमंग सिघार (गंधवानी), वीरसिंह भूरिया (थांदला), डॉ. निशिथ पटेल (बहोरीबंद), सर्वश्री श्रीकांत दुबे (पन्ना), हेमराज कल्पोनी (राजगढ़), कुंवर विक्रम सिंह (राजनगर), अजय सिंह (चुरहट) तथा चौधरी राकेश सिंह चतुर्वेदी (भिण्ड), सदस्यगण को बंदी एवं रिहा किये जाने की सूचनाएं", pdfLink: "/misc/P2/p2-011210.pdf" },
    { month: "दिसम्बर", date: "27/12/2010", number: 101, patrakNumber: 101, title: "श्री प्रद्युम्न सिंह तोमर (ग्वालियर), सदस्य को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-271210.pdf" }
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

// ---------------------- Component ----------------------
const PatrakBhag2_2010 = () => {
  const monthRefs = {
    जनवरी: useRef(null),
    फरवरी: useRef(null),
    मार्च: useRef(null),
    अप्रैल: useRef(null),
    मई: useRef(null),
    जून: useRef(null),
    जुलाई: useRef(null),
    अगस्त: useRef(null),
    सितम्बर: useRef(null),
    अक्टूबर: useRef(null),
    नवम्बर: useRef(null),
  };

  const scrollToMonth = (month) => {
    monthRefs[month]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const months = Object.keys(monthRefs);

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
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#1e3a8a";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.transform = "none";
          }}
        >
          ⬅ वापस जाएँ
        </Link>
        <h1 style={styles.mainTitle}>पत्रक भाग - दो</h1>
        <p style={styles.subTitle}>वर्ष 2010 सदन एवं समितियों सम्बन्धी सूचनाएं</p>
      </div>

      {/* Month Navigation */}
      <div style={styles.monthNav}>
        {months.map((m, i) => (
          <button
            key={i}
            style={styles.monthButton}
            onClick={() => scrollToMonth(m)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = styles.monthButtonHover.backgroundColor;
              e.currentTarget.style.color = styles.monthButtonHover.color;
              e.currentTarget.style.boxShadow = styles.monthButtonHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = styles.monthButton.backgroundColor;
              e.currentTarget.style.color = styles.monthButton.color;
              e.currentTarget.style.boxShadow = "none";
            }}
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
              <th style={styles.th}>क्रमांक</th>
              <th style={styles.th}>जारी दिनांक</th>
              <th style={styles.th}>माह</th>
              <th style={styles.th}>पत्रक क्रमांक</th>
              <th style={styles.th}>विषय</th>

            </tr>
          </thead>
          <tbody>
            {months.map((month, index) => (
              <React.Fragment key={index}>
                <tr ref={monthRefs[month]}>
                  <td colSpan="5" style={{ ...styles.td, ...styles.monthHeader }}>
                    {month}
                  </td>
                </tr>
                {patrakData2010
                  .filter((item) => item.month === month)
                  .map((item, i) => (
                    <tr key={i}>
                      <td style={styles.td}>{item.number}</td>
                      <td style={styles.td}>{item.date}</td>
                      <td style={styles.td}>{item.month}</td>
                      <td style={styles.td}>{item.patrakNumber || "-"}</td> {/* पत्रक क्रमांक */}
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

export default PatrakBhag2_2010;






  