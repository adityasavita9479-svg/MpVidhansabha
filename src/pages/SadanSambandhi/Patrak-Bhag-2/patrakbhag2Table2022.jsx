
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// ----- 2016 Patrak Data -----
const patrakData2022 = [
     // जनवरी
  { month: "जनवरी", number: "1", date: "03/01/2022", patrakNumber: "1", title: "दिसम्बर, 2021 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-030122-1.pdf" },
  { month: "जनवरी", number: "2", date: "03/01/2022", patrakNumber: "2", title: "दिसम्बर, 2021 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-030122-2.pdf" },

  // फरवरी
  { month: "फ़रवरी", number: "3", date: "03/02/2022", patrakNumber: "3", title: "पंचदश विधान सभा का एकादश सत्र (दिनांक 7 मार्च से 25 मार्च, 2022)", pdfLink: "/misc/P2/p2-030222-1.pdf" },
  { month: "फ़रवरी", number: "4", date: "07/02/2022", patrakNumber: "4", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-070222-1.pdf" },
  { month: "फ़रवरी", number: "5", date: "08/02/2022", patrakNumber: "5", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-080222-1.pdf" },
  { month: "फ़रवरी", number: "6", date: "08/02/2022", patrakNumber: "6", title: "विभाग के नाम परिवर्तन की सूचना", pdfLink: "/misc/P2/p2-080222-2.pdf" },
  { month: "फ़रवरी", number: "7", date: "10/02/2022", patrakNumber: "7", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-100222-1.pdf" },
  { month: "फ़रवरी", number: "8", date: "28/02/2022", patrakNumber: "8", title: "मार्च, 2022 सत्र के दौरान नोवेल कोरोना वायरस कोविड-19 के संक्रमण से बचाव", pdfLink: "/misc/P2/p2-280222-1.pdf" },

  // मार्च
  { month: "मार्च", number: "9", date: "02/03/2022", patrakNumber: "9", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-020322-1.pdf" },
  { month: "मार्च", number: "10", date: "03/03/2022", patrakNumber: "10", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-030322-1.pdf" },
  { month: "मार्च", number: "11", date: "04/03/2022", patrakNumber: "11", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-040322-1.pdf" },
  { month: "मार्च", number: "12", date: "06/03/2022", patrakNumber: "12", title: "माननीय राज्यपाल का अभिभाषण", pdfLink: "/misc/P2/p2-060322-1.pdf" },
  { month: "मार्च", number: "13", date: "07/03/2022", patrakNumber: "13", title: "सदस्यों के लिए संदर्भ सेवा", pdfLink: "/misc/P2/p2-070322-1.pdf" },
  { month: "मार्च", number: "14", date: "07/03/2022", patrakNumber: "14", title: "माननीय राज्यपाल का अभिभाषण", pdfLink: "/misc/P2/p2-070322-2.pdf" },
  { month: "मार्च", number: "15", date: "08/03/2022", patrakNumber: "15", title: "वर्ष 2022-2023 के बजट साहित्य का वितरण", pdfLink: "/misc/P2/p2-080322-1.pdf" },
  { month: "मार्च", number: "16", date: "08/03/2022", patrakNumber: "16", title: "वर्ष 2022-23 का आम बजट दिनांक 9 मार्च, 2022 को पूर्वाह्न 11.00 बजे सदन में प्रस्तुत होने के कारण उक्त दिनांक को प्रश्नकाल नहीं हो सकेगा", pdfLink: "/misc/P2/p2-080322-2.pdf" },
  { month: "मार्च", number: "17", date: "08/03/2022", patrakNumber: "17", title: "माननीय सदस्यों के लिए सांस्कृतिक कार्यक्रम", pdfLink: "/misc/P2/p2-080322-3.pdf" },
  { month: "मार्च", number: "18", date: "08/03/2022", patrakNumber: "18", title: "संसदीय उत्कृष्टता सम्मान / पुरस्कार वितरण समारोह", pdfLink: "/misc/P2/p2-080322-4.pdf" },
  { month: "मार्च", number: "19", date: "08/03/2022", patrakNumber: "19", title: "मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-080322-5.pdf" },
  { month: "मार्च", number: "20", date: "08/03/2022", patrakNumber: "20", title: "पन्द्रहवीं विधान सभा के माननीय सदस्यों का समूह-छायांकन", pdfLink: "/misc/P2/p2-080322-6.pdf" },
  { month: "मार्च", number: "21", date: "09/03/2022", patrakNumber: "21", title: "कटौती प्रस्ताव की सूचनाएं", pdfLink: "/misc/P2/p2-090322-1.pdf" },
  { month: "मार्च", number: "22", date: "10/03/2022", patrakNumber: "22", title: "शुक्रवार, दिनांक 11 मार्च, 2022 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-100322-1.pdf" },
  { month: "मार्च", number: "23", date: "10/03/2022", patrakNumber: "23", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का द्वितीय प्रतिवेदन", pdfLink: "/misc/P2/p2-100322-2.pdf" },
  { month: "मार्च", number: "24", date: "11/03/2022", patrakNumber: "24", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-110322-1.pdf" },
  { month: "मार्च", number: "25", date: "14/03/2022", patrakNumber: "25", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-140322-1.pdf" },
  { month: "मार्च", number: "26", date: "29/03/2022", patrakNumber: "26", title: "मार्च, 2022 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-290322-1.pdf" },
  { month: "मार्च", number: "27", date: "30/03/2022", patrakNumber: "27", title: "मध्यप्रदेश विधान सभा के प्रक्रिया तथा कार्य संचालन संबंधी नियम में संशोधन", pdfLink: "/misc/P2/p2-300322-1.pdf" },
  { month: "मार्च", number: "28", date: "31/03/2022", patrakNumber: "28", title: "समितियों के कार्यकाल में वृद्धि", pdfLink: "/misc/P2/p2-310322-1.pdf" },
// अप्रैल
  { month: "अप्रैल", number: "29", date: "05/04/2022", patrakNumber: "29", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के अधीन प्राप्त अर्जी पर अध्यक्ष, विधान सभा के आदेश की सूचना", pdfLink: "/misc/P2/p2-050422-1.pdf" },

  // मई
  { month: "मई", number: "30", date: "02/05/2022", patrakNumber: "30", title: "मध्यप्रदेश विधान सभा में नेता प्रतिपक्ष को मान्यता", pdfLink: "/misc/P2/p2-020522-1.pdf" },
  { month: "मई", number: "31", date: "10/05/2022", patrakNumber: "31", title: "आचरण समिति में सभापति की नियुक्ति", pdfLink: "/misc/P2/p2-100522-1.pdf" },
  { month: "मई", number: "32", date: "13/05/2022", patrakNumber: "32", title: "स्थायी आदेश में संशोधन", pdfLink: "/misc/P2/p2-130522-1.pdf" },
  { month: "मई", number: "33", date: "24/05/2022", patrakNumber: "33", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्यसभा में रिक्त हुए तीन स्थानों की पूर्ति हेतु द्विवार्षिक निर्वाचन की अधिसूचना एवं सूचना की प्रतियां मान. सदस्यों को सूचनार्थ", pdfLink: "/misc/P2/p2-240522-1.pdf" },
  { month: "मई", number: "34", date: "31/05/2022", patrakNumber: "34", title: "समूह छायाचित्र का वितरण", pdfLink: "/misc/P2/p2-310522-1.pdf" },

  // जून
  { month: "जून", number: "35", date: "20/06/2022", patrakNumber: "35", title: "राष्ट्रपतीय निर्वाचन, 2022 - विधान सभा के माननीय सदस्यों को नई दिल्ली या अन्य राज्य मुख्यालयों में मतदान करने की सुविधा बावत्.", pdfLink: "/misc/P2/p2-200622-1.pdf" },
  { month: "जून", number: "36 A", date: "21/06/2022", patrakNumber: "36 A", title: "पंचदश विधान सभा का द्वादश सत्र (दिनांक 25 जुलाई से 29 जुलाई, 2022)", pdfLink: "/misc/P2/p2-210622-1a.pdf" },
  { month: "जून", number: "36 B", date: "24/06/2022", patrakNumber: "36 B", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-240622-1b.pdf" },
  { month: "जून", number: "37", date: "27/06/2022", patrakNumber: "37", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-270622-1.pdf" },
  { month: "जून", number: "38", date: "29/06/2022", patrakNumber: "38", title: "राष्ट्रपतीय निर्वाचन, 2022 - मार्गदर्शन हेतु प्रसुविधा केन्द्र (Facilitation Center) की स्थापना", pdfLink: "/misc/P2/p2-300622-1.pdf" },

  // जुलाई
  { month: "जुलाई", number: "39", date: "05/07/2022", patrakNumber: "39", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-050722-1.pdf" },
  { month: "जुलाई", number: "40", date: "08/07/2022", patrakNumber: "40", title: "भारत के राष्ट्रपति के पद के लिए निर्वाचन - मत की गोपनीयता", pdfLink: "/misc/P2/p2-080722-1.pdf" },
  { month: "जुलाई", number: "41", date: "08/07/2022", patrakNumber: "41", title: "भारत के राष्ट्रपति के पद के लिए निर्वाचन - मत दर्ज करने हेतु अनुदेश", pdfLink: "/misc/P2/p2-080722-2.pdf" },
  { month: "जुलाई", number: "42", date: "08/07/2022", patrakNumber: "42", title: "राष्ट्रपतीय निर्वाचन, 2022 - मतदान व्यवस्था", pdfLink: "/misc/P2/p2-080722-3.pdf" },
  { month: "जुलाई", number: "43", date: "12/07/2022", patrakNumber: "43", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-120722-1.pdf" },
  { month: "जुलाई", number: "44", date: "13/07/2022", patrakNumber: "44", title: "राष्ट्रपतीय निर्वाचन, 2022 हेतु विधायक विश्राम गृह से नवीन विधान सभा भवन तक माननीय सदस्यों को आने-जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-130722-1.pdf" },
  { month: "जुलाई", number: "45", date: "15/07/2022", patrakNumber: "45", title: "निर्वाचन क्षेत्र क्रमांक-78, सिंहावल से निर्वाचित सदस्य, श्री कमलेश्वर पटेल को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-150722-1.pdf" },
  { month: "जुलाई", number: "46", date: "17/07/2022", patrakNumber: "46", title: "स्थगन प्रस्ताव, ध्यानाकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी तिथि में परिवर्तन की सूचना", pdfLink: "/misc/P2/p2-170722-1.pdf" },
  { month: "जुलाई", number: "47", date: "17/07/2022", patrakNumber: "47", title: "भारत के राष्ट्रपति के पद के लिए निर्वाचन हेतु निर्वाचकों के लिए अनुदेश", pdfLink: "/misc/P2/p2-170722-2.pdf" },
  { month: "जुलाई", number: "48", date: "18/07/2022", patrakNumber: "48", title: "पंचदश विधान सभा का द्वादश सत्र (दिनांक 13 सितम्बर से 17 सितम्बर, 2022)", pdfLink: "/misc/P2/p2-180722-1.pdf" },
  { month: "जुलाई", number: "49", date: "22/07/2022", patrakNumber: "49", title: "पूर्व अधिसूचना दिनांक 21 जून, 2022 में उल्लेखित तिथियों के लिये पूर्व में प्राप्त प्रश्न-उत्तर सितम्बर, 2022 सत्र की पुनरीक्षित तिथियों में मान्य रहेंगे.", pdfLink: "/misc/P2/p2-220722-1.pdf" },
  { month: "जुलाई", number: "50", date: "27/07/2022", patrakNumber: "50", title: "कार्य मंत्रणा समिति का पुनर्गठन", pdfLink: "/misc/P2/p2-270722-1.pdf" },
   // अगस्त
  { month: "अगस्त", number: "51", date: "02/08/2022", patrakNumber: "51", title: "सदस्यों के शिष्टाचार एवं सम्मान अनुरक्षण समिति का गठन एवं नियम समिति में एक स्थान की पूर्ति", pdfLink: "/misc/P2/p2-020822-1.pdf" },
  { month: "अगस्त", number: "52", date: "02/08/2022", patrakNumber: "52", title: "निर्वाचन क्षेत्र क्रमांक-3, सबलगढ़ से निर्वाचित सदस्य, श्री बैजनाथ कुशवाह, निर्वाचन क्षेत्र क्रमांक-6, मुरैना से निर्वाचित सदस्य, श्री राकेश मावईन निर्वाचन क्षेत्र क्रमांक-7, दिमनी से निर्वाचित सदस्य, कुं. रविन्द्र सिंह तोमर 'भिड़ौसा' एवं निर्वाचन क्षेत्र क्रमांक-16, ग्वालियर (पूर्व) से निर्वाचित सदस्य, डॉ. सतीश सिकरवार को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-020822-2.pdf" },
  { month: "अगस्त", number: "53", date: "16/08/2022", patrakNumber: "53", title: "पुस्तकालय परिशिष्ट प्राप्त करने संबंधी सूचना", pdfLink: "/misc/P2/p2-160822-1.pdf" },
  { month: "अगस्त", number: "54", date: "16/08/2022", patrakNumber: "54", title: "निर्वाचन क्षेत्र क्रमांक-210, राऊ से निर्वाचित सदस्य, श्री जितु पटवारी को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-160822-2.pdf" },

  // सितम्बर
  { month: "सितम्बर", number: "55", date: "01/09/2022", patrakNumber: "55", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-010922-1.pdf" },
  { month: "सितम्बर", number: "56", date: "02/09/2022", patrakNumber: "56", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-020922-1.pdf" },
  { month: "सितम्बर", number: "57", date: "02/09/2022", patrakNumber: "57", title: "सितम्बर, 2022 सत्र के दौरान कोविड-19 के संक्रमण से बचाव", pdfLink: "/misc/P2/p2-020922-2.pdf" },
  { month: "सितम्बर", number: "58", date: "05/09/2022", patrakNumber: "58", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-050922-1.pdf" },
  { month: "सितम्बर", number: "59", date: "06/09/2022", patrakNumber: "59", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-060922-1.pdf" },
  { month: "सितम्बर", number: "60", date: "08/09/2022", patrakNumber: "60", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-080922-1.pdf" },
  { month: "सितम्बर", number: "61", date: "11/09/2022", patrakNumber: "61", title: "मध्यप्रदेश विधान सभा के फरवरी-मार्च, 2021 सत्र में माननीय सदस्यों द्वारा उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-110922-1.pdf" },
  { month: "सितम्बर", number: "62", date: "12/09/2022", patrakNumber: "62", title: "सदस्यों के लिए संदर्भ सेवा", pdfLink: "/misc/P2/p2-120922-1.pdf" },
  { month: "सितम्बर", number: "63", date: "13/09/2022", patrakNumber: "63", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-130922-1.pdf" },
  { month: "सितम्बर", number: "64", date: "13/09/2022", patrakNumber: "64", title: "निर्वाचन क्षेत्र क्रमांक-114, बरघाट (अ.ज.जा.) से निर्वाचित सदस्य, श्री अर्जुन सिंह काकोड़िया को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-130922-2.pdf" },
  { month: "सितम्बर", number: "65", date: "14/09/2022", patrakNumber: "65", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-140922-1.pdf" },
  { month: "सितम्बर", number: "66", date: "15/09/2022", patrakNumber: "66", title: "संक्षिप्त कार्य विवरण का वितरण", pdfLink: "/misc/P2/p2-150922-1.pdf" },
  { month: "सितम्बर", number: "67", date: "22/09/2022", patrakNumber: "67", title: "सितम्बर, 2022 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-220922-2.pdf" },
  { month: "सितम्बर", number: "68", date: "27/09/2022", patrakNumber: "68", title: "विधायक विश्राम गृह परिसर में निवासरत माननीय सदस्यों को रेल्वे स्टेशन/एयर पोर्ट आने-जाने हेतु वाहन व्यवस्था", pdfLink: "/misc/P2/p2-270922-1.pdf" },

  // नवम्बर
  { month: "नवम्बर", number: "69", date: "20/11/2022", patrakNumber: "69", title: "पंचदश विधान सभा का त्रयोदश सत्र (दिनांक 19 दिसम्बर से 23 दिसम्बर, 2022)", pdfLink: "/misc/P2/p2-201122-1.pdf" },
  { month: "नवम्बर", number: "70", date: "22/11/2022", patrakNumber: "70", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-221122-1.pdf" },
  { month: "नवम्बर", number: "71", date: "28/11/2022", patrakNumber: "71", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-281122-1.pdf" },
  { month: "नवम्बर", number: "72", date: "29/11/2022", patrakNumber: "72", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-291122-1.pdf" },

  // दिसम्बर
  { month: "दिसम्बर", number: "73", date: "05/12/2022", patrakNumber: "73", title: "निर्वाचन क्षेत्र क्र. 106 निवास (अ.ज.जा.) से निर्वाचित सदस्‍य, डॉ.अशोक मर्सकोले,  निर्वाचन क्षेत्र क्र. 196 सरदारपुर (अ.ज.जा.)  से  निर्वाचित सदस्‍य,  श्री प्रताप ग्रेवाल,   निर्वाचन  क्षेत्र क्र. 198 कुक्षी (अ.ज.जा.) से  निर्वाचित सदस्‍य, श्री सुरेन्‍द्र सिंह हनी बघेल, एवं निर्वाचन क्षेत्र क्र.200 धरमपुरी (अ.ज.जा.) से निर्वाचित सदस्‍य, श्री पांचीलाल मेड़ा को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-051222-1.pdf" },
  { month: "दिसम्बर", number: "74", date: "07/12/2022", patrakNumber: "74", title: "दिसम्‍बर, 2022 सत्र हेतु स्‍वास्‍थ्‍य संबधी आवश्‍यक सावधानियॉ", pdfLink: "/misc/P2/p2-071222-1.pdf" },
  { month: "दिसम्बर", number: "75", date: "12/12/2022", patrakNumber: "75", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-121222-1.pdf" },
  { month: "दिसम्बर", number: "76", date: "13/12/2022", patrakNumber: "76", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-131222-1.pdf" },
  { month: "दिसम्बर", number: "77", date: "14/12/2022", patrakNumber: "77", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-141222-1.pdf" },
  { month: "दिसम्बर", number: "78", date: "18/12/2022", patrakNumber: "78", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-181222-1.pdf" },
  { month: "दिसम्बर", number: "79", date: "18/12/2022", patrakNumber: "79", title: "सदस्यों के लिए संदर्भ सेवा", pdfLink: "/misc/P2/p2-181222-2.pdf" },
  { month: "दिसम्बर", number: "80", date: "18/12/2022", patrakNumber: "80", title: '"विधान मण्डल पद्धति एवं पक्रिया" पुस्तक का विमोचन कार्यक्रम', pdfLink: "/misc/P2/p2-181222-3.pdf" },
  { month: "दिसम्बर", number: "81", date: "19/12/2022", patrakNumber: "81", title: "माननीय सदस्यों हेतु पुस्तकों का वितरण", pdfLink: "/misc/P2/p2-191222-1.pdf" },
  { month: "दिसम्बर", number: "82", date: "19/12/2022", patrakNumber: "82", title: "जवाहरलाल नेहरू कृषि विश्वविद्यालय, जबलपुर एवं राजमाता विजयाराजे सिंधिया कृषि विश्वविद्यालय, ग्वालियर के प्रबंध मण्डल के लिए राज्य विधान सभा के क्रमश: तीन और एक सदस्य का निर्वाचन", pdfLink: "/misc/P2/p2-191222-2.pdf" },
  { month: "दिसम्बर", number: "83", date: "20/12/2022", patrakNumber: "83", title: "मध्यप्रदेश विधान सभा के अगस्त, 2021 एवं दिसम्बर, 2021 सत्रों में माननीय सदस्यों द्वारा उठाये गये विषयों की अनुक्रमणिका पुस्तिका (संयुक्तांक) का वितरण", pdfLink: "/misc/P2/p2-201222-1.pdf" },
  { month: "दिसम्बर", number: "84", date: "20/12/2022", patrakNumber: "84", title: "मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-201222-2.pdf" },
  { month: "दिसम्बर", number: "85", date: "20/12/2022", patrakNumber: "85", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-201222-3.pdf" },
  { month: "दिसम्बर", number: "86", date: "20/12/2022", patrakNumber: "86", title: "जवाहरलाल नेहरू कृषि विश्वविद्यालय, जबलपुर एवं राजमाता विजयाराजे सिंधिया कृषि विश्वविद्यालय, ग्वालियर के प्रबंध मण्डल के लिए क्रमश: तीन एवं एक सदस्य का निर्वाचन", pdfLink: "/misc/P2/p2-201222-4.pdf" },
  { month: "दिसम्बर", number: "87", date: "21/12/2022", patrakNumber: "87", title: "जवाहरलाल नेहरू कृषि विश्वविद्यालय, जबलपुर तथा राजमाता विजयाराजे सिंधिया कृषि विश्वविद्यालय, ग्वालियर के प्रबंध मण्डल के लिए सदस्य का निर्वाचन", pdfLink: "/misc/P2/p2-211222-1.pdf" },
  { month: "दिसम्बर", number: "88", date: "22/12/2022", patrakNumber: "88", title: "अविश्वास प्रस्ताव की चर्चा का पुनर्ग्रहण होने के फलस्वरूप प्रश्नकाल नहीं होने संबंधी", pdfLink: "/misc/P2/p2-221222-1.pdf" }
];

const months2022 = [
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

const PatrakBhag2_2022 = () => {
  const monthRefs = months2022.reduce((acc, month) => {
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
        <p style={styles.subTitle}>सदन एवं समितियों सम्बन्धी सूचनाएं<br />वर्ष 2022</p>
      </div>

      {/* Month Navigation */}
      <div style={styles.monthNav}>
        {months2022.map((m, i) => (
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
            {months2022.map((month, index) => (
              <React.Fragment key={index}>
                <tr ref={monthRefs[month]}>
                  <td colSpan="4" style={{ ...styles.td, ...styles.monthHeader }}>
                    {month}
                  </td>
                </tr>
                {patrakData2022
                  .filter((item) => item.month === month)
                  .map((item, i) => (
                    <tr key={i}>
                      <td style={styles.td}>{item.number}</td>
                      <td style={styles.td}>{item.date}</td>
                      <td style={styles.td}>{item.patrakNumber || "-"}</td>
                      {/* ✅ Make title clickable */}
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

export default PatrakBhag2_2022;