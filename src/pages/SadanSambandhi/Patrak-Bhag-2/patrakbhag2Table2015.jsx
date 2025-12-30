import React, { useRef } from "react";
import { Link } from "react-router-dom";

// ----- 2015 Patrak Data -----
const patrakData2015 = [
  // 🗓 जनवरी
  { month: "जनवरी", number: "1", date: "19/01/2015", patrakNumber: "1", title: "चतुर्दश विधान सभा का पंचम् सत्र (दिनांक 18 फरवरी से 27 मार्च, 2015)" , pdfLink: "/misc/P2/p2-190115.pdf" },
  { month: "जनवरी", number: "2", date: "22/01/2015", patrakNumber: "2", title: "प्रश्नों को प्राप्त करने हेतु अधिकृत व्यक्ति की जानकारी" , pdfLink: "/misc/P2/p2-220115.pdf"},
  { month: "जनवरी", number: "3", date: "23/01/2015", patrakNumber: "3", title: "स्थगन प्रस्ताव, ध्यान आर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था" , pdfLink: "/misc/P2/p2-230115.pdf"},
  { month: "जनवरी", number: "4", date: "27/01/2015", patrakNumber: "4", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-270115.pdf"},

  // 🗓 फ़रवरी
  { month: "फ़रवरी", number: "5", date: "11/02/2015", patrakNumber: "5", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ" , pdfLink: "/misc/P2/p2-110215.pdf"},
  { month: "फ़रवरी", number: "6", date: "12/02/2015", patrakNumber: "6", title: "माननीय सदस्यों हेतु पृष्ठाधार सामग्री का वितरण", pdfLink: "/misc/P2/p2-120215.pdf" },
  { month: "फ़रवरी", number: "7", date: "16/02/2015", patrakNumber: "7", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , pdfLink: "/misc/P2/p2-160215-1.pdf"},
  { month: "फ़रवरी", number: "8", date: "16/02/2015", patrakNumber: "8", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-160215-2.pdf"},
  { month: "फ़रवरी", number: "9", date: "17/02/2015", patrakNumber: "9", title: "माननीय राज्यपाल का अभिभाषण" , pdfLink: "/misc/P2/p2-170215-1.pdf"},
  { month: "फ़रवरी", number: "10", date: "18/02/2015", patrakNumber: "10", title: "माननीय राज्यपाल का अभिभाषण" , pdfLink: "/misc/P2/p2-180215-1.pdf"},
  { month: "फ़रवरी", number: "11", date: "17/02/2015", patrakNumber: "11", title: "मध्यप्रदेश विधान सभा की सदन समिति का विधायक विश्राम गृह का स्थल निरीक्षण एवं माननीय सदस्यों से मौखिक चर्चा", pdfLink: "/misc/P2/p2-170215-2.pdf" },
  { month: "फ़रवरी", number: "12", date: "17/02/2015", patrakNumber: "12", title: "शुक्रवार, दिनांक 20 फरवरी, 2015 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-170215-3.pdf"},
  { month: "फ़रवरी", number: "13", date: "18/02/2015", patrakNumber: "13", title: "प्रदेश के विभिन्न उत्पादों का प्रदर्शन सह-विक्रय" , pdfLink: "/misc/P2/p2-180215-2.pdf"},
  { month: "फ़रवरी", number: "14", date: "19/02/2015", patrakNumber: "14", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का पंचम् प्रतिवेदन" , pdfLink: "/misc/P2/p2-190215.pdf"},
  { month: "फ़रवरी", number: "15", date: "20/02/2015", patrakNumber: "15", title: "मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-200215-1.pdff"},
  { month: "फ़रवरी", number: "16", date: "20/02/2015", patrakNumber: "16", title: "विश्वविद्यालयों की सभा (कोर्ट) के लिए विधान सभा के सदस्यों का निर्वाचन" , pdfLink: "/misc/P2/p2-200215-2.pdf"},
  { month: "फ़रवरी", number: "17", date: "20/02/2015", patrakNumber: "17", title: "विधान सभा के सत्रों में दैनिक कार्य सूची का वितरण परिवर्तित व्यवस्था", pdfLink: "/misc/P2/p2-200215-3.pdf" },
  { month: "फ़रवरी", number: "18", date: "23/02/2015", patrakNumber: "18", title: "मध्यप्रदेश विधान सभा की सदन समिति का विधायक विश्राम गृह का स्थल निरीक्षण एवं माननीय सदस्यों से मौखिक चर्चा" , pdfLink: "/misc/P2/p2-230215.pdf"},
  { month: "फ़रवरी", number: "19", date: "22/02/2015", patrakNumber: "19", title: "माननीय सदस्यों के लिए कम्प्यूटर प्रशिक्षण" , pdfLink: "/misc/P2/p2-220215.pdf"},
  { month: "फ़रवरी", number: "20", date: "24/02/2015", patrakNumber: "20", title: "वर्ष 2015-2016 के बजट साहित्य का वितरण", pdfLink: "/misc/P2/p2-240215-1.pdf" },
  { month: "फ़रवरी", number: "21", date: "24/02/2015", patrakNumber: "21", title: "बजट प्रस्तुतिकरण के दिन, प्रश्नोत्तर काल नहीं होना" , pdfLink: "/misc/P2/p2-240215-2.pdf"},
  { month: "फ़रवरी", number: "22", date: "24/02/2015", patrakNumber: "22", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-240215-3.pdf"},
  { month: "फ़रवरी", number: "23", date: "24/02/2015", patrakNumber: "23", title: "शुक्रवार, दिनांक 27 फरवरी, 2015 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-240215-4.pdf"},
  { month: "फ़रवरी", number: "24", date: "25/02/2015", patrakNumber: "24", title: "कटौती प्रस्ताव की सूचनाएं" , pdfLink: "/misc/P2/p2-250215.pdf"},
  { month: "फ़रवरी", number: "25", date: "24/02/2015", patrakNumber: "25", title: "विश्वविद्यालयों की सभा (कोर्ट) के लिए विधान सभा के 8-8 सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-240215-5.pdf" },
  { month: "फ़रवरी", number: "26", date: "26/02/2015", patrakNumber: "26", title: "विश्वविद्यालयों की सभा (कोर्ट) के लिए विधान सभा के 8-8 सदस्यों का निर्वाचन" , pdfLink: "/misc/P2/p2-260215.pdf"},
  // 🗓 मार्च, pdfLink: "https://example.com/pdf/1.pdf"
  { month: "मार्च", number: "27", date: "03/03/2015", patrakNumber: "27", title: "विश्वविद्यालयों की सभा (कोर्ट) के लिए विधान सभा के 8-8 सदस्यों का निर्वाचन" , pdfLink: "/misc/P2/p2-030315-1.pdf"},
  { month: "मार्च", number: "28", date: "03/03/2015", patrakNumber: "28", title: "फरवरी-मार्च, 2015 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-030315-2.pdf" },
  { month: "मार्च", number: "29", date: "13/03/2015", patrakNumber: "29", title: "मध्यप्रदेश विधानसभा के प्रक्रिया तथा कार्य संचालन सम्बन्धी नियमावली में संशोधन", pdfLink: "/misc/P2/p2-130315.pdf" },
  { month: "मार्च", number: "30", date: "16/03/2015", patrakNumber: "30", title: "चतुर्दश विधान सभा का षष्टम् सत्र (दिनांक 24 मार्च, 2015)" , pdfLink: "/misc/P2/p2-160315-1.pdf"},
  { month: "मार्च", number: "31", date: "16/03/2015", patrakNumber: "31", title: "फरवरी-मार्च, 2015 की स्थगित बैठकों हेतु प्राप्त प्रश्नों के संबंध में" , pdfLink: "/misc/P2/p2-160315-2.pdf"},
  { month: "मार्च", number: "32", date: "19/03/2015", patrakNumber: "32", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", pdfLink: "/misc/P2/p2-190315.pdf" },
  { month: "मार्च", number: "33", date: "20/03/2015", patrakNumber: "33", title: "मार्च, 2015 सत्र में सभा भवन आसन क्रम" , pdfLink: "/misc/P2/p2-200315.pdf"},
  { month: "मार्च", number: "34", date: "23/03/2015", patrakNumber: "34", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-230315-1.pdf"},
  { month: "मार्च", number: "35", date: "23/03/2015", patrakNumber: "35", title: "मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-230315-2.pdf"},
  { month: "मार्च", number: "36", date: "23/03/2015", patrakNumber: "36", title: "माननीय सदस्यों के कार्यालयीन उपयोगार्थ ई-मेल आईडी का निर्माण" , pdfLink: "/misc/P2/p2-230315-3.pdf"},
  { month: "मार्च", number: "37", date: "23/03/2015", patrakNumber: "37", title: "स्थायी आदेश में संशोधन" , pdfLink: "/misc/P2/p2-230315-4.pdf"},
  { month: "मार्च", number: "38", date: "24/03/2015", patrakNumber: "38", title: "स्थायी आदेश में संशोधन" , pdfLink: "/misc/P2/p2-240315-1.pdf"},
  { month: "मार्च", number: "39", date: "24/03/2015", patrakNumber: "39", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-240315-2.pdf"},
  { month: "मार्च", number: "40", date: "27/03/2015", patrakNumber: "40", title: "मार्च, 2015 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-270315.pdf"},
  { month: "मार्च", number: "41", date: "30/03/2015", patrakNumber: "41", title: "विधान सभा सदस्य के निधन की सूचना" , pdfLink: "/misc/P2/p2-310315.pdf"},

  // 🗓 अप्रैल
  { month: "अप्रैल", number: "42", date: "08/04/2015", patrakNumber: "42", title: "सभा समितियों का कार्यकाल" , pdfLink: "/misc/P2/p2-080415.pdf"},

  // 🗓 जून
  { month: "जून", number: "43", date: "16/06/2015", patrakNumber: "43", title: "स्थायी आदेश में संशोधन" , pdfLink: "/misc/P2/p2-160615.pdf"},
  { month: "जून", number: "44", date: "17/06/2015", patrakNumber: "44", title: "चतुर्दश विधान सभा का सप्तम् सत्र (दिनांक 20 जुलाई, 2015)" , pdfLink: "/misc/P2/p2-170615-1.pdf"},
  { month: "जून", number: "45", date: "17/06/2015", patrakNumber: "45", title: "म.प्र.विधान सभा के सदस्यों एवं पूर्व सदस्यों के वेतन/भत्तों हेतु समिति का गठन" , pdfLink: "/misc/P2/p2-170615-2.pdf"},
  { month: "जून", number: "46", date: "24/06/2015", patrakNumber: "46", title: "विधान सभा सदस्य के निधन की सूचना", pdfLink: "/misc/P2/p2-240615.pdf" },

  // 🗓 जुलाई
  { month: "जुलाई", number: "47", date: "01/07/2015", patrakNumber: "47", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-010715.pdf" },
  { month: "जुलाई", number: "48", date: "06/07/2015", patrakNumber: "48", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-060715.pdf" },
  { month: "जुलाई", number: "49", date: "14/07/2015", patrakNumber: "49", title: "जुलाई, 2015 सत्र में प्रश्नोत्तर सूची के मुद्रण एवं वितरण की व्यवस्था में परिवर्तन", pdfLink: "/misc/P2/p2-140715.pdf" },
  { month: "जुलाई", number: "50", date: "16/07/2015", patrakNumber: "50", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , pdfLink: "/misc/P2/p2-160715-1.pdf"},
  { month: "जुलाई", number: "51", date: "16/07/2015", patrakNumber: "51", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ" , pdfLink: "/misc/P2/p2-160715-2.pdf"},
  { month: "जुलाई", number: "52", date: "17/07/2015", patrakNumber: "52", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-170715.pdf"},
  { month: "जुलाई", number: "53", date: "20/07/2015", patrakNumber: "53", title: "मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-190715-1.pdf"},
  { month: "जुलाई", number: "54", date: "19/07/2015", patrakNumber: "54", title: "आसन क्रम का आवंटन" , pdfLink: "/misc/P2/p2-190715-2.pdf"},
  { month: "जुलाई", number: "55", date: "20/07/2015", patrakNumber: "55", title: "दिसम्बर, 2014 सत्र की अनुक्रमणिका पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-200715-1.pdf" },
  { month: "जुलाई", number: "56", date: "19/07/2015", patrakNumber: "56", title: "जुलाई, 2015 सत्र में ई-विधान मोबाईल एप्प का शुभारंभ" , pdfLink: "/misc/P2/p2-200715-2.pdf"},
  { month: "जुलाई", number: "57", date: "20/07/2015", patrakNumber: "57", title: "स्थायी आदेश में संशोधन" , pdfLink: "/misc/P2/p2-200715-3.pdf"},
  { month: "जुलाई", number: "58", date: "20/07/2015", patrakNumber: "58", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के अंतर्गत, उपचुनाव में निर्वाचित सदस्यों की ओर से प्राप्त जानकारी" , pdfLink: "/misc/P2/p2-200715-4.pdf"},
  { month: "जुलाई", number: "59", date: "21/07/2015", patrakNumber: "59", title: "शुक्रवार, दिनांक 24 जुलाई, 2015 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-210715-1.pdf"},
  { month: "जुलाई", number: "60", date: "21/07/2015", patrakNumber: "60", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-210715-2.pdf" },
  { month: "जुलाई", number: "61", date: "21/07/2015", patrakNumber: "61", title: "समितियों का निर्वाचन कार्यक्रम" , pdfLink: "/misc/P2/p2-210715-3.pdf"},
  { month: "जुलाई", number: "62", date: "21/07/2015", patrakNumber: "62", title: "तम्बाकू सेवन निषेध पर माननीय सदस्यों के लिये संवेदीकरण कार्यक्रम एवं पंचायत एवं ग्रामीण विकास विभाग के 03 पोर्टलों के उपयोग पर प्रशिक्षण कार्यक्रम" , pdfLink: "/misc/P2/p2-210715-4.pdf"},
  { month: "जुलाई", number: "63", date: "22/07/2015", patrakNumber: "63", title: "24 मार्च, 2015 विशेष सत्र की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-220715.pdf"},
  { month: "जुलाई", number: "64", date: "23/07/2015", patrakNumber: "64", title: "समितियों का निर्वाचन", pdfLink: "/misc/P2/p2-230715.pdf" },
  { month: "जुलाई", number: "65", date: "24/07/2015", patrakNumber: "65", title: "समितियों का निर्वाचन", pdfLink: "/misc/P2/p2-240715.pdf" },
  { month: "जुलाई", number: "66", date: "27/07/2015", patrakNumber: "66", title: "मध्यप्रदेश विधान सभा की लोक लेखा, प्राक्कलन, सरकारी उपक्रमों संबंधी, अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी और स्थानीय निकाय एवं पंचायतीराज लेखा समितियों के लिए सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-270715-1.pdf" },
  { month: "जुलाई", number: "67", date: "27/07/2015", patrakNumber: "67", title: "जुलाई, 2015 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-270715-2.pdf"},
  // 🗓 अगस्त
  { month: "अगस्त", number: "68", date: "12/08/2015", patrakNumber: "68", title: "नाम-निर्दिष्ट 12 समितियों का गठन", pdfLink: "/misc/P2/p2-120815.pdf" },
  { month: "अगस्त", number: "69", date: "18/08/2015", patrakNumber: "69", title: "माननीय सदस्यों के नामों में एकरूपता" , pdfLink: "/misc/P2/p2-180815.pdf"},
  { month: "अगस्त", number: "70", date: "25/08/2015", patrakNumber: "70", title: "सामान्य प्रयोजन समिति का गठन" , pdfLink: "/misc/P2/p2-250815.pdf"},
  { month: "अगस्त", number: "71", date: "27/08/2015", patrakNumber: "71", title: "श्री नारायण त्रिपाठी (मैहर) द्वारा विधान सभा की सदस्यता से त्याग-पत्र" , pdfLink: "/misc/P2/p2-270815.pdf"},
  { month: "अगस्त", number: "72", date: "28/08/2015", patrakNumber: "72", title: "श्री के.के. श्रीवास्तव (टीकमगढ़), सदस्य को बंदी बनाये जाने की सूचना" , pdfLink: "/misc/P2/p2-280815.pdf"},

  // 🗓 सितम्बर
  { month: "सितम्बर", number: "73", date: "08/09/2015", patrakNumber: "73", title: "डॉ. आर.के. दोगने (हरदा), सदस्य को बंदी बनाये जाने की सूचना" , pdfLink: "/misc/P2/p2-080915.pdf"},
  { month: "सितम्बर", number: "74", date: "22/09/2015", patrakNumber: "74", title: "श्री जालम सिंह पटेल (नरसिंहपुर), सदस्य को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-220915.pdf"},

  // 🗓 अक्टूबर
  { month: "अक्टूबर", number: "75", date: "05/10/2015", patrakNumber: "75", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के अधीन प्राप्त अर्जी पर अध्यक्ष, विधान सभा के आदेश की सूचना", pdfLink: "/misc/P2/p2--051015_1.pdf" },
  { month: "अक्टूबर", number: "76", date: "05/10/2015", patrakNumber: "76", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के अधीन प्राप्त अर्जी पर अध्यक्ष , विधान सभा के आदेश की सूचना" , pdfLink: "/misc/P2/p2--051015_2.pdf"},
  { month: "अक्टूबर", number: "77", date: "05/10/2015", patrakNumber: "77", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के अधीन प्राप्त अर्जी पर अध्यक्ष, विधान सभा के आदेश की सूचना" , pdfLink: "/misc/P2/p2-051015_3.pdf"},
  { month: "अक्टूबर", number: "78", date: "31/10/2015", patrakNumber: "78", title: "चतुर्दश विधान सभा का अष्टम् सत्र (दिनांक 5 नवम्बर, 2015)", pdfLink: "/misc/P2/p2-311015.pdf" },

  // 🗓 नवम्बर
  { month: "नवम्बर", number: "79", date: "02/11/2015", patrakNumber: "79", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-021115-1.pdf" },
  { month: "नवम्बर", number: "80", date: "03/11/2015", patrakNumber: "80", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-021115-2.pdf" },
  { month: "नवम्बर", number: "81", date: "02/11/2015", patrakNumber: "81", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ" , pdfLink: "/misc/P2/p2-031115-1.pdf"},
  { month: "नवम्बर", number: "82", date: "03/11/2015", patrakNumber: "82", title: "माननीय अध्यक्ष के कार्यालयीन कक्ष परिवर्तन की सूचना" , pdfLink: "/misc/P2/p2-031115-2.pdf"},
  { month: "नवम्बर", number: "83", date: "04/11/2015", patrakNumber: "83", title: "श्री नारायण त्रिपाठी विधान सभा का आसन रिक्त घोषित करना" , pdfLink: "/misc/P2/p2-041115-1.pdf"},
  { month: "नवम्बर", number: "84", date: "04/11/2015", patrakNumber: "84", title: "आचरण समिति के गठन की सूचना" , pdfLink: "/misc/P2/p2-041115-2.pdf"},
  { month: "नवम्बर", number: "85", date: "05/11/2015", patrakNumber: "85", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-051115.pdf"},
  { month: "नवम्बर", number: "86", date: "06/11/2015", patrakNumber: "86", title: "चतुर्दश विधान सभा का अष्टम् सत्र (दिनांक 7 दिसम्बर से 18 दिसम्बर, 2015)", pdfLink: "/misc/P2/p2-061115.pdf" },
  { month: "नवम्बर", number: "87", date: "18/11/2015", patrakNumber: "87", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था" , pdfLink: "/misc/P2/p2-181115.pdf"},
  { month: "नवम्बर", number: "88", date: "23/11/2015", patrakNumber: "88", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-231115.pdf" },
  { month: "नवम्बर", number: "89", date: "30/11/2015", patrakNumber: "89", title: "स्थाई आदेश में संशोधन", pdfLink: "/misc/P2/p2-301115.pdf" },
  // 🗓 दिसम्बर
  { month: "दिसम्बर", number: "90", date: "01/12/2015", patrakNumber: "90", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ" , pdfLink: "/misc/P2/p2-011215.pdf"},
  { month: "दिसम्बर", number: "91", date: "02/12/2015", patrakNumber: "91", title: "संकल्प" , pdfLink: "/misc/P2/p2-021215.pdf"},
  { month: "दिसम्बर", number: "92", date: "04/12/2015", patrakNumber: "92", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-041215.pdf"},
  { month: "दिसम्बर", number: "93", date: "06/12/2015", patrakNumber: "93", title: "सभा भवन आसन क्रम में परिवर्तन" , pdfLink: "/misc/P2/p2-061215-1.pdf"},
  { month: "दिसम्बर", number: "94", date: "06/12/2015", patrakNumber: "94", title: "मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-061215-2.pdf"},
  { month: "दिसम्बर", number: "95", date: "06/12/2015", patrakNumber: "95", title: "विधान सभा भवन में मीडिया से साक्षात्कार दिये जाने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-061215-3.pdf" },
  { month: "दिसम्बर", number: "96", date: "07/12/2015", patrakNumber: "96", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , pdfLink: "/misc/P2/p2-071215.pdf"},
  { month: "दिसम्बर", number: "97", date: "08/12/2015", patrakNumber: "97", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-081215-1.pdf" },
  { month: "दिसम्बर", number: "98", date: "08/12/2015", patrakNumber: "98", title: "नवम्बर, 2015 सत्र की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-081215-2.pdf"},
  { month: "दिसम्बर", number: "99", date: "08/12/2015", patrakNumber: "99", title: "निर्वाचन क्षेत्र क्रमांक 171, देवास से उप चुनाव में निर्वाचित सदस्य, श्रीमती गायत्री राजे पवार की ओर से प्राप्त जानकारी प्रकाशित विषयक", pdfLink: "/misc/P2/p2-081215-3.pdf" },
  { month: "दिसम्बर", number: "100", date: "08/12/2015", patrakNumber: "100", title: "शुक्रवार, दिनांक 11 दिसम्बर, 2015 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-081215-4.pdf"},
  { month: "दिसम्बर", number: "101", date: "09/12/2015", patrakNumber: "101", title: "प्रश्न के उत्तर में संशोधन" , pdfLink: "/misc/P2/p2-091215.pdf"},
  { month: "दिसम्बर", number: "102", date: "10/12/2015", patrakNumber: "102", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का अष्टम् प्रतिवेदन" , pdfLink: "/misc/P2/p2-101215.pdf"},
  { month: "दिसम्बर", number: "103", date: "11/12/2015", patrakNumber: "103", title: "माननीय सदस्यों की पेंटिंग/फोटोग्राफ्स की प्रदर्शनी" , pdfLink: "/misc/P2/p2-111215.pdf"},
  { month: "दिसम्बर", number: "104", date: "14/12/2015", patrakNumber: "104", title: "आगामी सत्र के लिये माननीय सदस्यों को प्रश्न प्रपत्रों का प्रदाय", pdfLink: "/misc/P2/p2-141215-1.pdf" },
  { month: "दिसम्बर", number: "105", date: "14/12/2015", patrakNumber: "105", title: "माननीय सदस्यों को वाई-फाई (Wi-Fi) सुविधा उपलब्ध कराये जाने विषयक" , pdfLink: "/misc/P2/p2-141215-2.pdf"},
  { month: "दिसम्बर", number: "106", date: "14/12/2015", patrakNumber: "106", title: "मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-141215-3.pdf"},
  { month: "दिसम्बर", number: "107", date: "14/12/2015", patrakNumber: "107", title: "कम्प्यूटर प्रशिक्षण केन्द्र का शुभारंभ" , pdfLink: "/misc/P2/p2-141215-4.pdf"},
  { month: "दिसम्बर", number: "108", date: "14/12/2015", patrakNumber: "108", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-141215-5.pdf"},
  { month: "दिसम्बर", number: "109", date: "14/12/2015", patrakNumber: "109", title: "सांस्कृतिक कार्य क्रम का आयोजन" , pdfLink: "/misc/P2/p2-141215-6.pdf"},
  { month: "दिसम्बर", number: "110", date: "15/12/2015", patrakNumber: "110", title: "शुक्रवार, दिनांक 18 दिसम्बर, 2015 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-151215-1.pdf" },
  { month: "दिसम्बर", number: "111", date: "15/12/2015", patrakNumber: "111", title: "माननीय विधायकों के लिये सांस्कृतिक संध्या का आयोजन" , pdfLink: "/misc/P2/p2-151215-2.pdf"},
  { month: "दिसम्बर", number: "112", date: "21/12/2015", patrakNumber: "112", title: "दिसम्बर, 2015 सत्र में पटल पर रखे गये, प्रत्यायोजित विधायी शक्ति के अधीन बनाये गये संविहित नियम तथा आदेश" , pdfLink: "/misc/P2/p2-211215.pdf"},
  { month: "दिसम्बर", number: "113", date: "30/12/2015", patrakNumber: "113", title: "अनुसूचित जाति एवं अनुसूचित जनजाति के व्यक्तियों को प्रदान किए गए पट्टों के क्रय-विक्रय की प्रक्रिया के संबंध में विचार हेतु समिति का गठन" , pdfLink: "/misc/P2/p2-291215.pdf"},

];

const months2015 = [
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

const PatrakBhag2_2015 = () => {
  const monthRefs = months2015.reduce((acc, month) => {
    acc[month] = useRef(null);
    return acc;
  }, {});

  const scrollToMonth = (month) => {
    monthRefs[month]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.headerContainer}>
        <Link
          to="/patrakbhag-02"
          style={styles.backButton}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.monthButtonHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.backButton)}
        >
          ⬅ वापस जाएँ
        </Link>
        <h1 style={styles.mainTitle}>पत्रक भाग - दो</h1>
        <p style={styles.subTitle}>वर्ष 2015 — सदन एवं समितियों सम्बन्धी सूचनाएं</p>
      </div>

      <div style={styles.monthNav}>
        {months2015.map((m, i) => (
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
            {months2015.map((month, index) => (
              <React.Fragment key={index}>
                <tr ref={monthRefs[month]}>
                  <td colSpan="4" style={{ ...styles.td, ...styles.monthHeader }}>
                    {month}
                  </td>
                </tr>
                {patrakData2015
                  .filter((item) => item.month === month)
                  .map((item, i) => (
                    <tr key={i}>
                      <td style={styles.td}>{item.number}</td>
                      <td style={styles.td}>{item.date}</td>
                      <td style={styles.td}>{item.patrakNumber}</td>
                      <td style={styles.td}>
                        {item.pdfLink ? (
                          <a href={item.pdfLink} target="_blank" rel="noopener noreferrer" style={{ color: "#1e40af", textDecoration: "underline" }}>
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

export default PatrakBhag2_2015;