import React from "react";
import { useNavigate } from "react-router-dom";

const sessionData = [
  // --- चतुर्दश विधानसभा (2013-2018) ---

  {
    sessionNumber: "तृतीय",
    month: "जून-जुलाई, 2014",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "जून": [
            { day: 30, pdf: "/misc/house proceedings/hp300614.pdf", html: "" },
          ],
          "जुलाई": [
            { day: 1, pdf: "/misc/house proceedings/hp010714.pdf", html: "" },
            { day: 2, pdf: "/misc/house proceedings/hp020714.pdf", html: "" },
            { day: 3, pdf: "/misc/house proceedings/hp030714.pdf", html: "" },
            { day: 4, pdf: "/misc/house proceedings/hp040714.pdf", html: "" },
            { day: 7, pdf: "/misc/house proceedings/hp070714.pdf", html: "" },
            { day: 8, pdf: "/misc/house proceedings/hp080714.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/hp090714.pdf", html: "" },
            { day: 10, pdf: "/misc/house proceedings/hp100714.pdf", html: "" },
            { day: 11, pdf: "/misc/house proceedings/hp110714.pdf", html: "" },
            { day: 14, pdf: "/misc/house proceedings/hp140714.pdf", html: "" },
            { day: 15, pdf: "/misc/house proceedings/hp150714.pdf", html: "" },
            { day: 16, pdf: "/misc/house proceedings/hp160714.pdf", html: "" },
            { day: 17, pdf: "/misc/house proceedings/hp170714.pdf", html: "" },
            { day: 18, pdf: "/misc/house proceedings/hp180714.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/hp210714.pdf", html: "" },
            { day: 22, pdf: "/misc/house proceedings/hp220714.pdf", html: "" },
            { day: 23, pdf: "", html: "" },
            { day: 24, pdf: "", html: "" },
            { day: 25, pdf: "", html: "" },
            { day: 28, pdf: "", html: "" },
          ],
          "परिशिष्ट": [
            { day: 21, pdf: "/misc/house proceedings/210714-speech.pdf", html: "" },
            { day: 22, pdf: "/misc/house proceedings/220714-speech.pdf", html: "" },

          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "जून": [],
          "जुलाई": [],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "जून": [],
          "जुलाई": [],
        },
      },
    ],
  },

  {
    sessionNumber: "चतुर्थ",
    month: "दिसम्बर, 2014",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "दिसम्बर": [
            { day: 8, pdf: "/misc/house proceedings/hp081214.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/hp091214.pdf", html: "" },
            { day: 10, pdf: "/misc/house proceedings/hp101214.pdf", html: "" },
            { day: 11, pdf: "/misc/house proceedings/hp111214.pdf", html: "" },
            { day: 12, pdf: "/misc/house proceedings/hp121214.pdf", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "दिसम्बर": [
            { day: 8, pdf: "/misc/house proceedings/ques081214.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/ques091214.pdf", html: "" },
            { day: 10, pdf: "/misc/house proceedings/ques101214.pdf", html: "" },
            { day: 11, pdf: "/misc/house proceedings/ques111214.pdf", html: "" },
            { day: 12, pdf: "/misc/house proceedings/ques121214.pdf", html: "" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "दिसम्बर": [
            { day: 8, pdf: "/misc/house proceedings/star081214.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/star091214.pdf", html: "" },
            { day: 10, pdf: "/misc/house proceedings/star101214.pdf", html: "" },
            { day: 11, pdf: "/misc/house proceedings/star111214.pdf", html: "" },
            { day: 12, pdf: "/misc/house proceedings/star121214.pdf", html: "" },
          ],
        },
      },
    ],
  },

  {
    sessionNumber: "पंचम",
    month: "फरवरी-मार्च, 2015",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "फरवरी": [
            { day: 18, pdf: "/misc/house proceedings/hp180215.pdf", html: "" },
            { day: 19, pdf: "/misc/house proceedings/hp190215.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/hp200215.pdf", html: "" },
            { day: 23, pdf: "/misc/house proceedings/hp230215.pdf", html: "" },
            { day: 24, pdf: "/misc/house proceedings/hp240215.pdf", html: "" },
            { day: 25, pdf: "/misc/house proceedings/hp250215.pdf", html: "" },
            { day: 26, pdf: "/misc/house proceedings/hp260215.pdf", html: "" },
            { day: 27, pdf: "", html: "" },
          ],
          "मार्च": [
            { day: 2, pdf: "", html: "" },
            { day: 3, pdf: "", html: "" },
            { day: 4, pdf: "", html: "" },
            { day: 11, pdf: "", html: "" },
            { day: 12, pdf: "", html: "" },
            { day: 13, pdf: "", html: "" },
            { day: 16, pdf: "", html: "" },
            { day: 17, pdf: "", html: "" },
            { day: 18, pdf: "", html: "" },
            { day: 19, pdf: "", html: "" },
            { day: 20, pdf: "", html: "" },
            { day: 23, pdf: "", html: "" },
            { day: 24, pdf: "", html: "" },
            { day: 25, pdf: "", html: "" },
            { day: 26, pdf: "", html: "" },
            { day: 27, pdf: "", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "फरवरी": [
            { day: 18, pdf: "", html: "" },
            { day: 19, pdf: "/misc/house proceedings/ques190215.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/ques200215.pdf", html: "" },
            { day: 23, pdf: "/misc/house proceedings/ques230215.pdf", html: "" },
            { day: 24, pdf: "/misc/house proceedings/ques240215.pdf", html: "" },
            { day: 25, pdf: "/misc/house proceedings/ques250215.pdf", html: "" },
            { day: 26, pdf: "/misc/house proceedings/ques260215.pdf", html: "" },
            { day: 27, pdf: "/misc/house proceedings/ques270215.pdf", html: "" },
          ],
          "मार्च": [
            { day: 2, pdf: "/misc/house proceedings/ques020315.pdf", html: "" },
            { day: 3, pdf: "/misc/house proceedings/ques030315.pdf", html: "" },
            { day: 4, pdf: "/misc/house proceedings/ques040315.pdf", html: "" },
            { day: 11, pdf: "/misc/house proceedings/ques110315.pdf", html: "" },
            { day: 12, pdf: "/misc/house proceedings/ques120315.pdf", html: "" },
            { day: 13, pdf: "/misc/house proceedings/ques130315.pdf", html: "" },
            { day: 16, pdf: "/misc/house proceedings/ques160315.pdf", html: "" },
            { day: 17, pdf: "/misc/house proceedings/ques170315.pdf", html: "" },
            { day: 18, pdf: "/misc/house proceedings/ques180315.pdf", html: "" },
            { day: 19, pdf: "/misc/house proceedings/ques190315.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/ques200315.pdf", html: "" },
            { day: 23, pdf: "", html: "" },
            { day: 24, pdf: "", html: "" },
            { day: 25, pdf: "", html: "" },
            { day: 26, pdf: "", html: "" },
            { day: 27, pdf: "", html: "" },
            { day: "(पाँच दिनांकों - 23, 24,25, 26, 27 मार्च, 2015 के प्रश्न विभागों को प्रेषित नहीं किये गये, अत: इन दिनांकों के प्रश्नोत्तर व्यपगत हो गये हैं.)" , pdf: "", html: "" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "फरवरी": [
            { day: 18, pdf: "", html: "" },
            { day: 19, pdf: "/misc/house proceedings/star190215.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/star200215.pdf", html: "" },
            { day: 23, pdf: "/misc/house proceedings/star230215.pdf", html: "" },
            { day: 24, pdf: "/misc/house proceedings/star240215.pdf", html: "" },
            { day: 25, pdf: "/misc/house proceedings/star250215.pdf", html: "" },
            { day: 26, pdf: "/misc/house proceedings/star260215.pdf", html: "" },
            { day: 27, pdf: "/misc/house proceedings/star270215.pdf", html: "" },
          ],
          "मार्च": [
            { day: 2, pdf: "/misc/house proceedings/star020315.pdf", html: "" },
            { day: 3, pdf: "/misc/house proceedings/star030315.pdf", html: "" },
            { day: 4, pdf: "", html: "" },
            { day: 11, pdf: "", html: "" },
            { day: 12, pdf: "", html: "" },
            { day: 13, pdf: "", html: "" },
            { day: 16, pdf: "", html: "" },
            { day: 17, pdf: "", html: "" },
            { day: 18, pdf: "", html: "" },
            { day: 19, pdf: "", html: "" },
            { day: 20, pdf: "", html: "" },
            { day: 23, pdf: "", html: "" },
            { day: 24, pdf: "", html: "" },
            { day: 25, pdf: "", html: "" },
            { day: 26, pdf: "", html: "" },
            { day: 27, pdf: "", html: "" },
          ],
        },
      },
    ],
  },

  {
    sessionNumber: "षष्टम्",
    month: "मार्च, 2015",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "मार्च": [
            { day: 24, pdf: "/misc/house proceedings/hp240315.pdf", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "मार्च": [],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "मार्च": [],
        },
      },
    ],
  },

  {
    sessionNumber: "सप्तम्",
    month: "जुलाई, 2015",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "जुलाई": [
            { day: 20, pdf: "/misc/house proceedings/hp200715.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/hp210715.pdf", html: "" },
            { day: 22, pdf: "/misc/house proceedings/hp220715.pdf", html: "" },
            { day: 23, pdf: "", html: "" },
            { day: 24, pdf: "", html: "" },
            { day: 27, pdf: "", html: "" },
            { day: 28, pdf: "", html: "" },
            { day: 29, pdf: "", html: "" },
            { day: 30, pdf: "", html: "" },
            { day: 31, pdf: "", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "जुलाई": [
            { day: 20, pdf: "/misc/house proceedings/ques200715.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/ques210715.pdf", html: "" },
            { day: 22, pdf: "/misc/house proceedings/ques220715.pdf", html: "" },
            { day: 23, pdf: "/misc/house proceedings/ques230715.pdf", html: "" },
            { day: 24, pdf: "/misc/house proceedings/ques240715.pdf", html: "" },
            { day: 27, pdf: "/misc/house proceedings/ques270715.pdf", html: "" },
            { day: 28, pdf: "/misc/house proceedings/ques280715.pdf", html: "" },
            { day: 29, pdf: "/misc/house proceedings/ques290715.pdf", html: "" },
            { day: 30, pdf: "/misc/house proceedings/ques300715.pdf", html: "" },
            { day: 31, pdf: "/misc/house proceedings/ques310715.pdf", html: "" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "जुलाई": [
            { day: 20, pdf: "/misc/house proceedings/star200715.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/star210715.pdf", html: "" },
            { day: 22, pdf: "/misc/house proceedings/star220715.pdf", html: "" },
            { day: 23, pdf: "/misc/house proceedings/star230715.pdf", html: "" },
            { day: 24, pdf: "/misc/house proceedings/star240715.pdf", html: "" },
            { day: 27, pdf: "/misc/house proceedings/star270715.pdf", html: "" },
            { day: 28, pdf: "", html: "" },
            { day: 29, pdf: "", html: "" },
            { day: 30, pdf: "", html: "" },
            { day: 31, pdf: "", html: "" },
          ],
        },
      },
    ],
  },

  {
    sessionNumber: "अष्टम्",
    month: "नवम्बर, 2015",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "नवम्बर": [
            { day: 5, pdf: "/misc/house proceedings/hp051115.pdf", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "नवम्बर": [],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "नवम्बर": [],
        },
      },
    ],
  },

  {
    sessionNumber: "नवम्",
    month: "दिसम्बर, 2015",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "दिसम्बर": [
            { day: 7, pdf: "/misc/house proceedings/hp071215.pdf", html: "/misc/house proceedings/hp071215.htm" },
            { day: 8, pdf: "/misc/house proceedings/hp081215.pdf", html: "/misc/house proceedings/hp081215.htm" },
            { day: 9, pdf: "/misc/house proceedings/hp091215.pdf", html: "/misc/house proceedings/hp091215.htm" },
            { day: 10, pdf: "/misc/house proceedings/hp101215.pdf", html: "/misc/house proceedings/hp101215.htm" },
            { day: 11, pdf: "/misc/house proceedings/hp111215.pdf", html: "/misc/house proceedings/hp111215.htm" },
            { day: 14, pdf: "/misc/house proceedings/hp141215.pdf", html: "/misc/house proceedings/hp141215.htm" },
            { day: 15, pdf: "/misc/house proceedings/hp151215.pdf", html: "/misc/house proceedings/hp151215.htm" },
            { day: 16, pdf: "/misc/house proceedings/hp161215.pdf", html: "/misc/house proceedings/hp161215.htm" },
            { day: 17, pdf: "", html: "" },
            { day: 18, pdf: "", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "दिसम्बर": [
            { day: 7, pdf: "/misc/house proceedings/ques071215.pdf", html: "/misc/house proceedings/ques071215.htm" },
            { day: 8, pdf: "/misc/house proceedings/ques081215.pdf", html: "/misc/house proceedings/ques081215.htm" },
            { day: 9, pdf: "/misc/house proceedings/ques091215.pdf", html: "/misc/house proceedings/ques091215.htm" },
            { day: 10, pdf: "/misc/house proceedings/ques101215.pdf", html: "/misc/house proceedings/ques101215.htm" },
            { day: 11, pdf: "/misc/house proceedings/ques111215.pdf", html: "/misc/house proceedings/ques111215.htm" },
            { day: 14, pdf: "/misc/house proceedings/ques141215.pdf", html: "/misc/house proceedings/ques141215.htm" },
            { day: 15, pdf: "/misc/house proceedings/ques151215.pdf", html: "/misc/house proceedings/ques151215.htm" },
            { day: 16, pdf: "/misc/house proceedings/ques161215.pdf", html: "/misc/house proceedings/ques161215.htm" },
            { day: 17, pdf: "/misc/house proceedings/ques171215.pdf", html: "/misc/house proceedings/ques171215.htm" },
            { day: 18, pdf: "/misc/house proceedings/ques181215.pdf", html: "/misc/house proceedings/ques181215.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "दिसम्बर": [
            { day: 7, pdf: "/misc/house proceedings/star071215.pdf", html: "" },
            { day: 8, pdf: "/misc/house proceedings/star081215.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/star091215.pdf", html: "" },
            { day: 10, pdf: "/misc/house proceedings/star101215.pdf", html: "" },
            { day: 11, pdf: "/misc/house proceedings/star111215.pdf", html: "" },
            { day: 14, pdf: "/misc/house proceedings/star141215.pdf", html: "" },
            { day: 15, pdf: "/misc/house proceedings/star151215.pdf", html: "" },
            { day: 16, pdf: "/misc/house proceedings/star161215.pdf", html: "" },
            { day: 17, pdf: "/misc/house proceedings/star171215.pdf", html: "" },
            { day: 18, pdf: "/misc/house proceedings/star181215.pdf", html: "" },
          ],
        },
      },
    ],
  },

  {
    sessionNumber: "दशम्",
    month: "फरवरी-अप्रैल, 2016",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "फरवरी": [
            { day: 23, pdf: "/misc/house proceedings/hp230216.pdf", html: "/misc/house proceedings/hp230216.htm" },
            { day: 24, pdf: "/misc/house proceedings/hp240216.pdf", html: "/misc/house proceedings/hp240216.htm" },
            { day: 25, pdf: "/misc/house proceedings/hp250216.pdf", html: "/misc/house proceedings/hp250216.htm" },
            { day: 26, pdf: "/misc/house proceedings/hp260216.pdf", html: "/misc/house proceedings/hp260216.htm" },
            { day: 29, pdf: "/misc/house proceedings/hp290216.pdf", html: "/misc/house proceedings/hp290216.htm" },
          ],
          "मार्च": [
            { day: 1, pdf: "/misc/house proceedings/hp010316.pdf", html: "/misc/house proceedings/hp010316.htm" },
            { day: 2, pdf: "/misc/house proceedings/hp020316.pdf", html: "/misc/house proceedings/hp020316.htm" },
            { day: 3, pdf: "/misc/house proceedings/hp030316.pdf", html: "/misc/house proceedings/hp030316.htm" },
            { day: 4, pdf: "/misc/house proceedings/hp040316.pdf", html: "/misc/house proceedings/hp040316.htm" },
            { day: 8, pdf: "/misc/house proceedings/hp080316.pdf", html: "/misc/house proceedings/hp080316.htm" },
            { day: 9, pdf: "/misc/house proceedings/hp090316.pdf", html: "/misc/house proceedings/hp090316.htm" },
            { day: 10, pdf: "/misc/house proceedings/hp100316.pdf", html: "/misc/house proceedings/hp100316.htm" },
            { day: 11, pdf: "/misc/house proceedings/hp110316.pdF", html: "/misc/house proceedings/hp110316.htm" },
            { day: 14, pdf: "/misc/house proceedings/hp140316.pdf", html: "/misc/house proceedings/hp140316.htm" },
            { day: 15, pdf: "/misc/house proceedings/hp150316.pdf", html: "/misc/house proceedings/hp150316.htm" },
            { day: 16, pdf: "/misc/house proceedings/hp160316.pdf", html: "/misc/house proceedings/hp160316.htm" },
            { day: 17, pdf: "/misc/house proceedings/hp170316.pdf", html: "/misc/house proceedings/hp170316.htm" },
            { day: 18, pdf: "/misc/house proceedings/hp180316.pdf", html: "/misc/house proceedings/hp180316.htm" },
            { day: 28, pdf: "", html: "" },
            { day: 29, pdf: "/misc/house proceedings/hp290316.pdf", html: "/misc/house proceedings/hp290316.htm" },
            { day: 30, pdf: "/misc/house proceedings/hp300316.pdf", html: "/misc/house proceedings/hp300316.htm" },
            { day: 31, pdf: "/misc/house proceedings/hp310316.pdf", html: "/misc/house proceedings/hp310316.htm" },
          ],
          "अप्रैल": [
            { day: 1, pdf: "/misc/house proceedings/hp010416.pdf", html: "/misc/house proceedings/hp010416.htm" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "फरवरी": [
            { day: 23, pdf: "", html: "" },
            { day: 24, pdf: "/misc/house proceedings/ques240216.pdf", html: "/misc/house proceedings/ques240216.htm" },
            { day: 25, pdf: "/misc/house proceedings/ques250216.pdf", html: "/misc/house proceedings/ques250216.htm" },
            { day: 26, pdf: "/misc/house proceedings/ques260216.pdf", html: "/misc/house proceedings/ques260216.htm" },
            { day: 29, pdf: "/misc/house proceedings/ques290216.pdf", html: "/misc/house proceedings/ques290216.htm" },
          ],
          "मार्च": [
            { day: 1, pdf: "/misc/house proceedings/ques010316.pdf", html: "/misc/house proceedings/ques010316.htm" },
            { day: 2, pdf: "/misc/house proceedings/ques020316.pdf", html: "/misc/house proceedings/ques020316.htm" },
            { day: 3, pdf: "/misc/house proceedings/ques030316.pdf", html: "/misc/house proceedings/ques030316.htm" },
            { day: 4, pdf: "/misc/house proceedings/ques040316.pdf", html: "/misc/house proceedings/ques040316.htm" },
            { day: 8, pdf: "/misc/house proceedings/ques080316.pdf", html: "/misc/house proceedings/ques080316.htm" },
            { day: 9, pdf: "/misc/house proceedings/ques090316.pdf", html: "/misc/house proceedings/ques090316.htm" },
            { day: 10, pdf: "/misc/house proceedings/ques100316.pdf", html: "/misc/house proceedings/ques100316.htm" },
            { day: 11, pdf: "/misc/house proceedings/ques110316.pdf", html: "/misc/house proceedings/ques110316.htm" },
            { day: 14, pdf: "/misc/house proceedings/ques140316.pdf", html: "/misc/house proceedings/ques140316.htm" },
            { day: 15, pdf: "/misc/house proceedings/ques150316.pdf", html: "/misc/house proceedings/ques150316.htm" },
            { day: 16, pdf: "/misc/house proceedings/ques160316.pdf", html: "/misc/house proceedings/ques160316.htm" },
            { day: 17, pdf: "/misc/house proceedings/ques170316.pdf", html: "/misc/house proceedings/ques170316.htm" },
            { day: 18, pdf: "/misc/house proceedings/ques180316.pdf", html: "/misc/house proceedings/ques180316.htm" },
            { day: 28, pdf: "/misc/house proceedings/ques280316.pdf", html: "/misc/house proceedings/ques280316.htm" },
            { day: 29, pdf: "/misc/house proceedings/ques290316.pdf", html: "/misc/house proceedings/ques290316.htm" },
            { day: 30, pdf: "/misc/house proceedings/ques300316.pdf", html: "/misc/house proceedings/ques300316.htm" },
            { day: 31, pdf: "/misc/house proceedings/ques310316.pdf", html: "/misc/house proceedings/ques310316.htm" },
          ],
          "अप्रैल": [
            { day: 1, pdf: "/misc/house proceedings/ques010416.pdf", html: "/misc/house proceedings/ques010416.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "फरवरी": [
            { day: 23, pdf: "", html: "" },
            { day: 24, pdf: "/misc/house proceedings/star240216.pdf", html: "" },
            { day: 25, pdf: "/misc/house proceedings/star250216.pdf", html: "" },
            { day: 26, pdf: "/misc/house proceedings/star260216.pdf", html: "" },
            { day: 29, pdf: "/misc/house proceedings/star290216.pdf", html: "" },
          ],
          "मार्च": [
            { day: 1, pdf: "/misc/house proceedings/star010316.pdf", html: "" },
            { day: 2, pdf: "/misc/house proceedings/star020316.pdf", html: "" },
            { day: 3, pdf: "/misc/house proceedings/star030316.pdf", html: "" },
            { day: 4, pdf: "/misc/house proceedings/star040316.pdf", html: "" },
            { day: 8, pdf: "/misc/house proceedings/star080316.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/star090316.pdf", html: "" },
            { day: 10, pdf: "/misc/house proceedings/star100316.pdf", html: "" },
            { day: 11, pdf: "/misc/house proceedings/star110316.pdf", html: "" },
            { day: 14, pdf: "/misc/house proceedings/star140316.pdf", html: "" },
            { day: 15, pdf: "/misc/house proceedings/star150316.pdf", html: "" },
            { day: 16, pdf: "/misc/house proceedings/star160316.pdf", html: "" },
            { day: 17, pdf: "/misc/house proceedings/star170316.pdf", html: "" },
            { day: 18, pdf: "/misc/house proceedings/star180316.pdf", html: "" },
            { day: 28, pdf: "", html: "" },
            { day: 29, pdf: "/misc/house proceedings/star290316.pdf", html: "" },
            { day: 30, pdf: "/misc/house proceedings/star300316.pdf", html: "" },
            { day: 31, pdf: "/misc/house proceedings/star310316.pdf", html: "" },
          ],
          "अप्रैल": [
            { day: 1, pdf: "/misc/house proceedings/star010416.pdf", html: "" },
          ],
        },
      },
    ],
  },

  {
    sessionNumber: "एकादश",
    month: "जुलाई-अगस्त, 2016",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "जुलाई": [
            { day: 18, pdf: "/misc/house proceedings/hp180716.pdf", html: "/misc/house proceedings/hp180716.htm" },
            { day: 19, pdf: "", html: "" },
            { day: 20, pdf: "/misc/house proceedings/hp200716.pdf", html: "/misc/house proceedings/hp200716.htm" },
            { day: 21, pdf: "/misc/house proceedings/hp210716.pdf", html: "/misc/house proceedings/hp210716.htm" },
            { day: 22, pdf: "/misc/house proceedings/hp220716.pdf", html: "/misc/house proceedings/hp220716.htm" },
            { day: 25, pdf: "/misc/house proceedings/hp250716.pdf", html: "/misc/house proceedings/hp250716.htm" },
            { day: 26, pdf: "/misc/house proceedings/hp260716.pdf", html: "/misc/house proceedings/hp260716.htm" },
            { day: 27, pdf: "/misc/house proceedings/hp270716.pdf", html: "/misc/house proceedings/hp270716.htm" },
            { day: 28, pdf: "/misc/house proceedings/hp280716.pdf", html: "/misc/house proceedings/hp280716.htm" },
            { day: 29, pdf: "/misc/house proceedings/hp290716.pdf", html: "/misc/house proceedings/hp290716.htm" },
          ],
          "अगस्त": [
            { day: 24, pdf: "/misc/house proceedings/hp240816.pdf", html: "/misc/house proceedings/hp240816.htm" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "जुलाई": [
            { day: 18, pdf: "/misc/house proceedings/ques180716.pdf", html: "/misc/house proceedings/ques180716.htm" },
            { day: 19, pdf: "/misc/house proceedings/ques190716.pdf", html: "/misc/house proceedings/ques190716.htm" },
            { day: 20, pdf: "/misc/house proceedings/ques200716.pdf", html: "/misc/house proceedings/ques200716.htm" },
            { day: 21, pdf: "/misc/house proceedings/ques210716.pdf", html: "/misc/house proceedings/ques210716.htm" },
            { day: 22, pdf: "/misc/house proceedings/ques220716.pdf", html: "/misc/house proceedings/ques220716.htm" },
            { day: 25, pdf: "/misc/house proceedings/ques250716.pdf", html: "/misc/house proceedings/ques250716.htm" },
            { day: 26, pdf: "/misc/house proceedings/ques260716.pdf", html: "/misc/house proceedings/ques260716.htm" },
            { day: 27, pdf: "/misc/house proceedings/ques270716.pdf", html: "/misc/house proceedings/ques270716.htm" },
            { day: 28, pdf: "/misc/house proceedings/ques280716.pdf", html: "/misc/house proceedings/ques280716.htm" },
            { day: 29, pdf: "/misc/house proceedings/ques290716.pdf", html: "/misc/house proceedings/ques290716.htm" },
          ],
          "अगस्त": [],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "जुलाई": [
            { day: 18, pdf: "/misc/house proceedings/star180716.pdf", html: "" },
            { day: 19, pdf: "/misc/house proceedings/star190716.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/star200716.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/star210716.pdf", html: "" },
            { day: 22, pdf: "/misc/house proceedings/star220716.pdf", html: "" },
            { day: 25, pdf: "/misc/house proceedings/star250716.pdf", html: "" },
            { day: 26, pdf: "/misc/house proceedings/star260716.pdf", html: "" },
            { day: 27, pdf: "/misc/house proceedings/star270716.pdf", html: "" },
            { day: 28, pdf: "/misc/house proceedings/star280716.pdf", html: "" },
            { day: 29, pdf: "/misc/house proceedings/star290716.pdf", html: "" },
          ],
          "अगस्त": [],
        },
      },
    ],
  },

  {
    sessionNumber: "द्वादश",
    month: "दिसम्बर, 2016",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "दिसम्बर": [
            { day: 5, pdf: "/misc/house proceedings/hp051216.pdf", html: "/misc/house proceedings/hp051216.htm" },
            { day: 6, pdf: "/misc/house proceedings/hp061216.pdf", html: "/misc/house proceedings/hp061216.htm" },
            { day: 7, pdf: "/misc/house proceedings/hp071216.pdf", html: "/misc/house proceedings/hp071216.htm" },
            { day: 8, pdf: "/misc/house proceedings/hp081216.pdf", html: "/misc/house proceedings/hp081216.htm" },
            { day: 9, pdf: "/misc/house proceedings/hp091216.pdf", html: "/misc/house proceedings/hp091216.htm" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "दिसम्बर": [
            { day: 5, pdf: "/misc/house proceedings/ques051216.pdf", html: "/misc/house proceedings/ques051216.htm" },
            { day: 6, pdf: "/misc/house proceedings/ques061216.pdf", html: "/misc/house proceedings/ques061216.htm" },
            { day: 7, pdf: "/misc/house proceedings/ques071216.pdf", html: "/misc/house proceedings/ques071216.htm" },
            { day: 8, pdf: "/misc/house proceedings/ques081216.pdf", html: "/misc/house proceedings/ques081216.htm" },
            { day: 9, pdf: "/misc/house proceedings/ques091216.pdf", html: "/misc/house proceedings/ques091216.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "दिसम्बर": [
            { day: 5, pdf: "/misc/house proceedings/star051216.pdf", html: "" },
            { day: 6, pdf: "/misc/house proceedings/star061216.pdf", html: "" },
            { day: 7, pdf: "/misc/house proceedings/star071216.pdf", html: "" },
            { day: 8, pdf: "/misc/house proceedings/star081216.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/star091216.pdf", html: "" },
          ],
        },
      },
    ],
  },

  {
    sessionNumber: "त्रयोदश",
    month: "फरवरी-मार्च, 2017",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "फरवरी": [
            { day: 21, pdf: "/misc/house proceedings/hp210217.pdf", html: "/misc/house proceedings/hp210217.htm" },
            { day: 22, pdf: "/misc/house proceedings/hp220217.pdf", html: "/misc/house proceedings/hp220217.htm" },
            { day: 23, pdf: "/misc/house proceedings/hp230217.pdf", html: "/misc/house proceedings/hp230217.htm" },
            { day: 27, pdf: "/misc/house proceedings/hp270217.pdf", html: "/misc/house proceedings/hp270217.htm" },
            { day: 28, pdf: "/misc/house proceedings/hp280217.pdf", html: "/misc/house proceedings/hp280217.htm" },
          ],
          "मार्च": [
            { day: 1, pdf: "/misc/house proceedings/hp010317.pdf", html: "/misc/house proceedings/hp010317.htm" },
            { day: 2, pdf: "/misc/house proceedings/hp020317.pdf", html: "/misc/house proceedings/hp020317.htm" },
            { day: 3, pdf: "/misc/house proceedings/hp030317.pdf", html: "/misc/house proceedings/hp030317.htm" },
            { day: 6, pdf: "/misc/house proceedings/hp060317.pdf", html: "/misc/house proceedings/hp060317.htm" },
            { day: 7, pdf: "/misc/house proceedings/hp070317.pdf", html: "/misc/house proceedings/hp070317.htm" },
            { day: 8, pdf: "/misc/house proceedings/hp080317.pdf", html: "/misc/house proceedings/hp080317.htm" },
            { day: 9, pdf: "/misc/house proceedings/hp090317.pdf", html: "/misc/house proceedings/hp090317.htm" },
            { day: 10, pdf: "/misc/house proceedings/hp100317.pdf", html: "/misc/house proceedings/hp100317.htm" },
            { day: 20, pdf: "/misc/house proceedings/hp200317.pdf", html: "/misc/house proceedings/hp200317.htm" },
            { day: 21, pdf: "/misc/house proceedings/hp210317.pdf", html: "/misc/house proceedings/hp210317.htm" },
            { day: 22, pdf: "/misc/house proceedings/hp220317.pdf", html: "/misc/house proceedings/hp220317.htm" },
            { day: 23, pdf: "/misc/house proceedings/hp230317.pdf", html: "/misc/house proceedings/hp230317.htm" },
            { day: 24, pdf: "/misc/house proceedings/hp240317.pdf", html: "/misc/house proceedings/hp240317.htm" },
            { day: 27, pdf: "", html: "" },
            { day: 28, pdf: "", html: "" },
            { day: 30, pdf: "", html: "" },
            { day: 31, pdf: "", html: "" },
          ],
          "मई": [
            { day: 3, pdf: "/misc/house proceedings/hp030517.pdf", html: "/misc/house proceedings/hp030517.htm" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "फरवरी": [
            { day: 21, pdf: "/misc/house proceedings/ques210217.htm", html: "" },
            { day: 22, pdf: "/misc/house proceedings/ques220217.pdf", html: "/misc/house proceedings/ques220217.htm" },
            { day: 23, pdf: "/misc/house proceedings/ques230217.pdf", html: "/misc/house proceedings/ques230217.htm" },
            { day: 27, pdf: "/misc/house proceedings/ques270217.pdf", html: "/misc/house proceedings/ques270217.htm" },
            { day: 28, pdf: "/misc/house proceedings/ques280217.pdf", html: "/misc/house proceedings/ques280217.htm" },
          ],
          "मार्च": [
            { day: 1, pdf: "/misc/house proceedings/ques010317.pdf", html: "/misc/house proceedings/ques010317.htm" },
            { day: 2, pdf: "/misc/house proceedings/ques020317.pdf", html: "/misc/house proceedings/ques020317.htm" },
            { day: 3, pdf: "/misc/house proceedings/ques030317.pdf", html: "/misc/house proceedings/ques030317.htm" },
            { day: 6, pdf: "/misc/house proceedings/ques060317.pdf", html: "/misc/house proceedings/ques060317.htm" },
            { day: 7, pdf: "/misc/house proceedings/ques070317.pdf", html: "/misc/house proceedings/ques070317.htm" },
            { day: 8, pdf: "/misc/house proceedings/ques080317.pdf", html: "/misc/house proceedings/ques080317.htm" },
            { day: 9, pdf: "/misc/house proceedings/ques090317.pdf", html: "/misc/house proceedings/ques090317.htm" },
            { day: 10, pdf: "/misc/house proceedings/ques100317.pdf", html: "/misc/house proceedings/ques100317.htm" },
            { day: 20, pdf: "/misc/house proceedings/ques200317.pdf", html: "/misc/house proceedings/ques200317.htm" },
            { day: 21, pdf: "/misc/house proceedings/ques210317.pdf", html: "/misc/house proceedings/ques210317.htm" },
            { day: 22, pdf: "/misc/house proceedings/ques220317.pdf", html: "/misc/house proceedings/ques220317.htm" },
            { day: 23, pdf: "/misc/house proceedings/ques230317.pdf", html: "/misc/house proceedings/ques230317.htm" },
            { day: 24, pdf: "/misc/house proceedings/ques240317.pdf", html: "/misc/house proceedings/ques240317.htm" },
            { day: 27, pdf: "/misc/house proceedings/ques270317.pdf", html: "/misc/house proceedings/ques270317.htm" },
            { day: 28, pdf: "/misc/house proceedings/ques280317.pdf", html: "/misc/house proceedings/ques280317.htm" },
            { day: 30, pdf: "/misc/house proceedings/ques300317.pdf", html: "/misc/house proceedings/ques300317.htm" },
            { day: 31, pdf: "/misc/house proceedings/ques310317.pdf", html: "/misc/house proceedings/ques310317.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "फरवरी": [
            { day: 21, pdf: "", html: "" },
            { day: 22, pdf: "/misc/house proceedings/star220217.pdf", html: "" },
            { day: 23, pdf: "/misc/house proceedings/star230217.pdf", html: "" },
            { day: 27, pdf: "/misc/house proceedings/star270217.pdf", html: "" },
            { day: 28, pdf: "/misc/house proceedings/star280217.pdf", html: "" },
          ],
          "मार्च": [
            { day: 1, pdf: "/misc/house proceedings/star010317.pdf", html: "" },
            { day: 2, pdf: "/misc/house proceedings/star020317.pdf", html: "" },
            { day: 3, pdf: "/misc/house proceedings/star030317.pdf", html: "" },
            { day: 6, pdf: "/misc/house proceedings/star060317.pdf", html: "" },
            { day: 7, pdf: "/misc/house proceedings/star070317.pdf", html: "" },
            { day: 8, pdf: "/misc/house proceedings/star080317.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/star090317.pdf", html: "" },
            { day: 10, pdf: "/misc/house proceedings/star100317.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/star200317.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/star210317.pdf", html: "" },
            { day: 22, pdf: "/misc/house proceedings/star220317.pdf", html: "" },
            { day: 23, pdf: "/misc/house proceedings/star230317.pdf", html: "" },
            { day: 24, pdf: "/misc/house proceedings/star240317.pdf", html: "" },
            { day: 27, pdf: "", html: "" },
            { day: 28, pdf: "", html: "" },
            { day: 30, pdf: "", html: "" },
            { day: 31, pdf: "", html: "" },
          ],
        },
      },
    ],
  },

  {
    sessionNumber: "चतुर्दश",
    month: "जुलाई, 2017",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "जुलाई": [
            { day: 17, pdf: "/misc/house proceedings/hp170717.pdf", html: "/misc/house proceedings/hp170717.htm" },
            { day: 18, pdf: "/misc/house proceedings/hp180717.pdf", html: "/misc/house proceedings/hp180717.pdf" },
            { day: 19, pdf: "/misc/house proceedings/hp190717.pdf", html: "/misc/house proceedings/hp190717.pdf" },
            { day: 20, pdf: "/misc/house proceedings/hp200717.pdf", html: "/misc/house proceedings/hp200717.htm" },
            { day: 21, pdf: "/misc/house proceedings/hp210717.pdf", html: "/misc/house proceedings/hp210717.pdf" },
            { day: 24, pdf: "/misc/house proceedings/hp240717.pdf", html: "/misc/house proceedings/hp240717.pdf" },
            { day: 25, pdf: "/misc/house proceedings/hp250717.pdf", html: "/misc/house proceedings/hp250717.pdf" },
            { day: 26, pdf: "/misc/house proceedings/hp260717.pdf", html: "/misc/house proceedings/hp260717.pdf" },
            { day: 27, pdf: "", html: "" },
            { day: 28, pdf: "", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "जुलाई": [
            { day: 17, pdf: "/misc/house proceedings/ques170717.pdf", html: "/misc/house proceedings/ques170717.htm" },
            { day: 18, pdf: "/misc/house proceedings/ques180717.pdf", html: "/misc/house proceedings/ques180717.htm" },
            { day: 19, pdf: "/misc/house proceedings/ques190717.pdf", html: "/misc/house proceedings/ques190717.htm" },
            { day: 20, pdf: "/misc/house proceedings/ques200717.pdf", html: "/misc/house proceedings/ques200717.htm" },
            { day: 21, pdf: "/misc/house proceedings/ques210717.pdf", html: "/misc/house proceedings/ques210717.htm" },
            { day: 24, pdf: "/misc/house proceedings/ques240717.pdf", html: "/misc/house proceedings/ques240717.htm" },
            { day: 25, pdf: "/misc/house proceedings/ques250717.pdf", html: "/misc/house proceedings/ques250717.htm" },
            { day: 26, pdf: "/misc/house proceedings/ques260717.pdf", html: "/misc/house proceedings/ques260717.htm" },
            { day: 27, pdf: "/misc/house proceedings/ques270717.pdf", html: "/misc/house proceedings/ques270717.htm" },
            { day: 28, pdf: "/misc/house proceedings/ques280717.pdf", html: "/misc/house proceedings/ques280717.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "जुलाई": [
            { day: 17, pdf: "/misc/house proceedings/star170717.pdf", html: "" },
            { day: 18, pdf: "/misc/house proceedings/star180717.pdf", html: "" },
            { day: 19, pdf: "/misc/house proceedings/star190717.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/star200717.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/star210717.pdf", html: "" },
            { day: 24, pdf: "/misc/house proceedings/star240717.pdf", html: "" },
            { day: 25, pdf: "/misc/house proceedings/star250717.pdf", html: "" },
            { day: 26, pdf: "/misc/house proceedings/star260717.pdf", html: "" },
            { day: 27, pdf: "", html: "" },
            { day: 28, pdf: "", html: "" },
          ],
        },
      },
    ],
  },

  {
    sessionNumber: "पंचदश",
    month: "नवम्बर-दिसम्बर, 2017",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "नवम्बर": [
            { day: 27, pdf: "/misc/house proceedings/hp271117.pdf", html: "/misc/house proceedings/hp271117.htm" },
            { day: 28, pdf: "/misc/house proceedings/hp281117.pdf", html: "/misc/house proceedings/hp281117.htm" },
            { day: 29, pdf: "/misc/house proceedings/hp291117.pdf", html: "/misc/house proceedings/hp291117.htm" },
            { day: 30, pdf: "/misc/house proceedings/hp301117.pdf", html: "/misc/house proceedings/hp301117.htm" },
          ],
          "दिसम्बर": [
            { day: 1, pdf: "/misc/house proceedings/hp011217.pdf", html: "/misc/house proceedings/hp011217.htm" },
            { day: 4, pdf: "/misc/house proceedings/hp041217.pdf", html: "/misc/house proceedings/hp041217.htm" },
            { day: 5, pdf: "", html: "" },
            { day: 6, pdf: "", html: "" },
            { day: 7, pdf: "", html: "" },
            { day: 8, pdf: "", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "नवम्बर": [
            { day: 27, pdf: "/misc/house proceedings/ques271117.pdf", html: "/misc/house proceedings/ques271117.htm" },
            { day: 28, pdf: "/misc/house proceedings/ques281117.pdf", html: "/misc/house proceedings/ques281117.htm" },
            { day: 29, pdf: "/misc/house proceedings/ques291117.pdf", html: "/misc/house proceedings/ques291117.htm" },
            { day: 30, pdf: "/misc/house proceedings/ques301117.pdf", html: "/misc/house proceedings/ques301117.htm" },
          ],
          "दिसम्बर": [
            { day: 1, pdf: "/misc/house proceedings/ques011217.pdf", html: "/misc/house proceedings/ques011217.htm" },
            { day: 4, pdf: "/misc/house proceedings/ques041217.pdf", html: "/misc/house proceedings/ques041217.htm" },
            { day: 5, pdf: "/misc/house proceedings/ques051217.pdf", html: "/misc/house proceedings/ques051217.htm" },
            { day: 6, pdf: "/misc/house proceedings/ques061217.pdf", html: "/misc/house proceedings/ques061217.htm" },
            { day: 7, pdf: "/misc/house proceedings/ques071217.pdf", html: "/misc/house proceedings/ques071217.htm" },
            { day: 8, pdf: "/misc/house proceedings/ques081217.pdf", html: "/misc/house proceedings/ques081217.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "नवम्बर": [
            { day: 27, pdf: "/misc/house proceedings/star271117.pdf", html: "" },
            { day: 28, pdf: "/misc/house proceedings/star281117.pdf", html: "" },
            { day: 29, pdf: "/misc/house proceedings/star291117.pdf", html: "" },
            { day: 30, pdf: "/misc/house proceedings/star301117.pdf", html: "" },
          ],
          "दिसम्बर": [
            { day: 1, pdf: "/misc/house proceedings/star011217.pdf", html: "" },
            { day: 4, pdf: "/misc/house proceedings/star041217.pdf", html: "" },
            { day: 5, pdf: "", html: "" },
            { day: 6, pdf: "", html: "" },
            { day: 7, pdf: "", html: "" },
            { day: 8, pdf: "", html: "" },
          ],
        },
      },
    ],
  },

  {
    sessionNumber: "षोडश",
    month: "फरवरी-मार्च, 2018",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "फरवरी": [
            { day: 26, pdf: "/misc/house proceedings/hp260218.pdf", html: "/misc/house proceedings/hp260218.htm" },
            { day: 27, pdf: "/misc/house proceedings/hp270218.pdf", html: "/misc/house proceedings/hp270218.htm" },
            { day: 28, pdf: "/misc/house proceedings/hp280218.pdf", html: "/misc/house proceedings/hp280218.htm" },
          ],
          "मार्च": [
            { day: 7, pdf: "/misc/house proceedings/hp070318.pdf", html: "/misc/house proceedings/hp070318.htm" },
            { day: 8, pdf: "/misc/house proceedings/hp080318.pdf", html: "/misc/house proceedings/hp080318.htm" },
            { day: 9, pdf: "/misc/house proceedings/hp090318.pdf", html: "/misc/house proceedings/hp090318.htm" },
            { day: 12, pdf: "/misc/house proceedings/hp120318.pdf", html: "/misc/house proceedings/hp120318.htm" },
            { day: 13, pdf: "/misc/house proceedings/hp130318.pdf", html: "/misc/house proceedings/hp130318.htm" },
            { day: 14, pdf: "/misc/house proceedings/hp140318.pdf", html: "/misc/house proceedings/hp140318.htm" },
            { day: 15, pdf: "/misc/house proceedings/hp150318.pdf", html: "/misc/house proceedings/hp150318.htm" },
            { day: 16, pdf: "/misc/house proceedings/hp160318.pdf", html: "/misc/house proceedings/hp160318.htm" },
            { day: 20, pdf: "/misc/house proceedings/hp200318.pdf", html: "/misc/house proceedings/hp200318.htm" },
            { day: 21, pdf: "/misc/house proceedings/hp210318.pdf", html: "/misc/house proceedings/hp210318.htm" },
            { day: 22, pdf: "", html: "" },
            { day: 23, pdf: "", html: "" },
            { day: 26, pdf: "", html: "" },
            { day: 27, pdf: "", html: "" },
            { day: 28, pdf: "", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "फरवरी": [
            { day: 26, pdf: "", html: "" },
            { day: 27, pdf: "/misc/house proceedings/ques270218.pdf", html: "/misc/house proceedings/ques270218.htm" },
            { day: 28, pdf: "/misc/house proceedings/ques280218.pdf", html: "/misc/house proceedings/ques280218.htm" },
          ],
          "मार्च": [
            { day: 7, pdf: "/misc/house proceedings/ques070318.pdf", html: "/misc/house proceedings/ques070318.htm" },
            { day: 8, pdf: "/misc/house proceedings/ques080318.pdf", html: "/misc/house proceedings/ques080318.htm" },
            { day: 9, pdf: "/misc/house proceedings/ques090318.pdf", html: "/misc/house proceedings/ques090318.htm" },
            { day: 12, pdf: "/misc/house proceedings/ques120318.pdf", html: "/misc/house proceedings/ques120318.htm" },
            { day: 13, pdf: "/misc/house proceedings/ques130318.pdf", html: "/misc/house proceedings/ques130318.htm" },
            { day: 14, pdf: "/misc/house proceedings/ques140318.pdf", html: "/misc/house proceedings/ques140318.htm" },
            { day: 15, pdf: "/misc/house proceedings/ques150318.pdf", html: "/misc/house proceedings/ques150318.htm" },
            { day: 16, pdf: "/misc/house proceedings/ques160318.pdf", html: "/misc/house proceedings/ques160318.htm" },
            { day: 20, pdf: "/misc/house proceedings/ques200318.pdf", html: "/misc/house proceedings/ques200318.htm" },
            { day: 21, pdf: "/misc/house proceedings/ques210318.pdf", html: "/misc/house proceedings/ques210318.htm" },
            { day: 22, pdf: "/misc/house proceedings/ques220318.pdf", html: "/misc/house proceedings/ques220318.htm" },
            { day: 23, pdf: "/misc/house proceedings/ques230318.pdf", html: "/misc/house proceedings/ques230318.htm" },
            { day: 26, pdf: "/misc/house proceedings/ques260318.pdf", html: "/misc/house proceedings/ques260318.htm" },
            { day: 27, pdf: "/misc/house proceedings/ques270318.pdf", html: "/misc/house proceedings/ques270318.htm" },
            { day: 28, pdf: "/misc/house proceedings/ques280318.pdf", html: "/misc/house proceedings/ques280318.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "फरवरी": [
            { day: 26, pdf: "", html: "" },
            { day: 27, pdf: "/misc/house proceedings/star270218.pdf", html: "" },
            { day: 28, pdf: "/misc/house proceedings/star280218.pdf", html: "" },
          ],
          "मार्च": [
            { day: 7, pdf: "/misc/house proceedings/star070318.pdf", html: "" },
            { day: 8, pdf: "/misc/house proceedings/star080318.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/star090318.pdf", html: "" },
            { day: 12, pdf: "/misc/house proceedings/star120318.pdf", html: "" },
            { day: 13, pdf: "/misc/house proceedings/star130318.pdf", html: "" },
            { day: 14, pdf: "/misc/house proceedings/star140318.pdf", html: "" },
            { day: 15, pdf: "/misc/house proceedings/star150318.pdf", html: "" },
            { day: 16, pdf: "/misc/house proceedings/star160318.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/star200318.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/star210318.pdf", html: "" },
            { day: 22, pdf: "", html: "" },
            { day: 23, pdf: "", html: "" },
            { day: 26, pdf: "", html: "" },
            { day: 27, pdf: "", html: "" },
            { day: 28, pdf: "", html: "" },
          ],
        },
      },
    ],
  },

  {
    sessionNumber: "सप्तदश",
    month: "जून, 2018",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "जून": [
            { day: 25, pdf: "", html: "/misc/house proceedings/hp250618.htm" },
            { day: 26, pdf: "", html: "/misc/house proceedings/hp260618.htm" },
            { day: 27, pdf: "", html: "" },
            { day: 28, pdf: "", html: "" },
            { day: 29, pdf: "", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "जून": [
            { day: 25, pdf: "", html: "/misc/house proceedings/ques250618.htm" },
            { day: 26, pdf: "", html: "/misc/house proceedings/ques260618.htm" },
            { day: 27, pdf: "", html: "" },
            { day: 28, pdf: "", html: "" },
            { day: 29, pdf: "", html: "" },
            { day: "(तीन दिनांकों - 27, 28, 29 जून, 2018 के प्रश्नोत्तर व्यपगत हो गये हैं.)", pdf: "", html: "" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "जून": [
            { day: 25, pdf: "/misc/house proceedings/star250618.pdf", html: "" },
            { day: 26, pdf: "/misc/house proceedings/star260618.pdf", html: "" },
            { day: 27, pdf: "", html: "" },
            { day: 28, pdf: "", html: "" },
            { day: 29, pdf: "", html: "" },
          ],
        },
      },
    ],
  },
];



const SadanKaryavahi2014 = () => {
  const navigate = useNavigate();
  
  const styles = {
    page: {
      fontFamily: "'Noto Sans Devanagari', sans-serif",
      backgroundColor: "#f3f4f6",
      minHeight: "100vh",
      padding: "20px",
    },
    header: {
      textAlign: "center",
      backgroundColor: "#1d4ed8",
      color: "#fff",
      padding: "25px 10px",
      borderRadius: "12px",
      marginBottom: "25px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    },
    headerTitle: { fontSize: "2rem", fontWeight: 700 },
    headerSubtitle: { fontSize: "1.1rem", marginTop: "5px", opacity: 0.9 },
    calendarGrid: { display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" },
    sessionCard: {
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      padding: "20px",
      width: "320px",
    },
    sessionHeader: {
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      borderRadius: "10px",
      padding: "10px 15px",
      fontWeight: 700,
      marginBottom: "15px",
      textAlign: "center",
    },
    monthBlock: {
      marginBottom: "10px",
      backgroundColor: "#f9fafb",
      borderRadius: "10px",
      padding: "10px",
      border: "1px solid #e5e7eb",
    },
    monthTitle: {
      fontSize: "1.1rem",
      fontWeight: 700,
      color: "#1e3a8a",
      marginBottom: "8px",
      textAlign: "center",
    },
    dateGrid: { display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" },
    dateCell: {
      backgroundColor: "#eff6ff",
      borderRadius: "6px",
      padding: "6px 8px",
      textAlign: "center",
      fontWeight: 600,
      color: "#1e40af",
      border: "1px solid #bfdbfe",
      lineHeight: 1.1,
      minWidth: "45px",
    },
    linkBtn: {
      backgroundColor: "#1e40af",
      color: "#fff",
      padding: "2px 6px",
      fontSize: "0.75rem",
      borderRadius: "4px",
      textDecoration: "none",
      border: "1px solid #1e3a8a",
      transition: "0.2s",
    },
    footerDivider: {
      width: "100%",
      height: "2px",
      background: "linear-gradient(to right, transparent, #2563eb, transparent)",
      margin: "50px 0 25px",
    },
    footerGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
    },
    assemblyCard: {
      backgroundColor: "#e2e8f0",
      borderRadius: "8px",
      padding: "12px 18px",
      textAlign: "center",
      fontSize: "0.95rem",
      fontWeight: 600,
      textDecoration: "none",
      color: "#1e293b",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
    },
    note: { marginTop: "20px", fontStyle: "italic", color: "#334155", textAlign: "center" },
    fullAnswersButton: { display: "block", margin: "30px auto", padding: "12px 24px", backgroundColor: "#2563eb", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: 700, fontSize: "1rem", transition: "all 0.2s" },
  };

  return (
   <div style={styles.page}>

    {/* 🔵 HERO SECTION */}
    <div className="panch-hero">
      <div className="panch-hero-content">
        <div className="panch-hero-row">

          {/* Back Button */}
          <button
            className="panch-btn"
            onClick={() => {
              if (window.history.state && window.history.state.idx > 0) navigate(-1);
              else navigate("/vidhansabhakarywahi");
            }}
          >
            पीछे जाएँ
          </button>

          {/* Hero Text */}
          <div className="panch-hero-text">
            <h1>सदन की कार्यवाही</h1>
            <p>चतुर्दश विधान सभा (2013 से 2018)</p>
          </div>

        </div>
      </div>
    </div>

    {/* 🔵 SESSION CALENDAR (Keep your existing card layout) */}
    <div className="panch-grid">
      {sessionData.map((session, idx) => (
        <div key={idx} className="panch-card">
          <div className="panch-section">
            <h2>{session.sessionNumber}</h2>

            {session.sections.map((section, sidx) => (
              <div key={sidx}>
                <h3>{section.section}</h3>

                {Object.entries(section.months).map(([month, days], mIdx) => (
                  <div key={mIdx} className="panch-section">
                    <h3>{month}</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {days.map(({ day, pdf, html }, dIdx) => (
                        <div key={dIdx} style={{ textAlign: "center" }}>
                          <div style={{ fontWeight: 600, padding: "6px 12px", border: "1px solid #ccdfff", borderRadius: "6px", marginBottom: "4px" }}>
                            {day}
                          </div>
                          <div style={{ display: "flex", justifyContent: "center", gap: "4px" }}>
                            {html ? <a href={html} target="_blank" rel="noopener noreferrer" className="panch-link">HTML</a> : <span style={{ opacity: 0.5 }}>—</span>}
                            {pdf ? <a href={pdf} target="_blank" rel="noopener noreferrer" className="panch-link">PDF</a> : <span style={{ opacity: 0.5 }}>—</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>


  

  </div>

  );
};

export default SadanKaryavahi2014;