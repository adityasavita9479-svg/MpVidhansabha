import React, { useRef } from "react";
import { Link } from "react-router-dom";

const patrakData2011 = [
    // ---------- जनवरी ----------
  { month: "जनवरी", date: "04/01/2011", number: "102", title: "सर्वश्री प्रदीप अमृतलाल जायसवाल (वारासिवनी), विश्वेश्वर भगत (कटंगी), सदस्य को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-040111.pdf" },
  { month: "जनवरी", date: "05/01/2011", number: "103", title: "श्री वाल सिंह मेड़ा (पेटलावद), सदस्य को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-050111.pdf"},
  { month: "जनवरी", date: "10/01/2011", number: "104", title: "श्री देवी सिंह पटेल (राजपुर), सदस्य को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-100111.pdf" },
  { month: "जनवरी", date: "13/01/2011", number: "105", title: "त्रयोदश विधान सभा का नवम् सत्र (दिनांक 21 फरवरी से 8 अप्रैल, 2011)", pdfLink: "/misc/P2/p2-130111.pdf" },
  { month: "जनवरी", date: "25/01/2011", number: "106", title: "डॉ. कल्पना परूलेकर (महिदपुर), सदस्य को बंदी किये जाने की सूचना", pdfLink: "/misc/P2/p2-250111.pdf" },
  { month: "जनवरी", date: "31/01/2011", number: "107", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-310111.pdf" },

  // ---------- फ़रवरी ----------
  { month: "फ़रवरी", date: "01/02/2011", number: "108", title: "स्थगन प्रस्ताव, ध्यानाकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-010211-1.pdf" },
  { month: "फ़रवरी", date: "01/02/2011", number: "109", title: "चौधरी राकेश सिंह चतुर्वेदी (भिण्ड), सर्वश्री नर्मदा प्रसाद प्रजापति (एन.पी.) (गोटेगांव), सुनील जायसवाल (नरसिंहपुर), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-010211-2.pdf" },
  { month: "फ़रवरी", date: "10/02/2011", number: "110", title: "श्री अमृतलाल जायसवाल (गुड्डा) (वारासिवनी), सदस्य को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-100211.pdf" },
  { month: "फ़रवरी", date: "14/02/2011", number: "111", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ", pdfLink: "/misc/P2/p2-140211-1.pdf" },
  { month: "फ़रवरी", date: "14/02/2011", number: "114", title: "डॉ. कल्पना परूलेकर (महिदपुर), सदस्य को बंदी किये जाने की सूचना", pdfLink: "/misc/P2/p2-140211-2.pdf" },
  { month: "फ़रवरी", date: "17/02/2011", number: "112", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-170211.pdf" },
  { month: "फ़रवरी", date: "20/02/2011", number: "115", title: "महामहिम राज्यपाल (श्री रामेश्वर ठाकुर) के अभिभाषण सम्बन्धी सूचना", pdfLink: "/misc/P2/p2-200211-1.pdf" },
  { month: "फ़रवरी", date: "20/02/2011", number: "117", title: "श्री दिलीप सिंह गुर्जर (नागदा-खाचरोद), डॉ. कल्पना परूलेकर (महिदपुर), श्री रामलाल मालवीय (घट्टिया) सदस्यगण को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-200211-2.pdf"},
  { month: "फ़रवरी", date: "20/02/2011", number: "118", title: "सर्वश्री बलीसिंह मरावी (ब्यौहारी), सुन्दर सिंह (जयसिंह नगर), दिलीप जायसवाल (कोतमा), सुदामा सिंह सिग्राम (पुष्पराजगढ़), ज्ञानसिंह (बांधवगढ़), सुश्री मीना सिंह माण्डवे (मानपुर), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-200211-3.pdf" },
  { month: "फ़रवरी", date: "21/02/2011", number: "113", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-210211-1.pdf"},
  { month: "फ़रवरी", date: "21/02/2011", number: "116", title: "महामहिम राज्यपाल के अभिभाषण पर संशोधन एवं चर्चा सम्बन्धी सूचना", pdfLink: "/misc/P2/p2-210211-2.pdf" },
  { month: "फ़रवरी", date: "21/02/2011", number: "119", title: "श्री रत्नेश सालोमन, सदस्य के निधन की सूचना", pdfLink: "/misc/P2/p2-210211-3.pdf" },
  { month: "फ़रवरी", date: "22/02/2011", number: "120", title: "निधन उल्लेख होने के कारण, दिनांक 22 फरवरी, 2011 को प्रश्नोत्तर काल नहीं होने संबंधी सूचना", pdfLink: "/misc/P2/p2-220211.pdf" },
  { month: "फ़रवरी", date: "23/02/2011", number: "121", title: "सभा भवन आसन क्रम का आवंटन" , pdfLink: "/misc/P2/p2-230211-1.pdf"},
  { month: "फ़रवरी", date: "23/02/2011", number: "122", title: "वर्ष 2011-12 से संबंधित बजट साहित्य का वितरण", pdfLink: "/misc/P2/p2-230211-2.pdf"},
  { month: "फ़रवरी", date: "23/02/2011", number: "123", title: "शुक्रवार, दिनांक 25 फरवरी, 2011 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-230211-3.pdf"},
  { month: "फ़रवरी", date: "23/02/2011", number: "124", title: "बजट प्रस्तुतीकरण होने के कारण, दिनांक 24 फरवरी, 2011 को प्रश्नोत्तर काल नहीं होने संबंधी सूचना", pdfLink: "/misc/P2/p2-230211-4.pdf" },
  { month: "फ़रवरी", date: "24/02/2011", number: "125", title: "कटौती प्रस्ताव की सूचनाएं", pdfLink: "/misc/P2/p2-240211-1.pdf" },
  { month: "फ़रवरी", date: "24/02/2011", number: "126", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-240211-2.pdf" },
  { month: "फ़रवरी", date: "25/02/2011", number: "127", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का एकादश प्रतिवेदन", pdfLink: "/misc/P2/p2-250211-1.pdf" },
  { month: "फ़रवरी", date: "25/02/2011", number: "128", title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-250211-2.pdf" },
  { month: "फ़रवरी", date: "25/02/2011", number: "129", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-250211-3.pdf" },
  { month: "फ़रवरी", date: "26/02/2011", number: "130", title: "फरवरी-अप्रैल, 2011 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-260211.pdf"},
  { month: "फ़रवरी", date: "27/02/2011", number: "132", title: "महामहिम राज्यपाल के अभिभाषण एवं वर्ष 2011-12 के आय-व्ययक पर सामान्य चर्चा की तिथियों में संशोधन विषयक", pdfLink: "/misc/P2/p2-270211.pdf" },
  { month: "फ़रवरी", date: "28/02/2011", number: "131", title: "सदन की मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-280211-1.pdf"},
  { month: "फ़रवरी", date: "28/02/2011", number: "133", title: "प्रश्न के उत्तर में संशोधन" , pdfLink: "/misc/P2/p2-280211-2.pdf"},
  { month: "फ़रवरी", date: "28/02/2011", number: "134", title: "नवम्बर, 2010 सत्र की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-280211-3.pdf"},
  // ---------- मार्च ----------
{ month: "मार्च", date: "01/03/2011", number: "135", title: "समितियों का निर्वाचन कार्यक्रम", pdfLink: "/misc/P2/p2-010311-1.pdf" },
{ month: "मार्च", date: "01/03/2011", number: "136", title: "शुक्रवार, दिनांक 4 एवं 11 मार्च, 2011 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-010311-2.pdf"},
{ month: "मार्च", date: "01/03/2011", number: "137", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-010311-3.pdf" },
{ month: "मार्च", date: "02/03/2011", number: "138", title: "प्रश्न के उत्तर में संशोधन" , pdfLink: "/misc/P2/p2-020311.pdf"},
{ month: "मार्च", date: "03/03/2011", number: "139", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का द्वादश प्रतिवेदन", pdfLink: "/misc/P2/p2-030311.pdf" },
{ month: "मार्च", date: "04/03/2011", number: "141", title: "फरवरी-अप्रैल, 2011 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-040311.pdf" },
{ month: "मार्च", date: "07/03/2011", number: "140", title: "मध्यप्रदेश विधान सभा की 'सभापति व्यवस्था' की पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-070311-1.pdf" },
{ month: "मार्च", date: "07/03/2011", number: "142", title: "दैनिक भत्ते का अग्रिम" , pdfLink: "/misc/P2/p2-070311-2.pdf"},
{ month: "मार्च", date: "06/03/2011", number: "143", title: "सभा भवन आसन क्रम में परिवर्तन" , pdfLink: "/misc/P2/p2-060311-1.pdf"},
{ month: "मार्च", date: "06/03/2011", number: "144", title: "प्रश्न के उत्तर में संशोधन" , pdfLink: "/misc/P2/p2-060311-2.pdf"},
{ month: "मार्च", date: "08/03/2011", number: "145", title: "प्रश्न के उत्तर में संशोधन" , pdfLink: "/misc/P2/p2-080311-1.pdf"},
{ month: "मार्च", date: "08/03/2011", number: "146", title: "राजमाता विजयाराजे सिंधिया कृषि विश्वविद्यालय, ग्वालियर के प्रबंध मण्डल के लिए 3 सदस्यों का निर्वाचन : कार्यक्रम", pdfLink: "/misc/P2/p2-080311-2.pdf" },
{ month: "मार्च", date: "08/03/2011", number: "147", title: "लोक लेखा, प्राक्कलन, सरकारी उपक्रमों संबंधी एवं अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी समितियों के लिए क्रमश: 11-11-11 तथा 15 सदस्यों का निर्वाचन : कार्यक्रम", pdfLink: "/misc/P2/p2-080311-3.pdf" },
{ month: "मार्च", date: "09/03/2011", number: "148", title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-090311-1.pdf" },
{ month: "मार्च", date: "09/03/2011", number: "149", title: "समितियों का निर्वाचन : प्रस्तावित उम्मीदवार", pdfLink: "/misc/P2/p2-090311-2.pdf" },
{ month: "मार्च", date: "09/03/2011", number: "150", title: "प्रबंध मण्डल के लिए निर्वाचन : प्रस्तावित उम्मीदवार" , pdfLink: "/misc/P2/p2-090311-3.pdf"},
{ month: "मार्च", date: "10/03/2011", number: "151", title: "समितियों का निर्वाचन : वैध उम्मीदवार" , pdfLink: "/misc/P2/p2-100311-1.pdf"},
{ month: "मार्च", date: "10/03/2011", number: "152", title: "प्रबंध मण्डल के लिए निर्वाचन : वैध उम्मीदवार", pdfLink: "/misc/P2/p2-100311-2.pdf" },
{ month: "मार्च", date: "11/03/2011", number: "153", title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-110311-1.pdf" },
{ month: "मार्च", date: "11/03/2011", number: "155", title: "फरवरी-अप्रैल, 2011 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-110311-2.pdf"},
{ month: "मार्च", date: "14/03/2011", number: "154", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-140311-1.pdf"},
{ month: "मार्च", date: "14/03/2011", number: "156", title: "सभा भवन आसन क्रम में परिवर्तन" , pdfLink: "/misc/P2/p2-140311-2.pdf"},
{ month: "मार्च", date: "14/03/2011", number: "157", title: "शुक्रवार, दिनांक 18 मार्च, 2011 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-140311-3.pdf" },
{ month: "मार्च", date: "17/03/2011", number: "158", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-170311-1.pdf" },
{ month: "मार्च", date: "17/03/2011", number: "159", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का त्रयोदश प्रतिवेदन" , pdfLink: "/misc/P2/p2-170311-2.pdf"},
{ month: "मार्च", date: "18/03/2011", number: "160", title: "सदन की मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-180311-1.pdf" },
{ month: "मार्च", date: "18/03/2011", number: "161", title: "फरवरी-अप्रैल, 2011 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-180311-2.pdf" },
{ month: "मार्च", date: "28/03/2011", number: "162", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-280311-1.pdf" },
{ month: "मार्च", date: "28/03/2011", number: "163", title: "दिनांक 30 मार्च, 2011 को सभा की बैठक अपराह्न 1.00 बजे पश्चात् नहीं होने विषयक" , pdfLink: "/misc/P2/p2-280311-2.pdf"},
{ month: "मार्च", date: "28/03/2011", number: "164", title: "शुक्रवार, दिनांक 1 अप्रैल, 2011 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-280311-3.pdf"},
{ month: "मार्च", date: "31/03/2011", number: "165", title: "सदन की मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-310311-1.pdf"},
{ month: "मार्च", date: "31/03/2011", number: "166", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-310311-2.pdf" },
{ month: "मार्च", date: "31/03/2011", number: "167", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का चतुर्दश प्रतिवेदन" , pdfLink: "/misc/P2/p2-310311-3.pdf"},
// ---------- अप्रैल ----------
{ month: "अप्रैल", date: "01/04/2011", number: "168", title: "समितियों का निर्वाचन : घोषणा", pdfLink: "/misc/P2/p2-010411-1.pdf" },
{ month: "अप्रैल", date: "01/04/2011", number: "169", title: "प्रबंध मण्डल के लिए निर्वाचन : घोषणा" , pdfLink: "/misc/P2/p2-010411-2.pdf"},
{ month: "अप्रैल", date: "01/04/2011", number: "170", title: "नाम-निर्दिष्ट 12 समितियों का गठन", pdfLink: "/misc/P2/p2-010411-3.pdf" },
{ month: "अप्रैल", date: "15/04/2011", number: "171", title: "मुख्य प्रतिपक्षी दल (इंडियन नेशनल कांग्रेस) के नेता श्री अजय सिंह, सदस्य को विधिवत नेता प्रतिपक्ष मान्य करना", pdfLink: "/misc/P2/p2-150411.pdf" },
{ month: "अप्रैल", date: "25/04/2011", number: "172", title: "मध्यप्रदेश विधान सभा में निर्वाचित सदस्यों द्वारा राज्यसभा के एक स्थान की पूर्ति हेतु उप-निर्वाचन की अधिसूचना" , pdfLink: "/misc/P2/p2-250411.pdf"},
{ month: "अप्रैल", date: "28/04/2011", number: "173", title: "राज्यसभा उप निर्वाचन संबंधी पत्रक भाग-दो (क्रमांक 172) में, अधिसूचना दिनांक 28.4.2011 के तारतम्य में संशोधन" , pdfLink: "/misc/P2/p2-280411.pdf"},

// ---------- मई ----------
{ month: "मई", date: "09/05/2011", number: "174", title: "सर्वश्री सत्यनारायण पटेल (देपालपुर) तथा  तुलसीराम सिलावट (सावेर) सदस्यगण को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-090511.pdf"},

// ---------- जून ----------
{ month: "जून", date: "06/06/2011", number: "175", title: "सामान्य प्रयोजन समिति का गठन", pdfLink: "/misc/P2/p2-060611.pdf" },
{ month: "जून", date: "13/06/2011", number: "176", title: "त्रयोदश विधान सभा का दशम् सत्र (दिनांक 11 से 22 जुलाई, 2011)", pdfLink: "https://example.com/pdf/1.pdf" },
{ month: "जून", date: "21/06/2011", number: "177", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-210611.pdf"},
{ month: "जून", date: "23/06/2011", number: "178", title: "स्थगन प्रस्ताव, ध्यानाकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-230611.pdf" },

// ---------- जुलाई ----------
{ month: "जुलाई", date: "07/07/2011", number: "181", title: 'राष्ट्रगीत "वन्दे मातरम्" से सभा की बैठक का आरंभ', pdfLink: "/misc/P2/p2-070711.pdf" },
{ month: "जुलाई", date: "08/07/2011", number: "180", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-080711.pdf" },
{ month: "जुलाई", date: "10/07/2011", number: "182", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-100711-1.pdf" },
{ month: "जुलाई", date: "10/07/2011", number: "183", title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-100711-2.pdf" },
{ month: "जुलाई", date: "11/07/2011", number: "179", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-110711-1.pdf"},
{ month: "जुलाई", date: "11/07/2011", number: "184", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-110711-2.pdf"},
{ month: "जुलाई", date: "13/07/2011", number: "185", title: "शुक्रवार, दिनांक 15 जुलाई, 2011 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-130711.pdf" },
{ month: "जुलाई", date: "14/07/2011", number: "186", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का पंचदश प्रतिवेदन" , pdfLink: "/misc/P2/p2-140711-1.pdf"},
{ month: "जुलाई", date: "14/07/2011", number: "187", title: "निरस्त बैठक के प्रश्नों को अगले दिन की कार्यवाही में मुद्रित किया जाना" , pdfLink: "/misc/P2/p2-140711-2.pdf"},
{ month: "जुलाई", date: "17/07/2011", number: "191", title: "जुलाई, 2011 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-170711.pdf"},
{ month: "जुलाई", date: "18/07/2011", number: "188", title: "सदन की मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-180711-1.pdf" },
{ month: "जुलाई", date: "18/07/2011", number: "189", title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-180711-2.pdf" },
{ month: "जुलाई", date: "18/07/2011", number: "190", title: "माननीय सदस्यों के लिये वृक्षारोपण एवं सांस्कृतिक कार्यक्रमों का आयोजन" , pdfLink: "/misc/P2/p2-180711-3.pdf"},
{ month: "जुलाई", date: "19/07/2011", number: "192", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-190711-1.pdf" },
{ month: "जुलाई", date: "19/07/2011", number: "193", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-190711-2.pdf" },
{ month: "जुलाई", date: "19/07/2011", number: "194", title: "शुक्रवार, दिनांक 22 जुलाई, 2011 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-190711-3.pdf" },
{ month: "जुलाई", date: "21/07/2011", number: "195", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का षोडश: प्रतिवेदन" , pdfLink: "/misc/P2/p2-210711.pdf"},
{ month: "जुलाई", date: "22/07/2011", number: "196", title: "जुलाई, 2011 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-220711.pdf" },
{ month: "जुलाई", date: "23/07/2011", number: "197", title: "पुस्तकालय समिति में 3 सदस्यों का मनोनयन" , pdfLink: "/misc/P2/p2-230711.pdf"},
// ---------- अगस्त ----------
{ month: "अगस्त", date: "11/08/2011", number: "198", title: "श्री ऐदल सिंह कंसाना (सुमावली), डॉ. गोविन्द सिंह (लहार), सर्वश्री रणवीर सिंह जाटव (गोहद) तथा अजय सिंह (चुरहट), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-110811.pdf"},
{ month: "अगस्त", date: "12/08/2011", number: "199", title: "सर्वश्री सत्यनारायण पटेल (देपालपुर), अश्विन जोशी (इन्दौर-3) तथा तुलसीराम सिलावट (सांवेर), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-120811.pdf"},

// ---------- सितम्बर ----------
{ month: "सितम्बर", date: "03/09/2011", number: "200", title: "श्री दशरथ सिंह लोधी (जबेरा) तथा श्रीमती उमादेवी खटीक (हटा), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-030911.pdf"},
{ month: "सितम्बर", date: "20/09/2011", number: "201", title: "श्री सुदर्शन गुप्ता (इन्दौर-1), सदस्य को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-200911.pdf" },

// ---------- अक्टूबर ----------
{ month: "अक्टूबर", date: "19/10/2011", number: "202", title: "त्रयोदश विधान सभा का एकादश सत्र (दिनांक 21 नवम्बर से 2 दिसम्बर, 2011)", pdfLink: "https://example.com/pdf/1.pdf" },

// ---------- नवम्बर ----------
{ month: "नवम्बर", date: "02/11/2011", number: "203", title: "स्थगन प्रस्ताव, ध्यानाकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-021111.pdf" },
{ month: "नवम्बर", date: "04/11/2011", number: "204", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-041111.pdf" },
{ month: "नवम्बर", date: "09/11/2011", number: "205", title: "डॉ. प्रभुराम चौधरी (सांची), सदस्य को बंदी किये जाने की सूचना", pdfLink: "/misc/P2/p2-041111.pdf" },
{ month: "नवम्बर", date: "16/11/2011", number: "206", title: 'राष्ट्रगीत "वन्दे मातरम्" से सभा की बैठक का आरंभ', pdfLink: "https://example.com/pdf/1.pdf" },
{ month: "नवम्बर", date: "17/11/2011", number: "207", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-161111.pdf" },
{ month: "नवम्बर", date: "18/11/2011", number: "208", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , pdfLink: "/misc/P2/p2-171111.pdf"},
{ month: "नवम्बर", date: "20/11/2011", number: "209", title: "सर्वश्री प्रद्युम्न सिंह तोमर (ग्वालियर) तथा लाखन सिंह यादव (भितरवार), सदस्यगण को बंदी किये जाने की सूचना", pdfLink: "/misc/P2/p2-181111.pdf" },
{ month: "नवम्बर", date: "20/11/2011", number: "210", title: "सर्वश्री प्रदीप अमृतलाल जायसवाल (गुड्डा) (बारासिवनी), विश्वेश्वर भगत (कटंगी), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-201111-1.pdf"},
{ month: "नवम्बर", date: "21/11/2011", number: "212", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-211111.pdf" },
{ month: "नवम्बर", date: "22/11/2011", number: "211", title: "सदन की मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-221111-1.pdf"},
{ month: "नवम्बर", date: "22/11/2011", number: "213", title: "प्रश्न के उत्तर में संशोधन" , pdfLink: "/misc/P2/p2-221111-2.pdf"},
{ month: "नवम्बर", date: "23/11/2011", number: "214", title: "शुक्रवार, दिनांक 25 नवम्बर, 2011 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-231111.pdf"},
{ month: "नवम्बर", date: "24/11/2011", number: "215", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का सप्तदश प्रतिवेदन", pdfLink: "/misc/P2/p2-241111.pdf" },
{ month: "नवम्बर", date: "25/11/2011", number: "216", title: "फरवरी-अप्रैल, 2011 सत्र की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-251111-1.pdf"},
{ month: "नवम्बर", date: "25/11/2011", number: "217", title: "कार्य मंत्रणा समिति का प्रतिवेदन" , pdfLink: "/misc/P2/p2-251111-2.pdf"},
{ month: "नवम्बर", date: "25/11/2011", number: "218", title: "नवम्बर-दिसम्बर, 2011 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-251111-3.pdf"},
{ month: "नवम्बर", date: "29/11/2011", number: "219", title: "जुलाई, 2011 सत्र की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-291111.pdf"},
{ month: "नवम्बर", date: "30/11/2011", number: "220", title: "शुक्रवार, दिनांक 2 दिसम्बर, 2011 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-301111.pdf"},

// ---------- दिसम्बर ----------
{ month: "दिसम्बर", date: "01/12/2011", number: "221", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का अष्टदश प्रतिवेदन", pdfLink: "/misc/P2/p2-011211.pdf" },
{ month: "दिसम्बर", date: "02/12/2011", number: "222", title: "भारतीय जनशक्ति विधायक दल का भारतीय जनता पार्टी में विलय" , pdfLink: "/misc/P2/p2-021211.pdf"},
{ month: "दिसम्बर", date: "07/12/2011", number: "223", title: "भारतीय जनशक्ति विधायक दल का भारतीय जनता पार्टी में विलय संबंधी पत्रक भाग-दो, क्रमांक 222, दिनांक 2.12.2011 में संशोधन", pdfLink: "/misc/P2/p2-071211.pdf" },
{ month: "दिसम्बर", date: "09/12/2011", number: "224", title: "मध्यप्रदेश विधान सभा के प्रक्रिया तथा कार्य संचालन सम्बन्धी नियमावली में संशोधन", pdfLink: "/misc/P2/p2-091211.pdf" },
{ month: "दिसम्बर", date: "29/12/2011", number: "225", title: "मध्यप्रदेश विधान सभा सचिवालय के कार्यालयीन समय में परिवर्तन की सूचना" , pdfLink: "/misc/P2/p2-291211.pdf"},

];

const months2011 = ["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्टूबर","नवम्बर","दिसम्बर"];

const styles = {
  wrapper: { fontFamily: "'Noto Sans Devanagari', sans-serif", backgroundColor: "#f8fafc", minHeight: "100vh" },
  headerContainer: { width: "100%", background: "linear-gradient(90deg, #1e3a8a, #2563eb)", color: "#fff", padding: "50px 20px 70px", borderRadius: "0 0 30px 30px", boxShadow: "0 6px 15px rgba(0,0,0,0.15)", position: "relative", textAlign: "center" },
  backButton: { position: "absolute", top: "20px", left: "25px", backgroundColor: "rgba(255,255,255,0.15)", color: "#fff", padding: "8px 16px", borderRadius: "8px", fontWeight: 600, textDecoration: "none", transition: "all 0.3s ease" },
  mainTitle: { fontSize: "2.5rem", fontWeight: "700", marginBottom: "10px" },
  subTitle: { fontSize: "1.2rem", opacity: 0.9 },
  monthNav: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", backgroundColor: "#e0e7ff", padding: "15px 20px", margin: "25px auto", borderRadius: "10px", boxShadow: "0 3px 10px rgba(0,0,0,0.1)", maxWidth: "1100px" },
  monthButton: { backgroundColor: "#1e3a8a", color: "#fff", border: "none", borderRadius: "8px", padding: "8px 16px", fontSize: "1rem", fontWeight: "600", cursor: "pointer", transition: "all 0.3s ease" },
  monthButtonHover: { backgroundColor: "#fff", color: "#1e3a8a", boxShadow: "0 4px 10px rgba(37,99,235,0.3)" },
  tableContainer: { backgroundColor: "#fff", maxWidth: "1100px", margin: "20px auto 50px", borderRadius: "12px", boxShadow: "0 6px 16px rgba(0,0,0,0.08)", overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse" },
  th: { backgroundColor: "#1e40af", color: "#fff", textAlign: "left", padding: "12px 15px", fontWeight: "700", borderBottom: "2px solid #ccc" },
  td: { padding: "12px 15px", borderBottom: "1px solid #e2e8f0", fontSize: "1rem", color: "#1e293b", textAlign: "left" },
  monthHeader: { backgroundColor: "#dbeafe", color: "#1e3a8a", fontWeight: "700", textAlign: "center" },
  viewLink: { color: "#2563eb", fontWeight: "600", textDecoration: "none", transition: "all 0.2s ease" },
};

const PatrakBhag2_2011 = () => {
  const monthRefs = months2011.reduce((acc, month) => ({ ...acc, [month]: useRef(null) }), {});

  const scrollToMonth = (month) => {
    monthRefs[month]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.headerContainer}>
        <Link
          to="/patrakbhag-02"
          style={styles.backButton}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.color = "#1e3a8a"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; }}
        >
          ⬅ वापस जाएँ
        </Link>
        <h1 style={styles.mainTitle}>पत्रक भाग - दो</h1>
        <p style={styles.subTitle}>वर्ष 2011 — सदन एवं समितियों सम्बन्धी सूचनाएं</p>
      </div>

      <div style={styles.monthNav}>
        {months2011.map((m, i) => (
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
            {months2011.map((month, index) => (
              <React.Fragment key={index}>
                <tr ref={monthRefs[month]}>
                  <td colSpan="5" style={{ ...styles.td, ...styles.monthHeader }}>{month}</td>
                </tr>
                {patrakData2011
                  .filter(item => item.month === month)
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

export default PatrakBhag2_2011;
