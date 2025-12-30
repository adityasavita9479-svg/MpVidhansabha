import React from "react";
import { useNavigate } from "react-router-dom";

const VidhaeyakTable2017 = () => {
  const navigate = useNavigate();

  const styles = {
    page: { minHeight: "100vh", backgroundColor: "#f1f5f9", fontFamily: "'Noto Sans Devanagari', sans-serif" },
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
    headerTitle: { fontSize: "1.8rem", fontWeight: "700", flex: 1, textAlign: "center" },
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



  const bills2017 = [
  {
    session: "Feb-Apr, 2017 (13th Session of 14th Vidhan Sabha)",
    data: [
      {
        no: 1,
        title: "मध्‍यप्रदेश नगरीय क्षेत्रों के भूमिहीन व्‍यक्ति (पट्टाधृति अधिकारों का प्रदान किया जाना) संशोधन विधेयक, 2017",
        member: "श्रीमती माया सिंह, मंत्री, नगरीय विकास एवं आवास",
        department: "नगरीय विकास एवं आवास",
        introDate: "23/02/2017",
        discussionDate: "24/03/2017",
        governorDate: "12/04/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 12 सन् 2017",
        pdf: "/misc/BILL2017/Bill%20no%201.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%2012%20of%202017.pdf"
      },
      {
        no: 2,
        title: "मध्‍यप्रदेश वेट संशोधन (विधिमान्‍यकरण) विधेयक, 2017",
        member: "श्री जयंत मलैया,  मंत्री, वाणिज्यिक कर",
        department: "वाणिज्यिक कर",
        introDate: "21/03/2017",
        discussionDate: "24/03/2017",
        governorDate: "24/04/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 15 सन् 2017",
        pdf: "/misc/BILL2017/Bill%20no.%202.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%2015%20of%202017.pdf"
      },
      {
        no: 3,
        title: "मध्‍यप्रदेश विधान मण्‍डल सदस्‍य निरर्हता निवारण (संशोधन) विधेयक, 2017",
        member: "डॉ. नरोत्‍तम मिश्र, मंत्री, संसदीय कार्य",
        department: "संसदीय कार्य",
        introDate: "21/03/2017",
        discussionDate: "24/03/2017",
        governorDate: "24/04/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 17 सन् 2017",
        pdf: "/misc/BILL2017/Bill%20no.%203.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%2017%20of%202017.pdf"
      },
      {
        no: 4,
        title: "मध्‍यप्रदेश विनियोग विधेयक, 2017",
        member: "श्री जयंत मलैया, मंत्री, वित्‍त",
        department: "वित्‍त",
        introDate: "22/03/2017",
        discussionDate: "22/03/2017",
        governorDate: "23/03/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 09 सन् 2017",
        pdf: "/misc/BILL2017/Bill%20no.%204.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%209%20of%202017.pdf"
      },
      {
        no: 5,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-2) विधेयक, 2017",
        member: "श्री जयंत मलैया, मंत्री, वित्‍त",
        department: "वित्‍त",
        introDate: "23/03/2017",
        discussionDate: "24/03/2017",
        governorDate: "29/03/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 10 सन् 2017",
        pdf: "/misc/BILL2017/Bill%20no.%205.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%2010%20of%202017.pdf"
      },
      {
        no: 6,
        title: "मध्‍यप्रदेश आर्थिक रूप से कमजोर वर्ग तथा निम्‍न आय वर्ग को आवास गारंटी विधेयक, 2017",
        member: "श्रीमती माया सिंह, मंत्री, नगरीय विकास एवं आवास",
        department: "नगरीय विकास एवं आवास",
        introDate: "23/03/2017",
        discussionDate: "24/03/2017",
        governorDate: "12/04/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 13 सन् 2017",
        pdf: "/misc/BILL2017/Bill%20no.%206.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%2013%20of%202017.pdf"
      },
      {
        no: 7,
        title: "मध्‍यप्रदेश राजकोषीय उत्‍तरदायित्‍व एवं बजट प्रबंधन विधेयक, 2017",
        member: "श्री जयंत मलैया,  मंत्री, वित्‍त",
        department: "वित्‍त",
        introDate: "23/03/2017",
        discussionDate: "24/03/2017",
        governorDate: "29/03/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 11 सन् 2017",
        pdf: "/misc/BILL2017/Bill%20no.%207.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%2011%20of%202017.pdf"
      },
      {
        no: 8,
        title: "मध्‍यप्रदेश आदिम जनजातियों का संरक्षण (वृक्षों में हित) संशोधन विधेयक, 2017",
        member: "श्री लालसिंह आर्य, मंत्री, सामान्‍य प्रशासन",
        department: "आदिम जाति कल्‍याण",
        introDate: "23/03/2017",
        discussionDate: "24/03/2017",
        governorDate: "26/05/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 18 सन् 2017",
        pdf: "/misc/BILL2017/Bill%20no.%208.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%2018%20of%202017.pdf"
      },
      {
        no: 9,
        title: "मध्‍यप्रदेश नगर तथा ग्राम निवेश (संशोधन) विधेयक, 2017",
        member: "श्रीमती माया सिंह, मंत्री, नगरीय विकास एवं आवास",
        department: "नगरीय विकास एवं आवास",
        introDate: "23/03/2017",
        discussionDate: "24/03/2017",
        governorDate: "12/04/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 14 सन् 2017",
        pdf: "/misc/BILL2017/Bill%20no.%209.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%2014%20of%202017.pdf"
      },
      {
        no: 10,
        title: "मध्‍यप्रदेश वेट (संशोधन) विधेयक, 2017",
        member: "श्री जयंत मलैया,  मंत्री, वाणिज्यिक कर",
        department: "वाणिज्यिक कर",
        introDate: "24/03/2017",
        discussionDate: "24/03/2017",
        governorDate: "24/04/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 16 सन् 2017",
        pdf: "/misc/BILL2017/Bill%20no.%2010.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%2019%20of%202017.pdf"
      },
      {
        no: 11,
        title: "मध्‍यप्रदेश माल और सेवा कर विधेयक, 2017",
        member: "वाणिज्यिक कर",
        department: "वाणिज्यिक कर",
        introDate: "03/05/2017",
        discussionDate: "03/05/2017",
        governorDate: "09/06/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 19 सन् 2017",
        
        actPdf: "/misc/BILL2017/ACT%20No%2012%20of%202017.pdf"
      }
    ]
  },

  {
    session: "July, 2017 (14th Session of 14th Vidhan Sabha)",
    data: [
      {
        no: 12,
        title: "मध्‍यप्रदेश ग्रामों में की दखलरहित भूमि (विशेष उपबंध) संशोधन विधेयक, 2017",
        member: "श्री उमाशंकर गुप्‍ता, राजस्‍व मंत्री",
        department: "राजस्‍व",
        introDate: "19/07/2017",
        discussionDate: "20/07/2017",
        governorDate: "29/08/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 28 सन् 2017",
        
        actPdf: "/misc/BILL2017/ACT%20No%2028%20of%202017.pdf"

      },
      {
        no: 13,
        title: "मध्‍यप्रदेश जैव अनाश्‍य अपशिष्‍ट (नियंत्रण) संशोधन विधेयक, 2017",
        member: "श्री अंतरसिंह आर्य, पर्याटन मंत्री",
        department: "पर्याटन",
        introDate: "19/07/2017",
        discussionDate: "20/07/2017",
        governorDate: "22/08/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 26 सन् 2017",
        actPdf: "/misc/BILL2017/ACT%20No%2026%20of%202017.pdf"
      },
      {
        no: 14,
        title: "मध्‍यप्रदेश वासस्‍थान दखलकार(भूमिस्‍वामी अधिकारों का प्रदान किया जाना) संशोधन विधेयक, 2017",
        member: "श्री उमाशंकर गुप्‍ता, राजस्‍व मंत्री",
        department: "राजस्‍व",
        introDate: "19/07/2017",
        discussionDate: "20/07/2017",
        governorDate: "29/08/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 29 सन् 2017",
        actPdf: "/misc/BILL2017/ACT%20No%2029%20of%202017.pdf"
      },
      {
        no: 15,
        title: "मध्‍यप्रदेश करों की पुरानी बकाया राशि का समाधान विधेयक, 2017",
        member: "श्री जयंत मलैया, वाणिज्यिक करमंत्री",
        department: "वाणिज्यिक कर",
        introDate: "24/07/2017",
        discussionDate: "26/07/2017",
        governorDate: "18/08/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 21 सन् 2017",
        actPdf: "/misc/BILL2017/ACT%20No%2021%20of%202017.pdf"
      },
      {
        no: 16,
        title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) संशोधन विधेयक, 2017",
        member: "श्री जयभान सिंह पवैया, उच्‍च शिक्षा मंत्री",
        department: "उच्‍च शिक्षा",
        introDate: "24/07/2017",
        discussionDate: "26/07/2017",
        governorDate: "18/08/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 25 सन् 2017",
        actPdf: "/misc/BILL2017/ACT%20No%2025%20of%202017.pdf"
      },
      {
        no: 17,
        title: "मध्‍यप्रदेश मंत्री (वेतन तथा भत्‍ता) संशोधन विधेयक, 2017",
        member: "श्री लाल सिंह आर्य, राज्‍य मंत्री, सामान्‍य प्रशासन",
        department: "सामान्‍य प्रशासन",
        introDate: "24/07/2017",
        discussionDate: "26/07/2017",
        governorDate: "18/08/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 23 सन् 2017",
        actPdf: "/misc/BILL2017/ACT%20No%2023%20of%202017.pdf"
      },
      {
        no: 18,
        title: "मध्‍यप्रदेश सहूकार (संशोधन) विधेयक, 2017",
        member: "श्री शैलेन्‍द्र पटेल, मान.सदस्‍य, अशासकीय विधेयक",
        department: "राजस्‍व",
        introDate: "01/12/2017",
        discussionDate: "",
        governorDate: "",
        presidentDate: "",
        actNo: "सदन द्वारा पुर:स्‍थापन की अनुमति नहीं दी गई",
        pdf: "/misc/BILL2017/ACT%20No%2023%20of%202017.pdf"
      },
      {
        no: 19,
        title: "मध्‍यप्रदेश राज्‍य वित्‍त आयोग (संशोधन) विधेयक, 2017",
        member: "श्री जयंत मलैया, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "24/07/2017",
        discussionDate: "26/07/2017",
        governorDate: "18/08/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 24 सन् 2017",
        actPdf: "/misc/BILL2017/ACT%20No%2024%20of%202017.pdf"
      },
      {
        no: 20,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-3) विधेयक, 2017",
        member: "श्री जयंत मलैया, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "25/07/2017",
        discussionDate: "25/07/2017",
        governorDate: "03/08/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 20 सन् 2017",
        actPdf: "/misc/BILL2017/ACT%20No%2020%20of%202017.pdf"
      },
      {
        no: 21,
        title: "भारतीय स्‍टाम्‍प (मध्‍यप्रदेश संशोधन) विधेयक, 2017",
        member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
        department: "वाणिज्यिक कर",
        introDate: "24/07/2017",
        discussionDate: "26/07/2017",
        governorDate: "18/08/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 22 सन् 2017",
        actPdf: "/misc/BILL2017/ACT%20No%2022%20of%202017.pdf"
      },
      {
        no: 22,
        title: "मध्‍यप्रदेश सहकारी सोसाइटी (संशोधन) विधेयक, 2017",
        member: "श्री विश्‍वास सारंग, राज्‍य मंत्री सहकारिता",
        department: "सहकारिता",
        introDate: "26/07/2017",
        discussionDate: "28/11/2017",
        governorDate: "",
        presidentDate: "",
        actNo: "विधेयक वापस लिया गया",
        
      },
      {
        no: 23,
        title: "न्यायालय फीस (मध्‍यप्रदेश संशोधन) विधेयक, 2017",
        member: "श्री रामपाल सिंह, विधि और विधायी कार्य मंत्री",
        department: "विधि और विधायी कार्य",
        introDate: "25/07/2017",
        discussionDate: "26/07/2017",
        governorDate: "29/08/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 27 सन् 2017",
        actPdf: "/misc/BILL2017/ACT%20No%2027%20of%202017.pdf"
      }
    ]
  },

  {
    session: "Nov-Dec, 2017 (15th Session of 14th Vidhan Sabha)",
    data: [
      {
        no: 24,
        title: "मध्‍यप्रदेश सहकारी सोसाइटी (संशोधन) विधेयक, 2017",
        member: "श्री विश्‍वास सारंग, राज्‍य मंत्री सहकारिता",
        department: "सहकारिता",
        introDate: "30/11/2017",
        discussionDate: "04/12/2017",
        governorDate: "04/01/2018",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 1 सन् 2018",
        pdf: "/misc/BILL2017/Bill%20No.%2024.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%201%20of%202018.pdf"

      },
      {
        no: 25,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-4) विधेयक, 2017",
        member: "श्री जयंत मलैया, मंत्री वित्‍त",
        department: "वित्‍त",
        introDate: "30/11/2017",
        discussionDate: "30/11/2017",
        governorDate: "21/12/2017",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 31 सन् 2017",
        pdf: "/misc/BILL2017/Bill%20No.%2025.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%2031%20of%202017.pdf"

      },
      {
        no: 26,
        title: "दण्‍ड विधि (मध्‍यप्रदेश संशोधन) विधेयक, 2017",
        member: "श्री रामपाल सिंह, मंत्री विधि और विधायी कार्य",
        department: "विधि और विधायी कार्य",
        introDate: "30/11/2017",
        discussionDate: "04/12/2017",
        governorDate: "",
        presidentDate: "",
        actNo: "",
        pdf: "/misc/BILL2017/Bill%20No.%2026.pdf",
        

      },
      {
        no: 27,
        title: "मध्‍यप्रदेश निजी विद्यालय (फीस तथा संबंधित विषयों का विनियमन) विधेयक, 2017",
        member: "कुंवर विजय शाह, मंत्री स्‍कूल शिक्षा",
        department: "स्‍कूल शिक्षा",
        introDate: "30/11/2017",
        discussionDate: "04/12/2017",
        governorDate: "18/01/2018",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 6 सन् 2018",
        pdf: "/misc/BILL2017/Bill%20No.%2027.pdf",
        actPdf: "/misc/BILL2017/ACT%20no%206%20of%202018.pdf"

      },
      {
        no: 28,
        title: "मध्‍यप्रदेश नगरपालिक विधि (संशोधन) विधेयक, 2017",
        member: "श्रीमती माया‍ सिंह, मंत्री नगरीय विकास एवं आवास",
        department: "नगरीय विकास एवं आवास",
        introDate: "30/11/2017",
        discussionDate: "04/12/2017",
        governorDate: "04/01/2018",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 2 सन् 2018",
        pdf: "/misc/BILL2017/Bill%20No.%2028.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%202%20of%202018.pdf"

      },
      {
        no: 29,
        title: "मध्‍यप्रदेश सहायता उपक्रम (विशेष उपबंध) निरसन विधेयक, 2017",
        member: "श्री राजेन्‍द्र शुक्‍ल, मंत्री वाणिज्‍य, उद्योग एवं रोजगार",
        department: "वाणिज्‍य, उद्योग एवं रोजगार",
        introDate: "30/11/2017",
        discussionDate: "04/12/2017",
        governorDate: "",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 7 सन् 2018",
        pdf: "/misc/BILL2017/Bill%20No.%2029.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%207%20of%202018.pdf"


      },
      {
        no: 30,
        title: "मध्‍यप्रदेश भू-राजस्‍व संहिता (संशोधन एवं विधिमान्‍यकरण) विधेयक, 2017",
        member: "श्री उमाशंकर गुप्‍ता, मंत्री राजस्‍व",
        department: "राजस्‍व",
        introDate: "30/11/2017",
        discussionDate: "04/12/2017",
        governorDate: "04/01/2018",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 5 सन् 2018",
        pdf: "/misc/BILL2017/Bill%20No.%2030.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%205%20of%202018.pdf"

      },
      {
        no: 31,
        title: "मध्‍यप्रदेश वृत्ति कर (संशोधन) विधेयक, 2017",
        member: "श्री जयंत मलैया, मंत्री वाणिज्यिक कर",
        department: "वाणिज्यिक कर",
        introDate: "30/11/2017",
        discussionDate: "04/12/2017",
        governorDate: "04/01/2018",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 3 सन् 2018",
        pdf: "/misc/BILL2017/Bill%20No.%2031.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%203%20of%202018.pdf"

      },
      {
        no: 32,
        title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) द्वितीय संशोधन विधेयक, 2017",
        member: "श्री जयभान सिंह पवैया, मंत्री उच्‍च शिक्षा",
        department: "उच्‍च शिक्षा",
        introDate: "30/11/2017",
        discussionDate: "04/12/2017",
        governorDate: "04/01/2018",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 4 सन् 2018",
        pdf: "/misc/BILL2017/Bill%20No.%2032.pdf",
        actPdf: "/misc/BILL2017/ACT%20No%204%20of%202018.pdf"

      }
    ]
  }
];


  return (
    <div style={styles.page}>
      <header style={styles.headerBar}>
        <button style={styles.backButton} onClick={() => navigate("/vidheyak/bill")}>
          ← Back
        </button>
        <h1 style={styles.headerTitle}>विधेयक विवरण — वर्ष 2017</h1>
      </header>

      <div style={styles.container}>
        {bills2017.map((session, sIdx) => (
          <section key={sIdx}>
            <h2 style={styles.sessionHeading}>{session.session}</h2>

            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>क्र.</th>
                    <th style={styles.th}>विधेयक एवं भारसाधक सदस्य</th>
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
                        <a href={bill.pdf} target="_blank" rel="noopener noreferrer" style={styles.billLink}>
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
                        <a href={bill.actPdf} target="_blank" rel="noopener noreferrer" style={styles.actLink}>
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

export default VidhaeyakTable2017;
