import React from "react";
import { useNavigate } from "react-router-dom";

const VidhaeyakTable2024 = () => {
  const navigate = useNavigate();

  const styles = {
    page: { 
      minHeight: "100vh", 
      backgroundColor: "#f1f5f9", 
      fontFamily: "'Noto Sans Devanagari', sans-serif" 
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
      textAlign: "center" 
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
      textAlign: "center" 
    },

    td: { 
      padding: "10px", 
      textAlign: "center", 
      borderBottom: "1px solid #e2e8f0" 
    },

    billLink: { 
      color: "#1d4ed8", 
      textDecoration: "underline", 
      fontWeight: 600 
    },

    actLink: { 
      color: "#2563eb", 
      textDecoration: "underline", 
      fontWeight: 500 
    },
  };

  // ==============================
  // 2024 DATA (converted to 2023 format)
  // ==============================

  const bills2024 = [
  {
    session: "December, 2023 (1st Session of 16th Vidhan Sabha)",
    data: []
  },

  {
    session: "February, 2024 (2nd Session of 16th Vidhan Sabha)",
    data: [
      {
        no: 1,
        title: "मध्‍यप्रदेश आयुर्विज्ञान विश्‍वविद्यालय (संशोधन) विधेयक, 2024 (क्रमांक 1 सन् 2024)",
        member: "श्री राजेन्‍द्र शुक्‍ल, उपमुख्‍यमंत्री (चिकित्‍सा शिक्षा)",
        department: "चिकित्सा शिक्षा",
        introDate: "12/02/2024",
        discussionDate: "13/02/2024",
        governorDate: "07/03/2024",
        presidentDate: "",
        actNo: "ACT No.02 of 2024",
        pdf: "/misc/Bill2024/Bill%20No%201%20of%202024.pdf",
        actPdf: "/misc/Bill2024/ACT%20no%202%20of%202024.pdf"
      },

      {
        no: 2,
        title: "प्रान्‍तीय लघुवाद न्‍यायालय (निरसन) विधेयक, 2024 (क्रमांक 2 सन् 2024)",
        member: "श्री गौतम टेटवाल, राज्‍य मंत्री",
        department: "विधि और विधायी कार्य विभाग",
        introDate: "13/02/2024",
        discussionDate: "13/02/2024",
        governorDate: "06/08/2024",
        presidentDate: "",
        actNo: "ACT No.09 of 2024",
        pdf: "/misc/Bill2024/Bill%20No%202%20of%202024.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%209%20of%202024.pdf"
      },

      {
        no: 3,
        title: "मध्‍यप्रदेश माल और सेवा कर (संशोधन) विधेयक, 2024 (क्रमांक 3 सन् 2024)",
        member: "श्री जगदीश देवड़ा, उपमुख्‍यमंत्री (वाणिज्यिक कर)",
        department: "वाणिज्यिक कर",
        introDate: "12/02/2024",
        discussionDate: "13/02/2024",
        governorDate: "07/03/2024",
        presidentDate: "",
        actNo: "ACT No.03 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%203.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%203%20of%202024.pdf"
      },

      {
        no: 4,
        title: "मध्‍यप्रदेश विनियोग विधेयक, 2024 (क्रमांक 4 सन् 2024)",
        member: "श्री जगदीश देवड़ा, उपमुख्‍यमंत्री, वित्त",
        department: "वित्त",
        introDate: "09/02/2024",
        discussionDate: "09/02/2024",
        governorDate: "19/02/2024",
        presidentDate: "",
        actNo: "ACT No.01 of 2024",
        pdf: "/misc/Bill2024/Bill%20No%204%20of%202024.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%201%20of%202024.pdf"
      },

      {
        no: 5,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-2) विधेयक, 2024 (क्रमांक 5 सन् 2024)",
        member: "श्री जगदीश देवड़ा, उपमुख्‍यमंत्री, वित्त",
        department: "वित्त",
        introDate: "13/02/2024",
        discussionDate: "13/02/2024",
        governorDate: "05/06/2024",
        presidentDate: "",
        actNo: "ACT No.06 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%205.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%206%20of%202024.pdf"
      },

      {
        no: 6,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-3) विधेयक, 2024 (क्रमांक 6 सन् 2024)",
        member: "श्री जगदीश देवड़ा, उपमुख्‍यमंत्री, वित्त",
        department: "वित्त",
        introDate: "13/02/2024",
        discussionDate: "13/02/2024",
        governorDate: "05/06/2024",
        presidentDate: "",
        actNo: "ACT No.07 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%206.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%207%20of%202024.pdf"
      },

      {
        no: 7,
        title: "मध्‍यप्रदेश विनियोग (लेखानुदान) विधेयक, 2024 (क्रमांक 7 सन् 2024)",
        member: "श्री जगदीश देवड़ा, उपमुख्‍यमंत्री, वित्त",
        department: "वित्त",
        introDate: "13/02/2024",
        discussionDate: "13/02/2024",
        governorDate: "19/03/2024",
        presidentDate: "",
        actNo: "ACT No.05 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%207.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%205%20of%202024.pdf"
      },

      {
        no: 8,
        title: "मध्‍यप्रदेश विश्‍वविद्यालय (संशोधन) विधेयक, 2024 (क्रमांक 8 सन् 2024)",
        member: "श्री इंदर सिंह परमार, मंत्री",
        department: "उच्‍च शिक्षा",
        introDate: "13/02/2024",
        discussionDate: "13/02/2024",
        governorDate: "10/03/2024",
        presidentDate: "",
        actNo: "ACT No.04 of 2024",
        pdf: "/misc/Bill2024/Bill%20No%208%20of%202024.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%204%20of%202024.pdf"
      }
    ]
  },

  {
    session: "July, 2024 (3rd Session of 16th Vidhan Sabha)",
    data: [
      {
        no: 9,
        title: "मध्‍यप्रदेश नगरपालिका (संशोधन) विधेयक, 2024 (क्रमांक 9 सन् 2024)",
        member: "श्री कैलाश विजयवर्गीय, मंत्री",
        department: "नगरीय विकास एवं आवास",
        introDate: "02/07/2024",
        discussionDate: "02/07/2024",
        governorDate: "09/08/2024",
        presidentDate: "",
        actNo: "ACT No.11 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%209.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%2011%20of%202024.pdf"
      },

      {
        no: 10,
        title: "मध्‍यप्रदेश स्‍थानीय प्राधिकरण (निर्वाचन अपराध) संशोधन विधेयक, 2024 (क्रमांक 10 सन् 2024)",
        member: "श्री कैलाश विजयवर्गीय, मंत्री",
        department: "नगरीय विकास एवं आवास",
        introDate: "02/07/2024",
        discussionDate: "02/07/2024",
        governorDate: "03/09/2024",
        presidentDate: "",
        actNo: "ACT No.19 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%2010.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%2019%20of%202024.pdf"
      },

      {
        no: 11,
        title: "मध्‍यप्रदेश विश्‍वविद्यालय (द्वितीय संशोधन) विधेयक, 2024 (क्रमांक 11 सन् 2024)",
        member: "श्री इंदर सिंह परमार, मंत्री",
        department: "उच्‍च शिक्षा",
        introDate: "02/07/2024",
        discussionDate: "02/07/2024",
        governorDate: "09/08/2024",
        presidentDate: "",
        actNo: "ACT No.12 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%2011.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%2012%20of%202024.pdf"
      },

      {
        no: 12,
        title: "मध्‍यप्रदेश सुधारात्‍मक सेवाएं एवं बन्‍दीगृह विधेयक, 2024 (क्रमांक 12 सन् 2024)",
        member: "श्री नरेन्‍द्र शिवाजी पटेल, राज्‍य मंत्री",
        department: "जेल",
        introDate: "04/07/2024",
        discussionDate: "05/07/2024",
        governorDate: "06/08/2024",
        presidentDate: "",
        actNo: "ACT No.13 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%2012.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%2013%20of%202024.pdf"
      },

      {
        no: 13,
        title: "मध्‍यप्रदेश मंत्री (वेतन तथा भत्‍ता) संशोधन विधेयक, 2024 (क्रमांक 13 सन् 2024)",
        member: "श्रीमती कृष्‍णा गौर, राज्‍य मंत्री",
        department: "सामान्‍य प्रशासन",
        introDate: "04/07/2024",
        discussionDate: "05/07/2024",
        governorDate: "06/08/2024",
        presidentDate: "",
        actNo: "ACT No.10 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%2013.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%2010%20of%202024.pdf"
      },

      {
        no: 14,
        title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) संशोधन विधेयक, 2024 (क्रमांक 14 सन् 2024)",
        member: "श्री इंदर सिंह परमार, मंत्री",
        department: "उच्‍च शिक्षा",
        introDate: "04/07/2024",
        discussionDate: "05/07/2024",
        governorDate: "14/08/2024",
        presidentDate: "",
        actNo: "ACT No.18 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%2014.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%2018%20of%202024.pdf"
      },

      {
        no: 15,
        title: "मध्‍यप्रदेश गौवंश वध प्रतिषेध (संशोधन) विधेयक, 2024 (क्रमांक 15 सन् 2024)",
        member: "श्री लखन पटेल, राज्‍य मंत्री",
        department: "पशुपालन एवं डेयरी विकास",
        introDate: "04/07/2024",
        discussionDate: "05/07/2024",
        governorDate: "14/08/2024",
        presidentDate: "",
        actNo: "ACT No.14 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%2015.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%2014%20of%202024.pdf"
      },

      {
        no: 16,
        title: "मध्‍यप्रदेश माल और सेवा कर (संशोधन) विधेयक, 2024 (क्रमांक 16 सन् 2024)",
        member: "श्री जगदीश देवड़ा, उपमुख्‍यमंत्री",
        department: "वाणिज्यिक कर",
        introDate: "04/07/2024",
        discussionDate: "05/07/2024",
        governorDate: "21/08/2024",
        presidentDate: "",
        actNo: "ACT No.17 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%2016.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%2017%20of%202024.pdf"
      },

      {
        no: 17,
        title: "मध्‍यप्रदेश खुले नलकूप में इंसानों के गिरने से रोकथाम एवं सुरक्षा विधेयक, 2024 (क्रमांक 17 सन् 2024)",
        member: "श्री कैलाश विजयवर्गीय, मंत्री",
        department: "लोक स्‍वास्‍थ्‍य यांत्रिकी",
        introDate: "04/07/2024",
        discussionDate: "05/07/2024",
        governorDate: "16/08/2024",
        presidentDate: "",
        actNo: "ACT No.15 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%2017.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%2015%20of%202024.pdf"
      },

      {
        no: 18,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-4) विधेयक, 2024 (क्रमांक 18 सन् 2024)",
        member: "श्री जगदीश देवड़ा, उपमुख्‍यमंत्री",
        department: "वित्त",
        introDate: "05/07/2024",
        discussionDate: "05/07/2024",
        governorDate: "22/07/2024",
        presidentDate: "",
        actNo: "ACT No.08 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%2018.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%208%20of%202024.pdf"
      },

      {
        no: 19,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-5) विधेयक, 2024 (क्रमांक 19 सन् 2024)",
        member: "श्री जगदीश देवड़ा, उपमुख्‍यमंत्री",
        department: "वित्त",
        introDate: "05/07/2024",
        discussionDate: "05/07/2024",
        governorDate: "20/08/2024",
        presidentDate: "",
        actNo: "ACT No.16 of 2024",
        pdf: "/misc/Bill2024/Bill%20No.%2019.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%2016%20of%202024.pdf"
      }
    ]
  },

  {
    session: "December, 2024 (4th Session of 16th Vidhan Sabha)",
    data: [
      {
        no: 20,
        title: "मध्‍यप्रदेश विधान सभा अध्‍यक्ष तथा उपाध्‍यक्ष (वेतन तथा भत्‍ता) संशोधन विधेयक, 2024",
        member: "श्री कैलाश विजयवर्गीय, संसदीय कार्य मंत्री",
        department: "संसदीय कार्य",
        introDate: "16/12/2024",
        discussionDate: "19/12/2024",
        governorDate: "24/01/2025",
        presidentDate: "",
        actNo: "ACT No.05 of 2025",
        pdf: "/misc/Bill2024/Bill%20no%2020.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%205%20of%202025.pdf"
      },

      {
        no: 21,
        title: "मध्‍यप्रदेश विधान सभा नेता प्रतिपक्ष (वेतन तथा भत्‍ता) संशोधन विधेयक, 2024",
        member: "श्री कैलाश विजयवर्गीय, संसदीय कार्य मंत्री",
        department: "संसदीय कार्य",
        introDate: "16/12/2024",
        discussionDate: "19/12/2024",
        governorDate: "24/01/2025",
        presidentDate: "",
        actNo: "ACT No.06 of 2025",
        pdf: "/misc/Bill2024/Bill%20no%2021.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%206%20of%202025.pdf"
      },

      {
        no: 22,
        title: "मध्‍यप्रदेश मां शारदा देवी मंदिर (संशोधन) विधेयक, 2024",
        member: "श्री धर्मेन्‍द्र भाव सिंह लोधी, राज्‍य मंत्री",
        department: "धार्मिक न्‍यास और धर्मस्‍व",
        introDate: "16/12/2024",
        discussionDate: "17/12/2024",
        governorDate: "30/01/2025",
        presidentDate: "",
        actNo: "ACT No.08 of 2025",
        pdf: "/misc/Bill2024/Bill%20No%2022.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%208%20of%202025.pdf"
      },

      {
        no: 23,
        title: "मध्‍यप्रदेश नगरपालिक निगम (संशोधन) विधेयक, 2024",
        member: "श्री कैलाश विजयवर्गीय, नगरीय विकास एवं आवास मंत्री",
        department: "नगरीय विकास एवं आवास",
        introDate: "16/12/2024",
        discussionDate: "19/12/2024",
        governorDate: "15/01/2025",
        presidentDate: "",
        actNo: "ACT No.03 of 2025",
        pdf: "/misc/Bill2024/Bill%20no%2023.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%203%20of%202025.pdf"
      },

      {
        no: 24,
        title: "मध्‍यप्रदेश नगरपालिका (द्वितीय संशोधन) विधेयक, 2024",
        member: "श्री कैलाश विजयवर्गीय, नगरीय विकास एवं आवास मंत्री",
        department: "नगरीय विकास एवं आवास",
        introDate: "16/12/2024",
        discussionDate: "19/12/2024",
        governorDate: "15/01/2025",
        presidentDate: "",
        actNo: "ACT No.04 of 2025",
        pdf: "/misc/Bill2024/Bill%20no%2024.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%204%20of%202025.pdf"
      },

      {
        no: 25,
        title: "मध्‍यप्रदेश जन विश्‍वास (उपबंधों का संशोधन) विधेयक, 2024",
        member: "श्री दिलीप अहिरवार, राज्‍य मंत्री",
        department: "आद्योगिक नीति एवं निवेश प्रोत्‍साहन",
        introDate: "17/12/2024",
        discussionDate: "19/12/2024",
        governorDate: "06/01/2025",
        presidentDate: "",
        actNo: "ACT No.01 of 2025",
        pdf: "/misc/Bill2024/Bill%20no%2025.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%201%20of%202025.pdf"
      },

      {
        no: 26,
        title: "मध्‍यप्रदेश निजी विद्यालय (फीस तथा संबंधित विषयों का विनियमन) संशोधन विधेयक, 2024",
        member: "श्री उदय प्रताप सिंह, स्‍कूल शिक्षा मंत्री",
        department: "स्‍कूल शिक्षा",
        introDate: "17/12/2024",
        discussionDate: "19/12/2024",
        governorDate: "24/01/2025",
        presidentDate: "",
        actNo: "ACT No.07 of 2025",
        pdf: "/misc/Bill2024/Bill%20no%2026.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%207%20of%202025.pdf"
      },

      {
        no: 27,
        title: "मध्‍यप्रदेश विश्‍वविद्यालय विधि संशोधन विधेयक, 2024",
        member: "श्री इंदर सिंह परमार, उच्‍च शिक्षा मंत्री",
        department: "उच्‍च शिक्षा",
        introDate: "16/12/2024",
        discussionDate: "17/12/2024",
        governorDate: "30/01/2025",
        presidentDate: "",
        actNo: "ACT No.09 of 2025",
        pdf: "/misc/Bill2024/Bill%20no%2027.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%209%20of%202025.pdf"
      },

      {
        no: 28,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-6) विधेयक, 2024",
        member: "श्री जगदीश देवड़ा, उपमुख्‍यमंत्री वित्त",
        department: "वित्त",
        introDate: "18/12/2024",
        discussionDate: "18/12/2024",
        governorDate: "24/12/2024",
        presidentDate: "",
        actNo: "ACT No.20 of 2024",
        pdf: "/misc/Bill2024/Bill%20no%2028.pdf",
        actPdf: "/misc/Bill2024/ACT%20No%2020%20of%202024.pdf"
      },

      {
        no: 29,
        title: "मध्‍यप्रदेश माल और सेवा कर (तृतीय संशोधन) विधेयक, 2024",
        member: "श्री जगदीश देवड़ा, उपमुख्‍यमंत्री (वाणिज्यिक कर)",
        department: "वाणिज्यिक कर",
        introDate: "18/12/2024",
        discussionDate: "19/12/2024",
        governorDate: "15/01/2025",
        presidentDate: "",
        actNo: "ACT No.02 of 2025",
        pdf: "/misc/Bill2024/Bill%20no%2029.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%202%20of%202025.pdf"
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
        <h1 style={styles.headerTitle}>LEGISLATION / विधायन - 2024</h1>
      </header>

      <div style={styles.container}>
        {bills2024.map((session, sIdx) => (
          <section key={sIdx}>
            <h2 style={styles.sessionHeading}>{session.session}</h2>

            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>क्र.</th>
                    <th style={styles.th}>विधेयक एवं भारसाधक सदस्य</th>
                    <th style={styles.th}>विभाग</th>
                    <th style={styles.th}>पुर:स्‍थापन का दिनांक</th>
                    <th style={styles.th}>चर्चा एवं पारण का दिनांक</th>
                    <th style={styles.th}>राज्यपाल द्वारा अनुमति का दिनांक</th>
                    <th style={styles.th}>राष्ट्रपति द्वारा अनुमति का दिनांक</th>
                    <th style={styles.th}>अधिनियम का क्रमांक एवं वर्ष</th>
                  </tr>
                </thead>

                <tbody>
                  {session.data.map((bill, index) => (
                    <tr key={index}>
                      <td style={styles.td}>{bill.no}</td>

                      <td style={styles.td}>
                        {bill.pdf ? (
                          <a 
                            href={bill.pdf} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={styles.billLink}
                          >
                            {bill.title}
                          </a>
                        ) : (
                          <span>{bill.title}</span>
                        )}
                        <br />
                        <span style={{ color: "#475569" }}>({bill.member})</span>
                      </td>

                      <td style={styles.td}>{bill.department}</td>
                      <td style={styles.td}>{bill.introDate}</td>
                      <td style={styles.td}>{bill.discussionDate}</td>
                      <td style={styles.td}>{bill.governorDate}</td>
                      <td style={styles.td}>{bill.presidentDate}</td>

                      <td style={styles.td}>
                        {bill.actPdf ? (
                          <a 
                            href={bill.actPdf} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={styles.actLink}
                          >
                            {bill.actNo}
                          </a>
                        ) : (
                          <span>{bill.actNo}</span>
                        )}
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

export default VidhaeyakTable2024;
