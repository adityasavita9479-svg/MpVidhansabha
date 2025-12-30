import React, { useState } from "react";

// Gallery data with multiple images per card
const galleryImages = [
 {
     id: 1,
     year: 2025,
     title: "श्री अरविंद शर्मा ने मध्यप्रदेश विधान सभा के प्रमुख सचिव पद का प्रभार ग्रहण कर लिया।",
     images: [
       "/galleries/Newps.jpg",
       "/galleries/Newps2.jpg",
       "/galleries/Newps7CmBhet.jpg",
       "/galleries/Newps8CmBhet.jpg",
     ],
   },
   {
     id: 2,
     year: 2025,
     title: " 	 प्रमुख सचिव श्री अरविंद शर्मा ने माननीय मुख्यमंत्री डॉ. मोहन यादव से सौजन्य भेंट ",
     images: [
       
       "/galleries/Newps7CmBhet.jpg",
       "/galleries/Newps8CmBhet.jpg",
     ],
   },
    {
     id: 3,
     year: 2025,
     title: "अक्टूबर माह के प्रथम दिवस पर वंदे मातरम एवं राष्ट्रगान का सामूहिक गायन",
     images: [
       "/galleries/Newps9.jpg",
       
     ],
   },
       {
     id: 4,
     year: 2025,
     title: "मध्यप्रदेश के पूर्व मुख्यमंत्री माननीय स्व. श्री प्रकाश चंद्र सेठी जी की जयंती पर श्रद्धा सुमन ",
     images: [
       "/galleries/ShradhaSuman-pc-sethi1.jpg",
       "/galleries/ShradhaSuman-pc-sethi2.jpg",
       "/galleries/ShradhaSuman-pc-sethi3.jpg",
       "/galleries/ShradhaSuman-pc-sethi4.jpg",

       
     ],
   },
  {
    id: 1,
    year: 2025,
    title: "सिंगरौली प्रगति",
    images: ["/galleries/सिंगरौलीप्रगति.jpg"],
  },
  {
    id: 2,
    year: 2025,
    title: "दिल्ली में मध्यांचल उत्सव में अध्यक्ष तोमर: युवा शक्ति बने विकसित भारत की धुरी।",
    images: ["/galleries/युवाशक्ति.jpg"],
  },
  {
    id: 3,
    year: 2025,
    title: "प्रमुख सचिव को कैम्ब्रिज से मानद डॉक्टरेट पर बधाई।",
    images: ["/galleries/डॉक्टरेटसम्मान.jpg"],
  },
  {
    id: 4,
    year: 2025,
    title: "सेवानिवृत्त अधिकारियों-कर्मचारियों को विदाई दी गई।",
    images: ["/galleries/विदाईसम्मान.jpg"],
  },
  {
    id: 5,
    year: 2025,
    title: "16वीं विधानसभा के पंचम सत्र का समापन; कार्यप्रणाली जनहित की धुरी बने – अध्यक्ष तोमर।",
    images: ["/galleries/सत्रसमापन.jpg"],
  },
  {
    id: 6,
    year: 2025,
    title: "विधान सभा में फाग उत्सव का आयोजन",
    images: ["/galleries/फागउत्सव.jpg"],
  },
  {
    id: 7,
    year: 2025,
    title: "कार्यमंत्रणा समिति की बैठक संपन्न",
    images: ["/galleries/कार्यमंत्रणाबैठक.jpg"],
  },
  {
    id: 8,
    year: 2025,
    title: "केन्द्रीय मंत्री श्री शिवराज सिंह ने अध्यक्ष श्री तोमर से भेंट कर विधानसभा कार्रवाई का अवलोकन किया।",
    images: ["/galleries/सौजन्यभेंट.jpg"],
  },
  {
    id: 9,
    year: 2025,
    title: "सत्र का प्रथम दिवस",
    images: ["/galleries/सत्रप्रथमदिवस.jpg"],
  },
  {
    id: 10,
    year: 2025,
    title: "विधायक उमाकान्त शर्मा ने प्रमुख सचिव से भेंट की और दिव्यांगजन को अवलोकन कराया।",
    images: ["/galleries/सौजन्यभेंट2.jpg"],
  },
  {
    id: 11,
    year: 2025,
    title: "श्री तोमर ने राजभवन में राज्यपाल से मुलाकात की।",
    images: ["/galleries/सौजन्यभेंट3.jpg"],
  },
  {
    id: 12,
    year: 2025,
    title: "बजट सत्र सोमवार से, अध्यक्ष ने निरीक्षण किया।",
    images: ["/galleries/निरीक्षण.jpg"],
  },
  {
    id: 13,
    year: 2025,
    title: "प्राक्कलन समिति की बैठक संपन्न",
    images: ["/galleries/प्राक्कलनसंपन्न.jpg"],
  },
  {
    id: 14,
    year: 2025,
    title: "वकील विधि में सहयोगी",
    images: ["/galleries/सहभागिता.jpg"],
  },
  {
    id: 15,
    year: 2025,
    title: "विधानसभा में ई-विधान हाउस कमेटी की बैठक हुई।",
    images: ["/galleries/बैठक2.jpg"],
  },
  {
    id: 16,
    year: 2025,
    title: "सचिवालय की लेखा शाखा का उद्घाटन हुआ",
    images: ["/galleries/लेखाशाखाकाउद्घाटन.jpg"],
  },
  {
    id: 17,
    year: 2025,
    title: "श्री नरेंद्र सिंह तोमर ने मुरैना में गणतंत्र दिवस पर झंडा वंदन किया।",
    images: ["/galleries/झंडावंदन.jpg"],
  },
  {
    id: 18,
    year: 2017,
    title: "Independence Day 2017",
    images: ["/galleries/IndependenceDay2017.jpg"],
  },
  {
    id: 19,
    year: 2014,
    title: "Orientation Programme 2014",
    images: ["/galleries/OrientationProgramme2014.jpg"],
  },
  {
    id: 20,
    year: 2010,
    title: "74th Presiding Officers' Conference of Legislative Bodies in India",
    images: ["/galleries/सम्मेलन4.jpg"],
  },
  {
    id: 21,
    year: 2006,
    title: "राष्ट्रपति डॉ. ए.पी.जे. अब्दुल कलाम का म.प्र. विधानसभा में संबोधन।",
    images: ["/galleries/संबोधन.jpg"],
  },
];

// Extract unique years
const years = [...new Set(galleryImages.map((item) => item.year))].sort((a, b) => b - a);

const GalleryFlex = () => {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredImages = galleryImages.filter((item) => item.year === selectedYear);

  const openModal = (card) => {
    setActiveCard(card);
    setActiveImageIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveCard(null);
  };

  const nextImage = () => {
    if (activeCard) {
      setActiveImageIndex((prev) => (prev + 1) % activeCard.images.length);
    }
  };

  const prevImage = () => {
    if (activeCard) {
      setActiveImageIndex((prev) =>
        prev === 0 ? activeCard.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="gallery-flex-wrapper">
      <h2 className="gallery-heading">फोटो गैलरी</h2>

      <div className="year-filter">
        <label htmlFor="yearSelect">वर्ष चुनें:</label>
        <select
          id="yearSelect"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div
        className="gallery-grid"
        style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}
      >
        {filteredImages.map((item) => (
          <div
            key={item.id}
            className="gallery-card"
            style={{
              cursor: "pointer",
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            onClick={() => openModal(item)}
          >
            <div
              style={{
                backgroundImage: `url(${item.images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "180px",
              }}
            ></div>
            <div
              style={{
                padding: "12px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && activeCard && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fff",
              padding: "16px",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "800px",
              height: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCard.images[activeImageIndex]}
              alt={activeCard.title}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
            <p style={{ marginTop: "8px" }}>{activeCard.title}</p>

            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                fontSize: "24px",
                background: "transparent",
                border: "none",
                color: "#000",
                cursor: "pointer",
              }}
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                fontSize: "24px",
                background: "transparent",
                border: "none",
                color: "#000",
                cursor: "pointer",
              }}
            >
              ▶
            </button>

            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "24px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryFlex;
