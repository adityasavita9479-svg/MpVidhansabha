import React from "react";
import { useNavigate } from "react-router-dom";

const VidhaeyakTable2019 = () => {
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

 const bills2019 = [
  {
    session: "January, 2019 (1st Session of 15th Vidhan Sabha)",
    data: [
      {
        no: 1,
        title: "मध्‍यप्रदेश विनियोग विधेयक,2019",
        member: "श्री तरुण भनोत, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "09/01/2019",
        discussionDate: "10/01/2019",
        governorDate: "22/01/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-1 सन् 2019",
        pdf: "/misc/bill_2019/Bill%20no%201.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%201%20of%202019.pdf"
      },
      {
        no: 2,
        title: "मध्‍यप्रदेश माल और सेवा कर (संशोधन) विधेयक,2019",
        member: "श्री बृजेन्‍द्र सिंह, वाणिज्यिक कर मंत्री",
        department: "वाणिज्यिक कर",
        introDate: "10/01/2019",
        discussionDate: "10/01/2019",
        governorDate: "07/02/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-2 सन् 2019",
        pdf: "/misc/bill_2019/Bill%20no%202.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%202%20of%202019.pdf"
      }
    ]
  },
  {
    session: "February, 2019 (2nd Session of 15th Vidhan Sabha)",
    data: [
      {
        no: 3,
        title: "मध्‍यप्रदेश नगरपालिका (संशोधन) विधेयक,2019",
        member: "श्री जयवर्द्धन सिंह, नगरीय विकास और आवास मंत्री",
        department: "नगरीय विकास और आवास",
        introDate: "20/02/2019",
        discussionDate: "21/02/2019",
        governorDate: "16/09/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-22 सन् 2019",
        pdf: "/misc/bill_2019/Bill%20no%203.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2022%20of%202019.pdf"
      },
      {
        no: 4,
        title: "मध्‍यप्रदेश आधार (वित्‍तीय और अन्य सहायिकियों, प्रसुविधाओं और सेवाओं का लक्ष्यित परिदान) विधेयक,2019",
        member: "श्री पी. सी. शर्मा, विज्ञान और प्रौद्योगिकी मंत्री",
        department: "विज्ञान और प्रौद्योगिकी",
        introDate: "20/02/2019",
        discussionDate: "21/02/2019",
        governorDate: "13/03/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-6 सन् 2019",
        pdf: "/misc/bill_2019/Bill%20no%204.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2022%20of%202019.pdf"
      },
      {
        no: 5,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-2) विधेयक,2019",
        member: "श्री तरुण भनोत, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "20/02/2019",
        discussionDate: "20/02/2019",
        governorDate: "04/03/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-3 सन् 2019",
        pdf: "/misc/bill_2019/Bill%20no%205.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%203%20of%202019.pdf"
      },
      {
        no: 6,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-3) विधेयक,2019",
        member: "श्री तरुण भनोत, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "20/02/2019",
        discussionDate: "20/02/2019",
        governorDate: "04/03/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-4 सन् 2019",
        pdf: "/misc/bill_2019/Bill%20no%206.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%204%20of%202019.pdf"
      },
      {
        no: 7,
        title: "मध्‍यप्रदेश विनियोग (लेखानुदान) विधेयक,2019",
        member: "श्री तरुण भनोत, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "20/02/2019",
        discussionDate: "20/02/2019",
        governorDate: "04/03/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-5 सन् 2019",
        pdf: "/misc/bill_2019/Bill%20no%207.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%205%20of%202019.pdf"
      },
      {
        no: 8,
        title: "मध्‍यप्रदेश पंचायतराज एवं ग्राम स्‍वराज (संशोधन) विधेयक,2019",
        member: "श्री तरुण भनोत, वित्‍त मंत्री",
        department: "पंचायत एवं ग्रामीण विकास",
        introDate: "20/02/2019",
        discussionDate: "21/02/2019",
        governorDate: "19/06/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-7 सन् 2019",
        pdf: "/misc/bill_2019/Bill%20no%208.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%207%20of%202019.pdf"
      }
    ]
  },
  {
    session: "July, 2019 (3rd Session of 15th Vidhan Sabha)",
    data: [
      {
        no: 9,
        title: "मध्‍यप्रदेश आयुर्विज्ञान परिषद् (संशोधन) विधेयक,2019",
        member: "डॉ. विजयलक्ष्‍मी साधौ, चिकित्‍सा शिक्षा मंत्री",
        department: "चिकित्‍सा शिक्षा",
        introDate: "09/07/2019",
        discussionDate: "23/07/2019",
        governorDate: "13/08/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-14 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%209%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2014%20of%202019.pdf"
      },
      {
        no: 10,
        title: "मध्‍यप्रदेश कृषि-उपज मण्‍डी (संशोधन) विधेयक,2019",
        member: "श्री सचिन सुभाष यादव, कृषि मंत्री",
        department: "किसान कल्‍याण तथा कृषि विकास",
        introDate: "09/07/2019",
        discussionDate: "23/07/2019",
        governorDate: "09/08/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-9 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2010%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%209%20of%202019.pdf"
      },
      {
        no: 11,
        title: "मध्‍यप्रदेश माखनलाल चतुर्वेदी राष्ट्रीय पत्रकारिता एवं संचार विश्वविद्यालय (संशोधन) विधेयक,2019",
        member: "श्री पी.सी. शर्मा, जनसंपर्क मंत्री",
        department: "जनसंपर्क",
        introDate: "09/07/2019",
        discussionDate: "23/07/2019 and 24/07/2019 with Amendment. The Bill returned  by Governor for reconsideration  and tabled in the House on  18/12/2019.The bill  reconsidered and re-passed by the House with amendments on 19 December 2019.",
        governorDate: "22/01/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-9 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2011%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20no%209%20of%202020.pdf"
      },
      {
        no: 12,
        title: "मध्‍यप्रदेश अधिवक्‍ता कल्‍याण निधि(संशोधन) विधेयक,2019",
        member: "श्री पी.सी. शर्मा, विधि मंत्री",
        department: "विधि एवं विधायी कार्य",
        introDate: "09/07/2019",
        discussionDate: "23/07/2019",
        governorDate: "22/08/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-17 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2012%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2017%20of%202019.pdf"
      },
      {
        no: 13,
        title: "मध्‍यप्रदेश माध्‍यस्‍थम् अधिकरण(संशोधन) विधेयक,2019",
        member: "श्री पी.सी. शर्मा, विधि मंत्री",
        department: "विधि एवं विधायी कार्य",
        introDate: "09/07/2019",
        discussionDate: "23/07/2019",
        governorDate: "22/08/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-18 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2013%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2018%20of%202019.pdf"
      },
      {
        no: 14,
        title: "दण्‍ड विधि (मध्‍यप्रदेश संशोधन) विधेयक,2019",
        member: "श्री पी.सी. शर्मा, विधि मंत्री",
        department: "विधि एवं विधायी कार्य",
        introDate: "09/07/2019",
        discussionDate: "24/07/2019",
        governorDate: "",
        presidentDate: "",
        actNo: "",
        pdf: "/misc/bill_2019/bill%20no%2014%20of%202019.pdf",
      },
      {
        no: 15,
        title: "मध्‍यप्रदेश लोक सेवा (अनुसूचित जातियों, अनुसूचित जनजातियों और अन्य पिछड़े वर्गों के लिए आरक्षण) संशोधन विधेयक,2019",
        member: "डॉ. गोविन्‍द सिंह, सामान्य प्रशासन मंत्री",
        department: "सामान्य प्रशासन",
        introDate: "17/07/2019",
        discussionDate: "23/07/2019",
        governorDate: "13/08/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-12 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2015%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2012%20of%202019.pdf",

      },
      {
        no: 16,
        title: "मध्‍यप्रदेश सिंचाई प्रबंधन में कृषकों की भागीदारी (संशोधन) विधेयक,2019",
        member: "श्री हुकुम सिंह कराड़ा, जल संसाधन मंत्री",
        department: "जल संसाधन",
        introDate: "17/07/2019",
        discussionDate: "23/07/2019",
        governorDate: "13/08/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-13 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2016%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2013%20of%202019.pdf",

      },
      {
        no: 17,
        title: "मध्‍यप्रदेश गौवंश वध प्रतिषेध (संशोधन) विधेयक,2019",
        member: "श्री लाखन सिंह यादव, पशुपालन मंत्री",
        department: "पशुपालन",
        introDate: "17/07/2019",
        discussionDate: "Referred to Select Committee",
        governorDate: "",
        presidentDate: "",
        actNo: "",
        pdf: "/misc/bill_2019/bill%20no%2017%20of%202019.pdf",
        

      },
      {
        no: 18,
        title: "नानाजी देशमुख पशु चिकित्सा विज्ञान विश्वविद्यालय (संशोधन) विधेयक,2019",
        member: "श्री लाखन सिंह यादव, पशुपालन मंत्री",
        department: "पशुपालन",
        introDate: "17/07/2019",
        discussionDate: "23/07/2019",
        governorDate: "16/08/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-15 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2018%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2015%20of%202019.pdf",

      },
      {
        no: 19,
        title: "मध्‍यप्रदेश विश्वविद्यालय (संशोधन) विधेयक,2019",
        member: "श्री जीतू पटवारी, विधि मंत्री",
        department: "उच्च शिक्षा",
        introDate: "17/07/2019",
        discussionDate: "23/07/2019",
        governorDate: "13/08/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-10 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2019%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2010%20of%202019.pdf",

      },
      {
        no: 20,
        title: "मध्‍यप्रदेश लोक स्वास्थ्य (संशोधन) विधेयक,2019",
        member: "श्री तुलसीराम सिलावट, मंत्री",
        department: "लोक स्वास्थ्य एवं परिवार कल्याण",
        introDate: "20/07/2019",
        discussionDate: "23/07/2019",
        governorDate: "09/09/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-23 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2020%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2023%20of%202019.pdf",

      },
      {
        no: 21,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-4) विधेयक,2019",
        member: "श्री तरुण भनोत, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "21/07/2019",
        discussionDate: "21/07/2019",
        governorDate: "26/07/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-8 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2021%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%208%20of%202019.pdf",

      },
      {
        no: 22,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-5) विधेयक,2019",
        member: "श्री तरुण भनोत, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "23/07/2019",
        discussionDate: "23/07/2019",
        governorDate: "06/09/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-21 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2022%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2021%20of%202019.pdf",

      },
      {
        no: 23,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-6) विधेयक,2019",
        member: "श्री तरुण भनोत, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "23/07/2019",
        discussionDate: "23/07/2019",
        governorDate: "06/09/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-20 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2023%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2020%20of%202019.pdf",

      },
      {
        no: 24,
        title: "मध्‍यप्रदेश मोटरयान कराधान (संशोधन) विधेयक,2019",
        member: "श्री गोविन्‍द सिंह राजपूत, परिवहन मंत्री",
        department: "परिवहन",
        introDate: "20/07/2019",
        discussionDate: "23/07/2019",
        governorDate: "22/08/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-19 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2024%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2019%20of%202019.pdf",

      },
      {
        no: 25,
        title: "मध्‍यप्रदेश गौ-भैंस वंश प्रजनन विनियमन विधेयक,2019",
        member: "श्री लाखन सिंह यादव, मंत्री",
        department: "पशुपालन",
        introDate: "23/07/2019",
        discussionDate: "24/07/2019",
        governorDate: "16/08/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-16 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2025%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20no%2016%20of%202019.pdf",

      },
      {
        no: 26,
        title: "मध्‍यप्रदेश निजी विश्वविद्यालय (स्थापना एवं संचालन) संशोधन विधेयक,2019",
        member: "श्री जीतू पटवारी, उच्च शिक्षा मंत्री",
        department: "उच्च शिक्षा",
        introDate: "23/07/2019",
        discussionDate: "23/07/2019 With Amendment",
        governorDate: "13/08/2019",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-11 सन् 2019",
        pdf: "/misc/bill_2019/bill%20no%2026%20of%202019.pdf",
        actPdf: "/misc/bill_2019/ACT%20No%2011%20of%202019.pdf",

      }
      

    ]
  },
   {
    session: "December, 2019 (4th Session of 15th Vidhan Sabha)",
    data: [
      {
        no: 27,
        title: "मध्‍यप्रदेश आयुर्विज्ञान (द्वितीय संशोधन) विधेयक, 2019",
        member: "डॉ. विजयलक्ष्‍मी साधौ, मंत्री",
        department: "चिकित्‍सा शिक्षा",
        introDate: "18/12/2019",
        discussionDate: "18/12/2019",
        governorDate: "31/01/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-13 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2027%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2013%20of%202020.pdf"
      },
      {
        no: 28,
        title: "मध्‍यप्रदेश सिंचाई प्रबंधन में कृषकों की भागीदारी (द्वितीय संशोधन) विधेयक, 2019",
        member: "श्री हुकुम सिंह कराड़ा, मंत्री",
        department: "जल संसाधन",
        introDate: "18/12/2019",
        discussionDate: "18/12/2019",
        governorDate: "21/01/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-5 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2028%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%205%20of%202020.pdf"
      },
      {
        no: 29,
        title: "मध्‍यप्रदेश विश्वविद्यालय (द्वितीय संशोधन) विधेयक, 2019",
        member: "श्री जीतू पटवारी, उच्‍चशिक्षा मंत्री",
        department: "उच्‍च शिक्षा",
        introDate: "18/12/2019",
        discussionDate: "18/12/2019",
        governorDate: "22/01/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-6 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2029%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%206%20of%202020.pdf"
      },
      {
        no: 30,
        title: "महर्षि पाणिनि संस्कृत विश्वविद्यालय (संशोधन) विधेयक, 2019",
        member: "श्री जीतू पटवारी, उच्‍चशिक्षा मंत्री",
        department: "उच्‍च शिक्षा",
        introDate: "18/12/2019",
        discussionDate: "18/12/2019",
        governorDate: "22/01/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-7 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2030%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%207%20of%202020.pdf"
      },
      {
        no: 31,
        title: "महात्मा गांधी चित्रकूट ग्रामोदय विश्वविद्यालय (संशोधन) विधेयक, 2019",
        member: "श्री जीतू पटवारी, उच्‍चशिक्षा मंत्री",
        department: "उच्‍च शिक्षा",
        introDate: "18/12/2019",
        discussionDate: "18/12/2019",
        governorDate: "31/01/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-12 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2031%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2012%20of%202020.pdf"
      },
      {
        no: 32,
        title: "मध्‍यप्रदेश मोटरयान कराधान (द्वितीय संशोधन) विधेयक, 2019",
        member: "श्री गोविन्‍द सिंह राजपूत, मंत्री",
        department: "परिवहन",
        introDate: "19/12/2019",
        discussionDate: "19/12/2019",
        governorDate: "10/01/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-4 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2032%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%204%20of%202020.pdf"
      },
      {
        no: 33,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-7) विधेयक, 2019",
        member: "श्री तरुण भनोत, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "19/12/2019",
        discussionDate: "19/12/2019",
        governorDate: "04/01/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-2 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2033%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%202%20of%202020.pdf"
      },
      {
        no: 34,
        title: "मध्‍यप्रदेश विनियोग (क्रमांक-8) विधेयक, 2019",
        member: "श्री तरुण भनोत, वित्‍त मंत्री",
        department: "वित्‍त",
        introDate: "20/12/2019",
        discussionDate: "20/12/2019",
        governorDate: "04/01/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-3 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2034%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%203%20of%202020.pdf"
      },
      {
        no: 35,
        title: "मध्‍यप्रदेश नगर तथा ग्राम निवेश (संशोधन) विधेयक, 2019",
        member: "श्री जयवर्द्धन सिंह, नगरीय विकास और आवास मंत्री",
        department: "नगरीय विकास एवं आवास",
        introDate: "20/12/2019",
        discussionDate: "20/12/2019",
        governorDate: "13/02/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-15 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2035%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2015%20of%202020.pdf"
      },
      {
        no: 36,
        title: "मध्‍यप्रदेश विद्युत प्रदाय उपक्रम (अर्जन) निरसन विधेयक, 2019",
        member: "श्री प्रियव्रत सिंह, मंत्री",
        department: "ऊर्जा",
        introDate: "19/12/2019",
        discussionDate: "19/12/2019",
        governorDate: "21/01/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-8 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2036%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%208%20of%202020.pdf"
      },
      {
        no: 37,
        title: "मध्‍यप्रदेश स्‍थानीय प्राधिकरण (निर्वाचन अपराध) संशोधन विधेयक, 2019",
        member: "श्री जयवर्द्धन सिंह, नगरीय विकास और आवास मंत्री",
        department: "नगरीय विकास एवं आवास",
        introDate: "19/12/2019",
        discussionDate: "19/12/2019",
        governorDate: "27/01/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-10 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2037%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2010%20of%202020.pdf"
      },
      {
        no: 38,
        title: "मध्‍यप्रदेश नगरपालिका विधि (संशोधन) विधेयक, 2019",
        member: "श्री जयवर्द्धन सिंह, नगरीय विकास और आवास मंत्री",
        department: "नगरीय विकास एवं आवास",
        introDate: "20/12/2019",
        discussionDate: "20/12/2019",
        governorDate: "27/01/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-11 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2038%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2011%20of%202020.pdf"
      },
      {
        no: 39,
        title: "मध्‍यप्रदेश माल और सेवा कर (द्वितीय संशोधन) विधेयक, 2019",
        member: "श्री बृजेन्‍द्र सिंह राठौर, मंत्री",
        department: "वाणिज्यिक कर",
        introDate: "19/12/2019",
        discussionDate: "19/12/2019",
        governorDate: "04/01/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-1 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2039%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20no%201%20of%202020.pdf"
      },
      {
        no: 40,
        title: "मध्‍यप्रदेश भू-राजस्व संहिता (संशोधन) विधेयक, 2019",
        member: "श्री गोविन्‍द सिंह राजपूत, मंत्री",
        department: "राजस्व",
        introDate: "20/12/2019",
        discussionDate: "20/12/2019",
        governorDate: "07/02/2020",
        presidentDate: "",
        actNo: "अधिनियम क्रमांक-14 सन् 2020",
        pdf: "/misc/bill_2019/bill%20no%2040%20of%202019.pdf",
        actPdf: "/misc/Bill_2020/ACT%20No%2014%20of%202020.pdf"
      },
      {
        no: 41,
        title: "मध्‍यप्रदेश जिला योजना समिति (संशोधन) विधेयक, 2019",
        member: "श्री तरुण भनोत, वित्‍त मंत्री",
        department: "योजना, आर्थिक एवं सांख्यिकी",
        introDate: "20/12/2019",
        discussionDate: "20/12/2019",
        governorDate: "",
        presidentDate: "",
        actNo: "",
        pdf: "/misc/bill_2019/bill%20no%2041%20of%202019.pdf",
        
      },
      {
        no: 42,
        title: "मध्‍यप्रदेश विनिर्दिष्ट मंदिर विधेयक, 2019",
        member: "श्री पी.सी. शर्मा, मंत्री",
        department: "अध्‍यात्‍म",
        introDate: "20/12/2019",
        discussionDate: "20/12/2019",
        governorDate: "",
        presidentDate: "",
        actNo: "",
        pdf: "/misc/bill_2019/bill%20no%2042%20of%202019.pdf",
        
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
        <h1 style={styles.headerTitle}>{bills2019[0].session}</h1>
      </header>

      <div style={styles.container}>
        {bills2019.map((session, sIdx) => (
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

export default VidhaeyakTable2019;
