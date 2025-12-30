import React from "react";
import { Link } from "react-router-dom";

const DainikKaryasuchi10 = () => {

  const data = [
    {
      number: "प्रथम",
      name: "दिसम्बर 1993",
      months: [
        {
          month: "दिसम्बर",
          dates: [
            { day: "23", pdf: "/misc/karyasuchi/231293.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/241293.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/271293.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/281293.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/291293.pdf" },
            { day: "30", pdf: "/misc/karyasuchi/301293.pdf" }
          ]
        }
      ]
    },
    {
      number: "द्वितीय",
      name: "फरवरी - मई 1994",
      months: [
        {
          month: "फरवरी",
          dates: [
            { day: "21", pdf: "/misc/karyasuchi/210294.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220294.pdf" },
            { day: "(शुद्धि पत्र)", pdf: "/misc/karyasuchi/220294-shuddhi%20patra.pdf" },

            { day: "23", pdf: "/misc/karyasuchi/230294.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240294.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/250294.pdf" }
          ]
        },
        {
          month: "मार्च",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010394.pdf" },
            { day: "2", pdf: "/misc/karyasuchi/020394.pdf" },
            { day: "3", pdf: "/misc/karyasuchi/030394.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040394.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080394.pdf" },
            { day: "9", pdf: "/misc/karyasuchi/090394.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170394.pdf" },
            { day: "18 ", pdf: "/misc/karyasuchi/180394.pdf" },
            { day: "(शुद्धि पत्र)", pdf: "/misc/karyasuchi/180394-shuddhi%20patra.pdf" },

            { day: "21", pdf: "/misc/karyasuchi/210394.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220394.pdf" }
          ]
        },
        {
          month: "अप्रैल",
          dates: [
            { day: "4", pdf: "/misc/karyasuchi/040494.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050494.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070494.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080494.pdf" },
            { day: "9 ", pdf: "/misc/karyasuchi/090494.pdf" },
            { day: "(शुद्धि पत्र)", pdf: "/misc/karyasuchi/090494-shuddhi%20patra.pdf" },

            { day: "18", pdf: "/misc/karyasuchi/180494.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190494.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210494.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220494.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/250494.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260494.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/270494.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280494.pdf" }
          ]
        },
        {
          month: "मई",
          dates: [
            { day: "3", pdf: "/misc/karyasuchi/030594.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040594.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050594.pdf" },
            { day: "6 ", pdf: "/misc/karyasuchi/060594.pdf" },
            { day: "(शुद्धि पत्र)", pdf: "/misc/karyasuchi/060594-shuddhi%20patra.pdf" },

          ]
        }
      ]
    },

    {
      number: "तृतीय",
      name: "अगस्त - सितम्बर 1994",
      months: [
        {
          month: "अगस्त",
          dates: [
            { day: "18", pdf: "/misc/karyasuchi/180894.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190894.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230894.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240894.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/250894.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260894.pdf" },
            { day: "31", pdf: "/misc/karyasuchi/310894.pdf" }
          ]
        },
        {
          month: "सितम्बर",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010994.pdf" },
            { day: "2", pdf: "/misc/karyasuchi/020994.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120994.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130994.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140994.pdf" },
            { day: "16", pdf: "/misc/karyasuchi/160994.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190994.pdf" },
            { day: "20 ", pdf: "/misc/karyasuchi/200994.pdf" },
            { day: "(अनुपूरक)", pdf: "/misc/karyasuchi/200994-supplementary.pdf" },

          ]
        }
      ]
    },

    {
      number: "चतुर्थ",
      name: "नवम्बर - दिसम्बर 1994",
      months: [
        {
          month: "नवम्बर",
          dates: [
            { day: "28", pdf: "/misc/karyasuchi/281194.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/291194.pdf" },
            { day: "30", pdf: "/misc/karyasuchi/301194.pdf" }
          ]
        },
        {
          month: "दिसम्बर",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/011294.pdf" },
            { day: "2", pdf: "/misc/karyasuchi/021294.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/051294.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/061294.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/071294.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/081294.pdf" },
            { day: "9", pdf: "/misc/karyasuchi/091294.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/121294.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/131294.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/141294.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/151294.pdf" },
            { day: "16 ", pdf: "/misc/karyasuchi/161294.pdf" },
            { day: "(अनुपूरक)", pdf: "/misc/karyasuchi/161294-supplementary.pdf" },

          ]
        }
      ]
    },

    {
      number: "पंचम्",
      name: "फरवरी - अप्रैल 1995",
      months: [
        {
          month: "फरवरी",
          dates: [
            { day: "16", pdf: "/misc/karyasuchi/160295.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170295.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200295.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210295.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220295.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230295.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280295.pdf" }
          ]
        },
        {
          month: "मार्च",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010395.pdf" },
            { day: "2", pdf: "/misc/karyasuchi/020395.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/060395.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070395.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080395.pdf" },
            { day: "9 ", pdf: "/misc/karyasuchi/090395.pdf" },
            { day: "(शुद्धि पत्र)", pdf: "/misc/karyasuchi/090395-shuddhi%20patra.pdf" },

            { day: "10", pdf: "/misc/karyasuchi/100395.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130395.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140395.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/150395.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220395.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230395.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240395.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/270395.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280395.pdf" }
          ]
        },
        {
          month: "अप्रैल",
          dates: [
            { day: "3", pdf: "/misc/karyasuchi/030495.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040495.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050495.pdf" },
            { day: "10", pdf: "/misc/karyasuchi/100495.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130495.pdf" }
          ]
        }
      ]
    },

    {
      number: "षष्टम्",
      name: "अगस्त - सितम्बर 1995",
      months: [
        {
          month: "अगस्त",
          dates: [
            { day: "21", pdf: "/misc/karyasuchi/210895.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220895.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230895.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240895.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/250895.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280895.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/290895.pdf" },
            { day: "30", pdf: "/misc/karyasuchi/300895.pdf" },
            { day: "31", pdf: "/misc/karyasuchi/310895.pdf" }
          ]
        },
        {
          month: "सितम्बर",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010995.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110995.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120995.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130995.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140995.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/150995.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180995.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190995.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200995.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210995.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220995.pdf" }
          ]
        }
      ]
    },

    {
      number: "सप्तम्",
      name: "नवम्बर - दिसम्बर 1995",
      months: [
        {
          month: "नवम्बर",
          dates: [
            { day: "22", pdf: "/misc/karyasuchi/221195.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/231195.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/241195.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/271195.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/281195.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/291195.pdf" },
            { day: "30", pdf: "/misc/karyasuchi/301195.pdf" }
          ]
        },
        {
          month: "दिसम्बर",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/011295.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/041295.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/051295.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/061295.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/071295.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/111295.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/121295.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/131295.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/141295.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/151295.pdf" }
          ]
        }
      ]
    },

    {
      number: "अष्टम्",
      name: "फरवरी - मार्च 1996",
      months: [
        {
          month: "फरवरी",
          dates: [
            { day: "12", pdf: "/misc/karyasuchi/120296.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130296.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140296.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/150296.pdf" },
            { day: "16", pdf: "/misc/karyasuchi/160296.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190296.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200296.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220296.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230296.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260296.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/270296.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280296.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/290296.pdf" }
          ]
        },
        {
          month: "मार्च",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010396.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110396.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120396.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130396.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180396.pdf" },
            { day: "19 ", pdf: "/misc/karyasuchi/190396.pdf" },
            { day: "(अनुपूरक)", pdf: "/misc/karyasuchi/190396-supplementary.pdf" },

            { day: "20", pdf: "/misc/karyasuchi/200396.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210396.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220396.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/250396.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260396.pdf" }
          ]
        }
      ]
    },

    {
      number: "नवम्",
      name: "अगस्त - सितम्बर 1996",
      months: [
        {
          month: "अगस्त",
          dates: [
            { day: "5", pdf: "/misc/karyasuchi/050896.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070896.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080896.pdf" },
            { day: "9", pdf: "/misc/karyasuchi/090896.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190896.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200896.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210896.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220896.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230896.pdf" }
          ]
        },
        {
          month: "सितम्बर",
          dates: [
            { day: "2", pdf: "/misc/karyasuchi/020996.pdf" },
            { day: "3", pdf: "/misc/karyasuchi/030996.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040996.pdf" },
            { day: "9 ", pdf: "/misc/karyasuchi/090996.pdf" },
            { day: "(अनुपूरक)", pdf: "/misc/karyasuchi/090996-supplementary.pdf" },

            { day: "10 ", pdf: "/misc/karyasuchi/100996.pdf" },
            { day: "(अनुपूरक)", pdf: "/misc/karyasuchi/100996-supplementary.pdf" },

            { day: "11 ", pdf: "/misc/karyasuchi/110996.pdf" },
            { day: "(अनुपूरक)", pdf: "/misc/karyasuchi/110996-supplementary.pdf" },

          ]
        }
      ]
    },


    {
      number: "दशम्",
      name: "नवम्बर - दिसम्बर 1996",
      months: [
        {
          month: "नवम्बर",
          dates: [
            { day: "26", pdf: "/misc/karyasuchi/261196.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/271196.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/281196.pdf" }
          ]
        },
        {
          month: "दिसम्बर",
          dates: [
            { day: "4", pdf: "/misc/karyasuchi/041296.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/051296.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/061296.pdf" },
            { day: "9", pdf: "/misc/karyasuchi/091296.pdf" },
            { day: "10", pdf: "/misc/karyasuchi/101296.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/111296.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/121296.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/131296.pdf" }
          ]
        }
      ]
    },
    {
      number: "एकादश",
      name: "फरवरी - मार्च 1997",
      months: [
        {
          month: "फरवरी",
          dates: [
            { day: "7", pdf: "/misc/karyasuchi/070297.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110297.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120297.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130297.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140297.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170297.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180297.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190297.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200297.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210297.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240297.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/250297.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260297.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/270297.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280297.pdf" }
          ]
        },
        {
          month: "मार्च",
          dates: [
            { day: "3", pdf: "/misc/karyasuchi/030397.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040397.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050397.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/060397.pdf" },
            { day: "10", pdf: "/misc/karyasuchi/100397.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110397.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120397.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130397.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140397.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170397.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180397.pdf" },
            { day: "19 ", pdf: "/misc/karyasuchi/190397.pdf" },
            { day: " (अनुपूरक)", pdf: "/misc/karyasuchi/190397-supplementary.pdf" },

            { day: "20 ", pdf: "/misc/karyasuchi/200397.pdf" },
            { day: "(अनुपूरक)", pdf: "/misc/karyasuchi/200397-supplementary.pdf" },

            { day: "21", pdf: "/misc/karyasuchi/210397.pdf" }
          ]
        }
      ]
    },

    {
      number: "द्वादश",
      name: "जुलाई - अगस्त 1997",
      months: [
        {
          month: "जुलाई",
          dates: [
            { day: "14", pdf: "/misc/karyasuchi/140797.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/150797.pdf" },
            { day: "16", pdf: "/misc/karyasuchi/160797.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170797.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210797.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220797.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230797.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240797.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/250797.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280797.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/290797.pdf" },
            { day: "30", pdf: "/misc/karyasuchi/300797.pdf" },
            { day: "31 ", pdf: "/misc/karyasuchi/310797.pdf" },
            { day: " (शुद्धि पत्र)", pdf: "/misc/karyasuchi/310797-shuddhi%20patra.pdf" },

          ]
        },
        {
          month: "अगस्त",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010897.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040897.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050897.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120897.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130897.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140897.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/270897.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280897.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/290897.pdf" }
          ]
        }
      ]
    },

    {
      number: "त्रयोदश",
      name: "नवम्बर 1997",
      months: [
        {
          month: "नवम्बर",
          dates: [
            { day: "3", pdf: "/misc/karyasuchi/031197.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/041197.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/051197.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/061197.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/071197.pdf" },
            { day: "10", pdf: "/misc/karyasuchi/101197.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/111197.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/121197.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/131197.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/171197.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/181197.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/191197.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/201197.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/211197.pdf" }
          ]
        }
      ]
    },

    {
      number: "चतुर्दश",
      name: "मार्च - मई 1998",
      months: [
        {
          month: "मार्च",
          dates: [
            { day: "23", pdf: "/misc/karyasuchi/230398.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240398.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/250398.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260398.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/270398.pdf" },
            { day: "30", pdf: "/misc/karyasuchi/300398.pdf" },
            { day: "31", pdf: "/misc/karyasuchi/310398.pdf" }
          ]
        },
        {
          month: "अप्रैल",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010498.pdf" },
            { day: "2", pdf: "/misc/karyasuchi/020498.pdf" },
            { day: "3", pdf: "/misc/karyasuchi/030498.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/150498.pdf" },
            { day: "16", pdf: "/misc/karyasuchi/160498.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170498.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200498.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210498.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220498.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230498.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240498.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/270498.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280498.pdf" },
            { day: "30", pdf: "/misc/karyasuchi/300498.pdf" }
          ]
        },
        {
          month: "मई",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010598.pdf" }
          ]
        }
      ]
    },

    {
      number: "पंचदश",
      name: "जुलाई - सितम्बर 1998",
      months: [
        {
          month: "जुलाई",
          dates: [
            { day: "27", pdf: "/misc/karyasuchi/270798.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280798.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/290798.pdf" },
            { day: "30", pdf: "/misc/karyasuchi/300798.pdf" },
            { day: "31", pdf: "/misc/karyasuchi/310798.pdf" }
          ]
        },
        {
          month: "अगस्त",
          dates: [
            { day: "3 ", pdf: "/misc/karyasuchi/030898.pdf" },
            { day: "(अनुपूरक)", pdf: "/misc/karyasuchi/030898-supplementary.pdf" },

            { day: "4", pdf: "/misc/karyasuchi/040898.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050898.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/060898.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070898.pdf" },
            { day: "31 ", pdf: "/misc/karyasuchi/310898.pdf" },
            { day: " (अनुपूरक)", pdf: "/misc/karyasuchi/310898-supplementary.pdf" },

          ]
        },
        {
          month: "सितम्बर",
          dates: [
            { day: "1 ", pdf: "/misc/karyasuchi/010998.pdf" },
            { day: " (अनुपूरक)", pdf: "/misc/karyasuchi/010998-supplementary.pdf" }

          ]
        }
      ]
    }
  ];


  const styles = {
      page: {
        fontFamily: "'Noto Sans Devanagari', sans-serif",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        // padding: "20px",
      },
      header: {
        textAlign: "center",
        backgroundColor: "#1d4ed8",
        color: "#fff",
        padding: "25px 10px",
        borderRadius: "12px",
        marginBottom: "25px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        position: "relative",
      },
      backButton: {
        position: "absolute",
        left: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#ffffff",
        color: "#1d4ed8",
        border: "none",
        padding: "8px 16px",
        borderRadius: "8px",
        fontWeight: 600,
        cursor: "pointer",
        textDecoration: "none",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        transition: "all 0.2s ease",
      },
      title: { fontSize: "2rem", fontWeight: 700 },
      subTitle: { fontSize: "1.1rem", marginTop: "5px", opacity: 0.9 },
      calendarGrid: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      },
      sessionCard: {
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        padding: "20px",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
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
      dateGrid: {
        display: "flex",
        flexWrap: "wrap",
        gap: "6px",
        justifyContent: "center",
      },
      dateCell: {
        backgroundColor: "#eff6ff",
        borderRadius: "6px",
        padding: "6px 8px",
        textAlign: "center",
        fontWeight: 600,
        color: "#1e40af",
        border: "1px solid #bfdbfe",
        transition: "all 0.2s ease",
        cursor: "pointer",
        minWidth: "45px",
        textDecoration: "none",
      },
      specialDateCell: {
        backgroundColor: "#fde68a",
        color: "#b45309",
        border: "1px solid #fcd34d",
      },
    };
  
    const getDisplayText = (d) => {
      if (d.includes("अनुपूरक")) return d.replace("अनुपूरक", "अनु.");
      return d;
    };
  
    const isSpecial = (d) => d.includes("अनुपूरक");
  
     return (
          <div style={styles.page}>
            
            {/* ⭐ NEW HERO SECTION (same as DainikKaryasuchi16) */}
            <div className="panch-hero">
              <div className="panch-hero-content">
                <div className="panch-hero-row">
      
                  <Link to="/dainik" className="panch-btn">
                    पीछे जाये
                  </Link>
      
                  <div className="panch-hero-text">
                    <h1>दैनिक कार्य सूची</h1>
                    <p>
दशम् विधान सभा (1993-1998)</p>
                  </div>
      
                </div>
              </div>
            </div>
      
            {/* ⭐ CALENDAR UNTOUCHED */}
            <div style={styles.calendarGrid}>
              {data.map((session, idx) => (
                <div key={idx} style={styles.sessionCard}>
                  <div style={styles.sessionHeader}>
                    {session.number} सत्र — {session.name}
                  </div>
      
                  {session.months.map((m, i) => (
                    <div key={i} style={styles.monthBlock}>
                      <div style={styles.monthTitle}>{m.month}</div>
      
                      <div style={styles.dateGrid}>
                        {m.dates.map((d, j) =>
                          d.pdf ? (
                            <a
                              key={j}
                              href={d.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                ...styles.dateCell,
                                ...(isSpecial(d.day) ? styles.specialDateCell : {}),
                              }}
                            >
                              {getDisplayText(d.day)}
                            </a>
                          ) : (
                            <div key={j} style={styles.dateCell}>
                              {getDisplayText(d.day)}
                            </div>
                          )
                        )}
                      </div>
      
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      };
  

export default DainikKaryasuchi10;