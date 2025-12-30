import React, { useState } from "react";

const staffData = [
  {
    name_en: "Shri Arvind Sharma",
    name_hi: "श्री अरविन्द शर्मा",
    designation_en: "Principal Secretary",
    designation_hi: "प्रमुख सचिव",
    email: "arvind.sharma@mpvidhansabha.nic.in",
    branch_en: "Head of Secretariat",
    branch_hi: "सचिवालय प्रमुख",
    address_en: "A-805, Revera Heights, Near Mata Mandir, Bhopal",
    address_hi: "ए-805, रेवेरा हाईट्स, माता मंदिर के पास, भोपाल",
    phone: "0755-2440212 / 2440206",
    epbx: "0755-2523011, 2523006",
    image: "/leaders/newpsimage.png",

  },
  {
    name_en: "Shri B.D. Singh",
    name_hi: "श्री बी.डी. सिंह",
    designation_en: "Additional Secretary",
    designation_hi: "अपर सचिव",
    email: "bdsingh.paraste@mpvidhansabha.nic.in",
    address_en: "F-85/39, Tulsi Nagar, Bhopal",
    address_hi: "एफ-85/39, तुलसी नगर, भोपाल",
    phone: "Residence: 0755-2570455 / Office: 0755-2763797",
    epbx: "0755-2523041",
    image: "/leaders/BDSingh.jpg",
    description_en: "Establishment Branch, Research and Reference Branch, Conduct Committee, Vidhayini, Conduct Committee, Library Branch, Telephone Branch, Private Resolution, Non government Members' Bill & Resolution Committee Branch, Privilege Committee Branch, SC ST Welfare Committee Branch, Stationery Branch, General Branch, Record Branch, Vehicle Branch.",
    description_hi: "स्थापना शाखा, अशासकीय संकल्प, गैर-सरकारी सदस्यों के विधेयकों तथा संकल्पों संबंधी समिति, विशेषाधिकार समिति शाखा, अनुसूचित जाति, अनुसूचित जनजाति के कल्याण संबंधी समिति शाखा, अनुसंधान शाखा, संदर्भ शाखा, विधायनी, आचरण समिति शाखा, पुस्तकालय शाखा, दूरभाष शाखा, स्टेशनरी शाखा, सामान्य शाखा, अभिलेख शाखा, वाहन शाखा."
  },
  {
    name_en: "Shri Birendra Kumar",
    name_hi: "श्री बिरेन्द्र कुमार",
    designation_en: "Additional Secretary",
    designation_hi: "अपर सचिव",
    email: "birendra.kumar@mpvidhansabha.nic.in",
    address_en: "E-117/13, Shivaji Nagar, Bhopal",
    address_hi: "ई-117/13, शिवाजी नगर, भोपाल",
    phone_res: "0755-2764337",
    phone_off: "0755-2570409",
    epbx: "0755-2523039",
    image: "/leaders/Birendrakumar.jpg",
    pdf: "https://mpvidhansabha.nic.in/birendra_kumar.pdf",
    description_en:
      "Assurance Committee Branch, Estimate Branch, Question Branch, Accounts Branch, Public Accounts Committee Branch, Local Bodies and Panchayati Raj Accounts Committee, Store Branch, Question & Reference Committee Branch, Backward Classes Welfare Committee Branch, Computer/Digitization Branch.",
    description_hi:
      "अश्वासन समिति शाखा, अनुमान शाखा, प्रश्न शाखा, लेखा शाखा, लोक लेखा समिति शाखा, स्थानीय निकाय एवं पंचायती राज लेखा समिति, स्टोर शाखा, प्रश्न एवं संदर्भ समिति शाखा, पिछड़ी जाति कल्याण समिति शाखा, कंप्यूटर / डिजिटलीकरण शाखा।",
  },
  {
    name_en: "Shri Umesh Kumar Sharma",
    name_hi: "श्री उमेश कुमार शर्मा",
    designation_en: "Additional Secretary",
    designation_hi: "अपर सचिव",
    email: "umesh.sharma71@mp.gov.in",
    address_en: "B - 25, Shahpura, Bhopal",
    address_hi: "बी - 25, शाहपुरा, भोपाल",
    phone_res: "0755-3589391",
    phone_off: "0755-2440225",
    epbx: "0755-2523009",
    image: "/leaders/umeshksharma.jpg", // add correct image path
    description_en: "Reporting Branch, Legislation Branch (Bills, Rules Branch, Delegated Legislation Committee Branch, Committee for Examining Papers Laid on the Table, General Purpose Committee), Public Undertakings Committee Branch, Petition & Representation Committee Branch, Security Branch, Agriculture Development Committee Branch, MLA Facilities Branch, Adjournment, Call-attention Branch, Zero-Hour, Women & Children Welfare Committee Branch.",
    description_hi: "रिपोर्टिंग शाखा, विधायिका शाखा (विधेयक, नियम शाखा, प्रत्यायोजित विधायिका समिति शाखा, टेबल पर रखे गए पत्रों की जांच के लिए समिति, सामान्य उद्देश्य समिति), सार्वजनिक उपक्रम समिति शाखा, याचिका एवं प्रतिनिधित्व समिति शाखा, सुरक्षा शाखा, कृषि विकास समिति शाखा, विधायक सुविधाएँ शाखा, स्थगन, कॉल-अटेंशन शाखा, ज़ीरो-ऑवर, महिला एवं बाल कल्याण समिति शाखा।"
  },
  {
    name_en: "Smt. Manju Gajbhiye",
    name_hi: "श्रीमती मंजू गजभिये",
    designation_en: "OSD",
    designation_hi: "ओएसडी",
    email: "manju.gajbhiye@mpvidhansabha.nic.in",
    address_en: "E-100/10, Shivaji Nagar, Bhopal",
    address_hi: "ई-100/10, शिवाजी नगर, भोपाल",
    phone_res: "0755-2763187",
    phone_off: "0755-2440213",
    epbx: "0755-2523015",
    image: "/leaders/Manju.jpg", // add correct image path
    description_en: "All Work relating to Legislation & Karya Vinyas Branch, Bills, Public Accounts Committee (Civil / Revenue) Branch, Public Accounts Committee (Impl) Branch, Delegated Legislation Committee Branch, Committee for Examining Papers Laid on the Table, Estimate Branch, Public Undertakings Committee Branch, Women & Children Welfare Committee Branch, As Appellate Officer.",
    description_hi: "विधायिका और कार्य विन्यास शाखा से संबंधित सभी कार्य, विधेयक, लोक लेखा समिति (सिविल / राजस्व) शाखा, लोक लेखा समिति (क्रियान्वयन) शाखा, प्रत्यायोजित विधायिका समिति शाखा, टेबल पर रखे गए पत्रों की जांच के लिए समिति, अनुमान शाखा, सार्वजनिक उपक्रम समिति शाखा, महिला एवं बाल कल्याण समिति शाखा, अपीलीय अधिकारी के रूप में।"
  },
  {
    name_en: "Shri Parikshit Pandey",
    name_hi: "श्री परिक्षित पाण्डे",
    designation_en: "Director (Security)",
    designation_hi: "सुरक्षा निदेशक",
    email: "parikshit.mpvs@mp.gov.in",
    address_en: "M-295, Arvind Vihar Colony, Bag Mughalia, Bhopal",
    address_hi: "एम-295, अरविन्द विहार कॉलोनी, बाग मुग़लिया, भोपाल",
    phone_res: "",
    phone_off: "",
    epbx: "0755-2523062",
    image: "/leaders/parikshitpandey.jpg", // add correct image path
    description_en: "Security Branch, General Branch, Backward Classes Welfare Committee Branch, SC/ST Welfare Committee Branch, Record Branch.",
    description_hi: "सुरक्षा शाखा, सामान्य शाखा, पिछड़ी जाति कल्याण समिति शाखा, अनुसूचित जाति/जनजाति कल्याण समिति शाखा, अभिलेख शाखा।"
  },
  {
    name_en: "Smt. Amita Shrivastava",
    name_hi: "श्रीमती अमिता श्रीवास्तव",
    designation_en: "Deputy Secretary",
    designation_hi: "उप सचिव",
    email: "Amita.shri82@mp.gov.in",
    address_en: "E-117/17, Shivaji Nagar, Near 6 No. Market, Bhopal",
    address_hi: "ई-117/17, शिवाजी नगर, 6 नंबर मार्केट के पास, भोपाल",
    phone_res: "",
    phone_off: "",
    epbx: "",
    image: "/leaders/amitashri.jpg", // Add correct image path
    description_en: "Accounts Branch, MLA Accounts Branch, Drawing & Disbursing Officer, Local Bodies and Panchayati Raj Accounts Committee, Telephone Branch.",
    description_hi: "लेखा शाखा, विधायक लेखा शाखा, ड्रॉइंग एवं डिसबर्सिंग अधिकारी, स्थानीय निकाय एवं पंचायती राज लेखा समिति, दूरभाष शाखा।"
  },
  {
    name_en: "Shri Mohan Lal Manwani",
    name_hi: "श्री मोहन लाल मानवानी",
    designation_en: "Under Secretary",
    designation_hi: "उप सचिव",
    email: "ml.manwani@mpvidhansabha.nic.in",
    address_en: "3, Nirmal Nursery, Bairagarh, Bhopal",
    address_hi: "3, निर्मल नर्सरी, बैरागढ़, भोपाल",
    phone_res: "0755-4250484",
    phone_off: "0755-2440831",
    epbx: "0755-2523166",
    image: "/leaders/M L Manwani.jpg", // Add correct image path
    description_en: "Public Accounts Committee (Revenue/Civil) Branch, Public Accounts Committee (Impl) Branch, Estimates Committee Branch, Conference & Protocol Branch.",
    description_hi: "लोक लेखा समिति (राजस्व/सिविल) शाखा, लोक लेखा समिति (क्रियान्वयन) शाखा, अनुमान समिति शाखा, सम्मेलन एवं प्रोटोकॉल शाखा।"
  },
  {
    name_en: "Shri Rajendra Verma",
    name_hi: "श्री राजेंद्र वर्मा",
    designation_en: "Under Secretary",
    designation_hi: "उप सचिव",
    email: "rajendra.verma@mpvidhansabha.nic.in",
    address_en: "F-88/11, Tulsi Nagar, Bhopal",
    address_hi: "एफ-88/11, तुलसी नगर, भोपाल",
    phone_res: "9575268522",
    phone_off: "0755-2763798",
    epbx: "0755-2523014",
    image: "/leaders/RajendraVerma.jpg", // Add correct image path
    description_en: "Question & Reference Committee Branch, Local Bodies and Panchayati Raj Accounts Committee, Adjournment, Call-attention Branch, Zero-Hour, Private Resolution, Non-government Members' Bill & Resolution Committee Branch.",
    description_hi: "प्रश्न एवं संदर्भ समिति शाखा, स्थानीय निकाय एवं पंचायती राज लेखा समिति, स्थगन, कॉल-अटेंशन शाखा, शून्य-घंटा, निजी प्रस्ताव, गैर-सरकारी सदस्यों के विधेयक एवं संकल्प समिति शाखा।"
  },
  {
    name_en: "Shri Vishwambhar Dayal Goyal",
    name_hi: "श्री विश्वम्भर दयाल गोयल",
    designation_en: "Director (Lib.)",
    designation_hi: "निदेशक (पुस्तकालय)",
    email: "vd.goyal@mpvidhansabha.nic.in",
    address_en: "G-7/83, New 228 Qrts., South TT Nagar, Bhopal",
    address_hi: "जी-7/83, न्यू 228 क्वार्टर, साउथ टीटी नगर, भोपाल",
    phone_res: "0755-2776105",
    phone_off: "0755-2440217",
    epbx: "0755-2523169",
    image: "/leaders/goyal.jpg", // Add correct image path
    description_en: "Library Branch, Research Branch, Conduct Committee Branch, Privilege Branch, Library Research and Reference Committee, Conduct Committee, Privilege Committee, Petition & Representation Committee Branch, Non-government Members' Bill & Resolution Committee Branch.",
    description_hi: "पुस्तकालय शाखा, अनुसंधान शाखा, आचरण समिति शाखा, विशेषाधिकार शाखा, पुस्तकालय अनुसंधान एवं संदर्भ समिति, आचरण समिति, विशेषाधिकार समिति, याचिका एवं प्रतिनिधित्व समिति शाखा, गैर-सरकारी सदस्यों के विधेयक एवं संकल्प समिति शाखा।"
  },
  {
    name_en: "Shri Harish Shrivas",
    name_hi: "श्री हरीश श्रीवास्तव",
    designation_en: "Administrative Officer (Under Secretary)",
    designation_hi: "प्रशासनिक अधिकारी (अंडर सेक्रेटरी)",
    email: "harish.shrivas@mpvidhansabha.nic.in",
    address_en: "F-88/45, Tulsi Nagar, Bhopal",
    address_hi: "एफ-88/45, तुलसी नगर, भोपाल",
    phone_res: "0755-2552928",
    phone_off: "0755-2440227",
    epbx: "0755-2523022",
    image: "/leaders/harish shrivas0001.jpg", // Add correct image path
    description_en: "MLA Facilities Branch and Committee, MLA Accounts Branch, Sub-Office MLA Rest House, Vehicle Branch, Store Branch, Attached with Principal Secretary, Vidhan Sabha.",
    description_hi: "विधानसभा में विधायक सुविधाएँ शाखा और समिति, विधायक लेखा शाखा, उप-कार्यालय विधायक विश्राम गृह, वाहन शाखा, स्टोर शाखा, मुख्य सचिव के अंतर्गत।"
  },
  {
    name_en: "Shri Narendra Kumar Mishra",
    name_hi: "श्री नरेंद्र कुमार मिश्रा",
    designation_en: "Under Secretary",
    designation_hi: "अंडर सेक्रेटरी",
    email: "nk.mishra@mpvidhansabha.nic.in",
    address_en: "E-101/26, Shivaji Nagar, Bhopal",
    address_hi: "ई-101/26, शिवाजी नगर, भोपाल",
    phone_off: "0755-2440221",
    epbx: "0755-2523028",
    image: "/leaders/nkmishra.jpg", // Add correct image path
    description_en: "Question Branch, Assurance Committee Branch, Public Relation Branch, Stationery Branch.",
    description_hi: "प्रश्न शाखा, अश्वासन समिति शाखा, जनसंपर्क शाखा, स्टेशनरी शाखा।"
  },
  {
    name_en: "Shri Ravindranath Dubey",
    name_hi: "श्री रविन्द्रनाथ दुबे",
    designation_en: "Under Secretary",
    designation_hi: "अंडर सेक्रेटरी",
    email: "", // No email provided
    address_en: "F-120/1, Shivaji Nagar, Bhopal (M.P.)",
    address_hi: "एफ-120/1, शिवाजी नगर, भोपाल (म.प्र.)",
    phone_off: "",
    epbx: "0755-2523138",
    image: "/leaders/rndubeyvs.jpg", // Add correct image path
    description_en: "Establishment Branch, Establishment-1 Finance & Pension, MLA Facilities Branch, Legislation Branch (Except Committee for Examining Papers Laid on the Table), Sub-Office MLA Rest House.",
    description_hi: "स्थापना शाखा, स्थापना-1 वित्त एवं पेंशन, विधायक सुविधाएँ शाखा, विधायन शाखा (संदर्भ समिति को छोड़कर), उप-कार्यालय विधायक विश्राम गृह।"
  },
  {
    name_en: "Shri Madhav Daftari",
    name_hi: "श्री माधव दफ्तरी",
    designation_en: "Under Secretary",
    designation_hi: "उप सचिव",
    email: "madhav.daftari@mpvidhansabha.nic.in",
    address_en: "Flat no. 5-1, Gaurav Apartment E-8/283, Trilanga, Bhopal",
    address_hi: "फ्लैट नं. 5-1, गौरव अपार्टमेंट ई-8/283, त्रिलंगा, भोपाल",
    phone_off: "0755-2523104",
    phone_res: "",
    epbx: "",
    image: "/leaders/mdaftarivs.jpg", // Add correct image path
    description_en: "Public Undertakings Committee, Conference and Protocol Branch, Indian Parliamentary Association, Commonwealth Parliamentary Association, Member’s Club, Parliamentary Excellence Award Selection Committee, Question Branch.",
    description_hi: "सार्वजनिक उपक्रम समिति, सम्मेलन और प्रोटोकॉल शाखा, भारतीय संसदीय संघ, कॉमनवेल्थ संसदीय संघ, सदस्य क्लब, संसदीय उत्कृष्टता पुरस्कार चयन समिति, प्रश्न शाखा।"
  },
  {
    name_en: "Shri Shyam Kumar Udasi",
    name_hi: "श्री श्याम कुमार उदासी",
    designation_en: "Select Grade Reporter",
    designation_hi: "सेलेक्ट ग्रेड रिपोर्टर",
    email: "shyam.udasi@mpvidhansabha.nic.in",
    address_en: "216, One Tree Hill, Bairagarh, Bhopal",
    address_hi: "216, वन ट्री हिल, बैरागढ़, भोपाल",
    phone_off: "0755-2440222",
    phone_res: "",
    epbx: "0755-2523173",
    image: "/leaders/shyam_udasi.jpg", // Add correct image path
    description_en: "Accounts Branch, Online Proceeding during House, Speakers Ruling, Backward Classes Welfare Committee Branch.",
    description_hi: "लेखा शाखा, सदन के दौरान ऑनलाइन कार्यवाही, अध्यक्ष के निर्णय, पिछड़ी जाति कल्याण समिति शाखा।"
  },
  {
    name_en: "Shri Mahaveer Singh",
    name_hi: "श्री महावीर सिंह",
    designation_en: "Information Officer",
    designation_hi: "सूचना अधिकारी",
    email: "mahaveer.singh@mpvidhansabha.nic.in",
    address_en: "F-116/14, Shivaji Nagar, Bhopal",
    address_hi: "एफ-116/14, शिवाजी नगर, भोपाल",
    phone_off: "",
    phone_res: "",
    epbx: "0755-2523065",
    image: "/leaders/mahavirsingh.jpg", // Add correct image path
    description_en: "Public Relation Branch, Agriculture Development Committee Branch, Computer Branch.",
    description_hi: "जनसंपर्क शाखा, कृषि विकास समिति शाखा, कंप्यूटर शाखा।"
  },
  {
    name_en: "Smt. Rimjhim Mongiya",
    name_hi: "श्रीमती रिमझिम मोंगिया",
    designation_en: "Select Grade Reporter",
    designation_hi: "सेलेक्ट ग्रेड रिपोर्टर",
    email: "rimjhim.mongiya@mpvidhansabha.nic.in",
    address_en: "F-110/40, Shivaji Nagar, Bhopal",
    address_hi: "एफ-110/40, शिवाजी नगर, भोपाल",
    phone_off: "0755-2440232",
    phone_res: "",
    epbx: "0755-2523136, 0755-2523060",
    image: "/leaders/rimjhim.JPG", // Add correct image path
    description_en: "Editing Branch, Online Proceeding during House, Indexing Branch, Bulletin Part 2.",
    description_hi: "संपादन शाखा, सदन के दौरान ऑनलाइन कार्यवाही, अनुक्रमण शाखा, बुलेटिन भाग 2।"
  },
  {
    name_en: "Shri Rajendra Prasad Dwivedi",
    name_hi: "श्री राजेंद्र प्रसाद द्विवेदी",
    designation_en: "Research Officer (Res.)",
    designation_hi: "अनुसंधान अधिकारी (अनु.)",
    email: "rp.dwivedi@mpvidhansabha.nic.in",
    address_en: "D-12, Quality Paradise, Near Giridhar Complex, Danish Kunj, Kolar Road, Bhopal",
    address_hi: "डी-12, क्वालिटी पैराडाइज, गिरिधर कॉम्प्लेक्स के पास, डैनिश कुंज, कोलार रोड, भोपाल",
    phone_off: "",
    phone_res: "",
    epbx: "0755-2523063",
    image: "/leaders/rpdwivedivs.jpg", // Add correct image path
    description_en: "Public Information Officer, Delegated Legislation Committee Branch.",
    description_hi: "जन सूचना अधिकारी, प्रत्यायोजित विधायिका समिति शाखा।"
  },
  {
    name_en: "Shri Vishnu Pratap Singh",
    name_hi: "श्री विष्णु प्रताप सिंह",
    designation_en: "Research Officer (Lib.)",
    designation_hi: "अनुसंधान अधिकारी (पुस्तकालय)",
    email: "vp.singh@mpvidhansabha.nic.in",
    address_en: "G-3/79, 1100 Qrts, Arera Colony, Bhopal",
    address_hi: "जी-3/79, 1100 क्वार्टर, अरेरा कॉलोनी, भोपाल",
    phone_off: "",
    phone_res: "",
    epbx: "0755-2523061",
    image: "/leaders/vpsinghvs.jpg", // Add correct image path
    description_en: "Library Branch, Research Branch, Privilege and Conduct Committee, Library Research and Reference Committee.",
    description_hi: "पुस्तकालय शाखा, अनुसंधान शाखा, विशेषाधिकार और आचरण समिति, पुस्तकालय अनुसंधान एवं संदर्भ समिति।"
  },
  {
    name_en: "Shri Ajay Kumar Chourey",
    name_hi: "श्री अजय कुमार चौरे",
    designation_en: "Editor of Debate",
    designation_hi: "संसदीय बहस संपादक",
    email: "ajay.kumar.chourey@mpvidhansabha.nic.in", // Update if available
    address_en: "Jr. MIG 1/404, Rachna Tower, Rachna Nagar, Bhopal",
    address_hi: "जे.आर. एमआईजी 1/404, रचना टॉवर, रचना नगर, भोपाल",
    phone_off: "",
    phone_res: "",
    epbx: "0755-2523035",
    image: "/leaders/akchourey.JPG", // Add correct image path
    description_en: "Reporting Branch, Online Proceeding during House, Bulletin Part 1.",
    description_hi: "रिपोर्टिंग शाखा, सदन के दौरान ऑनलाइन कार्यवाही, बुलेटिन भाग 1।"
  },
  {
    name_en: "Ms. Karamjeet Chhinna",
    name_hi: "सुश्री करमजीत छिन्ना",
    designation_en: "Deputy Director (Security)",
    designation_hi: "उप निदेशक (सुरक्षा)",
    email: "", // Email not provided
    address_en: "G-88/76, Tulsi Nagar, Bhopal",
    address_hi: "जी-88/76, तुलसी नगर, भोपाल",
    phone_off: "",
    phone_res: "",
    epbx: "0755-2523020",
    image: "/leaders/user-profile.webp", // Add correct image path
    description_en: "Security Branch.",
    description_hi: "सुरक्षा शाखा।"
  },
  {
    name_en: "Shri Amit Kumar Awasthi",
    name_hi: "श्री अमित कुमार अवस्थी",
    designation_en: "Chief Supervisor (MLA Facility) (Under Secretary)",
    designation_hi: "मुख्य पर्यवेक्षक (विधायक सुविधा) (अंडर सेक्रेटरी)",
    email: "amit.awasthi@mpvidhansabha.nic.in",
    address_en: "F-94/13, Tulsi Nagar, Bhopal",
    address_hi: "एफ-94/13, तुलसी नगर, भोपाल",
    phone_off: "",
    phone_res: "",
    epbx: "0755-2523086",
    image: "/leaders/amitawasthi.JPG", // Add correct image path
    description_en: "Petition & Representation Committee Branch, MLA Facility Branch, MLA Accounts Branch (Railway Coupon).",
    description_hi: "याचिका एवं प्रतिनिधित्व समिति शाखा, विधायक सुविधा शाखा, विधायक लेखा शाखा (रेलवे कूपन)।"
  },
  {
    name_en: "Smt. Archana Singh",
    name_hi: "श्रीमती अर्चना सिंह",
    designation_en: "Chief Supervisor (MLA Facility) (Under Secretary)",
    designation_hi: "मुख्य पर्यवेक्षक (विधायक सुविधा) (अंडर सेक्रेटरी)",
    email: "archana.singh@mpvidhansabha.nic.in",
    address_en: "E-115/19, Shivaji Nagar, Bhopal",
    address_hi: "ई-115/19, शिवाजी नगर, भोपाल",
    phone_off: "",
    phone_res: "",
    epbx: "0755-2523086",
    image: "/leaders/archnasingh.JPG", // Add correct image path
    description_en: "Women & Children Welfare Committee Branch, MLA Facility Branch.",
    description_hi: "महिला एवं बाल कल्याण समिति शाखा, विधायक सुविधा शाखा।"
  },
  // {
  //   name_en: "Smt. Shabnam Rana",
  //   name_hi: "श्रीमती शबनम राणा",
  //   designation_en: "Staff Officer",
  //   designation_hi: "स्टाफ ऑफिसर",
  //   email: "", // No email provided
  //   address_en: "F-112/13, Patrakar Colony, Ginnori, Bhopal",
  //   address_hi: "एफ-112/13, पत्रकार कॉलोनी, गिन्नोरी, भोपाल",
  //   phone_off: "0755-2440225",
  //   phone_res: "",
  //   epbx: "0755-2523009",
  //   image: "/leaders/shabnamrana.jpg", // Add correct image path
  //   description_en: "Record Branch, Associated with Shri Umesh Sharma, Additional Secretary.",
  //   description_hi: "अभिलेख शाखा, श्री उमेश शर्मा, अपर सचिव के साथ संलग्न।"
  // },
  {
    name_en: "Shri Vinod Kumar Dubey",
    name_hi: "श्री विनोद कुमार दुबे",
    designation_en: "Staff Officer",
    designation_hi: "स्टाफ ऑफिसर",
    email: "", // No email provided
    address_en: "F-59, New Minal Residency, Bhopal",
    address_hi: "एफ-59, न्यू मीनल रेसिडेंसी, भोपाल",
    phone_off: "0755-2763797",
    phone_res: "",
    epbx: "0755-2523041",
    image: "/leaders/vinodkdubey.jpg", // Add correct image path
    description_en: "Associated with Additional Secretary (Establishment Branch), SC ST Welfare Committee Branch, General Branch.",
    description_hi: "अपर सचिव (स्थापना शाखा) के साथ संलग्न, अनुसूचित जाति/जनजाति कल्याण समिति शाखा, सामान्य शाखा।"
  },
  {
    name_en: "Shri Rupesh Singh",
    name_hi: "श्री रुपेश सिंह",
    designation_en: "Staff Officer",
    designation_hi: "स्टाफ ऑफिसर",
    email: "", // No email provided
    address_en: "G-97/7, (1250 Qrts.) Tulsi Nagar, Bhopal",
    address_hi: "जी-97/7, (1250 क्वार्टर), तुलसी नगर, भोपाल",
    phone_res: "0755-4270942",
    phone_off: "0755-2570409",
    epbx: "0755-2523039",
    image: "/leaders/rupeshsingh.jpg", // Add correct image path
    description_en: "Telephone Branch, Attached with Additional Secretary (Question).",
    description_hi: "टेलीफोन शाखा, अतिरिक्त सचिव (प्रश्न) के साथ संलग्न।"
  }
];



const SecretariatOrganogram = () => {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = (lang) => setLanguage(lang);

  const topStaff = staffData[0];
  const otherStaff = staffData.slice(1);

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "#f5f7fa",
      minHeight: "100vh",
    },
    headerWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "15px",
      marginBottom: "30px",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: 700,
      textAlign: "center",
      flex: 1,
      margin: 0,
    },
    toggleButtons: {
      display: "flex",
      gap: "10px",
      flexShrink: 0,
      justifyContent: "flex-start",
    },
    button: (active) => ({
      padding: "8px 16px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      fontWeight: 600,
      backgroundColor: active ? "#3b82f6" : "#e2e8f0",
      color: active ? "#fff" : "#1e293b",
    }),
    pdfLink: {
      flexShrink: 0,
      backgroundColor: "#3b82f6",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "6px",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: "1rem",
      whiteSpace: "nowrap",
    },
    topCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      borderRadius: "16px",
      background: "#ffffff",
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      margin: "0 auto 40px auto",
      textAlign: "center",
      maxWidth: "400px",
    },
    topImage: {
      width: "120px",
      height: "160px",
      objectFit: "cover",
      marginBottom: "15px",
      border: "3px solid #090909ff",
    },
    topName: { fontSize: "1.6rem", fontWeight: "700", color: "#0f172a" },
    topDesignation: { fontSize: "1.1rem", fontWeight: "600", color: "#1e40af" },
    topInfo: { fontSize: "0.95rem", color: "#334155", marginBottom: "4px" },
    topDescription: {
      fontSize: "0.9rem",
      color: "#475569",
      textAlign: "justify",
      lineHeight: 1.4,
      marginTop: "8px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    card: {
      background: "#ffffff",
      borderRadius: "12px",
      padding: "15px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
      textAlign: "left",
    },
    cardImage: {
      width: "100px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "12px",
      border: "2px solid #090909ff",
    },
    cardName: { fontWeight: "700", fontSize: "1.1rem", color: "#0f172a" },
    cardDesignation: { fontSize: "0.95rem", fontWeight: "600", color: "#1e40af" },
    cardInfo: { fontSize: "0.95rem", color: "#334155", marginBottom: "4px" },
    cardDescription: {
      fontSize: "0.9rem",
      color: "#475569",
      textAlign: "justify",
      lineHeight: 1.4,
      marginTop: "8px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.headerWrapper}>
        {/* Left: Language Toggle */}
        <div style={styles.toggleButtons}>
          <button
            style={styles.button(language === "en")}
            onClick={() => toggleLanguage("en")}
          >
            English
          </button>
          <button
            style={styles.button(language === "hi")}
            onClick={() => toggleLanguage("hi")}
          >
            Hindi
          </button>
        </div>

        {/* Center: Heading */}
        <h1 style={styles.heading}>
          {language === "en"
            ? "Madhya Pradesh Legislative Assembly"
            : "मध्यप्रदेश विधान सभा सचिवालय"}
        </h1>

        {/* Right: Secretariat Organogram PDF */}
        <a
          href="/galleries/vsorgram.jpg"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.pdfLink}
        >
          {language === "en" ? "Secretariat Organogram" : "सचिवालय आरेख"}
        </a>
      </div>

      {/* Top Staff Card */}
      <div style={styles.topCard}>
        {topStaff.image && (
          <img
            src={topStaff.image}
            alt={topStaff[`name_${language}`]}
            style={styles.topImage}
          />
        )}
        <p style={styles.topName}>{topStaff[`name_${language}`]}</p>
        <p style={styles.topDesignation}>
          {topStaff[`designation_${language}`]}
        </p>
        <p style={styles.topInfo}>
          <strong>📞 Phone:</strong> {topStaff.phone}
        </p>
        <p style={styles.topInfo}>
          <strong>EPBX:</strong> {topStaff.epbx}
        </p>
        <p style={styles.topInfo}>
          <strong>✉️ Email:</strong>{" "}
          {topStaff.email.replace("@", "[at]").replace(/\./g, "[dot]")}
        </p>
        <p style={styles.topInfo}>
          <strong>📍 Address:</strong> {topStaff[`address_${language}`]}
        </p>
        {topStaff[`description_${language}`] && (
          <p style={styles.topDescription}>
            {topStaff[`description_${language}`]}
          </p>
        )}
      </div>

      {/* Other Staff Grid */}
      <div style={styles.grid}>
        {otherStaff.map((staff, index) => (
          <div key={index} style={styles.card}>
            {staff.image && (
              <img
                src={staff.image}
                alt={staff[`name_${language}`]}
                style={styles.cardImage}
              />
            )}
            <br />
            {/* ✅ Birendra Kumar’s name as clickable PDF link */}
            {staff.pdf ? (
              <a
                href={staff.pdf}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.cardName,
                  color: "#1d4ed8",
                  textDecoration: "underline",
                  display: "inline",        // ✅ keeps name and designation on one line
                  marginRight: "6px",       // ✅ small spacing before designation
                }}
              >
                {staff[`name_${language}`]}
              </a>
            ) : (
              <p style={styles.cardName}>{staff[`name_${language}`]}</p>
            )}
            <p style={styles.cardDesignation}>
              {staff[`designation_${language}`]}
            </p>
            {staff.phone_res && (
              <p style={styles.cardInfo}>
                <strong>📞 Res:</strong> {staff.phone_res}
              </p>
            )}
            {staff.phone_off && (
              <p style={styles.cardInfo}>
                <strong>📞 Off:</strong> {staff.phone_off}
              </p>
            )}
            {staff.epbx && (
              <p style={styles.cardInfo}>
                <strong>EPBX:</strong> {staff.epbx}
              </p>
            )}
            {staff.email && (
              <p style={styles.cardInfo}>
                <strong>✉️ Email:</strong>{" "}
                {staff.email.replace("@", "[at]").replace(/\./g, "[dot]")}
              </p>
            )}
            <p style={styles.cardInfo}>
              <strong>📍 Address:</strong> {staff[`address_${language}`]}
            </p>
            {staff[`description_${language}`] && (
              <p style={styles.cardDescription}>
                <strong>Branches / Responsibilities:</strong>{" "}
                {staff[`description_${language}`]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecretariatOrganogram;