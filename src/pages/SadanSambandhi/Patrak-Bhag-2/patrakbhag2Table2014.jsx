import React, { useRef } from "react";
import { Link } from "react-router-dom";

// ----- 2014 Patrak Data -----
const patrakData2014 = [
  { month: "जनवरी", number: "1", date: "04/01/2014", patrakNumber: "1", title: "नव निर्वाचित माननीय सदस्यों के लिए स्वागत कक्ष की व्यवस्था", pdfLink: "/misc/P2/p2-040114-1.pdf" },
  { month: "जनवरी", number: "2", date: "04/01/2014", patrakNumber: "2", title: 'राष्ट्रगीत "वन्दे मातरम्" से सभा की बैठक का आरंभ' , pdfLink: "/misc/P2/p2-040114-2.pdf"},
  { month: "जनवरी", number: "3", date: "06/01/2014", patrakNumber: "3", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , pdfLink: "/misc/P2/p2-060114-1.pdf"},
  { month: "जनवरी", number: "4", date: "06/01/2014", patrakNumber: "4", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" , pdfLink: "/misc/P2/p2-060114-2.pdf"},
  { month: "जनवरी", number: "5", date: "06/01/2014", patrakNumber: "5", title: "अध्यक्ष के निर्वाचन की प्रक्रिया", pdfLink: "/misc/P2/p2-060114-3.pdf" },
  { month: "जनवरी", number: "6", date: "08/01/2014", patrakNumber: "6", title: "माननीय राज्यपाल महोदय (श्री रामनरेश यादव) के अभिभाषण सम्बन्धी सूचना" , pdfLink: "/misc/P2/p2-080114-1.pdf"},
  { month: "जनवरी", number: "7", date: "09/01/2014", patrakNumber: "7", title: "माननीय राज्यपाल महोदय के अभिभाषण पर संशोधन एवं चर्चा सम्बन्धी सूचना" , pdfLink: "/misc/P2/p2-090114-1.pdf"},
  { month: "जनवरी", number: "8", date: "09/01/2014", patrakNumber: "8", title: "सदन की मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-090114-2.pdf"},
  { month: "जनवरी", number: "9", date: "09/01/2014", patrakNumber: "9", title: "सभा भवन आसन क्रम में परिवर्तन" , pdfLink: "/misc/P2/p2-090114-3.pdf"},
  { month: "जनवरी", number: "10", date: "08/01/2014", patrakNumber: "10", title: "उपाध्यक्ष के निर्वाचन की प्रक्रिया" , pdfLink: "/misc/P2/p2-080114-2.pdf"},
  { month: "जनवरी", number: "11", date: "09/01/2014", patrakNumber: "11", title: "जुलाई, 2013 सत्र की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-090114-4.pdf"},
  { month: "जनवरी", number: "12", date: "09/01/2014", patrakNumber: "12", title: "कार्यमंत्रणा समिति का गठन" , pdfLink: "/misc/P2/p2-090114-4.pdf"},
  { month: "जनवरी", number: "13", date: "09/01/2014", patrakNumber: "13", title: "सभा भवन आसन क्रम में परिवर्तन" , pdfLink: "/misc/P2/p2-090114-6.pdf"},
  { month: "जनवरी", number: "14", date: "11/01/2014", patrakNumber: "14", title: "कार्यमंत्रणा समिति का का प्रतिवेदन" , pdfLink: "/misc/P2/p2-110114.pdf"},
  { month: "जनवरी", number: "15", date: "13/01/2014", patrakNumber: "15", title: "जनवरी, 2013 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-130114.pdf"},
  { month: "जनवरी", number: "16", date: "21/01/2014", patrakNumber: "16", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्य सभा के लिए द्विवार्षिक निर्वाचन की अधिसूचना" , pdfLink: "/misc/P2/p2-210114.pdf"},
  { month: "जनवरी", number: "17", date: "30/01/2014", patrakNumber: "17", title: "चतुर्दश विधान सभा का द्वितीय सत्र (दिनांक 3 से 5 मार्च, 2014)", pdfLink: "/misc/P2/p2-300114.pdf" },
  // फरवरी
  { month: "फ़रवरी", number: "18", date: "03/02/2014", patrakNumber: "18", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था" , pdfLink: "/misc/P2/p2-030214.pdf"},
  { month: "फ़रवरी", number: "19", date: "10/02/2014", patrakNumber: "19", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-100214.pdf" },
  { month: "फ़रवरी", number: "20", date: "13/02/2014", patrakNumber: "20", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के अंतर्गत विधान सभा सदस्यों से प्राप्त जानकारी" , pdfLink: "/misc/P2/p2-130214.pdf"},
  { month: "फ़रवरी", number: "21", date: "18/02/2014", patrakNumber: "21", title: "विशेषाधिकार एवं सदन समिति का गठन", pdfLink: "/misc/P2/p2-180214.pdf" },
  { month: "फ़रवरी", number: "22", date: "25/02/2014", patrakNumber: "22", title: "श्री रामप्यारे कुलस्ते (निवास), सदस्य को बंदी एवं रिहा किए जाने की सूचना", pdfLink: "/misc/P2/p2-250214-1.pdf" },
  { month: "फ़रवरी", number: "23", date: "25/02/2014", patrakNumber: "23", title: 'राष्ट्रगीत "वन्दे मातरम्" से सभा की बैठक का आरंभ', pdfLink: "/misc/P2/p2-250214-2.pdf" },
  { month: "फ़रवरी", number: "24", date: "28/02/2014", patrakNumber: "24", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-280214.pdf" },

  // मार्च
  { month: "मार्च", number: "25", date: "01/03/2014", patrakNumber: "25", title: '"संसदीय पद्धति और प्रक्रिया" तथा "भारत का संविधान" पुस्तकों का वितरण' , pdfLink: "/misc/P2/p2-010314-1.pdf"},
  { month: "मार्च", number: "26", date: "01/03/2014", patrakNumber: "26", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-010314-2.pdf" },
  { month: "मार्च", number: "27", date: "02/03/2014", patrakNumber: "27", title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-020314.pdf"},
  { month: "मार्च", number: "28", date: "03/03/2014", patrakNumber: "28", title: "लोक लेखा, प्राक्कलन, सरकारी उपक्रमों संबंधी एवं अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी समितियों के लिए क्रमश: 11-11-11 तथा 15 सदस्यों का निर्वाचन : कार्यक्रम", pdfLink: "/misc/P2/p2-030314-1.pdf" },
  { month: "मार्च", number: "29", date: "03/03/2014", patrakNumber: "29", title: "जवाहरलाल नेहरू कृषि विश्वविद्यालय, जबलपुर एवं राजमाता विजयाराजे सिंधिया कृषि विश्वविद्यालय, ग्वालियर के प्रबंध मंडलों के लिए राज्य विधान सभा के 3-3 सदस्यों का निर्वाचन : कार्यक्रम" , pdfLink: "/misc/P2/p2-030314-2.pdf"},
  { month: "मार्च", number: "30", date: "03/03/2014", patrakNumber: "30", title: "कार्यमंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-030314-3.pdf" },
  { month: "मार्च", number: "31", date: "04/03/2014", patrakNumber: "31", title: "प्रबंध मंडलों के लिए निर्वाचन : प्रस्तावित उम्मीदवार" , pdfLink: "/misc/P2/p2-040314-1.pdf"},
  { month: "मार्च", number: "32", date: "04/03/2014", patrakNumber: "32", title: "प्रबंध मंडलों के लिए निर्वाचन : वैध उम्मीदवार" , pdfLink: "/misc/P2/p2-040314-2.pdf"},
  { month: "मार्च", number: "33", date: "04/03/2014", patrakNumber: "33", title: "पत्रक भाग-दो, क्रमांक 31 एवं 32, दिनांक 4 मार्च 2014 में संशोधन" , pdfLink: "/misc/P2/p2-040314-3.pdf"},
  { month: "मार्च", number: "34", date: "04/03/2014", patrakNumber: "34", title: "समितियों का निर्वाचन : प्रस्तावित उम्मीदवार", pdfLink: "/misc/P2/p2-040314-4.pdf" },
  { month: "मार्च", number: "35", date: "04/03/2014", patrakNumber: "35", title: "समितियों का निर्वाचन : वैध उम्मीदवार", pdfLink: "/misc/P2/p2-040314-5.pdf" },
  { month: "मार्च", number: "36", date: "04/03/2014", patrakNumber: "36", title: "समितियों का निर्वाचन : 1 सदस्य द्वारा उम्मीदवारी वापस ली जाना" , pdfLink: "/misc/P2/p2-040314-6.pdf"},
  { month: "मार्च", number: "37", date: "06/03/2014", patrakNumber: "37", title: "प्रबंध मंडलों के लिए निर्वाचन : घोषणा" , pdfLink: "/misc/P2/p2-060314-1.pdf"},
  { month: "मार्च", number: "38", date: "06/03/2014", patrakNumber: "38", title: "समितियों का निर्वाचन : घोषणा" , pdfLink: "/misc/P2/p2-060314-2.pdf"},
  { month: "मार्च", number: "39", date: "07/03/2014", patrakNumber: "39", title: "कार्य मंत्रणा समिति में 1 स्थान की रिक्ति", pdfLink: "/misc/P2/p2-070314-1.pdf" },
  { month: "मार्च", number: "40", date: "06/03/2014", patrakNumber: "40", title: "मार्च, 2014 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-060314-3.pdf"},
  { month: "मार्च", number: "41", date: "07/03/2014", patrakNumber: "41", title: "सर्वश्री सचिन यादव (कसरावद), शैलेन्द्र पटेल (इछावर), जयवर्द्धन सिंह (राघौगढ़), निशंक कुमार जैन (बासौदा) तथा जितू पटवारी (राऊ), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-070314-2.pdf" },
  { month: "मार्च", number: "42", date: "20/03/2014", patrakNumber: "42", title: "सर्वश्री सूबेदार सिंह रजौधा (जौरा), सत्यपाल सिंह सिकरवार (नीटू) (सुमावली) तथा रुस्तम सिंह (मुरैना), सदस्यगण को बन्दी एवं रिहा किए जाने की सूचना" , pdfLink: "/misc/P2/p2-200314.pdf"},
  { month: "मार्च", number: "43", date: "31/03/2014", patrakNumber: "43", title: "श्री संजय पाठक (विजयराघवगढ़), सदस्य द्वारा विधान सभा की सदस्यता से त्याग-पत्र", pdfLink: "/misc/P2/p2-310314.pdf" },
  // अप्रैल
  { month: "अप्रैल", date: "04/04/2014", number: "44", patrakNumber: "44", title: "श्री पारसचन्द्र जैन (उज्जैन उत्तर), सदस्य को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-040414.pdf"},
  { month: "अप्रैल", date: "16/04/2014", number: "45", patrakNumber: "45", title: "श्री प्रभात पाण्डे (बडे बब्बू) (बहोरीबन्द), सदस्य विधान सभा के निधन से एक स्थान की रिक्त होने संबंधी सूचना" , pdfLink: "/misc/P2/p2-160414.pdf"},
  { month: "अप्रैल", date: "22/04/2014", number: "46", patrakNumber: "46", title: "डॉ. राजेन्द्र पांडे (जावरा) तथा श्री कैलाश चावला (मनासा), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-220414.pdf"},

  // मई
  { month: "मई", date: "16/05/2014", number: "47", patrakNumber: "47", title: "विधान सभा भवन में वाहनों तथा आगुन्तुकों के प्रवेश सम्बन्धी व्यवस्था में परिवर्तन", pdfLink: "/misc/P2/p2-160514.pdf" },
  { month: "मई", date: "24/05/2014", number: "48", patrakNumber: "48", title: "चतुर्दश विधान सभा का तृतीय सत्र (दिनांक 30 जून से 28 जुलाई, 2014) एवं शुद्धि-पत्र", pdfLink: "/misc/P2/p2-240514.pdf" },
  { month: "मई", date: "29/05/2014", number: "49", patrakNumber: "49", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-290514.pdf" },
  { month: "मई", date: "30/05/2014", number: "50", patrakNumber: "50", title: "प्रश्नों को प्राप्त करने हेतु अधिकृत व्यक्ति की जानकारी", pdfLink: "/misc/P2/p2-300514-1.pdf" },
  { month: "मई", date: "30/05/2014", number: "51", patrakNumber: "51", title: "श्री मनोहर ऊंटवाल (आगर) द्वारा विधान सभा की सदस्यता से त्याग-पत्र", pdfLink: "/misc/P2/p2-300514-2.pdf" },
  { month: "मई", date: "31/05/2014", number: "53", patrakNumber: "53", title: "श्री के.पी. सिंह, सदस्य द्वारा सदन समिति से त्यागपत्र देने से समिति में एक स्थान रिक्त होना" , pdfLink: "/misc/P2/p2-310514.pdf"},
  // जून
  { month: "जून", date: "02/06/2014", number: "52", patrakNumber: "52", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्य सभा के एक रिक्त स्थान की पूर्ति हेतु उप-निर्वाचन की अधिसूचना" , pdfLink: "/misc/P2/p2-020614.pdf"},
  { month: "जून", date: "03/06/2014", number: "54", patrakNumber: "54", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-030614.pdf" },
  { month: "जून", date: "06/06/2014", number: "55", patrakNumber: "55", title: "पत्रकार दीर्घा सलाहकार समिति गठित" , pdfLink: "/misc/P2/p2-060614.pdf"},
  { month: "जून", date: "16/06/2014", number: "56", patrakNumber: "56", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 में संशोधन" , pdfLink: "/misc/P2/p2-160614.pdf"},
  { month: "जून", date: "25/06/2014", number: "59", patrakNumber: "59", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ" , pdfLink: "/misc/P2/p2-250614.pdf"},
  { month: "जून", date: "26/06/2014", number: "57", patrakNumber: "57", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , pdfLink: "/misc/P2/p2-260614-1.pdf"},
  { month: "जून", date: "26/06/2014", number: "58", patrakNumber: "58", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-260614-2.pdf" },
  { month: "जून", date: "26/06/2014", number: "60", patrakNumber: "60", title: "नाम-निर्दिष्ट 8 समितियों का गठन" , pdfLink: "/misc/P2/p2-260614-3.pdf"},
  { month: "जून", date: "26/06/2014", number: "61", patrakNumber: "61", title: "कार्य मंत्रणा समिति में 2 एवं सदन समिति में एक रिक्त स्थान की पूर्ति" , pdfLink: "/misc/P2/p2-260614-4.pdf"},
  { month: "जून", date: "26/06/2014", number: "64", patrakNumber: "64", title: "मातृ एवं शिशु स्वास्थ्य के संबंध में कार्य योजना तथा वार्षिक आय-व्ययक एवं बजट प्रक्रिया पर प्रस्तुतिकरण (1 जुलाई, 2014)", pdfLink: "/misc/P2/p2-260614-5.pdf"},
  { month: "जून", date: "26/06/2014", number: "65", patrakNumber: "65", title: "मध्यप्रदेश विधान सभा भवन/विधायक विश्राम गृह में संचालित भोजनालय में माननीय सदस्यों को रियायती दर पर भोजन उपलब्ध कराये जाने संबंधी संशोधित व्यवस्था" , pdfLink: "/misc/P2/p2-260614-6.pdf"},
  { month: "जून", date: "26/06/2014", number: "67", patrakNumber: "67", title: "मध्यप्रदेश आवास संघ की विधायक/सांसद आवासीय योजना के क्रियान्वयन हेतु, समिति का गठन", pdfLink: "/misc/P2/p2-260614-7.pdf" },
  { month: "जून", date: "27/06/2014", number: "62", patrakNumber: "62", title: "प्रबोधन कार्यक्रम (दिनांक 28 एवं 29 जून, 2014) की सूचना" , pdfLink: "/misc/P2/p2-270614-1.pdf"},
  { month: "जून", date: "27/06/2014", number: "63", patrakNumber: "63", title: "माननीय सदस्यों हेतु पुस्तकों का वितरण", pdfLink: "/misc/P2/p2-270614-2.pdf" },
  { month: "जून", date: "27/06/2014", number: "66", patrakNumber: "66", title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-270614-3.pdf" },
  { month: "जून", date: "30/06/2014", number: "68", patrakNumber: "68", title: "वर्ष 2014-15 से संबंधित बजट साहित्य का वितरण" , pdfLink: "/misc/P2/p2-300614-1.pdf"},
  { month: "जून", date: "30/06/2014", number: "69", patrakNumber: "69", title: "जनवरी, 2014 सत्र की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-300614-2.pdf"},
  { month: "जून", date: "30/06/2014", number: "71", patrakNumber: "71", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के अंतर्गत विधान सभा सदस्यों से प्राप्त जानकारी (क्रमशः)" , pdfLink: "/misc/P2/p2-300614-3.pdf"},
  { month: "जून", date: "30/06/2014", number: "72", patrakNumber: "72", title: "बजट प्रस्तुतिकरण के दिन, प्रश्नोत्तर काल नहीं होना" , pdfLink: "/misc/P2/p2-300614-4.pdf"},
  // जुलाई
  { month: "जुलाई", date: "01/07/2014", number: "70", patrakNumber: "70", title: "कटौती प्रस्ताव की सूचनाएं", pdfLink: "/misc/P2/p2-010714-1.pdf" },
  { month: "जुलाई", date: "01/07/2014", number: "73", patrakNumber: "73", title: "शुक्रवार, दिनांक 4 जुलाई, 2014 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-010714-2.pdf"},
  { month: "जुलाई", date: "01/07/2014", number: "74", patrakNumber: "74", title: "सभा भवन आसन क्रम में परिवर्तन", pdfLink: "/misc/P2/p2-010714-3.pdf" },
  { month: "जुलाई", date: "03/07/2014", number: "75", patrakNumber: "75", title: "सामान्य प्रयोजन समिति का गठन", pdfLink: "/misc/P2/p2-030714.pdf" },
  { month: "जुलाई", date: "04/07/2014", number: "76", patrakNumber: "76", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का प्रथम प्रतिवेदन" , pdfLink: "/misc/P2/p2-040714-1.pdf"},
  { month: "जुलाई", date: "04/07/2014", number: "77", patrakNumber: "77", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-040714-2.pdf" },
  { month: "जुलाई", date: "06/07/2014", number: "79", patrakNumber: "79", title: "सभा भवन आसन क्रम में परिवर्तन" , pdfLink: "/misc/P2/p2-060714.pdf"},
  { month: "जुलाई", date: "07/07/2014", number: "78", patrakNumber: "78", title: "मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-070714-1.pdf"},
  { month: "जुलाई", date: "07/07/2014", number: "80", patrakNumber: "80", title: "विधान सभा परिसर स्थित ऐलोपैथिक औषधालय में स्वास्थ्य परीक्षण कराने" , pdfLink: "/misc/P2/p2-070714-2.pdf"},
  { month: "जुलाई", date: "07/07/2014", number: "81", patrakNumber: "81", title: "शुक्रवार, दिनांक 8 मार्च, 2013 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-070714-3.pdf"},
  { month: "जुलाई", date: "08/07/2014", number: "82", patrakNumber: "82", title: "जुलाई, 2014 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-080714.pdf"},
  { month: "जुलाई", date: "10/07/2014", number: "83", patrakNumber: "83", title: "जुलाई, 2013 सत्र की अनुक्रमणिका पुस्तिका का वितरण" , pdfLink: "/misc/P2/p2-100714-1.pdf"},
  { month: "जुलाई", date: "10/07/2014", number: "84", patrakNumber: "84", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का द्वितीय प्रतिवेदन", pdfLink: "/misc/P2/p2-100714-2.pdf" },
  { month: "जुलाई", date: "11/07/2014", number: "85", patrakNumber: "85", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-110714.pdf" },
  { month: "जुलाई", date: "14/07/2014", number: "86", patrakNumber: "86", title: "जुलाई, 2014 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" , pdfLink: "/misc/P2/p2-140714.pdf"},
  { month: "जुलाई", date: "15/07/2014", number: "87", patrakNumber: "87", title: "सभा भवन आसन क्रम में परिवर्तन" , pdfLink: "/misc/P2/p2-150714-1.pdf"},
  { month: "जुलाई", date: "15/07/2014", number: "88", patrakNumber: "88", title: "शुक्रवार, दिनांक 18 जुलाई, 2014 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-150714-2.pdf" },
  { month: "जुलाई", date: "16/07/2014", number: "89", patrakNumber: "89", title: "विधायक क्लब के तत्वाधान में सांस्कृतिक कार्यक्रम का आयोजन" , pdfLink: "/misc/P2/p2-160714.pdf"},
  { month: "जुलाई", date: "17/07/2014", number: "90", patrakNumber: "90", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का द्वितीय प्रतिवेदन", pdfLink: "/misc/P2/p2-170714-1.pdf" },
  { month: "जुलाई", date: "17/07/2014", number: "91", patrakNumber: "91", title: "सभा भवन आसन क्रम में परिवर्तन" , pdfLink: "/misc/P2/p2-170714-2.pdf"},
  { month: "जुलाई", date: "24/07/2014", number: "92", patrakNumber: "92", title: "श्री जितू पटवारी (राऊ), सदस्य को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-240714.pdf" },
  // अगस्त
  { month: "अगस्त", date: "01/08/2014", number: "93", patrakNumber: "93", title: "श्रीमती लोरेन बी. लोबो को विधान सभा सदस्य (आंग्ल भारतीय) के रूप में नामनिर्दिष्ट किया जाना" , pdfLink: "/misc/P2/p2-010814.pdf"},
  { month: "अगस्त", date: "12/08/2014", number: "94", patrakNumber: "94", title: "श्री जितू पटवारी (राऊ), सदस्य को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-120814-1.pdf" },
  { month: "अगस्त", date: "12/08/2014", number: "95", patrakNumber: "95", title: "पुस्तकालय समिति में श्रीमती ऊषा चौधरी, सदस्य का मनोनयन", pdfLink: "/misc/P2/p2-120814-2.pdf" },
  { month: "अगस्त", date: "20/08/2014", number: "96", patrakNumber: "96", title: "श्री रामनिवास रावत (विजयपुर), सदस्य को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-200814.pdf"},

  // सितम्बर
  { month: "सितम्बर", date: "03/09/2014", number: "97", patrakNumber: "97", title: "विधायिनी संपादक मंडल का गठन" , pdfLink: "/misc/P2/p2-030914.pdf"},
  { month: "सितम्बर", date: "04/09/2014", number: "98", patrakNumber: "98", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्य सभा के एक रिक्त स्थान की पूर्ति हेतु उप-निर्वाचन की अधिसूचना", pdfLink: "/misc/P2/p2-040914.pdf" },
  { month: "सितम्बर", date: "12/09/2014", number: "99", patrakNumber: "99", title: "श्री रामनिवास रावत (विजयपुर), सदस्य को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-120914.pdf" },
  { month: "सितम्बर", date: "26/09/2014", number: "100", patrakNumber: "100", title: "श्री नीलेश अवस्थी (पाटन), श्री तरूण भनोत (जबलपुर पश्चिम), श्री आर.के. दोगने (हरदा), श्री सौरभ सिंह (बहोरीबंद), श्री सत्यदेव कटारे (अटेर), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-260914.pdf" },

  // अक्टूबर
  { month: "अक्टूबर", date: "13/10/2014", number: "101", patrakNumber: "101", title: "श्री जीतू पटवारी (राऊ), सचिन यादव (कसरावद), सदस्यगण को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-131014.pdf"},
  { month: "अक्टूबर", date: "16/10/2014", number: "102", patrakNumber: "102", title: "श्री रामनिवास रावत (विजयपुर), सदस्य को बंदी एवं रिहा किये जाने की सूचना" , pdfLink: "/misc/P2/p2-161014.pdf"},
  { month: "अक्टूबर", date: "31/10/2014", number: "103", patrakNumber: "103", title: "चतुर्दश विधान सभा का चतुर्थ सत्र (दिनांक 8 से 12 दिसम्बर, 2014)" , pdfLink: "/misc/P2/p2-311014.pdf"},

  // नवम्बर
  { month: "नवम्बर", date: "11/11/2014", number: "104", patrakNumber: "104", title: "स्थगन प्रस्ताव, ध्यानाकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था" , pdfLink: "/misc/P2/p2-111114.pdf"},
  { month: "नवम्बर", date: "17/11/2014", number: "105", patrakNumber: "105", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" , pdfLink: "/misc/P2/p2-171114.pdf"},
  // दिसम्बर
  { month: "दिसम्बर", date: "01/12/2014", number: "106", patrakNumber: "106", title: "संविधान (121 वां संशोधन) विधेयक, 2014 के अनुसमर्थन सम्बन्धी संकल्प" , pdfLink: "/misc/P2/p2-011214.pdf"},
  { month: "दिसम्बर", date: "04/12/2014", number: "108", patrakNumber: "108", title: "राष्ट्रगीत 'वन्दे मातरम्' से सभा की बैठक का आरंभ" , pdfLink: "/misc/P2/p2-041214.pdf"},
  { month: "दिसम्बर", date: "05/12/2014", number: "107", patrakNumber: "107", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-051214-1.pdf" },
  { month: "दिसम्बर", date: "05/12/2014", number: "109", patrakNumber: "109", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" , pdfLink: "/misc/P2/p2-051214-2.pdf"},
  { month: "दिसम्बर", date: "07/12/2014", number: "111", patrakNumber: "111", title: "प्रदेश के विभिन्न उत्पादों का प्रदर्शन सह-विक्रय", pdfLink: "/misc/P2/p2-071214-1.pdf" },
  { month: "दिसम्बर", date: "07/12/2014", number: "113", patrakNumber: "113", title: "माननीय सदस्यों के लिए कम्प्यूटर प्रशिक्षण" , pdfLink: "/misc/P2/p2-071214-2.pdf"},
  { month: "दिसम्बर", date: "08/12/2014", number: "110", patrakNumber: "110", title: "माननीय सदस्यों हेतु कम्प्यूटर प्रशिक्षण की पृष्ठाधार सामग्री का वितरण" , pdfLink: "/misc/P2/p2-081214-1.pdf"},
  { month: "दिसम्बर", date: "08/12/2014", number: "112", patrakNumber: "112", title: "सदन की मुद्रित कार्यवाहियों का वितरण" , pdfLink: "/misc/P2/p2-081214-2.pdf"},
  { month: "दिसम्बर", date: "08/12/2014", number: "115", patrakNumber: "115", title: "माननीय सदस्यों के लिये फिल्म 'मैरी कॉम' का प्रदर्शन" , pdfLink: "/misc/P2/p2-081214-3.pdf"},
  { month: "दिसम्बर", date: "08/12/2014", number: "117", patrakNumber: "117", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के अंतर्गत, उपचुनाव में निर्वाचित सदस्यों की ओर से प्राप्त जानकारी" , pdfLink: "/misc/P2/p2-081214-3.pdf"},
  { month: "दिसम्बर", date: "09/12/2014", number: "116", patrakNumber: "116", title: "शुक्रवार, दिनांक 12 दिसम्बर, 2014 हेतु निर्धारित अशासकीय संकल्पों की सूची" , pdfLink: "/misc/P2/p2-091214-1.pdf"},
  { month: "दिसम्बर", date: "09/12/2014", number: "118", patrakNumber: "118", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-091214-2.pdf" },
  { month: "दिसम्बर", date: "11/12/2014", number: "119", patrakNumber: "119", title: "समूह - चित्र का वितरण" , pdfLink: "/misc/P2/p2-111214-1.pdf"},
  { month: "दिसम्बर", date: "11/12/2014", number: "120", patrakNumber: "120", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का चतुर्थ प्रतिवेदन", pdfLink: "/misc/P2/p2-111214-2.pdf" },
  { month: "दिसम्बर", date: "17/12/2014", number: "114", patrakNumber: "114", title: "दिसम्बर, 2014 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-171214.pdf" },

];

const months2014 = [
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

const PatrakBhag2_2014 = () => {
  const monthRefs = months2014.reduce((acc, month) => {
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
        <p style={styles.subTitle}>वर्ष 2014 — सदन एवं समितियों सम्बन्धी सूचनाएं</p>
      </div>

      {/* Month Navigation */}
      <div style={styles.monthNav}>
        {months2014.map((m, i) => (
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
            {months2014.map((month, index) => (
              <React.Fragment key={index}>
                <tr ref={monthRefs[month]}>
                  <td colSpan="4" style={{ ...styles.td, ...styles.monthHeader }}>
                    {month}
                  </td>
                </tr>
                {patrakData2014
                  .filter((item) => item.month === month)
                  .map((item, i) => (
                    <tr key={i}>
                      <td style={styles.td}>{item.number}</td>
                      <td style={styles.td}>{item.date}</td>
                      <td style={styles.td}>{item.patrakNumber}</td>
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

export default PatrakBhag2_2014;