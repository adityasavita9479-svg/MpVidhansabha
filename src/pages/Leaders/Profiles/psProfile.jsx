// 

import React, { useState, useEffect } from 'react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    const mediaQuery = window.matchMedia('print');
    const handlePrint = () => setIsOpen(true);
    mediaQuery.addEventListener('change', handlePrint);
    return () => mediaQuery.removeEventListener('change', handlePrint);
  }, []);

  return (
    <div className="accordion-card accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="accordion-title">{title}</h3>
      </div>
      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div className="page">
      <style>{printStyles}</style>

      <div className="container">
        {/* Header */}
        <div className="header-section">
          <img
            src="/leaders/ps.jpg"
            alt="श्री अवधेश प्रताप सिंह"
            className="profile-image"
          />
          <div className="header-text">
            <h1 className="name">अवधेश प्रताप सिंह</h1>
            <div className="divider" />
            <h2 className="position">प्रमुख सचिव, मध्य प्रदेश विधानसभा</h2>
          </div>
        </div>

        {/* Accordions */}
        <Accordion title="परिचय / जीवनी" defaultOpen={true}>
          <p className="paragraph">
            सहज व्यक्तित्व के धनी अवधेश प्रताप सिंह, प्रमुख सचिव, मध्य प्रदेश विधान सभा का जन्म दिनांक 31 मार्च, 1961 को टीकमगढ़ जिले के ग्राम जेवर के कृषक परिवार में हुआ। आपकी प्रारंभिक शिक्षा टीकमगढ़ जिले में हुई।
          </p>
        </Accordion>

        <Accordion title="उपलब्धियां / पुरस्कार / सम्मान" defaultOpen={true}>
          <ul className="list">
            <li>संसदीय उत्कृष्टता सेवा सम्मान 2021</li>
            <li>"कुशल प्रशासनिक सेवा" सम्मान (2022)</li>
            <li>बुंदेली रत्न सम्मान</li>
            <li>कर्मयोगी प्रशासक, माननीय राज्यपाल द्वारा प्रशस्ति पत्र</li>
            <li>Outstanding Young Indian Award (1999)</li>
            <li>GSE टीम अमेरिका - 1 माह अध्ययन यात्रा (2000)</li>
          </ul>
        </Accordion>

        <Accordion title="देश / विदेश प्रवास" defaultOpen={true}>
          <p className="paragraph">
            फ्रांस, जर्मनी, इटली, ब्रिटेन, युगांडा, कनाडा, बांग्लादेश, आदि देशों की यात्रा।
          </p>
        </Accordion>

        <Accordion title="पुस्तक" defaultOpen={true}>
          <p className="paragraph">
            'विधानमण्डल पद्धति एवं प्रक्रिया' पुस्तक का लेखन किया। विमोचन अध्यक्ष, मुख्यमंत्री, नेता प्रतिपक्ष द्वारा किया गया।
          </p>
        </Accordion>

        <Accordion title="संपर्क विवरण" defaultOpen={true}>
          <p className="paragraph">
            'आत्म निलयम ' बी-4, बी.डी.ए. कॉलोनी, शिवाजी नगर, भोपाल-462016
          </p>
        </Accordion>
      </div>
    </div>
  );
};

// Print styles
const printStyles = `
  @media print {
    body {
      background: white !important;
    }
    .accordion {
      border: none !important;
      page-break-inside: avoid;
    }
    * {
      box-shadow: none !important;
      background: white !important;
    }
  }
`;

export default ProfilePage;
