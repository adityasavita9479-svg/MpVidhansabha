// File: src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Compatible with both React 18 & 19
import App from "./App.jsx";
import "./index.css";

// ✅ Import Bootstrap (CSS + JS)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Font Awesome setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ✅ Import only used icons (to keep bundle small)
import {
  faHome,
  faUser,
  faEnvelope,
  faDownload,
  faFilePdf,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// ✅ Add icons to library (tree-shakable)
library.add(
  faHome,
  faUser,
  faEnvelope,
  faDownload,
  faFilePdf,
  faChevronDown,
  faChevronUp,
  faTwitter,
  faFacebook,
  faInstagram
);

// ✅ Render App (React 18+)
const rootElement = document.getElementById("root");

// Prevent double rendering (optional in production)
if (!rootElement._reactRootContainer) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// ✅ Export FontAwesomeIcon for use globally
export { FontAwesomeIcon };
