import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SanksheptKaryaVivran2013 = () => {
  const navigate = useNavigate();

const data = [
  {
    number: "प्रथम सत्र",
    name: "जनवरी, 2009",
    months: [
      {
        month: "जनवरी",
        dates: [
          { day: "5", pdf: "https://mpvidhansabha.nic.in/sanshipt/s050109.pdf" },
          { day: "6", pdf: "https://mpvidhansabha.nic.in/sanshipt/s060109.pdf" },
          { day: "7", pdf: "https://mpvidhansabha.nic.in/sanshipt/s070109.pdf" },
          { day: "9", pdf: null },
          { day: "12", pdf: "https://mpvidhansabha.nic.in/sanshipt/s120109.pdf" },
          { day: "13", pdf: "https://mpvidhansabha.nic.in/sanshipt/s130109.pdf" },
        ],
      },
    ],
  },
  {
    number: "द्वितीय सत्र",
    name: "मार्च, 2009",
    months: [
      {
        month: "मार्च",
        dates: [
          { day: "16", pdf: "https://mpvidhansabha.nic.in/sanshipt/s160309.pdf" },
          { day: "17", pdf: "https://mpvidhansabha.nic.in/sanshipt/s170309.pdf" },
          { day: "18", pdf: "https://mpvidhansabha.nic.in/sanshipt/s180309.pdf" },
          { day: "19", pdf: "" },
          { day: "20", pdf: "" },
        ],
      },
    ],
  },
  {
    number: "तृतीय सत्र",
    name: "जुलाई-अगस्त, 2009",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "6", pdf: "https://mpvidhansabha.nic.in/sanshipt/s060709.pdf" },
          { day: "7", pdf: "https://mpvidhansabha.nic.in/sanshipt/s070709.pdf" },
          { day: "8", pdf: "https://mpvidhansabha.nic.in/sanshipt/s080709.pdf" },
          { day: "9", pdf: "https://mpvidhansabha.nic.in/sanshipt/s090709.pdf" },
          { day: "10", pdf: "https://mpvidhansabha.nic.in/sanshipt/s100709.pdf" },
          { day: "13", pdf: "https://mpvidhansabha.nic.in/sanshipt/s130709.pdf" },
          { day: "14", pdf: "https://mpvidhansabha.nic.in/sanshipt/s140709.pdf" },
          { day: "15", pdf: "https://mpvidhansabha.nic.in/sanshipt/s150709.pdf" },
          { day: "16", pdf: "https://mpvidhansabha.nic.in/sanshipt/s160709.pdf" },
          { day: "17", pdf: "https://mpvidhansabha.nic.in/sanshipt/s170709.pdf" },
          { day: "20", pdf: "https://mpvidhansabha.nic.in/sanshipt/s200709.pdf" },
          { day: "21", pdf: "https://mpvidhansabha.nic.in/sanshipt/s200709.pdf" },
          { day: "22", pdf: "https://mpvidhansabha.nic.in/sanshipt/s220709.pdf" },
          { day: "23", pdf: "https://mpvidhansabha.nic.in/sanshipt/s230709.pdf" },
          { day: "24", pdf: "https://mpvidhansabha.nic.in/sanshipt/s240709.pdf" },
          { day: "27", pdf: "https://mpvidhansabha.nic.in/sanshipt/s270709.pdf" },
          { day: "28", pdf: "https://mpvidhansabha.nic.in/sanshipt/s280709.pdf" },
          { day: "29", pdf: "" },
          { day: "30", pdf: "" },
          { day: "31", pdf: "" },
        ],
      },
      {
        month: "अगस्त",
        dates: [
          { day: "3", pdf: "" },
          { day: "4", pdf: "" },
        ],
      },
    ],
  },
  {
    number: "चतुर्थ सत्र",
    name: "נवम्बर, 2009",
    months: [
      {
        month: "नवम्बर",
        dates: [
          { day: "16", pdf: "https://mpvidhansabha.nic.in/sanshipt/s161109.pdf" },
          { day: "17", pdf: "https://mpvidhansabha.nic.in/sanshipt/s171109.pdf" },
          { day: "18", pdf: "https://mpvidhansabha.nic.in/sanshipt/s181109.pdf" },
          { day: "19", pdf: "https://mpvidhansabha.nic.in/sanshipt/s191109.pdf" },
          { day: "20", pdf: "https://mpvidhansabha.nic.in/sanshipt/s201109.pdf" },
          { day: "23", pdf: "https://mpvidhansabha.nic.in/sanshipt/s231109.pdf" },
          { day: "24", pdf: "https://mpvidhansabha.nic.in/sanshipt/s241109.pdf" },
          { day: "25", pdf: "" },
          { day: "26", pdf: "" },
          { day: "27", pdf: "" },
        ],
      },
    ],
  },
  {
    number: "पंचम सत्र",
    name: "फरवरी-मार्च, 2010",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "22", pdf: "https://mpvidhansabha.nic.in/sanshipt/s220210.pdf" },
          { day: "23", pdf: "https://mpvidhansabha.nic.in/sanshipt/s230210.pdf" },
          { day: "24", pdf: "https://mpvidhansabha.nic.in/sanshipt/s240210.pdf" },
          { day: "25", pdf: "https://mpvidhansabha.nic.in/sanshipt/s250210.pdf" },
          { day: "26", pdf: "https://mpvidhansabha.nic.in/sanshipt/s260210.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "8", pdf: "https://mpvidhansabha.nic.in/sanshipt/s080310.pdf" },
          { day: "9", pdf: "https://mpvidhansabha.nic.in/sanshipt/s090310.pdf" },
          { day: "10", pdf: "https://mpvidhansabha.nic.in/sanshipt/s100310.pdf" },
          { day: "11", pdf: "https://mpvidhansabha.nic.in/sanshipt/s110310.pdf" },
          { day: "12", pdf: "https://mpvidhansabha.nic.in/sanshipt/s120310.pdf" },
          { day: "18", pdf: "https://mpvidhansabha.nic.in/sanshipt/s180310.pdf" },
          { day: "19", pdf: "https://mpvidhansabha.nic.in/sanshipt/s190310.pdf" },
          { day: "22", pdf: "https://mpvidhansabha.nic.in/sanshipt/s220310.pdf" },
          { day: "23", pdf: "https://mpvidhansabha.nic.in/sanshipt/s230310.pdf" },
          { day: "25", pdf: "https://mpvidhansabha.nic.in/sanshipt/s250310.pdf" },
          { day: "26", pdf: "https://mpvidhansabha.nic.in/sanshipt/s260310.pdf" },
        ],
      },
    ],
  },
  {
    number: "षष्टम सत्र",
    name: "मई, 2010",
    months: [
      {
        month: "मई",
        dates: [
          { day: "11", pdf: "https://mpvidhansabha.nic.in/sanshipt/s110510.pdf" },
          { day: "12", pdf: "https://mpvidhansabha.nic.in/sanshipt/s120510.pdf" },
          { day: "13", pdf: "https://mpvidhansabha.nic.in/sanshipt/s130510.pdf" },
          { day: "14", pdf: "https://mpvidhansabha.nic.in/sanshipt/s140510.pdf" },
        ],
      },
    ],
  },
  {
    number: "सप्तम सत्र",
    name: "जुलाई, 2010",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "19", pdf: "https://mpvidhansabha.nic.in/sanshipt/s190710.pdf" },
          { day: "20", pdf: "https://mpvidhansabha.nic.in/sanshipt/s200710.pdf" },
          { day: "21", pdf: "https://mpvidhansabha.nic.in/sanshipt/s210710.pdf" },
          { day: "22", pdf: "https://mpvidhansabha.nic.in/sanshipt/s220710.pdf" },
          { day: "23", pdf: "https://mpvidhansabha.nic.in/sanshipt/s230710.pdf" },
          { day: "26", pdf: "https://mpvidhansabha.nic.in/sanshipt/s260710.pdf" },
          { day: "27", pdf: "https://mpvidhansabha.nic.in/sanshipt/s270710.pdf" },
          { day: "28", pdf: "https://mpvidhansabha.nic.in/sanshipt/s280710.pdf" },
          { day: "29", pdf: "https://mpvidhansabha.nic.in/sanshipt/s290710.pdf" },
          { day: "30", pdf: "https://mpvidhansabha.nic.in/sanshipt/s300710.pdf" },
        ],
      },
    ],
  },
  {
    number: "अष्टम सत्र",
    name: "नवम्बर, 2010",
    months: [
      {
        month: "नवम्बर",
        dates: [
          { day: "22", pdf: "https://mpvidhansabha.nic.in/sanshipt/s221110.pdf" },
          { day: "23", pdf: "https://mpvidhansabha.nic.in/sanshipt/s231110.pdf" },
          { day: "24", pdf: "https://mpvidhansabha.nic.in/sanshipt/s241110.pdf" },
          { day: "25", pdf: "https://mpvidhansabha.nic.in/sanshipt/s251110.pdf" },
          { day: "26", pdf: "" },
        ],
      },
    ],
  },
  {
    number: "नवम् सत्र",
    name: "फरवरी-अप्रैल, 2011",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "21", pdf: "https://mpvidhansabha.nic.in/sanshipt/s210211.pdf" },
          { day: "22", pdf: "https://mpvidhansabha.nic.in/sanshipt/s220211.pdf" },
          { day: "23", pdf: "https://mpvidhansabha.nic.in/sanshipt/s230211.pdf" },
          { day: "24", pdf: "https://mpvidhansabha.nic.in/sanshipt/s240211.pdf" },
          { day: "25", pdf: "https://mpvidhansabha.nic.in/sanshipt/s250211.pdf" },
          { day: "28", pdf: "https://mpvidhansabha.nic.in/sanshipt/s280211.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "1", pdf: "https://mpvidhansabha.nic.in/sanshipt/s010311.pdf" },
          { day: "3", pdf: "https://mpvidhansabha.nic.in/sanshipt/s030311.pdf" },
          { day: "4", pdf: "https://mpvidhansabha.nic.in/sanshipt/s040311.pdf" },
          { day: "7", pdf: "https://mpvidhansabha.nic.in/sanshipt/s070311.pdf" },
          { day: "8", pdf: "https://mpvidhansabha.nic.in/sanshipt/s080311.pdf" },
          { day: "9", pdf: "https://mpvidhansabha.nic.in/sanshipt/s090311.pdf" },
          { day: "10", pdf: "https://mpvidhansabha.nic.in/sanshipt/s100311.pdf" },
          { day: "11", pdf: "https://mpvidhansabha.nic.in/sanshipt/s110311.pdf" },
          { day: "14", pdf: "https://mpvidhansabha.nic.in/sanshipt/s140311.pdf" },
          { day: "15", pdf: "https://mpvidhansabha.nic.in/sanshipt/s150311.pdf" },
          { day: "16", pdf: "https://mpvidhansabha.nic.in/sanshipt/s160311.pdf" },
          { day: "17", pdf: "https://mpvidhansabha.nic.in/sanshipt/s170311.pdf" },
          { day: "18", pdf: "https://mpvidhansabha.nic.in/sanshipt/s180311.pdf" },
          { day: "28", pdf: "https://mpvidhansabha.nic.in/sanshipt/s280311.pdf" },
          { day: "29", pdf: "https://mpvidhansabha.nic.in/sanshipt/s290311.pdf" },
          { day: "30", pdf: "https://mpvidhansabha.nic.in/sanshipt/s300311.pdf" },
          { day: "31", pdf: "https://mpvidhansabha.nic.in/sanshipt/s310311.pdf" },
        ],
      },
      {
        month: "अप्रैल",
        dates: [
          { day: "1", pdf: "https://mpvidhansabha.nic.in/sanshipt/s010411.pdf" },
          { day: "6", pdf: "" },
          { day: "7", pdf: "" },
          { day: "8", pdf: "" },
        ],
      },
    ],
  },
  {
    number: "दशम् सत्र",
    name: "जुलाई, 2011",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "11", pdf: "https://mpvidhansabha.nic.in/sanshipt/s110711.pdf" },
          { day: "12", pdf: "https://mpvidhansabha.nic.in/sanshipt/s120711.pdf" },
          { day: "13", pdf: "https://mpvidhansabha.nic.in/sanshipt/s130711.pdf" },
          { day: "14", pdf: "https://mpvidhansabha.nic.in/sanshipt/s140711.pdf" },
          { day: "15", pdf: "" },
          { day: "18", pdf: "https://mpvidhansabha.nic.in/sanshipt/s180711.pdf" },
          { day: "19", pdf: "https://mpvidhansabha.nic.in/sanshipt/s190711.pdf" },
          { day: "20", pdf: "https://mpvidhansabha.nic.in/sanshipt/s200711.pdf" },
          { day: "21", pdf: "https://mpvidhansabha.nic.in/sanshipt/s210711.pdf" },
          { day: "22", pdf: "https://mpvidhansabha.nic.in/sanshipt/s220711.pdf" },
        ],
      },
    ],
  },
  {
    number: "एकादश सत्र",
    name: "नवम्बर-दिसम्बर, 2011",
    months: [
      {
        month: "नवम्बर",
        dates: [
          { day: "21", pdf: "https://mpvidhansabha.nic.in/sanshipt/s211111.pdf" },
          { day: "22", pdf: "https://mpvidhansabha.nic.in/sanshipt/s221111.pdf" },
          { day: "23", pdf: "https://mpvidhansabha.nic.in/sanshipt/s231111.pdf" },
          { day: "24", pdf: "https://mpvidhansabha.nic.in/sanshipt/s241111.pdf" },
          { day: "25", pdf: "https://mpvidhansabha.nic.in/sanshipt/s251111.pdf" },
          { day: "28", pdf: "https://mpvidhansabha.nic.in/sanshipt/s281111.pdf" },
          { day: "29", pdf: "https://mpvidhansabha.nic.in/sanshipt/s291111.pdf" },
          { day: "30", pdf: "https://mpvidhansabha.nic.in/sanshipt/s301111.pdf" },
        ],
      },
      {
        month: "दिसम्बर",
        dates: [
          { day: "1", pdf: "https://mpvidhansabha.nic.in/sanshipt/s011211.pdf" },
          { day: "2", pdf: "https://mpvidhansabha.nic.in/sanshipt/s021211.pdf" },
        ],
      },
    ],
  },
  {
    number: "द्वादश सत्र",
    name: "फरवरी-अप्रैल, 2012",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "21", pdf: "https://mpvidhansabha.nic.in/sanshipt/s210212.pdf" },
          { day: "22", pdf: "https://mpvidhansabha.nic.in/sanshipt/s220212.pdf" },
          { day: "23", pdf: "https://mpvidhansabha.nic.in/sanshipt/s230212.pdf" },
          { day: "24", pdf: "https://mpvidhansabha.nic.in/sanshipt/s240212.pdf" },
          { day: "27", pdf: "https://mpvidhansabha.nic.in/sanshipt/s270212.pdf" },
          { day: "28", pdf: "https://mpvidhansabha.nic.in/sanshipt/s280212.pdf" },
          { day: "29", pdf: "https://mpvidhansabha.nic.in/sanshipt/s290212.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "1", pdf: "https://mpvidhansabha.nic.in/sanshipt/s010312.pdf" },
          { day: "2", pdf: "https://mpvidhansabha.nic.in/sanshipt/s020312.pdf" },
          { day: "13", pdf: "https://mpvidhansabha.nic.in/sanshipt/s130312.pdf" },
          { day: "14", pdf: "https://mpvidhansabha.nic.in/sanshipt/s140312.pdf" },
          { day: "15", pdf: "https://mpvidhansabha.nic.in/sanshipt/s150312.pdf" },
          { day: "16", pdf: "https://mpvidhansabha.nic.in/sanshipt/s160312.pdf" },
          { day: "19", pdf: "https://mpvidhansabha.nic.in/sanshipt/s190312.pdf" },
          { day: "20", pdf: "https://mpvidhansabha.nic.in/sanshipt/s200312.pdf" },
          { day: "21", pdf: "https://mpvidhansabha.nic.in/sanshipt/s210312.pdf" },
          { day: "22", pdf: "https://mpvidhansabha.nic.in/sanshipt/s220312.pdf" },
          { day: "26", pdf: "https://mpvidhansabha.nic.in/sanshipt/s260312.pdf" },
          { day: "27", pdf: "https://mpvidhansabha.nic.in/sanshipt/s270312.pdf" },
          { day: "28", pdf: "https://mpvidhansabha.nic.in/sanshipt/s280312.pdf" },
          { day: "29", pdf: "https://mpvidhansabha.nic.in/sanshipt/s290312.pdf" },
          { day: "30", pdf: "https://mpvidhansabha.nic.in/sanshipt/s300312.pdf" },
        ],
      },
    ],
  },
  {
    number: "त्रयोदश सत्र",
    name: "जुलाई, 2012",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "16", pdf: "https://mpvidhansabha.nic.in/sanshipt/s160712.pdf" },
          { day: "17", pdf: "https://mpvidhansabha.nic.in/sanshipt/s170712.pdf" },
          { day: "18", pdf: "https://mpvidhansabha.nic.in/sanshipt/s180712.pdf" },
          { day: "19", pdf: "" },
          { day: "20", pdf: "" },
          { day: "23", pdf: "" },
          { day: "24", pdf: "" },
          { day: "25", pdf: "" },
          { day: "26", pdf: "" },
          { day: "27", pdf: "" },
        ],
      },
    ],
  },
  {
    number: "चतुर्दश सत्र",
    name: "जुलाई, 2012",
    months: [
      {
        month: "जुलाई",
        dates: [{ day: "27", pdf: "https://mpvidhansabha.nic.in/sanshipt/s270712.pdf" }],
      },
    ],
  },
  {
    number: "पंचदश सत्र",
    name: "दिसम्बर, 2012",
    months: [
      {
        month: "दिसम्बर",
        dates: [
          { day: "4", pdf: "https://mpvidhansabha.nic.in/sanshipt/s041212.pdf" },
          { day: "5", pdf: "https://mpvidhansabha.nic.in/sanshipt/s051212.pdf" },
          { day: "6", pdf: "https://mpvidhansabha.nic.in/sanshipt/s061212.pdf" },
          { day: "7", pdf: "https://mpvidhansabha.nic.in/sanshipt/s071212.pdf" },
          { day: "10", pdf: "https://mpvidhansabha.nic.in/sanshipt/s101212.pdf" },
          { day: "11", pdf: "https://mpvidhansabha.nic.in/sanshipt/s111212.pdf" },
          { day: "12", pdf: "https://mpvidhansabha.nic.in/sanshipt/s121212.pdf" },
          { day: "13", pdf: "https://mpvidhansabha.nic.in/sanshipt/s131212.pdf" },
          { day: "14", pdf: "https://mpvidhansabha.nic.in/sanshipt/s141212.pdf" },
        ],
      },
    ],
  },
  {
    number: "षोडश सत्र",
    name: "फरवरी-मार्च, 2013",
    months: [
      {
        month: "फरवरी",
        dates: [
          { day: "18", pdf: "https://mpvidhansabha.nic.in/sanshipt/s180213.pdf" },
          { day: "19", pdf: "https://mpvidhansabha.nic.in/sanshipt/s190213.pdf" },
          { day: "20", pdf: "https://mpvidhansabha.nic.in/sanshipt/s200213.pdf" },
          { day: "21", pdf: "https://mpvidhansabha.nic.in/sanshipt/s210213.pdf" },
          { day: "22", pdf: "https://mpvidhansabha.nic.in/sanshipt/s220213.pdf" },
          { day: "26", pdf: "https://mpvidhansabha.nic.in/sanshipt/s260213.pdf" },
          { day: "27", pdf: "https://mpvidhansabha.nic.in/sanshipt/s270213.pdf" },
          { day: "28", pdf: "https://mpvidhansabha.nic.in/sanshipt/s280213.pdf" },
        ],
      },
      {
        month: "मार्च",
        dates: [
          { day: "1", pdf: "" },
          { day: "4", pdf: "https://mpvidhansabha.nic.in/sanshipt/s040313.pdf" },
          { day: "5", pdf: "https://mpvidhansabha.nic.in/sanshipt/s050313.pdf" },
          { day: "6", pdf: "https://mpvidhansabha.nic.in/sanshipt/s060313.pdf" },
          { day: "7", pdf: "https://mpvidhansabha.nic.in/sanshipt/s070313.pdf" },
          { day: "8", pdf: "https://mpvidhansabha.nic.in/sanshipt/s080313.pdf" },
          { day: "11", pdf: "" },
          { day: "12", pdf: "https://mpvidhansabha.nic.in/sanshipt/s120313.pdf" },
          { day: "13", pdf: "https://mpvidhansabha.nic.in/sanshipt/s130313.pdf" },
          { day: "14", pdf: "https://mpvidhansabha.nic.in/sanshipt/s140313.pdf" },
          { day: "15", pdf: "https://mpvidhansabha.nic.in/sanshipt/s150313.pdf" },
          { day: "18", pdf: "https://mpvidhansabha.nic.in/sanshipt/s180313.pdf" },
          { day: "19", pdf: "https://mpvidhansabha.nic.in/sanshipt/s190313.pdf" },
          { day: "20", pdf: "" },
          { day: "21", pdf: "" },
          { day: "22", pdf: "" },
        ],
      },
    ],
  },
  {
    number: "सप्तदश सत्र",
    name: "जुलाई, 2013",
    months: [
      {
        month: "जुलाई",
        dates: [
          { day: "8", pdf: "https://mpvidhansabha.nic.in/sanshipt/s080713.pdf" },
          { day: "9", pdf: "https://mpvidhansabha.nic.in/sanshipt/s090713.pdf" },
          { day: "10", pdf: "https://mpvidhansabha.nic.in/sanshipt/s100713.pdf" },
          { day: "11", pdf: "https://mpvidhansabha.nic.in/sanshipt/s110713.pdf" },
          { day: "12", pdf: "" },
          { day: "15", pdf: "" },
          { day: "16", pdf: "" },
          { day: "17", pdf: "" },
          { day: "18", pdf: "" },
          { day: "19", pdf: "" },
        ],
      },
    ],
  },
];



  const assemblies = [
   
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
      top: "20px",
      backgroundColor: "#fff",
      color: "#1d4ed8",
      border: "1px solid #1d4ed8",
      padding: "6px 14px",
      borderRadius: "8px",
      fontSize: "0.95rem",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    title: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    subTitle: {
      fontSize: "1.1rem",
      marginTop: "5px",
      opacity: 0.9,
    },
    calendarFlex: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "25px",
    },
    sessionCard: {
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      padding: "20px",
      width: "340px",
    },
    sessionTitleLine: {
      fontSize: "1.2rem",
      color: "#1e3a8a",
      fontWeight: 700,
      textAlign: "center",
      marginBottom: "12px",
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
    dateFlex: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "8px",
    },
    dateLink: {
      backgroundColor: "#eff6ff",
      borderRadius: "6px",
      padding: "8px 6px",
      minWidth: "50px",
      textAlign: "center",
      fontWeight: 600,
      color: "#1e40af",
      border: "1px solid #bfdbfe",
      transition: "all 0.2s ease",
      textDecoration: "none",
      lineHeight: 1.1,
      display: "inline-block",
    },
    // assembliesDivider: {
    //   width: "100%",
    //   height: "2px",
    //   background: "linear-gradient(to right, transparent, #2563eb, transparent)",
    //   margin: "50px 0 25px",
    // },
    smallGrid: {
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
      color: "#1e293b",
      textDecoration: "none",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
    },
  };

 return (
   <div style={styles.page}>
     {/* 🔵 UPDATED HERO SECTION USING YOUR GLOBAL CSS */}
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
                 navigate("/home");
               }
             }}
           >
             पीछे जाये
           </button>
 
           {/* Center Text */}
           <div className="panch-hero-text">
             <h1>संक्षिप्त कार्य विवरण</h1>
             <p>त्रयोदश विधान सभा (2008-2013)</p>
           </div>
 
         </div>
       </div>
     </div>
 
     {/* 🔵 YOUR CALENDAR CODE (UNTOUCHED) */}
     <div style={styles.calendarFlex}>
       {data.map((session, idx) => (
         <div key={idx} style={styles.sessionCard}>
           <div style={styles.sessionTitleLine}>
             {session.number} ({session.name})
           </div>
 
           {session.months.map((m, i) => (
             <div key={i} style={styles.monthBlock}>
               <div style={styles.monthTitle}>{m.month}</div>
               <div style={styles.dateFlex}>
                 {m.dates.map((d, j) =>
                   d.pdf ? (
                     <a
                       key={j}
                       href={d.pdf}
                       target="_blank"
                       rel="noopener noreferrer"
                       style={styles.dateLink}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.backgroundColor = "#2563eb";
                         e.currentTarget.style.color = "#fff";
                         e.currentTarget.style.transform = "scale(1.05)";
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.backgroundColor = "#eff6ff";
                         e.currentTarget.style.color = "#1e40af";
                         e.currentTarget.style.transform = "none";
                       }}
                     >
                       {d.day}
                     </a>
                   ) : (
                     <span
                       key={j}
                       style={{
                         ...styles.dateLink,
                         backgroundColor: "#f1f5f9",
                         color: "#94a3b8",
                         border: "1px solid #e2e8f0",
                         cursor: "not-allowed",
                       }}
                     >
                       {d.day}
                     </span>
                   )
                 )}
               </div>
             </div>
           ))}
         </div>
       ))}
     </div>
 
     {/* Divider + Other Assemblies */}
     <div style={styles.assembliesDivider}></div>
     <div style={styles.smallGrid}>
       {assemblies.map((a, i) => (
         <Link
           key={i}
           to={a.route}
           style={styles.assemblyCard}
           onMouseEnter={(e) => {
             e.currentTarget.style.backgroundColor = "#2563eb";
             e.currentTarget.style.color = "#fff";
             e.currentTarget.style.transform = "translateY(-3px)";
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.backgroundColor = "#e2e8f0";
             e.currentTarget.style.color = "#1e293b";
             e.currentTarget.style.transform = "none";
           }}
         >
           {a.title}
         </Link>
       ))}
     </div>
   </div>
 );
 };
export default SanksheptKaryaVivran2013;