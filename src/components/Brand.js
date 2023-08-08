import React from "react";
import { Link } from "react-router-dom";
import noteImage from "../styles/img/note.png";
import "../styles/css/Brand.css";

const Brand = () => {
  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <img src={noteImage} alt="iNotebook Logo" />
        </div>
        <div className="brand">
          <h2 className="brand-title">iNotebook</h2>
        </div>
      </Link>
    </nav>
  );
};

export default Brand;
