import React from "react";
import { Link } from "react-router-dom";
import "../../index.css"; // Ensure your CSS file path is correct

const FinancialElectedCommittees = () => {
  return (
    <div className="gov-page">
      {/* Hero Section */}
      <section className="gov-hero">
        <div className="gov-hero-content">
          <div className="gov-hero-row">
            <div className="gov-hero-text">
              <h1>मध्‍यप्रदेश विधान सभा की समितियां</h1>
              <p>पंचदश विधानसभा समितियों की सूची</p>
            </div>
            <Link to="/committees1" className="gov-btn">
              पीछे जाएं
            </Link>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="gov-section">
        <div className="committee-text">
          <p>
            <strong>क्रमांक 39</strong>
          </p>

          <p>
            मध्‍यप्रदेश विधान सभा <br />
            पत्रक भाग-दो <br />
            गुरुवार, दिनांक 21 फरवरी, 2019 (फाल्‍गुन 2, 1940)
          </p>

          <div className="gov-report-row">
            {/* First Pair */}
            <div className="gov-report-block">
              <h2>लोक लेखा समिति</h2>
              <ol className="committee-list">
                <li>श्री कुणाल चौधरी</li>
                <li>श्री गिरीश गौतम</li>
                <li>श्री गोपाल सिंह चौहान</li>
                <li>श्री घनश्‍याम सिंह</li>
                <li>श्री दिनेश राय मुनमुन</li>
                <li>डॉ. नरोत्‍तम मिश्र</li>
                <li>श्री प्रवीण पाठक</li>
                <li>श्रीमती यशोधरा राजे सिंधिया</li>
                <li>श्री रमेश मेन्‍दौला</li>
                <li>श्री संजीव सिंह ‘संजू’</li>
                <li>श्री हरदीप सिंह डंग</li>
              </ol>
              <p className="chairperson">
                सभापति: <strong>डॉ. नरोत्‍तम मिश्र</strong>
              </p>
            </div>

            <div className="gov-report-block">
              <h2>प्राक्‍कलन समिति</h2>
              <ol className="committee-list">
                <li>श्री कमलेश प्रताप शाह</li>
                <li>श्री करण सिंह वर्मा</li>
                <li>श्री बैजनाथ कुशवाह</li>
                <li>श्री भारत सिंह कुशवाह</li>
                <li>डॉ. मोहन यादव</li>
                <li>श्री यशपाल सिंह सिसौदिया</li>
                <li>श्री योगेन्‍द्र सिंह बाबा</li>
                <li>श्री राजेन्‍द्र शुक्‍ल</li>
                <li>श्री विशाल जगदीश पटेल</li>
                <li>श्री सुरेन्‍द्र सिंह ‘शेरा भैया’</li>
                <li>श्री सोहनलाल बाल्‍मीक</li>
              </ol>
              <p className="chairperson">
                सभापति: <strong>श्री सोहनलाल बाल्‍मीक</strong>
              </p>
            </div>
          </div>

          {/* Second Pair */}
          <div className="gov-report-row">
            <div className="gov-report-block">
              <h2>सरकारी उपक्रमों संबंधी समिति</h2>
              <ol className="committee-list">
                <li>श्री अजय विश्‍नोई</li>
                <li>श्री ग्‍यारसीलाल रावत</li>
                <li>श्री जालम सिंह पटेल</li>
                <li>श्रीमती नीना विक्रम वर्मा</li>
                <li>श्री प्रद्युम्न सिंह लोधी ‘मुन्‍ना भैया’</li>
                <li>श्री बहादुर सिंह चौहान</li>
                <li>श्री रवि जोशी</li>
                <li>श्री लक्ष्मण सिंह</li>
                <li>कुंवर विक्रम सिंह ‘नातीराजा’</li>
                <li>श्री विजयपाल सिंह</li>
                <li>श्री संजय यादव</li>
              </ol>
              <p className="chairperson">
                सभापति: <strong>श्री लक्ष्मण सिंह</strong>
              </p>
            </div>

            <div className="gov-report-block">
              <h2>अनुसूचित जाति, अनुसूचित जनजाति तथा पिछड़े वर्ग कल्याण समिति</h2>
              <ol className="committee-list">
                <li>डॉ. अशोक मर्सकोले</li>
                <li>श्री कमलेश जाटव</li>
                <li>श्री कुंवर सिंह टेकाम</li>
                <li>श्री पांचीलाल मेढ़ा</li>
                <li>इंजी. प्रदीप लारिया</li>
                <li>श्री प्रेम सिंह पटेल</li>
                <li>श्री फुन्देलाल सिंह मार्को</li>
                <li>श्री बाबू जण्डेल</li>
                <li>श्री महेश परमार</li>
                <li>श्री रामलाल मालवीय</li>
                <li>श्री रामखेलावन पटेल</li>
                <li>श्री रामलल्लू वैश्‍य</li>
                <li>श्री सुनील सराफ</li>
                <li>श्री हरिशंकर खटीक</li>
                <li>डॉ. हिरालाल अलावा</li>
              </ol>
              <p className="chairperson">
                सभापति: <strong>श्री रामलाल मालवीय</strong>
              </p>
            </div>
          </div>

          {/* Third Single */}
          <div className="gov-report-row">
            <div className="gov-report-block">
              <h2>स्थानीय निकाय एवं पंचायतीराज लेखा समिति</h2>
              <ol className="committee-list">
                <li>श्री आकाश कैलाश विजयवर्गीय</li>
                <li>श्री केदारनाथ शुक्ल</li>
                <li>श्री दिव्यराज सिंह</li>
                <li>श्री दिलीप सिंह गुर्जर</li>
                <li>श्री देवेन्द्र सिंह पटैल</li>
                <li>श्री बिसाहूलाल सिंह</li>
                <li>डॉ. राजेन्द्र पाण्डेय ‘राजूभैया’</li>
                <li>श्री विश्‍वास सारंग</li>
                <li>श्री विक्रम सिंह राणा</li>
                <li>श्री संजय उइके</li>
                <li>श्री संजय शुक्ला</li>
              </ol>
              <p className="chairperson">
                सभापति: <strong>श्री बिसाहूलाल सिंह</strong>
              </p>
            </div>
          </div>
          

          <p className="signature">
            ए.पी. सिंह,
            <br />
            प्रमुख सचिव,
            <br />
            मध्‍यप्रदेश विधान सभा।
          </p>
          <p className="footer-note">
            समितियों हेतु निर्वाचित मान. सदस्‍यों के नाम निर्वाचन नियमों के
            अनुसार देवनागरी वर्णमाला के अनुक्रम में अंकित किये गये हैं ।
          </p>
        </div>
      </section>

      <footer className="gov-footer">
        © {new Date().getFullYear()} मध्यप्रदेश विधान सभा — सभी अधिकार सुरक्षित
      </footer>
    </div>
  );
};

export default FinancialElectedCommittees;
