import React from "react";

const IsraniProfile = () => {
  return (
    <div className="page-wrapper">
      {/* --- Top Profile Card --- */}
      <div className="top-profile-card">
        {/* Photo Frame */}
        <div className="photo-frame">
          <img
            src="/leaders/bdisrani.jpg" // 🖼️ Place photo in public/leaders folder
            alt="श्री भगवानदेव ईसरानी"
            className="profile-image"
          />
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Name Frame */}
        <div className="name-frame">
          <h1 className="top-title">श्री भगवानदेव ईसरानी</h1>
          <h3 className="top-subtitle">पूर्व प्रमुख सचिव, मध्यप्रदेश विधान सभा</h3>
        </div>
      </div>

      {/* --- Hindi Information Section --- */}
      <div className="card-landscape">
        <h2 className="section-title">व्यक्तिगत विवरण</h2>
        <section className="section">
          <InfoRow label="पिता का नाम" value="स्‍व. श्री कन्‍हैयालाल ईसरानी" />
          <InfoRow label="जन्म तिथि" value="24 जून, 1956" />
          <InfoRow label="वैवाहिक स्थिति" value="विवाहित" />
          <InfoRow label="पत्नी का नाम" value="श्रीमती गीता ईसरानी" />
          <InfoRow label="संतान" value="2 पुत्र (मयंक ईसरानी, तरूण ईसरानी)" />
          <InfoRow
            label="अभिरुचि"
            value="लेखन, संगीत, खेल, आध्‍यात्‍म तथा सामाजिक क्षेत्र में कार्य करना"
          />
          <InfoRow
            label="निवास स्‍थान का पता"
            value="29, सुरूचि नगर, कोटरा रोड, भोपाल (म.प्र.)"
          />
          <InfoRow
            label="शास. सेवा में प्रवेश की तिथि"
            value="25 मई, 1974"
          />
          <InfoRow
            label="शास. सेवा का विवरण"
            value={
              <>
                <ul className="list-disc ml-6 text-left">
                  <li>कृषि विभाग (1974–75)</li>
                  <li>पुलिस मुख्‍यालय (विशेष शाखा) (1975–78)</li>
                  <li>वर्ष 1978 से विधान सभा सचिवालय में विभिन्‍न पदों पर कार्यरत रहे</li>
                  <li>वर्ष 2000–04 तक छत्‍तीसगढ़ विधान सभा के सचिव</li>
                  <li>वर्ष 2004 से 28 मार्च, 2014 तक मध्‍यप्रदेश विधान सभा में सचिव</li>
                  <li>29 मार्च, 2014 से 30 जून, 2016 तक प्रमुख सचिव</li>
                </ul>
              </>
            }
          />
          <InfoRow
            label="संगोष्ठियां / सम्मेलन"
            value="पीठासीन अधिकारियों और सचिवों के सम्मेलनों में भाग लिया एवं संसदीय विषयों पर विदेश यात्राएँ कीं।"
          />
        </section>
      </div>

      {/* --- English Information Section --- */}
      <div className="card-landscape">
        <h2 className="section-title">Personal Details (English)</h2>
        <section className="section">
          <InfoRow label="Father's Name" value="Late Mr. Kanhaiyalal Israni" />
          <InfoRow label="Date of Birth" value="24th June, 1956" />
          <InfoRow label="Marital Status" value="Married" />
          <InfoRow label="Spouse's Name" value="Mrs. Mita Israni" />
          <InfoRow label="Children" value="2 Sons (Mayank Israni, Tarun Israni)" />
          <InfoRow
            label="Hobbies / Interests"
            value="Writing, Music, Sports, Spiritual and Social Activities"
          />
          <InfoRow
            label="Residential Address"
            value="29, Suruchi Nagar, Kotra Road, Bhopal (M.P.)"
          />
          <InfoRow
            label="Date of Joining Govt. Service"
            value="25 May, 1974"
          />
          <InfoRow
            label="Details of Govt. Service"
            value={
              <>
                <ul className="list-disc ml-6 text-left">
                  <li>A. Agricultural Department (1974–75)</li>
                  <li>B. Police Head Quarters (1975–78)</li>
                  <li>C. M.P. Legislative Assembly since 1978</li>
                  <li>D. Secretary, Chhattisgarh Legislative Assembly (2000–2004)</li>
                  <li>E. Secretary, M.P. Legislative Assembly (2004–2014)</li>
                  <li>F. Principal Secretary, M.P. Legislative Assembly (29 Mar 2014 – 30 Jun 2016)</li>
                </ul>
              </>
            }
          />
          <InfoRow
            label="Seminars / Conferences"
            value="Attended Presiding Officers’ and Secretaries’ Conferences in various States of India and participated in Parliamentary Study Tours abroad."
          />
        </section>
      </div>
    </div>
  );
};

// ✅ InfoRow Reusable Component
const InfoRow = ({ label, value }) => (
  <div className="info-row">
    <span className="info-label">{label}:</span>{" "}
    <span className="info-value">{value}</span>
  </div>
);

export default IsraniProfile;
