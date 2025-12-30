
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// ----- 2016 Patrak Data -----
const patrakData2017 = [
  // 🗓 जनवरी
  { month: "जनवरी", number: "1", date: "02/01/2017", patrakNumber: "1", title: "निर्वाचन क्षेत्र क्रमांक-210, राऊ से निर्वाचित सदस्य श्री जितू पटवारी को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-020117.pdf" },
  { month: "जनवरी", number: "2", date: "16/01/2017", patrakNumber: "2", title: "चतुर्दश विधान सभा का त्रयोदश सत्र (दिनांक 21 फरवरी से 31 मार्च, 2017)" , pdfLink: "/misc/P2/p2-160117.pdf"},
  { month: "जनवरी", number: "3", date: "19/01/2017", patrakNumber: "3", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था" , pdfLink: "/misc/P2/p2-190117.pdf"},
  { month: "जनवरी", number: "4", date: "23/01/2017", patrakNumber: "4", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-230117.pdf"},
  { month: "जनवरी", number: "5", date: "25/01/2017", patrakNumber: "5", title: "निर्वाचन क्षेत्र क्रमांक 184, कसरावद से निर्वाचित सदस्‍य, श्री सचिन यादव को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-250117.pdf"},
  { month: "जनवरी", number: "6", date: "28/01/2017", patrakNumber: "6", title: "निर्वाचन क्षेत्र क्रमांक 2, विजयपुर से निर्वाचित सदस्‍य, श्री रामनिवास रावत को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-280117-1.pdf"},
  { month: "जनवरी", number: "7", date: "28/01/2017", patrakNumber: "7", title: "अनुदान मांगों से संबंधित कटौती प्रस्ताव की सूचना संबंधी नियम एवं प्रपत्र में संशोधन की सूचना", pdfLink: "/misc/P2/p2-280117-2.pdf" },

  // 🗓 फ़रवरी
  { month: "फ़रवरी", number: "8", date: "16/02/2017", patrakNumber: "8", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", pdfLink: "/misc/P2/p2-160217.pdf" },
  { month: "फ़रवरी", number: "9", date: "17/02/2017", patrakNumber: "10", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-170217.pdf" },
  { month: "फ़रवरी", number: "10", date: "20/02/2017", patrakNumber: "9", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-200217-1.pdf"},
  { month: "फ़रवरी", number: "11", date: "20/02/2017", patrakNumber: "11", title: "माननीय राज्यपाल का अभिभाषण", pdfLink: "/misc/P2/p2-200217-2.pdf" },
  { month: "फ़रवरी", number: "12", date: "20/02/2017", patrakNumber: "12", title: "स्वास्थ्य एवं तनाव मुक्ति हेतु 'एक दवा निराली, 15 सेकेण्ड की ताली' कार्यक्रम", pdfLink: "/misc/P2/p2-200217-3.pdf" },
  { month: "फ़रवरी", number: "13", date: "21/02/2017", patrakNumber: "13", title: "माननीय राज्यपाल का अभिभाषण" , pdfLink: "/misc/P2/p2-210217-1.pdf"},
  { month: "फ़रवरी", number: "14", date: "21/02/2017", patrakNumber: "14", title: "प्रदेश के विभिन्न उत्पादों का प्रदर्शन सह-विक्रय" , pdfLink: "/misc/P2/p2-210217-2.pdf"},
  { month: "फ़रवरी", number: "15", date: "21/02/2017", patrakNumber: "15", title: "बजट प्रक्रिया पर कार्यशाला" , pdfLink: "/misc/P2/p2-210217-3.pdf"},
  { month: "फ़रवरी", number: "16", date: "23/02/2017", patrakNumber: "16", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-230217.pdf" },
  { month: "फ़रवरी", number: "17", date: "27/02/2017", patrakNumber: "17", title: "मुख्य प्रतिपक्षी दल के नेता का मनोनयन" , pdfLink: "/misc/P2/p2-270217.pdf"},
  { month: "फ़रवरी", number: "18", date: "28/02/2017", patrakNumber: "18", title: "वर्ष 2017-2018 के बजट साहित्य का वितरण" , pdfLink: "/misc/P2/p2-280217-1.pdf"},
  { month: "फ़रवरी", number: "19", date: "28/02/2017", patrakNumber: "19", title: "शुक्रवार, दिनांक 3 मार्च, 2017 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-280217-2.pdf"},
  { month: "फ़रवरी", number: "20", date: "28/02/2017", patrakNumber: "20", title: "दिनांक 1 मार्च, 2017 को प्रश्नोत्तर काल न होने विषयक" , pdfLink: "/misc/P2/p2-280217-3.pdf"},
  { month: "फ़रवरी", number: "21", date: "28/02/2017", patrakNumber: "21", title: "'परम पूज्य श्री श्री रविशंकर जी का उद्बोधन'" , pdfLink: "/misc/P2/p2-280217-4.pdf"},

  // 🗓 मार्च
  { month: "मार्च", number: "22", date: "01/03/2017", patrakNumber: "22", title: "कटौती प्रस्ताव की सूचनाएं", pdfLink: "/misc/P2/p2-010317-1.pdf"},
  { month: "मार्च", number: "23", date: "01/03/2017", patrakNumber: "23", title: "सभा भवन आसन क्रम में परिवर्तन" , pdfLink: "/misc/P2/p2-010317-2.pdf"},
  { month: "मार्च", number: "24", date: "02/03/2017", patrakNumber: "24", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-020317-1.pdf"},
  { month: "मार्च", number: "25", date: "02/03/2017", patrakNumber: "25", title: "शुक्रवार, दिनांक 3 मार्च, 2017 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-020317-2.pdf" },
  { month: "मार्च", number: "26", date: "05/03/2017", patrakNumber: "26", title: "सभा भवन आसन क्रम में परिवर्तन की सूचना" , pdfLink: "/misc/P2/p2-050317.pdf"},
  { month: "मार्च", number: "27", date: "06/03/2017", patrakNumber: "27", title: "समितियों का निर्वाचन कार्यक्रम" , pdfLink: "https://example.com/pdf/1.pdf"},
  { month: "मार्च", number: "28", date: "06/03/2017", patrakNumber: "28", title: "'लाला हरदौल' नाटक की प्रस्तुति" , pdfLink: "https://example.com/pdf/1.pdf"},
  { month: "मार्च", number: "29", date: "07/03/2017", patrakNumber: "29", title: "मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-070317-1.pdf"},
  { month: "मार्च", number: "30", date: "07/03/2017", patrakNumber: "30", title: "शुक्रवार, दिनांक 10 मार्च, 2017 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-070317-2.pdf"},
  { month: "मार्च", number: "31", date: "08/03/2017", patrakNumber: "31", title: "समितियों का निर्वाचन" , pdfLink: "/misc/P2/p2-080317.pdf"},
  { month: "मार्च", number: "32", date: "09/03/2017", patrakNumber: "32", title: "समितियों का निर्वाचन" , pdfLink: "/misc/P2/p2-090317-1.pdf"},
  { month: "मार्च", number: "33", date: "09/03/2017", patrakNumber: "33", title: "शुक्रवार, दिनांक 10 मार्च, 2017 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-090317-2.pdf" },
  { month: "मार्च", number: "34", date: "21/03/2017", patrakNumber: "34", title: "शुक्रवार, दिनांक 24 मार्च, 2017 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-210317-1.pdf"},
  { month: "मार्च", number: "35", date: "21/03/2017", patrakNumber: "35", title: "सभा भवन आसन क्रम में परिवर्तन की सूचना", pdfLink: "/misc/P2/p2-210317-2.pdf" },
  { month: "मार्च", number: "36", date: "22/03/2017", patrakNumber: "36", title: "उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-220317-1.pdf"},
  { month: "मार्च", number: "37", date: "22/03/2017", patrakNumber: "37", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-220317-2.pdf"},
  { month: "मार्च", number: "38", date: "22/03/2017", patrakNumber: "38", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-220317-3.pdf" },
  { month: "मार्च", number: "39", date: "23/03/2017", patrakNumber: "39", title: "शुक्रवार, दिनांक 24 मार्च, 2017 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-230317-1.pdf"},
  { month: "मार्च", number: "40", date: "23/03/2017", patrakNumber: "40", title: "फरवरी-मार्च, 2017 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-230317-2.pdf"},
  { month: "मार्च", number: "41", date: "24/03/2017", patrakNumber: "41", title: "मध्यप्रदेश विधान सभा की (1) लोक लेखा (2) प्राक्कलन (3) सरकारी उपक्रमों संबंधी (4) अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी और (5) स्थानीय निकाय एवं पंचायतीराज लेखा समितियों के लिए सदस्यों का निर्वाचन" , pdfLink: "/misc/P2/p2-240317-1.pdf"},
  { month: "मार्च", number: "42", date: "31/03/2017", patrakNumber: "42", title: "फरवरी-मार्च, 2017 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-310317-1.pdf" },

  // 🗓 अप्रैल
  { month: "अप्रैल", number: "43", date: "20/04/2017", patrakNumber: "43", title: "नाम-निर्दिष्ट समितियों का गठन", pdfLink: "/misc/P2/p2-200417-1.pdf" },
  { month: "अप्रैल", number: "44", date: "24/04/2017", patrakNumber: "44", title: "बुधवार, दिनांक 3 मई, 2017 को फरवरी-मार्च, 2017 सत्र की आगामी बैठक" , pdfLink: "/misc/P2/p2-240417.pdf"},

  // 🗓 मई
  { month: "मई", number: "45", date: "02/05/2017", patrakNumber: "45", title: "फरवरी-मार्च, 2017 के स्थगित दिनांकों के तारांकित एवं अतारांकित प्रश्नों को उत्तर सहित कार्यवाही में मुद्रित किये जाने विषयक" , pdfLink: "/misc/P2/p2-020517-1.pdf"},
  { month: "मई", number: "46", date: "02/05/2017", patrakNumber: "46", title: "नर्मदा नदी को जीवित इकाई घोषित किया जाना" , pdfLink: "/misc/P2/p2-020517-2.pdf"},
  { month: "मई", number: "47", date: "02/05/2017", patrakNumber: "47", title: "सभा भवन आसन क्रम आवंटित करने की सूचना" , pdfLink: "/misc/P2/p2-020517-3.pdf"},
  { month: "मई", number: "48", date: "03/05/2017", patrakNumber: "48", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-030517-1.pdf"},
  { month: "मई", number: "49", date: "03/05/2017", patrakNumber: "49", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के नियम (2) के अधीन माननीय सदस्यों से प्राप्त जानकारी", pdfLink: "/misc/P2/p2-030517-2.pdf" },
  { month: "मई", number: "50", date: "29/05/2017", patrakNumber: "50", title: "विधान सभा सदस्य के निधन की सूचना" , pdfLink: "/misc/P2/p2-290517-1.pdf"},

  // 🗓 जून
  { month: "जून", number: "51", date: "03/06/2017", patrakNumber: "51", title: "निर्वाचन क्षेत्र क्रमांक 11-लहार से निर्वाचित सदस्य, डॉ. गोविन्द सिंह, निर्वाचन क्षेत्र क्रमांक 76-चुरहट से निर्वाचित सदस्य, श्री अजय सिंह तथा निर्वाचन क्षेत्र क्रमांक 150-भोपाल उत्तर से निर्वाचित सदस्य, श्री आरिफ अकील को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-030617-1.pdf" },
  { month: "जून", number: "52", date: "12/06/2017", patrakNumber: "52", title: "निर्वाचन क्षेत्र क्रमांक 100-जबलपुर पश्चिम् से निर्वाचित सदस्य, श्री तरुण भनोत को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-120617-1.pdf"},
  { month: "जून", number: "53", date: "12/06/2017", patrakNumber: "53", title: "निर्वाचन क्षेत्र क्रमांक 145-बासौदा से निर्वाचित सदस्य, श्री निशंक कुमार जैन को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-120617-2.pdf" },
  { month: "जून", number: "54", date: "14/06/2017", patrakNumber: "54", title: "चतुर्दश विधान सभा का चतुर्दश सत्र (दिनांक 17 जुलाई से 28 जुलाई, 2017)", pdfLink: "/misc/P2/p2-140617-2.pdf" },
  { month: "जून", number: "55", date: "14/06/2017", patrakNumber: "55", title: "निर्वाचन क्षेत्र क्रमांक 116-केवलारी से निर्वाचित सदस्य, श्री रजनीश सिंह को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-140617-1.pdf" },
  { month: "जून", number: "56", date: "20/06/2017", patrakNumber: "56", title: "निर्वाचन क्षेत्र क्रमांक 210-राऊ से निर्वाचित सदस्य, श्री जितू पटवारी को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "https://example.com/pdf/1.pdf"},
  { month: "जून", number: "57", date: "20/06/2017", patrakNumber: "57", title: "निर्वाचन क्षेत्र क्रमांक 9-अटेर से निर्वाचित सदस्य, श्री हेमन्त कटारे, निर्वाचन क्षेत्र क्रमांक 76-चुरहट से निर्वाचित सदस्य, श्री अजय सिंह, निर्वाचन क्षेत्र क्रमांक 181-भीकनगांव (अ.ज.जा.) से निर्वाचित सदस्य, श्रीमती झूमा सोलंकी, निर्वाचन क्षेत्र क्रमांक 184-कसरावद से निर्वाचित सदस्य, श्री सचिन यादव, निर्वाचन क्षेत्र क्रमांक 188-राजपुर (अ.ज.जा.) से निर्वाचित सदस्य, श्री बाला बच्चन, निर्वाचन क्षेत्र क्रमांक 197-गंधवानी (अ.ज.जा.) से निर्वाचित सदस्य, श्री उमंग सिंघार, निर्वाचन क्षेत्र क्रमांक 198-कुक्षी (अ.ज.जा.) से निर्वाचित सदस्य, श्री सुरेन्द्र सिंह हनी बघेल, निर्वाचन क्षेत्र क्रमांक 210-राऊ से निर्वाचित सदस्य, श्री जितू पटवारी को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "https://example.com/pdf/1.pdf"},
  { month: "जून", number: "58", date: "20/06/2017", patrakNumber: "58", title: "निर्वाचन क्षेत्र क्रमांक 95-पाटन से निर्वाचित सदस्य, श्री नीलेश अवस्थी को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "https://example.com/pdf/1.pdf"},
  { month: "जून", number: "59", date: "27/06/2017", patrakNumber: "59", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-270617-1.pdf"},
  { month: "जून", number: "60", date: "27/06/2017", patrakNumber: "60", title: "निर्वाचन क्षेत्र क्रमांक 28-बमोरी से निर्वाचित सदस्य, श्री महेन्द्र सिंह सिसौदिया को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-270617-2.pdf"},
  { month: "जून", number: "61", date: "27/06/2017", patrakNumber: "61", title: "राष्ट्रपतीय निर्वाचन, 2017 - मार्गदर्शन हेतु प्रसुविधा केन्द्र की स्थापना" , pdfLink: "/misc/P2/p2-270617-3.pdf"},
  { month: "जून", number: "62", date: "27/06/2017", patrakNumber: "62", title: "राष्ट्रपतीय निर्वाचन, 2017 - विधान सभा के माननीय सदस्यों को नई दिल्ली या अन्य राज्यों के मुख्यालयों में मतदान करने की सुविधा बावत्." , pdfLink: "/misc/P2/p2-270617-4.pdf"},
  { month: "जून", number: "63", date: "29/06/2017", patrakNumber: "63", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-290617-1.pdf" },
  // 🗓 जुलाई
  { month: "जुलाई", number: "64", date: "07/07/2017", patrakNumber: "64", title: "राष्ट्रपतीय निर्वाचन, 2017 हेतु मतदान व्यवस्था" , pdfLink: "/misc/P2/p2-070717-1.pdf"},
  { month: "जुलाई", number: "65", date: "10/07/2017", patrakNumber: "65", title: "भारत के राष्ट्रपति के पद के लिए निर्वाचन में मत डालने के लिए निर्वाचकों के लिए अनुदेश" , pdfLink: "/misc/P2/p2-100717-1.pdf"},
  { month: "जुलाई", number: "66", date: "10/07/2017", patrakNumber: "66", title: "भारत के राष्ट्रपति के पद के लिए निर्वाचन" , pdfLink: "/misc/P2/p2-100717-2.pdf"},
  { month: "जुलाई", number: "67", date: "12/07/2017", patrakNumber: "67", title: "राष्ट्रपतीय निर्वाचन, 2017 हेतु मतदान व्यवस्था" , pdfLink: "/misc/P2/p2-120717-1.pdf"},
  { month: "जुलाई", number: "68", date: "12/07/2017", patrakNumber: "68", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , pdfLink: "/misc/P2/p2-120717-2.pdf"},
  { month: "जुलाई", number: "69", date: "12/07/2017", patrakNumber: "69", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ" , pdfLink: "/misc/P2/p2-120717-3.pdff"},
  { month: "जुलाई", number: "70", date: "14/07/2017", patrakNumber: "70", title: "पुस्तकालय, अनुसंधान एवं संदर्भ समिति में सदस्य का मनोनयन", pdfLink: "/misc/P2/p2-140717-1.pdf" },
  { month: "जुलाई", number: "71", date: "16/07/2017", patrakNumber: "71", title: "निर्वाचन क्षेत्र क्रमांक 226-सुवासरा से निर्वाचित सदस्य, श्री हरदीप सिंह डंग को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-160717-1.pdf"},
  { month: "जुलाई", number: "72", date: "16/07/2017", patrakNumber: "72", title: "निर्वाचन क्षेत्र क्रमांक 135-हरदा से निर्वाचित सदस्य, डॉ. रामकिशोर दोगने को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-160717-2.pdf"},
  { month: "जुलाई", number: "73", date: "16/07/2017", patrakNumber: "73", title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-160717-3.pdf" },
  { month: "जुलाई", number: "74", date: "16/07/2017", patrakNumber: "74", title: "भारत के राष्ट्रपति के पद के लिए निर्वाचन में मत डालने के लिए निर्वाचकों के लिए अनुदेश" , pdfLink: "/misc/P2/p2-160717-4.pdf"},
  { month: "जुलाई", number: "75", date: "17/07/2017", patrakNumber: "75", title: "प्रश्न के उत्तर में संशोधन" , pdfLink: "/misc/P2/p2-170717-1.pdf"},
  { month: "जुलाई", number: "76", date: "17/07/2017", patrakNumber: "76", title: "निर्वाचन क्षेत्र क्रमांक 145-बासौदा से निर्वाचित सदस्य, श्री निशंक कुमार जैन को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-170717-2.pdf"},
  { month: "जुलाई", number: "77", date: "18/07/2017", patrakNumber: "77", title: "जवाहरलाल नेहरू कृषि विश्वविद्यालय, जबलपुर एवं राजमाता विजयाराजे सिंधिया कृषि विश्वविद्यालय, ग्वालियर के प्रबंध मंडल के लिए राज्य विधान सभा के तीन-तीन सदस्यों का निर्वाचन" , pdfLink: "/misc/P2/p2-180717-1.pdf"},
  { month: "जुलाई", number: "78", date: "18/07/2017", patrakNumber: "78", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-180717-2.pdf"},
  { month: "जुलाई", number: "79", date: "18/07/2017", patrakNumber: "79", title: "शुक्रवार, दिनांक 21 जुलाई, 2017 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-180717-3.pdf"},
  { month: "जुलाई", number: "80", date: "18/07/2017", patrakNumber: "80", title: "जवाहरलाल नेहरू कृषि विश्वविद्यालय, जबलपुर एवं राजमाता विजयाराजे सिंधिया कृषि विश्वविद्यालय, ग्वालियर के प्रबंध मंडल के लिए राज्य विधान सभा के तीन-तीन सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-180717-4.pdf" },
  { month: "जुलाई", number: "81", date: "19/07/2017", patrakNumber: "81", title: "जवाहरलाल नेहरू कृषि विश्वविद्यालय, जबलपुर एवं राजमाता विजयाराजे सिंधिया कृषि विश्वविद्यालय, ग्वालियर के प्रबंध मंडल के लिए राज्य विधान सभा के तीन-तीन सदस्यों का निर्वाचन" , pdfLink: "/misc/P2/p2-190717-1.pdf"},
  { month: "जुलाई", number: "82", date: "20/07/2017", patrakNumber: "82", title: "मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-200717-1.pdf" },
  { month: "जुलाई", number: "83", date: "20/07/2017", patrakNumber: "83", title: "शुक्रवार, दिनांक 21 जुलाई, 2017 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-200717-2.pdf" },
  { month: "जुलाई", number: "84", date: "21/07/2017", patrakNumber: "84", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्य सभा के एक स्थान की पूर्ति हेतु उप-निर्वाचन" , pdfLink: "/misc/P2/p2-210717-1.pdf"},
  { month: "जुलाई", number: "85", date: "24/07/2017", patrakNumber: "85", title: "मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-240717-1.pdf" },
  { month: "जुलाई", number: "86", date: "24/07/2017", patrakNumber: "86", title: "सत्रकाल में दीर्घा प्रवेश-पत्र व्यवस्था" , pdfLink: "/misc/P2/p2-240717-2.pdf"},
  { month: "जुलाई", number: "87", date: "25/07/2017", patrakNumber: "87", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-250717-1.pdf" },
  { month: "जुलाई", number: "88", date: "25/07/2017", patrakNumber: "88", title: "जुलाई, 2017 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-250717-2.pdf" },
  { month: "जुलाई", number: "89", date: "27/07/2017", patrakNumber: "89", title: "जुलाई, 2017 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-270717-1.pdf"},
  { month: "जुलाई", number: "90", date: "28/07/2017", patrakNumber: "90", title: "निर्वाचन क्षेत्र 76-चुरहट श्री अजय सिंह, 11-लहार डॉ.गोविन्‍द सिंह, 31-राघौगढ़ श्री जयवर्द्धन सिंह, 95-पाटन श्री नीलेश अवस्‍थी, 18-भितरवार श्री लाखन सिंह यादव, 118-राजपुर (अ.ज.जा.) श्री बाला बच्‍चन, 75-गुढ़ श्री सुन्‍दरलाल तिवारी, 198-कुक्षी (अ.ज.जा.) श्री सुरेन्‍द्र सिंह हनी बघेल, 27-कोलारस श्री रामसिंह यादव, 116-केवलारी श्री रजनीश सिंह, 117-लखनादौन (अ.ज.जा.) श्री योगेन्‍द्र सिंह, 160-न‍रसिंहगढ़ श्री गिरीश भण्‍डारी, 108-बैहर (अ.ज.जा.) श्री संजय उइके, 88-पुष्‍पराजगढ़ (अ.ज.जा.) श्री फुन्‍देलाल सिंह मार्को, 56-जबेरा श्री प्रताप सिंह, 71-मऊगंज श्री सुखेन्‍द्र सिंह (बन्‍ना), 50-राजनगर कुंवर विक्रम सिंह, 38-देवरी श्री हर्ष यादव, 64-नागौद श्री यादवेन्‍द्र सिंह, 100-जबलपुर पश्चिम श्री तरुण भनोत, 83-ब्‍यौहारी (अ.ज.जा.) श्री रामपाल सिंह, 94-बहोरीबंद कुंवर सौरभ सिंह, 104-डिण्‍डौरी (अ.ज.जा.) श्री ओमकार सिंह मरकाम, 128-पांढुर्णा (अ.ज.जा.) श्री जतन उइके, 9-अटेर श्री हेमंत सत्‍यदेव कटारे, 47-खरगापुर श्रीमती चन्‍दा सुरेन्‍द्र सिंह गौर, 79-चितरंगी (अ.ज.जा.) श्रीमती सरस्‍वती सिंह, 181-भीकनगांव श्रीमती झूमा सोलंकी एवं 109-लांजी से निर्वाचित सदस्‍य सुश्री हिना लिखीराम कांवरे को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-280717-1.pdf"},
  { month: "जुलाई", number: "91", date: "28/07/2017", patrakNumber: "91", title: "निर्वाचन क्षेत्र 158-इछावर श्री शैलेन्‍द्र पटेल, 184-कसरावद श्री सचिन यादव, 226-सुवासरा श्री हरदीप सिंह डंग, 186-भगवानपुरा (अ.ज.जा.) श्री विजय सिंह सोलंकी तथा 210-राऊ से निर्वाचित सदस्‍य श्री जितू पटवारी को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-280717-2.pdf"},

  // 🗓 अगस्त
  { month: "अगस्त", number: "92", date: "21/08/2017", patrakNumber: "92", title: "निर्वाचन क्षेत्र क्रमांक 209-डॉ. अम्बेडकर नगर महू से निर्वाचित सदस्य, श्री कैलाश विजयवर्गीय को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-210817-1.pdf" },

  // 🗓 सितम्बर
  { month: "सितम्बर", number: "93", date: "12/09/2017", patrakNumber: "93", title: "विधान सभा सदस्य के निधन की सूचना" , pdfLink: "https://example.com/pdf/1.pdf"},
  { month: "सितम्बर", number: "94", date: "23/09/2017", patrakNumber: "94", title: "स्थायी आदेश में संशोधन" , pdfLink: "/misc/P2/p2-230917-1.pdf"},
  { month: "सितम्बर", number: "95", date: "23/09/2017", patrakNumber: "95", title: "निर्वाचन क्षेत्र क्रमांक 78-सिंहावल से निर्वाचित सदस्य, श्री कमलेश्वर पटेल को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-230917-2.pdf" },

  // 🗓 अक्टूबर
  { month: "अक्टूबर", number: "96", date: "23/10/2017", patrakNumber: "96", title: "चतुर्दश विधान सभा का पंचदश सत्र (दिनांक 27 नवम्बर से 8 दिसम्बर, 2017)" , pdfLink: "/misc/P2/p2-231017-1.pdf"},
  { month: "अक्टूबर", number: "97", date: "21/10/2017", patrakNumber: "97", title: "विधान सभा सदस्य के निधन की सूचना" , pdfLink: "/misc/P2/p2-211017-1.pdf"},

  // 🗓 नवम्बर
  { month: "नवम्बर", number: "98", date: "02/11/2017", patrakNumber: "98", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-021117-1.pdf" },
  { month: "नवम्बर", number: "99", date: "13/11/2017", patrakNumber: "99", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-131117-1.pdf"},
  { month: "नवम्बर", number: "100", date: "22/11/2017", patrakNumber: "100", title: "सत्रकाल में दीर्घा प्रवेश-पत्र व्यवस्था", pdfLink: "/misc/P2/p2-221117-1.pdf" },
  { month: "नवम्बर", number: "101", date: "22/11/2017", patrakNumber: "101", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-221117-2.pdf" },
  { month: "नवम्बर", number: "102", date: "22/11/2017", patrakNumber: "102", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", pdfLink: "/misc/P2/p2-221117-3.pdf" },
  { month: "नवम्बर", number: "103", date: "25/11/2017", patrakNumber: "103", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-251117-1.pdf" },
  { month: "नवम्बर", number: "104", date: "26/11/2017", patrakNumber: "104", title: "सभा भवन आसन क्रम में परिवर्तन" , pdfLink: "/misc/P2/p2-261117-1.pdf"},
  { month: "नवम्बर", number: "105", date: "27/11/2017", patrakNumber: "105", title: "विधान सभा कार्यवाहियों के डिजिटलीकरण केन्द्र का शुभारंभ", pdfLink: "/misc/P2/p2-271117-1.pdf" },
  { month: "नवम्बर", number: "106", date: "27/11/2017", patrakNumber: "106", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति में रिक्त एक स्थान की पूर्ति" , pdfLink: "/misc/P2/p2-271117-2.pdf"},
  { month: "नवम्बर", number: "107", date: "27/11/2017", patrakNumber: "107", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के नियम (2) के अधीन माननीय सदस्यों से प्राप्त जानकारी" , pdfLink: "/misc/P2/p2-271117-3.pdf"},
  { month: "नवम्बर", number: "108", date: "28/11/2017", patrakNumber: "108", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-281117-1.pdf" },
  { month: "नवम्बर", number: "109", date: "28/11/2017", patrakNumber: "109", title: "शुक्रवार, दिनांक 1 दिसम्बर, 2017 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-281117-2.pdf"},
  { month: "नवम्बर", number: "110", date: "29/11/2017", patrakNumber: "110", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "h/misc/P2/p2-291117-1.pdf" },
  { month: "नवम्बर", number: "111", date: "30/11/2017", patrakNumber: "111", title: "उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-301117-1.pdf"},
  { month: "नवम्बर", number: "112", date: "30/11/2017", patrakNumber: "112", title: "शुक्रवार, दिनांक 1 दिसम्बर, 2017 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-301117-2.pdf" },
  { month: "नवम्बर", number: "113", date: "30/11/2017", patrakNumber: "113", title: "नियम-52 के अंतर्गत आधे घण्टे की चर्चा", pdfLink: "/misc/P2/p2-301117-3.pdf" },

  // 🗓 दिसम्बर
  { month: "दिसम्बर", number: "114", date: "03/12/2017", patrakNumber: "114", title: "प्रश्न के उत्तर में संशोधन" , pdfLink: "/misc/P2/p2-031217-1.pdf"},
  { month: "दिसम्बर", number: "115", date: "07/12/2017", patrakNumber: "115", title: "नवम्बर-दिसम्बर, 2017 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-071217-1.pdf" },
  { month: "दिसम्बर", number: "116", date: "12/12/2017", patrakNumber: "116", title: "नवम्बर-दिसम्बर, 2017 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-121217-1.pdf"},

];

const months2017 = [
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

const PatrakBhag2_2017 = () => {
  const monthRefs = months2017.reduce((acc, month) => {
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

          वर्ष 2017</p>
      </div>

      {/* Month Navigation */}
      <div style={styles.monthNav}>
        {months2017.map((m, i) => (
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
            {months2017.map((month, index) => (
              <React.Fragment key={index}>
                <tr ref={monthRefs[month]}>
                  <td colSpan="4" style={{ ...styles.td, ...styles.monthHeader }}>
                    {month}
                  </td>
                </tr>
                {patrakData2017
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

export default PatrakBhag2_2017;
