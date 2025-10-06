import React from 'react';

const Puruskaryojna = () => {
  const documents = [
    {
      title: 'Notice',
      year: '2015',
      pdf: '/misc/puraskar2015.pdf', // PDF path
    },
    {
      title: 'Rules - Gandhi Darshan Puruskar Yojana Niyam',
      pdf: '/misc/puruskargandhi(2).pdf',
    },
    {
      title: 'Rules - Dr. Bhimrao Ambedkar Puruskar Yojana Niyam',
      pdf: '/misc/puruskarambedkar(3).pdf',
    },
  ];

  // Styles
  const containerStyle = {
    padding: '3rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
  };

  const mainHeadingStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '1rem',
    fontSize: '3rem',
    fontWeight: '700',
  };

  const subHeadingStyle = {
    textAlign: 'center',
    color: '#34495e',
    marginBottom: '3rem',
    fontSize: '1.5rem',
    fontWeight: '500',
  };

  const cardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2.5rem',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    textAlign: 'center',
    minHeight: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const cardHoverStyle = {
    transform: 'translateY(-8px)',
    boxShadow: '0 14px 28px rgba(0, 0, 0, 0.15)',
  };

  const cardTitleStyle = {
    color: '#1a237e',
    fontSize: '1.6rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
  };

  const cardYearStyle = {
    color: '#7f8c8d',
    fontSize: '1rem',
    marginBottom: '0.5rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={mainHeadingStyle}>Puraskar Yojana</h1>
      <h2 style={subHeadingStyle}>MP Legislative Assembly Award Schemes</h2>

      <div style={cardGridStyle}>
        {documents.map((doc, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, cardHoverStyle)
            }
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
            onClick={() => doc.pdf && window.open(doc.pdf, "_blank")} // ⬅️ Open PDF on click
          >
            <h3 style={cardTitleStyle}>{doc.title}</h3>
            {doc.year && <div style={cardYearStyle}>Year: {doc.year}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Puruskaryojna;
