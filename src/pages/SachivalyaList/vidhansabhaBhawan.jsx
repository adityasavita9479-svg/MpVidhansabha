import React from "react";

const IndiraGandhiVidhanaBhavanPage = () => {
  const handleMouseOver = (e) => {
    e.currentTarget.classList.add("hover-effect");
  };

  const handleMouseOut = (e) => {
    e.currentTarget.classList.remove("hover-effect");
  };

  const sections = [
    {
      title: "निर्माण और इतिहास",
      content: `1 नवम्‍बर, 1956 को मध्‍यप्रदेश बनने के बाद ... (full text unchanged)`,
      image: "/galleries/oldvidhansabha.jpg",
      alt: "मिंटो हॉल",
      extraHeading: "(मिंटो हॉल का ऐतिहासिक भवन)",
    },
    {
      title: "नया विधानसभा भवन",
      content: `इस नए भवन का उद्घाटन ... (full text unchanged)`,
      image: "/galleries/newgvidhansabha.jpg",
      alt: "इंदिरा गांधी विधान भवन",
      extraHeading: "(नया भवन उद्घाटन)",
    },
    {
      title: "वास्तुकला और विशेषताएँ",
      content: `विधान परिषद् के ठीक सामने ... (full text unchanged)`,
      image: "/galleries/pillarsvidhansabha.jpg",
      alt: "भवन की वास्तुकला",
      extraHeading: "(भवन का आधुनिक और पारंपरिक समन्वय)",
    },
    {
      title: "सभागार",
      content: `नये भवन के सेक्‍टर छ: में एक सभागार ... (full text unchanged)`,
      image: "/galleries/auditoriumvidhansabha.jpg",
      alt: "भवन का सेक्टर",
      extraHeading: "(भवन के विभिन्न सेक्टर और सुविधा क्षेत्र)",
    },
    {
      title: "राष्ट्रीय प्रतीक(NationalEmblem)",
      content: `भवन में मंत्रियों के 57 कक्ष ... (full text unchanged)`,
      image: "/galleries/ashokastumbh.jpg",
      alt: "राष्ट्रीय प्रतीक",
      extraHeading: "(भवन के विभिन्न सेक्टर और सुविधा क्षेत्र)",
    },
  ];

  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <div className="comm-hero">
        <div className="comm-hero-content">
          <h1>इंदिरा गांधी विधान भवन</h1>
        </div>
      </div>

      {/* ---------------- PAGE CONTENT ---------------- */}
      <div className="wrapper">
        {sections.map(({ title, content, image, alt, extraHeading }, index) => (
          <div key={index} className="section">
            <h2 className="subheading">{title}</h2>
            <p className="content">{content}</p>

            {image && (
              <img
                src={image}
                alt={alt}
                className="image"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
            )}

            {extraHeading && (
              <div className="extra-heading">{extraHeading}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default IndiraGandhiVidhanaBhavanPage;
