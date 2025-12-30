
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// ----- 2016 Patrak Data -----
const patrakData2024 = [
    // जनवरी
  { month: "जनवरी", number: "1", date: "05/01/2024", patrakNumber: "1", title: "माननीय सदस्यों का समूह-छायांकन", pdfLink: "/misc/P2/p2-050124-1.pdf" },
  { month: "जनवरी", number: "2", date: "09/01/2024", patrakNumber: "2", title: "षोडश विधान सभा का द्वितीय सत्र (दिनांक 9 से 19 फरवरी, 2024)", pdfLink: "/misc/P2/p2-090124-1.pdf" },
  { month: "जनवरी", number: "3", date: "12/01/2024", patrakNumber: "3", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-120124-1.pdf" },
  { month: "जनवरी", number: "4", date: "15/01/2024", patrakNumber: "4", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-150124-1.pdf" },
  { month: "जनवरी", number: "5", date: "18/01/2024", patrakNumber: "5", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-180124-1.pdf" },
  { month: "जनवरी", number: "6", date: "25/01/2024", patrakNumber: "6", title: "मध्यप्रदेश कांग्रेस विधायक दल के उप नेता की सूचना", pdfLink: "/misc/P2/p2-250124-1.pdf" },
  { month: "जनवरी", number: "7", date: "25/01/2024", patrakNumber: "7", title: "सदन से संबंधित कार्यों यथा-प्रश्न एवं अन्य सूचनाएं, सभा समितियों से संबंधित जानकारी विषयक", pdfLink: "/misc/P2/p2-250124-2.pdf" },

  // फरवरी
  { month: "फ़रवरी", number: "8", date: "02/02/2024", patrakNumber: "8", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-020224-1.pdf" },
  { month: "फ़रवरी", number: "9", date: "02/02/2024", patrakNumber: "9", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-020224-2.pdf" },
  { month: "फ़रवरी", number: "10", date: "05/02/2024", patrakNumber: "10", title: "संकल्प (पर्यावरण मंत्री)", pdfLink: "/misc/P2/p2-050224-1.pdf" },
  { month: "फ़रवरी", number: "11", date: "05/02/2024", patrakNumber: "11", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-050224-2.pdf" },
  { month: "फ़रवरी", number: "12", date: "06/02/2024", patrakNumber: "12", title: "माननीय राज्यपाल का अभिभाषण", pdfLink: "/misc/P2/p2-060224-1.pdf" },
  { month: "फ़रवरी", number: "13", date: "07/02/2024", patrakNumber: "13", title: "माननीय राज्यपाल का अभिभाषण", pdfLink: "/misc/P2/p2-070224-1.pdf" },
  { month: "फ़रवरी", number: "14", date: "07/02/2024", patrakNumber: "14", title: "सदस्यों के लिए संदर्भ सेवा", pdfLink: "/misc/P2/p2-070224-2.pdf" },
  { month: "फ़रवरी", number: "15", date: "07/02/2024", patrakNumber: "15", title: "विधान सभा की चार समितियों का गठन", pdfLink: "/misc/P2/p2-070224-3.pdf" },
  { month: "फ़रवरी", number: "16", date: "07/02/2024", patrakNumber: "16", title: "शुक्रवार, दिनांक 09 फरवरी, 2024 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-070224-4.pdf" },
  { month: "फ़रवरी", number: "17", date: "08/02/2024", patrakNumber: "17", title: "सभा भवन आसन क्रम में परिवर्तन की सूचना", pdfLink: "/misc/P2/p2-080224-1.pdf" },
  { month: "फ़रवरी", number: "18", date: "08/02/2024", patrakNumber: "18", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्य सभा के रिक्त स्थानों की पूर्ति हेतु द्विवार्षिक निर्वाचन की अधिसूचना", pdfLink: "/misc/P2/p2-080224-2.pdf" },
  { month: "फ़रवरी", number: "19", date: "08/02/2024", patrakNumber: "19", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का प्रथम प्रतिवेदन", pdfLink: "/misc/P2/p2-080224-3.pdf" },
  { month: "फ़रवरी", number: "20", date: "08/02/2024", patrakNumber: "20", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-080224-4.pdf" },
  { month: "फ़रवरी", number: "21", date: "13/02/2024", patrakNumber: "21", title: "कार्यवाही के संक्षिप्त कार्य विवरण पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-130224-1.pdf" },
  { month: "फ़रवरी", number: "22", date: "22/02/2024", patrakNumber: "22", title: "निर्वाचन क्षेत्र क्र. 193-झाबुआ (अ.ज.जा.) से निर्वाचित सदस्य, श्री विक्रांत भूरिया को गिरफ्तार किये जाने की सूचना", pdfLink: "/misc/P2/p2-220224-1.pdf" },
  { month: "फ़रवरी", number: "23", date: "26/02/2024", patrakNumber: "23", title: "फरवरी, 2024 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-260224-1.pdf" },
  { month: "फ़रवरी", number: "24", date: "26/02/2024", patrakNumber: "24", title: "फरवरी, 2024 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-260224-2.pdf" },
  { month: "फ़रवरी", number: "25", date: "29/02/2024", patrakNumber: "25", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के नियम 4 (2) के अंतर्गत विधान सभा सदस्यों से प्राप्त जानकारी", pdfLink: "/misc/P2/p2-290224-1.pdf" },
    // मार्च
  { month: "मार्च", number: "26", date: "12/03/2024", patrakNumber: "26", title: "फरवरी, 2024 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-120324-1.pdf" },
  { month: "मार्च", number: "27", date: "15/03/2024", patrakNumber: "27", title: "मध्यप्रदेश विधान सभा के प्रक्रिया तथा कार्य संचालन संबंधी नियमावली में पत्रक भाग-2, क्रमांक-27, दिनांक 30 मार्च, 2022 द्वारा किये गये संशोधनों का निरसन", pdfLink: "/misc/P2/p2-150324-1.pdf" },
  { month: "मार्च", number: "28", date: "27/03/2024", patrakNumber: "28", title: "अध्यक्ष के स्थायी आदेशों में किये गये संशोधनों का निरसन", pdfLink: "/misc/P2/p2-270324-1.pdf" },
  { month: "मार्च", number: "29", date: "30/03/2024", patrakNumber: "29", title: "विधान सभा की सदस्यता से त्यागपत्र", pdfLink: "/misc/P2/p2-300324-1.pdf" },

  // मई
  { month: "मई", number: "30", date: "17/05/2024", patrakNumber: "30", title: "निर्वाचन क्षेत्र क्र. 193-झाबुआ (अ.ज.जा.) से निर्वाचित सदस्य, श्री विक्रांत भूरिया को रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-170524-1.pdf" },
  { month: "मई", number: "31", date: "30/05/2024", patrakNumber: "31", title: "षोडश विधान सभा का तृतीय सत्र (दिनांक 1 से 19 जुलाई, 2024)", pdfLink: "/misc/P2/p2-300524-1.pdf" },
  { month: "मई", number: "32", date: "30/05/2024", patrakNumber: "32", title: "राष्ट्रीय डिजिटल इंडिया कार्यक्रम के अंतर्गत NeVA परियोजना को मध्यप्रदेश विधान सभा में कार्यान्वित करने के संबंध में सभा समिति का गठन", pdfLink: "/misc/P2/p2-300524-2.pdf" },
  { month: "मई", number: "33", date: "31/05/2024", patrakNumber: "33", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-310524-1.pdf" },

  // जून
  { month: "जून", number: "34", date: "11/06/2024", patrakNumber: "34", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-110624-1.pdf" },
  { month: "जून", number: "35", date: "11/06/2024", patrakNumber: "35", title: "मध्यप्रदेश विधान सभा के सदस्यों एवं उनके परिवार के आश्रितों की सम्पत्ति के विवरण को वेबसाईट पर प्रदर्शित किया जाना", pdfLink: "/misc/P2/p2-110624-2.pdf" },
  { month: "जून", number: "36", date: "18/06/2024", patrakNumber: "36", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-180624-1.pdf" },
  { month: "जून", number: "37", date: "18/06/2024", patrakNumber: "37", title: "विधान सभा की सदस्यता से त्याग-पत्र", pdfLink: "/misc/P2/p2-180624-2.pdf" },
  { month: "जून", number: "38", date: "25/06/2024", patrakNumber: "38", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-250624-1.pdf" },
  { month: "जून", number: "39", date: "25/06/2024", patrakNumber: "39", title: "कार्य मंत्रणा समिति में श्री राजेन्द्र भारती, सदस्य का नामांकन", pdfLink: "/misc/P2/p2-250624-2.pdf" },
  { month: "जून", number: "40", date: "27/06/2024", patrakNumber: "40", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-270624-1.pdf" },
  { month: "जून", number: "41", date: "27/06/2024", patrakNumber: "41", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-270624-2.pdf" },
  { month: "जून", number: "43", date: "30/06/2024", patrakNumber: "43", title: "सभा भवन आसन क्रम में परिवर्तन की सूचना", pdfLink: "/misc/P2/p2-300624-1.pdf" },
  { month: "जून", number: "44", date: "30/06/2024", patrakNumber: "44", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-300624-2.pdf" },
  // जुलाई
  { month: "जुलाई", number: "42", date: "01/07/2024", patrakNumber: "44", title: "माननीय सदस्यों हेतु पुस्तकों का वितरण", pdfLink: "/misc/P2/p2-010724-1.pdf" },
  { month: "जुलाई", number: "43", date: "01/07/2024", patrakNumber: "45", title: "सदस्यों के लिए संदर्भ सेवा", pdfLink: "/misc/P2/p2-010724-2.pdf" },
  { month: "जुलाई", number: "44", date: "01/07/2024", patrakNumber: "46", title: "जवाहरलाल नेहरू कृषि विश्वविद्यालय, जबलपुर के प्रबंध मण्डल के लिए राज्य विधान सभा के तीन सदस्यों का निर्वाचन", pdfLink: "h/misc/P2/p2-010724-3.pdf" },
  { month: "जुलाई", number: "45", date: "02/07/2024", patrakNumber: "47", title: "मध्यप्रदेश विधान सभा के फरवरी-मार्च, 2023 (चतुर्दश सत्र) एवं जुलाई, 2023 (पंचदश सत्र) में माननीय सदस्यों द्वारा उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-020724-1.pdf" },
  { month: "जुलाई", number: "46", date: "02/07/2024", patrakNumber: "48", title: "मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-020724-2.pdf" },
  { month: "जुलाई", number: "47", date: "02/07/2024", patrakNumber: "49", title: "वर्ष 2024-2025 के बजट साहित्य का वितरण", pdfLink: "/misc/P2/p2-020724-3.pdf" },
  { month: "जुलाई", number: "48", date: "02/07/2024", patrakNumber: "50", title: "वर्ष 2024-25 का आम बजट दिनांक 3 जुलाई, 2024 को पूर्वाह्न 11.00 बजे सदन में प्रस्तुत होने के कारण उक्त दिनांक को प्रश्नकाल नहीं हो सकेगा", pdfLink: "/misc/P2/p2-020724-4.pdf" },
  { month: "जुलाई", number: "49", date: "02/07/2024", patrakNumber: "51", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-020724-5.pdf" },
  { month: "जुलाई", number: "50", date: "03/07/2024", patrakNumber: "52", title: "कटौती प्रस्ताव की सूचनाएं", pdfLink: "/misc/P2/p2-030724-1.pdf" },
  { month: "जुलाई", number: "51", date: "03/07/2024", patrakNumber: "53", title: "शुक्रवार, दिनांक 5 जलाई, 2024 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-030724-2.pdf" },
  { month: "जुलाई", number: "52", date: "03/07/2024", patrakNumber: "54", title: "जवाहरलाल नेहरू कृषि विश्वविद्यालय, जबलपुर के प्रबंध मण्डल के लिए विधान सभा के तीन सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-030724-3.pdf" },
  { month: "जुलाई", number: "53", date: "04/07/2024", patrakNumber: "55", title: "लोक लेखा, प्राक्कलन, सरकारी उपक्रमों संबंधी तथा स्थानीय निकाय एवं पंचायतीराज लेखा, अनुसूचित जाति तथा अनुसूचित जनजाति वर्ग के कल्याण संबंधी तथा पिछड़े वर्गों के कल्याण संबंधी समितियों के लिए सदस्यों के निर्वाचन का कार्यक्रम", pdfLink: "/misc/P2/p2-040724-1.pdf" },
  { month: "जुलाई", number: "54", date: "04/07/2024", patrakNumber: "56", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का द्वितीय प्रतिवेदन", pdfLink: "/misc/P2/p2-040724-2.pdf" },
  { month: "जुलाई", number: "55", date: "04/07/2024", patrakNumber: "57", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-040724-3.pdf" },
  { month: "जुलाई", number: "56", date: "05/07/2024", patrakNumber: "58", title: "जवाहरलाल नेहरू कृषि विश्वविद्यालय, जबलपुर के प्रबंध मण्डल के लिए विधान सभा के तीन सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-050724-1.pdf" },
  { month: "जुलाई", number: "57", date: "05/07/2024", patrakNumber: "59", title: "लोक लेखा, प्राक्कलन, सरकारी उपक्रमों संबंधी तथा स्थानीय निकाय एवं पंचायतीराज लेखा... प्रस्तावित उम्मीदवारों के नाम", pdfLink: "/misc/P2/p2-050724-2.pdf" },
  { month: "जुलाई", number: "58", date: "05/07/2024", patrakNumber: "60", title: "लोक लेखा, प्राक्कलन, सरकारी उपक्रमों संबंधी... निर्वाचन", pdfLink: "/misc/P2/p2-050724-3.pdf" },
  { month: "जुलाई", number: "59", date: "08/07/2024", patrakNumber: "61", title: "विधान सभा की सदस्यता से त्याग-पत्र", pdfLink: "/misc/P2/p2-080724-1.pdf" },
  { month: "जुलाई", number: "60", date: "11/07/2024", patrakNumber: "62", title: "जुलाई, 2024 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-110724-1.pdf" },
  { month: "जुलाई", number: "61", date: "24/07/2024", patrakNumber: "63", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के अधीन प्राप्त अर्जी पर अध्यक्ष, विधान सभा के आदेश की सूचना", pdfLink: "/misc/P2/p2-240724-1.pdf" },
  { month: "जुलाई", number: "62", date: "29/07/2024", patrakNumber: "64", title: "समूह छायाचित्र का वितरण", pdfLink: "/misc/P2/p2-290724-1.pdf" },

// अगस्त 2024
  { month: "अगस्त", number: "65", date: "02/08/2024", patrakNumber: "65", title: "सदस्य सूची का प्रदाय", pdfLink: "/misc/P2/p2-020824-1.pdf" },
  { month: "अगस्त", number: "66", date: "06/08/2024", patrakNumber: "66", title: "मध्यप्रदेश विधान सभा की लोक लेखा, प्राक्कलन, सरकारी उपक्रमों संबंधी, स्थानीय निकाय एवं पंचायतीराज लेखा समिति, अनुसूचित जाति तथा अनुसूचित जनजाति वर्ग के कल्याण संबंधी एवं पिछड़े वर्गों के कल्याण संबंधी समितियों का गठन वर्ष 2024-25", pdfLink: "/misc/P2/p2-060824-1.pdf" },
  { month: "अगस्त", number: "67", date: "14/08/2024", patrakNumber: "67", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्य सभा के एक स्थान की पूर्ति हेतु उप-निर्वाचन", pdfLink: "/misc/P2/p2-140824-1.pdf" },
  { month: "अगस्त", number: "68", date: "16/08/2024", patrakNumber: "68", title: "नाम-निर्दिष्ट समितियों का गठन", pdfLink: "/misc/P2/p2-160824-1.pdf" },
  { month: "अगस्त", number: "69", date: "20/08/2024", patrakNumber: "69", title: "राज्य सभा उप निर्वाचन 2024 में नाम वापसी की तिथि में परिवर्तन", pdfLink: "/misc/P2/p2-200824-1.pdf" },

  // सितम्बर
  { month: "सितम्बर", number: "70", date: "10/09/2024", patrakNumber: "70", title: "निर्वाचन क्षेत्र क्र. 135-हरदा से निर्वाचित सदस्य, डॉ. रामकिशोर दोगने, निर्वाचन क्षेत्र क्र. 193-झाबुआ (अ.ज.जा.) से निर्वाचित सदस्य, डॉ. विक्रांत भूरिया, निर्वाचन क्षेत्र क्र. 214-तराना (अ.जा.) से निर्वाचित सदस्य. श्री महेश परमार को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-100924-1.pdf" },
  { month: "सितम्बर", number: "71", date: "12/09/2024", patrakNumber: "71", title: "सदस्यों के शिष्टाचार एवं सम्मान अनुरक्षण समिति की सदस्यता से त्यागपत्र", pdfLink: "/misc/P2/p2-120924-1.pdf" },

  // नवम्बर
  { month: "नवम्बर", number: "72", date: "12/11/2024", patrakNumber: "72", title: "षोडश विधान सभा का चतुर्थ सत्र (दिनांक 16 से 20 दिसम्बर, 2024)", pdfLink: "/misc/P2/p2-121124-1.pdf" },
  { month: "नवम्बर", number: "73", date: "19/11/2024", patrakNumber: "73", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-191124-1.pdf" },
  { month: "नवम्बर", number: "74", date: "20/11/2024", patrakNumber: "74", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-201124-1.pdf" },
  { month: "नवम्बर", number: "75", date: "22/11/2024", patrakNumber: "75", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-221124-1.pdf" },

  // दिसम्बर
  { month: "दिसम्बर", number: "76", date: "10/12/2024", patrakNumber: "76", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-101224-1.pdf" },
  { month: "दिसम्बर", number: "77", date: "11/12/2024", patrakNumber: "77", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-111224-1.pdf" },
  { month: "दिसम्बर", number: "78", date: "13/12/2024", patrakNumber: "78", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-131224-1.pdf" },
  { month: "दिसम्बर", number: "79", date: "16/12/2024", patrakNumber: "79", title: "मान. सदस्यों से शोध पत्रिका 'विधायिनी' हेतु लेख आमंत्रण की सूचना", pdfLink: "/misc/P2/p2-161224-1.pdf" },
  { month: "दिसम्बर", number: "80", date: "16/12/2024", patrakNumber: "80", title: "सदस्यों के लिए संदर्भ सेवा", pdfLink: "/misc/P2/p2-161224-2.pdf" },
  { month: "दिसम्बर", number: "81", date: "15/12/2024", patrakNumber: "81", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था (संशोधित पत्रक)", pdfLink: "/misc/P2/p2-151224-1.pdf" },
  { month: "दिसम्बर", number: "82", date: "16/12/2024", patrakNumber: "82", title: "मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-161224-3.pdf" },
  { month: "दिसम्बर", number: "83", date: "16/12/2024", patrakNumber: "83", title: "राजमाता विजयाराजे सिंधिया कृषि विश्वविद्यालय, ग्वालियर के प्रबंध मण्डल के लिए राज्य विधान सभा के तीन सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-161224-4.pdf" },
  { month: "दिसम्बर", number: "84", date: "17/12/2024", patrakNumber: "84", title: "मध्यप्रदेश विधान सभा के दिसम्बर, 2023 (प्रथम सत्र) एवं फरवरी, 2024 (द्वितीय सत्र) में माननीय सदस्यों द्वारा उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-171224-1.pdf" },
  { month: "दिसम्बर", number: "85", date: "17/12/2024", patrakNumber: "85", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-171224-2.pdf" },
  { month: "दिसम्बर", number: "86", date: "18/12/2024", patrakNumber: "86", title: "शुक्रवार, दिनांक 20 दिसम्बर, 2024 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-181224-1.pdf" },
  { month: "दिसम्बर", number: "87", date: "18/12/2024", patrakNumber: "87", title: "उप चुनावों में निर्वाचित सदस्यों की ओर से प्राप्त जानकारी", pdfLink: "/misc/P2/p2-181224-2.pdf" },
  { month: "दिसम्बर", number: "88", date: "18/12/2024", patrakNumber: "88", title: "शुक्रवार, दिनांक 20 दिसम्बर, 2024 हेतु निर्धारित अशासकीय संकल्पों की सूची (संशोधित पत्रक)", pdfLink: "/misc/P2/p2-181224-3.pdf" },
  { month: "दिसम्बर", number: "89", date: "19/12/2024", patrakNumber: "89", title: "शुक्रवार, दिनांक 20 दिसम्बर, 2024 हेतु निर्धारित अशासकीय संकल्पों की सूची (समय निर्धारण)", pdfLink: "/misc/P2/p2-191224-1.pdf" },
  { month: "दिसम्बर", number: "90", date: "20/12/2024", patrakNumber: "90", title: "राजमाता विजयाराजे सिंधिया कृषि विश्वविद्यालय, ग्वालियर के प्रबंध मण्डल के लिए राज्य विधान सभा के तीन सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-201224-1.pdf" },
];


const months2024 = [
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

const PatrakBhag2_2024 = () => {
  const monthRefs = months2024.reduce((acc, month) => {
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
          वर्ष 2024
        </p>
      </div>

      {/* Month Navigation */}
      <div style={styles.monthNav}>
        {months2024.map((m, i) => (
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
            {months2024.map((month, index) => {
              const monthData = patrakData2024.filter(item => item.month === month);
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

export default PatrakBhag2_2024;