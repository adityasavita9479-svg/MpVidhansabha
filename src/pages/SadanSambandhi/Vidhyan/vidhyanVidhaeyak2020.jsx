import React from "react";
import { useNavigate } from "react-router-dom";

const VidhaeyakTable2020 = () => {
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

const bills2020 = [
  {
    session: "2020 Session",
    data: [
      {
        no: 1,
        title: "मध्‍यप्रदेश कृषि उपज मण्‍डी (संशोधन) विधेयक, 2020",
        member: "श्री कमल पटेल, किसान कल्‍याण तथा कृषि विकास मंत्री",
        department: "किसान कल्‍याण तथा कृषि विकास",
        introDate: "",
        discussionDate: "",
        governorDate: "",
        presidentDate: "",
        actNo: "विधेयक की सूचना वापस",
        pdf: "/misc/Bill_2020/bill%20no%201%20of%202020.pdf"
      },
      {
        no: 2,
        title: "मध्‍यप्रदेश नगर पालिक विधि (संशोधन) विधेयक, 2020",
        member: "श्री भूपेन्‍द्र सिंह, नगरीय विकास तथा आवास मंत्री",
        department: "नगरीय विकास तथा आवास",
        introDate: "",
        discussionDate: "",
        governorDate: "",
        presidentDate: "",
        actNo: "विधेयक की सूचना वापस",
        pdf: "/misc/Bill_2020/bill%20no%202%20of%202020.pdf"
      },
      {
        no: 3,
        title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) संशोधन विधेयक, 2020",
        member: "डॉ. मोहन यादव, उच्‍च शिक्षा मंत्री",
        department: "उच्‍च शिक्षा",
        introDate: "",
        discussionDate: "",
        governorDate: "",
        presidentDate: "",
        actNo: "विधेयक की सूचना वापस",
        pdf: "/misc/Bill_2020/bill%20no%203%20of%202020.pdf"
      },
      {
        no: 4,
        title: "मध्‍यप्रदेश श्रम विधि (संशोधन) विधेयक, 2020",
        member: "श्री ब्रजेन्‍द्र प्रताप सिंह, श्रम मंत्री",
        department: "श्रम",
        introDate: "",
        discussionDate: "",
        governorDate: "",
        presidentDate: "",
        actNo: "विधेयक की सूचना वापस",
        pdf: "/misc/Bill_2020/bill%20no%204%20of%202020.pdf"
      },
      {
        no: 5,
        title: "श्रम विधि (मध्‍यप्रदेश संशोधन) विधेयक, 2020",
        member: "श्री ब्रजेन्‍द्र प्रताप सिंह, श्रम मंत्री",
        department: "श्रम",
        introDate: "",
        discussionDate: "",
        governorDate: "",
        presidentDate: "",
        actNo: "विधेयक की सूचना वापस",
        pdf: "/misc/Bill_2020/bill%20no%205%20of%202020.pdf"
      },
      {
        no: 6,
        title: "श्रम विधि (मध्‍यप्रदेश द्वितीय संशोधन) विधेयक, 2020",
        member: "श्री ब्रजेन्‍द्र प्रताप सिंह, श्रम मंत्री",
        department: "श्रम",
        introDate: "",
        discussionDate: "",
        governorDate: "",
        presidentDate: "",
        actNo: "विधेयक की सूचना वापस",
        pdf: "/misc/Bill_2020/bill%20no%206%20of%202020.pdf"
      },
      {
        no: 7,
        title: "मध्‍यप्रदेश साहूकार (संशोधन) विधेयक, 2020",
        member: "श्री गोविन्‍द सिंह राजपूत, राजस्‍व मंत्री",
        department: "राजस्‍व",
        introDate: "21/09/2020",
        discussionDate: "21/09/2020",
        governorDate: "25/09/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 16 सन् 2020",
        pdf: "/misc/Bill_2020/bill%20no%207%20of%202020.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2016%20of%202020.pdf",

      },
      {
        no: 8,
        title: "मध्‍यप्रदेश सहाकारी सोसाइटी (संशोधन) विधेयक, 2020",
        member: "डॉ. अरविन्‍द सिंह भदौरिया, सहकारिता मंत्री",
        department: "सहकारिता",
        introDate: "",
        discussionDate: "",
        governorDate: "",
        presidentDate: "",
        actNo: "विधेयक की सूचना वापस",
        pdf: "/misc/Bill_2020/bill%20no%208%20of%202020.pdf"
      },
      {
        no: 9,
        title: "मध्‍यप्रदेश लोक सेवाओं के प्रदान की गारंटी (संशोधन) विधेयक, 2020",
        member: "डॉ. अरविन्‍द सिंह भदौरिया, लोक सेवा प्रबंधन मंत्री",
        department: "लोक सेवा प्रबंधन",
        introDate: "",
        discussionDate: "",
        governorDate: "",
        presidentDate: "",
        actNo: "विधेयक की सूचना वापस",
        pdf: "/misc/Bill_2020/bill%20no%209%20of%202020.pdf"
      },
      {
        no: 10,
        title: "सिविल प्रक्रिया संहिता (मध्‍यप्रदेश संशोधन) विधेयक, 2020",
        member: "डॉ.नरोत्‍तम मिश्र, विधि और विधायी कार्य मंत्री",
        department: "विधि और विधायी कार्य",
        introDate: "24/02/2021",
        discussionDate: "01/03/2021",
        governorDate: "",
        presidentDate: "",
        actNo: "",
        pdf: "/misc/Bill_2020/bill%20no%2010%20of%202020.pdf"
      },
      {
        no: 11,
        title: "मध्‍यप्रदेश नगर पालिक विधि (द्वितीय संशोधन) विधेयक, 2020",
        member: "श्री भूपेन्‍द्र सिंह, नगरीय विकास एवं आवास मंत्री",
        department: "नगरीय विकास तथा आवास",
        introDate: "",
        discussionDate: "",
        governorDate: "",
        presidentDate: "",
        actNo: "विधेयक की सूचना वापस",
        pdf: "/misc/Bill_2020/bill%20no%2011%20of%202020.pdf",
        
      },
      {
        no: 12,
        title: "मध्‍यप्रदेश वेट (संशोधन) विधेयक, 2020",
        member: "श्री जगदीश देवड़ा, वाणिज्यिक कर मंत्री",
        department: "वाणिज्यिक कर",
        introDate: "21/09/2020",
        discussionDate: "21/09/2020",
        governorDate: "25/09/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 18 सन् 2020",
        pdf: "/misc/Bill_2020/bill%20no%2012%20of%202020.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2018%20of%202020.pdf",

      },
      {
        no: 13,
        title: "मध्‍यप्रदेश माल और सेवा कर (संशोधन) विधेयक, 2020",
        member: "श्री जगदीश देवड़ा, वाणिज्यिक कर मंत्री",
        department: "वाणिज्यिक कर",
        introDate: "21/09/2020",
        discussionDate: "21/09/2020",
        governorDate: "25/09/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 19 सन् 2020",
        pdf: "/misc/Bill_2020/bill%20no%2013%20of%202020.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2019%20of%202020.pdf",

      },
      {
        no: 14,
        title: "मध्‍यप्रदेश कराधान अधिनियमों की पुरानी बकाया राशि का समाधान विधेयक, 2020",
        member: "श्री जगदीश देवड़ा, वाणिज्यिक कर मंत्री",
        department: "वाणिज्यिक कर",
        introDate: "",
        discussionDate: "",
        governorDate: "",
        presidentDate: "",
        actNo: "विधेयक की सूचना वापस",
        pdf: "/misc/Bill_2020/bill%20no%2014%20of%202020.pdf"
      },
      {
        no: 15,
        title: "मध्‍यप्रदेश नगर पालिक विधि (तृतीय संशोधन) विधेयक, 2020",
        member: "श्री भूपेन्‍द्र सिंह, नगरीय विकास तथा आवास मंत्री",
        department: "नगरीय विकास तथा आवास",
        introDate: "21/09/2020",
        discussionDate: "21/09/2020",
        governorDate: "25/09/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 20 सन् 2020",
        pdf: "/misc/Bill_2020/bill%20no%2015%20of%202020.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2020%20of%202020.pdf",

      },
      {
        no: 16,
        title: "मध्‍यप्रदेश अनुसूचित जनजाति ऋण विमुक्ति विधेयक, 2020",
        member: "श्री गोविन्‍द सिंह राजपूत, राजस्‍व मंत्री",
        department: "राजस्‍व",
        introDate: "21/09/2020",
        discussionDate: "21/09/2020",
        governorDate: "25/09/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 17 सन् 2020",
        pdf: "/misc/Bill_2020/bill%20no%2016%20of%202020.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2017%20of%202020.pdf",

      },
      {
        no: 17,
        title: "मध्‍यप्रदेश वित्‍त विधेयक, 2020",
        member: "श्री जगदीश देवड़ा, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "21/09/2020",
        discussionDate: "21/09/2020",
        governorDate: "27/09/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 21 सन् 2020",
        pdf: "/misc/Bill_2020/bill%20no%2017%20of%202020.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2021%20of%202020.pdf",

      },
      {
        no: 18,
        title: "मध्‍यप्रदेश विनियोग विधेयक, 2020",
        member: "श्री जगदीश देवड़ा, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "21/09/2020",
        discussionDate: "21/09/2020",
        governorDate: "27/09/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 22 सन् 2020",
        pdf: "/misc/Bill_2020/bill%20no%2018%20of%202020.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2022%20of%202020.pdf",

      },
      {
        no: 19,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-2) विधेयक, 2020",
        member: "श्री जगदीश देवड़ा, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "21/09/2020",
        discussionDate: "21/09/2020",
        governorDate: "27/09/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 23 सन् 2020",
        pdf: "/misc/Bill_2020/bill%20no%2019%20of%202020.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2023%20of%202020.pdf",

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
        <h1 style={styles.headerTitle}>LEGISLATION / विधायन - 2020</h1>
      </header>

      <div style={styles.container}>
        {bills2020.map((session, sIdx) => (
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
                        {bill.pdf ? (
                          <a href={bill.pdf} target="_blank" rel="noopener noreferrer" style={styles.billLink}>
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
                          <a href={bill.actPdf} target="_blank" rel="noopener noreferrer" style={styles.actLink}>
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

export default VidhaeyakTable2020;
