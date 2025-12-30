import React from "react";
import { useNavigate } from "react-router-dom";

const VidhaeyakTable2022 = () => {
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

const bills2022 = [
  {
    session: "March, 2022 (11th Session of 15th Vidhan Sabha)",
    data: [
      { no: 1, title: "मध्‍यप्रदेश पंचायतराज एवं ग्राम स्‍वराज (संशोधन) विधेयक,2022", member: "श्री रामखेलावन पटेल, राज्‍यमंत्री", department: "पंचायत एवं ग्रामीण विकास", introDate: "15/03/2022", discussionDate: "16/03/2022", governorDate: "01/04/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 10 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%201.pdf",actPdf: "/misc/bill2022/ACT%20No%2010%20of%202022.pdf" },
      { no: 2, title: "मध्‍यप्रदेश पंचायतराज एवं ग्राम स्‍वराज(द्वितीय संशोधन) विधेयक,2022", member: "श्री रामखेलावन पटेल, राज्‍यमंत्री", department: "पंचायत एवं ग्रामीण विकास", introDate: "15/03/2022", discussionDate: "16/03/2022", governorDate: "01/04/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 11 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%202.pdf",actPdf: "/misc/bill2022/ACT%20No%2011%20of%202022.pdf" },
      { no: 3, title: "मध्‍यप्रदेश विनियोग विधेयक, 2022", member: "श्री जगदीश देवड़ा, मंत्री", department: "वित्‍त", introDate: "11/03/2022", discussionDate: "11/03/2022", governorDate: "17/03/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 7 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%203.pdf",actPdf: "/misc/bill2022/ACT%20No%207%20of%202022.pdf" },
      { no: 4, title: "मध्‍यप्रदेश विनियोग (क्रमांक-2) विधेयक,2022", member: "श्री जगदीश देवड़ा, मंत्री", department: "वित्‍त", introDate: "16/03/2022", discussionDate: "16/03/2022", governorDate: "26/03/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 8 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%204.pdf",actPdf: "/misc/bill2022/ACT%20No%208%20of%202022.PDF" },
      { no: 5, title: "मध्‍यप्रदेश वित्‍त विधेयक,2022", member: "श्री जगदीश देवड़ा, मंत्री", department: "वित्‍त", introDate: "16/03/2022", discussionDate: "16/03/2022", governorDate: "31/03/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 9 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%205.pdf",actPdf: "/misc/bill2022/ACT%20No%209%20of%202022.pdf" }
    ]
  },
  {
    session: "September, 2022 (12th Session of 15th Vidhan Sabha)",
    data: [
      { no: 6, title: "मध्‍यप्रदेश विश्‍वविद्यालय (संशोधन) विधेयक, 2022", member: "डॉ. मोहन यादव, मंत्री", department: "उच्‍च शिक्षा", introDate: "14/09/2022", discussionDate: "15/09/2022", governorDate: "29/09/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 19 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%206.pdf",actPdf: "/misc/bill2022/ACT%20No%2019%20of%202022.pdf" },
      { no: 7, title: "मध्‍यप्रदेश सिविल न्‍यायालय (संशोधन) विधेयक, 2022", member: "डॉ. नरोत्‍तम मिश्र, मंत्री", department: "विधि और विधायी कार्य", introDate: "14/09/2022", discussionDate: "15/09/2022", governorDate: "04/10/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 24 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%207.pdf",actPdf: "/misc/bill2022/ACT%20No%2024%20of%202022.pdf" },
      { no: 8, title: "मध्‍यप्रदेश व्‍यावसायिक परीक्षा मण्‍डल (संशोधन) विधेयक, 2022", member: "श्री इंदर सिंह परमार, राज्‍य मंत्री", department: "सामान्‍य प्रशासन", introDate: "14/09/2022", discussionDate: "15/09/2022", governorDate: "29/09/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 18 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%208.pdf",actPdf: "/misc/bill2022/ACT%20No%2018%20of%202022.pdf" },
      { no: 9, title: "मध्‍यप्रदेश भू-राजस्‍व संहिता (संशोधन) विधेयक, 2022", member: "श्री गोविन्‍द सिंह राजपूत, मंत्री", department: "राजस्‍व", introDate: "14/09/2022", discussionDate: "15/09/2022", governorDate: "29/09/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 20 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%209.pdf",actPdf: "/misc/bill2022/ACT%20No%2020%20of%202022.pdf" },
      { no: 10, title: "मध्‍यप्रदेश काष्‍ठ चिरान (विनियमन) संशोधन विधेयक, 2022", member: "डॉ. कुंवर विजय शाह, मंत्री", department: "वन", introDate: "15/09/2022", discussionDate: "15/09/2022", governorDate: "15/10/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 26 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%2010.pdf",actPdf: "/misc/bill2022/ACT%20No%2026%20of%202022.pdf" },
      { no: 11, title: "मध्‍यप्रदेश तेंदूपत्‍ता (व्‍यापर विनियमन) संशोधन विधेयक, 2022", member: "डॉ. कुंवर विजय शाह, मंत्री", department: "वन", introDate: "15/09/2022", discussionDate: "15/09/2022", governorDate: "15/10/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 27 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%2011.pdf",actPdf: "/misc/bill2022/ACT%20No%2027%20of%202022.pdf" },
      { no: 12, title: "मध्‍यप्रदेश नगरपालिक विधि (संशोधन) विधेयक, 2022", member: "श्री भूपेन्‍द्र सिंह, मंत्री", department: "नगरीय विकास एवं आवास", introDate: "15/09/2022", discussionDate: "15/09/2022", governorDate: "03/10/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 22 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%2012.pdf",actPdf: "/misc/bill2022/ACT%20No%2022%20of%202022.pdf" },
      { no: 13, title: "मध्‍यप्रदेश नगरपालिक विधि (द्वितीय संशोधन) विधेयक, 2022", member: "श्री भूपेन्‍द्र सिंह, मंत्री", department: "नगरीय आवास एवं विकास", introDate: "15/09/2022", discussionDate: "15/09/2022", governorDate: "03/10/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 23 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%2013.pdf",actPdf: "/misc/bill2022/ACT%20No%2023%20of%202022.pdf" },
      { no: 14, title: "मध्‍यप्रदेश विनियोग (क्रमांक-3) विधेयक, 2022", member: "श्री जगदीश देवड़ा, मंत्री", department: "वित्‍त", introDate: "15/09/2022", discussionDate: "15/09/2022", governorDate: "25/09/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 14 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%2014.pdf",actPdf: "/misc/bill2022/ACT%20No%2014%20of%202022.pdf" },
      { no: 15, title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) संशोधन विधेयक, 2022", member: "डॉ. मोहन यादव, मंत्री", department: "उच्‍च शिक्षा", introDate: "15/09/2022", discussionDate: "15/09/2022", governorDate: "17/10/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 25 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%2015.pdf",actPdf: "/misc/bill2022/ACT%20No%2025%20of%202022.pdf" },
      { no: 16, title: "भारतीय स्‍टाम्‍प (मध्‍यप्रदेश संशोधन) विधेयक, 2022", member: "श्री जगदीश देवड़ा, मंत्री", department: "वाणिज्यिक कर", introDate: "15/09/2022", discussionDate: "15/09/2022", governorDate: "29/09/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 17 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%2016.pdf",actPdf: "/misc/bill2022/ACT%20No%2017%20of%202022.pdf" },
      { no: 17, title: "मध्‍यप्रदेश वेट (संशोधन) विधेयक, 2022", member: "श्री जगदीश देवड़ा, मंत्री", department: "वाणिज्यिक कर", introDate: "15/09/2022", discussionDate: "15/09/2022", governorDate: "29/09/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 16 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%2017.pdf",actPdf: "/misc/bill2022/ACT%20No%2016%20of%202022.pdf" },
      { no: 18, title: "मध्‍यप्रदेश लाड़ली लक्ष्‍मी (बालिका प्रोत्‍साहन) संशोधन विधेयक, 2022", member: "श्री भारत सिंह कुशवाह, राज्‍यमंत्री", department: "महिला एवं बाल विकास", introDate: "15/09/2022", discussionDate: "15/09/2022", governorDate: "03/10/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 21 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%2018.pdf",actPdf: "/misc/bill2022/ACT%20No%2021%20of%202022.pdf" },
      { no: 19, title: "मध्‍यप्रदेश माल और सेवा कर (संशोधन) विधेयक, 2022", member: "श्री जगदीश देवड़ा, मंत्री", department: "वाणिज्यिक कर", introDate: "15/09/2022", discussionDate: "15/09/2022", governorDate: "29/09/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 15 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%2019.pdf",actPdf: "/misc/bill2022/ACT%20No%2015%20of%202022.pdf" }
    ]
  },
  {
    session: "December, 2022 (13th Session of 15th Vidhan Sabha)",
    data: [
      { no: 20, title: "मध्‍यप्रदेश नगरपालिक विधि (तृतीय संशोधन) विधेयक, 2022", member: "श्री भूपेन्‍द्र सिंह, मंत्री", department: "नगरीय विकास एवं आवास", introDate: "20/12/2022", discussionDate: "20/12/2022", governorDate: "25/01/2023", presidentDate: "", actNo: "अधिनियम क्रमांक 7 सन् 2023", pdf: "/misc/bill2022/Bill%20No.%2020.pdf",actPdf: "/misc/Bill%202023/ACT%20No%207%20of%202023.pdf" },
      { no: 21, title: "मध्‍यप्रदेश भू-राजस्‍व संहिता (द्वितीय संशोधन) विधेयक, 2022", member: "श्री गोविन्‍द सिंह राजपूत, मंत्री", department: "राजस्‍व", introDate: "20/12/2022", discussionDate: "20/12/2022", governorDate: "23/01/2023", presidentDate: "", actNo: "अधिनियम क्रमांक 1 सन् 2023", actPdf: "/misc/Bill%202023/ACT%20No%201%20of%202023.pdf" },
      { no: 22, title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) द्वितीय संशोधन विधेयक, 2022", member: "डॉ. मोहन यादव, मंत्री", department: "उच्‍च शिक्षा", introDate: "20/12/2022", discussionDate: "20/12/2022", governorDate: "23/01/2023", presidentDate: "", actNo: "अधिनियम क्रमांक 3 सन् 2023", pdf: "/misc/bill2022/Bill%20No.%2022.pdf",actPdf: "/misc/Bill%202023/ACT%20No%203%20of%202023.pdf" },
      { no: 23, title: "मध्‍यप्रदेश श्रम विधि(संशोधन) विधेयक, 2022", member: "श्री बृजेन्‍द्र प्रताप सिंह, मंत्री", department: "श्रम", introDate: "20/12/2022", discussionDate: "20/12/2022", governorDate: "23/01/2023", presidentDate: "", actNo: "अधिनियम क्रमांक 9 सन् 2023", pdf: "/misc/bill2022/Bill%20No.%2023.pdf",actPdf: "/misc/Bill%202023/ACT%20No%209%20of%202023.pdf" },
      { no: 24, title: "मध्‍यप्रदेश कर्मचारी चयन मंडल (संशोधन) विधेयक, 2022", member: "श्री इंदर सिंह परमार, राज्‍मंत्री", department: "सामान्‍य प्रशासन", introDate: "20/12/2022", discussionDate: "20/12/2022", governorDate: "23/01/2023", presidentDate: "", actNo: "अधिनियम क्रमांक 5 सन् 2023", pdf: "/misc/bill2022/Bill%20No.%2024.pdf",actPdf: "/misc/Bill%202023/ACT%20No%205%20of%202023.pdf" },
      { no: 25, title: "मध्‍यप्रदेश निरसन विधेयक, 2022", member: "डॉ. नरोत्‍तम मिश्र, मंत्री", department: "विधि और विधायी कार्य", introDate: "21/12/2022", discussionDate: "21/12/2022", governorDate: "23/01/2023", presidentDate: "", actNo: "अधिनियम क्रमांक 4 सन् 2023", pdf: "/misc/bill2022/Bill%20No.%2025.pdf",actPdf: "/misc/Bill%202023/ACT%20No%204%20of%202023.pdf" },
      { no: 26, title: "मध्‍यप्रदेश सहकारी सोसाइटी (संशोधन) विधेयक, 2022", member: "डॉ. अरविन्‍द सिंह भदौरिया, मंत्री", department: "सहकारिता", introDate: "21/12/2022", discussionDate: "21/12/2022", governorDate: "23/01/2023", presidentDate: "", actNo: "अधिनियम क्रमांक 2 सन् 2023", pdf: "/misc/bill2022/Bill%20No.%2026.pdf",actPdf: "/misc/Bill%202023/ACT%20nO%202%20OF%202023.pdf" },
      { no: 27, title: "मध्‍यप्रदेश विनियोग (क्रमांक-4) विधेयक, 2022", member: "श्री जगदीश देवड़ा, मंत्री", department: "वित्‍त", introDate: "21/12/2022", discussionDate: "21/12/2022", governorDate: "30/12/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 28 सन् 2022", pdf: "/misc/bill2022/Bill%20No.%2027.pdf",actPdf: "/misc/bill2022/ACT%20No%2028%20of%20%202022.pdf" },
      { no: 28, title: "मध्‍यप्रदेश पेय जल परिरक्षण (संशोधन) विधेयक, 2022", member: "श्री बृजेन्‍द्र सिंह यादव, राज्‍यमंत्री", department: "लोक स्‍वास्‍थ्‍य यांत्रिकी", introDate: "21/12/2022", discussionDate: "21/12/2022", governorDate: "25/01/2023", presidentDate: "", actNo: "अधिनियम क्रमांक 10 सन् 2023", pdf: "/misc/bill2022/Bill%20No.%2028.pdf",actPdf: "/misc/Bill%202023/ACT%20%20No10of%202023.pdf" },
      { no: 29, title: "मध्‍यप्रदेश सिनेमा (विनियमन) संशोधन विधेयक, 2022", member: "श्री भूपेन्‍द्र सिंह, मंत्री", department: "नगरीय विकास एवं आवास", introDate: "21/12/2022", discussionDate: "21/12/2022", governorDate: "25/01/2023", presidentDate: "", actNo: "अधिनियम क्रमांक 8 सन् 2023", pdf: "/misc/bill2022/Bill%20No.%2029.pdf",actPdf: "/misc/Bill%202023/ACT%20No%208%20of%202023.pdf" },
      { no: 30, title: "मध्‍यप्रदेश नगरपालिक विधि (चतुर्थ संशोधन) विधेयक, 2022", member: "श्री भूपेन्‍द्र सिंह, मंत्री", department: "नगरीय विकास एवं आवास", introDate: "21/12/2022", discussionDate: "21/12/2022", governorDate: "25/01/2023", presidentDate: "", actNo: "अधिनियम क्रमांक 6 सन् 2023", pdf: "/misc/bill2022/Bill%20No.%2030.pdf",actPdf: "/misc/Bill%202023/ACT%20No%206%20of%202023.pdf" }
    ]
  }
];

  

  return (
    <div style={styles.page}>
      <header style={styles.headerBar}>
        <button style={styles.backButton} onClick={() => navigate("/vidheyak/bill")}>
          ← Back
        </button>
        <h1 style={styles.headerTitle}>LEGISLATION / विधायन - 2022</h1>
      </header>

      <div style={styles.container}>
        {bills2022.map((session, sIdx) => (
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

export default VidhaeyakTable2022;
