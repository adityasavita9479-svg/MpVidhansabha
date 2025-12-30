import React from "react";
import { useNavigate } from "react-router-dom";

const VidhaeyakTable2015 = () => {
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
    container: { maxWidth: "1200px", margin: "40px auto", padding: "20px", backgroundColor: "#fff", borderRadius: "16px" },
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
    th: { backgroundColor: "#1e3a8a", color: "#fff", padding: "12px", textAlign: "center" },
    td: { padding: "10px", textAlign: "center", borderBottom: "1px solid #e2e8f0" },
    billLink: { color: "#1d4ed8", textDecoration: "underline", fontWeight: 600 },
    actLink: { color: "#2563eb", textDecoration: "underline", fontWeight: 500 },
  };

  const bills2015 = [
  // फरवरी-मार्च, 2015 सत्र (चतुर्दश विधान सभा का पंचम सत्र)
  {
    session: "फरवरी-मार्च, 2015 सत्र (चतुर्दश विधान सभा का पंचम सत्र)",
    data: [
      {
        no: 1,
        title: "मध्‍यप्रदेश सहकारी सोसाइटी (संशोधन) विधेयक, 2015 (क्रमांक 1 सन् 2015)",
        member: "श्री गोपाल भार्गव, सहकारिता मंत्री",
        department: "सहकारिता विभाग",
        introDate: "26/02/2015",
        discussionDate: "26/02/2015",
        governorDate: "09/04/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 10 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/list%20pdf/bill%20No%201%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%2010%20of%202015.pdf"

      },
      {
        no: 2,
        title: "मध्‍यप्रदेश नगरपालिक विधि (संशोधन) विधेयक, 2015 (क्रमांक 2 सन् 2014)",
        member: "श्री कैलाश विजयवर्गीय, नगरीय प्रशासन एवं पर्यावरण मंत्री",
        department: "नगरीय प्रशासन एवं पर्यावरण",
        introDate: "26/02/2015",
        discussionDate: "26/02/2015",
        governorDate: "15/04/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 11 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/list%20pdf/Bill%20No%202%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%2011%20of%202015.pdf"

      },
      {
        no: 3,
        title: "मध्‍यप्रदेश विनियोग विधेयक, 2015 (क्रमांक 3 सन् 2014)",
        member: "श्री जयंत मलैया, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "26/02/2015",
        discussionDate: "26/02/2015",
        governorDate: "16/03/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 8 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/list%20pdf/Bill%20no%203%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%208%20of%202015.pdf"

      },
    ],
  },

  // मार्च, 2015 सत्र (चतुर्दश विधान सभा का षष्‍ठम् सत्र)
  {
    session: "मार्च, 2015 सत्र (चतुर्दश विधान सभा का षष्‍ठम् सत्र)",
    data: [
      {
        no: 4,
        title: "मध्‍यप्रदेश अधोसंरचना विनिधान निधि बोर्ड (संशोधन) विधेयक, 2015 (क्रमांक 4 सन् 2014)",
        member: "श्री जयंत मलैया, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "21/07/2015",
        discussionDate: "22/07/2015",
        governorDate: "14/08/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 16 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%204%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%2016%20of%202015.pdf"

      },
      {
        no: 5,
        title: "मध्‍यप्रदेश तंग करने वाली मुकदमेबाजी (निवारण) विधेयक, 2015 (क्रमांक 5 सन् 2014)",
        member: "सुश्री कुसुम सिंह महदेले, विधि और विधायी कार्य मंत्री",
        department: "विधि और विधायी कार्य",
        introDate: "21/07/2015",
        discussionDate: "22/07/2015",
        governorDate: "26/08/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 18 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%205%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%2018%20of%202015.pdf"
      },
      {
        no: 6,
        title: "मध्‍यप्रदेश औद्योगिक सुरक्षा बल विधेयक, 2015 (क्रमांक 6 सन् 2014)",
        member: "श्री बाबूलाल गौर, गृह मंत्री",
        department: "गृह",
        introDate: "21/07/2015",
        discussionDate: "22/07/2015",
        governorDate: "24/08/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 19 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%206%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%2019%20of%202015.pdf"
      },
      {
        no: 7,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-2) विधेयक, 2015 (क्रमांक 7 सन् 2014)",
        member: "श्री जयंत मलैया, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "24/03/2015",
        discussionDate: "24/03/2015",
        governorDate: "28/03/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 9 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/Bill%20No%207%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%209%20of%202015.pdf"
      },
    ],
  },

  // जुलाई, 2015 सत्र (चतुर्दश विधान सभा का सप्‍तम् सत्र)
  {
    session: "जुलाई, 2015 सत्र (चतुर्दश विधान सभा का सप्‍तम् सत्र)",
    data: [
      {
        no: 8,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-3) विधेयक, 2015 (क्रमांक 8 सन् 2014)",
        member: "श्री जयंत मलैया, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "22/07/2015",
        discussionDate: "22/07/2015",
        governorDate: "01/08/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 13 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%208%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%2013%20of%202015.pdf"
      },
      {
        no: 9,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-4) विधेयक, 2015 (क्रमांक 9 सन् 2014)",
        member: "श्री जयंत मलैया, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "22/07/2015",
        discussionDate: "22/07/2015",
        governorDate: "01/08/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 14 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%209%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%2014%20of%202015.pdf"
      },
      {
        no: 10,
        title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) संशोधन विधेयक, 2015 (क्रमांक 10 सन् 2014)",
        member: "श्री उमाशंकर गुप्ता, उच्‍च शिक्षा मंत्री",
        department: "उच्‍च शिक्षा",
        introDate: "22/07/2015",
        discussionDate: "22/07/2015",
        governorDate: "14/08/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 17 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%2010%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%2017%20of%202015.pdf"
      },
      {
        no: 11,
        title: "मध्‍यप्रदेश श्रम विधियां (संशोधन) और प्रकीर्ण उपबंध विधेयक, 2015 (क्रमांक 11 सन् 2014)",
        member: "श्री अंतर सिंह आर्य, श्रम मंत्री",
        department: "श्रम",
        introDate: "22/07/2015",
        discussionDate: "22/07/2015",
        governorDate: "-------------",
        presidentDate: "07/11/2015",
        actNo: "अधिनियम क्रमांक 21 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%2011%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%2021%20of%202015.pdf"
      },
      {
        no: 12,
        title: "मध्‍यप्रदेश वेट (संशोधन) विधेयक, 2015 (क्रमांक 12 सन् 2014)",
        member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
        department: "वाणिज्यिक कर",
        introDate: "22/07/2015",
        discussionDate: "22/07/2015",
        governorDate: "04/08/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 15 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%2012%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%2015%20of%202015.pdf"
      },
    ],
  },

  // नवम्बर, 2015 सत्र (अष्‍टम् सत्र)
  {
    session: "नवम्बर, 2015 सत्र (चतुर्दश विधान सभा का अष्‍टम् सत्र)",
    data: [
      {
        no: 13,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-5) विधेयक, 2015 (क्रमांक 13 सन् 2015)",
        member: "श्री जयंत मलैया, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "05/11/2015",
        discussionDate: "05/11/2015",
        governorDate: "07/11/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 20 सन् 2015",
        pdf: "#",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%2020%20of%202015.pdf"
      },
    ],
  },

  // दिसम्बर, 2015 सत्र (नवम् सत्र)
  {
    session: "दिसम्बर, 2015 सत्र (चतुर्दश विधान सभा का नवम् सत्र)",
    data: [
      {
        no: 14,
        title: "मध्‍यप्रदेश कृषि-उपज मण्‍डी (संशोधन) विधेयक, 2015",
        member: "श्री गौरीशंकर बिसेन, किसान कल्‍याण तथा कृषि विकास मंत्री",
        department: "किसान कल्‍याण तथा कृषि विकास",
        introDate: "07/12/2015",
        discussionDate: "09/12/2015",
        governorDate: "12/01/2016",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 07 सन् 2016",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%2014%20of%202015%20.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No.%2007%20of%202016.pdf"
      },
      {
        no: 15,
        title: "मध्‍यप्रदेश भू-राजस्‍व संहिता (संशोधन) विधेयक, 2015",
        member: "श्री रामपाल सिंह, राजस्‍व मंत्री",
        department: "राजस्‍व",
        introDate: "07/12/2015",
        discussionDate: "09/12/2015",
        governorDate: "31/12/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 23 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20no%2015%20of%202015%20.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No.%2023%20of%202015.pdf"
      },
      {
        no: 16,
        title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) द्वितीय संशोधन विधेयक, 2015",
        member: "श्री उमाशंकर गुप्ता, उच्‍च शिक्षा मंत्री",
        department: "उच्‍च शिक्षा",
        introDate: "07/12/2015",
        discussionDate: "09/12/2015",
        governorDate: "01/01/2016",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 01 सन् 2016",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20no%2016%20of%20.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No.01%20of%202016.pdf"
      },
      {
        no: 17,
        title: "मध्‍यप्रदेश मोटरयान कराधान (संशोधन) विधेयक, 2015",
        member: "श्री भूपेन्द्र सिंह, परिवहन मंत्री",
        department: "परिवहन",
        introDate: "07/12/2015",
        discussionDate: "14/12/2015",
        governorDate: "12/01/2016",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 03 सन् 2016",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20no.%2017%20of%202015%20.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No.%2003%20of%202016.pdf"
      },
      {
        no: 18,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-6) विधेयक, 2015",
        member: "श्री जयंत मलैया, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "10/12/2015",
        discussionDate: "10/12/2015",
        governorDate: "28/12/2015",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 22 सन् 2015",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%2018%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No.%2022%20of%202015.pdf"
      },
      {
        no: 19,
        title: "मध्‍यप्रदेश आयुर्विज्ञान परिषद (संशोधन) विधेयक, 2015",
        member: "डॉ. नरोत्तम मिश्र, चिकित्सा शिक्षा मंत्री",
        department: "चिकित्सा शिक्षा",
        introDate: "14/12/2015",
        discussionDate: "15/12/2015",
        governorDate: "12/01/2016",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 09 सन् 2016",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%2019%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No.%2009%20of%202016.pdf"
      },
      {
        no: 20,
        title: "डॉ. बी.आर. अम्बेडकर सामाजिक विज्ञान विश्वविद्यालय विधेयक, 2015",
        member: "श्री उमाशंकर गुप्ता, उच्‍च शिक्षा मंत्री",
        department: "उच्‍च शिक्षा",
        introDate: "14/12/2015",
        discussionDate: "16/12/2015",
        governorDate: "11/01/2016",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 02 सन् 2016",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%2020%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/2016AcT%20No%2002%20of.pdf"
      },
      {
        no: 21,
        title: "मध्‍यप्रदेश वेट (द्वितीय संशोधन) विधेयक, 2015",
        member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
        department: "वाणिज्यिक कर",
        introDate: "14/12/2015",
        discussionDate: "16/12/2015",
        governorDate: "12/01/2016",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 04 सन् 2016",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%2021%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/2016AcT%20No%2004%20of.pdf"
      },
      {
        no: 22,
        title: "मध्‍यप्रदेश वृत्ति कर (संशोधन) विधेयक, 2015",
        member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
        department: "वाणिज्यिक कर",
        introDate: "14/12/2015",
        discussionDate: "16/12/2015",
        governorDate: "12/01/2016",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 05 सन् 2016",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%2022%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No.%2005%20of%202016.pdf"
      },
      {
        no: 23,
        title: "भारतीय स्‍टाम्प (मध्‍यप्रदेश संशोधन) विधेयक, 2015",
        member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
        department: "वाणिज्यिक कर",
        introDate: "14/12/2015",
        discussionDate: "16/12/2015",
        governorDate: "12/01/2016",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 06 सन् 2016",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%2023%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No%2006%20of%202016.pdf"
      },
      {
        no: 24,
        title: "मध्‍यप्रदेश राजकोषीय उत्तरदायित्व एवं बजट प्रबंधन (संशोधन) विधेयक, 2015",
        member: "श्री जयंत मलैया, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "14/12/2015",
        discussionDate: "16/12/2015",
        governorDate: "12/01/2016",
        presidentDate: "-------------",
        actNo: "अधिनियम क्रमांक 08 सन् 2016",
        pdf: "https://mpvidhansabha.nic.in/Act%202014/bill%20No%2024%20of%202015.pdf",
        actPdf: "https://mpvidhansabha.nic.in/Act%202014/ACT%20No.08%20of%202016.pdf"
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
        <h1 style={styles.headerTitle}>विधेयक विवरण — वर्ष 2015</h1>
      </header>

      <div style={styles.container}>
        {bills2015.map((session, sIdx) => (
          <div key={sIdx}>
            <h2 style={styles.sessionHeading}>{session.session}</h2>
            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>क्र.</th>
                    <th style={styles.th}>विधेयक एवं भारसाधक सदस्‍य</th>
                    <th style={styles.th}>विभाग</th>
                    <th style={styles.th}>पुर:स्‍थापन</th>
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
                        <a href={bill.pdf} target="_blank" rel="noopener noreferrer" style={styles.actLink}>
                          {bill.actNo}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VidhaeyakTable2015;