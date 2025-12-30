import React from "react";
import { useNavigate } from "react-router-dom";

const VidhaeyakTable2023 = () => {
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

  const bills2023 = [
    {
      session: "March, 2023 (14th Session of 15th Vidhan Sabha)",
      data: [
        {
          no: 1,
          title: "मध्‍यप्रदेश नगरपालिक विधि (संशोधन) विधेयक, 2023 (क्रमांक 1 सन् 2023)",
          member: "श्री भूपेन्‍द्र सिंह, मंत्री",
          department: "नगरीय विकास एवं आवास",
          introDate: "13/03/2023",
          discussionDate: "21/03/2023",
          governorDate: "18/04/2023",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 14 सन् 2023",
          pdf: "/misc/Bill%202023/Bill%20No%201.pdf",
          actPdf: "/misc/Bill%202023/ACT%20No%2014%20of%202023.pdf"
        },
        {
          no: 2,
          title: "मध्‍यप्रदेश नगरीय क्षेत्रों के भूमिहीन व्‍यक्ति (पट्टाधृति अधिकारों का प्रदान किया जाना) संशोधन विधेयक, 2023 (क्रमांक 2 सन् 2023)",
          member: "श्री भूपेन्‍द्र सिंह, मंत्री",
          department: "नगरीय विकास एवं आवास",
          introDate: "13/03/2023",
          discussionDate: "21/03/2023",
          governorDate: "18/04/2023",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 15 सन् 2023",
          pdf: "/misc/Bill%202023/Bill%20No%202.pdf",
          actPdf: "/misc/Bill%202023/ACT%20No%2015%20of%202023.pdf"
        },
        {
          no: 3,
          title: "मध्‍यप्रदेश उद्योगों की स्‍थापना एवं परिचालन का सरलीकरण विधेयक, 2023 (क्रमांक 3 सन् 2023)",
          member: "श्री राजवर्धन सिंह दत्‍तीगांव, मंत्री",
          department: "औद्योगिक नीति एवं निवेश प्रोत्‍साहन",
          introDate: "13/03/2023",
          discussionDate: "21/03/2023",
          governorDate: "05/04/2023",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 13 सन् 2023",
          pdf: "/misc/Bill%202023/Bill%20No%203.pdf",
          actPdf: "/misc/Bill%202023/ACT%20No%2013%20of%20%202023.pdf"
        },
        {
          no: 4,
          title: "ग्‍वालियर व्‍यापार मेला प्राधिकरण (संशोधन) विधेयक, 2023 (क्रमांक 4 सन् 2023)",
          member: "श्री ओमप्रकाश सखलेचा, मंत्री",
          department: "सूक्ष्‍म, लघु एवं मध्‍यम उद्यम",
          introDate: "13/03/2023",
          discussionDate: "21/03/2023",
          governorDate: "21/04/2023",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 16 सन् 2023",
          pdf: "/misc/Bill%202023/Bill%20No%204.pdf",
          actPdf: "/misc/Bill%202023/ACT%20No%2016%20of%202023.pdf"
        },
        {
          no: 5,
          title: "मध्‍यप्रदेश विनियोग विधेयक, 2023 (क्रमांक 5 सन् 2023)",
          member: "श्री जगदीश देवड़ा, मंत्री",
          department: "वित्‍त",
          introDate: "16/03/2023",
          discussionDate: "16/03/2023",
          governorDate: "21/03/2023",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 11 सन् 2023",
          pdf: "/misc/Bill%202023/Bill%20No%205.pdf",
          actPdf: "/misc/Bill%202023/ACT%20No%2011%20of%202023.pdf"
        },
        {
          no: 6,
          title: "मध्‍यप्रदेश विनियोग (क्रमांक-2) विधेयक, 2023 (क्रमांक 6 सन् 2023)",
          member: "श्री जगदीश देवड़ा, मंत्री",
          department: "वित्‍त",
          introDate: "21/03/2023",
          discussionDate: "21/03/2023",
          governorDate: "31/03/2023",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 12 सन् 2023",
          pdf: "/misc/Bill%202023/Bill%20No%206.pdf",
          actPdf: "/misc/Bill%202023/ACT%20No%2012%20of%202023.pdf"
        },
      ],
    },

    {
      session: "July, 2023 (15th Session of 16th Vidhan Sabha)",
      data: [
        {
          no: 7,
          title: "सिगरेट और अन्‍य तंबाकू उत्‍पाद ... मध्‍यप्रदेश संशोधन विधेयक, 2023",
          member: "डॉ. नरोत्‍तम मिश्र, मंत्री",
          department: "गृह",
          introDate: "11/07/2023",
          discussionDate: "12/07/2023",
          governorDate: "",
          presidentDate: "17/12/2023",
          actNo: "अधिनियम क्रमांक 23 सन् 2023",
          pdf: "/misc/Bill%202023/Bill%20No.%207.pdf",
          actPdf: "/misc/Bill%202023/ACT%20No%2023%20of%202023.pdf"
        },
        {
          no: 8,
          title: "मध्‍यप्रदेश वृत्ति कर (संशोधन) विधेयक, 2023",
          member: "श्री जगदीश देवड़ा, मंत्री",
          department: "वाणिज्यिक कर",
          introDate: "12/07/2023",
          discussionDate: "12/07/2023",
          governorDate: "10/08/2023",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 20 सन् 2023",
          pdf: "/misc/Bill%202023/Bill%20No.%208.pdf",
          actPdf: "/misc/Bill%202023/ACT%20No%2020%20of%202023.pdf"
        },
        {
          no: 9,
          title: "मध्‍यप्रदेश माल और सेवा कर (संशोधन) विधेयक, 2023",
          member: "श्री जगदीश देवड़ा, मंत्री",
          department: "वाणिज्यिक कर",
          introDate: "12/07/2023",
          discussionDate: "12/07/2023",
          governorDate: "10/08/2023",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 21 सन् 2023",
          pdf: "/misc/Bill%202023/Bill%20No.%209.pdf",
          actPdf: "/misc/Bill%202023/ACT%20No%2021%20of%202023.pdf"
        },
        {
          no: 10,
          title: "मध्‍यप्रदेश निवेश संवर्धन (संशोधन) विधेयक, 2023",
          member: "श्री राजवर्धन सिंह दत्‍तीगांव, मंत्री",
          department: "औद्योगिक नीति एवं निवेश प्रोत्‍साहन",
          introDate: "12/07/2023",
          discussionDate: "12/07/2023",
          governorDate: "10/08/2023",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 22 सन् 2023",
          pdf: "/misc/Bill%202023/Bill%20No.%2010.pdf",
          actPdf: "/misc/Bill%202023/ACT%20No%2022%20of%20%202023.pdf"
        },
        {
          no: 11,
          title: "मध्‍यप्रदेश आयुर्विज्ञान विश्‍वविद्यालय (संशोधन) विधेयक, 2023",
          member: "श्री विश्‍वास सारंग, मंत्री",
          department: "चिकित्‍सा शिक्षा",
          introDate: "12/07/2023",
          discussionDate: "12/07/2023",
          governorDate: "02/08/2023",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 19 सन् 2023",
          pdf: "/misc/Bill%202023/Bill%20No.%2011.pdf",
          actPdf: "/misc/Bill%202023/ACT%20No%2019%20of%202023.pdf"
        },
        {
          no: 12,
          title: "मध्‍यप्रदेश विनियोग (क्रमांक-3) विधेयक, 2023",
          member: "श्री जगदीश देवड़ा, मंत्री",
          department: "वित्‍त",
          introDate: "12/07/2023",
          discussionDate: "12/07/2023",
          governorDate: "25/07/2023",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 18 सन् 2023",
          pdf: "/misc/Bill%202023/Bill%20No.%2012.pdf",
          actPdf: "/misc/Bill%202023/ACT%20%20No%2018%20of%202023.PDF"
        },
        {
          no: 13,
          title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) संशोधन विधेयक, 2023",
          member: "डॉ. मोहन यादव, मंत्री",
          department: "उच्‍च शिक्षा",
          introDate: "12/07/2023",
          discussionDate: "12/07/2023",
          governorDate: "20/07/2023",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 17 सन् 2023",
          pdf: "/misc/Bill%202023/Bill%20No.%2013.pdf",
          actPdf: "/misc/Bill%202023/ACT%20No%2017%20of%202023.pdf"
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
        <h1 style={styles.headerTitle}>LEGISLATION / विधायन - 2023</h1>
      </header>

      <div style={styles.container}>
        {bills2023.map((session, sIdx) => (
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

export default VidhaeyakTable2023;
