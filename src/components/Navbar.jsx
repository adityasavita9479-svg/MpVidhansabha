// 
import React, { useEffect, useState } from 'react'; // ⬅️ Added useState
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" // ⬅️ Remember theme
  );

  // Apply theme to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const menuItems = [
    {
      title: 'राज्यपाल',
      options: [
        { name: 'वर्तमान', path: '/gov' },
        { name: 'भूतपूर्व ', path: '/govlst' },
      ],
    },
    {
      title: 'अध्यक्ष',
      options: [
        { name: 'वर्तमान', path: '/nst' },
        { name: 'भूतपूर्व ', path: '/spklist' },
      ],
    },
    {
      title: 'उपाध्यक्ष',
      options: [
        { name: 'वर्तमान ', path: '#' },
        { name: 'भूतपूर्व ', path: '/uplist' },
      ],
    },
    {
      title: 'नेता प्रतिपक्ष',
      options: [
        { name: 'वर्तमान ', path: '/umg' },
        { name: 'भूतपूर्व ', path: '#' },
      ],
    },
    {
      title: 'मुख्यमंत्री',
      options: [
        { name: 'वर्तमान ', path: '/cm' },
        { name: 'भूतपूर्व ', path: '/cmlist' },
      ],
    },
    {
      title: 'मंत्रिमण्डल',
      options: [
        { name: 'मंत्रिमण्डल', path: '#' },
        { name: 'मंत्रिमण्डल (पंचदश विधान सभा)', path: '#' },
        { name: 'मंत्रिमण्डल (चतुर्दश..विधान सभा)', path: '#' },
        { name: 'संपत्ति विवरण [चतुर्दश विधान सभा]', path: '#' },
        { name: 'संपत्ति विवरण [ARCHIVE]', path: '#' },
      ],
    },
    {
      title: 'सचिवालय',
      options: [
        { name: 'विधान सभा सचिवालय', path: '#' },
        { name: 'सचिव / प्रमुख सचिव', path: '#' },
        { name: 'विधान सभा भवन', path: '#' },
        { name: 'सूचना का अधिकार (राजपत्र)', path: '#' },
        { name: 'सूचना का अधिकार (मैन्युअल)', path: '#' },
        { name: 'पुरस्कार योजना', path: '#' },
        { name: 'पीठासीन अधिकारी सम्मेलन', path: '#' },
        { name: 'संपत्ति विवरण', path: '#' },
        { name: 'विधानसभा पुस्तकालय', path: '#' },
        { name: 'तथ्य पत्रक : पेयजल', path: '#' },
        { name: 'सचिवालय प्रकाशन', path: '#' },
        { name: 'प्रेस विज्ञप्ति', path: '#' },
      ],
    },
    {
      title: 'सदस्यगण',
      options: [
        { name: 'वर्तमान', path: '#' },
        { name: 'पंचदश विधान सभा', path: '#' },
        { name: 'चतुर्दश विधान सभा', path: '#' },
        { name: 'त्रयोदश विधान सभा', path: '#' },
        { name: 'द्वादश विधान सभा', path: '#' },
        { name: 'एकादश विधान सभा', path: '#' },
        { name: 'नामनिर्दिष्ट सदस्य', path: '#' },
        { name: 'राज्य सभा सदस्य', path: '#' },
        { name: 'लोक सभा सदस्य', path: '#' },
      ],
    },
    {
      title: 'सुविधाएं',
      options: [
        { name: 'अध्यक्ष / उपाध्यक्ष', path: '#' },
        { name: 'नेता प्रतिपक्ष', path: '#' },
        { name: 'मंत्री', path: '#' },
        { name: 'विधायक', path: '#' },
        { name: 'भूतपूर्व विधायक', path: '#' },
      ],
    },
    {
      title: 'सदन संबंधी',
      options: [
        { name: 'सत्र अधिसूचना', path: '#' },
        { name: 'दैनिक कार्यसूची', path: '#' },
        { name: 'विधायन', path: '#' },
        { name: 'विधानसभा कार्यवाही', path: '#' },
        { name: 'संक्षिप्त कार्य विवरण', path: '#' },
        { name: 'सत्र संबंधी संक्षिप्त जानकारी', path: '#' },
        { name: 'पत्रक भाग-दो', path: '#' },
        { name: 'सत्रों की बैठकों का विवरण', path: '#' },
        { name: 'राज्यपाल का अभिभाषण', path: '#' },
        { name: 'बजट प्रस्तुति', path: '#' },
        { name: 'विधानसभा समिति', path: '#' },
        { name: 'राष्ट्रपति शासन', path: '#' },
        { name: 'अविश्वास प्रस्ताव', path: '#' },
        { name: 'स्वर्णिम मध्य प्रदेश के निर्माण का संकल्प', path: '#' },
      ],
    },
    {
      title: 'नियम',
      options: [
        { name: 'सदस्यों द्वारा पालनीय नियम', path: '#' },
        { name: 'प्रवेश पत्र नियम', path: '#' },
        { name: 'सभा में कार्य का क्रम', path: '#' },
        { name: 'प्रश्नों की ग्राह्यता के नियम', path: '#' },
        { name: 'पुस्तक क्रय नीति', path: '#' },
        { name: 'सचिवालय के प्रशासनिक आदेश', path: '#' },
      ],
    },
    {
      title: 'प्रेस विज्ञप्ति',
      options: [],
      path: '/pressrelease',
    },
    {
      title: 'छायाचित्र',
      options: [],
      path: '/gallery',
    },
    {
      title: 'मुख पृष्ठ',
      options: [],
      path: '/home',
    },
  ];

  useEffect(() => {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('mouseenter', function () {
        const toggle = this.querySelector('.dropdown-toggle');
        const menu = this.querySelector('.dropdown-menu');
        toggle.classList.add('show');
        menu.classList.add('show');
      });
      dropdown.addEventListener('mouseleave', function () {
        const toggle = this.querySelector('.dropdown-toggle');
        const menu = this.querySelector('.dropdown-menu');
        toggle.classList.remove('show');
        menu.classList.remove('show');
      });
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener('mouseenter', () => {});
        dropdown.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-#fffff" style={{ borderBottom: '1px solid #ccc' }}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/home">
          <img src="/misc/MPVS_LOGO.jpg" alt="Logo" style={{ height: "50px" }} />


        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="mx-auto mb-2 navbar-nav mb-lg-0">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${item.options && item.options.length > 0 ? 'dropdown' : ''}`}
              >
                {item.options && item.options.length > 0 ? (
                  <>
                    <a
                      className="nav-link dropdown-toggle text-dark fw-bold"
                      href="#"
                      id={`navbarDropdown${index}`}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ fontSize: '15px', padding: '8px 12px' }}
                    >
                      {item.title}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby={`navbarDropdown${index}`}>
                      {item.options.map((opt, optIndex) => (
                        <li key={optIndex}>
                          <Link className="dropdown-item" to={opt.path}>{opt.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    className="nav-link text-dark fw-bold"
                    to={item.path}
                    style={{ fontSize: '15px', padding: '8px 12px' }}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right-end Button + Dark Mode Toggle */}
          <div className="gap-2 d-flex align-items-center">
            <Link to="vidhansabha-tour23" className="btn tour-btn">
              विधानसभा भ्रमण
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)} // ⬅️ Toggle theme
              className="btn btn-outline-secondary"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
