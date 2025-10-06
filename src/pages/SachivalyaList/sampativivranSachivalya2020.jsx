import React from "react";

// Step 1: Members with optional PDF link
const members2020 = [
  // PRINCIPAL SECRETARY
  { name: "Shri AWDHESH PRATAP SINGH", designation: "PRINCIPAL SECRETARY", link: "/pdfs/awdhesh_pratap_singh.pdf" },

  // ADDITIONAL SECRETARY
  { name: "Shri BHAGWATDEEN SINGH PARASTE", designation: "ADDITIONAL SECRETARY", link: "/pdfs/bhagwatdeen_paraste.pdf" },
  { name: "Shri BIRENDRA KUMAR", designation: "ADDITIONAL SECRETARY" },

  // DEPUTY SECRETARY
  { name: "Shri K. L. DALWANI", designation: "DEPUTY SECRETARY" },
  { name: "Shri SHOKHI LAL PRAJAPATI", designation: "DEPUTY SECRETARY" },
  { name: "Smt. REKHA MATHUR", designation: "DEPUTY SECRETARY" },

  // DIRECTOR
  { name: "Shri PUNEET KUMAR SHRIVASTAVA", designation: "DIRECTOR" },

  // UNDER SECRETARY
  { name: "Shri ASHOK KUMAR VERMA", designation: "UNDER SECRETARY" },
  { name: "Shri GOPAL PANDA", designation: "UNDER SECRETARY" },
  { name: "Shri M. L. MANWANI", designation: "UNDER SECRETARY" },
  { name: "Shri MUKESH MISHRA", designation: "UNDER SECRETARY" },
  { name: "Shri NARENDRA KUMAR MISHRA", designation: "UNDER SECRETARY" },
  { name: "Shri PRADEEP ARSE", designation: "UNDER SECRETARY" },
  { name: "Shri RAJENDRA VERMA", designation: "UNDER SECRETARY" },
  { name: "Shri RAMESH CHANDRA ROOPLA", designation: "UNDER SECRETARY" },
  { name: "Shri RAMESH MAHAJAN", designation: "UNDER SECRETARY" },
  { name: "Shri SHIVNARAYAN GAUR", designation: "UNDER SECRETARY" },
  { name: "Smt. BHARATI KALE", designation: "UNDER SECRETARY" },

  // ADMINISTRATIVE OFFICER
  { name: "Shri RAMESH KUMAR YADAV", designation: "ADMINISTRATIVE OFFICER" },

  // DEPUTY DIRECTOR (SECURITY)
  { name: "Shri SANTOSH KUMAR SHARMA", designation: "DEPUTY DIRECTOR (SECURITY)" },
  { name: "Shri SATISH KUMAR BHARGAV", designation: "DEPUTY DIRECTOR (SECURITY)" },

  // RESEARCH OFFICER
  { name: "Shri V. D. GOYAL", designation: "RESEARCH OFFICER" },
  { name: "Smt. JAISHREE KSHEERSAGAR", designation: "RESEARCH OFFICER" },

  // EDITOR OF DEBATE
  { name: "Shri S. M. IQBAL", designation: "EDITOR OF DEBATE" },

  // STAFF OFFICER
  { name: "Shri HARISH KUMAR SHRIVAS", designation: "STAFF OFFICER" },

  // SELECT GRADE REPORTER
  { name: "Shri SHYAM KUMAR UDASI", designation: "SELECT GRADE REPORTER" },

  // DIRECTOR (SECURITY)
  { name: "Shri JUGAL KISHOR SHARMA", designation: "DIRECTOR (SECURITY)" },

  // CHIEF MARSHAL
  { name: "Shri RAM GOPAL MISHRA", designation: "CHIEF MARSHAL" },

  // TECHNICAL DIRECTOR
  { name: "Shri SHYAMSUNDAR RAJPAL", designation: "TECHNICAL DIRECTOR" },

  // OSD [equal to Dy Secy]
  { name: "Shri MANOJ SAXENA", designation: "OSD [equal to Dy Secy]" },
  { name: "Smt. MANJU GAJBHIYE", designation: "OSD [equal to Dy Secy]" },

  // SECTION OFFICER
  { name: "Shri AJAY SHARMA", designation: "SECTION OFFICER" },
  { name: "Shri ANIL KUMAR VYAS", designation: "SECTION OFFICER" },
  { name: "Shri ANOOP KUMAR AGNIHOTRI", designation: "SECTION OFFICER" },
  { name: "Shri GOVIND PANDA", designation: "SECTION OFFICER" },
  { name: "Shri HIRALAL SAKET", designation: "SECTION OFFICER" },
  { name: "Shri RAKESH KUMAR SOLEY", designation: "SECTION OFFICER" },
  { name: "Shri RAMBHUWAN NAPIT", designation: "SECTION OFFICER" },
  { name: "Shri RAMESH CHANDRA SAGAR", designation: "SECTION OFFICER" },
  { name: "Shri RAMESH PRASAD SAHU", designation: "SECTION OFFICER" },
  { name: "Shri RAMLAKHAN DOGNE", designation: "SECTION OFFICER" },
  { name: "Shri RAMRAKSHA PATEL", designation: "SECTION OFFICER" },
  { name: "Shri RAVINDRA NATH DUBEY", designation: "SECTION OFFICER" },
  { name: "Shri SAKET KUMAR TRIPATHI", designation: "SECTION OFFICER" },
  { name: "Shri SHIVNARAYAN RAJPUT", designation: "SECTION OFFICER" },
  { name: "Shri SURESH KUMAR MALVIYA", designation: "SECTION OFFICER" },
  { name: "Shri UMAKANT SAXENA", designation: "SECTION OFFICER" },
  { name: "Shri VIJAY KUMAR THAKUR", designation: "SECTION OFFICER" },
  { name: "Smt. ANJALI PUROHIT", designation: "SECTION OFFICER" },
  { name: "Smt. JAYWANTI RAMHARIYA", designation: "SECTION OFFICER" },
  { name: "Smt. KANEEZ FATIMA", designation: "SECTION OFFICER" },
  { name: "Smt. KUNDA JAMBHULKAR", designation: "SECTION OFFICER" },
  { name: "Smt. REKHA DUBEY", designation: "SECTION OFFICER" },
  { name: "Smt. SAVITA SHARMA", designation: "SECTION OFFICER" },
  { name: "Smt. SUSHMA TIWARI", designation: "SECTION OFFICER" },
  { name: "Smt. VIMLA SARASWAT", designation: "SECTION OFFICER" },

  // ACCOUNT OFFICER
  { name: "Shri JAI KUMAR GURMALANI", designation: "ACCOUNT OFFICER" },
  { name: "Shri NAVAL KISHOR MISHRA", designation: "ACCOUNT OFFICER" },

  // SENIOR REPORTER
  { name: "Shri AJAY KUMAR CHOUREY", designation: "SENIOR REPORTER" },
  { name: "Shri AJAY SHANKAR SHRIVASTAV", designation: "SENIOR REPORTER" },
  { name: "Shri ALOK SARASWAT", designation: "SENIOR REPORTER" },
  { name: "Shri KAMLESH KHATRI", designation: "SENIOR REPORTER" },
  { name: "Shri NARESH KUMAR HIMTHANI", designation: "SENIOR REPORTER" },
  { name: "Shri RAMESH SINGH", designation: "SENIOR REPORTER" },
  { name: "Shri VIVEK RANJAN GUPTA", designation: "SENIOR REPORTER" },
  { name: "Smt. RIMJHIM MONGIA", designation: "SENIOR REPORTER" },

  // REPORTER
  { name: "Ku. AKANKSHA THAPAK", designation: "REPORTER" },
  { name: "Ku. NEELIMA WARKADE", designation: "REPORTER" },
  { name: "Shri AKHILESH KUMAR MESHRAM", designation: "REPORTER" },
  { name: "Shri ARJUN KUMAR DEHARIYA", designation: "REPORTER" },
  { name: "Shri BASANT KUMAR BATHRE", designation: "REPORTER" },
  { name: "Shri BIRENDRA SINGH RAWAT", designation: "REPORTER" },
  { name: "Shri HARIKISHAN TOLANI", designation: "REPORTER" },
  { name: "Shri MAHENDRA SONI", designation: "REPORTER" },
  { name: "Shri NIRAJ KUMAR SAINI", designation: "REPORTER" },
  { name: "Shri RAVI KUMAR SHRIVASTAVA", designation: "REPORTER" },
  { name: "Shri SHRIKANT GUPTA", designation: "REPORTER" },
  { name: "Smt. PUJA UDASI", designation: "REPORTER" },

  // LIBRARIAN
  { name: "Shri VISHNU PRATAP SINGH", designation: "LIBRARIAN" },

  // ASSTT. RESEARCH OFFICER
  { name: "Shri RAJENDRA PRASAD DWIVEDI", designation: "ASSTT. RESEARCH OFFICER" },

  // PUBLIC RELATION OFFICER
  { name: "Shri MAHAVEER SINGH", designation: "PUBLIC RELATION OFFICER" },

   { name: "Shri ARJUN PRASAD SHARMA", designation: "MARSHAL" },
  { name: "Shri BANSPATI SHARMA", designation: "MARSHAL" },
  { name: "Shri GOVIND SINGH RAGHUVANSHI", designation: "MARSHAL" },
  { name: "Shri KAILASH GINNORE", designation: "MARSHAL" },
  { name: "Shri SURESH KUMAR BHARGAV", designation: "MARSHAL" },
  { name: "Smt. SHARMILA MAHAJAN", designation: "MARSHAL" },

  // ASSTT. DIRECTOR (SECURITY)
  { name: "Ms KARAMJEET CHHINNA", designation: "ASSTT. DIRECTOR (SECURITY)" },
  { name: "Shri KAMLESH SINGH", designation: "ASSTT. DIRECTOR (SECURITY)" },
  { name: "Shri VACHASPATI MISHRA", designation: "ASSTT. DIRECTOR (SECURITY)" },
  { name: "Shri VINOD NAIKE", designation: "ASSTT. DIRECTOR (SECURITY)" },

  // PROTOCOL OFFICER
  { name: "Shri MADHAV DAFTARI", designation: "PROTOCOL OFFICER" },

  // ASSTT. REFERENCE OFFICER
  { name: "Shri ANWARUDDIN QAZI", designation: "ASSTT. REFERENCE OFFICER" },

  // SECURITY OFFICER
  { name: "Shri MANISH KHARE", designation: "SECURITY OFFICER" },

  { name: "Dr. SATYANARAYAN GARG", designation: "ASSTT. ACCOUNT OFFICER" },
  { name: "Shri MUSHAHID MOHAMMAD KHAN", designation: "ASSTT. ACCOUNT OFFICER" },

  // ASSTT. SECURITY OFFICER
  { name: "Shri NARESH KUMAR MALVIYA", designation: "ASSTT. SECURITY OFFICER" },
  { name: "Shri NIRAJ SAXENA", designation: "ASSTT. SECURITY OFFICER" },

  // AssttENGINEER
  { name: "Shri DEVENDRA TIWARI", designation: "AssttENGINEER" },

  // HospitalityOfficer
  { name: "Shri SANJAY SHARMA", designation: "HospitalityOfficer" },

  // PERSONAL ASSISTANT
  { name: "Shri GOPAL KUMAR MANDAL", designation: "PERSONAL ASSISTANT" },
  { name: "Shri HARIOM PRAKASH JOSHI", designation: "PERSONAL ASSISTANT" },
  { name: "Shri KAMTA PRASAD DWIVEDI", designation: "PERSONAL ASSISTANT" },
  { name: "Shri MOHAMMAD ARIF KHAN", designation: "PERSONAL ASSISTANT" },
  { name: "Shri PRAVEEN JANORKAR", designation: "PERSONAL ASSISTANT" },
  { name: "Shri RAJKUMAR PARVE", designation: "PERSONAL ASSISTANT" },
  { name: "Shri SITARAM DWIVEDI", designation: "PERSONAL ASSISTANT" },
  { name: "Shri SUDHIR KUMAR MISHRA", designation: "PERSONAL ASSISTANT" },
  { name: "Shri SUNDER LAL AHIRWAL", designation: "PERSONAL ASSISTANT" },

  // ASSISTANT GRADE I
  { name: "Ku. MENKA SHYAM", designation: "ASSISTANT GRADE I" },
  { name: "Ku. SAVITA UIKE", designation: "ASSISTANT GRADE I" },
  { name: "Shri ABHISHEK VAMANKAR", designation: "ASSISTANT GRADE I" },
  { name: "Shri AMIT KUMAR DIWAN", designation: "ASSISTANT GRADE I" },
  { name: "Shri ANKIT DIWAN", designation: "ASSISTANT GRADE I" },
  { name: "Shri ARUN JHA", designation: "ASSISTANT GRADE I" },
  { name: "Shri ASHISH VASKALE", designation: "ASSISTANT GRADE I" },
  { name: "Shri ASHOK KUMAR MALVIYA", designation: "ASSISTANT GRADE I" },
  { name: "Shri BUDDHILAL DWIVEDI", designation: "ASSISTANT GRADE I" },
  { name: "Shri DEVENDRA GUPTA", designation: "ASSISTANT GRADE I" },
  { name: "Shri DEVENDRA PRAKASH PARTE", designation: "ASSISTANT GRADE I" },
  { name: "Shri DEVENDRA SINGH", designation: "ASSISTANT GRADE I" },
  { name: "Shri DUSHYANT KUMAR SHARMA", designation: "ASSISTANT GRADE I" },
  { name: "Shri GOVIND VALLABH VYAS", designation: "ASSISTANT GRADE I" },
  { name: "Shri JAGJAHIR BAIGA", designation: "ASSISTANT GRADE I" },
  { name: "Shri KAMALNAYAN MISHRA", designation: "ASSISTANT GRADE I" },
  { name: "Shri KISHANCHAND LALWANI", designation: "ASSISTANT GRADE I" },
  { name: "Shri KUSHLENDRA PRASAD NAPIT", designation: "ASSISTANT GRADE I" },
  { name: "Shri MANOHAR MALVIYA", designation: "ASSISTANT GRADE I" },
  { name: "Shri NARBADA PRASAD", designation: "ASSISTANT GRADE I" },
  { name: "Shri RAHUL ARJARIA", designation: "ASSISTANT GRADE I" },
  { name: "Shri RAIS KHAN", designation: "ASSISTANT GRADE I" },
  { name: "Shri RAJESH KUMAR YADAV", designation: "ASSISTANT GRADE I" },
  { name: "Shri RAJKUMAR MALVIYA", designation: "ASSISTANT GRADE I" },
  { name: "Shri RAKESH KUMAR PANDEY", designation: "ASSISTANT GRADE I" },
  { name: "Shri RAMAVTAR MISHRA", designation: "ASSISTANT GRADE I" },
  { name: "Shri RAMKISHAN GONTIA", designation: "ASSISTANT GRADE I" },
  { name: "Shri RAMNARAYAN ACHARYA", designation: "ASSISTANT GRADE I" },
  { name: "Shri SANJEEV SARATHE", designation: "ASSISTANT GRADE I" },
  { name: "Shri SUJEET MARAVI", designation: "ASSISTANT GRADE I" },
  { name: "Shri VIKRMAJEET DWIVEDI", designation: "ASSISTANT GRADE I" },
  { name: "Shri VIRENDRA SINGH BHADOURIA", designation: "ASSISTANT GRADE I" },
  { name: "Smt. MANJULA TIWARI", designation: "ASSISTANT GRADE I" },
  { name: "Smt. ANJULA VERMA", designation: "ASSISTANT GRADE I" },
  { name: "Smt. CHITRA BHATT", designation: "ASSISTANT GRADE I" },
  { name: "Smt. DISHA RAUT RANGARE", designation: "ASSISTANT GRADE I" },
  { name: "Smt. GEETA THAKUR", designation: "ASSISTANT GRADE I" },
  { name: "Smt. MADHU RAIKWAR", designation: "ASSISTANT GRADE I" },
  { name: "Smt. MANJU SHARMA", designation: "ASSISTANT GRADE I" },
  { name: "Smt. RUKHSANA BEGUM", designation: "ASSISTANT GRADE I" },
  { name: "Smt. SAROJ SINGH", designation: "ASSISTANT GRADE I" },
  { name: "Smt. VIDYA SHARMA", designation: "ASSISTANT GRADE I" },
  { name: "Shri BHAGWAN DAS SAGAR", designation: "ASSISTANT GRADE I" },
  { name: "Shri UDAYAN KUMAR BHATNAGAR", designation: "ASSISTANT GRADE I" },

  // ASSTT PROTOCOL OFFICER
    { name: "Shri ANUBHAV KATARE", designation: "ASSTT PROTOCOL OFFICER" },
  { name: "Shri VIJAY KUMAR DWIVEDI", designation: "ASSTT PROTOCOL OFFICER" },

  // RESEARCH ASSISTANT
  { name: "Shri RAKESH KUMAR TIWARI", designation: "RESEARCH ASSISTANT" },

  // ASSTT ACCOUNTANT
   { name: "Smt. SHALINI PANDEY", designation: "ASSTT ACCOUNTANT" },

   // ASSISTANT GRADE II
   { name: "Shri ABDUL HAMID", designation: "ASSISTANT GRADE II" },
  { name: "Shri ABDUL SALIM", designation: "ASSISTANT GRADE II" },
  { name: "Shri ADITYA MEHRA", designation: "ASSISTANT GRADE II" },
  { name: "Shri ASHOK KUMAR DWIVEDI", designation: "ASSISTANT GRADE II" },
  { name: "Shri CHANDRASHEKHAR RAY", designation: "ASSISTANT GRADE II" },
  { name: "Shri DAMODAR NAMDEV", designation: "ASSISTANT GRADE II" },
  { name: "Shri DEENBANDHU SINGH", designation: "ASSISTANT GRADE II" },
  { name: "Shri DEEPAK KUMAR MADKE", designation: "ASSISTANT GRADE II" },
  { name: "Shri GHANSHYAM SINGH", designation: "ASSISTANT GRADE II" },
  { name: "Shri GOPAL KUMAR SONI", designation: "ASSISTANT GRADE II" },
  { name: "Shri GYANSINGH GAUR", designation: "ASSISTANT GRADE II" },
  { name: "Shri HARIKISHOR YADAV", designation: "ASSISTANT GRADE II" },
  { name: "Shri KALIDAS BAIRAGI", designation: "ASSISTANT GRADE II" },
  { name: "Shri KAMALKISHOR VERMA", designation: "ASSISTANT GRADE II" },
  { name: "Shri LAKHANLAL KAURAV", designation: "ASSISTANT GRADE II" },
  { name: "Shri MADAN LAL VERMA", designation: "ASSISTANT GRADE II" },
  { name: "Shri MANISH KUMAR DUBEY", designation: "ASSISTANT GRADE II" },
  { name: "Shri NARENDRA KUMAR MISHRA", designation: "ASSISTANT GRADE II" },
  { name: "Shri PRAVEEN KUMAR JAIN", designation: "ASSISTANT GRADE II" },
  { name: "Shri PREMCHANDRA MISHRA", designation: "ASSISTANT GRADE II" },
  { name: "Shri PURUSHOTTAM PANCHAL", designation: "ASSISTANT GRADE II" },
  { name: "Shri RAKESH SHARMA", designation: "ASSISTANT GRADE II" },
  { name: "Shri RAMPRASAD SHARMA", designation: "ASSISTANT GRADE II" },
  { name: "Shri RAVINDRA CHIKTE", designation: "ASSISTANT GRADE II" },
  { name: "Shri RITESH KUMAR NIGAM", designation: "ASSISTANT GRADE II" },
  { name: "Shri SHANTILAL UPADHYAY", designation: "ASSISTANT GRADE II" },
  { name: "Shri SHESHNARAYAN BHATTRAI", designation: "ASSISTANT GRADE II" },
  { name: "Shri SHRIRAM DUBEY", designation: "ASSISTANT GRADE II" },
  { name: "Shri SUNIL KUMAR DWIVEDI", designation: "ASSISTANT GRADE II" },
  { name: "Shri UMASHANKAR PANDEY", designation: "ASSISTANT GRADE II" },
  { name: "Shri UPENDRA KUMAR PANDEY", designation: "ASSISTANT GRADE II" },
  { name: "Shri VINOD KUMAR CHATURVEDI", designation: "ASSISTANT GRADE II" },
  { name: "Shri VIPIN SHANKAR MEHTA", designation: "ASSISTANT GRADE II" },
  { name: "Smt. ARCHNA SHARMA", designation: "ASSISTANT GRADE II" },
  { name: "Smt. DARAKHSHINDA JABIN KHAN", designation: "ASSISTANT GRADE II" },
  { name: "Smt. FAROG ANJUM", designation: "ASSISTANT GRADE II" },
  { name: "Smt. KIRAN SAVNER", designation: "ASSISTANT GRADE II" },
  { name: "Smt. LAKSHMI RAIKWAR", designation: "ASSISTANT GRADE II" },
  { name: "Smt. MUKTA DIXIT", designation: "ASSISTANT GRADE II" },
  { name: "Smt. NEHA SHARMA", designation: "ASSISTANT GRADE II" },
  { name: "Smt. PRIYANKA MALANI", designation: "ASSISTANT GRADE II" },
  { name: "Smt. RATNAMALA SAMADHIYA", designation: "ASSISTANT GRADE II" },
  { name: "Smt. SUNITA SARASWAT", designation: "ASSISTANT GRADE II" },
  { name: "Smt. SWATI TIWARI", designation: "ASSISTANT GRADE II" },
  { name: "Smt. URMILA TIWARI", designation: "ASSISTANT GRADE II" },
  { name: "Shri RAMMANI DWIVEDI", designation: "ASSISTANT GRADE II" },
  { name: "Shri NANDLAL PALIWAL", designation: "ASSISTANT GRADE II" },

  // ASSISTANT GRADE III
  // ASSISTANT GRADE III
{ name: "Smt. KARUNA PAKHALE", designation: "ASSISTANT GRADE III" },
{ name: "Shri AATMARAM PANDEY", designation: "ASSISTANT GRADE III" },
{ name: "Shri ARUN DHOKE", designation: "ASSISTANT GRADE III" },
{ name: "Shri BALENDRA PRASAD DWIVEDI", designation: "ASSISTANT GRADE III" },
{ name: "Shri BRIJESH KUMAR DWIVEDI", designation: "ASSISTANT GRADE III" },
{ name: "Shri CHANDRAMANI PRASAD MISHRA", designation: "ASSISTANT GRADE III" },
{ name: "Shri DEVENDRA MALVIYA", designation: "ASSISTANT GRADE III" },
{ name: "Shri DEVENDRA PANDEY", designation: "ASSISTANT GRADE III" },
{ name: "Shri DHEERENDRA PANDEY", designation: "ASSISTANT GRADE III" },
{ name: "Shri DINESH KUMAR PARMAR", designation: "ASSISTANT GRADE III" },
{ name: "Shri HARI PRASAD KUSHWAHA", designation: "ASSISTANT GRADE III" },
{ name: "Shri HIRALAL VISHWAKARMA", designation: "ASSISTANT GRADE III" },
{ name: "Shri JAGDISH PRASAD TIWARI", designation: "ASSISTANT GRADE III" },
{ name: "Shri JALAM SINGH", designation: "ASSISTANT GRADE III" },
{ name: "Shri LAKSHMINARAYAN CHOUDHARY", designation: "ASSISTANT GRADE III" },
{ name: "Shri LAXMI PRASAD MISHRA", designation: "ASSISTANT GRADE III" },
{ name: "Shri MANISH BANODE", designation: "ASSISTANT GRADE III" },
{ name: "Shri MANOJ BADKUR", designation: "ASSISTANT GRADE III" },
{ name: "Shri MANOJ CHATURVEDI", designation: "ASSISTANT GRADE III" },
{ name: "Shri MANOJ KUMAR IRPACHE", designation: "ASSISTANT GRADE III" },
{ name: "Shri ANIL KUMAR MISHRA", designation: "ASSISTANT GRADE III" },
{ name: "Shri NAVAL KISHORE SHUKLA", designation: "ASSISTANT GRADE III" },
{ name: "Shri NEERAJ KUMAR URMALIA", designation: "ASSISTANT GRADE III" },
{ name: "Shri NIRAJ KUMAR SEN", designation: "ASSISTANT GRADE III" },
{ name: "Shri NITESH GHAVRI", designation: "ASSISTANT GRADE III" },
{ name: "Shri NITIN KUMAR BOHIT", designation: "ASSISTANT GRADE III" },
{ name: "Shri PRADEEP MISHRA", designation: "ASSISTANT GRADE III" },
{ name: "Shri PURUSHOTTAM SEN", designation: "ASSISTANT GRADE III" },
{ name: "Shri RAHUL CHANDRAVANSHI", designation: "ASSISTANT GRADE III" },
{ name: "Shri RAHUL VERMA", designation: "ASSISTANT GRADE III" },
{ name: "Shri RAJAN JAKNORE", designation: "ASSISTANT GRADE III" },
{ name: "Shri RAJENDRA SHARMA", designation: "ASSISTANT GRADE III" },
{ name: "Shri RAKESH CHAUHAN", designation: "ASSISTANT GRADE III" },
{ name: "Shri RAMAYAN PRASAD DWIVEDI", designation: "ASSISTANT GRADE III" },
{ name: "Shri RAGHVENDRA PANDEY", designation: "ASSISTANT GRADE III" },
{ name: "Shri RANJEET SINGH NEGI", designation: "ASSISTANT GRADE III" },
{ name: "Shri ROSHAN LAL TIWARI", designation: "ASSISTANT GRADE III" },
{ name: "Shri SANDEEP SAPKAL", designation: "ASSISTANT GRADE III" },
{ name: "Shri SANTOSH KUMAR TIWARI", designation: "ASSISTANT GRADE III" },
{ name: "Shri SANTOSH TIWARI", designation: "ASSISTANT GRADE III" },
{ name: "Shri SHAILENDRA KUMAR MESHRAM", designation: "ASSISTANT GRADE III" },
{ name: "Shri SHESHMANI PATEL", designation: "ASSISTANT GRADE III" },
{ name: "Shri SHIVAKANT MISHRA", designation: "ASSISTANT GRADE III" },
{ name: "Shri SHIVARCHAN PRASAD MISHRA", designation: "ASSISTANT GRADE III" },
{ name: "Shri SUBHASH BAGHEL", designation: "ASSISTANT GRADE III" },
{ name: "Shri TORAN SINGH", designation: "ASSISTANT GRADE III" },
{ name: "Shri VARUN SHARMA", designation: "ASSISTANT GRADE III" },
{ name: "Shri VIKRAM SINGH", designation: "ASSISTANT GRADE III" },
{ name: "Shri VISHNU PRASAD MISHRA", designation: "ASSISTANT GRADE III" },
{ name: "Smt. ROSHNI UIKE", designation: "ASSISTANT GRADE III" },
{ name: "Smt. SOMKALI SHUKLA", designation: "ASSISTANT GRADE III" },
{ name: "Smt. SONALI NIKOSE", designation: "ASSISTANT GRADE III" },
{ name: "Smt. AARTI SHARMA", designation: "ASSISTANT GRADE III" },
{ name: "Smt. LILA CHAUKASEY", designation: "ASSISTANT GRADE III" },
{ name: "Smt. SANGITA TIWARI", designation: "ASSISTANT GRADE III" },
{ name: "Smt. BHARTI SOMANI", designation: "ASSISTANT GRADE III" },

// SUPERVISOR (MLA REST HOUSE)
{ name: "Shri ASHOK KUMAR TIWARI", designation: "SUPERVISOR (MLA REST HOUSE)" },
{ name: "Shri SANJAY KUMAR PANDEY", designation: "SUPERVISOR (MLA REST HOUSE)" },

// ASSISTANT MARSHAL
{ name: "Ku. PUJA MALVIYA", designation: "ASSISTANT MARSHAL" },
{ name: "Shri ARUN PARTETI", designation: "ASSISTANT MARSHAL" },
{ name: "Shri ARVIND KUMAR SHARMA", designation: "ASSISTANT MARSHAL" },
{ name: "Shri ATAR LAL MARAVI", designation: "ASSISTANT MARSHAL" },
{ name: "Shri AVNISH KUMAR MISHRA", designation: "ASSISTANT MARSHAL" },
{ name: "Shri BANSHPATI CHARMKAR", designation: "ASSISTANT MARSHAL" },
{ name: "Shri BRIJENDRA SINGH CHAUHAN", designation: "ASSISTANT MARSHAL" },
{ name: "Shri DHRUVPAL SINGH CHAUHAN", designation: "ASSISTANT MARSHAL" },
{ name: "Shri KISHORE MAHAJAN", designation: "ASSISTANT MARSHAL" },
{ name: "Shri MANOJ TIWARI", designation: "ASSISTANT MARSHAL" },
{ name: "Shri NARAYAN KUMAR GAUTAM", designation: "ASSISTANT MARSHAL" },
{ name: "Shri NARENDRA SHARMA", designation: "ASSISTANT MARSHAL" },
{ name: "Shri NITIN UPADHYAY", designation: "ASSISTANT MARSHAL" },
{ name: "Shri PRABHAT KUMAR TIWARI", designation: "ASSISTANT MARSHAL" },
{ name: "Shri PRADEEP KUMAR PANDEY", designation: "ASSISTANT MARSHAL" },
{ name: "Shri PREMCHAND KORI", designation: "ASSISTANT MARSHAL" },
{ name: "Shri RAJESH KUMAR PANDEY", designation: "ASSISTANT MARSHAL" },
{ name: "Shri RAKESHWAR DAYAL YADAV", designation: "ASSISTANT MARSHAL" },
{ name: "Shri RAMPATI MISHRA", designation: "ASSISTANT MARSHAL" },
{ name: "Shri RAMSAKHA PANDEY", designation: "ASSISTANT MARSHAL" },
{ name: "Shri RAVENDRA PANDEY", designation: "ASSISTANT MARSHAL" },
{ name: "Shri SHIVAKANT DUBEY", designation: "ASSISTANT MARSHAL" },
{ name: "Shri SUMIT SINGH YADAV", designation: "ASSISTANT MARSHAL" },
{ name: "Shri VIRENDRA KUMAR MISHRA", designation: "ASSISTANT MARSHAL" },
{ name: "Shri VISHWANATH PRASAD CHARMAKAR", designation: "ASSISTANT MARSHAL" },
{ name: "Smt. ANJANA SHUKLA", designation: "ASSISTANT MARSHAL" },
{ name: "Smt. VANDNA AMBADKAR", designation: "ASSISTANT MARSHAL" },

// STENO TYPIST
{ name: "Shri AJAY CHOUKSEY", designation: "STENO TYPIST" },
{ name: "Shri BHAGAT SINGH PATEL", designation: "STENO TYPIST" },
{ name: "Shri DEEPAK KUMAR MALVIYA", designation: "STENO TYPIST" },
{ name: "Shri JAGDISH AHIRWAR", designation: "STENO TYPIST" },
{ name: "Shri MAHENDRA KUMAR PAWAR", designation: "STENO TYPIST" },
{ name: "Shri PRAVEEN RATHORE", designation: "STENO TYPIST" },
{ name: "Shri RAMPRAKASH YADAV", designation: "STENO TYPIST" },
{ name: "Smt. PRIYANKA PANTHI", designation: "STENO TYPIST" },
{ name: "Smt. REENA SHRIVASTAVA", designation: "STENO TYPIST" },
{ name: "Smt. MANISHA MISHRA", designation: "STENO TYPIST" },
{ name: "Smt. SHIVANGI TOMAR", designation: "STENO TYPIST" },
{ name: "Shri MANISH SONI", designation: "STENO TYPIST" },

// SURAKSHA GUARD
{ name: "Shri NARENDRA SINGH", designation: "SURAKSHA GUARD" },
{ name: "Shri PRAMOD KUMAR PANDEY", designation: "SURAKSHA GUARD" },
{ name: "Shri RADHESHYAM BHARGAV", designation: "SURAKSHA GUARD" },
{ name: "Shri RAGHUVIR SHARAN MISHRA", designation: "SURAKSHA GUARD" },
{ name: "Shri RAKESH SINGH", designation: "SURAKSHA GUARD" },
{ name: "Shri RAVIKANT MISHRA", designation: "SURAKSHA GUARD" },
{ name: "Shri ROOPESH KUMAR PATEL", designation: "SURAKSHA GUARD" },
{ name: "Shri TRIBHUVAN PRASAD MISHRA", designation: "SURAKSHA GUARD" },

// DRIVER
{ name: "Shri GIRJA SHANKAR MISHRA", designation: "DRIVER" },
{ name: "Shri HARNAM SINGH", designation: "DRIVER" },
{ name: "Shri KAILASH DALWI", designation: "DRIVER" },
{ name: "Shri KULWANT SINGH", designation: "DRIVER" },
{ name: "Shri MADAN CHAMKEL", designation: "DRIVER" },
{ name: "Shri MADAN MOHAN MALVIYA", designation: "DRIVER" },
{ name: "Shri MAHENDRA SHARMA", designation: "DRIVER" },
{ name: "Shri MAHESH KUMAR MALVIYA", designation: "DRIVER" },
{ name: "Shri MANOJ PATHAK", designation: "DRIVER" },
{ name: "Shri OMPRAKASH NAMDEV", designation: "DRIVER" },
{ name: "Shri RADHESHYAM SEN", designation: "DRIVER" },
{ name: "Shri RAJENDRA SAINI", designation: "DRIVER" },
{ name: "Shri RAJNEESH YADAV", designation: "DRIVER" },
{ name: "Shri RAMBABU MALVIYA", designation: "DRIVER" },
{ name: "Shri RAMESH VISHWAKARMA", designation: "DRIVER" },
{ name: "Shri SHANTARAM DHHIBRE", designation: "DRIVER" },
{ name: "Shri VINOD CHOUDHARY", designation: "DRIVER" },
{ name: "Shri VINOD KUMAR SHUKLA", designation: "DRIVER" },
{ name: "Shri VISHNU SHARMA", designation: "DRIVER" },

// PRIVATE SECRETARY
{ name: "Shri MOHAN LAL RAI", designation: "PRIVATE SECRETARY" },
{ name: "Shri ROOPESH SINGH", designation: "PRIVATE SECRETARY" },
{ name: "Shri VINOD KUMAR DUBEY", designation: "PRIVATE SECRETARY" },
{ name: "Smt. SHABNAM RANA", designation: "PRIVATE SECRETARY" },

// DEPUTY ASSISTANT MARSHAL
{ name: "Shri ANEES AHMAD KHAN", designation: "DEPUTY ASSISTANT MARSHAL" },
{ name: "Shri ATUL PARASHAR", designation: "DEPUTY ASSISTANT MARSHAL" },
{ name: "Shri BABULAL PATEL", designation: "DEPUTY ASSISTANT MARSHAL" },
{ name: "Shri BRIJ KISHOR RAGHUVANSHI", designation: "DEPUTY ASSISTANT MARSHAL" },
{ name: "Shri BUNDEL SINGH LODHA", designation: "DEPUTY ASSISTANT MARSHAL" },
{ name: "Shri DEVENDRA KUMAR SAHU", designation: "DEPUTY ASSISTANT MARSHAL" },
{ name: "Shri DINESH KUMAR SAINI", designation: "DEPUTY ASSISTANT MARSHAL" },
{ name: "Shri JAGDISH SINGH CHAUHAN", designation: "DEPUTY ASSISTANT MARSHAL" },
{ name: "Shri RAMGOPAL SHUKLA", designation: "DEPUTY ASSISTANT MARSHAL" },
{ name: "Shri RAMSEWAK MEENA", designation: "DEPUTY ASSISTANT MARSHAL" },
{ name: "Shri SURESH KUMAR MISHRA", designation: "DEPUTY ASSISTANT MARSHAL" },
{ name: "Shri VISHNU KUMAR DWIVEDI", designation: "DEPUTY ASSISTANT MARSHAL" },

// SAMITI SAHAYAK
{ name: "MIRZA ARSHAD BEG", designation: "SAMITI SAHAYAK" },
{ name: "Shri ANURAG PATHAK", designation: "SAMITI SAHAYAK" },
{ name: "Shri DHANANJAY DESHPANDE", designation: "SAMITI SAHAYAK" },
{ name: "Shri GHANSHYAM CHANDRAVANSHI", designation: "SAMITI SAHAYAK" },
{ name: "Shri HIMANSHU DUBEY", designation: "SAMITI SAHAYAK" },
{ name: "Shri OMPRAKASH TILWARI", designation: "SAMITI SAHAYAK" },
{ name: "Shri RAJNISH DUBEY", designation: "SAMITI SAHAYAK" },
{ name: "Shri VIKAS KUMAR GALAR", designation: "SAMITI SAHAYAK" },
{ name: "Smt. POOJA GARG", designation: "SAMITI SAHAYAK" },
{ name: "Smt. RADHA TIWARI", designation: "SAMITI SAHAYAK" },
{ name: "Smt. RAMWATI DWIVEDI", designation: "SAMITI SAHAYAK" },

// STENOGRAPHER
{ name: "Shri AAKASH UPADHYAY", designation: "STENOGRAPHER" },

// LIFT OPERATOR
{ name: "Shri ANIL SHARMA", designation: "LIFT OPERATOR" },
{ name: "Shri GOKUL PATIL", designation: "LIFT OPERATOR" },
{ name: "Shri RAMCHANDRA CHHAPRE", designation: "LIFT OPERATOR" },
{ name: "Shri RAMESH KUMAR AHIRWAR", designation: "LIFT OPERATOR" },
{ name: "Shri YUGRAJ SHENDE", designation: "LIFT OPERATOR" },

];


// Step 2: Group members by designation
const groupedMembers = members2020.reduce((acc, member) => {
  if (!acc[member.designation]) acc[member.designation] = [];
  acc[member.designation].push(member);
  return acc;
}, {});

const Sampativivransachivalya2020 = () => {
  return (
    <div className="container">
      <h1 className="title">
        सचिवालय सदस्‍यों की सूची (संपत्ति विवरण 2020)
      </h1>

      <table className="styled-table">
        <thead>
          <tr>
            <th>क्रमांक</th>
            <th>सदस्‍य का नाम</th>
            <th>PDF लिंक</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(groupedMembers).map((designation) => (
            <>
              {/* Designation heading row */}
              <tr key={designation} className="designation-row">
                <td colSpan="3">{designation}</td>
              </tr>
              {/* Members under this designation */}
              {groupedMembers[designation].map((member, index) => (
                <tr key={designation + index}>
                  <td>{index + 1}</td>
                  <td>{member.name}</td>
                  <td>
                    {member.link ? (
                      <a href={member.link} target="_blank" rel="noopener noreferrer">
                        PDF देखें
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Noto Sans Devanagari', sans-serif;
          background: #f8fafc;
          min-height: 100vh;
        }
        .title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #1a202c;
        }
        .styled-table {
          width: 100%;
          border-collapse: collapse;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
        }
        .styled-table th {
          background: #4a90e2;
          color: #fff;
          padding: 1rem;
          text-align: left;
          font-weight: 700;
        }
        .styled-table td {
          padding: 0.8rem 1rem;
          border-bottom: 1px solid #e2e8f0;
          text-align: left;
        }
        .styled-table tr:hover {
          background: #edf2f7;
        }
        .designation-row td {
          background-color: #f0f4f8;
          font-weight: 700;
          padding: 0.8rem 1rem;
          text-align: left;
        }
      `}</style>
    </div>
  );
};

export default Sampativivransachivalya2020;
