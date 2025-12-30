
// 
import React from 'react';

const Banner = () => {
  const images = [
    { src: '/hero/MPVS Image 2.jpg', alt: 'Vidhan Sabha 1' },
    { src: '/hero/MPVS Image 1.jpg', alt: 'Vidhan Sabha 2' },
    { src: '/hero/MPVS Image 3.jpg', alt: 'Vidhan Sabha 3' },
    { src: '/hero/MPVS Image 4.jpg', alt: 'Vidhan Sabha 4' },

  ];

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={image.src} className="d-block w-100" alt={image.alt} />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
