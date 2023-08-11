import React from "react";
import { Link } from "react-router-dom";
import "../styles/css/HomePageText.css";

const HomePageText = () => {
  return (
    <div className="container-home">
      <div className="heading">
        <h1 className="heading-text">The simplest way to keep notes</h1>
      </div>
      <div className="slogan">
        <p className="slogan-text">All your notes, synced securely!</p>
      </div>
      <div className="buttons">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePageText;
