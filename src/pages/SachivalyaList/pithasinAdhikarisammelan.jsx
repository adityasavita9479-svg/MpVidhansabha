// Updated React component with proper modal controls + working useEffect
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Pithasinadhikarisammelan = () => {
  const documents = [
    {
      title: "Secretaries Conference 2nd February 2010",
      image: "/galleries/Group_Photo.jpg",
      date: "2nd February 2010",
      location: "Bhopal, Madhya Pradesh",
      gallery: [
        "/galleries/welcomeeeeee.jpg",
        "/galleries/Group_Photo.jpg",
        "/galleries/meetinggggg.jpg",
      ],
    },
    {
      title: "Presiding Officers Conference ",
      image: "/galleries/groupphoto-0302010.jpg",
      date: "3rd February 2010",
      location: "Bhopal, Madhya Pradesh",
      gallery: [
        "/galleries/groupphoto-0302010.jpg",
        "/galleries/lamp-0302010.jpg",
        "/galleries/po-sp-address-0302010.jpg",
      ],
    },
    {
      title:
        "Urgency in Addresing The Needs of Environment and Wild Life Conservation",
      image: "/galleries/pop-21.jpg",
      date: "5 February 2010",
      location: "Bhopal, Madhya Pradesh",
      gallery: [
        "/galleries/pop-21.jpg",
        "/galleries/pop-11.jpg",
        "/galleries/pop-13.jpg",
        "/galleries/pop-22 (2).jpg",
      ],
      description:
        "Lok Sabha Speaker, Smt. Meira Kumar with the Chief Minister of Madhya Pradesh, Shri Shivraj Singh Chouhan and Speaker of Madhya Pradesh Vidhan Sabha Shri Ishwardas Rohani, at the Symposium.",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (gallery) => {
    setActiveImages(gallery);
    setActiveImageIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? activeImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setActiveImageIndex((prev) =>
      prev === activeImages.length - 1 ? 0 : prev + 1
    );
  };

  // ----------------------
  // ADD USEEFFECT: Scroll Lock + ESC close
  // ----------------------
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e) => {
        if (e.key === "Escape") closeModal();
      };
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  const cardStyle = (img) => ({
    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "12px",
    height: "360px",
    display: "flex",
    alignItems: "flex-end",
    color: "#fff",
    padding: "1rem",
    cursor: "pointer",
  });

  return (
    <div className="comm-page">
      <section className="comm-hero">
        <div className="comm-hero-content">
          <h1>74th Presiding Officers Conference</h1>
          <p>52nd Secretaries Conference</p>
        </div>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          padding: "20px",
        }}
      >
        {documents.map((doc, i) => (
          <div
            key={i}
            style={cardStyle(doc.image)}
            onClick={() => openModal(doc.gallery)}
          >
            <div>
              <div style={{ fontSize: "1.15rem", fontWeight: 800 }}>
                {doc.title}
              </div>
              <div style={{ fontSize: "0.9rem", marginTop: 6 }}>
                {doc.date} • {doc.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(2px)",
            zIndex: 9999,
          }}
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImages[activeImageIndex]}
              alt=""
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                borderRadius: "10px",
              }}
            />

            {/* LEFT BUTTON */}
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                left: "-50px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "#ffffffbb",
                border: "none",
                padding: "10px 14px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              ◀
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                right: "-50px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "#ffffffbb",
                border: "none",
                padding: "10px 14px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              ▶
            </button>

            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0px",
                background: "#ff4b4bd9",
                color: "#fff",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ✖
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Pithasinadhikarisammelan;
