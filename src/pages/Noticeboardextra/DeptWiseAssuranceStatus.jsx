import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  page: {
    maxWidth: "1220px",
    margin: "0 auto",
    padding: "28px 18px 40px",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans Devanagari", sans-serif',
    background:
      "radial-gradient(circle at top left, #e0f2fe 0, #eef2ff 32%, #ffffff 70%)",
  },
  backButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 12px",
    fontSize: "0.85rem",
    borderRadius: "999px",
    border: "1px solid #cbd5e1",
    background: "rgba(255,255,255,0.9)",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(15,23,42,0.06)",
  },
  backIcon: {
    fontSize: "0.9rem",
  },
  headerRow: {
  display: "grid",
  gridTemplateColumns: "120px 1fr 120px",
  alignItems: "center",
  marginBottom: "10px",
},

  header: {
    marginBottom: "18px",
  },
title: {
  fontSize: "1.5rem",
  margin: 0,
  color: "#0f172a",
  textAlign: "center",
},

  subtitle: {
    margin: "6px 0 0",
    fontSize: "0.93rem",
    color: "#475569",
  },
  badgeRow: {
    display: "flex",
    gap: "8px",
    marginTop: "8px",
    flexWrap: "wrap",
  },
  badge: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    padding: "3px 9px",
    borderRadius: "999px",
    background: "rgba(15,23,42,0.06)",
    color: "#0f172a",
  },
  card: {
    background: "rgba(255,255,255,0.96)",
    borderRadius: "18px",
    padding: "14px 18px 18px",
    boxShadow: "0 12px 28px rgba(15,23,42,0.12)",
    border: "1px solid rgba(226,232,240,0.95)",
  },
  cardTitleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "10px",
    gap: "10px",
  },
  cardTitle: {
    fontSize: "1.05rem",
    margin: 0,
    color: "#0f172a",
  },
  cardMeta: {
    fontSize: "0.8rem",
    color: "#64748b",
    margin: 0,
  },
  tableWrapper: {
    marginTop: "8px",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 4px",
    fontSize: "0.9rem",
  },
  theadCell: {
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "#64748b",
    padding: "6px 8px",
    textAlign: "left",
  },
  deptRowBase: {
    background: "#f9fafb",
    transition:
      "background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease",
  },
  deptRowHover: {
    background: "#eef2ff",
    transform: "translateY(-1px)",
    boxShadow: "0 6px 14px rgba(79,70,229,0.18)",
  },
  cellLeft: {
    padding: "6px 8px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    border: "1px solid #e2e8f0",
    borderRight: "none",
    whiteSpace: "nowrap",
    width: "50px",
    textAlign: "center",
    fontWeight: 600,
    color: "#0f172a",
    background: "rgba(248,250,252,0.85)",
  },
  cellDept: {
    padding: "6px 10px",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    border: "1px solid #e2e8f0",
    whiteSpace: "nowrap",
    color: "#111827",
  },
  cellLeft2: {
    padding: "6px 8px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    border: "1px solid #e2e8f0",
    borderRight: "none",
    whiteSpace: "nowrap",
    width: "50px",
    textAlign: "center",
    fontWeight: 600,
    color: "#0f172a",
    background: "rgba(248,250,252,0.85)",
  },
  cellDept2: {
    padding: "6px 10px",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    border: "1px solid #e2e8f0",
    whiteSpace: "nowrap",
    color: "#111827",
  },
  note: {
    marginTop: "10px",
    fontSize: "0.8rem",
    color: "#94a3b8",
  },
  linkName: {
    textDecoration: "none",
    color: "#111827",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    cursor: "pointer",
  },
  linkNameHover: {
    textDecoration: "underline",
  },
  linkIcon: {
    fontSize: "0.8rem",
  },
};

const departmentRows = [
  {
    left: {
      no: 1,
      name: "पंचायत एवं ग्रामीण विकास",
      pdf: "/misc/ashwasan/1.pdf",
    },
    right: {
      no: 36,
      name: "खेल एवं युवा कल्याण",
      pdf: "/misc/ashwasan/36.pdf",
    },
  },
  {
    left: { no: 2, name: "नगरीय विकास एवं आवास", pdf: "/misc/ashwasan/2.pdf" },
    right: {
      no: 37,
      name: "योजना, आर्थिक एवं सांख्यिकी",
      pdf: "/misc/ashwasan/37.pdf",
    },
  },
  {
    left: {
      no: 3,
      name: "लोक स्वास्थ्य एवं परिवार कल्याण",
      pdf: "/misc/ashwasan/3.pdf",
    },
    right: {
      no: 38,
      name: "मछुआ कल्याण तथा मत्स्य विकास",
      pdf: "/misc/ashwasan/38.pdf",
    },
  },
  {
    left: { no: 4, name: "स्कूल शिक्षा", pdf: "/misc/ashwasan/4.pdf" },
    right: { no: 39, name: "संस्कृति", pdf: "/misc/ashwasan/39.pdf" },
  },
  {
    left: { no: 5, name: "राजस्व", pdf: "/misc/ashwasan/5.pdf" },
    right: { no: 40, name: "पर्यटन", pdf: "/misc/ashwasan/40.pdf" },
  },
  {
    left: { no: 6, name: "लोक निर्माण", pdf: "/misc/ashwasan/6.pdf" },
    right: {
      no: 41,
      name: "विधि एवं विधायी कार्य",
      pdf: "/misc/ashwasan/41.pdf",
    },
  },
  {
    left: { no: 7, name: "सहकारिता", pdf: "/misc/ashwasan/7.pdf" },
    right: {
      no: 42,
      name: "नवीन एवं नवकरणीय ऊर्जा",
      pdf: "/misc/ashwasan/42.pdf",
    },
  },
  {
    left: { no: 8, name: "जल संसाधन", pdf: "/misc/ashwasan/8.pdf" },
    right: { no: 43, name: "लोक सेवा प्रबंधन", pdf: "/misc/ashwasan/43.pdf" },
  },
  {
    left: { no: 9, name: "गृह", pdf: "/misc/ashwasan/9.pdf" },
    right: {
      no: 44,
      name: "भोपाल गैस त्रासदी राहत एवं पुनर्वास",
      pdf: "/misc/ashwasan/44.pdf",
    },
  },
  {
    left: { no: 10, name: "आदिम जाति कल्याण", pdf: "/misc/ashwasan/10.pdf" },
    right: { no: 45, name: "कुटीर एवं ग्रामोद्योग", pdf: "/misc/ashwasan/45.pdf" },
  },
  {
    left: {
      no: 11,
      name: "किसान कल्याण तथा कृषि विकास",
      pdf: "/misc/ashwasan/11.pdf",
    },
    right: {
      no: 46,
      name: "विज्ञान एवं प्रौद्योगिकी",
      pdf: "/misc/ashwasan/46.pdf",
    },
  },
  {
    left: { no: 12, name: "लोक स्वास्थ्य यांत्रिकी", pdf: "/misc/ashwasan/12.pdf" },
    right: { no: 47, name: "विमानन", pdf: "/misc/ashwasan/47.pdf" },
  },
  {
    left: { no: 13, name: "वन", pdf: "/misc/ashwasan/13.pdf" },
    right: {
      no: 48,
      name: "घुमन्तु एवं अर्द्ध घुमन्तु जनजाति",
      pdf: "/misc/ashwasan/48.pdf",
    },
  },
  {
    left: { no: 14, name: "उच्च शिक्षा", pdf: "/misc/ashwasan/14.pdf" },
    right: { no: 49, name: "जनसम्पर्क", pdf: "/misc/ashwasan/49.pdf" },
  },
  {
    left: {
      no: 15,
      name: "महिला एवं बाल विकास",
      pdf: "/misc/ashwasan/15.pdf",
    },
    right: {
      no: 50,
      name: "सूक्ष्म, लघु, मध्यम उद्यम",
      pdf: "/misc/ashwasan/50.pdf",
    },
  },
  {
    left: { no: 16, name: "सामान्य प्रशासन", pdf: "/misc/ashwasan/16.pdf" },
    right: { no: 51, name: "पर्यावरण", pdf: "/misc/ashwasan/51.pdf" },
  },

  { left: { no: 17, name: "चिकित्सा शिक्षा", pdf: "/misc/ashwasan/17.pdf" }, right: null },

  {
    left: {
      no: 18,
      name: "खाद्य, नागरिक आपूर्ति एवं उपभोक्ता संरक्षण",
      pdf: "/misc/ashwasan/18.pdf",
    },
    right: null,
  },

  { left: { no: 19, name: "ऊर्जा", pdf: "/misc/ashwasan/19.pdf" }, right: null },

  {
    left: {
      no: 20,
      name: "औद्योगिक नीति एवं निवेश प्रोत्साहन",
      pdf: "/misc/ashwasan/20.pdf",
    },
    right: null,
  },

  { left: { no: 21, name: "आयुष", pdf: "/misc/ashwasan/21.pdf" }, right: null },
  { left: { no: 22, name: "खनिज साधन", pdf: "/misc/ashwasan/22.pdf" }, right: null },
  { left: { no: 23, name: "वाणिज्यिक कर", pdf: "/misc/ashwasan/23.pdf" }, right: null },
  {
    left: {
      no: 24,
      name: "उद्यानिकी एवं खाद्य प्रसंस्करण",
      pdf: "/misc/ashwasan/24.pdf",
    },
    right: null,
  },

  { left: { no: 25, name: "नर्मदा घाटी विकास", pdf: "/misc/ashwasan/25.pdf" }, right: null },

  {
    left: {
      no: 26,
      name: "तकनीकी शिक्षा, कौशल विकास एवं रोजगार",
      pdf: "/misc/ashwasan/26.pdf",
    },
    right: null,
  },

  { left: { no: 27, name: "परिवहन", pdf: "/misc/ashwasan/27.pdf" }, right: null },

  { left: { no: 28, name: "श्रम", pdf: "/misc/ashwasan/28.pdf" }, right: null },

  {
    left: {
      no: 29,
      name: "पिछड़ा वर्ग एवं अल्पसंख्यक कल्याण",
      pdf: "/misc/ashwasan/29.pdf",
    },
    right: null,
  },

  { left: { no: 30, name: "वित्त", pdf: "/misc/ashwasan/30.pdf" }, right: null },
  { left: { no: 31, name: "जेल", pdf: "/misc/ashwasan/31.pdf" }, right: null },

  {
    left: {
      no: 32,
      name: "धार्मिक न्यास एवं धर्मस्व",
      pdf: "/misc/ashwasan/32.pdf",
    },
    right: null,
  },

  {
    left: { no: 33, name: "अनुसूचित जाति कल्याण", pdf: "/misc/ashwasan/33.pdf" },
    right: null,
  },

  {
    left: {
      no: 34,
      name: "सामाजिक न्याय एवं नि:शक्तजन कल्याण",
      pdf: "/misc/ashwasan/34.pdf",
    },
    right: null,
  },

  { left: { no: 35, name: "पशुपालन", pdf: "/misc/ashwasan/35.pdf" }, right: null },
];

const DeptWiseAssuranceStatus = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/lambitashwasan");
  };

  return (
    <div style={styles.page}>
      {/* HEADER + BACK IN ONE ROW */}
     <header style={styles.header}>
  <div style={styles.headerRow}>
    <button type="button" style={styles.backButton} onClick={handleBack}>
      <span style={styles.backIcon}>←</span>
      Back
    </button>

    <h1 style={styles.title}>
      07 मार्च, 2022 तक की स्थिति में लंबित विभागवार आश्वासन
    </h1>

    <div></div> {/* यह right-side placeholder heading को fully center करेगा */}
  </div>

  <p style={styles.subtitle}>
    विभागवार लंबित आश्वासनों का सार, संदर्भित तिथि: 07 मार्च, 2022।
  </p>

  <div style={styles.badgeRow}>
    <span style={styles.badge}>Department-wise Status</span>
  </div>
</header>


      {/* CARD + TABLE */}
      <section style={styles.card}>
        <div style={styles.cardTitleRow}>
          <h2 style={styles.cardTitle}>विभागों की सूची</h2>
          <p style={styles.cardMeta}>
            कुल विभाग: <strong>51</strong>
          </p>
        </div>

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.theadCell}>क्र.</th>
                <th style={styles.theadCell}>विभाग का नाम</th>
                <th style={styles.theadCell}>क्र.</th>
                <th style={styles.theadCell}>विभाग का नाम</th>
              </tr>
            </thead>
            <tbody>
              {departmentRows.map((row, index) => {
                const isHover = hoverIndex === index;
                const rowStyle = isHover
                  ? { ...styles.deptRowBase, ...styles.deptRowHover }
                  : styles.deptRowBase;

                return (
                  <tr
                    key={index}
                    style={rowStyle}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    {/* Left side */}
                    <td style={styles.cellLeft}>
                      {row.left?.no != null ? row.left.no : ""}
                    </td>
                    <td style={styles.cellDept}>
                      {row.left?.name != null ? (
                        <a
                          href={row.left.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.linkName}
                        >
                          {row.left.name}
                          <span style={styles.linkIcon}>↗</span>
                        </a>
                      ) : (
                        ""
                      )}
                    </td>

                    {/* Right side */}
                    <td style={styles.cellLeft2}>
                      {row.right?.no != null ? row.right.no : ""}
                    </td>
                    <td style={styles.cellDept2}>
                      {row.right?.name != null ? (
                        <a
                          href={row.right.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.linkName}
                        >
                          {row.right.name}
                          <span style={styles.linkIcon}>↗</span>
                        </a>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p style={styles.note}>
          * यह केवल विभागवार सूची है; वास्तविक लंबित आश्वासनों की संख्या विभागवार अलग-अलग हो सकती है।
        </p>
      </section>
    </div>
  );
};

export default DeptWiseAssuranceStatus;
