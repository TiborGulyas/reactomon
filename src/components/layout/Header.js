import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1 className="main-title">Pokemon App</h1>
      <Link style={linkStyle} to="/pokemons">
        Pokemons
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/types">
        Types
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
