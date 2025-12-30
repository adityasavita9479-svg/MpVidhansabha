// import React from "react";
import { useNavigate } from "react-router-dom";

const sessionItems = [
{ title: "सत्र आमंत्रण की अधिसूचना", pdf: "/misc/adhisuchna/amanmon09.pdf" },
{ title: "पत्रक भाग - 2", pdf: "/misc/adhisuchna/patrakmon09.pdf" },
{ title: "सत्र की बैठकों की दिनदर्शिका", pdf: "/misc/adhisuchna/dinmon09.pdf" },
{ title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-विभागों के लिये", pdf: "/misc/adhisuchna/rchartdmon09.pdf" },
{ title: "प्रश्‍नोत्‍तरों के लिये चक्रानुक्रम-सदस्‍यों के लिये", pdf: "/misc/adhisuchna/rchartmmon09.pdf" },
];

export default function TrayodashVidhanSabhaThirdSession() {
const navigate = useNavigate();

return ( <div className="panch-page">


  {/* HERO SECTION */}
  <section className="panch-hero">
    <div className="panch-hero-content">
      <div className="panch-hero-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        <div className="panch-hero-text">
          <h1>त्रयोदश विधान सभा</h1>
          <p>तृतीय सत्र (जुलाई-अगस्त, 2009)</p>
        </div>

        <div
          className="panch-btn"
          onClick={() => navigate("/vidhansabha-13")}
          style={{ cursor: "pointer" }}
        >
          पीछे जाये
        </div>

      </div>
    </div>
  </section>

  {/* LIST SECTION */}
  <section className="panch-section">
    <br />
    <div className="panch-grid">
      {sessionItems.map((item, idx) => (
        <div
          key={idx}
          className="panch-card"
          onClick={() => window.open(item.pdf, "_blank")}
        >
          <div className="panch-card-overlay">
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
    <br />
  </section>

</div>


);
}
