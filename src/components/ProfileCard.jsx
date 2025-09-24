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
    <div style={styles.accordionContainer} className="accordion">
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={styles.accordionHeader}
      >
        <h3 style={styles.accordionTitle}>{title}</h3>
      </div>
      {isOpen && <div style={styles.accordionBody}>{children}</div>}
    </div>
  );
};

const tagStyle = (bgColor) => ({
  backgroundColor: bgColor,
  color: '#fff',
  padding: '4px 12px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: '600',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
});

const ProfilePage = () => {
  return (
    <div style={styles.page}>
      <style>{printStyles}</style>

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.headerSection}>
          <img src="/ps.jpg" alt="श्री अवधेश प्रताप सिंह" style={styles.profileImage} />
          <div style={{ flex: 1 }}>
            <h1 style={styles.name}>अवधेश प्रताप सिंह</h1>
            <div style={styles.divider} />
            <h2 style={styles.position}>प्रमुख सचिव, मध्य प्रदेश विधानसभा</h2>
          
          </div>
        </div>

        {/* Sections */}
        <Accordion title="परिचय / जीवनी" defaultOpen={true}>
          <p style={styles.paragraph}>
            सहज व्यक्तित्व के धनी अवधेश प्रताप सिंह, प्रमुख सचिव, मध्य प्रदेश विधान सभा का जन्म दिनांक 31 मार्च, 1961 को टीकमगढ़ जिले के ग्राम जेवर के कृषक परिवार में हुआ। आपकी प्रारंभिक शिक्षा टीकमगढ़ जिले में हुई
          </p>
        </Accordion>

        <Accordion title="उपलब्धियां / पुरस्कार / सम्मान" defaultOpen={true}>
          <ul style={styles.list}>
            <li>संसदीय उत्कृष्टता सेवा सम्मान 2021</li>
            <li>"कुशल प्रशासनिक सेवा" सम्मान (2022)</li>
            <li>बुंदेली रत्न सम्मान</li>
            <li>कर्मयोगी प्रशासक, माननीय राज्यपाल द्वारा प्रशस्ति पत्र</li>
            <li>Outstanding Young Indian Award (1999)</li>
            <li>GSE टीम अमेरिका - 1 माह अध्ययन यात्रा (2000)</li>
          </ul>
        </Accordion>

        <Accordion title="देश / विदेश प्रवास" defaultOpen={true}>
          <p style={styles.paragraph}>
            फ्रांस, जर्मनी, इटली, ब्रिटेन, युगांडा, कनाडा, बांग्लादेश, आदि देशों की यात्रा।
          </p>
        </Accordion>

        <Accordion title="पुस्तक" defaultOpen={true}>
          <p style={styles.paragraph}>
            'विधानमण्डल पद्धति एवं प्रक्रिया' पुस्तक का लेखन किया। विमोचन अध्यक्ष, मुख्यमंत्री, नेता प्रतिपक्ष द्वारा किया गया।
          </p>
        </Accordion>

        <Accordion title="संपर्क विवरण" defaultOpen={true}>
          <p style={styles.paragraph}>
            'आत्म निलयम ' बी-4, बी.डी.ए. कॉलोनी, शिवाजी नगर, भोपाल-462016
          </p>
        </Accordion>
      </div>
    </div>
  );
};

// Styles
const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #f3f4f6, #ffffff)',
    padding: '40px 16px',
    fontFamily: 'sans-serif',
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: '1px solid #e5e7eb',
    overflow: 'hidden',
    padding: '24px',
  },
  headerSection: {
    display: 'flex',
    gap: '24px',
    marginBottom: '24px',
  },
  profileImage: {
    width: '112px',
    height: '144px',
    objectFit: 'cover',
    borderRadius: '12px',
    border: '1px solid #d1d5db',
  },
  name: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1f2937',
  },
  position: {
    fontSize: '25px',
    fontWeight: '600',
    color: '#1d4ed8',
  },
  divider: {
    height: '4px',
    width: '96px',
    backgroundColor: '#2563eb',
    borderRadius: '999px',
    marginTop: '8px',
    marginBottom: '12px',
  },
  tags: {
    display: 'flex',
    gap: '8px',
    marginTop: '8px',
    flexWrap: 'wrap',
  },
  accordionContainer: {
    marginBottom: '16px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
  },
  accordionHeader: {
    padding: '12px 16px',
    backgroundColor: '#f9fafb',
    cursor: 'pointer',
  },
  accordionTitle: {
    margin: 0,
    fontWeight: '600',
    color: '#1f2937',
  },
  accordionBody: {
    padding: '16px',
    backgroundColor: 'white',
  },
  paragraph: {
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.7',
    textAlign: 'justify',
  },
  list: {
    paddingLeft: '20px',
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.7',
  },
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
            <a href="https://mpvidhansabha.nic.in/evidhan.pdf"></a>