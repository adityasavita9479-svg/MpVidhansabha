import React from "react";
import { useNavigate } from "react-router-dom";

const VidhaeyakTable2025 = () => {
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
  // March 2025 – 5th Session Data
  // ==============================

const bills2025 = [
  {
    session: "March, 2025 (5th Session of 16th Vidhan Sabha)",
    data: [
      {
        no: 1,
        title: "मध्यप्रदेश विनियोग विधेयक, 2025",
        member: "श्री जगदीश देवड़ा, उप मुख्‍यमंत्री (वित्‍त)",
        department: "वित्‍त",
        introDate: "17/03/2025",
        discussionDate: "17/03/2025",
        governorDate: "18/03/2025",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 10 सन् 2025",
        pdf: "/misc/Bill%202025/Bill%20No%201.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%2010%20of%202025.pdf",
      },
      {
        no: 2,
        title: "मध्यप्रदेश विनियोग (क्रमांक-2) विधेयक, 2025",
        member: "श्री जगदीश देवड़ा, उप मुख्‍यमंत्री (वित्‍त)",
        department: "वित्‍त",
        introDate: "21/03/2025",
        discussionDate: "21/03/2025",
        governorDate: "27/03/2025",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 11 सन् 2025",
        pdf: "/misc/Bill%202025/Bill%20No%202.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%2011%20of%202025.pdf",
      },
      {
        no: 3,
        title: "मध्यप्रदेश नगर तथा ग्राम निवेश (संशोधन) विधेयक, 2025",
        member: "श्री कैलाश विजयवर्गीय, नगरीय विकास एवं आवास मंत्री",
        department: "नगरीय विकास एवं आवास",
        introDate: "17/03/2025",
        discussionDate: "24/03/2025",
        governorDate: "16/06/2025",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 13 सन् 2025",
        pdf: "/misc/Bill%202025/Bill%20No%203.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%2013%20of%202025.pdf",
      },
      {
        no: 4,
        title: "मध्यप्रदेश सहकारी सोसाइटी (संशोधन) विधेयक, 2025",
        member: "श्री विश्वास कैलाश सारंग, सहकारिता मंत्री",
        department: "सहकारिता",
        introDate: "21/03/2025",
        discussionDate: "24/03/2025",
        governorDate: "17/03/2025",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 12 सन् 2025",
        pdf: "/misc/Bill%202025/Bill%20No%204.pdf",
        actPdf: "/misc/Bill%202025/ACT%20no%2012%20of%202025.pdf",
      },
    ],
  },

  {
    session: "July–August, 2025 (6th Session of 16th Vidhan Sabha)",
    data: [
      {
        no: 5,
        title: "मध्यप्रदेश श्रम विधियां (संशोधन) और प्रकीर्ण उपबंध विधेयक, 2025",
        member: "श्री प्रह्लाद सिंह पटेल, श्रम मंत्री",
        department: "श्रम",
        introDate: "29/07/2025",
        discussionDate: "31/07/2025",
        governorDate: "",
        presidentDate: "",
        actNo: "",
        pdf: "/misc/Bill%202025/Bill%20No%205.pdf",
        actPdf: "",
      },
      {
        no: 6,
        title: "मध्यप्रदेश विश्वविद्यालय (संशोधन) विधेयक, 2025",
        member: "श्री इन्दर सिंह परमार, उच्च शिक्षा मंत्री",
        department: "उच्च शिक्षा",
        introDate: "30/07/2025",
        discussionDate: "05/08/2025",
        governorDate: "03/09/2025",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 17 सन् 2025",
        pdf: "/misc/Bill%202025/Bill%20No%206.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%2017%20of%202025.pdf",
      },
      {
        no: 7,
        title: "भारतीय स्टाम्प (मध्यप्रदेश संशोधन) विधेयक, 2025",
        member: "श्री जगदीश देवड़ा, उप मुख्‍यमंत्री",
        department: "वाणिज्यिक कर",
        introDate: "30/07/2025",
        discussionDate: "06/08/2025",
        governorDate: "03/09/2025",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 18 सन् 2025",
        pdf: "/misc/Bill%202025/Bill%20No%207.pdf",
        actPdf: "/misc/Bill%202025/ACT%20no%2018%20of%202025.pdf",
      },
      {
        no: 8,
        title: "मध्यप्रदेश माल और सेवा कर (संशोधन) विधेयक, 2025",
        member: "श्री जगदीश देवड़ा, उप मुख्‍यमंत्री",
        department: "वाणिज्यिक कर",
        introDate: "31/07/2025",
        discussionDate: "06/08/2025",
        governorDate: "03/09/2025",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 19 सन् 2025",
        pdf: "/misc/Bill%202025/Bill%20No%208.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%2019%20of%202025.pdf",
      },
      {
        no: 9,
        title: "रजिस्ट्रेशन (मध्यप्रदेश संशोधन) विधेयक, 2025",
        member: "श्री जगदीश देवड़ा, उप मुख्‍यमंत्री",
        department: "वाणिज्यिक कर",
        introDate: "31/07/2025",
        discussionDate: "06/08/2025",
        governorDate: "",
        presidentDate: "",
        actNo: "",
        pdf: "/misc/Bill%202025/Bill%20No%209.pdf",
        actPdf: "",
      },
      {
        no: 10,
        title: "भारतीय स्टाम्प (मध्यप्रदेश द्वितीय संशोधन) विधेयक, 2025",
        member: "श्री जगदीश देवड़ा, उप मुख्‍यमंत्री",
        department: "वाणिज्यिक कर",
        introDate: "30/07/2025",
        discussionDate: "06/08/2025",
        governorDate: "",
        presidentDate: "",
        actNo: "",
        pdf: "/misc/Bill%202025/Bill%20No%2010.pdf",
        actPdf: "",
      },
      {
        no: 11,
        title: "मध्यप्रदेश विनियोग (क्रमांक-3) विधेयक, 2025",
        member: "श्री जगदीश देवड़ा, उप मुख्‍यमंत्री",
        department: "वित्त",
        introDate: "30/07/2025",
        discussionDate: "30/07/2025",
        governorDate: "13/08/2025",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 14 सन् 2025",
        pdf: "/misc/Bill%202025/Bill%20No%2011.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%2014%20of%202025.pdf",
      },
      {
        no: 12,
        title: "मध्यप्रदेश महानगर क्षेत्र नियोजन एवं विकास विधेयक, 2025",
        member: "श्री कैलाश विजयवर्गीय, नगरीय विकास एवं आवास मंत्री",
        department: "नगरीय विकास एवं आवास",
        introDate: "04/08/2025",
        discussionDate: "05/08/2025",
        governorDate: "09/09/2025",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 21 सन् 2025",
        pdf: "/misc/Bill%202025/Bill%20No%2012.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%2021%20of%202025.pdf",
      },
      {
        no: 13,
        title: "मध्यप्रदेश जन विश्वास (उपबंधों का संशोधन) विधेयक, 2025",
        member: "श्री चैतन्य कुमार काश्यप, सूक्ष्म लघु एवं मध्यम उद्यम मंत्री",
        department: "सूक्ष्म, लघु एवं मध्यम उद्यम",
        introDate: "05/08/2025",
        discussionDate: "06/08/2025",
        governorDate: "22/08/2025",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 15 सन् 2025",
        pdf: "/misc/Bill%202025/Bill%20No%2013.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%2015%20of%20%202025.pdf",
      },
      {
        no: 14,
        title: "कारखाना (मध्यप्रदेश संशोधन) विधेयक, 2025",
        member: "श्री प्रह्लाद सिंह पटेल, श्रम मंत्री",
        department: "श्रम",
        introDate: "04/08/2025",
        discussionDate: "05/08/2025",
        governorDate: "",
        presidentDate: "",
        actNo: "",
        pdf: "/misc/Bill%202025/Bill%20No%2014.pdf",
        actPdf: "",
      },
      {
        no: 15,
        title: "मध्यप्रदेश दुकान तथा स्थापना (संशोधन) विधेयक, 2025",
        member: "श्री प्रह्लाद सिंह पटेल, श्रम मंत्री",
        department: "श्रम",
        introDate: "04/08/2025",
        discussionDate: "05/08/2025",
        governorDate: "09/09/2025",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 20 सन् 2025",
        pdf: "/misc/Bill%202025/Bill%20No%2015.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%2020%20of%202025.pdf",
      },
      {
        no: 16,
        title: "मध्यप्रदेश मोटरयान कराधान (संशोधन) विधेयक, 2025",
        member: "श्री उदय प्रताप सिंह, परिवहन मंत्री",
        department: "परिवहन",
        introDate: "05/08/2025",
        discussionDate: "06/08/2025",
        governorDate: "18/09/2025",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 22 सन् 2025",
        pdf: "/misc/Bill%202025/Bill%20No%2016.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%2022%20of%202025.pdf",
      },
      {
        no: 17,
        title: "मध्यप्रदेश मध्यस्थता अधिकरण (संशोधन) विधेयक, 2025",
        member: "श्री गौतम टेटवाल, राज्यमंत्री",
        department: "विधि और विधायी कार्य",
        introDate: "05/08/2025",
        discussionDate: "06/08/2025",
        governorDate: "",
        presidentDate: "",
        actNo: "",
        pdf: "/misc/Bill%202025/Bill%20No%2017.pdf",
        actPdf: "",
      },
      {
        no: 18,
        title: "मध्यप्रदेश समाज के कमजोर वर्गों के लिए विधिक सहायता तथा विधिक सलाह (निरसन) विधेयक, 2025",
        member: "श्री गौतम टेटवाल, राज्यमंत्री",
        department: "विधि और विधायी कार्य",
        introDate: "05/08/2025",
        discussionDate: "06/08/2025",
        governorDate: "02/09/2025",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक 16 सन् 2025",
        pdf: "/misc/Bill%202025/Bill%20No%2018.pdf",
        actPdf: "/misc/Bill%202025/ACT%20No%2016%20of%202025.pdf",
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
        <h1 style={styles.headerTitle}>LEGISLATION / विधायन - 2025</h1>
      </header>

      <div style={styles.container}>
        {bills2025.map((session, i) => (
          <section key={i}>
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
                  {session.data.map((bill, idx) => (
                    <tr key={idx}>
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

export default VidhaeyakTable2025;
