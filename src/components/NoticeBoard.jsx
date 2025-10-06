// import React from 'react';

// const NoticeBoard = () => {
//   return (
//     <footer className="pt-3 text-center bg-light border-top">
//       <div className="container">
//         <div className="flex-wrap gap-2 mb-3 d-flex justify-content-center">
//           <a href="https://mpvidhansabha.nic.in/evidhan.pdf">
//             <button className="btn btn-outline-primary btn-sm">MLA Login</button>
//           </a>
//           <button className="btn btn-outline-primary btn-sm">प्रक्रियाओं संबंधी प्रपत्र    </button>
//           <a href="https://www.neva.gov.in/Home/NeVA" target="_blank" rel="noopener noreferrer">
//             <button className="btn btn-outline-primary btn-sm">प्रश्‍नों के पूर्ण उत्‍तर</button>
//           </a>
//           <a href="https://www.sandes.gov.in/" target="_blank" rel="noopener noreferrer">
//             <button className="btn btn-outline-primary btn-sm">विधायन</button>
//           </a>
//           <a href="https://email.gov.in/" target="_blank" rel="noopener noreferrer">
//             <button className="btn btn-outline-primary btn-sm">लंबित आश्वासन</button>
//           </a>
//           <a href="/gallery">
//             <button className="btn btn-outline-primary btn-sm"> स्वेच्छानुदान</button>
//           </a>
//           <a href="/press-release">
//             <button className="btn btn-outline-primary btn-sm"> विधान सभा समितियाँ</button>
//           </a>
//           <a href="/agenda">
//             <button className="btn btn-outline-primary btn-sm">निविदा</button>
//           </a>
//           <a href="/questions">
//             <button className="btn btn-outline-primary btn-sm">IFMIS</button>
//           </a>
//           <a href="/full-answers">
//             <button className="btn btn-outline-primary btn-sm">NeVA</button>
//           </a>
//           <a href="/legislation">
//             <button className="btn btn-outline-primary btn-sm">@gov.in</button>
//           </a>
//           <a href="/pending-assurances">
//             <button className="btn btn-outline-primary btn-sm">छायाचित्र</button>
//           </a>
//           <a href="/committees">
//             <button className="btn btn-outline-primary btn-sm">कार्यसूची</button>
//           </a>
//           <a href="/brief-reports">
//             <button className="btn btn-outline-primary btn-sm">प्रश्नोत्तर सूची / कार्यवाही</button>
//           </a>
//           <a href="/grants">
//             <button className="btn btn-outline-primary btn-sm"> संक्षिप्त कार्य विवरण</button>
//           </a>
//           <a href="/tenders">
//             <button className="btn btn-outline-primary btn-sm">निविदा</button>
//           </a>
//           <a href="https://ifmis.mp.gov.in" target="_blank" rel="noopener noreferrer">
//             <button className="btn btn-outline-primary btn-sm">IFMIS</button>
//           </a>
//         </div>


//         <div className="flex-wrap gap-3 mb-2 d-flex justify-content-center">
//           <a href="https://sansad.in/ls" target="_blank" rel="noopener noreferrer">
//             <img src="src/assets/misc/loksabah-logo.jpg" alt="Loksabha" height="30" />
//           </a>
//           <a href="https://sansad.in/rs" target="_blank" rel="noopener noreferrer">
//             <img src="src/assets/misc/rajyasabha.png" alt="Rajyasabha" height="30" />
//           </a>
//           <a href="https://www.sci.gov.in/" target="_blank" rel="noopener noreferrer">
//             <img src="src/assets/misc/SCI.png" alt="Supreme Court of India" height="30" />
//           </a>
//           <a href="https://mphc.gov.in" target="_blank" rel="noopener noreferrer">
//             <img src="src/assets/misc/HCI.png" alt="High Court" height="30" />
//           </a>
//           <a href="https://sansad.in/poi/state-legislatures" target="_blank" rel="noopener noreferrer">
//             <img src="src/assets/misc/legisbody.png" alt="Legislative Body" height="30" />
//           </a>
//           <a href="https://mp.gov.in/" target="_blank" rel="noopener noreferrer">
//             <img src="src/assets/misc/mpgov.png" alt="MP Government" height="30" />
//           </a>
//           <a href="https://email.gov.in/" target="_blank" rel="noopener noreferrer">
//             <img src="src/assets/misc/nicemail.png" alt="NIC Mail" height="30" />
//           </a>
//         </div>


//         <small className="mb-1 text-muted d-block">
//           Madhya Pradesh Vidhan Sabha Secretariat Gandhi Vidhan Bhavan, Arera Hills, Bhopal (M.P)-462004 Fax: 0755-2440238<br />
//           Email: <a href="mailto:vidhansabhamp.nic.in">vidhansabha@mp.gov.in</a>
//           <br />
//           <div className="mt-2">
//             <a href="https://www.facebook.com/madhyapradesh.vidhansabha?rdid=uAYbmSn8lf6gx2xP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16U9PTQQsd%2F#" target="_blank" rel="noopener noreferrer" className="text-primary me-3">
//               <i className="fab fa-facebook fa-lg"></i>
//             </a>
//             <a href="https://x.com/MPVidhanSabha?s=20" target="_blank" rel="noopener noreferrer" className="text-info me-3">
//               <i className="fab fa-x-twitter"></i>
//             </a>
           
//           </div>
//         </small>

//         <small className="d-block">
//           Website designed and hosted by <strong>National Informatics Centre, Madhya Pradesh State Centre</strong>. Website best viewed in Edge, Chrome, Mozilla Firefox.
//         </small>
//         <small className="mt-2 d-block">
//           <a href="/disclaimer">Disclaimer</a>
//         </small>
//       </div>
//     </footer>
//   );
// };

// export default NoticeBoard;


import React from 'react';

const NoticeBoard = () => {
  return (
    <footer className="pt-3 text-center bg-light border-top">
      <div className="container">
        {/* Buttons Section */}
        <div className="flex-wrap gap-2 mb-3 d-flex justify-content-center">
          <a href="https://mpvidhansabha.nic.in/evidhan.pdf">
            <button className="btn btn-outline-primary btn-sm">MLA Login</button>
          </a>
          <button className="btn btn-outline-primary btn-sm">प्रक्रियाओं संबंधी प्रपत्र</button>
          <a href="https://www.neva.gov.in/Home/NeVA" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline-primary btn-sm">प्रश्‍नों के पूर्ण उत्‍तर</button>
          </a>
          <a href="https://www.sandes.gov.in/" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline-primary btn-sm">विधायन</button>
          </a>
          <a href="https://email.gov.in/" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline-primary btn-sm">लंबित आश्वासन</button>
          </a>
          <a href="/gallery">
            <button className="btn btn-outline-primary btn-sm">स्वेच्छानुदान</button>
          </a>
          <a href="/press-release">
            <button className="btn btn-outline-primary btn-sm">विधान सभा समितियाँ</button>
          </a>
          <a href="/agenda">
            <button className="btn btn-outline-primary btn-sm">निविदा</button>
          </a>
          <a href="/questions">
            <button className="btn btn-outline-primary btn-sm">IFMIS</button>
          </a>
          <a href="/full-answers">
            <button className="btn btn-outline-primary btn-sm">NeVA</button>
          </a>
          <a href="/legislation">
            <button className="btn btn-outline-primary btn-sm">@gov.in</button>
          </a>
          <a href="/pending-assurances">
            <button className="btn btn-outline-primary btn-sm">छायाचित्र</button>
          </a>
          <a href="/committees">
            <button className="btn btn-outline-primary btn-sm">कार्यसूची</button>
          </a>
          <a href="/brief-reports">
            <button className="btn btn-outline-primary btn-sm">प्रश्नोत्तर सूची / कार्यवाही</button>
          </a>
          <a href="/grants">
            <button className="btn btn-outline-primary btn-sm">संक्षिप्त कार्य विवरण</button>
          </a>
          <a href="/tenders">
            <button className="btn btn-outline-primary btn-sm">निविदा</button>
          </a>
          <a href="https://ifmis.mp.gov.in" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline-primary btn-sm">IFMIS</button>
          </a>
        </div>

        {/* Logos Section */}
        <div className="flex-wrap gap-3 mb-2 d-flex justify-content-center">
          <a href="https://sansad.in/ls" target="_blank" rel="noopener noreferrer">
            <img src="/misc/loksabah-logo.jpg" alt="Loksabha" height="30" />
          </a>
          <a href="https://sansad.in/rs" target="_blank" rel="noopener noreferrer">
            <img src="/misc/rajyasabha.png" alt="Rajyasabha" height="30" />
          </a>
          <a href="https://www.sci.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src="/misc/SCI.png" alt="Supreme Court of India" height="30" />
          </a>
          <a href="https://mphc.gov.in" target="_blank" rel="noopener noreferrer">
            <img src="/misc/HCI.png" alt="High Court" height="30" />
          </a>
          <a href="https://sansad.in/poi/state-legislatures" target="_blank" rel="noopener noreferrer">
            <img src="/misc/legisbody.png" alt="Legislative Body" height="30" />
          </a>
          <a href="https://mp.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src="/misc/mpgov.png" alt="MP Government" height="30" />
          </a>
          <a href="https://email.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src="/misc/nicemail.png" alt="NIC Mail" height="30" />
          </a>
        </div>

        {/* Contact Info */}
        <small className="mb-1 text-muted d-block">
          Madhya Pradesh Vidhan Sabha Secretariat Gandhi Vidhan Bhavan, Arera Hills, Bhopal (M.P)-462004 Fax: 0755-2440238<br />
          Email: <a href="mailto:vidhansabhamp.nic.in">vidhansabha@mp.gov.in</a>
          <br />
          <div className="mt-2">
            <a
              href="https://www.facebook.com/madhyapradesh.vidhansabha?rdid=uAYbmSn8lf6gx2xP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16U9PTQQsd%2F#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary me-3"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://x.com/MPVidhanSabha?s=20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info me-3"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </small>

        {/* Footer Info */}
        <small className="d-block">
          Website designed and hosted by <strong>National Informatics Centre, Madhya Pradesh State Centre</strong>. Website best viewed in Edge, Chrome, Mozilla Firefox.
        </small>
        <small className="mt-2 d-block">
          <a href="/disclaimer">Disclaimer</a>
        </small>
      </div>
    </footer>
  );
};

export default NoticeBoard;
