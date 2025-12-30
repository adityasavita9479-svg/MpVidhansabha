import React, { useRef } from "react";
import { Link } from "react-router-dom";

// ----- 2016 Patrak Data -----
const patrakData2016 = [
  // 🗓 जनवरी
  { month: "जनवरी", number: "1", date: "14/01/2016", patrakNumber: "1", title: "विधायक विश्राम गृह परिसर में मध्‍यप्रदेश विधान सभा के नवनिर्मित अतिथि गृह का लोकार्पण समारोह"  , pdfLink: "/misc/P2/p2-140116.pdf"},
  { month: "जनवरी", number: "2", date: "18/01/2016", patrakNumber: "2", title: "चतुर्दश विधान सभा का दशम् सत्र (दिनांक 23 फरवरी से 1 अप्रैल, 2016)", pdfLink: "/misc/P2/p2-180116.pdf" },

  // 🗓 फरवरी
  { month: "फ़रवरी", number: "3", date: "01/02/2016", patrakNumber: "3", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-010216.pdf"},
  { month: "फ़रवरी", number: "4", date: "03/02/2016", patrakNumber: "4", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-030216.pdf" },
  { month: "फ़रवरी", number: "5", date: "08/02/2016", patrakNumber: "5", title: "माननीय सदस्यों की पेंटिंग/फोटोग्राफ्स की प्रदर्शनी", pdfLink: "/misc/P2/p2-080216.pdf" },
  { month: "फ़रवरी", number: "6", date: "16/02/2016", patrakNumber: "6", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", pdfLink: "/misc/P2/p2-160216.pdf" },
  { month: "फ़रवरी", number: "7", date: "18/02/2016", patrakNumber: "7", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-180216.pdf" },
  { month: "फ़रवरी", number: "8", date: "19/02/2016", patrakNumber: "8", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , pdfLink: "/misc/P2/p2-190216.pdf"},
  { month: "फ़रवरी", number: "9", date: "22/02/2016", patrakNumber: "9", title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-220216-1.pdf" },
  { month: "फ़रवरी", number: "10", date: "22/02/2016", patrakNumber: "10", title: "माननीय राज्यपाल का अभिभाषण" , pdfLink: "/misc/P2/p2-220216-2.pdf"},
  { month: "फ़रवरी", number: "11", date: "22/02/2016", patrakNumber: "11", title: "बजट प्रक्रिया पर कार्यशाला", pdfLink: "/misc/P2/p2-220216-3.pdf" },
  { month: "फ़रवरी", number: "12", date: "23/02/2016", patrakNumber: "12", title: "माननीय राज्यपाल का अभिभाषण" , pdfLink: "/misc/P2/p2-230216.pdf"},
  { month: "फ़रवरी", number: "13", date: "23/02/2016", patrakNumber: "13", title: "शुक्रवार, दिनांक 26 फ़रवरी, 2016 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-230216-2.pdf"},
  { month: "फ़रवरी", number: "14", date: "23/02/2016", patrakNumber: "14", title: "निर्वाचन क्षेत्र क्रमांक 65, मैहर से उप चुनाव में निर्वाचित सदस्य, श्री नारायण त्रिपाठी की ओर से प्राप्त जानकारी प्रकाशित विषयक", pdfLink: "/misc/P2/p2-230216-3.pdf" },
  { month: "फ़रवरी", number: "15", date: "24/02/2016", patrakNumber: "15", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-240216.pdf" },
  { month: "फ़रवरी", number: "16", date: "25/02/2016", patrakNumber: "16", title: "वर्ष 2016-2017 के बजट साहित्य का वितरण" , pdfLink: "/misc/P2/p2-250216-1.pdf"},
  { month: "फ़रवरी", number: "17", date: "25/02/2016", patrakNumber: "17", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का नवम् प्रतिवेदन" , pdfLink: "/misc/P2/p2-250216-2.pdf"},
  { month: "फ़रवरी", number: "18", date: "25/02/2016", patrakNumber: "18", title: "बजट प्रस्तुतिकरण के दिन, प्रश्नोत्तर काल नहीं होना" , pdfLink: "/misc/P2/p2-250216-3.pdf"},
  { month: "फ़रवरी", number: "19", date: "26/02/2016", patrakNumber: "19", title: "कटौती प्रस्ताव की सूचनाएं" , pdfLink: "/misc/P2/p2-260216.pdf"},
  // 🗓 मार्च
  { month: "मार्च", number: "20", date: "01/03/2016", patrakNumber: "20", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-010316.pdf"},
  { month: "मार्च", number: "21", date: "02/03/2016", patrakNumber: "21", title: "शुक्रवार, दिनांक 4 मार्च, 2016 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-020316.pdf" },
  { month: "मार्च", number: "22", date: "03/03/2016", patrakNumber: "22", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का दशम् प्रतिवेदन" , pdfLink: "/misc/P2/p2-030316.pdf"},
  { month: "मार्च", number: "23", date: "08/03/2016", patrakNumber: "23", title: "मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-080316-1.pdf" },
  { month: "मार्च", number: "24", date: "08/03/2016", patrakNumber: "24", title: "शुक्रवार, दिनांक 26 फ़रवरी, 2016 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-080316-2.pdf" },
  { month: "मार्च", number: "25", date: "09/03/2016", patrakNumber: "25", title: "उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-090316-1.pdf"},
  { month: "मार्च", number: "26", date: "09/03/2016", patrakNumber: "26", title: "माननीय सदस्यों को ऑनलाईन प्रश्न प्रक्रिया पर प्रशिक्षण", pdfLink: "/misc/P2/p2-090316-2.pdf" },
  { month: "मार्च", number: "27", date: "09/03/2016", patrakNumber: "27", title: "समितियों का निर्वाचन कार्यक्रम" , pdfLink: "/misc/P2/p2-090316-3.pdf"},
  { month: "मार्च", number: "28", date: "10/03/2016", patrakNumber: "28", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-100316-1.pdf" },
  { month: "मार्च", number: "29", date: "10/03/2016", patrakNumber: "29", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का दशम् प्रतिवेदन" , pdfLink: "/misc/P2/p2-100316-2.pdf"},
  { month: "मार्च", number: "30", date: "10/03/2016", patrakNumber: "30", title: "मध्यप्रदेश विधान सभा के प्रक्रिया तथा कार्य संचालन सम्बन्धी नियमावली में संशोधन" , pdfLink: "/misc/P2/p2-100316-3.pdf"},
  { month: "मार्च", number: "31", date: "10/03/2016", patrakNumber: "31", title: "फरवरी-अप्रैल, 2016 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-100316-4.pdf"},
  { month: "मार्च", number: "32", date: "10/03/2016", patrakNumber: "32", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का एकादश प्रतिवेदन" , pdfLink: "/misc/P2/p2-100316-5.pdf"},
  { month: "मार्च", number: "33", date: "11/03/2016", patrakNumber: "33", title: "समितियों का निर्वाचन" , pdfLink: "/misc/P2/p2-110316-1.pdf"},
  { month: "मार्च", number: "34", date: "11/03/2016", patrakNumber: "34", title: "सामाजिक समस्या के समाधान हेतु समिति का गठन", pdfLink: "/misc/P2/p2-110316-2.pdf" },
  { month: "मार्च", number: "35", date: "11/03/2016", patrakNumber: "35", title: "सदन की बैठकों के समय में परिवर्तन", pdfLink: "/misc/P2/p2-110316-3.pdf" },
  { month: "मार्च", number: "36", date: "13/03/2016", patrakNumber: "36", title: "फरवरी-अप्रैल, 2016 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-130316.pdf" },
  { month: "मार्च", number: "37", date: "15/03/2016", patrakNumber: "37", title: "माननीय सदस्यों के लिये सांस्कृतिक कार्यक्रम", pdfLink: "/misc/P2/p2-150316-1.pdf" },
  { month: "मार्च", number: "38", date: "15/03/2016", patrakNumber: "38", title: "फोटोग्राफी में रूचि रखने वाले माननीय सदस्यों के फोटोग्राफ्स की प्रदर्शनी एवं खादी उत्पादों के विक्रय सह-प्रदर्शन केन्द्र का उदघाटन", pdfLink: "/misc/P2/p2-150316-2.pdf"},
  { month: "मार्च", number: "39", date: "15/03/2016", patrakNumber: "39", title: "सदस्य परिचय पुस्तक का वितरण" , pdfLink: "/misc/P2/p2-150316-3.pdf"},
  { month: "मार्च", number: "40", date: "15/03/2016", patrakNumber: "40", title: "समितियों का निर्वाचन" , pdfLink: "/misc/P2/p2-150316-4.pdf"},
  { month: "मार्च", number: "41", date: "15/03/2016", patrakNumber: "41", title: "शुक्रवार, दिनांक 18 मार्च, 2016 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-150316-5.pdf"},
  { month: "मार्च", number: "42", date: "16/03/2016", patrakNumber: "42", title: "माननीय सदस्यों के लिये सांस्कृतिक कार्यक्रम" , pdfLink: "/misc/P2/p2-160316.pdf"},
  { month: "मार्च", number: "43", date: "17/03/2016", patrakNumber: "43", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का एकादश प्रतिवेदन", pdfLink: "/misc/P2/p2-170316.pdf" },
  { month: "मार्च", number: "44", date: "18/03/2016", patrakNumber: "44", title: "सोमवार, दिनांक 28 मार्च, 2016 (रंगपंचमी) को सभा की बैठक न होना" , pdfLink: "/misc/P2/p2-180316.pdf"},
  { month: "मार्च", number: "45", date: "21/03/2016", patrakNumber: "45", title: "फरवरी-अप्रैल, 2016 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-210316.pdf" },
  { month: "मार्च", number: "46", date: "22/03/2016", patrakNumber: "46", title: "विधान सभा सदस्य के निधन की सूचना", pdfLink: "/misc/P2/p2-220316.pdf" },
  { month: "मार्च", number: "47", date: "26/03/2016", patrakNumber: "47", title: "निरस्त बैठक के प्रश्नों को अगले दिन की कार्यवाही में रखा जाना" , pdfLink: "/misc/P2/p2-260316.pdf"},
  { month: "मार्च", number: "48", date: "30/03/2016", patrakNumber: "48", title: "माननीय मंत्री/राज्यमंत्री एवं माननीय सदस्यों का स्वास्थ्य परीक्षण" , pdfLink: "/misc/P2/p2-300316-1.pdf"},
  { month: "मार्च", number: "49", date: "30/03/2016", patrakNumber: "49", title: "माननीय सदस्यों से ऑनलाईन प्रश्न प्राप्त किया जाना", pdfLink: "/misc/P2/p2-300316-2.pdf" },
  { month: "मार्च", number: "50", date: "30/03/2016", patrakNumber: "50", title: "'चाणक्य' नाटक की प्रस्तुति", pdfLink: "/misc/P2/p2-300316-3.pdf" },
  { month: "मार्च", number: "51", date: "30/03/2016", patrakNumber: "51", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-300316-4.pdf"},
  { month: "मार्च", number: "52", date: "30/03/2016", patrakNumber: "52", title: "दिनांक 31 मार्च, 2016 को उठाई जाने वाली नियम 52 के अंतर्गत आधे घण्टे की चर्चा" , pdfLink: "/misc/P2/p2-300316-5.pdf"},
  { month: "मार्च", number: "53", date: "31/03/2016", patrakNumber: "53", title: "शुक्रवार, दिनांक 1 अप्रैल, 2016 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-310316-1.pdf"},
  { month: "मार्च", number: "54", date: "31/03/2016", patrakNumber: "54", title: "दिनांक 1 अप्रैल, 2016 को उठाई जाने वाली नियम 52 के अंतर्गत आधे घण्टे की चर्चा" , pdfLink: "/misc/P2/p2-310316-2.pdf"},
  { month: "मार्च", number: "55", date: "31/03/2016", patrakNumber: "55", title: "शुक्रवार, दिनांक 1 अप्रैल, 2016 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-310316-3.pdf"},
  // 🗓 अप्रैल
  { month: "अप्रैल", number: "56", date: "01/04/2016", patrakNumber: "56", title: "मध्यप्रदेश विधान सभा की (1) लोक लेखा (2) प्राक्कलन (3) सरकारी उपक्रमों संबंधी (4) अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी और (5) स्थानीय निकाय एवं पंचायतीराज लेखा समितियों के लिए सदस्यों का निर्वाचन" , pdfLink: "/misc/P2/p2-010416-1.pdf"},
  { month: "अप्रैल", number: "57", date: "01/04/2016", patrakNumber: "57", title: "लोक लेखा समिति में एक स्थान की रिक्ति" , pdfLink: "/misc/P2/p2-010416-2.pdf"},
  { month: "अप्रैल", number: "58", date: "28/04/2016", patrakNumber: "58", title: "नाम-निर्दिष्ट समितियों का गठन", pdfLink: "/misc/P2/p2-280416.pdf" },

  // 🗓 मई
  { month: "मई", number: "59", date: "24/05/2016", patrakNumber: "59", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्य सभा के लिए द्विवार्षिक निर्वाचन" , pdfLink: "/misc/P2/p2-240516.pdf"},
  { month: "मई", number: "60", date: "30/05/2016", patrakNumber: "60", title: "सामान्य प्रयोजन समिति का गठन" , pdfLink: "/misc/P2/p2-300516.pdf"},

  // 🗓 जून
  { month: "जून", number: "61", date: "03/06/2016", patrakNumber: "61", title: "राज्यसभा द्विवार्षिक निर्वाचन 2016" , pdfLink: "/misc/P2/p2-030616.pdf"},
  { month: "जून", number: "62", date: "06/06/2016", patrakNumber: "62", title: "राज्यसभा द्विवार्षिक निर्वाचन 2016" , pdfLink: "/misc/P2/p2-060616.pdf"},
  { month: "जून", number: "63", date: "07/06/2016", patrakNumber: "63", title: "निर्वाचन क्षेत्र क्रमांक 132, घोड़ाडोंगरी (अ.ज.जा.) से उप चुनाव में निर्वाचित सदस्‍य, श्री मंगल सिंग धुर्वे की ओर से प्राप्‍त जानकारी प्रकाशित", pdfLink: "/misc/P2/p2-070616.pdf" },
  { month: "जून", number: "64", date: "15/06/2016", patrakNumber: "64", title: "चतुर्दश विधान सभा का एकादश सत्र (दिनांक 18 से 29 जुलाई, 2016)", pdfLink: "/misc/P2/p2-150616.pdf" },
  { month: "जून", number: "65", date: "16/06/2016", patrakNumber: "65", title: "विधान सभा सदस्य के निधन की सूचना", pdfLink: "/misc/P2/p2-160616.pdf" },
  { month: "जून", number: "66", date: "28/06/2016", patrakNumber: "66", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-280616-1.pdf"},
  { month: "जून", number: "67", date: "28/06/2016", patrakNumber: "67", title: "प्रश्नों के चक्रानुक्रम चार्ट में आंशिक परिवर्तन" , pdfLink: "/misc/P2/p2-280616-2.pdf"},
  // 🗓 जुलाई
  { month: "जुलाई", number: "68", date: "04/07/2016", patrakNumber: "68", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-040716.pdf" },
  { month: "जुलाई", number: "69", date: "12/07/2016", patrakNumber: "69", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", pdfLink: "/misc/P2/p2-120716.pdf" },
  { month: "जुलाई", number: "70", date: "15/07/2016", patrakNumber: "70", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , pdfLink: "/misc/P2/p2-140716.pdf"},
  { month: "जुलाई", number: "71", date: "15/07/2016", patrakNumber: "71", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-150716-1.pdf" },
  { month: "जुलाई", number: "72", date: "14/07/2016", patrakNumber: "72", title: "निर्वाचन क्षेत्र क्रमांक-215 घट्टिया, उज्जैन (अजा.) से निर्वाचित सदस्य, श्री सतीश मालवीय को बंदी किये जाने की सूचना" , pdfLink: "/misc/P2/p2-150716-2.pdf"},
  { month: "जुलाई", number: "73", date: "17/07/2016", patrakNumber: "73", title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-170716-1.pdf" },
  { month: "जुलाई", number: "74", date: "17/07/2016", patrakNumber: "74", title: "माननीय सदस्यों से ऑनलाईन प्रश्न प्राप्त करने की प्रक्रिया के लिये डिजिटल सिग्नेचर बनाये जाना", pdfLink: "/misc/P2/p2-170716-2.pdf" },
  { month: "जुलाई", number: "75", date: "17/07/2016", patrakNumber: "75", title: "प्रश्न के उत्तर में संशोधन" , pdfLink: "/misc/P2/p2-170716-3.pdf"},
  { month: "जुलाई", number: "76", date: "17/07/2016", patrakNumber: "76", title: "निर्वाचन क्षेत्र क्रमांक 215 घट्टिया, उज्जैन (अ.जा.) से निर्वाचित सदस्य, श्री सतीश मालवीय को रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-170716-4.pdf"},
  { month: "जुलाई", number: "77", date: "18/07/2016", patrakNumber: "77", title: "मंगलवार, दिनांक 19 जुलाई, 2016 को सदन की बैठक न होने विषयक" , pdfLink: "/misc/P2/p2-180716-1.pdf"},
  { month: "जुलाई", number: "78", date: "18/07/2016", patrakNumber: "78", title: "निरस्त बैठक के प्रश्नों को अगले दिन की कार्यवाही में रखे जाने विषयक" , pdfLink: "/misc/P2/p2-180716-2.pdf"},
  { month: "जुलाई", number: "79", date: "18/07/2016", patrakNumber: "79", title: "मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-190716-1.pdf" },
  { month: "जुलाई", number: "80", date: "18/07/2016", patrakNumber: "80", title: "शुक्रवार, दिनांक 22 जुलाई, 2016 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-190716-2.pdf"},
  { month: "जुलाई", number: "81", date: "20/07/2016", patrakNumber: "81", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-200716.pdf" },
  { month: "जुलाई", number: "82", date: "21/07/2016", patrakNumber: "82", title: "शुक्रवार, दिनांक 22 जुलाई, 2016 हेतु निर्दारित अशासकीय संकल्पों की सूची एवं गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का चतुर्दश प्रतिवेदन", pdfLink: "/misc/P2/p2-210716-1.pdf" },
  { month: "जुलाई", number: "83", date: "21/07/2016", patrakNumber: "83", title: "प्रश्न के उत्तर में संशोधन" , pdfLink: "/misc/P2/p2-210716-2.pdf"},
  { month: "जुलाई", number: "84", date: "22/07/2016", patrakNumber: "84", title: "लोक लेखा, अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी और स्थानीय निकाय एवं पंचायतीराज लेखा समितियों में रिक्त स्थानों की पूर्ति हेतु निर्वाचन", pdfLink: "/misc/P2/p2-220716-1.pdf" },
  { month: "जुलाई", number: "85", date: "22/07/2016", patrakNumber: "85", title: "संविहित संकल्प - मध्यप्रदेश विधान सभा सदस्य वेतन, भत्ता तता पेंशन अधिनियम, 1972 (क्रमांक 7 सन् 1973) से संबंधित", pdfLink: "/misc/P2/p2-220716-2.pdf" },
  { month: "जुलाई", number: "86", date: "22/07/2016", patrakNumber: "86", title: "संविहित संकल्प - मध्यप्रदेश विधान सभा सदस्य वेतन, भत्ता तता पेंशन अधिनियम, 1972 (क्रमांक 7 सन् 1973) से संबंधित" , pdfLink: "/misc/P2/p2-220716-3.pdf"},
  { month: "जुलाई", number: "87", date: "22/07/2016", patrakNumber: "87", title: "संविहित संकल्प - मध्यप्रदेश विधान सभा सदस्य वेतन, भत्ता तता पेंशन अधिनियम, 1972 (क्रमांक 7 सन् 1973) से संबंधित" , pdfLink: "/misc/P2/p2-220716-4.pdf"},
  { month: "जुलाई", number: "88", date: "25/07/2016", patrakNumber: "88", title: "लोक लेखा, अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी और स्थानीय निकाय एवं पंचायतीराज लेखा समितियों में रिक्त स्थानों की पूर्ति हेतु निर्वाचन", pdfLink: "/misc/P2/p2-250716-1.pdf" },
  { month: "जुलाई", number: "89", date: "25/07/2016", patrakNumber: "89", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-250716-2.pdf"},
  { month: "जुलाई", number: "90", date: "25/07/2016", patrakNumber: "90", title: "सभा भवन आसन क्रम में परिवर्तन" , pdfLink: "/misc/P2/p2-250716-3.pdf"},
  { month: "जुलाई", number: "91", date: "26/07/2016", patrakNumber: "91", title: "शुक्रवार, दिनांक 29 जुलाई, 2016 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-260716-1.pdf" },
  { month: "जुलाई", number: "92", date: "26/07/2016", patrakNumber: "92", title: "समितियों में रिक्त स्थानों का निर्वाचन - संवीक्षा" , pdfLink: "/misc/P2/p2-260716-2.pdf"},
  { month: "जुलाई", number: "93", date: "27/07/2016", patrakNumber: "93", title: "नियम-52 के अधीन आधे घण्टे की चर्चा", pdfLink: "/misc/P2/p2-270716.pdf" },
  { month: "जुलाई", number: "94", date: "28/07/2016", patrakNumber: "94", title: "फरवरी, अप्रैल, 2016 की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-280716-1.pdf"},
  { month: "जुलाई", number: "95", date: "28/07/2016", patrakNumber: "95", title: "शुक्रवार, दिनांक 29 जुलाई, 2016 हेतु निर्दारित अशासकीय संकल्पों की सूची एवं गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का पंचदश प्रतिवेदन" , pdfLink: "/misc/P2/p2-280716-2.pdf"},
  { month: "जुलाई", number: "96", date: "28/07/2016", patrakNumber: "96", title: "लोक लेखा, अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी और स्थानीय निकाय एवं पंचायतीराज लेखा समितियों में रिक्त स्थानों की पूर्ति हेतु निर्वाचन" , pdfLink: "/misc/P2/p2-280716-3.pdf"},
  { month: "जुलाई", number: "97", date: "29/07/2016", patrakNumber: "97", title: "जुलाई, 2016 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-290716.pdf" },
  // 🗓 अगस्त
  { month: "अगस्त", number: "98", date: "04/08/2016", patrakNumber: "98", title: "नाम निर्दिष्ट समितियों में रिक्त स्थानों की पूर्ति" , pdfLink: "/misc/P2/p2-040816.pdf"},
  { month: "अगस्त", number: "99", date: "06/08/2016", patrakNumber: "99", title: "सामान्य प्रयोजन समिति", pdfLink: "/misc/P2/p2-060816.pdf" },
  { month: "अगस्त", number: "100", date: "13/08/2016", patrakNumber: "100", title: "मध्यप्रदेश विधान सभा की आगामी बैठक 24 अगस्त को" , pdfLink: "/misc/P2/p2-130816.pdf"},
  { month: "अगस्त", number: "101", date: "22/08/2016", patrakNumber: "101", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-220816-1.pdf"},
  { month: "अगस्त", number: "102", date: "22/08/2016", patrakNumber: "102", title: "संविधान (एक सौ बाईसवां संशोधन) विधेयक, 2014 मध्यप्रदेश विधान सभा द्वारा अनुसमर्थन" , pdfLink: "/misc/P2/p2-220816-2.pdf"},
  { month: "अगस्त", number: "103", date: "22/08/2016", patrakNumber: "103", title: "निर्वाचन क्षेत्र क्रमांक-190 बड़वानी से निर्वाचित सदस्य, श्री रमेश पटेल को रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-220816-3.pdf"},
  { month: "अगस्त", number: "104", date: "23/08/2016", patrakNumber: "104", title: "संविधान (एक सौ बाईसवां संशोधन) विधेयक, 2014 मध्यप्रदेश विधान सभा द्वारा अनुसमर्थन संबंधी संकल्प" , pdfLink: "/misc/P2/p2-230816.pdf"},
  { month: "अगस्त", number: "105", date: "24/08/2016", patrakNumber: "105", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-240816.pdf"},

  // 🗓 सितम्बर
  { month: "सितम्बर", number: "106", date: "01/09/2016", patrakNumber: "106", title: "पत्रकार दीर्घा सलाहकार समिति का गठन" , pdfLink: "/misc/P2/p2-010916.pdf"},
  { month: "सितम्बर", number: "107", date: "06/09/2016", patrakNumber: "107", title: "शुद्धि पत्र", pdfLink: "/misc/P2/p2-060916.pdf" },
  { month: "सितम्बर", number: "108", date: "26/09/2016", patrakNumber: "108", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्य सभा में रिक्त हुए एक स्थान की पूर्ति हेतु उप-निर्वाचन की अधिसूचना" , pdfLink: "/misc/P2/p2-260916.pdf"},
  { month: "सितम्बर", number: "109", date: "27/09/2016", patrakNumber: "109", title: "निर्वाचन क्षेत्र क्रमांक 31 राघौगढ़ से निर्वाचित सदस्य, श्री जयवर्द्धन सिंह को बंदी/रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-270916-1.pdf"},
  { month: "सितम्बर", number: "110", date: "27/09/2016", patrakNumber: "110", title: "निर्वाचन क्षेत्र क्रमांक 160 नरसिंहगढ़ से निर्वाचित सदस्य, श्री गिरीश भंडारी को बंदी/रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-270916-2.pdf"},

  // 🗓 अक्टूबर
  { month: "अक्टूबर", number: "111", date: "21/10/2016", patrakNumber: "111", title: "विधान सभा सदस्य के निधन की सूचना" , pdfLink: "/misc/P2/p2-211016.pdf"},

  // 🗓 नवम्बर
  { month: "नवम्बर", number: "112", date: "01/11/2016", patrakNumber: "112", title: "चतुर्दश विधान सभा का द्वादश सत्र (दिनांक 5 से 9 दिसम्बर, 2016)" , pdfLink: "/misc/P2/p2-011116.pdf"},
  { month: "नवम्बर", number: "113", date: "09/11/2016", patrakNumber: "113", title: "माननीय सदस्यों को भोजन पर सब्सिडी" , pdfLink: "/misc/P2/p2-091116.pdf"},
  { month: "नवम्बर", number: "114", date: "09/11/2016", patrakNumber: "114", title: "निर्वाचन क्षेत्र क्रमांक 100 जबलपुर पश्चिम से निर्वाचित सदस्य, श्री तरुण भानोत को बंदी/रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-091116_1.pdf"},
  { month: "नवम्बर", number: "115", date: "09/11/2016", patrakNumber: "115", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाये विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-091116_2.pdf" },
  { month: "नवम्बर", number: "116", date: "15/11/2016", patrakNumber: "116", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-151116.pdf"},
  // 🗓 दिसम्बर
  { month: "दिसम्बर", number: "117", date: "01/12/2016", patrakNumber: "117", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , pdfLink: "/misc/P2/p2-011216-1.pdf"},
  { month: "दिसम्बर", number: "118", date: "01/12/2016", patrakNumber: "118", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ" , pdfLink: "/misc/P2/p2-011216-2.pdf"},
  { month: "दिसम्बर", number: "119", date: "02/12/2016", patrakNumber: "119", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-021216.pdf"},
  { month: "दिसम्बर", number: "120", date: "04/12/2016", patrakNumber: "120", title: "दिसम्बर, 2016 सत्र में सभा भवन आसन क्रम का निर्धारण" , pdfLink: "/misc/P2/p2-041216.pdf"},
  { month: "दिसम्बर", number: "121", date: "05/12/2016", patrakNumber: "121", title: "मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-051216-1.pdf"},
  { month: "दिसम्बर", number: "122", date: "05/12/2016", patrakNumber: "122", title: "निर्वाचन क्षेत्र क्रमांक 179, नेपानगर (अ.ज.जा.) से उप चुनाव में निर्वाचित सदस्‍य, सुश्री मंजू राजेन्द्र दादु की ओर से प्राप्‍त जानकारी प्रकाशित" , pdfLink: "/misc/P2/p2-051216-2.pdf"},
  { month: "दिसम्बर", number: "123", date: "05/12/2016", patrakNumber: "123", title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-051216-3.pdf" },
  { month: "दिसम्बर", number: "124", date: "05/12/2016", patrakNumber: "124", title: "विधान सभा की सदस्यता से त्यागपत्र" , pdfLink: "/misc/P2/p2-051216-4.pdf"},
  { month: "दिसम्बर", number: "125", date: "06/12/2016", patrakNumber: "125", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-061216-1.pdf"},
  { month: "दिसम्बर", number: "126", date: "06/12/2016", patrakNumber: "126", title: "शुक्रवार, दिनांक 09 दिसम्बर, 2016 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-061216-2.pdf" },
  { month: "दिसम्बर", number: "127", date: "08/12/2016", patrakNumber: "127", title: "शासन द्वारा प्रदेश में नगद रहित व्यवहारों को बढ़ावा देने हेतु प्रशिक्षण कार्यक्रम का प्रस्तुतिकरण" , pdfLink: "/misc/P2/p2-081216-1.pdf"},
  { month: "दिसम्बर", number: "128", date: "08/12/2016", patrakNumber: "128", title: "उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-081216-2.pdf"},
  { month: "दिसम्बर", number: "129", date: "08/12/2016", patrakNumber: "129", title: "शुक्रवार, दिनांक 09 दिसम्बर, 2016 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-081216-3.pdf"},
  { month: "दिसम्बर", number: "130", date: "09/12/2016", patrakNumber: "130", title: "दिसम्बर, 2016 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-091216.pdf"},

];

const months2016 = [
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

const PatrakBhag2_2016 = () => {
  const monthRefs = months2016.reduce((acc, month) => {
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
        <p style={styles.subTitle}>वर्ष 2016 — सदन एवं समितियों सम्बन्धी सूचनाएं</p>
      </div>

      {/* Month Navigation */}
      <div style={styles.monthNav}>
        {months2016.map((m, i) => (
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
            {months2016.map((month, index) => (
              <React.Fragment key={index}>
                <tr ref={monthRefs[month]}>
                  <td colSpan="4" style={{ ...styles.td, ...styles.monthHeader }}>
                    {month}
                  </td>
                </tr>
                {patrakData2016
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

export default PatrakBhag2_2016;
