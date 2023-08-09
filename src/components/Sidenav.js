import React, { useState } from "react";
import "../styles/css/Sidenav.css";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [showPopUp, setShowPopUp] = useState({ logout: false, addnote: false });

  return (
    <>
      <sidenav>
        <div className="header">
          <button
            className="button"
            onMouseOver={() => setShowPopUp({ logout: true })}
            onMouseOut={() => setShowPopUp({ logout: false })}
          >
            <i class="fa-solid fa-right-from-bracket"></i>
            {showPopUp.logout && <span className="popup">Logout</span>}
          </button>
          <div className="center-container">
            <p className="heading">All Notes</p>
          </div>
          <div className="right-container">
            <Link to="/addnote">
              <button
                className="button"
                onMouseOver={() => setShowPopUp({ addnote: true })}
                onMouseOut={() => setShowPopUp({ addnote: false })}
              >
                <i class="fa-solid fa-plus"></i>
                {showPopUp.addnote && <span className="popup">Add Note</span>}
              </button>
            </Link>
          </div>
        </div>
        <div className="notes">
            Notes here
        </div>
      </sidenav>
    </>
  );
};

export default Sidenav;
