import React from "react";
import { Link } from "react-router-dom";

const DainikKaryasuchi11 = () => {
  const data = [
    {
      number: "प्रथम",
      name: "फरवरी–मार्च, 1999",
      months: [
        {
          month: "फरवरी",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010299.pdf" },
            { day: "2", pdf: "/misc/karyasuchi/020299.pdf" },
            { day: "3", pdf: "/misc/karyasuchi/030299.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040299.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050299.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080299.pdf" },
            { day: "9", pdf: "/misc/karyasuchi/090299.pdf" },
            { day: "अनुपूरक", pdf: "/misc/karyasuchi/090299-supplementary.pdf" },
            { day: "10", pdf: "/misc/karyasuchi/100299.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110299.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120299.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/150299.pdf" },
            { day: "16", pdf: "/misc/karyasuchi/160299.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170299.pdf" },
            { day: "अनुपूरक", pdf: "/misc/karyasuchi/170299-supplementary.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180299.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220299.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230299.pdf" },
            { day: "अनुपूरक", pdf: "/misc/karyasuchi/230299-supplementary.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240299.pdf" },
            { day: "शुद्धि पत्र", pdf: "/misc/karyasuchi/240299-shuddhi%20patra.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/250299.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260299.pdf" }
          ]
        },
        {
          month: "मार्च",
          dates: [
            { day: "8", pdf: "/misc/karyasuchi/080399.pdf" },
            { day: "9", pdf: "/misc/karyasuchi/090399.pdf" },
            { day: "10", pdf: "/misc/karyasuchi/100399.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110399.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120399.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/150399.pdf" },
            { day: "16", pdf: "/misc/karyasuchi/160399.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170399.pdf" },
            { day: "पुनरीक्षित", pdf: "/misc/karyasuchi/170399-revised.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190399.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220399.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230399.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240399.pdf" }
          ]
        }
      ]
    },
    {
      number: "द्वितीय",
      name: "जुलाई, 1999",
      months: [
        {
          month: "जुलाई",
          dates: [
            { day: "5", pdf: "/misc/karyasuchi/050799.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/060799.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070799.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080799.pdf" },
            { day: "9", pdf: "/misc/karyasuchi/090799.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120799.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130799.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140799.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/150799.pdf" },
            { day: "अनुपूरक", pdf: "/misc/karyasuchi/150799-supplementary.pdf" }
          ]
        }
      ]
    },
    {
      number: "तृतीय",
      name: "अक्टूबर–दिसम्बर, 1999",
      months: [
        {
          month: "अक्टूबर",
          dates: [
            { day: "25", pdf: "/misc/karyasuchi/251099.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/261099.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/271099.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/281099.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/291099.pdf" }
          ]
        },
        {
          month: "नवम्बर",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/011199.pdf" },
            { day: "2", pdf: "/misc/karyasuchi/021199.pdf" },
            { day: "3", pdf: "/misc/karyasuchi/031199.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/041199.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/151199.pdf" },
            { day: "16", pdf: "/misc/karyasuchi/161199.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/171199.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/181199.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/191199.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/241199.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/251199.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/261199.pdf" }
          ]
        }
      ]
    },
    {
      number: "चतुर्थ",
      name: "फरवरी - मार्च, 2000",
      months: [
        {
          month: "फरवरी",
          dates: [
            { day: "3", pdf: "//misckaryasuchi/030200.pdf" },
            { day: "4", pdf: "//misckaryasuchi/040200.pdf" },
            { day: "7", pdf: "//misckaryasuchi/070200.pdf" },
            { day: "8", pdf: "//misckaryasuchi/080200.pdf" },
            { day: "9", pdf: "//misckaryasuchi/090200.pdf" },
            { day: "10", pdf: "/misc/karyasuchi/100200.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110200.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140200.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/150200.pdf" },
            { day: "16", pdf: "/misc/karyasuchi/160200.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170200.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180200.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210200.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220200.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230200.pdf" }
          ]
        },
        {
          month: "मार्च",
          dates: [
            { day: "6", pdf: "/misc/karyasuchi/060300.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070300.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080300.pdf" },
            { day: "9", pdf: "/misc/karyasuchi/090300.pdf" },
            { day: "10", pdf: "/misc/karyasuchi/100300.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130300.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140300.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/150300.pdf" },
            { day: "16", pdf: "/misc/karyasuchi/160300.pdf" }
          ]
        }
      ]
    },
    {
      number: "पंचम",
      name: "जुलाई - अगस्त, 2000",
      months: [
        {
          month: "जुलाई",
          dates: [
            { day: "17", pdf: "/misc/karyasuchi/170700.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180700.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190700.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200700.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210700.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240700.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/250700.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260700.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/270700.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280700.pdf" },
            { day: "31", pdf: "/misc/karyasuchi/310700.pdf" }
          ]
        },
        {
          month: "अगस्त",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010800.pdf" },
            { day: "2", pdf: "/misc/karyasuchi/020800.pdf" },
            { day: "3", pdf: "/misc/karyasuchi/030800.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040800.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070800.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080800.pdf" },
            { day: "10", pdf: "/misc/karyasuchi/100800.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110800.pdf" }
          ]
        }
      ]
    },
    {
      number: "षष्टम",
      name: "अक्टूबर–दिसम्बर, 2000",
      months: [
        {
          month: "अक्टूबर",
          dates: [
            { day: "19", pdf: "/misc/karyasuchi/191000.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/201000.pdf" }
          ]
        },
        {
          month: "नवम्बर",
          dates: [
            { day: "6", pdf: "/misc/karyasuchi/061100.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/071100.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/081100.pdf" },
            { day: "9", pdf: "/misc/karyasuchi/091100.pdf" },
            { day: "10", pdf: "/misc/karyasuchi/101100.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/131100.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/141100-shuddhi patra.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/151100.pdf" },
            { day: "16", pdf: "/misc/karyasuchi/161100.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/171100.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/211100.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/221100.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/231100.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/241100.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/271100.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/281100.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/291100.pdf" },
            { day: "30", pdf: "/misc/karyasuchi/301100-supplementary.pdf" }
          ]
        },
        {
          month: "दिसम्बर",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/011200.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/041200.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/051200.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/061200.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/071200.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/081200.pdf" }
          ]
        }
      ]
    },
    {
      number: "सप्तम्",
      name: "जनवरी–मार्च, 2001",
      months: [
        {
          month: "जनवरी",
          dates: [
            { day: "12", pdf: "/misc/karyasuchi/120101.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/150101.pdf" },
            { day: "16", pdf: "/misc/karyasuchi/160101.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170101.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180101.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190101.pdf" }
          ]
        },
        {
          month: "फरवरी",
          dates: [
            { day: "19", pdf: "/misc/karyasuchi/190201.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200201.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220201.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230201.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260201.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/270201.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280201.pdf" }
          ]
        },
        {
          month: "मार्च",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010301.pdf" },
            { day: "2", pdf: "/misc/karyasuchi/020301.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050301.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070301.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080301.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190301.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200301.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210301.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220301.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230301.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/270301.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280301.pdf" }
          ]
        }
      ]
    },
    {
      number: "अष्टम्",
      name: "अगस्त - सितम्बर, 2001",
      months: [
        {
          month: "अगस्त",
          dates: [
            { day: "20", pdf: "/misc/karyasuchi/200801.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210801.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230801.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240801.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/270801.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280801.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/290801.pdf" },
            { day: "30", pdf: "/misc/karyasuchi/300801.pdf" },
            { day: "31", pdf: "/misc/karyasuchi/310801.pdf" }
          ]
        },
        {
          month: "सितम्बर",
          dates: [
            { day: "3", pdf: "/misc/karyasuchi/030901.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040901.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050901.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/060901.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070901.pdf" },
            { day: "10", pdf: "/misc/karyasuchi/100901.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110901.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120901.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130901.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140901.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180901.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190901.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200901.pdf" },
            { day: "अनुपूरक", pdf: "/misc/karyasuchi/200901-supplementary.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210901.pdf" }
          ]
        }
      ]
    },
    {
      number: "नवम्",
      name: "नवम्बर, 2001",
      months: [
        {
          month: "नवम्बर",
          dates: [
            { day: "5", pdf: "/misc/karyasuchi/051101.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/061101.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/071101.pdf" },
            { day: "अनुपूरक", pdf: "/misc/karyasuchi/071101-supplementary.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/081101.pdf" },
            { day: "9", pdf: "/misc/karyasuchi/091101.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/191101.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/201101.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/211101.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/221101.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/231101.pdf" }
          ]
        }
      ]
    },
    {
      number: "दशम्",
      name: "फरवरी - अप्रैल, 2002",
      months: [
        {
          month: "फरवरी",
          dates: [
            { day: "25", pdf: "/misc/karyasuchi/250202.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260202.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280202.pdf" }
          ]
        },
        {
          month: "मार्च",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010302.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040302.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050302.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/060302.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070302.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080302.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110302.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130302.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140302.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/150302.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180302.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190302.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200302.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210302.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220302.pdf" }
          ]
        },
        {
          month: "अप्रैल",
          dates: [
            { day: "3", pdf: "/misc/karyasuchi/030402.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040402.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050402.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080402.pdf" },
            { day: "9", pdf: "/misc/karyasuchi/090402.pdf" },
            { day: "10", pdf: "/misc/karyasuchi/100402.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110402.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120402.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/150402.pdf" },
            { day: "16", pdf: "/misc/karyasuchi/160402.pdf" }
          ]
        }
      ]
    },
    {
      number: "एकादश",
      name: "जुलाई - अगस्त, 2002",
      months: [
        {
          month: "जुलाई",
          dates: [
            { day: "15", pdf: "/misc/karyasuchi/150702.pdf" },
            { day: "16", pdf: "/misc/karyasuchi/160702.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170702.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180702.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190702.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/220702.pdf" },
            { day: "23", pdf: "/misc/karyasuchi/230702.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240702.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/250702.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260702.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/290702.pdf" },
            { day: "30", pdf: "/misc/karyasuchi/300702.pdf" },
            { day: "31", pdf: "/misc/karyasuchi/310702.pdf" }
          ]
        },
        {
          month: "अगस्त",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010802.pdf" },
            { day: "2", pdf: "/misc/karyasuchi/020802.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050802.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/060802.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070802.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080802.pdf" },
            { day: "9", pdf: "/misc/karyasuchi/090802.pdf" }
          ]
        }
      ]
    },
    {
      number: "द्वादश",
      name: "नवम्बर, 2002",
      months: [
        {
          month: "नवम्बर",
          dates: [
            { day: "7", pdf: "/misc/karyasuchi/071102.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/081102.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/111102.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/121102.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/131102.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/141102.pdf" },
            { day: "15", pdf: "/misc/karyasuchi/151102.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/201102.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/211102.pdf" },
            { day: "22", pdf: "/misc/karyasuchi/221102.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/251102.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/261102.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/271102.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/281102.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/291102.pdf" }
          ]
        }
      ]
    },
    {
      number: "त्रयोदश",
      name: "फरवरी - मार्च, 2003",
      months: [
        {
          month: "फरवरी",
          dates: [
            { day: "10", pdf: "/misc/karyasuchi/100203.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110203.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130203.pdf" },
            { day: "14", pdf: "/misc/karyasuchi/140203.pdf" },
            { day: "17", pdf: "/misc/karyasuchi/170203.pdf" },
            { day: "18", pdf: "/misc/karyasuchi/180203.pdf" },
            { day: "19", pdf: "/misc/karyasuchi/190203.pdf" },
            { day: "20", pdf: "/misc/karyasuchi/200203.pdf" },
            { day: "21", pdf: "/misc/karyasuchi/210203.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240203.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/250203.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260203.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/270203.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280203.pdf" }
          ]
        },
        {
          month: "मार्च",
          dates: [
            { day: "3", pdf: "/misc/karyasuchi/030303.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040303.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050303.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/060303.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070303.pdf" },
            { day: "10", pdf: "/misc/karyasuchi/100303.pdf" },
            { day: "11", pdf: "/misc/karyasuchi/110303.pdf" },
            { day: "12", pdf: "/misc/karyasuchi/120303.pdf" },
            { day: "13", pdf: "/misc/karyasuchi/130303.pdf" },
            { day: "24", pdf: "/misc/karyasuchi/240303.pdf" },
            { day: "25", pdf: "/misc/karyasuchi/250303.pdf" },
            { day: "26", pdf: "/misc/karyasuchi/260303.pdf" },
            { day: "27", pdf: "/misc/karyasuchi/270303.pdf" },
            { day: "28", pdf: "/misc/karyasuchi/280303.pdf" }
          ]
        }
      ]
    },
    {
      number: "चतुर्दश",
      name: "जुलाई - अगस्त, 2003",
      months: [
        {
          month: "जुलाई",
          dates: [
            { day: "28", pdf: "/misc/karyasuchi/280703.pdf" },
            { day: "29", pdf: "/misc/karyasuchi/290703.pdf" },
            { day: "30", pdf: "/misc/karyasuchi/300703.pdf" },
            { day: "31", pdf: "/misc/karyasuchi/310703.pdf" }
          ]
        },
        {
          month: "अगस्त",
          dates: [
            { day: "1", pdf: "/misc/karyasuchi/010803.pdf" },
            { day: "4", pdf: "/misc/karyasuchi/040803.pdf" },
            { day: "5", pdf: "/misc/karyasuchi/050803.pdf" },
            { day: "6", pdf: "/misc/karyasuchi/060803.pdf" },
            { day: "7", pdf: "/misc/karyasuchi/070803.pdf" },
            { day: "8", pdf: "/misc/karyasuchi/080803.pdf" }
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
एकादश विधान सभा (1998–2003)</p>
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
 

export default DainikKaryasuchi11;
