import React, { useState, useEffect } from 'react';

const Pithasinadhikarisammelan = () => {
  // --- Data: add real paths under public/ (e.g. public/galleries/...) ---
  const documents = [
    {
      title: 'Secretaries Conference 2nd February 2010',
      image: '/galleries/Group_Photo.jpg',
      date: '2nd February 2010',
      location: 'Bhopal, Madhya Pradesh',
      gallery: [
        '/galleries/welcomeeeeee.jpg',
        '/galleries/Group_Photo.jpg',
        '/galleries/meetinggggg.jpg',
      ],
    },
    {
      title: 'Presiding Officers Conference ',
      image: '/galleries/groupphoto-0302010.jpg',
      date: '3rd February 2010',
      location: 'Bhopal, Madhya Pradesh',
      gallery: ['/galleries/groupphoto-0302010.jpg', '/galleries/lamp-0302010.jpg','/galleries/po-sp-address-0302010.jpg'],
    },
    {
      title: 'Urgency in Addresing The Needs of Environment and Wild Life Conservation',
      image: '/galleries/pop-21.jpg',
      date: '5 February 2010',
      location: 'Bhopal, Madhya Pradesh',
      gallery: ['/galleries/pop-21.jpg', '/galleries/pop-11.jpg','/galleries/pop-13.jpg','/galleries/pop-22 (2).jpg'],
      description:
      "Lok Sabha Speaker , Smt. Meira Kumar with the Chief Minister of Madhya Pradesh , Shri Shivraj Singh Chouhan and Speaker of Madhya Pradesh Vidhan Sabha Shri Ishwardas Rohani , at the Symposium on Urgency in Addressing the Needs of Environment and Conservation of Wildlife in Bhopal on 5 February 2010.",
    },
  ];

  // --- State for modal/gallery ---
  const [open, setOpen] = useState(false);
  const [docIndex, setDocIndex] = useState(0); // which document's gallery is open
  const [imgIndex, setImgIndex] = useState(0); // index inside gallery array

  // Derived: list of images for currently selected doc (fallback to single image)
  const currentImages = (() => {
    const doc = documents[docIndex] || {};
    if (doc.gallery && Array.isArray(doc.gallery) && doc.gallery.length > 0) {
      return doc.gallery;
    }
    // fallback to the main image if no gallery provided
    return doc.image ? [doc.image] : [];
  })();

  // --- Open gallery for a specific document and show first image ---
  const openGallery = (index, startImage = 0) => {
    setDocIndex(index);
    setImgIndex(startImage);
    setOpen(true);
  };

  // --- Close gallery ---
  const closeGallery = () => {
    setOpen(false);
  };

  // --- Prev / Next handlers ---
  const prevImage = () => {
    setImgIndex((i) => (i - 1 + currentImages.length) % currentImages.length);
  };
  const nextImage = () => {
    setImgIndex((i) => (i + 1) % currentImages.length);
  };

  // --- Keyboard support (Escape, ArrowLeft, ArrowRight) ---
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === 'Escape') closeGallery();
      else if (e.key === 'ArrowLeft') prevImage();
      else if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, currentImages.length]);

  // Prevent page scroll when modal is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // --- Inline styles (you wanted CSS inside the page) ---
  const containerStyle = {
    padding: '2.5rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
    color: '#2c3e50',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '1.5rem',
    fontWeight: 700,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  };

  const cardBaseStyle = (image) => ({
    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15)), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '12px',
    height: '360px',
    display: 'flex',
    alignItems: 'flex-end',
    color: '#ffffff',
    padding: '1rem',
    boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    cursor: 'pointer',
  });

  const cardHoverStyle = {
    transform: 'translateY(-6px)',
    boxShadow: '0 14px 30px rgba(0,0,0,0.18)',
  };

  // Modal styles
  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '1.5rem',
  };

  const modalStyle = {
    maxWidth: '1100px',
    width: '100%',
    maxHeight: '90vh',
    backgroundColor: '#0b1220',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  };

  const modalContentStyle = {
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '1rem',
  };

  const modalImageStyle = {
    maxWidth: '100%',
    maxHeight: '80vh',
    objectFit: 'contain',
    borderRadius: '6px',
  };

  const controlsStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    pointerEvents: 'none', // allow only buttons to receive events
  };

  const controlButtonStyle = {
    pointerEvents: 'auto',
    background: 'rgba(0,0,0,0.45)',
    color: '#fff',
    border: 'none',
    padding: '10px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    margin: '0 10px',
  };

  const modalFooterStyle = {
    padding: '10px 14px',
    background: '#071126',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    overflowX: 'auto',
  };

  const thumbStyle = (src, active) => ({
    width: '80px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '6px',
    border: active ? '3px solid #2dd4bf' : '2px solid rgba(255,255,255,0.08)',
    opacity: active ? 1 : 0.85,
    cursor: 'pointer',
  });

  const closeBtnStyle = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'rgba(0,0,0,0.45)',
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '6px',
    cursor: 'pointer',
    zIndex: 2,
  };

  // --- Helper: handle image loading error (fallback) ---
  const handleImgError = (e) => {
    // show a subtle placeholder (data URL) or blank image
    e.currentTarget.src =
      'data:image/svg+xml;charset=UTF-8,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><rect fill="#ddd" width="100%" height="100%"/><text x="50%" y="50%" font-size="20" fill="#666" dominant-baseline="middle" text-anchor="middle">Image not found</text></svg>`
      );
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>
        74th Presiding Officers Conference 
      </h1>
      <h2 style={titleStyle}>
         52nd Secretaries Conference
      </h2>

      <div style={gridStyle}>
        {documents.map((doc, i) => (
          <div
            key={i}
            role="button"
            tabIndex={0}
            aria-label={`Open gallery for ${doc.title}`}
            style={cardBaseStyle(doc.image)}
            onClick={() => openGallery(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') openGallery(i);
            }}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardBaseStyle(doc.image))}
          >
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>{doc.title}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 500, marginTop: 6 }}>
                {doc.date} • {doc.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {open && (
        <div
          style={overlayStyle}
          onClick={() => closeGallery()} // click outside closes
          role="dialog"
          aria-modal="true"
        >
          <div
            style={modalStyle}
            onClick={(e) => e.stopPropagation()} // prevent overlay click when clicking inside modal
          >
            <div style={modalContentStyle}>
              <button
                style={closeBtnStyle}
                aria-label="Close gallery"
                onClick={() => closeGallery()}
              >
                ✕
              </button>

              <div style={controlsStyle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button
                    style={controlButtonStyle}
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    ‹ Prev
                  </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button
                    style={controlButtonStyle}
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    Next ›
                  </button>
                </div>
              </div>

              {/* Main image */}
              {currentImages.length > 0 ? (
                <img
                  key={currentImages[imgIndex]}
                  src={currentImages[imgIndex]}
                  alt={`${documents[docIndex].title} - ${imgIndex + 1}`}
                  style={modalImageStyle}
                  onError={handleImgError}
                />
              ) : (
                <div style={{ color: '#fff' }}>No images available</div>
              )}
            </div>

            {/* Footer thumbnails */}
            <div style={modalFooterStyle}>
              {currentImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`thumb-${idx}`}
                  style={thumbStyle(src, idx === imgIndex)}
                  onClick={() => setImgIndex(idx)}
                  onError={handleImgError}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pithasinadhikarisammelan;
