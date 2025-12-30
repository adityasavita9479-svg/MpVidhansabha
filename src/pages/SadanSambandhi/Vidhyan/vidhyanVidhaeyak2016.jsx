import React from "react";
import { useNavigate } from "react-router-dom";

const VidhaeyakTable2016 = () => {
  const navigate = useNavigate();

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f1f5f9",
      fontFamily: "'Noto Sans Devanagari', sans-serif",
    },
    headerBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "linear-gradient(90deg, #1e3a8a, #3b82f6)",
      color: "#fff",
      padding: "15px 30px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      position: "sticky",
      top: 0,
      zIndex: 10,
    },
    backButton: {
      backgroundColor: "#fff",
      color: "#1e3a8a",
      border: "none",
      padding: "8px 16px",
      borderRadius: "8px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    },
    headerTitle: {
      fontSize: "1.8rem",
      fontWeight: "700",
      flex: 1,
      textAlign: "center",
    },
    container: {
      maxWidth: "1200px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "16px",
    },
    sessionHeading: {
      textAlign: "center",
      fontSize: "1.4rem",
      fontWeight: "600",
      background: "linear-gradient(90deg, #3b82f6, #1e40af)",
      color: "#fff",
      borderRadius: "10px",
      padding: "10px",
      margin: "40px 0 20px",
    },
    tableContainer: { overflowX: "auto" },
    table: { width: "100%", borderCollapse: "collapse" },
    th: {
      backgroundColor: "#1e3a8a",
      color: "#fff",
      padding: "12px",
      textAlign: "center",
    },
    td: {
      padding: "10px",
      textAlign: "center",
      borderBottom: "1px solid #e2e8f0",
    },
    billLink: { color: "#1d4ed8", textDecoration: "underline", fontWeight: 600 },
    actLink: { color: "#2563eb", textDecoration: "underline", fontWeight: 500 },
  };

  const bills2016 = [
    {
      session: "फरवरी-अप्रैल, 2016 सत्र (चतुर्दश विधानसभा का दशम सत्र)",
      data: [
        {
          no: 1,
          title: "मध्यप्रदेश विनियोग विधेयक, 2016",
          member: "श्री जयंत मलैया, वित्त मंत्री",
          department: "वित्त विभाग",
          introDate: "14/03/2016",
          discussionDate: "14/03/2016",
          governorDate: "22/03/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 10 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20No-1.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2010%20of%202015.pdf",
        },
        {
          no: 2,
          title: "मध्यप्रदेश विनियोग (क्रमांक-2) विधेयक, 2016",
          member: "श्री जयंत मलैया, वित्त मंत्री",
          department: "वित्त विभाग",
          introDate: "17/03/2016",
          discussionDate: "18/03/2016",
          governorDate: "30/03/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 11 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20No-2.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2011%20of%202015.pdf",
        },
        {
          no: 3,
          title: "भारतीय स्टाम्प (मध्यप्रदेश संशोधन) विधेयक, 2016",
          member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
          department: "वाणिज्यिक कर",
          introDate: "17/03/2016",
          discussionDate: "30/03/2016",
          governorDate: "-",
          presidentDate: "21/09/2017",
          actNo: "अधिनियम क्रमांक 30 सन् 2017",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20No-3%20.pdf",
          
        },
        {
          no: 4,
          title: "मध्यप्रदेश वृत्ति कर (संशोधन) विधेयक, 2016",
          member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
          department: "वाणिज्यिक कर",
          introDate: "17/03/2016",
          discussionDate: "30/03/2016",
          governorDate: "05/04/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 13 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20No-4.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No.%2013%20of%202016.pdf",
        },
        {
          no: 5,
          title: "मध्यप्रदेश वेट (संशोधन) विधेयक, 2016",
          member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
          department: "वाणिज्यिक कर",
          introDate: "17/03/2016",
          discussionDate: "30/03/2016",
          governorDate: "05/04/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 14 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20No-5.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No.14%20of%202016.pdf",
        },
        {
          no: 6,
          title: "मध्यप्रदेश उपकर (संशोधन) विधेयक, 2016",
          member: "श्री जयंत मलैया, वित्त मंत्री",
          department: "वित्त",
          introDate: "30/03/2016",
          discussionDate: "31/03/2016",
          governorDate: "05/04/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 12 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20No-6.pdf ",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2012%20of%202015.pdf",
        },
        {
          no: 7,
          title: "मध्यप्रदेश नगरपालिक विधि (संशोधन) विधेयक, 2016",
          member: "श्री लाल सिंह आर्य, राज्य मंत्री सामान्य प्रशासन",
          department: "नगरीय विकास एवं प्रशासन",
          introDate: "31/03/2016",
          discussionDate: "01/04/2016",
          governorDate: "27/04/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 20 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20No-7.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2020%20of%202016.pdf",
        },
        {
          no: 8,
          title:
            "मध्यप्रदेश विधानसभा सदस्य वेतन, भत्ता तथा पेंशन (संशोधन) विधेयक, 2016",
          member: "डॉ. नरोत्तम मिश्रा, संसदीय कार्य मंत्री",
          department: "संसदीय कार्य",
          introDate: "31/03/2016",
          discussionDate: "01/04/2016",
          governorDate: "21/04/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 15 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20No-8.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2015%20of%202016.pdf",
        },
        {
          no: 9,
          title:
            "मध्यप्रदेश विधानसभा अध्यक्ष तथा उपाध्यक्ष एवं नेता प्रतिपक्ष वेतन तथा भत्ता विधि (संशोधन) विधेयक, 2016",
          member: "डॉ. नरोत्तम मिश्रा, संसदीय कार्य मंत्री",
          department: "संसदीय कार्य",
          introDate: "31/03/2016",
          discussionDate: "01/04/2016",
          governorDate: "21/04/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 16 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20No-9.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2016%20of%202016.pdf",
        },
        {
          no: 10,
          title: "मध्यप्रदेश मंत्री (वेतन तथा भत्ता) संशोधन विधेयक, 2016",
          member: "श्री लाल सिंह आर्य, राज्य मंत्री सामान्य प्रशासन",
          department: "सामान्य प्रशासन",
          introDate: "31/03/2016",
          discussionDate: "01/04/2016",
          governorDate: "21/04/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 17 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20No-10.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2017%20of%202016.pdf",
        },
        {
          no: 11,
          title: "मध्यप्रदेश विनियोग अधिनियम (निरसन) विधेयक, 2016",
          member: "सुश्री कुसुम सिंह महदेले, विधि और विधायी कार्य मंत्री",
          department: "विधि और विधायी कार्य",
          introDate: "01/04/2016",
          discussionDate: "01/04/2016",
          governorDate: "23/04/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 18 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20No-11.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2018%20of%202016.pdf",
        },
        {
          no: 12,
          title: "मध्यप्रदेश निरसन विधेयक, 2016",
          member: "सुश्री कुसुम सिंह महदेले, विधि और विधायी कार्य मंत्री",
          department: "विधि और विधायी कार्य",
          introDate: "01/04/2016",
          discussionDate: "01/04/2016",
          governorDate: "23/04/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 19 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20No-12.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2019%20of%202016.pdf",
        },
      ],
    },

    {
      session: "जुलाई-अगस्त, 2016 सत्र (चतुर्दश विधानसभा का एकादश सत्र)",
      data: [
        {
          no: 13,
          title:
            "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) संशोधन विधेयक, 2016",
          member: "श्री जयभान सिंह पवैया, उच्‍च शिक्षा मंत्री",
          department: "उच्‍च शिक्षा विभाग",
          introDate: "20/07/2016",
          discussionDate: "26/07/2016",
          governorDate: "26/08/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 23 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20no%2013.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2023%20of%202016.pdf",
        },
        {
          no: 14,
          title:
            "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) द्वितीय संशोधन विधेयक, 2016",
          member: "श्री जयभान सिंह पवैया, उच्‍च शिक्षा मंत्री",
          department: "उच्‍च शिक्षा विभाग",
          introDate: "20/07/2016",
          discussionDate: "26/07/2016",
          governorDate: "26/08/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 24 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20no%2014.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2024%20of%202016.pdf",
        },
        {
          no: 15,
          title:
            "मध्‍यप्रदेश स्‍थानीय क्षेत्र में माल के प्रवेश पर कर (संशोधन) विधेयक, 2016",
          member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
          department: "वाणिज्यिक कर विभाग",
          introDate: "22/07/2016",
          discussionDate: "25/07/2016",
          governorDate: "20/08/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 22 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20no%2015.pdf",
          
        },
        {
          no: 16,
          title:
            "मध्‍यप्रदेश पंचायतराज एवं ग्राम स्‍वराज (संशोधन) विधेयक, 2016",
          member: "श्री गोपाल भार्गव, पंचायत मंत्री",
          department: "पंचायत एवं ग्रामीण विकास",
          introDate: "22/07/2016",
          discussionDate: "26/07/2016",
          governorDate: "06/09/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 29 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20no%2016.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2029%20of%202016.pdf",
        },
        {
          no: 17,
          title: "मध्‍यप्रदेश विनियोग (क्रमांक-3) विधेयक, 2016",
          member: "श्री जयंत मलैया, वित्‍त मंत्री",
          department: "वित्त",
          introDate: "20/07/2016",
          discussionDate: "25/07/2016",
          governorDate: "09/08/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 21 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20no%2017.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2021%20of%202016.pdf",
        },
        {
          no: 18,
          title:
            "मध्‍यप्रदेश सहकारी सोसाइटी (संशोधन) विधेयक, 2016",
          member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
          department: "सहकारिता",
          introDate: "26/07/2016",
          discussionDate: "29/07/2016",
          governorDate: "06/09/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 25 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20no%2018.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2025%20of%202016.pdf",
        },
        {
          no: 19,
          title: "मध्‍यप्रदेश विनियोग (क्रमांक-4) विधेयक, 2016",
          member: "",
          department: "वित्त",
          introDate: "28/07/2016",
          discussionDate: "28/07/2016",
          governorDate: "06/09/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 26 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20no%2019.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2026%20of%202016.pdf",
        },
        {
          no: 20,
          title: "मध्‍यप्रदेश विनियोग (क्रमांक-5) विधेयक, 2016",
          member: "श्री जयंत मलैया, वित्‍त मंत्री",
          department: "वित्त",
          introDate: "28/07/2016",
          discussionDate: "28/07/2016",
          governorDate: "06/09/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 27 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20no%2020.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/AcT%20No%2027%20of%202016.pdf",
        },
        {
          no: 21,
          title: "पंडित एस. एन. शुक्‍ला विश्‍वविद्यालय विधेयक, 2016",
          member: "श्री जयभान सिंह पवैया, उच्‍च शिक्षा मंत्री",
          department: "उच्‍च शिक्षा",
          introDate: "27/07/2016",
          discussionDate: "28/07/2016",
          governorDate: "06/09/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 28 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20no%2021.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2028%20of%202016.pdf",
        },
        {
          no: 22,
          title:
            "मध्‍यप्रदेश नगरपालिक विधि (द्वितीय संशोधन) विधेयक, 2016",
          member: "श्रीमती माया सिंह, नगरीय विकास एवं आवास मंत्री",
          department: "नगरीय विकास एवं आवास",
          introDate: "28/07/2016",
          discussionDate: "29/07/2016",
          governorDate: "18/12/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 31 सन् 2016",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20no%2022.pdf",
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No.%2031%20of%202016.pdf",
        },
        {
          no: 23,
          title:
            "मध्‍यप्रदेश भूमिस्‍वामी एवं बटाईदार के हितों का संरक्षण विधेयक, 2016",
          member: "श्री उमाशंकर गुप्ता, राजस्‍व मंत्री",
          department: "राजस्‍व",
          introDate: "28/07/2016",
          discussionDate: "29/07/2016",
          governorDate: "-",
          presidentDate: "30/04/2018",
          actNo: "अधिनियम क्रमांक 13 सन् 2018",
          pdf: "https://mpvidhansabha.nic.in/bill_2016/Bill%20no%2023.pdf",
          actPdf: "https://mpvidhansabha.nic.in/Bill%202018/ACT%20No%2013%20of%202018.pdf",
        },
      ],
    },

    {
      session: "दिसम्बर, 2016 सत्र (चतुर्दश विधानसभा का द्वादश सत्र)",
      data: [
        {
          no: 24,
          title:
            "मध्‍यप्रदेश माध्‍यस्‍थम् अधिकरण (संशोधन) विधेयक, 2016",
          member: "श्री रामपाल सिंह, विधि और विधायी कार्य मंत्री",
          department: "विधि और विधायी कार्य",
          introDate: "06/12/2016",
          discussionDate: "07/12/2016",
          governorDate: "14/01/2017",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 7 सन् 2017",
         
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No.%207%20of%202017.pdf",
        },
        {
          no: 25,
          title:
            "मध्‍यप्रदेश नगर तथा ग्राम निवेश (संशोधन तथा विधिमान्‍यकरण) विधेयक, 2016",
          member: "श्रीमती माया सिंह, नगरीय विकास एवं आवास मंत्री",
          department: "नगरीय विकास एवं आवास",
          introDate: "06/12/2016",
          discussionDate: "07/12/2016",
          governorDate: "08/01/2017",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 2 सन् 2017",
         
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No.%202%20of%202017.pdf",
        },
        {
          no: 26,
          title:
            "मध्‍यप्रदेश नगरपालिक विधि (तृतीय संशोधन) विधेयक, 2016",
          member: "श्रीमती माया सिंह, नगरीय विकास एवं आवास मंत्री",
          department: "नगरीय विकास एवं आवास",
          introDate: "06/12/2016",
          discussionDate: "07/12/2016",
          governorDate: "08/01/2017",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 3 सन् 2017",
         
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20N.%203%20of%202017.pdf",
        },
        {
          no: 27,
          title:
            "मध्‍यप्रदेश आयुर्वेदिक, यूनानी तथा प्राकृतिक चिकित्‍सा व्‍यवसायी (संशोधन) विधेयक, 2016",
          member: "श्री रुस्‍तम सिंह, लोक स्‍वास्‍थ्‍य परिवार कल्‍याण मंत्री",
          department: "आयुष",
          introDate: "08/12/2016",
          discussionDate: "09/12/2016",
          governorDate: "08/01/2017",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 4 सन् 2017",
         
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No.%204%20of%202017.pdf",
        },
        {
          no: 28,
          title: "मध्‍यप्रदेश आयुर्विज्ञान परिषद् (संशोधन) विधेयक, 2016",
          member: "श्री शरद जैन, राज्‍य मंत्री",
          department: "चिकित्‍सा शिक्षा",
          introDate: "08/12/2016",
          discussionDate: "09/12/2016",
          governorDate: "24/01/2017",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 8 सन् 2017",
         
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/2017/ACT%20No%208%20of%202017.pdf",
        },
        {
          no: 29,
          title:
            "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) तृतीय संशोधन विधेयक, 2016",
          member: "श्री जयभान सिंह पवैया, उच्‍च शिक्षा मंत्री",
          department: "उच्‍च शिक्षा",
          introDate: "08/12/2016",
          discussionDate: "09/12/2016",
          governorDate: "08/01/2017",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 5 सन् 2017",
          
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No.%205%20of%202017.pdf",
        },
        {
          no: 30,
          title: "मध्‍यप्रदेश विनियोग (क्रमांक-6) विधेयक, 2016",
          member: "श्री जयंत मलैया, वित्‍त मंत्री",
          department: "वित्‍त",
          introDate: "08/12/2016",
          discussionDate: "08/12/2016",
          governorDate: "18/12/2016",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 30 सन् 2016",
          
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%2030%20of%202016.pdf",
        },
        {
          no: 31,
          title: "मध्‍यप्रदेश उपकर (द्वितीय संशोधन) विधेयक, 2016",
          member: "श्री जयंत मलैया, वित्‍त मंत्री",
          department: "वित्‍त",
          introDate: "08/12/2016",
          discussionDate: "09/12/2016",
          governorDate: "08/01/2017",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 6 सन् 2017",
          
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No.%206%20of%202017.pdf",
        },
        {
          no: 32,
          title: "मध्‍यप्रदेश मोटरयान कराधान (संशोधन) विधेयक, 2016",
          member: "श्री भूपेन्‍द्र सिंह, परिवहन मंत्री",
          department: "परिवहन",
          introDate: "08/12/2016",
          discussionDate: "09/12/2016",
          governorDate: "08/01/2017",
          presidentDate: "-",
          actNo: "अधिनियम क्रमांक 1 सन् 2017",
         
          actPdf: "https://mpvidhansabha.nic.in/bill_2016/ACT%20No%201%20of%202017.pdf",
        },
      ],
    },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.headerBar}>
        <button style={styles.backButton} onClick={() => navigate("/vidheyak/bill")}>
          ← Back
        </button>
        <h1 style={styles.headerTitle}>विधेयक विवरण — वर्ष 2016</h1>
      </header>

      <div style={styles.container}>
        {bills2016.map((session, sIdx) => (
          <section key={sIdx}>
            <h2 style={styles.sessionHeading}>{session.session}</h2>

            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>क्र.</th>
                    <th style={styles.th}>विधेयक एवं भारसाधक सदस्‍य</th>
                    <th style={styles.th}>विभाग</th>
                    <th style={styles.th}>पुरस्‍थापन</th>
                    <th style={styles.th}>चर्चा एवं पारण</th>
                    <th style={styles.th}>राज्यपाल</th>
                    <th style={styles.th}>राष्ट्रपति</th>
                    <th style={styles.th}>अधिनियम</th>
                  </tr>
                </thead>

                <tbody>
                  {session.data.map((bill, index) => (
                    <tr key={index}>
                      <td style={styles.td}>{bill.no}</td>

                      <td style={styles.td}>
                        <a
                          href={bill.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.billLink}
                        >
                          {bill.title}
                        </a>
                        <br />
                        <span style={{ color: "#475569" }}>({bill.member})</span>
                      </td>

                      <td style={styles.td}>{bill.department}</td>
                      <td style={styles.td}>{bill.introDate}</td>
                      <td style={styles.td}>{bill.discussionDate}</td>
                      <td style={styles.td}>{bill.governorDate}</td>
                      <td style={styles.td}>{bill.presidentDate}</td>

                      <td style={styles.td}>
                        <a
                          href={bill.actPdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.actLink}
                        >
                          {bill.actNo}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default VidhaeyakTable2016;
