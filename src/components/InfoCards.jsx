import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MPFooter = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const leaders = [
    {
      img: "/leaders/governor_01.jpg",
      role: "माननीय राज्यपाल",
      name: "श्री मंगुभाई पटेल",
      link: "/gov",
    },
    {
      img: "/leaders/mlyadavcm.jpg",
      role: "माननीय मुख्यमंत्री",
      name: "डॉ. मोहन यादव",
      link: "/cm",
    },
    {
      img: "/leaders/nstomarspkr.jpg",
      role: "माननीय अध्यक्ष",
      name: "श्री नरेन्द्र सिंह तोमर",
      link: "/nst",
    },
    {
      img: "/leaders/umangsingharlo.jpg",
      role: "माननीय नेता प्रतिपक्ष",
      name: "श्री उमंग सिंघार",
      link: "/umg",
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#f2f2f2",
        padding: "20px 0",
        borderTop: "2px solid #007bff",
      }}
    >
      <div className="container-fluid">
        <div className="row g-4">
          {/* Left Column */}
          <div className="col-12 col-lg-2">
            {leaders.slice(0, 2).map((leader, idx) => (
              <Link
                to={leader.link}
                key={idx}
                className="text-decoration-none text-dark"
              >
                <div
                  className="mx-auto mb-4 shadow-sm card leader-card"
                  style={{ maxWidth: "220px" }}
                >
                  <div className="p-2 text-center text-white card-header bg-primary">
                    <h6 className="mb-0">{leader.role}</h6>
                  </div>
                  <div className="p-2 text-center bg-white card-body">
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="mb-2 leader-photo"
                    />
                    <p className="fw-bold small text-dark">{leader.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Center Column */}
          <div className="col-12 col-lg-8">
            <div className="row g-4">
              {/* सूचना पटल */}
              <div className="col-md-6 d-flex">
                <div className="p-3 border rounded shadow-sm w-100 d-flex flex-column h-100">
                  <h6 className="p-2 text-center text-white rounded bg-warning">
                    सूचना पटल
                  </h6>
                  <ul className="mt-3 list-unstyled flex-grow-1">
                    <li>
                      <a
                        href="/misc/Q20776VS230925.pdf"
                        className="text-dark text-decoration-none"
                      >
                        जुलाई-अगस्त, 2025 सत्र की स्‍थगित बैठकों के
                        प्रश्‍नोत्‍तरों का प्रदाय
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/committees"
                        className="text-dark text-decoration-none"
                      >
                        समितियों की आगामी बैठक
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/committees/padkramsuchi"
                        className="text-dark text-decoration-none"
                      >
                        विधान सभा सचिवालय पदक्रम सूची (01 अप्रैल, 2024 की स्थिति)
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/misc/vsorder13685d040924.pdf"
                        className="text-dark text-decoration-none"
                      >
                        सीधी भर्ती हेतु जारी विज्ञापन को निरस्त करने की सूचना
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* सदन संबंधी */}
              <div className="col-md-6 d-flex">
                <div className="p-3 border rounded shadow-sm w-100 d-flex flex-column h-100">
                  <h6 className="p-2 text-center text-white rounded bg-secondary">
                    सदन संबंधी
                  </h6>
                  <div className="row flex-grow-1">
                    <div className="col-6">
                      <ul className="mt-2 list-unstyled">
                        <li><Link to="/satradhisuchna" className="text-dark text-decoration-none">सत्र अधिसूचना</Link></li>
                        <li><Link to="/patrakbhag-02" className="text-dark text-decoration-none">पत्रक भाग-दो</Link></li>
                        <li><a href="/misc/sittingdetail.pdf" className="text-dark text-decoration-none">सत्रों की बैठकों का विवरण</a></li>
                        <li><Link to="/abhibhashan" className="text-dark text-decoration-none">राज्यपाल का अभिभाषण</Link></li>
                        <li><Link to="/budgetprastuti" className="text-dark text-decoration-none">बजट प्रस्तुति</Link></li>
                        <li><Link to="/committees1" className="text-dark text-decoration-none">विधानसभा समिति</Link></li>
                        <li><Link to="/dainik" className="text-dark text-decoration-none">दैनिक कार्यसूची</Link></li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="mt-2 list-unstyled">
                        <li><Link to="/proceedings" className="text-dark text-decoration-none">कार्यवाही</Link></li>
                        <li><Link to="/sankshiptkaryavivran" className="text-dark text-decoration-none">संक्षिप्त कार्य विवरण</Link></li>
                        <li><Link to="/vidhyan" className="text-dark text-decoration-none">विधायन</Link></li>
                        <li><Link to="/satrsambandhisankshiptjankari" className="text-dark text-decoration-none">सत्र संबंधी संक्षिप्त जानकारी</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* सदस्यगण */}
              <div className="col-md-6 d-flex">
                <div className="p-3 border rounded shadow-sm w-100 d-flex flex-column h-100">
                  <h6 className="p-2 text-center text-white rounded bg-warning">
                    सदस्यगण
                  </h6>
                  <div className="row flex-grow-1">
                    <div className="col-6">
                      <ul className="mt-2 list-unstyled">
                        <li><Link to="/sadasyaganvartman" className="text-dark text-decoration-none">वर्तमान</Link></li>
                        <li><a href="/misc/AllMember16vs.pdf" className="text-dark text-decoration-none">क्षेत्रवार</a></li>
                        <li><a href="/misc/Women16vs.pdf" className="text-dark text-decoration-none">महिला सदस्य</a></li>
                        <li><a href="/misc/firsttimer16vs.pdf" className="text-dark text-decoration-none">प्रथम बार निर्वाचित सदस्य</a></li>
                        <li><Link to="/sadasyaganpanchdash" className="text-dark text-decoration-none">पंचदश विधान सभा</Link></li>
                        <li><Link to="/sadasyaganchaturthdas" className="text-dark text-decoration-none">चतुर्दश विधान सभा</Link></li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="mt-2 list-unstyled">
                        <li><Link to="/sadasyagantrayodash" className="text-dark text-decoration-none">त्रयोदश विधान सभा</Link></li>
                        <li><Link to="/sadasyagandwadash" className="text-dark text-decoration-none">द्वादश विधान सभा</Link></li>
                        <li><Link to="/sadasyaganekadash" className="text-dark text-decoration-none">एकादश विधान सभा</Link></li>
                        <li><a href="/misc/nominated.pdf" className="text-dark text-decoration-none">राज्य सभा सदस्य</a></li>
                        <li><Link to="/members/lok-sabha" className="text-dark text-decoration-none">लोक सभा सदस्य</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* प्रमुख सचिव */}
              <div className="col-md-6 d-flex">
                <div className="shadow-sm card leader-card w-100 d-flex flex-column h-100">
                  <div className="p-2 text-center text-white card-header bg-secondary">
                    <h6 className="mb-0">विधान सभा</h6>
                  </div>
                  <div className="p-3 bg-white card-body d-flex align-items-center flex-column flex-md-row flex-grow-1">
                    <Link to="/home" className="text-decoration-none">
                      <div className="mb-3 text-center mb-md-0 me-md-3">
                        <img
                          src="/leaders/Arvind_Sharma.png"
                          alt="श्री अरविन्द शर्मा"
                          className="mb-2 leader-photo"
                          style={{
                            width: "120px",
                            height: "160px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                    </Link>
                    <div>
                      <Link to="/home" className="text-decoration-none">
                        <p className="fw-bold small text-dark">श्री अरविन्द शर्मा</p>
                        <p className="fw-bold small text-dark">प्रमुख सचिव</p>
                      </Link>

                      <p className="text-dark">
                        {showMore
                          ? "1 नवम्‍बर, 1956 को मध्‍यप्रदेश बनने के बाद मध्‍यप्रदेश विधानसभा का अपने वर्तमान रूप में पुनर्गठन हुआ. इस पुनर्गठन में विन्‍ध्‍यप्रदेश, मध्‍यभारत, महाकौशल और भोपाल राज्‍य की.... पूरा विवरण पढ़ें।"
                          : "1 नवम्‍बर, 1956 को मध्‍यप्रदेश बनने के बाद मध्‍यप्रदेश विधानसभा का अपने वर्तमान रूप में पुनर्गठन हुआ. इस पुनर्गठन में विन्‍ध्‍यप्रदेश, मध्‍यभारत, महाकौशल और भोपाल राज्‍य की...."}
                      </p>
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => navigate("/history")}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-lg-2">
            {leaders.slice(2).map((leader, idx) => (
              <Link
                to={leader.link}
                key={idx}
                className="text-decoration-none text-dark"
              >
                <div
                  className="mx-auto mb-4 shadow-sm card leader-card"
                  style={{ maxWidth: "220px" }}
                >
                  <div className="p-2 text-center text-white card-header bg-primary">
                    <h6 className="mb-0">{leader.role}</h6>
                  </div>
                  <div className="p-2 text-center bg-white card-body">
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="mb-2 leader-photo"
                    />
                    <p className="fw-bold small text-dark">{leader.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx="true">{`
        .leader-card {
          border: 1px solid #dcdcdc;
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .leader-card:hover {
          transform: scale(1.03);
        }
        .leader-photo {
          width: 150px;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
          background-color: #fff;
          padding: 5px;
          margin: 0 auto;
          display: block;
        }
        @media (max-width: 991.98px) {
          .leader-photo {
            width: 120px;
            height: 160px;
          }
        }
        @media (max-width: 767.98px) {
          .leader-photo {
            width: 100px;
            height: 130px;
          }
          .card-body p {
            font-size: 0.8rem;
          }
          .btn {
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default MPFooter;
