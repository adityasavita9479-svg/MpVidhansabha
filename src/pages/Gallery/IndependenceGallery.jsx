import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const photoCollections = [
  {
    heading: "Independence Day 2019",
    photos: [
      "ind1-vs160819_1.jfif",
      "ind2-vs160819_2.jfif",
      "ind3-vs160819_3.jfif",
      
    ],
  },
  // Add more collections here if needed
];

const PhotoGallery = () => {
  return (
    <div
      style={{
        maxWidth: 960,
        margin: "2rem auto",
        padding: "0 1rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "3rem",
          color: "#2c3e50",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        फोटो गैलरी
      </h1>

      {photoCollections.map((collection, index) => (
        <section
          key={index}
          style={{
            backgroundColor: "#fafafa",
            padding: "1.5rem",
            marginBottom: "4rem",
            borderRadius: 15,
            border: "1px solid #ddd",
            boxShadow: "0 4px 15px rgba(0,0,0,0.07)",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#34495e",
              marginBottom: "1rem",
              letterSpacing: "0.04em",
            }}
          >
            {collection.heading}
          </h2>

          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={true}
            thumbWidth={100}
            showStatus={false}
            showIndicators={true}
            emulateTouch
            dynamicHeight
            transitionTime={600}
            interval={4000}
            renderArrowPrev={(clickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={clickHandler}
                  title={label}
                  style={arrowButtonStyle("left")}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.6)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.3)")}
                >
                  <FaArrowAltCircleLeft size={24} />
                </button>
              )
            }
            renderArrowNext={(clickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={clickHandler}
                  title={label}
                  style={arrowButtonStyle("right")}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.6)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.3)")}
                >
                  <FaArrowAltCircleRight size={24} />
                </button>
              )
            }
          >
            {collection.photos.map((photoSrc, idx) => (
              <div key={idx} style={{ position: "relative" }}>
                <img
                  src={photoSrc}
                  alt={`Gallery Image ${idx + 1}`}
                  style={{
                    borderRadius: 15,
                    maxHeight: 500,
                    objectFit: "cover",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                    userSelect: "none",
                    width: "100%",
                  }}
                />
                <p
                  className="legend"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    margin: 0,
                    backgroundColor: "rgba(44, 62, 80, 0.7)",
                    color: "#ecf0f1",
                    fontWeight: 600,
                    fontSize: "1rem",
                    padding: "0.6rem 1rem",
                    borderRadius: "0 0 15px 15px",
                    userSelect: "none",
                    letterSpacing: "0.03em",
                  }}
                >
                  {`Image ${idx + 1}`}
                </p>
              </div>
            ))}
          </Carousel>
        </section>
      ))}
    </div>
  );
};

const arrowButtonStyle = (side) => ({
  position: "absolute",
  zIndex: 2,
  top: "50%",
  [side]: 15,
  background: "rgba(0,0,0,0.3)",
  border: "none",
  borderRadius: "50%",
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  cursor: "pointer",
  transform: "translateY(-50%)",
  boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
  transition: "background-color 0.3s",
});

export default PhotoGallery;
