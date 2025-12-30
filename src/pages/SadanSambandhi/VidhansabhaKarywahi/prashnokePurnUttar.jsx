import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFilePdf, FaChevronDown, FaChevronUp } from "react-icons/fa";

const fullAnswersData = [
  {
    assembly: "षोडश (16वीं) विधान सभा",
    items: [
      { text: "फरवरी, 2024 सत्र के प्रश्‍नों के अपूर्ण उत्‍तरों के पूर्ण उत्तर (खण्‍ड-1)", pdfLink: "/misc/house%20proceedings/cansjuly2024p1.pdf" },
      { text: "फरवरी, 2024 एवं जुलाई, 2024 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-2)", pdfLink: "/misc/house%20proceedings/cansdecember2024p2.pdf" },
      { text: "फरवरी 2024 से दिसम्‍बर 2024 सत्र के प्रश्‍नों के पूर्ण उत्‍तर (खण्‍ड-3)", pdfLink: "/misc/house%20proceedings/cansmarch2025p3.pdf" },
      { text: "फरवरी 2024 से मार्च 2025 सत्र के प्रश्‍नों के पूर्ण उत्‍तर (खण्‍ड-4)", pdfLink: "/misc/house%20proceedings/cansjulaug2025p4.pdf" },
    ],
  },
  {
    assembly: "पंचदश विधान सभा",
    items: [
      { text: "फरवरी, 2019 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-1)", pdfLink: "/misc/house%20proceedings/cansjul2019p1.pdf" },
      { text: "फरवरी, 2019 एवं जुलाई, 2019 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-2)", pdfLink: "/misc/house%20proceedings/cansdec2019p2.pdf" },
      { text: "फरवरी, 2019 से दिसम्बर, 2019 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-3)", pdfLink: "/misc/house%20proceedings/cansmarapr2020p3.pdf" },
      { text: "फरवरी, 2019 से मार्च-अप्रैल, 2020 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-4)", pdfLink: "/misc/house%20proceedings/cansjul2020p4.pdf" },
      { text: "फरवरी, 2019 से सितम्बर, 2020 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-5)", pdfLink: "/misc/house%20proceedings/cansdec2020p5.pdf" },
      { text: "जुलाई, 2019 से दिसम्बर, 2020 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-6)", pdfLink: "/misc/house%20proceedings/cansfebmar2021p6.pdf" },
      { text: "जुलाई, 2019 से फरवरी-मार्च, 2021 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-7)", pdfLink: "/misc/house%20proceedings/cansaug2021p7.pdf" },
      { text: "जुलाई, 2019 से अगस्त, 2021 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-8)", pdfLink: "/misc/house%20proceedings/cansdec2021p8.pdf" },
      { text: "दिसम्बर, 2019 से दिसम्बर, 2021 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-9)", pdfLink: "/misc/house%20proceedings/cansmar2022p9.pdf" },
      { text: "जुलाई, 2019 से मार्च, 2022 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-10)", pdfLink: "/misc/house%20proceedings/canssep2022p10.pdf" },
      { text: "जुलाई, 2019 से सितम्बर, 2022 (जुलाई, 2022) सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-11)", pdfLink: "/misc/house%20proceedings/cansdec2022p11.pdf" },
      { text: "फरवरी-मार्च, 2021 से दिसम्बर, 2022 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-12)", pdfLink: "/misc/house%20proceedings/cansfebmar2023p12.pdf" },
      { text: "फरवरी-मार्च, 2021 से फरवरी-मार्च, 2023 सत्र के प्रश्नों के पूर्ण उत्तर (खण्‍ड-13)", pdfLink: "/misc/house%20proceedings/cansjuly2023p13.pdf" },
    ],
    note: "टिप्पणी- खण्ड-3 तथा खण्ड-4 सितम्बर, 2020 सत्र में पटल पर रखे गये.",
  },
];

const FullAnswersPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  const styles = {
    page: { fontFamily: "'Noto Sans Devanagari', sans-serif", backgroundColor: "#e0f2fe", minHeight: "100vh", padding: "20px", position: "relative" },
    backButton: { position: "absolute", top: "20px", left: "20px", padding: "10px 18px", backgroundColor: "#fff", color: "#1e40af", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: 600, zIndex: 1000 },
    header: { textAlign: "center", marginBottom: "30px" },
    headerTitle: { fontSize: "2.2rem", fontWeight: 700, color: "#1e3a8a", letterSpacing: "0.5px" },
    assemblyCard: {
      marginBottom: "20px",
      borderRadius: "12px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
      overflow: "hidden",
      backgroundColor: "#fff",
      transition: "all 0.3s",
      cursor: "pointer",
    },
    assemblyHeader: {
      padding: "18px 20px",
      fontSize: "1.3rem",
      fontWeight: 700,
      color: "#fff",
      backgroundColor: "#3b82f6",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    itemList: { listStyle: "none", padding: "15px 20px", backgroundColor: "#f0f9ff", maxHeight: "500px", overflowY: "auto", transition: "all 0.3s" },
    listItem: {
      marginBottom: "12px",
      padding: "10px 12px",
      borderRadius: "8px",
      backgroundColor: "#e0f2fe",
      border: "1px solid #7dd3fc",
      color: "#1e3a8a",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none",
      transition: "all 0.2s",
    },
    listItemHover: { transform: "scale(1.02)", backgroundColor: "#dbeafe" },
    note: { marginTop: "10px", fontStyle: "italic", color: "#1e3a8a", textAlign: "center" },
  };

  return (
    <div style={styles.page}>
      <button style={styles.backButton} onClick={() => navigate(-1)}>← Back</button>

      <div style={styles.header}>
        <div style={styles.headerTitle}>प्रश्‍नों के पूर्ण उत्‍तर</div>
      </div>

      {fullAnswersData.map((assembly, idx) => (
        <div key={idx} style={styles.assemblyCard}>
          <div style={styles.assemblyHeader} onClick={() => toggleSection(idx)}>
            {assembly.assembly} {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {openIndex === idx && (
            <ul style={styles.itemList}>
              {assembly.items.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.listItem}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#dbeafe"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#e0f2fe"}
                  >
                    <FaFilePdf color="#dc2626" /> {item.text}
                  </a>
                </li>
              ))}
              {assembly.note && <div style={styles.note}>{assembly.note}</div>}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FullAnswersPage;