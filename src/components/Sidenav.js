import React, { useState } from "react";
import "../styles/css/Sidenav.css";
import { Link } from "react-router-dom";
import Notes from "./Notes";

const Sidenav = () => {
  const [showPopUp, setShowPopUp] = useState({ logout: false, addnote: false });

  return (
    <>
      <div className="sidenav">
        <div className="header">
          <button
            className="button"
            onMouseOver={() => setShowPopUp({ logout: true })}
            onMouseOut={() => setShowPopUp({ logout: false })}
          >
            <i className="fa-solid fa-right-from-bracket"></i>
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
                <i className="fa-solid fa-plus"></i>
                {showPopUp.addnote && <span className="popup">Add Note</span>}
              </button>
            </Link>
          </div>
        </div>
        <div className="notes">
            <Notes />
        </div>
      </div>
    </>
  );
};

export default Sidenav;
