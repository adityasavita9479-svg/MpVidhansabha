import React, { useRef } from "react";
import { Link } from "react-router-dom";


const patrakData2009 = [
  // जनवरी
  { month: "जनवरी", date: "01/01/2009", number: "1", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", patrakNumber: 1, pdfLink: "/misc/P2/p2-010109.pdf" },
  { month: "जनवरी", date: "02/01/2009", number: "2", title: "सदन की मुद्रित कार्यवाहियों का वितरण", patrakNumber: 2, pdfLink: "/misc/P2/p2-020109-1.pdf"},
  { month: "जनवरी", date: "02/01/2009", number: "3", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", patrakNumber: 3, pdfLink: "/misc/P2/p2-020109-1.pdf"},
  { month: "जनवरी", date: "04/01/2009", number: "5", title: "विधान सभा के सामयिक अध्यक्ष (श्रीमती जमुना देवी) की नियुक्ति", patrakNumber: 5, pdfLink: "/misc/P2/p2-040109-1.pdf" },
  { month: "जनवरी", date: "04/01/2009", number: "6", title: "अध्यक्ष के निर्वाचन की प्रक्रिया", patrakNumber: 6, pdfLink: "/misc/P2/p2-040109-2.pdf" },
  { month: "जनवरी", date: "04/01/2009", number: "7", title: "सदस्यों के लिए सभा भवन में बैठक व्यवस्था" , patrakNumber: 7, pdfLink: "/misc/P2/p2-040109-3.pdf"},
  { month: "जनवरी", date: "05/01/2009", number: "4", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", patrakNumber: 4, pdfLink: "/misc/P2/p2-050109-1.pdf" },
  { month: "जनवरी", date: "05/01/2009", number: "8", title: " 	मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्यसभा के 1 स्थान की पूर्ति हेतु उप-निर्वाचन की अधिसूचना", patrakNumber: 8, pdfLink: "/misc/P2/p2-050109-2.pdf" },
  { month: "जनवरी", date: "05/01/2009", number: "9", title: "जुलाई, 2008 सत्र की अनुक्रमणिका पुस्तिका का वितरण", patrakNumber: 9, pdfLink: "/misc/P2/p2-050109-3.pdf" },
  { month: "जनवरी", date: "06/01/2009", number: "10", title: "महामहिम राज्यपाल (श्री बलराम जाखड़) के अभिभाषण सम्बन्धी सूचना", patrakNumber: 10, pdfLink: "/misc/P2/p2-060109-1.pdf" },
  { month: "जनवरी", date: "06/01/2009", number: "11", title: "सभा भवन आसन क्रम में परिवर्तन" , patrakNumber: 11, pdfLink: "/misc/P2/p2-060109-2.pdf"},
  { month: "जनवरी", date: "07/01/2009", number: "12", title: "महामहिम राज्यपाल के अभिभाषण पर संशोधन एवं चर्चा संबंधी सूचना", patrakNumber: 12, pdfLink: "/misc/P2/p2-070109-1.pdf" },
  { month: "जनवरी", date: "07/01/2009", number: "13", title: "सदस्यों के लिए सभा भवन में बैठक व्यवस्था", patrakNumber: 13, pdfLink: "/misc/P2/p2-070109-2.pdf" },
  { month: "जनवरी", date: "07/01/2009", number: "14", title: "शुक्रवार, दिनांक 9 जनवरी, 2009 को सभा की बैठक नहीं होना" , patrakNumber: 14, pdfLink: "/misc/P2/p2-070109-3.pdf"},
  { month: "जनवरी", date: "11/01/2009", number: "16", title: "उपाध्यक्ष के निर्वाचन की प्रक्रिया", patrakNumber: 16, pdfLink: "/misc/P2/p2-110109.pdf" },
  { month: "जनवरी", date: "12/01/2009", number: "15", title: "सभा/समिति की बैठकों में स्वयं के वाहन से यात्रा देयक सम्बन्धी प्रक्रिया", patrakNumber: 15, pdfLink: "/misc/P2/p2-120109-1.pdf" },
  { month: "जनवरी", date: "12/01/2009", number: "17", title: "सभा भवन आसन क्रम में परिवर्तन", patrakNumber: 17, pdfLink: "/misc/P2/p2-120109-2.pdf" },
  { month: "जनवरी", date: "13/01/2009", number: "18", title: "समितियों के गठन की सूचना" , patrakNumber: 18, pdfLink: "/misc/P2/p2-130109-1.pdf"},
  { month: "जनवरी", date: "13/01/2009", number: "19", title: "जनवरी, 2009 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , patrakNumber: 19, pdfLink: "/misc/P2/p2-130109-2.pdf"},
  { month: "जनवरी", date: "20/01/2009", number: "20", title: "स्थायी आदेश में संशोधन", patrakNumber: 20, pdfLink: "/misc/P2/p2-200109.pdf" },

  // फरवरी
  { month: "फरवरी", date: "07/02/2009", number: "21", title: " 	मध्यप्रदेश गृह निर्माण मण्डल की विधायक/सांसद आवासीय योजना के (द्वितीय चरण) क्रियान्वयन हेतु समिति का गठन", patrakNumber: 21, pdfLink: "/misc/P2/p2-070209.pdf" },
  { month: "फरवरी", date: "12/02/2009", number: "22", title: "त्रयोदश विधान सभा का द्वितीय सत्र (16 से 20 मार्च, 2009)", patrakNumber: 22, pdfLink: "/misc/P2/p2-120209.pdf" },
  { month: "फरवरी", date: "20/02/2009", number: "23", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", patrakNumber: 23, pdfLink: "/misc/P2/p2-200209.pdf" },
  { month: "फरवरी", date: "24/02/2009", number: "24", title: "स्थगन प्रस्ताव, ध्यानाकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", patrakNumber: 24, pdfLink: "/misc/P2/p2-240209.pdf" },
  { month: "फरवरी", date: "26/02/2009", number: "25", title: "श्री सुखदेव पांसे (मुलताई) को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 25, pdfLink: "/misc/P2/p2-260209-2.pdf" },
  { month: "फरवरी", date: "26/02/2009", number: "26", title: "इंजी. प्रदीप लारिया (नरयावली) को बंदी एवं रिहा किये जाने की सूचना" , patrakNumber: 26, pdfLink: "/misc/P2/p2-260209-1.pdf"},
  { month: "फरवरी", date: "27/02/2009", number: "27", title: "श्री धरमू सिंह सिरसाम (भैसदेही) को बंदी एवं रिहा किये जाने की सूचना" , patrakNumber: 27, pdfLink: "/misc/P2/p2-270209.pdf"},

  // मार्च
  { month: "मार्च", date: "03/03/2009", number: "28", title: "श्री हरवंश सिंह (केवलारी) को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 28, pdfLink: "/misc/P2/p2-030309-1.pdf" },
  { month: "मार्च", date: "03/03/2009", number: "29", title: "डॉ. कल्पना परूलेकर (महिदपुर) को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 29, pdfLink: "/misc/P2/p2-030309-2.pdf" },
  { month: "मार्च", date: "09/03/2009", number: "30", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", patrakNumber: 30, pdfLink: "/misc/P2/p2-090309.pdf" },
  { month: "मार्च", date: "12/03/2009", number: "31", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , patrakNumber: 31, pdfLink: "/misc/P2/p2-120309.pdf"},
  { month: "मार्च", date: "16/03/2009", number: "32", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , patrakNumber: 32, pdfLink: "/misc/P2/p2-160309-1.pdf"},
  { month: "मार्च", date: "16/03/2009", number: "33", title: "सदन की मुद्रित कार्यवाहियों का वितरण", patrakNumber: 33, pdfLink: "/misc/P2/p2-160309-2.pdf" },
  { month: "मार्च", date: "16/03/2009", number: "34", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , patrakNumber: 34, pdfLink: "/misc/P2/p2-160309-3.pdf"},
  { month: "मार्च", date: "18/03/2009", number: "35", title: "जनवरी, 2009 सत्र की अनुक्रमणिका पुस्तिका का वितरण", patrakNumber: 35, pdfLink: "/misc/P2/p2-180309-1.pdf" },
  { month: "मार्च", date: "18/03/2009", number: "36", title: "मार्च, 2009 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , patrakNumber: 36, pdfLink: "/misc/P2/p2-180309-2.pdf"},

  // अप्रैल
  { month: "अप्रैल", date: "06/04/2009", number: "37", title: "डॉ. कल्पना परूलेकर (महिदपुर), सदस्य को बंदी किये जाने की सूचना", patrakNumber: 37, pdfLink: "/misc/P2/p2-060409-1.pdf" },
  { month: "अप्रैल", date: "06/04/2009", number: "38", title: "राव उदय प्रताप सिंह (तेंदूखेड़ा), सदस्य को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 38, pdfLink: "/misc/P2/p2-060409-2.pdf" },
  { month: "अप्रैल", date: "13/04/2009", number: "39", title: "श्री जितेन्द्र डागा (मन्नू) (हुजूर), सदस्य को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 39, pdfLink: "/misc/P2/p2-130409.pdf" },
  { month: "अप्रैल", date: "17/04/2009", number: "40", title: "श्री माखनलाल जाटव, सदस्य के निधन की सूचना", patrakNumber: 40, pdfLink: "/misc/P2/p2-170409.pdf" },
  { month: "अप्रैल", date: "20/04/2009", number: "41", title: "श्री बाला बच्चन (पानसेमल), सदस्य को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 41, pdfLink: "/misc/P2/p2-200409.pdf" },

  // मई
  { month: "मई", date: "08/05/2009", number: "42", title: "श्री यशपाल सिंह सिसोदिया (मंदसौर), सदस्य को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 42, pdfLink: "/misc/P2/p2-080509.pdf" },
  { month: "मई", date: "29/05/2009", number: "43", title: "श्री सज्जन सिंह वर्मा (सोनकच्छ), सदस्य द्वारा विधान सभा की सदस्यता से त्याग-पत्र की सूचना", patrakNumber: 43, pdfLink: "/misc/P2/p2-290509-1.pdf" },
  { month: "मई", date: "29/05/2009", number: "44", title: "राव उदय प्रताप सिंह (तेंदूखेड़ा), सदस्य द्वारा विधान सभा की सदस्यता से त्याग-पत्र की सूचना", patrakNumber: 44, pdfLink: "/misc/P2/p2-290509-2.pdf" },

  //  जून
  { month: "जून", date: "01/06/2009", number: "45", title: "त्रयोदश विधान सभा का तृतीय सत्र (दिनांक 6 जुलाई से 4 अगस्त, 2009)" , patrakNumber: 45, pdfLink: "https://example.com/pdf/1.pdf"},
  { month: "जून", date: "15/06/2009", number: "46", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , patrakNumber: 46, pdfLink: "https://example.com/pdf/1.pdf"},
  { month: "जून", date: "17/06/2009", number: "47", title: "स्थगन प्रस्ताव, ध्यानाकर्षण एवं शून्यकाल की सूचनाएं प्राप्त करने की व्यवस्था", patrakNumber: 47, pdfLink: "https://example.com/pdf/1.pdf" },
  { month: "जून", date: "27/06/2009", number: "48", title: "श्री विश्वास सारंग (नरेला), सदस्य को बंदी एवं रिहा किये जाने की सूचना" , patrakNumber: 48, pdfLink: "/misc/P2/p2-270609-1.pdf"},
  { month: "जून", date: "27/06/2009", number: "49", title: "श्री सत्यनारायण पटेल (देपालपुर), सदस्य को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 49, pdfLink: "/misc/P2/p2-270609-2.pdf" },
  { month: "जून", date: "30/06/2009", number: "50", title: '"संसद एवं विधान मण्डल से संबंधित संविधान के महत्वपूर्ण उपबन्ध" व "संसदीय प्रणाली प्रचलन में" पुस्तकों का वितरण', patrakNumber: 50, pdfLink: "/misc/P2/p2-300609.pdf" },
  // जुलाई 2009
  { month: "जुलाई", date: "02/07/2009", number: "51", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", patrakNumber: 51, pdfLink: "/misc/P2/p2-020709-1.pdf" },
  { month: "जुलाई", date: "02/07/2009", number: "52", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", patrakNumber: 52, pdfLink: "/misc/P2/p2-020709-2.pdf" },
  { month: "जुलाई", date: "04/07/2009", number: "54", title: "श्री लखन घनघोरिया (जबलपुर पूर्व), सदस्य को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 54, pdfLink: "/misc/P2/p2-040709-1.pdf" },
  { month: "जुलाई", date: "04/07/2009", number: "58", title: "मध्य प्रदेश कांग्रेस विधायक दल के उप नेता (चौधरी राकेश सिंह चतुर्वेदी, सदस्य) का मनोनयन" , patrakNumber: 58, pdfLink: "/misc/P2/p2-040709-2.pdf"},
  { month: "जुलाई", date: "06/07/2009", number: "53", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", patrakNumber: 53, pdfLink: "/misc/P2/p2-060709-1.pdf" },
  { month: "जुलाई", date: "06/07/2009", number: "55", title: "स्वर्ण जयंती वर्ष-2006 के अंतर्गत प्रकाशित ग्रन्थों का वितरण", patrakNumber: 55, pdfLink: "/misc/P2/p2-060709-2.pdf" },
  { month: "जुलाई", date: "06/07/2009", number: "56", title: "सदन की मुद्रित कार्यवाहियों का वितरण", patrakNumber: 56, pdfLink: "/misc/P2/p2-060709-3.pdf" },
  { month: "जुलाई", date: "05/07/2009", number: "57", title: "सभा भवन  आसन क्रम में  परिवर्तन" , patrakNumber: 57, pdfLink: "https://example.com/pdf/1.pdf"},
  { month: "जुलाई", date: "07/07/2009", number: "59", title: "कार्य मंत्रणा समिति का प्रतिवेदन", patrakNumber: 59, pdfLink: "/misc/P2/p2-070709-1.pdf" },
  { month: "जुलाई", date: "07/07/2009", number: "60", title: "लोक लेखा, प्राक्कलन, सरकारी उपक्रमों संबंधी एवं अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी समितियों के लिए क्रमश: 11-11-11 तथा 15 सदस्यों का निर्वाचन : कार्यक्रम", patrakNumber: 60, pdfLink: "/misc/P2/p2-070709-2.pdf" },
  { month: "जुलाई", date: "07/07/2009", number: "61", title: "जवाहरलाल नेहरू कृषि विश्वविद्यालय, जबलपुर के प्रबंध मंडल के लिए 3 सदस्यों का निर्वाचन : कार्यक्रम" , patrakNumber: 61, pdfLink: "/misc/P2/p2-070709-3.pdf"},
  { month: "जुलाई", date: "07/07/2009", number: "62", title: "पत्रकार दीर्घा सलाहकार समिति का गठन", patrakNumber: 62, pdfLink: "/misc/P2/p2-070709-4.pdf" },
  { month: "जुलाई", date: "08/07/2009", number: "63", title: "शुक्रवार, दिनांक 17 जुलाई, 2009 हेतु निर्धारित अशासकीय संकल्पों की सूची", patrakNumber: 63, pdfLink: "/misc/P2/p2-080709.pdf" },
  { month: "जुलाई", date: "09/07/2009", number: "64", title: "वर्ष 2009-10 से संबंधित बजट साहित्य का वितरण" , patrakNumber: 64, pdfLink: "/misc/P2/p2-090709-1.pdf"},
  { month: "जुलाई", date: "09/07/2009", number: "65", title: "बजट प्रस्तुतीकरण होने के कारण दिनांक 10 जुलाई, 2009 को प्रश्नोत्तर काल नहीं होने संबंधी सूचना", patrakNumber: 65, pdfLink: "/misc/P2/p2-090709-2.pdf" },
  { month: "जुलाई", date: "09/07/2009", number: "67", title: "वित्त विभाग के विशेषज्ञों एवं विधान सभा अधिकारियों द्वारा बजट प्रक्रिया एवं प्रश्न संबंधी जानकारी देने की सूचना", patrakNumber: 67, pdfLink: "/misc/P2/p2-090709-3.pdf" },
  { month: "जुलाई", date: "09/07/2009", number: "68", title: "समितियों का निर्वाचन : प्रस्तावित उम्मीदवार", patrakNumber: 68, pdfLink: "/misc/P2/p2-090709-4.pdf" },
  { month: "जुलाई", date: "09/07/2009", number: "69", title: "प्रबंध मंडल के लिए निर्वाचन : प्रस्तावित उम्मीदवार", patrakNumber: 69, pdfLink: "/misc/P2/p2-090709-5.pdf" },
  { month: "जुलाई", date: "10/07/2009", number: "66", title: "मार्च, 2009 सत्र की अनुक्रमणिका पुस्तिका का वितरण", patrakNumber: 66, pdfLink: "/misc/P2/p2-100709-1.pdf" },
  { month: "जुलाई", date: "10/07/2009", number: "70", title: "कटौती प्रस्तावों की सूचनाएं" , patrakNumber: 70, pdfLink: "/misc/P2/p2-100709-2.pdf"},
  { month: "जुलाई", date: "10/07/2009", number: "71", title: "समितियों का निर्वाचन : वैध उम्मीदवार" , patrakNumber: 71, pdfLink: "/misc/P2/p2-100709-3.pdf"},
  { month: "जुलाई", date: "10/07/2009", number: "72", title: "प्रबंध मंडल के लिए निर्वाचन : वैध उम्मीदवार", patrakNumber: 72, pdfLink: "/misc/P2/p2-100709-4.pdf" },
  { month: "जुलाई", date: "12/07/2009", number: "73", title: "जुलाई-अगस्त, 2009 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", patrakNumber: 73, pdfLink: "/misc/P2/p2-120709.pdf" },
  { month: "जुलाई", date: "13/07/2009", number: "74", title: "प्रश्न के उत्तर में संशोधन", patrakNumber: 74, pdfLink: "/misc/P2/p2-130709.pdf" },
  { month: "जुलाई", date: "14/07/2009", number: "75", title: "दैनिक भत्ते का अग्रिम", patrakNumber: 75, pdfLink: "/misc/P2/p2-140709-1.pdf" },
  { month: "जुलाई", date: "14/07/2009", number: "76", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का प्रथम प्रतिवेदन", patrakNumber: 76, pdfLink: "/misc/P2/p2-140709-2.pdf" },
  { month: "जुलाई", date: "14/07/2009", number: "77", title: "प्रश्न के उत्तर में संशोधन", patrakNumber: 77, pdfLink: "/misc/P2/p2-140709-3.pdf" },
  { month: "जुलाई", date: "14/07/2009", number: "78", title: "कार्यमंत्रणा समिति का प्रतिवेदन", patrakNumber: 78, pdfLink: "/misc/P2/p2-140709-4.pdf" },
  { month: "जुलाई", date: "14/07/2009", number: "79", title: "समितियों का निर्वाचन: घोषणा" , patrakNumber: 79, pdfLink: "/misc/P2/p2-140709-5.pdf"},
  { month: "जुलाई", date: "14/07/2009", number: "80", title: "प्रबंध मंडल के लिए निर्वाचन : घोषणा", patrakNumber: 80, pdfLink: "/misc/P2/p2-140709-6.pdf" },
  { month: "जुलाई", date: "14/07/2009", number: "81", title: "कार्यमंत्रणा समिति में रिक्त स्थान की पूर्ति", patrakNumber: 81, pdfLink: "/misc/P2/p2-140709-7.pdf" },
  { month: "जुलाई", date: "15/07/2009", number: "82", title: "प्रश्न के उत्तर में संशोधन", patrakNumber: 82, pdfLink: "/misc/P2/p2-150709.pdf" },
  { month: "जुलाई", date: "17/07/2009", number: "83", title: "शुक्रवार, दिनांक 17 जुलाई, 2009 हेतु निर्धारित अशासकीय संकल्पों की सूची", patrakNumber: 83, pdfLink: "/misc/P2/p2-170709.pdf" },
  { month: "जुलाई", date: "22/07/2009", number: "84", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का द्वितीय प्रतिवेदन", patrakNumber: 84, pdfLink: "/misc/P2/p2-220709.pdf" },
  { month: "जुलाई", date: "23/07/2009", number: "85", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा श्रीमती सुषमा स्वराज के स्थान की पूर्ति हेतु राज्य सभा उप-निर्वाचन", patrakNumber: 85, pdfLink: "/misc/P2/p2-230709-1.pdf" },
  { month: "जुलाई", date: "23/07/2009", number: "86", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा श्री नरेन्द्र सिंह तोमर के स्थान की पूर्ति हेतु राज्यसभा उप निर्वाचन", patrakNumber: 86, pdfLink: "https://example.com/pdf/1.pdf" },
  { month: "जुलाई", date: "23/07/2009", number: "87", title: "नियम 52 के अंतर्गत आधे घन्टे की चर्चा" , patrakNumber: 87, pdfLink: "/misc/P2/p2-230709-3.pdf"},
  { month: "जुलाई", date: "24/07/2009", number: "88", title: "जुलाई-अगस्त, 2009 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", patrakNumber: 88, pdfLink: "/misc/P2/p2-240709-1.pdf" },
  { month: "जुलाई", date: "24/07/2009", number: "89", title: "नियम 130 के अधीन लोकहित के विषय पर चर्चा", patrakNumber: 89, pdfLink: "/misc/P2/p2-240709-2.pdf" },
  { month: "जुलाई", date: "24/07/2009", number: "90", title: "कार्य मंत्रणा समिति का प्रतिवेदन", patrakNumber: 90, pdfLink: "/misc/P2/p2-240709-3.pdf" },
  { month: "जुलाई", date: "28/07/2009", number: "91", title: "संयुक्त राष्ट्र संघ की संस्थाओं के सहयोग से महिलाओं एवं बालकों के कल्याण बाबत् जानकारियों का आदान-प्रदान" , patrakNumber: 91, pdfLink: "/misc/P2/p2-280709-1.pdf"},
  { month: "जुलाई", date: "28/07/2009", number: "92", title: "नाम-निर्दिष्ट 8 समितियों का गठन", patrakNumber: 92, pdfLink: "/misc/P2/p2-280709-2.pdf" },
  // अगस्त 2009
  { month: "अगस्त", date: "12/08/2009", number: "93", title: "श्री विश्वेश्वर भगत (कटंगी), सदस्य को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 93, pdfLink: "/misc/P2/p2-120809.pdf" },
  { month: "अगस्त", date: "13/08/2009", number: "94", title: "सामान्य प्रयोजन समिति का गठन", patrakNumber: 94, pdfLink: "/misc/P2/p2-130809.pdf" },
  { month: "अगस्त", date: "26/08/2009", number: "95", title: "सर्वश्री अरूणोदय चौबै (खुरई), गोविन्द सिंह राजपूत (सुरखी) तथा नारायण प्रजापति (बण्डा), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 95, pdfLink: "/misc/P2/p2-260809.pdf" },

  // सितम्बर 2009
  { month: "सितम्बर", date: "17/09/2009", number: "96", title: "श्री हुकुम सिंह कराड़ा (शाजापुर), सदस्य को बंदी एवं रिहा किये जाने की सूचना" , patrakNumber: 96, pdfLink: "/misc/P2/p2-170909-1.pdf"},
  { month: "सितम्बर", date: "17/09/2009", number: "97", title: "श्री हुकुम सिंह कराड़ा (शाजापुर), सदस्य को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 97, pdfLink: "/misc/P2/p2-170909-2.pdf" },
  { month: "सितम्बर", date: "18/09/2009", number: "98", title: "श्री विजेन्द्र सिंह मालाहेड़ा (मनासा), सदस्य को बंदी एवं रिहा किये जाने की सूचना" , patrakNumber: 98, pdfLink: "/misc/P2/p2-180909-1.pdf"},
  { month: "सितम्बर", date: "18/09/2009", number: "99", title: "सर्वश्री प्रद्युम्न सिंह तोमर (ग्वालियर), लाखन सिंह यादव (भितरवार) तथा श्रीमती इमरतीदेवी (डबरा), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना" , patrakNumber: 99, pdfLink: "/misc/P2/p2-180909-2.pdf"},
  { month: "सितम्बर", date: "26/09/2009", number: "100", title: "श्री महेन्द्र सिंह कालूखेड़ा (जावरा) तथा श्री विजेन्द्र सिंह मालाहेड़ा (मनावर), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 100, pdfLink: "/misc/P2/p2-260909-1.pdf" },
  { month: "सितम्बर", date: "26/09/2009", number: "101", title: "श्री प्रद्युम्न सिंह तोमर (ग्वालियर), सदस्य को बंदी एवं रिहा किये जाने की सूचना", patrakNumber: 101, pdfLink: "/misc/P2/p2-260909-2.pdf" },

  // अक्टूबर 2009
  { month: "अक्टूबर", date: "16/10/2009", number: "102", title: "त्रयोदश विधान सभा का चतुर्थ सत्र (दिनांक 16 से 27 नवम्बर, 2009)", patrakNumber: 102, pdfLink: "/misc/P2/p2-161009.pdf" },
  { month: "अक्टूबर", date: "27/10/2009", number: "103", title: "स्थगन प्रस्ताव, ध्यानाकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", patrakNumber: 103, pdfLink: "/misc/P2/p2-271009.pdf" },
  // नवम्बर 2009
  { month: "नवम्बर", date: "03/11/2009", number: "104", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", patrakNumber: 105, pdfLink: "/misc/P2/p2-031109.pdf" },
  { month: "नवम्बर", date: "04/11/2009", number: "105", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , patrakNumber: 104, pdfLink: "/misc/P2/p2-041109.pdf"},
  { month: "नवम्बर", date: "09/11/2009", number: "106", title: "संविधान संशोधन का अनुसमर्थन संबंधी संकल्प" , patrakNumber: 111, pdfLink: "/misc/P2/p2-091109.pdf"},
  { month: "नवम्बर", date: "12/11/2009", number: "107", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , patrakNumber: 106, pdfLink: "/misc/P2/p2-121109.pdf"},
  { month: "नवम्बर", date: "13/11/2009", number: "108", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", patrakNumber: 107, pdfLink: "/misc/P2/p2-131109-1.pdf" },
  { month: "नवम्बर", date: "13/11/2009", number: "109", title: "प्रबोधन कार्यक्रम 2009 के दौरान माननीय लोक सभा अध्यक्ष के साथ लिए गए समूह छाया-चित्र का वितरण" , patrakNumber: 108, pdfLink: "/misc/P2/p2-131109-2.pdf"},
  { month: "नवम्बर", date: "13/11/2009", number: "110", title: "सभा भवन आसन क्रम में परिवर्तन", patrakNumber: 112, pdfLink: "/misc/P2/p2-131109-3.pdf" },
  { month: "नवम्बर", date: "15/11/2009", number: "111", title: "मध्यप्रदेश विधान सभा में आंग्ल भारतीय समुदाय (श्रीमती एल.बी. लोबो) को प्रतिनिधित्व दिया जाना", patrakNumber: 110, pdfLink: "/misc/P2/p2-151109.pdf" },
  { month: "नवम्बर", date: "16/11/2009", number: "112", title: "दैनिक भत्ते का अग्रिम" , patrakNumber: 109, pdfLink: "/misc/P2/p2-161109-1.pdf"},
  { month: "नवम्बर", date: "16/11/2009", number: "113", title: "प्रश्न के उत्तर में संशोधन" , patrakNumber: 113, pdfLink: "/misc/P2/p2-161109-2.pdf"},
  { month: "नवम्बर", date: "17/11/2009", number: "114", title: "शुक्रवार, दिनांक 20 नवम्बर, 2009 हेतु निर्धारित अशासकीय संकल्पों की सूची" , patrakNumber: 114, pdfLink: "/misc/P2/p2-171109-1.pdf"},
  { month: "नवम्बर", date: "17/11/2009", number: "115", title: "4 समितियों में रिक्त स्थानों की पूर्ति हेतु निर्वाचन : कार्यक्रम" , patrakNumber: 115, pdfLink: "/misc/P2/p2-171109-2.pdf"},
  { month: "नवम्बर", date: "17/11/2009", number: "116", title: "कार्य मंत्रणा समिति का प्रतिवेदन", patrakNumber: 116, pdfLink: "/misc/P2/p2-171109-3.pdf" },
  { month: "नवम्बर", date: "18/11/2009", number: "117", title: "प्रश्न के उत्तर में संशोधन" , patrakNumber: 117, pdfLink: "/misc/P2/p2-181109-1.pdf"},
  { month: "नवम्बर", date: "18/11/2009", number: "118", title: "समितियों हेतु निर्वाचन : प्रस्तावित उम्मीदवार", patrakNumber: 118, pdfLink: "/misc/P2/p2-181109-2.pdf" },
  { month: "नवम्बर", date: "18/11/2009", number: "119", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का तृतीय प्रतिवेदन", patrakNumber: 119, pdfLink: "/misc/P2/p2-181109-3.pdf" },
    { month: "नवम्बर", date: "19/11/2009", number: "121", title: "समितियों हेतु निर्वाचन : वैध उम्मीदवार" , patrakNumber: 121, pdfLink: "/misc/P2/p2-191109.pdf"},
  { month: "नवम्बर", date: "19/11/2009", number: "120", title: "जुलाई-अगस्त, 2009 सत्र की अनुक्रमणिका पुस्तिका का वितरण", patrakNumber: 120, pdfLink: "/misc/P2/p2-201109-1.pdf" },

  { month: "नवम्बर", date: "20/11/2009", number: "122", title: "सदन की मुद्रित कार्यवाहियों का वितरण", patrakNumber: 122, pdfLink: "/misc/P2/p2-201109-2.pdf" },
  { month: "नवम्बर", date: "20/11/2009", number: "123", title: "प्रश्न के उत्तर में संशोधन", patrakNumber: 124, pdfLink: "/misc/P2/p2-201109-3.pdf" },
  { month: "नवम्बर", date: "20/11/2009", number: "124", title: "मध्यप्रदेश विधान सभा सदस्यों एवं पूर्व सदस्यों के वेतन/भत्तों आदि के पुनरीक्षण तथा आनुषांगिक विषयों का परीक्षण कर अनुशंसाएं करने सम्बन्धी समिति का गठन", patrakNumber: 125, pdfLink: "/misc/P2/p2-201109-4.pdf" },
  { month: "नवम्बर", date: "20/11/2009", number: "125", title: "मध्यप्रदेश गृह निर्माण मण्डल की विधायक/सांसद आवासीय योजना (द्वितीय चरण) के क्रियान्वयन हेतु गठित समिति में सभापति की नियुक्ति", patrakNumber: 126, pdfLink: "/misc/P2/p2-201109-5.pdf" },
  { month: "नवम्बर", date: "22/11/2009", number: "126", title: "प्रश्न के उत्तर में संशोधन" , patrakNumber: 123, pdfLink: "/misc/P2/p2-221109.pdf"},
  { month: "नवम्बर", date: "23/11/2009", number: "127", title: "नवम्बर, 2009 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , patrakNumber: 128, pdfLink: "/misc/P2/p2-231109.pdf"},
  { month: "नवम्बर", date: "24/11/2009", number: "128", title: "मध्यप्रदेश विधान सभा सदस्यों एवं पूर्व सदस्यों के वेतन/भत्तों आदि के पुनरीक्षण तथा अनुषांगिक विषयों का परीक्षण कर अनुशंसाएं करने संबंधी समिति को सुझाव देने की प्रक्रिया" , patrakNumber: 127, pdfLink: "/misc/P2/p2-241109-1.pdf"},
  { month: "नवम्बर", date: "24/11/2009", number: "129", title: "अखिल भारतीय पीठासीन अधिकारी सम्मेलन के आयोजन संबंधी साधिकार समिति का गठन" , patrakNumber: 129, pdfLink: "/misc/P2/p2-241109-2.pdf"},
  { month: "नवम्बर", date: "24/11/2009", number: "130", title: "समितियों हेतु निर्वाचन : घोषणा", patrakNumber: 130, pdfLink: "/misc/P2/p2-241109-3.pdf" },
  { month: "नवम्बर", date: "24/11/2009", number: "131", title: "समितियों में रिक्त स्थानों की पूर्ति", patrakNumber: 131, pdfLink: "/misc/P2/p2-241109-4.pdf" },
  { month: "नवम्बर", date: "24/11/2009", number: "132", title: "नवम्बर, 2009 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , patrakNumber: 132, pdfLink: "/misc/P2/p2-241109-5.pdf"},
  { month: "नवम्बर", date: "24/11/2009", number: "133", title: "विशिष्ट समिति का गठन" , patrakNumber: 133, pdfLink: "/misc/P2/p2-241109-6.pdf"},
];

// ---------------------- Styles ----------------------
const styles = {
  wrapper: {
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    backgroundColor: "#f3f6fb",
    minHeight: "100vh",
  },
  headerContainer: {
    width: "100%",
    background: "linear-gradient(90deg, #1e40af, #2563eb)",
    color: "#fff",
    padding: "40px 20px 60px 20px",
    borderRadius: "0 0 25px 25px",
    position: "relative",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  backButton: {
    position: "absolute",
    top: "20px",
    left: "30px",
    backgroundColor: "#1e3a8a",
    color: "#ffffff",
    padding: "8px 18px",
    borderRadius: "8px",
    fontWeight: 600,
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  mainTitle: {
    textAlign: "center",
    fontSize: "2.3rem",
    fontWeight: 700,
    margin: "0",
    letterSpacing: "0.5px",
  },
  subTitle: {
    textAlign: "center",
    fontSize: "1.2rem",
    marginTop: "10px",
    opacity: 0.9,
  },
  monthNav: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    backgroundColor: "#e0e7ff",
    padding: "15px 10px",
    borderRadius: "10px",
    margin: "25px auto",
    maxWidth: "1100px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },
  monthButton: {
    padding: "8px 16px",
    backgroundColor: "#1e3a8a",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: 600,
    fontSize: "1rem",
    border: "none",
  },
  monthButtonHover: {
    backgroundColor: "#ffffff",
    color: "#1e3a8a",
    boxShadow: "0 4px 10px rgba(37,99,235,0.3)",
  },
  tableContainer: {
    maxWidth: "1100px",
    margin: "30px auto",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#1e40af",
    color: "white",
    padding: "12px 15px",
    textAlign: "left",
    fontWeight: 700,
    fontSize: "1rem",
    borderBottom: "2px solid #ccc",
  },
  td: {
    padding: "12px 15px",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "1rem",
    color: "#1e293b",
    textAlign: "left",
  },
  monthHeader: {
    backgroundColor: "#dbeafe",
    color: "#1e3a8a",
    fontWeight: "700",
    fontSize: "1.1rem",
    textAlign: "center",
  },
  viewLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
};

// ---------------------- Component ----------------------
const PatrakBhagDo2009 = () => {
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
        <p style={styles.subTitle}>वर्ष 2009 — सदन एवं समितियों सम्बन्धी सूचनाएं</p>
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
                {patrakData2009
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

export default PatrakBhagDo2009;