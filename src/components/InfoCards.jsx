// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import governor01 from '../assets/leaders/governor_01.jpg';
// import mlyadavcm from '../assets/leaders/mlyadavcm.jpg';
// import nstomarspkr from '../assets/leaders/nstomarspkr.jpg';
// import umangsingharlo from '../assets/leaders/umangsingharlo.jpg';


 

// const MPFooter = () => {
//   const [showMore, setShowMore] = useState(false);

//   const leaders = [
//   { img: governor01, role: 'माननीय राज्यपाल', name: 'श्री मंगुभाई पटेल' },
//   { img: mlyadavcm, role: 'माननीय मुख्यमंत्री', name: 'डॉ. मोहन यादव' },
//   { img: nstomarspkr, role: 'माननीय अध्यक्ष', name: 'श्री नरेन्द्र सिंह तोमर' },
//   { img: umangsingharlo, role: 'माननीय नेता प्रतिपक्ष', name: 'श्री उमंग सिंघार' },
// ];

//   return (
//     <footer style={{ backgroundColor: '#f2f2f2', padding: '20px 0', borderTop: '2px solid #007bff' }}>
//       <div className="container-fluid">
//         <div className="row g-4">

//           {/* Left Column */}
//           <div className="col-12 col-lg-2">
//             {leaders.slice(0, 2).map((leader, idx) => (
//               <div key={idx} className="mx-auto mb-4 shadow-sm card leader-card" style={{ maxWidth: '220px' }}>
//                 <div className="p-2 text-center text-white card-header bg-primary">
//                   <h6 className="mb-0">{leader.role}</h6>
//                 </div>
//                 <div className="p-2 text-center bg-white card-body">
//                   <img src={leader.img} alt={leader.name} className="mb-2 leader-photo" />
//                   <p className="fw-bold small text-dark">{leader.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Center Column */}
//           <div className="col-12 col-lg-8">
//             <div className="row g-4">

//               {/* सूचना पटल */}
//               <div className="col-md-6 d-flex">
//                 <div className="p-3 border rounded shadow-sm w-100 d-flex flex-column h-100">
//                   <h6 className="p-2 text-center text-white rounded bg-warning">सूचना पटल</h6>
//                   <ul className="mt-3 list-unstyled flex-grow-1">
//                     <li><a href="#" className="text-dark text-decoration-none">समितियों की आगामी बैठक जुलाई, 2024 सत्र की स्‍थगित बैठकों के प्रश्‍नोत्‍तरों का प्रदाय</a></li>
//                     <li><a href="#" className="text-dark text-decoration-none">विधानसभा समितियाँ</a></li>
//                     <li><a href="#" className="text-dark text-decoration-none">दैनिक कार्य सूची <span className="badge bg-success">प्रश्नोत्तर सूची / कार्यवाही</span></a></li>
//                     <li><a href="#" className="text-dark text-decoration-none">सीधी भर्ती हेतु जारी विज्ञापन को निरस्त करने की सूचना</a></li>
//                     <li><a href="#" className="text-dark text-decoration-none">ईमेल हेतु कवच</a></li>
//                   </ul>
//                 </div>
//               </div>

//               {/* सदन संबंधी */}
//               <div className="col-md-6 d-flex">
//                 <div className="p-3 border rounded shadow-sm w-100 d-flex flex-column h-100">
//                   <h6 className="p-2 text-center text-white rounded bg-secondary">सदन संबंधी</h6>
//                   <div className="row flex-grow-1">
//                     <div className="col-6">
//                       <ul className="mt-2 list-unstyled">
//                         <li><a href="#" className="text-dark text-decoration-none">सत्र अधिसूचना</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">पत्रक भाग-दो</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">सत्रों की बैठकों का विवरण</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">राज्यपाल का अभिभाषण</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">बजट प्रस्तुति</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">विधानसभा समिति</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">दैनिक कार्यसूची</a></li>
//                       </ul>
//                     </div>
//                     <div className="col-6">
//                       <ul className="mt-2 list-unstyled">
//                         <li><a href="#" className="text-dark text-decoration-none">कार्यवाही</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">संक्षिप्त कार्य विवरण</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">विधायन</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">सत्र संबंधी संक्षिप्त जानकारी</a></li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* सदस्यगण */}
//               <div className="col-md-6 d-flex">
//                 <div className="p-3 border rounded shadow-sm w-100 d-flex flex-column h-100">
//                   <h6 className="p-2 text-center text-white rounded bg-warning">सदस्यगण</h6>
//                   <div className="row flex-grow-1">
//                     <div className="col-6">
//                       <ul className="mt-2 list-unstyled">
//                         <li><a href="#" className="text-dark text-decoration-none">वर्तमान</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">क्षेत्रवार</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">महिला सदस्य</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">प्रथम बार निर्वाचित सदस्य</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">पंचदश विधान सभा</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">चतुर्दश विधान सभा</a></li>
//                       </ul>
//                     </div>
//                     <div className="col-6">
//                       <ul className="mt-2 list-unstyled">
//                         <li><a href="#" className="text-dark text-decoration-none">त्रयोदश विधान सभा</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">द्वादश विधान सभा</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">एकादश विधान सभा</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">राज्य सभा सदस्य</a></li>
//                         <li><a href="#" className="text-dark text-decoration-none">लोक सभा सदस्य</a></li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* प्रमुख सचिव */}
//               <div className="col-md-6 d-flex">
//                 <div className="shadow-sm card leader-card w-100 d-flex flex-column h-100">
//                   <div className="p-2 text-center text-white card-header bg-secondary">
//                     <h6 className="mb-0">विधान सभा</h6>
//                   </div>
//                   <div className="p-3 bg-white card-body d-flex align-items-center flex-column flex-md-row flex-grow-1">
//                     <Link to="/bio/ap-singh" className="text-decoration-none">
//                       <div className="mb-3 text-center mb-md-0 me-md-3">
//                         <img
//                           src="/src/assets/leaders/ps.jpg"
//                           alt="श्री अवधेश प्रताप सिंह"
//                           className="mb-2 leader-photo"
//                           style={{ width: '120px', height: '160px', objectFit: 'cover', borderRadius: '10px' }}
//                         />
//                       </div>
//                     </Link>
//                     <div>
//                       <Link to="/bio/ap-singh" className="text-decoration-none">
//                         <p className="fw-bold small text-dark">श्री अवधेश प्रताप सिंह</p>
//                         <p className="fw-bold small text-dark">प्रमुख सचिव</p>
//                       </Link>
//                       <p className="text-dark">
//                         {showMore
//                           ? '1 नवम्‍बर, 1956 को मध्‍यप्रदेश बनने के बाद मध्‍यप्रदेश विधानसभा का अपने वर्तमान रूप में पुनर्गठन हुआ. इस पुनर्गठन में विन्‍ध्‍यप्रदेश, मध्‍यभारत, महाकौशल और भोपाल राज्‍य की....'
//                           : '1 नवम्‍बर, 1956 को मध्‍यप्रदेश बनने के बाद मध्‍यप्रदेश विधानसभा का अपने वर्तमान रूप में पुनर्गठन हुआ. इस पुनर्गठन में विन्‍ध्‍यप्रदेश, मध्‍यभारत, महाकौशल और भोपाल राज्‍य की....'}
//                       </p>
//                       <a href="/history" className="btn btn-sm btn-outline-primary">Read More</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="col-12 col-lg-2">
//             {leaders.slice(2).map((leader, idx) => (
//               <div key={idx} className="mx-auto mb-4 shadow-sm card leader-card" style={{ maxWidth: '220px' }}>
//                 <div className="p-2 text-center text-white card-header bg-primary">
//                   <h6 className="mb-0">{leader.role}</h6>
//                 </div>
//                 <div className="p-2 text-center bg-white card-body">
//                   <img src={leader.img} alt={leader.name} className="mb-2 leader-photo" />
//                   <p className="fw-bold small text-dark">{leader.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* Styles */}
//       <style jsx="true">{`
//         .leader-card {
//           border: 1px solid #dcdcdc;
//           border-radius: 10px;
//           overflow: hidden;
//         }

//         .leader-photo {
//           width: 150px;
//           height: 200px;
//           object-fit: cover;
//           border-radius: 10px;
//           background-color: #fff;
//           padding: 5px;
//           margin: 0 auto;
//           display: block;
//         }

//         @media (max-width: 991.98px) {
//           .leader-photo {
//             width: 120px;
//             height: 160px;
//           }
//         }

//         @media (max-width: 767.98px) {
//           .leader-photo {
//             width: 100px;
//             height: 130px;
//           }

//           .card-body p {
//             font-size: 0.8rem;
//           }

//           .btn {
//             font-size: 0.75rem;
//             padding: 0.25rem 0.5rem;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default MPFooter;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MPFooter = () => {
  const [showMore, setShowMore] = useState(false);

  const leaders = [
    { img: "/leaders/governor_01.jpg", role: 'माननीय राज्यपाल', name: 'श्री मंगुभाई पटेल' },
    { img: "/leaders/mlyadavcm.jpg", role: 'माननीय मुख्यमंत्री', name: 'डॉ. मोहन यादव' },
    { img: "/leaders/nstomarspkr.jpg", role: 'माननीय अध्यक्ष', name: 'श्री नरेन्द्र सिंह तोमर' },
    { img: "/leaders/umangsingharlo.jpg", role: 'माननीय नेता प्रतिपक्ष', name: 'श्री उमंग सिंघार' },
  ];

  return (
    <footer style={{ backgroundColor: '#f2f2f2', padding: '20px 0', borderTop: '2px solid #007bff' }}>
      <div className="container-fluid">
        <div className="row g-4">

          {/* Left Column */}
          <div className="col-12 col-lg-2">
            {leaders.slice(0, 2).map((leader, idx) => (
              <div key={idx} className="mx-auto mb-4 shadow-sm card leader-card" style={{ maxWidth: '220px' }}>
                <div className="p-2 text-center text-white card-header bg-primary">
                  <h6 className="mb-0">{leader.role}</h6>
                </div>
                <div className="p-2 text-center bg-white card-body">
                  <img src={leader.img} alt={leader.name} className="mb-2 leader-photo" />
                  <p className="fw-bold small text-dark">{leader.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column */}
          <div className="col-12 col-lg-8">
            <div className="row g-4">

              {/* सूचना पटल */}
              <div className="col-md-6 d-flex">
                <div className="p-3 border rounded shadow-sm w-100 d-flex flex-column h-100">
                  <h6 className="p-2 text-center text-white rounded bg-warning">सूचना पटल</h6>
                  <ul className="mt-3 list-unstyled flex-grow-1">
                    <li><a href="#" className="text-dark text-decoration-none">समितियों की आगामी बैठक जुलाई, 2024 सत्र की स्‍थगित बैठकों के प्रश्‍नोत्‍तरों का प्रदाय</a></li>
                    <li><a href="#" className="text-dark text-decoration-none">विधानसभा समितियाँ</a></li>
                    <li><a href="#" className="text-dark text-decoration-none">दैनिक कार्य सूची <span className="badge bg-success">प्रश्नोत्तर सूची / कार्यवाही</span></a></li>
                    <li><a href="#" className="text-dark text-decoration-none">सीधी भर्ती हेतु जारी विज्ञापन को निरस्त करने की सूचना</a></li>
                    <li><a href="#" className="text-dark text-decoration-none">ईमेल हेतु कवच</a></li>
                  </ul>
                </div>
              </div>

              {/* सदन संबंधी */}
              <div className="col-md-6 d-flex">
                <div className="p-3 border rounded shadow-sm w-100 d-flex flex-column h-100">
                  <h6 className="p-2 text-center text-white rounded bg-secondary">सदन संबंधी</h6>
                  <div className="row flex-grow-1">
                    <div className="col-6">
                      <ul className="mt-2 list-unstyled">
                        <li><a href="#" className="text-dark text-decoration-none">सत्र अधिसूचना</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">पत्रक भाग-दो</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">सत्रों की बैठकों का विवरण</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">राज्यपाल का अभिभाषण</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">बजट प्रस्तुति</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">विधानसभा समिति</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">दैनिक कार्यसूची</a></li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="mt-2 list-unstyled">
                        <li><a href="#" className="text-dark text-decoration-none">कार्यवाही</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">संक्षिप्त कार्य विवरण</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">विधायन</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">सत्र संबंधी संक्षिप्त जानकारी</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* सदस्यगण */}
              <div className="col-md-6 d-flex">
                <div className="p-3 border rounded shadow-sm w-100 d-flex flex-column h-100">
                  <h6 className="p-2 text-center text-white rounded bg-warning">सदस्यगण</h6>
                  <div className="row flex-grow-1">
                    <div className="col-6">
                      <ul className="mt-2 list-unstyled">
                        <li><a href="#" className="text-dark text-decoration-none">वर्तमान</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">क्षेत्रवार</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">महिला सदस्य</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">प्रथम बार निर्वाचित सदस्य</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">पंचदश विधान सभा</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">चतुर्दश विधान सभा</a></li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="mt-2 list-unstyled">
                        <li><a href="#" className="text-dark text-decoration-none">त्रयोदश विधान सभा</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">द्वादश विधान सभा</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">एकादश विधान सभा</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">राज्य सभा सदस्य</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">लोक सभा सदस्य</a></li>
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
                    <Link to="/bio/ap-singh" className="text-decoration-none">
                      <div className="mb-3 text-center mb-md-0 me-md-3">
                        <img
                          src="/leaders/ps.jpg"
                          alt="श्री अवधेश प्रताप सिंह"
                          className="mb-2 leader-photo"
                          style={{ width: '120px', height: '160px', objectFit: 'cover', borderRadius: '10px' }}
                        />
                      </div>
                    </Link>
                    <div>
                      <Link to="/bio/ap-singh" className="text-decoration-none">
                        <p className="fw-bold small text-dark">श्री अवधेश प्रताप सिंह</p>
                        <p className="fw-bold small text-dark">प्रमुख सचिव</p>
                      </Link>
                      <p className="text-dark">
                        {showMore
                          ? '1 नवम्‍बर, 1956 को मध्‍यप्रदेश बनने के बाद मध्‍यप्रदेश विधानसभा का अपने वर्तमान रूप में पुनर्गठन हुआ. इस पुनर्गठन में विन्‍ध्‍यप्रदेश, मध्‍यभारत, महाकौशल और भोपाल राज्‍य की.... पूरा विवरण पढ़ें।'
                          : '1 नवम्‍बर, 1956 को मध्‍यप्रदेश बनने के बाद मध्‍यप्रदेश विधानसभा का अपने वर्तमान रूप में पुनर्गठन हुआ. इस पुनर्गठन में विन्‍ध्‍यप्रदेश, मध्‍यभारत, महाकौशल और भोपाल राज्‍य की....'}
                      </p>
                      <button className="btn btn-sm btn-outline-primary" onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Read Less" : "Read More"}
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
              <div key={idx} className="mx-auto mb-4 shadow-sm card leader-card" style={{ maxWidth: '220px' }}>
                <div className="p-2 text-center text-white card-header bg-primary">
                  <h6 className="mb-0">{leader.role}</h6>
                </div>
                <div className="p-2 text-center bg-white card-body">
                  <img src={leader.img} alt={leader.name} className="mb-2 leader-photo" />
                  <p className="fw-bold small text-dark">{leader.name}</p>
                </div>
              </div>
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

