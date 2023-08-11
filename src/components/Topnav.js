import React, { useState } from "react";
import "../styles/css/Topnav.css";

const Topnav = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleToggleMenu = () => {
    // TODO: Toggle sidemenu when user clicks on it
  }

  return (
    <header>
      <nav className="top-nav">
        <button
          className="button button-menu"
          onMouseOver={() => setShowPopUp(true)}
          onMouseOut={() => setShowPopUp(false)}
          onClick={handleToggleMenu}
        >
          <i className="fa-solid fa-bars"></i>
          {showPopUp && <span className="popup">Toggle Menu</span>}
        </button>
      </nav>
    </header>
  );
};

export default Topnav;
