
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// ----- 2016 Patrak Data -----
const patrakData2020 = [
    // 🗓 जनवरी 2020
{ month: "जनवरी", number: "1", date: "08/01/2020", patrakNumber: "1", title: "संविधान (एक सौ छब्बीसवां संशोधन) विधेयक, 2019 के अनुसमर्थन प्रस्ताव संबंधी" },
{ month: "जनवरी", number: "2", date: "13/01/2020", patrakNumber: "2", title: "संविधान (एक सौ छब्बीसवां संशोधन) विधेयक, 2019 मध्यप्रदेश विधान सभा द्वारा अनुसमर्थन" },
{ month: "जनवरी", number: "3", date: "15/01/2020", patrakNumber: "3", title: "संविधान (एक सौ छब्बीसवां संशोधन) विधेयक, 2019 मध्यप्रदेश विधान सभा द्वारा अनुसमर्थन संबंधी संकल्प" },
{ month: "जनवरी", number: "4", date: "27/01/2020", patrakNumber: "4", title: "निर्वाचन क्षेत्र क्रमांक-56, जबेरा से निर्वाचित सदस्य, श्री धर्मेन्द्र भावसिंह लोधी को बंदी एवं रिहा किये जाने की सूचना" },
{ month: "जनवरी", number: "5", date: "31/01/2020", patrakNumber: "5", title: "विधान सभा सदस्य के निधन की सूचना" },

// 🗓 फरवरी 2020
{ month: "फ़रवरी", number: "6", date: "13/02/2020", patrakNumber: "6", title: "पंचदश विधान सभा का पंचम् सत्र (दिनांक 16 फ़रवरी से 13 मार्च, 2020)" },
{ month: "फ़रवरी", number: "7", date: "13/02/2020", patrakNumber: "7", title: "निर्वाचन क्षेत्र क्र.205-इन्‍दौर-2 से निर्वाचित सदस्‍य, श्री रमेश मेंदोला, निर्वाचन क्षेत्र क्र.206-इन्‍दौर-3 से निर्वाचित सदस्‍य, श्री आकाश कैलाश विजयवर्गीय, निर्वाचन क्षेत्र क्र.207-इन्‍दौर-4 से निर्वाचित सदस्‍य, श्रीमती मालिनी लक्ष्‍मणसिंह गौड़ तथा निर्वाचन क्षेत्र क्र.208-इन्‍दौर-5 से निर्वाचित सदस्‍य, श्री महेन्‍द्र हार्डिया को बंदी एवं रिहा किये जाने की सूचना" },
{ month: "फ़रवरी", number: "8", date: "19/02/2020", patrakNumber: "8", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" },
{ month: "फ़रवरी", number: "9", date: "25/02/2020", patrakNumber: "9", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था" },
// 🗓 मार्च 2020
{ month: "मार्च", number: "10", date: "06/03/2020", patrakNumber: "10", title: "माह मार्च, 2020 में होने वाले राज्य सभा के द्विवार्षिक निर्वाचन की सूचना एवं अधिसूचना की प्रतियां माननीय सदस्यों के सूचनार्थ संबंधी" },
{ month: "मार्च", number: "11", date: "09/03/2020", patrakNumber: "11", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना" },
{ month: "मार्च", number: "12", date: "12/03/2020", patrakNumber: "12", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" },
{ month: "मार्च", number: "13", date: "12/03/2020", patrakNumber: "13", title: "सत्रकाल में दीर्घा प्रवेश-पत्र व्यवस्था" },
{ month: "मार्च", number: "14", date: "15/03/2020", patrakNumber: "14", title: "माननीय राज्यपाल का अभिभाषण" },
{ month: "मार्च", number: "15", date: "15/03/2020", patrakNumber: "15", title: "सत्रकाल में माननीय सदस्यों को आने जाने हेतु बस व्यवस्था" },
{ month: "मार्च", number: "16", date: "15/03/2020", patrakNumber: "16", title: "विधान सभा की सदस्यता से त्याग-पत्र" },
{ month: "मार्च", number: "17", date: "15/03/2020", patrakNumber: "17", title: "कार्य मंत्रणा समिति (वर्ष 2019-2020)" },
{ month: "मार्च", number: "18", date: "15/03/2020", patrakNumber: "18", title: "सभा भवन आसन क्रम में परिवर्तन की सूचना" },
{ month: "मार्च", number: "19", date: "16/03/2020", patrakNumber: "19", title: "माननीय राज्यपाल का अभिभाषण" },
{ month: "मार्च", number: "20", date: "18/03/2020", patrakNumber: "20", title: "मध्यप्रदेश विधान सभा के निर्वाचित सदस्यों द्वारा राज्यसभा के द्विवार्षिक निर्वाचन, 2020 संबंधी सूचना" },
{ month: "मार्च", number: "21", date: "19/03/2020", patrakNumber: "21", title: "विधान सभा की सदस्यता से त्याग-पत्र" },
{ month: "मार्च", number: "22", date: "20/03/2020", patrakNumber: "22", title: "सभा भवन आसन क्रम रिक्त होने की सूचना" },
{ month: "मार्च", number: "23", date: "23/03/2020", patrakNumber: "23", title: "मध्‍यप्रदेश विधान सभा के निर्वाचित सदस्‍यों द्वारा राज्‍य सभा के द्विवार्षिक निर्वाचन, 2020 के सिलसिले में आगामी गुरुवार, दिनांक 26 मार्च, 2020 को प्रात: 9.00 बजे से अपराह्न 4.00 बजे तक मतदान संबंधी सूचना" },
{ month: "मार्च", number: "24", date: "23/03/2020", patrakNumber: "24", title: "मध्‍यप्रदेश विधान सभा के निर्वाचित सदस्‍यों द्वारा राज्‍य सभा के द्विवार्षिक निर्वाचन, 2020 के सिलसिले में निर्वाचकों (मतदाताओं) हेतु महत्‍वपूर्ण सूचना एवं मतों को रिकार्डिंग के लिए अनुदेश" },
{ month: "मार्च", number: "25", date: "23/03/2020", patrakNumber: "25", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना" },
{ month: "मार्च", number: "26", date: "23/03/2020", patrakNumber: "26", title: "सभा भवन आसन क्रम आवंटित किये जाने की सूचना" },

// 🗓 अप्रैल 2020
{ month: "अप्रैल", number: "27", date: "13/04/2020", patrakNumber: "27", title: "सभा समितियों का विघटन" },
{ month: "अप्रैल", number: "28", date: "23/04/2020", patrakNumber: "28", title: "कोरोना महामारी हेतु नियंत्रण कक्ष की स्थापना" },

// 🗓 जून 2020
{ month: "जून", number: "29", date: "03/06/2020", patrakNumber: "29", title: "माह मार्च, 2020 में होने वाले राज्य सभा के द्विवार्षिक निर्वाचन की स्थगित प्रक्रिया को पूर्ण किये जाने संबंधी सूचना एवं अधिसूचना की प्रतियां माननीय सदस्यों के सूचनार्थ संबंधी" },
{ month: "जून", number: "30", date: "03/06/2020", patrakNumber: "30", title: "मध्‍यप्रदेश विधान सभा के निर्वाचित सदस्‍यों द्वारा राज्‍य सभा के द्विवार्षिक निर्वाचन, 2020 के सिलसिले में आगामी शुक्रवार, दिनांक 19 जून, 2020 को प्रात: 9.00 बजे से अपराह्न 4.00 बजे तक मतदान संबंधी सूचना" },
{ month: "जून", number: "31", date: "03/06/2020", patrakNumber: "31", title: "मध्‍यप्रदेश विधान सभा के सदस्य एवं उनके परिवार के आश्रितों की सम्पत्ति के विवरण को वेबसाईट पर प्रदर्शित किया जाना" },
{ month: "जून", number: "32", date: "10/06/2020", patrakNumber: "32", title: "निर्वाचन क्षेत्र क्रमांक-214, तराना (अ.जा.) से निर्वाचित सदस्य श्री महेश परमार एवं निर्वाचन क्षेत्र क्रमांक-223, आलोट (अ.जा.) से निर्वाचित सदस्य श्री मनोज चावला को बंदी एवं रिहा किये जाने की सूचना" },
{ month: "जून", number: "33", date: "11/06/2020", patrakNumber: "33", title: "निर्वाचकों (मतदाताओं) हेतु  सूचना एवं मतों को अभिलिखित करने के लिए अनुदेश" },
{ month: "जून", number: "34", date: "16/06/2020", patrakNumber: "34", title: "राज्यसभा के द्विवार्षिक निर्वाचन, 2020 में प्रवेश की व्यवस्था" },
{ month: "जून", number: "35", date: "17/06/2020", patrakNumber: "35", title: "राज्यसभा के द्विवार्षिक निर्वाचन, 2020 में विधायक विश्राम गृह से नवीन विधान सभा भवन तक माननीय सदस्यों को आने-जाने हेतु बस व्यवस्था" },
{ month: "जून", number: "36", date: "17/06/2020", patrakNumber: "36", title: "राज्य सभा द्विवार्षिक निर्वाचन, 2020 कोविड-19 के संक्रमण के कारण अस्पताल में भर्ती निर्वाचकों को डाक मतपत्र की सुविधा" },
{ month: "जून", number: "37", date: "20/06/2020", patrakNumber: "37", title: "पंचदश विधान सभा का सप्तम् सत्र (दिनांक 20 से 24 जुलाई, 2020) (निरस्त सत्र)" },
{ month: "जून", number: "38", date: "20/06/2020", patrakNumber: "38", title: "कोविड-19 के संक्रमण से बचाव हेतु सावधानी व स्वास्थ्य परीक्षण" },
// 🗓 जुलाई 2020
{ month: "जुलाई", number: "39", date: "02/07/2020", patrakNumber: "39", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" },
{ month: "जुलाई", number: "40", date: "03/07/2020", patrakNumber: "40", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था" },
{ month: "जुलाई", number: "41", date: "03/07/2020", patrakNumber: "41", title: "विधान सभा के सामयिक अध्यक्ष की नियुक्ति" },
{ month: "जुलाई", number: "42", date: "10/07/2020", patrakNumber: "42", title: "जुलाई, 2020 सत्र के दौरान नोवेल कोरोना वायरस (कोविड-19) के संक्रमण से बचाव" },
{ month: "जुलाई", number: "43", date: "12/07/2020", patrakNumber: "43", title: "विधान सभा की सदस्यता से त्यागपत्र" },
{ month: "जुलाई", number: "44", date: "13/07/2020", patrakNumber: "44", title: "सत्रकाल में विधायक विश्राम गृह से नवीन विधान सभा भवन तक माननीय सदस्यों को आने-जाने हेतु बस व्यवस्था" },
{ month: "जुलाई", number: "45", date: "13/07/2020", patrakNumber: "45", title: "स्थगन प्रस्ताव, ध्यान आकर्षण, शून्यकाल, नियम 139, नियम 142 - क की सूचनाएं ई-मेल से विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था" },
{ month: "जुलाई", number: "46", date: "15/07/2020", patrakNumber: "46", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" },
{ month: "जुलाई", number: "47", date: "15/07/2020", patrakNumber: "47", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना" },
{ month: "जुलाई", number: "48", date: "17/07/2020", patrakNumber: "48", title: "विधान सभा की सदस्यता से त्यागपत्र" },
{ month: "जुलाई", number: "49", date: "18/07/2020", patrakNumber: "49", title: "विधान सभा के ट्विटर एवं फेसबुक पेज का शुभारंभ" },
{ month: "जुलाई", number: "50", date: "23/07/2020", patrakNumber: "50", title: "विधान सभा की सदस्यता से त्यागपत्र" },
{ month: "जुलाई", number: "51", date: "24/07/2020", patrakNumber: "51", title: "जुलाई सत्र, 2020 की प्रश्नों की समस्त सूचनाएं निरस्त" },

// 🗓 अगस्त 2020
{ month: "अगस्त", number: "52", date: "19/08/2020", patrakNumber: "52", title: "मध्यप्रदेश विधान सभा में मुख्य प्रतिपक्षी दल इंडियन नेशनल कांग्रेस के नेता श्री कमलनाथ, सदस्य को नेता प्रतिपक्ष मान्य किया जाना" },
{ month: "अगस्त", number: "53", date: "21/08/2020", patrakNumber: "53", title: "पंचदश विधान सभा का सप्तम् सत्र (दिनांक 21 से 23 सितम्बर, 2020)" },
{ month: "अगस्त", number: "54", date: "27/08/2020", patrakNumber: "54", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" },
// 🗓 सितम्बर 2020
{ month: "सितम्बर", number: "55", date: "02/09/2020", patrakNumber: "55", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था" },
{ month: "सितम्बर", number: "56", date: "09/09/2020", patrakNumber: "56", title: "सितम्बर, 2020 सत्र के दौरान नोवेल कोरोना वायरस (कोविड-19) के संक्रमण से बचाव" },
{ month: "सितम्बर", number: "57", date: "11/09/2020", patrakNumber: "57", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं ई-मेल से विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था" },
{ month: "सितम्बर", number: "58", date: "15/09/2020", patrakNumber: "58", title: "सितम्बर, 2020 सत्र के लिये रैपिड कोरोना टेस्ट की व्यवस्था" },
{ month: "सितम्बर", number: "59", date: "16/09/2020", patrakNumber: "59", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना" },
{ month: "सितम्बर", number: "60", date: "16/09/2020", patrakNumber: "60", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" },
{ month: "सितम्बर", number: "61", date: "16/09/2020", patrakNumber: "61", title: "विधान सभा सदस्य के निधन की सूचना" },
{ month: "सितम्बर", number: "62", date: "16/09/2020", patrakNumber: "62", title: "सत्र प्रारंभ पूर्व सम्पन्न सर्व-दलीय बैठक में लिये गये निर्णय की सूचना" },
{ month: "सितम्बर", number: "63", date: "18/09/2020", patrakNumber: "63", title: "सत्रकाल में विधायक विश्राम गृह से नवीन विधान सभा भवन तक माननीय सदस्यों को आने-जाने हेतु बस व्यवस्था" },
{ month: "सितम्बर", number: "64", date: "18/09/2020", patrakNumber: "64", title: "वर्ष 2020-2021 के बजट साहित्य का वितरण" },
{ month: "सितम्बर", number: "65", date: "18/09/2020", patrakNumber: "65", title: "वीडियो कान्‍फ्रेंसिंग के माध्‍यम से विधान सभा कार्यवाही में वर्चुअल उपस्थिति बाबत्." },
{ month: "सितम्बर", number: "66", date: "20/09/2020", patrakNumber: "66", title: "सर्वदलीय बैठक दिनांक 15.09.2020 में लिये निर्णयानुसार सितम्बर सत्र 2020 में माननीय सदस्यों के प्रश्नों के उत्तर लिखित रूप में दिये जाने" },
{ month: "सितम्बर", number: "67", date: "20/09/2020", patrakNumber: "67", title: "विगत सत्रों की स्थगित बैठकों यथा- दिनांक 23.12.2019, 17.03.2020, 18.03.2020, 19.03.2020 एवं 20.03.2020 की प्रश्नोत्तर सूची एवं प्रश्नों के अपूर्ण उत्तरों के पूर्ण उत्तरों का संकलन खण्ड-3 एवं खण्ड-4 को सदन की बैठक 21.09.2020 में पटल पर रखा जाकर सूचना कार्यालय के माध्यम से वितरित किया जाना" },
{ month: "सितम्बर", number: "68", date: "20/09/2020", patrakNumber: "68", title: "सभा भवन आसन क्रम आवंटित किये जाने की सूचना" },
{ month: "सितम्बर", number: "69", date: "21/09/2020", patrakNumber: "69", title: "उठाये गये विषयों की अनुक्रमणिका पुस्तिका का वितरण" },
{ month: "सितम्बर", number: "70", date: "21/09/2020", patrakNumber: "70", title: "मुद्रित कार्यवाहियों का वितरण" },

// 🗓 अक्टूबर 2020
{ month: "अक्टूबर", number: "71", date: "03/10/2020", patrakNumber: "71", title: "सितम्बर, 2020 सत्र में पटलित संविहित नियम तथा आदेशों का विवरण" },
{ month: "अक्टूबर", number: "72", date: "25/10/2020", patrakNumber: "72", title: "विधान सभा की सदस्यता से त्यागपत्र" },

// 🗓 नवम्बर 2020
{ month: "नवम्बर", number: "73", date: "10/11/2020", patrakNumber: "73", title: "उप निर्वाचन में निर्वाचित माननीय सदस्यों के लिए स्वागत कक्ष की व्यवस्था" },
{ month: "नवम्बर", number: "74", date: "27/11/2020", patrakNumber: "74", title: "पंचदश विधान सभा का अष्टम् सत्र (दिनांक 28 से 30 दिसम्बर, 2020)" },

// 🗓 दिसम्बर 2020
{ month: "दिसम्बर", number: "75", date: "01/12/2020", patrakNumber: "75", title: "तारांकित प्रश्नों की पूर्ववर्तिता निर्धारित करने हेतु शलाका" },
{ month: "दिसम्बर", number: "76", date: "04/12/2020", patrakNumber: "76", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं प्राप्त करने संबंधी व्यवस्था" },
{ month: "दिसम्बर", number: "77", date: "16/12/2020", patrakNumber: "77", title: "समग्र विधान सभा परिसर की सीमांकित भूमि के संबंध में मास्टर प्लान के आकलन हेतु समिति का गठन" },
{ month: "दिसम्बर", number: "78", date: "18/12/2020", patrakNumber: "78", title: "स्थगन प्रस्ताव, ध्यान आकर्षण एवं शून्यकाल सूचनाएं ई-मेल से विधान सभा भवन में प्राप्त करने संबंधी व्यवस्था" },
{ month: "दिसम्बर", number: "79", date: "18/12/2020", patrakNumber: "79", title: "दिसम्बर, 2020 सत्र के लिये रैपिड कोरोना टेस्ट की व्यवस्था" },
{ month: "दिसम्बर", number: "80", date: "22/12/2020", patrakNumber: "80", title: "राष्‍ट्रगीत ‘ वन्‍दे मातरम् ’ से सभा की बैठक का आरंभ होना" },
{ month: "दिसम्बर", number: "81", date: "23/12/2020", patrakNumber: "81", title: "दिसम्बर, 2020 सत्र के दौरान नोवेल कोरोना वायरस कोविड-19 के संक्रमण से बचाव" },
{ month: "दिसम्बर", number: "82", date: "24/12/2020", patrakNumber: "82", title: "सत्रकाल में विधान सभा परिसर की सुरक्षा/प्रवेश-पत्र/पार्किंग व्यवस्था" },
{ month: "दिसम्बर", number: "83", date: "23/12/2020", patrakNumber: "83", title: "वीडियो कान्फ्रेंसिंग के माध्यम से विधान सभा कार्यवाही में वर्चुअल उपस्थिति बाबत्" },
{ month: "दिसम्बर", number: "84", date: "26/12/2020", patrakNumber: "84", title: "सत्रकाल में विधायक विश्राम गृह से नवीन विधान सभा भवन तक माननीय सदस्यों को आने-जाने हेतु बस व्यवस्था" },
{ month: "दिसम्बर", number: "85", date: "29/12/2020", patrakNumber: "85", title: "पंचदश विधानसभा के माननीय सदस्यों की सूची की अशोधित प्रति माननीय सदस्यों के उपयोगार्थ सूचना कार्यालय से वितरित करने संबंधी सूचना" },
{ month: "दिसम्बर", number: "86", date: "29/12/2020", patrakNumber: "86", title: "मध्यप्रदेश विधान सभा सदस्य (दल परिवर्तन के आधार पर निरर्हता) नियम, 1986 के अंतर्गत विधान सभा सदस्यों से प्राप्त जानकारी" },

    

];

const months2020 = [
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

const PatrakBhag2_2020 = () => {
  const monthRefs = months2020.reduce((acc, month) => {
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

वर्ष 2019

</p>
      </div>

      {/* Month Navigation */}
      <div style={styles.monthNav}>
        {months2020.map((m, i) => (
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
            {months2020.map((month, index) => (
              <React.Fragment key={index}>
                <tr ref={monthRefs[month]}>
                  <td colSpan="4" style={{ ...styles.td, ...styles.monthHeader }}>
                    {month}
                  </td>
                </tr>
                {patrakData2020
                  .filter((item) => item.month === month)
                  .map((item, i) => (
                    <tr key={i}>
                      <td style={styles.td}>{item.number}</td>
                      <td style={styles.td}>{item.date}</td>
                      <td style={styles.td}>{item.patrakNumber || "-"}</td>
                      <td style={styles.td}>{item.title}</td>
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

export default PatrakBhag2_2020;
