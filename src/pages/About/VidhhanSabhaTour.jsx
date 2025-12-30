// import React, { useState } from "react";

// // Data for all categories
// const categories = {
//   entry: {
//     label: "विधानसभा भवन",
//     thumbnail: "tours/vidhan-1.jpg",
//     images: [
//       { src: "tours/vidhan-1.jpg", title: "", },
//       { src: "tours/vidhan-2.jpg", title: "", },
//       { src: "tours/vidhan-3.jpg", title: "", },
//       { src: "tours/vidhan-4.jpg", title: "", },
//       { src: "tours/vidhan-5.jpg", title: "", },
//       { src: "tours/vidhan-6.jpg", title: "", },
//       { src: "tours/vidhan-7.jpg", title: "", },
//       { src: "tours/vidhan-8.jpg", title: "", },
//       { src: "tours/vidhan-9.jpg", title: "", },
//       { src: "tours/vidhan-10.jpg", title: "", }
//     ],
//   },

//   hall: {
//     label: "सभागार",
//     thumbnail: "tours/sabhaghar-7.jpg",
//     images: [
//       { src: "tours/sabhaghar-1.jpg", title: "", },
//       { src: "tours/sabhaghar-2.jpg", title: "", },
//       { src: "tours/sabhaghar-3.jpg", title: "", },
//       { src: "tours/sabhaghar-4.jpg", title: "", },
//       { src: "tours/sabhaghar-5.jpg", title: "", },
//       { src: "tours/sabhaghar-6.jpg", title: "", },
//       { src: "tours/sabhaghar-7.jpg", title: "", }
//     ],
//   },

//   night: {
//     label: "रात्रि दृश्य",
//     thumbnail: "tours/night.JPG",
//     images: [
//       { src: "tours/DSC_0079.jpg", title: "", },
//       { src: "tours/DSC_0086.jpg", title: "", },
//       { src: "tours/DSC_0087.jpg", title: "", },
//       { src: "tours/DSC_0088.jpg", title: "", },
//       { src: "tours/DSC_0089.jpg", title: "", },
//       { src: "tours/DSC_0090.jpg", title: "", },
//       { src: "tours/DSC_0091.jpg", title: "", },
//       { src: "tours/DSC_0092.jpg", title: "", }
//     ],
//   },
//   nationalemblem: {
//     label: "राष्ट्रीय प्रतीक",
//     thumbnail: "tours/nationalemblem-1.jpg",
//     images: [
//       { src: "tours/nationalemblem-1.jpg", title: "", },
//       { src: "tours/nationalemblem-2.jpg", title: "", },
//       { src: "tours/nationalemblem-3.jpg", title: "", },
//       { src: "tours/nationalemblem-4.jpg", title: "", },
//       { src: "tours/nationalemblem-5.jpg", title: "", },
//       { src: "tours/nationalemblem-6.jpg", title: "", },
//       { src: "tours/nationalemblem-7.jpg", title: "", },
//       { src: "tours/nationalemblem-8.jpg", title: "", },


//     ],
//   },
//   library: {
//     label: "पुस्तकालय",
//     thumbnail: "tours/पुस्तकालय-14.jpg",
//     images: [
//       { src: "tours/पुस्तकालय-1.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-2.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-3.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-4.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-5.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-6.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-7.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-8.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-9.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-10.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-11.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-12.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-13.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-14.jpg", title: "",  },
//       { src: "tours/पुस्तकालय-15.jpg", title: "",  },
//     ],
//   },
//   House: {
//     label: "सदन",
//     thumbnail: "tours/House-1.jpg",
//     images: [
//       { src: "tours/House-2.jpg",  },
//       { src: "tours/House-1.jpg",  },
//       { src: "tours/House-3.jpg",  },
//       { src: "tours/House-4.jpg",  },
//       { src: "tours/House-5.jpg",  },
//       { src: "tours/House-6.jpg",  },
//       { src: "tours/House-7.jpg",  },
//       { src: "tours/House-8.jpg",  },
//       { src: "tours/House-9.jpg",  },
//       { src: "tours/House-10.jpg",  },
//       { src: "tours/House-11.jpg",  },
//       { src: "tours/House-12.jpg",  },
//       { src: "tours/House-13.jpg",  },
//       { src: "tours/House-14.jpg",  },
//       { src: "tours/House-15.jpg",  },
//       { src: "tours/House-16.jpg",  },
//       { src: "tours/House-17.jpg",  },
//       { src: "tours/House-18.jpg",  },
//       { src: "tours/House-19.jpg",  },
//       { src: "tours/House-20.jpg",  },
//       { src: "tours/House-21.jpg",  },
//       { src: "tours/House-22.jpg",  },
//       { src: "tours/House-23.jpg",  },
//       { src: "tours/House-24.jpg",  },
//       { src: "tours/House-25.jpg",  },
//       { src: "tours/House-26.jpg",  },
//       { src: "tours/House-27.jpg",  },
//       { src: "tours/House-28.jpg",  },
//       { src: "tours/House-29.jpg",  },
//       { src: "tours/House-30.jpg",  },
//       { src: "tours/House-131.jpg",  },

//     ],
//   },

  
// };

// // Component
// const VidhansabhaCategoryCarousel = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(null);

//   const openCategoryModal = (categoryKey) => {
//     setActiveCategory(categoryKey);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setActiveCategory(null);
//   };

//   const images = activeCategory ? categories[activeCategory].images : [];

//   return (

//     <>
//       {/* ✅ Main Heading */}
//       <div className="my-4 text-center">
//         <h2 className="fw-bold text-primary">विधानसभा भ्रमण</h2>
//         <p className="text-muted">विधानसभा परिसर की श्रेणियाँ देखें</p>
//       </div>
//       {/* ✅ Category Thumbnails */}
//       <div className="container py-4">
//         <div className="row justify-content-center g-4">
//           {Object.entries(categories).map(([key, value]) => (
//             <div key={key} className="text-center col-6 col-md-4">
//               <img
//                 src={value.thumbnail}
//                 alt={value.label}
//                 className="rounded shadow-sm img-fluid"
//                 style={{ maxWidth: "280px", cursor: "pointer" }}
//                 onClick={() => openCategoryModal(key)}
//               />
//               <p className="mt-2 text-primary fw-bold">{value.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ React Controlled Modal */}
//       {showModal && (
//         <div
//           className="modal fade show d-block"
//           tabIndex="-1"
//           role="dialog"
//           style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
//         >
//           <div className="modal-dialog modal-lg modal-dialog-centered">
//             <div className="text-white modal-content bg-dark">
//               <div className="border-0 modal-header">
//                 <h5 className="modal-title">
//                   {activeCategory ? categories[activeCategory].label : ""}
//                 </h5>
//                 <button
//                   type="button"
//                   className="btn-close btn-close-white"
//                   onClick={closeModal}
//                 ></button>
//               </div>

//               <div className="p-0 modal-body">
//                 <div
//                   id="carouselInsideModal"
//                   className="carousel slide"
//                   data-bs-ride="carousel"
//                 >
//                   <div className="carousel-inner">
//                     {images.map((img, idx) => (
//                       <div
//                         className={`carousel-item ${idx === 0 ? "active" : ""}`}
//                         key={idx}
//                       >
//                         <div className="border-0 card text-bg-dark">
//                           <img
//                             src={img.src}
//                             alt={img.title}
//                             className="card-img"
//                             style={{ height: "450px", objectFit: "cover" }}
//                           />
//                           <div className="bg-opacity-25 card-img-overlay bg-dark d-flex flex-column justify-content-end">
//                             <h5 className="card-title">{img.title}</h5>
//                             <p className="card-text">{img.description}</p>
//                             <p className="card-text">
//                               <small className="text-muted">{img.updated}</small>
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Prev & Next */}
//                   <button
//                     className="carousel-control-prev"
//                     type="button"
//                     data-bs-target="#carouselInsideModal"
//                     data-bs-slide="prev"
//                   >
//                     <span
//                       className="carousel-control-prev-icon"
//                       aria-hidden="true"
//                     ></span>
//                     <span className="visually-hidden">Previous</span>
//                   </button>
//                   <button
//                     className="carousel-control-next"
//                     type="button"
//                     data-bs-target="#carouselInsideModal"
//                     data-bs-slide="next"
//                   >
//                     <span
//                       className="carousel-control-next-icon"
//                       aria-hidden="true"
//                     ></span>
//                     <span className="visually-hidden">Next</span>
//                   </button>
//                 </div>
//               </div>

//               <div className="border-0 modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={closeModal}
//                 >
//                   बंद करें
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default VidhansabhaCategoryCarousel;
import React, { useState } from "react";


const categories = {
  entry: {
    label: "विधानसभा भवन",
    thumbnail: "tours/vidhan-1.jpg",
    images: [
      { src: "tours/vidhan-1.jpg" },
      { src: "tours/vidhan-2.jpg" },
      { src: "tours/vidhan-3.jpg" },
      { src: "tours/vidhan-4.jpg" },
      { src: "tours/vidhan-5.jpg" },
      { src: "tours/vidhan-6.jpg" },
      { src: "tours/vidhan-7.jpg" },
      { src: "tours/vidhan-8.jpg" },
      { src: "tours/vidhan-9.jpg" },
      { src: "tours/vidhan-10.jpg" },
    ],
  },
  hall: {
    label: "सभागार",
    thumbnail: "tours/sabhaghar-7.jpg",
    images: [
      { src: "tours/sabhaghar-1.jpg" },
      { src: "tours/sabhaghar-2.jpg" },
      { src: "tours/sabhaghar-3.jpg" },
      { src: "tours/sabhaghar-4.jpg" },
      { src: "tours/sabhaghar-5.jpg" },
      { src: "tours/sabhaghar-6.jpg" },
      { src: "tours/sabhaghar-7.jpg" },
    ],
  },
  night: {
    label: "रात्रि दृश्य",
    thumbnail: "tours/night.JPG",
    images: [
      { src: "tours/DSC_0079.jpg" },
      { src: "tours/DSC_0086.jpg" },
      { src: "tours/DSC_0087.jpg" },
      { src: "tours/DSC_0088.jpg" },
      { src: "tours/DSC_0089.jpg" },
      { src: "tours/DSC_0090.jpg" },
      { src: "tours/DSC_0091.jpg" },
      { src: "tours/DSC_0092.jpg" },
    ],
  },
  nationalemblem: {
    label: "राष्ट्रीय प्रतीक",
    thumbnail: "tours/nationalemblem-1.jpg",
    images: [
      { src: "tours/nationalemblem-1.jpg" },
      { src: "tours/nationalemblem-2.jpg" },
      { src: "tours/nationalemblem-3.jpg" },
      { src: "tours/nationalemblem-4.jpg" },
      { src: "tours/nationalemblem-5.jpg" },
      { src: "tours/nationalemblem-6.jpg" },
      { src: "tours/nationalemblem-7.jpg" },
      { src: "tours/nationalemblem-8.jpg" },
    ],
  },
  library: {
    label: "पुस्तकालय",
    thumbnail: "tours/पुस्तकालय-14.jpg",
    images: Array.from({ length: 15 }, (_, i) => ({
      src: `tours/पुस्तकालय-${i + 1}.jpg`,
    })),
  },
  House: {
    label: "सदन",
    thumbnail: "tours/House-1.jpg",
    images: Array.from({ length: 31 }, (_, i) => ({
      src: `tours/House-${i + 1}.jpg`,
    })),
  },
};

const VidhansabhaCategoryCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const openCategoryModal = (categoryKey) => {
    setActiveCategory(categoryKey);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveCategory(null);
  };

  const images = activeCategory ? categories[activeCategory].images : [];

  return (
    <>
      <div className="my-4 text-center">
        <h2 className="fw-bold text-primary">विधानसभा भ्रमण</h2>
        <p className="text-muted">विधानसभा परिसर की श्रेणियाँ देखें</p>
      </div>

      <div className="container py-4 tour-container">
        <div className="row justify-content-center g-4">
          {Object.entries(categories).map(([key, value]) => (
            <div
              key={key}
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
            >
              <div className="text-center tour-card">
                <img
                  src={value.thumbnail}
                  alt={value.label}
                  className="category-thumbnail"
                  onClick={() => openCategoryModal(key)}
                />
                <p className="mt-2 text-primary fw-bold">{value.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="text-white modal-content bg-dark">
              <div className="border-0 modal-header">
                <h5 className="modal-title">
                  {categories[activeCategory]?.label}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="p-0 modal-body">
                <div
                  id="carouselInsideModal"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {images.map((img, idx) => (
                      <div
                        key={idx}
                        className={`carousel-item ${idx === 0 ? "active" : ""}`}
                      >
                        <img src={img.src} alt="" className="modal-carousel-img" />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselInsideModal"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselInsideModal"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="border-0 modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  बंद करें
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VidhansabhaCategoryCarousel;
