import React, { useState, useEffect } from "react";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <footer
      className={`comm-footer ${darkMode ? "footer-dark" : "footer-light"}`}
    >
      {/* 🌗 Button placed at EXTREME LEFT */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="footer-theme-btn"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Center footer text */}
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} मध्यप्रदेश विधानसभा सचिवालय
      </p>
    </footer>
  );
};

export default Footer;
