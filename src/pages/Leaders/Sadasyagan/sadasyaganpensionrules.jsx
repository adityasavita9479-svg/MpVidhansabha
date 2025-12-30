import React, { useState } from "react";

const PensionRules = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const hindiText = (
    <div style={{ lineHeight: "1.8", fontSize: "18px" }}>
      <h2 style={{ textAlign: "center", fontWeight: "700" }}>
        मध्‍यप्रदेश विधान सभा भूतपूर्व सदस्‍य - पेंशन/कुटुम्‍ब पेंशन नियम
      </h2>
      <p style={{ textAlign: "center" }}>(दिनांक 22.04.2016)</p>

      <p>
        <b>6-क.</b> प्रत्‍येक ऐसे व्‍यक्ति को, जिसने पॉंच वर्ष की कालावधि तक, चाहे वह कालावधि लगातार हो या न हो,
        मध्‍यप्रदेश विधान सभा के सदस्‍य के रूप में कार्य किया हो, 20,000/- रू. प्रतिमास पेंशन दी जाएगी।
      </p>

      <p>
        <b>6-ख.</b> किसी ऐसे मृतक सदस्‍य या भूतपूर्व सदस्‍य के पति या पत्‍नी को, यदि कोई हो, या आश्रित को, जो
        धारा 6-क की उपधारा (1) के अधीन पेंशन का हकदार था, उसकी मृत्‍यु की तारीख से ऐसी कालावधि के लिए
        18,000/- रू. प्रतिमास कुटुम्‍ब पेंशन दी जाएगी, जो मध्‍यप्रदेश सिविल सेवा (पेंशन) नियम, 1976 में किसी
        शासकीय सेवक को अनुज्ञेय हैं।
      </p>

      <p>
        <b>6-ग.</b> प्रत्‍येक व्‍यक्ति, जो धारा 6-क के अधीन पेंशन का हकदार है, राज्‍य सरकार द्वारा चलाए जा रहे
        अस्‍पतालों में नि:शुल्‍क चिकित्‍सीय उपचार प्राप्‍त करेगा तथा चिकित्‍सीय भत्‍ता भी दिया जाएगा।
      </p>

      <h4>भूतपूर्व सदस्‍यों को कूपन पुस्‍तकों का दिया जाना</h4>
      <p>
        अधिनियम तथा इन नियमों के उपबन्‍धों के अधीन रहते हुए प्रत्‍येक भूतपूर्व सदस्‍य को प्रमुख सचिव द्वारा
        कूपन पुस्‍तकों के सेट दिये जायेंगे, जो उसे प्रथम श्रेणी या द्वितीय श्रेणी वातानुकूलित शयनयान द्वारा अकेले
        या अपनी पत्‍नी/पति या एक परिचारक के साथ किसी भी रेल से -
      </p>

      <ul>
        <li>(एक) राज्‍य के भीतर बिना किसी निर्बन्‍धन के यात्रा करने के लिये, और...</li>
        <li>
          (दो) राज्‍य के बाहर किसी एक वित्‍तीय वर्ष के दौरान 4000 किलो मीटर तक की यात्रा करने के लिए,
          जो नियम-11 के उपबन्‍धों के अनुसार संगणित की जायेगी।
        </li>
      </ul>
    </div>
  );

  const englishText = (
    <div style={{ lineHeight: "1.8", fontSize: "18px" }}>
      <h2 style={{ textAlign: "center", fontWeight: "700" }}>
        Madhya Pradesh Legislative Assembly Former Members – Pension/Family Pension Rules
      </h2>
      <p style={{ textAlign: "center" }}>(Dated 22.04.2016)</p>

      <p>
        <b>6(a).</b> Every person who has served as a member of the Madhya Pradesh Legislative Assembly for a
        period of five years, whether continuous or not, shall be entitled to a monthly pension of ₹20,000.
      </p>

      <p>
        <b>6(b).</b> The spouse or dependent, if any, of a deceased member or former member who was entitled
        to a pension under sub-section (1) of section 6(a), shall receive a family pension of ₹18,000 per month
        from the date of death, for such period as is admissible to a government servant under the Madhya
        Pradesh Civil Services (Pension) Rules, 1976.
      </p>

      <p>
        <b>6(c).</b> Every person entitled to a pension under section 6(a) shall receive free medical treatment
        in government-run hospitals and shall also be given a medical allowance.
      </p>

      <h4>Issuance of Coupon Books to Former Members</h4>
      <p>
        Subject to the provisions of the Act and these Rules, every former member shall be provided with
        a set of coupon books by the Principal Secretary, entitling them to travel either:
      </p>

      <ul>
        <li>(i) Within the State without any restriction; and</li>
        <li>
          (ii) Outside the State for a distance up to 4000 kilometers during one financial year, computed
          as per the provisions of Rule 11.
        </li>
      </ul>
    </div>
  );

  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px", // 👈 fixed width
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          textAlign: "left",
        }}
      >
        <div style={{ textAlign: "right", marginBottom: "20px" }}>
          <button
            onClick={() => setIsEnglish(!isEnglish)}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {isEnglish ? "हिन्दी में देखें" : "View in English"}
          </button>
        </div>

        {isEnglish ? englishText : hindiText}
      </div>
    </div>
  );
};

export default PensionRules;
