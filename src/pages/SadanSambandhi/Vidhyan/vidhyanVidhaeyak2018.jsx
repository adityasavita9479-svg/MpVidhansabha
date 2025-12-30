import React from "react";
import { useNavigate } from "react-router-dom";

const VidhaeyakTable2018 = () => {
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

  const bills2018 = [
    {
      session: "Feb-Mar, 2018 (16th Session of 14th Vidhan Sabha)",
      data: [
        {
          no: 1,
          title: "मध्‍यप्रदेश मोटर स्पिरिट उपकर विधेयक, 2018",
          member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
          department: "वाणिज्यिक कर",
          introDate: "20/03/2018",
          discussionDate: "21/03/2018",
          governorDate: "03/04/2018",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 11 सन् 2018",
          pdf: "/misc/Bill%202018/Bill%20No.%201.pdf",
          actPdf: "/misc/Bill%202018/ACT%20No%2011%20of%202018.pdf"


        },
        {
          no: 2,
          title: "मध्‍यप्रदेश हाई स्‍पीड डीजल उपकर विधेयक, 2018",
          member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
          department: "वाणिज्यिक कर",
          introDate: "20/03/2018",
          discussionDate: "21/03/2018",
          governorDate: "03/04/2018",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 12 सन् 2018",
          pdf: "/misc/Bill%202018/Bill%20No.%202.pdf",
          actPdf: "/misc/Bill%202018/ACT%20No%2012%20of%202018.pdf"

        },
        {
          no: 3,
          title: "मध्‍यप्रदेश विनियोग विधेयक, 2018",
          member: "श्री जयंत मलैया, वित्‍त मंत्री",
          department: "वित्‍त",
          introDate: "21/03/2018",
          discussionDate: "21/03/2018",
          governorDate: "27/03/2018",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 8 सन् 2018",
          actPdf: "/misc/Bill%202018/ACT%20no%208%20of%202018.pdf"


        },
        {
          no: 4,
          title: "मध्‍यप्रदेश विनियोग (क्रमांक-2) विधेयक, 2018",
          member: "श्री जयंत मलैया, वित्‍त मंत्री",
          department: "वित्‍त",
          introDate: "21/03/2018",
          discussionDate: "21/03/2018",
          governorDate: "27/03/2018",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 9 सन् 2018",
          actPdf: "/misc/Bill%202018/ACT%20No%209%20of%202018.pdf"


        },
        {
          no: 5,
          title: "मध्‍यप्रदेश विनियोग (क्रमांक-3) विधेयक, 2018",
          member: "श्री जयंत मलैया, वित्‍त मंत्री",
          department: "वित्‍त",
          introDate: "21/03/2018",
          discussionDate: "21/03/2018",
          governorDate: "27/03/2018",
          presidentDate: "",
          actNo: "अधिनियम क्रमांक 10 सन् 2018",
          actPdf: "/misc/Bill%202018/ACT%20no%2010%20of%202018.pdf"


        }
      ]
    },
   {
  session: "June, 2018 (17th Session of 14th Vidhan Sabha)",
  data: [
    {
      no: 6,
      title: "मध्‍यप्रदेश राष्‍ट्रीय विधि संस्‍थान विश्‍वविद्यालय विधेयक, 2018",
      member: "श्री जयभान सिंह पवैया, उच्‍च‍ शिक्षा मंत्री",
      department: "उच्‍च शिक्षा",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "01/09/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 31 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%206.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2031%20of%202018.pdf"
    },
    {
      no: 7,
      title: "मध्‍यप्रदेश राज्‍य उच्‍च शिक्षा परिषद् विधेयक, 2018",
      member: "श्री जयभान सिंह पवैया, उच्‍च शिक्षा मंत्री",
      department: "उच्‍च शिक्षा",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "23/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 25 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%207.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2025%20of%202018.pdf"
    },
    {
      no: 8,
      title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) संशोधन विधेयक, 2018",
      member: "श्री जयभान सिंह पवैया, उच्‍च शिक्षा मंत्री",
      department: "उच्‍च शिक्षा",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "23/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 26 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%208.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2026%20of%202018.pdf"
    },
    {
      no: 9,
      title: "मध्‍यप्रदेश ग्रामों में की दखलरहित भूमि (विशेष उपबंध) संशोधन विधेयक, 2018",
      member: "श्री उमाशंकर गुप्‍ता, राजस्‍व मंत्री",
      department: "राजस्‍व",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "23/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 22 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%209.pdf",
      actPdf: "/misc/Bill%202018/ACT%20no%2022%20of%202018.pdf"
    },
    {
      no: 10,
      title: "मध्‍यप्रदेश कराधान (संशोधन) विधेयक, 2018",
      member: "श्री जयंत मलैया, वित्‍त मंत्री",
      department: "वित्‍त",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "09/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 17 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2010.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2017%20of%202018.pdf"
    },
    {
      no: 11,
      title: "मध्‍यप्रदेश विधान सभा सचिवालय सेवा (संशोधन) विधेयक, 2018",
      member: "डॉ. नरोत्‍तम मिश्र, संसदीय कार्य मंत्री",
      department: "संसदीय कार्य",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "23/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 21 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2011.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2021%20of%202018.pdf"
    },
    {
      no: 12,
      title: "मध्‍यप्रदेश वृत्ति कर (संशोधन)‍ विधेयक, 2018",
      member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
      department: "वाणिज्यिक कर",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "16/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 20 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2012.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2020%20of%202018.pdf"
    },
    {
      no: 13,
      title: "मध्‍यप्रदेश वेट (संशोधन)‍ विधेयक, 2018",
      member: "श्री जयंत मलैया, वाणिज्यिक कर मंत्री",
      department: "वाणिज्यिक कर",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "16/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 19 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2013.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2019%20of%202018.pdf"
    },
    {
      no: 14,
      title: "मध्‍यप्रदेश धर्मशास्‍त्र राष्‍ट्रीय विधि विश्‍वविद्यालय विधेयक, 2018",
      member: "श्री जयभान सिंह पवैया, उच्‍च‍ शिक्षा मंत्री",
      department: "उच्‍च शिक्षा",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "23/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 24 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2014.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2024%20of%202018.pdf"
    },
    {
      no: 15,
      title: "मध्‍यप्रदेश शासकीय सेवक (अधिवार्षिकी-आयु) संशोधन विधेयक, 2018",
      member: "श्री जयंत मलैया, वित्‍त  मंत्री",
      department: "वित्‍त",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "09/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 18 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2015.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2018%20of%202018.pdf"
    },
    {
      no: 16,
      title: "मध्‍यप्रदेश पंचायत राज एवं ग्राम स्‍वराज (संशोधन) विधेयक, 2018",
      member: "श्री गोपाल भार्गव, पंचायत एवं ग्रामीण विकास मंत्री",
      department: "पंचायत एवं ग्रामीण विकास",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "05/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 14 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2016.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2014%20of%202018.pdf"
    },
    {
      no: 17,
      title: "मध्‍यप्रदेश भिक्षा वृत्ति निवारण (संशोधन) विधेयक, 2018",
      member: "श्री गोपाल भार्गव, सामाजिक कल्‍याण  मंत्री",
      department: "सामाजिक न्‍याय एवं नि:शक्‍त जन कल्‍याण",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "05/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 15 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2017.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2015%20of%202018.pdf"
    },
    {
      no: 18,
      title: "मध्‍यप्रदेश लाड़ली लक्ष्‍मी (बालिका प्रोत्‍साहन) विधेयक, 2018",
      member: "श्रीमती अर्चना चिटनिस, महिला एवं बाल विकास मंत्री",
      department: "महिला एवं बाल विकास",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "16/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 29 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2018.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2029%20of%202018.pdf"
    },
    {
      no: 19,
      title: "मध्‍यप्रदेश नगरपालिक विधि (संशोधन) विधेयक, 2018",
      member: "श्रीमती माया सिंह, नगरीय विकास एवं आवास मंत्री",
      department: "नगरीय विकास एवं आवास",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "25/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 27 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2019.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2027%20of%202018.pdf"
    },
    {
      no: 20,
      title: "मध्‍यप्रदेश नगरपालिक विधि (द्वितीय संशोधन) विधेयक, 2018",
      member: "श्रीमती माया सिंह, नगरीय विकास एवं आवास मंत्री",
      department: "नगरीय विकास एवं आवास",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "25/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 28 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2020.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2028%20of%202018.pdf"
    },
    {
      no: 21,
      title: "मध्‍यप्रदेश लोकतंत्र सेनानी सम्‍मान विधेयक, 2018",
      member: "श्री लालसिंह आर्य, राज्‍यमंत्री, सामान्‍य प्रशासन",
      department: "सामान्‍य प्रशासन",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "08/08/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 30 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2021.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2030%20of%202018.pdf"
    },
    {
      no: 22,
      title: "मध्‍यप्रदेश भू-राजस्‍व संहिता (संशोधन) विधेयक, 2018",
      member: "श्री उमाशंकर गुप्‍ता, राजस्‍व मंत्री",
      department: "राजस्‍व",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "23/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 23 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2022.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2023%20of%202018.pdf"
    },
    {
      no: 23,
      title: "मध्‍यप्रदेश विनियोग (क्रमांक-4) विधेयक, 2018",
      member: "श्री जयंत मलैया, वित्‍त मंत्री",
      department: "वित्‍त",
      introDate: "25/06/2018",
      discussionDate: "26/06/2018",
      governorDate: "09/07/2018",
      presidentDate: "",
      actNo: "अधिनियम क्रमांक 16 सन् 2018",
      pdf: "/misc/Bill%202018/Bill%20No.%2023.pdf",
      actPdf: "/misc/Bill%202018/ACT%20No%2016%20of%202018.pdf"
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

        {/* Auto title from first session */}
        <h1 style={styles.headerTitle}>{bills2018[0].session}</h1>
      </header>

      <div style={styles.container}>
        {bills2018.map((session, sIdx) => (
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

export default VidhaeyakTable2018;