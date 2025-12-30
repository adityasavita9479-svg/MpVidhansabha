import React, { useRef } from "react";
import { Link } from "react-router-dom";

// ----- 2013 Patrak Data -----
const patrakData2013 = [
     { month: "जनवरी", date: "02/01/2013", number: "153", title: "श्री अजय सिंह (चुरहट), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-020113.pdf"  },
    { month: "जनवरी", date: "15/01/2013", number: "154", title: "त्रयोदश विधान सभा का षोडश: सत्र (दिनांक 18 फरवरी से 22 मार्च 2013)",pdf: "/misc/P2/p2-150113.pdf" },
    { month: "जनवरी", date: "21/01/2013", number: "155", title: "स्थगन प्रस्ताव, ध्यानाकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था" ,pdf: "/misc/P2/p2-210113.pdf"},
    { month: "जनवरी", date: "24/01/2013", number: "156", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" ,pdf: "/misc/P2/p2-240113.pdf"},

    { month: "फ़रवरी", date: "04/02/2013", number: "157", title: "सर्वश्री प्रदीप अमृतलाल जायसवाल (वारासिवनी) तथा विश्वेश्वर भगत (कटंगी) सदस्यगण को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-040213.pdf" },
    { month: "फ़रवरी", date: "15/02/2013", number: "158", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" ,pdf: "/misc/P2/p2-150213-1.pdf"},
    { month: "फ़रवरी", date: "15/02/2013", number: "159", title: "राष्ट्रगीत \"वन्दे मातरम्\" से सभा की बैठक का आरंभ",pdf: "/misc/P2/p2-150213-2.pdf" },
    { month: "फ़रवरी", date: "15/02/2013", number: "162", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" ,pdf: "/misc/P2/p2-150213-3.pdf"},
    { month: "फ़रवरी", date: "17/02/2013", number: "160", title: "महामहिम राज्यपाल (श्री रामनरेश यादव) के अभिभाषण सम्बन्धी सूचना" ,pdf: "/misc/P2/p2-170213.pdf"},
    { month: "फ़रवरी", date: "18/02/2013", number: "161", title: "महामहिम राज्यपाल के अभिभाषण पर संशोधन एवं चर्चा सम्बन्धी सूचना",pdf: "/misc/P2/p2-180213.pdf" },
    { month: "फ़रवरी", date: "19/02/2013", number: "163", title: "कार्यमंत्रणा समिति का प्रतिवेदन",pdf: "/misc/P2/p2-190213.pdf" },
    { month: "फ़रवरी", date: "20/02/2013", number: "164", title: "प्रश्न के उत्तर में संशोधन",pdf: "/misc/P2/p2-200213-1.pdf" },
    { month: "फ़रवरी", date: "20/02/2013", number: "165", title: "जवाहरलाल नेहरू कृषि विश्वविद्यालय, जबलपुर के प्रबंध मंडल के लिए 3 सदस्यों का निर्वाचन : कार्यक्रम" ,pdf: "/misc/P2/p2-200213-2.pdf"},
    { month: "फ़रवरी", date: "21/02/2013", number: "166", title: "वर्ष 2013-14 से संबंधित बजट साहित्य का वितरण",pdf: "/misc/P2/p2-210213-1.pdf" },
    { month: "फ़रवरी", date: "21/02/2013", number: "167", title: "बजट प्रस्तुति करण के दिन, प्रश्नोत्तर काल नहीं होना" ,pdf: "/misc/P2/p2-210213-2.pdf"},
    { month: "फ़रवरी", date: "22/02/2013", number: "168", title: "कटौती प्रस्ताव की सूचनाएं" ,pdf: "/misc/P2/p2-220213.pdf"},
    { month: "फ़रवरी", date: "25/02/2013", number: "169", title: "फ़रवरी-मार्च, 2013 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण",pdf: "/misc/P2/p2-250213.pdf" },
    { month: "फ़रवरी", date: "26/02/2013", number: "170", title: "प्रश्न के उत्तर में संशोधन" ,pdf: "/misc/P2/p2-260213-1.pdf"},
    { month: "फ़रवरी", date: "26/02/2013", number: "171", title: "प्रबंध मंडल के लिए निर्वाचन : प्रस्तावित उम्मीदवार" ,pdf: "/misc/P2/p2-260213-2.pdf"},
    { month: "फ़रवरी", date: "26/02/2013", number: "172", title: "कार्यमंत्रणा समिति का प्रतिवेदन" ,pdf: "/misc/P2/p2-260213-3.pdf"},
    { month: "फ़रवरी", date: "27/02/2013", number: "173", title: "प्रबंध मंडल के लिए निर्वाचन : वैध उम्मीदवार",pdf: "/misc/P2/p2-270213.pdf" },
    { month: "फ़रवरी", date: "28/02/2013", number: "174", title: "निरस्त बैठक के प्रश्नों को अगले दिन की कार्यवाही में मुद्रित किया जाना" ,pdf: "/misc/P2/p2-280213-1.pdf"},
    { month: "फ़रवरी", date: "28/02/2013", number: "175", title: "श्री खुमान सिंह शिवाजी, सदस्य के निधन की सूचना" ,pdf: "/misc/P2/p2-280213-2.pdf"},
    { month: "फ़रवरी", date: "28/02/2013", number: "176", title: "फ़रवरी-मार्च, 2013 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" ,pdf: "/misc/P2/p2-280213-3.pdf"},
    { month: "मार्च", date: "03/03/2013", number: "177", title: "सभा भवन आसन क्रम रिक्त होने की सूचना" ,pdf: "/misc/P2/p2-030313.pdf"},
    { month: "मार्च", date: "04/03/2013", number: "178", title: "प्रबंध मंडल के लिए निर्वाचन : घोषणा" ,pdf: "/misc/P2/p2-040313.pdf"},
    { month: "मार्च", date: "05/03/2013", number: "179", title: "शुक्रवार, दिनांक 8 मार्च, 2013 हेतु निर्धारित अशासकीय संकल्पों की सूची" ,pdf: "/misc/P2/p2-050313-1.pdf"},
    { month: "मार्च", date: "05/03/2013", number: "180", title: "मध्यप्रदेश विधान सभा अध्यक्ष के स्थायी आदेश में संशोधन" ,pdf: "/misc/P2/p2-050313-2.pdf"},
    { month: "मार्च", date: "07/03/2013", number: "181", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का चौबीसवां प्रतिवेदन" ,pdf: "/misc/P2/p2-070313.pdf"},
    { month: "मार्च", date: "08/03/2013", number: "182", title: "फरवरी-मार्च, 2013 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" ,pdf: "/misc/P2/p2-080313-1.pdf"},
    { month: "मार्च", date: "08/03/2013", number: "183", title: "कार्यमंत्रणा समिति का प्रतिवेदन" ,pdf: "/misc/P2/p2-080313-2.pdf"},
    { month: "मार्च", date: "08/03/2013", number: "184", title: "संसदीय उत्कृष्टता पुरस्कार (वर्ष 2012-13) हेतु प्रविष्ट/नामांकन आमंत्रण विषयक" ,pdf: "/misc/P2/p2-080313-3.pdf"},
    { month: "मार्च", date: "11/03/2013", number: "185", title: "निरस्त बैठक के प्रश्नों को अगले दिन की कार्यवाही में मुद्रित किया जाना",pdf: "/misc/P2/p2-110313.pdf" },
    { month: "मार्च", date: "13/03/2013", number: "186", title: "शुक्रवार, दिनांक 15 मार्च, 2013 हेतु निर्धारित अशासकीय संकल्पों की सूची",pdf: "/misc/P2/p2-130313.pdf" },
    { month: "मार्च", date: "14/03/2013", number: "187", title: "संघ लोक सेवा आयोग की परीक्षा में अंग्रेजी भाषा की अंक गणना सम्बन्धी व्यवस्था को वापस करने विषयक शासकीय संकल्प" ,pdf: "/misc/P2/p2-140313-1.pdf"},
    { month: "मार्च", date: "14/03/2013", number: "188", title: "गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति का पच्चीसवां प्रतिवेदन",pdf: "/misc/P2/p2-140313-2.pdf" },
    { month: "मार्च", date: "15/03/2013", number: "189", title: "नवीन भोजन प्रथा के प्रवर्तक (श्री बी.वी. चौहान) का व्याख्यान कार्यक्रम",pdf: "/misc/P2/p2-150313-1.pdf" },
    { month: "मार्च", date: "15/03/2013", number: "191", title: "फरवरी-मार्च, 2013 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" ,pdf: "/misc/P2/p2-150313-2.pdf"},
    { month: "मार्च", date: "18/03/2013", number: "190", title: "सदन की मुद्रित कार्यवाहियों का वितरण",pdf: "/misc/P2/p2-180313-1.pdf" },
    { month: "मार्च", date: "18/03/2013", number: "192", title: "दिसम्बर, 2012 सत्र की अनुक्रमणिका पुस्तिका का वितरण" ,pdf: "/misc/P2/p2-180313-2.pdf"},
    { month: "मार्च", date: "18/03/2013", number: "193", title: "पत्रक भाग-दो (क्रमांक 187, दिनांक 14.03.2013) सम्बन्धी शासकीय संकल्प को वापस लेने विषयक",pdf: "/misc/P2/p2-180313-3.pdf" },
    { month: "मार्च", date: "18/03/2013", number: "194", title: "कार्यमंत्रणा समिति का प्रतिवेदन",pdf: "/misc/P2/p2-180313-4.pdf" },
    { month: "मार्च", date: "20/03/2013", number: "195", title: "वर्ष 2012-13 की अवधि के लिए गठित सभा-समितियों के कार्यकाल में वर्तमान त्रयोदश विधान सभा के कार्यकाल पर्यन्त वृद्धि",pdf: "/misc/P2/p2-200313.pdf" },

    { month: "अप्रैल", date: "29/04/2013", number: "196", title: "श्री प्रताप ग्रेवाल (सरदारपुर), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-290413.pdf" },

    { month: "मई", date: "15/05/2013", number: "197", title: "श्री हरवंश सिंह, विधान सभा सदस्य (उपाध्यक्ष महोदय) के निधन की सूचना",pdf: "/misc/P2/p2-150513.pdf" },
    { month: "मई", date: "17/05/2013", number: "198", title: "श्री भगवान सिंह राजपूत (उदयपुरा), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-170513.pdf" },
    { month: "मई", date: "29/05/2013", number: "199", title: "श्री आरिफ अकील (भोपाल उत्तर), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-290513.pdf" },

    { month: "जून", date: "03/06/2013", number: "200", title: "त्रयोदश विधान सभा का सप्तदश सत्र (दिनांक 8 से 19 जुलाई, 2013)" ,pdf: "/misc/P2/p2-030613.pdf"},
    { month: "जून", date: "17/06/2013", number: "201", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" ,pdf: "/misc/P2/p2-170613.pdf"},
    { month: "जून", date: "20/06/2013", number: "202", title: "स्थगन प्रस्ताव, ध्यानाकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था" ,pdf: "/misc/P2/p2-200613-1.pdf"},
    { month: "जून", date: "20/06/2013", number: "203", title: "श्री पारस दादा (रतलाम शहर), सदस्य विधान सभा का स्थान रिक्त होने की सूचना" ,pdf: "/misc/P2/p2-200613-2.pdf"},
    { month: "जून", date: "21/06/2013", number: "204", title: "पत्रक भाग-2 क्रमांक 203, दिनांक 20/06/2013 में संशोधन विषयक" ,pdf: "/misc/P2/p2-210613.pdf"},
    { month: "जून", date: "22/06/2013", number: "205", title: "विशिष्ट समिति का गठन",pdf: "/misc/P2/p2-220613.pdf" },

    { month: "जुलाई", date: "01/07/2013", number: "206", title: "श्री पारस दादा (रतलाम शहर), सदस्य विधान सभा का 1 स्थान रिक्त होने संबंधी पत्रक भाग-2 क्रमांक 204 तथा तत्सम्बन्धी अधिसूचना दिनांक 21/06/2013 निरस्त की जाना",pdf: "/misc/P2/p2-010713.pdf" },
    { month: "जुलाई", date: "03/07/2013", number: "209", title: "श्री रमेश मेंदोला (इन्दौर-2), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-030713.pdf" },
    { month: "जुलाई", date: "04/07/2013", number: "210", title: "राष्ट्रगीत \"वन्दे मातरम्\" से सभा की बैठक का आरंभ",pdf: "/misc/P2/p2-040713-1.pdf" },
    { month: "जुलाई", date: "04/07/2013", number: "211", title: "श्री उमंग सिंघार (गंधवानी), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-040713-2.pdf" },
    { month: "जुलाई", date: "05/07/2013", number: "208", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" ,pdf: "/misc/P2/p2-050713-1.pdf"},
    { month: "जुलाई", date: "05/07/2013", number: "212", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" ,pdf: "/misc/P2/p2-050713-2.pdf"},
    { month: "जुलाई", date: "06/07/2013", number: "213", title: "कार्यमंत्रणा समिति में 1 सदस्य का मनोनयन",pdf: "/misc/P2/p2-060713.pdf" },
    { month: "जुलाई", date: "07/07/2013", number: "214", title: "सभा भवन आसन क्रम में परिवर्तन",pdf: "/misc/P2/p2-070713.pdf" },
    { month: "जुलाई", date: "08/07/2013", number: "207", title: "सदन की मुद्रित कार्यवाहियों का वितरण" ,pdf: "/misc/P2/p2-080713-1.pdf"},
    { month: "जुलाई", date: "08/07/2013", number: "215", title: "सभा भवन आसन क्रम में परिवर्तन",pdf: "/misc/P2/p2-080713-2.pdf" },
    { month: "जुलाई", date: "09/07/2013", number: "216", title: "त्रयोदश विधान सभा के माननीय सदस्यगण के सप्तदश सत्र में लिए गए समूह छायाचित्र का कार्यक्रम",pdf: "/misc/P2/p2-090713-1.pdf" },
    { month: "जुलाई", date: "09/07/2013", number: "217", title: "प्रश्न के उत्तर में संशोधन",pdf: "/misc/P2/p2-090713-2.pdf" },
    { month: "जुलाई", date: "09/07/2013", number: "218", title: "कार्यमंत्रणा समिति का प्रतिवेदन",pdf: "/misc/P2/p2-090713-3.pdf" },
    { month: "जुलाई", date: "09/07/2013", number: "219", title: "शुक्रवार, दिनांक 12 जुलाई, 2013 हेतु निर्धारित अशासकीय संकल्पों की सूची" ,pdf: "/misc/P2/p2-090713-4.pdf"},
    { month: "जुलाई", date: "10/07/2013", number: "221", title: "विशिष्ट समिति में वित्त मंत्री का नामांकन" ,pdf: "/misc/P2/p2-100713.pdf"},
    { month: "जुलाई", date: "11/07/2013", number: "220", title: "फरवरी-मार्च, 2013 सत्र की अनुक्रमणिका पुस्तिका का वितरण" ,pdf: "/misc/P2/p2-110713-1.pdf"},
    { month: "जुलाई", date: "11/07/2013", number: "222", title: "जुलाई, 2013 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" ,pdf: "/misc/P2/p2-110713-2.pdf"},
    { month: "जुलाई", date: "25/07/2013", number: "223", title: "मध्यप्रदेश विधान सभा के प्रक्रिया तथा कार्य संचालन सम्बन्धी नियमावली में संशोधन",pdf: "/misc/P2/p2-250713.pdf" },

    { month: "अगस्त", date: "19/08/2013", number: "224", title: "श्री विजेन्द्र सिंह मलाहेड़ा (विज्जु बना) (मनासा), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-190813.pdf" },
    { month: "अगस्त", date: "31/08/2013", number: "225", title: "श्री राजकुमार उरमलिया (सिरमौर), सदस्य को बंदी एवं रिहा किये जाने की सूचना" ,pdf: "/misc/P2/p2-310813.pdf"},

    { month: "सितम्बर", date: "03/09/2013", number: "226", title: "त्रयोदश विधान सभा के माननीय सदस्यगण के सप्तदश सत्र में लिए गए समूह छायाचित्र का वितरण",pdf: "/misc/P2/p2-030913.pdf" },
    { month: "सितम्बर", date: "10/09/2013", number: "227", title: "विधान सभा समितियों में 3 स्थान रिक्त होने की सूचना" ,pdf: "/misc/P2/p2-100913-1.pdf"},
    { month: "सितम्बर", date: "10/09/2013", number: "228", title: "प्रश्न एवं संदर्भ समिति में सभापति की नियुक्ति" ,pdf: "/misc/P2/p2-100913-2.pdf"},
    { month: "सितम्बर", date: "20/09/2013", number: "229", title: "महिलाओं एवं बालकों के कल्याण संबंधी समिति में 1 स्थान रिक्त होने की सूचना",pdf: "/misc/P2/p2-200913.pdf" },

    { month: "अक्टूबर", date: "08/10/2013", number: "230", title: "श्री हरेन्द्रजीत सिंह \"बब्बू\" (जबलपुर पश्चिम), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-081013.pdf" },

    { month: "नवम्बर", date: "05/11/2013", number: "231", title: "मध्यप्रदेश विधान सभा के माननीय अध्यक्ष (श्री ईश्वरदास रोहाणी) के निधन के कारण, सामयिक अध्यक्ष (श्री ज्ञान सिंह) की नियुक्ति",pdf: "/misc/P2/p2-051113.pdf" },
    { month: "नवम्बर", date: "13/11/2013", number: "232", title: "श्री सुखदेव पांसे (मुलताई), सदस्य को बंदी किये जाने की सूचना",pdf: "/misc/P2/p2-131113-1.pdf" },
    { month: "नवम्बर", date: "13/11/2013", number: "233", title: "डॉ. प्रभुराम चौधरी (सांची), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-131113-2.pdf" },
    { month: "नवम्बर", date: "18/11/2013", number: "234", title: "डॉ. कल्पना परूलेकर (महिदपुर), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-181113.pdf" },
    { month: "नवम्बर", date: "29/11/2013", number: "235", title: "त्रयोदश विधान सभा की विशेषाधिकार समिति के द्वितीय प्रतिवेदन को माननीय अध्यक्ष को प्रस्तुत करने एवं उसके मुद्रण, प्रकाशन एवं परिचालन की सूचना" ,pdf: "/misc/P2/p2-291113.pdf"},

    { month: "दिसम्बर", date: "04/12/2013", number: "236", title: "श्री सुनील जायसवाल (नरसिंहपुर), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-041213-1.pdf" },
    { month: "दिसम्बर", date: "04/12/2013", number: "237", title: "श्री मनोहर ऊंटवाल (आलोट), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-041213-2.pdf" },
    { month: "दिसम्बर", date: "04/12/2013", number: "238", title: "श्रीमती आशारानी सिंह (बिजावर), सदस्य को बंदी किये जाने की सूचना",pdf: "/misc/P2/p2-041213-3.pdf" },
    { month: "दिसम्बर", date: "10/12/2013", number: "239", title: "श्री राजकुमार सिंह यादव (महुअन) (चन्देरी), सदस्य को बंदी एवं रिहा किये जाने की सूचना" ,pdf: "/misc/P2/p2-101213.pdf"},
    { month: "दिसम्बर", date: "06/12/2013", number: "240", title: "श्रीमती इमरतीदेवी (डबरा), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-061213-1.pdf" },
    { month: "दिसम्बर", date: "06/12/2013", number: "241", title: "श्रीमती इमरतीदेवी (डबरा), सदस्य को बंदी एवं रिहा किये जाने की सूचना",pdf: "/misc/P2/p2-061213-2.pdf" },
    { month: "दिसम्बर", date: "20/12/2013", number: "242", title: "श्री शिवराज सिंह चौहान (विदिशा), सदस्य द्वारा विधान सभा की सदस्यता से त्याग पत्र",pdf: "/pdfs/2010/notice_01.pdf" },
    { month: "दिसम्बर", date: "21/12/2013", number: "243", title: "विधान सभा के सामयिक अध्यक्ष (श्री के.डी. देशमुख) की नियुक्ति" ,pdf: "/pdfs/2010/notice_01.pdf"},
    { month: "दिसम्बर", date: "24/12/2013", number: "244", title: "चतुर्दश विधान सभा का प्रथम सत्र (दिनांक 8 से 17 जनवरी, 2014)" ,pdf: "/pdfs/2010/notice_01.pdf"},
];

const months2013 = [
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

const PatrakBhag2_2013 = () => {
  const monthRefs = months2013.reduce((acc, month) => {
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
        <p style={styles.subTitle}>वर्ष 2013 — सदन एवं समितियों सम्बन्धी सूचनाएं</p>
      </div>

      {/* Month Navigation */}
      <div style={styles.monthNav}>
        {months2013.map((m, i) => (
          <button
            key={i}
            style={styles.monthButton}
            onClick={() => scrollToMonth(m)}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, styles.monthButtonHover);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, styles.monthButton);
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
              <th style={styles.th}>सरल क्रमांक</th>
              <th style={styles.th}>जारी दिनांक</th>
              <th style={styles.th}>पत्रक क्रमांक</th>
              <th style={styles.th}>विषय</th>
            </tr>
          </thead>
          <tbody>
            {months2013.map((month, index) => (
  <React.Fragment key={index}>
    <tr ref={monthRefs[month]}>
      <td colSpan="4" style={{ ...styles.td, ...styles.monthHeader }}>
        {month}
      </td>
    </tr>
    {patrakData2013
      .filter((item) => item.month === month)
      .map((item, i) => (
        <tr key={i}>
          <td style={styles.td}>{item.number}</td>
          <td style={styles.td}>{item.date}</td>
          <td style={styles.td}>{item.number}</td> {/* पत्रक क्रमांक */}
          <td style={styles.td}>
            {item.pdf ? (
              <a
                href={item.pdf}
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

export default PatrakBhag2_2013;