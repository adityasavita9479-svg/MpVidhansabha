import React from "react";
import { useNavigate } from "react-router-dom";



const sessionData = [
  {
    session: "प्रथम सत्र (जनवरी, 2019)",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "जनवरी": [
            { day: 7, pdf: "/misc/house proceedings/hp070119.pdf", html: "/misc/house proceedings/hp070119.htm" },
            { day: 8, pdf: "/misc/house proceedings/hp080119.pdf", html: "/misc/house proceedings/hp080119.htm" },
            { day: 9, pdf: "/misc/house proceedings/hp090119.pdf", html: "/misc/house proceedings/hp090119.htm" },
            { day: 10, pdf: "/misc/house proceedings/hp100119.pdf", html: "/misc/house proceedings/hp100119.htm" },
            { day: 11, },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "जनवरी": [],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "जनवरी": [],
        },
      },
    ],
  },

  {
    session: "द्वितीय सत्र (फरवरी, 2019)",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "फरवरी": [
            { day: 18, pdf: null, html: "/misc/house proceedings/hp180219.htm" },
            { day: 20, pdf: null, html: "/misc/house proceedings/hp200219.htm" },
            { day: 21, pdf: null, html: "/misc/house proceedings/hp210219.htm" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "फरवरी": [
            { day: 18, pdf: null, html: "/misc/house proceedings/ques180219.htm" },
            { day: 20, pdf: null, html: "/misc/house proceedings/ques200219.htm" },
            { day: 21, pdf: null, html: "/misc/house proceedings/ques210219.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "फरवरी": [
            { day: 18, pdf: "/misc/house proceedings/star180219.pdf", html: null },
            { day: 20, pdf: "/misc/house proceedings/star200219.pdf", html: null },
            { day: 21, pdf: "/misc/house proceedings/star210219.pdf", html: null },
          ],
        },
      },
    ],
  },

  {
    session: "तृतीय सत्र (जुलाई, 2019)",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "जुलाई": [
            { day: 8, pdf: "/misc/house proceedings/hp080719.pdf", html: "/misc/house proceedings/hp080719.htm" },
            { day: 9, pdf: "/misc/house proceedings/hp090719.pdf", html: "/misc/house proceedings/hp090719.htm" },
            { day: 10, pdf: "/misc/house proceedings/hp100719.pdf", html: "/misc/house proceedings/hp100719.htm" },
            { day: 11, pdf: "/misc/house proceedings/hp110719.pdf", html: "/misc/house proceedings/hp110719.htm" },
            { day: 12, pdf: "/misc/house proceedings/hp120719.pdf", html: "/misc/house proceedings/hp120719.htm" },
            { day: 15, pdf: null, html: null },
            { day: 16, pdf: null, html: null },
            { day: 17, pdf: "/misc/house proceedings/hp170719.pdf", html: "/misc/house proceedings/hp170719.htm" },
            { day: 18, pdf: "/misc/house proceedings/hp180719.pdf", html: "/misc/house proceedings/hp180719.htm" },
            { day: 19, pdf: "/misc/house proceedings/hp190719.pdf", html: "/misc/house proceedings/hp190719.htm" },
            { day: 20, pdf: "/misc/house proceedings/hp200719.pdf", html: "/misc/house proceedings/hp200719.htm" },
            { day: 21, pdf: "/misc/house proceedings/hp210719.pdf", html: "/misc/house proceedings/hp210719.htm" },
            { day: 22, pdf: "/misc/house proceedings/hp220719.pdf", html: "/misc/house proceedings/hp220719.htm" },
            { day: 23, pdf: "/misc/house proceedings/hp230719.pdf", html: "/misc/house proceedings/hp230719.htm" },
            { day: 24, pdf: "/misc/house proceedings/hp240719.pdf", html: "/misc/house proceedings/hp240719.htm" },
            { day: 25, pdf: null, html: null },
            { day: 26, pdf: null, html: null },


          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "जुलाई": [
            { day: 8, pdf: "/misc/house proceedings/ques080719.pdf", html: "/misc/house proceedings/ques080719.htm" },
            { day: 9, pdf: "/misc/house proceedings/ques090719.pdf", html: "/misc/house proceedings/ques090719.htm" },
            { day: 10, pdf: "/misc/house proceedings/ques110719.pdf", html: "/misc/house proceedings/ques110719.htm" },
            { day: 11, pdf: "/misc/house proceedings/ques110719.pdf", html: "/misc/house proceedings/ques110719.pdf" },
            { day: 12, pdf: "/misc/house proceedings/ques120719.pdf", html: "/misc/house proceedings/ques120719.htm" },
            { day: 15, pdf: "/misc/house proceedings/ques150719.pdf", html: "/misc/house proceedings/ques150719.htm" },
            { day: 16, pdf: "/misc/house proceedings/ques160719.pdf", html: "/misc/house proceedings/ques160719.htm" },
            { day: 17, pdf: "/misc/house proceedings/ques170719.pdf", html: "/misc/house proceedings/ques170719.htm" },
            { day: 18, pdf: "/misc/house proceedings/ques180719.pdf", html: "/misc/house proceedings/ques180719.htm" },
            { day: 19, pdf: "/misc/house proceedings/ques190719.pdf", html: "/misc/house proceedings/ques190719.htm" },

            { day: 22, pdf: "/misc/house proceedings/ques220719.pdf", html: "/misc/house proceedings/ques220719.htm" },
            { day: 23, pdf: "/misc/house proceedings/ques230719.pdf", html: "/misc/house proceedings/ques230719.htm" },
            { day: 24, pdf: "/misc/house proceedings/ques240719.pdf", html: "/misc/house proceedings/ques240719.htm" },
            { day: 25, pdf: "/misc/house proceedings/ques250719.pdf", html: "/misc/house proceedings/ques250719.htm" },
            { day: 26, pdf: "/misc/house proceedings/ques260719.pdf", html: "/misc/house proceedings/ques260719.htm" },


          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "जुलाई": [
            { day: 8, pdf: "/misc/house proceedings/star080719.pdf", html: null },
            { day: 9, pdf: "/misc/house proceedings/star090719.pdf", html: null },
            { day: 10, pdf: "/misc/house proceedings/star100719.pdf", html: null },
            { day: 11, pdf: "/misc/house proceedings/star110719.pdf", html: null },
            { day: 12, pdf: "/misc/house proceedings/star120719.pdf", html: null },
            { day: 15, pdf: "/misc/house proceedings/star150719.pdf", html: null },
            { day: 16, pdf: "/misc/house proceedings/star160719.pdf", html: null },
            { day: 17, pdf: "/misc/house proceedings/star170719.pdf", html: null },
            { day: 18, pdf: "/misc/house proceedings/star180719.pdf", html: null },
            { day: 19, pdf: "/misc/house proceedings/star190719.pdf", html: null },

            { day: 22, pdf: "/misc/house proceedings/star220719.pdf", html: null },
            { day: 23, pdf: "/misc/house proceedings/star230719.pdf", html: null },
            { day: 24, pdf: "/misc/house proceedings/star240719.pdf", html: null },
            { day: 25, pdf: "/misc/house proceedings/star250719.pdf", html: null },
            { day: 26, pdf: "/misc/house proceedings/star260719.pdf", html: null },


          ],
        },
      },
    ],
  },

  {
    session: "चतुर्थ सत्र (दिसम्बर 2019 - जनवरी 2020)",
    sections: [

      {
        section: "सदन की कार्यवाही",
        months: {
          "दिसम्बर": [

            { day: 17, pdf: null, html: "/misc/house proceedings/hp171219.htm" },
            { day: 18, pdf: null, html: "/misc/house proceedings/hp181219.htm" },
            { day: 19, pdf: null, html: "/misc/house proceedings/hp191219.htm" },

            { day: 20, pdf: null, html: "/misc/house proceedings/hp201219.htm" },
            { day: 23, pdf: null, html: null },



          ],
          "जनवरी": [
            { day: 16, pdf: null, html: "/misc/house proceedings/hp160120.htm" },
            { day: 17, pdf: null, html: "/misc/house proceedings/hp170120.htm" },




          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "दिसम्बर": [

            { day: 17, pdf: null, html: "/misc/house proceedings/ques171219.htm" },
            { day: 18, pdf: null, html: "/misc/house proceedings/ques181219.htm" },
            { day: 19, pdf: null, html: "/misc/house proceedings/ques191219.htm" },

            { day: 20, pdf: null, html: "/misc/house proceedings/ques201219.htm" },
            { day: 23, pdf: null, html: "/misc/house proceedings/ques230719.htm" },



          ],

        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "दिसम्बर": [

            { day: 17, pdf: "/misc/house proceedings/star171219.pdf", html: null },
            { day: 18, pdf: "/misc/house proceedings/star181219.pdf", html: null },
            { day: 19, pdf: "/misc/house proceedings/star191219.pdf", html: null },

            { day: 20, pdf: "/misc/house proceedings/star201219.pdf", html: null },
            { day: 23, pdf: null, html: null },



          ],

        },
      },

    ],
  },

  {
  session: "पंचम सत्र (मार्च - अप्रैल, 2020)",
  sections: [
    {
      section: "सदन की कार्यवाही",
      months: {
        "मार्च": [
          { day: 16, pdf: "/misc/house proceedings/hp160320.pdf", html: "/misc/house proceedings/hp160320.htm" },
          { day: 17, pdf: null, html: null },
          { day: 18, pdf: null, html: null },
          { day: 19, pdf: null, html: null },
          { day: 20, pdf: "/misc/house proceedings/hp200320.pdf", html: "/misc/house proceedings/hp200320.htm" },
          { day: 23, pdf: null, html: null },
          { day: 24, pdf: null, html: null },
          { day: 25, pdf: null, html: null },
          { day: 26, pdf: null, html: null },
          { day: 27, pdf: null, html: null },
          { day: 28, pdf: null, html: null },
          { day: 30, pdf: null, html: null },
          { day: 31, pdf: null, html: null },
        ],
        "अप्रैल": [
          { day: 1, pdf: null, html: null },
          { day: 3, pdf: null, html: null },
          { day: 7, pdf: null, html: null },
          { day: 8, pdf: null, html: null },
          { day: 9, pdf: null, html: null },
          { day: 13, pdf: null, html: null },
        ],
      },
    },

    {
      section: "प्रश्नोत्तरी",
      months: {
        "मार्च": [
          { day: 16, pdf: null, html: null },
          { day: 17, pdf: null, html: "/misc/house proceedings/hp200320.pdf" },
          { day: 18, pdf: null, html: "/misc/house proceedings/ques180320.htm" },
          { day: 19, pdf: null, html: "/misc/house proceedings/ques190320.htm" },
          { day: 20, pdf: null, html: "/misc/house proceedings/ques200320.htm" },
          { day: 23, pdf: null, html: "/misc/house proceedings/ques231219.htm" },
          { day: 24, pdf: null, html: null },
          { day: 26, pdf: null, html: null },
          { day: 27, pdf: null, html: null },
          { day: 30, pdf: null, html: null },
          { day: 31, pdf: null, html: null },
        ],
        
      },
    },

    {
      section: "तारांकित प्रश्न",
      months: {
        "मार्च": [
          { day: 16, pdf: null, html: null },
          { day: 17, pdf: "/misc/house proceedings/star171219.pdf", html: null },
          { day: 18, pdf: "/misc/house proceedings/star181219.pdf", html: null },
          { day: 19, pdf: "/misc/house proceedings/star191219.pdf", html: null },
          { day: 20, pdf: "/misc/house proceedings/star201219.pdf", html: null },
          { day: 23, pdf: null, html: null },
          
        ],
       
      },
    },
  ],
},


 {
    session: "षष्टम् सत्र (मार्च, 2020)",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "मार्च": [
            { day: 24, pdf: "/misc/house proceedings/hp240320.pdf", html: "/misc/house proceedings/hp240320.htm" },
            { day: 25, pdf: null, html: null },
            { day: 26, pdf: null, html: null },
            { day: 27, pdf: null, html: null },
          ],
        },
      },
    ],
  },

  {
    session: "सप्तम् सत्र (सितम्बर, 2020)",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "सितम्बर": [
            { day: 21, pdf: "/misc/house proceedings/hp240320.pdf", html: "/misc/house proceedings/hp210920.htm" },
            { day: 22, pdf: null, html: null },
            { day: 23, pdf: null, html: null },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "सितम्बर": [
            { day: 21, pdf: "/misc/house proceedings/ques210920.pdf", html: "/misc/house proceedings/ques210920.htm" },
            { day: 22, pdf: "/misc/house proceedings/ques220920.pdf", html: "/misc/house proceedings/ques220920.htm" },
            { day: 23, pdf: "/misc/house proceedings/ques230920.pdf", html: "/misc/house proceedings/ques230920.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "सितम्बर": [
            { day: 21, pdf: "/misc/house proceedings/star210920.pdf", html: null },
            { day: 22, pdf: null, html: null },
            { day: 23, pdf: null, html: null },
          ],
        },
      },
    ],
  },

  {
    session: "अष्टम् सत्र (दिसम्बर, 2020 - निरस्त)",
    sections: [
      {
        section: "प्रश्नोत्तरी",
        months: {
          "दिसम्बर": [
            { day: 28, pdf: "/misc/house proceedings/ques281220.pdf", html: "/misc/house proceedings/ques281220.htm" },
            { day: 29, pdf: "/misc/house proceedings/ques291220.pdf", html: "/misc/house proceedings/ques291220.htm" },
            { day: 30, pdf: "/misc/house proceedings/ques301220.pdf", html: "/misc/house proceedings/ques301220.htm" },
          ],
        },
      },
    ],
  },

  {
    session: "अष्टम् सत्र (फरवरी-मार्च, 2021)",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "फरवरी": [
            { day: 22, pdf: "/misc/house proceedings/hp220221.pdf", html: "/misc/house proceedings/hp220221.htm" },
            { day: 23, pdf: "/misc/house proceedings/hp230221.pdf", html: "/misc/house proceedings/hp230221.htm" },
            { day: 24, pdf: "/misc/house proceedings/hp240221.pdf", html: "/misc/house proceedings/hp240221.htm" },
            { day: 25, pdf: "/misc/house proceedings/hp250221.pdf", html: "/misc/house proceedings/hp250221.htm" },
            { day: 26, pdf: "/misc/house proceedings/hp260221.pdf", html: "/misc/house proceedings/hp260221.htm" },
          ],
          "मार्च": [
            { day: 1, pdf: "/misc/house proceedings/hp010321.pdf", html: "/misc/house proceedings/hp010321.htm" },
            { day: 2, pdf: "/misc/house proceedings/hp020321.pdf", html: "/misc/house proceedings/hp020321.htm" },
            { day: 3, pdf: "", html: "" },
            { day: 4, pdf: "/misc/house proceedings/hp040321.pdf", html: "/misc/house proceedings/hp040321.htm" },
            { day: 5, pdf: "/misc/house proceedings/hp050321.pdf", html: "/misc/house proceedings/hp050321.htm" },
            { day: 8, pdf: "/misc/house proceedings/hp080321.pdf", html: "/misc/house proceedings/hp080321.htm" },
            { day: 9, pdf: "/misc/house proceedings/hp090321.pdf", html: "/misc/house proceedings/hp090321.htm" },
            { day: 10, pdf: "", html: "" },
            { day: 15, pdf: "/misc/house proceedings/hp150321.pdf", html: "/misc/house proceedings/hp150321.htm" },
            { day: 16, pdf: "/misc/house proceedings/hp160321.pdf", html: "/misc/house proceedings/hp160321.htm" },
            { day: 17, pdf: "", html: "" },
            { day: 18, pdf: "", html: "" },
            { day: 19, pdf: "", html: "" },
            { day: 22, pdf: "", html: "" },
            { day: 23, pdf: "", html: "" },
            { day: 24, pdf: "", html: "" },
            { day: 25, pdf: "", html: "" },
            { day: 26, pdf: "", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "फरवरी": [
            { day: 23, pdf: "/misc/house proceedings/ques230221.pdf", html: "/misc/house proceedings/ques230221.htm" },
            { day: 24, pdf: "/misc/house proceedings/ques240221.pdf", html: "/misc/house proceedings/ques240221.htm" },
            { day: 25, pdf: "/misc/house proceedings/ques250221.pdf", html: "/misc/house proceedings/ques250221.htm" },
            { day: 26, pdf: "/misc/house proceedings/ques260221.pdf", html: "/misc/house proceedings/ques260221.htm" },
          ],
          "मार्च": [
            { day: 1, pdf: "/misc/house proceedings/ques010321.pdf", html: "/misc/house proceedings/ques010321.htm" },
            { day: 2, pdf: "/misc/house proceedings/ques020321.pdf", html: "/misc/house proceedings/ques020321.htm" },
            { day: 3, pdf: "/misc/house proceedings/ques030321.pdf", html: "/misc/house proceedings/ques030321.htm" },
            { day: 4, pdf: "/misc/house proceedings/ques040321.pdf", html: "/misc/house proceedings/ques040321.htm" },
            { day: 5, pdf: "/misc/house proceedings/ques050321.pdf", html: "/misc/house proceedings/ques050321.htm" },
            { day: 8, pdf: "/misc/house proceedings/ques080321.pdf", html: "/misc/house proceedings/ques080321.htm" },
            { day: 9, pdf: "/misc/house proceedings/ques090321.pdf", html: "/misc/house proceedings/ques090321.htm" },
            { day: 10, pdf: "/misc/house proceedings/ques100321.pdf", html: "/misc/house proceedings/ques100321.htm" },
            { day: 15, pdf: "/misc/house proceedings/ques150321.pdf", html: "/misc/house proceedings/ques150321.htm" },
            { day: 16, pdf: "/misc/house proceedings/ques160321.pdf", html: "/misc/house proceedings/ques160321.htm" },
            { day: 17, pdf: "/misc/house proceedings/ques170321.pdf", html: "/misc/house proceedings/ques170321.htm" },
            { day: 18, pdf: "/misc/house proceedings/ques190321.pdf", html: "/misc/house proceedings/ques180321.htm" },
            { day: 19, pdf: "/misc/house proceedings/ques190321.pdf", html: "/misc/house proceedings/ques190321.htm" },
            { day: 22, pdf: "/misc/house proceedings/ques220321.pdf", html: "/misc/house proceedings/ques220321.htm" },
            { day: 23, pdf: "/misc/house proceedings/ques230321.pdf", html: "/misc/house proceedings/ques230321.htm" },
            { day: 24, pdf: "/misc/house proceedings/ques240321.pdf", html: "/misc/house proceedings/ques240321.htm" },
            { day: 25, pdf: "/misc/house proceedings/ques250321.pdf", html: "/misc/house proceedings/ques250321.htm" },
            { day: 26, pdf: "/misc/house proceedings/ques260321.pdf", html: "/misc/house proceedings/ques260321.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          
          "मार्च": [
            { day: 1, pdf: "/misc/house proceedings/star010321.pdf", html: "" },
            { day: 2, pdf: "/misc/house proceedings/star020321.pdf", html: "" },
            { day: 3, pdf: "/misc/house proceedings/star030321.pdf", html: "" },
            { day: 4, pdf: "/misc/house proceedings/star040321.pdf", html: "" },
            { day: 5, pdf: "/misc/house proceedings/star050321.pdf", html: "" },
            { day: 8, pdf: "/misc/house proceedings/star080321.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/star090321.pdf", html: "" },
            { day: 10, pdf: "/misc/house proceedings/star100321.pdf", html: "" },
            { day: 15, pdf: "/misc/house proceedings/star150321.pdf", html: "" },
            { day: 16, pdf: "/misc/house proceedings/star160321.pdf", html: "" },
            { day: 17, pdf: "", html: "" },
            { day: 18, pdf: "", html: "" },
            { day: 19, pdf: "", html: "" },
            { day: 22, pdf: "", html: "" },
            { day: 23, pdf: "", html: "" },
            { day: 24, pdf: "", html: "" },
            { day: 25, pdf: "", html: "" },
            { day: 26, pdf: "", html: "" },
          ],
        },
      },
    ],
  },

  {
    session: "नवम् सत्र (अगस्त, 2021)",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "अगस्त": [
            { day: 9, pdf: "/misc/house proceedings/hp090821.pdf", html: "/misc/house proceedings/hp090821.htm" },
            { day: 10, pdf: "/misc/house proceedings/hp100821.pdf", html: "/misc/house proceedings/hp100821.htm" },
            { day: 11, pdf: "", html: "" },
            { day: 12, pdf: "", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "अगस्त": [
            { day: 9, pdf: "/misc/house proceedings/ques090821.pdf", html: "/misc/house proceedings/ques090821.htm" },
            { day: 10, pdf: "/misc/house proceedings/ques100821.pdf", html: "/misc/house proceedings/ques100821.htm" },
            { day: 11, pdf: "/misc/house proceedings/ques110821.pdf", html: "/misc/house proceedings/ques110821.htm" },
            { day: 12, pdf: "/misc/house proceedings/ques120821.pdf", html: "/misc/house proceedings/ques120821.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "अगस्त": [
            { day: 9, pdf: "/misc/house proceedings/star090821.pdf", html: "" },
            { day: 10, pdf: "/misc/house proceedings/star100821.pdf", html: "" },
            { day: 11, pdf: "", html: "" },
            { day: 12, pdf: "", html: "" },
          ],
        },
      },
    ],
  },

  {
    session: "दशम् सत्र (दिसम्बर, 2021)",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "दिसम्बर": [
            { day: 20, pdf: "/misc/house proceedings/hp201221.pdf", html: "/misc/house proceedings/hp201221.htm" },
            { day: 21, pdf: "/misc/house proceedings/hp211221.pdf", html: "/misc/house proceedings/hp211221.htm" },
            { day: 22, pdf: "/misc/house proceedings/hp221221.pdf", html: "/misc/house proceedings/hp221221.htm" },
            { day: 23, pdf: "/misc/house proceedings/hp231221.pdf", html: "/misc/house proceedings/hp231221.htm" },
            { day: 24, pdf: "/misc/house proceedings/hp241221.pdf", html: "/misc/house proceedings/hp241221.htm" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "दिसम्बर": [
            { day: 20, pdf: "/misc/house proceedings/ques201221.pdf", html: "/misc/house proceedings/ques201221.htm" },
            { day: 21, pdf: "/misc/house proceedings/ques211221.pdf", html: "/misc/house proceedings/ques211221.htm" },
            { day: 22, pdf: "/misc/house proceedings/ques221221.pdf", html: "/misc/house proceedings/ques221221.htm" },
            { day: 23, pdf: "/misc/house proceedings/ques231221.pdf", html: "/misc/house proceedings/ques231221.htm" },
            { day: 24, pdf: "/misc/house proceedings/ques241221.pdf", html: "/misc/house proceedings/ques241221.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "दिसम्बर": [
            { day: 20, pdf: "/misc/house proceedings/star201221.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/star211221.pdf", html: "" },
            { day: 22, pdf: "/misc/house proceedings/star221221.pdf", html: "" },
            { day: 23, pdf: "/misc/house proceedings/star231221.pdf", html: "" },
            { day: 24, pdf: "/misc/house proceedings/star241221.pdf", html: "" },
          ],
        },
      },
    ],
  },

  {
    session: "एकादश सत्र (मार्च, 2022)",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "मार्च": [
            { day: 7, pdf: "/misc/house proceedings/hp070322.pdf", html: "/misc/house proceedings/hp070322.htm" },
            { day: 8, pdf: "/misc/house proceedings/hp080322.pdf", html: "/misc/house proceedings/hp080322.htm" },
            { day: 9, pdf: "/misc/house proceedings/hp090322.pdf", html: "/misc/house proceedings/hp090322.htm" },
            { day: 10, pdf: "/misc/house proceedings/hp100322.pdf", html: "/misc/house proceedings/hp100322.htm" },
            { day: 11, pdf: "/misc/house proceedings/hp110322.pdf", html: "/misc/house proceedings/hp110322.htm" },
            { day: 14, pdf: "/misc/house proceedings/hp140322.pdf", html: "/misc/house proceedings/hp140322.htm" },
            { day: 15, pdf: "/misc/house proceedings/hp150322.pdf", html: "/misc/house proceedings/hp150322.htm" },
            { day: 16, pdf: "/misc/house proceedings/hp160322.pdf", html: "/misc/house proceedings/hp160322.htm" },
            { day: 17, pdf: "/misc/house proceedings/hp170322.pdf", html: "/misc/house proceedings/hp170322.htm" },
            { day: 21, pdf: "/misc/house proceedings/hp210322.pdf", html: "/misc/house proceedings/hp210322.htm" },
            { day: 23, pdf: "/misc/house proceedings/hp230322.pdf", html: "/misc/house proceedings/hp230322.htm" },
            { day: 24, pdf: "/misc/house proceedings/hp240322.pdf", html: "/misc/house proceedings/hp240322.htm" },
            { day: 25, pdf: "/misc/house proceedings/hp250322.pdf", html: "/misc/house proceedings/hp250322.htm" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "मार्च": [
            { day: 8, pdf: "/misc/house proceedings/ques080322.pdf", html: "/misc/house proceedings/ques080322.htm" },
            { day: 9, pdf: "/misc/house proceedings/ques090322.pdf", html: "/misc/house proceedings/ques090322.htm" },
            { day: 10, pdf: "/misc/house proceedings/ques100322.pdf", html: "/misc/house proceedings/ques100322.htm" },
            { day: 11, pdf: "/misc/house proceedings/ques110322.pdf", html: "/misc/house proceedings/ques110322.htm" },
            { day: 14, pdf: "/misc/house proceedings/ques140322.pdf", html: "/misc/house proceedings/ques140322.htm" },
            { day: 15, pdf: "/misc/house proceedings/ques150322.pdf", html: "/misc/house proceedings/ques150322.htm" },
            { day: 16, pdf: "/misc/house proceedings/ques160322.pdf", html: "/misc/house proceedings/ques160322.htm" },
            { day: 17, pdf: "/misc/house proceedings/ques170322.pdf", html: "/misc/house proceedings/ques170322.htm" },
            { day: 21, pdf: "/misc/house proceedings/ques210322.pdf", html: "/misc/house proceedings/ques210322.htm" },
            { day: 23, pdf: "/misc/house proceedings/ques230322.pdf", html: "/misc/house proceedings/ques230322.htm" },
            { day: 24, pdf: "/misc/house proceedings/ques240322.pdf", html: "/misc/house proceedings/ques240322.htm" },
            { day: 25, pdf: "/misc/house proceedings/ques250322.pdf  ", html: "/misc/house proceedings/ques250322.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "मार्च": [
            { day: 8, pdf: "/misc/house proceedings/star080322.pdf", html: "" },
            { day: 9, pdf: "/misc/house proceedings/star090322.pdf", html: "" },
            { day: 10, pdf: "/misc/house proceedings/star100322.pdf", html: "" },
            { day: 11, pdf: "/misc/house proceedings/star110322.pdf", html: "" },
            { day: 14, pdf: "/misc/house proceedings/star140322.pdf", html: "" },
            { day: 15, pdf: "/misc/house proceedings/star150322.pdf", html: "" },
            { day: 16, pdf: "/misc/house proceedings/star160322.pdf", html: "" },
            { day: 17, pdf: "/misc/house proceedings/star170322.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/star210322.pdf", html: "" },
            { day: 23, pdf: "/misc/house proceedings/star230322.pdf", html: "" },
            { day: 24, pdf: "/misc/house proceedings/star240322.pdf", html: "" },
            { day: 25, pdf: "/misc/house proceedings/star250322.pdf", html: "" },
          ],
        },
      },
    ],
  },

  {
    session: "द्वादश सत्र (सितम्बर, 2022)",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "सितम्बर": [
            { day: 13, pdf: "/misc/house proceedings/hp130922.pdf", html: "/misc/house proceedings/hp130922.htm" },
            { day: 14, pdf: "/misc/house proceedings/hp140922.pdf", html: "/misc/house proceedings/hp140922.htm" },
            { day: 15, pdf: "/misc/house proceedings/hp150922.pdf", html: "/misc/house proceedings/hp150922.htm" },
            { day: 16, pdf: "", html: "" },
            { day: 17, pdf: "", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "सितम्बर": [
            { day: 13, pdf: "/misc/house proceedings/ques130922.pdf", html: "/misc/house proceedings/ques130922.htm" },
            { day: 14, pdf: "/misc/house proceedings/ques140922.pdf", html: "/misc/house proceedings/ques140922.htm" },
            { day: 15, pdf: "/misc/house proceedings/ques150922.pdf", html: "/misc/house proceedings/ques150922.htm" },
            { day: 16, pdf: "/misc/house proceedings/ques160922.pdf", html: "/misc/house proceedings/ques160922.htm" },
            { day: 17, pdf: "/misc/house proceedings/ques170922.pdf", html: "/misc/house proceedings/ques170922.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "सितम्बर": [
            { day: 13, pdf: "/misc/house proceedings/star130922.pdf", html: "" },
            { day: 14, pdf: "/misc/house proceedings/star140922.pdf", html: "" },
            { day: 15, pdf: "/misc/house proceedings/star150922.pdf", html: "" },
            { day: 16, pdf: "/misc/house proceedings/star160922.pdf", html: "" },
            { day: 17, pdf: "/misc/house proceedings/star170922.pdf", html: "" },
          ],
        },
      },
    ],
  },

  {
    session: "त्रयोदश सत्र (दिसम्बर, 2022)",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "दिसम्बर": [
            { day: 19, pdf: "/misc/house proceedings/hp191222.pdf", html: "/misc/house proceedings/hp191222.htm" },
            { day: 20, pdf: "/misc/house proceedings/hp201222.pdf", html: "/misc/house proceedings/hp201222.htm" },
            { day: 21, pdf: "/misc/house proceedings/hp211222.pdf", html: "/misc/house proceedings/hp211222.htm" },
            { day: 22, pdf: "/misc/house proceedings/hp221222.pdf", html: "/misc/house proceedings/hp221222.htm" },
            { day: 23, pdf: "", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "दिसम्बर": [
            { day: 19, pdf: "/misc/house proceedings/ques191222.pdf", html: "/misc/house proceedings/ques191222.htm" },
            { day: 20, pdf: "/misc/house proceedings/ques201222.pdf", html: "/misc/house proceedings/ques201222.htm" },
            { day: 21, pdf: "/misc/house proceedings/ques211222.pdf", html: "/misc/house proceedings/ques211222.htm" },
            { day: 22, pdf: "/misc/house proceedings/ques221222.pdf", html: "/misc/house proceedings/ques221222.htm" },
            { day: 23, pdf: "/misc/house proceedings/ques231222.pdf", html: "/misc/house proceedings/ques231222.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "दिसम्बर": [
            { day: 19, pdf: "/misc/house proceedings/star191222.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/star201222.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/star211222.pdf", html: "" },
            { day: 22, pdf: "/misc/house proceedings/star221222.pdf", html: "" },
            { day: 23, pdf: "/misc/house proceedings/star231222.pdf", html: "" },
          ],
        },
      },
    ],
  },

  {
    session: "चतुर्दश सत्र (फरवरी-मार्च, 2023)",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "फरवरी": [
            { day: 27, pdf: "/misc/house proceedings/hp270223.pdf", html: "/misc/house proceedings/hp270223.htm" },
            { day: 28, pdf: "/misc/house proceedings/hp280223.pdf", html: "/misc/house proceedings/hp280223.htm" },
          ],
          "मार्च": [
            { day: 1, pdf: "/misc/house proceedings/hp010323.pdf", html: "/misc/house proceedings/hp010323.htm" },
            { day: 2, pdf: "/misc/house proceedings/hp020323.pdf", html: "/misc/house proceedings/hp020323.htm" },
            { day: 3, pdf: "/misc/house proceedings/hp030323.pdf", html: "/misc/house proceedings/hp030323.htm" },
            { day: 13, pdf: "/misc/house proceedings/hp130323.pdf", html: "/misc/house proceedings/hp130323.htm" },
            { day: 14, pdf: "/misc/house proceedings/hp140323.pdf", html: "/misc/house proceedings/hp140323.htm" },
            { day: 15, pdf: "/misc/house proceedings/hp150323.pdf", html: "/misc/house proceedings/hp150323.htm" },
            { day: 16, pdf: "/misc/house proceedings/hp160323.pdf", html: "/misc/house proceedings/hp160323.htm" },
            { day: 17, pdf: "/misc/house proceedings/hp170323.pdf", html: "/misc/house proceedings/hp170323.htm" },
            { day: 20, pdf: "/misc/house proceedings/hp200323.pdf", html: "/misc/house proceedings/hp200323.htm" },
            { day: 21, pdf: "/misc/house proceedings/hp210323.pdf", html: "/misc/house proceedings/hp210323.htm" },
            { day: 27, pdf: "/misc/house proceedings/hp270323.pdf", html: "/misc/house proceedings/hp270323.htm" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "फरवरी": [
            { day: 28, pdf: "/misc/house proceedings/ques280223.pdf", html: "/misc/house proceedings/ques280223.htm" },
          ],
          "मार्च": [
            { day: 1, pdf: "/misc/house proceedings/ques010323.pdf", html: "/misc/house proceedings/ques010323.htm" },
            { day: 2, pdf: "/misc/house proceedings/ques020323.pdf", html: "/misc/house proceedings/ques020323.htm" },
            { day: 3, pdf: "/misc/house proceedings/ques030323.pdf", html: "/misc/house proceedings/ques030323.htm" },
            { day: 13, pdf: "/misc/house proceedings/ques130323.pdf", html: "/misc/house proceedings/ques130323.htm" },
            { day: 14, pdf: "/misc/house proceedings/ques140323.pdf", html: "/misc/house proceedings/ques140323.htm" },
            { day: 15, pdf: "/misc/house proceedings/ques150323.pdf", html: "/misc/house proceedings/ques150323.htm" },
            { day: 16, pdf: "/misc/house proceedings/ques160323.pdf", html: "/misc/house proceedings/ques160323.htm" },
            { day: 17, pdf: "/misc/house proceedings/ques170323.pdf", html: "/misc/house proceedings/ques170323.htm" },
            { day: 20, pdf: "/misc/house proceedings/ques200323.pdf", html: "/misc/house proceedings/ques200323.htm" },
            { day: 21, pdf: "/misc/house proceedings/ques210323.pdf", html: "/misc/house proceedings/ques210323.htm" },
            { day: 27, pdf: "/misc/house proceedings/ques270323.pdf", html: "/misc/house proceedings/ques270323.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "फरवरी": [
            { day: 28, pdf: "/misc/house proceedings/star280223.pdf", html: "" },
          ],
          "मार्च": [
            { day: 1, pdf: "/misc/house proceedings/star010323.pdf", html: "" },
            { day: 2, pdf: "/misc/house proceedings/star020323.pdf", html: "" },
            { day: 3, pdf: "/misc/house proceedings/star030323.pdf", html: "" },
            { day: 13, pdf: "/misc/house proceedings/star130323.pdf", html: "" },
            { day: 14, pdf: "/misc/house proceedings/star140323.pdf", html: "" },
            { day: 15, pdf: "/misc/house proceedings/star150323.pdf", html: "" },
            { day: 16, pdf: "/misc/house proceedings/star160323.pdf", html: "" },
            { day: 17, pdf: "/misc/house proceedings/star170323.pdf", html: "" },
            { day: 20, pdf: "/misc/house proceedings/star200323.pdf", html: "" },
            { day: 21, pdf: "/misc/house proceedings/star210323.pdf", html: "" },
            { day: 27, pdf: "/misc/house proceedings/star270323.pdf", html: "" },
          ],
        },
      },
    ],
  },

  {
    session: "पंचदश सत्र (जुलाई, 2023)",
    sections: [
      {
        section: "सदन की कार्यवाही",
        months: {
          "जुलाई": [
            { day: 11, pdf: "/misc/house proceedings/hp110723.pdf", html: "/misc/house proceedings/hp110723.htm" },
            { day: 12, pdf: "/misc/house proceedings/hp120723.pdf", html: "/misc/house proceedings/hp120723.htm" },
            { day: 13, pdf: "", html: "" },
            { day: 14, pdf: "", html: "" },
            { day: 15, pdf: "", html: "" },
          ],
        },
      },
      {
        section: "प्रश्नोत्तरी",
        months: {
          "जुलाई": [
            { day: 11, pdf: "/misc/house proceedings/ques110723.pdf", html: "/misc/house proceedings/ques110723.htm" },
            { day: 12, pdf: "/misc/house proceedings/ques120723.pdf", html: "mpvidhansabha.nic.in/house proceedings/ques120723.htm" },
            { day: 13, pdf: "/misc/house proceedings/ques130723.pdf", html: "/misc/house proceedings/ques130723.htm" },
            { day: 14, pdf: "/misc/house proceedings/ques140723.pdf", html: "/misc/house proceedings/ques140723.htm" },
            { day: 15, pdf: "/misc/house proceedings/ques150723.pdf", html: "/misc/house proceedings/ques150723.htm" },
          ],
        },
      },
      {
        section: "तारांकित प्रश्न",
        months: {
          "जुलाई": [
            { day: 11, pdf: "/misc/house proceedings/star110723.pdf", html: "" },
            { day: 12, pdf: "/misc/house proceedings/star120723.pdf", html: "" },
            { day: 13, pdf: "", html: "" },
            { day: 14, pdf: "", html: "" },
            { day: 15, pdf: "", html: "" },
          ],
        },
      },
    ],
  },
];



const SadanKaryavahi15 = () => {
const navigate = useNavigate();
const fullAnswersRoute = "/prashnonke-purn-uttar";   // <-- example route

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
            if (window.history.state && window.history.state.idx > 0) {
              navigate(-1);
            } else {
              navigate("/vidhansabhakarywahi");
            }
          }}
        >
          पीछे जाये
        </button>

        {/* Center Text */}
        <div className="panch-hero-text">
          <h1>सदन की कार्यवाही</h1>
          <p>पंचदश विधान सभा (2019 से ..)</p>
        </div>

      </div>
    </div>
  </div>

  {/* 🔵 CALENDAR / SESSION SECTIONS */}
  <div className="panch-grid">
    {sessionData.map((session, idx) => (
      <div key={idx} className="panch-card">
        <div className="panch-section">
          <h2>{session.session}</h2>

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
                          {html ? (
                            <a href={html} target="_blank" rel="noopener noreferrer" className="panch-link">HTML</a>
                          ) : <span style={{ opacity: 0.5 }}>—</span>}
                          {pdf ? (
                            <a href={pdf} target="_blank" rel="noopener noreferrer" className="panch-link">PDF</a>
                          ) : <span style={{ opacity: 0.5 }}>—</span>}
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

  {/* 🔵 NOTE */}
  <div style={styles.note}>
    Note: दिनांक 15 एवं 16 जुलाई, 2019 को होने वाली बैठकें, शनिवार, दिनांक 20 जुलाई, 2019 एवं रविवार, दिनांक 21 जुलाई, 2019 के लिए स्थगित की गईं..
  </div>

  {/* 🔵 FULL ANSWERS BUTTON */}
  <button
    style={styles.fullAnswersButton}
    onClick={() => navigate(fullAnswersRoute)}
  >
    प्रश्‍नों के पूर्ण उत्‍तर
  </button>
</div>

  );
};

export default SadanKaryavahi15;