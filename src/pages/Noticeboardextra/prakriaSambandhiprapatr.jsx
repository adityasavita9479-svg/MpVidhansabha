import React from "react";
import { useNavigate } from "react-router-dom";

const FormList = () => {
  const navigate = useNavigate();

  const forms = [
    { id: 1, title: "अशासकीय संकल्प की सूचना", pdf: "/misc/form/dform1.pdf" },
    { id: 2, title: "नियम 142 - क के अधीन अल्पकालीन चर्चा उठाने हेतु सूचना", pdf: "/misc/form/dform2.pdf" },
    { id: 3, title: "नियम 139 के अधीन अविलम्बनीय लोक महत्व के विषय पर चर्चा उठाने हेतु सूचना", pdf: "/misc/form/dform3.pdf" },
    { id: 4, title: "स्थगन प्रस्ताव", pdf: "/misc/form/dform4.pdf" },
    { id: 5, title: "नियम 138 के अधीन ध्यान आकर्षण सूचना", pdf: "/misc/form/dform5.pdf" },
    { id: 6, title: "ऐसा विषय जो औचित्य का प्रश्न नहीं है, को उठाने के बारे में सूचना (शून्यकाल सूचना)", pdf: "/misc/form/dform6.pdf" },
  ];

  return (
    <div className="comm-page">

      {/* ⭐ HERO SECTION WITH BACK BUTTON ON RIGHT */}
      <div className="pb-0 mb-0 comm-hero" style={{ position: "relative" }}>
        <button
          onClick={() => navigate("/home")}
          className="btn btn-outline-light btn-sm"
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
            borderRadius: "6px",
            fontWeight: "500",
          }}
        >
          ← Back
        </button>

        <div className="comm-hero-content">
          <h1>फॉर्म</h1>
          <p>विभिन्न कार्यवाही हेतु उपलब्ध प्रपत्र</p>
        </div>
      </div>

      {/* ⭐ FORMS TABLE */}
      <div className="container pt-2 mt-0">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr className="text-center table-primary">
                <th style={{ width: "10%" }}>क्रमांक</th>
                <th>फॉर्म</th>
              </tr>
            </thead>

            <tbody>
              {forms.map((form) => (
                <tr key={form.id}>
                  <td className="text-center">{form.id}</td>

                  {/* Clickable title */}
                  <td>
                    <a
                      href={form.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf-link"
                      style={{
                        color: "#0056b3",
                        fontWeight: "500",
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                    >
                      {form.title}
                    </a>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default FormList;
