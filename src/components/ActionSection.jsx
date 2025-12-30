import React from "react";
import { Link } from "react-router-dom";

export default function ActionSection() {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "5px 0",        // 👈 very little top-bottom gap
        padding: "5px 0",       // 👈 reduced white space inside section
      }}
    >
      <Link
        to="/seventh/7"
        style={{
          display: "inline-block",
          padding: "6px 18px",   // 👈 compact button
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
          fontSize: "15px",
          fontWeight: "500",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0069d9")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        सत्र अधिसूचना
      </Link>
    </div>
  );
}
