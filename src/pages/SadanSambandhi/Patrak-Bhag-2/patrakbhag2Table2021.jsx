
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// ----- 2016 Patrak Data -----
const patrakData2021 = [
    // 🗓 जनवरी 2021
{ month: "जनवरी", number: "1", date: "21/01/2021", patrakNumber: "1", title: "स्थायी आदेश में संशोधन", pdfLink: "/misc/P2/p2-210121-1.pdf" },
{ month: "जनवरी", number: "2", date: "22/01/2021", patrakNumber: "2", title: "पंचदश विधान सभा का अष्टम् सत्र (दिनांक 22 फरवरी से 26 मार्च, 2021)", pdfLink: "/misc/P2/p2-220121-1.pdf" },
{ month: "जनवरी", number: "3", date: "25/01/2021", patrakNumber: "3", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-250121-1.pdf" },
{ month: "जनवरी", number: "4", date: "28/01/2021", patrakNumber: "4", title: "माननीय सदस्यों के डिजिटल सिग्नेचर वैधता समाप्त हो गई अथवा अभी तक सिग्नेचर निर्मित नहीं करवाये गये हैं, ऑनलाईन प्रश्न प्रेषण, ध्यानाकर्षण आदि भेजने हेतु Class III Digital Signature-Individual (Combo) डिजिटल सिग्नेचर 3 वर्ष की वैधता अवधि हेतु बनवाये जा रहे हैं", pdfLink: "/misc/P2/p2-280121-1.pdf" },

// 🗓 फरवरी 2021
{ month: "फ़रवरी", number: "5", date: "03/02/2021", patrakNumber: "5", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-030221-1.pdf" },
{ month: "फ़रवरी", number: "6", date: "08/02/2021", patrakNumber: "6", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-080221-1.pdf" },
{ month: "फ़रवरी", number: "7", date: "08/02/2021", patrakNumber: "7", title: "फ़रवरी-मार्च, 2021 सत्र की बैठकों में ऑनलाईन अथवा वीडियो कान्फ्रेंसिंग के माध्यम से विधान सभा की कार्यवाही में वर्चुअल उपस्थिति तथा विधान सभा परिसर में रैपिड कोरोना टेस्ट की व्यवस्था", pdfLink: "/misc/P2/p2-080221-2.pdf" },
{ month: "फ़रवरी", number: "8", date: "16/02/2021", patrakNumber: "8", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-160221-1.pdf" },
{ month: "फ़रवरी", number: "9", date: "18/02/2021", patrakNumber: "9", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-180221-1.pdf" },
{ month: "फ़रवरी", number: "10", date: "18/02/2021", patrakNumber: "10", title: "माननीय विधायकों के पंजीकृत वाहनों पर टोल मुक्त फास्टैग जारी किये जाने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-180221-2.pdf" },
{ month: "फ़रवरी", number: "11", date: "18/02/2021", patrakNumber: "11", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-180221-3.pdf" },
{ month: "फ़रवरी", number: "12", date: "18/02/2021", patrakNumber: "12", title: "फ़रवरी-मार्च, 2021 सत्र के दौरान नोवेल कोरोना वायरस कोविड-19 के संक्रमण से बचाव संबंधी", pdfLink: "/misc/P2/p2-180221-4.pdf" },
{ month: "फ़रवरी", number: "13", date: "20/02/2021", patrakNumber: "13", title: "माननीय सामयिक अध्यक्ष की ओर से मध्याह्न भोज", pdfLink: "/misc/P2/p2-200221-1.pdf" },
{ month: "फ़रवरी", number: "14", date: "20/02/2021", patrakNumber: "14", title: "अध्यक्ष का निर्वाचन", pdfLink: "/misc/P2/p2-200221-2.pdf" },
{ month: "फ़रवरी", number: "15", date: "21/02/2021", patrakNumber: "15", title: "माननीय राज्यपाल का अभिभाषण", pdfLink: "/misc/P2/p2-210221-1.pdf" },
{ month: "फ़रवरी", number: "16", date: "21/02/2021", patrakNumber: "16", title: "निर्वाचन क्षेत्र क्रमांक-144, विदिशा से निर्वाचित सदस्य, श्री शशांक श्रीकृष्ण भार्गव को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-210221-2.pdf" },
{ month: "फ़रवरी", number: "17", date: "22/02/2021", patrakNumber: "17", title: "माननीय राज्यपाल का अभिभाषण", pdfLink: "/misc/P2/p2-220221-1.pdf" },
{ month: "फ़रवरी", number: "18", date: "22/02/2021", patrakNumber: "18", title: "सभा भवन आसन क्रम आवंटित किये जाने की सूचना", pdfLink: "/misc/P2/p2-220221-2.pdf" },
{ month: "फ़रवरी", number: "19", date: "22/02/2021", patrakNumber: "19", title: "मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-220221-3.pdf" },
{ month: "फ़रवरी", number: "20", date: "22/02/2021", patrakNumber: "20", title: "कार्य मंत्रणा समिति", pdfLink: "/misc/P2/p2-220221-4.pdf" },
{ month: "फ़रवरी", number: "21", date: "23/02/2021", patrakNumber: "21", title: "मध्यप्रदेश विधान सभा के दिसम्बर-जनवरी, 2019-2020 सत्र एवं मार्च-अप्रैल, सितम्बर, 2020 सत्र श्रसंयुक्तांक) में माननीय सदस्यों द्वारा उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण", pdfLink: "/misc/P2/p2-230221-1.pdf" },
{ month: "फ़रवरी", number: "22", date: "23/02/2021", patrakNumber: "22", title: "सभा भवन आसन क्रम में परिवर्तन की सूचना", pdfLink: "/misc/P2/p2-230221-2.pdf" },
{ month: "फ़रवरी", number: "23", date: "24/02/2021", patrakNumber: "23", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-240221-1.pdf" },
{ month: "फ़रवरी", number: "24", date: "25/02/2021", patrakNumber: "24", title: "सभापति तालिका की घोषणा", pdfLink: "/misc/P2/p2-250221-1.pdf" },
{ month: "फ़रवरी", number: "25", date: "25/02/2021", patrakNumber: "25", title: "शुक्रवार, दिनांक 26 फ़रवरी, 2021 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-250221-2.pdf" },
{ month: "फ़रवरी", number: "26", date: "26/02/2021", patrakNumber: "26", title: "विधान सभा समितियों, विश्वविद्यालयों की सभा (कोर्ट) एवं राजमाता विजयाराजे सिंधिया कृषि विश्वविद्यालय, ग्वालियर के प्रबंध मंडल के लिए सदस्यों के निर्वाचन का कार्यक्रम", pdfLink: "/misc/P2/p2-260221-1.pdf" },
// 🗓 मार्च 2021
{ month: "मार्च", number: "27", date: "01/03/2021", patrakNumber: "27", title: "वर्ष 2021-2022 के बजट साहित्य का वितरण", pdfLink: "/misc/P2/p2-010321-1.pdf" },
{ month: "मार्च", number: "28", date: "01/03/2021", patrakNumber: "28", title: "वर्ष 2021-22 का आम बजट दिनांक 2 मार्च, 2021 को पूर्वाह्न 11.00 बजे सदन में प्रस्तुत होने के कारण उक्त दिनांक को प्रश्नकाल नहीं हो सकेगा", pdfLink: "/misc/P2/p2-010321-2.pdf" },
{ month: "मार्च", number: "29", date: "02/03/2021", patrakNumber: "29", title: "कटौती प्रस्ताव की सूचनाएं", pdfLink: "/misc/P2/p2-020321-1.pdf" },
{ month: "मार्च", number: "30", date: "02/03/2021", patrakNumber: "30", title: "स्थगित बैठक के प्रश्नोत्तरों को आगामी बैठक की कार्यवाही में मुद्रित किया जाना", pdfLink: "/misc/P2/p2-020321-2.pdf" },
{ month: "मार्च", number: "31", date: "02/03/2021", patrakNumber: "31", title: "सभा की बैठक न होना", pdfLink: "/misc/P2/p2-020321-3.pdf" },
{ month: "मार्च", number: "32", date: "02/03/2021", patrakNumber: "32", title: "विधान सभा समितियों के लिए सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-020321-4.pdf" },
{ month: "मार्च", number: "33", date: "02/03/2021", patrakNumber: "33", title: "विश्वविद्यालय की सभा (कोर्ट) के लिए विधान सभा के 8-8 सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-020321-5.pdf" },
{ month: "मार्च", number: "34", date: "02/03/2021", patrakNumber: "34", title: "राजमाता विजयराजे सिंधिया कृषि विश्वविद्यालय, ग्वालियर के प्रबंध मंडल के लिए राज्य विधान सभा के दो सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-020321-6.pdf" },
{ month: "मार्च", number: "35", date: "02/03/2021", patrakNumber: "35", title: "मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-030321-1.pdf" },
{ month: "मार्च", number: "36", date: "03/03/2021", patrakNumber: "36", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-030321-2.pdf" },
{ month: "मार्च", number: "37", date: "03/03/2021", patrakNumber: "37", title: "समिति का निर्वाचन", pdfLink: "/misc/P2/p2-030321-3.pdf" },
{ month: "मार्च", number: "38", date: "03/03/2021", patrakNumber: "38", title: "विश्वविद्यालय की सभा (कोर्ट) के लिए विधान सभा के 8-8 सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-030321-4.pdf" },
{ month: "मार्च", number: "39", date: "03/03/2021", patrakNumber: "39", title: "राजमाता विजयराजे सिंधिया कृषि विश्वविद्यालय, ग्वालियर के प्रबंध मंडल के लिए राज्य विधान सभा के दो सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-030321-5.pdf" },
{ month: "मार्च", number: "40", date: "04/03/2021", patrakNumber: "40", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-040321-1.pdf" },
{ month: "मार्च", number: "41", date: "04/03/2021", patrakNumber: "41", title: "शुक्रवार, दिनांक 5 मार्च, 2021 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-040321-2.pdf" },
{ month: "मार्च", number: "42", date: "04/03/2021", patrakNumber: "42", title: "दिनांक 5 मार्च, 2021 को उठाई जाने वाली नियम-52 के अंतर्गत आधे घण्टे की चर्चा", pdfLink: "/misc/P2/p2-040321-3.pdf" },
{ month: "मार्च", number: "43", date: "04/03/2021", patrakNumber: "43", title: "दिनांक 5 मार्च, 2021 को उठाई जाने वाली नियम-52 के अंतर्गत आधे घण्टे की चर्चा", pdfLink: "/misc/P2/p2-040321-4.pdf" },
{ month: "मार्च", number: "44", date: "04/03/2021", patrakNumber: "44", title: "मध्यप्रदेश विधान सभा की (1) लोक लेखा (2) प्राक्कलन (3) सरकारी उपक्रमों संबंधी (4) अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण और (5) स्‍थानीय निकाय एवं पंचायतीराज लेखा समितियों के लिए सदस्य का निर्वाचन", pdfLink: "/misc/P2/p2-040321-5.pdf" },
{ month: "मार्च", number: "45", date: "04/03/2021", patrakNumber: "45", title: "विश्‍वविद्यालय की सभा ( कोर्ट) के लिए विधान सभा के 8-8 सदस्‍यों का निर्वाचन", pdfLink: "/misc/P2/p2-040321-6.pdf" },
{ month: "मार्च", number: "46", date: "04/03/2021", patrakNumber: "46", title: "राजमाता विजयाराजे सिंधिया कृषि विश्‍वविद्यालय, ग्‍वालियर के प्रबंध मंडल के लिए राज्य विधान सभा के दो सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-040321-7.pdf" },
{ month: "मार्च", number: "47", date: "08/03/2021", patrakNumber: "47", title: "माननीय सदस्यों को विधायक विश्राम गृह से रेल्वे स्टेशन आने-जाने हेतु वाहन व्यवस्था", pdfLink: "/misc/P2/p2-080321-1.pdf" },
{ month: "मार्च", number: "48", date: "08/03/2021", patrakNumber: "48", title: "स्थायी आदेश में संशोधन", pdfLink: "/misc/P2/p2-080321-2.pdf" },
{ month: "मार्च", number: "49", date: "09/03/2021", patrakNumber: "49", title: "स्थगित बैठक के प्रश्नोत्तरों को आगामी बैठक की कार्यवाही में मुद्रित किया जाना", pdfLink: "/misc/P2/p2-090321-1.pdf" },
{ month: "मार्च", number: "50", date: "10/03/2021", patrakNumber: "50", title: "सत्र के दौरान नोवल कोरोना वायरस कोविड-19 के संक्रमण से बचाव हेतु", pdfLink: "/misc/P2/p2-100321-1.pdf" },
{ month: "मार्च", number: "51", date: "12/03/2021", patrakNumber: "51", title: "नोवल कोराना वायरस (वायरस (कोविड-19) के संक्रमण से बचाव हेतु", pdfLink: "/misc/P2/p2-120321-1.pdf" },
{ month: "मार्च", number: "52", date: "14/03/2021", patrakNumber: "52", title: "फरवरी-मार्च, 2021 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-140321-1.pdf" },
{ month: "मार्च", number: "53", date: "15/03/2021", patrakNumber: "53", title: "लोक लेखा समिति में एक स्थान की रिक्ति", pdfLink: "/misc/P2/p2-150321-1.pdf" },
{ month: "मार्च", number: "54", date: "23/03/2021", patrakNumber: "54", title: "फरवरी-मार्च, 2021 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण", pdfLink: "/misc/P2/p2-230321-1.pdf" },

// 🗓 मई 2021
{ month: "मई", number: "55", date: "05/05/2021", patrakNumber: "55", title: "नाम-निर्दिष्ट समितियों का गठन", pdfLink: "/misc/P2/p2-050521-1.pdf" },
{ month: "मई", number: "56", date: "05/05/2021", patrakNumber: "56", title: "विधान सभा सदस्यों के निधन की सूचना", pdfLink: "/misc/P2/p2-050521-2.pdf" },
{ month: "मई", number: "57", date: "12/05/2021", patrakNumber: "57", title: "विधान सभा सदस्य के निधन की सूचना", pdfLink: "/misc/P2/p2-120521-1.pdf" },
{ month: "मई", number: "58", date: "24/05/2021", patrakNumber: "58", title: "लोक लेखा एवं अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग के कल्याण संबंधी समितियों में एक-एक स्थान की रिक्ति एवं लोक लेखा समिति हेतु सभापति की नियुक्ति", pdfLink: "/misc/P2/p2-240521-1.pdf" },
{ month: "मई", number: "59", date: "24/05/2021", patrakNumber: "59", title: "नियम समिति में एक स्थान रिक्त होने संबंधी", pdfLink: "/misc/P2/p2-240521-2.pdf" },
{ month: "मई", number: "60", date: "24/05/2021", patrakNumber: "60", title: "निर्वाचित सदस्य की ओर से प्राप्त जानकारी", pdfLink: "/misc/P2/p2-240521-3.pdf" },
{ month: "मई", number: "61", date: "31/05/2021", patrakNumber: "61", title: "मध्यप्रदेश विधान सभा के सदस्यों एवं पूर्व सदस्यों के वेतन/भत्तों आदि के पुनरीक्षण एवं अनुषांगिक विषयों का परीक्षण कर अनुशंसाएं करने के लिए निम्नांकित समिति का गठन", pdfLink: "/misc/P2/p2-310521-1.pdf" },
{ month: "मई", number: "62", date: "31/05/2021", patrakNumber: "62", title: "सामान्य प्रयोजन समिति का गठन", pdfLink: "/misc/P2/p2-310521-2.pdf" },

// 🗓 जून 2021
{ month: "जून", number: "63", date: "15/06/2021", patrakNumber: "63", title: "मध्यप्रदेश विधान सभा के सदस्य एवं उनके परिवार के आश्रितों की सम्पत्ति के विवरण को वेबसाईट पर प्रदर्शित किया जाना", pdfLink: "/misc/P2/p2-150621-1.pdf" },
{ month: "जून", number: "64", date: "22/06/2021", patrakNumber: "64", title: "सदन एवं सदस्यों से संबंधित विभिन्न विषयों / मुद्दों पर अध्यक्ष को परामर्श देने संबंधी समिति", pdfLink: "/misc/P2/p2-220621-1.pdf" },

// 🗓 जुलाई 2021
{ month: "जुलाई", number: "65", date: "12/07/2021", patrakNumber: "65", title: "पंचदश विधान सभा का नवम् सत्र (दिनांक 9 अगस्त से 12 अगस्त, 2021)", pdfLink: "/misc/P2/p2-120721-1.pdf" },
{ month: "जुलाई", number: "66", date: "14/07/2021", patrakNumber: "66", title: "मध्यप्रदेश भोज (मुक्त) विश्वविद्यालय, भोपाल के माध्यम से इच्छुक मान. विधायकों द्वारा अपनी स्नातक / स्नातकोत्तर शैक्षणिक योग्यता में अभिवृद्धि किये जाने संबंधी सूचना", pdfLink: "/misc/P2/p2-140721-1.pdf" },
{ month: "जुलाई", number: "67", date: "14/07/2021", patrakNumber: "67", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-140721-2.pdf" },
{ month: "जुलाई", number: "68", date: "23/07/2021", patrakNumber: "68", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-230721-1.pdf" },
{ month: "जुलाई", number: "69", date: "26/07/2021", patrakNumber: "69", title: "अशासकीय संकल्प की सूचना प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-260721-1.pdf" },
{ month: "जुलाई", number: "70", date: "30/07/2021", patrakNumber: "70", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-300721-1.pdf" },

// 🗓 अगस्‍त 2021
{ month: "अगस्‍त", number: "71", date: "03/08/2021", patrakNumber: "71", title: "अगस्‍त, 2021 सत्र के दौरान नोवेल कोरोना वायरस कोविड-19 के संक्रमण से बचाव", pdfLink: "/misc/P2/p2-030821-1.pdf" },
{ month: "अगस्‍त", number: "72", date: "03/08/2021", patrakNumber: "72", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-030821-2.pdf" },
{ month: "अगस्‍त", number: "73", date: "03/08/2021", patrakNumber: "73", title: "कोविड-19 संक्रमण से बचाव हेतु माननीय सदस्यों का वैक्सीनेशन", pdfLink: "/misc/P2/p2-030821-3.pdf" },
{ month: "अगस्‍त", number: "74", date: "03/08/2021", patrakNumber: "74", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-030821-4.pdf" },
{ month: "अगस्‍त", number: "75", date: "05/08/2021", patrakNumber: "75", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-050821-1.pdf" },
{ month: "अगस्‍त", number: "76", date: "06/08/2021", patrakNumber: "76", title: "\"असंसदीय शब्द एवं वाक्यांश संग्रह\" पुस्तिका का विमोचन कार्यक्रम", pdfLink: "/misc/P2/p2-060821-1.pdf" },
{ month: "अगस्‍त", number: "77", date: "08/08/2021", patrakNumber: "77", title: "\"असंसदीय शब्द एवं वाक्यांश संग्रह\" पुस्तिका का वितरण सूचना कार्यालय के माध्यम से किया जाना", pdfLink: "/misc/P2/p2-080821-1.pdf" },
{ month: "अगस्‍त", number: "78", date: "08/08/2021", patrakNumber: "78", title: "माननीय विधायकों के वाहनों को टोल शुल्क मुक्त फास्टैग उपलब्ध कराये जाने संबंधी", pdfLink: "/misc/P2/p2-080821-2.pdff" },
{ month: "अगस्‍त", number: "79", date: "09/08/2021", patrakNumber: "79", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-090821-1.pdf" },
{ month: "अगस्‍त", number: "80", date: "09/08/2021", patrakNumber: "80", title: "गुरूवार, दिनांक 9 अगस्त, 2021 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-090821-2.pdf" },
{ month: "अगस्‍त", number: "81", date: "10/08/2021", patrakNumber: "81", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-100821-1.pdf" },
{ month: "अगस्‍त", number: "82", date: "18/08/2021", patrakNumber: "82", title: "निर्वाचन क्षेत्र क्रमांक 144, विदिशा से निर्वाचित सदस्य, श्री शशांक श्रीकृष्ण भार्गव एवं निर्वाचन क्षेत्र क्रमांक 114, बरघाट (अ.ज.जा.) से निर्वाचित सदस्य, श्री अर्जुन सिंह काकोड़िया को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-180821-1.pdf" },
// 🗓 सितम्बर 2021
{ month: "सितम्बर", number: "83", date: "07/09/2021", patrakNumber: "83", title: "निर्वाचन क्षेत्र क्रमांक 166, आगर (अ.जा.) से निर्वाचित सदस्य, श्री विपिन वानखेड़े को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-070921-1.pdf" },
{ month: "सितम्बर", number: "84", date: "08/09/2021", patrakNumber: "84", title: "मध्यप्रदेश विधान सभा के प्रक्रिया तथा कार्य संचालन संबंधी नियम में संशोधन", pdfLink: "/misc/P2/p2-080921-1.pdf" },
{ month: "सितम्बर", number: "85", date: "15/09/2021", patrakNumber: "85", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्यसभा में रिक्त हुए एक स्थान की पूर्ति हेतु उप-निर्वाचन की अधिसूचना एवं सूचना की प्रतियां मान. सदस्यों को सूचनार्थ", pdfLink: "/misc/P2/p2-150921-1.pdf" },

// 🗓 अक्टूबर 2021
{ month: "अक्टूबर", number: "86", date: "05/10/2021", patrakNumber: "86", title: "निर्वाचन क्षेत्र क्रमांक 144, विदिशा से निर्वाचित सदस्य, श्री शशांक श्रीकृष्ण भार्गव को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-051021-1.pdf" },

// 🗓 नवम्बर 2021
{ month: "नवम्बर", number: "87", date: "01/11/2021", patrakNumber: "87", title: "निर्वाचन क्षेत्र क्रमांक 144, विदिशा से निर्वाचित सदस्य, श्री शशांक श्रीकृष्ण भार्गव को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-011121-1.pdf" },
{ month: "नवम्बर", number: "88", date: "16/11/2021", patrakNumber: "88", title: "निर्वाचन क्षेत्र क्रमांक 166 आगर (अ.जा.) से निर्वाचित सदस्य, श्री विपिन वानखेड़े को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-161121-1.pdf" },
{ month: "नवम्बर", number: "89", date: "23/11/2021", patrakNumber: "89", title: "पंचदश विधान सभा का दशम् सत्र (दिनांक 20 नवम्बर से 24 नवम्बर, 2021)", pdfLink: "/misc/P2/p2-231121-1.pdf" },
{ month: "नवम्बर", number: "90", date: "25/11/2021", patrakNumber: "90", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका", pdfLink: "/misc/P2/p2-251121-1.pdf" },
{ month: "नवम्बर", number: "91", date: "29/11/2021", patrakNumber: "91", title: "स्थायी आदेश में संशोधन", pdfLink: "/misc/P2/p2-291121-1.pdf" },
{ month: "नवम्बर", number: "92", date: "29/11/2021", patrakNumber: "92", title: "निर्वाचन क्षेत्र क्रमांक 166, आगर (अ.जा.) से निर्वाचित सदस्य, श्री विपिन वानखेड़े एवं निर्वाचन क्षेत्र क्रमांक 169, कालापीपल से निर्वाचित सदस्य, श्री कुणाल चौधरी को बंदी एवं रिहा किये जाने की सूचना", pdfLink: "/misc/P2/p2-291121-2.pdf" },

// 🗓 दिसम्बर 2021
{ month: "दिसम्बर", number: "93", date: "02/12/2021", patrakNumber: "93", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-021221-1.pdf" },
{ month: "दिसम्बर", number: "94", date: "06/12/2021", patrakNumber: "94", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना", pdfLink: "/misc/P2/p2-061221-1.pdf" },
{ month: "दिसम्बर", number: "95", date: "08/12/2021", patrakNumber: "95", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल की सूचनाएं ई-मेल से प्राप्त करने संबंधी व्यवस्था", pdfLink: "/misc/P2/p2-081221-1.pdf" },
{ month: "दिसम्बर", number: "96", date: "10/12/2021", patrakNumber: "96", title: "दिसम्बर, 2021 सत्र के दौरान नोवेल कोरोना वायरस कोविड-19 के संक्रमण से बचाव", pdfLink: "/misc/P2/p2-101221-1.pdf" },
{ month: "दिसम्बर", number: "97", date: "15/12/2021", patrakNumber: "97", title: "माननीय विधायकों के वाहनों को टोल शुल्क मुक्त फास्टैग उपलब्ध कराये जाने संबंधी", pdfLink: "/misc/P2/p2-151221-1.pdf" },
{ month: "दिसम्बर", number: "98", date: "17/12/2021", patrakNumber: "98", title: "सदस्यों के लिए संदर्भ सेवा", pdfLink: "/misc/P2/p2-171221-1.pdf" },
{ month: "दिसम्बर", number: "99", date: "17/12/2021", patrakNumber: "99", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था", pdfLink: "/misc/P2/p2-171221-2.pdf" },
{ month: "दिसम्बर", number: "100", date: "17/12/2021", patrakNumber: "100", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था", pdfLink: "/misc/P2/p2-171221-3.pdf" },
{ month: "दिसम्बर", number: "101", date: "20/12/2021", patrakNumber: "101", title: "मुद्रित कार्यवाहियों का वितरण", pdfLink: "/misc/P2/p2-201221-1.pdf" },
{ month: "दिसम्बर", number: "102", date: "20/12/2021", patrakNumber: "102", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के नियम 4 (2) के अंतर्गत विधान सभा के सदस्यों से प्राप्त सूचना व जानकारी", pdfLink: "/misc/P2/p2-201221-2.pdf" },
{ month: "दिसम्बर", number: "103", date: "21/12/2021", patrakNumber: "103", title: "प्रश्न के उत्तर में संशोधन", pdfLink: "/misc/P2/p2-211221-1.pdf" },
{ month: "दिसम्बर", number: "104", date: "21/12/2021", patrakNumber: "104", title: "कार्य मंत्रणा समिति का प्रतिवेदन", pdfLink: "/misc/P2/p2-211221-2.pdf" },
{ month: "दिसम्बर", number: "105", date: "21/12/2021", patrakNumber: "105", title: "अनुसूचित जाति तथा अनुसूचित जनजाति वर्ग के कल्याण संबंधी तथा पिछड़े वर्गों के कल्याण संबंधी समितियों के लिए सदस्यों के निर्वाचन का कार्यक्रम", pdfLink: "/misc/P2/p2-211221-3.pdf" },
{ month: "दिसम्बर", number: "106", date: "22/12/2021", patrakNumber: "106", title: "शुक्रवार, दिनांक 24 दिसम्बर, 2021 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-221221-1.pdf" },
{ month: "दिसम्बर", number: "107", date: "22/12/2021", patrakNumber: "107", title: "अनुसूचित जाति तथा अनुसूचित जनजाति वर्ग के कल्याण संबंधी तथा पिछड़े वर्गों के कल्याण संबंधी समितियों के निर्वाचन के लिए प्रस्तावित उम्मीदवारों के नाम", pdfLink: "/misc/P2/p2-221221-2.pdf" },
{ month: "दिसम्बर", number: "108", date: "23/12/2021", patrakNumber: "108", title: "अनुसूचित जाति तथा अनुसूचित जनजाति वर्ग के कल्याण संबंधी तथा पिछड़े वर्गों के कल्याण संबंधी समितियों के लिए निर्वाचन", pdfLink: "/misc/P2/p2-231221-1.pdf" },
{ month: "दिसम्बर", number: "109", date: "23/12/2021", patrakNumber: "109", title: "शुक्रवार, दिनांक 24 दिसम्बर, 2021 हेतु निर्धारित अशासकीय संकल्पों की सूची", pdfLink: "/misc/P2/p2-231221-2.pdf" },
{ month: "दिसम्बर", number: "110", date: "24/12/2021", patrakNumber: "110", title: "मध्यप्रदेश विधान सभा की अनुसूचित जाति तथा अनुसूचित जनजाति वर्ग के कल्याण संबंधी एवं पिछड़े वर्ग के कल्याण संबंधी समितियों के लिए सदस्यों का निर्वाचन", pdfLink: "/misc/P2/p2-241221-1.pdf" },
{ month: "दिसम्बर", number: "111", date: "29/12/2021", patrakNumber: "111", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के अधीन प्राप्त अर्जी पर अध्यक्ष, विधान सभा के आदेश की सूचना", pdfLink: "/misc/P2/p2-291221-1.pdf" }

];

const months2021 = [
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

const PatrakBhag2_2021 = () => {
  const monthRefs = months2021.reduce((acc, month) => {
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

वर्ष 2021

</p>
      </div>

      {/* Month Navigation */}
      <div style={styles.monthNav}>
        {months2021.map((m, i) => (
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
  {months2021.map((month, index) => (
    <React.Fragment key={index}>
      <tr ref={monthRefs[month]}>
        <td colSpan="4" style={{ ...styles.td, ...styles.monthHeader }}>
          {month}
        </td>
      </tr>
      {patrakData2021
        .filter((item) => item.month === month)
        .map((item, i) => (
          <tr key={i}>
            <td style={styles.td}>{item.number}</td>
            <td style={styles.td}>{item.date}</td>
            <td style={styles.td}>{item.patrakNumber || "-"}</td>
            {/* ✅ Changed here: Wrapped title with <a> tag to make it clickable */}
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

export default PatrakBhag2_2021;
