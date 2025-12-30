import React from "react";
import { useNavigate } from "react-router-dom";

const VidhaeyakTable2021 = () => {
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

const bills2021 = [
  {
    session: "February-March, 2021 (8th Session of 15th Vidhan Sabha)",
    data: [
      { no: 1, title: "मध्‍यप्रदेश धार्मिक स्‍वतंत्रता विधेयक,2021", member: "डॉ. नरोत्‍तम मिश्र, मंत्री", department: "गृह", introDate: "01/03/2021", discussionDate: "08/03/2021", governorDate: "26/03/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 5 सन् 2021",pdf: "/misc/bill_2021/Bill%20N0.%201.pdf",actPdf: "/misc/bill_2021/ACT%20No%205%20of%202021.pdf" },
      { no: 2, title: "मध्‍यप्रदेश नगरपालिक विधि (द्वितीय संशोधन) विधेयक,2021", member: "श्री भूपेन्‍द्र सिंह, मंत्री", department: "नगरीय विकास तथा आवास", introDate: "24/02/2021", discussionDate: "16/03/2021", governorDate: "02/04/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 14 सन् 2021",pdf: "/misc/bill_2021/Bill%20N0.%202.pdf",actPdf: "/misc/bill_2021/ACT%20No%2014%20of%202021.pdf" },
      { no: 3, title: "मध्‍यप्रदेश नगरपालिक विधि (तृतीय संशोधन) विधेयक,2021", member: "श्री भूपेन्‍द्र सिंह, मंत्री", department: "नगरीय विकास तथा आवास", introDate: "24/02/2021", discussionDate: "", governorDate: "", presidentDate: "", actNo: "" ,pdf: "/misc/bill_2021/Bill%20N0.%203.pdf"},
      { no: 4, title: "मध्‍यप्रदेश वेट (संशोधन) विधेयक,2021", member: "श्री जगदीश देवड़ा, मंत्री", department: "वाणिज्यिक कर", introDate: "24/02/2021", discussionDate: "16/03/2021", governorDate: "02/04/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 15 सन् 2021",pdf: "/misc/bill_2021/Bill%20N0.%204.pdf",actPdf: "/misc/bill_2021/ACT%20No%2015%20of%202021.pdf" },
      { no: 5, title: "मध्‍यप्रदेश मोटर स्पिरिट उपकर (संशोधन) विधेयक,2021", member: "श्री जगदीश देवड़ा, मंत्री", department: "वाणिज्यिक कर", introDate: "24/02/2021", discussionDate: "16/03/2021", governorDate: "02/04/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 16 सन् 2021" ,pdf: "/misc/bill_2021/Bill%20N0.%205.pdf",actPdf: "/misc/bill_2021/ACT%20No%2016%20of%202021.pdf"},
      { no: 6, title: "मध्‍यप्रदेश हाई स्‍पीड डीजल उपकर (संशोधन) विधेयक,2021", member: "श्री जगदीश देवड़ा, मंत्री", department: "वाणिज्यिक कर", introDate: "24/02/2021", discussionDate: "16/03/2021", governorDate: "02/04/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 17 सन् 2021" ,pdf: "/misc/bill_2021/Bill%20N0.%206.pdf",actPdf: "/misc/bill_2021/ACT%20No%2017%20of%202021.pdf"},
      { no: 7, title: "मध्‍यप्रदेश कराधान  अधिनियमों की पुरानी बकाया राशि का समाधान विधेयक,2021", member: "श्री जगदीश देवड़ा, मंत्री", department: "वाणिज्यिक कर", introDate: "24/02/2021", discussionDate: "16/03/2021", governorDate: "02/04/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 18 सन् 2021",pdf: "/misc/bill_2021/Bill%20N0.%207.pdf",actPdf: "/misc/bill_2021/ACT%20No%2018%20of%202021.pdf"},
      { no: 8, title: "मध्‍यप्रदेश भोज (मुक्‍त) विश्‍वविद्यालय संशोधन विधेयक,2021", member: "डॉ. मोहन यादव, मंत्री", department: "उच्‍च शिक्षा", introDate: "25/02/2021", discussionDate: "01/03/2021", governorDate: "26/03/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 6 सन् 2021",pdf: "/misc/bill_2021/Bill%20N0.%208.pdf",actPdf: "/misc/bill_2021/ACT%20No%206%20of%202021.pdf" },
      { no: 9, title: "डॉ. बी. आर. अम्‍बेडकर सामाजिक विज्ञान विश्‍वविद्यालय (संशोधन) विधेयक,2021", member: "डॉ. मोहन यादव, मंत्री", department: "उच्‍च शिक्षा", introDate: "25/02/2021", discussionDate: "01/03/2021", governorDate: "26/03/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 7 सन् 2021",pdf: "/misc/bill_2021/Bill%20N0.%209.pdf",actPdf: "/misc/bill_2021/ACT%20No%207%20of%202021.pdf" },
      { no: 10, title: "पंडित एस.एन.शुक्‍ला विश्‍वविद्यालय (संशोधन) विधेयक,2021", member: "डॉ. मोहन यादव, मंत्री", department: "उच्‍च शिक्षा", introDate: "25/02/2021", discussionDate: "01/03/2021", governorDate: "26/03/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 8 सन् 2021" ,pdf: "/misc/bill_2021/Bill%20N0.%2010%20(2021).pdf",actPdf: "/misc/bill_2021/ACT%20No%208%20of%202021.pdf"},
      { no: 11, title: "मध्‍यप्रदेश निजी विश्‍वविद्यालय (स्‍थापना एवं संचालन) संशोधन विधेयक,2021", member: "डॉ. मोहन यादव, मंत्री", department: "उच्‍च शिक्षा", introDate: "25/02/2021", discussionDate: "01/03/2021", governorDate: "26/03/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 9 सन् 2021" ,pdf: "/misc/bill_2021/Bill%20N0.%2011.pdf",actPdf: "/misc/bill_2021/ACT%20No%209%20of%202021.pdf"},
      { no: 12, title: "मध्‍यप्रदेश लोक सेवाओं के प्रदान की गारंटी (संशोधन) विधेयक,2021", member: "डॉ. अरविन्‍द सिंह भदौरिया, मंत्री", department: "लोक सेवा प्रबंधन", introDate: "25/02/2021", discussionDate: "16/03/2021", governorDate: "02/04/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 12 सन् 2021",pdf: "/misc/bill_2021/Bill%20N0.%2012.pdf",actPdf: "/misc/bill_2021/ACT%20No%2012%20of%202021.pdf" },
      { no: 13, title: "मध्‍यप्रदेश सिंचाई प्रबंधन में कृषकों की भागीदारी (संशोधन) विधेयक,2021", member: "श्री तुलसीराम सिलावट, मंत्री", department: "जल संसाधन", introDate: "25/02/2021", discussionDate: "16/03/2021", governorDate: "11/05/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 19 सन् 2021",pdf: "/misc/bill_2021/Bill%20N0.%2013.pdf",actPdf: "/misc/bill_2021/ACT%20No%2019%20of%202021.pdf"},
      { no: 14, title: "मध्‍यप्रदेश सिविल न्‍यायालय (संशोधन) विधेयक,2021", member: "डॉ. नरोत्‍तम मिश्र, मंत्री", department: "विधि और विधायी कार्य", introDate: "25/02/2021", discussionDate: "01/03/2021", governorDate: "26/03/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 10 सन् 2021" ,pdf: "/misc/bill_2021/Bill%20N0.%2014.pdf",actPdf: "/misc/bill_2021/ACT%20No%2010%20of%202021.pdf"},
      { no: 15, title: "मध्‍यप्रदेश राज्‍य पिछड़ा वर्ग आयोग (संशोधन) विधेयक,2021", member: "श्री रामखेलावन पटेल, राज्यमंत्री", department: "पिछड़ा वर्ग एवं अल्‍पसंख्‍यक कल्‍याण", introDate: "08/03/2021", discussionDate: "16/03/2021", governorDate: "02/04/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 13 सन् 2021",pdf: "/misc/bill_2021/Bill%20N0.%2015.pdf",actPdf: "/misc/bill_2021/ACT%20No%2013%20of%202021.pdf" },
      { no: 16, title: "मध्‍यप्रदेश विनियोग विधेयक,2021", member: "श्री जगदीश देवड़़ा, मंत्री", department: "वित्‍त", introDate: "04/03/2021", discussionDate: "04/03/2021", governorDate: "11/03/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 1 सन् 2021",pdf: "/misc/bill_2021/Bill%20N0.%2016.pdf",actPdf: "/misc/bill_2021/ACT%20No%201%20of%202021.pdf" },
      { no: 17, title: "मध्‍यप्रदेश विनियोग (क्रमांक-2) विधेयक,2021", member: "श्री जगदीश देवड़़ा, मंत्री", department: "वित्‍त", introDate: "04/03/2021", discussionDate: "04/03/2021", governorDate: "11/03/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 2 सन् 2021" ,pdf: "/misc/bill_2021/Bill%20N0.%2017.pdf",actPdf: "/misc/bill_2021/ACT%20No%202%20of%202021.pdf"},
      { no: 18, title: "मध्‍यप्रदेश विनियोग (क्रमांक-3) विधेयक,2021", member: "श्री जगदीश देवड़़ा, मंत्री", department: "वित्‍त", introDate: "16/03/2021", discussionDate: "16/03/2021", governorDate: "26/03/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 3 सन् 2021" ,pdf: "/misc/bill_2021/Bill%20N0.%2018.pdf",actPdf: "/misc/bill_2021/ACT%20No%203%20of%202021.pdf"},
      { no: 19, title: "मध्‍यप्रदेश वित्‍त विधेयक,2021", member: "श्री जगदीश देवड़़ा, मंत्री", department: "वित्‍त", introDate: "15/03/2021", discussionDate: "16/03/2021", governorDate: "26/03/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 4 सन् 2021" ,pdf: "/misc/bill_2021/Bill%20N0.%2019.pdf",actPdf: "/misc/bill_2021/ACT%20No%204%20of%202021.pdf"},
      { no: 20, title: "दण्‍ड विधि (मध्‍यप्रदेश संशोधन) विधेयक,2021", member: "डॉ. नरोत्‍तम मिश्र, मंत्री", department: "वाणिज्यिक कर", introDate: "09/03/2021", discussionDate: "16/03/2021", governorDate: "", presidentDate: "", actNo: "" ,pdf: "/misc/bill_2021/Bill%20N0.%2020.pdf"},
      { no: 21, title: "मध्‍यप्रदेश सहाकारी सोसाइटी (संशोधन) विधेयक,2021", member: "डॉ. अरविन्‍द सिंह भदौरिया, मंत्री", department: "सहकारिता", introDate: "15/03/2021", discussionDate: "16/03/2021", governorDate: "02/04/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 11 सन् 2021",pdf: "/misc/bill_2021/Bill%20N0.%2021.pdf",actPdf: "/misc/bill_2021/ACT%20No%2011%20of%202021.pdf" },
      { no: 22, title: "मध्‍यप्रदेश विनियोग अधिनियम (निरसर) विधेयक,2021", member: "डॉ. नरोत्‍तम मिश्र, मंत्री", department: "विधि और विधायी कार्य", introDate: "10/08/2021", discussionDate: "10/08/2021", governorDate: "02/09/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 24 सन् 2021",pdf: "/misc/bill_2021/bill%20no%2022%20of%202021.pdf",actPdf: "/misc/bill_2021/ACT%20No%2024%20of%202021.pdf" },
      { no: 23, title: "मध्‍यप्रदेश संशोधन अधिनियमों का निरसन विधेयक,2021", member: "डॉ. नरोत्‍तम मिश्र, मंत्री", department: "विधि और विधायी कार्य", introDate: "10/08/2021", discussionDate: "10/08/2021", governorDate: "02/09/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 25 सन् 2021",pdf: "/misc/bill_2021/bill%20no%2023%20of%202021.pdf",actPdf: "/misc/bill_2021/ACT%20No%2025%20of%202021.pdf" }
    ]
  },
  {
    session: "August, 2021 (9th Session of 15th Vidhan Sabha)",
    data: [
      { no: 24, title: "मध्‍यप्रदेश नगरपालिक विधि (संशोधन) विधेयक, 2021", member: "श्री भूपेन्‍द्र सिंह, मंत्री", department: "नगरीय विकास एवं आवास", introDate: "10/08/2021", discussionDate: "10/08/2021", governorDate: "26/08/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 22 सन् 2021",pdf: "/misc/bill_2021/bill%20no%2024%20of%202021.pdf",actPdf: "/misc/bill_2021/ACT%20No%2022%20of%202021.pdf" },
      { no: 25, title: "महात्‍मा गांधी चित्रकूट ग्रामोदय विश्‍वविद्यालय (संशोधन) विधेयक, 2021", member: "डॉ. मोहन यादव, मंत्री", department: "उच्‍च शिक्षा", introDate: "10/08/2021", discussionDate: "10/08/2021", governorDate: "02/09/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 23 सन् 2021" ,pdf: "/misc/bill_2021/bill%20no%2025%20of%202021.pdf",actPdf: "/misc/bill_2021/ACT%20No%2023%20of%202021.pdf"},
      { no: 26, title: "मध्‍यप्रदेश आबकारी (संशोधन) विधेयक, 2021", member: "श्री जगदीश देवड़ा, मंत्री", department: "वाणिज्यिक कर", introDate: "10/08/2021", discussionDate: "10/08/2021", governorDate: "06/09/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 26 सन् 2021",pdf: "/misc/bill_2021/bill%20no%2026%20of%202021.pdf",actPdf: "/misc/bill_2021/ACT%20No%2026%20of%202021.pdf" },
      { no: 27, title: "मध्‍यप्रदेश माल और सेवा कर (संशोधन) विधेयक, 2021", member: "श्री जगदीश देवड़ा, मंत्री", department: "वाणिज्यिक कर", introDate: "10/08/2021", discussionDate: "10/08/2021", governorDate: "26/08/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 21 सन् 2021" ,pdf: "/misc/bill_2021/bill%20no%2027%20of%202021.pdf",actPdf: "/misc/bill_2021/ACT%20No%2021%20of%202021.pdf"},
      { no: 28, title: "मध्‍यप्रदेश विनियोग (क्रमांक-4) विधेयक, 2021", member: "श्री जगदीश देवड़ा, मंत्री", department: "वित्‍त", introDate: "09/08/2021", discussionDate: "10/08/2021", governorDate: "23/08/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 20 सन् 2021" ,pdf: "/misc/bill_2021/bill%20no%2028%20of%202021.pdf",actPdf: "/misc/bill_2021/ACT%20No%2020%20of%202021.pdf"}
    ]
  },
  {
    session: "December, 2021 (10th Session of 15th Vidhan Sabha)",
    data: [
      { no: 29, title: "मध्‍यप्रदेश काष्‍ठ चिरान (विनियमन) संशोधन विधेयक, 2021", member: "डॉ. कुंवर विजय शाह, मंत्री", department: "वन", introDate: "21/12/2021", discussionDate: "23/12/2021", governorDate: "11/01/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 4 सन् 2022" ,pdf: "/misc/bill_2021/Bill%20No.%2029.pdf",actPdf: "/misc/bill2022/ACT%20No%204%20of%202022.pdf"},
      { no: 30, title: "मध्‍यप्रदेश भू-राजस्‍व संहिता (संशोधन) विधेयक, 2021", member: "श्री गोविन्‍द सिंह राजपूत, मंत्री", department: "राजस्‍व", introDate: "21/12/2021", discussionDate: "23/12/2021", governorDate: "03/01/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 2 सन् 2022" ,pdf: "/misc/bill_2021/Bill%20No.%2030.pdf",actPdf: "/misc/bill2022/ACT%20No%202%20of%202022.pdf"},
      { no: 31, title: "ग्‍वालियर व्‍यापार मेला प्राधिकारण (संशोधन) विधेयक, 2021", member: "श्री ओमप्रकाश सखलेचा, मंत्री", department: "सूक्ष्‍म, लघु और मध्‍यम उद्यम", introDate: "21/12/2021", discussionDate: "24/12/2021", governorDate: "17/01/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 5 सन् 2022",pdf: "/misc/bill_2021/Bill%20No.%2031.pdf",actPdf: "/misc/bill2022/ACT%20No%205%20og%202022.pdf" },
      { no: 32, title: "मध्‍यप्रदेश विश्‍वविद्यालय (संशोधन) विधेयक, 2021", member: "डॉ. मोहन यादव, मंत्री", department: "उच्‍च शिक्षा", introDate: "21/12/2021", discussionDate: "23/12/2021", governorDate: "07/01/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 3 सन् 2022",pdf: "/misc/bill_2021/Bill%20No.%2032.pdf",actPdf: "/misc/bill2022/ACT%20No%203%20of%202022.pdf" },
      { no: 33, title: "मध्‍यप्रदेश पंचायतराज एवं ग्राम स्‍वराज (संशोधन) विधेयक, 2021", member: "श्री महेन्‍द्र सिंह सिसौदिया, मंत्री", department: "पंचायत एवं ग्रामीण विकास", introDate: "", discussionDate: "", governorDate: "", presidentDate: "", actNo: "",pdf: "/misc/bill_2021/Bill%20No.%2033.pdf" },
      { no: 34, title: "मध्‍यप्रदेश लोक एवं निजी संपत्ति को नुकसान का निवारण एवं नुकसानी की वसूली विधेयक, 2021", member: "डॉ. नरोत्‍तम मिश्र, मंत्री", department: "गृह", introDate: "22/12/2021", discussionDate: "23/12/2021", governorDate: "03/01/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 1 सन् 2022",pdf: "/misc/bill_2021/Bill%20No.%2034.pdf",actPdf: "/misc/bill2022/ACT%20No%201%20of%202022.pdf" },
      { no: 35, title: "मध्‍यप्रदेश विनियोग (क्रमांक -5) विधेयक, 2021", member: "श्री जगदीश देवड़ा, मंत्री", department: "वित्‍त", introDate: "23/12/2021", discussionDate: "23/12/2021", governorDate: "28/12/2021", presidentDate: "", actNo: "अधिनियम क्रमांक 27 सन् 2021" ,pdf: "/misc/bill_2021/Bill%20No.%2035.pdf",actPdf: "/misc/bill_2021/ACT%20No%2027%20of%202021.pdf"},
      { no: 36, title: "नानाजी देशमुख पशु चिकित्‍सा विज्ञान विश्‍वविद्यालय (संशोधन) विधेयक, 2021", member: "श्री प्रेमसिंह पटेल, मंत्री", department: "पशुपालन एवं डेयरी", introDate: "22/12/2021", discussionDate: "23/12/2021", governorDate: "17/02/2022", presidentDate: "", actNo: "अधिनियम क्रमांक 6 सन् 2022" ,pdf: "/misc/bill_2021/Bill%20No.%2036.pdf",actPdf: "/misc/bill2022/ACT%20No%206%20of%202022.pdf"}
    ]
  }
];


  return (
    <div style={styles.page}>
      <header style={styles.headerBar}>
        <button style={styles.backButton} onClick={() => navigate("/vidheyak/bill")}>
          ← Back
        </button>
        <h1 style={styles.headerTitle}>LEGISLATION / विधायन - 2021</h1>
      </header>

      <div style={styles.container}>
        {bills2021.map((session, sIdx) => (
          <section key={sIdx}>
            <h2 style={styles.sessionHeading}>{session.session}</h2>
            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>क्र.</th>
                    <th style={styles.th}>विधेयक एवं भारसाधक सदस्‍य</th>
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

export default VidhaeyakTable2021;
